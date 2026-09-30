# Commutative algebra and algebraic geometry

State of the art as of 30 September 2026. Not published on the site.

Commutative algebra studies commutative rings, above all polynomial rings and local rings, with their ideals and modules. Algebraic geometry studies the solution sets of polynomial equations, varieties and schemes, that those rings describe. The two fields share their foundations, and many of the hardest problems sit where they meet: the homological conjectures, the problems on affine space, the Hodge conjecture.

A warning before anything else. In mid-2026 several long-standing problems here fell to explicit counterexamples found with AI help, the Jacobian conjecture in dimension 3 and above being the best known. Any status taken from a source older than July 2026 has to be checked again.

An arXiv number with no journal after it is a preprint, and the survey gives no refereed version of it. Read such a result as a claim. The entries say so explicitly where a status rests on one.

**MSC 2020.** [13 Commutative algebra](https://zbmath.org/classification/?q=cc%3A13) and [14 Algebraic geometry](https://zbmath.org/classification/?q=cc%3A14). Most of the problems below sit in 13D (homological methods: free resolutions, Betti numbers, the homological conjectures), 13H (local rings, multiplicities, Cohen–Macaulay rings), 14B (singularities and their resolution), 14C (algebraic cycles, the Hodge conjecture), 14E (rationality questions), 14H (curves) and 14R (affine geometry: Jacobian, cancellation, embeddings).

**Standard problem lists.**

- Hochster's homological conjectures, as reproduced on [Wikipedia](https://en.wikipedia.org/wiki/Homological_conjectures_in_commutative_algebra), and M. Hochster, [Homological conjectures, old and new](https://web.archive.org/web/20230425010506/https://dept.math.lsa.umich.edu/~hochster/homcj.pdf), Illinois J. Math. 51 (2007) (archived PDF).
- The Clay Millennium Problems: [Hodge conjecture](https://www.claymath.org/millennium/hodge-conjecture/), with the official description by P. Deligne.
- H. Kraft, [Challenging problems on affine n-space](https://www.numdam.org/item/SB_1994-1995__37__295_0.pdf), Séminaire Bourbaki 802 (1994–95): eight problems, among them Jacobian, cancellation and embedding.
- N. Gupta, [The Zariski Cancellation Problem and related problems in Affine Algebraic Geometry](https://arxiv.org/abs/2208.14736), ICM 2022 survey.
- Wikipedia, [List of unsolved problems in mathematics](https://en.wikipedia.org/wiki/List_of_unsolved_problems_in_mathematics): the sections on algebra and algebraic geometry, and "Problems solved since 2015".
- A. Boocher and E. Grifo, [Lower bounds on Betti numbers](https://arxiv.org/abs/2108.05871), a survey of the Buchsbaum–Eisenbud–Horrocks and total rank conjectures.
- Google DeepMind's [formal-conjectures repository](https://github.com/google-deepmind/formal-conjectures): Lean statements, with issues that track status (small Cohen–Macaulay modules, resolution in characteristic $p$).

## Open problems

Twelve entries. ★ marks a problem whose statement a reader with undergraduate algebra can follow. The last two were added by a completeness critic and checked separately.

- ★ Plane Jacobian conjecture ($n = 2$): open.
- ★ Zariski cancellation problem, characteristic 0: open for $n \ge 3$.
- ★ Abhyankar–Sathaye embedding conjecture: open for $n \ge 3$.
- Hodge conjecture: open.
- Resolution of singularities in characteristic $p$: open in dimension $\ge 4$.
- Buchsbaum–Eisenbud–Horrocks rank conjecture: partially solved, open from codimension 5.
- Serre's positivity conjecture, ramified case: partially solved.
- Small Cohen–Macaulay modules conjecture: open, with a counterexample claimed on 21 September 2026.
- ★ Nagata's conjecture on plane curves: open.
- Rationality of cubic fourfolds: partially solved; irrationality of the very general one is claimed but not refereed.
- Tate conjecture on algebraic cycles: partially solved.
- Green's conjecture on canonical curves: partially solved.

None of these is easy. The most concrete open statement on this list is the Buchsbaum–Eisenbud–Horrocks question in codimension 5: is $\beta_2(R/I) \ge 10$ for every ideal of codimension 5? It is one inequality about ideals in a polynomial ring, open since the conjecture was made in 1977 and singled out by Boocher and Grifo in 2021. The problem closest to a verdict is the small Cohen–Macaulay conjecture, where what is needed now is a careful check of a nine-day-old preprint, not a new idea. Nagata's conjecture also has a sharp first case, $r = 10$ points, but it has resisted since 1959.

### ★ Plane Jacobian conjecture ($n = 2$)

**What it asks.** Take two polynomials $f(x,y)$ and $g(x,y)$ with complex coefficients and look at the map $(x,y) \mapsto (f,g)$ of $\mathbb{C}^2$ to itself. If its Jacobian determinant is a nonzero constant, the map can be inverted near every point. The conjecture says it can then be inverted globally, and by polynomials. A small example: $f = x + y^2$, $g = y$ has Jacobian determinant 1, and the inverse is $(u,v) \mapsto (u - v^2, v)$. In one variable the statement is trivial, since $f'(x)$ constant forces $f$ to be linear.

Precisely, for $f, g \in \mathbb{C}[x,y]$ (any field of characteristic 0 works as well):

$$
f_x g_y - f_y g_x \in \mathbb{C}^\times \quad\Longrightarrow\quad \mathbb{C}[f,g] = \mathbb{C}[x,y].
$$

**Posed.** Ludwig Kraus stated the plane case in 1884, with a flawed proof; L. O. Rodriguez Diaz brought this to light (arXiv 2512.23614, C. R. Math. 2026). The conjecture in $n$ variables is Ott-Heinrich Keller's (1939). Abhyankar later made it widely known.

**Where it stands.** Open as of 30 September 2026. Alpöge's counterexample of July 2026 disproved the conjecture for every $n \ge 3$ (see Recently settled), so $n = 2$ is the only case left. Tao wrote on 21 July 2026 that it "remains open in two dimensions", and Wikipedia (August 2026) lists it as the only unresolved case. Meng and Yang (arXiv 2607.22198, July 2026) record that $JC_2$ and the four-variable Hessian conjecture $HC_4$ are the only unsettled members of the two families, and that $HC_4$ implies $JC_2$.

A planar counterexample would have to satisfy all of the following:

- degree above 100 (Moh 1983, with the algorithm revised by L.-C. Wang in 2005), a bound Thuy Nguyen raised to 104 (Quaestiones Math. 2025); Guccione, Guccione, Horruitiner and Valqui claim a higher bound (arXiv 2204.14178, 2022), but the survey found no refereed version;
- $\gcd(\deg f, \deg g) \ge 16$ (Heitmann 1990);
- not birational (Keller 1939) and not Galois (Campbell, Razar and Wright).

Abhyankar showed the conjecture is equivalent to several statements about Jacobian pairs, for example that each component has only one point at infinity. The Dixmier and Poisson conjectures are still open for $n = 1, 2$, and $DC_2$ would imply $JC_2$. The survey found no claimed planar counterexample in 2026.

**Smallest open case.** $n = 2$ itself; nothing smaller is open. Inside it, two concrete next steps: raise the degree bound beyond 104, continuing the Moh–Wang–Nguyen computations, or settle the four-variable Hessian conjecture $HC_4$, which would imply $JC_2$.

**Why it is hard.** A counterexample would be a generically finite polynomial map of the plane, of degree above 104, that is neither birational nor Galois. The mechanisms behind the 2026 counterexamples (multiplication of binary forms, and Gao's "tangent sweep", arXiv 2608.00222) only produce examples in dimension 3 and up. In the plane every approach runs into the combinatorics of Newton polygons and the behaviour at infinity. Many false proofs have appeared over the decades, some of them in journals.

**Sources.** [Tao, A digestion of the Jacobian conjecture counterexample (blog, 21 July 2026)](https://terrytao.wordpress.com/2026/07/21/a-digestion-of-the-jacobian-conjecture-counterexample/) · [Wikipedia: Jacobian conjecture](https://en.wikipedia.org/wiki/Jacobian_conjecture) · [arXiv 2607.22198](https://arxiv.org/abs/2607.22198) · [arXiv 2512.23614](https://arxiv.org/abs/2512.23614) · [arXiv 1902.05923](https://arxiv.org/abs/1902.05923) · [arXiv 2204.14178](https://arxiv.org/abs/2204.14178)

*Fact-check: confirmed.*

### ★ Zariski cancellation problem (affine space, characteristic 0)

**What it asks.** Suppose $V \times \mathbb{A}^1$, the variety $V$ times a line, is isomorphic to affine space $\mathbb{A}^{n+1}$. Must $V$ itself be $\mathbb{A}^n$? Can you cancel the line from both sides? For $n = 1$ the answer is yes: if a curve times a line is the plane, the curve is a line. In algebra the question reads: if $B[X] \cong k[X_1, \dots, X_{n+1}]$, is $B \cong k[X_1, \dots, X_n]$?

Precisely: let $k$ be a field of characteristic 0 and $n \ge 3$. If $B$ is a $k$-algebra such that $B[X] \cong k[X_1,\dots,X_{n+1}]$, must $B \cong k[X_1,\dots,X_n]$?

**Posed.** The problem carries Oscar Zariski's name, but Kraft (Bourbaki 1995) points out that Zariski's own question was a different one. The problem in this form was already being discussed in the early 1970s (Abhyankar–Eakin–Heinzer, Hochster).

**Where it stands.** Open for $n \ge 3$ in characteristic 0 as of 30 September 2026. The case $n = 1$ is Abhyankar, Eakin and Heinzer (J. Algebra 1972). The case $n = 2$ was done in characteristic 0 by Fujita (1979) and by Miyanishi and Sugie (1980), then over perfect fields of any characteristic by Russell, and later over arbitrary fields. In positive characteristic the answer is no for every $n \ge 3$: Neena Gupta's 2014 papers first showed that Asanuma's threefold is a counterexample for $n = 3$, then gave families in every dimension $\ge 3$, and Ghosh and Pal (arXiv 2404.13803) found more.

In characteristic 0 the best-known candidate is the Russell cubic $x^2y + x + z^2 + t^3 = 0$. Makar-Limanov proved it is not $\mathbb{C}^3$; whether its cylinder is $\mathbb{C}^4$ is open. Dubouloz showed the Makar-Limanov invariant of the cylinder is trivial, and Dubouloz and Fasel showed the cubic is $\mathbb{A}^1$-contractible, so neither invariant rules it out. Dubouloz and Ghosh (arXiv 2501.09613, 16 January 2025) added new candidates in characteristic 0: algebraic families of smooth affine $\mathbb{A}^1$-contractible varieties in every dimension $n \ge 4$, not isomorphic to affine space, which the authors call "potential counterexamples to the Zariski Cancellation Problem". They prove these are counterexamples to the generalized cancellation problem. Gaifullin and Petrov (arXiv 2607.13593, 15 July 2026) give more non-cancellative varieties, again for the generalized problem only.

**Smallest open case.** $n = 3$ in characteristic 0. Its sharpest concrete form: is the cylinder over the Russell cubic, $\lbrace x^2y + x + z^2 + t^3 = 0 \rbrace \times \mathbb{C}$, isomorphic to $\mathbb{C}^4$?

**Why it is hard.** An invariant that tells $V$ apart from $\mathbb{A}^n$ must stop working once you multiply by a line. On the candidates, the Makar-Limanov invariant, topology, contractibility and $\mathbb{A}^1$-homotopy type all either agree with those of affine space or become trivial. Gupta's counterexamples rely on phenomena that exist only in positive characteristic (Asanuma-type threefolds, exponential maps), with no characteristic-0 analogue.

**Sources.** [Gupta, ICM 2022 survey (arXiv 2208.14736)](https://arxiv.org/abs/2208.14736) · [Kraft, Séminaire Bourbaki 802](https://www.numdam.org/item/SB_1994-1995__37__295_0.pdf) · [arXiv 2607.13593](https://arxiv.org/abs/2607.13593) · [arXiv 2501.09613](https://arxiv.org/abs/2501.09613) · [arXiv 2404.13803](https://arxiv.org/abs/2404.13803)

*Fact-check: corrected (Dubouloz–Ghosh do give new characteristic-0 candidates, in every dimension ≥ 4; the survey had said their paper does not touch affine space in characteristic 0).*

### ★ Abhyankar–Sathaye embedding conjecture

**What it asks.** If a hypersurface $f = 0$ in $\mathbb{A}^n$ is itself a copy of $\mathbb{A}^{n-1}$, is it a coordinate hyperplane in disguise? That is, can a polynomial change of coordinates turn $f$ into $x_1$? Example: in $k[x,y,z]$ the polynomial $f = x + y^2$ has $k[x,y,z]/(f) \cong k[y,z]$, and $f$ is a coordinate because $k[f,y,z] = k[x,y,z]$. The conjecture says this is what always happens.

Precisely: let $k$ have characteristic 0 and $n \ge 3$. If $f \in k[x_1,\dots,x_n]$ satisfies $k[x_1,\dots,x_n]/(f) \cong k[x_1,\dots,x_{n-1}]$, then there are $f_2,\dots,f_n$ with $k[f,f_2,\dots,f_n] = k[x_1,\dots,x_n]$. Equivalently, every closed embedding of $\mathbb{A}^{n-1}$ into $\mathbb{A}^n$ can be straightened by an automorphism of $\mathbb{A}^n$.

**Posed.** S. S. Abhyankar and A. Sathaye, in the 1970s, as the higher-dimensional analogue of the Abhyankar–Moh–Suzuki epimorphism theorem (1974–75). The survey could not confirm the date of the first written statement.

**Where it stands.** Open for every $n \ge 3$ as of 30 September 2026. For $n = 2$ it is true in characteristic 0 (Abhyankar–Moh; Suzuki, 1974–75) and false in positive characteristic (examples of Segre 1957 and Nagata 1971). For $n = 3$ there are special cases: Sathaye's "linear planes" $aZ - b$; Russell; Wright ($aZ^m - b$); and Russell–Sathaye under a gcd condition on the coefficients. Gupta proved it for $X^mY - F(X,Z,T)$ in four variables. Ghosh and Gupta (arXiv 2206.15210) and Ghosh, Gupta and Pal (arXiv 2405.07205, published in Transformation Groups 2026) prove it for further families of "linear" hypersurfaces. Popov notes that some experts, van den Essen among them, expect it to be false in general. The survey found no resolution or counterexample by September 2026.

**Smallest open case.** $n = 3$. Within it, Gupta's ICM survey says the case $\gcd(a_1,\dots,a_m) = 1$ of the Russell–Sathaye family remains open.

**Why it is hard.** To show that $f$ is a coordinate you have to build automorphisms of $\mathbb{A}^n$, and for $n \ge 3$ that automorphism group is enormous and poorly understood. The natural sources of counterexamples (orbits of unipotent group actions, Koras–Russell threefolds) have either been ruled out or are unresolved themselves. The problem is tied to cancellation and linearization, which are open too.

**Sources.** [Gupta, ICM 2022 survey (arXiv 2208.14736)](https://arxiv.org/abs/2208.14736) · [Bielefeld LAG preprint 546](https://www.math.uni-bielefeld.de/LAG/man/546.pdf) · [arXiv 2405.07205](https://arxiv.org/abs/2405.07205) · [doi:10.1007/s00031-026-09998-4](https://doi.org/10.1007/s00031-026-09998-4) · [arXiv 2206.15210](https://arxiv.org/abs/2206.15210)

*Fact-check: confirmed.*

### Hodge conjecture

**What it asks.** On a smooth complex projective variety $X$, every algebraic subvariety of codimension $p$ has a cohomology class in $H^{2p}(X,\mathbb{Q})$, and that class has Hodge type $(p,p)$. The conjecture is the converse: every rational class of type $(p,p)$ comes from subvarieties. For $p = 1$ this is the Lefschetz $(1,1)$ theorem. On a surface, for instance, it says that a rational class in $H^2$ of type $(1,1)$ is a combination of classes of curves.

Precisely: every class in $H^{2p}(X,\mathbb{Q})$ whose complexification has type $(p,p)$ (a Hodge class) is a $\mathbb{Q}$-linear combination of classes of algebraic subvarieties of codimension $p$.

**Posed.** W. V. D. Hodge, 1950. It has been one of the Clay Millennium Prize Problems since 2000, with the official description by Pierre Deligne.

**Where it stands.** Open as of 30 September 2026, and listed as unsolved by the Clay Institute. Codimension 1 is known (Lefschetz, around 1924), and so are cycles of dimension 1, which together cover every variety of dimension at most 3. Totaro, in a guest post on Tao's blog (11 September 2026), names codimension-2 cycles on fourfolds as the first open case.

The largest recent step is Eyal Markman's (arXiv 2502.03415, February 2025; v2 8 June 2025). He proved that Weil classes are algebraic on abelian sixfolds of Weil type of discriminant $-1$. A degeneration argument of Schoen then gives algebraicity of Weil classes on all abelian fourfolds of Weil type, and the Hodge conjecture for abelian fourfolds follows from reductions that were already known. Totaro describes the result as covering abelian varieties of dimensions 4 and 5. Markman proves the semiregularity theorem he needs, for twisted sheaves on abelian varieties, himself (Section 7.4), and remarks that it should also follow from Pridham's general result (arXiv 1208.3111, first posted in 2012). Building on Markman's theorem, Ningyi Li (arXiv 2609.27916, September 2026, not refereed) claims the Hodge conjecture for every power of a complex CM abelian fourfold.

The integral version is false (Atiyah and Hirzebruch, Topology 1, 1962). In September 2026 news reports based on The Information (Gizmodo, 17 September 2026) said OpenAI staff expect to "soon crack" the conjecture. OpenAI has announced no proof or counterexample, and nothing had been posted or independently checked by late September 2026. Any such claim is unverified until a paper appears and is checked.

**Smallest open case.** Codimension-2 cycles on fourfolds, the "first open case" in Totaro's words. For abelian varieties, Totaro counts dimensions 4 and 5 as covered by Markman's work.

**Why it is hard.** Nobody has an algebro-geometric description of which rational Betti classes are Hodge classes. Voisin's point, in her guest post of 12 September 2026, is that algebraic geometry understands cohomology with complex coefficients and the Hodge condition well, but not Betti cohomology with rational coefficients. There is no general method for building algebraic cycles out of cohomological data. The Kähler analogue fails: Voisin found compact Kähler manifolds with Hodge classes that are not combinations of Chern classes of coherent sheaves. So a proof has to use projectivity in an essential way.

**Sources.** [Clay Mathematics Institute: Hodge conjecture](https://www.claymath.org/millennium/hodge-conjecture/) · [Totaro, On the Hodge conjecture (Tao's blog, 11 September 2026)](https://terrytao.wordpress.com/2026/09/11/on-the-hodge-conjecture/) · [Voisin, The status of the Hodge conjecture (Tao's blog, 12 September 2026)](https://terrytao.wordpress.com/2026/09/12/the-status-of-the-hodge-conjecture/) · [Gizmodo, 17 September 2026](https://gizmodo.com/openai-reportedly-trying-to-solve-hodge-conjecture-amid-feud-with-math-community-2000813658) · [arXiv 2502.03415](https://arxiv.org/abs/2502.03415) · [arXiv 1208.3111](https://arxiv.org/abs/1208.3111) · [arXiv 2609.27916](https://arxiv.org/abs/2609.27916) · [Wikipedia: Hodge conjecture](https://en.wikipedia.org/wiki/Hodge_conjecture)

*Fact-check: corrected (Markman proves the semiregularity step himself, and Pridham's paper dates from 2012, not 2024; the Hodge conjecture for abelian fourfolds follows from Schoen's argument plus known reductions; Atiyah–Hirzebruch appeared in 1962; Li's 2026 preprint added).*

### Resolution of singularities in characteristic $p$ (dimension ≥ 4)

**What it asks.** A singular variety has points where it is not smooth, like the cusp $y^2 = x^3$ at the origin. To resolve it is to find a smooth variety mapping onto it, properly and birationally, without changing anything where it was already smooth. For the cusp one blowup is enough: substituting $y = tx$ gives $x^2(t^2 - x) = 0$, and the new curve $x = t^2$ is smooth. Hironaka proved in 1964 that every variety in characteristic 0 can be resolved. The question is whether the same holds in characteristic $p > 0$.

Precisely: for a variety $X$ over a field of characteristic $p > 0$, is there a smooth $X'$ with a proper birational morphism $X' \to X$, ideally an isomorphism over the smooth locus, with exceptional locus a simple normal crossings divisor?

**Posed.** The problem goes back to Zariski's program of the 1930s and 1940s. Positive characteristic became the main open case once Hironaka settled characteristic 0 in 1964.

**Where it stands.** Open in dimension $\ge 4$ as of 30 September 2026; Berczi (arXiv 2602.06553, February 2026) calls it "a long-standing open problem". Known: curves (classical); surfaces (Abhyankar 1956; Lipman 1978 for excellent 2-dimensional schemes); threefolds in large characteristic (Abhyankar 1966) and in all characteristics (Cossart and Piltant, J. Algebra 2008 and 2009).

Two claims are on the table, and neither is accepted. Hironaka posted a manuscript on his web page in 2017 claiming a proof; it has not been accepted as settling the problem. Chenxiao Tian posted a 798-page program on 20 August 2026 (arXiv 2608.20066) claiming canonical strong embedded resolution over perfect fields of characteristic $p$; it had not been vetted by late September 2026. Berczi reports AlphaEvolve experiments that search for decreasing invariants in dimension 4 and characteristic 3, and states only conjectures.

**Smallest open case.** Dimension 4, in every characteristic $p$. Berczi's experiments target dimension 4 in characteristic 3.

**Why it is hard.** In characteristic 0 the proof is an induction on dimension, using hypersurfaces of maximal contact and invariants that strictly drop after each blowup. In characteristic $p$ maximal contact fails, and the classical invariants can stall or even increase after a blowup (the "kangaroo phenomenon"), because of Frobenius and purely inseparable behaviour. Cossart and Piltant's proof in dimension 3 relies on local uniformization methods that do not extend in any known way.

**Sources.** [Wikipedia: Resolution of singularities](https://en.wikipedia.org/wiki/Resolution_of_singularities) · [arXiv 2602.06553](https://arxiv.org/abs/2602.06553) · [arXiv 2608.20066](https://arxiv.org/abs/2608.20066) · [Hironaka's manuscript (pRes.pdf)](https://people.math.harvard.edu/~hironaka/pRes.pdf)

*Fact-check: confirmed.*

### Buchsbaum–Eisenbud–Horrocks rank conjecture on Betti numbers

**What it asks.** A minimal free resolution of a module lists its generators, the relations among them, the relations among those relations, and so on. The $i$-th Betti number $\beta_i$ counts the free generators needed at step $i$. For the ideal $(x,y)$ in $R = k[x,y]$ the resolution is

$$
0 \to R \to R^2 \to R \to R/(x,y) \to 0,
$$

so the Betti numbers of $R/(x,y)$ are $1, 2, 1$, that is, $\binom{2}{i}$. This is the Koszul complex, and for the ideal of $c$ variables it gives $\beta_i = \binom{c}{i}$. The conjecture says nothing of codimension $c$ has a smaller resolution. The ideal $(x^2, xy, y^2)$, also of codimension 2, has Betti numbers $1, 3, 2$, each at least $\binom{2}{i}$.

Precisely: let $M \neq 0$ be a finitely generated graded module over $k[x_1,\dots,x_n]$ (or a finite-length module of finite projective dimension over a regular local ring), of codimension $c$. Then $\beta_i(M) \ge \binom{c}{i}$ for all $i$.

**Posed.** D. Buchsbaum and D. Eisenbud (Amer. J. Math. 99, 1977), and independently G. Horrocks (Problem 24 in Hartshorne's 1979 problem list on vector bundles).

**Where it stands.** The bounds on individual Betti numbers are open in general as of 30 September 2026. They are known for $c \le 4$, as a consequence of the Evans–Griffith syzygy theorem (1981), which is a deep result, and for some special classes of modules. Hochster wrote in 2007 that the conjecture "remains open in dimension 5 or more". Boocher and Grifo (2021) note that even $\beta_2(R/I) \ge 10$ for ideals of codimension 5 was open, and the survey found no later answer.

The weaker Total Rank Conjecture, $\sum_i \beta_i(M) \ge 2^c$, has gone further. Avramov and Buchweitz proved it for $c = 5$ (1993). Mark Walker proved it in every residue characteristic other than 2 (Annals 186, 2017), with equality exactly when $M$ is a complete intersection, provided 2 is invertible. VandeBogert and Walker proved it for rings of characteristic 2 (Duke Math. J. 174, 2025). Judging from both abstracts, that leaves mixed-characteristic rings with residue characteristic 2 open. A stronger "generalized total rank conjecture" is false in odd characteristic (Iyengar and Walker, Acta Math. 221, 2018); VandeBogert (arXiv 2607.22844, a preprint, v3 of 1 August 2026) proves it over regular rings of characteristic 2 and deduces Carlsson's conjecture for elementary abelian 2-groups. Boix and Lima-Pereira (arXiv 2607.26118, to appear in Proc. Roy. Soc. Edinburgh A) give counterexamples to a recently proposed local variant, not to the conjecture itself.

**Smallest open case.** Codimension 5, and in particular: is $\beta_2(R/I) \ge 10$ for every ideal $I$ of codimension 5? ($\beta_1 \ge 5$ is Krull's height theorem, so $\beta_2$ is the first real question.) For the total rank version, the part that still appears open is mixed-characteristic rings with residue characteristic 2.

**Why it is hard.** Individual Betti numbers are hard to bound from below. The natural tool, a commutative associative DG-algebra structure on the minimal resolution, does not exist for every resolution. Walker's proof of the total rank bound uses Adams operations on perfect complexes, and they control the sum of the Betti numbers, not each one.

**Sources.** [Boocher–Grifo, Lower bounds on Betti numbers (arXiv 2108.05871)](https://arxiv.org/abs/2108.05871) · [arXiv 1702.02560](https://arxiv.org/abs/1702.02560) · [arXiv 2607.22844](https://arxiv.org/abs/2607.22844) · [arXiv 2305.09771](https://arxiv.org/abs/2305.09771) · [doi:10.1215/00127094-2024-0027](https://doi.org/10.1215/00127094-2024-0027) · [arXiv 2607.26118](https://arxiv.org/abs/2607.26118) · [Hochster, Homological conjectures, old and new (archived PDF)](https://web.archive.org/web/20230425010506/https://dept.math.lsa.umich.edu/~hochster/homcj.pdf)

*Fact-check: corrected (the case c ≤ 4 rests on the Evans–Griffith syzygy theorem and is not elementary; VandeBogert–Walker is published, Duke 2025, and covers characteristic 2 only, so the total rank conjecture is still open for mixed characteristic with residue characteristic 2).*

### Serre's positivity conjecture for intersection multiplicities (ramified case)

**What it asks.** Serre gave an algebraic definition of how many times two subvarieties meet at a point, and conjectured that the number is positive whenever they meet properly. The definition is an alternating sum of lengths of Tor modules. For a line and a parabola tangent at the origin, take $R = k[x,y]_{(x,y)}$, $M = R/(y)$ and $N = R/(y - x^2)$: then $M \otimes_R N = R/(y, x^2)$ has length 2, the higher Tor vanish, and $\chi(M,N) = 2$, the expected multiplicity of a tangency.

Precisely: let $R$ be a regular local ring of dimension $d$, and $M, N$ finitely generated $R$-modules with $M \otimes_R N$ of finite length and $\dim M + \dim N = d$. Then

$$
\chi(M,N) = \sum_i (-1)^i \ell\big(\operatorname{Tor}_i^R(M,N)\big) > 0.
$$

**Posed.** Jean-Pierre Serre, 1958, in his work on local algebra and multiplicities.

**Where it stands.** Serre proved all his multiplicity conjectures when $R$ is equicharacteristic, or unramified of mixed characteristic. For general regular local rings, the dimension inequality is Serre's; vanishing when $\dim M + \dim N < d$ is due to P. Roberts (1985) and to Gillet and Soulé (1987, via K-theory); non-negativity is O. Gabber's (1995, using de Jong's alterations). Strict positivity is open for ramified regular local rings of mixed characteristic as of 30 September 2026. Special cases: S. P. Dutta (2008); C. Skalit (J. Pure Appl. Algebra 2019) for power series rings over a complete 2-dimensional regular local ring. Bhatt, Hochster and Ma (arXiv 2410.18372, final version 25 August 2026) show that "lim Cohen–Macaulay sequences" in mixed characteristic would imply positivity for all regular local rings. They prove such sequences exist in positive characteristic and for some mixed-characteristic rings.

**Smallest open case.** Ramified regular local rings of mixed characteristic, those in which $p$ lies in the square of the maximal ideal. The next step the survey points to is constructing lim Cohen–Macaulay sequences in mixed characteristic, which by Bhatt–Hochster–Ma would settle it. The survey names no smallest open dimension.

**Why it is hard.** Serre's proof in the unramified case reduces, via Cohen's structure theorem, to intersecting with the diagonal over a power series ring, and that reduction is not available when $p$ lies in the square of the maximal ideal. The K-theoretic and Adams-operation methods give vanishing and non-negativity but not strict positivity. Small Cohen–Macaulay modules would suffice, but their existence is itself open and now doubted (next entry).

**Sources.** [Wikipedia: Serre's multiplicity conjectures](https://en.wikipedia.org/wiki/Serre%27s_multiplicity_conjectures) · [arXiv 2410.18372](https://arxiv.org/abs/2410.18372) · [arXiv 1510.05146](https://arxiv.org/abs/1510.05146) · [Hochster, Homological conjectures, old and new (archived PDF)](https://web.archive.org/web/20230425010506/https://dept.math.lsa.umich.edu/~hochster/homcj.pdf) · [doi:10.1016/j.jpaa.2018.07.008](https://doi.org/10.1016/j.jpaa.2018.07.008) · [doi:10.1016/j.jalgebra.2007.10.016](https://doi.org/10.1016/j.jalgebra.2007.10.016)

*Fact-check: confirmed.*

### Small Cohen–Macaulay modules conjecture

**What it asks.** A local ring can fail to be Cohen–Macaulay and still carry a finitely generated module that is. Take $R = k[[x,y,z,w]]/\big((x,y) \cap (z,w)\big)$, two planes meeting in a point. $R$ has dimension 2 and is not Cohen–Macaulay, but $M = R/(x,y) \cong k[[z,w]]$ is a finitely generated $R$-module, and the system of parameters $x - z,\ y - w$ of $R$ acts on it as $-z, -w$, a regular sequence. The conjecture says every complete local ring has such a module.

Precisely: every complete Noetherian local ring $R$ (the interesting case is a complete local domain) has a nonzero finitely generated module $M$ on which some, equivalently every, system of parameters of $R$ is a regular sequence. Such an $M$ is called a small, or maximal, Cohen–Macaulay module.

**Posed.** Melvin Hochster, early 1970s (see his CBMS lectures "Topics in the homological theory of modules over commutative rings", 1975). In the 2000s Hochster also suggested that the opposite may be true.

**Where it stands.** Open as of 30 September 2026, with a counterexample claimed nine days earlier. Known in dimension $\le 2$. In dimension 3 and characteristic $p$ it is known in special cases, for example $\mathbb{N}$-graded domains over perfect fields (Hartshorne, Hochster, Peskine–Szpiro). Yhee (arXiv 2104.05766; Forum Math. Sigma 2023) showed that Ulrich modules, a stronger notion, need not exist.

Two September preprints. On 14 September 2026 C. Anghel (arXiv 2609.15589) exhibited 3-dimensional normal graded $\mathbb{C}$-domains with no nonzero graded maximal Cohen–Macaulay module, so in characteristic 0 the conjecture "admits no graded refinement". That is not a counterexample to the conjecture itself. On 21 September 2026 Liang Chen (arXiv 2609.24142) claimed a local-cohomology obstruction showing that the completed vertex local ring of the section ring of a degree-six Hirzebruch–Kummer surface has no nonzero finitely generated maximal Cohen–Macaulay module. If correct, this is a 3-dimensional counterexample in characteristic 0. The claim is days old and not refereed, so for now it is a claim only.

**Smallest open case.** Dimension 3. In characteristic 0 the immediate job is to check Chen's claimed counterexample (arXiv 2609.24142). In characteristic $p$, the open part is dimension-3 rings outside the known special cases such as $\mathbb{N}$-graded domains over perfect fields.

**Why it is hard.** Building finitely generated maximal Cohen–Macaulay modules amounts to constructing special vector bundles (arithmetically Cohen–Macaulay bundles) on projective models, and there is no general method for that. The Frobenius techniques that work in characteristic $p$ have no analogue in characteristic 0 or mixed characteristic. Big Cohen–Macaulay algebras, which are not finitely generated, do exist, but only through perfectoid and prismatic methods, and they do not produce small modules.

**Sources.** [Wikipedia: Homological conjectures in commutative algebra](https://en.wikipedia.org/wiki/Homological_conjectures_in_commutative_algebra) · [arXiv 2609.24142](https://arxiv.org/abs/2609.24142) · [arXiv 2609.15589](https://arxiv.org/abs/2609.15589) · [arXiv 2104.05766](https://arxiv.org/abs/2104.05766) · [doi:10.1017/fms.2023.68](https://doi.org/10.1017/fms.2023.68) · [formal-conjectures issue 5400](https://github.com/google-deepmind/formal-conjectures/issues/5400)

*Fact-check: confirmed.*

### ★ Nagata's conjecture on plane curves

**What it asks.** How low can the degree of a plane curve be if it has to pass through $r$ general points, each with multiplicity at least $m$? Plane curves of degree $d$ form a family of dimension $d(d+3)/2$, and a point of multiplicity $m$ imposes $m(m+1)/2$ linear conditions. So by counting, a curve should exist roughly when $d^2 \gtrsim r m^2$, that is, when $d \gtrsim m\sqrt{r}$. Nagata's conjecture says that for $r \ge 10$ no curve beats this count. The case $r = 10$, $m = 1$ shows the shape of the bound, though here the count alone proves it: the conjecture asks for $d > \sqrt{10} \approx 3.16$, that is $d \ge 4$. Cubics form a 9-dimensional family, so no cubic passes through 10 general points, while quartics form a 14-dimensional family and some quartic does.

Precisely: let $p_1,\dots,p_r$ be $r \ge 10$ very general points of $\mathbb{P}^2$ and $m_1,\dots,m_r$ positive integers. Every plane curve of degree $d$ that passes through each $p_i$ with multiplicity at least $m_i$ satisfies

$$
d > \frac{m_1 + \cdots + m_r}{\sqrt{r}}.
$$

With all $m_i = m$ this says $d > m\sqrt{r}$.

**Posed.** Masayoshi Nagata, 1959, in the paper that gave his counterexample to Hilbert's 14th problem (Amer. J. Math. 81).

**Where it stands.** Open as of 30 September 2026. It is known only when $r$ is a perfect square (Nagata). For $r \le 9$ the analogous question is governed by the cone theorem, and the bound in this form needs $r > 9$. Related formulations use Seshadri constants and the Nagata–Biran conjecture. Recent papers still take it as a hypothesis: B. Shapiro (arXiv 2609.27965, August–September 2026) proves some results "assuming Nagata's conjecture" for $r \ge 10$. The survey found no claimed proof or counterexample in 2025–2026.

**Smallest open case.** $r = 10$, the smallest number of points above 9 that is not a perfect square.

**Why it is hard.** The conjecture amounts to saying that an irrational class, roughly $L - \frac{1}{\sqrt{r}}\sum_i E_i$, on the blowup of the plane at $r$ very general points is nef. That means controlling every curve of every degree and multiplicity at once, and the boundary of the relevant cone of curves is not understood. Degeneration and specialization arguments lose too much information, except when $r$ is a square.

**Sources.** [Wikipedia: Nagata's conjecture on curves](https://en.wikipedia.org/wiki/Nagata%27s_conjecture_on_curves) · [arXiv 2609.27965](https://arxiv.org/abs/2609.27965) · [doi:10.2307/2372927](https://doi.org/10.2307/2372927)

*Fact-check: confirmed.*

### Rationality of cubic fourfolds (Kuznetsov and Hassett conjectures)

**What it asks.** A cubic fourfold is a smooth hypersurface $X \subset \mathbb{P}^5$ cut out by one cubic equation in six variables. Is it rational, that is, birational to $\mathbb{P}^4$, and if so, which ones are? Some are. The expectation is that the very general one is not. One dimension lower the question is settled: cubic threefolds are irrational (Clemens–Griffiths, 1972).

Kuznetsov (2010) conjectured that $X$ is rational if and only if the Kuznetsov component of its derived category is equivalent to the derived category of a K3 surface. Hassett's Hodge-theoretic version asks for an "associated K3 surface".

**Posed.** U. Morin claimed in 1940 that the generic cubic fourfold is rational, which was wrong, and G. Fano corrected the argument in 1943. The modern conjectural frameworks are due to B. Hassett (special cubic fourfolds) and A. Kuznetsov (2010).

**Where it stands.** Partially solved. Some special families are rational, for example Pfaffian cubic fourfolds (Beauville–Donagi 1985) and cubics containing two disjoint planes. Hassett's survey states that no cubic fourfold had been proven irrational.

Katzarkov, Kontsevich, Pantev and Yu (arXiv 2508.05105, 7 August 2025; v2 6 March 2026) introduced "Hodge atoms", built from Gromov–Witten invariants, Hodge theory and Iritani's blowup formula, and claim a proof that a very general cubic fourfold is not rational. Quanta Magazine reported on 12 December 2025 that the proof was not yet peer-reviewed, that reading groups were still working through it, and that some experts were cautious. The arXiv record shows no journal reference. Follow-up work builds on the framework. Guere (arXiv 2603.04518, v2 September 2026) shows that every rational smooth cubic fourfold has primitive cohomology isomorphic, as a Hodge structure, to the twisted middle cohomology of a projective K3 surface. Benedetti, Fay, Guere, Manivel and Perrin (arXiv 2607.26718, July 2026) give an atomic irrationality criterion. A related claim for Verra fourfolds (arXiv 2604.14850) was withdrawn in May 2026 after a gap was found.

**Smallest open case.** Proving that one specific, explicitly written cubic fourfold is irrational; the KKPY result is about very general ones. Beyond that lie the Kuznetsov and Hassett conjectures themselves, and the refereeing of KKPY.

**Why it is hard.** The classical obstructions do not apply. The Clemens–Griffiths intermediate-Jacobian method, which proves cubic threefolds irrational, has no analogue here: the middle cohomology of a cubic fourfold looks like that of a K3 surface, and such Hodge structures also occur on rational varieties (blowups along K3 surfaces). The KKPY approach needs quantum cohomology, a tool many birational geometers do not use, and this slows verification.

**Sources.** [arXiv 2508.05105](https://arxiv.org/abs/2508.05105) · [Quanta Magazine, 12 December 2025](https://www.quantamagazine.org/string-theory-inspires-a-brilliant-baffling-new-math-proof-20251212/) · [Hassett, lectures on cubic fourfolds (PDF)](https://www.math.brown.edu/bhassett/papers/CIMEsurvey/CubicLectures6.pdf) · [arXiv 2603.04518](https://arxiv.org/abs/2603.04518) · [arXiv 2607.26718](https://arxiv.org/abs/2607.26718) · [arXiv 2604.14850](https://arxiv.org/abs/2604.14850)

*Fact-check: confirmed.*

### Tate conjecture on algebraic cycles

**What it asks.** This is the arithmetic cousin of the Hodge conjecture. For a variety over a finite field or a number field, the Galois group acts on its $\ell$-adic cohomology, and the class of a cycle defined over the base field is fixed by that action. The conjecture is the converse: every Galois-invariant class comes from cycles.

Precisely: let $V$ be a smooth projective variety over a field $k$ finitely generated over its prime field, and $\ell$ a prime invertible in $k$. The Galois-invariant classes in $H^{2i}_{\text{ét}}(V_{k^s}, \mathbb{Q}_\ell(i))$ are exactly the $\mathbb{Q}_\ell$-linear combinations of classes of codimension-$i$ algebraic cycles.

**Posed.** John Tate, 1963.

**Where it stands.** Open in general as of 30 September 2026, including for divisors on arbitrary surfaces over finite fields. For fibred surfaces it is equivalent to the Birch–Swinnerton-Dyer conjecture for the Jacobian of the generic fibre. Known cases include divisors on abelian varieties (Tate over finite fields; Faltings over number fields; Zarhin), K3 surfaces (in characteristic 0 André and Tankeev; over finite fields Nygaard–Ogus, Charles, Madapusi Pera and Maulik), and several further families.

Three preprints from August and September 2026 push the abelian case. All are unrefereed and only weeks old, so they are claims for now.

- Broe (arXiv 2608.28651, 19 August 2026) proves the Tate conjecture for all abelian fourfolds over finite fields. Combining his theorem with theorems of Ancona and of Kahn, he obtains the standard conjecture D for abelian fourfolds over arbitrary fields, which "completes the standard conjectures for abelian fourfolds"; Ancona had earlier proved the Hodge-type standard conjecture for them.
- Ningyi Li (arXiv 2609.06265) proves it for abelian fivefolds over finite fields. Version 1 (5 September 2026) assumed the Tate conjecture for abelian varieties of dimension $\le 4$; version 2 (10 September) replaced that assumption with Broe's theorem and, according to its comments, closed a proof gap.
- Ningyi Li (arXiv 2609.27916, 10 September 2026) proves it in every codimension for powers of abelian varieties of dimension $\le 4$ over finite fields.

The integral Tate conjecture fails in general: Milne (arXiv 2509.06707, September 2025), and much earlier counterexamples over finite fields by Pirutka–Yagita (arXiv 1401.1620), Kameko (arXiv 1408.2636) and Antieau (arXiv 1504.04879).

**Smallest open case.** Divisors (codimension 1) on arbitrary surfaces over finite fields. For a fibred surface this case is already equivalent to Birch–Swinnerton-Dyer for the Jacobian of the generic fibre.

**Why it is hard.** Producing algebraic cycles from cohomology classes is the core difficulty of the theory of motives. Outside abelian varieties and varieties with a Kuga–Satake or Shimura-type structure, there is no general way to build cycles.

**Sources.** [Wikipedia: Tate conjecture (raw source)](https://en.wikipedia.org/w/index.php?title=Tate_conjecture&action=raw) · [arXiv 2608.28651](https://arxiv.org/abs/2608.28651) · [arXiv 2609.06265](https://arxiv.org/abs/2609.06265) · [arXiv 2609.06265v1](https://arxiv.org/abs/2609.06265v1) · [arXiv 2609.27916](https://arxiv.org/abs/2609.27916) · [arXiv 2509.06707](https://arxiv.org/abs/2509.06707) · [arXiv 1401.1620](https://arxiv.org/abs/1401.1620) · [arXiv search: "Tate conjecture", newest first](https://arxiv.org/search/?query=%22Tate+conjecture%22&searchtype=title&order=-announced_date_first&size=25)

*Fact-check: corrected (the result on powers of abelian varieties is in arXiv 2609.27916, not 2609.06265; Broe used Ancona's and Kahn's theorems rather than writing with them; Li's fivefold paper changed its hypothesis between versions 1 and 2).*

### Green's conjecture on syzygies of canonical curves

**What it asks.** A smooth non-hyperelliptic curve $C$ of genus $g$ sits in $\mathbb{P}^{g-1}$ through its canonical embedding. Green's conjecture says that the minimal free resolution of its coordinate ring reads off an intrinsic invariant, the Clifford index $\operatorname{Cliff}(C)$: the minimum of $\deg L - 2(h^0(L) - 1)$ over line bundles $L$ with $h^0(L) \ge 2$ and $h^1(L) \ge 2$. The resolution should stay linear (quadratic equations, then linear relations among them, and so on) for exactly $\operatorname{Cliff}(C) - 1$ steps. In genus 4 you can see it: the canonical curve in $\mathbb{P}^3$ is cut out by a quadric and a cubic, the cubic spoils linearity at the first step, so $a(C) = 0$ in the notation defined below. The curve also has a map of degree 3 to the line, so its Clifford index is $3 - 2 = 1$, the smallest value a non-hyperelliptic curve can have.

Precisely: let $a(C)$ be the largest $p$ such that $\beta_{i,i+2} = 0$ for all $1 \le i \le p$ (property $N_p$). Green and Lazarsfeld proved $a(C) + 1 \le \operatorname{Cliff}(C)$. Green's conjecture says that the Koszul cohomology group $K_{p,2}(C, K_C)$, whose dimension is $\beta_{p,p+2}$, vanishes for every $p < \operatorname{Cliff}(C)$, so that equality holds:

$$
a(C) + 1 = \operatorname{Cliff}(C).
$$

**Posed.** Mark L. Green, 1984 ("Koszul cohomology and the geometry of projective varieties", J. Differential Geom. 19).

**Where it stands.** Partially solved. Voisin proved the generic case, for even genus (JEMS 4, 2002) and odd genus (Compositio 141, 2005). Aprodu, Farkas, Papadima, Raicu and Weyman (arXiv 1810.11635) gave a new proof through Koszul modules, valid in characteristic 0 or characteristic $\ge (g+2)/2$. Kemeny gave a simpler proof of Voisin's theorem (Invent. Math., arXiv 2003.05849) and another proof for odd genus (Épijournal Géom. Algébrique 9, December 2025, arXiv 2502.09735). Many special classes are also known, for example curves on arbitrary K3 surfaces (Aprodu–Farkas, arXiv 0911.5310) and general curves on simple abelian surfaces (Moretti, arXiv 2205.15977). For arbitrary smooth curves the conjecture remains open, and Farkas's survey (arXiv 2602.22493, February 2026) presents it as ongoing work. No proof for all curves was found as of September 2026.

**Smallest open case.** The survey does not name one. The general curve of every genus is settled; what is left is special curves, and no first open genus or class is identified.

**Why it is hard.** Vanishing of Koszul cohomology is an open condition in families: it can hold for the general curve and fail on special ones, so results for the general curve do not pass to special curves. Special curves of a given Clifford index can have complicated Brill–Noether loci, and no deformation argument controls every curve at once.

**Sources.** [Wikipedia: Clifford's theorem on special divisors (raw source)](https://en.wikipedia.org/w/index.php?title=Clifford%27s_theorem_on_special_divisors&action=raw) · [doi:10.4310/jdg/1214438426](https://doi.org/10.4310/jdg/1214438426) · [doi:10.1007/s100970200042](https://doi.org/10.1007/s100970200042) · [doi:10.1112/s0010437x05001387](https://doi.org/10.1112/s0010437x05001387) · [arXiv 1810.11635](https://arxiv.org/abs/1810.11635) · [arXiv 2602.22493](https://arxiv.org/abs/2602.22493) · [doi:10.46298/epiga.2025.15338](https://doi.org/10.46298/epiga.2025.15338) · [arXiv 2003.05849](https://arxiv.org/abs/2003.05849) · [arXiv 0911.5310](https://arxiv.org/abs/0911.5310) · [arXiv 2205.15977](https://arxiv.org/abs/2205.15977)

*Fact-check: corrected (the definition of a(C): the vanishing must hold for every i ≤ p, because the Betti table is symmetric and $\beta_{g-2,g}$ is always 0; references to Kemeny, Aprodu–Farkas and Moretti added).*

## Recently settled

Four of these come from the survey itself. The last three were found by the fact-checker and moved here from its list of further problems, because they are no longer open.

### Jacobian conjecture in dimension $n \ge 3$ (disproved, July 2026)

**What it asked.** The plane case above, in $n$ variables: a polynomial map $F: \mathbb{C}^n \to \mathbb{C}^n$ whose Jacobian determinant is a nonzero constant should have a polynomial inverse. Keller posed it in 1939, with the plane case going back to Kraus (1884), and it is number 16 on Smale's 1998 list.

**How it was settled.** On 19 July 2026 Levent Alpöge presented an explicit counterexample in three variables:

$$
F(z_1,z_2,z_3) = \Big( (1+z_1z_2)^3 z_3 + z_2^2(1+z_1z_2)(4+3z_1z_2),\ \ z_2 + 3z_1(1+z_1z_2)^2 z_3 + 3z_1z_2^2(4+3z_1z_2),\ \ 2z_1 - 3z_1^2z_2 - z_1^3z_3 \Big).
$$

Its Jacobian determinant is $-2$, yet $F(0,0,-\tfrac14) = F(1,-\tfrac32,\tfrac{13}{2}) = F(-1,\tfrac32,\tfrac{13}{2}) = (-\tfrac14,0,0)$, so $F$ is not injective. The components have degrees 7, 6 and 4, and the map is generically 3-to-1. The determinant and the three values were re-checked for this survey, with SymPy and again with exact rational arithmetic. Adding identity coordinates gives counterexamples in every dimension $n \ge 3$. According to Wikipedia, Alpöge credited it to the language model Claude Fable 5, and Tao's post says it was found "using the Fable AI"; how it was found has not been disclosed. No arXiv paper by Alpöge could be found. The map itself is the evidence, it is short enough to check by computer, and it has been formalized in Lean (reported on Buzzard's Xena blog).

Follow-ups came quickly: Gallagher, an infinite family (20 July); Tao, "A digestion of the Jacobian conjecture counterexample" (21 July); Speyer, a geometric explanation (23 July); S. Gao (arXiv 2608.00222, 31 July), a "tangent-sweep" construction giving counterexamples in every dimension above 2 with arbitrarily large geometric degree; A. van den Essen (arXiv 2609.17795, 15 September), an elementary derivation of the same example. Consequences: the Dixmier and Poisson conjectures are false for $n \ge 3$, through the chain $JC_{2n} \Rightarrow PC_n \Rightarrow DC_n \Rightarrow JC_n$ of Adjamagbo and van den Essen (the Dixmier and Jacobian conjectures are stably equivalent, by Tsuchimoto 2005 and Belov-Kanel–Kontsevich 2007). The Hessian conjecture is false for $n \ge 5$ (Meng–Yang, arXiv 2607.22198, a preprint). Many earlier arXiv "proofs" of the general conjecture are therefore wrong.

Why brute force never found it: Tao notes that the example satisfies about 1329 polynomial identities with only about 360 free coefficients. The classical reductions (Bass–Connell–Wright, Druzkowski, de Bondt–van den Essen) let one assume a cubic-homogeneous or symmetric counterexample, but only after adding many variables.

In the same weeks, Grothendieck's question on group schemes was also answered with AI help; it has its own entry below.

**Sources.** [Tao, A digestion of the Jacobian conjecture counterexample (blog, 21 July 2026)](https://terrytao.wordpress.com/2026/07/21/a-digestion-of-the-jacobian-conjecture-counterexample/) · [arXiv 2608.00222](https://arxiv.org/abs/2608.00222) · [Wikipedia: Jacobian conjecture](https://en.wikipedia.org/wiki/Jacobian_conjecture) · [arXiv 2607.22198](https://arxiv.org/abs/2607.22198) · [arXiv 2609.17795](https://arxiv.org/abs/2609.17795) · [Xena blog, 20 July 2026](https://xenaproject.wordpress.com/2026/07/20/human-mathematicians-are-being-outcounterexampled/) · [Antieau, blog, 10 August 2026](https://antieau.github.io/2026/08/10/akhil-mathew-ai.html) · [formal-conjectures issue 5471](https://github.com/google-deepmind/formal-conjectures/issues/5471)

*Fact-check: confirmed.*

### Direct summand conjecture (proved, 2016)

**What it asked.** If a regular ring $R$ sits inside a ring $S$ that is finitely generated as an $R$-module, does the inclusion split, making $R$ a direct summand of $S$ as an $R$-module? In a simple case the splitting is visible: $k[t] = k[t^2] \oplus t \cdot k[t^2]$. Melvin Hochster formulated the conjecture and proved it in equal characteristic ("Contracted ideals from integral extensions of regular rings", Nagoya Math. J. 51, 1973).

**How it was settled.** R. Heitmann settled mixed characteristic in dimension 3 (Ann. of Math. 156, 2002). Yves André proved the remaining mixed-characteristic cases with Scholze's perfectoid spaces (arXiv 1609.00345, September 2016; Publ. Math. IHÉS 127 (2018) 71–93). Bhargav Bhatt gave a shorter proof and proved de Jong's derived variant (arXiv 1608.08882; Invent. Math., 2018). Hochster and Dutta had shown the conjecture equivalent to the improved new intersection conjecture and the canonical element conjecture, so those are settled too. The same circle of ideas later gave Bhatt's theorem that absolute integral closures are Cohen–Macaulay modulo $p^n$ (arXiv 2008.08070, 2020). What had blocked progress: mixed characteristic has neither the Frobenius of characteristic $p$ nor the reduction to characteristic $p$ available in equal characteristic, and the almost-mathematics tools needed (a perfectoid Abhyankar lemma, a quantitative Riemann extension theorem) did not exist before Scholze's perfectoid theory of 2012.

**Sources.** [arXiv 1609.00345](https://arxiv.org/abs/1609.00345) · [arXiv 1608.08882](https://arxiv.org/abs/1608.08882) · [Wikipedia: Homological conjectures in commutative algebra](https://en.wikipedia.org/wiki/Homological_conjectures_in_commutative_algebra) · [doi:10.1017/s0027763000015701](https://doi.org/10.1017/s0027763000015701) · [doi:10.2307/3597204](https://doi.org/10.2307/3597204) · [doi:10.1007/s10240-017-0097-9](https://doi.org/10.1007/s10240-017-0097-9) · [doi:10.1007/s00222-017-0768-7](https://doi.org/10.1007/s00222-017-0768-7)

*Fact-check: confirmed.*

### Eisenbud–Goto regularity conjecture (disproved, 2017)

**What it asked.** Castelnuovo–Mumford regularity measures how complicated a free resolution gets, roughly the highest degree of the equations and syzygies, corrected for the step. Eisenbud and Goto ("Linear free resolutions and minimal multiplicity", J. Algebra 88, 1984) conjectured a simple bound for prime ideals: if $P$ is a nondegenerate homogeneous prime ideal in a polynomial ring $S$ over an algebraically closed field, contained in $(x_1,\dots,x_n)^2$, then

$$
\operatorname{reg}(P) \le \deg(S/P) - \operatorname{codim}(S/P) + 1.
$$

**How it was settled.** Jason McCullough and Irena Peeva, "Counterexamples to the Eisenbud–Goto regularity conjecture" (J. Amer. Math. Soc. 31 (2018) 473–496, online November 2017), showed that the regularity of nondegenerate prime ideals is not bounded by any polynomial function of the degree, over any field. Their prime ideals have singly exponential degree but doubly exponential regularity. The constructions, Rees-like algebras and step-by-step homogenization, turn arbitrary ideals with bad regularity into prime ideals. The bound does hold for curves (Gruson–Lazarsfeld–Peskine) and smooth surfaces (Lazarsfeld, Pinkham). Later work: J. Choe (IMRN 2025) gives counterexamples in every fixed dimension $\ge 3$ and codimension $\ge 2$; Han and Kwak (Trans. AMS 377, 2024) give counterexamples among surfaces; J. I. Han (arXiv 2601.16103, January 2026) proves the bound for some classes of mildly singular projectively normal varieties. Which classes of varieties satisfy the bound, including smooth varieties of higher dimension, is still open.

**Sources.** [McCullough–Peeva (PDF)](https://pi.math.cornell.edu/~irena/papers/regularity.pdf) · [arXiv 2206.06151](https://arxiv.org/abs/2206.06151) · [arXiv 2601.16103](https://arxiv.org/abs/2601.16103) · [doi:10.1090/jams/891](https://doi.org/10.1090/jams/891) · [doi:10.1093/imrn/rnaf017](https://doi.org/10.1093/imrn/rnaf017) · [doi:10.1090/tran/9192](https://doi.org/10.1090/tran/9192)

*Fact-check: confirmed.*

### Stillman's conjecture (proved, 2016)

**What it asked.** Fix a number $n$ of homogeneous polynomials and a bound $d$ on their degrees. Is there a bound $B(n,d)$ on the projective dimension of $R/I$, for every ideal $I$ generated by such polynomials, that does not depend on the number $N$ of variables of $R = k[x_1,\dots,x_N]$? Hilbert's syzygy theorem bounds the projective dimension only by $N$. By Caviglia, the question is equivalent to a similar bound on regularity. Michael Stillman asked it; it is Problem 3.14 in I. Peeva and M. Stillman, "Open problems on syzygies and Hilbert functions" (J. Commut. Algebra 1, 2009).

**How it was settled.** Tigran Ananyan and Melvin Hochster, "Small subalgebras of polynomial rings and Stillman's Conjecture" (arXiv 1610.09268, October 2016; J. Amer. Math. Soc. 33 (2020) 291–309, online October 2019). They show that forms of bounded degree lie in a subalgebra generated by a regular sequence of bounded length with strong Serre-type properties. Erman, Sam and Snowden gave two more proofs ("Big polynomial rings and Stillman's conjecture", Invent. Math. 218 (2019) 413–439), one of them using Draisma's noetherianity theorem. Good effective bounds are still open: the known ones are enormous. The Burch–Kohn examples show that the projective dimension is unbounded if the degrees are allowed to grow.

**Sources.** [arXiv 1610.09268](https://arxiv.org/abs/1610.09268) · [arXiv 1801.09852](https://arxiv.org/abs/1801.09852) · [McCullough, bounding projective dimension (PDF)](https://faculty.sites.iastate.edu/jmccullo/files/inline-files/boundingpd_final.pdf) · [doi:10.1090/jams/932](https://doi.org/10.1090/jams/932) · [doi:10.1007/s00222-019-00889-y](https://doi.org/10.1007/s00222-019-00889-y) · [doi:10.1216/jca-2009-1-1-159](https://doi.org/10.1216/jca-2009-1-1-159)

*Fact-check: confirmed.*

### Peskine–Szpiro conjectures: dimension inequality, strong intersection, grade (counterexamples claimed, August 2026)

**What they asked.** Over a regular local ring, Serre's dimension inequality says that two modules meeting in finite length have dimensions adding up to at most $\dim R$. Peskine and Szpiro asked whether it is enough for one of the two modules to have finite projective dimension. Precisely: let $R$ be a Noetherian local ring, $M$ a finitely generated module of finite projective dimension, and $N$ a finitely generated module with $M \otimes_R N$ of finite length. The conjectures are (i) $\dim M + \dim N \le \dim R$ (dimension inequality); (ii) $\dim N \le \operatorname{grade} M$ (strong intersection); (iii) $\operatorname{grade} M = \dim R - \dim M$ (grade conjecture). They are conjectures II (a), (e) and (f) of C. Peskine and L. Szpiro, "Dimension projective finie et cohomologie locale", Publ. Math. IHÉS 42 (1973) 47–119.

**How it was settled.** Linquan Ma (arXiv 2608.24018, 25 August 2026; a preprint, not refereed) builds a complete local ring of dimension 3 on which the dimension inequality fails, and one of dimension 4 on which the grade conjecture fails. The strong intersection conjecture is equivalent to the other two together, so it fails as well. The construction starts from the 1985 Dutta–Hochster–McLaughlin module and uses a lifting lemma and Milnor patching over a fibre-product ring. According to the paper's AI disclosure, OpenAI's "ChatGPT 5.6 Sol Pro" found the counterexample to the dimension inequality after Ma suggested starting from the Dutta–Hochster–McLaughlin example; Ma then adapted it to the grade conjecture. The dimensions are optimal: the dimension inequality holds when $\dim R \le 2$, and the grade conjecture when $\dim R \le 3$. The conjectures remain true when $M$ is perfect (the new intersection theorem), in the graded case, and when $M$ lifts to a regular local ring. Still open (Ma's Question 3): does $\dim M + \dim N \le \dim R$ hold when both $M$ and $N$ have finite projective dimension? Of the other Peskine–Szpiro conjectures, rigidity of Tor was already known to be false (Heitmann 1993), and the zerodivisor and intersection conjectures are true.

**Sources.** [arXiv 2608.24018](https://arxiv.org/abs/2608.24018)

*Fact-check: not re-checked (found by the fact-checker; a second reader confirmed the arXiv abstract and asks that it be marked "preprint, 2026").*

### Huneke–Wiegand conjecture (counterexamples claimed, August–September 2026)

**What it asked.** Let $R$ be a one-dimensional Gorenstein local domain and $M$ a finitely generated torsion-free $R$-module. If $M \otimes_R \operatorname{Hom}_R(M,R)$ is torsion-free, must $M$ be free? For an ideal $I$, this says that every rigid ideal ($\operatorname{Ext}^1_R(I,I) = 0$) is principal. Craig Huneke and Roger Wiegand posed it in "Tensor products of modules and the rigidity of Tor" (Math. Ann. 299 (1994) 449–476, p. 473).

**How it was settled.** Two counterexamples, both in unrefereed preprints.

- L. W. Christensen, A. Gerko and S. B. Iyengar (arXiv 2608.21666, 21 August 2026): a non-principal rigid ideal with two generators in a standard graded one-dimensional Gorenstein domain, built from a degree-24 extension of $\mathbb{Q}$. The paper says OpenAI's Codex discovered the construction. It also gives a Codex-found proof of the conjecture for equicharacteristic rings of embedding dimension $\le 3$.
- Son Pham (arXiv 2609.07615, 7 September 2026): the semigroup ring of a symmetric numerical semigroup of multiplicity 56, embedding dimension 26 and Frobenius number 181, over every field, with the ideal $I = (t^{56}, t^{70})$. Christensen, Gerko and Iyengar report that Huneke checked this example independently.

Neither ring is a complete intersection: their multiplicities (56 and 24) are far below the $2^{\text{codim}}$ that a complete intersection of that embedding dimension would need. The fact-checker found the complete-intersection case still open.

**Sources.** [arXiv 2608.21666](https://arxiv.org/abs/2608.21666) · [arXiv 2609.07615](https://arxiv.org/abs/2609.07615) · [doi:10.1007/bf01459794](https://doi.org/10.1007/bf01459794) · [arXiv 2202.04792](https://arxiv.org/abs/2202.04792)

*Fact-check: not re-checked (found by the fact-checker; a second reader confirmed both abstracts and asks that they be marked "preprint, 2026").*

### Grothendieck's question: is a finite locally free group scheme killed by its order? (answered no, 2026; no paper yet)

**What it asked.** Lagrange's theorem gives $g^n = 1$ for every element $g$ of a finite group of order $n$. Grothendieck asked for the scheme version: if $G$ is a finite locally free group scheme of rank $n$ over a base scheme $S$, must the $n$-th power map $[n]: G \to G$ factor through the unit section? The question is in SGA 3 (Exp. VIII, Rem. 7.3.1, as cited in formal-conjectures issue 5471), from the 1960s seminar.

**How it was settled.** Before 2026 it was known over reduced bases (SGA 3, Exp. VII<sub>A</sub>), for commutative $G$ (Deligne, recorded in Tate–Oort 1970), and in further cases by Schoof. In 2026 Akhil Mathew, working with OpenAI's Codex and ChatGPT and with Anthropic's Claude, found a group scheme of rank 4 over a finite ring of length 9, with $2^9$ elements, whose 4th power map is nontrivial; its 8th power map is trivial. The example is formalized in Mathlib (Counterexamples/GrothendieckPower.lean, merged 3 August 2026) and described in Antieau's blog post of 10 August 2026. It came from a targeted search inside the universal object, not from brute force. Still open: bases of pure characteristic $p$ (per Antieau's post), and the optimal exponent for each rank $n$.

A second reader could not confirm this. Searches of arXiv turned up only Torti (arXiv 2411.12129, November 2024), which answers the SGA 3 question positively in a new case and treats it as open, and the reader suggested reverting the status to open unless a paper can be cited. The evidence in hand is the blog post, the formal-conjectures issue and the Mathlib file; there is no paper.

**Sources.** [Antieau, blog, 10 August 2026](https://antieau.github.io/2026/08/10/akhil-mathew-ai.html) · [formal-conjectures issue 5471](https://github.com/google-deepmind/formal-conjectures/issues/5471) · [Mathlib: Counterexamples.GrothendieckPower](https://leanprover-community.github.io/mathlib4_docs/Counterexamples/GrothendieckPower.html)

*Fact-check: not re-checked (found by the fact-checker; a second reader found no paper and doubted the status).*

## Further problems suggested by the fact-checker

The fact-checker found these with sources, but no second reader has re-checked them.

- **Zariski's multiplicity conjecture** (Zariski, Bull. Amer. Math. Soc. 77, 1971). If two germs of reduced complex hypersurfaces in $(\mathbb{C}^n, 0)$ are topologically equivalent as embedded germs, do they have the same multiplicity at 0? Partially solved: true for plane curves and in many special cases such as quasihomogeneous singularities; Fernandez de Bobadilla and Pelka proved that $\mu$-constant families of isolated hypersurface singularities are equimultiple (Ann. of Math. 200, 2024), but the question for two arbitrary germs is open. [doi:10.4007/annals.2024.200.1.4](https://doi.org/10.4007/annals.2024.200.1.4)
- **Lech's conjecture** (Christer Lech, Ark. Mat. 4, 1960). If $(R,\mathfrak m) \to (S,\mathfrak n)$ is a flat local homomorphism of Noetherian local rings, is $e(R) \le e(S)$ for the Hilbert–Samuel multiplicities? Partially solved: known for $\dim R \le 2$ (Lech), for $\dim R = 3$ in equal characteristic (Linquan Ma, Adv. Math. 322, 2017), and in all dimensions for standard graded rings over perfect fields localized at the homogeneous maximal ideal (Ma, Invent. Math. 231, 2022); in general only $e(R) \le d! \cdot e(S)$ is known. [doi:10.1007/bf02591323](https://doi.org/10.1007/bf02591323)
- **Hartshorne's complete intersection conjecture** (Hartshorne, Bull. Amer. Math. Soc. 80, 1974). Is every smooth complex projective subvariety $X \subset \mathbb{P}^n$ with $\dim X > \tfrac23 n$ a complete intersection? In codimension 2 this is equivalent to every rank-2 vector bundle on $\mathbb{P}^n$ splitting for $n \ge 7$. Open; Wikipedia's list still carries it, citing Barlet–Peternell–Schneider (Math. Ann. 286, 1990) for partial results. [doi:10.1090/s0002-9904-1974-13612-8](https://doi.org/10.1090/s0002-9904-1974-13612-8)
- **Grothendieck's standard conjectures** (Bombay Colloquium 1968, published 1969). Do the Lefschetz-type conjecture, the Hodge-type positivity conjecture and conjecture D (homological equals numerical equivalence) hold for algebraic cycles on smooth projective varieties? Partially solved: the Hodge type holds in characteristic 0; over $\mathbb{C}$ the Lefschetz type is known in dimension $\le 4$ and for abelian varieties (Lieberman 1968); Ancona proved the Hodge type for abelian fourfolds in positive characteristic (Invent. Math. 223, 2021, arXiv 1806.03216); Broe's preprint (arXiv 2608.28651, August 2026), with theorems of Ancona and Kahn, gives D for abelian fourfolds over any field; Ningyi Li's preprint (arXiv 2609.27916, September 2026) claims the Tate conjecture for every power of an abelian variety of dimension $\le 4$ over a finite field and deduces D for those powers. [Wikipedia: Standard conjectures on algebraic cycles](https://en.wikipedia.org/wiki/Standard_conjectures_on_algebraic_cycles)
- **Abundance conjecture** (Mori's minimal model program, 1980s; Kollár–Mori 1998, Conjecture 3.12). If $(X,\Delta)$ is a klt pair with $K_X + \Delta$ nef, is $K_X + \Delta$ semiample, so that some multiple is base-point free? Partially solved: known in dimension $\le 3$, including log canonical threefolds (Keel–Matsuki–McKernan), with important special cases by Birkar (Publ. Math. IHÉS 115, 2012); open in dimension $\ge 4$. [Wikipedia: Abundance conjecture](https://en.wikipedia.org/wiki/Abundance_conjecture)
