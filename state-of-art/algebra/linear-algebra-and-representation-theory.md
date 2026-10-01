# Linear algebra, matrices and representation theory

State of the art as of 30 September 2026. Not published on the site.

This file covers two neighbouring subjects. One treats matrices as objects in their own right: determinants and permanents, norms and the numerical range, special $\pm1$ matrices such as Hadamard matrices, and the algebraic complexity of computing with matrices. The other is the representation theory of groups, above all the characters and modular (characteristic $p$) representations of finite groups with their "local-global" counting conjectures, together with Kazhdan–Lusztig theory for Weyl groups, Hecke algebras and reductive groups.

The finite-group problems share a method. A statement about all finite groups is reduced, through the classification of finite simple groups, to an "inductive condition" that must then be checked for every simple group; for some groups of Lie type that check has taken years. McKay's conjecture and Brauer's height zero conjecture were settled that way, and the Alperin–McKay, McKay–Navarro and Alperin weight conjectures are somewhere along the same road. Several 2026 results below were found with the help of AI systems (the Crouzeix proofs, the announced Hadamard matrices for the twelve missing orders below 2000, the newest bound on $\omega$, one of the determinantal-complexity bounds), and none of them is refereed yet.

**MSC 2020.** 15-XX (linear and multilinear algebra; matrix theory), especially 15A15 (determinants and permanents), 15A60 (norms and numerical range) and 15B34 (Boolean and Hadamard matrices); 20Cxx (representation theory of groups: 20C15, 20C20, 20C08, 20C30, 20C33); 17B10 (representations of Lie algebras, weights). Related cross-listings: 20G05, 05B20, 05E10, 68Q15 and 68Q17. The codes were checked against the official [MSC2020 CSV](https://msc2020.org/MSC_2020.csv). The subfields, by class:

- 15Axx: determinants, permanents and matrix functions (15A15); matrix norms and the numerical range (15A60).
- 15Bxx: Hadamard and Boolean matrices (15B34); combinatorial matrices (05B20).
- Algebraic complexity of matrix problems: the matrix multiplication exponent, permanent versus determinant, geometric complexity theory (68Q15, 68Q17).
- 20C15: ordinary representations and characters of finite groups (McKay-type counting conjectures).
- 20C20: modular representations and characters, blocks, defect groups, Brauer characters (Alperin weight, Alperin–McKay, Broué, Brauer height zero).
- 20C33: representations of finite groups of Lie type (inductive conditions via the classification).
- 20C30: representations of symmetric groups (James's conjecture, RoCK blocks).
- 20C08 and 05E10: Hecke algebras, Kazhdan–Lusztig theory, combinatorial invariance.
- 20G05 and 17B10: representations of reductive groups and Lie algebras, Lusztig's modular character formula, tilting modules, $p$-canonical bases.

**Standard problem lists.**

- Wikipedia, [List of unsolved problems in mathematics](https://en.wikipedia.org/wiki/List_of_unsolved_problems_in_mathematics): the combinatorics section has the Hadamard and Ryser conjectures, and there are group theory and representation theory sections; the solved section lists Crouzeix (2026). When the survey read it, it still listed the McKay conjecture, now proved, as open.
- R. Brauer, "Representations of finite groups", Lectures on Modern Mathematics vol. I (Wiley, 1963), pp. 133–175: Brauer's problem list (Problem 12 on abelian Sylow subgroups, Problem 20 on $k(B)$, Problem 21, Problem 23 on height zero). No online copy was found; it is described in [Wikipedia's article on Brauer's height zero conjecture](https://en.wikipedia.org/wiki/Brauer%27s_height_zero_conjecture) and used in [arXiv:2310.00134](https://arxiv.org/abs/2310.00134).
- G. Malle, [Local-global conjectures in the representation theory of finite groups](https://arxiv.org/abs/1512.01145) (survey, 2015).
- Z. Feng and J. Zhang, [Alperin weight conjecture and related developments](https://www.worldscientific.com/doi/10.1142/S1664360722300055), Bull. Math. Sci. 12 (2022).
- Epoch AI, [FrontierMath open problems](https://epoch.ai/frontiermath/open-problems/hadamard), which includes the Hadamard order-668 problem, now marked solved.
- I. M. Wanless, [Lieb's permanental dominance conjecture](https://arxiv.org/abs/2202.01867) (survey, 2022).
- F. Zhang, [An update on a few permanent conjectures](https://arxiv.org/abs/1608.02844) (Special Matrices, 2016).

## Open problems

A ★ marks a problem whose statement a reader with undergraduate algebra can follow.

- ★ Is the matrix multiplication exponent $\omega$ equal to 2? Open.
- ★ Valiant's permanent versus determinant conjecture. Open.
- ★ Hadamard conjecture. Open; matrices for every order below 2000 were announced in August 2026 but are not yet in a refereed paper.
- ★ Ryser's circulant Hadamard conjecture. Open.
- ★ Lieb's permanental dominance conjecture. Open.
- ★ Rota's basis conjecture. Open.
- Alperin–McKay conjecture. Partially solved: a theorem for $p=2$.
- McKay–Navarro (Galois–McKay) conjecture. Partially solved: a theorem for $p=2$.
- Alperin's weight conjecture. Open.
- Brauer's $k(B)$-conjecture. Partially solved: a theorem for $p$-solvable groups.
- Broué's abelian defect group conjecture. Open.
- Combinatorial invariance conjecture for Kazhdan–Lusztig polynomials. Partially solved: known for short intervals and some classes of intervals.

### ★ Is the matrix multiplication exponent ω equal to 2?

**What it asks.** The schoolbook rule multiplies two $n\times n$ matrices with $n^3$ multiplications. In 1969 Strassen showed how to multiply two $2\times2$ matrices with 7 multiplications instead of 8. Applied recursively to blocks, that costs about $n^{\log_2 7}\approx n^{2.807}$ operations. No method can go below $n^2$, since it has to read every entry. How close to $n^2$ can one get?

Precisely: let $\omega$ be the infimum of all $\tau$ such that two $n\times n$ complex matrices can be multiplied with $O(n^\tau)$ arithmetic operations. Trivially $2\le\omega\le3$. The question is whether $\omega=2$, that is, whether for every $\varepsilon>0$ the product can be computed with $O(n^{2+\varepsilon})$ operations. An equivalent form uses the dual exponent $\alpha$, the largest $k$ such that multiplying an $n\times n^k$ matrix by an $n^k\times n$ matrix costs $n^{2+o(1)}$ operations: the question becomes whether $\alpha=1$.

**Posed.** Volker Strassen, 1969. The question comes out of his algorithm, which gave $\omega\le\log_2 7$.

**Where it stands.** Open. The upper bound has come down slowly, every step since 1987 by the Coppersmith–Winograd "laser method": 2.3755 (Coppersmith–Winograd 1990), 2.3737 (Stothers 2010), 2.3729 (Vassilevska Williams 2012), 2.3728639 (Le Gall 2014), 2.3728596 (Alman–Vassilevska Williams 2020), 2.371866 (Duan–Wu–Zhou 2022), 2.371552 (Vassilevska Williams–Xu–Xu–Zhou, SODA 2024) and 2.371339 (Alman–Duan–Vassilevska Williams–Xu–Xu–Zhou 2024, arXiv:2404.16349).

The newest bound, $\omega<2.371177$, is in a preprint of 17 August 2026 by Dupont, Eisenberger, Kozlovskii, Mehrabian, Ruiz, See, Zhou, Alman, Vassilevska Williams and Balog (arXiv:2608.16884), not yet refereed. They reformulated the "combination loss" optimisation, solved it at a larger scale with modern machine-learning optimisers, and refined the result with DeepMind's AlphaEvolve. The best peer-reviewed bound on the dual exponent is $\alpha\ge0.321334$ (Vassilevska Williams–Xu–Xu–Zhou).

Nothing beyond $\omega\ge2$ is known from below. The best lower bound on the number of operations is $\Omega(n^2\log n)$ (Raz 2002), and it holds only for arithmetic circuits with bounded coefficients. Searches of arXiv and the web up to 30 September 2026 found nothing newer.

**Smallest open case.** The question is about a single number, so there is no small case to settle. The concrete next steps are to push the upper bound below 2.371177 (and to referee that preprint) and to raise the dual exponent above 0.321334. A lower bound $\omega>2$ is not in sight.

**Why it is hard.** All the improvements since 1987 analyse tensor powers of the Coppersmith–Winograd tensor, and the gains are now in the fourth to sixth decimal place. Ambainis, Filmus and Le Gall (STOC 2015) proved that this route cannot reach $\omega<2.3725$ and that a wide class of variants cannot reach $\omega<2.3078$; Duan, Wu and Zhou got past the first barrier, but only just. Proving $\omega>2$, or even a super-quadratic lower bound, needs strong lower bounds on tensor rank or border rank, and algebraic complexity theory has almost no techniques for those.

**Sources.** [Wikipedia: Computational complexity of matrix multiplication](https://en.wikipedia.org/wiki/Computational_complexity_of_matrix_multiplication) ([raw version checked](https://en.wikipedia.org/w/index.php?title=Computational_complexity_of_matrix_multiplication&action=raw)); [arXiv:2608.16884](https://arxiv.org/abs/2608.16884); [arXiv:2404.16349](https://arxiv.org/abs/2404.16349).

*Fact-check: confirmed.*

### ★ Valiant's permanent versus determinant conjecture

**What it asks.** The permanent is the determinant with every sign replaced by $+$. For $2\times2$ matrices, changing one sign turns one into the other:

$$
\operatorname{per}\begin{pmatrix}a&b\\ c&d\end{pmatrix}=ad+bc=\det\begin{pmatrix}a&-b\\ c&d\end{pmatrix}.
$$

Valiant asked how large a determinant has to be to express the $n\times n$ permanent in this way. Determinants are easy to compute by row reduction, which depends on the signs. If a small determinant could imitate the permanent, the permanent would be easy too.

Precisely: work over a field of characteristic other than 2 and write $\operatorname{per}_n(X)=\sum_{\sigma\in S_n}\prod_i x_{i,\sigma(i)}$. The determinantal complexity $\operatorname{dc}(\operatorname{per}_n)$ is the smallest $m$ such that $\operatorname{per}_n=\det(M)$ for some $m\times m$ matrix $M$ whose entries are affine-linear functions of the $n^2$ variables $x_{ij}$. Valiant conjectured that $\operatorname{dc}(\operatorname{per}_n)$ grows faster than every polynomial in $n$. The algebraic analogue of P ≠ NP is VP ≠ VNP, and a bound $\operatorname{dc}(\operatorname{per}_n)\ge n^{\omega(\log n)}$ (little omega) would imply it, because every polynomial in VP has determinantal complexity $n^{O(\log n)}$. The two statements are not known to be equivalent.

**Posed.** Leslie G. Valiant, 1979.

**Where it stands.** Open, with a wide gap. Grenet's construction gives $\operatorname{dc}(\operatorname{per}_n)\le2^n-1$ (as described by Landsberg and Ressayre, 2015). The best general lower bound is $n^2/2$, proved by Mignon and Ressayre (2004) in characteristic 0 and extended by Cai, Chen and Li (STOC 2008) to every characteristic other than 2. Note that $n^2/2$ is only linear in the number of variables. Over $\mathbb R$, Yabe proved $(n-1)^2+1$. The exact value is known for $n=3$: $\operatorname{dc}(\operatorname{per}_3)=7$ (Alper, Bogart and Velasco, Found. Comput. Math. 17, 2017).

Landsberg and Ressayre (arXiv 2015; Differential Geom. Appl. 55, 2017) proved that Grenet's representation is optimal among those that respect about half of the symmetry group of the permanent, which gives an exponential lower bound under that symmetry assumption. Bürgisser, Ikenmeyer and Panova (FOCS 2016; J. Amer. Math. Soc. 32, 2019) showed that "occurrence obstructions" from geometric complexity theory cannot separate the padded permanent from the determinant. In a restricted model, Limaye, Srinivasan and Tavenas (FOCS 2021; J. ACM 72(4), 2025) proved the first superpolynomial lower bounds against constant-depth algebraic circuits.

In 2026 there was progress on a nearby question, though not on the permanent. Until then no explicit $n$-variate polynomial had a determinantal-complexity lower bound superlinear in $\max(n,\text{degree})$; Kumar and Volk had $1.5n-3$ (arXiv:2009.02452; Computational Complexity 31, 2022). On 11 June 2026 K. Sheshadri posted an AI-assisted proof that the border determinantal complexity of the power sum $\sum_i x_i^n$ is at least $(n-1)^2/(4e)$ (arXiv:2606.13628). On 28 September 2026 Kumar and Volk posted a short proof of their own of an $\Omega(n^2)$ lower bound for $\operatorname{dc}(\sum_{i=1}^n x_i^n)$ over $\mathbb C$ (arXiv:2609.34462), and said they could not verify Sheshadri's argument. Both are preprints. For the permanent the best bound is still $n^2/2$.

**Smallest open case.** Improve the quadratic lower bound for the permanent. The modest step is to bring the bound over $\mathbb C$ from $n^2/2$ up to something like Yabe's real bound $(n-1)^2+1$; the real target is any bound $\operatorname{dc}(\operatorname{per}_n)\ge n^{2+\varepsilon}$. Exact values stop at $n=3$ in the survey data.

**Why it is hard.** A proof has to rule out every affine projection of every polynomial-size determinant, so it needs lower bounds for general algebraic computation, where current methods barely reach quadratic bounds. Geometric complexity theory turns the question into multiplicities from representation theory (plethysm and Kronecker coefficients). These are hard to compute (computing Kronecker coefficients is #P-hard), and the simplest kind of obstruction is now known not to be enough.

**Sources.** [arXiv:1508.05788](https://arxiv.org/abs/1508.05788) (Landsberg–Ressayre); [arXiv:2009.02452](https://arxiv.org/abs/2009.02452) (Kumar–Volk); [arXiv:2609.34462](https://arxiv.org/abs/2609.34462) (Kumar–Volk, 2026); [arXiv:2606.13628](https://arxiv.org/abs/2606.13628) (Sheshadri); [arXiv:1504.00151](https://arxiv.org/abs/1504.00151) (Yabe); [doi:10.1145/3734215](https://doi.org/10.1145/3734215) (Limaye–Srinivasan–Tavenas); [Wikipedia: Arithmetic circuit complexity](https://en.wikipedia.org/wiki/Arithmetic_circuit_complexity).

*Fact-check: corrected (2026 power-sum bounds added; the link to VP ≠ VNP is one-way; Kumar–Volk's journal given instead of an unconfirmed CCC 2021).*

### ★ Hadamard conjecture

**What it asks.** A Hadamard matrix is a square matrix of $+1$s and $-1$s whose rows are pairwise orthogonal. The smallest examples, and the doubling step that builds bigger ones:

$$
H_2=\begin{pmatrix}1&1\\ 1&-1\end{pmatrix},\qquad
H_4=\begin{pmatrix}H_2&H_2\\ H_2&-H_2\end{pmatrix}.
$$

Any two rows of $H_4$ agree in two places and differ in two, so their dot product is 0. Doubling again and again gives every power of 2; this is Sylvester's construction of 1867. An elementary argument shows that the order must be 1, 2 or a multiple of 4. The conjecture says that every multiple of 4 occurs.

Precisely: a Hadamard matrix of order $n$ is an $n\times n$ matrix $H$ with entries $\pm1$ and $HH^T=nI$. The conjecture is that one exists of order $4k$ for every positive integer $k$.

**Posed.** Implicit in J. Hadamard's 1893 work on maximal determinants. It is usually attributed to R. E. A. C. Paley (1933), though others had considered it before him.

**Where it stands.** Open in general. Sylvester (1867) and Paley (1933) gave the first constructions. Baumert, Golomb and Hall found order 92 in 1962, and Kharaghani and Tayfeh-Rezaie found order 428 in 2005, after which 668 was the smallest unknown order. In 2014 Đoković, Golubitsky and Kotsireas listed twelve open multiples of 4 below 2000: 668, 716, 892, 1132, 1244, 1388, 1436, 1676, 1772, 1916, 1948 and 1964.

On 12 August 2026 Levent Alpöge, Philippe Voinov and Saul Reynolds-Haertle, working with Anthropic's model Claude, announced on X explicit Hadamard matrices for all twelve orders. The matrices are public: OEIS A007299 links a copy of the order-668 matrix and a folder with the others. Others have checked them, which is easy because $HH^T=nI$ is exact integer arithmetic: Ion Nechita reported checking them with a short Python program on 13 August, and vibemathed.com reports reproducing all twelve in exact integer arithmetic. Epoch AI's FrontierMath page marks the problem solved, provisionally crediting the AI, and MathWorld and Wikipedia record the construction. There is no refereed paper as of 30 September 2026, and a preprint by Kulhandjian (arXiv:2609.25543, 22 September 2026) still calls 668 the smallest open order.

So every multiple of 4 below 2000 now has a Hadamard matrix, and the conjecture for all $4k$ is still unproved. John D. Cook's blog post of 13 August 2026 says order 2004 is not yet known, but that is wrong: 2003 is prime and $2003\equiv3\pmod 4$, so Paley's 1933 construction, which gives order $q+1$ for every prime power $q\equiv3\pmod4$, already produces a Hadamard matrix of order 2004. The next open order has to be read off the Đoković–Golubitsky–Kotsireas tables, which the survey did not consult.

**Smallest open case.** For the general conjecture, the smallest multiple of 4 above 2000 with no known construction; the survey did not identify it (2004 is not a candidate, see above). Order 668 is answered by public, independently checked matrices, but not yet in a refereed paper.

**Why it is hard.** Each known construction (Sylvester, Paley, Williamson-type and others) covers orders with a particular number-theoretic structure, and none covers every multiple of 4. There are $2^{n^2}$ sign matrices of order $n$, so computer search gets nowhere without a strong structural ansatz. And the only known necessary condition is $4\mid n$, so there is no nonexistence theory to push against.

**Sources.** [Wikipedia: Hadamard matrix](https://en.wikipedia.org/wiki/Hadamard_matrix) ([raw version checked](https://en.wikipedia.org/w/index.php?title=Hadamard_matrix&action=raw)); [OEIS A007299](https://oeis.org/A007299); [Ion Nechita, "New Hadamard matrices", 13 August 2026](https://ion.nechita.net/posts/new-hadamard-matrices/); [vibemathed.com, order 668](https://vibemathed.com/problem/hadamard-matrix-of-order-668); [Epoch AI, FrontierMath: Hadamard](https://epoch.ai/frontiermath/open-problems/hadamard); [MathWorld: Hadamard matrix](https://mathworld.wolfram.com/HadamardMatrix.html); [Kulhandjian, arXiv:2609.25543](https://arxiv.org/abs/2609.25543); [John D. Cook, 13 August 2026](https://www.johndcook.com/blog/2026/08/13/constructing-hadamard-matrices/).

*Fact-check: corrected (the matrices are public and independently checked; order 2004 follows from Paley's construction, so it is not open).*

### ★ Ryser's circulant Hadamard conjecture

**What it asks.** A matrix is circulant if each row is the previous row shifted one place to the right, with the last entry wrapping round to the front. This circulant matrix is a Hadamard matrix of order 4:

$$
\begin{pmatrix}
1&1&1&-1\\
-1&1&1&1\\
1&-1&1&1\\
1&1&-1&1
\end{pmatrix}
$$

Any two of its rows have dot product 0. Ryser conjectured that apart from orders 1 and 4 there are no circulant Hadamard matrices at all.

Precisely: there is no circulant $n\times n$ matrix $H$ with entries $\pm1$ and $HH^T=nI$ for $n>4$. For a circulant matrix, the dot product of the first row with row $k+1$ is the periodic autocorrelation of the first row at shift $k$. So an equivalent form says that no $\pm1$ sequence of length $n>4$ has all its nontrivial periodic autocorrelations equal to 0. Another says that no cyclic group of order $4u^2$ with $u>1$ contains a Menon–Hadamard difference set.

**Posed.** Herbert J. Ryser, 1963.

**Where it stands.** Open. Turyn showed in 1965 that a counterexample must have order $n=4u^2$ with $u$ odd and not a prime power. Arithmetic methods have removed most candidates since then: B. Schmidt's field descent (J. Amer. Math. Soc., 1999), refinements by Leung and Schmidt (2012) and their anti-field-descent method (2016). Borwein and Mossinghoff (2014) left 1,371 values $u\le10^{13}$ not eliminated. Leung and Schmidt removed 423 of them, but the smallest survivor is still $u=11715$, which is order 548,964,900. Brooke Logan and Mossinghoff (2017) extended the search to $u\le10^{15}$ and left 4,489 orders not excluded. Steinerberger (2024) proposed a stronger "quantitative Ryser conjecture".

Arithmetic tests alone cannot settle existence. Several arXiv preprints claim full proofs, for example J. Morris, arXiv:2302.08346 (February 2023, a four-page first version with no journal reference). None has a refereed publication, and Wikipedia (September 2026) still lists the problem as open. Domic and Gallardo (arXiv:2509.00619, a 2025 preprint) give only new sufficient conditions.

**Smallest open case.** $u=11715$, that is, order $n=4\cdot11715^2=548{,}964{,}900$, the smallest order that no known test rules out.

**Why it is hard.** A circulant Hadamard matrix amounts to a $\pm1$ polynomial whose absolute value is exactly $\sqrt n$ at every $n$-th root of unity. Algebraic number theory puts constraints on the cyclotomic integers involved (self-conjugacy, field descent), and these rule out orders one arithmetic case at a time; no argument yet covers every $u$. Menon–Hadamard difference sets do exist in other abelian groups, so a proof has to use cyclicity in an essential way.

**Sources.** [Wikipedia: Ryser's conjecture on circulant Hadamard matrices](https://en.wikipedia.org/wiki/Ryser%27s_conjecture_on_circulant_Hadamard_matrices) ([raw version checked](https://en.wikipedia.org/w/index.php?title=Ryser%27s_conjecture_on_circulant_Hadamard_matrices&action=raw)); [arXiv:2302.08346](https://arxiv.org/abs/2302.08346) (Morris); [arXiv:2509.00619](https://arxiv.org/abs/2509.00619) (Domic–Gallardo); [arXiv:2402.13202](https://arxiv.org/abs/2402.13202).

*Fact-check: confirmed.*

### ★ Lieb's permanental dominance conjecture

**What it asks.** Take a positive semidefinite Hermitian $2\times2$ matrix

$$
A=\begin{pmatrix}a&b\\ \bar b&c\end{pmatrix},\qquad a,c\ge0,\quad ac\ge|b|^2 .
$$

Then $\det A=ac-|b|^2$ and $\operatorname{per}A=ac+|b|^2$, so $\det A\le\operatorname{per}A$. Between the determinant and the permanent sit other matrix functions, which weight each permutation by a character value instead of a sign. Lieb conjectured that on positive semidefinite matrices the permanent is the largest of them all, once each is normalised.

Precisely: let $A$ be an $n\times n$ positive semidefinite Hermitian matrix, $H$ a subgroup of $S_n$ and $\chi$ an irreducible character of $H$, and set

$$
d_\chi(A)=\sum_{\sigma\in H}\chi(\sigma)\prod_{i=1}^n a_{i,\sigma(i)} .
$$

Taking $H=S_n$ and $\chi=\operatorname{sign}$ gives $\det A$. The conjecture is that $d_\chi(A)/\chi(1)\le\operatorname{per}(A)$. The case $H=S_n$ concerns the immanants $d_\lambda$, one for each partition $\lambda$ of $n$, and already says that the permanent is the largest normalised immanant on positive semidefinite matrices.

**Posed.** Elliott H. Lieb, "Proofs of some conjectures on permanents", J. Math. Mech. 16, 1966.

**Where it stands.** Open. Wanless's 2022 survey (in *The Physics and Mathematics of Elliott Lieb*, EMS Press) describes it as having resisted every attack for more than half a century. Soules proposed the stronger "permanent-on-top" conjecture in his 1966 UCSB dissertation as a way in. Shchesnovich disproved it with a rank-2, $5\times5$ counterexample (Linear Algebra Appl. 490, 2016), which closed that route. F. Zhang's 2016 survey also records that the Bapat–Sunder conjecture was settled negatively.

For immanants, T. H. Pate proved the inequality for every partition with $n\le13$ (Proc. London Math. Soc. (3) 76 (1998) 307–358). That left $(4,4,3,3)$ at $n=14$, and $(5,4,3,3)$ and $(3^5)$ at $n=15$. Two 2026 preprints, neither refereed, go further. Yinjie Li (arXiv:2609.13412, 11 September 2026) claims those three cases, so that immanant dominance would hold for all $n\le15$; the certificates are checked in exact arithmetic, and the order-14 case also in Lean. Siwei Zeng (arXiv:2608.21749, 22 August 2026) claims the full subgroup version for $n=4$, with a Lean 4 formalization; before that it was known only for $n\le3$.

**Smallest open case.** For the full conjecture (all subgroups, all characters): $n=5$ if Zeng's preprint is right, otherwise $n=4$. For immanants: $n=16$ if Li's preprint is right, otherwise the three partitions $(4,4,3,3)$, $(5,4,3,3)$ and $(3^5)$.

**Why it is hard.** The inequality has to hold for every subgroup of $S_n$ and every irreducible character, and the natural monotonicity strategy, permanent-on-top, is false. The proofs that exist are positivity arguments in tensor spaces or group algebras, adapted partition by partition, so they don't yet scale to all $n$.

**Sources.** [arXiv:2202.01867](https://arxiv.org/abs/2202.01867) (Wanless survey); [arXiv:2609.13412](https://arxiv.org/abs/2609.13412) (Li); [arXiv:2608.21749](https://arxiv.org/abs/2608.21749) (Zeng).

*Fact-check: corrected (Pate's paper for $n\le13$ is from 1998, in Proc. London Math. Soc., not 1999).*

### ★ Rota's basis conjecture

**What it asks.** Write $n$ bases of an $n$-dimensional vector space as the rows of an $n\times n$ grid. Can the entries of each row be reordered so that every column is also a basis? In $\mathbb R^2$, take $B_1=\lbrace e_1,e_2\rbrace$ and $B_2=\lbrace 2e_1,e_1+e_2\rbrace$:

$$
\begin{pmatrix}e_1&e_2\\ 2e_1&e_1+e_2\end{pmatrix}\ \text{fails},\qquad
\begin{pmatrix}e_1&e_2\\ e_1+e_2&2e_1\end{pmatrix}\ \text{works}.
$$

In the first grid the first column, $e_1$ and $2e_1$, is dependent. Once the two entries of the second row are swapped, both columns are bases. Rota conjectured that a good arrangement always exists.

Precisely: let $V$ be an $n$-dimensional vector space, or more generally a rank-$n$ matroid, and let $B_1,\dots,B_n$ be $n$ bases, disjoint as multisets. Then the $n^2$ elements can be placed in an $n\times n$ grid so that row $i$ consists of the elements of $B_i$ and every column is a basis. A column of such a grid is called a transversal basis: a basis with one element from each $B_i$.

**Posed.** Gian-Carlo Rota, 1989; first published in Huang and Rota, Discrete Math. 128, 1994.

**Where it stands.** Open. Chan proved it for $n\le3$ (1995), and Geelen and Humphries for paving matroids (2006). For vector spaces over a field of characteristic 0 and even $n$, it follows from the Alon–Tarsi conjecture on Latin squares; that implication is due to Huang and Rota (1994), and Onn (Amer. Math. Monthly 104, 1997) gave the colourful determinantal identity behind it. Alon–Tarsi is known for even $n=p\pm1$ with $p$ prime (Glynn did $p-1$ in 2010), so over $\mathbb R$ the basis conjecture holds for infinitely many $n$.

The asymptotic results come from several directions. Dong and Geelen found $n/(6\lceil\log n\rceil)$ disjoint transversal bases, and Bucić, Kwan, Pokrovskiy and Sudakov (arXiv, 2018) found $(1/2-o(1))n$. Pokrovskiy (arXiv, 2020) found $n-o(n)$ disjoint rainbow independent sets, each of size $n-o(n)$. Sauermann (arXiv, 2022) proved the conjecture with probability $1-o(1)$ when the bases are chosen uniformly among all bases of $\mathbb F_q^n$, or among bases with entries from a fixed finite set $S\subseteq F$. Montgomery and Sauermann (arXiv preprint, August 2025) found $(1-o(1))n$ disjoint transversal bases and a covering by $(1+o(1))n$ transversal bases, improving the covering bounds $2n$ (Aharoni–Berger) and $2n-2$ (Polymath). Arndt, Moseley, Pruhs, Swamy and Zlatin (arXiv:2604.03735, April 2026, preprint) gave a fully polynomial-time randomised approximation scheme (FPRAS) that makes the Montgomery–Sauermann result constructive and extends it to arbitrary matroids. Nobody has found a proof or a counterexample as of September 2026.

**Smallest open case.** The survey data records proofs only for $n\le3$, for paving matroids, and, in characteristic 0, for even $n$ of the form $p\pm1$. The first uncovered cases are therefore $n=4$ for general matroids (and for vector spaces over fields of positive characteristic), and $n=5$ for real vector spaces, the first odd $n$ above 3, which the Alon–Tarsi route cannot reach.

**Why it is hard.** The statement asks for a perfect decomposition, and absorption and probabilistic methods give only asymptotic versions. The algebraic routes, through Alon–Tarsi and determinant and permanent identities for Latin-square sign counts, work only in characteristic 0 and only for some $n$.

**Sources.** [Wikipedia: Rota's basis conjecture](https://en.wikipedia.org/w/index.php?title=Rota%27s_basis_conjecture&action=raw); [arXiv:1709.00075](https://arxiv.org/abs/1709.00075); [arXiv:1810.07462](https://arxiv.org/abs/1810.07462); [arXiv:2008.06045](https://arxiv.org/abs/2008.06045) (Pokrovskiy); [arXiv:2203.17121](https://arxiv.org/abs/2203.17121) (Sauermann); [arXiv:2508.05601](https://arxiv.org/abs/2508.05601) (Montgomery–Sauermann); [arXiv:2604.03735](https://arxiv.org/abs/2604.03735) (Arndt et al.); [arXiv search for recent papers](https://arxiv.org/search/?query=%22Rota%27s+basis+conjecture%22&searchtype=all&order=-announced_date_first&size=25).

*Fact-check: corrected (Pokrovskiy's and Sauermann's results stated precisely; the Alon–Tarsi implication credited to Huang and Rota).*

### Alperin–McKay conjecture

**What it asks.** McKay's theorem (see "Recently settled") says that the number of irreducible characters of a finite group $G$ of degree prime to $p$ equals the same number for the normaliser of a Sylow $p$-subgroup. Alperin–McKay asks for this equality block by block.

The irreducible characters of $G$ fall into $p$-blocks. Each block $B$ has a defect group $D$, a $p$-subgroup of $G$, and every character $\chi$ in $B$ satisfies $\nu_p(\chi(1))\ge\nu_p(|G:D|)$; $\chi$ has height zero when equality holds. Each block also has a Brauer correspondent $b$, a block of $N_G(D)$. A small case: in $S_3$ with $p=2$, the principal block holds the trivial and sign characters and has defect group $C_2$, which is its own normaliser. Both sides have two characters of height zero.

Precisely: for a $p$-block $B$ of $G$ with defect group $D$ and Brauer correspondent $b$ in $N_G(D)$, the blocks $B$ and $b$ have the same number of irreducible complex characters of height zero. Summing over the blocks of maximal defect gives McKay's theorem.

**Posed.** J. L. Alperin, "The main problem of block theory", from the Park City conference of 1975 (published 1976).

**Where it stands.** Partially solved: a theorem for $p=2$, open for every odd prime. Späth (J. reine angew. Math., 2013) reduced the conjecture to an "inductive Alperin–McKay condition" on finite simple groups. Lucas Ruhstorfer completed that condition for $p=2$ by handling the quasi-isolated 2-blocks of exceptional groups of Lie type (arXiv:2204.06373, 2022), published as "The Alperin–McKay and Brauer's height zero conjecture for the prime 2", Annals of Math. 201(2) (2025). For odd primes the inductive condition is known for various families, among them alternating groups and groups of Lie type in defining characteristic, but not for all simple groups. The non-blockwise version, McKay's conjecture, was proved by Cabanes and Späth (Annals, 2026).

**Smallest open case.** $p=3$, the smallest odd prime. The survey data does not say which simple groups still lack the inductive condition at odd primes, so no single family can be named below that level.

**Why it is hard.** For every quasi-simple group and every odd prime one needs character bijections that are compatible at once with blocks, with automorphisms and with central extensions. For groups of Lie type this involves Lusztig series, Bonnafé–Rouquier-type Morita equivalences and delicate extendibility questions (for instance in type D). Those took Cabanes and Späth years even for the coarser McKay statement.

**Sources.** [arXiv:2204.06373](https://arxiv.org/abs/2204.06373) (Ruhstorfer); [doi:10.4007/annals.2025.201.2.2](https://doi.org/10.4007/annals.2025.201.2.2); [doi:10.1515/crelle.2012.035](https://doi.org/10.1515/crelle.2012.035) (Späth's reduction); [arXiv:2307.14730](https://arxiv.org/abs/2307.14730); [Wikipedia: Brauer's height zero conjecture](https://en.wikipedia.org/wiki/Brauer%27s_height_zero_conjecture); [Wikipedia: McKay conjecture](https://en.wikipedia.org/wiki/McKay_conjecture).

*Fact-check: confirmed.*

### McKay–Navarro (Galois–McKay) conjecture

**What it asks.** McKay's theorem matches two sets of characters by size. Navarro asks for a matching that also respects some Galois symmetry. Character values are sums of roots of unity, so Galois automorphisms of cyclotomic fields permute the irreducible characters. Navarro singles out a group $\mathcal H$ of such automorphisms and conjectures that it acts in the same way on both sides of McKay's equality. If true, the character table of $G$ would detect properties of a Sylow $p$-subgroup, such as its exponent in some cases.

Precisely: let $P$ be a Sylow $p$-subgroup of $G$, and let $\mathcal H$ be the group of Galois automorphisms $\sigma$ of the cyclotomic numbers for which there is an integer $e\ge0$ with $\sigma(\xi)=\xi^{p^e}$ for every root of unity $\xi$ of order prime to $p$. The conjecture says that $\mathcal H$ acts compatibly on $\operatorname{Irr}_{p'}(G)$ and $\operatorname{Irr}_{p'}(N_G(P))$, the irreducible characters of degree prime to $p$. In particular, for each $\sigma\in\mathcal H$ the two sets contain the same number of $\sigma$-fixed characters.

**Posed.** Gabriel Navarro, "The McKay conjecture and Galois automorphisms", Annals of Math. 160 (2004) 1129–1140.

**Where it stands.** Partially solved: a theorem for $p=2$, open for odd primes. Navarro, Späth and Vallejo (Trans. Amer. Math. Soc. 373 (2020) 6157–6183) reduced it to an inductive condition on simple groups. Ruhstorfer and Schaeffer Fry proved the case $p=2$ ("The McKay–Navarro conjecture for the prime 2", arXiv:2211.14237; Adv. Math. 477 (2025) 110369). They also proved, for all primes, the original Galois refinement of Isaacs and Navarro (2002), an important subcase, in a preprint (arXiv:2509.02300, September 2025) that Crossref does not list as published.

For odd primes, Ruhstorfer, Schaeffer Fry, Späth and Taylor collect the tools, construct the required equivariant bijection for quasi-simple groups of Lie type A, and prove the inductive conditions for unipotent characters. Their paper was published as "Towards the inductive McKay–Navarro condition for groups of Lie type", Math. Z. 313(3) (July 2026) (arXiv:2506.17123). Shi Chen (arXiv:2609.33507, 27 September 2026, preprint) reduces the blockwise Alperin–McKay–Navarro conjecture to simple groups.

**Smallest open case.** Odd primes, starting with $p=3$. For groups of Lie type, the published work covers the bijection in type A and the unipotent characters; the other types, and the non-unipotent characters, come next.

**Why it is hard.** The equivariant McKay bijections of Cabanes and Späth have to be made compatible with Galois actions as well, for every quasi-simple group. Galois actions on characters of groups of Lie type (on Harish-Chandra induced and cuspidal characters, for example) are subtle, and the extendibility and rationality information this needs is not available uniformly.

**Sources.** [arXiv:2211.14237](https://arxiv.org/abs/2211.14237); [arXiv:2509.02300](https://arxiv.org/abs/2509.02300); [arXiv:2506.17123](https://arxiv.org/abs/2506.17123); [doi:10.1007/s00209-026-04040-5](https://doi.org/10.1007/s00209-026-04040-5) (Math. Z.); [doi:10.1090/tran/8111](https://doi.org/10.1090/tran/8111) (Navarro–Späth–Vallejo).

*Fact-check: corrected (the Ruhstorfer–Schaeffer Fry–Späth–Taylor paper is now published in Math. Z.).*

### Alperin's weight conjecture

**What it asks.** It predicts a global number from local data. The global number is the count of irreducible representations of $G$ in characteristic $p$ (irreducible Brauer characters), which equals the number of conjugacy classes of elements of order prime to $p$. The local data are "weights", built from $p$-subgroups and their normalisers.

A small case: $G=S_3$, $p=3$. The elements of order prime to 3 form two classes, the identity and the transpositions, so there are two irreducible Brauer characters. For the weights, take $Q=1$ first: $N_G(Q)/Q=S_3$ has no irreducible character of degree divisible by 3, so there is no weight. For $Q=C_3$, the quotient $N_G(Q)/Q\cong C_2$ has order prime to 3, so both of its characters have defect zero and give two weights. Two equals two.

Precisely: a $p$-weight of $G$ is a pair $(Q,\varphi)$, taken up to $G$-conjugacy, where $Q$ is a $p$-subgroup of $G$ and $\varphi$ is an irreducible character of $N_G(Q)/Q$ of $p$-defect zero, meaning that the $p$-part of $\varphi(1)$ equals the $p$-part of $|N_G(Q)/Q|$. The conjecture says that the number of $p$-weights equals the number of irreducible Brauer characters of $G$. The blockwise form states the equality for each $p$-block separately.

**Posed.** J. L. Alperin, "Weights for finite groups", Proc. Sympos. Pure Math. 47, from the 1986 Arcata conference (published 1987).

**Where it stands.** Open. Navarro and Tiep reduced the non-blockwise version to simple groups (Invent. Math. 184 (2011) 529–565), and Späth the blockwise version (J. Group Theory 16, 2013). The full conjecture follows once an "inductive blockwise Alperin weight condition" holds for every simple group. Known cases include symmetric and general linear groups (Alperin–Fong, J. Algebra 131 (1990) 2–22) and many families of simple groups; Malle (J. Algebra 397 (2014) 190–208) treats groups with abelian Sylow subgroups. Feng, Malle and Zhang (arXiv:2505.22064, 2025, preprint) introduced "generic weights" as a step toward the inductive condition for groups of Lie type at most good primes. Baoyu Zhang (arXiv:2609.24774, 21 September 2026, preprint) claims the inductive blockwise condition for every finite simple group of type B or C at every prime.

Refinements are moving too. Feng, Fu and Zhou (arXiv:2312.02594) reduce Navarro's Galois version of the weight conjecture to simple groups and prove it for groups with abelian Sylow 2-subgroups. The paper appears to have been published as "A reduction theorem for the Galois Alperin weight conjecture" (Trans. Amer. Math. Soc., online 22 July 2026); the match is inferred from authors and topic. The same authors treat the blockwise Galois version via $\mathcal H$-triples (arXiv:2512.15243), and Du, Huang and Zhang prove the blockwise Galois version for double covers of symmetric and alternating groups (arXiv:2509.13673); both are preprints. Martínez, Rizo and Rossi (Algebra & Number Theory 20 (2026) 333–382) reduce Navarro's conjecture that unifies the weight conjecture with the Glauberman correspondence. No full proof has been claimed as of September 2026.

**Smallest open case.** Not identifiable from the survey data. It does not list which simple groups still lack the inductive condition; the current work is on groups of Lie type in non-defining characteristic, with types B and C claimed in Zhang's September 2026 preprint.

**Why it is hard.** The reduction needs, for every finite quasi-simple group, a bijection between Brauer characters and weights that respects automorphisms and blocks. For groups of Lie type in non-defining characteristic this needs detailed control of Harish-Chandra and $e$-Harish-Chandra series, Jordan decomposition and decomposition matrices, and the decomposition matrices are not fully known. Weights are also harder to get at than ordinary characters.

**Sources.** [arXiv:2312.02594](https://arxiv.org/abs/2312.02594) (Feng–Fu–Zhou); [doi:10.1090/tran/9882](https://doi.org/10.1090/tran/9882); [arXiv:2311.05536](https://arxiv.org/abs/2311.05536); [arXiv:2505.22064](https://arxiv.org/abs/2505.22064) (Feng–Malle–Zhang); [arXiv:2609.24774](https://arxiv.org/abs/2609.24774) (Zhang); [doi:10.1007/s00222-010-0295-2](https://doi.org/10.1007/s00222-010-0295-2) (Navarro–Tiep).

*Fact-check: corrected (Feng–Fu–Zhou is about the Galois version and appears published in Trans. AMS; Martínez–Rizo–Rossi restated; 2025–2026 preprints added).*

### Brauer's k(B)-conjecture

**What it asks.** A $p$-block cannot contain more irreducible characters than its defect group has elements. In $S_3$ with $p=2$, the principal block has the trivial and sign characters and defect group $C_2$: $2\le2$. With $p=3$, all three characters of $S_3$ lie in one block with defect group $C_3$: $3\le3$. When $G$ is itself a $p$-group there is one block, with $D=G$, and the statement says that $G$ has at most $|G|$ conjugacy classes.

Precisely: for a $p$-block $B$ of a finite group $G$ with defect group $D$, the number $k(B)=|\operatorname{Irr}(B)|$ of complex irreducible characters in $B$ is at most $|D|$.

**Posed.** Richard Brauer, 1946 (announced in Proc. Natl. Acad. Sci. USA 32, according to Wikipedia). It is Problem 20 of his 1963 list.

**Where it stands.** Partially solved: proved for $p$-solvable groups, open in general. For $p$-solvable groups Nagao (1962) showed it is equivalent to the $k(GV)$-problem. Robinson and Thompson (1996) solved that problem except for finitely many primes, and Gluck, Magaard, Riese and Schmid finished it (J. Algebra 279, 2004). Sambale (arXiv, 2017) extended this to $\pi$-blocks of $\pi$-separable groups. The conjecture is also known for many small or abelian defect groups, through Sambale's series "Cartan matrices and Brauer's k(B)-Conjecture" I–V (the fifth with Ardito, 2019). Malle (arXiv, 2017) showed that blocks of quasi-simple groups are not minimal counterexamples when $p\ge5$ or when the defect group is abelian. arXiv searches through September 2026 found no general proof or counterexample. Wikipedia files its article under conjectures that have been proved, but the article text says only that the $p$-solvable case is proved.

**Smallest open case.** Blocks of quasi-simple groups with nonabelian defect groups for $p=2$ and $p=3$, which Malle's result does not cover. Settling them would not finish the conjecture, since no reduction theorem to quasi-simple groups exists.

**Why it is hard.** There is no reduction to quasi-simple groups as complete as the ones for the McKay and Alperin–McKay conjectures. Bounding $k(B)$ needs global information about all the characters in a block, while the defect group is a local invariant.

**Sources.** [Wikipedia: Brauer's k(B) conjecture](https://en.wikipedia.org/w/index.php?title=Brauer%27s_k(B)_conjecture&action=raw); [arXiv:1709.05068](https://arxiv.org/abs/1709.05068); [arXiv:1706.09572](https://arxiv.org/abs/1706.09572); [arXiv:1911.10710](https://arxiv.org/abs/1911.10710); [doi:10.1016/j.jalgebra.2004.02.027](https://doi.org/10.1016/j.jalgebra.2004.02.027) (Gluck–Magaard–Riese–Schmid); [doi:10.1006/jabr.1996.0304](https://doi.org/10.1006/jabr.1996.0304); [zbMATH search for "On Brauer's k(B)-problem"](https://zbmath.org/?q=ti%3A%22On+Brauer%27s+k%28B%29-problem%22).

*Fact-check: confirmed.*

### Broué's abelian defect group conjecture

**What it asks.** The counting conjectures above say that a block $B$ of $G$ and its Brauer correspondent $b$ in $N_G(D)$ share certain numbers. Broué proposed a structural reason when the defect group $D$ is abelian: the two block algebras should have equivalent derived categories, the categories built from chain complexes of their modules. Such an equivalence would explain many of the numerical coincidences at once, including perfect isometries and equal numbers of characters.

Precisely: let $B$ be a $p$-block of $G$, with coefficients in a complete discrete valuation ring, whose defect group $D$ is abelian, and let $b$ be its Brauer correspondent in $N_G(D)$. The conjecture says that $B$ and $b$ have equivalent derived categories; the stronger form asks for a splendid Rickard equivalence.

**Posed.** Michel Broué, "Isométries parfaites, types de blocs, catégories dérivées", Astérisque 181–182, from the Luminy conference of May 1988 (published 1990).

**Where it stands.** Open in general, known in many cases. Blocks with cyclic defect groups follow from Rickard (J. Pure Appl. Algebra 61, 1989) and Rouquier (1998, splendid version). Chuang and Rouquier did the symmetric groups (Annals of Math. 167, 2008, through $\mathfrak{sl}_2$-categorification), building on Chuang and Kessar's proof for RoCK blocks, and also treat $GL_n(q)$ in non-defining characteristic. Kessar and Linckelmann proposed a refined version over arbitrary $p$-modular systems. According to Du and Huang, the conjecture is known for cyclic and Klein-four defect groups, alternating groups, $SL_n(q)$ and $GL_n(q)$ in defining characteristic, unipotent blocks of $GL_n(q)$, certain $p$-nilpotent and $p$-solvable cases, and symmetric groups.

Two recent preprints add cases. Du and Huang (arXiv:2510.02147, version 6 of 25 August 2026, revised after a referee report) prove the refined conjecture for RoCK blocks of double covers of symmetric and alternating groups, building on Kleshchev and Livesey. Zhou and Zhang (arXiv:2604.09974, April 2026) classify 2-blocks with abelian defect group and inertial quotient of prime order and verify the conjecture for them. No general proof has been claimed as of September 2026.

**Smallest open case.** Not identifiable from the survey data.

**Why it is hard.** It is a statement about module categories, so comparing numbers of characters cannot prove it. An equivalence has to be built, for example as an explicit tilting complex, and each known construction (Brauer trees, categorification, RoCK blocks) belongs to one family of groups. The survey found no general reduction to simple groups like the ones behind the counting conjectures.

**Sources.** [arXiv:2510.02147](https://arxiv.org/html/2510.02147) (Du–Huang; [abstract page](https://arxiv.org/abs/2510.02147)); [arXiv:2604.09974](https://arxiv.org/abs/2604.09974) (Zhou–Zhang); [doi:10.4007/annals.2008.167.245](https://doi.org/10.4007/annals.2008.167.245) (Chuang–Rouquier); [Broué, Astérisque 181–182 on Numdam](http://www.numdam.org/item/?id=AST_1990__181-182__61_0).

*Fact-check: confirmed.*

### Combinatorial invariance conjecture for Kazhdan–Lusztig polynomials

**What it asks.** In a Coxeter group $W$, such as a symmetric group, the Bruhat order is a partial order on the elements. Each pair $u\le v$ has a Kazhdan–Lusztig polynomial $P_{u,v}(q)$, defined through the Hecke algebra of $W$ by a recursion that uses the whole group. The conjecture says that $P_{u,v}$ depends only on the shape of the interval $[u,v]$ as a partially ordered set. In $S_3$, for example, the interval from the identity to $s_1s_2$ consists of $e$, $s_1$, $s_2$ and $s_1s_2$, arranged as a diamond, and $P_{e,s_1s_2}=1$. The conjecture predicts that every interval of that shape, in any Coxeter group, has the same polynomial. For intervals this short that is already known (every interval of length at most 2 has polynomial 1); the open cases are long intervals.

Precisely: if the Bruhat intervals $[u,v]\subset W$ and $[u',v']\subset W'$ are isomorphic as posets, then $P_{u,v}(q)=P_{u',v'}(q)$.

**Posed.** George Lusztig (around 1983, unpublished) and, independently, Matthew Dyer in his PhD thesis (1987).

**Where it stands.** Partially solved: proved for several classes of intervals, open in general, even for symmetric groups. The older results cover lower intervals $[e,v]$ in any Coxeter group (Brenti, Caselli and Marietti, Adv. Math. 202, 2006), intervals of length at most 4 (Dyer), and intervals of length at most 8 in symmetric groups (Incitti, 2006–07).

Work with DeepMind (Davies et al., Nature 600, 2021; Blundell, Buesing, Davies, Veličković and Williamson, Represent. Theory 26, 2022) used machine learning to arrive at "hypercube decompositions" and a conjectural formula for $S_n$. Barkley and Gaetz used these to prove invariance of R-polynomials for elementary intervals in $S_n$ (Math. Ann. 392, 2025), showed that the conjecture is equivalent to its parabolic analogues (Selecta Math. 31, 2025), and proved the BBDVW conjecture for lower intervals (IMRN 2026(4)).

Preprints from 2025 and 2026 push the length bounds. Barkley, Gaetz and Lam (arXiv:2601.07793, January 2026) prove that the coefficient of $q$ is combinatorially invariant in every Coxeter group, which gives the conjecture for all intervals of length at most 6; they also settle the Gabber–Joseph conjecture on a second-highest Ext group between Verma modules. Esposito, Marietti and Stella (arXiv:2509.16433) prove invariance of the $\widetilde R$-polynomials of Weyl groups modulo $q^7$ (type A modulo $q^8$). Their first version (19 September 2025) gave the conjecture for intervals of length at most 8 in Weyl groups and 10 in type A; the second (17 September 2026) reaches length 10 in Weyl groups and 12 in type A. Caselli and Marietti (arXiv:2606.11776, June 2026) characterise the special matchings of all type-A Bruhat intervals and prove Brenti's 2003 conjecture. None of these preprints is refereed yet.

**Smallest open case.** If the preprints hold: intervals of length 13 in symmetric groups, length 11 in Weyl groups of other types, and length 7 in arbitrary Coxeter groups. With refereed results only: length 9 in symmetric groups and length 5 in general.

**Why it is hard.** Kazhdan–Lusztig polynomials come from a recursion in the Hecke algebra that uses the ambient group, and their geometric meaning (local intersection cohomology of Schubert varieties) also depends on the embedding. No formula is known that reads $P_{u,v}$ off the abstract poset $[u,v]$. The coefficients also grow quickly and are hard to control beyond the first few.

**Sources.** [arXiv:2601.07793](https://arxiv.org/abs/2601.07793) (Barkley–Gaetz–Lam); [arXiv:2509.16433](https://arxiv.org/abs/2509.16433) (Esposito–Marietti–Stella); [arXiv:2303.15577](https://arxiv.org/abs/2303.15577); [arXiv:2412.10256](https://arxiv.org/abs/2412.10256); [arXiv:2606.11776](https://arxiv.org/abs/2606.11776) (Caselli–Marietti).

*Fact-check: corrected (Esposito–Marietti–Stella's bounds for Weyl groups and type A added, and Barkley–Gaetz in IMRN).*

## Recently settled

### Crouzeix's conjecture (scalar version)

**What it asked.** The numerical range of a complex square matrix $A$ is the set $W(A)=\lbrace x^{\ast}Ax:\lVert x\rVert=1\rbrace$, which contains the eigenvalues. Crouzeix conjectured that for every polynomial $p$, and more generally every function holomorphic on a neighbourhood of $W(A)$,

$$
\lVert p(A)\rVert\le2\max_{z\in W(A)}|p(z)|,
$$

with the spectral norm on the left; in other words, $W(A)$ is a 2-spectral set. The constant 2 is sharp. For the $2\times2$ matrix $A$ with rows $(0,2)$ and $(0,0)$, $W(A)$ is the closed unit disk and $\lVert A\rVert=2$, so $p(z)=z$ gives equality. Crouzeix posed it in 2004.

**How it was settled.** Earlier bounds had the constant 11.08 (Crouzeix 2007) and then $1+\sqrt2$ (Crouzeix and Palencia, SIAM J. Matrix Anal. Appl., 2017); Malman, Mashreghi, O'Loughlin and Ransford (2024) improved it in a way that depends on the dimension. In the summer of 2026 several independent proofs appeared, all preprints; as of 30 September 2026 there is no journal version.

Shanmu Jin, a neurosurgery resident and postdoc at Peking Union Medical College Hospital, posted "The Numerical Range Is a 2-Spectral Set" on Preprints.org (202607.1919) on 27 July 2026, with version 4 on 7 August. The key theorem came out of an autonomous run of OpenAI's GPT-5.6 Sol. In a SIAM News essay of 15 August 2026, Townsend and Greenbaum report that they and Crouzeix checked the proof and believe it correct, and Jin's repository includes a Lean formalization. Emiel Lorist and Felix Schwenninger independently posted "A solution to Crouzeix's conjecture" (arXiv:2608.03841, 4 August 2026, version 2 on 17 August), a short proof that combines the double-layer potential approach with a perturbation lemma for 2-dilations; they say GPT-5.6 was used to explore proof strategies. Badea, O'Loughlin and Virtanen (arXiv:2609.03637) cite a third independent proof, by Q. Luo (Preprints.org 202608.1661), and prove the related Clouâtre–Ostermann–Ransford conjecture. Crouzeix and Greenbaum have already used the result to update their 2019 work (arXiv:2609.22460). These two papers are preprints too.

The complete version (matrix-valued, completely bounded) is still open. Åhag, Czyż and Virtanen (arXiv:2608.27346, preprint) settle it only for matrices of order at most 3, and $1+\sqrt2$ remains the best universal bound there.

**Sources.** [Wikipedia: Crouzeix's conjecture](https://en.wikipedia.org/wiki/Crouzeix%27s_conjecture) ([raw version checked](https://en.wikipedia.org/w/index.php?title=Crouzeix%27s_conjecture&action=raw)); [arXiv:2608.03841](https://arxiv.org/abs/2608.03841) (Lorist–Schwenninger); [Townsend, SIAM News essay (PDF)](https://alextownsend.net/essays/SIAMNews_CrouzeixConjecture.pdf); [doi:10.20944/preprints202607.1919.v4](https://doi.org/10.20944/preprints202607.1919.v4) (Jin); [arXiv:2609.03637](https://arxiv.org/abs/2609.03637); [arXiv:2608.27346](https://arxiv.org/abs/2608.27346); [arXiv:2609.22460](https://arxiv.org/abs/2609.22460).

*Fact-check: confirmed.*

### McKay conjecture

**What it asked.** For every finite group $G$, every prime $p$ and every Sylow $p$-subgroup $P$ of $G$, the number of irreducible complex characters of $G$ of degree not divisible by $p$ equals the corresponding number for $N_G(P)$:

$$
|\operatorname{Irr}_{p'}(G)|=|\operatorname{Irr}_{p'}(N_G(P))| .
$$

For $G=S_3$ and $p=2$: the characters of $S_3$ have degrees 1, 1 and 2, so two have odd degree. A Sylow 2-subgroup $C_2$ is its own normaliser and has two characters, both of degree 1. John McKay stated it in 1971–72 for $p=2$ and simple groups; J. L. Alperin stated it for every prime in 1976.

**How it was settled.** Isaacs, Malle and Navarro (Invent. Math. 170, 2007) reduced it to an "inductive McKay condition" on finite simple groups. Malle and Späth proved the case $p=2$ (Annals 184, 2016). Späth's automorphism-equivariant Jordan decomposition (Invent. Math. 242, 2025) was a key step. Marc Cabanes and Britta Späth announced the completion in October 2023, posted "The McKay Conjecture on character degrees" (arXiv:2410.20392, October 2024), and published it in Annals of Mathematics 203(3) (2026). The proof uses the classification of finite simple groups; the last case, groups of Lie type D, took about six years (Quanta, February 2025). When the survey read Wikipedia's list of unsolved problems, it still listed McKay as open.

**Sources.** [arXiv:2410.20392](https://arxiv.org/abs/2410.20392); [doi:10.4007/annals.2026.203.3.5](https://doi.org/10.4007/annals.2026.203.3.5); [arXiv:2304.07373](https://arxiv.org/abs/2304.07373); [Quanta Magazine, February 2025](https://www.quantamagazine.org/after-20-years-math-couple-solves-major-group-theory-problem-20250219/); [Wikipedia: McKay conjecture](https://en.wikipedia.org/wiki/McKay_conjecture).

*Fact-check: confirmed.*

### Brauer's height zero conjecture

**What it asked.** Using the language of blocks from the Alperin–McKay section: every irreducible character in a $p$-block $B$ has height zero if and only if the defect group $D$ is abelian. Height zero means $\nu_p(\chi(1))=\nu_p(|G:D|)$. In $S_3$ with $p=2$, the principal block has abelian defect group $C_2$, and its two characters have degree 1 while $|G:D|=3$, so both have height zero, as predicted. Richard Brauer posed it in 1955; it is Problem 23 of his 1963 list.

**How it was settled.** The "if" direction was completed by Kessar and Malle (Annals 178, 2013), after the Berger–Knörr reduction (1988). For the "only if" direction, Gluck and Wolf proved the $p$-solvable case (1984), Navarro and Tiep proved the generalised Gluck–Wolf theorem (Annals, 2013), and Navarro and Späth (JEMS, 2014) reduced it to the inductive Alperin–McKay condition. Ruhstorfer settled $p=2$ (Annals 201, 2025). Malle, Navarro, Schaeffer Fry and Tiep settled every odd prime with a different reduction, one that avoids the still-open Alperin–McKay conjecture (arXiv:2209.04736, September 2022; Annals of Math. 200(2) (2024) 557–608). According to Wikipedia, the case of blocks whose defect groups are Sylow subgroups also answers Brauer's Problem 12: the character table detects whether the Sylow $p$-subgroups are abelian.

**Sources.** [Wikipedia: Brauer's height zero conjecture](https://en.wikipedia.org/wiki/Brauer%27s_height_zero_conjecture); [arXiv:2209.04736](https://arxiv.org/abs/2209.04736); [doi:10.4007/annals.2024.200.2.4](https://doi.org/10.4007/annals.2024.200.2.4); [doi:10.4007/annals.2013.178.1.6](https://doi.org/10.4007/annals.2013.178.1.6); [doi:10.4171/jems/444](https://doi.org/10.4171/jems/444).

*Fact-check: confirmed.*

### Lusztig's conjecture on modular characters of reductive groups (for p > h): disproved

**What it asked.** Let $G$ be a simply connected semisimple algebraic group over an algebraically closed field of characteristic $p$, with Coxeter number $h$. In characteristic $p$ the characters of the simple $G$-modules are not given by Weyl's formula. Lusztig proposed a formula for the characters of the simple rational $G$-modules with restricted highest weights (in the principal block), in terms of the known Weyl characters and affine Kazhdan–Lusztig polynomials evaluated at 1. He stated it in 1980 ("Some problems in the representation theory of finite Chevalley groups") with a restriction equivalent to $p\ge2h-3$; after Kato's work it was usually expected for all $p>h$.

**How it was settled.** The formula does hold for $p$ large enough relative to the root system. That follows from Andersen, Jantzen and Soergel (1994) together with Kazhdan–Lusztig, Kashiwara–Tanisaki and Lusztig, with no explicit bound. Fiebig (J. reine angew. Math., 2012) gave an explicit bound, but an enormous one, of order $n^{n^2}$ for $SL_{n+1}$.

Geordie Williamson ("Schubert calculus and torsion explosion", arXiv:1309.5055, September 2013; J. Amer. Math. Soc. 30 (2017) 1023–1046) found infinitely many counterexamples with $p>h$. He embedded numbers from Schubert calculus as torsion in intersection forms of Soergel bimodules; for example the Fibonacci number $F_{i+1}$ appears as torsion for $SL_{3i+5}$. So no bound linear in the rank is enough, and an appendix with Kontorovich and McNamara shows that the torsion grows exponentially with the rank. The same examples disprove James's 1990 conjecture on decomposition numbers of symmetric groups. The replacement theory uses $p$-Kazhdan–Lusztig polynomials: Achar, Makisumi, Riche and Williamson (arXiv 2017; J. Amer. Math. Soc. 32, 2019) proved a character formula for indecomposable tilting modules for $p>h$ in terms of them, which by results of Andersen gives the simple characters for $p>2h-3$.

**Sources.** [arXiv:1309.5055](https://arxiv.org/abs/1309.5055) (Williamson); [arXiv:1706.00183](https://arxiv.org/abs/1706.00183) (Achar–Makisumi–Riche–Williamson); [doi:10.1515/crelle.2011.170](https://doi.org/10.1515/crelle.2011.170).

*Fact-check: confirmed.*

### Donkin's tilting module conjecture: disproved (type A still open)

**What it asked.** Let $G$ be a simple, simply connected algebraic group over an algebraically closed field of characteristic $p$, with Weyl vector $\rho$, Coxeter number $h$ and first Frobenius kernel $G_1$. For each $p$-restricted weight $\lambda$ the simple module $L(\lambda)$ of $G_1$ has an injective hull, which is also its projective cover. Donkin conjectured that these injective hulls lift to tilting modules of $G$: for every restricted $\lambda$, the indecomposable tilting module $T(2(p-1)\rho+w_0\lambda)$, where $w_0$ is the longest element of the Weyl group, should restrict to $G_1$ as the injective hull of $L(\lambda)$. An equivalent form says that $T((p-1)\rho+\lambda)$ stays indecomposable when restricted to $G_1$. Stephen Donkin posed it in 1990.

**How it was settled.** It holds for $p\ge2h-2$, and Bendel, Nakano, Pillen and Sobaje lowered that bound in Part I of their series (Represent. Theory 26, 2022). The same authors found the first counterexample in 2019, in type $G_2$ with $p=2$: "Counterexamples to the tilting and $(p,r)$-filtration conjectures", J. reine angew. Math. 767 (2020) 193–202 (arXiv:1901.06687). That paper also answers Jantzen's 1980 question on Weyl $p$-filtrations in the negative. In "On Donkin's Tilting Module Conjecture II: Counterexamples" (Compositio Math. 160 (2024) 1167–1193, arXiv:2107.11615) they give infinite families of counterexamples for every root system except types $A_n$ and $B_2$.

Type $A_n$ is still open for every $p$. Part IV (arXiv:2609.13483, 11 September 2026, preprint) gives further evidence that the conjecture holds there. In small characteristic the characters and structure of tilting modules are governed by $p$-Kazhdan–Lusztig combinatorics, which nobody knows explicitly, and deciding whether a tilting module stays indecomposable on $G_1$ takes fine information about socles and good filtrations.

**Sources.** [doi:10.1515/crelle-2019-0036](https://doi.org/10.1515/crelle-2019-0036) (the $G_2$ counterexample); [arXiv:2107.11615](https://arxiv.org/abs/2107.11615) and [doi:10.1112/s0010437x24007115](https://doi.org/10.1112/s0010437x24007115) (Part II, Compositio Math.); [arXiv:2609.13483](https://arxiv.org/abs/2609.13483) (Part IV).

*Fact-check: not re-checked (found by the fact-checker, who listed it among the problems the survey had missed; a second reader asked that it be filed here rather than with the open problems). The fact-checker's statement paired $T((p-1)\rho+\lambda)$ with $L(\lambda)$, which mixes the two equivalent forms; the statement above has been corrected.*

### Strassen's direct sum conjecture: disproved

**What it asked.** For matrices, rank is additive: a block-diagonal matrix with blocks $A$ and $B$ has rank $\operatorname{rank}A+\operatorname{rank}B$. Strassen asked whether the same holds for tensors with three indices, whose rank counts the multiplications needed to compute the bilinear map they encode. Precisely: for tensors $A\in U\otimes V\otimes W$ and $B\in U'\otimes V'\otimes W'$ on independent sets of variables, is the rank of the direct sum $R(A\oplus B)=R(A)+R(B)$? Informally, computing two unrelated bilinear maps together should never be cheaper than computing them separately. Volker Strassen posed it in 1973.

**How it was settled.** Yaroslav Shitov disproved it in "Counterexamples to Strassen's direct sum conjecture", Acta Math. 222 (2019) 363–379 (arXiv:1712.08660, December 2017). His counterexample comes from a dimension count and is not written down explicitly. Borovik, Flavi, Pielasa, Shatsila and Song review it and give another proof (arXiv:2507.17890, 2025, preprint). Shitov also disproved Comon's conjecture, that a symmetric tensor has the same rank and symmetric rank (SIAM J. Appl. Algebra Geom. 2 (2018) 428–443).

Tensor rank is NP-hard to compute, the lower-bound techniques (flattenings, substitution) give additivity only in special cases, and any counterexample has to be large. Additivity for small formats is still studied. The fact-checker did not check the status of the symmetric (Waring rank) analogue.

**Sources.** [doi:10.4310/acta.2019.v222.n2.a3](https://doi.org/10.4310/acta.2019.v222.n2.a3) (Shitov, Acta Math.); [arXiv:1712.08660](https://arxiv.org/abs/1712.08660); [arXiv:2507.17890](https://arxiv.org/abs/2507.17890) (Borovik et al.); [doi:10.1137/17m1131970](https://doi.org/10.1137/17m1131970).

*Fact-check: not re-checked (found by the fact-checker, who listed it among the problems the survey had missed; a second reader asked that it be filed here rather than with the open problems).*

## Further problems suggested by the fact-checker

The fact-checker found these problems, with sources, while checking the survey; no second reader has re-checked them. It found four more. Donkin's and Strassen's conjectures have been disproved, so they are under "Recently settled". Kaplansky's unit conjecture for group rings belongs to the rings survey, and the Komlós conjecture is in the last section.

- **Combinatorial interpretation of Kronecker coefficients** (F. D. Murnaghan, 1938). The Kronecker coefficient $g^\lambda_{\mu\nu}$ is the multiplicity of the irreducible $S_n$-representation $V_\lambda$ in $V_\mu\otimes V_\nu$, and the problem asks for a positive combinatorial formula for it, as the Littlewood–Richardson rule gives for $GL_n$. Open: computing the coefficients is #P-hard (Bürgisser–Ikenmeyer, 2008), deciding whether one is nonzero is NP-hard (Ikenmeyer–Mulmuley–Walter, 2017), and only special families such as two-row shapes and hooks are understood. [Wikipedia: Kronecker coefficient](https://en.wikipedia.org/w/index.php?title=Kronecker_coefficient&action=raw).
- **Mutually unbiased bases in dimension 6** (arising from Ivanović, 1981, and Wootters–Fields, 1989). Two orthonormal bases $\lbrace e_i\rbrace$ and $\lbrace f_j\rbrace$ of $\mathbb C^d$ are mutually unbiased if $|\langle e_i,f_j\rangle|^2=1/d$ for all $i,j$. At most $d+1$ bases can be pairwise unbiased, and $d+1$ exist when $d$ is a prime power; the question is how many exist in $\mathbb C^6$, where three are known and three is believed to be the maximum. Open. Cárdenes Wuttig and Tindall (arXiv:2608.18053, August 2026, unrefereed) claim a complete classification of complex Hadamard matrices of order 6, which does not by itself settle the question. [arXiv:2608.18053](https://arxiv.org/abs/2608.18053).
- **Zauner's conjecture** (Gerhard Zauner, 1999). For every $d\ge2$ there should be $d^2$ unit vectors in $\mathbb C^d$ with $|\langle v_i,v_j\rangle|^2=1/(d+1)$ for $i\ne j$ (a SIC-POVM). Open: exact solutions are known for every $d\le53$ and in some higher dimensions up to 5779 (115 dimensions in all), and numerical ones for every $d\le193$. The known constructions depend on unproved Stark conjectures over real quadratic fields; Radchenko and Wheeler (arXiv:2609.21892, 18 September 2026, preprint) prove quadratic relations for Stark units that Appleby, Flammia and Kopp conjectured in this connection. [Wikipedia: SIC-POVM](https://en.wikipedia.org/w/index.php?title=SIC-POVM&action=raw).

## Related problems outside algebra

- **Komlós conjecture** (János Komlós; the date of the first written source was not verified). There is an absolute constant $K$ such that for any vectors $v_1,\dots,v_n\in\mathbb R^d$ of Euclidean norm at most 1 there are signs $\varepsilon_i=\pm1$ with $\lVert\sum_i\varepsilon_iv_i\rVert_\infty\le K$. It is a statement about matrices but belongs to discrepancy theory. Claimed solved in September 2026, in preprints that are not refereed. Guo, Fang and Lu (arXiv:2609.11189, 10 September 2026) claim $K=3\sqrt{2\pi}\approx7.52$, improving Banaszczyk's $O(\sqrt{\log n})$ from 1998, and the bound $3\sqrt{2\pi t}$ for set systems of maximum degree $t$; their abstract says the proof was found by the "Odin Automatic AI Research Agent". Simplifications followed within weeks: Karingula and Lovett (arXiv:2609.20979, with $K=36$), Akbas and Sra (arXiv:2609.27172, constant about 7.515) and Bansal (arXiv:2609.33215). Sources: [arXiv:2609.11189](https://arxiv.org/abs/2609.11189), [arXiv:2609.20979](https://arxiv.org/abs/2609.20979), [arXiv:2609.27172](https://arxiv.org/abs/2609.27172).
