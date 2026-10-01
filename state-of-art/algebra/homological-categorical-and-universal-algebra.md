# Homological algebra, category theory, K-theory, universal algebra and lattices

State of the art as of 30 September 2026. Not published on the site.

These classes study algebraic structure at its most general. Order theory and lattices come first in the MSC numbering. Then general algebras, with their congruences, identities and varieties; then categories, including derived, triangulated and higher categories; and finally algebraic K-theory, which attaches abelian groups $K_n$ to rings, schemes and group rings and ties algebra to topology and arithmetic. Two groups of well-known problems sit just outside these classes and are included anyway. The homological conjectures for finite-dimensional (Artin) algebras are filed under 16E and 16G. The union-closed sets conjecture is filed under 05D05, but it has an equivalent form about lattices.

**MSC 2020 classes.** 06 (order, lattices, ordered algebraic structures), 08 (general algebraic systems), 18 (category theory; homological algebra) and 19 (K-theory). The second-level classes below were taken from the official file [MSC_2020.csv](https://msc2020.org/MSC_2020.csv), because the [zbMATH classification browser](https://zbmath.org/classification/) blocked automated access during the search.

- **06:** 06A ordered sets (06A07 combinatorics of posets), 06B lattices (06B15 representation theory of lattices), 06C modular and complemented lattices, 06D distributive lattices, 06E Boolean algebras, 06F ordered structures.
- **08:** 08A algebraic structures (08A30 subalgebras and congruence relations; 08A70 applications in computer science, such as constraint satisfaction), 08B varieties (08B05 equational logic and Mal'tsev conditions; 08B26 subdirect products and subdirect irreducibility), 08C other classes of algebras.
- **18:** 18A general theory of categories and functors, 18B special categories, 18C categories and theories, 18D categorical structures, 18E categorical algebra, 18F categories in geometry and topology (18F25 algebraic K- and L-theory), 18G homological algebra and derived functors (18G80 derived and triangulated categories), 18M monoidal categories and operads, 18N higher categories and homotopical algebra (18N20 weak $n$-categories, 18N40 model categories, 18N60 and 18N65 $(\infty,1)$- and $(\infty,n)$-categories).
- **19:** 19A Grothendieck groups and $K_0$, 19B Whitehead groups and $K_1$, 19C Steinberg groups and $K_2$, 19D higher algebraic K-theory (19D35 negative K-theory, NK and Nil), 19E K-theory in geometry (19E08 K-theory of schemes), 19F K-theory in number theory, 19G K-theory of forms, 19J obstructions from topology, 19K K-theory and operator algebras, 19L topological K-theory, 19M miscellaneous applications.
- **Nearby:** 16E and 16G (homological algebra and representation theory of Artin algebras: finitistic dimension, Nakayama, Auslander–Reiten, Tachikawa, Han), 05D05 (extremal set theory, where the union-closed sets conjecture lives).

**Standard problem lists.**

- [Wikipedia, List of unsolved problems in mathematics](https://en.wikipedia.org/wiki/List_of_unsolved_problems_in_mathematics), sections Algebra and Combinatorics, and "Problems solved since 2015", which lists Weibel's conjecture.
- Enomoto and Marczinzik, [On the homological conjectures for Artin algebras](https://arxiv.org/abs/2609.19172) (arXiv preprint, September 2026). It restates the standard list of homological conjectures from Auslander–Reiten–Smalø, *Representation Theory of Artin Algebras* (1995), p. 410, and draws the current diagram of implications between them.
- Guo and Igusa, [Derived delooping levels and finitistic dimension](https://arxiv.org/abs/2311.00661) (Adv. Math. 2025). The introduction gives the status of the finitistic dimension conjecture, the conjectures it implies, and the classes where it is known.
- W. Lück, [Survey on the Farrell–Jones Conjecture](https://arxiv.org/abs/2507.11337) (arXiv, July 2025; to appear in the Bulletin of the AMS): the known classes of groups and the list of groups for which the conjecture is still open.
- K. A. Kearnes, [The status of the problems from the book](https://www.math.u-szeged.hu/~mmaroti/pdf/open/2001%20TCT%20status.pdf), on the problems in Hobby–McKenzie, *The Structure of Finite Algebras*.
- M. Maróti's [archive of problem-session lists](https://www.math.u-szeged.hu/~mmaroti/pdf/open/) from universal algebra conferences, 1998–2015.
- R. Willard, [The finite basis problem](https://www.math.uwaterloo.ca/~rdwillar/documents/Publications/willard_aaa66.pdf), a survey of Park's conjecture.
- P. Marković, [A course on finite basis problems](https://www.karlin.mff.cuni.cz/~barto/student/AUAnotes.pdf), lecture notes with history and status.
- Open Problem Garden, [Finite Lattice Representation Problem](http://www.openproblemgarden.org/op/finite_congruence_lattice_problem).
- nLab, [homotopy hypothesis](https://ncatlab.org/nlab/show/homotopy+hypothesis), on which versions are theorems and which are open.

## Open problems

A ★ marks a problem whose statement someone with undergraduate algebra can follow. A paper called a preprint has not been refereed.

- Finitistic dimension conjecture: open.
- Nakayama conjecture, with the generalized Nakayama and Tachikawa conjectures: open. A September 2026 preprint shows it is equivalent, over all algebras at once, to the Auslander–Reiten conjecture.
- Auslander–Reiten conjecture: open.
- Bass conjecture on finite generation of algebraic K-groups: open.
- Farrell–Jones conjecture: open.
- Grothendieck's homotopy hypothesis for Grothendieck ∞-groupoids: partially solved (proved for 3-groupoids).
- Park's conjecture: open.
- ★ Finite lattice representation problem: open. Every lattice with at most seven elements is settled if an unrefereed August 2026 computation holds.
- ★ Union-closed sets conjecture: partially solved. The constant 0.38288525 is claimed (preprint) where $1/2$ is conjectured.
- ★ 1/3–2/3 conjecture: partially solved. The general bound is about 0.2764, and a July 2026 preprint checks every poset with at most 14 elements.

### Finitistic dimension conjecture

**What it asks.** Take a finite-dimensional algebra $A$ over a field and a finitely generated $A$-module $M$. Its projective dimension $\operatorname{pd} M$ is the length of the shortest resolution of $M$ by projective modules, and it can be infinite. Over the dual numbers $A = k[x]/(x^2)$, the simple module $k$ has the resolution

$$
\cdots \xrightarrow{\;x\;} A \xrightarrow{\;x\;} A \xrightarrow{\;x\;} A \longrightarrow k \longrightarrow 0,
$$

which never stops, so $\operatorname{pd} k = \infty$. The finitistic dimension leaves such modules out:

$$
\operatorname{findim} A = \sup \lbrace \operatorname{pd} M : M \text{ finitely generated},\ \operatorname{pd} M < \infty \rbrace .
$$

For the dual numbers every module of finite projective dimension turns out to be projective, so $\operatorname{findim} A = 0$. What could go wrong is an algebra with modules of projective dimension $1, 2, 3, \dots$ and no bound. The conjecture says this never happens: $\operatorname{findim} A < \infty$ for every Artin algebra $A$. The companion "big" conjecture said that $\operatorname{Findim} A$, the same supremum taken over all modules and not only the finitely generated ones, equals $\operatorname{findim} A$. That one is false in general, even for monomial algebras.

**Posed.** Hyman Bass stated it in print in "Finitistic dimension and a homological generalization of semi-primary rings", Trans. Amer. Math. Soc. 95 (1960) 466–488. Guo and Igusa (2025) describe the conjectures as first proposed by Rosenberg and Zelinsky and cite this paper of Bass for them.

**Where it stands.** Open. No counterexample is known among finite-dimensional algebras (Guo–Igusa, Adv. Math. 464 (2025) 110152), and the fact-checker found no claimed proof or counterexample from 2019 to September 2026. It is known for monomial algebras, radical-cube-zero algebras, algebras of representation dimension at most 3 (Igusa–Todorov 2005), special biserial algebras, and centralizer matrix algebras (Li–Xi, arXiv:2509.26353, 30 September 2025, a preprint that also proves the Nakayama conjecture for them; Chen–Xi, arXiv preprint, 2026).

Most attacks define a number that bounds $\operatorname{findim}$ and try to show it is always finite.

- The Igusa–Todorov φ-dimension (2005) is such a bound. Hanson and Igusa (Math. Z. 300 (2022) 807–826) found an algebra with infinite φ-dimension, which disproved the "φ-dimension conjecture".
- Rickard (Adv. Math. 354 (2019) 106735) showed that if the injective modules generate the unbounded derived category of $A$, the conjecture holds for $A$.
- Gélinas (Adv. Math. 394 (2022) 108052) introduced the delooping level, which bounds $\operatorname{Findim}$ of the opposite algebra. Kershaw and Rickard (arXiv:2305.09109, May 2023) found an algebra with infinite delooping level.
- Guo and Igusa (2025) introduced derived delooping levels (ddell), which are finite on the Kershaw–Rickard example. In September 2026 L. Chen (arXiv:2609.35849, preprint) answered their questions: ddell $\le$ subddell always, and an 11-dimensional monomial algebra has ddell different from $\operatorname{Findim}$ of its opposite algebra. Every value he found is finite. Wu, Wei, Liu and Cao (arXiv:2609.16957, preprint) give reduction techniques for ddell.
- Giatagantzidis (arXiv:2507.12978, 17 July 2025, preprint) gave arrow-reduction techniques that reduce the conjecture for an algebra to a smaller one.

The conjecture implies the strong Nakayama, generalized Nakayama, Auslander–Reiten, Nakayama, Wakamatsu tilting and Gorenstein symmetry conjectures.

**Smallest open case.** The sources name no small class of algebras that is open. The sharpest next question they support concerns the derived delooping level of Guo and Igusa, a proposed bound with no known infinite example: is it finite for every finite-dimensional algebra? Chen's September 2026 computations found only finite values.

**Why it is hard.** The conjecture needs one bound for every module of finite projective dimension, and syzygies over a general algebra are hard to control. Each earlier route has hit a wall. Representation dimension is unbounded (Rouquier, Invent. Math. 165 (2006) 357–367, using exterior algebras), so the Igusa–Todorov route through representation dimension 3 cannot reach every algebra; the φ-dimension can be infinite (Hanson–Igusa), and so can the delooping level (Kershaw–Rickard). Since the conjecture implies the six conjectures listed above, it is at least as hard as each of them.

**Sources.** [Guo–Igusa, arXiv:2311.00661](https://arxiv.org/abs/2311.00661) · [Hanson–Igusa, arXiv:1911.00614](https://arxiv.org/abs/1911.00614) · [Rickard, arXiv:1804.09801](https://arxiv.org/abs/1804.09801) · [Rickard, Adv. Math. (DOI)](https://doi.org/10.1016/j.aim.2019.106735) · [Kershaw–Rickard, arXiv:2305.09109](https://arxiv.org/abs/2305.09109) · [Giatagantzidis, arXiv:2507.12978](https://arxiv.org/abs/2507.12978) · [Li–Xi, arXiv:2509.26353](https://arxiv.org/abs/2509.26353) · [L. Chen, arXiv:2609.35849](https://arxiv.org/abs/2609.35849) · [Wu–Wei–Liu–Cao, arXiv:2609.16957](https://arxiv.org/abs/2609.16957)

*Fact-check: corrected (the claim that every proposed bound had failed went too far; no algebra with infinite derived delooping level is known).*

### Nakayama conjecture, with the generalized Nakayama and Tachikawa conjectures

**What it asks.** Take the minimal injective coresolution of an Artin algebra $A$, as a module over itself:

$$
0 \longrightarrow A \longrightarrow I^0 \longrightarrow I^1 \longrightarrow I^2 \longrightarrow \cdots
$$

The dominant dimension of $A$ is the number $n$ such that $I^0, \dots, I^{n-1}$ are projective and $I^n$ is not, or $\infty$ if every $I^j$ is projective. If $A$ is self-injective, as the group algebra of a finite group over a field is, then $A$ is injective already: the coresolution is $0 \to A \to A \to 0$, every term is projective, and the dominant dimension is infinite. Nakayama's conjecture says there are no other examples: an Artin algebra of infinite dominant dimension is self-injective. Put the other way round, every Artin algebra that is not self-injective has finite dominant dimension.

Three related statements travel with it.

- Generalized Nakayama conjecture (Auslander–Reiten 1975): every indecomposable injective module is a direct summand of some $I^j$.
- First Tachikawa conjecture (TC1): if $\operatorname{Ext}^i_A(DA, A) = 0$ for all $i > 0$, where $DA$ is the dual of $A$, then $A$ is self-injective.
- Second Tachikawa conjecture (TC2): if $A$ is self-injective, $M$ is a finitely generated $A$-module and $\operatorname{Ext}^i_A(M, M) = 0$ for all $i > 0$, then $M$ is projective.

**Posed.** Tadasi Nakayama, "On algebras with complete homology", Abh. Math. Sem. Univ. Hamburg 22 (1958) 300–307. Tachikawa stated his two conjectures in 1973.

**Where it stands.** Open, and no counterexample is known. The classical links: NC holds for all algebras if and only if TC1 and TC2 both do (Müller 1968, Tachikawa 1973); the generalized Nakayama conjecture holds for all algebras if and only if the Auslander–Reiten conjecture does (Auslander–Reiten 1975); and the finitistic dimension conjecture implies the strong Nakayama conjecture, which implies the generalized one, which implies NC. NC is known for local Artin algebras. It has been verified for centralizer matrix algebras in two preprints (Li–Xi, arXiv:2509.26353, 2025; Chen–Xi, arXiv:2603.20643, version 2 June 2026).

The news of 2026 is arXiv:2609.19172. Enomoto posted it alone on 14 September 2026, and Marczinzik joined as coauthor in version 2 on 24 September. For Artin algebras over a fixed commutative artinian ring it proves that NC, the generalized Nakayama conjecture, the Auslander–Reiten conjecture, TC1 and TC2 are globally equivalent: each holds for all such algebras if and only if every other one does. Over a fixed field it also proves that NC for all algebras is equivalent to its own derived invariance, which answers a question of Chen and Xi, and to the Chen–Xi conjecture that finite dominant dimension is preserved by derived equivalence. The paper is not refereed.

**Smallest open case.** The Tachikawa questions for commutative artinian local rings. Enomoto and Marczinzik note that they are still open there, although NC itself is known for every local Artin algebra. For a single algebra the five statements need not be equivalent, which is how NC can be settled for local algebras while the Tachikawa questions stay open there.

**Why it is hard.** Dominant dimension is read off an infinite coresolution, and no general mechanism is known that forces a non-projective term to appear. The conjecture is about all algebras at once. The 2026 equivalences show it is exactly as hard as the Auslander–Reiten and Tachikawa conjectures, but only globally: for one algebra they can come apart, as the local case shows.

**Sources.** [Wikipedia, Nakayama's conjecture](https://en.wikipedia.org/wiki/Nakayama%27s_conjecture) · [Enomoto–Marczinzik, arXiv:2609.19172](https://arxiv.org/abs/2609.19172) · [Chen–Xi, arXiv:2603.20643](https://arxiv.org/abs/2603.20643) · [Li–Xi, arXiv:2509.26353](https://arxiv.org/abs/2509.26353)

*Fact-check: confirmed.*

### Auslander–Reiten conjecture

**What it asks.** A projective module $P$ has no extensions at all: $\operatorname{Ext}^i_A(P, N) = 0$ for every $i \ge 1$ and every module $N$. The conjecture is a converse. If a module has no extensions with itself or with $A$ in any positive degree, it should be projective. For contrast, over the dual numbers $k[x]/(x^2)$ the simple module $k$ has $\operatorname{Ext}^i(k, k) \cong k$ in every degree, so it is nowhere near the hypothesis.

Precisely: let $A$ be an Artin algebra and $M$ a finitely generated $A$-module. If

$$
\operatorname{Ext}^i_A(M, M \oplus A) = 0 \quad \text{for all } i \ge 1,
$$

then $M$ is projective. The original 1975 form: if $M$ is a generator and $\operatorname{Ext}^i_A(M, M) = 0$ for all $i \ge 1$, then $M$ is projective. The same statement is conjectured for commutative Noetherian local rings, with "free" in place of "projective".

**Posed.** Maurice Auslander and Idun Reiten, "On a generalized version of the Nakayama conjecture", Proc. Amer. Math. Soc. 52 (1975) 69–74.

**Where it stands.** Open, both for Artin algebras and for commutative Noetherian local rings. For Artin algebras, it holds for all algebras exactly when the generalized Nakayama conjecture does (Auslander–Reiten 1975). Enomoto and Marczinzik (arXiv:2609.19172, September 2026, preprint) showed it is also globally equivalent to the Nakayama conjecture and to each Tachikawa conjecture. The finitistic dimension conjecture would imply it. It is proved for, among others:

- excellent Cohen–Macaulay normal domains containing $\mathbb{Q}$, and a slightly larger class (Huneke–Leuschke, arXiv:math/0305001, 2003; J. Algebra 275 (2004) 781–790);
- centralizer matrix algebras over fields (Chen–Xi, arXiv:2603.20643, 2026, preprint);
- finite-dimensional quantum complete intersections over any field (Xia, arXiv:2609.24007, 21 September 2026, a nine-page preprint). There $\operatorname{Ext}^1(M, M) = \operatorname{Ext}^2(M, M) = 0$ already forces $M$ to be projective, which gives both this conjecture and TC2 for these algebras.

**Smallest open case.** The sources do not isolate one. The nearest concrete target is the Tachikawa case from the previous entry: TC2 is the statement above for self-injective algebras, where $\operatorname{Ext}^i_A(M, A)$ vanishes automatically, and the Tachikawa questions are open even for commutative artinian local rings. On the commutative side the conjecture is open for Noetherian local rings in general, and the Huneke–Leuschke class is the proved case the sources name.

**Why it is hard.** The hypothesis is the vanishing of infinitely many Ext groups, and there is no general way to turn "no self-extensions in any degree" into a splitting or a projectivity statement. The proved cases lean on structure that general algebras and rings lack: complete-intersection or support-variety methods, gradings, normality.

**Sources.** [Huneke–Leuschke, arXiv:math/0305001](https://arxiv.org/abs/math/0305001) · [Enomoto–Marczinzik, arXiv:2609.19172](https://arxiv.org/abs/2609.19172) · [Xia, arXiv:2609.24007](https://arxiv.org/abs/2609.24007) · [Chen–Xi, arXiv:2603.20643](https://arxiv.org/abs/2603.20643)

*Fact-check: confirmed.*

### Bass conjecture (finite generation of algebraic K-groups)

**What it asks.** Algebraic K-theory attaches abelian groups $K_0(R), K_1(R), K_2(R), \dots$ to a ring $R$. The first one is concrete: $K_0(R)$ is built from the finitely generated projective $R$-modules, with direct sum as the addition. Over $\mathbb{Z}$ these modules are free, so $K_0(\mathbb{Z}) \cong \mathbb{Z}$, counted by rank. The higher groups are much harder to compute, and Bass conjectured that for arithmetic objects they are still finitely generated.

Precisely: for every regular scheme $X$ of finite type over $\operatorname{Spec} \mathbb{Z}$ (for example $\operatorname{Spec} A$ with $A$ a regular ring finitely generated as a $\mathbb{Z}$-algebra), the Quillen K-groups $K_n(X)$ are finitely generated abelian groups for all $n \ge 0$. Equivalently, the G-theory groups $K'_n(X)$ are finitely generated for every scheme $X$ of finite type over $\mathbb{Z}$. Regularity matters: the non-regular ring $\mathbb{Z}[x,y]/(x^2)$ already has an infinitely generated $K_1$.

This is not the Bass trace conjecture for group rings, and not Bass's question on modules of finite injective dimension over commutative local rings, which Peskine–Szpiro and Roberts settled.

**Posed.** Hyman Bass, "Some problems in 'classical' algebraic K-theory", in *Algebraic K-Theory II*, Lecture Notes in Math. 342, Springer (1973), pp. 3–73, the proceedings of a 1972 conference in Seattle.

**Where it stands.** Open. Quillen proved it in dimension at most 1, which covers rings of integers of number fields and curves over finite fields. In dimension 2 and up only fragments are known, mostly finiteness results for Chow groups of zero-cycles or with coefficients $\mathbb{Z}/n$ that come from higher class field theory. Haas and Lüders (arXiv:1903.05184, Section 8) survey them, cite Kerz–Saito's finiteness of $CH^d(X, q, \mathbb{Z}/n)$ over finite fields, and remark that in arbitrary dimension there are few results. The conjecture implies the Beilinson–Soulé vanishing conjecture (B. Kahn, *Handbook of K-theory*, 2005, Theorem 39, cited by Wikipedia). Geisser (arXiv:1103.5544, 2011) related a motivic-cohomology form of it to the Tate–Beilinson conjecture. Searches in September 2026 found no claimed proof and no counterexample.

**Smallest open case.** Dimension 2: regular schemes of finite type over $\mathbb{Z}$ of dimension two, such as smooth surfaces over a finite field, where only partial finiteness results exist. Quillen's theorems stop at dimension 1.

**Why it is hard.** Finite generation of the higher K-groups is known only through deep arithmetic input in dimension one (Quillen's theorems). In higher dimension the conjecture is tied to open conjectures on motivic cohomology and algebraic cycles, such as the Tate and Beilinson conjectures (Geisser 2011).

**Sources.** [Wikipedia, Bass conjecture](https://en.wikipedia.org/wiki/Bass_conjecture) · [Geisser, arXiv:1103.5544](https://arxiv.org/abs/1103.5544) · [Haas–Lüders, arXiv:1903.05184](https://arxiv.org/abs/1903.05184)

*Fact-check: confirmed.*

### Farrell–Jones conjecture

**What it asks.** From a group $G$ and a ring $R$ one forms the group ring $R[G]$, and one would like its algebraic K-groups $K_n(R[G])$. These are hard to compute head-on. The conjecture says they are assembled from the K-theory of the virtually cyclic subgroups of $G$, the subgroups that contain a cyclic subgroup of finite index. For a torsion-free group and $R = \mathbb{Z}$ it predicts, for example, that the Whitehead group $\operatorname{Wh}(G)$ and the reduced group $\widetilde{K}_0(\mathbb{Z}[G])$ both vanish. The second says that every finitely generated projective $\mathbb{Z}[G]$-module is stably free.

Precisely: for every group $G$ and every ring $R$, the assembly map

$$
H^G_n\big(E_{\mathcal{VCyc}}(G); \mathbf{K}_R\big) \longrightarrow K_n(R[G])
$$

is an isomorphism for all $n$, where $E_{\mathcal{VCyc}}(G)$ is the classifying $G$-space for the family of virtually cyclic subgroups. The same is conjectured for L-theory with decoration $\langle -\infty \rangle$. The conjecture implies the Borel conjecture in dimensions $\ge 5$ and the Novikov conjecture.

**Posed.** F. Thomas Farrell and Lowell E. Jones, "Isomorphism conjectures in algebraic K-theory", J. Amer. Math. Soc. 6 (1993) 249–297.

**Where it stands.** Open. Lück's survey (arXiv:2507.11337, July 2025, to appear in the Bulletin of the AMS) says no group is known for which the full conjecture fails. The full, fibred form with coefficients is proved for hyperbolic groups; finite-dimensional CAT(0) groups; virtually solvable groups; lattices in almost connected Lie groups, and more general lattices in locally compact groups; fundamental groups of manifolds of dimension at most 3; $GL_n(\mathbb{Q})$ and $GL_n(F(t))$; S-arithmetic groups; mapping class groups (Bartels–Bestvina); Coxeter groups and braid groups; graphs of abelian or virtually cyclic groups; and groups acting on products of hyperbolic graphs. The class of groups satisfying it is closed under subgroups, finite products, free products, directed colimits and certain extensions.

Recent work:

- Durham, Minsky and Sisto (arXiv:2504.17048, April 2025, preprint) cover many colourable hierarchically hyperbolic groups, including extra-large-type Artin groups.
- Andrew, Guerch and Hughes (arXiv:2311.14036, revised 2 March 2026, to appear in Math. Ann.) cover automorphism groups of one-ended groups that are hyperbolic relative to virtually polycyclic subgroups.
- Jaikin-Zapirain, Linton and Sánchez-Peralta (arXiv:2510.23518, 27 October 2025, preprint) prove the $K_0$ part for groups with a Cohen–Lyndon presentation.

Lück lists these as open in general: elementary amenable, amenable and a-T-menable groups; $\operatorname{Out}(F_n)$ for $n \ge 3$; Artin groups; Thompson's groups $F$, $T$ and $V$; torsion-free one-relator groups; linear groups; subgroups of almost connected Lie groups; residually finite groups; (bi)automatic groups; locally indicable groups.

**Smallest open case.** Named groups from Lück's list: $\operatorname{Out}(F_3)$, the first case of $\operatorname{Out}(F_n)$ with $n \ge 3$, and Thompson's group $F$.

**Why it is hard.** The existing proofs use controlled topology and flow-space or transfer methods, and these need the group to act geometrically with hyperbolic or non-positively curved features. Groups without that geometry are out of reach: amenable groups with complicated Nil-terms, $\operatorname{Out}(F_n)$, Thompson's groups. In the other direction, the conjecture holds for so many exotic groups, including groups with expanders built as colimits of hyperbolic groups, that Lück reports no strategy for finding a counterexample.

**Sources.** [Wikipedia, Farrell–Jones conjecture](https://en.wikipedia.org/wiki/Farrell%E2%80%93Jones_conjecture) · [Lück, arXiv:2507.11337](https://arxiv.org/abs/2507.11337) · [Durham–Minsky–Sisto, arXiv:2504.17048](https://arxiv.org/abs/2504.17048) · [Andrew–Guerch–Hughes, arXiv:2311.14036](https://arxiv.org/abs/2311.14036) · [Jaikin-Zapirain–Linton–Sánchez-Peralta, arXiv:2510.23518](https://arxiv.org/abs/2510.23518)

*Fact-check: confirmed.*

### Grothendieck's homotopy hypothesis for Grothendieck ∞-groupoids

**What it asks.** A topological space has points, paths between points, homotopies between paths, homotopies between those homotopies, and so on without end. Grothendieck proposed that this tower, with all its ways of composing, is an algebraic object, an ∞-groupoid, and that the ∞-groupoid determines the space up to weak homotopy equivalence. For some models of ∞-groupoids, such as Kan complexes, this is a theorem going back to Quillen (1967). The open question is about Grothendieck's own, purely algebraic definition.

Grothendieck defined weak ∞-groupoids as globular sets with composition and coherence operations governed by a "coherator", and a functor $\Pi_\infty$ that sends a space to its fundamental ∞-groupoid. Call a map of ∞-groupoids a weak equivalence if it induces bijections on all homotopy groups. The conjecture: $\Pi_\infty$ induces an equivalence of homotopy categories

$$
\operatorname{Ho}(\text{Spaces}) \xrightarrow{\;\simeq\;} \operatorname{Ho}(\text{Grothendieck } \infty\text{-groupoids}).
$$

**Posed.** Alexander Grothendieck, *Pursuing Stacks* (manuscript, 1983). Georges Maltsiniotis made the definitions precise (preprint 2007; arXiv:1009.2331, 2010).

**Where it stands.** Proved for 3-groupoids, open in general. Simon Henry's talk slides of 26 May 2022, which say the problem is still open, give the history.

- Ara (PhD thesis, 2010) proved that the Batanin and Grothendieck–Maltsiniotis definitions of ∞-categories are equivalent.
- Ara (2013) developed the homotopy theory of these groupoids, including the 2-out-of-3 property for weak equivalences.
- Lanari (thesis, published 2018) reduced the existence of the expected model structure to equivalent conditions and proved it for 3-groupoids.
- Henry (2016) gave a conditional proof.
- Henry and Lanari (arXiv:1905.05625, 2019) proved that if the canonical left semi-model structure on Grothendieck $n$-groupoids exists, the homotopy hypothesis holds for homotopy $n$-types. With Lanari's result, this proves it for Grothendieck 3-groupoids.

The missing step, as Henry puts it, is to show that pushouts of the boundary maps $D_n \to D_{n+1}$ are weak equivalences; equivalently, to construct suitable path or cylinder objects.

Johnathon Taylor posted at least three preprints on this in 2026, and none claims a proof. arXiv:2604.09867 (10 April 2026) proposes an inductive strategy that would give the generalized homotopy hypothesis if a chain of model-structure transfers can be completed. arXiv:2607.28540 ("Algebraic coherators, controlled theories, and Grothendieck realizations", 30 July 2026) builds coherators with the algebraic small object argument and states a "generalized pushout conjecture" that would imply the hypothesis. arXiv:2609.20860 ("A Tale of Two Paths") gives a new presentation of a cylinder object and shows it is isomorphic to Lanari's construction.

**Smallest open case.** Grothendieck 4-groupoids, one step past Lanari's 3-groupoids. By Henry–Lanari, the hypothesis for homotopy 4-types would follow from the existence of the canonical left semi-model structure on Grothendieck 4-groupoids. In general, what is missing is the lemma that pushouts of $D_n \to D_{n+1}$ are weak equivalences.

**Why it is hard.** Grothendieck ∞-groupoids are purely algebraic, with infinitely many coherence operations, so path objects and a model or semi-model structure have to be built from the algebra alone. Henry says the pushout lemma "sounds like it should be very easy", and nobody has proved it. The problem tests whether algebraic definitions of weak higher categories agree with the homotopical ones.

**Sources.** [nLab, homotopy hypothesis](https://ncatlab.org/nlab/show/homotopy+hypothesis) · [Henry–Lanari, arXiv:1905.05625](https://arxiv.org/abs/1905.05625) · [Henry, talk slides (2022)](https://www.chapman.edu/scst/conferences-and-events/grothendieck-files/henry-slides.pdf) · [Maltsiniotis, arXiv:1009.2331](https://arxiv.org/abs/1009.2331) · [Taylor, arXiv:2604.09867](https://arxiv.org/abs/2604.09867) · [Taylor, arXiv:2607.28540](https://arxiv.org/abs/2607.28540) · [Taylor, arXiv:2609.20860](https://arxiv.org/abs/2609.20860)

*Fact-check: corrected (Taylor has at least three 2026 preprints on the problem, not two).*

### Park's conjecture (finite basis problem for finite algebras with a finite residual bound)

**What it asks.** An identity of an algebra is an equation that holds for every choice of the variables, like $xy = yx$. An algebra usually satisfies infinitely many identities, and it is *finitely based* if finitely many of them imply all the others. The two-element semilattice $(\lbrace 0, 1 \rbrace, \min)$ is finitely based: every identity it satisfies follows from $xx = x$, $xy = yx$ and $(xy)z = x(yz)$. McKenzie (1996) showed that no algorithm can decide, for every finite algebra, whether it is finitely based (Tarski's finite basis problem is undecidable). Park proposed a structural condition that should be enough.

A finite algebra of finite type is a finite set with finitely many finitary operations. Let $A$ be one, and let $\mathrm{HSP}(A)$ be the variety it generates. Suppose there is a finite bound on the sizes of all subdirectly irreducible algebras in $\mathrm{HSP}(A)$; in other words, the variety has a finite residual bound. Park's conjecture: then $A$ is finitely based.

**Posed.** Robert E. Park, PhD dissertation "Equational classes of non-associative ordered systems", UCLA, 1976.

**Where it stands.** Open. Willard's survey (written around 2003 for AAA66) and Marković's lecture notes both describe it as open. It is proved under extra hypotheses on the variety:

- congruence-distributive (K. A. Baker's finite basis theorem);
- congruence-modular (McKenzie 1987);
- congruence meet-semidistributive (Willard 2000);
- having a difference term (Kearnes–Szendrei–Willard, Trans. Amer. Math. Soc. 368 (2016) 2115–2143). This generalizes the McKenzie and Willard theorems. A correction in Trans. Amer. Math. Soc. Ser. B 9 (2022), published 17 May 2022, fixes a gap by extending Kiss's characterization of the commutator to difference-term varieties.

Kearnes and Willard also proved a companion result: residually finite congruence meet-semidistributive varieties of finite type have a finite residual bound. A January 2026 "roadmap" on Zenodo (record 18255628) is not refereed and claims no proof. The fact-checker found no resolution from 2019 to 2026.

**Smallest open case.** Finite algebras of finite type whose variety has a finite residual bound but no difference term. The Kearnes–Szendrei–Willard theorem marks the frontier, and the sources name no smaller open class.

**Why it is hard.** Every proof so far uses commutator theory or definable principal congruences, which are available only in well-behaved varieties, such as those with a difference term. Arbitrary finite algebras can encode Turing machines (McKenzie's $A(T)$ construction), and the remaining cases lack the structure that the compactness and definability arguments need.

**Sources.** [Willard, The finite basis problem](https://www.math.uwaterloo.ca/~rdwillar/documents/Publications/willard_aaa66.pdf) · [Marković, lecture notes](https://www.karlin.mff.cuni.cz/~barto/student/AUAnotes.pdf) · [Kearnes–Szendrei–Willard, correction (Trans. AMS Ser. B)](https://www.ams.org/journals/btran/2022-09-10/S2330-0000-2022-00120-5/) · [Zenodo record 18255628](https://zenodo.org/records/18255628)

*Fact-check: confirmed.*

### Finite lattice representation problem (finite congruence lattice problem) ★

**What it asks.** A congruence of an algebra is an equivalence relation compatible with its operations; for a group, the congruences correspond to the normal subgroups. The congruences of any algebra form a lattice. Take the group $\mathbb{Z}/2 \times \mathbb{Z}/2$: its congruences correspond to the trivial subgroup, the three subgroups of order 2 and the whole group, and they form the lattice $M_3$, a bottom and a top with three incomparable elements between them. The problem runs the other way. Given a finite lattice, is there a finite algebra whose congruence lattice is that lattice?

Precisely: is every finite lattice isomorphic to the congruence lattice of some finite algebra? Pálfy and Pudlák (1980) showed that this is equivalent to asking whether every finite lattice is isomorphic to an interval

$$
[H, G] = \lbrace K : H \le K \le G \rbrace
$$

in the subgroup lattice of some finite group $G$. (The example above is the interval $[1, \mathbb{Z}/2 \times \mathbb{Z}/2]$.) Without finiteness the answer is yes: by the Grätzer–Schmidt theorem (1963), every algebraic lattice is the congruence lattice of some algebra, possibly infinite.

**Posed.** The finite question grew out of the Grätzer–Schmidt theorem of 1963. Wikipedia counts it among the oldest unsolved problems, citing J. Berman's 1970 thesis and B. Jónsson's 1972 lecture notes. P. P. Pálfy and P. Pudlák gave the group-theoretic form in Algebra Universalis 11 (1980).

**Where it stands.** Open. W. DeMeo (arXiv:1204.4305, 2012) proved that every lattice with at most seven elements is the congruence lattice of a finite algebra, with one possible exception. That lattice is called L10 in the DeMeo–Freese–Jipsen article "Representing Finite Lattices as Congruence Lattices of Finite Algebras" (L7 in the thesis).

In August 2026 Chenxiao Tian reportedly represented L10 as the interval $[S_3, \mathrm{PSL}(2,64)]$. That gives an algebra on 43,680 elements, the index of $S_3$ in $\mathrm{PSL}(2,64)$. The GitHub repository UniversalAlgebra/fin-lat-rep-gap, which holds the GAP programs for the DeMeo–Freese–Jipsen article, dates Tian's note to 28 August 2026. It is not on arXiv, but the repository's report `docs/L10-is-representable.md` cites it and links a copy on ResearchGate (which refused access when the survey was checked, so the note itself was not read). Pull request #2, opened by the user williamdemeo on 17 September 2026 and merged on 25 September, brings in that report: it recomputes Tian's interval with GAP, confirms each step of his argument, and finds six intervals isomorphic to L10: in $\mathrm{PSL}(2,64)$, $\mathrm{Sp}(6,2)$, $2.\mathrm{Sp}(6,2)$, McL, McL.2 and Co3. The one in $\mathrm{Sp}(6,2)$ gives a smaller algebra, on 34,560 elements. The repository's README now says L10 is the congruence lattice of a finite algebra. This is a written proof checked by computer by someone other than its author, not a refereed result. If it stands, every lattice with at most seven elements is representable; the general problem is untouched.

**Smallest open case.** The seven-element case is answered, pending refereeing. The sources do not say which lattices with eight elements are still unrepresented, so the next open case is not identifiable from the survey.

**Why it is hard.** A positive answer needs a construction that works for every finite lattice, and none is known. A negative answer needs a lattice that is not an interval in the subgroup lattice of any finite group, which means control over all finite groups, including the almost-simple ones, where unexpected intervals do turn up. The $\mathrm{PSL}(2,64)$ interval is one.

**Sources.** [Wikipedia, Finite lattice representation problem](https://en.wikipedia.org/wiki/Finite_lattice_representation_problem) · [DeMeo, arXiv:1204.4305](https://arxiv.org/abs/1204.4305) · [fin-lat-rep-gap, pull request #2](https://github.com/UniversalAlgebra/fin-lat-rep-gap/pull/2) · [fin-lat-rep-gap, report "L10 is representable"](https://github.com/UniversalAlgebra/fin-lat-rep-gap/blob/main/docs/L10-is-representable.md) · [fin-lat-rep-gap repository](https://github.com/UniversalAlgebra/fin-lat-rep-gap)

*Fact-check: corrected (pull request #2 was opened on 17 September and merged on 25 September; Tian's note is linked from the repository's report).*

### Union-closed sets conjecture (Frankl's conjecture) ★

This is mostly extremal combinatorics (MSC 05D05). It stays in this file because of its lattice form.

**What it asks.** Take a finite collection of finite sets that is closed under unions: whenever two sets are in the collection, so is their union. Frankl conjectured that some element lies in at least half of the sets. The family $\lbrace \varnothing, \lbrace 1 \rbrace, \lbrace 2 \rbrace, \lbrace 1, 2 \rbrace \rbrace$ shows that half is the most one can ask for: it has four sets, and each of $1$ and $2$ lies in exactly two of them.

Precisely: let $\mathcal{F}$ be a finite family of finite sets, other than $\lbrace \varnothing \rbrace$, such that $A \cup B \in \mathcal{F}$ whenever $A, B \in \mathcal{F}$. Then some element belongs to at least $|\mathcal{F}|/2$ members of $\mathcal{F}$. In lattice form: every finite lattice $L$ with at least two elements has a join-irreducible element $x$ with $|\lbrace y \in L : y \ge x \rbrace| \le |L|/2$.

**Posed.** Peter Frankl, 1979.

**Where it stands.** Open at the constant $1/2$. A constant fraction is now proved.

- Gilmer (arXiv:2211.09055, November 2022) proved the first constant bound, 0.01, with an entropy argument.
- Within days, Alweiss–Huang–Sellke, Chase–Lovett (arXiv:2211.11689) and Sawin (arXiv:2211.11504) raised it to $(3 - \sqrt{5})/2 \approx 0.38197$.
- Sawin's refinement gives about 0.38234, as evaluated by Yu (arXiv:2212.00658) and Cambie.
- Liu (arXiv:2306.08824, 2023) reached about 0.38271, assuming hypotheses that were verified numerically.
- Jiang (arXiv:2609.08291, 8 September 2026, computer-assisted, not refereed) claims 0.38288525.

Some cases are proved outright: families whose union has at most 12 elements (Vučković–Živković 2017), families of at most 50 sets, and families of height at most four in the empty-set-free formulation (Chenxiao Tian, arXiv:2608.25147, 25 August 2026, preprint; his 2021 preprint arXiv:2112.06659 did height at most three).

Two nearby results do not touch Frankl's conjecture itself. Ellis (arXiv:2211.12401) and Sawin refuted a stronger conjecture of Gilmer that would have implied it. Wang (arXiv:2609.25101, 19 September 2026, preprint) disproved a weighted generalization raised by Gowers in 2016. Claimed full proofs have not been accepted; one of them, Agama's arXiv:1711.02665, reached version 6 on 9 March 2026.

**Smallest open case.** The sources give three concrete edges: families whose union has 13 elements (proved up to 12), families of 51 sets (proved up to 50), and height five in the empty-set-free formulation (Tian's preprint reaches height four). For the constant, anything above 0.38288525 would be new.

**Why it is hard.** Natural averaging arguments fail. The entropy method behind the constant bounds has a built-in ceiling: Chase and Lovett showed that $(3 - \sqrt{5})/2$ is optimal for "approximately" union-closed families. To reach $1/2$ one needs a new way to use exact union-closure.

**Sources.** [Wikipedia, Union-closed sets conjecture](https://en.wikipedia.org/wiki/Union-closed_sets_conjecture) · [Gilmer, arXiv:2211.09055](https://arxiv.org/abs/2211.09055) · [Chase–Lovett, arXiv:2211.11689](https://arxiv.org/abs/2211.11689) · [Ellis, arXiv:2211.12401](https://arxiv.org/abs/2211.12401) · [Liu, arXiv:2306.08824](https://arxiv.org/abs/2306.08824) · [Jiang, arXiv:2609.08291](https://arxiv.org/abs/2609.08291) · [Tian, arXiv:2608.25147](https://arxiv.org/abs/2608.25147) · [Wang, arXiv:2609.25101](https://arxiv.org/abs/2609.25101)

*Fact-check: confirmed.*

### 1/3–2/3 conjecture ★

**What it asks.** A partial order leaves some pairs of elements incomparable. A linear extension lists all the elements in a line, in an order that respects the partial order. Choose a linear extension uniformly at random and ask how likely it is that $x$ comes before $y$. The conjecture says that unless the poset is already a chain, some pair is balanced, with that probability between $1/3$ and $2/3$.

Take three elements $a, b, c$ with the single relation $a < b$. The linear extensions are $cab$, $acb$ and $abc$. The element $b$ comes before $c$ only in $abc$, so that probability is exactly $1/3$, and $a$ comes before $c$ with probability $2/3$. No pair does better, so $1/3$ cannot be improved.

Precisely: for a finite poset $P$ that is not a chain, the balance constant

$$
\delta(P) = \max_{x, y \in P} \min\big(\Pr[x \text{ before } y],\ \Pr[y \text{ before } x]\big)
$$

is at least $1/3$.

**Posed.** Sergey Kislitsyn (1968). Michael Fredman and Nathan Linial later proposed it independently (Linial in 1984).

**Where it stands.** Open. Brightwell, Felsner and Trotter (1995) proved $\delta(P) \ge 1/2 - \sqrt{5}/10 \approx 0.2764$. That is still the best general bound, and it is optimal for their extension of $\delta$ to certain infinite posets. The conjecture is proved for posets of width two (Linial 1984), posets of height two (Trotter–Gehrlein–Fishburn 1992), semiorders (Brightwell 1989), N-free posets (Zaguia 2012), series-parallel posets, and polytrees (Zaguia 2019).

Computers settle small posets. It was known up to 13 elements (De Loof–De Baets–De Meyer 2010). Gupta (arXiv:2607.23926, July 2026, version 2, preprint) computed exact balance data for all 1,338,193,159,771 unlabeled posets on 14 elements. The conjecture holds for all of them, and so does the Gold Partition Conjecture, which implies it. The smallest balance constant above $1/3$ at that size is $37/106$.

An unrefereed 2026 GitHub repository, drellem2/one_third_width_three, claims the width-three case. Its Lean proof depends on two named axioms, and experts have not vetted it.

**Smallest open case.** Posets with 15 elements, since Gupta's preprint checks every poset with at most 14 elements by computer. Also posets of width three, where the claimed proof rests on two axioms that its Lean formalization assumes rather than proves.

**Why it is hard.** Computing the probability that $x$ precedes $y$ is #P-complete (Brightwell–Winkler 1991). The only known extremal posets are ordinal sums of one-element posets and the three-element poset with one relation. The general methods reach about 0.276, and Brightwell, Felsner and Trotter showed that this is sharp for their infinite extension, so a proof of $1/3$ has to use finiteness in an essential way.

**Sources.** [Wikipedia, 1/3–2/3 conjecture](https://en.wikipedia.org/wiki/1/3%E2%80%932/3_conjecture) · [Gupta, arXiv:2607.23926](https://arxiv.org/abs/2607.23926) · [drellem2/one_third_width_three](https://github.com/drellem2/one_third_width_three)

*Fact-check: confirmed.*

## Recently settled

### CSP dichotomy conjecture (Feder–Vardi)

**What it asked.** Fix a finite relational structure Γ, the template. The problem CSP(Γ) asks: given variables and constraints, each requiring some tuple of the variables to lie in one of the relations of Γ, can all the constraints hold at once? Colouring a graph with two colours is such a problem and is in P; colouring with three colours is NP-complete. Feder and Vardi conjectured that every finite template gives one or the other. That isn't automatic: if P ≠ NP, Ladner's theorem gives problems in NP that are neither in P nor NP-complete. Posed by Tomás Feder and Moshe Y. Vardi at STOC 1993; journal version SIAM J. Comput. 28(1) (1998).

**How it was settled.** Proved independently in 2017 by Andrei Bulatov (arXiv:1703.03021; FOCS 2017; simplified version arXiv:2007.09099, 2020) and Dmitriy Zhuk (arXiv:1704.01914; FOCS 2017, pp. 331–342; J. ACM 67(5), 2020). The criterion is algebraic. A polymorphism of Γ is an operation on its domain that preserves every relation of Γ, and CSP(Γ) is in P exactly when Γ has a weak near-unanimity polymorphism; otherwise it is NP-complete. The proofs rest on the structure theory of finite idempotent algebras: Taylor and weak near-unanimity terms, absorption, strong subalgebras. Zhuk's simplified proof (arXiv:2404.01080, 2024) also shows that tractability is equivalent to having infinitely many polymorphisms that are symmetric on all two-element sets. The theorem covers finite templates only. The infinite-template version (the Bodirsky–Pinsker conjecture, listed below) and promise CSPs are separate and still open.

**Sources.** [Zhuk, arXiv:1704.01914](https://arxiv.org/abs/1704.01914) · [Bulatov, arXiv:1703.03021](https://arxiv.org/abs/1703.03021) · [Zhuk, arXiv:2404.01080](https://arxiv.org/abs/2404.01080) · [Bulatov, arXiv:2007.09099](https://arxiv.org/abs/2007.09099)

*Fact-check: confirmed.*

### Weibel's conjecture on negative K-theory

**What it asked.** Algebraic K-theory has groups in negative degrees, $K_{-1}, K_{-2}, \dots$. They measure how K-theory fails to satisfy descent on singular schemes. Weibel asked whether they stop below minus the dimension. For a Noetherian scheme $X$ of finite Krull dimension $d$: (i) $K_i(X) = 0$ for all $i < -d$; (ii) for $i \le -d$ and every $r \ge 0$, the map $K_i(X) \to K_i(\mathbb{A}^r_X)$ is an isomorphism. Charles Weibel posed it as Question 2.9 in "K-theory and analytic isomorphisms", Invent. Math. 61 (1980) 177–197.

**How it was settled.** Moritz Kerz, Florian Strunk and Georg Tamme proved it (arXiv:1611.08466, November 2016; Invent. Math. 211 (2018) 523–577). Their key tool is pro-descent of algebraic K-theory for abstract blow-up squares. Earlier special cases were $d \le 1$ (from Bass's work), $d = 2$ with $X$ excellent (Weibel 2001), varieties in characteristic 0 (Cortiñas–Haesemeyer–Schlichting–Weibel 2008), and the result after inverting $p$ for quasi-excellent schemes on which $p$ is nilpotent (Kelly 2014). Those proofs relied on resolution of singularities, which is not available in positive or mixed characteristic. Wikipedia lists the conjecture among problems solved since 2015.

**Sources.** [Kerz–Strunk–Tamme, arXiv:1611.08466](https://arxiv.org/abs/1611.08466) · [Wikipedia, List of unsolved problems in mathematics](https://en.wikipedia.org/wiki/List_of_unsolved_problems_in_mathematics) · [Wikipedia, Weibel's conjecture](https://en.wikipedia.org/wiki/Weibel%27s_conjecture)

*Fact-check: confirmed.*

### Bondal–Van den Bergh conjecture on strong generation of $D^{\mathrm{perf}}(X)$

**What it asked.** An object $G$ of a triangulated category is a strong generator if every object can be built from $G$ in a bounded number of steps: there is one $n$ such that every object is a direct summand of something made from finite direct sums of shifts of $G$ with at most $n$ cones. Bondal and Van den Bergh proved that $D^{\mathrm{perf}}(X)$ has a strong generator when $X$ is smooth over a field, and remarked that this is presumably true for Noetherian regular $X$. Posed in Alexei Bondal and Michel Van den Bergh, "Generators and representability of functors in commutative and noncommutative geometry", Moscow Math. J. 3 (2003) 1–36.

**How it was settled.** Amnon Neeman (arXiv:1703.04484, March 2017; Ann. of Math. 193 (2021) 689–732) proved that for a quasi-compact separated scheme $X$, $D^{\mathrm{perf}}(X)$ has a strong generator if and only if $X$ can be covered by open affines $\operatorname{Spec} R_i$ with each $R_i$ of finite global dimension. In the same paper he proved strong generation of $D^b_{\mathrm{coh}}(X)$ for Noetherian $X$ of finite type over an excellent scheme of dimension at most 2. The earlier results, by Bondal–Van den Bergh, Rouquier and Orlov, all assumed equal characteristic; Kelly's old affine case was the only one in mixed characteristic. Neeman's proof has no characteristic restriction. Its new technique, approximating $D_{\mathrm{qc}}(X)$ by perfect complexes, has since found many other uses.

**Sources.** [Neeman, arXiv:1703.04484](https://arxiv.org/abs/1703.04484) · [Neeman, Ann. of Math. (Project Euclid)](https://projecteuclid.org/journals/annals-of-mathematics/volume-193/issue-3/Strong-generators-in-mathbfDmathrmperfX-and-mathbfDb_mathrmcohX/10.4007/annals.2021.193.3.1.short)

*Fact-check: confirmed.*

### Han's conjecture (Hochschild homology detects finite global dimension)

**What it asked.** Hochschild homology $HH_n(A)$ is an invariant of an algebra built from $A$ as a bimodule over itself. If a finite-dimensional algebra $A$ has finite global dimension, then $HH_n(A) = 0$ for all large $n$; that direction is known. Han conjectured the converse: if $HH_n(A)$ vanishes for all large $n$, then $A$ has finite global dimension. Posed by Yang Han, "Hochschild (co)homology dimension", J. London Math. Soc. 73 (2006) 657–668; Liu and Shen date the proposal to 2004.

**How it was settled.** Disproved in a preprint by Bochao Kong, Yeqin Liu and Yu Shen, "A counterexample to Han's conjecture" (arXiv:2608.00177, 31 July 2026, version 1 only; not refereed). They construct a finite-dimensional $\mathbb{C}$-algebra $A$ with $HH_n(A) = 0$ for every $n \ge 1$ and infinite global dimension. The construction starts from Krah's phantom category on the blow-up of $\mathbb{P}^2$ in ten general points (Invent. Math. 235 (2024) 1009–1018), passes to a derived-equivalent algebra through a Hille–Perling tilting bundle, tensors with the dual numbers $\mathbb{C}[\varepsilon]/(\varepsilon^2)$, and applies X.-W. Chen's partial resolutions and one-periodic folding. The result realizes a periodized phantom as the dg singularity category of an ordinary algebra. It follows Liu and Shen's counterexample to the dg version (arXiv:2512.12460, December 2025, preprint).

The authors say they found the counterexample with the help of OpenAI's GPT-5.6 Sol Ultra model and checked every argument and reference themselves. No objection had appeared on arXiv by 30 September 2026. Some July 2026 preprints by Armenta treat the conjecture as open, but they seem to predate the counterexample or be independent of it.

For context: Buchweitz, Green, Madsen and Solberg (2005) had answered Happel's analogous question for Hochschild cohomology negatively, but their examples have nonzero Hochschild homology in infinitely many degrees. Han's conjecture had been proved for commutative and monomial algebras and for some graded, Koszul, local and cellular algebras (Bergh–Madsen and others). A counterexample needed a nonzero triangulated category with no Hochschild homology at all, a phantom, and phantoms on rational surfaces were found only recently.

**Sources.** [Kong–Liu–Shen, arXiv:2608.00177](https://arxiv.org/abs/2608.00177) · [Liu–Shen, arXiv:2512.12460](https://arxiv.org/abs/2512.12460) · [Krah, Invent. Math. (DOI)](https://doi.org/10.1007/s00222-023-01235-3)

*Fact-check: confirmed.*

### Rickard's question: are all derived equivalences standard?

**What it asked.** A derived equivalence between finite-dimensional algebras $A$ and $B$ over a field is called standard if it is induced by a two-sided tilting complex of bimodules, that is, by tensoring with a complex of $B$-$A$-bimodules. Rickard asked whether every triangle equivalence $D^b(A) \to D^b(B)$ is naturally isomorphic to a standard one. He had shown that every derived equivalence agrees on objects with some standard one, and positive answers were known for hereditary algebras, triangular algebras and some derived-discrete algebras. Posed by Jeremy Rickard, "Derived equivalences as derived functors", J. London Math. Soc. (2) 43 (1991) 37–48.

**How it was settled.** Answered negatively in a preprint by Hu, Xi and Zhang (arXiv:2608.09062, 10 August 2026; version 2 on 2 September 2026; not refereed). Starting from commutative Frobenius algebras, they construct infinitely many non-standard derived equivalences between finite-dimensional algebras over a common field. Their Theorem 1.2 gives a necessary and sufficient condition for the question to have a positive answer. The survey's second reader also lists a preprint by Jinbi Zhang (arXiv:2608.15031) as part of the disproof. A counterexample has to agree with the identity on all objects, and even on truncated triangles, without being naturally isomorphic to it, so the usual invariants of derived equivalences cannot see it and it has to be built by hand. The fact-checker listed it among the problems the survey had missed, with the status "disproved", so it sits here rather than with the other suggestions.

**Sources.** [Hu–Xi–Zhang, arXiv:2608.09062](https://arxiv.org/abs/2608.09062) · [Rickard, J. London Math. Soc. (DOI)](https://doi.org/10.1112/jlms/s2-43.1.37) · [Jinbi Zhang, arXiv:2608.15031](https://arxiv.org/abs/2608.15031)

*Fact-check: found by the fact-checker; a second reader confirmed the preprint abstracts but not the proofs.*

## Further problems suggested by the fact-checker

The fact-checker found these five problems, with sources, but no second reader re-checked them.

- **Baum–Connes conjecture** (Paul Baum and Alain Connes, 1982). It asks whether the assembly map from the equivariant K-homology of the classifying space for proper actions of a group $G$ to the K-theory of its reduced group C\*-algebra is an isomorphism. Open without coefficients; the version with coefficients is false (Higson–Lafforgue–Skandalis, 2002). It is known for a-T-menable groups (which include amenable groups), hyperbolic groups, one-relator groups, and cocompact lattices in $SL(3,\mathbb{R})$, $SL(3,\mathbb{C})$ and $SL(3,\mathbb{Q}_p)$ (V. Lafforgue), while the main methods fail or become delicate for property (T) groups such as $SL(3,\mathbb{Z})$. This is operator K-theory (MSC 19K35, 46L80) and fits this survey's K-theory only loosely. [Wikipedia](https://en.wikipedia.org/wiki/Baum%E2%80%93Connes_conjecture)
- **Bass–Quillen conjecture** (Bass 1973; Quillen, Invent. Math. 36, 1976). For a regular Noetherian commutative ring $A$, it asks whether every finitely generated projective module over $A[t_1, \dots, t_n]$ is extended from $A$. Partially solved: the case of a field is the Quillen–Suslin theorem (1976), Lindel proved the case of smooth algebras over a field (1981), and Murthy settled dimension 2. [Stavrova](https://arxiv.org/abs/2512.18868) (December 2025, preprint) extends the case of dimension at most 2 to Zariski-locally trivial torsors under reductive groups with split derived group, and [Guo–Liu](https://arxiv.org/abs/2503.10163) (2025, preprint) prove a torsor version over valuation rings. The general mixed-characteristic case is open; a 2022 preprint claiming dimension 3 when 2 is invertible ([arXiv:2210.17337](https://arxiv.org/abs/2210.17337)) was withdrawn by its author. [Wikipedia](https://en.wikipedia.org/wiki/Bass%E2%80%93Quillen_conjecture)
- **Beilinson–Soulé vanishing conjecture** (A. Beilinson and C. Soulé, 1980s; the fact-checker did not pin down the first statement). For a field or a smooth variety $X$, it asks whether the rational motivic cohomology $H^i(X, \mathbb{Q}(j))$ vanishes in negative degrees $i < 0$. Open and known in only a few cases, such as finite fields and number fields; the Bass conjecture above implies it. [Wikipedia, Motivic cohomology](https://en.wikipedia.org/wiki/Motivic_cohomology)
- **Orlov's conjecture on the Rouquier dimension** (Dmitri Orlov, Moscow Math. J. 9 (2009) 143–149). For a smooth quasi-projective variety $X$, it asks whether the Rouquier dimension of $D^b(\operatorname{coh} X)$ equals $\dim X$. Partially solved: Rouquier showed it lies between $\dim X$ and $2 \dim X$, and it is proved for smooth projective curves (Orlov), regular quasi-affine schemes ([Olander](https://arxiv.org/abs/2108.12005) 2021), del Pezzo surfaces and some blow-ups of $\mathbb{P}^2$ and $\mathbb{P}^3$ ([Pirozhkov](https://arxiv.org/abs/1908.08283) 2019), and normal toric varieties ([Favero–Huang](https://arxiv.org/abs/2302.09158) 2023). [Orlov (DOI)](https://doi.org/10.17323/1609-4514-2009-9-1-143-149)
- **Bodirsky–Pinsker conjecture** (Manuel Bodirsky and Michael Pinsker, early 2010s; the fact-checker did not pin down the first publication). It asks whether the CSP dichotomy extends to infinite templates: for a first-order reduct $B$ of a countable, finitely bounded, homogeneous relational structure, is CSP($B$) always either in P or NP-complete? Open; 2026 papers call it wide open. [Mottet–Nagy–Pinsker](https://arxiv.org/abs/2301.12977) confirm it for reducts of many homogeneous hypergraphs, and Pinsker, Rydval, Schöbi, Spiess and Winkler (preprint, version 4, May 2026) show it suffices to consider templates without algebraicity. [Dorochko–Wrona](https://arxiv.org/abs/2601.22691) (2026 preprint) prove a dichotomy between first-order definable and L-hard for expansions of finitely bounded homogeneous model-complete cores, and [Feller–Pinsker](https://arxiv.org/abs/2602.02302) (2026 preprint) study when pp-interpretability is decidable. [Pinsker et al., arXiv:2502.06621](https://arxiv.org/abs/2502.06621)

## Related problems outside algebra

- **Stanley–Stembridge conjecture** (Richard P. Stanley and John R. Stembridge, J. Combin. Theory Ser. A 62 (1993) 261–279). It asked whether the chromatic symmetric function of the incomparability graph of a (3+1)-free poset is a nonnegative combination of elementary symmetric functions. Solved by Tatsuyuki Hikita (arXiv:2410.12758; version 1 on 16 October 2024, version 2 on 25 December 2025), who gives a probabilistic interpretation of the coefficients for unit interval graphs. arXiv lists no journal reference, so it is treated here as a preprint; the fact-checker found no objection. It belongs to algebraic combinatorics rather than to this survey. [Hikita, arXiv:2410.12758](https://arxiv.org/abs/2410.12758) · [Stanley–Stembridge (DOI)](https://doi.org/10.1016/0097-3165(93)90048-d)
