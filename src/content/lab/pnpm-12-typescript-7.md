---
title: pnpm 12 and TypeScript 7 on a fresh project
description: Two toolchain upgrades met on day one — pnpm 12's stricter install defaults, and TypeScript 7 not yet supported by astro check.
pubDate: 2026-09-29
category: software
status: adopted
tools: [pnpm 12.6, TypeScript 7.0, TypeScript 6, Node 26, GitHub Actions]
tags: [astro, pnpm, typescript]
relatedPosts: [hello-world]
relatedLab: [astro-7-satteri]
platform: macOS · Node 26
repo: https://github.com/bmscomp/bmscomp.github.io
verdict: pnpm 12 adopted; TypeScript stays on 6 until astro check supports 7.
---

Starting a project from zero means getting every tool's latest major at once. Two of them needed attention.

## Getting pnpm on Node 26

`corepack` isn't available on this machine's Node 26 install, so `pnpm` wasn't on the `PATH`. Running it
through `npx` works without a global install, and pinning it in `package.json` keeps local and CI in sync:

```bash
npx -y pnpm@12.6.0 install
```

```json title="package.json"
{ "packageManager": "pnpm@12.6.0" }
```

In CI, `pnpm/action-setup` reads that field, so the workflow doesn't repeat the version.

## pnpm 12 blocks dependency build scripts

The very first `pnpm add astro` failed:

```text frame="terminal" title="Output"
× adding a new package
╰─▶ Ignored build scripts: esbuild@0.28.2
help: Run "pnpm approve-builds" to pick which dependencies should be allowed to run scripts.
```

Install scripts are a common supply-chain attack vector, so pnpm now refuses to run them unless allowed.
The allow-list lives in the workspace file and is committed with the project:

```yaml title="pnpm-workspace.yaml"
allowBuilds:
  esbuild: true
  sharp: true
```

Installs also now report `Lockfile passes supply-chain policies` — a nice default.

## TypeScript 7 and `astro check`

TypeScript 7 (the native compiler) was the latest release, so it got installed alongside [Astro 7](/lab/astro-7-satteri/). `astro check` refused to run:

```text frame="terminal" title="Output"
[check] astro check does not currently support TypeScript 7.0.
To continue using astro check, install TypeScript 6 instead.
```

Astro points to an experimental `@astrojs/ts-content-mapper` for TypeScript 7.1+, and notes that
`astro check` itself will be deprecated. For now I pinned the previous major, which type-checks the whole
site with 0 errors:

```bash
pnpm add -D typescript@^6
```

## GitHub Actions

The Pages deploy uses the current majors — `checkout@v7`, `setup-node@v7`, `pnpm/action-setup@v6`,
`configure-pages@v6`, `upload-pages-artifact@v5`, `deploy-pages@v5`. The build job takes about 30 s.

## Verdict

**pnpm 12: adopted** — the stricter defaults are worth one extra config file.
**TypeScript 7: not yet** — revisit when `astro check` or its replacement supports it.
