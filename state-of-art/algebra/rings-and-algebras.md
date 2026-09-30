# Rings, modules and algebras

State of the art as of 30 September 2026. Not published on the site.

This file covers associative rings and their modules (noncommutative ring theory, radicals, division rings, group rings, PI-algebras, Hopf algebras) and nonassociative algebras (Lie, Jordan, alternative and power-associative algebras, and nonassociative division algebras). The representation theory of Lie algebras belongs to another file.

Check the dates before writing about anything here, because September 2026 changed several entries. Köthe's conjecture was disproved that month: first by a machine-checked Lean proof that an AI model found, then in two preprints. The counterexample to the Jacobian conjecture that Levent Alpöge announced in July 2026 makes the generalized Dixmier conjecture fail for the Weyl algebras $A_n$ with $n \ge 3$. On 26 September 2026 Nagy and Zhou posted a preprint, not yet refereed, with counterexamples to Kaplansky's 1975 conjecture on five-dimensional division algebras over finite fields (arXiv:2609.32651). Some standard lists are behind: on 30 September 2026 Wikipedia's list of unsolved problems still showed Köthe as open.

A paper cited only by its arXiv number is one for which the survey recorded no journal version. Read it as a preprint that has not been refereed.

**MSC 2020.** Class 16 (associative rings and algebras) and class 17 (nonassociative rings and algebras), without the representation theory of Lie algebras (17B1x and related).

| Code | Covers |
|---|---|
| 16Bxx | General and miscellaneous (associative rings) |
| 16Dxx | Modules, bimodules and ideals in associative algebras |
| 16Exx | Homological methods in associative algebras |
| 16Gxx | Representation theory of associative rings and algebras |
| 16Hxx | Associative algebras and orders |
| 16Kxx | Division rings and semisimple Artin rings (central simple algebras, cyclic algebras, Brauer group) |
| 16Lxx | Local rings and generalizations |
| 16Nxx | Radicals and radical properties (nil and Jacobson radicals; Köthe and Kurosh-type problems) |
| 16Pxx | Chain conditions, growth conditions and other finiteness conditions (Noetherian rings, Gelfand–Kirillov dimension) |
| 16Rxx | Rings with polynomial identity (PI-theory, T-ideals, images of polynomials) |
| 16Sxx | Rings and algebras from constructions (group rings 16S34, matrix rings, Weyl algebras and differential operators, crossed products) |
| 16Txx | Hopf algebras, quantum groups and related topics |
| 16Uxx | Conditions on elements (units 16U60, zero divisors, idempotents) |
| 16Wxx | Rings and algebras with additional structure (gradings, involutions) |
| 16Yxx | Generalizations |
| 16Zxx | Computational aspects of associative rings |
| 17Axx | General nonassociative rings (power-associative algebras, nilalgebras, nonassociative division algebras and semifields 17A35) |
| 17Bxx | Lie algebras and Lie superalgebras (structure theory only here) |
| 17Cxx | Jordan algebras, triples and pairs |
| 17Dxx | Other nonassociative rings and algebras (alternative, Malcev, Novikov and others) |

**Standard problem lists.**

- *Dniester Notebook: Unsolved Problems in the Theory of Rings and Modules*, 4th Russian edition 1993, edited by Filippov, Kharchenko and Shestakov, translated into English by M. R. Bremner and M. V. Kochetov. It holds 1.1 (Albert's nilalgebra problem), 1.65 (Kaplansky's zero-divisor problem), 1.68 (Köthe), 1.98 (L'vov), 1.135 (Smirnov–Bovdi, units of $\mathbb{Z}[G]$), 1.146 (Herstein, Noetherian radicals) and 1.173 (Kurosh for division algebras). [PDF](https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=8deec2f4be6e241a4d745708f970ef8f5a591a6a)
- Kaplansky's conjectures on group rings (zero divisors, idempotents, units). [Wikipedia](https://en.wikipedia.org/wiki/Kaplansky%27s_conjectures)
- Kaplansky's ten Hopf algebra conjectures (1975), with their status in D. E. Radford's slides "Kaplansky's Ten Hopf Algebra Conjectures" (2012). [PDF](https://homepages.math.uic.edu/~radford/NIU2012.pdf)
- Auel, Brussel, Garibaldi and Vishne, "Open problems on central simple algebras" (arXiv, 2010). [arXiv:1006.3304](https://arxiv.org/abs/1006.3304)
- The Kourovka Notebook, for group-ring problems. Version v46, updated 1 September 2026, records new solutions, some found with AI. [arXiv:1401.0300](https://arxiv.org/abs/1401.0300)
- Wikipedia, "List of unsolved problems in mathematics", ring theory section. It still listed Köthe as unsolved on 30 September 2026. [Wikipedia](https://en.wikipedia.org/wiki/List_of_unsolved_problems_in_mathematics)
- Kanel-Belov, Malev, Rowen and Yavich, "Evaluations of noncommutative polynomials on algebras: methods and problems, and the L'vov–Kaplansky conjecture", SIGMA 16 (2020) 071, a survey with problem lists. [SIGMA](https://sigma-journal.com/2020/071/)

## Open problems

A ★ marks a problem whose statement a reader with undergraduate algebra can follow.

- ★ Kaplansky's zero-divisor conjecture, with the idempotent conjecture: open.
- ★ Higman's integral unit problem (the unit conjecture over $\mathbb{Z}$): open.
- ★ Dixmier conjecture for the first and second Weyl algebras: partially solved (false for $A_n$ with $n \ge 3$, open for $A_1$ and $A_2$).
- ★ Jacobson's conjecture: open.
- ★ Kurosh problem for division rings: open.
- ★ Cyclicity of division algebras of prime degree: open for every prime $p \ge 5$.
- ★ Kuzmin's conjecture on the Nagata–Higman nilpotency index: open from $n = 5$ on.
- ★ L'vov–Kaplansky conjecture on images of multilinear polynomials: open.
- ★ Albert's problem on commutative power-associative nilalgebras: open.
- Kaplansky's sixth Hopf algebra conjecture: open.

The easiest entries to attack are the two whose first open case is a single finite question. Kuzmin's conjecture at $n = 5$ asks for one number, $d(5)$, known to lie between 15 and 25. Whether it equals 15 is a question of linear algebra, but in a space of dimension $15! \approx 1.3 \times 10^{12}$, so brute force is out and the symmetric-group reformulation has to do the work. Albert's problem is settled up to dimension 9 over an algebraically closed field of characteristic 0 by a 2018 paper, and dimension 10 is next. Of the two, $d(5)$ is the sharper target: one yes-or-no question, with a computer proof for $n = 4$ (Vaughan-Lee 1993) to build on. The other entries either have no finite first case in the survey, or their first case (degree 5 for cyclicity, $A_1$ for Dixmier) already carries the whole difficulty.

### ★ Kaplansky's zero-divisor conjecture (with the idempotent conjecture)

**What it asks.** Take a field $K$ and a group $G$. The group ring $K[G]$ consists of finite formal sums $\sum a_g g$ with $a_g \in K$, multiplied by the group law. When $G$ has an element $g$ of order 2, zero divisors appear at once: $(1-g)(1+g) = 1 - g^2 = 0$. Idempotents do too: over $\mathbb{Q}$, $e = (1+g)/2$ satisfies $e^2 = (2 + 2g)/4 = e$. The conjecture says that torsion is the only source of zero divisors. For $G = \mathbb{Z}$ it holds, since $K[\mathbb{Z}]$ is the Laurent polynomial ring $K[t, t^{-1}]$, a domain.

Precisely: for every field $K$, every torsion-free group $G$ (no element other than the identity has finite order) and all $a, b \in K[G]$, if $ab = 0$ then $a = 0$ or $b = 0$. The weaker idempotent conjecture says that the only $e \in K[G]$ with $e^2 = e$ are $0$ and $1$. The unit conjecture implies the zero-divisor conjecture, which implies the idempotent conjecture (Passman, Lemma 13.1.2, as cited by Gardam). The unit conjecture over fields is false (see "Recently settled"); the two weaker statements survive that.

**Posed.** Graham Higman, in his unpublished Oxford thesis of 1940. Irving Kaplansky made it widely known in a 1956 talk, printed in 1957 as Problem 6, and raised it again in 1970. It is Problem 1.65 of the Dniester Notebook.

**Where it stands.** Open. No counterexample was known on 30 September 2026. The conjecture is proved for elementary amenable torsion-free groups (Kropholler, Linnell and Moody, 1988), for groups with the unique-product property, and over $\mathbb{C}$ for groups satisfying the strong Atiyah conjecture (Linnell, 1993). Kielak and Linton (arXiv, 2023) proved it over $\mathbb{C}$ for torsion-free 3-manifold groups through the strong Atiyah conjecture, and Fisher and Sánchez-Peralta (arXiv, 2023) proved it for $kG$ with $G$ a torsion-free 3-manifold group and $k$ any division ring. It also holds for Promislow's group $P$, the group in which Gardam found non-trivial units. Over $\mathbb{C}$ the idempotent conjecture follows from the Baum–Connes or the Farrell–Jones conjecture, and both are known for large classes of groups, hyperbolic groups among them.

Computer searches have found nothing. Garg and Mineyev (arXiv:2501.07646, 2025, a preprint) rule out counterexamples over $\mathbb{F}_2$ with supports up to $13 \times 13$ within their combinatorial framework. Mian and Siddique (arXiv:2609.22380, 17 September 2026, a preprint) give a Lean-checked proof that Gardam's $\tilde{A}_2$ lattice, a candidate group with property (T), does not have unique products. Their abstract points out that the conjecture holds for every group with unique products, so a counterexample has to come from a group without them. Neither paper produces a counterexample.

**Smallest open case.** Over $\mathbb{F}_2$, a counterexample needs a torsion-free group without unique products and, within Garg and Mineyev's framework, supports larger than $13 \times 13$. Gardam's $\tilde{A}_2$ lattice is a named candidate group without unique products (Mian–Siddique 2026). The survey does not say whether other methods already cover that lattice.

**Why it is hard.** The existing proofs use heavy analytic or K-theoretic machinery: the Atiyah conjecture, embeddings into division rings, Ore localization. Each reaches only a special class of groups. The one combinatorial route, unique products, is unavailable in exactly the groups where a counterexample could live. The unit conjecture failed in 2021 on such a group, which shows that evidence from small supports can mislead, and a search has to go through enormous numbers of candidate supports in groups that are hard to compute in.

**Sources.**
[arXiv:2102.11818](https://arxiv.org/abs/2102.11818) (Gardam 2021) ·
[Wikipedia: Kaplansky's conjectures](https://en.wikipedia.org/wiki/Kaplansky%27s_conjectures) ·
[arXiv:2303.15907](https://arxiv.org/abs/2303.15907) ·
[arXiv:2303.08165](https://arxiv.org/abs/2303.08165) ·
[arXiv:2501.07646](https://arxiv.org/abs/2501.07646) (Garg–Mineyev) ·
[arXiv:2609.22380](https://arxiv.org/abs/2609.22380) (Mian–Siddique)

*Fact-check: confirmed.*

### ★ Higman's integral unit problem (the unit conjecture over $\mathbb{Z}$)

**What it asks.** In the integral group ring $\mathbb{Z}[G]$ the elements $\pm g$ with $g \in G$ are always units; call them trivial. For $G = \mathbb{Z}$ they are the only ones, because the units of $\mathbb{Z}[t, t^{-1}]$ are $\pm t^k$. Torsion again changes things: in $\mathbb{Z}[C_5]$, with $g$ a generator,

$$
(g + g^4 - 1)(g^2 + g^3 - 1) = 1 .
$$

The question is whether a torsion-free $G$ can have a unit in $\mathbb{Z}[G]$ that is not $\pm g$.

Precisely, Dniester Notebook Problem 1.135 (D. M. Smirnov and A. A. Bovdi): for a torsion-free group $G$, can $\mathbb{Z}[G]$ contain units other than $\pm g$, $g \in G$? The version with coefficients in a field was disproved in 2021–2023 (see "Recently settled"). The integral version is a separate question.

**Posed.** Graham Higman in his 1940 thesis, motivated by topology, where $\mathbb{Z}[G]$ is the natural ring. D. M. Smirnov and A. A. Bovdi asked it for integral group rings in the Dniester Notebook (1.135).

**Where it stands.** Open. Gardam's characteristic-0 counterexample to the field version (arXiv:2312.05240, v2 of 29 October 2024) lives in $\mathbb{C}[P]$, with coefficients in $\mathbb{Z}[\zeta_8]$, where $\zeta_8$ is a primitive 8th root of unity. Gardam says he did not find a non-trivial unit in $\mathbb{Z}[P]$, and that every non-trivial characteristic-0 unit supported on his 21-element sets needs an 8th root of unity. Tabei (arXiv:2608.02982, August 2026, a preprint) describes the integral problem as open for the Promislow group $P$, reduces it modulo 2 to two sub-problems, and proves results only inside bounded balls of the group. The survey found no claimed non-trivial unit of $\mathbb{Z}[G]$ for any torsion-free $G$. It could not settle what is known over $\mathbb{Q}$.

**Smallest open case.** The Promislow group $P$ itself: is there a non-trivial unit of $\mathbb{Z}[P]$ outside the balls that Tabei's results cover? Gardam's 21-element supports cannot carry one, since units on them need $\zeta_8$.

**Why it is hard.** The known non-trivial units need roots of unity in their coefficients. Gardam explains a structural obstruction to "untwisting" them into $\mathbb{Z}[P]$: the abelianization of $P$ is $\mathbb{Z}/4 \oplus \mathbb{Z}/4$. Integrality also makes the search much harder than over finite fields, where SAT solvers found the first examples.

**Sources.**
[arXiv:2312.05240](https://arxiv.org/abs/2312.05240) (Gardam, characteristic 0) ·
[arXiv:2608.02982](https://arxiv.org/abs/2608.02982) (Tabei) ·
[arXiv:2609.25015](https://arxiv.org/abs/2609.25015) ·
[Dniester Notebook](https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=8deec2f4be6e241a4d745708f970ef8f5a591a6a)

*Fact-check: confirmed.*

### ★ Dixmier conjecture (first and second Weyl algebras)

**What it asks.** The first Weyl algebra $A_1$ is the algebra of polynomial differential operators in one variable. It is generated by $x$ (multiply by $x$) and $\partial = d/dx$, and the product rule $\partial(xf) = f + x\,\partial f$ gives the single relation $\partial x - x \partial = 1$. Sending $x \mapsto x$ and $\partial \mapsto \partial + x^2$ respects that relation, so it defines an endomorphism of $A_1$, and it is onto because $\partial = (\partial + x^2) - x^2$. Dixmier asked whether every endomorphism of $A_1$ is onto.

Precisely: let $K$ be a field of characteristic 0 and $A_1 = K\langle x, y\rangle/(yx - xy - 1)$. Is every $K$-algebra endomorphism of $A_1$ an automorphism? Equivalently, if $P, Q \in A_1$ satisfy $PQ - QP = 1$, do $P$ and $Q$ generate $A_1$? The generalized conjecture $\mathrm{DC}_n$ asks the same for the $n$-th Weyl algebra $A_n$.

**Posed.** Jacques Dixmier, Bull. Soc. Math. France 96 (1968), Problem 1. Bass, Connell and Wright recorded the $A_n$ version in 1982 and attributed it to Vaserstein and Kac.

**Where it stands.** Partially solved: false for every $n \ge 3$, open for $A_1$ and $A_2$.

The link to the Jacobian conjecture $\mathrm{JC}_n$ decides the higher cases. $\mathrm{DC}_n$ implies $\mathrm{JC}_n$ (Bass–Connell–Wright 1982), and $\mathrm{JC}_{2n}$ implies $\mathrm{DC}_n$ (Tsuchimoto 2005; Belov-Kanel and Kontsevich 2007). On 19 July 2026 Levent Alpöge announced an explicit counterexample to the Jacobian conjecture in three variables; Wikipedia and press reports say he credited an AI model. Gallagher gave an infinite family on 20 July, Speyer a geometric explanation on 23 July, and Shuhong Gao extended the construction to every dimension above 2 (arXiv:2608.00222, a preprint). Since $\mathrm{DC}_n$ implies $\mathrm{JC}_n$, $\mathrm{DC}_n$ is false for every $n \ge 3$. The counterexample is an announcement: the completeness critic found no arXiv paper by Alpöge, though Gao, van den Essen (arXiv:2609.17795) and Meng–Yang (arXiv:2607.22198) all cite it. $\mathrm{JC}_2$ is still open. It implies $\mathrm{DC}_1$ and is implied by $\mathrm{DC}_2$, so neither of the two remaining cases, Dixmier's original $A_1$ and $A_2$, is decided.

Alexander Zheglov claims a proof for $A_1$ (arXiv:2410.06959, first posted October 2024; v5 of 19 January 2026, 78 pages). The survey found no journal version and no independent confirmation or refutation, so it is an unverified claim. A proved partial result is due to Guccione, Guccione and Valqui (arXiv:2402.11135, 2024): $P$ and $Q$ generate $A_1$ whenever $P$ has at most four homogeneous components.

**Smallest open case.** $\mathrm{DC}_1$, Dixmier's own question. Two concrete steps are on record: check Zheglov's 78-page claimed proof, or push the Guccione–Guccione–Valqui bound past four homogeneous components, the next case being a $P$ with five.

**Why it is hard.** Endomorphisms of $A_1$ can have high degree, and there is no general structure theory for pairs with $[P, Q] = 1$. The known reductions go through the Jacobian conjecture, by reduction mod $p$ and $p$-curvature. Since the analogous statements now fail from dimension 3 on, a proof for $A_1$ has to use something that only holds in low dimension.

**Sources.**
[Wikipedia: Dixmier conjecture](https://en.wikipedia.org/wiki/Dixmier_conjecture) ·
[Wikipedia: Jacobian conjecture](https://en.wikipedia.org/wiki/Jacobian_conjecture) ·
[arXiv:2608.00222](https://arxiv.org/abs/2608.00222) (Gao) ·
[arXiv:2410.06959](https://arxiv.org/abs/2410.06959) (Zheglov) ·
[arXiv:2402.11135](https://arxiv.org/abs/2402.11135) (Guccione–Guccione–Valqui)

*Fact-check: confirmed.*

### ★ Jacobson's conjecture

**What it asks.** The Jacobson radical $J$ of a ring is the intersection of its maximal left ideals. In the power series ring $K[[t]]$ there is one maximal ideal, $(t)$, so $J = (t)$ and $J^n = (t^n)$. The powers shrink to nothing, $\bigcap_n J^n = 0$, because a nonzero power series has a lowest-degree term. For commutative Noetherian rings this always happens; it is the Krull intersection theorem. Jacobson's conjecture says the same holds without commutativity, provided the ring is Noetherian on both sides.

Precisely: if $R$ is left and right Noetherian with Jacobson radical $J$, then

$$
\bigcap_{n \ge 1} J^n = 0 .
$$

**Posed.** Nathan Jacobson, *Structure of Rings* (AMS Colloquium Publications 37), 1956. His one-sided version was refuted by Herstein (1965) and Jategaonkar (1968), and the two-sided form became the conjecture. A related question of Herstein is Dniester Notebook 1.146.

**Where it stands.** Open. It is proved for commutative Noetherian rings (Krull), fully bounded Noetherian rings (Cauchon 1974; Jategaonkar 1974), Noetherian rings of Krull dimension 1 (Lenagan 1977) and Noetherian rings satisfying the second layer condition (Jategaonkar 1982). The survey found no resolution and no claimed counterexample up to 30 September 2026.

**Smallest open case.** Not identifiable from the survey. The general results stop at Krull dimension 1 (Lenagan 1977), but the survey does not say whether Krull dimension 2 is open.

**Why it is hard.** The commutative proof relies on the Artin–Rees property, which fails for general noncommutative Noetherian rings. The one-sided counterexamples show that a proof must use Noetherianity on both sides in an essential way. Every known proof needs extra structure (boundedness, the second layer condition) that general Noetherian rings lack.

**Sources.**
[Wikipedia: Jacobson's conjecture](https://en.wikipedia.org/wiki/Jacobson%27s_conjecture) ·
[Dniester Notebook](https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=8deec2f4be6e241a4d745708f970ef8f5a591a6a)

*Fact-check: confirmed.*

### ★ Kurosh problem for division rings

**What it asks.** An element is algebraic over a field $F$ if it satisfies a nonzero polynomial with coefficients in $F$. Every Hamilton quaternion $q = a + v$ ($a$ real, $v$ purely imaginary) satisfies $q^2 - 2aq + (a^2 + |v|^2) = 0$, so the quaternions are algebraic over $\mathbb{R}$. They are also 4-dimensional, so anything they generate is finite-dimensional. The question is whether "every element is algebraic" forces this kind of finiteness in an infinite-dimensional division ring.

Precisely: let $D$ be a division ring with centre $F$, algebraic over $F$. Must $D$ be locally finite, meaning that every finitely generated division subring of $D$ is finite-dimensional over $F$? Equivalently: is there an algebraic division algebra that is not locally finite?

**Posed.** A. G. Kurosh asked the general question for algebraic algebras in 1941 (Izv. Akad. Nauk SSSR Ser. Mat. 5, 233–240). The division-ring case is Dniester Notebook 1.173, reported by K. A. Zhevlakov and V. N. Latyshev.

**Where it stands.** Open. For algebras in general the answer is no: Golod and Shafarevich (1964). Later constructions give primitive algebraic algebras of GK dimension at most 6 over countable fields (Bell, Small and Smoktunowicz, arXiv:1011.4133), nil algebras of GK dimension at most 3 over countable fields (Lenagan, Smoktunowicz and Young, as cited by Bell–Young), and nil algebras of subexponential growth over any field (Bell–Young, arXiv:1102.0362). Be'eri Greenfeld, "The Quantitative Kurosh Problem" (Forum of Mathematics, Sigma 13, 2025), builds nil counterexamples at essentially every growth rate, up to a polynomial error factor, including nil algebras of any GK dimension at least 6. None of these is a division ring, and Greenfeld's paper does not discuss division rings.

The positive side: the answer is yes for PI division rings and when the elements have bounded degree (Jacobson, Kaplansky, Levitzki–Shirshov). Hai, Deo and Bien (arXiv:1007.0791) list three settled cases by the centre $F$. An uncountable centre is settled (they cite Rowen's *Ring Theory*, 1988). A finite centre is settled by Jacobson's commutativity theorem (they cite Lam's *A First Course in Noncommutative Rings*). A centre whose algebraic extensions are all finite, algebraically closed centres included, is settled by Levitzki–Shirshov. Wikipedia still lists the problem as unsolved, and the survey found no resolution up to 30 September 2026.

**Smallest open case.** What the settled cases leave: a division ring $D$ algebraic over a centre $F$ that is countably infinite and has infinite algebraic extensions ($F = \mathbb{Q}$, for instance), where $D$ satisfies no polynomial identity and its elements have unbounded degree over $F$.

**Why it is hard.** Every known way to build algebraic algebras that are not locally finite (Golod–Shafarevich, constructions of Smoktunowicz type) produces zero divisors or large nil ideals, and a division ring has neither. On the other side there is no structure theory for infinite-dimensional division algebras that would force local finiteness.

**Sources.**
[Wikipedia: Kurosh problem](https://en.wikipedia.org/wiki/Kurosh_problem) ·
[arXiv:1007.0791](https://arxiv.org/abs/1007.0791) (Hai–Deo–Bien) ·
[arXiv:1102.0362](https://arxiv.org/abs/1102.0362) (Bell–Young) ·
[arXiv:1011.4133](https://arxiv.org/abs/1011.4133) (Bell–Small–Smoktunowicz) ·
[Greenfeld, Forum Math. Sigma 2025](https://www.cambridge.org/core/journals/forum-of-mathematics-sigma/article/quantitative-kurosh-problem/F66BF901CF6A811926EAC2D30C17B409)

*Fact-check: corrected (Hai–Deo–Bien credit the finite-centre case to Jacobson's theorem, not Rowen, and list a third settled case; Greenfeld's 2025 paper added).*

### ★ Cyclicity of division algebras of prime degree

**What it asks.** A cyclic algebra is built from a cyclic field extension $K/F$ with generator $\sigma$ and one extra element $u$ that conjugates $K$ by $\sigma$. The quaternions are the standard example: take $K = \mathbb{C}$, $\sigma$ complex conjugation and $u = j$, so that $j z j^{-1} = \bar z$ and $j^2 = -1$. Every division algebra of degree 2 or 3 is built this way. The question is whether that holds for every prime degree.

Precisely: let $p$ be a prime and $D$ a central division algebra of degree $p$ over a field $F$, so $\dim_F D = p^2$ and the centre of $D$ is $F$. Must $D$ contain a maximal subfield $K$ that is a cyclic Galois extension of $F$ of degree $p$? Then

$$
D \cong (K/F, \sigma, a) = \bigoplus_{i=0}^{p-1} K u^i, \qquad u k u^{-1} = \sigma(k), \quad u^p = a \in F^\times .
$$

Equivalently: construct a non-cyclic division algebra of prime degree, or show none exists.

**Posed.** Traditionally attributed to A. A. Albert, in the 1930s. Wikipedia's Brauer group article says Albert raised it; the survey could not find where he first stated it. It is Problem 7 in Amitsur's 1982 survey and Problem 1 in Saltman's 1992 survey, according to Auel, Brussel, Garibaldi and Vishne, who call it "perhaps the most important open problem" on central simple algebras.

**Where it stands.** Open for every prime $p \ge 5$. The answer is yes for $p = 2$ (elementary) and $p = 3$ (Wedderburn 1921), over local and global fields (Albert–Brauer–Hasse–Noether), and over function fields of $\ell$-adic curves with $\ell \ne p$ (Saltman 2007). Brauer (1938) showed that a division algebra of degree 5 has a solvable Galois splitting field of degree dividing 60. Saltman, "Stable Rationality and Cyclicity" (arXiv:2409.07240, September 2024), counts prime-degree cyclicity as one of two outstanding questions. He shows that if the centre $Z(F,p)$ of the generic division algebra $UD(F,p)$ is not stably rational, then $UD(F,p)$ is not cyclic (in characteristic 0, with $p$-th roots of unity).

Two cautions. Shmuel Rosset's arXiv preprint (arXiv:2009.05772, September 2020) claims non-cyclic examples of prime degree; it has one version, no journal version, and later work does not accept it. Chapman, Levin and Zaninelli (arXiv:2508.07451, v2 of 2 January 2026) still describe prime-degree division rings as conjectured to be cyclic. And v1 of arXiv:2603.28341 (30 March 2026) cites an "Albert's theorem" that every prime-degree division algebra is cyclic. There is no such theorem, and v3 (12 June 2026), retitled "Abelian maximal subgroups of valued division algebras", drops the claim and says its problem reduces to the existence of non-cyclic algebras of prime degree.

**Smallest open case.** $p = 5$: a central division algebra of degree 5, dimension 25 over its centre. At this degree Brauer's 1938 theorem gives a solvable splitting field of degree dividing 60. Saltman's 2024 criterion gives a concrete target: in characteristic 0, with fifth roots of unity in $F$, show that the centre of the generic division algebra $UD(F,5)$ is not stably rational.

**Why it is hard.** Tools such as Merkurjev–Suslin give Brauer equivalence to a tensor product of cyclic algebras, not isomorphism with a single cyclic algebra. No invariant is known that detects non-cyclicity in prime degree. Generic division algebras of prime degree are hard to control, and the candidate non-crossed products (Rowen 1999, Vishne 2004) remain undecided.

**Sources.**
[arXiv:1006.3304](https://arxiv.org/abs/1006.3304) (Auel–Brussel–Garibaldi–Vishne) ·
[Wikipedia: Brauer group](https://en.wikipedia.org/wiki/Brauer_group) ·
[arXiv:2508.07451](https://arxiv.org/abs/2508.07451) (Chapman–Levin–Zaninelli) ·
[arXiv:2603.28341v1](https://arxiv.org/abs/2603.28341v1) ·
[arXiv:2603.28341](https://arxiv.org/abs/2603.28341) (current version) ·
[arXiv:2409.07240](https://arxiv.org/abs/2409.07240) (Saltman) ·
[arXiv:2009.05772](https://arxiv.org/abs/2009.05772) (Rosset)

*Fact-check: corrected (arXiv:2508.07451 has three authors, the false "Albert's theorem" citation is only in v1 of arXiv:2603.28341, and Saltman's 2024 paper added).*

### ★ Kuzmin's conjecture on the Nagata–Higman nilpotency index

**What it asks.** Suppose every element of an algebra over a field of characteristic 0 satisfies $x^n = 0$. Then all long enough products vanish, and the question is how long "long enough" is. The case $n = 2$ can be done by hand. Replacing $x$ by $x + y$ in $x^2 = 0$ gives $xy + yx = 0$, so any two elements anticommute. Applied to $xy$ and $z$ this gives $xyz = -zxy$. Moving $z$ back to the end, past $x$ and then past $y$, changes the sign twice, so $zxy = xyz$. Hence $xyz = -xyz$, so $2xyz = 0$ and every product of three elements is zero. Products of two need not vanish: in the Grassmann algebra on $e_1, e_2$ without its unit, $x^2 = 0$ for every $x$ but $e_1 e_2 \ne 0$. So for $n = 2$ the answer is 3.

Precisely: over a field of characteristic 0, the Nagata–Higman (Dubnov–Ivanov) theorem says that an associative algebra with $x^n = 0$ for every $x$ is nilpotent: there is an $m$ with $x_1 x_2 \cdots x_m = 0$ for all $x_i$. Let $d(n)$ be the least $m$ that works for all such algebras. Kuzmin conjectured

$$
d(n) = \frac{n(n+1)}{2},
$$

which gives 1, 3, 6, 10, 15 for $n = 1, \dots, 5$.

**Posed.** E. N. Kuzmin, "On the Nagata–Higman theorem", Sofia 1975.

**Where it stands.** Open. The bounds are $n(n+1)/2 \le d(n)$ (Kuzmin) and $d(n) \le n^2$ (Razmyslov 1974), still the best upper bound; Higman's earlier bound was $2^n - 1$. The conjecture is confirmed only for $n \le 4$: $n = 1, 2, 3$ by Dubnov and Ivanov, and $n = 4$ by Vaughan-Lee in 1993, by computer. Romano (arXiv:2212.05994, 2022) reports the same state and reformulates the conjecture in terms of $S_m$-modules inside the T-ideal generated by $x^n$. The survey found no later result, for $n = 5$ or beyond.

**Smallest open case.** $n = 5$: is $d(5) = 15$? What is known is $15 \le d(5) \le 25$.

**Why it is hard.** The question lives among the multilinear polynomials of degree $m$, a space of dimension $m!$: one has to decide whether all of them lie in the T-ideal generated by $x^n$. For $n = 5$ the relevant $m = 15$ gives $15! \approx 1.3 \times 10^{12}$, beyond direct computation. Representation theory of the symmetric group gives structure but no closed-form way to tell when every multilinear monomial falls into the T-ideal.

**Sources.**
[arXiv:2212.05994](https://arxiv.org/abs/2212.05994) (Romano) ·
[arXiv:2110.12128](https://arxiv.org/abs/2110.12128)

*Fact-check: confirmed.*

### ★ L'vov–Kaplansky conjecture (images of multilinear polynomials on matrices)

**What it asks.** Plug $n \times n$ matrices into a noncommutative polynomial and look at the set of values. Take the commutator $x_1 x_2 - x_2 x_1$: since $\operatorname{tr}(AB) = \operatorname{tr}(BA)$, every value has trace 0, so the image sits inside the trace-zero matrices. The conjecture says the image of a multilinear polynomial is always a linear subspace, which leaves only four possibilities.

Precisely: let $K$ be an infinite field and $p(x_1, \dots, x_m)$ a multilinear noncommutative polynomial, so each variable appears exactly once in each monomial. Is the image $\lbrace p(A_1, \dots, A_m) : A_i \in M_n(K) \rbrace$ a vector subspace of $M_n(K)$? By Herstein's description of Lie ideals, this is the same as asking whether the image is always $\lbrace 0 \rbrace$, the scalar matrices, $\mathfrak{sl}_n(K)$ (the trace-zero matrices) or all of $M_n(K)$.

**Posed.** I. V. L'vov, Dniester Notebook Problem 1.98; the conjecture is also attributed to Irving Kaplansky. It appears in Part One of the Dniester Notebook, reproduced from its 3rd edition, so it dates from 1982–83 or earlier; the survey could not find its first appearance.

**Where it stands.** Open, with no counterexample known. For $n = 2$ it is settled over quadratically closed fields (Kanel-Belov, Malev and Rowen, Proc. AMS 2012) and over $\mathbb{R}$ (Malev 2014), with partial results over arbitrary fields. For $n = 3$ there are decisive partial results (Kanel-Belov, Malev and Rowen, Proc. AMS 2016). For polynomials of degree 3, Dykema and Klep (Linear Algebra Appl. 2016) handled $n$ even and odd $n \le 15$, and Vitas then proved it for all $n$ over algebraically closed fields of characteristic 0 (arXiv:2310.15600; Linear Algebra Appl. 733 (2026) 205–232). The 2020 SIGMA survey by Kanel-Belov, Malev, Rowen and Yavich collects methods and problems. Preprints from 2026, such as arXiv:2607.27226 on a generalized version, do not settle the original conjecture.

**Smallest open case.** By matrix size it is $n = 2$ over an infinite field that is neither quadratically closed nor $\mathbb{R}$ ($\mathbb{Q}$, say), where only partial results exist. Over quadratically closed fields the first open size is $n = 3$, beyond the 2016 partial results. On the degree side, the results in the survey stop at degree 3.

**Why it is hard.** Images of polynomial maps are constructible sets, and usually not subspaces. Density results (Zariski-dense images, the Deligne trick) hold for general $n$, but proving that the image equals $\mathfrak{sl}_n$ or $M_n$ exactly means controlling the eigenvalues of the values, which gets out of hand as $n$ grows.

**Sources.**
[SIGMA 16 (2020) 071](https://sigma-journal.com/2020/071/) ·
[arXiv:2310.15600](https://arxiv.org/abs/2310.15600) (Vitas) ·
[arXiv:1508.01238](https://arxiv.org/abs/1508.01238) ·
[arXiv:2607.27226](https://arxiv.org/abs/2607.27226) ·
[Dniester Notebook](https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=8deec2f4be6e241a4d745708f970ef8f5a591a6a)

*Fact-check: confirmed.*

### ★ Albert's problem on commutative power-associative nilalgebras

**What it asks.** The algebras here have a commutative multiplication that need not be associative. Power-associative means that the powers of any single element do not depend on the bracketing, so $(xx)(xx) = ((xx)x)x$ and so on. Nil means that every element has some power equal to 0. Two notions of "small" then compete. Nilpotent: all products of some fixed length vanish, however bracketed. Solvable, which is weaker: the derived series $A^{(1)} = A$, $A^{(i+1)} = A^{(i)} A^{(i)}$ reaches 0. Albert conjectured nilpotency; D. Suttles found a 5-dimensional commutative power-associative nilalgebra that is solvable but not nilpotent, so the question became solvability.

Precisely: let $A$ be a finite-dimensional algebra over a field of characteristic $\ne 2$, with a commutative, power-associative, nil multiplication. Must $A$ be solvable, that is, $A^{(k)} = 0$ for some $k$?

**Posed.** A. A. Albert, "Power-associative rings", Trans. AMS 64 (1948) 552–593, in the nilpotency form. After Suttles's example (1972) it became the solvability question, recorded as Dniester Notebook 1.1 (reported by K. A. Zhevlakov).

**Where it stands.** Open. Such algebras are nilpotent in dimension at most 4 (Gerstenhaber–Myung, Proc. AMS 48, 1975). They are solvable in dimension at most 9 over an algebraically closed field of characteristic 0: E. O. Quintero Vanegas and J. C. Gutierrez Fernandez, "Power associative nilalgebras of dimension 9", J. Algebra 495 (2018) 233–263. That replaces the older bounds of 6 (Correa–Hentzel–Peresi, Linear Algebra Appl. 369, 2003) and 8 (Correa–Julca 2009).

Gutierrez Fernandez, Grishkov and Quintero Vanegas, "On power-associative modules", J. Algebra Appl. 22 (2023) 2350205, summarise what is known. Such algebras are nilpotent in dimension at most 4, when they are Jordan, or when the nilindex is at least the dimension. They are solvable in dimension at most 9 (algebraically closed, characteristic 0), and when the nilindex $k$ and the dimension $n$ satisfy $k \ge n - 3$, under suitable conditions on the characteristic. The nilindex-4 case is open in general. Other partial results: nilindex 4 in dimension at most 8 (Elgueta–Suazo, Proyecciones 23, 2004), and dimension $N$ with nilindex $N - 1$ (Gutierrez Fernandez, Garcia, Martinez and Montoya, Comm. Algebra 42 (2014) 4481–4497). Umirbaev (arXiv:1412.2365; J. Commut. Algebra 11 (2019) 433–451) links the problem to the homogeneous dependence problem connected with the Jacobian conjecture, and Quintero Vanegas (Mathematics 11 (2023) 3866) gives equivalent reformulations. The variants without power-associativity (commutative nilalgebras, commutative Engel algebras) are open as well.

**Smallest open case.** Dimension 10 over an algebraically closed field of characteristic 0, one past the 2018 result. Separately, the nilindex-4 case in general; along the nilindex line, the next step after $k \ge n - 3$ would be $k = n - 4$.

**Why it is hard.** Unlike Lie or Jordan algebras, these have no Engel-type structure theory. Multiplication operators need not be nilpotent, and case-by-case computation grows fast with the dimension. The link to polynomial automorphisms suggests the difficulty is of the same order as known hard problems in affine geometry.

**Sources.**
[arXiv:1412.2365](https://arxiv.org/abs/1412.2365) (Umirbaev) ·
[doi:10.1016/j.jalgebra.2017.10.017](https://doi.org/10.1016/j.jalgebra.2017.10.017) ·
[doi:10.1142/S0219498823502055](https://doi.org/10.1142/S0219498823502055) ·
[doi:10.3390/math11183866](https://doi.org/10.3390/math11183866) ·
[doi:10.1080/00927872.2013.815195](https://doi.org/10.1080/00927872.2013.815195) ·
[Dniester Notebook](https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=8deec2f4be6e241a4d745708f970ef8f5a591a6a)

*Fact-check: corrected (solvability is known up to dimension 9 since 2018, not 8).*

### Kaplansky's sixth Hopf algebra conjecture

**What it asks.** Frobenius proved that the dimension of every irreducible representation of a finite group divides the order of the group. For $S_3$ the irreducible representations have dimensions 1, 1 and 2, and each divides 6. The group algebra $\mathbb{C}[G]$ is the basic example of a semisimple Hopf algebra, and Kaplansky asked whether Frobenius's divisibility holds for all of them.

Precisely: let $H$ be a finite-dimensional semisimple Hopf algebra over an algebraically closed field of characteristic 0. Then the dimension of every simple $H$-module divides $\dim H$. The statement fails for non-semisimple modular group algebras.

**Posed.** Irving Kaplansky, as one of ten conjectures in "Bialgebras", lecture notes, University of Chicago, 1975.

**Where it stands.** Open. It is proved when the simple module has dimension 2 (Nichols–Richmond 1996), for Drinfeld doubles $D(B)$ and for quasitriangular semisimple Hopf algebras (Etingof–Gelaki 1998), and when $\dim H$ is a prime power (Montgomery–Witherspoon 1998). Larson showed it holds whenever $H$ has a Hopf order over a number ring. Cuadra and Meir (Trans. AMS 368 (2016) 2547–2562; arXiv:1307.3269) showed that some Drinfeld twists of group algebras have no Hopf order over any number ring, and that $H$ satisfies the conjecture if and only if it admits a weak order over $\mathbb{Z}$. Of Kaplansky's ten, Radford (2012) lists the 5th ($S^2 = \mathrm{id}$) as open in positive characteristic, the 6th as open, and the 8th as not fully decided in positive characteristic; Dai and Dong (2016) describe the 5th and 6th as the ones left. The survey found no resolution of the 6th up to 30 September 2026.

**Smallest open case.** Not identifiable from the survey as a single case. Reading the proved cases, the first uncovered algebras are semisimple Hopf algebras that are not quasitriangular, whose dimension is not a prime power, that have no Hopf order over a number ring (Larson's condition), and that have a simple module of dimension at least 3. By Cuadra–Meir, an equivalent target for any given $H$ is a weak order over $\mathbb{Z}$.

**Why it is hard.** Frobenius's proof uses the integrality of central character values in the group algebra. A general semisimple Hopf algebra need not have an integral form (Cuadra–Meir), so the arithmetic argument has nothing to act on. Semisimple Hopf algebras are classified only in low dimensions.

**Sources.**
[Radford, "Kaplansky's Ten Hopf Algebra Conjectures" (2012)](https://homepages.math.uic.edu/~radford/NIU2012.pdf) ·
[arXiv:1409.2545](https://arxiv.org/abs/1409.2545) ·
[arXiv:1307.3269](https://arxiv.org/abs/1307.3269) (Cuadra–Meir) ·
[doi:10.1090/tran/6380](https://doi.org/10.1090/tran/6380) ·
[arXiv:1907.02529](https://arxiv.org/abs/1907.02529)

*Fact-check: confirmed.*

## Recently settled

### Kaplansky's unit conjecture over fields (disproved 2021; characteristic 0 in 2023)

**What it asked.** For a field $K$ and a torsion-free group $G$, is every unit of $K[G]$ of the form $kg$ with $k \in K^\times$ and $g \in G$? Graham Higman raised it in his 1940 thesis, and Irving Kaplansky posed it in 1970 beside the zero-divisor conjecture.

**How it was settled.** Giles Gardam found a non-trivial unit in $\mathbb{F}_2[P]$ (arXiv:2102.11818, February 2021; Ann. of Math. 194 (2021) 967–979), where

$$
P = \langle a, b \mid b^{-1} a^2 b = a^{-2},\ a^{-1} b^2 a = b^{-2} \rangle
$$

is the Promislow (Hantzsche–Wendt) group, a crystallographic group that is virtually $\mathbb{Z}^3$. The unit has support of size 21 and was found with a Boolean satisfiability solver. Alan G. Murray (arXiv:2106.02147, June 2021) extended the construction to every prime characteristic. Gardam then found non-trivial units in $\mathbb{C}[P]$, with coefficients in $\mathbb{Z}[\zeta_8]$, disproving the conjecture in characteristic 0 (arXiv:2312.05240, December 2023; v2 October 2024); the survey found no journal version of that paper. Gardam asked in 2021 whether 21 is the minimal support size, and Tabei (arXiv:2609.17559, 2026, a preprint) studied that question in a machine-checked form limited to balls in the group. The zero-divisor and idempotent conjectures and the integral version over $\mathbb{Z}$ are still open (see above).

**Sources.**
[arXiv:2102.11818](https://arxiv.org/abs/2102.11818) (Gardam) ·
[arXiv:2106.02147](https://arxiv.org/abs/2106.02147) (Murray) ·
[arXiv:2312.05240](https://arxiv.org/abs/2312.05240) (Gardam, characteristic 0) ·
[arXiv:2609.17559](https://arxiv.org/abs/2609.17559) (Tabei)

*Fact-check: confirmed.*

### Köthe conjecture (disproved September 2026)

**What it asked.** A one-sided ideal is nil if every element in it is nilpotent; the strictly upper triangular matrices are a familiar nil ring. Gottfried Köthe conjectured in 1930 (Math. Z. 32) that in any associative ring the sum of two nil left ideals is nil. There are several equivalent forms: a ring with no nonzero nil two-sided ideal has no nonzero nil one-sided ideal; Krempa's matrix form, that $M_2(N)$ (equivalently every $M_n(N)$) is nil whenever $N$ is a nil ring; and, for a nil ring $A$, that the polynomial ring $A[t]$ is Jacobson radical. It is Dniester Notebook 1.68.

**How it was settled.** The first disproof was a machine-checked Lean 4/Mathlib proof, found in Epoch AI's LeanOpenProblems run of September 2026 by a pre-release version of OpenAI's GPT-6 Astra, which was given the Lean statement from the Formal Conjectures repository. It is at [github.com/tadamcz/koethe](https://github.com/tadamcz/koethe), whose README describes an algebra over the algebraic closure of $\mathbb{F}_2$.

The human-written paper followed: Adamczewski, Böhmler and Marczinzik, "A counterexample to Köthe's conjecture and a question of Rowen" (arXiv:2609.07996; the PDF is dated 5 September, posted 7 September 2026). For every countable field $F$ they build a nil $F$-algebra $N = F\langle b, c \rangle_+$ in which

$$
W = \begin{pmatrix} b^2 + c & bc \\ b & c \end{pmatrix} \in M_2(N)
$$

is not nilpotent. The unitization $R = F1 + N$ then has two nil left ideals of $M_2(R)$ whose sum $M_2(N)$ is not nil. Their contribution statement says GPT-6 Astra found the initial construction in an experiment run by Tom Adamczewski of Epoch AI. The paper also answers a 1989 question of Rowen in the negative.

A week later came a second construction: B. Greenfeld, King and L. Vendramin, "The Köthe conjecture via point modules" (arXiv:2609.15080, 14 September 2026), a finitely generated graded nil algebra with a point module, building on Easton–Ford–Greenfeld–King. It is not an independent discovery: their introduction cites both the Lean disproof and the Adamczewski–Böhmler–Marczinzik paper, and they say GPT-6 Astra suggested the main argument of their Lemma 4.2. (The arXiv listing says "B. King", the PDF "G. King".) Neither preprint was peer-reviewed as of 30 September 2026.

For background, Smoktunowicz (2000) had already refuted Amitsur's stronger conjecture that $J$ nil implies $J[x]$ nil. The conjecture was known for Noetherian and PI rings, so any counterexample had to be wild. Wikipedia's own "Köthe conjecture" article now describes it as disproved; its "List of unsolved problems in mathematics" still showed it as open on 30 September 2026.

**Sources.**
[arXiv:2609.07996](https://arxiv.org/abs/2609.07996) (Adamczewski–Böhmler–Marczinzik) ·
[arXiv:2609.15080](https://arxiv.org/abs/2609.15080) (Greenfeld–King–Vendramin) ·
[github.com/tadamcz/koethe](https://github.com/tadamcz/koethe) ·
[Wikipedia: Köthe conjecture](https://en.wikipedia.org/wiki/K%C3%B6the_conjecture) ·
[Wikipedia: List of unsolved problems in mathematics](https://en.wikipedia.org/wiki/List_of_unsolved_problems_in_mathematics)

*Fact-check: corrected (the two preprints are not independent: the second cites the first and the Lean disproof, which came before both).*

### First Zassenhaus conjecture (disproved 2017)

**What it asked.** Let $G$ be a finite group. The elements $\pm g$ are units of finite order in $\mathbb{Z}[G]$. Hans Zassenhaus conjectured that these are essentially all of them: every unit $u$ of finite order in $\mathbb{Z}[G]$ becomes $\pm g$ after conjugation by a unit $a$ of the rational group algebra, $a^{-1} u a = \pm g$. He first put it in writing in "On the torsion units of finite group rings" (Lisbon, 1974).

**How it was settled.** Florian Eisele and Leo Margolis gave infinitely many counterexamples (arXiv:1710.08780, October 2017; Adv. Math. 339 (2018) 599–641). The smallest is a metabelian group of order $2^7 \cdot 3^2 \cdot 5 \cdot 7^2 \cdot 19^2$, about $1.0 \times 10^8$, whose integral group ring has a unit of order $7 \cdot 19$ not conjugate in $\mathbb{Q}[G]$ to any $\pm g$. The second and third Zassenhaus conjectures had failed earlier (Roggenkamp–Scott; Klinger 1991; Hertweck, with examples of order 96). The first conjecture holds for nilpotent groups (Weiss 1991), for cyclic-by-abelian groups and for groups of order below 144. A 2026 preprint (arXiv:2608.03254) shows that the second and third conjectures fail even for cyclic-by-abelian groups. Eisele and Margolis note that many weaker variants are still open.

**Sources.**
[arXiv:1710.08780](https://arxiv.org/abs/1710.08780) (Eisele–Margolis) ·
[doi:10.1016/j.aim.2018.10.004](https://doi.org/10.1016/j.aim.2018.10.004) ·
[arXiv:2608.03254](https://arxiv.org/abs/2608.03254)

*Fact-check: confirmed.*

### Modular isomorphism problem for $p = 2$ (disproved 2021)

**What it asked.** Let $G$ and $H$ be finite $p$-groups and $F$ a field of characteristic $p$, such as $\mathbb{F}_p$. If the group algebras $FG$ and $FH$ are isomorphic, must $G$ and $H$ be isomorphic? The question took shape between 1956, when Deskins settled the abelian case, and 1963, when R. Brauer included it in his survey (according to Margolis's 2022 survey).

**How it was settled.** García-Lucas, Margolis and del Río (arXiv:2106.07231, June 2021; J. reine angew. Math. 783 (2022) 269–274) gave an infinite family of pairs of non-isomorphic finite 2-groups whose group algebras are isomorphic over every field of characteristic 2. The smallest pair has order $2^9$, with centres of index 8 (Brenner and García-Lucas, arXiv:2311.06666). Computer searches, for example over all groups of order dividing $2^8$, had found nothing, so the counterexamples lie just past what exhaustive search covered. Earlier positive results cover abelian groups (Deskins 1956), groups of order $p^4$ (Passman 1965) and $p^5$ (Salim–Sandling 1996), and metacyclic groups.

The problem is still open for odd $p$, as Brenner and García-Lucas state. They also prove a positive answer for $p > 2$ when the centre has index $p^3$, where $p = 2$ behaves differently. Margolis and Sakurai (São Paulo J. Math. Sci. 2025) likewise mention negative answers only for $p = 2$.

**Sources.**
[arXiv:2106.07231](https://arxiv.org/abs/2106.07231) (García-Lucas–Margolis–del Río) ·
[doi:10.1515/crelle-2021-0074](https://doi.org/10.1515/crelle-2021-0074) ·
[arXiv:2202.11412](https://arxiv.org/abs/2202.11412) ·
[arXiv:2311.06666](https://arxiv.org/abs/2311.06666) (Brenner–García-Lucas) ·
[doi:10.1007/s40863-025-00517-z](https://doi.org/10.1007/s40863-025-00517-z)

*Fact-check: confirmed.*

### Kaplansky's conjecture on five-dimensional finite semifields (disproved in a preprint, September 2026)

The fact-checker found this entry; it was not in the original survey. The completeness critic asked for it to be filed here rather than among the open problems.

**What it asked.** A finite semifield is a finite division algebra that need not be associative: a finite-dimensional algebra over its centre $\mathbb{F}_q$ with bilinear multiplication and no zero divisors ($xy = 0$ forces $x = 0$ or $y = 0$). Semifields are compared up to isotopy, where $(S, \ast)$ and $(S, \circ)$ are isotopic if there are bijective linear maps $f, g, h$ with $h(x \ast y) = f(x) \circ g(y)$. The field $\mathbb{F}_{q^5}$ is a 5-dimensional example, and Albert's twisted fields give others. Irving Kaplansky conjectured that when $q$ is large enough, every 5-dimensional division algebra over $\mathbb{F}_q$ is isotopic to $\mathbb{F}_{q^5}$ or to a twisted field ("Three-dimensional division algebras II", Houston J. Math. 1 (1975) 63–79). The 3-dimensional analogue is also his, and Menichetti proved it (J. Algebra 47 (1977) 400–410). Menichetti later asserted the statement for every prime dimension $r$: for large $q$, every $r$-dimensional division algebra over $\mathbb{F}_q$ is a field or one of Albert's generalized twisted fields.

**How it was settled.** G. P. Nagy and Y. Zhou, "Semifields in prime dimensions and counterexamples to Kaplansky's conjecture", arXiv:2609.32651, 26 September 2026: a preprint, not refereed, four days old on 30 September 2026. For every prime power $q = p^e \equiv 1 \pmod 3$ and every $n \ge 5$ with $\gcd(n, 6) = 1$, they build semifields of order $q^n$ that are not isotopic to a field or to an Albert generalized twisted field. For fixed $q$ and $n$ this gives $\varphi(n)$ isotopy classes if $p \equiv 1 \pmod 3$ and $\varphi(n)/2$ if $p \equiv 2 \pmod 3$. With $q = 7$ and $n = 5$, for instance, that is $\varphi(5) = 4$ classes of semifields with $7^5 = 16807$ elements. For $n = 5$ the construction gives infinitely many pairwise non-isotopic counterexamples over arbitrarily large finite fields.

For each prime $n \ge 5$ there are examples in every characteristic except 3, which contradicts Menichetti's claimed classification (Geom. Dedicata 63 (1996) 69–94, Corollary 33). The authors say that proof has gaps: Yue Zhou raised them with J. Bierbrauer in 2014, and Guobiao Weng found them independently in 2021. The 3-dimensional classification is not affected. The paper says ChatGPT 6 Pro helped produce most of the constructions and arguments, and that Aristotle (Harmonic) formalized the results, checked in Lean 4, at [github.com/nagygp/Kaplansky-conjecture](https://github.com/nagygp/Kaplansky-conjecture). The repository exists; the fact-checker did not audit the Lean code and found no independent check or response.

**Sources.**
[arXiv:2609.32651](https://arxiv.org/abs/2609.32651) (Nagy–Zhou) ·
[github.com/nagygp/Kaplansky-conjecture](https://github.com/nagygp/Kaplansky-conjecture)

*Fact-check: found by the fact-checker; a second reader confirmed the preprint's abstract but not its proofs.*

## Further problems suggested by the fact-checker

The fact-checker found these with sources, but no second reader re-checked them. Two more of its suggestions are handled elsewhere: Kaplansky's semifield conjecture is under "Recently settled", and the finitistic dimension conjecture belongs to the homological algebra file.

- **Kaplansky's direct (stable) finiteness conjecture for group rings** (Kaplansky, *Fields and Rings*, 2nd edition, 1972). For a field $K$ and any group $G$, does $xy = 1$ in $K[G]$ imply $yx = 1$? The stable version asks the same in every matrix ring $M_n(K[G])$. Open. It is proved in characteristic 0 (Kaplansky), for residually amenable groups over division rings (Ara, O'Meara and Perera 2002), for sofic groups (Elek and Szabó 2004), and for {finitely generated residually finite}-by-sofic groups over Noetherian rings (Berlai 2015); Phung (2021) showed that the stable version follows from Gottschalk's surjunctivity conjecture. The fact-checker wrote that no non-sofic group is known. The completeness critic points to unrefereed claims of non-sofic groups (the unit group of the binary Leavitt algebra, in an anonymized OpenAI paper; torsion-free examples by Fournier-Facio, arXiv:2608.02025, August 2026), and notes that nobody has shown those groups violate this conjecture. [arXiv:1501.02893](https://arxiv.org/abs/1501.02893) (Berlai) · [arXiv:2111.07930](https://arxiv.org/abs/2111.07930) (Phung)
- **Lichtman's conjecture on free subgroups of division rings** (Lichtman, Proc. AMS 63, 1977). If $D$ is a noncommutative division ring, does its multiplicative group $D^\ast$ contain a free subgroup of rank 2? Open. It is known when $D$ is finite-dimensional over its centre (Lichtman 1978; Gonçalves 1984, through the Tits alternative), when the centre is uncountable (Chiba 1996), and for some quotient division rings, including the Goldie quotient rings of group algebras of torsion-free non-abelian solvable-by-finite groups (Bell and Gonçalves, Proc. AMS 148, 2020). The fact-checker found no general resolution after 2018 but says its search was not exhaustive. [arXiv:1812.01698](https://arxiv.org/abs/1812.01698) (Bell–Gonçalves) · [doi:10.1090/proc/14888](https://doi.org/10.1090/proc/14888)
