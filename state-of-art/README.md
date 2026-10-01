# State of the art

Surveys of the open problems in areas of mathematics, and of the ones recently settled, as they stood on 30 September 2026. Algebra is the first area. Its survey is split by MSC 2020 class into six fields, one file each, with an overview and a note picking the easiest problem that is still open.

None of this is on the site. The directory lives outside `src/` and `public/`, so Astro never builds it, and the deploy uploads only Astro's build.

## How the survey was made

For each field one agent searched for open problems and recent resolutions and gave a source for every claim. An independent fact-checker then went back over each entry's status, attributions and sources, and where it changed something the entry says what. A completeness critic looked for problems the survey had missed, and the entries it added were checked separately. It also advised where the fact-checker's own finds should be filed. Last, a reviewer compared each file with the checked data.

The fact-checker also turned up problems of its own. Those already settled were moved under "Recently settled", where a second reader confirmed some of them against their abstracts, doubted one and left the rest unchecked. The open ones are listed at the end of each file as "Further problems suggested by the fact-checker", and nobody re-checked them. A few problems outside algebra came up along the way; three files keep them in a last section of their own. One entry was missed altogether: Wilf's conjecture, in the group theory file, says the fact-checker did not review it.

For the easiest open problem, three judges ranked candidates from the survey. Their ranking was checked against current sources on 30 September, which moved the pick down the list; the note says why.

## How to read an entry

- ★ marks a problem whose statement a reader with undergraduate algebra can follow. It says nothing about the proof.
- An open problem gets what it asks, who posed it and when, where it stands, the smallest case still open, why it is hard, and its sources. A settled one gets what it asked, how it was settled, and its sources.
- Every open or settled entry ends with its fact-check verdict in italics: *confirmed*, or *corrected* with the change in brackets. An entry that the fact-checker supplied itself, or did not review, says instead how far it was checked.
- "Not refereed", or "preprint", marks a result that exists as an arXiv paper, an announcement or a code repository, with no journal version in the sources checked.

## A warning about dates

A good part of algebra changed between July and September 2026, and most of the change has not been refereed. Levent Alpöge's explicit map, announced on 19 July, disproved the Jacobian conjecture in every dimension from 3 up. Köthe's conjecture fell in September, first to a Lean proof that an AI model found and then in two preprints. Counterexamples to the Han, Huneke–Wiegand and Peskine–Szpiro conjectures came out as preprints between 31 July and 7 September. AI models had a hand in all five, by the authors' own account or, for the Jacobian map, by Wikipedia's and Tao's reports.

The standard lists lag behind. On 30 September Wikipedia's list of unsolved problems still showed Köthe's conjecture as open, and when the survey read it, it still listed the McKay conjecture, whose proof appeared in Annals of Mathematics in 2026. The Kourovka Notebook's October 2026 update has a new mark, ♯, for problems where an AI system has proposed a solution that mathematicians have not yet confirmed; the editors say to treat those problems as unsolved. Before writing about any entry, check whether its preprint has since been refereed, corrected or withdrawn.

## Contents

- [algebra/README.md](algebra/README.md): the overview. A map of the six fields, a table of open problems for each, every settled problem in one list by date, and the easiest open problem.
- [algebra/group-theory.md](algebra/group-theory.md): group theory, with semigroups (MSC 20, without 20C). 13 open, 6 settled, 7 further suggestions.
- [algebra/rings-and-algebras.md](algebra/rings-and-algebras.md): rings, modules and algebras, associative and not (16, 17). 10 open, 5 settled, 2 further suggestions.
- [algebra/commutative-algebra-and-algebraic-geometry.md](algebra/commutative-algebra-and-algebraic-geometry.md): commutative algebra and algebraic geometry (13, 14). 12 open, 7 settled, 5 further suggestions.
- [algebra/fields-galois-theory-and-polynomials.md](algebra/fields-galois-theory-and-polynomials.md): fields, Galois theory and polynomials, with the algebraic side of number theory (12, parts of 11). 12 open, 6 settled, 6 further suggestions.
- [algebra/linear-algebra-and-representation-theory.md](algebra/linear-algebra-and-representation-theory.md): linear algebra, matrices and representation theory (15, 20C, 17B10). 12 open, 6 settled, 3 further suggestions.
- [algebra/homological-categorical-and-universal-algebra.md](algebra/homological-categorical-and-universal-algebra.md): homological algebra, category theory, K-theory, universal algebra and lattices (06, 08, 18, 19). 10 open, 5 settled, 5 further suggestions.
- [algebra/easiest-open-problem.md](algebra/easiest-open-problem.md): the pick for the easiest problem in the algebra survey that is still open, a plan of attack, two runners-up, and the two earlier picks, both answered in public by 30 September.
