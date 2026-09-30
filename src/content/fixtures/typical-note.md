---
title: Typical note — the shape of an ordinary entry
description: A test page for the readability harness, shaped like an ordinary lab note so that its first screen can be measured.
pubDate: 2026-09-03
category: software
status: adopted
tools: [Astro 7.3, Sätteri, KaTeX, Expressive Code, Tailwind CSS 4]
platform: macOS · Node 26
verdict: Not a real note — it stands in for one while the lab is empty, so the first-screen rules keep a page.
repo: https://github.com/bmscomp/bmscomp.github.io
---

This page stands in for a lab note while the lab has none. It has what an ordinary note has: a fact sheet
with a status, a category, five tools, a platform and a verdict, then a few sections of prose. The
readability tests measure its first screen, on a desktop and on phones, because that is where a reader
decides whether to keep going.

## Setup

A real note starts by saying what was installed and where. Here that part only describes the page
itself: it is a Markdown file in the fixtures collection, rendered through the same layout as every lab
note, and built only in development and in the test build, never on the published site.

## What the tests look at

On a 1280 by 900 window, the first line of the text must end within the top 85% of the screen. On a
phone, three lines of text must be visible without scrolling, and one line on a short phone. The fact
sheet must stay compact from 768 pixels, and the contents list must fold into a single line on phones.

## Why a separate page

The kitchen-sink fixture carries every construct at once, including a series and an update date, so its
fact sheet is taller than an ordinary note's. Measuring the first screen there would hold ordinary notes
to the wrong standard. This page keeps the common case, and the kitchen sink keeps the extremes.

## Closing

When the next lab note is published, the tests can measure it as well, and this page stays as the
baseline for the shape.
