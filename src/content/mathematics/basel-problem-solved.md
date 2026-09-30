---
title: How the Basel problem was solved
description: Euler knew the sum to six decimals years before he could prove its value. His leap of 1735, the proof he found in 1741, and two modern proofs, by Fourier series and by a double integral.
abstract: |
  The first part of this series stated the Basel problem and proved, after Cauchy, that the
  reciprocals of the squares sum to π²/6. This second part follows how the challenge was actually
  met. Euler first computed the sum to six decimals, which told him what any formula had to give. In
  1735 he found the formula by treating the sine as a polynomial with infinitely many roots, an
  argument that convinced him because the digits agreed; in 1741 he found a proof his contemporaries
  could accept, by an arcsine integral. We give that proof in full, then two proofs from the modern
  toolkit, one by Fourier series and Parseval's identity and one by a double integral that turns the
  sum into the area of a triangle, and compare what each method reveals.
pubDate: 2026-09-30
tags: [mathematics, series, history]
msc: [11M06, 40A05, 42A16, 01A50]
series: The Basel problem
seriesPart: 2
---

The [first part](/mathematics/basel-problem/) of this series set out the Basel problem, the value of
$1 + \frac{1}{4} + \frac{1}{9} + \cdots$, and proved that it is $\pi^2/6$. That proof, Cauchy's, came
almost ninety years after the answer was known. This part is about the solving: how Euler found the
value, how he convinced himself and then others that it was right, and how later mathematics proved it
again, each time with a different tool. Throughout, the statement is the same.

> [!THEOREM]
> $$
> \sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}. \label{eq:basel}
> $$

## Knowing the answer first

In 1731 Euler computed the sum to six decimals, 1.644934, by turning the series into others that
converge much faster [1]. Six digits do not make a formula:
many expressions built from $\pi$, $e$, square roots and small fractions agree with 1.644934, and
nothing said which one was right. But they told Euler what any formula would have to give.

The formula came in 1735 [2], from the argument of the first part: the function $\sin x / x$ equals 1
at $x = 0$ and vanishes exactly at $\pm\pi, \pm 2\pi, \dots$, so, as a polynomial would, it should
factor by its roots,

$$
\frac{\sin x}{x} = \left(1 - \frac{x^2}{\pi^2}\right)\left(1 - \frac{x^2}{4\pi^2}\right)\left(1 - \frac{x^2}{9\pi^2}\right)\cdots \label{eq:product}
$$

and comparing coefficients of $x^2$ with the Taylor series $1 - x^2/6 + \cdots$ gives
$\eqref{eq:basel}$. The value $\pi^2/6 = 1.644\,934\,066\ldots$ agreed with every digit Euler had
computed, and that agreement is what gave him the confidence to announce the result.

It was not yet a proof. The factorization $\eqref{eq:product}$ assumes that a function is determined
by its zeros, as a polynomial is, and that is false in general. Nobody could justify it for the sine
until Weierstrass's factorization theorem of 1876 [3], and Euler kept looking for another argument.

## Euler's proof of 1741

The argument Euler wrote down in 1741 and published in 1743 [4] avoids infinite products altogether.
It sums the odd squares first, using an integral that the arcsine makes easy to evaluate twice, once
in closed form and once term by term. It needs one integral.

> [!LEMMA]
> For every integer $n \ge 0$,
>
> $$
> \int_0^1 \frac{x^{2n+1}}{\sqrt{1 - x^2}}\, dx = \frac{2 \cdot 4 \cdots (2n)}{3 \cdot 5 \cdots (2n+1)}, \label{eq:wallis}
> $$
>
> where both products are 1 when $n = 0$.

> [!PROOF]
> Substituting $x = \sin t$ turns the integral into $I_n = \int_0^{\pi/2} \sin^{2n+1} t \, dt$.
> Integrating by parts gives $I_n = \frac{2n}{2n+1} I_{n-1}$ for $n \ge 1$, and $I_0 = 1$.

> [!PROOF] of Theorem 1, after Euler (1741)
> For $0 \le x < 1$ the arcsine has the power series
>
> $$
> \arcsin x = \sum_{n=0}^{\infty} \frac{1 \cdot 3 \cdots (2n-1)}{2 \cdot 4 \cdots (2n)} \cdot \frac{x^{2n+1}}{2n+1}, \label{eq:arcsin}
> $$
>
> whose coefficients are positive. Divide both sides by $\sqrt{1 - x^2}$ and integrate from 0 to 1.
> On the left, the substitution $u = \arcsin x$ gives $\int_0^{\pi/2} u \, du = \pi^2/8$. On the
> right, every term is nonnegative, so the series may be integrated term by term, and by Lemma 2 the
> $n$-th term becomes
>
> $$
> \begin{aligned}
> &\frac{1 \cdot 3 \cdots (2n-1)}{2 \cdot 4 \cdots (2n)} \cdot \frac{1}{2n+1} \cdot \frac{2 \cdot 4 \cdots (2n)}{3 \cdot 5 \cdots (2n+1)} \\
> &\qquad = \frac{1 \cdot 3 \cdots (2n-1)}{(2n+1) \cdot 3 \cdot 5 \cdots (2n+1)} = \frac{1}{(2n+1)^2}.
> \end{aligned}
> $$
>
> So the odd squares sum to $\pi^2/8$. The even squares contribute
> $\sum 1/(2m)^2 = \frac{1}{4} \sum 1/m^2$, hence
> $\sum 1/n^2 = \pi^2/8 + \frac{1}{4} \sum 1/n^2$, and $\sum 1/n^2 = \frac{4}{3} \cdot \frac{\pi^2}{8} = \frac{\pi^2}{6}$.

Every step uses tools Euler's readers already trusted: a power series, an integral and a substitution.
Integrating an infinite series term by term was accepted practice then; the modern justification,
that the terms are nonnegative (monotone convergence), came in the nineteenth and twentieth centuries.

## By Fourier series

In the nineteenth century Fourier showed how to write a function as a sum of sines and cosines [5].
One consequence, Parseval's identity, says that the mean square of a function equals the sum of the
squares of its Fourier coefficients [6]:

$$
\frac{1}{\pi} \int_{-\pi}^{\pi} f(x)^2 \, dx = \frac{a_0^2}{2} + \sum_{n=1}^{\infty} \left(a_n^2 + b_n^2\right). \label{eq:parseval}
$$

> [!PROPOSITION]
> On $(-\pi, \pi)$, the function $f(x) = x$ has the Fourier series
>
> $$
> x = 2 \sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n} \sin nx.
> $$

> [!PROOF]
> The function is odd, so every $a_n$ is 0, and integrating by parts,
> $b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} x \sin nx \, dx = \frac{2(-1)^{n+1}}{n}$.

> [!PROOF] of Theorem 1, by Parseval's identity
> Apply $\eqref{eq:parseval}$ to $f(x) = x$. The left-hand side is
> $\frac{1}{\pi} \cdot \frac{2\pi^3}{3} = \frac{2\pi^2}{3}$, and by Proposition 3 the right-hand side
> is $\sum 4/n^2$. So $\sum 1/n^2 = \frac{2\pi^2}{3} \cdot \frac{1}{4} = \frac{\pi^2}{6}$.

The whole weight of this proof rests on Parseval's identity, which is where the analysis lies.
Applied to other functions, the same computation gives every even value $\zeta(2k)$; the
polynomials that play the role of $x$ are the Bernoulli polynomials.

## By a double integral

The last proof turns the sum into an area. It was found in 1983 in a version by Apostol [7] and in
the form below by Beukers, Calabi and Kolk in 1993 [8].

> [!LEMMA]
> $$
> \int_0^1 \!\! \int_0^1 \frac{dx \, dy}{1 - x^2 y^2} = \sum_{k=0}^{\infty} \frac{1}{(2k+1)^2}. \label{eq:double}
> $$

> [!PROOF]
> For $0 \le x, y < 1$, expand $1/(1 - x^2y^2) = \sum_{k \ge 0} x^{2k} y^{2k}$. The terms are
> nonnegative, so the series may be integrated term by term, and
> $\int_0^1 \int_0^1 x^{2k} y^{2k} \, dx \, dy = 1/(2k+1)^2$.

> [!PROOF] of Theorem 1, by a double integral
> Change variables by
>
> $$
> x = \frac{\sin u}{\cos v}, \qquad y = \frac{\sin v}{\cos u}.
> $$
>
> This maps the open triangle $T = \{\, u > 0,\ v > 0,\ u + v < \pi/2 \,\}$ one-to-one onto the open
> unit square: its inverse is $\tan u = x \sqrt{(1 - y^2)/(1 - x^2)}$,
> $\tan v = y \sqrt{(1 - x^2)/(1 - y^2)}$, as direct substitution shows. Its Jacobian determinant is
>
> $$
> \begin{aligned}
> \frac{\partial(x, y)}{\partial(u, v)} &= \begin{vmatrix} \dfrac{\cos u}{\cos v} & \dfrac{\sin u \sin v}{\cos^2 v} \\[1em] \dfrac{\sin u \sin v}{\cos^2 u} & \dfrac{\cos v}{\cos u} \end{vmatrix} \\
> &= 1 - \frac{\sin^2 u \, \sin^2 v}{\cos^2 u \, \cos^2 v} = 1 - x^2 y^2,
> \end{aligned}
> $$
>
> which is exactly the denominator in $\eqref{eq:double}$. So the integrand becomes 1, and the
> integral is the area of $T$, which is $\frac{1}{2} \left(\frac{\pi}{2}\right)^2 = \frac{\pi^2}{8}$.
> The odd squares sum to $\pi^2/8$, and the even ones follow as in Euler's proof.

Two proofs in this part meet at the same number, $\pi^2/8$ for the odd squares, from opposite
directions: Euler's by an integral in one variable, this one by an area in two. Integrals of this
kind reach further. Beukers used close relatives of $\eqref{eq:double}$ to give a short proof that
$\zeta(3)$ is irrational [9], the question left open at the end of the first part.

## Five routes compared

| Route | Year | Tool | Leads to |
|---|--:|---|---|
| Euler's product | 1735 | the sine as an infinite product | every $\zeta(2k)$; rigorous after 1876 |
| Euler's arcsine integral | 1741 | a power series and an integral | the odd squares, $\pi^2/8$ |
| Cauchy's squeeze (Part 1) | 1821 | trigonometry and two inequalities | higher even powers, with more algebra |
| Parseval's identity | 19th c. | Fourier series | every $\zeta(2k)$, via Bernoulli polynomials |
| A double integral | 1983–93 | a change of variables | $\zeta(2k)$ as volumes; integrals for $\zeta(3)$ |

Table: Five routes to $\pi^2/6$, from the answer in 1735 to the proofs of the last fifty years.

The problem was solved in 1735 in the sense that mattered to Euler: he had the answer and good reason
to trust it. It was solved in the sense that matters to a proof in 1741, when every step could be
checked by the standards of the day, and it has been solved again every few decades since.
_Proofs from THE BOOK_ gives three proofs of the result [10], and Ayoub's survey tells the whole
history [11]. What has not been solved is the same question one power up: nobody has found a closed
form for $1 + \frac{1}{8} + \frac{1}{27} + \cdots$, the sum of the reciprocals of the cubes.

## References

1. L. Euler, “De summatione innumerabilium progressionum,” _Commentarii academiae scientiarum
   Petropolitanae_ 5 (1738), 91–105. Written in 1731; Eneström index E20, facsimile in the
   [Euler Archive](https://scholarlycommons.pacific.edu/euler-works/20/).
2. L. Euler, “De summis serierum reciprocarum,” _Commentarii academiae scientiarum Petropolitanae_ 7
   (1740), 123–134. Eneström index E41, facsimile in the
   [Euler Archive](https://scholarlycommons.pacific.edu/euler-works/41/).
3. K. Weierstrass, “Zur Theorie der eindeutigen analytischen Functionen,” _Abhandlungen der
   Königlich Preussischen Akademie der Wissenschaften zu Berlin_ (1876).
4. L. Euler, “Démonstration de la somme de cette suite 1 + 1/4 + 1/9 + 1/16 + …,” _Journal
   littéraire d'Allemagne, de Suisse et du Nord_ 2 (1743), 115–127. Written in 1741; Eneström index
   E63, facsimile in the [Euler Archive](https://scholarlycommons.pacific.edu/euler-works/63/).
5. J. Fourier, _Théorie analytique de la chaleur_, Paris, 1822.
6. E. M. Stein and R. Shakarchi, _Fourier Analysis: An Introduction_, Princeton University Press,
   2003.
7. T. M. Apostol, “A proof that Euler missed: evaluating ζ(2) the easy way,” _The Mathematical
   Intelligencer_ 5:3 (1983), 59–60.
   [doi:10.1007/BF03026576](https://doi.org/10.1007/BF03026576)
8. F. Beukers, E. Calabi and J. A. C. Kolk, “Sums of generalized harmonic series and volumes,”
   _Nieuw Archief voor Wiskunde_ (4) 11 (1993), 217–224.
9. F. Beukers, “A note on the irrationality of ζ(2) and ζ(3),” _Bulletin of the London Mathematical
   Society_ 11 (1979), 268–272. [doi:10.1112/blms/11.3.268](https://doi.org/10.1112/blms/11.3.268)
10. M. Aigner and G. M. Ziegler, _Proofs from THE BOOK_, 6th ed., Springer, 2018, chapter “Three
    times π²/6.” [doi:10.1007/978-3-662-57265-8](https://doi.org/10.1007/978-3-662-57265-8)
11. R. Ayoub, “Euler and the zeta function,” _The American Mathematical Monthly_ 81 (1974),
    1067–1086. [doi:10.1080/00029890.1974.11993738](https://doi.org/10.1080/00029890.1974.11993738)
