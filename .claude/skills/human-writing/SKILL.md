---
name: human-writing
description: Write prose that reads as if a thoughtful person wrote it, not a template. Use for any prose in this repository that someone will read, including articles, lab notes, the README and other docs, commit messages, pull request descriptions and replies to review comments, and when asked to make a text more human, natural or less robotic, or when an AI detector has flagged it. Includes check-prose.mjs, which lists generated-sounding phrases and measures how much the sentences vary.
---

# Writing like a person

Readers stop trusting a text the moment it sounds generated. It isn't one mistake that gives it away
but a texture: vague praise, symmetrical lists, words nobody says aloud, a summary after every
paragraph. This skill removes that texture. For articles, the `math-and-technical-writing` skill sets
the house style and this one governs the sentences.

## The test

Imagine saying it to a colleague across a table. If you wouldn't say it, don't write it. Write for one
reader who is capable and busy, and who can't see inside your head.

## Say the specific thing

Generic text makes claims any text could make; human text says what only this one can. Replace every
abstraction with the thing itself: a number, a name, a date, a file, an example.

| Generic | Specific |
|---|---|
| We optimized font loading for better performance. | The Basel page loaded 233.6 KB of fonts against a 230 KB budget. |
| Several tests needed adjustments. | Four tests failed, all by 4–12 px, because the kitchen sink's fact sheet is taller than a real note's. |
| The Basel problem is a famous and fascinating challenge that captivated mathematicians for centuries. | Some problems are hard because they are complicated. The Basel problem is hard for the opposite reason: it takes one line to state, anyone can check the first few terms by hand, and yet for almost ninety years nobody could finish it. |

The last row shows why this matters: "for centuries" was also wrong. Vague sentences hide errors that
a specific sentence would expose.

## Words and phrases that sound generated

Don't use them. Each has a plain replacement, or the sentence is better without it.

- **Inflated words:** delve, tapestry, testament, realm, landscape, journey, embark, unlock, elevate,
  empower, harness, leverage (as a verb), seamless, robust, cutting-edge, game-changer, pivotal,
  crucial, vital, paramount, comprehensive, meticulous, intricate, nuanced, vibrant, boasts.
- **Throat-clearing:** "It's worth noting that", "It is important to remember", "Interestingly,",
  "Notably,", "Essentially,", "In essence,", "At its core,", "When it comes to", "In today's
  fast-paced world", "Let's dive in", "Here's the thing".
- **Stock frames:** "not just X, but Y", "whether you're X or Y", "from X to Y" used as a flourish,
  "X is more than just Y", "it's not about X, it's about Y".
- **Closers:** "In conclusion", "Overall", "In summary", "Ultimately", a final sentence that restates the
  paragraph, and an offer or a question tacked on at the end of a document.
- **Intensifiers and hedges:** very, really, truly, incredibly, quite; "may potentially", "could
  possibly", "arguably". Commit to a claim or state the doubt precisely.

## Shapes that sound generated

The words are easy to catch. The shapes are harder.

- **Groups of three.** Three adjectives, three parallel clauses, three bullets, over and over. Use the
  number of items there actually are.
- **Symmetry everywhere.** Every paragraph the same length, every bullet the same grammar, every section
  opened with a one-line summary. Vary sentence length: a long sentence that carries an argument, then a
  short one. Like this.
- **A summary after every point.** Trust the reader. If a paragraph needs a restatement, the paragraph
  is unclear; fix it instead.
- **Formatting instead of writing.** Headings on a three-paragraph answer, bold on every other phrase,
  bullet lists where the ideas depend on each other. Reasoning belongs in sentences, because "because"
  and "so" don't fit in bullets. Keep lists for parallel items: steps, files, options.
- **Dashes as punctuation for everything.** In running text, use at most one pair of em dashes per
  paragraph; a comma, a colon, parentheses or a new sentence usually reads better. (Titles here use " — "
  by convention; that's fine.)
- **Both-sides balance by reflex**, as in "On the one hand… on the other…". Say what you think, and
  why.
- **Rhetorical questions as openers**, as in "Ever wondered why…?". State the thing.
- **Emoji, and exclamation marks in technical text.** Leave them out. The one exception is the
  attribution line required in pull requests.

## Sound like someone who did the work

- **Keep the texture of real work.** Say what broke, and the number you saw. One
  sentence about a dead end ("the kitchen sink failed by 12 px, so a smaller fixture stands in") is
  more convincing than a paragraph of success.
- **Use the first person for what the author did** ("I pinned TypeScript 6"), "we" for reasoning shared
  with the reader, and plain statements for facts.
- **Admit uncertainty exactly.** "I don't know why the second run is 40 ms slower" beats "performance
  may vary".
- **Keep opinions that are earned**: "This is the proof to show a student: it needs nothing beyond
  trigonometry." Name the reason.
- **Credit people by name and date**; don't write "researchers have found".

## One person's voice

Generated prose is the average of every writer. It sounds human when it sounds like someone in
particular: a person with habits, preferences and a point of view.

- **Decide who is talking, and to whom, and keep it.** On this site it is the author explaining
  something they care about to a curious reader, not a textbook addressing a class.
- **Let the author react.** Say what was surprising, what looked wrong at first, and which proof is the
  favourite and why. A reaction needs a reason, and it has to be the author's own (see below).
- **Move between registers.** A short plain sentence after a technical one. A contraction where speech
  would use one ("doesn't", "isn't") in the narrative, but never inside a definition or a theorem.
- **Keep the asides a person would make:** a parenthesis, a footnote with a story, one small digression
  that the argument doesn't strictly need.
- **Leave some unevenness.** Not every paragraph needs a topic sentence, and not every section has to
  end on a point. A fragment is allowed now and then. Like this one.

## What only the author can supply

Why they care about the subject, where they first met it, a mistake they made on the way, a result they
doubted until they checked it: this is what makes a text theirs. It cannot be generated. Never invent
it, because a made-up memory is worse than none. Ask the author for it. If there is no answer, keep the
text impersonal rather than fake a person.

## Tics these drafts fell into

These are from revising the Basel article. Each one appeared more than once.

| Tic | Example | Instead |
|---|---|---|
| Announcing what comes next | "Here is the definition in full." "Two ideas in this proof deserve a closer look." "The last step deserves a word." | Do it. The reader sees the definition without being told it is coming. |
| A table of contents in prose | "First the problem: what…, why…, and why…. Then the solving, in the order it happened: …" | One sentence on what the reader will get, or none; the headings already say it. |
| An abstract made of "We" sentences | "We explain why… We then follow… We give… We end with…" | Tell the story in miniature. Use "we" once or twice, not in every sentence. |
| Numbered pairs | "The first is the telescoping. … The second is the step from bounded to convergent." | Give the second point its own sentence and its own opening. |
| A paragraph ending on an aphorism | "A little mathematics goes further than a lot of arithmetic." "It is the kind of coincidence that is not a coincidence." | At most one per article, and only when it adds something the paragraph hasn't said. |
| Antithesis on repeat | "took an idea, not more decimals"; "the price … the reward …"; "knowing that … and knowing why …" | Say the positive thing. Keep a contrast only where the contrast is the point. |

## About AI detectors

Tools that score text as "AI" or "human" estimate how predictable each word is and how uniform the
sentences are. The scores are unreliable. The same paragraph gets different results from different
tools, and careful, formal writing is often flagged. Liang et al. report that GPT detectors
"frequently misclassify non-native English writing as AI generated" ("GPT detectors are biased against
non-native English writers", Patterns 4:7, 2023, article 100779). A result like "47% AI probability"
is close to a coin toss.

Use a score only as a hint about where the text is flat, then fix those passages for the reader's
sake. Never add typos, odd synonyms or random words to move a number. That makes the text worse for
the person reading it, and the reader is who the text is for.

## Checking a text

`check-prose.mjs` in this skill's folder reads a Markdown file and reports:

- most of the phrases listed above, and a few more announcing patterns such as "as we will see" and
  "this article follows", with line numbers;
- how much the sentence lengths vary, and how many sentences are short;
- how long the paragraphs are, in sentences;
- which words open sentences most often.

It skips code, math, tables (indented ones too), headings and the reference list, and it reads an
article's `abstract: |` block from the frontmatter.

```bash
node .claude/skills/human-writing/check-prose.mjs src/content/mathematics/basel-problem.md
```

The script reports and doesn't judge. A flagged phrase can be right where it is, and varied sentences
are a symptom of a voice, not a recipe for one.

## Commit messages and pull requests

- **Subject:** say what changed, as a statement, with the area first as this repository does: "Lab:
  remove the two notes; the Lab page says "No notes yet."". Don't write "Update files" or "Various
  improvements".
- **Body:** say why, then anything surprising. Wrap at about 72 columns.
- **Pull request description:**
  - what changed (a before-and-after table works well when the change is visible);
  - why;
  - what a reviewer should look at;
  - the checks run, with exact counts: "79 of 79 pass; there were 85, and the six gone were per-note
    measurements."
- **Never inflate.** Don't write "comprehensive refactor" for three files. If something wasn't checked,
  say so.

## Revision pass

Before handing a text over, read it once more, aloud if possible, and:

1. Delete the first paragraph if it is only warm-up, and the last sentence if it only summarises.
2. Search for the words listed above and replace or cut each one.
3. For each adjective and adverb, ask whether it carries information. Most don't.
4. Replace each abstract noun ("functionality", "improvements", "issues") with the thing it stands for.
5. Look at sentence lengths. If they're all alike, split one and join two.
6. Run `check-prose.mjs` and read every line it flags.
7. Check every number, name, date and claim. A human writer who is wrong once loses the reader; so does
   a model.
