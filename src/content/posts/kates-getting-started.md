---
title: Kates — what it is, and how to get started
description: Kates load-tests Apache Kafka, crashes its brokers on purpose and measures the cost. What it is, and how to start with it on a laptop.
abstract: |
  You find out how a Kafka cluster handles a broker failure on the day a broker fails, unless you have
  already tried it. Kates turns that rehearsal into a test. It puts load on the cluster, injects a
  fault, measures what the fault cost in throughput, latency and recovery time, and keeps the test
  runs so the next one can be compared with them.

  We install it on a three-zone Kind cluster on a laptop, run a first load test, crash a broker under
  that load, and turn load tests into gates a CI pipeline can fail on. The post is for platform
  engineers, developers, DevOps engineers and SREs who run Kafka on Kubernetes.
pubDate: 2026-10-17
tags: [kafka, kubernetes, testing, chaos]
---

Most teams check a Kafka cluster by hand before trusting it: a run of `kafka-producer-perf-test`, a
Grafana dashboard watched while someone deletes a broker pod, and a judgment call at the end. None of
it is repeatable. The numbers stay in a terminal that has since been closed, nobody wrote down when
the pod went, and a pipeline cannot check "it looked fine".

Kates (Kafka Advanced Testing & Engineering Suite) makes those checks into tests [1, 2]. It is my
open-source project, and this post describes release 1.25.1, published on 16 October 2026.

## What Kates is

Kates has three parts [2]:

- the `kates` CLI, written in Go, which is how you drive everything;
- a backend service, written with Quarkus, that runs the tests and the faults inside the cluster and
  keeps the test runs in PostgreSQL, for 90 days by default (`kates.cleanup.retention-days`);
- the Helm charts that install Kafka and everything around it.

It injects faults through LitmusChaos [3] or straight through the Kubernetes API. Load tests work
against any Kafka the backend can reach. Fault injection targets brokers managed by Strimzi [4], by
default the cluster `krafter` in namespace `kafka`.

What it measures falls into four groups.

- **Performance tests.** Eight core workload types: `LOAD`, `STRESS`, `SPIKE`, `ENDURANCE`,
  `VOLUME`, `CAPACITY`, `ROUND_TRIP` and `INTEGRITY`, plus an `INTEGRATION_CDC` type and
  configuration sweeps with `kates tune run`; `kates test types` lists them all. A report gives
  throughput, latency percentiles and error rate, and exports as CSV, JUnit XML, Markdown, HTML or
  latency heatmaps.
- **Fault injection.** Thirteen disruption types, from broker pod kills and network partitions to
  CPU, memory and I/O stress, DNS errors, disk fill and node drain. Eleven of them work on the default
  install: eight as LitmusChaos experiments, and `POD_DELETE`, `ROLLING_RESTART` and `SCALE_DOWN`
  through the Kubernetes API even there. Network latency and disk fill time out, because the chart
  ships no LitmusChaos experiment for them. The direct Kubernetes provider covers eight.
- **Resilience runs and fault plans.** `kates resilience run` pairs one load test with one fault and
  reports the change it caused, and the recovery time. `kates disruption run` executes multi-step
  plans with blast-radius checks, a dry run, ISR and consumer-lag tracking, and an A–F grade when the
  plan sets SLA thresholds.
- **Security audit.** `kates security audit` grades the brokers' configuration from A to F.
  `kates security compliance` maps the checks to CIS, SOC 2 and PCI DSS, and
  `kates security baseline --save` and `kates security drift` save a baseline and report drift from
  it.

The difference from a generic load tester is that Kates knows it is talking to Kafka. Each test sets
the producer's `acks`, batching, compression and consumer group, so the load looks like your
application's. In a disruption plan, a fault can aim at the leader of a partition while Kates tracks
that topic's in-sync replicas. And unlike `kafka-producer-perf-test`, which prints its numbers and
exits, Kates stores the run, checks it against the targets you gave it and keeps the history for
trends [1].

## How it is built

Kates has no web front end: the CLI is the front end. Figure 1 shows the pieces at release 1.25.1
and how they talk to each other [2].

![Two zones. On your machine, the kates CLI, with its commands, terminal views and MCP server, and contexts in ~/.kates.yaml that hold the API URL and key. From the CLI, a solid arrow labelled REST and SSE with the API key, through kates ports or a NodePort, goes into the Kubernetes cluster to the Kates backend, one Quarkus pod with an API layer (REST, SSE and gRPC on port 8080), orchestrators (tests, resilience, plans, schedules), a load engine (native by default, or trogdor) and a fault engine (litmus-crd by default, kubernetes or hybrid, and noop when the configured one is unavailable). The backend connects to PostgreSQL, which holds runs, reports and schedules, and to Prometheus, which scrapes /q/metrics. It reaches the Kafka cluster krafter, three rack-aware brokers in zones alpha, sigma and gamma, with load producers and consumers, an AdminClient and outbox events. The fault engine goes through the Kubernetes API, to the LitmusChaos operator, or to the brokers for pod deletes, with rolling restarts and scale-downs carried out by Strimzi. A dashed arrow labelled kubectl and helm runs from the CLI straight to the Kubernetes API.](./kates-architecture.svg "The kates CLI on your machine, and the backend, Kafka and LitmusChaos in the cluster.")

The CLI is one Go binary, and its commands take two paths. Most of them, `test`, `report`,
`disruption`, `security` and the rest, call the Kates API over REST with the API key as a Bearer
token, read from a named context in `~/.kates.yaml`; a flag or a `KATES_*` variable overrides the
context. On Kind they reach the API through the port-forward that `kates ports` starts, or through a
NodePort.

The terminal views poll the same API: `kates kafka tui` and `kates lab` are full-screen
Bubble Tea programs, `kates dashboard` and `kates top` redraw the screen in a loop, and only
`kates disruption watch` streams, over Server-Sent Events.

The other path skips the API: `deploy`, `ports`, `clean`, `detect`, `kyverno` and `migrate` run
`kubectl` and Helm against your kubeconfig, and Kind and Docker against your local Docker, as child
processes; the CLI links no Kubernetes client library. `doctor` takes both paths: it checks the
backend through the API and Kyverno through `kubectl`.

Last, `kates mcp` serves an AI agent over standard input and output, read-only, and only for the
clusters you allow.

The backend is one Quarkus process, the Deployment `kates`, with one replica by default. Its REST
resources, two SSE streams and a small gRPC API share port 8080, and every call needs an API key
with the right scope, except `/api/health` and Quarkus's own `/q/health` and `/q/metrics`. Behind
the API sit the orchestrators: one for tests, which runs at most three at once and answers 429
beyond that; one for resilience runs; one for disruption plans, with the safety guard in front of
it; and the cron schedulers, which fire only on the replica that holds a lease in PostgreSQL.

They share two engines. The load engine is `native` by default, Kafka producers and consumers on
virtual threads inside the pod, or `trogdor`, a coordinator you run yourself. The fault engine is
chosen once, the first time a resilience run or disruption plan needs it, and kept until the pod
restarts. The default, `litmus-crd`, creates ChaosEngine resources that the LitmusChaos operator
runs, and handles pod deletes, rolling restarts and scale-downs itself through the Kubernetes API,
the last two by asking the Strimzi operator for them. The alternatives are `kubernetes` and
`hybrid`, and only `hybrid` switches from LitmusChaos to the Kubernetes API on its own. If the
configured provider is unknown or unavailable, the backend falls back to `noop` and logs an error,
and from then on every fault does nothing.

The state lives in PostgreSQL: runs and their per-task results, disruption reports, schedules,
audit records and webhooks, with the schema migrated by Flyway at startup. When a run changes
status, the same transaction writes an outbox row; a poller publishes it to the Kafka topic
`kates-test-events`, and the webhooks fire from that topic. Kafka sees the backend as a client like
any other: the user `kates-backend`, authenticated with SCRAM-SHA-512 on a plaintext listener,
running producers and consumers for the load and one AdminClient for topics, leaders, in-sync
replicas and consumer lag. The default install makes that user a super user, so no ACL limits it. Prometheus scrapes the backend at
`/q/metrics`, and the backend queries Prometheus only for a disruption plan's broker snapshots before
and after a fault. Traces go out over OTLP, to a collector the default install does not include.

Follow `kates test create --type LOAD --wait` through it. The CLI posts the request to `/api/tests`.
The backend checks the key's `test:run` scope, merges the `LOAD` defaults, takes one of the three
permits, stores the run as `PENDING` and answers 202. On a virtual thread it creates the topic
through the AdminClient and hands producer and consumer tasks to the native engine, and a reconciler
polls them every 5 seconds and writes the results. Meanwhile the CLI asks for the run every
2 seconds. In a terminal it draws the progress and prints the report summary once the run is done;
without one, as in CI, it prints a line at each status change.

## What it is not

The Kates book, _Kates — The Definitive Guide_ [1], lists the jobs Kates leaves to other tools. It is
not a Kafka distribution or a managed service: it tests clusters that Strimzi, Confluent or anything
else runs. It is not a general load tester, so for HTTP or gRPC load use k6, Gatling or Locust. It is
not a management UI: the Kafka UI it deploys next to the cluster is for browsing topics and consumer
groups, and its Kafka user can only read. And it is not a production monitoring system: it is built
for testing and validation environments, and production belongs to Prometheus and Grafana directly.

## A local lab in four steps

The quickest way in is a lab on a laptop [2]. You need:

- Docker, installed and running, with at least 10 GB of memory available to it, on a machine with
  about 16 GB of RAM;
- Kind [5], which `kates deploy` uses to create a local cluster when it finds none;
- `kubectl` and Helm, which `kates deploy` runs, and checks for before it starts;
- macOS or Linux, on amd64 or arm64.

Kind, `kubectl` and Helm should be at least at the versions in the Prerequisites section of the
book [1]. You also need a clone of the repository: `kates deploy` reads the charts, the version pins
and the cluster topology relative to the working directory, so run every command from the
repository root.

```bash title="Quick start"
# 1. The CLI (macOS or Linux), and a checkout of the same release to run it from
brew install bmscomp/tap/kates
git clone https://github.com/bmscomp/kates && cd kates
git checkout "$(git describe --tags --abbrev=0 --match 'v*')"

# 2. The stack, on the cluster kubectl reaches; with none, it offers to create a three-zone Kind cluster
kates deploy

# 3. Port-forwards in the background; a CLI context named ports, with the API URL and key, becomes current
kates ports

# 4. A first load test
kates health
kates test create --type LOAD --records 100000 --wait
```

**Step 1** checks out the newest release tag, the same release Homebrew installs, so the charts match
the CLI. Without Homebrew, the release page has a `kates-<os>-<arch>.tar.gz` holding a single binary.
To run `main` or your own changes instead, build Kates from the checkout, as the next section shows.

**Step 2** starts by looking for a cluster. It probes every context in your kubeconfig. If only one
answers, it uses that one, asking first when it is not the current context. If several answer, it
asks which one. Either way it points `kubectl` at the cluster it installs into. If none answers and
Docker is running with Kind installed, it offers to create one: a Kind cluster called `panda` whose
three nodes, `alpha`, `sigma` and `gamma`, sit in separate availability zones. The offer needs a
terminal; run without one, `kates deploy` prints the `kind create cluster` command instead. On that
cluster it gives each zone its own StorageClass and broker pool and turns on rack awareness, so
losing a zone is something you can rehearse on a laptop.

For the backend on Kind, `kates deploy` uses a local image when one is there, and otherwise the
published native image of the release, which the nodes pull themselves; that needs registry access
from inside Kind. With the default, isolated topology the operators, monitoring, the Kates backend
and LitmusChaos each get a namespace of their own, and Kafka shares `kafka` with Apicurio Registry
and Kafka UI (Table 1).

| Component | Helm release | Namespace |
|:--|:--|:--|
| Strimzi operator | `strimzi-operator` | `strimzi-operator` |
| cert-manager | `cert-manager` | `cert-manager` |
| Kafka | `krafter` | `kafka` |
| Prometheus and Grafana | `monitoring` | `monitoring` |
| Apicurio Registry | `apicurio` | `kafka` |
| Kates backend, with its PostgreSQL | `kates` | `kates` |
| Kafka UI | `kafka-ui` | `kafka` |
| LitmusChaos | `chaos` | `litmus` |

Table: What `kates deploy` installs with the default, isolated topology [2].

If the deploy fails, fix the cause and run it again: it skips or upgrades what is already installed.
`kates deploy status` checks each component, and `kates deploy --verbose` prints every `helm` and
`kubectl` command it runs.

**Step 3** matters because the Kind cluster publishes no NodePorts on the host. `kates ports` first
stops every `kubectl port-forward` running on the machine, Kates or not. It then starts its own in
the background, writes the API URL and the key from the Secret `kates-api-key` into a CLI context
named `ports`, and makes that context current. The Kates API is then on `localhost:8080`, Kafka UI on
`localhost:8085` and Grafana on `localhost:3000`.

**Step 4** has a trap in its first line. `/api/health` is the one `/api` endpoint that needs no key,
so a green `kates health` proves the backend is up, not that your key works; `kates test list` proves
that. The second line runs a `LOAD` test of 100,000 records and prints the results when it finishes.
`kates report show <id>` shows them again later: throughput, latency percentiles and error rate.

## Building Kates from the repository

The lab above runs the published release. To run `main`, or your own changes, build both halves from
the checkout instead [2]. On top of the lab's prerequisites you need `make`, Go and a JDK at the
versions in the book's version matrix [1], and about 8 GB of Docker memory for the native image.
Under the default `GOTOOLCHAIN=auto`, Go downloads the toolchain that `cli/go.mod` names, and the
Maven wrapper, `./mvnw`, downloads Maven itself.

```bash title="Build and run Kates from the checkout"
make cli-install               # the CLI, installed to /usr/local/bin (CLI_INSTALL_DIR to change)
kates deploy                   # finds or creates the cluster; installs the stack with the published backend
make kates-image-native-local  # the native backend image kates:native-local, loaded into the Kind cluster
kates deploy                   # again: on Kind it prefers kates:native-local, and upgrades the backend to it
```

The image build loads into the Kind cluster, so the first `kates deploy` is there to create it; every
component is installed with `helm upgrade --install`, so the second run converges on the new image.
`make kates-local` builds a JVM image instead, which is quicker, and deploys it in place of the
native one. On Linux, `make cli-install` ends with a `codesign` error, a macOS-only step, after the
binary is already installed; the binary works.

## A first broker crash

To see what losing a broker costs under load, run the example the repository ships:

```bash title="A load test with a broker crash in the middle"
kates resilience run -f cli/examples/resilience-test.yaml
```

The file pairs a `LOAD` test with a `POD_KILL` fault. The load writes 500,000 records of 1 KiB at
5,000 a second into a topic with 6 partitions, replication factor 3 and `min.insync.replicas` 2,
from an idempotent producer with `acks=all`. After 30 seconds of steady state, Kates kills the broker
of pool `brokers-alpha` with no grace period, as a kernel panic or an OOM kill would. On the default
LitmusChaos provider it keeps killing it for the file's 30-second chaos window; on the Kubernetes
provider it kills it once. Kates then waits up to 120 seconds for the cluster to recover.

Two probes watch the cluster. One counts under-replicated partitions every 10 seconds during the
fault and passes at 50 or fewer. The other checks, before the fault and while Kates waits for
recovery, that the Kafka resource reports Ready. The recovery time runs from the end of the
30-second fault window to the first check in which both pass, so it is not the time the ISR takes to
get back to 3 of 3.

The report compares the throughput, latency and error rate measured up to the fault with the same
figures over the whole run, read once the recovery wait ends, so the time before the fault softens
the change it shows. It also gives the recovery time. The file's comments state the hypothesis to
compare it with: leadership moves within 15 seconds, the producer stalls and then retries
successfully, and the ISR is back to 3 of 3 within 120 seconds.

A resilience run checks no SLA, so the comparison with the hypothesis is yours to make, and only an
`INTEGRITY` test measures data loss. Nor does the safety guard that stops a disruption plan from
hitting every broker apply to resilience runs [1], so run them where a lost broker is the point of
the exercise.

## From a laptop to a pipeline

Load tests and the security audit give a pipeline something to fail on. `kates test apply` runs
scenario files, and a scenario can carry its own thresholds. The repository's CI gate is a short one:

```yaml title="scenarios/ci-gate.yaml"
scenarios:
  - name: "CI Pipeline Gate — Fast Validation"
    type: LOAD
    spec:
      records: 10000
      recordSizeBytes: 512
      acks: "all"
      replicationFactor: 3
      minInsyncReplicas: 2
      enableIdempotence: true
    validate:
      maxP99LatencyMs: 100
      minThroughputRecPerSec: 1000
```

```bash title="Three gates a pipeline can run"
kates test apply -f scenarios/ci-gate.yaml --wait   # exits 1 when a scenario misses its thresholds
kates gate --min-grade B                            # runs a LOAD test, exits non-zero below grade B
kates security gate                                 # the same for the security audit's grade
```

A scenario's `validate:` block holds the thresholds you choose. Kates calls them SLA thresholds,
though they work like SLOs in the sense of the SRE book: targets you set, not agreements with anyone
[6]. `kates gate` grades average throughput and p99 latency against fixed bands that are the same for
every test type. A run started with `kates test create` carries no thresholds at all, so to hold a
run to your own numbers, put them in a scenario.

A resilience run cannot fail a pipeline: `kates resilience run` exits 0 whatever happened to the
cluster. For faults in CI, use a disruption plan with SLA thresholds and run it with
`kates disruption run --fail-on-sla-breach`, which exits 1 when the plan breaches them.

## Clean up, and where to go next

```bash title="Tear down"
kates clean --force                # uninstall the stack and keep the cluster; without --force it asks first
kind delete cluster --name panda   # delete the Kind cluster
```

`kates clean` works on `kubectl`'s current context and names it before it asks.

Everything above runs on a laptop. `kates deploy` installs the same way on any cluster your
kubeconfig reaches; there it runs the published image and the charts' generic overlays. Those add an
external Kafka listener on port 9094, behind a load balancer with no internal-only annotation on EKS
and GKE, so run `kates deploy --dry-run` first: it writes the values to
`.build/values-detected.yaml` and installs nothing. The book [1] goes further: its chapters on
architecture, chaos engineering in practice and deployment are the next stops, and its
troubleshooting index maps symptoms to causes.

## References

1. S. Boudjelda and contributors, [_Kates — The Definitive Guide_](https://bmscomp.github.io/kates/),
   open-source online book, 2026.
2. S. Boudjelda and contributors, _Kates_,
   [source repository and README at release 1.25.1](https://github.com/bmscomp/kates/tree/v1.25.1),
   GitHub, 16 October 2026.
3. The LitmusChaos Authors, [_LitmusChaos documentation_](https://docs.litmuschaos.io/), CNCF.
4. The Strimzi Authors, [_Strimzi documentation_](https://strimzi.io/documentation/), CNCF.
5. Kubernetes SIG Testing, [_kind_](https://kind.sigs.k8s.io/), documentation.
6. C. Jones, J. Wilkes and N. Murphy with C. Smith, “Service Level Objectives,” chapter 4 of
   B. Beyer, C. Jones, J. Petoff and N. R. Murphy (eds.), _Site Reliability Engineering: How Google
   Runs Production Systems_, O’Reilly Media, Sebastopol, 2016;
   [online edition](https://sre.google/sre-book/service-level-objectives/).
