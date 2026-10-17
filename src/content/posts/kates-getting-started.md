---
title: Kates — what it is, and how to get started
description: Kates load-tests Apache Kafka, crashes its brokers on purpose and measures the cost. What it is, and how to start with it on a laptop.
abstract: |
  You find out how a Kafka cluster handles a broker failure on the day a broker fails, unless you have
  already tried it. Kates turns that rehearsal into a test: it puts load on the cluster, injects a
  fault, and measures what the fault cost in throughput, latency and recovery time.

  We look at what Kates is and how it is built, install it on a three-zone Kind cluster on a laptop,
  run a first load test, crash a broker under that load, and turn load tests into CI gates. The post
  is for platform engineers, developers, DevOps engineers and SREs who run Kafka on Kubernetes.
pubDate: 2026-10-17
tags: [kafka, kubernetes, testing, chaos]
---

Most teams check a Kafka cluster by hand before they trust it. They run `kafka-producer-perf-test`,
watch a Grafana dashboard while someone deletes a broker pod, and make a judgment call. None of it
can be repeated. The numbers stay in a closed terminal, nobody wrote down when the pod went, and a
pipeline cannot check "it looked fine".

Kates (Kafka Advanced Testing & Engineering Suite) turns those checks into tests [1, 2]. It is my
open-source project, and this post describes release 1.25.1, published on 16 October 2026.

## What Kates is

Kates has three parts [2]:

- the `kates` CLI, a Go binary you run on your machine;
- a backend service, built with Quarkus, that runs tests and faults inside the cluster and keeps the
  runs in PostgreSQL, for 90 days by default;
- Helm charts that install Kafka and everything around it.

Load tests work against any Kafka the backend can reach. Faults go through LitmusChaos [3] or
straight through the Kubernetes API, and they target brokers managed by Strimzi [4], by default the
cluster `krafter` in namespace `kafka`.

Kates measures four things.

- **Performance.** Eight core test types: `LOAD`, `STRESS`, `SPIKE`, `ENDURANCE`, `VOLUME`,
  `CAPACITY`, `ROUND_TRIP` and `INTEGRITY`, plus configuration sweeps; `kates test types` lists them
  all. Each report gives throughput, latency percentiles and error rate, and exports to CSV,
  JUnit XML, Markdown, HTML or latency heatmaps.
- **Faults.** Thirteen disruption types, among them pod kills, network partitions, CPU, memory and
  I/O stress, DNS errors, disk fill and node drain. Eleven work on the default install. Network
  latency and disk fill time out, because the chart ships no LitmusChaos experiment for them.
- **Recovery under load.** `kates resilience run` pairs one load test with one fault.
  `kates disruption run` runs multi-step fault plans, with blast-radius checks, a dry run, ISR and
  consumer-lag tracking, and an A–F grade when the plan sets SLA thresholds.
- **Security.** `kates security audit` grades the brokers' configuration from A to F. Related
  commands map the checks to CIS, SOC 2 and PCI DSS, save a baseline and report drift from it.

Unlike a generic load tester, Kates knows it is talking to Kafka. Each test sets the producer's
`acks`, batching, compression and consumer group, so the load looks like your application's. And
unlike `kafka-producer-perf-test`, which prints its numbers and exits, Kates stores every run, checks
it against your targets and keeps the history for trends [1].

## What it is not

The Kates book, _Kates — The Definitive Guide_ [1], lists the jobs Kates leaves to other tools:

- It is not a Kafka distribution or a managed service. It tests clusters that Strimzi, Confluent or
  anyone else runs.
- It is not a general load tester. For HTTP or gRPC load, use k6, Gatling or Locust.
- It is not a management UI. The Kafka UI it deploys next to the cluster is for browsing, and its
  Kafka user can only read.
- It is not a production monitoring system. It is built for test and validation environments, and
  production belongs to Prometheus and Grafana.

## How it is built

Kates has no web front end. The CLI is the front end, and the backend does the work in the cluster.
Figure 1 shows how the pieces talk to each other [2].

![Two zones. On your machine, the kates CLI, with its commands, terminal views and MCP server, and contexts in ~/.kates.yaml that hold the API URL and key. From the CLI, a solid arrow labelled REST and SSE with the API key, through kates ports or a NodePort, goes into the Kubernetes cluster to the Kates backend, one Quarkus pod with an API layer (REST, SSE and gRPC on port 8080), orchestrators (tests, resilience, plans, schedules), a load engine (native by default, or trogdor) and a fault engine (litmus-crd by default, kubernetes or hybrid, and noop when the configured one is unavailable). The backend connects to PostgreSQL, which holds runs, reports and schedules, and to Prometheus, which scrapes /q/metrics. It reaches the Kafka cluster krafter, three rack-aware brokers in zones alpha, sigma and gamma, with load producers and consumers, an AdminClient and outbox events. The fault engine goes through the Kubernetes API, to the LitmusChaos operator, or to the brokers for pod deletes, with rolling restarts and scale-downs carried out by Strimzi. A dashed arrow labelled kubectl and helm runs from the CLI straight to the Kubernetes API.](./kates-architecture.svg "The kates CLI on your machine, and the backend, Kafka and LitmusChaos in the cluster.")

### The CLI

Most commands, such as `test`, `report`, `disruption` and `security`, call the Kates API over REST.
They send the API key as a Bearer token, read from a named context in `~/.kates.yaml`. A flag or a
`KATES_*` variable overrides the context, which is how a pipeline points the CLI at the API. On Kind
the CLI reaches the API through the port-forward that `kates ports` starts, or through a NodePort.

The terminal views use the same API. `kates kafka tui` and `kates lab` are full-screen programs, and
`kates dashboard` and `kates top` redraw the screen in a loop. Only `kates disruption watch` streams
its updates, over Server-Sent Events.

A few commands skip the API and drive the cluster themselves. `deploy`, `ports`, `clean`, `detect`,
`kyverno` and `migrate` run `kubectl` and Helm against your kubeconfig, and Kind and Docker against
your local Docker. `doctor` uses both paths.

The last piece, `kates mcp`, is a read-only server that lets an AI agent query Kates, and only for
the clusters you allow.

### The backend

The backend is one Quarkus process, the Deployment `kates`, with one replica by default. REST, two
SSE streams and a small gRPC API share port 8080. Every call needs an API key with the right scope,
except `/api/health` and Quarkus's own `/q/health` and `/q/metrics`, which stay open.

Behind the API sit the orchestrators for tests, resilience runs and disruption plans, and the cron
schedulers. The test orchestrator runs at most three tests at once and answers 429 beyond that. The
disruption orchestrator puts a safety guard in front of every plan. They share two engines:

- The **load engine** is `native` by default: Kafka producers and consumers on virtual threads inside
  the pod. The alternative, `trogdor`, hands the load to a Trogdor coordinator you run yourself.
- The **fault engine** is chosen the first time a fault needs it. The default, `litmus-crd`, creates
  ChaosEngine resources for the LitmusChaos operator. It deletes pods itself, and asks the Strimzi
  operator for rolling restarts and scale-downs. The alternatives are `kubernetes` and `hybrid`.

The backend keeps runs, reports, schedules, audit records and webhooks in PostgreSQL. Prometheus
scrapes it at `/q/metrics`, and it queries Prometheus only for a disruption plan's broker snapshots,
before and after a fault.

Two defaults to check before you rely on it:

- If the configured fault provider is unknown or unavailable, the backend falls back to `noop` and
  logs an error. The choice is kept until the pod restarts, so every fault does nothing until then.
- Kafka sees the backend as the user `kates-backend`, with SCRAM-SHA-512 on a plaintext listener.
  The default install makes that user a super user, so no ACL limits it.

## A local lab in four steps

The quickest way in is a lab on your laptop [2]. You need:

- Docker, running, with at least 10 GB of memory for it, on a machine with about 16 GB of RAM;
- Kind [5], `kubectl` and Helm, at least at the versions the book lists [1]. `kates deploy` creates
  the cluster with Kind when it finds none, and checks for `kubectl` and Helm before it starts;
- macOS or Linux, on amd64 or arm64;
- a clone of the repository, because `kates deploy` reads the charts and the cluster topology from
  it: run every command from the repository root.

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

**Step 1** installs the CLI and checks out the newest release tag, so the charts match the CLI.
Without Homebrew, the release page has a `kates-<os>-<arch>.tar.gz` holding a single binary. To run
`main` instead, build it from the repository, as the next section shows.

**Step 2** looks for a cluster first. It probes every context in your kubeconfig, and asks when the
choice is not obvious: when the only cluster that answers is not the current one, or when several
answer. It then points `kubectl` at the cluster it installs into, so your current context changes.

If no cluster answers and Docker is running with Kind installed, it offers to create a Kind cluster
called `panda`, whose three nodes, `alpha`, `sigma` and `gamma`, sit in separate availability zones.
Each zone gets its own storage class and broker pool, and rack awareness is on, so you can rehearse
losing a zone on a laptop.

The offer needs a terminal; without one, `kates deploy` prints the `kind create cluster` command
instead. On Kind, the backend runs from a local image if there is one, and otherwise from the
published image, which the nodes pull themselves, so they need registry access. Table 1 shows what
gets installed.

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

If the deploy fails, fix the cause and run it again: it skips or upgrades what is already there.
`kates deploy status` checks each component, and `kates deploy --verbose` prints every `helm` and
`kubectl` command it runs.

**Step 3** is needed because the Kind cluster publishes no NodePorts on the host. `kates ports`
starts port-forwards in the background and writes the API URL and key into a CLI context named
`ports`. Beware that it first stops every `kubectl port-forward` on your machine, Kates or not. The
API is then on `localhost:8080`, Kafka UI on `localhost:8085` and Grafana on `localhost:3000`.

**Step 4** has a trap in its first line. `/api/health` needs no key, so a green `kates health` only
proves the backend is up; `kates test list` proves your key works. The next line runs a `LOAD` test
of 100,000 records and prints the results, and `kates report show <id>` shows them again later.

## Building Kates from the repository

To run `main` or your own changes, build both halves from the checkout [2]. Besides the lab's
prerequisites, you need `make`, Go and a JDK at the versions in the book's version matrix [1], and
about 8 GB of Docker memory for the native image. Under the default `GOTOOLCHAIN=auto`, Go fetches
the toolchain that `cli/go.mod` names, and the Maven wrapper, `./mvnw`, fetches Maven.

```bash title="Build and run Kates from the checkout"
make cli-install               # the CLI, installed to /usr/local/bin (CLI_INSTALL_DIR to change)
kates deploy                   # finds or creates the cluster; installs the stack with the published backend
make kates-image-native-local  # the native backend image kates:native-local, loaded into the Kind cluster
kates deploy                   # again: on Kind it prefers kates:native-local, and upgrades the backend to it
```

The first `kates deploy` is there to create the cluster, because the image build loads its result
into it. The second run switches the backend to the local image, since every component is installed
with `helm upgrade --install`. `make kates-local` instead builds a JVM image, which is quicker to
build, and deploys it in place of the native one. On Linux, `make cli-install` ends with a harmless
`codesign` error, after the binary is already installed.

## A first broker crash

To see what losing a broker costs under load, run the example the repository ships:

```bash title="A load test with a broker crash in the middle"
kates resilience run -f cli/examples/resilience-test.yaml
```

The file pairs a `LOAD` test with a `POD_KILL` fault:

- The load writes 500,000 records of 1 KiB at 5,000 a second into a topic with 6 partitions,
  replication factor 3 and `min.insync.replicas` 2, from an idempotent producer with `acks=all`.
- After 30 seconds of steady state, Kates kills the broker of pool `brokers-alpha` with no grace
  period, like a kernel panic or an OOM kill would. On the default LitmusChaos provider it keeps
  killing it for a 30-second window.
- Kates then waits up to 120 seconds for the cluster to recover, while probes count under-replicated
  partitions and check that the Kafka resource is Ready.

The file's comments state what to expect: leadership moves within 15 seconds, the producer stalls and
then retries successfully, and the ISR is back to 3 of 3 within 120 seconds. Keep three things in
mind when you compare the report with that:

- The recovery time runs from the end of the 30-second fault window to the first check in which
  both probes pass, which allows up to 50 under-replicated partitions. It is not the time the ISR
  takes to get back to 3 of 3.
- The report compares the figures measured up to the fault ("Pre-Chaos Baseline") with the same
  figures over the whole run, read after the recovery wait ("Post-Chaos Impact"). The 30 seconds
  before the fault are part of both, so they soften the change.
- A resilience run checks no SLA, so the comparison with the hypothesis is yours to make. And only an
  `INTEGRITY` test measures data loss; this example's `LOAD` test does not.

Resilience runs also skip the safety guard that stops a disruption plan from hitting every broker
[1]. Run them where losing a broker is the point of the exercise.

## From a laptop to a pipeline

Load tests and the security audit give a pipeline something to fail on. A scenario file can carry
its own thresholds, like the repository's CI gate:

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

The thresholds in `validate:` are yours. Kates calls them SLA thresholds, but they work like SLOs in
the SRE book's sense: targets you set, not agreements with anyone [6]. `kates gate` grades average
throughput and p99 latency against fixed bands instead. A run from `kates test create` carries no
thresholds, so put your own numbers in a scenario.

A resilience run cannot fail a pipeline, because `kates resilience run` exits 0 whatever happens to
the cluster. For faults in CI, run a disruption plan with SLA thresholds through
`kates disruption run --fail-on-sla-breach`, which exits 1 on a breach.

## Clean up, and where to go next

```bash title="Tear down"
kates clean --force                # uninstall the stack and keep the cluster; without --force it asks first
kind delete cluster --name panda   # delete the Kind cluster
```

`kates clean` works on `kubectl`'s current context and names it before it asks.

On another cluster, `kates deploy` works the same way, with the published image and the charts'
generic overlays. Those add an external Kafka listener on port 9094, behind a load balancer with no
internal-only annotation on EKS and GKE. Run `kates deploy --dry-run` first: it writes the values to
`.build/values-detected.yaml` and installs nothing.

The book [1] goes further. Its chapters on architecture, chaos engineering in practice and
deployment are the next stops, and its troubleshooting index maps symptoms to causes.

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
