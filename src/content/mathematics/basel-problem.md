---
title: The Basel problem — what it asks, and how it was solved
description: For almost ninety years nobody could say what 1 + 1/4 + 1/9 + ⋯ adds up to. How Euler found the answer, π²/6, how he proved it, and three later proofs that each find the π somewhere else.
abstract: |
  The Basel problem asks for the exact value of 1 + 1/4 + 1/9 + 1/16 + ⋯, the sum of the reciprocals
  of the squares. It takes one line to state, and it defeated the best mathematicians of Europe for
  almost ninety years. We explain why: the sum is easily seen to be finite, but its partial sums
  approach the limit so slowly that a thousand terms give only three correct digits, and the answer,
  π²/6, contains a constant that seems to have no business there.

  We then follow how the problem was solved. Euler computed the sum to six decimals in 1731, found
  π²/6 in 1735 with an argument that was not yet a proof, and proved it in 1741 by computing one
  integral in two ways. We give that proof, Cauchy's elementary proof of 1821, and two modern ones, by
  Fourier series and by a double integral, and compare where each of them finds the π. We end with the
  even powers, which Euler's method settles, and the odd powers, which are still open.
pubDate: 2026-09-30
tags: [mathematics, series, history]
msc: [11M06, 40A05, 42A16, 01A50]
---

Some problems are hard because they are complicated. The Basel problem is hard for the opposite
reason: it takes one line to state, anyone can check the first few terms by hand, and yet for almost
ninety years nobody could finish it. The question, which Pietro Mengoli asked in 1650 [1], is the
value of the sum

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = 1 + \frac{1}{4} + \frac{1}{9} + \cdots \label{eq:basel}
$$

It was a natural question to ask. Nicole Oresme had shown in the fourteenth century that the harmonic
series $1 + \frac12 + \frac13 + \cdots$ grows without bound, and Mengoli had just proved that the
alternating series $1 - \frac12 + \frac13 - \cdots$ adds up to $\ln 2$. Squaring the denominators makes
the terms shrink much faster, so this sum stays finite; the question is what it equals. Jakob
Bernoulli proved that it is less than 2, spread the question, and admitted that its exact value had
defeated him [2].[^bernoulli] The problem is named after Basel, the city of the Bernoullis and of the
man who finally solved it, Leonhard Euler, in 1735 [3]. Ayoub tells the whole story [4].

This article follows both halves of that story. First the problem: why the sum is finite, why adding
terms gets nowhere, and why the answer is a surprise. Then the solving, in the order it happened:
Euler's discovery in 1735, the proof he found in 1741, Cauchy's proof of 1821, which needs nothing
beyond trigonometry, and two modern proofs. Each proof finds the $\pi$ in a different place, and
Section 8 puts them side by side.

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
the hard part. The answer, which Sections 4 to 7 prove in four different ways, is this.

> [!THEOREM] Euler, 1735
> The sum of the reciprocals of the squares is $\pi^2/6$:
>
> $$
> 1 + \frac{1}{4} + \frac{1}{9} + \cdots = \frac{\pi^2}{6}. \label{eq:euler}
> $$

This is a strange answer. The number $\pi$ is born from circles: it is the ratio of a circle's
circumference to its diameter. Nothing in $\eqref{eq:basel}$ mentions a circle; the sum is built from
whole numbers alone. Much of the charm of the problem, and the key to every solution of it, lies in
finding where the circle is hiding. Euler found it in the zeros of the sine.

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

Euler found a way round this before he found the answer. In 1731 he computed the sum to six decimals,
1.644934, by turning the series into others that converge much faster [5]. The same thing can be done
by expanding the tail in $\eqref{eq:tail}$ in powers of $1/N$,

$$
\sum_{n > N} \frac{1}{n^2} = \frac{1}{N} - \frac{1}{2N^2} + \frac{1}{6N^3} - \frac{1}{30N^5} + \cdots,
$$

an instance of what is now called the Euler–Maclaurin formula. Adding the first three correction terms
to just ten terms of the series gives 1.64493440, correct to six decimals, where the raw sum is not
correct to even one.

Digits alone, though, do not name a number. Six decimals narrow the possibilities without deciding
between them, and nothing in 1.644934 announces a $\pi$, let alone a $\pi^2$. What the digits gave
Euler was a target: any formula he proposed would have to hit it. To get from the digits to the
formula took an idea, not more decimals.

## Euler's discovery, 1735

Knowing that something is true and knowing why are different kinds of knowledge, and the Basel
problem passed through both. Euler reached the first in 1735 [3], and his idea starts from something
every student of algebra knows. A polynomial $p$ with $p(0) = 1$ and nonzero roots
$r_1, \dots, r_d$ factors as

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
\begin{aligned}
\frac{\sin x}{x} &= \left(1 - \frac{x^2}{\pi^2}\right)\left(1 - \frac{x^2}{4\pi^2}\right) \\
&\qquad \times \left(1 - \frac{x^2}{9\pi^2}\right)\cdots
\end{aligned} \label{eq:product}
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
$-\frac{1}{6}$, the coefficient in $\eqref{eq:taylor}$, gives $\eqref{eq:euler}$ at once, and the value
$\pi^2/6 = 1.644\,934\,066\ldots$ agreed with every digit Euler had computed.

> [!REMARK]
> Write $\zeta(s) = \sum_{n \ge 1} 1/n^s$, the function Riemann later made famous, so that the Basel
> problem asks for $\zeta(2)$. Comparing the coefficients of $x^4$ in the same way gives
> $\zeta(4) = \pi^4/90$, and each further power gives the next even value $\zeta(2k)$ (Section 9).

As a proof, the argument has a gap, and it is a real one: a function is not determined by its zeros.
The function $e^x \sin x / x$ vanishes at exactly the same points as $\sin x / x$, yet its
coefficient of $x^2$ is $1/3$, not $-1/6$. Something special about the sine must rule out such an
extra factor, and nobody could say what until Weierstrass's factorization theorem of 1876 [6] showed
that $\eqref{eq:product}$ holds. Euler knew the gap was there. The digits convinced him, so he did
what mathematicians still do with a result they believe but cannot yet prove: he kept looking for
another way in.

## Euler's proof, 1741

The argument Euler wrote down in 1741 and published in 1743 [7] avoids infinite products altogether.
It rests on a single observation, and on one of the most useful habits in mathematics: computing the
same quantity in two different ways.

The observation is that the derivative of $\arcsin x$ is $1/\sqrt{1 - x^2}$. So the function
$\arcsin x / \sqrt{1 - x^2}$ is the derivative of $\frac12 (\arcsin x)^2$, and its integral from 0
to 1 is easy: $\frac12 (\pi/2)^2 = \pi^2/8$. Now compute the same integral a second way, by expanding
$\arcsin x$ in powers of $x$ and integrating term by term. Each term leads to an integral that the
substitution $x = \sin t$ turns into a classical one, known today as a Wallis integral, and the two
answers must agree. One of them is $\pi^2/8$; the other turns out to be the sum of the reciprocals of
the odd squares. Here is the one integral the argument needs.

> [!LEMMA]
> For every integer $n \ge 0$,
>
> $$
> \int_0^1 \frac{x^{2n+1}}{\sqrt{1 - x^2}}\, dx = \frac{2 \cdot 4 \cdots (2n)}{3 \cdot 5 \cdots (2n+1)},
> $$
>
> where both products are 1 when $n = 0$.

> [!PROOF]
> Substituting $x = \sin t$ turns the integral into $I_n = \int_0^{\pi/2} \sin^{2n+1} t \, dt$.
> Integrating by parts gives $I_n = \frac{2n}{2n+1} I_{n-1}$ for $n \ge 1$, and $I_0 = 1$.

> [!PROOF] of Theorem 2, after Euler (1741)
> For $0 \le x < 1$ the arcsine has the power series
>
> $$
> \arcsin x = \sum_{n=0}^{\infty} \frac{1 \cdot 3 \cdots (2n-1)}{2 \cdot 4 \cdots (2n)} \cdot \frac{x^{2n+1}}{2n+1},
> $$
>
> whose coefficients are positive. Divide both sides by $\sqrt{1 - x^2}$ and integrate from 0 to 1.
> On the left, the substitution $u = \arcsin x$ gives $\int_0^{\pi/2} u \, du = \pi^2/8$. On the
> right, every term is nonnegative, so the series may be integrated term by term, and by Lemma 3 the
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

The cancellation in the middle of the proof is the heart of it. The coefficients of the arcsine and
the Wallis integrals are built from the same odd and even products, one upside down relative to the
other, and they cancel almost completely, leaving only $1/(2n+1)^2$. It is the kind of coincidence
that is not a coincidence: both come from the same function, the sine, seen from two sides.

Why only the odd squares? Because the arcsine series contains only odd powers. That costs nothing,
since the even squares are a quarter of the whole and the last line recovers the full sum. Every step
used tools Euler's readers already trusted: a power series, an integral and a substitution. Integrating
an infinite series term by term was accepted practice then; the modern justification, that the terms
are nonnegative (the monotone convergence theorem), came much later.

## Cauchy's proof, 1821

The proof below is Cauchy's, from his _Cours d'analyse_ of 1821 [8]; _Proofs from THE BOOK_ devotes a
chapter to this sum and its proofs [9]. It is a model of economy, and its plan is easy to state. For a
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
> \sum_{k=1}^{m} \cot^2 \frac{k\pi}{2m+1} = \frac{m(2m-1)}{3}.
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

> [!PROOF] of Theorem 2, after Cauchy (1821)
> For $0 < x < \pi/2$ we have $\sin x < x < \tan x$, and hence $\cot^2 x < 1/x^2 < 1 + \cot^2 x$.
> Apply this at the $m$ points $x_k = k\pi/(2m+1)$ and add. By Lemma 4,
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
nothing from complex analysis. The price of that simplicity is a little algebra; the reward is a proof
that a determined student can check line by line.

## By Fourier series

In the nineteenth century Fourier showed how to write a function as a sum of sines and cosines [10],
and his idea gives a proof that explains as much as it computes. The key is Parseval's identity, which
says that the mean square of a function equals the sum of the squares of its Fourier
coefficients [11]:

$$
\begin{aligned}
&\frac{1}{\pi} \int_{-\pi}^{\pi} f(x)^2 \, dx \\
&\qquad = \frac{a_0^2}{2} + \sum_{n=1}^{\infty} \left(a_n^2 + b_n^2\right).
\end{aligned} \label{eq:parseval}
$$

The best way to read this identity is as Pythagoras' theorem in infinitely many dimensions. Think of
the functions $\sin x$, $\sin 2x$, $\sin 3x$, … as directions in a space of functions. They are
mutually perpendicular, in the sense that the integral over $(-\pi, \pi)$ of the product of two
different ones is zero. A Fourier series writes a function as a combination of these directions, and
its coefficients are the function's coordinates. Parseval's identity then says what Pythagoras says
about a vector in the plane: the square of its length, here measured by the integral of $f^2$, is the
sum of the squares of its coordinates.

So the question becomes: which simple function has coordinates whose squares are $1/n^2$? The
answer is the simplest function there is.

> [!PROPOSITION]
> On $(-\pi, \pi)$, the function $f(x) = x$ has the Fourier series
>
> $$
> x = 2 \sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n} \sin nx.
> $$

> [!PROOF]
> The function is odd, so every $a_n$ is 0, and integrating by parts,
> $b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} x \sin nx \, dx = \frac{2(-1)^{n+1}}{n}$.

> [!PROOF] of Theorem 2, by Parseval's identity
> Apply $\eqref{eq:parseval}$ to $f(x) = x$. The left-hand side is
> $\frac{1}{\pi} \cdot \frac{2\pi^3}{3} = \frac{2\pi^2}{3}$, and by Proposition 5 the right-hand side
> is $\sum 4/n^2$. So $\sum 1/n^2 = \frac{2\pi^2}{3} \cdot \frac{1}{4} = \frac{\pi^2}{6}$.

Seen this way, the Basel sum is the squared length of a straight line, $f(x) = x$, measured in the
coordinates of waves, and $\pi$ enters because waves are periodic with period $2\pi$. The whole weight
of the proof rests on Parseval's identity, which is where the real analysis lies. Applied to other
functions, the same computation gives every even value $\zeta(2k)$; the polynomials that play the role
of $x$ are the Bernoulli polynomials.

## By a double integral

The last proof turns the sum into an area. It was found in 1983 in a version by Apostol [12], and in
the form below by Beukers, Calabi and Kolk in 1993 [13]. The idea has two steps. First, write the sum
as an integral over a square; a geometric series does that. Then find a change of variables that
makes the integrand disappear, so that only an area is left.

> [!LEMMA]
> $$
> \begin{aligned}
> &\int_0^1 \!\! \int_0^1 \frac{dx \, dy}{1 - x^2 y^2} \\
> &\qquad = \sum_{k=0}^{\infty} \frac{1}{(2k+1)^2}.
> \end{aligned} \label{eq:double}
> $$

> [!PROOF]
> For $0 \le x, y < 1$, expand $1/(1 - x^2y^2) = \sum_{k \ge 0} x^{2k} y^{2k}$. The terms are
> nonnegative, so the series may be integrated term by term, and
> $\int_0^1 \int_0^1 x^{2k} y^{2k} \, dx \, dy = 1/(2k+1)^2$.

The second step is where the ingenuity lies. When we change variables in a double integral, the area
element picks up a factor, the Jacobian determinant, which measures how much the map stretches areas.
Calabi's substitution is designed so that this factor is exactly $1 - x^2 y^2$, the denominator of the
integrand. The two cancel, and the integral becomes the area of the region we started from.

> [!PROOF] of Theorem 2, by a double integral
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

This time $\pi$ enters as the length of the legs of a right triangle, $\pi/2$, and the Basel sum is
four thirds of that triangle's area. Two of the proofs meet at the same number, $\pi^2/8$ for the odd
squares, from opposite directions: Euler's by an integral in one variable, this one by an area in two.
Integrals of this kind reach further, too, as Section 9 shows.

## Where the π comes from {#where-pi-comes-from}

| Route | Year | Tool | Leads to |
|---|--:|---|---|
| Euler's product | 1735 | the sine as an infinite product | every $\zeta(2k)$; rigorous after 1876 |
| Euler's arcsine integral | 1741 | a power series and an integral | the odd squares, $\pi^2/8$ |
| Cauchy's squeeze | 1821 | trigonometry and two inequalities | higher even powers, with more algebra |
| Parseval's identity | 19th c. | Fourier series | every $\zeta(2k)$, via Bernoulli polynomials |
| A double integral | 1983–93 | a change of variables | $\zeta(2k)$ as volumes; integrals for $\zeta(3)$ |

Table: Five routes to $\pi^2/6$, from 1735 to 1993.

Each route answers the question "where does $\pi$ come from?" differently. For Euler's product, it is
the spacing of the zeros of the sine. For the arcsine proof, it is the angle $\pi/2$ whose sine is 1.
For Cauchy, it is the angles at which $\sin((2m+1)x)$ vanishes. For Parseval, it is the period of the
waves; for the double integral, the legs of a triangle. They are all the same circle, seen from
different places, and a problem that can be approached from so many directions is usually telling us
that it sits at a crossroads of mathematics.

## What "solved" meant, and what is still open

The problem was solved in 1735 in the sense that mattered to Euler: he had the answer and good reason
to trust it. It was solved in the sense that matters to a proof in 1741, when every step could be
checked by the standards of the day. By today's standards, it was secured in the nineteenth century,
when the notions of limit and convergence that the arguments quietly rely on were finally made
precise. And it has been solved again every few decades since, each new proof a small lesson in a
different part of mathematics.

Euler's method [3] also reaches every even value, because each further coefficient of
$\eqref{eq:product}$ gives the next even sum. In the form he later gave it,

$$
\begin{gathered}
\zeta(2k) = \frac{(-1)^{k+1} B_{2k} (2\pi)^{2k}}{2\,(2k)!}, \\
\zeta(2) = \frac{\pi^2}{6}, \quad \zeta(4) = \frac{\pi^4}{90}, \quad \zeta(6) = \frac{\pi^6}{945},
\end{gathered}
$$

where $B_2 = 1/6$, $B_4 = -1/30$, $B_6 = 1/42$, … are the Bernoulli numbers. Every even value is a
rational multiple of a power of $\pi$.

> [!REMARK]
> The reciprocal $6/\pi^2 \approx 0.6079$ has a meaning of its own: it is the probability that two
> integers chosen at random have no common factor.[^coprime]

For the odd values, nothing of the kind is known, and not for want of trying. The first real progress
came only in 1978, when Roger Apéry announced that $\zeta(3) = 1.202\,056\,9\ldots$ is irrational; the
proof appeared the next year [14]. His talk was so sketchy that much of the audience dismissed it, but
Henri Cohen, Hendrik Lenstra and Alfred van der Poorten set out to check the argument, and within two
months it stood. Van der Poorten's account [15] is still the most engaging way into it, and Beukers
soon gave a shorter proof with integrals close to $\eqref{eq:double}$ [16]. Even so, no formula for
$\zeta(3)$ has been found, and nobody knows whether $\zeta(5)$ is irrational. Rivoal showed that
infinitely many of the odd values are [17], and Zudilin that at least one of $\zeta(5)$, $\zeta(7)$,
$\zeta(9)$, $\zeta(11)$ is [18].

What has not been solved, then, is the same question one power up. Nobody has found a closed form for
$1 + \frac{1}{8} + \frac{1}{27} + \cdots$, the sum of the reciprocals of the cubes, and after almost
three centuries that silence is itself a kind of information: whatever made the even powers yield to
Euler does not reach the odd ones.

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
5. L. Euler, “De summatione innumerabilium progressionum,” _Commentarii academiae scientiarum
   Petropolitanae_ 5 (1738), 91–105. Written in 1731; Eneström index E20; facsimile in the
   [Euler Archive](https://scholarlycommons.pacific.edu/euler-works/20/).
6. K. Weierstrass, “Zur Theorie der eindeutigen analytischen Functionen,” _Abhandlungen der
   Königlich Preussischen Akademie der Wissenschaften zu Berlin_ (1876).
7. L. Euler, “Démonstration de la somme de cette suite 1 + 1/4 + 1/9 + 1/16 + …,” _Journal
   littéraire d'Allemagne, de Suisse et du Nord_ 2 (1743), 115–127. Written in 1741; Eneström index
   E63; facsimile in the [Euler Archive](https://scholarlycommons.pacific.edu/euler-works/63/).
8. A.-L. Cauchy, _Cours d'analyse de l'École royale polytechnique_, Paris, 1821, Note VIII.
9. M. Aigner and G. M. Ziegler, _Proofs from THE BOOK_, 6th ed., Springer, 2018, chapter “Three
   times π²/6.” [doi:10.1007/978-3-662-57265-8](https://doi.org/10.1007/978-3-662-57265-8)
10. J. Fourier, _Théorie analytique de la chaleur_, Paris, 1822.
11. E. M. Stein and R. Shakarchi, _Fourier Analysis: An Introduction_, Princeton University Press,
    2003.
12. T. M. Apostol, “A proof that Euler missed: evaluating ζ(2) the easy way,” _The Mathematical
    Intelligencer_ 5:3 (1983), 59–60.
    [doi:10.1007/BF03026576](https://doi.org/10.1007/BF03026576)
13. F. Beukers, E. Calabi and J. A. C. Kolk, “Sums of generalized harmonic series and volumes,”
    _Nieuw Archief voor Wiskunde_ (4) 11 (1993), 217–224.
14. R. Apéry, “Irrationalité de ζ(2) et ζ(3),” _Astérisque_ 61 (1979), 11–13. Available from
    [Numdam](http://www.numdam.org/item/AST_1979__61__11_0/).
15. A. van der Poorten, “A proof that Euler missed … Apéry's proof of the irrationality of ζ(3),”
    _The Mathematical Intelligencer_ 1:4 (1979), 195–203.
    [doi:10.1007/BF03028234](https://doi.org/10.1007/BF03028234)
16. F. Beukers, “A note on the irrationality of ζ(2) and ζ(3),” _Bulletin of the London Mathematical
    Society_ 11 (1979), 268–272. [doi:10.1112/blms/11.3.268](https://doi.org/10.1112/blms/11.3.268)
17. T. Rivoal, “La fonction zêta de Riemann prend une infinité de valeurs irrationnelles aux entiers
    impairs,” _Comptes Rendus de l'Académie des Sciences, Série I_ 331 (2000), 267–270.
    [doi:10.1016/S0764-4442(00)01624-4](https://doi.org/10.1016/S0764-4442(00)01624-4)
18. W. Zudilin, “One of the numbers ζ(5), ζ(7), ζ(9), ζ(11) is irrational,” _Russian Mathematical
    Surveys_ 56 (2001), 774–776.
    [doi:10.1070/RM2001v056n04ABEH000427](https://doi.org/10.1070/RM2001v056n04ABEH000427)

[^bernoulli]: Bernoulli ended his discussion of the series with a plea: whoever found its sum and
    sent it to him would have his gratitude.

[^coprime]: Two integers are coprime when no prime divides both. A prime $p$ divides two random
    integers with probability $1/p^2$, so, treating the primes as independent, the probability is
    $\prod_p (1 - 1/p^2)$. Euler's product formula $\zeta(s) = \prod_p (1 - p^{-s})^{-1}$ turns this
    into $1/\zeta(2) = 6/\pi^2$.
