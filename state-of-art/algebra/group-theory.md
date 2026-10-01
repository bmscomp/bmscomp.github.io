# Group theory (with semigroups)

State of the art as of 30 September 2026. Not published on the site.

Group theory studies groups, the algebra of symmetry. Its problems run from finite groups and the classification of finite simple groups to infinite groups, which are studied through presentations and algorithms (the word, conjugacy and isomorphism problems), through their actions on geometric spaces (hyperbolic and CAT(0) groups), and through approximation and analytic properties: residual finiteness, profinite completions, amenability, growth, soficity. Semigroups are included here and supply two entries, the Černý conjecture and Wilf's conjecture. Representation theory of groups is left out. So are group-ring questions such as Kaplansky's unit and zero-divisor conjectures, which belong to the rings survey.

The field is taking in a wave of new solutions, some of them found with AI systems. OpenAI announced a non-sofic group on 1 August 2026. A July 2026 preprint settles the Černý conjecture for one-cluster automata and says the proof was obtained with OpenAI Codex. On 20 September 2026 Jihao Liu announced an AI-generated non-hyperlinear group that so far has been checked only by machine. The Kourovka Notebook's October 2026 update adds a new mark, ♯, for problems where an AI system has proposed a solution that mathematicians have not yet confirmed. The editors say such problems should still be treated as unsolved.

A paper called a preprint in this survey is an arXiv paper with no journal version in the sources checked, so it should be read as not refereed.

**MSC 2020.** 20-XX, Group theory and generalizations, without 20Cxx (representation theory of groups). The second-level classes are 20A foundations, 20B permutation groups, 20D abstract finite groups, 20E structure and classification of infinite or finite groups, 20F special aspects of infinite or finite groups, 20G linear algebraic groups, 20H other groups of matrices, 20J connections with homological algebra and category theory, 20K abelian groups, 20L groupoids, 20M semigroups, 20N other generalizations of groups and 20P probabilistic methods. Many entries below live in 20F: 20F05 presentations, 20F10 word problems and other decision problems, 20F36 braid and Artin groups, 20F50 periodic groups and Burnside problems, 20F65 geometric group theory, 20F67 hyperbolic groups, 20F69 growth and amenability. The classes were checked against the [AMS MSC2020 listing](https://mathscinet.ams.org/msc/msc2020.html?t=20-XX), because zbMATH's classification page returned a Cloudflare challenge.

**Problem lists.**

- *The Kourovka Notebook: Unsolved Problems in Group Theory*, No. 21, edited by E. I. Khukhro and V. D. Mazurov. The arXiv version is v46, dated 1 September 2026: [arXiv:1401.0300](https://arxiv.org/abs/1401.0300).
- The [Kourovka Notebook's official site](https://kourovkanotebookorg.wordpress.com/), with the [October 2026 update](https://kourovkanotebookorg.wordpress.com/wp-content/uploads/2026/09/21upd-1.pdf) posted on 30 September 2026. The mark ∗ still means solved; ♯ is the new AI mark. "Unmarked" below means a problem carries no solution mark in this update.
- Wikipedia, [List of unsolved problems in mathematics, group theory](https://en.wikipedia.org/wiki/List_of_unsolved_problems_in_mathematics#Group_theory). The same page has a "recently solved" section with group theory entries.

## Open problems

A ★ marks the problems whose statement a reader with undergraduate algebra can follow.

- ★ Bounded Burnside problem for exponent 5 (is $B(2,5)$ finite?): open.
- ★ Infinite finitely presented periodic groups (Kourovka 8.52): open.
- ★ Andrews–Curtis conjecture: open; most experts expect it to be false.
- ★ Herzog–Schönheim conjecture on coset partitions: partially solved.
- ★ Higman's PORC conjecture: open; verified for $n \le 7$.
- ★ Babai's conjecture on diameters of finite simple groups: partially solved (bounded rank).
- Residual finiteness of hyperbolic groups: open.
- Amenability of Thompson's group $F$: open.
- Boone–Higman conjecture: partially solved.
- Kervaire (Kervaire–Laudenbach) conjecture: partially solved.
- ★ Word and conjugacy problems for Artin–Tits groups: open (solved for many classes).
- ★ Černý conjecture on synchronizing automata: open.
- ★ Wilf's conjecture on numerical semigroups: open.

### ★ Bounded Burnside problem for exponent 5: is B(2,5) finite?

**What it asks.** Take two letters $x$ and $y$ and impose one law: every element, that is every word in $x$, $y$ and their inverses, has fifth power equal to 1. The largest group you can build this way is the free Burnside group $B(2,5)$, and the question is whether it is finite. Small exponents show what such a law does. With exponent 2 every element is its own inverse, so $ab = (ab)^{-1} = b^{-1}a^{-1} = ba$; the group is abelian, and $B(2,2) = \mathbb{Z}/2 \times \mathbb{Z}/2$ has 4 elements. Exponents 2, 3, 4 and 6 all give finite groups; 5 is the first exponent where nobody knows.

Precisely, with $F_m$ the free group of rank $m$,

$$
B(m,n) = F_m / \langle\langle w^n : w \in F_m \rangle\rangle .
$$

The largest finite quotient of $B(2,5)$, the restricted Burnside group $R(2,5)$, has order $5^{34}$. So the question is whether $B(2,5) = R(2,5)$.

**Posed.** W. Burnside posed the general bounded problem in 1902. In Kourovka Problem 11.48 (1990), A. I. Kostrikin gave an explicit test for $B(2,5)$: if the commutator $[x,y,y,y,y,y,y]$ is not a product of fifth powers in the free group $\langle x, y \rangle$, then $B(2,5)$ is infinite.

**Where it stands.** Open. Kourovka 11.48 has no solution mark in v46 (1 September 2026) or in the October 2026 update, and a search for claimed resolutions in 2025–26 found none. $B(m,n)$ is finite for $n = 2, 3, 4$ and $6$. In the other direction, Novikov and Adian (1968) proved $B(m,n)$ infinite for odd $n > 4381$, and Adian later brought the bound down to odd $n \ge 665$. Ivanov (1994) handled large even exponents, and Lysenok (1996) proved $B(m,n)$ infinite for all $m > 1$ and $n \ge 8000$. Adian (Proc. Steklov Inst. 289, 2015) outlined a route to odd $n \ge 101$, but according to Wikipedia no full proof has been published. The restricted problem is solved, by Kostrikin for prime exponent and by Zelmanov (1989–91) for every exponent. Havas, Wall and Wamsley (Bull. Austral. Math. Soc. 10, 1974) computed $|R(2,5)| = 5^{34}$, with nilpotency class 12.

**Smallest open case.** $B(2,5)$ itself, the smallest case of the bounded problem that is still open. Kostrikin's criterion reduces one direction to a single word: show that $[x,y,y,y,y,y,y]$ is not a product of fifth powers in $\langle x, y \rangle$, and $B(2,5)$ is infinite.

**Why it is hard.** Finiteness would mean that the exponent-5 law forces every element to be a word of bounded length. Coset enumeration and Lie-ring methods only control the finite quotients. The methods that prove infiniteness (Novikov–Adian, and the geometric small-cancellation theory of Olshanskii and Ivanov) work only for large exponents (the best proven bound is 665 for odd $n$), and 5 is far below every known threshold. Even the finite quotients are enormous: $R(2,7)$ has order $7^{20416}$ (O'Brien and Vaughan-Lee, 2002).

**Sources.** [Wikipedia: Burnside problem](https://en.wikipedia.org/wiki/Burnside_problem) · [Kourovka Notebook, arXiv:1401.0300](https://arxiv.org/abs/1401.0300) · [Groupprops: RB(2,5)](https://groupprops.subwiki.org/wiki/Restricted_Burnside_group:RB(2,5)) · [Kourovka Notebook No. 21 (PDF)](https://kourovkanotebookorg.wordpress.com/wp-content/uploads/2026/09/21tkt-1.pdf) · [Kourovka October 2026 update (PDF)](https://kourovkanotebookorg.wordpress.com/wp-content/uploads/2026/09/21upd-1.pdf) · [doi:10.1017/s0004972700041137](https://doi.org/10.1017/s0004972700041137) · [doi:10.1142/s0218196702001103](https://doi.org/10.1142/s0218196702001103)

*Fact-check: confirmed.*

### ★ Infinite finitely presented periodic groups (Kourovka 8.52)

**What it asks.** A group is periodic (or torsion) if every element has finite order. Every finite group is periodic and can be given by finitely many generators and finitely many relations. Is that the only way to be both? Infinite periodic groups with finitely many generators do exist, Grigorchuk's group (1980) for one, but each known example needs infinitely many relations.

Precisely: is there an infinite group that is finitely presented and periodic? Equivalently, is every finitely presented periodic group finite? Two related questions: Kourovka 14.35 (N. D. Gupta) asks the same for groups of prime exponent, and Kourovka 6.3 (R. Bieri) asks whether every periodic group of type $FP_\infty$ is finite.

**Posed.** A well-known problem, recorded by A. Yu. Olshanskii as Kourovka Problem 8.52 in the 8th issue (1982). The question itself is older. It is also on Wikipedia's list of unsolved problems.

**Where it stands.** Open; Kourovka 8.52 is unmarked. Infinite finitely generated periodic groups have existed since Golod and Shafarevich (1964). Later examples include the free Burnside groups of large exponent and Grigorchuk's group, and D. Osin gave a short new proof of Golod's theorem in 2022 ([arXiv:2211.09989](https://arxiv.org/abs/2211.09989)). None of them is finitely presented. Grigorchuk's group is finitely generated but not finitely presentable, and Button and Thillaisundaram ([arXiv:1007.2845](https://arxiv.org/abs/1007.2845)) showed that Schlage-Puchta's infinite finitely generated $p$-groups are not finitely presented either. Nobody has announced a construction or a proof that none exists. Bieri's homological version, Kourovka 6.3, is also open.

**Smallest open case.** Not identifiable from the survey data. The nearest named variants are Kourovka 14.35 (prime exponent) and Kourovka 6.3 (type $FP_\infty$), and 6.3 is also open.

**Why it is hard.** Every known way of making all elements torsion imposes infinitely many relations, typically one for each element, so the groups that come out are infinitely presented. In the other direction, no invariant of a finite presentation is known that would force a periodic group to be finite.

**Sources.** [Kourovka Notebook, arXiv:1401.0300](https://arxiv.org/abs/1401.0300) · [Wikipedia: unsolved problems, group theory](https://en.wikipedia.org/wiki/List_of_unsolved_problems_in_mathematics#Group_theory) · [arXiv:1007.2845](https://arxiv.org/abs/1007.2845) · [arXiv:2211.09989](https://arxiv.org/abs/2211.09989) · [Kourovka Notebook No. 21 (PDF)](https://kourovkanotebookorg.wordpress.com/wp-content/uploads/2026/09/21tkt-1.pdf)

*Fact-check: confirmed.*

### ★ Andrews–Curtis conjecture

**What it asks.** A presentation with as many relators as generators is called balanced. Some balanced presentations define the trivial group, and for simple ones you can see it by shuffling relators until they read $x_1, \dots, x_n$. Take $\langle x, y \mid xy,\ y \rangle$. Invert the second relator to get $y^{-1}$, multiply the first relator by it to get $xy \cdot y^{-1} = x$, and invert the second relator back: the result is $\langle x, y \mid x,\ y \rangle$. The conjecture says a fixed small set of such moves always suffices.

Precisely, the AC-moves on $\langle x_1, \dots, x_n \mid r_1, \dots, r_n \rangle$ are: replace $r_i$ by $r_i^{-1}$; replace $r_i$ by $r_i r_j$ with $i \ne j$; replace $r_i$ by a conjugate $g r_i g^{-1}$. The conjecture: every balanced presentation of the trivial group can be turned into $\langle x_1, \dots, x_n \mid x_1, \dots, x_n \rangle$ by finitely many AC-moves. Some authors also allow automorphisms of the free group on the generators; that is a variant, not the standard definition. The stable version also allows adding or deleting a new generator $x_{n+1}$ together with the relator $x_{n+1}$.

**Posed.** J. J. Andrews and M. L. Curtis, "Free groups and handlebodies", Proc. Amer. Math. Soc. 16 (1965), 192–195.

**Where it stands.** Open. Most experts expect it to be false, but no counterexample is known. The main candidates are the Akbulut–Kirby presentations

$$
AK(n) = \langle x, y \mid xyx = yxy,\ x^n = y^{n+1} \rangle ,
$$

whose AC-triviality is open for every $n \ge 3$. $AK(3)$ has total relator length 13 and is the shortest possible two-generator counterexample up to AC-equivalence. This is stated in Lucas Fagan's guest post on T. Tao's blog (11 September 2026), which announces the SAIR Foundation / Caltech "Andrews–Curtis Conjecture Challenge", organised by S. Gukov, T. Tao and L. Fagan and closing on 30 November 2026.

Most recent progress is computational. Shehper, Medina-Mardones, Gukov and co-authors ([arXiv:2408.15332](https://arxiv.org/abs/2408.15332), 2024–25) used reinforcement learning to settle potential counterexamples in the Miller–Schupp series, including three infinite subfamilies. Their first version (August 2024) also claimed that $AK(3)$ is stably AC-trivial, by showing it AC-equivalent to a presentation that Myasnikov, Myasnikov and Shpilrain had claimed in 2002 to be stably AC-trivial. A. Lisitsa ([arXiv:2501.18601](https://arxiv.org/abs/2501.18601), January 2025) gave an "alternative proof" with Prover9 that rests on the same 2002 claim. In version 2 (February 2025) Shehper et al. reported a misprint in the 13th relator of the 2002 Wirtinger presentation, which undermines that claim. So $AK(3)$ is still a potential counterexample to the stable conjecture as well, and Lisitsa's paper does not settle it. J. Carreras ([arXiv:2607.23611](https://arxiv.org/abs/2607.23611), a July 2026 preprint, not refereed) gave machine-checkable certificates that four length-14 Miller–Schupp presentations are AC-equivalent to $AK(3)$; Shehper et al. had asserted this without proof. Earlier, M. Bridson ([arXiv:1504.04187](https://arxiv.org/abs/1504.04187), 2015) showed that AC-trivialisations can require astronomically long sequences of moves, from rank 4 on.

**Smallest open case.** $AK(3) = \langle x, y \mid xyx = yxy,\ x^3 = y^4 \rangle$, of length 13: the shortest possible two-generator counterexample up to AC-equivalence, open for both the standard and the stable conjecture.

**Why it is hard.** No invariant is known that separates AC-classes of presentations of the trivial group, because all the obvious invariants vanish. A trivialisation, if one exists, may have to pass through much longer presentations, and Bridson's bounds show how long it can get. So the failure of computer searches is not evidence against the conjecture. The problem is also tied to 4-dimensional topology: potential counterexamples come from homotopy 4-spheres and the smooth 4-dimensional Poincaré conjecture.

**Sources.** [Wikipedia: Andrews–Curtis conjecture](https://en.wikipedia.org/wiki/Andrews%E2%80%93Curtis_conjecture) · [Fagan's guest post on Tao's blog, 11 September 2026](https://terrytao.wordpress.com/2026/09/11/sair-competition-andrew-curtis-challenge/) · [arXiv:2408.15332](https://arxiv.org/abs/2408.15332) · [arXiv:2501.18601](https://arxiv.org/abs/2501.18601) · [arXiv:2607.23611](https://arxiv.org/abs/2607.23611) · [arXiv:1504.04187](https://arxiv.org/abs/1504.04187) · [Andrews and Curtis 1965, doi](https://doi.org/10.1090/s0002-9939-1965-0173241-8)

*Fact-check: corrected (added the failed 2024–25 claim that AK(3) is stably trivial; fixed the blog author, Carreras's count and the definition of AC-moves).*

### ★ Herzog–Schönheim conjecture (coset partitions)

**What it asks.** Split the integers into arithmetic progressions, each number landing in exactly one. For example

$$
\mathbb{Z} = 2\mathbb{Z} \,\sqcup\, (1 + 4\mathbb{Z}) \,\sqcup\, (3 + 4\mathbb{Z}).
$$

The differences are 2, 4 and 4, and two of them coincide. Mirsky and Newman, and independently Davenport and Rado, proved around 1950 that this always happens: $\mathbb{Z}$ cannot be split into two or more progressions with distinct differences. Counting alone does not explain it. The differences 2, 3, 6 satisfy $\tfrac12 + \tfrac13 + \tfrac16 = 1$, yet no partition of $\mathbb{Z}$ uses them. Herzog and Schönheim conjectured the same for every group, with cosets in place of progressions and indices in place of differences.

Precisely: let $G$ be a group, $k \ge 2$, and let left cosets $g_1H_1, \dots, g_kH_k$ of subgroups of finite index partition $G$. Then $[G:H_i] = [G:H_j]$ for some $i \ne j$. The conjecture reduces to finite groups: pass to the quotient by the intersection of the cores of the $H_i$, which is a normal subgroup of finite index.

**Posed.** M. Herzog and J. Schönheim, Research Problem No. 9, Canad. Math. Bull. 17 (1974), p. 150. It is also Kourovka Problem 21.93, submitted by L. Margolis.

**Where it stands.** Open in general; Kourovka 21.93 is unmarked. It is proved for $G = \mathbb{Z}$ (Mirsky–Newman and Davenport–Rado, around 1950); for groups with a Sylow tower (Berger, Felzenbaum and Fraenkel, Fund. Math. 128, 1987); when all the $H_i$ are subnormal (Z.-W. Sun, J. Algebra 273, 2004); for every group of order less than 1440 (L. Margolis and O. Schnabel, [arXiv:1803.03569](https://arxiv.org/abs/1803.03569)); and for all finite simple groups and all symmetric groups (M. Garonzi and L. Margolis, [arXiv:2509.25118](https://arxiv.org/abs/2509.25118), a preprint with v1 in September 2025 and v2 in May 2026, not refereed). The solvable case is not proved. M. C. Burkhart's preprint claiming all solvable groups ([arXiv:1901.10131](https://arxiv.org/abs/1901.10131), 2019) carries an author comment that one case is not trivial and "must be considered more carefully", and Kourovka still records only the Sylow-tower case.

**Smallest open case.** Groups of order 1440 and up: every group of order below 1440 is settled by Margolis and Schnabel, so a counterexample has order at least 1440. Among classes of groups, solvable groups are the next open case after the Sylow-tower groups, since the author of the solvable-case preprint says one case needs more care.

**Why it is hard.** The proof for $\mathbb{Z}$ uses roots of unity and generating functions, which have no analogue for nonabelian groups. The arithmetic constraint $\sum_i 1/[G:H_i] = 1$ is not enough on its own. A general proof needs uniform control over the subgroup structure of all finite groups. Recent progress relies on the classification of finite simple groups: maximal subgroups of simple and symmetric groups are small, which rules out partitions with distinct indices for arithmetic reasons.

**Sources.** [Wikipedia: Herzog–Schönheim conjecture](https://en.wikipedia.org/wiki/Herzog%E2%80%93Sch%C3%B6nheim_conjecture) · [arXiv:2509.25118](https://arxiv.org/abs/2509.25118) · [arXiv:1803.03569](https://arxiv.org/abs/1803.03569) · [arXiv:1901.10131](https://arxiv.org/abs/1901.10131) · [Kourovka Notebook, arXiv:1401.0300](https://arxiv.org/abs/1401.0300) · [Kourovka Notebook No. 21 (PDF)](https://kourovkanotebookorg.wordpress.com/wp-content/uploads/2026/09/21tkt-1.pdf) · [Sun 2004, doi](https://doi.org/10.1016/s0021-8693(03)00526-x) · [Berger, Felzenbaum and Fraenkel 1987, doi](https://doi.org/10.4064/fm-128-3-139-144)

*Fact-check: confirmed.*

### ★ Higman's PORC conjecture

**What it asks.** Fix $n$ and count the groups of order $p^n$ as the prime $p$ varies. For $n = 2$ the count is 2 for every $p$: the groups $\mathbb{Z}/p^2$ and $\mathbb{Z}/p \times \mathbb{Z}/p$. Higman conjectured that for every $n$ the count is almost a polynomial in $p$: a polynomial that may change with the residue of $p$ modulo some fixed number. That is what PORC, "polynomial on residue classes", means.

Precisely, let $f(p^n)$ be the number of groups of order $p^n$ up to isomorphism. The conjecture: for each fixed $n$ there are an integer $N$ and finitely many polynomials $g_1, \dots, g_k$ such that $f(p^n) = g_i(p)$, where $i$ depends only on $p \bmod N$.

**Posed.** Graham Higman, "Enumerating $p$-groups. I: Inequalities" and "II: Problems whose solution is PORC", Proc. London Math. Soc. (3) 10 (1960), 24–30 and 566–582. In the second paper he proved that the number of groups of order $p^n$ and $p$-class 2 is PORC.

**Where it stands.** Open. It is verified for $n \le 7$: $n = 6$ by Newman, O'Brien and Vaughan-Lee (J. Algebra 278 (2004), 383–401) and $n = 7$ by O'Brien and Vaughan-Lee (J. Algebra 292 (2005), 243–258). The evidence against it has grown. Du Sautoy and Vaughan-Lee (J. Algebra 361 (2012), 287–312; [arXiv:1106.5530](https://arxiv.org/abs/1106.5530)) built a group $G_p$ of order $p^9$ from the elliptic curve $y^2 = x^3 - x$ and showed that the number of its immediate descendants of order $p^{10}$ is not PORC. Seungjai Lee ("A class of descendant $p$-groups of order $p^9$ and Higman's PORC conjecture", J. Algebra 468 (2016), 440–447) went one step lower: a family of groups of order $p^8$, one for each $p > 3$, whose number of immediate descendants of order $p^9$ is not PORC. So non-PORC summands already appear in the count for $p^9$. There is also M. Vaughan-Lee, "Non-PORC behaviour in groups of order $p^7$", J. Algebra 500 (2018), 30–45; the paper exists, but its abstract could not be read for this survey. Since the total for $p^7$ is PORC, any non-PORC behaviour there concerns a sub-count. None of this disproves the conjecture, because non-PORC pieces could cancel in the total, but many experts doubt it at $n = 10$. Searches covering 2025–26 found no resolution.

**Smallest open case.** $n = 8$: decide whether the number of groups of order $p^8$ is PORC in $p$.

**Why it is hard.** Counting the groups of order $p^n$ means classifying them, and the classification becomes wild as $n$ grows. Individual families are counted by the number of $\mathbb{F}_p$-points on algebraic varieties such as elliptic curves, and those counts are not PORC. The conjecture needs such terms to cancel in the grand total, and no method controls the whole total at once. Higman's own method works only for class 2.

**Sources.** [Groupprops: Higman's PORC conjecture](https://groupprops.subwiki.org/wiki/Higman's_PORC_conjecture) · [arXiv:1106.5530](https://arxiv.org/abs/1106.5530) · [arXiv:1808.04145](https://arxiv.org/abs/1808.04145) · [doi:10.1016/j.jalgebra.2016.08.042](https://doi.org/10.1016/j.jalgebra.2016.08.042) · [ScienceDirect S0021869316303209](https://www.sciencedirect.com/science/article/pii/S0021869316303209) · [doi:10.1016/j.jalgebra.2016.07.042](https://doi.org/10.1016/j.jalgebra.2016.07.042) · [doi:10.1016/j.jalgebra.2003.11.012](https://doi.org/10.1016/j.jalgebra.2003.11.012) · [doi:10.1016/j.jalgebra.2005.01.019](https://doi.org/10.1016/j.jalgebra.2005.01.019)

*Fact-check: corrected (non-PORC behaviour already appears at $p^9$, Lee 2016; Vaughan-Lee 2018 added).*

### ★ Babai's conjecture on diameters of finite simple groups

**What it asks.** Choose any set of generators of a finite simple group and ask how many steps it takes to reach every element. Babai conjectured that the answer is always small, polylogarithmic in the order of the group. For the alternating group $A_n$, of order $n!/2$, $\log |A_n|$ is about $n \log n$, so the conjecture asks for a bound polynomial in $n$. Bad generating sets can be thin: a transposition and an $n$-cycle generate $S_n$ with diameter of order $n^2$.

Precisely: there is an absolute constant $C$ such that for every nonabelian finite simple group $G$ and every generating set $S$ of $G$, every element of $G$ is a product of at most $(\log |G|)^C$ elements of $S \cup S^{-1}$. In other words, the Cayley graph $\mathrm{Cay}(G,S)$ has diameter at most $(\log |G|)^C$.

**Posed.** L. Babai, stated in L. Babai and A. Seress, "On the diameter of permutation groups", European J. Combin. 13 (1992), 231–243.

**Where it stands.** Partially solved. It holds for groups of Lie type of bounded rank, from H. Helfgott's work on $\mathrm{SL}_2(p)$ (2008), E. Breuillard, B. Green and T. Tao (GAFA 21, 2011), and L. Pyber and E. Szabó (J. Amer. Math. Soc. 29 (2016), 95–146). For $A_n$ and $S_n$ the best general bound is quasipolynomial, $\exp(O((\log n)^4 \log\log n))$ (H. Helfgott and A. Seress, Annals of Math. 179 (2014), 611–658). For classical groups of high rank the results are partial. S. Eberhard and U. Jezernik (Invent. Math. 227 (2022), 149–210; [arXiv:2005.09990](https://arxiv.org/abs/2005.09990)) show that for a quasisimple classical group $\mathrm{SCl}_n(q)$ with $n$ large and $k \ge q^C$ random generators, the diameter is at most $q^2 n^{O(1)}$ with probability $1 - o(1)$; they also handle $k = 3$ for $\mathrm{SL}_n(p)$ with $p$ of bounded size. This gives Babai's bound only when $q$ is bounded. S. Eberhard (J. Algebra 653 (2024), 220–256; [arXiv:2308.07086](https://arxiv.org/abs/2308.07086)) proved a bound $(n \log q)^C$ for generating sets that contain a transvection, and hence the conjecture for $\mathrm{SL}_n$, $\mathrm{SU}_n$ and $\mathrm{Sp}_{2n}$ over small fields with three random generators. No resolution for $A_n$ or for unbounded rank was found for 2025–26.

**Smallest open case.** The alternating groups: a bound polynomial in $n$ on the diameter of every Cayley graph of $A_n$, where the best known is $\exp(O((\log n)^4 \log\log n))$. For classical groups of unbounded rank, even random generators give Babai's bound only over fields of bounded size.

**Why it is hard.** The product theorems behind the bounded-rank case give growth constants that depend on the rank, so they do not give polylogarithmic bounds uniformly. For $A_n$, no growth theorem of the required strength is known for arbitrary generating sets.

**Sources.** [arXiv:1109.3550](https://arxiv.org/abs/1109.3550) · [arXiv:2308.07086](https://arxiv.org/abs/2308.07086) · [arXiv:2005.09990](https://arxiv.org/abs/2005.09990) · [Eberhard–Jezernik, Invent. Math., doi](https://doi.org/10.1007/s00222-021-01065-x) · [Eberhard, J. Algebra, doi](https://doi.org/10.1016/j.jalgebra.2024.05.009) · [Babai–Seress 1992, doi](https://doi.org/10.1016/s0195-6698(05)80029-0)

*Fact-check: corrected (the Eberhard–Jezernik result gives Babai's bound only for bounded field size $q$).*

### Are all hyperbolic groups residually finite?

**What it asks.** A group is residually finite if every nontrivial element survives in some finite quotient. $\mathbb{Z}$ is: an integer $n \ne 0$ stays nonzero in $\mathbb{Z}/m$ for any $m > |n|$. Hyperbolic groups, in Gromov's sense, are the finitely generated groups whose Cayley graphs have thin triangles, as in the hyperbolic plane. The question is whether all of them are residually finite. Kapovich and Wise (J. Algebra 223, 2000) showed this is equivalent to asking whether every nontrivial hyperbolic group has at least one proper subgroup of finite index.

**Posed.** Usually attributed to M. Gromov, in connection with his 1987 memoir "Hyperbolic groups". It is Question 1.15 in M. Bestvina's list "Questions in geometric group theory". Kourovka 12.64 (Olshanskii) and 18.88 (Sapir) link it to Burnside-type problems.

**Where it stands.** Open. Hyperbolic groups that act geometrically on CAT(0) cube complexes are residually finite (I. Agol, 2013, building on D. Wise). J. Kim and D. Lee claimed a counterexample ([arXiv:1903.00838](https://arxiv.org/abs/1903.00838), 2019) and withdrew it because of an error in Section 4. X. Tang ([arXiv:2305.15650](https://arxiv.org/abs/2305.15650), 2023) showed that if a counterexample exists, a "rigid" one exists. H. Wilton, with an appendix by A. Sisto ([arXiv:2410.00556](https://arxiv.org/abs/2410.00556), 2024), showed that a positive answer would imply the congruence subgroup property for mapping class groups, with consequences for profinite rigidity. Searches covering 2025–26 found no resolution.

**Smallest open case.** Not identifiable from the survey data. What exists instead are two reductions: by Kapovich–Wise it is enough to find a proper finite-index subgroup in every nontrivial hyperbolic group, and by Tang it is enough to rule out rigid counterexamples.

**Why it is hard.** Finite quotients of hyperbolic groups come from extra geometric structure, such as special cube complexes, which a general hyperbolic group need not have. A counterexample would need a hyperbolic group with no proper finite-index subgroup, and small-cancellation constructions have no tools for certifying that absence. The question is also bound up with other open problems, the congruence subgroup property and the Bridson–Reid conjecture.

**Sources.** [arXiv:2410.00556](https://arxiv.org/abs/2410.00556) · [arXiv:1903.00838](https://arxiv.org/abs/1903.00838) · [arXiv:2305.15650](https://arxiv.org/abs/2305.15650) · [Kourovka Notebook, arXiv:1401.0300](https://arxiv.org/abs/1401.0300) · [Kourovka Notebook No. 21 (PDF)](https://kourovkanotebookorg.wordpress.com/wp-content/uploads/2026/09/21tkt-1.pdf) · [Bestvina, Questions in geometric group theory (PDF)](https://www.math.utah.edu/~bestvina/eprints/questions-updated.pdf) · [Kapovich–Wise 2000, doi](https://doi.org/10.1006/jabr.1999.8104)

*Fact-check: confirmed.*

### Is Richard Thompson's group F amenable?

**What it asks.** $F$ is the group of piecewise-linear homeomorphisms of $[0,1]$ whose breakpoints are dyadic rationals and whose slopes are powers of 2. One element sends $[0,\tfrac12]$ to $[0,\tfrac14]$, $[\tfrac12,\tfrac34]$ to $[\tfrac14,\tfrac12]$ and $[\tfrac34,1]$ to $[\tfrac12,1]$, linearly on each piece, with slopes $\tfrac12$, 1 and 2. A group is amenable if it carries a finitely additive, left-invariant probability measure defined on all of its subsets. Abelian groups are amenable; a group containing a nonabelian free subgroup is not. $F$ falls between the two standard tests, and nobody knows which side it is on.

$F$ has the presentation

$$
F = \langle x_0, x_1 \mid [x_0 x_1^{-1},\, x_0^{-1} x_1 x_0],\ [x_0 x_1^{-1},\, x_0^{-2} x_1 x_0^2] \rangle .
$$

**Posed.** R. Geoghegan, who conjectured in 1979 that $F$ is not amenable. It is Kourovka Problem 12.20 (R. I. Grigorchuk, 12th issue).

**Where it stands.** Open; Kourovka 12.20 is unmarked. $F$ is not elementary amenable, and it has no nonabelian free subgroups (Brin and Squier, 1985). At least four claimed solutions have failed:

1. E. Shavgulidze, amenable (2009); J. T. Moore documented the errors ([arXiv:1102.0747](https://arxiv.org/abs/1102.0747)).
2. A. Akhmedov, non-amenable ([arXiv:0902.3849](https://arxiv.org/abs/0902.3849)); several versions from 2009 to 2013, finally withdrawn in December 2013.
3. J. T. Moore, amenable ([arXiv:1209.2063](https://arxiv.org/abs/1209.2063), September 2012); withdrawn on 1 October 2012 after Akhmedov found an error in Lemma 4.13 that Moore called "serious and irreparable".
4. B. Wajnryb and P. Witowicz, non-amenable ([arXiv:1408.2188](https://arxiv.org/abs/1408.2188), 2014); withdrawn in 2015.

V. Guba surveyed the problem in J. Groups Complex. Cryptol. 15(1) (2023); among his results, the density of the Cayley graph of $F$ in the standard generators is strictly greater than 3.5. A 2026 comment in Kourovka on Problem 15.42 ties the question to ring theory. It cites D. Kielak's appendix to L. Bartholdi ([arXiv:1605.09133](https://arxiv.org/abs/1605.09133), v2), which proves that a group ring without zero divisors is an Ore domain exactly when the group is amenable. So Kourovka 15.42, the Ore condition for $k[F]$, is equivalent to 12.20.

**Smallest open case.** Not identifiable from the survey data.

**Why it is hard.** $F$ avoids the standard source of non-amenability (it has no free subgroups) and the standard source of amenability (it is not elementary amenable). Any Følner sets would have to be exotic, and numerical isoperimetric estimates on its Cayley graphs have not been decisive. Several proofs in both directions have turned out to be wrong.

**Sources.** [Kourovka Notebook, arXiv:1401.0300](https://arxiv.org/abs/1401.0300) · [Wikipedia: Thompson groups](https://en.wikipedia.org/wiki/Thompson_groups) · [Guba's survey (PDF)](https://gcc.episciences.org/11315/pdf) · [Guba's survey, journal page](https://gcc.episciences.org/11315) · [arXiv:1209.2063](https://arxiv.org/abs/1209.2063) · [arXiv:0902.3849](https://arxiv.org/abs/0902.3849) · [arXiv:1408.2188](https://arxiv.org/abs/1408.2188) · [arXiv:1102.0747](https://arxiv.org/abs/1102.0747) · [arXiv:2305.07113](https://arxiv.org/abs/2305.07113) · [arXiv:1605.09133](https://arxiv.org/abs/1605.09133) · [Kourovka Notebook No. 21 (PDF)](https://kourovkanotebookorg.wordpress.com/wp-content/uploads/2026/09/21tkt-1.pdf)

*Fact-check: corrected (at least four failed claims, not two; the Kourovka 15.42 comment rests on Kielak's appendix to Bartholdi).*

### Boone–Higman conjecture

**What it asks.** A finitely generated group has solvable word problem if some algorithm decides whether a word in the generators equals 1. The conjecture matches this algorithmic property with an algebraic one: the groups with solvable word problem should be exactly the finitely generated subgroups of finitely presented simple groups. One direction is classical, because finitely presented simple groups and their finitely generated subgroups have solvable word problem. The open direction: does every finitely generated group with solvable word problem embed in some finitely presented simple group?

**Posed.** W. W. Boone and G. Higman, J. Austral. Math. Soc. 18 (1974), 41–53 (1973, published 1974). They proved that every such group embeds in a simple subgroup of a finitely presented group. It is also Kourovka Problem 20.7 (J. Belk).

**Where it stands.** Partially solved, open in general; Kourovka 20.7 is unmarked. It is proved for all hyperbolic groups (J. Belk, C. Bleak, F. Matucci and M. Zaremsky, Duke Math. J. 175(9) (2026); [arXiv:2309.06224](https://arxiv.org/abs/2309.06224)) and for contracting self-similar groups (J. Belk and F. Matucci, Groups Geom. Dyn., 2025). J. Belk, F. Fournier-Facio, J. Hyde and M. Zaremsky ([arXiv:2503.21882](https://arxiv.org/abs/2503.21882), 2025; v3 accepted by Proc. London Math. Soc.) proved it for $\mathrm{Aut}(F_n)$ for all $n$, and hence for mapping class groups of non-closed surfaces, braid groups and certain Artin groups. In the same paper free solvable groups follow from a different argument: a permutational form of the conjecture is closed under free and regular wreath products. The paper also reduces the case of finitely generated 3-manifold groups to closed graph manifolds that are not Seifert fibred. Survey: Belk, Bleak, Matucci and Zaremsky, "Progress around the Boone–Higman conjecture", EMS Surveys in Math. Sci. (2025), [arXiv:2306.16356](https://arxiv.org/abs/2306.16356).

**Smallest open case.** Fundamental groups of closed graph manifolds that are not Seifert fibred: by Belk, Fournier-Facio, Hyde and Zaremsky these are all that remain among finitely generated 3-manifold groups.

**Why it is hard.** Finitely presented infinite simple groups are rare and hard to build; the known ones are mostly Thompson-like groups. An embedding must place an arbitrary group, known only to have an algorithm for its word problem, inside such a group while keeping the ambient group finitely presented. No general mechanism turns an algorithm for the word problem into finitely many relations inside a simple group.

**Sources.** [arXiv:2309.06224](https://arxiv.org/abs/2309.06224) · [arXiv:2503.21882](https://arxiv.org/abs/2503.21882) · [arXiv:2306.16356](https://arxiv.org/abs/2306.16356) · [Kourovka Notebook, arXiv:1401.0300](https://arxiv.org/abs/1401.0300) · [Duke Math. J. 2026, doi](https://doi.org/10.1215/00127094-2025-0055) · [EMS Surveys 2025, doi](https://doi.org/10.4171/emss/101) · [Belk–Matucci, Groups Geom. Dyn., doi](https://doi.org/10.4171/ggd/898) · [Boone–Higman 1974, doi](https://doi.org/10.1017/s1446788700019108)

*Fact-check: corrected (hyperbolic case now published in Duke 2026; survey and Belk–Matucci references added; free solvable groups come from wreath-product closure).*

### Kervaire (Kervaire–Laudenbach) conjecture

**What it asks.** Start with a nontrivial group $G$, add one new generator $t$ and one new relation. Can the result be trivial? Kervaire conjectured that it cannot. The new generator must have infinite order for this to have a chance: with a generator of finite order the group can collapse. Take $\mathbb{Z}/2 = \langle a \rangle$, add $b$ of order 3, and impose $ab = 1$. Then $b = a^{-1}$, so $a^3 = 1$; with $a^2 = 1$ this gives $a = 1$, and then $b = 1$.

Precisely: if $G \ne 1$ and $w$ is any element of the free product $G \ast \langle t \rangle$, then $(G \ast \langle t \rangle)/\langle\langle w \rangle\rangle \ne 1$. Equivalently (Kourovka 17.94), $\mathbb{Z} \ast G$ with $G \ne 1$ is never the normal closure of a single element. The stronger Kervaire–Laudenbach conjecture: if the exponent sum of $t$ in $w$ is nonzero, then $G$ embeds in $(G \ast \langle t \rangle)/\langle\langle w \rangle\rangle$. Kourovka 18.87 states it as solvability of independent systems of equations over $G$.

**Posed.** M. Kervaire, from his 1965 classification of high-dimensional knot groups. The stronger equation form is attributed jointly to Kervaire and F. Laudenbach. It appears as Kourovka Problems 17.94 (J. Mycielski, "well-known problem") and 18.87 (V. A. Roman'kov).

**Where it stands.** Partially solved, open in general; Kourovka 17.94 and 18.87 are unmarked. It holds for finite and residually finite $G$ (M. Gerstenhaber and O. S. Rothaus, PNAS 1962), extended by V. Pestov to hyperlinear groups, and for torsion-free $G$ (A. Klyachko, Commun. Algebra 21, 1993). L. Chen gave a new proof of Klyachko's theorem with stable commutator length ([arXiv:2302.09811](https://arxiv.org/abs/2302.09811), Trans. AMS) and writes that no significant breakthrough beyond Klyachko's theorem has been made. Two 2026 preprints, neither refereed yet, bear on possible approaches. A. Thom ([arXiv:2609.27795](https://arxiv.org/abs/2609.27795)) showed conditionally that a non-hyperlinear group exists; if such groups exist, the Gerstenhaber–Rothaus–Pestov method cannot settle the general case. S. Fisher and Y. Lodha ([arXiv:2608.25988](https://arxiv.org/abs/2608.25988)) disproved the Osin–Thom conjecture relating first $L^2$-Betti numbers to normal rank, which had been proposed as a route to Kervaire-type and Wiegold-type problems.

**Smallest open case.** Not identifiable from the survey data as a single group. The known cases say where to look: a counterexample must contain torsion (Klyachko) and must not be hyperlinear (Gerstenhaber–Rothaus, Pestov), and no non-hyperlinear group had a refereed construction by 30 September 2026.

**Why it is hard.** With torsion allowed, one-relator quotients of free products can collapse, as in the example above; in general $(\mathbb{Z}/m \ast \mathbb{Z}/n)/\langle\langle ab \rangle\rangle$ is trivial when $m$ and $n$ are coprime. A proof therefore has to use the infinite cyclic factor with care. Each available tool covers only a restricted class: topological degree arguments for residually finite and hyperlinear groups, orderability and local indicability for torsion-free groups.

**Sources.** [arXiv:2302.09811](https://arxiv.org/abs/2302.09811) · [Kourovka Notebook, arXiv:1401.0300](https://arxiv.org/abs/1401.0300) · [arXiv:2608.25988](https://arxiv.org/abs/2608.25988) · [arXiv:2609.27795](https://arxiv.org/abs/2609.27795) · [Klyachko 1993, doi](https://doi.org/10.1080/00927879308824692) · [Kourovka Notebook No. 21 (PDF)](https://kourovkanotebookorg.wordpress.com/wp-content/uploads/2026/09/21tkt-1.pdf)

*Fact-check: confirmed.*

### ★ Word problem (and conjugacy problem) for Artin–Tits groups

**What it asks.** An Artin group has a set $S$ of generators and, for some pairs $s \ne t$, one relation of braid type, $stst\cdots = tsts\cdots$, with both sides of the same length $m_{s,t}$. With $m_{s,t} = 2$ the relation says $st = ts$; with $m_{s,t} = 3$ it says $sts = tst$. The question is whether there is an algorithm that decides, for every finitely generated Artin group, whether a given word in the generators equals the identity. The same question is asked for conjugacy. Both are conjectured to be decidable.

**Posed.** No single originating paper has been identified. The question has been open in general since P. Deligne (Invent. Math. 17 (1972), 273–302) and Brieskorn–Saito solved the spherical case, where the associated Coxeter group is finite, in 1972. Wikipedia lists it among the basic open questions for general Artin groups.

**Where it stands.** Open, with many classes solved:

- spherical type (Deligne; Brieskorn–Saito, 1972);
- right-angled Artin groups, in linear time;
- FC type (Altobelli–Charney, Geom. Dedicata 79, 2000);
- extra-large type, including conjugacy (Appel–Schupp, Invent. Math. 72, 1983); these groups are also biautomatic (Peifer 1996);
- large type (Holt–Rees, Proc. LMS 104, 2012), which are shortlex automatic;
- affine (Euclidean) type (McCammond–Sulway, Invent. Math. 210, 2017), with trivial centre;
- locally non-spherical, or 2-dimensional, type (Chermak, J. Algebra 200 (1998), 56–98);
- all Artin groups of rank three (Delucchi–Paolini–Salvetti, Geom. Topol. 28 (2024), 4295–4336, [arXiv:2206.14518](https://arxiv.org/abs/2206.14518)), which also gives the $K(\pi,1)$ conjecture and a trivial centre for them;
- 3-free Artin groups, in quadratic time (Blasco-García, Cumplido and Morris-Wright, [arXiv:2204.03523](https://arxiv.org/abs/2204.03523), 2022);
- groups with no $A_3$ or $B_3$ subdiagram, by quadratic-time geodesic rewriting (Blasco-García, Cumplido, Holt, Morris-Wright and Rees, [arXiv:2412.12195](https://arxiv.org/abs/2412.12195), December 2024);
- groups with no edge labelled 3, including the even Artin groups, through an $n^6$ isoperimetric function (Juhász, [arXiv:2507.16770](https://arxiv.org/abs/2507.16770), July 2025).

The last three items are cited from arXiv, and the sources checked give no journal version for them. An arXiv search through September 2026 found no solution for all Artin groups. The related $K(\pi,1)$ conjecture is in the list of further problems below.

**Smallest open case.** Not identifiable from the survey data as a single group. The solved classes narrow the search: an open case needs at least four generators (rank three is done), must contain an $A_3$ or $B_3$ subdiagram and an edge labelled 3, and must avoid every solved type listed above.

**Why it is hard.** Outside the spherical case the Artin monoid does not give the group as a group of fractions, so Garside normal forms are unavailable. No uniform nonpositively curved model, such as a CAT(0) complex, is known for all Artin groups. Each technique found so far (small cancellation, CAT(0) cube complexes, dual Garside structures, rewriting systems) covers only a restricted class of Coxeter diagrams.

**Sources.** [Wikipedia: Artin–Tits group (raw)](https://en.wikipedia.org/w/index.php?title=Artin%E2%80%93Tits_group&action=raw) · [arXiv:2206.14518](https://arxiv.org/abs/2206.14518) · [Geom. Topol. 2024, doi](https://doi.org/10.2140/gt.2024.28.4295) · [arXiv:2204.03523](https://arxiv.org/abs/2204.03523) · [arXiv:2412.12195](https://arxiv.org/abs/2412.12195) · [arXiv:2507.16770](https://arxiv.org/abs/2507.16770) · [arXiv search, "word problem" Artin groups](https://arxiv.org/search/?query=%22word+problem%22+Artin+groups&searchtype=all&order=-announced_date_first&size=25) · [Deligne 1972, doi](https://doi.org/10.1007/bf01406236) · [McCammond–Sulway 2017, doi](https://doi.org/10.1007/s00222-017-0728-2) · [Appel–Schupp 1983, doi](https://doi.org/10.1007/BF01389320) · [zbMATH: Locally non-spherical Artin groups](https://zbmath.org/?q=ti%3A%22Locally+non-spherical+Artin+groups%22)

*Fact-check: corrected (added the affine, large and two-dimensional types to the solved classes, and the 3-free source arXiv:2204.03523).*

### ★ Černý conjecture (synchronizing automata and transformation semigroups)

**What it asks.** A deterministic automaton with $n$ states reads letters, and each letter moves every state to some state. A word is a reset word if reading it sends every starting state to the same final state. Černý conjectured that whenever a reset word exists, there is one of length at most $(n-1)^2$. A small case: states 0, 1, 2; the letter $a$ sends $i$ to $i+1 \bmod 3$; the letter $b$ sends 0 to 1 and fixes 1 and 2. Reading $baab$ moves the set of possible states from $\lbrace 0,1,2 \rbrace$ to $\lbrace 1,2 \rbrace$, $\lbrace 2,0 \rbrace$, $\lbrace 0,1 \rbrace$ and finally $\lbrace 1 \rbrace$. A search over all words of length at most 3 finds no shorter reset word, so this automaton needs exactly $(3-1)^2 = 4$ letters. It is the $n = 3$ member of the Černý automata, which show that $(n-1)^2$ would be sharp.

Precisely: if a complete deterministic finite automaton with $n$ states is synchronizing, it has a synchronizing word of length at most $(n-1)^2$. In semigroup terms: if a set of transformations of an $n$-element set generates a semigroup that contains a constant map, then some constant map is a product of at most $(n-1)^2$ generators.

**Posed.** Ján Černý. His 1964 paper gave the extremal automata with reset threshold $(n-1)^2$; Wikipedia dates the conjecture to 1969.

**Where it stands.** Open. The best general upper bound is cubic, about $0.1654\, n^3$ (Y. Shitov, JALC 24 (2019), [arXiv:1901.06542](https://arxiv.org/abs/1901.06542)). The conjecture is proved for many classes, catalogued in M. Volkov's list ([arXiv:2508.15655](https://arxiv.org/abs/2508.15655), reflecting the state of the art as of 13 January 2026). Recent additions are Černý-type automata and monoids (I. Rystsov, [arXiv:2501.19166](https://arxiv.org/abs/2501.19166), January 2025) and one-cluster automata (Zhu, [arXiv:2607.19675](https://arxiv.org/abs/2607.19675), July 2026, with an explicit bound at most $(n-1)^2$; the paper says the proof was obtained with OpenAI Codex). Both are preprints and have not been refereed. M. Szykuła's survey "Synchronizing Automata: Open Problems" ([arXiv:2608.24245](https://arxiv.org/abs/2608.24245), August 2026) treats the conjecture as open. A. Trahtman's repeated claimed proofs ([arXiv:2110.06839](https://arxiv.org/abs/2110.06839), 2021; [arXiv:2203.14822](https://arxiv.org/abs/2203.14822), 2022, revised up to v10) are not accepted.

**Smallest open case.** Not identifiable from the survey data as a value of $n$. In general the gap is between the conjectured $(n-1)^2$ and the proved $0.1654\, n^3$. Class by class, the next step is a class of automata outside Volkov's list; the recent additions came one class at a time (Rystsov 2025, Zhu 2026).

**Why it is hard.** Counting and linear-algebra arguments give only cubic bounds. Extremal and near-extremal automata are rare and have little structure, so there is no inductive handle that yields a quadratic bound in general.

**Sources.** [Wikipedia: Synchronizing word (raw)](https://en.wikipedia.org/w/index.php?title=Synchronizing_word&action=raw) · [arXiv:1901.06542](https://arxiv.org/abs/1901.06542) · [arXiv:2508.15655](https://arxiv.org/abs/2508.15655) · [arXiv:2501.19166](https://arxiv.org/abs/2501.19166) · [arXiv:2607.19675](https://arxiv.org/abs/2607.19675) · [arXiv:2608.24245](https://arxiv.org/abs/2608.24245) · [arXiv:2203.14822](https://arxiv.org/abs/2203.14822) · [arXiv search, Černý conjecture](https://arxiv.org/search/?query=%C4%8Cern%C3%BD+conjecture&searchtype=all&order=-announced_date_first&size=25)

*Fact-check: corrected (Trahtman's claimed proofs date from 2021–22, not 2019).*

### ★ Wilf's conjecture on numerical semigroups

**What it asks.** A numerical semigroup is a set of non-negative integers that contains 0, is closed under addition and misses only finitely many numbers. The one generated by 3 and 5 is $\lbrace 0, 3, 5, 6, 8, 9, 10, \dots \rbrace$. It misses 1, 2, 4 and 7, so its genus is $g = 4$; it contains every number from $c = 8$ on, the conductor; and it has $e = 2$ minimal generators. Wilf's inequality is $e(c - g) \ge c$. Here $c - g = 4$ counts the elements 0, 3, 5, 6 below the conductor, and $2 \cdot 4 = 8 = c$: the inequality holds with equality.

Precisely: let $S$ be a submonoid of the non-negative integers with finite complement, $e$ its number of minimal generators (the embedding dimension), $c$ its conductor (the least integer with every $n \ge c$ in $S$) and $g$ its genus (the number of gaps). Then

$$
e\,(c - g) \ge c .
$$

Equivalently, at least $c/e$ elements of $S$ lie below the conductor. Below, $m$ is the multiplicity, the smallest positive element of $S$.

**Posed.** Herbert S. Wilf, "A circle-of-lights algorithm for the money-changing problem", Amer. Math. Monthly 85, 562–565 (1978).

**Where it stands.** Open; no proof or counterexample through September 2026. Known cases:

- $e \le 3$ (classical);
- $e \ge m/2$ (Sammartano, 2012);
- $c \le 3m$ (Eliahou, [arXiv:1703.01761](https://arxiv.org/abs/1703.01761));
- $m \le 18$ (Bruns, García-Sánchez, O'Neill and Wilburne, [arXiv:1903.04342](https://arxiv.org/abs/1903.04342));
- at most 12 elements below the conductor (Eliahou and Marín-Aragón, [arXiv:2006.01480](https://arxiv.org/abs/2006.01480));
- genus at most 100, by computer (Delgado, Eliahou and Fromentin, [arXiv:2310.07742](https://arxiv.org/abs/2310.07742));
- conductor at most 200 (Bacher, [arXiv:2604.25051](https://arxiv.org/abs/2604.25051), a 2026 preprint, not refereed).

Delgado, Kumar and Marion ([arXiv:2501.04417](https://arxiv.org/abs/2501.04417)) show that almost all semigroups with large maximum primitive satisfy it, and the inequality is preserved under gluing (Singh and Srinivasan, [arXiv:2306.09876](https://arxiv.org/abs/2306.09876)).

**Smallest open case.** Multiplicity $m = 19$, the first multiplicity not covered by the $m \le 18$ computation. Together with the other known cases, a counterexample would also need $e \ge 4$, $e < m/2$, $c > 3m$, genus above 100, conductor above 200 (from Bacher's preprint) and more than 12 elements below the conductor.

**Why it is hard.** Eliahou and Fromentin's "near-misses" show that a natural strengthening of the inequality, written $W_0(S) \ge 0$, is false, so a proof cannot go through it. Known methods cover only regimes such as small $c/m$ or large $e/m$. The number of semigroups of genus $g$ grows exponentially, which limits computer search.

**Sources.** [arXiv:2310.07742](https://arxiv.org/abs/2310.07742) · [arXiv:1703.01761](https://arxiv.org/abs/1703.01761) · [arXiv:1903.04342](https://arxiv.org/abs/1903.04342) · [arXiv:2006.01480](https://arxiv.org/abs/2006.01480) · [arXiv:2501.04417](https://arxiv.org/abs/2501.04417) · [arXiv:2604.25051](https://arxiv.org/abs/2604.25051) · [arXiv:1710.03623](https://arxiv.org/abs/1710.03623)

*Fact-check: not checked; the fact-checker did not review this entry.*

## Recently settled

The last two entries were found by the fact-checker and carry a solved status. They were moved here from its list of further problems, as the completeness critic advised, and no second reader has re-checked them.

### Is every group sofic?

**What it asked.** A group is sofic if its finite pieces can be modelled arbitrarily well by permutations of a finite set. Precisely: for every finite set $F \subseteq G$ containing 1 and every $\varepsilon > 0$ there is a map $\varphi: F \to S_n$ with $\varphi(1) = 1$ that is an $\varepsilon$-approximate homomorphism in normalised Hamming distance and sends each $g \ne 1$ to an almost fixed-point-free permutation. All amenable groups and all residually finite groups are sofic. The question was whether every group is. M. Gromov introduced the notion (J. Eur. Math. Soc. 1, 1999), B. Weiss named it (Sankhya, 2000), and A. Lubotzky posed the question as Kourovka Problem 21.86 in the 21st issue (2026).

**How it was settled.** The answer is no, but the disproof is provisional: as of 30 September 2026 it has no refereed publication. On 1 August 2026 OpenAI announced a non-sofic group in its post "Ten advances in mathematics and theoretical computer science". MathWorld cites the chapter as "A Counterexample to the Soficity Conjecture" and describes the proof as exhibiting a finitely generated non-sofic subgroup of the unit group $L_{\mathbb{F}_2}(1,2)^{\times}$ of the binary Leavitt algebra, which makes that unit group non-sofic. The work was produced with an unreleased model and reportedly comes with Lean certificates. Its key criterion rests on G. Kun ([arXiv:1606.04471](https://arxiv.org/abs/1606.04471), 2016) and G. Kun and A. Thom ([arXiv:1901.03963](https://arxiv.org/abs/1901.03963), 2019); the eventual proof combines property (T) rigidity with their results on centralizers of sofic approximations.

Follow-ups came within weeks, all as August 2026 preprints that have not been refereed. F. Fournier-Facio built torsion-free non-sofic groups with the same criterion ([arXiv:2608.02025](https://arxiv.org/abs/2608.02025)). Kun and Thom showed that certain generalized wreath products and doubles of residually finite Kazhdan groups are non-sofic ([arXiv:2608.06222](https://arxiv.org/abs/2608.06222)), and V. Alekseev and Thom proved a related centralizer theorem ([arXiv:2608.05362](https://arxiv.org/abs/2608.05362)). An independent audit by M. and K. Sienicki ([arXiv:2608.14673](https://arxiv.org/abs/2608.14673), v3 September 2026) reports no confirmed substantive error in the principal results, but notes that the depth of review is uneven. In a guest post on T. Tao's blog (11 September 2026) Thom says he was astonished by the result. He objects to the announcement's claim that the area had gone a decade without progress, which OpenAI later revised, and raises concerns about data provenance. The Kourovka October 2026 update lists 21.86 with neither ∗ nor ♯.

Three questions that were known for sofic groups stay open, since the new groups have not been shown to violate them: Gottschalk's surjunctivity conjecture, Kaplansky's direct finiteness conjecture and the hyperlinearity question. For hyperlinearity there is Thom's conditional construction ([arXiv:2609.27795](https://arxiv.org/abs/2609.27795)) and an AI-generated non-hyperlinear group announced by Jihao Liu on 20 September 2026, checked so far only by machine (reported by F. Fournier-Facio, 25 September 2026).

**Sources.** [arXiv:2608.02025](https://arxiv.org/abs/2608.02025) · [arXiv:2608.06222](https://arxiv.org/abs/2608.06222) · [Thom's guest post on Tao's blog, 11 September 2026](https://terrytao.wordpress.com/2026/09/11/on-the-existence-of-non-sofic-groups/) · [Wikipedia: Sofic group](https://en.wikipedia.org/wiki/Sofic_group) · [MathWorld: Soficity Conjecture](https://mathworld.wolfram.com/SoficityConjecture.html) · [arXiv:2608.14673](https://arxiv.org/abs/2608.14673) · [Fournier-Facio, Proofs and Prompts, 25 September 2026](https://proofsandprompts.com/2026/09/25/from-non-sofic-to-non-hyperlinear-groups-the-new-messiness-of-discovering-and-announcing-big-results/) · [Kourovka Notebook No. 21 (PDF)](https://kourovkanotebookorg.wordpress.com/wp-content/uploads/2026/09/21tkt-1.pdf)

*Fact-check: corrected (title and venue of the announcement; Thom's post and its wording; the Sienicki audit; Liu's non-hyperlinear announcement; "disproved" is provisional until refereed).*

### Wiegold problem (Kourovka 5.52)

**What it asked.** A group is perfect if it equals its commutator subgroup. Every finite perfect group is the normal closure of a single element. J. Wiegold asked, as Kourovka Problem 5.52 (1976), whether the same holds for every finitely generated perfect group: does such a group always have normal rank (weight) 1?

**How it was settled.** No. Lvzhou Chen and Yash Lodha, "The Wiegold problem and free products of left-orderable groups" ([arXiv:2510.26073](https://arxiv.org/abs/2510.26073), October 2025; v2 adds applications to Dehn surgery), prove that any free product of nontrivial left-orderable groups has normal rank greater than 1. Free products of finitely generated perfect left-orderable groups are therefore finitely generated, even finitely presented, perfect groups that are not normally generated by one element. The lower bound comes from a spectral-gap property for an unsigned version of stable commutator length, and the argument needs a new construction of left-orders on free products. The Kourovka Notebook marks 5.52 as solved (∗). The paper is still a preprint: no journal publication had been confirmed by 30 September 2026, so it has not been refereed as far as the sources show.

**Sources.** [arXiv:2510.26073](https://arxiv.org/abs/2510.26073) · [Kourovka Notebook, arXiv:1401.0300](https://arxiv.org/abs/1401.0300) · [Kourovka Notebook No. 21 (PDF)](https://kourovkanotebookorg.wordpress.com/wp-content/uploads/2026/09/21tkt-1.pdf)

*Fact-check: confirmed.*

### Coherence of one-relator groups (Baumslag's conjecture)

**What it asked.** A group is coherent if every finitely generated subgroup is finitely presented. A one-relator group has a presentation $\langle x_1, \dots, x_n \mid r \rangle$ with a single defining relation. G. Baumslag conjectured that every one-relator group is coherent ("Some problems on one-relator groups", Canberra 1973, Lecture Notes in Math. 372 (1974), 75–81).

**How it was settled.** Proved by A. Jaikin-Zapirain and M. Linton, "On the coherence of one-relator groups and their group algebras" ([arXiv:2303.05976](https://arxiv.org/abs/2303.05976), March 2023), published in Annals of Math. 201(3) (2025), 909–959. They first prove homological coherence for a large class of groups of cohomological dimension two, such as fundamental groups of 2-complexes with non-positive immersions, through the structure of group algebras, and then upgrade the result for one-relator groups with the classical Magnus hierarchy. Earlier partial results: Karrass and Solitar (1970–71) for cyclically and conjugacy pinched one-relator groups, and L. Louder and H. Wilton, "One-relator groups with torsion are coherent", Math. Res. Lett. 27 (2020).

**Sources.** [arXiv:2303.05976](https://arxiv.org/abs/2303.05976) · [Annals 2025, doi](https://doi.org/10.4007/annals.2025.201.3.4) · [Louder–Wilton 2020, doi](https://doi.org/10.4310/mrl.2020.v27.n5.a9) · [Wikipedia: One-relator group](https://en.wikipedia.org/wiki/One-relator_group)

*Fact-check: confirmed.*

### Thompson's conjecture on conjugacy class sizes (Kourovka 12.38)

**What it asked.** For a finite group $G$, let $N(G)$ be the set of sizes of its conjugacy classes. In $S_3$ the classes are the identity, the three transpositions and the two 3-cycles, so $N(S_3) = \lbrace 1, 2, 3 \rbrace$. J. G. Thompson conjectured that this coarse information pins down every simple group: if $S$ is a finite nonabelian simple group and $H$ is a finite group with trivial centre and $N(H) = N(S)$, then $H \cong S$. A. S. Kondratiev and W. J. Shi entered it in the Kourovka Notebook as Problem 12.38 (12th issue, 1992); the conjecture dates from the 1980s.

**How it was settled.** Proved true, with a proof that uses the classification of finite simple groups and goes family by family through alternating groups, groups of Lie type and sporadic groups. The Kourovka Notebook (Archive, 12.38) records the final step as I. B. Gorshkov, "On Thompson's conjecture for finite simple groups", Commun. Algebra 47, no. 12 (2019), 5192–5206 ([arXiv:1806.08427](https://arxiv.org/abs/1806.08427)). It builds on earlier cases by many authors, including Gorshkov's treatment of the alternating groups ([arXiv:1611.05526](https://arxiv.org/abs/1611.05526), Commun. Algebra 47, 2019).

**Sources.** [Kourovka Notebook, arXiv:1401.0300](https://arxiv.org/abs/1401.0300) · [arXiv:1806.08427](https://arxiv.org/abs/1806.08427) · [arXiv:1912.07206](https://arxiv.org/abs/1912.07206) · [doi:10.1080/00927872.2019.1612424](https://doi.org/10.1080/00927872.2019.1612424) · [doi:10.1080/00927872.2018.1448837](https://doi.org/10.1080/00927872.2018.1448837) · [Kourovka Notebook No. 21 (PDF)](https://kourovkanotebookorg.wordpress.com/wp-content/uploads/2026/09/21tkt-1.pdf)

*Fact-check: confirmed.*

### Kazhdan's property (T) for $\mathrm{Aut}(F_n)$

**What it asked.** A group has Kazhdan's property (T) if every unitary representation with almost invariant vectors has a nonzero invariant vector. Does the automorphism group $\mathrm{Aut}(F_n)$ of the free group of rank $n$ have property (T) for large $n$? It is a long-standing question; A. Lubotzky and I. Pak ("The product replacement algorithm and Kazhdan's property (T)", J. Amer. Math. Soc. 14, 2001) tied it to the product replacement algorithm. An earlier original poser could not be confirmed.

**How it was settled.** Yes, for every $n \ge 5$. M. Kaluba, P. W. Nowak and N. Ozawa proved it for $\mathrm{Aut}(F_5)$ (Math. Ann. 375 (2019), 1169–1191), and M. Kaluba, D. Kielak and P. W. Nowak for all $n \ge 6$ (Annals of Math. 193(2) (2021), [arXiv:1812.03456](https://arxiv.org/abs/1812.03456)). Both proofs are computer-assisted: they exhibit sum-of-squares certificates in the group ring, found by semidefinite programming and based on Ozawa's characterization of property (T). Wikipedia notes that no human proof is known. The classical proofs of (T) do not apply because $\mathrm{Aut}(F_n)$ is not a lattice in a higher-rank Lie group.

**Sources.** [Math. Ann. 2019, doi](https://doi.org/10.1007/s00208-019-01874-9) · [Annals 2021, doi](https://doi.org/10.4007/annals.2021.193.2.3) · [arXiv:1812.03456](https://arxiv.org/abs/1812.03456) · [Wikipedia: Kazhdan's property (T)](https://en.wikipedia.org/wiki/Kazhdan%27s_property_(T)) · [Lubotzky–Pak 2001, doi](https://doi.org/10.1090/s0894-0347-00-00356-8)

*Fact-check: supplied by the fact-checker with sources; not re-checked by a second reader.*

### Finitely generated simple groups of intermediate growth (Kourovka 9.8)

**What it asked.** The growth function of a finitely generated group counts the elements that are products of at most $r$ generators and their inverses. In $\mathbb{Z}^2$ this ball has $2r^2 + 2r + 1$ elements, polynomial in $r$; in the free group on two generators it has $2 \cdot 3^r - 1$, exponential. R. I. Grigorchuk asked, as Kourovka Problem 9.8 (9th issue, 1984), whether some finitely generated simple group grows faster than every polynomial but slower than every exponential.

**How it was settled.** Yes. V. Nekrashevych, "Palindromic subshifts and simple periodic groups of intermediate growth", Annals of Math. 187(3) (2018), 667–719. All earlier groups of intermediate growth, starting with Grigorchuk's group, were residually finite branch groups, which are far from simple; Nekrashevych used topological full groups of minimal subshifts together with new growth estimates. Kourovka moved 9.8 to its Archive with this solution. The same result answers Kourovka 15.17 (Bartholdi, Grigorchuk, Šunić) negatively: a finitely generated just-infinite group of intermediate growth need not be a branch group. The resolution dates from 2018, just before the 2019–2026 window of this survey.

**Sources.** [Annals 2018, doi](https://doi.org/10.4007/annals.2018.187.3.2) · [Kourovka Notebook No. 21 (PDF)](https://kourovkanotebookorg.wordpress.com/wp-content/uploads/2026/09/21tkt-1.pdf)

*Fact-check: supplied by the fact-checker with sources; not re-checked by a second reader.*

## Further problems suggested by the fact-checker

The fact-checker found these problems, with sources, while checking the entries above; no second reader has re-checked them.

- **Conjugacy problem for one-relator groups (Kourovka 3.34).** Is there an algorithm that decides whether two words represent conjugate elements of a group $\langle x_1, \dots, x_n \mid r \rangle$? Open in the torsion-free case; solved with torsion, when $r = s^m$ with $m \ge 2$ (B. B. Newman, Bull. AMS 74, 1968). [Wikipedia: One-relator group](https://en.wikipedia.org/wiki/One-relator_group)
- **Gottschalk's surjunctivity conjecture (1973).** For every group $G$ and finite alphabet $S$, is every injective cellular automaton on $S^G$ also surjective? Open; known for all sofic groups, so the 2026 non-sofic groups are now the test cases, and J. Cannizzo's 2019 claimed proof was withdrawn two days after posting. [Wikipedia: Surjunctive group](https://en.wikipedia.org/wiki/Surjunctive_group)
- **Existence of a non-hyperlinear group.** Does every countable group embed in a metric ultraproduct of finite-dimensional unitary groups? Open: Thom's construction needs a positive answer to the centralizer problem for tracial matrix ultraproducts, and Jihao Liu's AI-generated example (20 September 2026) has been checked only by machine; nothing is refereed. [arXiv:2609.27795](https://arxiv.org/abs/2609.27795)
- **Gromov's surface subgroup question.** Does every one-ended hyperbolic group contain the fundamental group of a closed surface of genus at least 2? Partially solved: yes for closed hyperbolic 3-manifold groups (Kahn–Markovic, 2012), random groups in the density model (Calegari–Walker, 2015) and graphs of free groups with cyclic edge groups (Wilton, 2018), which reduces the rest, up to a technical assumption on 2-torsion, to rigid hyperbolic groups. [Bestvina, Questions in geometric group theory (PDF)](https://www.math.utah.edu/~bestvina/eprints/questions-updated.pdf)
- **Whitehead asphericity conjecture (1941).** Is every connected subcomplex of an aspherical 2-dimensional CW complex aspherical? Open; Bestvina and Brady (1997) showed it and the Eilenberg–Ganea conjecture cannot both be true. Of R. Mikhailov's "simplest questions" about it (Kourovka 17.86, 2010), part (b) was answered negatively by Roman'kov (2011) and part (a) is still unsolved; claimed proofs on arXiv (Pasku 2021, Kawauchi 2023) are not known to be accepted. [Wikipedia: Whitehead conjecture](https://en.wikipedia.org/wiki/Whitehead_conjecture)
- **Complexity of the group isomorphism problem.** Given two groups of order $n$ by their multiplication tables, can one decide isomorphism in time polynomial in $n$? Open; the best general bound cited in 2023 is $n^{(1/4 + o(1)) \log n}$ (Rosenbaum, 2013), and X. Sun (STOC 2023) gave $n^{O((\log n)^{5/6})}$ for $p$-groups of class 2 and exponent $p$ with $p > 2$, the class that is the main obstacle. [arXiv:2303.15412](https://arxiv.org/abs/2303.15412)
- **$K(\pi,1)$ conjecture for Artin groups.** For every Coxeter group $W$, is the orbit space of the complexified reflection arrangement complement a $K(A_W, 1)$? Partially solved: spherical type (Deligne, 1972), affine type (Paolini–Salvetti, Invent. Math. 224, 2021) and, from the Artin entry above, rank three (Delucchi–Paolini–Salvetti, 2024); open in general. [arXiv:1907.11795](https://arxiv.org/abs/1907.11795)
