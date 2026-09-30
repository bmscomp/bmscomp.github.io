# Algebra

State of the art as of 30 September 2026. Not published on the site.

Algebra is covered in six files, split by MSC 2020 class. This page gives one table of open problems per file, every settled problem in one list by date, and the pick for the easiest problem still open. Statuses are copied from the field files, which hold the statements, the history, the sources and each entry's fact-check verdict. Read [the warning about dates](../README.md#a-warning-about-dates) before using anything from July to September 2026.

## The six fields

| Field | MSC 2020 | What else it takes in or leaves out |
|---|---|---|
| [Group theory (with semigroups)](group-theory.md) | 20, without 20C | Semigroups (20M) supply the Černý and Wilf conjectures. Group rings go to the rings file, group representations to the linear algebra file. |
| [Rings, modules and algebras](rings-and-algebras.md) | 16, 17 | Associative and nonassociative rings, group rings, Hopf algebras. Representations of Lie algebras go to the linear algebra file. |
| [Commutative algebra and algebraic geometry](commutative-algebra-and-algebraic-geometry.md) | 13, 14 | Most entries sit in 13D, 13H, 14B, 14C, 14E, 14H and 14R. |
| [Fields, Galois theory and polynomials](fields-galois-theory-and-polynomials.md) | 12; 11R, 11S, 11J | The algebraic side of number theory: class field theory, cyclotomic and Iwasawa theory, transcendence. |
| [Linear algebra, matrices and representation theory](linear-algebra-and-representation-theory.md) | 15, 20C, 17B10 | Also the algebraic complexity of matrix problems (68Q15, 68Q17). |
| [Homological algebra, category theory, K-theory, universal algebra and lattices](homological-categorical-and-universal-algebra.md) | 06, 08, 18, 19 | Also the homological conjectures for Artin algebras (16E, 16G) and, for its lattice form, the union-closed sets conjecture (05D05). |

In the tables below, ★ marks a problem whose statement a reader with undergraduate algebra can follow.

## [Group theory (with semigroups)](group-theory.md)

| Problem | Posed | Where it stands |
|---|---|---|
| ★ Bounded Burnside problem: is $B(2,5)$ finite? | Burnside, 1902; Kostrikin's test in Kourovka 11.48, 1990 | Open. $B(m,n)$ is finite for $n = 2, 3, 4, 6$ and infinite for odd $n \ge 665$; the largest finite quotient of $B(2,5)$ has order $5^{34}$. |
| ★ Infinite finitely presented periodic groups (Kourovka 8.52) | Recorded by Olshanskii, 1982; the question is older | Open. Every known infinite finitely generated periodic group needs infinitely many relations. |
| ★ Andrews–Curtis conjecture | Andrews and Curtis, 1965 | Open, and most experts expect it to be false. $AK(3)$, of length 13, is the shortest possible two-generator counterexample. |
| ★ Herzog–Schönheim conjecture on coset partitions | Herzog and Schönheim, 1974 | Partially solved: groups of order below 1440, Sylow-tower groups, and all finite simple and symmetric groups (preprint). Solvable groups are open. |
| ★ Higman's PORC conjecture | Higman, 1960 | Open; verified for groups of order $p^n$ with $n \le 7$. $n = 8$ is next, and many experts doubt the conjecture at $n = 10$. |
| ★ Babai's conjecture on diameters of finite simple groups | Babai, in Babai–Seress, 1992 | Partially solved: true in bounded rank. For $A_n$ the best bound is quasipolynomial. |
| Residual finiteness of hyperbolic groups | Usually credited to Gromov, 1987 | Open; true for those acting geometrically on CAT(0) cube complexes (Agol, 2013). A 2019 counterexample was withdrawn. |
| Amenability of Thompson's group $F$ | Geoghegan, 1979 | Open. At least four claimed solutions, in both directions, have failed. |
| Boone–Higman conjecture | Boone and Higman, 1974 | Partially solved: hyperbolic groups (Duke, 2026), $\mathrm{Aut}(F_n)$ and braid groups (2025). Of 3-manifold groups only closed graph manifolds that are not Seifert fibred remain. |
| Kervaire (Kervaire–Laudenbach) conjecture | Kervaire, from his 1965 work on knot groups | Partially solved: true when $G$ is residually finite, hyperlinear or torsion-free. |
| ★ Word and conjugacy problems for Artin–Tits groups | No single source; open since the spherical case was solved in 1972 | Open in general; solved for many classes, among them every Artin group of rank three (2024). |
| ★ Černý conjecture on synchronizing automata | Černý; his extremal automata are from 1964, the conjecture is dated 1969 | Open. The best general bound is about $0.1654\,n^3$ against the conjectured $(n-1)^2$. |
| ★ Wilf's conjecture on numerical semigroups | Wilf, 1978 | Open; known for multiplicity up to 18 and genus up to 100. The fact-checker did not review this entry. |

The fact-checker suggested seven more, which nobody re-checked: the conjugacy problem for one-relator groups, Gottschalk's surjunctivity conjecture, the existence of a non-hyperlinear group, Gromov's surface subgroup question, the Whitehead asphericity conjecture, the complexity of group isomorphism, and the $K(\pi,1)$ conjecture for Artin groups.

## [Rings, modules and algebras](rings-and-algebras.md)

| Problem | Posed | Where it stands |
|---|---|---|
| ★ Kaplansky's zero-divisor conjecture, with the idempotent conjecture | Higman, 1940 thesis; Kaplansky, 1956 | Open; no counterexample known. One would have to come from a torsion-free group without unique products. |
| ★ Higman's integral unit problem (the unit conjecture over $\mathbb{Z}$) | Higman, 1940 thesis | Open. Gardam's units in $\mathbb{C}[P]$ need an 8th root of unity, and no non-trivial unit of $\mathbb{Z}[G]$ is known for torsion-free $G$. |
| ★ Dixmier conjecture for the Weyl algebras $A_1$ and $A_2$ | Dixmier, 1968 | Partially solved: false for $A_n$ with $n \ge 3$, through the July 2026 Jacobian counterexample. $A_1$ and $A_2$ are open; Zheglov's claimed proof for $A_1$ is unverified. |
| ★ Jacobson's conjecture | Jacobson, 1956 | Open; known for fully bounded Noetherian rings and Noetherian rings of Krull dimension 1. |
| ★ Kurosh problem for division rings | Kurosh, 1941, for algebras; Dniester Notebook 1.173 | Open. What is left: a countably infinite centre with infinite algebraic extensions, such as $\mathbb{Q}$, and no polynomial identity. |
| ★ Cyclicity of division algebras of prime degree | Traditionally Albert, 1930s | Open for every prime $p \ge 5$; true for $p = 2$ and $3$. |
| ★ Kuzmin's conjecture on the Nagata–Higman nilpotency index | Kuzmin, 1975 | Open from $n = 5$ on: is $d(5) = 15$? Known: $15 \le d(5) \le 25$. |
| ★ L'vov–Kaplansky conjecture on images of multilinear polynomials | L'vov, Dniester Notebook 1.98, 1982–83 or earlier | Open; $2 \times 2$ matrices are settled over quadratically closed fields and over $\mathbb{R}$. |
| ★ Albert's problem on commutative power-associative nilalgebras | Albert, 1948 | Open; solvable up to dimension 9 over an algebraically closed field of characteristic 0 (2018). Dimension 10 is next. |
| Kaplansky's sixth Hopf algebra conjecture | Kaplansky, 1975 | Open; known in prime-power dimension, for quasitriangular algebras and for simple modules of dimension 2. |

Two more came from the fact-checker and were not re-checked: Kaplansky's direct finiteness conjecture for group rings, and Lichtman's conjecture on free subgroups of division rings.

## [Commutative algebra and algebraic geometry](commutative-algebra-and-algebraic-geometry.md)

| Problem | Posed | Where it stands |
|---|---|---|
| ★ Plane Jacobian conjecture ($n = 2$) | Kraus, 1884; Keller, 1939, in $n$ variables | Open, and since July 2026 the only case left. A counterexample would need degree above 104 and $\gcd(\deg f, \deg g) \ge 16$. |
| ★ Zariski cancellation problem, characteristic 0 | Discussed in this form by the early 1970s | Open for $n \ge 3$, false in positive characteristic. Test case: is the cylinder over the Russell cubic isomorphic to $\mathbb{C}^4$? |
| ★ Abhyankar–Sathaye embedding conjecture | Abhyankar and Sathaye, 1970s | Open for $n \ge 3$; true for $n = 2$ in characteristic 0. |
| Hodge conjecture | Hodge, 1950 | Open. Codimension 1 is known, and Markman's 2025 preprint, with Schoen's degeneration argument and earlier reductions, gives abelian fourfolds; Totaro names codimension-2 cycles on fourfolds as the first open case. |
| Resolution of singularities in characteristic $p$ | Zariski's programme, 1930s–40s | Open in dimension $\ge 4$; threefolds are done (Cossart–Piltant, 2008–09). Hironaka's 2017 claim and Tian's of August 2026 are not accepted. |
| Buchsbaum–Eisenbud–Horrocks rank conjecture | Buchsbaum and Eisenbud, 1977; Horrocks, independently | Partially solved: known in codimension $\le 4$. Open from codimension 5, starting with $\beta_2(R/I) \ge 10$. |
| Serre's positivity conjecture, ramified case | Serre, 1958 | Partially solved: non-negativity is Gabber's (1995). Strict positivity is open for ramified regular local rings of mixed characteristic. |
| Small Cohen–Macaulay modules conjecture | Hochster, early 1970s | Open; known in dimension $\le 2$. A counterexample in dimension 3 was claimed in a preprint of 21 September 2026. |
| ★ Nagata's conjecture on plane curves | Nagata, 1959 | Open; known when the number of points $r$ is a perfect square. First open case: $r = 10$. |
| Rationality of cubic fourfolds | Morin, 1940 (wrongly); Fano, 1943; Hassett; Kuznetsov, 2010 | Partially solved: special families are rational. Irrationality of the very general one is claimed (2025) but not refereed. |
| Tate conjecture on algebraic cycles | Tate, 1963 | Partially solved; open even for divisors on arbitrary surfaces over finite fields. Abelian fourfolds and fivefolds over finite fields are claimed in August–September 2026 preprints. |
| Green's conjecture on canonical curves | Green, 1984 | Partially solved: true for the general curve of every genus (Voisin, 2002 and 2005), open for arbitrary smooth curves. |

Suggested by the fact-checker and not re-checked: Zariski's multiplicity conjecture, Lech's conjecture, Hartshorne's complete intersection conjecture, Grothendieck's standard conjectures, and the abundance conjecture.

## [Fields, Galois theory and polynomials](fields-galois-theory-and-polynomials.md)

| Problem | Posed | Where it stands |
|---|---|---|
| ★ Inverse Galois problem | By convention Hilbert, 1892, and Noether, 1918 | Partially solved: all solvable groups, all 26 sporadic groups ($M_{23}$ in an August 2026 preprint) and every transitive group of degree up to 23. In degree 24, 286 of the 25,000 transitive groups were known to occur in June 2026. |
| ★ Noether's problem | Noether, 1913 | Partially solved: false in general (Swan, 1969, for $C_{47}$). Open for $A_n$, $n \ge 6$, over $\mathbb{Q}$. |
| Malle's conjecture | Malle, 2002 (weak form) and 2004 (strong form) | Partially solved: the strong form is false as stated (Klüners, 2005); the weak form is open, with many families proved. |
| ★ Hilbert's thirteenth problem, algebraic version | Hilbert, 1900 | Open. No degree is known whose resolvent degree exceeds 1; is $\mathrm{RD}(6)$ equal to 1 or 2? |
| ★ Casas-Alvero conjecture | Casas-Alvero, 2001 | Open. A claimed proof (2025, revised 2026) has not been verified; degree 20 is the smallest open. |
| ★ Lehmer's conjecture | Lehmer, 1933 | Open; true for non-reciprocal polynomials (Smyth, 1971). The claimed proofs since 2017 are not accepted. |
| ★ Schanuel's conjecture | Schanuel; first published by Lang, 1966 | Open even for $n = 2$, which contains the algebraic independence of $e$ and $\pi$. |
| ★ Four exponentials conjecture | Selberg, early 1940s, unpublished; Schneider in print, 1957 | Open; the six exponentials theorem is known. |
| Hilbert's twelfth problem | Kronecker, 1880; Hilbert, 1900 | Partially solved: $\mathbb{Q}$, imaginary quadratic fields, and totally real fields by a $p$-adic construction (Dasgupta–Kakde). Complex cubic fields are open. |
| Kummer–Vandiver conjecture | Kummer, 1849 and 1853 | Open; verified for every $p < 2^{31}$. |
| Leopoldt's conjecture | Leopoldt, 1962 | Open; proved for fields abelian over $\mathbb{Q}$ or over an imaginary quadratic field. |
| Serre's Conjecture II | Serre, 1962 | Partially solved; open for groups of type $E_6$, $E_7$, $E_8$ and trialitarian $D_4$. |

Six further problems from the fact-checker, not re-checked, are Hilbert's tenth problem over $\mathbb{Q}$, the Cohen–Lenstra heuristics, Greenberg's conjecture, infinitely many real quadratic fields of class number one, the Massey vanishing conjecture, and the Grunwald problem. Two problems outside algebra are recorded as well: Sendov's conjecture, proved in August 2026 without refereeing, and the Littlewood conjecture, open.

## [Linear algebra, matrices and representation theory](linear-algebra-and-representation-theory.md)

| Problem | Posed | Where it stands |
|---|---|---|
| ★ Is the matrix multiplication exponent $\omega$ equal to 2? | Strassen, 1969 | Open. The best upper bound is $\omega < 2.371177$ (August 2026 preprint); nothing beyond $\omega \ge 2$ is known from below. |
| ★ Valiant's permanent versus determinant conjecture | Valiant, 1979 | Open. The determinantal complexity of $\operatorname{per}_n$ is known to lie between $n^2/2$ and $2^n - 1$. |
| ★ Hadamard conjecture | Implicit in Hadamard, 1893; usually credited to Paley, 1933 | Open. Matrices for the twelve open orders below 2000, the smallest 668, were announced on 12 August 2026; they are public and others have checked them, but there is no refereed paper yet. |
| ★ Ryser's circulant Hadamard conjecture | Ryser, 1963 | Open. The smallest order no known test rules out is $4 \cdot 11715^2 = 548{,}964{,}900$. |
| ★ Lieb's permanental dominance conjecture | Lieb, 1966 | Open. Known for $n \le 3$; $n = 4$ is claimed in an August 2026 preprint with a Lean proof. |
| ★ Rota's basis conjecture | Rota, 1989 | Open; proved for $n \le 3$ and for paving matroids. |
| Alperin–McKay conjecture | Alperin, 1975 | Partially solved: a theorem for $p = 2$ (Ruhstorfer, Annals 2025), open for odd primes. |
| McKay–Navarro (Galois–McKay) conjecture | Navarro, 2004 | Partially solved: a theorem for $p = 2$ (Ruhstorfer and Schaeffer Fry, 2025), open for odd primes. |
| Alperin's weight conjecture | Alperin, 1986 | Open; reduced to simple groups. Types B and C are claimed in a September 2026 preprint. |
| Brauer's $k(B)$-conjecture | Brauer, 1946 | Partially solved: a theorem for $p$-solvable groups. |
| Broué's abelian defect group conjecture | Broué, 1988 | Open; known for cyclic and Klein-four defect groups, for symmetric groups and for several other families. |
| Combinatorial invariance conjecture for Kazhdan–Lusztig polynomials | Lusztig, around 1983; Dyer, 1987 | Partially solved: refereed results reach intervals of length 8 in symmetric groups and 4 in general, and 2025–26 preprints go further. |

From the fact-checker, not re-checked: a combinatorial rule for Kronecker coefficients, mutually unbiased bases in dimension 6, and Zauner's conjecture. Just outside algebra sits the Komlós conjecture, claimed solved in September 2026 preprints.

## [Homological algebra, category theory, K-theory, universal algebra and lattices](homological-categorical-and-universal-algebra.md)

| Problem | Posed | Where it stands |
|---|---|---|
| Finitistic dimension conjecture | Bass, in print, 1960 | Open; no counterexample among finite-dimensional algebras. |
| Nakayama conjecture, with the generalized Nakayama and Tachikawa conjectures | Nakayama, 1958; Tachikawa, 1973 | Open. A September 2026 preprint shows it equivalent, over all algebras at once, to the Auslander–Reiten conjecture. |
| Auslander–Reiten conjecture | Auslander and Reiten, 1975 | Open, for Artin algebras and for commutative Noetherian local rings. |
| Bass conjecture on finite generation of algebraic K-groups | Bass, 1973 | Open. Quillen proved dimension $\le 1$; dimension 2 is next. |
| Farrell–Jones conjecture | Farrell and Jones, 1993 | Open; no group is known to fail it. $\mathrm{Out}(F_3)$ and Thompson's group $F$ are among the open cases. |
| Grothendieck's homotopy hypothesis for Grothendieck ∞-groupoids | Grothendieck, 1983 | Partially solved: proved for 3-groupoids. |
| Park's conjecture | Park, 1976 | Open; proved for varieties with a difference term (2016). |
| ★ Finite lattice representation problem | After the Grätzer–Schmidt theorem of 1963 | Open. Every lattice with at most seven elements is now representable: Tian's August 2026 note, checked by computer in September, not yet refereed. |
| ★ Union-closed sets conjecture | Frankl, 1979 | Partially solved: a constant fraction is proved, and 0.38288525 is claimed in a preprint where $1/2$ is conjectured. |
| ★ 1/3–2/3 conjecture | Kislitsyn, 1968 | Partially solved: the general bound is about 0.2764, and a July 2026 preprint checks every poset with at most 14 elements. |

The fact-checker's five suggestions, not re-checked, are the Baum–Connes, Bass–Quillen and Beilinson–Soulé conjectures, Orlov's conjecture on the Rouquier dimension, and the Bodirsky–Pinsker conjecture. Hikita solved the Stanley–Stembridge conjecture, which the file places outside algebra, in a preprint first posted in 2024.

## Recently settled

All six files, newest first. A date is that of the first preprint or announcement, or the journal year where the field file gives nothing earlier. The first eleven rows date from July to September 2026, and none of the eleven has been refereed.

| Date | Problem | Answer | Refereed |
|---|---|---|---|
| 26 Sep 2026 | Kaplansky's conjecture on five-dimensional finite semifields ([rings](rings-and-algebras.md)) | False: Nagy and Zhou; AI-assisted, with a Lean formalization | No, preprint |
| Sep 2026 | Köthe's conjecture ([rings](rings-and-algebras.md)) | False: a Lean proof found by an AI model, then Adamczewski–Böhmler–Marczinzik (7 Sep) and Greenfeld–King–Vendramin (14 Sep) | No, preprints |
| 25 Aug 2026 | Peskine–Szpiro dimension inequality, strong intersection and grade conjectures ([commutative](commutative-algebra-and-algebraic-geometry.md)) | False: Ma; AI-assisted | No, preprint |
| 21 Aug and 7 Sep 2026 | Huneke–Wiegand conjecture ([commutative](commutative-algebra-and-algebraic-geometry.md)) | False: Christensen–Gerko–Iyengar, with Codex; a second example by Pham | No, preprints |
| 10 Aug 2026 | Rickard's question: are all derived equivalences standard? ([homological](homological-categorical-and-universal-algebra.md)) | No: Hu, Xi and Zhang | No, preprint |
| 9 Aug 2026 | $M_{23}$ as a Galois group over $\mathbb{Q}$ ([fields](fields-galois-theory-and-polynomials.md)) | Yes: Huang, Jackson, Lee, Poonen, Pries and Zhang | No, preprint; the claim is a finite computation |
| 3 Aug 2026 | Grothendieck's question: is a finite locally free group scheme killed by its order? ([commutative](commutative-algebra-and-algebraic-geometry.md)) | No: Mathew, with AI models; the example is in Mathlib | No paper; a second reader doubted the status |
| 1 Aug 2026 | Is every group sofic? ([groups](group-theory.md)) | No: announced by OpenAI, with follow-ups by Fournier-Facio and by Kun and Thom | No; the disproof is provisional |
| 31 Jul 2026 | Han's conjecture ([homological](homological-categorical-and-universal-algebra.md)) | False: Kong, Liu and Shen; AI-assisted | No, preprint |
| 27 Jul and 4 Aug 2026 | Crouzeix's conjecture, scalar version ([linear algebra](linear-algebra-and-representation-theory.md)) | True: Jin, and independently Lorist and Schwenninger, both with AI help; a third proof by Luo | No, preprints |
| 19 Jul 2026 | Jacobian conjecture for $n \ge 3$ ([commutative](commutative-algebra-and-algebraic-geometry.md)) | False: Alpöge's explicit map in three variables, formalized in Lean | No paper; the map can be checked by computer |
| Oct 2025 | Wiegold problem, Kourovka 5.52 ([groups](group-theory.md)) | No: Chen and Lodha | No, preprint; Kourovka marks it solved |
| Dec 2024 and Jan 2025 | Hilbert's tenth problem over rings of integers ([fields](fields-galois-theory-and-polynomials.md)) | No algorithm exists: Koymans–Pagano; Alpöge–Bhargava–Ho–Shnidman, independently | No, preprints |
| Aug 2024 | Irrationality of $L(2, \chi_{-3})$ ([fields](fields-galois-theory-and-polynomials.md)) | Irrational; in fact $1$, $\zeta(2)$ and $L(2, \chi_{-3})$ are linearly independent over $\mathbb{Q}$: Calegari, Dimitrov and Tang | No, preprint |
| Oct 2023, announced | McKay conjecture ([linear algebra](linear-algebra-and-representation-theory.md)) | True: Cabanes and Späth | Annals of Math., 2026 |
| Oct 2023 | Brumer–Stark conjecture ([fields](fields-galois-theory-and-polynomials.md)) | True: Dasgupta and Kakde away from 2; Dasgupta, Kakde, Silliman and Wang over $\mathbb{Z}$ | Away from 2: Annals of Math., 2023. The 2-part: no, preprint |
| Mar 2023 | Baumslag's conjecture: one-relator groups are coherent ([groups](group-theory.md)) | True: Jaikin-Zapirain and Linton | Annals of Math., 2025 |
| 2022 | Brauer's height zero conjecture ([linear algebra](linear-algebra-and-representation-theory.md)) | True: Ruhstorfer for $p = 2$; Malle, Navarro, Schaeffer Fry and Tiep for odd $p$ | Annals of Math., 2024 and 2025 |
| Nov 2021 | Van der Waerden's conjecture on Galois groups of random polynomials ([fields](fields-galois-theory-and-polynomials.md)) | True: Bhargava | Annals of Math., 2025 |
| Jun 2021 | Modular isomorphism problem for $p = 2$ ([rings](rings-and-algebras.md)) | False: García-Lucas, Margolis and del Río; odd $p$ open | J. reine angew. Math., 2022 |
| Feb 2021 | Kaplansky's unit conjecture over fields ([rings](rings-and-algebras.md)) | False: Gardam over $\mathbb{F}_2$, Murray in every prime characteristic, Gardam in characteristic 0 (2023) | Annals of Math., 2021; the characteristic-0 paper is a preprint |
| Dec 2019 | Schinzel–Zassenhaus conjecture ([fields](fields-galois-theory-and-polynomials.md)) | True: Dimitrov | No journal version found |
| 2019 and 2021 | Property (T) for $\mathrm{Aut}(F_n)$ ([groups](group-theory.md)) | Yes for $n \ge 5$: Kaluba–Nowak–Ozawa; Kaluba–Kielak–Nowak; computer-assisted | Math. Ann., 2019; Annals of Math., 2021 |
| 2019 | Donkin's tilting module conjecture ([linear algebra](linear-algebra-and-representation-theory.md)) | False: Bendel, Nakano, Pillen and Sobaje, first in type $G_2$; type $A$ still open | J. reine angew. Math., 2020; Compositio, 2024 |
| 2019 | Thompson's conjecture on conjugacy class sizes, Kourovka 12.38 ([groups](group-theory.md)) | True; the final step is Gorshkov's | Commun. Algebra, 2019 |
| 2018 | Finitely generated simple groups of intermediate growth, Kourovka 9.8 ([groups](group-theory.md)) | Yes: Nekrashevych | Annals of Math., 2018 |
| Dec 2017 | Strassen's direct sum conjecture ([linear algebra](linear-algebra-and-representation-theory.md)) | False: Shitov | Acta Math., 2019 |
| Nov 2017 | Eisenbud–Goto regularity conjecture ([commutative](commutative-algebra-and-algebraic-geometry.md)) | False: McCullough and Peeva | J. Amer. Math. Soc., 2018 |
| Oct 2017 | First Zassenhaus conjecture ([rings](rings-and-algebras.md)) | False: Eisele and Margolis | Adv. Math., 2018 |
| 2017 | CSP dichotomy conjecture ([homological](homological-categorical-and-universal-algebra.md)) | True: Bulatov and Zhuk, independently | FOCS 2017; J. ACM, 2020 |
| Mar 2017 | Bondal–Van den Bergh conjecture on strong generation ([homological](homological-categorical-and-universal-algebra.md)) | True: Neeman | Annals of Math., 2021 |
| Nov 2016 | Weibel's conjecture on negative K-theory ([homological](homological-categorical-and-universal-algebra.md)) | True: Kerz, Strunk and Tamme | Invent. Math., 2018 |
| Oct 2016 | Stillman's conjecture ([commutative](commutative-algebra-and-algebraic-geometry.md)) | True: Ananyan and Hochster | J. Amer. Math. Soc., 2020 |
| Sep 2016 | Direct summand conjecture ([commutative](commutative-algebra-and-algebraic-geometry.md)) | True: André; a shorter proof by Bhatt | Publ. Math. IHÉS, 2018 |
| Sep 2013 | Lusztig's conjecture on modular characters, for $p > h$ ([linear algebra](linear-algebra-and-representation-theory.md)) | False: Williamson | J. Amer. Math. Soc., 2017 |

## The easiest open problem

[easiest-open-problem.md](easiest-open-problem.md) picks Lieb's permanental dominance conjecture, from the linear algebra file. It was next in line after the lattice L10 and the Hadamard matrix of order 668. Both of those have been answered in public and checked by someone other than their authors, though neither answer is refereed; the lattice and Hadamard rows above give only the unrefereed status. The note is newer than the field files on both problems. It reports that Tian's note on L10 is linked from the fin-lat-rep-gap repository, that Ion Nechita and the site vibemathed.com have checked the Hadamard matrices, and that order 2004 is not open after all: 2003 is a prime congruent to 3 mod 4, so Paley's construction gives it.

The open case is $5 \times 5$ matrices: $d^H_\chi(A)/\chi(1) \le \operatorname{per} A$ for every subgroup $H$ of $S_5$, every irreducible character $\chi$ of $H$ and every positive semidefinite Hermitian $A$, assuming Zeng's unrefereed $n = 4$ preprint stands (if it does not, $n = 4$ is the open case). Known results and three arguments of the note's own, which nobody else has checked, settle 62 of the 78 pairs $(H, \chi)$. Relabelling cuts the other 16 to 10 cases, on $C_5$, $D_{10}$, $F_{20}$ and $A_5$. Nobody knows the answer, and the stronger permanent-on-top conjecture already fails at $n = 5$.
