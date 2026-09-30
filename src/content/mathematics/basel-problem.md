---
title: The Basel problem — why the squares sum to π²/6
description: For almost ninety years nobody could say what 1 + 1/4 + 1/9 + ⋯ adds up to. Euler's answer was π²/6, and a short proof from 1821 shows that he was right.
abstract: |
  The Basel problem asks for the exact value of the sum of the reciprocals of the squares,
  1 + 1/4 + 1/9 + 1/16 + ⋯. That the sum is finite is easy to see; what it equals is not, and the
  partial sums approach their limit so slowly that a thousand terms give only three correct digits.
  We recall the history of the problem, present Euler's argument of 1735 that the answer is π²/6,
  explain why that argument was not yet a proof, and give a complete, elementary proof due to
  Cauchy that needs nothing beyond trigonometry and a squeeze. We end with the values Euler's method
  gives for the even powers, and with the odd powers, where the question is still open.
pubDate: 2026-09-30
tags: [mathematics, series]
msc: [11M06, 40A05, 01A50]
series: The Basel problem
seriesPart: 1
---

In 1650 Pietro Mengoli asked for the value of an infinite sum that looks as innocent as a sum can [1]:

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = 1 + \frac{1}{4} + \frac{1}{9} + \frac{1}{16} + \cdots \label{eq:basel}
$$

Mengoli had found the sums of similar series, such as the reciprocals of the triangular numbers,
whose terms telescope. This one resisted him, and everyone after him. Jakob Bernoulli proved that
the sum is less than 2, spread the question, and admitted that its exact value had defeated him
[2].[^bernoulli] It is named after Basel, the city of the Bernoullis and of the man who finally
solved it, Leonhard Euler, in 1735 [3]. Ayoub tells the whole story [4]. This is the first of two
parts; the second, [How the Basel problem was solved](/mathematics/basel-problem-solved/), follows how
Euler and those after him met the challenge.

## The problem

That the sum is finite is the easy part.

> [!PROPOSITION] J. Bernoulli [2]
> The series $\eqref{eq:basel}$ converges, and its sum lies between 1 and 2.

> [!PROOF]
> For $n \ge 2$ we have $n^2 > n(n-1)$, and therefore
>
> $$
> \frac{1}{n^2} < \frac{1}{n(n-1)} = \frac{1}{n-1} - \frac{1}{n}.
> $$
>
> Adding these from $n = 2$ to $N$, the right-hand side telescopes, so the partial sums satisfy
> $S_N = \sum_{n \le N} 1/n^2 < 1 + (1 - 1/N) < 2$. They increase and are bounded, so they converge,
> and the limit is at least the first term, 1.

What the sum converges _to_ is the hard part. The answer, which we prove in Section 4, is this.

> [!THEOREM] Euler, 1735
> The sum of the reciprocals of the squares is $\pi^2/6$:
>
> $$
> 1 + \frac{1}{4} + \frac{1}{9} + \frac{1}{16} + \cdots = \frac{\pi^2}{6} = 1.644\,934\,066\ldots \label{eq:euler}
> $$

The circle constant has no business in a sum of whole numbers, which is what made the result so
startling.

## Why the sum resisted

The terms shrink, but slowly, and the partial sums creep towards their limit more slowly still. The
comparison used in Proposition 1 also bounds what is left after $N$ terms. Since
$\frac{1}{n(n+1)} < \frac{1}{n^2} < \frac{1}{(n-1)n}$ and both outer sums telescope,

$$
\frac{1}{N+1} < \sum_{n > N} \frac{1}{n^2} < \frac{1}{N}. \label{eq:tail}
$$

Each further correct digit therefore costs ten times as many terms. A thousand terms give
1.643935, of which only the first three digits are right (Table 1). A numerical hunt for the
answer, by adding terms and guessing, was hopeless.

| Terms $N$ | Partial sum $S_N$ | Error times $N$ |
|--:|--:|--:|
| $10$ | 1.549768 | 0.951663 |
| $10^2$ | 1.634984 | 0.995017 |
| $10^3$ | 1.643935 | 0.999500 |
| $10^4$ | 1.644834 | 0.999950 |
| $10^5$ | 1.644924 | 0.999995 |
| $10^6$ | 1.644933 | 1.000000 |

Table: Partial sums of the series. The error left after $N$ terms is close to $1/N$, as $\eqref{eq:tail}$ predicts.

Euler found a way round this before he found the answer. The tail in $\eqref{eq:tail}$ is not only
squeezed between $1/(N+1)$ and $1/N$: it can be expanded in powers of $1/N$,

$$
\sum_{n > N} \frac{1}{n^2} = \frac{1}{N} - \frac{1}{2N^2} + \frac{1}{6N^3} - \frac{1}{30N^5} + \cdots, \label{eq:em}
$$

an early instance of what is now called the Euler–Maclaurin formula. Adding the first three
correction terms to just ten terms of the series gives 1.64493440, correct to six decimals, where
the raw sum is not correct to even one. With such estimates Euler knew the value to many decimal places long before he knew
a formula for it, and when the formula came, he could check it digit by digit.

## Euler's argument

A polynomial $p$ of degree $d$ with $p(0) = 1$ and nonzero roots $r_1, \dots, r_d$ factors as
$p(x) = (1 - x/r_1)(1 - x/r_2) \cdots (1 - x/r_d)$. Euler's idea was to treat $\sin x / x$ as a
polynomial of infinite degree. It equals 1 at $x = 0$ and vanishes exactly at $x = \pm\pi, \pm 2\pi,
\pm 3\pi, \dots$, so, pairing each root with its negative,

$$
\frac{\sin x}{x} = \left(1 - \frac{x^2}{\pi^2}\right)\left(1 - \frac{x^2}{4\pi^2}\right)\left(1 - \frac{x^2}{9\pi^2}\right)\cdots \label{eq:product}
$$

The Taylor series of the sine, on the other hand, gives

$$
\frac{\sin x}{x} = 1 - \frac{x^2}{6} + \frac{x^4}{120} - \cdots \label{eq:taylor}
$$

Multiplying out $\eqref{eq:product}$, the only way to get a term in $x^2$ is to take it from one
factor and 1 from all the others, so the coefficient of $x^2$ is
$-\frac{1}{\pi^2}\left(1 + \frac{1}{4} + \frac{1}{9} + \cdots\right)$. Setting it equal to
$-\frac{1}{6}$, the coefficient in $\eqref{eq:taylor}$, gives $\eqref{eq:euler}$ at once.

> [!REMARK]
> Comparing the coefficients of $x^4$ in the same way gives $\sum_{n \ge 1} 1/n^4 = \pi^4/90$, and
> each further power gives the next even sum (Section 5).

As a proof, the argument has a gap: a function is not determined by its zeros.
$e^x \sin x / x$ vanishes at exactly the same points as $\sin x / x$, yet its coefficient of $x^2$ is
$1/3$, not $-1/6$. What rules out such a factor for the sine is Weierstrass's factorization theorem
of 1876 [5], which shows that $\eqref{eq:product}$ holds. Euler knew the gap was there. His answer
agreed with his numerical value to every digit he had, and he came back to the problem in later
papers.

## A complete proof

The proof below is Cauchy's, from his _Cours d'analyse_ of 1821 [6]; it is one of the three proofs
collected in _Proofs from THE BOOK_ [7]. It needs one identity for the cotangent and one squeeze.

> [!LEMMA]
> For every integer $m \ge 1$,
>
> $$
> \sum_{k=1}^{m} \cot^2 \frac{k\pi}{2m+1} = \frac{m(2m-1)}{3}. \label{eq:cot}
> $$

> [!PROOF]
> Let $n = 2m + 1$ and $0 < x < \pi/2$. By de Moivre's formula, $\sin nx$ is the imaginary part of
> $(\cos x + i \sin x)^n$. Expanding with the binomial theorem and dividing by $\sin^n x$ gives
>
> $$
> \frac{\sin nx}{\sin^n x} = \sum_{j=0}^{m} (-1)^j \binom{n}{2j+1} \left(\cot^2 x\right)^{m-j}.
> $$
>
> At $x_k = k\pi/n$, for $k = 1, \dots, m$, the left-hand side vanishes, since
> $\sin n x_k = \sin k\pi = 0$. So the $m$ numbers $t_k = \cot^2 x_k$ are roots of the polynomial
>
> $$
> P(t) = \binom{n}{1} t^m - \binom{n}{3} t^{m-1} + \binom{n}{5} t^{m-2} - \cdots,
> $$
>
> and they are distinct, because $\cot^2$ is strictly decreasing on $(0, \pi/2)$. A polynomial of
> degree $m$ has no other roots, so by Vieta's formulas the sum of the $t_k$ is minus the ratio of
> the two leading coefficients:
>
> $$
> \begin{aligned}
> \sum_{k=1}^{m} t_k &= \binom{n}{3} \Big/ \binom{n}{1} \\
> &= \frac{(2m+1)\,2m\,(2m-1)}{6\,(2m+1)} = \frac{m(2m-1)}{3}.
> \end{aligned}
> $$

> [!PROOF] of Theorem 2
> For $0 < x < \pi/2$ we have $\sin x < x < \tan x$, and hence $\cot^2 x < 1/x^2 < 1 + \cot^2 x$.
> Apply this at the $m$ points $x_k = k\pi/(2m+1)$ and add. By Lemma 3,
>
> $$
> \frac{m(2m-1)}{3} < \frac{(2m+1)^2}{\pi^2} \sum_{k=1}^{m} \frac{1}{k^2} < m + \frac{m(2m-1)}{3}.
> $$
>
> Multiplying by $\pi^2/(2m+1)^2$ traps the partial sum $S_m$ between
> $\pi^2 m(2m-1) / 3(2m+1)^2$ and $\pi^2\, 2m(m+1) / 3(2m+1)^2$. As $m \to \infty$ both bounds tend
> to $2\pi^2/12 = \pi^2/6$, and so does $S_m$.

The upper bound is in fact exactly $\frac{\pi^2}{6}\bigl(1 - \frac{1}{(2m+1)^2}\bigr)$, so it
approaches the limit quickly: for $m = 1000$ it falls short of $\pi^2/6$ by only $4 \times 10^{-7}$.

## Beyond the squares

Write $\zeta(s) = \sum_{n \ge 1} 1/n^s$, the function Riemann later made famous. Euler's method [3]
reaches every even value; in the form he later gave it,

$$
\begin{gathered}
\zeta(2k) = \frac{(-1)^{k+1} B_{2k} (2\pi)^{2k}}{2\,(2k)!}, \\
\zeta(2) = \frac{\pi^2}{6}, \quad \zeta(4) = \frac{\pi^4}{90}, \quad \zeta(6) = \frac{\pi^6}{945},
\end{gathered} \label{eq:even}
$$

where $B_2 = 1/6$, $B_4 = -1/30$, $B_6 = 1/42$, … are the Bernoulli numbers. For the odd values,
nothing of the kind is known. Apéry proved in 1979 that $\zeta(3) = 1.202\,056\,9\ldots$ is
irrational [8], but no formula for it has been found, and nobody knows whether $\zeta(5)$ is
irrational. Rivoal showed that infinitely many of the odd values are [9], and Zudilin that at least
one of $\zeta(5)$, $\zeta(7)$, $\zeta(9)$, $\zeta(11)$ is [10]. Three centuries after Basel, that is
where the challenge stands.

> [!REMARK]
> The reciprocal $6/\pi^2 \approx 0.6079$ has a meaning of its own: it is the probability that two
> integers chosen at random have no common factor.[^coprime]

## Try it

The numbers above take a few lines to reproduce. Adding the terms from the smallest up keeps the
rounding error of floating-point arithmetic well below the digits that matter.

```ts title="basel.ts"
/** The partial sum S_n, added from the smallest term up, which keeps rounding error small. */
function partialSum(n: number): number {
  let sum = 0;
  for (let k = n; k >= 1; k--) sum += 1 / (k * k);
  return sum;
}

/** Euler's estimate: S_n plus the first three terms of the tail. */
function eulerEstimate(n: number): number {
  return partialSum(n) + 1 / n - 1 / (2 * n ** 2) + 1 / (6 * n ** 3);
}

console.log(partialSum(1000)); // 1.6439345666815597
console.log(eulerEstimate(10)); // 1.6449343978332076
console.log(Math.PI ** 2 / 6); // 1.6449340668482264
```

Ten terms and three corrections beat a thousand terms by three digits, and a hundred terms with the
same corrections agree with $\pi^2/6$ to eleven decimal places.

## References

1. P. Mengoli, _Novae quadraturae arithmeticae_, Bologna, 1650.
2. J. Bernoulli, _Tractatus de seriebus infinitis_, appended to his _Ars conjectandi_, Basel, 1713.
   It collects the dissertations on series he published from 1686 on.
3. L. Euler, “De summis serierum reciprocarum,” _Commentarii academiae scientiarum Petropolitanae_ 7
   (1740), 123–134. Eneström index E41; facsimile in the
   [Euler Archive](https://scholarlycommons.pacific.edu/euler-works/41/).
4. R. Ayoub, “Euler and the zeta function,” _The American Mathematical Monthly_ 81 (1974),
   1067–1086. [doi:10.1080/00029890.1974.11993738](https://doi.org/10.1080/00029890.1974.11993738)
5. K. Weierstrass, “Zur Theorie der eindeutigen analytischen Functionen,” _Abhandlungen der
   Königlich Preussischen Akademie der Wissenschaften zu Berlin_ (1876).
6. A.-L. Cauchy, _Cours d'analyse de l'École royale polytechnique_, Paris, 1821, Note VIII.
7. M. Aigner and G. M. Ziegler, _Proofs from THE BOOK_, 6th ed., Springer, 2018, chapter “Three
   times π²/6.” [doi:10.1007/978-3-662-57265-8](https://doi.org/10.1007/978-3-662-57265-8)
8. R. Apéry, “Irrationalité de ζ(2) et ζ(3),” _Astérisque_ 61 (1979), 11–13. Available from
   [Numdam](http://www.numdam.org/item/AST_1979__61__11_0/).
9. T. Rivoal, “La fonction zêta de Riemann prend une infinité de valeurs irrationnelles aux entiers
   impairs,” _Comptes Rendus de l'Académie des Sciences, Série I_ 331 (2000), 267–270.
   [doi:10.1016/S0764-4442(00)01624-4](https://doi.org/10.1016/S0764-4442(00)01624-4)
10. W. Zudilin, “One of the numbers ζ(5), ζ(7), ζ(9), ζ(11) is irrational,” _Russian Mathematical
    Surveys_ 56 (2001), 774–776.
    [doi:10.1070/RM2001v056n04ABEH000427](https://doi.org/10.1070/RM2001v056n04ABEH000427)

[^bernoulli]: Bernoulli ended his discussion of the series with a plea: whoever found its sum and
    sent it to him would have his gratitude.

[^coprime]: Two integers are coprime when no prime divides both. A prime $p$ divides two random
    integers with probability $1/p^2$, so, treating the primes as independent, the probability is
    $\prod_p (1 - 1/p^2)$. Euler's product formula $\zeta(s) = \prod_p (1 - p^{-s})^{-1}$ turns this
    into $1/\zeta(2) = 6/\pi^2$.
