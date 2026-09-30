---
title: The Basel problem — why the squares sum to π²/6
description: For almost ninety years nobody could say what 1 + 1/4 + 1/9 + ⋯ adds up to. Euler's answer was π²/6, and a short proof from 1821 shows that he was right.
abstract: |
  The Basel problem asks for the exact value of 1 + 1/4 + 1/9 + 1/16 + ⋯, the sum of the reciprocals
  of the squares. It takes one line to state, and it defeated the best mathematicians of Europe for
  almost ninety years. We explain why: the sum is easily seen to be finite, but its partial sums
  approach the limit so slowly that a thousand terms give only three correct digits, and the answer,
  π²/6, contains a constant that seems to have no business there. We follow Euler's argument of 1735,
  which finds the circle hidden in the zeros of the sine, explain why it was not yet a proof, and give
  a complete proof due to Cauchy that uses nothing beyond trigonometry, the binomial theorem and a
  squeeze. We end with the even powers, which Euler's method settles, and the odd powers, which are
  still open.
pubDate: 2026-09-30
tags: [mathematics, series]
msc: [11M06, 40A05, 01A50]
series: The Basel problem
seriesPart: 1
---

Some problems are hard because they are complicated. The Basel problem is hard for the opposite
reason: it takes one line to state, anyone can check the first few terms by hand, and yet for almost
ninety years nobody could finish it. The question, which Pietro Mengoli asked in 1650 [1], is the
value of the sum

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = 1 + \frac{1}{4} + \frac{1}{9} + \frac{1}{16} + \cdots \label{eq:basel}
$$

It was a natural question to ask. Nicole Oresme had shown in the fourteenth century that the harmonic
series $1 + \frac12 + \frac13 + \cdots$ grows without bound, and Mengoli had just proved that the
alternating series $1 - \frac12 + \frac13 - \cdots$ adds up to $\ln 2$. Squaring the denominators makes
the terms shrink much faster, so this sum stays finite; the question is what it equals. Jakob
Bernoulli proved that it is less than 2, spread the question, and admitted that its exact value had
defeated him [2].[^bernoulli] The problem is named after Basel, the city of the Bernoullis and of the
man who finally solved it, Leonhard Euler, in 1735 [3]. Ayoub tells the whole story [4].

This is the first of two parts. Here we see why the problem is harder than it looks, follow Euler's
daring argument, and give a complete proof that uses nothing beyond trigonometry. The second part,
[How the Basel problem was solved](/mathematics/basel-problem-solved/), follows how Euler and those
after him met the challenge, with three more proofs.

## The problem

Before asking what the sum is, we should make sure that it is anything at all. The terms $1/n^2$ tend
to zero, but so do the terms of the harmonic series, and that series diverges. What decides the matter
is how fast the terms shrink, and the classical way to find out is to compare the series with one
whose partial sums we can compute exactly.

> [!PROPOSITION] J. Bernoulli [2]
> The series $\eqref{eq:basel}$ converges, and its sum lies between 1 and 2.

> [!PROOF]
> For $n \ge 2$ we have $n^2 > n(n-1)$, and therefore
>
> $$
> \frac{1}{n^2} < \frac{1}{n(n-1)} = \frac{1}{n-1} - \frac{1}{n}.
> $$
>
> Adding these from $n = 2$ to $N$, the right-hand side telescopes: almost every term cancels its
> neighbour. So the partial sums satisfy $S_N = \sum_{n \le N} 1/n^2 < 1 + (1 - 1/N) < 2$. They
> increase and are bounded, so they converge, and the limit is at least the first term, 1.

The proof tells us that the answer lies somewhere between 1 and 2, and nothing about where. That is
the hard part. The answer, which we prove in Section 4, is this.

> [!THEOREM] Euler, 1735
> The sum of the reciprocals of the squares is $\pi^2/6$:
>
> $$
> 1 + \frac{1}{4} + \frac{1}{9} + \frac{1}{16} + \cdots = \frac{\pi^2}{6} = 1.644\,934\,066\ldots \label{eq:euler}
> $$

It is worth pausing on how strange this is. The number $\pi$ is born from circles: it is the ratio of a
circle's circumference to its diameter. Nothing in $\eqref{eq:basel}$ mentions a circle; the sum is
built from whole numbers alone. Much of the charm of the problem, and the key to Euler's solution, lies
in finding where the circle is hiding. We will find it, in Section 3, in the zeros of the sine.

## Why the sum resisted

An engineer's first instinct is to add terms until the answer settles and then recognise the number.
Here that instinct fails. The comparison used in Proposition 1 also bounds what is left after $N$
terms. Since $\frac{1}{n(n+1)} < \frac{1}{n^2} < \frac{1}{(n-1)n}$ and both outer sums telescope,

$$
\frac{1}{N+1} < \sum_{n > N} \frac{1}{n^2} < \frac{1}{N}. \label{eq:tail}
$$

The error after $N$ terms is therefore about $1/N$, and each further correct digit costs ten times as
many terms. A thousand terms give 1.643935, of which only the first three digits are right (Table 1).
Adding terms and guessing was hopeless in the seventeenth century, and it would still be slow today.

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
the raw sum is not correct to even one. With such estimates Euler knew the value to many decimal places
long before he knew a formula for it, and when the formula came, he could check it digit by digit.

Digits alone, though, do not name a number. Six decimals narrow the possibilities without deciding
between them, and nothing in 1.644934 announces a $\pi$, let alone a $\pi^2$. To get from the digits to
the formula took an idea, not more decimals.

## Euler's argument

Euler's idea starts from something every student of algebra knows. A polynomial $p$ with $p(0) = 1$
and nonzero roots $r_1, \dots, r_d$ factors as

$$
p(x) = \left(1 - \frac{x}{r_1}\right)\left(1 - \frac{x}{r_2}\right) \cdots \left(1 - \frac{x}{r_d}\right),
$$

and multiplying out shows that the coefficient of $x$ is $-(1/r_1 + \cdots + 1/r_d)$, minus the sum of
the reciprocals of the roots. For instance,
$(1 - \frac{x}{2})(1 - \frac{x}{3}) = 1 - (\frac12 + \frac13)\,x + \frac{x^2}{6}$. Knowing the roots
of a polynomial tells us sums of reciprocals of its roots, and the Basel problem asks for exactly such a
sum.

So Euler looked for a function whose roots have reciprocals $1/n$, and found it in the sine. The
function $\sin x / x$ equals 1 at $x = 0$ and vanishes exactly at $x = \pm\pi, \pm 2\pi, \pm 3\pi,
\dots$. Treating it as a polynomial of infinite degree, and pairing each root $n\pi$ with its negative,
$(1 - \frac{x}{n\pi})(1 + \frac{x}{n\pi}) = 1 - \frac{x^2}{n^2\pi^2}$, he wrote

$$
\frac{\sin x}{x} = \left(1 - \frac{x^2}{\pi^2}\right)\left(1 - \frac{x^2}{4\pi^2}\right)\left(1 - \frac{x^2}{9\pi^2}\right)\cdots \label{eq:product}
$$

Here is the circle. The roots of the sine are the multiples of $\pi$, so the reciprocals of the squared
roots are $\frac{1}{\pi^2} \cdot \frac{1}{n^2}$: our series, divided by $\pi^2$. The Taylor series of
the sine, on the other hand, gives

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

As a proof, the argument has a gap, and it is a real one: a function is not determined by its zeros.
The function $e^x \sin x / x$ vanishes at exactly the same points as $\sin x / x$, yet its
coefficient of $x^2$ is $1/3$, not $-1/6$. Something special about the sine must rule out such an
extra factor, and nobody could say what until Weierstrass's factorization theorem of 1876 [5] showed
that $\eqref{eq:product}$ holds. Euler knew the gap was there. His answer agreed with his numerical
value to every digit he had, and he came back to the problem in later papers.

## A complete proof

The proof below is Cauchy's, from his _Cours d'analyse_ of 1821 [6]; _Proofs from THE BOOK_ devotes a
chapter to this sum and its proofs [7]. It is a model of economy, and its plan is easy to state. For a
small angle $x$, the three numbers $\sin x$, $x$ and $\tan x$ are nearly equal, so $1/x^2$ is trapped
between $\cot^2 x$ and $1 + \cot^2 x$. If we choose the angles cleverly, the sum of $\cot^2$ over them
can be computed exactly, and then the trap closes on the partial sums of $\eqref{eq:basel}$.

Why should such a sum be computable? The angles $k\pi/(2m+1)$ are exactly where $\sin((2m+1)x)$
vanishes, and de Moivre's formula writes $\sin((2m+1)x)$ as a polynomial in $\cot^2 x$. So the
numbers $\cot^2(k\pi/(2m+1))$ are the roots of a polynomial we can write down, and Vieta's formulas
give their sum without our computing a single one of them. That is the lemma.

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

Notice what the proof did not need: no calculus beyond one limit at the very end, no infinite products,
nothing from complex analysis. The price of that simplicity is a little algebra; the
reward is a proof that a determined student can check line by line.

## Beyond the squares

Write $\zeta(s) = \sum_{n \ge 1} 1/n^s$, the function Riemann later made famous; the Basel problem
asks for $\zeta(2)$. Euler's method [3] reaches every even value, because each further coefficient of
$\eqref{eq:product}$ gives the next even sum. In the form he later gave it,

$$
\begin{gathered}
\zeta(2k) = \frac{(-1)^{k+1} B_{2k} (2\pi)^{2k}}{2\,(2k)!}, \\
\zeta(2) = \frac{\pi^2}{6}, \quad \zeta(4) = \frac{\pi^4}{90}, \quad \zeta(6) = \frac{\pi^6}{945},
\end{gathered} \label{eq:even}
$$

where $B_2 = 1/6$, $B_4 = -1/30$, $B_6 = 1/42$, … are the Bernoulli numbers. Every even value is a
rational multiple of a power of $\pi$.

For the odd values, nothing of the kind is known, and not for want of trying. The first real progress
came only in 1978, when Roger Apéry announced that $\zeta(3) = 1.202\,056\,9\ldots$ is irrational; the
proof appeared the next year [8]. His talk was so sketchy that much of the audience dismissed it, but
Henri Cohen, Hendrik Lenstra and Alfred van der Poorten set out to check the argument, and within two
months it stood. Van der Poorten's account [9] is still the most engaging way into it. Even so, no
formula for $\zeta(3)$ has been found, and nobody knows whether $\zeta(5)$ is irrational. Rivoal
showed that infinitely many of the odd values are [10], and Zudilin that at least one of $\zeta(5)$,
$\zeta(7)$, $\zeta(9)$, $\zeta(11)$ is [11]. Three centuries after Basel, that is where the challenge
stands.

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
same corrections agree with $\pi^2/6$ to eleven decimal places. A little mathematics goes further
than a lot of arithmetic.

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
9. A. van der Poorten, “A proof that Euler missed … Apéry's proof of the irrationality of ζ(3),”
   _The Mathematical Intelligencer_ 1:4 (1979), 195–203.
   [doi:10.1007/BF03028234](https://doi.org/10.1007/BF03028234)
10. T. Rivoal, “La fonction zêta de Riemann prend une infinité de valeurs irrationnelles aux entiers
    impairs,” _Comptes Rendus de l'Académie des Sciences, Série I_ 331 (2000), 267–270.
    [doi:10.1016/S0764-4442(00)01624-4](https://doi.org/10.1016/S0764-4442(00)01624-4)
11. W. Zudilin, “One of the numbers ζ(5), ζ(7), ζ(9), ζ(11) is irrational,” _Russian Mathematical
    Surveys_ 56 (2001), 774–776.
    [doi:10.1070/RM2001v056n04ABEH000427](https://doi.org/10.1070/RM2001v056n04ABEH000427)

[^bernoulli]: Bernoulli ended his discussion of the series with a plea: whoever found its sum and
    sent it to him would have his gratitude.

[^coprime]: Two integers are coprime when no prime divides both. A prime $p$ divides two random
    integers with probability $1/p^2$, so, treating the primes as independent, the probability is
    $\prod_p (1 - 1/p^2)$. Euler's product formula $\zeta(s) = \prod_p (1 - p^{-s})^{-1}$ turns this
    into $1/\zeta(2) = 6/\pi^2$.
