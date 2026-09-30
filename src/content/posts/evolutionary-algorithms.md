---
title: Design by Evolution
description: A salesman visiting 71 cities has more possible tours than the universe has atoms. How evolutionary algorithms search spaces that large, and NSGA-II applied to sizing Kafka clusters in the cloud.
abstract: |
  Some search spaces are larger than the universe. A salesman who must visit 71 cities has 70!
  possible tours, a number with 101 digits, more than there are atoms in the observable universe, and
  no known algorithm finds the shortest one in polynomial time. Evolutionary algorithms give up the
  guarantee. They keep a population of candidate solutions, score each one, and breed the next
  generation from the best by selection, crossover and mutation, which usually gets close to the
  optimum in a reasonable time.

  We go through the main families (genetic algorithms, evolution strategies, genetic programming,
  multi-objective algorithms, differential evolution, memetic and co-evolutionary algorithms) and
  four Java libraries that implement them: jMetal, the MOEA Framework, Opt4J and ECJ. The last part
  is a design problem from the cloud: sizing Kafka clusters for latency, throughput and cost, with
  NSGA-II returning the trade-offs as a Pareto front.
pubDate: 2026-09-30
tags: [algorithms, optimization, java, cloud]
msc: [68W50, 90C59, 90C29]
---

## Prelude

About 13.8 billion years ago [1], the universe as we know it began with the **Big Bang**. It was not
an explosion in space but an expansion of space itself: time, space and matter appeared together, out
of a singularity that physics still cannot describe.

In its first moments, the universe was a hot, dense soup of elementary particles: quarks, electrons,
photons and others. As it expanded, it cooled. About a hundred-thousandth of a second after the Big
Bang, it was cool enough for quarks to bind into protons and neutrons. Between roughly 3 and 20
minutes, protons and neutrons fused into the first atomic nuclei: deuterium, helium and traces of
lithium. Neutral atoms came much later, around 370,000 years after the Big Bang, when nuclei finally
captured electrons [2].

Scientists estimate that the observable universe holds about $10^{80}$ atoms[^atoms], a 1 followed by
80 zeros. The figure comes from combining several observations and assumptions.

In another universe, the **mathematical** one, some spaces hold more elements than there are atoms in
the observable universe. Here are two examples.

- Take the letters `ABC` and list every possible ordering (permutation): `ABC`, `ACB`, `BAC`, `BCA`,
  `CAB`, `CBA`. That makes 6 permutations, easy to count by hand. Now take a sequence of 71 letters:
  there are $71! \approx 8.5 \times 10^{101}$ permutations to list.
- A traveller has to visit $n$ cities, each exactly once, and then return to the starting city. The
  distances between the cities are known, and we want the route with the smallest total distance, or
  the smallest total cost.

We can write the second problem formally. Let $V = \{c_1, c_2, \dots, c_n\}$ be the set of cities to
visit and $d(i, j)$ the distance from city $i$ to city $j$. The distance matrix $D$ is defined by
$D[i, j] = d(i, j)$ for all $i, j \in V$. We take the general case, where $d(i, j)$ can differ from
$d(j, i)$: one-way streets, a road that climbs in one direction and descends in the other, or a flight
priced differently each way. This is the asymmetric version of the problem [3].

We are looking for a permutation $\pi = (\pi_1, \pi_2, \dots, \pi_n)$ of $V$ that minimizes the total
cost of the tour, that is, the sum of the distances between successive cities plus the final leg back
to the start:

$$
t(\pi) = \sum_{i=1}^{n-1} D[\pi_i, \pi_{i+1}] + D[\pi_n, \pi_1]
$$

If we fix the starting city, there are $(n-1)!$ possible tours, so a brute-force search grows as
$O(n!)$[^comp]. For $n = 10$ there are $9! = 362{,}880$ tours to check. For $n = 20$ there are
$19! \approx 1.22 \times 10^{17}$[^sci]. For 71 cities there are $70! \approx 1.2 \times 10^{100}$,
more than the number of atoms in the observable universe and far more than any computer can enumerate.

(If the distances are the same in both directions, a tour and its reverse have the same cost and the
count halves to $(n-1)!/2$. That does not help much: $70!/2$ is still about $6 \times 10^{99}$.)

This problem is known as the Traveling Salesman Problem (TSP).

## Introduction

Exact (deterministic) algorithms solve a huge range of problems, from sorting data to finding shortest
paths and solving equations.

They reach their limits with NP-hard problems[^np_hard] and with very large design spaces. An exact
algorithm guarantees the optimum because it examines every possible solution, or rules it out, before
it stops. On large problems, or on problems that keep changing, that takes far too long.

Approximate algorithms, heuristics and meta-heuristics[^meta] take another route. They look for
near-optimal solutions in a reasonable time, which is usually enough in practice.

Evolutionary algorithms (EAs) are one family of meta-heuristics [6]. They are often equated with
‘genetic algorithms’, and they borrow their mechanisms from natural evolution.

EAs simulate selection, crossover and mutation to improve a set of solutions generation after
generation, until they reach optimal or near-optimal ones. Local-search methods can get stuck in a
local optimum; EAs are less exposed to this, because they keep a whole population of candidates and use
randomness to jump to other regions of the search space [7].

This makes them useful when the problem has many dimensions and the number of possible configurations
explodes. Because part of the search is random, EAs reach areas of the search space that traditional
methods or human intuition would never try, and they sometimes find solutions that nobody would have
designed by hand.

For the same reason, EAs can be used to design new products or systems, in a way that resembles the
MVP (Minimum Viable Product) approach: you build a simplified version of a product, with only the
essential features, and test it quickly on the market.

Think of an EA as a development process that runs over many generations. Instead of designing the
perfect product from the start, it tries many ‘prototypes’ (solutions) in quick iterations. Each one is
tested, the best are selected, adjusted and combined, and they form a new, better generation. An MVP
evolves with user feedback; an EA evolves with its own evaluation of each solution and gets a little
closer to the optimum at each iteration.

There is one difference. An EA does not need a ‘viable’, usable solution at each iteration. The
intermediate solutions only need to be comparable: a fitness function scores each one, so the algorithm
can pick the best and improve them in the next generation, even if none of them is usable yet.

### Permutations and the traveling salesman problem

Listing permutations means generating every possible ordering of a set. The problem is exact and
deterministic and has no constraints. An algorithm can produce every ordering in $O(n!)$ steps, since
that is how many orderings there are.

The TSP asks for the shortest route through a set of cities. It is NP-hard: the best tour has to be
found among a huge number of candidates, while respecting constraints such as distance or cost.

The difference is that with permutations we want all of them, while with the TSP we want only one, the
best, and no known algorithm finds it in polynomial time. Solving the TSP by brute force is also
$O(n!)$, which becomes impractical as soon as there are many cities. So we turn to meta-heuristics such
as genetic algorithms, which find approximate but good solutions in a reasonable time.

## Evolutionary algorithms: inspired by nature

Natural evolution is the process by which systems adapt to their environment over generations.
Biological evolution is its best-studied case.

Through natural selection, genetic mutation and crossover, species adapt so that they survive and
reproduce in environments that keep changing. Traits that give an advantage spread, and organisms
become better adapted over time. The process is slow, but it explores an enormous range of
possibilities and works in varied, unpredictable conditions.

Researchers in artificial intelligence and optimization took this idea and built optimization
algorithms on it: evolutionary algorithms (EAs).

EAs are stochastic, meaning they use randomness. They apply the principles of natural evolution to
problems where the best solution has to be found among a very large number of candidates.

The best-known kinds are genetic algorithms, evolution strategies and genetic programming.

## Categories of evolutionary algorithms

### Genetic algorithms (GA)

Genetic algorithms (GAs) are the family of EAs closest to biological evolution [8]. They turn its
mechanisms into a computational process that can solve hard problems.

The first step is to model the problem: define its parameters, its constraints and the objectives to
optimize. This step decides a lot. It turns a messy problem into a structure the algorithm can work on,
and it shows which parameters and limits really matter.

Next, the algorithm generates an initial population of solutions, either at random or using what is
already known about the problem, so that the starting point is diverse. The evolutionary process starts
from this population. Each solution is scored by a _fitness function_, which measures how well it meets
the objectives. Depending on the problem, fitness can take into account robustness, efficiency, cost or
performance.

Solutions with the best fitness scores are the most likely to contribute to the next generation. This
step is called **selection**. The common methods are:

- roulette wheel selection, where each solution's chance of being picked is proportional to its
  fitness;
- tournament selection, where solutions compete in small random groups and the winner of each group is
  picked;
- rank selection, where solutions are sorted by fitness and the probability of being picked depends on
  their rank;
- stochastic universal sampling, a variant of roulette wheel selection that spreads the picks evenly
  across the population.

Many GAs also use **elitism**: the best few solutions are copied unchanged into the next generation, so
a good solution is never lost.

**Crossover** then combines parts of two parent solutions to create new ones, called _offspring_. By
mixing the parents' characteristics, crossover lets the algorithm try new points in the search space,
and sometimes produces a configuration better than either parent.

Finally, **mutation** makes random changes to some elements of randomly chosen solutions. It keeps the
population diverse and lets the algorithm reach regions of the search space it could not reach
otherwise. This lowers the risk of getting stuck in a local optimum and raises the chance of finding
the global one.

The cycle of selection, crossover and mutation repeats over many generations, and the population moves
toward better and better solutions.

### Evolution strategies (ES)

Ingo Rechenberg and Hans-Paul Schwefel introduced _evolution strategies_ (ES) in the early 1960s to
solve hard optimization problems in engineering and system design [9]. ES rely mostly on mutation, and
they adapt the mutation parameters, such as the step size, while the search runs. Recombination is used
too, but it plays a smaller role than in GAs. Because ES work on vectors of real numbers and adjust
their step sizes to the shape of the problem, they are well suited to continuous optimization.

### Genetic programming (GP)

_Genetic programming_ (GP) evolves computer programs. GAs usually work on vectors of real numbers or on
binary strings; GP works on syntax trees, where the nodes are operators and the leaves are constants or
variables.

GP starts with a population of random trees and measures how well each one solves the problem with a
_fitness function_. The best trees are selected for reproduction, and crossover and mutation produce
new programs from them.

GP has been used to write software automatically, tune machine learning models, design electronic
circuits, generate game strategies and even create new optimization algorithms.

### Multi-objective evolutionary algorithms (MOEA)

MOEAs solve problems with several objectives at once. A single-objective problem maximizes or minimizes
one quantity. A multi-objective problem has several criteria, which can conflict (cost and performance,
for example) or go in the same direction. MOEAs look for a set of trade-off solutions called the
_Pareto front_.

> [!DEFINITION] Pareto front
> The Pareto front is a basic concept of multi-objective optimization. A solution is _dominated_ if
> another solution is at least as good on every objective and strictly better on at least one. The
> solutions that no other solution dominates form the Pareto front. On the Pareto front, you cannot
> improve one objective without making another one worse.

### Differential evolution (DE)

Rainer Storn and Kenneth Price proposed _differential evolution_ (DE) in 1995 [10]. It is mainly used
for continuous optimization in high-dimensional search spaces. It follows the usual EA loop, but its
mutation and crossover operators are its own: they are built on the differences between vectors
(candidate solutions) in the population.

DE uses three operators: mutation, crossover and selection.

- **Mutation** adds the scaled difference between two solutions to a third one, which gives a _mutant_
  vector:

  $$
  v_i = x_{r1} + F \cdot (x_{r2} - x_{r3})
  $$

  where:

  - $v_i$ is the mutant vector,
  - $x_{r1}$, $x_{r2}$ and $x_{r3}$ are three different solutions picked at random from the population,
  - $F$ is a scaling factor that controls how large the mutation is.

- **Crossover (recombination)** mixes the original solution (the parent) with the mutant to produce a
  new individual. Each component of the new individual is taken from the mutant with probability $CR$,
  the crossover rate, and from the parent otherwise.

- **Selection** compares the new individual with its parent. If the new one is at least as good
  according to the fitness function, it replaces the parent in the population; otherwise the parent
  stays. The population can therefore never get worse from one generation to the next.

Because mutation is built on differences between individuals, the size of the steps follows the state
of the population. When the population is spread out, the differences are large and the algorithm
explores new areas. When the population has converged, the differences are small and the algorithm
refines the solutions it has. The value of $F$ and the choice of mutation strategy have a large effect
on performance.

DE is often used to tune the hyperparameters of neural networks, and more generally whenever a solution
is a vector of real numbers. It can, for example, optimize the trajectory of an autonomous robot from
sensor data.

### Memetic algorithms (MA)

_Memetic algorithms_ (MAs), sometimes called hybrid meta-heuristics, combine an evolutionary algorithm
with local search (also called local descent or neighborhood methods).

The EA explores the search space globally, and local search refines the promising solutions it finds.
This combination often converges faster and gives better results.

### Co-evolutionary algorithms (CEA)

_Co-evolutionary algorithms_ borrow from biological co-evolution, where two or more populations evolve
together, each one putting pressure on the others.

In a CEA, several populations evolve at the same time. An individual's score depends on its own
performance and on how it interacts with individuals from the other populations.

This helps when the quality of a solution depends on interactions between agents or components. CEAs
have been used for multi-objective optimization, hard combinatorial problems, games and robotics.

Each type of EA fits certain kinds of problems. GAs and MOEAs are the most general; GP and DE target
more specific needs. Depending on the constraints and the objectives, these algorithms can also be
combined or adapted.

## Using EAs in design

The TSP, introduced above, is a classic combinatorial optimization problem, and EAs have been applied
to it with good results.

It looks abstract, but it has concrete uses:

- in logistics, to plan delivery routes, cut transport costs and reduce CO2 emissions;
- in manufacturing, to plan the paths of robots or machines and shorten production times;
- in telecommunications, to design networks with lower latency and more available bandwidth;
- in operations research, for distribution problems and resource allocation.

How do EAs apply to our own field, the design and architecture of software? We will get there with a
case study on cloud architectures. First, here is how other design fields use them.

In industrial design, EAs help create new products by optimizing criteria such as strength, weight or
cost: aerodynamic shapes, for example, or more efficient mechanical parts.

In architecture and urban design, they generate building plans or urban layouts that meet
environmental or aesthetic constraints.

In generative design, they explore creative ideas by automatically producing artistic forms and visual
patterns.

In interface and systems design, they optimize interaction flows and user interfaces so that they are
easier to use.

### Java and evolutionary algorithms

Java is a popular language for implementing EAs: it is simple, reliable, fast and runs on every major
platform. Here are the most common libraries.

#### jMetal

[jMetal](https://jmetal.readthedocs.io) is an open-source Java framework [11] for multi-objective
optimization with meta-heuristics[^jmetal]. Its algorithms and data structures are designed to be
combined and extended.

jMetal includes single-objective algorithms (genetic algorithms, evolution strategies, differential
evolution, particle swarm optimization) and about thirty multi-objective algorithms, among them:

- NSGA-II (Non-dominated Sorting Genetic Algorithm II) [12], a widely used multi-objective genetic
  algorithm that sorts solutions into Pareto fronts and uses the crowding distance to keep them diverse;
- SPEA2 (Strength Pareto Evolutionary Algorithm 2) [13], which approximates the Pareto front with an
  archive of non-dominated solutions;
- IBEA (Indicator-Based Evolutionary Algorithm) [14], which guides the search with a quality indicator
  instead of relying on Pareto dominance alone.

#### MOEA Framework

The [MOEA Framework](https://www.moeaframework.org) is an open-source Java library[^moea] for
multi-objective evolutionary algorithms and other meta-heuristics.

It includes more than 25 MOEAs, among them NSGA-II, NSGA-III, SPEA2 and MOEA/D.

You can define your own problems, algorithms and operators, and the framework has tools to evaluate,
compare and visualize the results.

#### Opt4J

[Opt4J](https://github.com/SDARG/opt4j) is a modular Java framework for optimization with
meta-heuristics [15]. Its modules let you optimize your own problem with the algorithms it provides
(among them SPEA2, NSGA-II, differential evolution and simulated annealing), or plug in an algorithm of
your own, and a graphical interface lets you configure a run and watch it.

#### ECJ

[ECJ](https://github.com/GMUEClab/ecj) (_Evolutionary Computation in Java_) was created by Sean Luke at
the Evolutionary Computation Laboratory (**ECLab**) of George Mason University [16]. Almost every class
and parameter can be set at runtime through parameter files, so you can change an experiment without
recompiling.

ECJ is efficient and easy to modify, supports many evolutionary algorithms and other meta-heuristics,
and works well with its sister project **MASON**, a multi-agent simulation toolkit from the same lab.

Despite the initials, ECJ has nothing to do with the _Evolutionary Computation Journal_.

## Evolutionary algorithms in cloud architectures

Cloud computing changed how companies run their IT infrastructure, but it also brought complexity and
costs that are hard to predict. **FinOps** emerged to bring financial, technical and environmental
decisions together, so that teams can control costs and reduce their carbon footprint at the same time.

Even so, designing a good architecture for a large application built on microservices is hard, and
teams often lack the people and the tools to do it well.

Here is a concrete case.

### Use case: optimizing Kafka architectures in the cloud

Take an infrastructure with one or more Kafka clusters, each with several brokers, supporting a 5G
cellular network. It connects thousands of IoT sensors, exposes APIs that use different protocols, and
serves thousands of microservices and applications. Designing it is a hard optimization
problem[^arch].

#### Problem statement

_How do we design the Kafka clusters, and choose the number of brokers and the machine specifications
(RAM, CPU, disk, network), to minimize latency and maximize throughput?_ The microservices need to
exchange data in real time, and the design also has to respect constraints on scalability, response
time and cost.

### The traditional approach

Traditionally, you test architectures and configurations by hand:

1. Start with an arbitrary architecture (A1) and a configuration (C1), run tests and look at the
   results.
2. Run benchmarks, change parameters (machine size, number of brokers, number of partitions) and move to
   a new configuration (C2).
3. Repeat for other architectures (A2, A3, and so on).

If each broker has 10 possible configurations, 10 brokers give $10^{10}$ combinations, ten billion.
Even with automation, testing them all is out of the question: each test has to measure network
latency, partitions, load, memory and CPU.

### NSGA-II: an evolutionary approach to multi-objective optimization

NSGA-II is designed to balance several conflicting objectives. Here they are:

- minimize latency;
- maximize throughput;
- reduce costs;
- improve scalability.

#### How NSGA-II works

1. Initialization: generate an initial population of random configurations, for example:
   - Configuration 1: 3 machines with 50 GB RAM, 4 CPUs (16 cores), 100 GB disk and a 1 GB/s network.
     The Kafka cluster has 10 brokers and 3 partitions per topic, for 100 topics.
   - Configuration 2: 1 large machine with 100 GB RAM, 8 CPUs (32 cores), 500 GB disk and a 10 GB/s
     network. The Kafka cluster has 5 brokers and 5 partitions per topic.
   - Configuration 3: 5 small machines, each with 16 GB RAM, 4 CPUs and a 1 GB/s network. The Kafka
     setup has 20 brokers per cluster and 2 partitions per topic, with cloud storage for the data.

2. Evaluation: measure each configuration on every objective (latency, throughput, and so on).

3. Non-dominated sorting: sort the solutions into fronts. The first front holds the solutions that no
   other solution dominates, which is the current Pareto front. The second front holds the solutions
   dominated only by the first, and so on.

4. Crowding distance: within each front, measure how far each solution is from its neighbors, and
   prefer the isolated ones so that the front stays spread out.

5. Genetic operators:
   - selection: pick promising solutions for reproduction, based on their front and their crowding
     distance;
   - crossover: combine two configurations into new ones;
   - mutation: make random changes, such as adding RAM, adding machines or changing the auto-scaling
     rules.

6. Iteration: repeat over many generations until the population converges.

#### Why NSGA-II fits this problem

- It returns a whole Pareto front, so the architects can choose the trade-off they want between
  latency, throughput, cost and scalability.
- Its fast non-dominated sorting keeps the cost of each generation manageable: $O(MN^2)$ for $M$
  objectives and a population of $N$ solutions [12].
- The crowding distance keeps the solutions spread across the front.
- It handles conflicting objectives, which is exactly the situation here.

## Conclusion

Evolutionary algorithms find good solutions to problems that exact methods cannot solve in a reasonable
time, such as a 71-city TSP with $70!$ possible tours. They do it the way natural evolution does: keep a
population, select the best, recombine and mutate them, and repeat.

They are used in industrial design, in urban planning and, as the Kafka example shows, in cloud
architecture. There, NSGA-II can search a space of $10^{10}$ configurations for good trade-offs between
latency, throughput, cost and scalability, and give architects a Pareto front to choose from.

A cheaper configuration usually runs on fewer machines, so the same optimization also helps FinOps and
reduces the carbon footprint of the infrastructure.

As systems grow and their configuration spaces explode, this kind of search is likely to become a
normal part of design work. That is the idea behind the title: an evolutionary process, applied to
design, can find solutions that no one would have designed by hand.

## References

1. Planck Collaboration, “Planck 2018 results. VI. Cosmological parameters,” _Astronomy &
   Astrophysics_ 641 (2020), A6.
   [doi:10.1051/0004-6361/201833910](https://doi.org/10.1051/0004-6361/201833910)
2. P. J. E. Peebles, _Principles of Physical Cosmology_, Princeton University Press, Princeton, 1993.
3. E. L. Lawler, J. K. Lenstra, A. H. G. Rinnooy Kan and D. B. Shmoys (eds.), _The Traveling Salesman
   Problem: A Guided Tour of Combinatorial Optimization_, Wiley, Chichester, 1985.
4. M. R. Garey and D. S. Johnson, _Computers and Intractability: A Guide to the Theory of
   NP-Completeness_, W. H. Freeman, San Francisco, 1979.
5. C. H. Papadimitriou, _Computational Complexity_, Addison-Wesley, Reading, Mass., 1994.
6. A. E. Eiben and J. E. Smith, _Introduction to Evolutionary Computing_, Natural Computing Series,
   Springer, Berlin, 2003. [doi:10.1007/978-3-662-05094-1](https://doi.org/10.1007/978-3-662-05094-1)
7. F. Neumann and C. Witt, _Bioinspired Computation in Combinatorial Optimization: Algorithms and Their
   Computational Complexity_, Natural Computing Series, Springer, Berlin, 2010.
   [doi:10.1007/978-3-642-16544-3](https://doi.org/10.1007/978-3-642-16544-3)
8. D. E. Goldberg, _Genetic Algorithms in Search, Optimization, and Machine Learning_, Addison-Wesley,
   Reading, Mass., 1989.
9. H.-G. Beyer and H.-P. Schwefel, “Evolution strategies – A comprehensive introduction,” _Natural
   Computing_ 1 (2002), 3–52.
   [doi:10.1023/A:1015059928466](https://doi.org/10.1023/A:1015059928466)
10. R. Storn and K. Price, “Differential evolution – A simple and efficient heuristic for global
    optimization over continuous spaces,” _Journal of Global Optimization_ 11 (1997), 341–359. First
    circulated in 1995 as ICSI technical report TR-95-012.
    [doi:10.1023/A:1008202821328](https://doi.org/10.1023/A:1008202821328)
11. J. J. Durillo and A. J. Nebro, “jMetal: A Java framework for multi-objective optimization,”
    _Advances in Engineering Software_ 42 (2011), 760–771.
    [doi:10.1016/j.advengsoft.2011.05.014](https://doi.org/10.1016/j.advengsoft.2011.05.014)
12. K. Deb, A. Pratap, S. Agarwal and T. Meyarivan, “A fast and elitist multiobjective genetic
    algorithm: NSGA-II,” _IEEE Transactions on Evolutionary Computation_ 6 (2002), 182–197.
    [doi:10.1109/4235.996017](https://doi.org/10.1109/4235.996017)
13. E. Zitzler, M. Laumanns and L. Thiele, “SPEA2: Improving the strength Pareto evolutionary
    algorithm,” TIK-Report 103, ETH Zürich, 2001.
    [doi:10.3929/ethz-a-004284029](https://doi.org/10.3929/ethz-a-004284029)
14. E. Zitzler and S. Künzli, “Indicator-based selection in multiobjective search,” in _Parallel
    Problem Solving from Nature – PPSN VIII_, Lecture Notes in Computer Science, Springer, Berlin,
    2004, 832–842. [doi:10.1007/978-3-540-30217-9_84](https://doi.org/10.1007/978-3-540-30217-9_84)
15. M. Lukasiewycz, M. Glaß, F. Reimann and J. Teich, “Opt4J: A modular framework for meta-heuristic
    optimization,” in _Proceedings of the 13th Annual Conference on Genetic and Evolutionary
    Computation (GECCO ’11)_, ACM, 2011, 1723–1730.
    [doi:10.1145/2001576.2001808](https://doi.org/10.1145/2001576.2001808)
16. S. Luke, “ECJ then and now,” in _Proceedings of the Genetic and Evolutionary Computation
    Conference Companion (GECCO ’17)_, ACM, 2017, 1223–1230.
    [doi:10.1145/3067695.3082467](https://doi.org/10.1145/3067695.3082467)

[^atoms]: This estimate, sometimes called the Eddington number, is obtained by dividing the mass of
    ordinary matter in the observable universe (about $1.5 \times 10^{53}$ kg) by the mass of a
    hydrogen atom.

[^comp]: The factorial of $n$, written $n!$, is the product of all the positive integers from $n$ down to
    1: $n! = n \times (n - 1) \times (n - 2) \times \dots \times 2 \times 1$. It is used in
    probability, statistics, algorithm analysis and combinatorics.

[^sci]: $1.22 \times 10^{17}$ is written in scientific notation, a short way to represent very large or
    very small numbers. Written out in full: 1.22 × 100,000,000,000,000,000 =
    122,000,000,000,000,000, or 122 quadrillion.

[^np_hard]: In theoretical computer science, a problem is ‘NP-hard’ if it is at least as hard as every problem
    in the class NP (Non-deterministic Polynomial time). The Traveling Salesman Problem (TSP) is the
    classic example [4, 5].

[^meta]: Meta-heuristics are general optimization methods for problems whose size or complexity puts them
    out of reach of exact algorithms. They explore the solution space with global, adaptive strategies
    and find optimal or near-optimal solutions in a reasonable time.

[^jmetal]: jMetal's source code is available on [GitHub](https://github.com/jMetal/jMetal).

[^moea]: The library's source code is available on [GitHub](https://github.com/MOEAFramework/MOEAFramework).

[^arch]: This kind of architecture is not hypothetical. Smart cities already use thousands of IoT sensors to
    monitor air quality, traffic and waste collection.
