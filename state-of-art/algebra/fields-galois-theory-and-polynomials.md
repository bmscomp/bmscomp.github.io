# Fields, Galois theory and polynomials

State of the art as of 30 September 2026. Not published on the site.

Field theory studies fields and their extensions, algebraic and transcendental. Galois theory is its main tool, and polynomials are its daily material: is this one irreducible, what is its Galois group, where do its roots lie? The survey also takes in the algebraic side of number theory. There the objects are number fields, with their class groups, units and abelian extensions, studied through class field theory and through cyclotomic and Iwasawa theory. Transcendence theory belongs here as well. It asks which numbers built from exp and log are algebraic.

**MSC 2020.** Class 12 (Field theory and polynomials) and the algebraic part of class 11, checked at [zbMATH](https://zbmath.org/classification/?q=cc%3A12).

| Class | What it covers |
|---|---|
| 12D | Real and complex fields, including 12D10, location of zeros of polynomials (Sendov- and Casas-Alvero-type questions) |
| 12E | General field theory: 12E05 polynomials over general fields and irreducibility, 12E10 special polynomials |
| 12F | Field extensions: 12F10 separable extensions and Galois theory, 12F12 inverse Galois theory, 12F20 transcendental extensions |
| 12G | Homological methods in field theory (Galois cohomology) |
| 12H | Differential and difference algebra |
| 12J | Topological fields: normed, valued, ordered, p-adic |
| 12K | Generalizations of fields: near-fields, semifields |
| 12L | Field theory and logic: decidability, model theory of fields |
| 11R | Algebraic number theory, global fields: class field theory, cyclotomic fields, class groups and units, Iwasawa theory, Galois theory of number fields |
| 11S | Algebraic number theory, local fields: ramification, local Galois theory |
| 11J | Diophantine approximation and transcendental number theory (Schanuel, four exponentials) |

**Standard problem lists.**

- [Wikipedia, List of unsolved problems in mathematics](https://en.wikipedia.org/wiki/List_of_unsolved_problems_in_mathematics), sections Algebra, Algebraic number theory, Diophantine approximation and transcendental number theory, and Problems solved since 2015.
- [Hilbert's problems](https://en.wikipedia.org/wiki/Hilbert%27s_problems): the 12th (explicit class field theory) and the 13th (equations of degree 7).
- [Inverse Galois problem](https://en.wikipedia.org/wiki/Inverse_Galois_problem) on Wikipedia, with references to Malle–Matzat, *Inverse Galois Theory*, and Jensen–Ledet–Yui, *Generic Polynomials*.
- [GaloisDB](http://galoisdb.math.upb.de/), the database of transitive groups realized as Galois groups over $\mathbb{Q}$ that Wikipedia cites. It answered the researcher's request with HTTP 403, so the researcher could not check it directly.
- M. Waldschmidt, [Open Diophantine Problems](https://arxiv.org/abs/math/0312440), Moscow Math. J. 4 (2004).
- M. Waldschmidt, [Schanuel's Conjecture: algebraic independence of transcendental numbers](https://webusers.imj-prg.fr/~michel.waldschmidt/articles/pdf/SchanuelEn.pdf), survey slides, 2021.
- [zbMATH, MSC 2020 class 12](https://zbmath.org/classification/?q=cc%3A12).

## Open problems

★ marks a problem whose statement needs no more than undergraduate algebra.

- ★ Inverse Galois problem: partially solved.
- ★ Noether's problem: partially solved (false in general; open for the alternating groups $A_n$, $n \ge 6$, over $\mathbb{Q}$).
- Malle's conjecture: partially solved (the strong form is false as stated; the weak form is open).
- ★ Hilbert's thirteenth problem, algebraic version: open.
- ★ Casas-Alvero conjecture: open, with a claimed proof that nobody has verified.
- ★ Lehmer's conjecture: open.
- ★ Schanuel's conjecture: open.
- ★ Four exponentials conjecture: open.
- Hilbert's twelfth problem: partially solved.
- Kummer–Vandiver conjecture: open.
- Leopoldt's conjecture: open.
- Serre's Conjecture II: partially solved.

### ★ Inverse Galois problem

**What it asks.** Galois theory attaches a finite group to every polynomial with rational coefficients: the permutations of its roots that preserve every algebraic relation among them. For $x^2 - 2$ that group is $C_2$, the swap of $\sqrt2$ and $-\sqrt2$. For $x^3 - 2$ the splitting field is $\mathbb{Q}(\sqrt[3]{2}, \omega)$, with $\omega$ a primitive cube root of unity, and the group is $S_3$. The inverse problem starts from the group. Given a finite group, is there a polynomial over $\mathbb{Q}$ that has it?

Precisely: is every finite group $G$ isomorphic to $\mathrm{Gal}(L/\mathbb{Q})$ for some Galois extension $L/\mathbb{Q}$? The regular version asks for a Galois extension $L/\mathbb{Q}(t)$ with group $G$ in which $\mathbb{Q}$ is algebraically closed. By Hilbert's irreducibility theorem such an extension specializes to infinitely many $G$-extensions of $\mathbb{Q}$.

**Posed.** Conventionally attributed to David Hilbert (1892), who used his irreducibility theorem to realize $S_n$ and $A_n$, and to Emmy Noether (1918), who reduced it, one group at a time, to Noether's problem (next section). Wikipedia, citing Jensen–Ledet–Yui, dates the question to the early 19th century.

**Where it stands.** Partially solved. Every finite abelian group occurs, through cyclotomic fields. Every finite solvable group occurs too: I. R. Shafarevich proved it in 1954 (Wikipedia cites his 1958 Doklady note), and Demeio ([arXiv 2604.18099](https://arxiv.org/abs/2604.18099), 2026, a preprint, not refereed) gives another proof that avoids Shafarevich's "shrinking procedure". The symmetric groups follow from Hilbert's criterion. Over $\mathbb{C}(t)$ every finite group occurs. All 13 non-abelian simple groups of order less than $7800 = |\mathrm{PSL}(2,25)|$ occur over $\mathbb{Q}$ (Malle–Matzat 1999, as cited by Wikipedia). Noether's route cannot work for every group: R. Swan (1969) showed that Noether's problem fails for the cyclic group of order 47, which is realizable anyway, being abelian.

Recent progress comes group by group. Van Bommel, Costa, Elkies, Keller, Schiavone and Voight realized the transitive group 17T7 with Hilbert modular forms ([arXiv 2411.07857](https://arxiv.org/abs/2411.07857), 2024; its v4 of 1 June 2026 thanks a referee). Huang, Jackson, Lee, Poonen, Pries and Zhang realized the Mathieu group $M_{23}$ in August 2026 (see Recently settled; a preprint, not refereed), which completes the 26 sporadic simple groups. A footnote in their paper records that the 1980s realization of the Baby Monster contained a calculation error and was completed later. Demeio and Gvirtz-Chen ([arXiv 2512.23615](https://arxiv.org/abs/2512.23615), December 2025, a preprint) prove new cases of the regular problem for $\mathrm{PSL}_2(\mathbb{F}_{p^2})$ under congruence conditions on $p$.

Wikipedia, citing GaloisDB and the 17T7 and $M_{23}$ papers, says that all 4,953 transitive permutation groups of degree at most 23 are now realized, but that only 286 of the 25,000 transitive groups of degree 24 were known to be realizable as of June 2026. The general problem is open, and so is the regular version over $\mathbb{Q}(t)$.

**Smallest open case.** Degree 24. Every transitive group of degree at most 23 is realized over $\mathbb{Q}$, while in degree 24 only 286 of the 25,000 transitive groups were known to be realizable in June 2026. For simple groups the survey confirms everything of order below $7800 = |\mathrm{PSL}(2,25)|$ and does not say whether $\mathrm{PSL}(2,25)$ itself is known.

**Why it is hard.** There is no general construction. The main tool is Hilbert irreducibility combined with the rigidity method of Belyi, Fried, Matzat, Thompson and Shih, and its braid-group refinements. These need rational rigid triples of conjugacy classes or rational points on Hurwitz spaces, and many groups have neither. $M_{23}$ needed a non-rigid triple and heavy numerical computation of Belyi maps. Shafarevich's method for solvable groups runs through embedding problems, which carry arithmetic obstructions. Then there is the count: 25,000 transitive groups in degree 24 alone, far more than case-by-case work can reach.

**Sources.** [Wikipedia](https://en.wikipedia.org/wiki/Inverse_Galois_problem) ([raw text](https://en.wikipedia.org/w/index.php?title=Inverse_Galois_problem&action=raw)); [arXiv 2608.08538](https://arxiv.org/abs/2608.08538); [arXiv 2411.07857](https://arxiv.org/abs/2411.07857); [arXiv 2604.18099](https://arxiv.org/abs/2604.18099); [arXiv 2512.23615](https://arxiv.org/abs/2512.23615).

*Fact-check: corrected (Hilbert's 1892 paper is not shown to be the problem's origin; Shafarevich's theorem dated 1954; the Baby Monster footnote and the $\mathrm{PSL}_2(\mathbb{F}_{p^2})$ result added).*

### ★ Noether's problem

**What it asks.** Let $S_n$ permute the variables $x_1, \dots, x_n$. The rational functions that every permutation fixes are exactly the rational functions in the elementary symmetric polynomials $e_1 = x_1 + \dots + x_n$, …, $e_n = x_1 x_2 \cdots x_n$, and these $n$ functions are algebraically independent. So the fixed field is again a field of rational functions in $n$ variables; for $n = 2$ it is $\mathbb{Q}(x_1 + x_2, x_1 x_2)$. Noether asked whether the same holds for every group of permutations $G$, not only the full $S_n$. A yes for $G$ over $\mathbb{Q}$ gives, through Hilbert irreducibility, a generic polynomial for $G$, and so realizes $G$ as a Galois group over $\mathbb{Q}$. That link to the inverse Galois problem was her motivation.

Precisely: a finite group $G$ acts on $k(x_g : g \in G)$ by permuting the variables (the regular representation), or on $k(x_1, \dots, x_n)$ through a permutation representation. Is the fixed field purely transcendental ("rational") over $k$? The central open cases are the alternating groups $A_n$ with $n \ge 6$, over $\mathbb{Q}$. The weaker property of stable rationality asks only that the fixed field become purely transcendental after adjoining finitely many further independent variables.

**Posed.** Emmy Noether, 1913. Her 1918 paper in Math. Ann. supplied the motivation from Galois theory; Scavia's 2026 paper cites both.

**Where it stands.** Partially solved, and false in general. Swan (Invent. Math. 7 (1969), 148–158) showed that $\mathbb{Q}(x_1, \dots, x_{47})^{C_{47}}$ is not rational, and later work, surveyed by Hoshi ([arXiv 2010.01517](https://arxiv.org/abs/2010.01517), 2020), found counterexamples over $\mathbb{C}$. For alternating groups the answer is yes for $A_3$ and $A_4$ (classical) and for $A_5$ over every field (Maeda, J. Algebra 125 (1989)). Plans (2009) showed that for odd $n$ the invariant field $\mathbb{Q}(A_n)$ is rational over $\mathbb{Q}(A_{n-1})$.

The newest result is Scavia's ([arXiv 2609.15163](https://arxiv.org/abs/2609.15163), posted 14 September 2026, a preprint that is not refereed). He proves the stable form of Noether's problem for $A_6$ (in his notation, $B_kA_6$ is stably rational) over every field $k$ in which 2 and $-3$ are nonzero squares. Combined with Plans, the same holds for $A_7$ over such fields of characteristic 0. Over $\mathbb{Q}$, where $-3$ is not a square, and for rationality rather than stable rationality, $A_6$ and $A_7$ remain open, as does every $A_n$ with $n \ge 8$.

**Smallest open case.** $A_6$ over $\mathbb{Q}$. Scavia's theorem needs 2 and $-3$ to be squares, which they are not in $\mathbb{Q}$, and even where it applies it gives stable rationality, not rationality.

**Why it is hard.** The known obstructions to rationality (Saltman's and Bogomolov's unramified Brauer group, higher unramified cohomology) all vanish for $A_n$, so there is no tool that could prove a negative answer. A positive answer needs explicit constructions, and these grow quickly in complexity with $n$. Over fields that are not algebraically closed, arithmetic conditions enter as well, such as whether $-3$ is a square.

**Sources.** [arXiv 2609.15163](https://arxiv.org/abs/2609.15163) ([HTML](https://arxiv.org/html/2609.15163v1)); [arXiv 2010.01517](https://arxiv.org/abs/2010.01517); [Swan 1969, DOI 10.1007/bf01389798](https://doi.org/10.1007/bf01389798); [Maeda 1989, DOI 10.1016/0021-8693(89)90174-9](https://doi.org/10.1016/0021-8693(89)90174-9); [arXiv search for "Noether's problem"](https://arxiv.org/search/?query=%22Noether%27s+problem%22&searchtype=all&order=-announced_date_first&size=25).

*Fact-check: corrected (posed in 1913; the 1918 paper supplied the Galois-theoretic motivation).*

### Malle's conjecture

**What it asks.** How many number fields have a given Galois group, counted by the size of their discriminant? Quadratic fields are the model case: the number with $|\mathrm{disc}| \le X$ grows like a constant times $X$. Malle predicts the growth rate for every group from one number. For a permutation $g$ of $n$ points, let $\mathrm{ind}(g)$ be $n$ minus the number of orbits of $g$, and let $a(G)$ be the smallest index of a non-identity element of $G$. A transposition has index 1, so for quadratic fields ($G = S_2$) we get $a = 1$ and a predicted count of order $X$, which matches. For cyclic cubic fields every non-identity element is a 3-cycle, of index 2, and the prediction is $X^{1/2}$.

Precisely: fix a number field $k$ and a transitive group $G \le S_n$. Let $N(k,G;X)$ count the degree-$n$ extensions $L/k$ inside a fixed algebraic closure whose Galois closure has group $G$, as a permutation group, and whose relative discriminant has norm at most $X$. The weak form says

$$
X^{1/a(G)} \ll N(k,G;X) \ll X^{1/a(G)+\varepsilon}.
$$

The strong form says

$$
N(k,G;X) \sim c X^{1/a(G)} (\log X)^{b(k,G)-1},
$$

where $b(k,G)$ is the number of $k$-conjugacy classes of minimal-index elements under the cyclotomic action.

**Posed.** Gunter Malle, 2002 (weak form) and 2004 (strong form, with the exponent $b$). The fact-checker did not re-check these two years.

**Where it stands.** The strong form is false as stated. Jürgen Klüners (C. R. Acad. Sci. Paris, 2005) showed that $N(\mathbb{Q}, C_3 \wr C_2 \subset S_6; X) \gg X^{1/2} \log X$ although $b(\mathbb{Q}, G) = 1$. Türkelli proposed a corrected $b$, and Jiuya Wang showed that it fails too ([arXiv 2502.04261](https://arxiv.org/abs/2502.04261), February 2025, which also proposes a refined $b$). The weak form is open in general. Its lower bound alone would imply the inverse Galois problem over $k$.

Many cases are proved. Koymans and Pagano proved the asymptotic for nilpotent $G$ in the regular representation when the minimal-index elements are central. Alberts, Lemke Oliver, Wang and Wood, in "Inductive methods for counting number fields" ([arXiv 2501.18574](https://arxiv.org/abs/2501.18574), January 2025), proved $N \sim c X^{1/a}(\log X)^{b-1}$ with $a = a(G)$ for many new infinite families. One is every nilpotent transitive group whose minimal-index elements generate an abelian group, over any number field. Their families contain infinitely many groups where $b$ agrees with Malle's prediction and infinitely many Klüners-type groups where it does not. Other recent work: Landesman and Levy on homological stability for Hurwitz spaces ([arXiv 2503.03861](https://arxiv.org/abs/2503.03861)), with applications to Malle's conjecture over function fields; Loughran and Santens on the leading constant ([arXiv 2606.04983](https://arxiv.org/abs/2606.04983), June 2026); Shankar and Varma on Galois octic fields ([arXiv 2505.23690](https://arxiv.org/abs/2505.23690)). The survey records no journal version for any of the arXiv papers in this entry, so treat them as preprints that are not refereed.

**Smallest open case.** Not identifiable from the survey data. The survey names no smallest group for which the weak form is open. It does say where the proved cases live (nilpotent groups and families reached by induction) and that non-solvable groups have almost no tools.

**Why it is hard.** Asymptotic counts of number fields by discriminant come from two sources. One is parametrizations of rings of small rank, which exist only for a few small groups. The other is inductive, class-field-theoretic counting, which needs uniform bounds on torsion in class groups, and those are not known in general. For non-solvable groups almost nothing works, and even the lower bound, the existence of a single $G$-extension, contains the inverse Galois problem.

**Sources.** [arXiv 2501.18574](https://arxiv.org/abs/2501.18574); [Klüners' counterexample (PDF)](https://math.uni-paderborn.de/fileadmin-eim/mathematik/AG-Computeralgebra/Publications-klueners/counter.pdf); [arXiv 2502.04261](https://arxiv.org/abs/2502.04261); [arXiv 2503.03861](https://arxiv.org/abs/2503.03861); [arXiv 2606.04983](https://arxiv.org/abs/2606.04983).

*Fact-check: confirmed.*

### ★ Hilbert's thirteenth problem, algebraic version, and resolvent degree

**What it asks.** The quadratic formula writes a root of $x^2 + bx + c$ with one square root, a function of one variable, plus arithmetic. Hilbert's question keeps that spirit but allows any algebraic function, and counts only how many variables each one needs; sums, products and quotients are free. Hamilton showed in 1836 that Tschirnhaus-type transformations and radicals reduce every degree-7 equation to

$$
x^7 + a x^3 + b x^2 + c x + 1 = 0,
$$

so a root is an algebraic function $x(a,b,c)$ of three variables. Can it be written as a finite composition of algebraic functions of two variables? Hilbert expected not.

In modern language, the resolvent degree $\mathrm{RD}(n)$ is the least $d$ such that a root of the general polynomial of degree $n$ can be built by composing algebraic functions of at most $d$ variables. Hilbert expected $\mathrm{RD}(7) = 3$.

**Posed.** David Hilbert, 13th problem of his 1900 list. He came back to it in his 1927 paper in Math. Ann., "Über die Gleichung neunten Grades".

**Where it stands.** Open. The version for continuous functions was settled, in the affirmative, by Kolmogorov (1956) and Arnold (1957), which is why the problem is sometimes called solved. The algebraic version Hilbert meant is not. Known: $\mathrm{RD}(n) = 1$ for $n \le 5$, and the upper bounds $\mathrm{RD}(6) \le 2$, $\mathrm{RD}(7) \le 3$, $\mathrm{RD}(8) \le 4$. Farb and Wolfson built a modern theory of resolvent degree that ties it to enumerative geometry ([arXiv 1803.04063](https://arxiv.org/abs/1803.04063); L'Enseignement Math. 65, no. 3, pp. 303–376, the 2019 volume, online in 2020). Edens and Reichstein ([arXiv 2406.15954](https://arxiv.org/abs/2406.15954), June 2024, a preprint) state in their abstract that nobody knows whether $\mathrm{rd}_{\mathbb{C}}(n)$ exceeds 1 for any $n \ge 6$. They also show that Hilbert's conjectured values fail over fields of prime characteristic. No lower bound above 1 is known in any degree. The fact-checker found no new lower bound in 2025–2026, only work on the resolvent degree of specific groups, such as [arXiv 2509.19237](https://arxiv.org/abs/2509.19237) on $\mathrm{PSU}(3,q)$.

**Smallest open case.** Degree 6: is $\mathrm{RD}(6)$ equal to 1 or to 2? No degree $n$ is known with $\mathrm{RD}(n) > 1$, so a proof that $\mathrm{RD}(6) = 2$ would be the first lower bound of any kind.

**Why it is hard.** Every known technique gives upper bounds by constructing formulas. A lower bound means showing that no composition of two-variable algebraic functions whatsoever produces the root, and no known invariant detects $\mathrm{RD}(n) > 1$. Galois theory detects solvability by radicals but says nothing about algebraic functions of several variables.

**Sources.** [Wikipedia](https://en.wikipedia.org/wiki/Hilbert%27s_thirteenth_problem) ([raw text](https://en.wikipedia.org/w/index.php?title=Hilbert%27s_thirteenth_problem&action=raw)); [arXiv 2406.15954](https://arxiv.org/abs/2406.15954); [arXiv 1803.04063](https://arxiv.org/abs/1803.04063); [Crossref record for Farb–Wolfson](https://api.crossref.org/works?query.bibliographic=Farb+Wolfson+Resolvent+degree).

*Fact-check: confirmed.*

### ★ Casas-Alvero conjecture

**What it asks.** The polynomial $(x-a)^d$ shares the root $a$ with each of its derivatives up to order $d-1$. The conjecture says that in characteristic 0 nothing else does, even if each derivative is allowed to share a different root. Degree 2 shows the idea. If $f = (x-r)(x-s)$, then $f' = 2x - r - s$ has the single root $(r+s)/2$, and this is a root of $f$ only when $r = s$.

Precisely: let $K$ be a field of characteristic 0 and $f \in K[x]$ monic of degree $d$. If for every $i = 1, \dots, d-1$ the polynomial $f$ has a nonconstant common factor with its $i$-th derivative $f^{(i)}$, then $f = (x-a)^d$ for some $a \in K$.

**Posed.** Eduardo Casas-Alvero, 2001, out of his work on higher-order polar germs (J. Algebra 240 (2001)).

**Where it stands.** Open. In characteristic $p$ it is false, for example for $x^{p+1} - x^p$. It is proved in these degrees:

- $d = p^k$ and $d = 2p^k$ (Graf von Bothmer, Labs, Schicho, van de Woestijne, J. Algebra 2007);
- $d = 3p^k$ for $p \ne 2$, and $d = 4p^k$ for $p \notin \lbrace 3, 5, 7 \rbrace$;
- $d = 5p^k$, $6p^k$ and $7p^k$ outside finite sets of "bad" primes, with $|B(6)| = 53$ and $|B(7)| = 366$;
- $d \le 7$, by direct elimination;
- $d = 12$ (Castryck, Laterveer, Ounaïes, arXiv 2012).

S. Ghosh proved that the Casas-Alvero variety has dimension at most 2 in every degree ([arXiv 2402.18717](https://arxiv.org/abs/2402.18717), a preprint, not refereed). Ghosh also posted "Proof of the Casas-Alvero conjecture", using Koszul homology ([arXiv 2501.09272](https://arxiv.org/abs/2501.09272), January 2025; v2 of 21 March 2026 carries major revisions). M. F. Marashdeh ([arXiv 2608.14726](https://arxiv.org/abs/2608.14726), August 2026) writes that nobody has independently verified that preprint and treats the conjecture as open. This survey does the same.

**Smallest open case.** $d = 20$. Marashdeh gives 20 as the smallest degree for which the conjecture is open.

**Why it is hard.** A parameter count shows that the $d-1$ conditions overdetermine the system by only one, so the conjecture is a delicate statement about how resultant hypersurfaces intersect. It fails in characteristic $p$, so a proof has to use characteristic 0 in an essential way. The known transfer method, from degree $n$ to degree $np^k$, has to avoid bad primes, and those sets grow fast: $|B(7)| = 366$.

**Sources.** [Wikipedia](https://en.wikipedia.org/wiki/Casas-Alvero_conjecture) ([raw text](https://en.wikipedia.org/w/index.php?title=Casas-Alvero_conjecture&action=raw)); [arXiv 2501.09272](https://arxiv.org/abs/2501.09272); [arXiv 2608.14726](https://arxiv.org/abs/2608.14726); [arXiv 2402.18717](https://arxiv.org/abs/2402.18717).

*Fact-check: confirmed.*

### ★ Lehmer's conjecture

**What it asks.** The Mahler measure of an integer polynomial multiplies the absolute value of the leading coefficient by the absolute values of the roots outside the unit circle. For $x^2 - 2$ it is $\sqrt2 \cdot \sqrt2 = 2$. For $x^2 - x - 1$, with roots $1.618\ldots$ and $-0.618\ldots$, it is $1.618\ldots$. Products of cyclotomic polynomials have measure exactly 1. Lehmer asked whether the measure can come arbitrarily close to 1 without being equal to it.

Precisely: for $P(x) = a_0 (x - \alpha_1) \cdots (x - \alpha_D) \in \mathbb{Z}[x]$ put

$$
M(P) = |a_0| \prod_{i=1}^{D} \max(1, |\alpha_i|).
$$

The conjecture: there is an absolute constant $\mu > 1$ such that every $P \in \mathbb{Z}[x]$ with $M(P) > 1$ has $M(P) \ge \mu$. Equivalently, $M(P)$ cannot be arbitrarily close to 1 unless $P$ is, up to a constant and powers of $x$, a product of cyclotomic polynomials. The expected best value comes from Lehmer's polynomial:

$$
\mu = M(x^{10} + x^9 - x^7 - x^6 - x^5 - x^4 - x^3 + x + 1) = 1.17628\ldots
$$

**Posed.** Derrick Henry Lehmer, Ann. of Math. 34 (1933).

**Where it stands.** Open. Smyth (1971) proved it for non-reciprocal polynomials. The general lower bounds decay slowly with the degree $D$. Blanksby–Montgomery and Stewart proved $\log M \ge C/(D \log D)$; Dobrowolski (1979) proved $\log M \ge C \left((\log\log D)/\log D\right)^3$; Voutier (1996) showed that $C = 1/4$ works for $D \ge 2$. The weaker Schinzel–Zassenhaus conjecture, which follows from Lehmer's because for monic $P$ the measure $M(P)$ is at most the largest root's absolute value raised to the power $D$, was proved by Dimitrov in 2019 (see Recently settled).

J.-L. Verger-Gaugry posted claimed proofs ([arXiv 1709.03771](https://arxiv.org/abs/1709.03771) in 2017, [arXiv 1911.10590](https://arxiv.org/abs/1911.10590) in 2019, the latter revised in 2021 with its results unchanged). They are not accepted: F. Amoroso ([arXiv 1809.10600](https://arxiv.org/abs/1809.10600), 2018) found at least one fatal error in the first. The survey found no accepted resolution as of September 2026. A different conjecture of Lehmer's, the non-vanishing of Ramanujan's $\tau$, has its own 2025 claimed proof ([arXiv 2503.23498](https://arxiv.org/abs/2503.23498)); the two are easy to confuse.

**Smallest open case.** Reciprocal polynomials. Smyth's theorem settles every non-reciprocal one, so what is left are polynomials with $x^D P(1/x) = \pm P(x)$, and above all Salem numbers, whose minimal polynomials have almost all roots on the unit circle. The survey gives no degree below which the conjecture is verified.

**Why it is hard.** The known lower-bound methods (auxiliary polynomials, congruences between $\alpha^p$ and its conjugates mod $p$) lose a factor that depends on the degree. A gap independent of the degree needs control of reciprocal polynomials with almost all roots on the unit circle, and no method gives a uniform bound for them.

**Sources.** [Wikipedia](https://en.wikipedia.org/wiki/Lehmer%27s_conjecture); [arXiv 1809.10600](https://arxiv.org/abs/1809.10600); [arXiv 1911.10590](https://arxiv.org/abs/1911.10590); [arXiv 1912.12545](https://arxiv.org/abs/1912.12545).

*Fact-check: confirmed.*

### ★ Schanuel's conjecture

**What it asks.** Take complex numbers $z_1, \dots, z_n$ with no rational linear relation among them. Of the $2n$ numbers $z_1, \dots, z_n, e^{z_1}, \dots, e^{z_n}$, at least $n$ should be algebraically independent. For $n = 1$ this says that $z$ or $e^z$ is transcendental when $z \ne 0$, which Lindemann's theorem gives. For $n = 2$, take $z_1 = 1$ and $z_2 = i\pi$. The four numbers are $1, i\pi, e, -1$, and the conjecture says two of them, necessarily $e$ and $i\pi$, are algebraically independent. That is still unknown.

Precisely: if $z_1, \dots, z_n \in \mathbb{C}$ are linearly independent over $\mathbb{Q}$, then

$$
\operatorname{trdeg}_{\mathbb{Q}} \mathbb{Q}(z_1, \dots, z_n, e^{z_1}, \dots, e^{z_n}) \ge n.
$$

**Posed.** Stephen Schanuel. Serge Lang published it first, in *Introduction to Transcendental Numbers* (1966).

**Where it stands.** Open, even for $n = 2$. Proven special cases include Lindemann–Weierstrass (1882/1885), Gelfond–Schneider (1934) and Baker's theorem (1966). J. Ax (1971) proved the analogue for formal power series, the start of the Ax–Schanuel theorems. Nesterenko (1996) proved that $\pi$ and $e^{\pi\sqrt n}$ are algebraically independent. Whether $e$ and $\pi$ are algebraically independent is unknown; so is whether $e + \pi$ is irrational. Macintyre and Wilkie (1996) showed that Schanuel's conjecture implies that the real exponential field is decidable. Zilber's pseudo-exponentiation ties the conjecture to model theory, but Bays and Kirby (ANT 12 (2018)) show that this construction cannot prove it. The survey found no claimed proof or counterexample in 2025–2026, only conditional or Schanuel-type work such as Berarducci–Gallinaro ([arXiv 2603.08365](https://arxiv.org/abs/2603.08365), 2026), which assumes the conjecture.

**Smallest open case.** $n = 2$. The choice $z_1 = 1$, $z_2 = i\pi$ shows that this case already contains the algebraic independence of $e$ and $\pi$; the irrationality of $e + \pi$ is a weaker statement that is also open.

**Why it is hard.** Transcendence methods (auxiliary polynomials, zero estimates) establish independence for a few numbers at a time and usually need algebraic inputs, as in Baker's theorem. Schanuel asks for full algebraic independence with no algebraicity hypothesis. The case $n = 2$ alone would settle $e$ against $\pi$.

**Sources.** [Wikipedia](https://en.wikipedia.org/wiki/Schanuel%27s_conjecture) ([raw text](https://en.wikipedia.org/w/index.php?title=Schanuel%27s_conjecture&action=raw)); [Waldschmidt's survey slides](https://webusers.imj-prg.fr/~michel.waldschmidt/articles/pdf/SchanuelEn.pdf); [Wikipedia, Algebraic independence](https://en.wikipedia.org/wiki/Algebraic_independence); [arXiv 2603.08365](https://arxiv.org/abs/2603.08365).

*Fact-check: confirmed.*

### ★ Four exponentials conjecture

**What it asks.** Its best-known consequence is easy to state: if $t$ is real and both $2^t$ and $3^t$ are integers, then $t$ is an integer. To get it, take $x_1 = \log 2$, $x_2 = \log 3$, $y_1 = 1$, $y_2 = t$. The four exponentials $e^{x_i y_j}$ are $2, 2^t, 3, 3^t$, and if $t$ is irrational the conjecture says one of them is transcendental. A rational $t$ with $2^t$ an integer is already an integer.

Precisely: if $x_1, x_2$ are complex numbers linearly independent over $\mathbb{Q}$, and $y_1, y_2$ are complex numbers linearly independent over $\mathbb{Q}$, then at least one of $e^{x_1y_1}, e^{x_1y_2}, e^{x_2y_1}, e^{x_2y_2}$ is transcendental.

**Posed.** Atle Selberg considered it in the early 1940s without publishing. A special case appears in Alaoglu–Erdős (1944), with a remark attributed to Siegel. Theodor Schneider first stated it in print, in an equivalent form, in 1957. Serge Lang and K. Ramachandra conjectured it explicitly in the 1960s.

**Where it stands.** Open. Lang and Ramachandra proved the six exponentials theorem in the 1960s: the same statement with two $x$'s and three $y$'s. The four exponentials conjecture follows from Schanuel's conjecture. The survey found no resolution in 2025–2026.

**Smallest open case.** The conjecture is itself the smallest case: two $x$'s and two $y$'s, one $y$ fewer than the six exponentials theorem needs. The survey does not isolate anything smaller.

**Why it is hard.** After proving the six exponentials theorem, Lang remarked that the method just misses with four. The auxiliary-function argument needs more exponentials than the counting bounds from Siegel's lemma allow, and no one has closed that gap.

**Sources.** [Wikipedia](https://en.wikipedia.org/wiki/Four_exponentials_conjecture) ([raw text](https://en.wikipedia.org/w/index.php?title=Four_exponentials_conjecture&action=raw)); [Waldschmidt, Open Diophantine Problems](https://arxiv.org/abs/math/0312440).

*Fact-check: confirmed.*

### Hilbert's twelfth problem (Kronecker's Jugendtraum, explicit class field theory)

**What it asks.** Over $\mathbb{Q}$ there is a complete answer. By the Kronecker–Weber theorem every finite abelian extension of $\mathbb{Q}$ lies in a cyclotomic field, so the values $\exp(2\pi i r)$, $r$ rational, generate the maximal abelian extension $\mathbb{Q}^{\mathrm{ab}}$. For example, with $\zeta = e^{2\pi i/5}$ one has $\zeta + \zeta^{-1} = 2\cos 72^\circ = (\sqrt5 - 1)/2$, so $\sqrt5 = 1 + 2(\zeta + \zeta^{-1})$ and $\mathbb{Q}(\sqrt5) \subset \mathbb{Q}(\zeta)$. Hilbert asked for the same thing over an arbitrary number field $K$: analytic functions whose special values generate $K^{\mathrm{ab}}$, the compositum of all abelian extensions of $K$.

**Posed.** Leopold Kronecker called it his "liebster Jugendtraum" in an 1880 letter to Dedekind. David Hilbert put it on his 1900 list.

**Where it stands.** Partially solved. It is solved for $\mathbb{Q}$ (Kronecker–Weber) and for imaginary quadratic fields, by complex multiplication: values of $j$ and of elliptic functions. For a general CM field $E$ with totally real subfield $F$, complex multiplication does not suffice. Together with $F^{\mathrm{ab}}$ it generates a subfield $M_E F^{\mathrm{ab}}$ of $E^{\mathrm{ab}}$, and $\mathrm{Gal}(E^{\mathrm{ab}}/M_E F^{\mathrm{ab}})$ has exponent 2 and is infinite unless $F = \mathbb{Q}$ (Theorem 1.10 of Dasgupta–Kakde).

For totally real fields there is now an answer, though a $p$-adic one. Dasgupta and Kakde ([arXiv 2103.02516](https://arxiv.org/abs/2103.02516), March 2021; Duke Math. J. 173 (2024)) constructed the maximal abelian extension of every totally real field of degree $n$ unconditionally. Brumer–Stark units, together with $n-1$ easily described square roots, generate it, and the units are given by an exact $p$-adic analytic formula, the integral Gross–Stark conjecture. The construction builds on the Brumer–Stark conjecture away from 2, which they had proved in a separate, earlier paper (arXiv 2010.00657; Annals of Math. 197 (2023), 289–388). Dasgupta, Kakde, Silliman and Wang posted a proof of the Brumer–Stark conjecture over $\mathbb{Z}$ ([arXiv 2310.16399](https://arxiv.org/abs/2310.16399), October 2023); it is still v1, and the fact-checker found no journal version, so it is a preprint, not refereed.

What remains open is the complex-analytic answer Hilbert asked for, since the construction uses $p$-adic integration for infinitely many $p$ (Quanta, May 2021). Fields that are neither totally real nor CM are open as well. One line of work is elliptic units for complex cubic fields (Bergeron, Charollois, García, [arXiv 2311.04110](https://arxiv.org/abs/2311.04110), November 2023). Radchenko and Wheeler ([arXiv 2609.21892](https://arxiv.org/abs/2609.21892), 18 September 2026, a preprint, not refereed) prove that Stark–Shintani units of real quadratic fields are algebraic numbers. Wikipedia still says that the general case is open.

**Smallest open case.** Complex cubic fields, the smallest fields that are neither totally real nor CM; Bergeron–Charollois–García is the line of attack the survey names. For real quadratic fields the $p$-adic answer exists and Radchenko–Wheeler have shown that the Stark–Shintani units are algebraic, but a complex-analytic generation of $K^{\mathrm{ab}}$ is still missing.

**Why it is hard.** Class field theory proves that $K^{\mathrm{ab}}$ exists and describes its Galois group, but gives no explicit generators. Explicit generators have so far come from special values of functions with a reciprocity law (exp, elliptic and modular functions), and no such functions are known for general fields. The units that Stark's conjectures predict are themselves conjectural outside special cases.

**Sources.** [Wikipedia](https://en.wikipedia.org/wiki/Hilbert%27s_twelfth_problem) ([raw text](https://en.wikipedia.org/w/index.php?title=Hilbert%27s_twelfth_problem&action=raw)); [arXiv 2103.02516](https://arxiv.org/abs/2103.02516); [Quanta, May 2021](https://www.quantamagazine.org/mathematicians-find-polynomial-building-blocks-hilbert-sought-20210525/); [Crossref, Annals 197 (2023)](https://api.crossref.org/works/10.4007/annals.2023.197.1.5); [Dasgupta's home page](https://sites.math.duke.edu/~dasgupta/); [arXiv 2310.16399](https://arxiv.org/abs/2310.16399); [arXiv 2311.04110](https://arxiv.org/abs/2311.04110); [arXiv 2609.21892](https://arxiv.org/abs/2609.21892).

*Fact-check: corrected (complex multiplication does not generate the maximal abelian extension of a general CM field; Brumer–Stark away from 2 was a separate paper; arXiv number for the complex cubic work added).*

### Kummer–Vandiver conjecture

**What it asks.** The class number $h$ of the cyclotomic field $\mathbb{Q}(\zeta_p)$ measures how far its ring of integers is from unique factorization. It splits as $h = h^+ h^-$, where $h^+$ is the class number of the real subfield $\mathbb{Q}(\zeta_p + \zeta_p^{-1})$. The factor $h^-$ is governed by Bernoulli numbers and is well understood. The conjecture says that the prime $p$ never divides $h^+$.

Precisely: for every prime $p$, $p \nmid h^+$, the class number of the maximal real subfield $\mathbb{Q}(\zeta_p + \zeta_p^{-1})$ of $\mathbb{Q}(\zeta_p)$.

**Posed.** Ernst Kummer, in letters to Kronecker of 28 December 1849 and 24 April 1853. Philipp Furtwängler and Harry Vandiver rediscovered it around 1920.

**Where it stands.** Open. Hart, Harvey and Ong verified it for all $p < 2^{31}$ ("Irregular primes to two billion", Math. Comp. 86 (2017)). Kummer showed that if $p \mid h^+$ then also $p \mid h^-$, so the conjecture holds for regular primes, those with $p \nmid h$. Kurihara (1992) showed that it is equivalent to the vanishing of the algebraic K-groups $K_{4n}(\mathbb{Z})$. The heuristics disagree: Washington's argument suggests about $(\log\log x)/2$ exceptions below $x$, while Schoof's computations and Mihăilescu's refined heuristic favour the conjecture.

The recent partial results work with the eigenspaces $A_p(\omega^i)$ of the $p$-part of the class group of $\mathbb{Q}(\zeta_p)$; the conjecture concerns the even ones. Chen, Cummins, Eltschig, Grubisic and 17 co-authors, "Almost all primes are partially regular" ([arXiv 2602.05090](https://arxiv.org/abs/2602.05090), February 2026, 21 authors in all), prove that for a density-one set of primes $p$ the even eigenspaces $A_p(\omega^{2k})$ vanish for all $2 \le 2k \le \sqrt p/(\log p)^\alpha$. The theorem was formalized in Lean/Mathlib by AxiomProver. X. Guo and Z. Tao ([arXiv 2609.13932](https://arxiv.org/abs/2609.13932), 12 September 2026) prove that two blocks of eigenspaces vanish, for $d \in \lbrace 4, 6 \rbrace$, for a relative density-one set of primes $p \equiv d + 1 \pmod{2d}$. Both papers are preprints, not refereed. A. Stolin claimed a proof ([arXiv 2001.09702](https://arxiv.org/abs/2001.09702), 2020); it has no journal version and has not been recognized. Wikipedia lists the conjecture as open, and 2026 papers treat it as open.

**Smallest open case.** Computationally, every prime above $2^{31}$ is untested. On the theoretical side, the even eigenspaces $A_p(\omega^{2k})$ with $2k$ beyond $\sqrt p/(\log p)^\alpha$ are open even for a density-one set of primes, and the vanishing of all of them for such a set would be the next milestone.

**Why it is hard.** The plus part $h^+$ is hard to compute and, unlike $h^-$, is not controlled by Bernoulli numbers. Iwasawa theory handles the minus part far better than the plus part. And any counterexamples are, by the heuristics, so rare that computation cannot decide the question.

**Sources.** [Wikipedia](https://en.wikipedia.org/wiki/Kummer%E2%80%93Vandiver_conjecture) ([raw text](https://en.wikipedia.org/w/index.php?title=Kummer%E2%80%93Vandiver_conjecture&action=raw)); [arXiv 2602.05090](https://arxiv.org/abs/2602.05090); [arXiv 2609.13932](https://arxiv.org/abs/2609.13932); [arXiv 2001.09702](https://arxiv.org/abs/2001.09702).

*Fact-check: confirmed.*

### Leopoldt's conjecture

**What it asks.** Dirichlet's unit theorem says that the units of a number field $K$ form, up to roots of unity, a free abelian group of rank $r_1 + r_2 - 1$. For $\mathbb{Q}(\sqrt2)$ the units are $\pm(1+\sqrt2)^m$ and the rank is $2 + 0 - 1 = 1$. Leopoldt asked what happens to this rank when the units are viewed $p$-adically. The conjecture says that nothing is lost: independent units stay independent over $\mathbb{Z}_p$.

Precisely: for every number field $K$ and every prime $p$, the $p$-adic regulator of $K$ is nonzero. Equivalently, embed a finite-index subgroup $E_1$ of the global units diagonally into the product of the principal local units at the primes above $p$; the closure of $E_1$ then has $\mathbb{Z}_p$-rank $r_1 + r_2 - 1$.

**Posed.** Heinrich-Wolfgang Leopoldt, 1962.

**Where it stands.** Open. It is proved when $K$ is abelian over $\mathbb{Q}$ or over an imaginary quadratic field: Ax (1965) reduced it to a $p$-adic Baker theorem, which Brumer proved (1967). Bertrandias and Payan (1972) verified it for some specific non-abelian fields, per the Encyclopedia of Mathematics. Colmez (1988) showed that for totally real fields it is equivalent to the $p$-adic Dedekind zeta function having a simple pole at $s = 1$. Mihăilescu announced proofs for CM fields (arXiv 2009 and 2011, and arXiv 1403.7331 in 2014); Wikipedia calls these announcements only, and lists the conjecture as open.

Recent partial work: Maksoud ([arXiv 2201.08203](https://arxiv.org/abs/2201.08203); Documenta Math. 28 (2023), 1441–1471) generalized Waldschmidt's bound on the Leopoldt defect. Ferri and Johnston (Res. Number Theory 12 (2026), no. 32; [arXiv 2301.05700](https://arxiv.org/abs/2301.05700)) show that for any finite set of primes $P$ there are infinitely many totally real $S_3$-extensions of $\mathbb{Q}$ that satisfy Leopoldt at every $p \in P$. Barrera Salazar, Graham and Williams ([arXiv 2603.18961](https://arxiv.org/abs/2603.18961)) concern a different "non-abelian Leopoldt" statement.

**Smallest open case.** Non-abelian fields of small degree. For totally real $S_3$-extensions of $\mathbb{Q}$, Ferri–Johnston give infinitely many that satisfy the conjecture at any chosen finite set of primes, but no proof for every such field at every prime. CM fields are covered only by Mihăilescu's unconfirmed announcements.

**Why it is hard.** It is a $p$-adic transcendence statement: a determinant of $p$-adic logarithms of units must not vanish. In the abelian case the regulator factors, through characters, into linear forms in $p$-adic logarithms, which Baker-type theory handles. In general the determinant is a polynomial of higher degree in $p$-adic logarithms, and that needs $p$-adic algebraic independence of Schanuel type, which is far out of reach.

**Sources.** [Wikipedia](https://en.wikipedia.org/wiki/Leopoldt%27s_conjecture) ([raw text](https://en.wikipedia.org/w/index.php?title=Leopoldt%27s_conjecture&action=raw)); [Encyclopedia of Mathematics](https://encyclopediaofmath.org/wiki/Leopoldt_conjecture); [arXiv 2301.05700](https://arxiv.org/abs/2301.05700); [arXiv 2201.08203](https://arxiv.org/abs/2201.08203).

*Fact-check: confirmed.*

### Serre's Conjecture II

**What it asks.** Some fields have small Galois cohomology: their cohomological dimension is at most 2. Totally imaginary number fields, $p$-adic fields and function fields of complex surfaces are examples. For a linear algebraic group $G$ over such a field $F$, the set $H^1(F, G)$ classifies $G$-torsors, varieties that look like $G$ over the algebraic closure but may have no $F$-point. Serre predicted that for simply connected semisimple groups there are no nontrivial torsors at all.

Precisely: if $F$ is a perfect field of cohomological dimension at most 2 and $G$ is a semisimple, simply connected linear algebraic group over $F$, then $H^1(F, G)$ is trivial, so every $G$-torsor over $F$ has a rational point. Serre later extended the statement to imperfect fields of degree of imperfection at most 1.

**Posed.** Jean-Pierre Serre, 1962 (Colloque de Bruxelles, "Conjecture II", p. 65, as cited by Nguyen in 2026).

**Where it stands.** Partially solved. It holds for $p$-adic fields and for totally imaginary number fields, more generally global fields without real places (the Kneser–Harder–Chernousov Hasse principle; Bruhat–Tits), and for global function fields (Harder 1975). It holds for classical groups without triality (Bayer-Fluckiger and Parimala, Invent. Math. 122 (1995), 195–229), with type $\mathrm{SL}_n$ coming from Merkurjev–Suslin. Gille (Compositio 125 (2001)) proved it for quasi-split groups over perfect fields, excluding $E_8$. De Jong, He and Starr proved it for function fields of complex surfaces ([arXiv 0809.5224](https://arxiv.org/abs/0809.5224), 2008).

More recent cases: fields of meromorphic functions on Stein surfaces (Benoist, [arXiv 2410.16809](https://arxiv.org/abs/2410.16809), 2024); complete discretely valued fields of dimension 2 (Gille, Izquierdo, Lucchini Arteche, [arXiv 2501.01403](https://arxiv.org/abs/2501.01403), January 2025); function fields of one variable over perfect PAC fields, under hypotheses on roots of unity (Starr, [arXiv 1704.02932](https://arxiv.org/abs/1704.02932)). Izquierdo and Lucchini Arteche (Adv. Math. 480 (2025); [arXiv 2308.00903](https://arxiv.org/abs/2308.00903)) show that the conjecture in characteristic 0 implies it in positive characteristic. Nguyen ([arXiv 2603.08061](https://arxiv.org/abs/2603.08061), March 2026) proves it equivalent to a pseudo-reductive version. Except for the Adv. Math. paper, the survey records no journal version for these results, so treat them as preprints that are not refereed.

The standard references are Gille's survey (Dev. Math. 18 (2010), 41–56) and his monograph (LNM 2238, 2019). Per the zbMATH review of the monograph, the conjecture holds for classical groups, $G_2$ and $F_4$, and for quasi-split groups with no $E_8$ factor; it is open for groups of type $E_6$, $E_7$, $E_8$ and for trialitarian $D_4$. No general proof was found as of September 2026. One sentence in the Wikipedia article claims it is proved for all groups over all perfect fields; that contradicts the rest of the article and should not be relied on.

**Smallest open case.** Not a single case: the open types are $E_6$, $E_7$, $E_8$ and trialitarian $D_4$. For $E_6$, $E_7$ and trialitarian $D_4$ the quasi-split groups are done, so the open part is the other forms; for $E_8$, Gille's quasi-split result does not apply either.

**Why it is hard.** For exceptional groups, and $E_8$ above all, there are no good cohomological invariants beyond the Rost invariant, and no convenient model in linear algebra of the kind the classical groups have. Proving that torsors are trivial needs new ideas, either in Galois cohomology or in the geometry of rational curves on homogeneous spaces.

**Sources.** [Wikipedia (raw text)](https://en.wikipedia.org/w/index.php?title=Serre%27s_conjecture_II&action=raw); [arXiv 2603.08061](https://arxiv.org/abs/2603.08061) ([HTML](https://arxiv.org/html/2603.08061v1)); [arXiv 0809.5224](https://arxiv.org/abs/0809.5224); [arXiv 2410.16809](https://arxiv.org/abs/2410.16809); [DOI 10.1007/bf01231443](https://doi.org/10.1007/bf01231443); [DOI 10.1007/978-1-4419-6211-9_3](https://doi.org/10.1007/978-1-4419-6211-9_3); [zbMATH review of Gille's monograph](https://api.zbmath.org/v1/document/_search?search_string=ti%3A%22dimension%20cohomologique%22%20au%3AGille%20py%3A2019); [arXiv 2501.01403](https://arxiv.org/abs/2501.01403); [arXiv 2308.00903](https://arxiv.org/abs/2308.00903); [arXiv 1704.02932](https://arxiv.org/abs/1704.02932).

*Fact-check: corrected ($E_6$, $E_7$ and trialitarian $D_4$ are open in the standard literature, not only $E_8$; "number fields" narrowed to totally imaginary ones; two results added).*

## Recently settled

The last three entries below come from the fact-checker's list of missed problems. They carry a resolved status, so they are filed here rather than among the open problems.

### The Mathieu group $M_{23}$ as a Galois group over $\mathbb{Q}$

**What it asked.** $M_{23}$ is a sporadic simple group of order 10,200,960. Is there a polynomial with rational coefficients whose splitting field has Galois group $M_{23}$? After the other 25 sporadic groups were realized by the rigidity method during 1984–1989 (Thompson, Matzat, Hoyden-Siedersleben, Hunt, Malle, Pahlings and others; the Baby Monster was completed later, after a calculation error), $M_{23}$ was the one sporadic case of the inverse Galois problem left open.

**How it was settled.** Xiaoyu Huang, Blake Jackson, Kyu-Hwan Lee, Bjorn Poonen, Rachel Pries and Shaowu Zhang, "The Mathieu group M23 is a Galois group over Q" (paper dated 8 August 2026; arXiv 2608.08538, 9 August 2026). They give an explicit polynomial of degree 23 whose splitting field has group $M_{23}$ and is unramified outside $\lbrace 2, 3, 23 \rbrace$, certified in Magma. They also prove that a regular $M_{23}$-extension of $\mathbb{Q}(t)$ exists (their Theorem 1.3). $M_{23}$ has no rational rigid triple, so they used the non-rigid triple $(2A, 23A, 23B)$ with branch locus $\lbrace 0, \pm\sqrt{-23} \rbrace$ and computed the covers numerically, with the algorithm of Klug, Musty, Schiavone, Sijsling and Voight. There are exactly seven covers, with quotient curves of genus 4. $\mathrm{Gal}(\overline{\mathbb{Q}}/\mathbb{Q})$ unexpectedly fixes one of them, and the authors say they cannot explain this conceptually. Earlier attempts reached $M_{23}$ only over $\mathbb{Q}(\sqrt{-23})$ (Hoyden-Siedersleben 1985), over $\mathbb{Q}(\sqrt{-7})$ (Häfner's 1987 Diplomarbeit) and over a quartic field (Elkies, ANTS X, 2013). Granboulan (1996) had a regular $M_{23}$-extension over any field where a certain conic has a point, but that conic has no rational point. As of 30 September 2026 this is a preprint, not refereed; the claim is a finite computation that a machine can check. UConn announced it on 12 August 2026.

**Sources.** [arXiv 2608.08538](https://arxiv.org/abs/2608.08538); [Poonen's copy (PDF)](https://math.mit.edu/~poonen/papers/M23.pdf); [UConn announcement](https://math.uconn.edu/2026/08/12/kyu-hwan-lee-and-collaborators-solve-outstanding-problem-in-galois-theory/).

*Fact-check: confirmed.*

### Van der Waerden's conjecture on Galois groups of random integer polynomials

**What it asked.** Pick a monic integer polynomial $x^n + a_1x^{n-1} + \dots + a_n$ with all $|a_i| \le H$. Its Galois group is almost always the full $S_n$. Van der Waerden (1936) conjectured how rare the exceptions are: their number $E_n(H)$ is $O(H^{n-1})$. That cannot be improved, because setting $a_n = 0$ already gives $\gg H^{n-1}$ polynomials divisible by $x$, hence reducible.

**How it was settled.** Manjul Bhargava proved it for all $n$ ([arXiv 2111.06507](https://arxiv.org/abs/2111.06507), November 2021; v3 of 28 September 2024), published in Annals of Math. 201(2) (2025), 339–377, online 12 March 2025. Before that the optimal bound was known only for $n \le 4$ (van der Waerden; Chow–Dietmann). The earlier general bounds went from van der Waerden's own through Knobloch (1956), Gallagher's large sieve bound $O(H^{n-1/2+\varepsilon})$ (1973), Zywina (2010), Dietmann's $O(H^{n-2+\sqrt2})$ and Anderson–Gafni–Lemke Oliver–Lowry-Duda–Shakan–Zhang (2021). Bhargava reduces the problem to primitive groups $G \ne S_n$, which have index at least 2, and bounds their counts through that index, the same index that appears in Malle's conjecture. Sieves based on Hilbert irreducibility had stalled near $H^{n-1/2}$.

**Sources.** [arXiv 2111.06507](https://arxiv.org/abs/2111.06507); [Project Euclid](https://projecteuclid.org/journals/annals-of-mathematics/volume-201/issue-2/Galois-groups-of-random-integer-polynomials-and-van-der-Waerdens/10.4007/annals.2025.201.2.1.short); [Annals of Mathematics](https://annals.math.princeton.edu/2025/201-2/p01).

*Fact-check: confirmed.*

### Schinzel–Zassenhaus conjecture

**What it asked.** The "house" of an algebraic integer $\alpha$ is the largest absolute value among its conjugates. If $\alpha$ is not zero and not a root of unity, the house is greater than 1, but by how much? The number $2^{1/n}$ has degree $n$ (Eisenstein's criterion applies to $x^n - 2$) and house $2^{1/n} \approx 1 + (\log 2)/n$, so the gap can be as small as a constant over $n$. Schinzel and Zassenhaus (1965) conjectured that it is never smaller: there is $c > 0$ with $\mathrm{house}(\alpha) \ge 1 + c/n$ for every such $\alpha$ of degree $n$.

**How it was settled.** Vesselin Dimitrov, then at the University of Toronto, "A proof of the Schinzel-Zassenhaus conjecture on polynomials" (arXiv 1912.12545, posted 28 December 2019). He proves $\mathrm{house}(\alpha) \ge 2^{1/(4n)}$, roughly $1 + (\log 2)/(4n)$. In polynomial form: if $P \in \mathbb{Z}[X]$ has degree $n$ and $P(0) = 1$, then either $P$ is a product of cyclotomic polynomials or it has a complex root with $|z| \le 2^{-1/(4n)}$. The idea is to build from the polynomial a power series with integer coefficients (a square root of a product of powers of the roots); integrality forces its Hankel determinants to be large, which forces some root to be large. Quanta covered it in May 2020 and quoted an expert saying the needed tools had been available for at least 40 years. Neither the researcher nor the fact-checker found a journal version through Crossref, so as far as this survey can tell the proof is a preprint, not refereed. Lehmer's conjecture, which implies this one, is still open (see above).

**Sources.** [arXiv 1912.12545](https://arxiv.org/abs/1912.12545); [Quanta, May 2020](https://www.quantamagazine.org/new-math-measures-the-repulsive-force-within-polynomials-20200514/).

*Fact-check: confirmed.*

### Hilbert's tenth problem for rings of integers of number fields (Denef–Lipshitz conjecture)

**What it asked.** Over $\mathbb{Z}$ there is no algorithm that decides whether a polynomial equation has a solution (the Matiyasevich–Robinson–Davis–Putnam negative answer to Hilbert's tenth problem). Is the same true over the ring of integers $\mathcal{O}_K$ of every number field $K$? Denef and Lipshitz (J. London Math. Soc. (2) 18, 1978) conjectured that $\mathbb{Z}$ is Diophantine over every $\mathcal{O}_K$, which would give a negative answer. Earlier work covered two families: abelian $K$ (Denef–Lipshitz, Shapiro–Shlapentokh), which takes in the Gaussian integers $\mathbb{Z}[i]$, and $K$ with exactly one pair of complex embeddings (Pheidas, Shlapentokh).

**How it was settled.** Negatively, in two independent preprints that are not refereed. Koymans and Pagano (arXiv 2412.01768, December 2024, v3 November 2025) prove the negative answer for every infinite ring finitely generated over $\mathbb{Z}$, with elliptic curves that have full rational 2-torsion and no rank growth in suitable quadratic extensions, combining additive combinatorics with 2-descent. Alpöge, Bhargava, Ho and Shnidman (arXiv 2501.18774, January 2025) prove the ring-of-integers case through abelian varieties of positive rank with no rank growth in quadratic extensions. Koymans and Pagano also wrote an expository account (arXiv 2602.04468, 2026, submitted to Notices AMS). Wikipedia still calls both claimed proofs, and no journal versions were found. The question over $\mathbb{Q}$ is still open (see Further problems suggested by the fact-checker).

**Sources.** [arXiv 2412.01768](https://arxiv.org/abs/2412.01768); [arXiv 2501.18774](https://arxiv.org/abs/2501.18774); [arXiv 2602.04468](https://arxiv.org/abs/2602.04468); [Wikipedia (raw text)](https://en.wikipedia.org/w/index.php?title=Hilbert%27s_tenth_problem&action=raw); [Crossref, Denef–Lipshitz 1978](https://api.crossref.org/works/10.1112/jlms/s2-18.3.385).

*Fact-check: found by the fact-checker with sources; not re-checked by a second reader.*

### Brumer–Stark conjecture

**What it asked.** Let $H/F$ be an abelian extension with $F$ totally real and $H$ a CM field. From the partial zeta functions at $s = 0$ one builds a Stickelberger element $\theta$; let $W$ be the number of roots of unity in $H$. The conjecture says that $W\theta$ kills the class group of $H$ in an explicit way: for every fractional ideal $\mathfrak{a}$ of $H$, $\mathfrak{a}^{W\theta} = (\varepsilon)$ for an "anti-unit" $\varepsilon$, and $H(\varepsilon^{1/W})/F$ is abelian.

**How it was settled.** Armand Brumer (the annihilation part) and Harold Stark (the abelian condition) formulated it; John Tate first stated it in print (Séminaire de Théorie des Nombres de Bordeaux, 1980–81). Earlier cases: $H$ abelian over $\mathbb{Q}$, quadratic extensions (Tate), biquadratic extensions (Sands 1984); the function-field analogue by Deligne–Tate (1984) and Hayes (1985). Dasgupta and Kakde proved it away from 2 (arXiv 2010.00657; Annals of Math. 197 (2023), 289–388), using Ribet's method with group-ring-valued Hilbert modular forms. Dasgupta, Kakde, Silliman and Wang posted a full proof over $\mathbb{Z}$ (arXiv 2310.16399, October 2023). No journal version was found as of September 2026, so the 2-part rests on a preprint that is not refereed. These results feed the Dasgupta–Kakde answer to Hilbert's twelfth problem for totally real fields.

**Sources.** [Wikipedia (raw text)](https://en.wikipedia.org/w/index.php?title=Brumer%E2%80%93Stark_conjecture&action=raw); [Crossref, Annals 197 (2023)](https://api.crossref.org/works/10.4007/annals.2023.197.1.5); [arXiv 2310.16399](https://arxiv.org/abs/2310.16399).

*Fact-check: found by the fact-checker with sources; not re-checked by a second reader.*

### Irrationality of $L(2, \chi_{-3})$

**What it asked.** Is

$$
L(2, \chi_{-3}) = 1 - \frac{1}{2^2} + \frac{1}{4^2} - \frac{1}{5^2} + \frac{1}{7^2} - \cdots
$$

irrational? Here $\chi_{-3}$ is the non-trivial character mod 3: the terms skip multiples of 3 and alternate in sign. The stronger question is whether $1$, $\zeta(2)$ and $L(2, \chi_{-3})$ are linearly independent over $\mathbb{Q}$. It belongs to the old question of the irrationality of Dirichlet $L$-values at $s = 2$, whose best-known case, Catalan's constant $L(2, \chi_{-4})$, is still open. The survey found no single proposer.

**How it was settled.** Calegari, Dimitrov and Tang (arXiv 2408.15403, August 2024) proved the stronger statement: $1$, $\zeta(2)$ and $L(2, \chi_{-3})$ are linearly independent over $\mathbb{Q}$. They apply a new "arithmetic holonomy bound" to a construction of Zagier; follow-up work (arXiv 2510.04156, October 2025) derives effective Diophantine approximation results. No journal publication was confirmed, so both papers count here as preprints, not refereed. The irrationality of Catalan's constant and of $\zeta(5)$ remains open.

**Sources.** [arXiv 2408.15403](https://arxiv.org/abs/2408.15403); [arXiv 2510.04156](https://arxiv.org/abs/2510.04156).

*Fact-check: found by the fact-checker with sources; not re-checked by a second reader.*

## Further problems suggested by the fact-checker

The fact-checker found these open or partly solved problems, with sources, while checking the list above; no second reader has re-checked them.

- **Hilbert's tenth problem over $\mathbb{Q}$.** Is there an algorithm that decides whether a polynomial equation with rational coefficients has a rational solution? Open: Koenigsmann (Annals 183 (2016)) showed that $\mathbb{Z}$ is universally definable in $\mathbb{Q}$, but the standard method needs an existential definition, which Mazur's conjecture on the real topology of rational points would rule out. [Wikipedia (raw text)](https://en.wikipedia.org/w/index.php?title=Hilbert%27s_tenth_problem&action=raw); [Crossref, Koenigsmann 2016](https://api.crossref.org/works/10.4007/annals.2016.183.1.2).
- **Cohen–Lenstra heuristics** (Cohen and Lenstra, 1984). For odd $p$, the $p$-part of the class group of an imaginary quadratic field should equal a given finite abelian $p$-group $A$ with probability proportional to $1/|\mathrm{Aut}(A)|$. Partially solved: over $\mathbb{Q}$ the only odd case known is average 3-torsion (Davenport–Heilbronn 1971), $p = 2$ is understood through Fouvry–Klüners and A. Smith, and for $p \ge 5$ not even the average size of $p$-torsion is known; over $\mathbb{F}_q(t)$, Landesman and Levy computed all the moments for groups of odd order once $q$ is large. [arXiv 2410.22210](https://arxiv.org/abs/2410.22210).
- **Greenberg's conjecture** (Greenberg, 1976). For a totally real field and the cyclotomic $\mathbb{Z}_p$-extension, the Iwasawa invariants $\lambda$ and $\mu$ vanish, so the $p$-part of the class number stays bounded up the tower. Open: verified for many fields and primes, with $\mu = 0$ known for abelian fields over $\mathbb{Q}$ (Ferrero–Washington). [Wikipedia (raw text)](https://en.wikipedia.org/w/index.php?title=Greenberg%27s_conjectures&action=raw).
- **Infinitely many real quadratic fields with class number one** (Gauss, *Disquisitiones*, art. 304, 1801). Are there infinitely many squarefree $d > 1$ for which the ring of integers of $\mathbb{Q}(\sqrt d)$ has unique factorization? Open, although Cohen–Lenstra predicts that about 75.45% of the fields $\mathbb{Q}(\sqrt p)$, $p$ prime, have class number 1; for imaginary quadratic fields, class number one was settled by Heegner (1952), Baker (1966) and Stark (1967). [Wikipedia (raw text)](https://en.wikipedia.org/w/index.php?title=Class_number_problem&action=raw).
- **Massey vanishing conjecture** (Mináč and Tân, 2013–2014). For every field $F$, prime $p$ and $n \ge 3$, a defined $n$-fold Massey product of classes in $H^1(F, \mathbb{Z}/p)$ contains 0. Partially solved: $n = 3$ for all fields and all $p$; $n = 4$, $p = 2$ for all fields (Merkurjev–Scavia); all $n$ over number fields (Harpaz–Wittenberg, Duke Math. J. 172 (2023)); the strong version fails (Merkurjev–Scavia, Compositio 161 (2025)); $n \ge 5$ is open for general fields, and so, as far as the fact-checker knows, is $n = 4$ with $p$ odd. [arXiv 2301.09290](https://arxiv.org/abs/2301.09290).
- **Grunwald problem for finite groups** (Grunwald 1933, corrected by Wang 1948). Take a number field $K$, a finite group $G$, and at finitely many places $v$ a Galois extension of the completion $K_v$ whose group embeds in $G$. Is there a Galois extension of $K$ with group $G$ that has those completions? Wang's counterexample shows the answer can be no; the modern conjecture is that the Brauer–Manin obstruction is the only obstruction, and that there is none when the places avoid those dividing $|G|$. Partially solved: known for abelian groups (the Grunwald–Wang theorem) and, up to the Brauer–Manin obstruction, for supersolvable groups (Harpaz–Wittenberg); Demeio (arXiv 2604.18099, April 2026, unrefereed) claims all solvable groups; non-solvable groups are open. [arXiv 2604.18099](https://arxiv.org/abs/2604.18099).

## Related problems outside algebra

These two came up in this survey but belong to analysis and to Diophantine approximation, not to algebra.

**Sendov's conjecture: solved in 2026, unrefereed.** If all zeros of a complex polynomial $p$ of degree $n \ge 2$ lie in the closed unit disk, then every zero of $p$ is within distance 1 of a zero of $p'$. Blagovest Sendov posed it in 1958 or 1959 (Wikipedia says 1959; the fact-checker could not confirm the 1958 date attributed to the 2026 papers); Hayman's 1967 problem book misattributed it to Ljubomir Iliev. Lech Mazur's "A computer-assisted proof of Sendov's conjecture", dated 5 August 2026, says the mathematics was developed with OpenAI's GPT-5.6 Pro, certifies the finite part by exact rational arithmetic for $5 \le m \le 499$, and formalizes the exact statement in Lean 4. Terence Tao's post of 12 August 2026 streamlined it into an elementary argument (Möbius transformations, Maclaurin's inequality), proved the stronger Phelps–Rodriguez conjecture as well, and reports that the Lean formalization shrank from about 90,000 lines to about 15,000. Before that it was known for $n \le 8$ (Brown–Xiang, 1999), for large $n$ (Tao, arXiv 2012.04125; Acta Math. 229 (2022)) and for $n \ge 10^{200000}$ (T. Zhang, arXiv 2609.20256, submitted 28 July 2026). Follow-ups: S. An reduced the computer assistance (arXiv 2609.04246), and Zhang proved a quadratic strengthening (arXiv 2609.19126). The critic found no arXiv paper by Mazur himself, and nothing here is refereed. A caution nearby: a Lean 4 disproof of Smale's mean value conjecture, found in September 2026 by a pre-release model during an Epoch AI evaluation, says in its README that no human mathematician has checked it; Jatar and Ng (arXiv 2608.27047) still treat that conjecture as open. Sources: [Wikipedia](https://en.wikipedia.org/wiki/Sendov%27s_conjecture) ([raw text](https://en.wikipedia.org/w/index.php?title=Sendov%27s_conjecture&action=raw)); [Tao's post](https://terrytao.wordpress.com/2026/08/12/a-digestion-of-the-proof-of-sendovs-conjecture/); [Mazur's proof (PDF)](https://www.proofatlas.ai/papers/sendov-conjecture/SENDOV_CONJECTURE_PROOF_AUGUST_5_2026.pdf); [arXiv 2609.20256](https://arxiv.org/abs/2609.20256); [arXiv 2609.04246](https://arxiv.org/abs/2609.04246); [arXiv 2609.19126](https://arxiv.org/abs/2609.19126); [mean value problem repository](https://github.com/tadamcz/mean-value-problem); [arXiv 2608.27047](https://arxiv.org/abs/2608.27047).

*Fact-check: confirmed.*

**Littlewood conjecture: open.** For all real $\alpha, \beta$, $\liminf_{n\to\infty} n \Vert n\alpha \Vert \Vert n\beta \Vert = 0$, where $\Vert x \Vert$ is the distance to the nearest integer (Littlewood, about 1930). Gallagher (1962) proved it for almost every pair, and Einsiedler, Katok and Lindenstrauss (Annals 164 (2006)) showed the counterexamples have Hausdorff dimension 0. A uniform variant introduced by Bandi, Fregoli and Kleinbock (arXiv 2504.02258, April 2025) was disproved by Schleischitz (arXiv 2603.12611; the critic could not confirm its date), with a residual set of counterexamples; Shulga (arXiv 2608.25059) showed that set has dimension at least 3/2. These are preprints, not refereed. Sources: [Wikipedia (raw text)](https://en.wikipedia.org/w/index.php?title=Littlewood_conjecture&action=raw); [arXiv 2603.12611](https://arxiv.org/abs/2603.12611); [arXiv 2608.25059](https://arxiv.org/abs/2608.25059); [arXiv 2504.02258](https://arxiv.org/abs/2504.02258).

*Fact-check: found by the fact-checker with sources; the critic confirmed through Shulga's paper that Schleischitz disproved the uniform version, but not the date of Schleischitz's paper.*
