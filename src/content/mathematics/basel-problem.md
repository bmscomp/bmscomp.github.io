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
  even powers, which Euler's method settles, and the odd powers, which are still open. Every tool the
  proofs use is explained where it first appears, from the meaning of an infinite sum to Fourier series
  and changes of variables, so that a reader who remembers some calculus can check each step.
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

the sum of the reciprocals of the squares: one, plus a quarter, plus a ninth, plus a sixteenth, and so
on without end.

It was a natural question to ask. Nicole Oresme had shown in the fourteenth century that the harmonic
series $1 + \frac12 + \frac13 + \cdots$ grows without bound, and Mengoli had just proved that the
alternating series $1 - \frac12 + \frac13 - \cdots$ adds up to $\ln 2$. Squaring the denominators makes
the terms shrink much faster, so this sum stays finite; the question is what it equals. Jakob
Bernoulli proved that it is less than 2, spread the question, and admitted that its exact value had
defeated him [2].[^bernoulli] The problem is named after Basel, the city of the Bernoullis and of the
man who finally solved it, Leonhard Euler, in 1735 [3]. Ayoub tells the whole story [4].

This article follows both halves of that story, and it explains every tool along the way. First the
problem: what it means to add infinitely many numbers, why this sum is finite, why adding terms gets
nowhere, and why the answer is a surprise. Then the solving, in the order it happened: Euler's
discovery in 1735, the proof he found in 1741, Cauchy's proof of 1821, which needs nothing beyond
trigonometry, and two modern proofs, by Fourier series and by a double integral. Each proof finds the
$\pi$ in a different place, and Section 8 puts them side by side.

## The problem

### What an infinite sum means

Nobody can add infinitely many numbers one after another; the additions would never end. What we can
do is add the first few and watch what happens. The sum of the first $N$ terms is called the $N$-th
partial sum,

$$
S_N = 1 + \frac{1}{4} + \frac{1}{9} + \cdots + \frac{1}{N^2},
$$

and the infinite sum is defined as the number these partial sums approach as $N$ grows, if there is
one.

A simpler series shows the idea. Walk halfway across a room, then half the remaining distance, then
half of what is left, and so on. The distances are $\frac12, \frac14, \frac18, \dots$, and after $N$
steps you have covered $1 - 1/2^N$ of the room. You never arrive, but the gap $1/2^N$ shrinks below any
bound you care to name, and so

$$
\frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \cdots = 1.
$$

That is exactly what the equals sign means for an infinite sum. Here is the definition in full.

> [!DEFINITION]
> A series $a_1 + a_2 + a_3 + \cdots$ converges to a number $S$, its sum, when the partial sums
> $S_N = a_1 + \cdots + a_N$ come as close to $S$ as we like and stay there: for every $\varepsilon > 0$
> there is an $N_0$ such that $|S_N - S| < \varepsilon$ for every $N \ge N_0$. A series that does not
> converge diverges.

The Basel problem therefore asks two questions in one. Do the partial sums of $\eqref{eq:basel}$
approach a limit at all? And if they do, which number is it?

### Small terms are not enough

For a series to converge, its terms must shrink to zero; otherwise every step adds at least some fixed
amount, and the partial sums run off. But shrinking is not enough, and the harmonic series
$1 + \frac12 + \frac13 + \frac14 + \cdots$ is the standard warning. Its terms shrink to zero, yet its
partial sums grow without bound. The argument, which goes back to Oresme, groups the terms in blocks
that end at powers of 2:

$$
1 + \tfrac{1}{2} + \left(\tfrac{1}{3} + \tfrac{1}{4}\right) + \left(\tfrac{1}{5} + \cdots + \tfrac{1}{8}\right) + \cdots
$$

Each block adds up to at least $\frac12$. The two terms in the first bracket are each at least
$\frac14$; the four in the second are each at least $\frac18$; the eight in the next are each at least
$\frac{1}{16}$, and so on. So the first $2^k$ terms add up to at least $1 + k/2$, which passes any
number you name once $k$ is large enough. The growth is extremely slow, though: the partial sums pass 5
at the 83rd term, and 10 only at the 12,367th. A series can diverge while looking, to anyone adding
terms by hand, as if it were settling down.

Signs can change the picture. Mengoli's alternating series $1 - \frac12 + \frac13 - \frac14 + \cdots$
has the same terms, but each one partly cancels the one before, and the partial sums settle down to
$\ln 2 = 0.693\ldots$. The Basel series has no such help: all its terms are positive, so the only
question is whether they shrink fast enough.

### The squares converge

They do. The squares grow much faster than the whole numbers, so their reciprocals shrink much faster:
the thousandth term of the harmonic series is one thousandth, while the thousandth term of
$\eqref{eq:basel}$ is one millionth. Jakob Bernoulli turned that into a proof by comparing the series
with one whose partial sums can be computed exactly.

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
> neighbour, and only $1 - 1/N$ is left. So the partial sums satisfy $S_N < 1 + (1 - 1/N) < 2$. They
> increase and are bounded, so they converge, and the limit is at least the first term, 1.

Two ideas in this proof deserve a closer look. The first is the telescoping. Written out for $N = 4$,
the comparison sum is

$$
\begin{aligned}
&\frac{1}{1 \cdot 2} + \frac{1}{2 \cdot 3} + \frac{1}{3 \cdot 4} \\
&\quad = \left(1 - \tfrac{1}{2}\right) + \left(\tfrac{1}{2} - \tfrac{1}{3}\right) + \left(\tfrac{1}{3} - \tfrac{1}{4}\right) \\
&\quad = 1 - \tfrac{1}{4},
\end{aligned}
$$

because each fraction subtracted in one bracket is added back in the next, and the sum collapses like
the sections of a telescope sliding into one another. However many terms we take, only the first and
the last survive.

The second is the step from bounded to convergent. The partial sums only go up, since every term is
positive, and they never pass 2. A sequence that keeps increasing but stays below a ceiling cannot
wander: it has to crowd towards some number at or below the ceiling. That such a sequence always has
a limit is a basic property of the real numbers, called completeness, and it is why the proof can
promise a sum without saying what the sum is.

### A strange answer

So the sum lies somewhere between 1 and 2, and the proof says nothing about where. That is the hard
part, and it is the part Euler solved. The answer, which Sections 4 to 7 prove in four different ways,
is this.

> [!THEOREM] Euler, 1735
> The sum of the reciprocals of the squares is $\pi^2/6$:
>
> $$
> 1 + \frac{1}{4} + \frac{1}{9} + \cdots = \frac{\pi^2}{6}. \label{eq:euler}
> $$

This is a strange answer, for two reasons. The first is where it comes from. The number $\pi$ is born
from circles: it is the ratio of a circle's circumference to its diameter. Nothing in
$\eqref{eq:basel}$ mentions a circle; the sum is built from whole numbers alone. The second is what
kind of number it is. Every partial sum $S_N$ is a fraction, a ratio of two whole numbers, yet their
limit $\pi^2/6$ is not a fraction at all: it is irrational, as Section 9 explains. The partial sums
close in on a number that none of them can ever equal.

Much of the charm of the problem, and the key to every solution of it, lies in finding where the
circle is hiding. Euler found it in the zeros of the sine.

## Why the sum resisted

### How slowly the terms run out

An engineer's first instinct is to add terms until the answer settles and then recognise the number.
Here that instinct fails, and the comparison in Proposition 2 tells us how badly. What is missing after
$N$ terms, the tail $\sum_{n > N} 1/n^2$, is squeezed between two telescoping sums. Since

$$
\frac{1}{n(n+1)} < \frac{1}{n^2} < \frac{1}{(n-1)n},
$$

and the outer sums, taken over $n$ from $N + 1$ on, telescope to $1/(N+1)$ and $1/N$,

$$
\frac{1}{N+1} < \sum_{n > N} \frac{1}{n^2} < \frac{1}{N}. \label{eq:tail}
$$

There is a picture behind this. The terms $1/n^2$ are the heights of the curve $y = 1/x^2$ at the whole
numbers, so adding them is like adding the areas of rectangles of width 1 that sit under the curve.
The area under the curve from $N$ to infinity is $\int_N^\infty dx/x^2 = 1/N$, and the rectangles fill
most of it, so the tail is just under $1/N$.

The error after $N$ terms is therefore about $1/N$, and each further correct digit costs ten times as
many terms. A thousand terms give 1.643935, of which only the first three digits are right (Table 1).
Six correct decimals would take about two million terms. Adding terms and guessing was hopeless in the
seventeenth century, and it would still be slow today.

| Terms $N$ | Partial sum $S_N$ | Error times $N$ |
|--:|--:|--:|
| $10$ | 1.549768 | 0.951663 |
| $10^2$ | 1.634984 | 0.995017 |
| $10^3$ | 1.643935 | 0.999500 |
| $10^4$ | 1.644834 | 0.999950 |
| $10^5$ | 1.644924 | 0.999995 |
| $10^6$ | 1.644933 | 1.000000 |

Table: Partial sums of the series. The error left after $N$ terms is close to $1/N$, as $\eqref{eq:tail}$ predicts.

The last column multiplies the error by $N$. It settles at 1, which is $\eqref{eq:tail}$ at work: a
hundred times more terms buy exactly two more digits, and not one more.

### Euler's shortcut

Euler found a way round this before he found the answer. In 1731 he computed the sum to six decimals,
1.644934, by turning the series into others that converge much faster [5]. The idea behind such
accelerations can be seen in the tail. Instead of only trapping it between $1/(N+1)$ and $1/N$, we can
describe it more and more exactly, as $1/N$ plus corrections in higher and higher powers of $1/N$:

$$
\begin{aligned}
\sum_{n > N} \frac{1}{n^2} &= \frac{1}{N} - \frac{1}{2N^2} \\
&\qquad + \frac{1}{6N^3} - \frac{1}{30N^5} + \cdots
\end{aligned} \label{eq:em}
$$

The first term is the area under the curve from the picture above. The second is a correction of half
a term, of the kind the trapezoid rule makes when it replaces a curve by straight segments, and the
later ones correct the correction. This is an instance of what is now called the Euler–Maclaurin
formula, which relates sums to integrals in general. The expansion does not converge if it is continued
forever, but its first few terms are remarkably accurate, and the numbers $\frac16$ and
$-\frac{1}{30}$ in it are not accidental: they are Bernoulli numbers, which return in Section 9.

Adding the first three corrections to just ten terms of the series gives 1.64493440, correct to six
decimals, where the raw sum of ten terms is not correct to even one. Ten terms and a little algebra do
the work of two million terms of brute force.

### Digits are not a formula

Digits alone, though, do not name a number. Six decimals narrow the possibilities without deciding
between them, and nothing in 1.644934 announces a $\pi$, let alone a $\pi^2$. In hindsight the clue is
there: multiply 1.644934 by 6 and take the square root, and out comes 3.141592…, the first seven digits
of $\pi$. But nobody would try that particular pair of operations without already suspecting the
answer. What the digits gave Euler was a target: any formula he proposed would have to hit it. To get
from the digits to a formula took an idea, not more decimals.

## Euler's discovery, 1735

Knowing that something is true and knowing why are different kinds of knowledge, and the Basel
problem passed through both. Euler reached the first in 1735 [3], with an argument that borrows a fact
about polynomials and applies it where it has no right to apply.

### Polynomials and their roots

A polynomial is determined, up to a constant factor, by its roots. If a polynomial $p$ of degree $d$
has the nonzero roots $r_1, \dots, r_d$ and takes the value 1 at $x = 0$, then

$$
p(x) = \left(1 - \frac{x}{r_1}\right)\left(1 - \frac{x}{r_2}\right) \cdots \left(1 - \frac{x}{r_d}\right).
$$

Each factor vanishes at one root and equals 1 at 0, so the product has the right roots and the right
value at 0, and a polynomial of degree $d$ with $d$ given roots has no freedom left beyond a constant
factor.

Multiplying out this product connects the roots with the coefficients. To get the term in $x$, take the
$x$ from one factor and the 1 from every other; so the coefficient of $x$ is $-(1/r_1 + \cdots + 1/r_d)$,
minus the sum of the reciprocals of the roots. With two roots, 2 and 3:

$$
\left(1 - \frac{x}{2}\right)\left(1 - \frac{x}{3}\right) = 1 - \left(\frac{1}{2} + \frac{1}{3}\right)x + \frac{x^2}{6}.
$$

Knowing the roots of a polynomial tells us sums of reciprocals of its roots, and the Basel problem asks
for exactly such a sum. The question becomes: which function has roots whose reciprocals, squared, are
the numbers $1/n^2$?

### The sine as a polynomial of infinite degree

The sine vanishes at every multiple of $\pi$: at 0, at $\pm\pi$, at $\pm 2\pi$, and so on. Dividing by
$x$ removes the root at 0 and leaves a function that equals 1 there, since $\sin x / x$ approaches 1 as
$x$ approaches 0. The function $\sin x / x$ therefore vanishes exactly at
$x = \pm\pi, \pm 2\pi, \pm 3\pi, \dots$, and takes the value 1 at the origin, just like the polynomial
$p$ above.

Euler treated $\sin x / x$ as if it were a polynomial of infinite degree with these roots. Pairing each
root $n\pi$ with its negative $-n\pi$ gives a factor in $x^2$ alone,

$$
\left(1 - \frac{x}{n\pi}\right)\left(1 + \frac{x}{n\pi}\right) = 1 - \frac{x^2}{n^2\pi^2},
$$

and multiplying all of them together, he wrote

$$
\begin{aligned}
\frac{\sin x}{x} &= \left(1 - \frac{x^2}{\pi^2}\right)\left(1 - \frac{x^2}{4\pi^2}\right) \\
&\qquad \times \left(1 - \frac{x^2}{9\pi^2}\right)\cdots
\end{aligned} \label{eq:product}
$$

Here is the circle. The roots of the sine are the multiples of $\pi$, so the reciprocals of the squared
roots are $\frac{1}{\pi^2} \cdot \frac{1}{n^2}$: our series, divided by $\pi^2$.

### The same function, written twice

There is a second way to write $\sin x / x$ as a polynomial of infinite degree: its Taylor series. The
Taylor series of a function at 0 is the power series whose coefficients match all the function's
derivatives there. The derivatives of the sine cycle through $\sin$, $\cos$, $-\sin$ and $-\cos$, whose
values at 0 are 0, 1, 0 and $-1$, and so

$$
\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots = x - \frac{x^3}{6} + \frac{x^5}{120} - \cdots
$$

for every $x$. Dividing by $x$,

$$
\frac{\sin x}{x} = 1 - \frac{x^2}{6} + \frac{x^4}{120} - \cdots \label{eq:taylor}
$$

Unlike the product, this series stands on solid ground; nobody doubts it. The trick is to put the two
side by side.

### Comparing coefficients

Multiply out the product $\eqref{eq:product}$ and collect the terms in $x^2$. With only the first two
factors,

$$
\left(1 - \frac{x^2}{\pi^2}\right)\left(1 - \frac{x^2}{4\pi^2}\right) = 1 - \frac{1}{\pi^2}\left(1 + \frac{1}{4}\right)x^2 + \frac{x^4}{4\pi^4}.
$$

Each further factor $1 - x^2/(n^2\pi^2)$ adds $-1/(n^2\pi^2)$ to the coefficient of $x^2$, because the
only way to get a term in $x^2$ is to take it from one factor and 1 from all the others. With all the
factors, the coefficient of $x^2$ is

$$
-\frac{1}{\pi^2}\left(1 + \frac{1}{4} + \frac{1}{9} + \cdots\right).
$$

In $\eqref{eq:taylor}$ the same coefficient is $-\frac16$. If the two expressions are the same
function, their coefficients must agree, and setting them equal,

$$
-\frac{1}{\pi^2} \sum_{n=1}^{\infty} \frac{1}{n^2} = -\frac{1}{6},
$$

gives $\eqref{eq:euler}$ at once. The value $\pi^2/6 = 1.644\,934\,066\ldots$ agreed with every digit
Euler had computed.

> [!REMARK]
> Write $\zeta(s) = \sum_{n \ge 1} 1/n^s$, the function Riemann later made famous, so that the Basel
> problem asks for $\zeta(2)$. The same comparison one power higher gives $\zeta(4)$. In the product, a
> term in $x^4$ comes from choosing the $x^2$ terms of two different factors, so its coefficient is the
> sum of $1/(m^2 n^2 \pi^4)$ over all pairs $m < n$. That sum of products is half of
> $\zeta(2)^2 - \zeta(4)$, divided by $\pi^4$, and it must equal $\frac{1}{120}$, the coefficient in
> $\eqref{eq:taylor}$. So $\zeta(2)^2 - \zeta(4) = \pi^4/60$, and
> $\zeta(4) = \pi^4/36 - \pi^4/60 = \pi^4/90$. Each further power gives the next even value (Section 9).

### The gap

As a proof, the argument has a gap, and it is a real one: a function is not determined by its zeros.
Polynomials are, because a polynomial of degree $d$ has exactly $d$ roots and nothing else to adjust.
Functions defined by infinite series have more freedom. The function $e^x \sin x / x$ vanishes at
exactly the same points as $\sin x / x$, because $e^x$ is never zero, yet its Taylor series begins

$$
\begin{aligned}
e^x \cdot \frac{\sin x}{x} &= \left(1 + x + \frac{x^2}{2} + \cdots\right)\left(1 - \frac{x^2}{6} + \cdots\right) \\
&= 1 + x + \frac{x^2}{3} + \cdots,
\end{aligned}
$$

with $\frac13$ where the sine has $-\frac16$. Euler's argument, applied to this function, would give
nonsense. So something special about the sine must rule out such an extra factor.

The explanation came only with Weierstrass's factorization theorem of 1876 [6]. A function given by a
power series that converges for every $x$ can be written as a product over its zeros, up to one extra
factor of the form $e^{g(x)}$, which has no zeros at all. For the sine one can show that this extra
factor is 1, and then $\eqref{eq:product}$ holds exactly as Euler wrote it.

Euler knew the gap was there. The digits convinced him, so he did what mathematicians still do with a
result they believe but cannot yet prove: he kept looking for another way in.

## Euler's proof, 1741

The argument Euler wrote down in 1741 and published in 1743 [7] avoids infinite products altogether.
It rests on one of the most useful habits in mathematics: computing the same quantity in two different
ways, and reading off what the agreement says.

### One integral, two ways

The quantity is an integral,

$$
\int_0^1 \frac{\arcsin x}{\sqrt{1 - x^2}}\, dx.
$$

Computed one way, it is $\pi^2/8$. Computed the other way, term by term from a power series, it is the
sum of the reciprocals of the odd squares, $1 + \frac19 + \frac{1}{25} + \cdots$. The two answers must
be the same number, and from the odd squares the full sum follows in one line. To carry this out we
need three facts: the derivative of the arcsine, its power series, and a family of integrals known today
as Wallis integrals.

### The arcsine and its series

The arcsine undoes the sine: for $x$ between $-1$ and 1, $\arcsin x$ is the angle between $-\pi/2$ and
$\pi/2$ whose sine is $x$. Differentiating the identity $\sin(\arcsin x) = x$ gives
$\cos(\arcsin x) \cdot (\arcsin x)' = 1$, and the cosine of that angle is $\sqrt{1 - x^2}$, so

$$
\frac{d}{dx} \arcsin x = \frac{1}{\sqrt{1 - x^2}}.
$$

This settles the first computation. The integrand $\arcsin x / \sqrt{1 - x^2}$ is the derivative of
$\frac12 (\arcsin x)^2$, so its integral from 0 to 1 is $\frac12 (\arcsin 1)^2 = \frac12 (\pi/2)^2 = \pi^2/8$.

For the second computation we need $\arcsin x$ as a power series. Its coefficients are built from
the products of the odd and the even numbers, so it helps to give them a name:

$$
\begin{gathered}
c_n = \frac{1 \cdot 3 \cdots (2n-1)}{2 \cdot 4 \cdots (2n)}, \\
c_0 = 1, \quad c_1 = \frac{1}{2}, \quad c_2 = \frac{3}{8}, \quad c_3 = \frac{5}{16}.
\end{gathered}
$$

The binomial series expands, for $|t| < 1$,

$$
\frac{1}{\sqrt{1 - t}} = \sum_{n=0}^{\infty} c_n t^n = 1 + \frac{1}{2}\, t + \frac{3}{8}\, t^2 + \cdots
$$

Put $t = x^2$ and integrate term by term from 0 to $x$. Since the left-hand side becomes the derivative
of the arcsine, this gives, for $0 \le x < 1$,

$$
\arcsin x = \sum_{n=0}^{\infty} c_n \, \frac{x^{2n+1}}{2n+1}. \label{eq:arcsin}
$$

Keep an eye on the products of odd and even numbers inside $c_n$: another pair of the same kind is
about to appear, upside down.

### Wallis integrals

> [!LEMMA]
> For every integer $n \ge 0$,
>
> $$
> \int_0^1 \frac{x^{2n+1}}{\sqrt{1 - x^2}}\, dx = \frac{2 \cdot 4 \cdots (2n)}{3 \cdot 5 \cdots (2n+1)},
> $$
>
> where both products are 1 when $n = 0$.

> [!PROOF]
> Substituting $x = \sin t$, so that $dx = \cos t\, dt$ and $\sqrt{1 - x^2} = \cos t$, turns the
> integral into $I_n = \int_0^{\pi/2} \sin^{2n+1} t \, dt$. For $n = 0$ this is 1. For $n \ge 1$, write
> $\sin^{2n+1} t = \sin^{2n} t \cdot \sin t$ and integrate by parts, differentiating $\sin^{2n} t$ and
> integrating $\sin t$ to $-\cos t$. The boundary terms vanish, because $\cos(\pi/2) = 0$ and
> $\sin 0 = 0$, and with $\cos^2 t = 1 - \sin^2 t$ what remains is
>
> $$
> I_n = 2n \int_0^{\pi/2} \sin^{2n-1} t \, \cos^2 t \, dt = 2n \left(I_{n-1} - I_n\right).
> $$
>
> Solving for $I_n$ gives $I_n = \frac{2n}{2n+1} I_{n-1}$, and repeating this down to $I_0 = 1$ gives
> the product.

The first few values are $I_0 = 1$, $I_1 = \frac23$, $I_2 = \frac{8}{15}$ and $I_3 = \frac{16}{35}$.

### Putting the pieces together

> [!PROOF] of Theorem 3, after Euler (1741)
> Divide both sides of $\eqref{eq:arcsin}$ by $\sqrt{1 - x^2}$ and integrate from 0 to 1. The left-hand
> side gives $\pi^2/8$, as computed above. On the right, every term is nonnegative, so the series may be
> integrated term by term, and by Lemma 4 the $n$-th term becomes
>
> $$
> \begin{aligned}
> &c_n \cdot \frac{1}{2n+1} \cdot \frac{2 \cdot 4 \cdots (2n)}{3 \cdot 5 \cdots (2n+1)} \\
> &\qquad = \frac{1 \cdot 3 \cdots (2n-1)}{(2n+1) \cdot 3 \cdot 5 \cdots (2n+1)} = \frac{1}{(2n+1)^2}.
> \end{aligned}
> $$
>
> So the odd squares sum to $\pi^2/8$. The even squares contribute
> $\sum 1/(2m)^2 = \frac{1}{4} \sum 1/m^2$, hence
> $\sum 1/n^2 = \pi^2/8 + \frac{1}{4} \sum 1/n^2$, and $\sum 1/n^2 = \frac{4}{3} \cdot \frac{\pi^2}{8} = \frac{\pi^2}{6}$.

The cancellation in the middle of the proof is the heart of it, and it is worth checking by hand. For
$n = 1$ the arcsine coefficient is $c_1 = \frac12$, divided by 3, and the Wallis integral is $I_1 = \frac23$,
so the term is $\frac12 \cdot \frac13 \cdot \frac23 = \frac19$. For $n = 2$ it is
$\frac38 \cdot \frac15 \cdot \frac{8}{15} = \frac{1}{25}$. The coefficients of the arcsine and the
Wallis integrals are built from the same odd and even products, one upside down relative to the other,
and they cancel almost completely, leaving only $1/(2n+1)^2$. It is the kind of coincidence that is
not a coincidence: both come from the same function, the sine, seen from two sides.

Why only the odd squares? Because the arcsine series contains only odd powers. That costs nothing. The
even squares $\frac14 + \frac{1}{16} + \frac{1}{36} + \cdots$ are $\frac14$ of the whole sum, since
$1/(2m)^2 = \frac14 \cdot 1/m^2$, so the odd squares are the other three quarters, and the last line of
the proof undoes the split.

### Why it convinced his readers

Every step used tools Euler's readers already trusted: a power series, an integral and a substitution.
There is no infinite product and no assumption about zeros. One step would be questioned today:
integrating an infinite series term by term, which can go wrong in general. It was accepted practice
then; the modern justification, that the terms are nonnegative (the monotone convergence theorem),
came much later.

## Cauchy's proof, 1821

The proof below is Cauchy's, from his _Cours d'analyse_ of 1821 [8]; _Proofs from THE BOOK_ devotes a
chapter to this sum and its proofs [9]. It is a model of economy: no integrals and no infinite products,
only trigonometry, the binomial theorem and one limit at the end. Its plan fits in two sentences. For a
small angle $x$, the three numbers $\sin x$, $x$ and $\tan x$ are nearly equal, so $1/x^2$ is trapped
between two trigonometric expressions. If we choose the angles cleverly, those expressions can be
summed exactly, and then the trap closes on the partial sums of $\eqref{eq:basel}$.

### A squeeze between three functions

Draw a circle of radius 1 and an angle $x$ between 0 and $\pi/2$ at its centre. Three regions sit one
inside the next: a triangle inside the sector, with area $\frac12 \sin x$; the sector of the circle,
with area $\frac12 x$; and the right triangle whose far side touches the circle, with area
$\frac12 \tan x$. Their areas are therefore in order,

$$
\sin x < x < \tan x \qquad \text{for } 0 < x < \pi/2.
$$

Taking reciprocals reverses the inequalities, and squaring keeps them, so
$1/\tan^2 x < 1/x^2 < 1/\sin^2 x$. In terms of the cotangent, $\cot x = \cos x / \sin x$, this reads

$$
\cot^2 x < \frac{1}{x^2} < 1 + \cot^2 x,
$$

since $1/\sin^2 x = (\sin^2 x + \cos^2 x)/\sin^2 x = 1 + \cot^2 x$. Added up over well-chosen angles,
the middle term will produce the Basel series, and what we need is the sum of $\cot^2 x$ over the same
angles.

### Summing cotangents exactly

Why should such a sum be computable? The angles $k\pi/(2m+1)$, for $k = 1, \dots, m$, are exactly the
points between 0 and $\pi/2$ where $\sin((2m+1)x)$ vanishes. De Moivre's formula,
$(\cos x + i \sin x)^n = \cos nx + i \sin nx$, writes $\sin nx$ as the imaginary part of
$(\cos x + i \sin x)^n$, and expanding that power with the binomial theorem turns
$\sin((2m+1)x)$, divided by a power of $\sin x$, into a polynomial in $\cot^2 x$. So the numbers
$\cot^2(k\pi/(2m+1))$ are the roots of a polynomial we can write down.

Vieta's formulas then give their sum without our computing a single cotangent. For a polynomial
$a_m t^m + a_{m-1} t^{m-1} + \cdots$ with roots $t_1, \dots, t_m$, the roots add up to $-a_{m-1}/a_m$;
this is the same bookkeeping as in Section 3, where the coefficient of $x$ recorded the sum of the
reciprocals of the roots.

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

The lemma is easy to test. For $m = 1$ it says $\cot^2(\pi/3) = \frac13$, and indeed
$\cot(\pi/3) = 1/\sqrt3$. For $m = 2$ it says $\cot^2(\pi/5) + \cot^2(2\pi/5) = 2$; numerically the two
terms are 1.8944 and 0.1056. For $m = 3$ the three squared cotangents add up to exactly 5.

### Closing the squeeze

> [!PROOF] of Theorem 3, after Cauchy (1821)
> For $0 < x < \pi/2$ we have $\sin x < x < \tan x$, and hence $\cot^2 x < 1/x^2 < 1 + \cot^2 x$.
> Apply this at the $m$ points $x_k = k\pi/(2m+1)$ and add. By Lemma 5,
>
> $$
> \frac{m(2m-1)}{3} < \frac{(2m+1)^2}{\pi^2} \sum_{k=1}^{m} \frac{1}{k^2} < m + \frac{m(2m-1)}{3}.
> $$
>
> Multiplying by $\pi^2/(2m+1)^2$ traps the partial sum $S_m$ between
> $\pi^2 m(2m-1) / 3(2m+1)^2$ and $\pi^2\, 2m(m+1) / 3(2m+1)^2$. As $m \to \infty$ both bounds tend
> to $2\pi^2/12 = \pi^2/6$, and so does $S_m$.

The last step deserves a word. For large $m$, the numerator $m(2m-1)$ behaves like $2m^2$ and the
denominator $3(2m+1)^2$ like $12m^2$, so the lower bound approaches $\pi^2 \cdot 2/12 = \pi^2/6$, and
the upper bound does the same. The upper bound is in fact exactly
$\frac{\pi^2}{6}\bigl(1 - \frac{1}{(2m+1)^2}\bigr)$, so it approaches the limit quickly: for
$m = 1000$ it falls short of $\pi^2/6$ by only $4 \times 10^{-7}$.

Notice what the proof did not need: no calculus beyond one limit at the very end, no infinite products,
nothing from complex analysis beyond the formula of de Moivre. The price of that simplicity is a little
algebra; the reward is a proof that a determined student can check line by line.

## By Fourier series

In the nineteenth century Fourier showed how to write a function as a sum of sines and cosines [10],
and his idea gives a proof that explains as much as it computes.

### Functions as sums of waves

A Fourier series writes a function on the interval $(-\pi, \pi)$ as a combination of waves whose
frequencies are whole numbers:

$$
f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} \left(a_n \cos nx + b_n \sin nx\right).
$$

The coefficients measure how much of each wave the function contains, and they are computed by
integrals:

$$
\begin{gathered}
a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos nx \, dx, \\
b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin nx \, dx.
\end{gathered}
$$

An engineer would call them the spectrum of $f$: they say how strongly each frequency is present.

### Perpendicular functions

Why do those integrals pick out the coefficients? Because the waves are perpendicular to one another,
in a sense that can be made precise. For two functions on $(-\pi, \pi)$, take
$\frac{1}{\pi} \int_{-\pi}^{\pi} f(x) g(x) \, dx$ as their inner product; it plays the role of the dot
product of two vectors. For whole numbers $m, n \ge 1$, the identity
$\sin mx \sin nx = \frac12\bigl(\cos(m-n)x - \cos(m+n)x\bigr)$ shows that

$$
\frac{1}{\pi} \int_{-\pi}^{\pi} \sin mx \, \sin nx \, dx = \begin{cases} 1 & \text{if } m = n, \\ 0 & \text{if } m \ne n, \end{cases}
$$

because the cosine of a nonzero whole multiple of $x$ integrates to zero over a full period. The same
holds for the cosines, and every sine is perpendicular to every cosine. So the waves behave like unit
vectors along the axes of a space with infinitely many directions, and the coefficient $b_n$ is the
component of $f$ along $\sin nx$, found by an inner product exactly as the component of a vector is
found by a dot product.

### Pythagoras in infinitely many dimensions

In the plane, a vector with coordinates $(3, 4)$ has length 5, because $3^2 + 4^2 = 5^2$. In space,
the vector $(1, 2, 2)$ has length 3, because $1 + 4 + 4 = 9$. Whenever the axes are perpendicular, the
square of the length is the sum of the squares of the coordinates. Parseval's identity says the same
thing for functions [11]: the squared length of $f$, measured by the integral of $f^2$, is the sum of
the squares of its coordinates along the waves,

$$
\begin{aligned}
&\frac{1}{\pi} \int_{-\pi}^{\pi} f(x)^2 \, dx \\
&\qquad = \frac{a_0^2}{2} + \sum_{n=1}^{\infty} \left(a_n^2 + b_n^2\right).
\end{aligned} \label{eq:parseval}
$$

The $a_0^2/2$ comes from the constant term, whose own length is not 1; that is bookkeeping. The
substance of the identity, and the real analysis in this proof, is that no length is lost in the
infinite sum: the waves are enough to build every function whose square has a finite integral, so its
coordinates account for all of it.

### The function x

So the question becomes: which simple function has coordinates whose squares are $1/n^2$? The answer
is the simplest function there is.

> [!PROPOSITION]
> On $(-\pi, \pi)$, the function $f(x) = x$ has the Fourier series
>
> $$
> x = 2 \sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n} \sin nx.
> $$

> [!PROOF]
> The function is odd, $f(-x) = -f(x)$, and the cosine is even, so each $a_n$ is the integral of an odd
> function over an interval symmetric about 0, which is 0. For $b_n$, integrate by parts,
> differentiating $x$ and integrating $\sin nx$ to $-\cos(nx)/n$:
>
> $$
> \begin{aligned}
> \int_{-\pi}^{\pi} x \sin nx \, dx &= \left[-\frac{x \cos nx}{n}\right]_{-\pi}^{\pi} + \frac{1}{n} \int_{-\pi}^{\pi} \cos nx \, dx \\
> &= -\frac{2\pi \cos n\pi}{n} + 0.
> \end{aligned}
> $$
>
> Since $\cos n\pi = (-1)^n$, this is $2\pi(-1)^{n+1}/n$, and $b_n = 2(-1)^{n+1}/n$.

Repeated periodically, the function $x$ on $(-\pi, \pi)$ becomes a sawtooth: it climbs steadily, drops
back, and climbs again. The proposition says that a sawtooth is built from sine waves whose strength
falls off like $1/n$, and the squares of those strengths are, up to a factor 4, the terms of the Basel
series.

### The sum as a squared length

> [!PROOF] of Theorem 3, by Parseval's identity
> Apply $\eqref{eq:parseval}$ to $f(x) = x$. The left-hand side is
> $\frac{1}{\pi} \cdot \frac{2\pi^3}{3} = \frac{2\pi^2}{3}$, and by Proposition 6 the right-hand side
> is $\sum 4/n^2$. So $\sum 1/n^2 = \frac{2\pi^2}{3} \cdot \frac{1}{4} = \frac{\pi^2}{6}$.

Seen this way, the Basel sum is the squared length of a straight line, $f(x) = x$, measured in the
coordinates of waves, and $\pi$ enters because waves are periodic with period $2\pi$. The whole weight
of the proof rests on Parseval's identity, which is where the real analysis lies. Applied to other
functions, the same computation gives every even value $\zeta(2k)$; the polynomials that play the role
of $x$ are the Bernoulli polynomials.

## By a double integral

The last proof turns the sum into an area. It was found in 1983 in a version by Apostol [12], and in
the form below by Beukers, Calabi and Kolk in 1993 [13]. The idea has two steps. First, write the sum
as an integral over a square. Then find a change of variables that makes the integrand disappear, so
that only an area is left.

### From a sum to an area

The geometric series $1 + q + q^2 + \cdots = 1/(1 - q)$, valid for $|q| < 1$, turns a fraction into a
sum. With $q = x^2 y^2$, where $x$ and $y$ lie between 0 and 1, it gives

$$
\frac{1}{1 - x^2 y^2} = 1 + x^2 y^2 + x^4 y^4 + \cdots,
$$

and each term is easy to integrate over the unit square, because it splits into a function of $x$
times a function of $y$: the integral of $x^{2k} y^{2k}$ is
$\int_0^1 x^{2k} dx \cdot \int_0^1 y^{2k} dy = \frac{1}{2k+1} \cdot \frac{1}{2k+1}$.

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

So the odd squares are an integral over a square. It remains to compute that integral.

### Changing variables

An integral over a region can be computed in any coordinates, provided we account for how the new
coordinates stretch area. The familiar example is polar coordinates: a small patch of size
$dr \times d\theta$ at distance $r$ from the origin has area $r \, dr \, d\theta$, not $dr \, d\theta$,
because arcs far from the centre are longer. In general, if $x$ and $y$ are functions of new variables
$u$ and $v$, a small rectangle $du \times dv$ is carried to a small parallelogram whose area is
$\bigl|\partial(x, y)/\partial(u, v)\bigr| \, du \, dv$, where

$$
\frac{\partial(x, y)}{\partial(u, v)} = \frac{\partial x}{\partial u} \frac{\partial y}{\partial v} - \frac{\partial x}{\partial v} \frac{\partial y}{\partial u}
$$

is the Jacobian determinant of the change of variables. For polar coordinates it is $r$.

Calabi's substitution is designed so that this factor is exactly $1 - x^2 y^2$, the denominator of the
integrand. The two cancel, and the integral becomes the area of the region we started from.

### Calabi's substitution

> [!PROOF] of Theorem 3, by a double integral
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

### Four meanings of solved

The problem was solved in 1735 in the sense that mattered to Euler: he had the answer and good reason
to trust it. It was solved in the sense that matters to a proof in 1741, when every step could be
checked by the standards of the day. By today's standards, it was secured in the nineteenth century,
when the notions of limit and convergence that the arguments quietly rely on were finally made
precise. And it has been solved again every few decades since, each new proof a small lesson in a
different part of mathematics.

### The even powers

Euler's method [3] also reaches every even value, because each further coefficient of
$\eqref{eq:product}$ gives the next even sum, as the remark in Section 3 showed for $\zeta(4)$. In the
form he later gave it,

$$
\begin{gathered}
\zeta(2k) = \frac{(-1)^{k+1} B_{2k} (2\pi)^{2k}}{2\,(2k)!}, \\
\zeta(2) = \frac{\pi^2}{6}, \quad \zeta(4) = \frac{\pi^4}{90}, \quad \zeta(6) = \frac{\pi^6}{945},
\end{gathered}
$$

where $B_2 = 1/6$, $B_4 = -1/30$, $B_6 = 1/42$, … are the Bernoulli numbers. They are the coefficients
of the power series

$$
\frac{x}{e^x - 1} = \sum_{n=0}^{\infty} B_n \frac{x^n}{n!} = 1 - \frac{x}{2} + \frac{x^2}{12} - \frac{x^4}{720} + \cdots,
$$

and they turn up wherever sums of powers meet calculus: two of them already appeared in the tail
expansion $\eqref{eq:em}$. So every even value is a rational number times a power of $\pi$. And since
$\pi$ is transcendental, not a root of any polynomial with whole-number coefficients, as Lindemann
proved in 1882 [14], every one of these values is irrational.

> [!REMARK]
> The reciprocal $6/\pi^2 \approx 0.6079$ has a meaning of its own: it is the probability that two
> integers chosen at random have no common factor.[^coprime]

### The odd powers

For the odd values, nothing of the kind is known, and not for want of trying. To prove a number
irrational is to prove that no fraction $p/q$ equals it, however large $p$ and $q$ are, and without a
formula to work from that is hard. The first real progress came only in 1978, when Roger Apéry
announced that $\zeta(3) = 1.202\,056\,9\ldots$ is irrational; the proof appeared the next year [15].
His talk was so sketchy that much of the audience dismissed it, but Henri Cohen, Hendrik Lenstra and
Alfred van der Poorten set out to check the argument, and within two months it stood. Van der
Poorten's account [16] is still the most engaging way into it, and Beukers soon gave a shorter proof
with integrals close to $\eqref{eq:double}$ [17]. Even so, no formula for $\zeta(3)$ has been found,
and nobody knows whether $\zeta(5)$ is irrational. Rivoal showed that infinitely many of the odd values
are irrational [18], and Zudilin that at least one of $\zeta(5)$, $\zeta(7)$, $\zeta(9)$, $\zeta(11)$
is [19].

What has not been solved, then, is the same question one power up. Nobody has found a closed form for
$1 + \frac{1}{8} + \frac{1}{27} + \cdots$, the sum of the reciprocals of the cubes, and after almost
three centuries that silence is itself a kind of information: whatever made the even powers yield to
Euler does not reach the odd ones.

## Try it

The numbers above take a few lines to reproduce. Adding the terms from the smallest up keeps the
rounding error of floating-point arithmetic well below the digits that matter: a computer stores about
sixteen significant digits, and adding a tiny term to a large running total throws most of the tiny
term's digits away, so it pays to add the tiny terms together first.

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
14. F. Lindemann, “Ueber die Zahl π,” _Mathematische Annalen_ 20 (1882), 213–225.
    [doi:10.1007/BF01446522](https://doi.org/10.1007/BF01446522)
15. R. Apéry, “Irrationalité de ζ(2) et ζ(3),” _Astérisque_ 61 (1979), 11–13. Available from
    [Numdam](http://www.numdam.org/item/AST_1979__61__11_0/).
16. A. van der Poorten, “A proof that Euler missed … Apéry's proof of the irrationality of ζ(3),”
    _The Mathematical Intelligencer_ 1:4 (1979), 195–203.
    [doi:10.1007/BF03028234](https://doi.org/10.1007/BF03028234)
17. F. Beukers, “A note on the irrationality of ζ(2) and ζ(3),” _Bulletin of the London Mathematical
    Society_ 11 (1979), 268–272. [doi:10.1112/blms/11.3.268](https://doi.org/10.1112/blms/11.3.268)
18. T. Rivoal, “La fonction zêta de Riemann prend une infinité de valeurs irrationnelles aux entiers
    impairs,” _Comptes Rendus de l'Académie des Sciences, Série I_ 331 (2000), 267–270.
    [doi:10.1016/S0764-4442(00)01624-4](https://doi.org/10.1016/S0764-4442(00)01624-4)
19. W. Zudilin, “One of the numbers ζ(5), ζ(7), ζ(9), ζ(11) is irrational,” _Russian Mathematical
    Surveys_ 56 (2001), 774–776.
    [doi:10.1070/RM2001v056n04ABEH000427](https://doi.org/10.1070/RM2001v056n04ABEH000427)

[^bernoulli]: Bernoulli ended his discussion of the series with a plea: whoever found its sum and
    sent it to him would have his gratitude.

[^coprime]: Two integers are coprime when no prime divides both. A prime $p$ divides two random
    integers with probability $1/p^2$, so, treating the primes as independent, the probability is
    $\prod_p (1 - 1/p^2)$. Euler's product formula $\zeta(s) = \prod_p (1 - p^{-s})^{-1}$ turns this
    into $1/\zeta(2) = 6/\pi^2$.
