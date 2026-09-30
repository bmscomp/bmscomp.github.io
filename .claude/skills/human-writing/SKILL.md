---
name: human-writing
description: Write prose that reads as if a thoughtful person wrote it, not a template. Use for any prose in this repository that someone will read, including articles, lab notes, the README and other docs, commit messages, pull request descriptions and replies to review comments, and when asked to make a text more human, natural or less robotic.
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
| We optimized font loading for better performance. | The Basel page loads 233.6 KB of fonts; the budget is 230 KB. |
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
6. Check every number, name, date and claim. A human writer who is wrong once loses the reader; so does
   a model.
