/* ============================================================
   MATH FORMULAS - TOPIC: ALGEBRA
   Identities, linear & quadratic equations, sequences (AP, GP).
   ============================================================ */

window.FORMULA_DATA = window.FORMULA_DATA || [];

FORMULA_DATA.push({
  topic: "Algebra",
  icon: "🧮",
  color: "#c026d3",
  formulas: [
    {
      cls: "Class 8",
      subtopic: "Identities",
      name: "Square of a sum",
      formula: "(a + b)² = a² + 2ab + b²",
      symbols: [["a, b", "any numbers or terms"]],
      generalUse: "To expand or quickly square a sum, and to simplify algebraic expressions and mental-maths squaring.",
      laymanUse: "Squaring a two-part sum gives each part squared plus twice their product.",
      example: "(x+3)² = x² + 6x + 9"
    },
    {
      cls: "Class 8",
      subtopic: "Identities",
      name: "Square of a difference",
      formula: "(a − b)² = a² − 2ab + b²",
      symbols: [["a, b", "any numbers or terms"]],
      generalUse: "To expand the square of a difference in algebra and to square numbers like 99 easily.",
      laymanUse: "Squaring a two-part difference gives each part squared minus twice their product.",
      example: "(x−2)² = x² − 4x + 4"
    },
    {
      cls: "Class 8",
      subtopic: "Identities",
      name: "Difference of two squares",
      formula: "a² − b² = (a + b)(a − b)",
      symbols: [["a, b", "any numbers or terms"]],
      generalUse: "To factorise a difference of squares — very common in simplification and solving equations.",
      laymanUse: "One square minus another equals the sum times the difference of the two numbers.",
      example: "x² − 9 = (x+3)(x−3)"
    },
    {
      cls: "Class 9",
      subtopic: "Identities",
      name: "Product identity (x+a)(x+b)",
      formula: "(x + a)(x + b) = x² + (a + b)x + ab",
      symbols: [["x", "the variable"], ["a, b", "constants"]],
      generalUse: "To expand the product of two simple binomials and to help factorise quadratics.",
      laymanUse: "Multiply out the brackets: the middle number is the sum of a and b, the last is their product.",
      example: "(x+2)(x+3) = x² + 5x + 6"
    },
    {
      cls: "Class 9",
      subtopic: "Identities",
      name: "Cube of a sum",
      formula: "(a + b)³ = a³ + 3a²b + 3ab² + b³",
      symbols: [["a, b", "any numbers or terms"]],
      generalUse: "To expand the cube of a sum in algebra and to cube numbers quickly.",
      laymanUse: "The cube of a two-part sum expands into four terms following the 1-3-3-1 pattern.",
      example: "(x+1)³ = x³ + 3x² + 3x + 1"
    },
    {
      cls: "Class 6",
      subtopic: "Linear Equations",
      name: "Solving a simple linear equation",
      formula: "ax + b = c  ⇒  x = (c − b) ÷ a",
      symbols: [
        ["a", "coefficient of x"],
        ["b, c", "constants"],
        ["x", "the unknown"]
      ],
      generalUse: "To find an unknown value in a one-variable equation — the basis of all algebra word problems.",
      laymanUse: "Move the added number to the other side, then divide by the number in front of x to find x.",
      example: "2x + 3 = 11 → x = (11−3)/2 = 4"
    },
    {
      cls: "Class 10",
      subtopic: "Quadratic Equations",
      name: "Quadratic formula",
      formula: "x = (−b ± √(b² − 4ac)) ÷ 2a",
      symbols: [
        ["a, b, c", "coefficients of ax²+bx+c = 0"],
        ["x", "the roots (solutions)"]
      ],
      generalUse: "To solve any quadratic equation ax²+bx+c = 0 — projectile motion, areas, optimisation.",
      laymanUse: "A ready-made recipe that gives the two answers of a squared equation from its three numbers.",
      example: "x²−5x+6=0 → x = (5±1)/2 = 3 or 2"
    },
    {
      cls: "Class 10",
      subtopic: "Quadratic Equations",
      name: "Discriminant",
      formula: "D = b² − 4ac",
      symbols: [["a, b, c", "coefficients"], ["D", "the discriminant"]],
      generalUse: "To find how many real solutions a quadratic has without fully solving it (D>0 two, D=0 one, D<0 none).",
      laymanUse: "This one number tells you whether the equation has two answers, one, or none, before you solve it.",
      example: "x²−5x+6: D = 25−24 = 1 (>0, two real roots)"
    },
    {
      cls: "Class 10",
      subtopic: "Quadratic Equations",
      name: "Sum and product of roots",
      formula: "α + β = −b/a,   α × β = c/a",
      symbols: [
        ["α, β", "the two roots"],
        ["a, b, c", "coefficients"]
      ],
      generalUse: "To find or check the roots of a quadratic, and to build a quadratic from its roots.",
      laymanUse: "Without solving, the two answers add up to −b/a and multiply to c/a.",
      example: "x²−5x+6: sum = 5, product = 6 (roots 2 and 3)"
    },
    {
      cls: "Class 10",
      subtopic: "Arithmetic Progression",
      name: "nth term of an AP",
      formula: "aₙ = a + (n − 1)d",
      symbols: [
        ["a", "first term"],
        ["d", "common difference"],
        ["n", "term number"]
      ],
      generalUse: "To find any term of a sequence that increases by a fixed step — savings, seating rows, patterns.",
      laymanUse: "Start with the first number and add the fixed step (n−1) times to reach the nth number.",
      example: "a=2, d=3: a₅ = 2 + 4×3 = 14"
    },
    {
      cls: "Class 10",
      subtopic: "Arithmetic Progression",
      name: "Sum of first n terms of an AP",
      formula: "Sₙ = n/2 × [2a + (n − 1)d]",
      symbols: [
        ["a", "first term"],
        ["d", "common difference"],
        ["n", "number of terms"]
      ],
      generalUse: "To add up many equally-spaced numbers quickly — totals of savings, stacked logs, number series.",
      laymanUse: "Instead of adding one by one, this finds the total of an evenly-stepping list in one go.",
      example: "a=2, d=3, n=5: S = 5/2×(4+12) = 40"
    },
    {
      cls: "Class 10",
      subtopic: "Arithmetic Progression",
      name: "Sum using first and last term",
      formula: "Sₙ = n/2 × (a + l)",
      symbols: [
        ["a", "first term"],
        ["l", "last term"],
        ["n", "number of terms"]
      ],
      generalUse: "A quick way to add an AP when the first and last terms are known.",
      laymanUse: "Average the first and last numbers, then multiply by how many numbers there are.",
      example: "a=2, l=14, n=5: S = 5/2×(2+14) = 40"
    },
    {
      cls: "Class 11",
      subtopic: "Geometric Progression",
      name: "nth term of a GP",
      formula: "aₙ = a × r^(n−1)",
      symbols: [
        ["a", "first term"],
        ["r", "common ratio"],
        ["n", "term number"]
      ],
      generalUse: "To find any term of a sequence that multiplies by a fixed factor — compound growth, populations.",
      laymanUse: "Start with the first number and keep multiplying by the fixed ratio (n−1) times.",
      example: "a=3, r=2: a₄ = 3 × 2³ = 24"
    },
    {
      cls: "Class 11",
      subtopic: "Geometric Progression",
      name: "Sum of first n terms of a GP",
      formula: "Sₙ = a(rⁿ − 1) ÷ (r − 1),  r ≠ 1",
      symbols: [
        ["a", "first term"],
        ["r", "common ratio"],
        ["n", "number of terms"]
      ],
      generalUse: "To add up a multiplying sequence — total growth, repeated doubling, loan/interest sums.",
      laymanUse: "Adds a list where each number is a fixed multiple of the one before, all at once.",
      example: "a=3, r=2, n=4: S = 3(16−1)/1 = 45"
    },
    {
      subtopic: "Identities",
      name: "Cube of a difference",
      formula: "(a − b)³ = a³ − 3a²b + 3ab² − b³",
      symbols: [["a, b", "any numbers or terms"]],
      generalUse: "To expand the cube of a difference in algebra.",
      laymanUse: "Like the cube of a sum, but the signs alternate + − + −.",
      example: "(x−1)³ = x³ − 3x² + 3x − 1"
    },
    {
      subtopic: "Identities",
      name: "Sum of two cubes",
      formula: "a³ + b³ = (a + b)(a² − ab + b²)",
      symbols: [["a, b", "any numbers or terms"]],
      generalUse: "To factorise a sum of cubes in simplification and equation-solving.",
      laymanUse: "Splits a sum of two cubes into a simple bracket times a longer one.",
      example: "x³ + 8 = (x+2)(x²−2x+4)"
    },
    {
      subtopic: "Identities",
      name: "Difference of two cubes",
      formula: "a³ − b³ = (a − b)(a² + ab + b²)",
      symbols: [["a, b", "any numbers or terms"]],
      generalUse: "To factorise a difference of cubes in algebra.",
      laymanUse: "Splits a difference of two cubes into a simple bracket times a longer one.",
      example: "x³ − 27 = (x−3)(x²+3x+9)"
    },
    {
      subtopic: "Identities",
      name: "Square of a trinomial",
      formula: "(a + b + c)² = a² + b² + c² + 2ab + 2bc + 2ca",
      symbols: [["a, b, c", "any three terms"]],
      generalUse: "To expand the square of a three-term sum in algebra.",
      laymanUse: "Square each of the three parts, then add twice each pair's product.",
      example: "(x+y+1)² = x²+y²+1+2xy+2y+2x"
    },
    {
      subtopic: "Identities",
      name: "Useful rearrangement",
      formula: "a² + b² = (a + b)² − 2ab",
      symbols: [["a, b", "any numbers or terms"]],
      generalUse: "To find a²+b² quickly when the sum and product of a and b are known.",
      laymanUse: "Square the sum and subtract twice the product to get the sum of the squares.",
      example: "a+b=5, ab=6 → a²+b² = 25 − 12 = 13"
    },
    {
      subtopic: "Linear Equations",
      name: "Linear equation in two variables",
      formula: "ax + by + c = 0",
      symbols: [
        ["a, b", "coefficients (not both 0)"],
        ["c", "constant"],
        ["x, y", "the two unknowns"]
      ],
      generalUse: "The standard form of a straight-line equation; solved in pairs by substitution or elimination.",
      laymanUse: "An equation with two unknowns; its solutions are all the points that lie on a straight line.",
      example: "2x + 3y − 6 = 0 passes through (3,0) and (0,2)"
    },
    {
      subtopic: "Quadratic Equations",
      name: "Standard form of a quadratic",
      formula: "ax² + bx + c = 0,  a ≠ 0",
      symbols: [
        ["a", "coefficient of x²"],
        ["b", "coefficient of x"],
        ["c", "constant term"]
      ],
      generalUse: "The general shape of every quadratic equation, the starting point for solving them.",
      laymanUse: "Any equation with an x² term (and no higher power) can be written this way before solving.",
      example: "x² − 5x + 6 = 0 has a=1, b=−5, c=6"
    },
    {
      subtopic: "Quadratic Equations",
      name: "Nature of roots (from discriminant)",
      formula: "D>0: two real, D=0: one real, D<0: no real roots",
      symbols: [["D", "b² − 4ac (the discriminant)"]],
      generalUse: "To decide how many real solutions a quadratic has before solving it.",
      laymanUse: "The sign of that one number D tells you if there are two answers, one, or none.",
      example: "x²+1=0: D = −4 < 0 → no real roots"
    },
    {
      subtopic: "Exponents",
      name: "Exponential form of a linear pair (elimination idea)",
      formula: "If a₁x+b₁y=c₁ and a₂x+b₂y=c₂, unique solution when a₁/a₂ ≠ b₁/b₂",
      symbols: [["a, b, c", "the coefficients of the two equations"]],
      generalUse: "To check whether a pair of linear equations has one solution, none, or infinitely many.",
      laymanUse: "Compare the ratios of the numbers: if the x and y ratios differ, the two lines cross at exactly one point.",
      example: "2x+3y=6 and 4x+9y=15 → 2/4 ≠ 3/9, so one solution"
    },
    {
      subtopic: "Identities",
      name: "Product of sum and difference squares",
      formula: "(a+b)² − (a−b)² = 4ab",
      symbols: [["a, b", "any terms"]],
      generalUse: "A handy identity to find 4ab or ab from the two squares.",
      laymanUse: "The square of the sum minus the square of the difference is always four times their product.",
      example: "(5+3)²−(5−3)² = 64−4 = 60 = 4·15"
    },
    {
      subtopic: "Identities",
      name: "Sum of the two squares identity",
      formula: "(a+b)² + (a−b)² = 2(a² + b²)",
      symbols: [["a, b", "any terms"]],
      generalUse: "To find a²+b² from the sum and difference squares.",
      laymanUse: "Add the two squares and you get twice the sum of the individual squares.",
      example: "(5+3)²+(5−3)² = 64+4 = 68 = 2·34"
    },
    {
      subtopic: "Identities",
      name: "Sum of three cubes identity",
      formula: "a³+b³+c³ − 3abc = (a+b+c)(a²+b²+c² − ab − bc − ca)",
      symbols: [["a, b, c", "any three terms"]],
      generalUse: "To factorise expressions with three cubes — common in algebra proofs.",
      laymanUse: "A factorising rule for the sum of three cubes minus three times their product.",
      example: "If a+b+c=0, then a³+b³+c³ = 3abc"
    },
    {
      subtopic: "Logarithms",
      name: "Product rule of logarithms",
      formula: "log(m × n) = log m + log n",
      symbols: [["m, n", "positive numbers"]],
      generalUse: "To turn a multiplication into an addition of logs — used in calculation and calculus.",
      laymanUse: "The log of a product is the sum of the logs.",
      example: "log(2×5) = log2 + log5 = log10 = 1"
    },
    {
      subtopic: "Logarithms",
      name: "Quotient rule of logarithms",
      formula: "log(m ÷ n) = log m − log n",
      symbols: [["m, n", "positive numbers"]],
      generalUse: "To turn a division into a subtraction of logs.",
      laymanUse: "The log of a fraction is the difference of the logs.",
      example: "log(100/10) = log100 − log10 = 2 − 1 = 1"
    },
    {
      subtopic: "Logarithms",
      name: "Power rule of logarithms",
      formula: "log(mⁿ) = n × log m",
      symbols: [["m", "positive number"], ["n", "the power"]],
      generalUse: "To bring a power down in front of a log — used to solve exponential equations.",
      laymanUse: "The log of a power moves the little top number in front as a multiplier.",
      example: "log(10³) = 3 × log10 = 3"
    },
    {
      subtopic: "Logarithms",
      name: "Change of base",
      formula: "log_b a = log a ÷ log b",
      symbols: [["a", "the number"], ["b", "the base"]],
      generalUse: "To evaluate a log in any base using common (base-10) or natural logs.",
      laymanUse: "Any log can be worked out by dividing two ordinary logs.",
      example: "log₂8 = log8 / log2 = 3"
    },
    {
      subtopic: "Logarithms",
      name: "Basic log values",
      formula: "log_a a = 1,   log_a 1 = 0",
      symbols: [["a", "the base (a>0, a≠1)"]],
      generalUse: "Two standard log values used constantly in simplification.",
      laymanUse: "The log of the base itself is 1, and the log of 1 is always 0.",
      example: "log₅5 = 1, log₅1 = 0"
    },
    {
      subtopic: "Series (Sum of n terms)",
      name: "Sum of first n natural numbers",
      formula: "1 + 2 + 3 + … + n = n(n+1) ÷ 2",
      symbols: [["n", "how many terms"]],
      generalUse: "To add all whole numbers up to n instantly — counting, patterns, AP.",
      laymanUse: "Instead of adding 1 to 100 one by one, this gives the total at once.",
      example: "1+…+100 = 100·101/2 = 5050"
    },
    {
      subtopic: "Series (Sum of n terms)",
      name: "Sum of first n odd numbers",
      formula: "1 + 3 + 5 + … = n²",
      symbols: [["n", "how many odd numbers"]],
      generalUse: "A neat result: the sum of the first n odd numbers is a perfect square.",
      laymanUse: "Add the first n odd numbers and you always get n squared.",
      example: "1+3+5+7 = 16 = 4²"
    },
    {
      subtopic: "Series (Sum of n terms)",
      name: "Sum of squares of first n numbers",
      formula: "1² + 2² + … + n² = n(n+1)(2n+1) ÷ 6",
      symbols: [["n", "how many terms"]],
      generalUse: "To add the squares of the first n numbers — used in statistics and calculus.",
      laymanUse: "A shortcut for the total of 1², 2², 3², … up to n².",
      example: "1²+2²+3² = 3·4·7/6 = 14"
    },
    {
      subtopic: "Series (Sum of n terms)",
      name: "Sum of cubes of first n numbers",
      formula: "1³ + 2³ + … + n³ = [n(n+1) ÷ 2]²",
      symbols: [["n", "how many terms"]],
      generalUse: "To add the cubes of the first n numbers.",
      laymanUse: "The sum of the first n cubes equals the square of the sum of the first n numbers.",
      example: "1³+2³+3³ = 36 = (6)²"
    },
    {
      subtopic: "Arithmetic Progression",
      name: "Arithmetic mean of two numbers",
      formula: "AM = (a + b) ÷ 2",
      symbols: [["a, b", "the two numbers"]],
      generalUse: "To find the middle term that sits in AP between two numbers.",
      laymanUse: "The arithmetic mean is just the ordinary average of the two numbers.",
      example: "AM of 4 and 10 = 7"
    },
    {
      subtopic: "Arithmetic Progression",
      name: "Three terms in AP",
      formula: "a − d,  a,  a + d",
      symbols: [["a", "middle term"], ["d", "common difference"]],
      generalUse: "A convenient way to represent three unknown terms of an AP when solving problems.",
      laymanUse: "Write three evenly-spaced numbers around a middle value to make the algebra simple.",
      example: "For sum 15: (5−d), 5, (5+d) sum to 15"
    },
    {
      subtopic: "Geometric Progression",
      name: "Geometric mean of two numbers",
      formula: "GM = √(a × b)",
      symbols: [["a, b", "the two positive numbers"]],
      generalUse: "To find the middle term that sits in GP between two numbers — growth rates, averages.",
      laymanUse: "The geometric mean is the square root of the product of the two numbers.",
      example: "GM of 4 and 9 = √36 = 6"
    },
    {
      subtopic: "Geometric Progression",
      name: "Sum of an infinite GP",
      formula: "S∞ = a ÷ (1 − r),   |r| < 1",
      symbols: [["a", "first term"], ["r", "common ratio (between −1 and 1)"]],
      generalUse: "To add a never-ending GP whose terms keep shrinking — used in recurring decimals and limits.",
      laymanUse: "When each term is a small fraction of the last, even an endless list adds to a finite total.",
      example: "1 + ½ + ¼ + … = 1/(1−½) = 2"
    },
    {
      subtopic: "Geometric Progression",
      name: "Three terms in GP",
      formula: "a/r,  a,  a × r",
      symbols: [["a", "middle term"], ["r", "common ratio"]],
      generalUse: "A convenient way to represent three unknown terms of a GP when solving problems.",
      laymanUse: "Write three numbers each a fixed multiple of the middle one to simplify the algebra.",
      example: "For product 27: (3/r), 3, 3r multiply to 27"
    },
    {
      subtopic: "Polynomials",
      name: "Remainder theorem",
      formula: "Remainder of p(x) ÷ (x − a) = p(a)",
      symbols: [["p(x)", "the polynomial"], ["a", "the value making the divisor 0"]],
      generalUse: "To find the remainder of a polynomial division without doing the division.",
      laymanUse: "Just put x = a into the polynomial; the answer is the remainder.",
      example: "p(x)=x²+2x+1, ÷(x−1): remainder = p(1) = 4"
    },
    {
      subtopic: "Polynomials",
      name: "Factor theorem",
      formula: "(x − a) is a factor of p(x)  ⇔  p(a) = 0",
      symbols: [["p(x)", "the polynomial"], ["a", "a possible root"]],
      generalUse: "To test whether (x−a) divides a polynomial exactly, and to factorise polynomials.",
      laymanUse: "If putting x = a makes the polynomial zero, then (x−a) is a factor of it.",
      example: "p(x)=x²−4, p(2)=0 → (x−2) is a factor"
    },
    {
      subtopic: "Polynomials",
      name: "Zeroes and coefficients (quadratic)",
      formula: "Sum = −b/a,  Product = c/a  for ax²+bx+c",
      symbols: [["a, b, c", "coefficients"]],
      generalUse: "To relate the roots of a quadratic to its coefficients, or build a quadratic from roots.",
      laymanUse: "The two answers add to −b/a and multiply to c/a.",
      example: "x²−7x+12: sum=7, product=12 (roots 3,4)"
    },
    {
      subtopic: "Polynomials",
      name: "Build a quadratic from its roots",
      formula: "x² − (sum)x + (product) = 0",
      symbols: [["sum", "α+β"], ["product", "α·β"]],
      generalUse: "To write a quadratic equation when its two roots (or their sum and product) are known.",
      laymanUse: "Put the sum and product of the two answers into this pattern to get the equation.",
      example: "Roots 2,3 → x² − 5x + 6 = 0"
    },
    {
      subtopic: "Quadratic Equations",
      name: "Completing the square",
      formula: "x² + bx = (x + b/2)² − (b/2)²",
      symbols: [["b", "coefficient of x"]],
      generalUse: "To rewrite a quadratic as a perfect square — used to derive the quadratic formula and find vertices.",
      laymanUse: "Turn a quadratic into a squared bracket plus a leftover number.",
      example: "x²+6x = (x+3)² − 9"
    },
    {
      subtopic: "Quadratic Equations",
      name: "Difference of the roots",
      formula: "α − β = √D ÷ a,   D = b² − 4ac",
      symbols: [["α, β", "the roots"], ["D", "discriminant"], ["a", "coefficient of x²"]],
      generalUse: "To find how far apart the two roots of a quadratic are.",
      laymanUse: "The gap between the two answers comes from the square root of the discriminant.",
      example: "x²−5x+6: D=1, a=1 → α−β = 1"
    },
    {
      subtopic: "Exponents",
      name: "Power of a product / quotient",
      formula: "(ab)ⁿ = aⁿbⁿ,   (a/b)ⁿ = aⁿ/bⁿ",
      symbols: [["a, b", "the bases"], ["n", "the power"]],
      generalUse: "To distribute a power across a product or a fraction in algebra.",
      laymanUse: "A power on a bracket spreads to each factor inside.",
      example: "(2x)³ = 8x³"
    },
    {
      subtopic: "Linear Equations",
      name: "Consistency of two linear equations",
      formula: "a₁/a₂ ≠ b₁/b₂ (one sol.);  = but ≠ c₁/c₂ (none);  all equal (infinite)",
      symbols: [["a, b, c", "coefficients of the two equations"]],
      generalUse: "To decide whether a pair of linear equations has one, none, or infinitely many solutions.",
      laymanUse: "Compare the three ratios: they tell you if the lines cross, are parallel, or are the same line.",
      example: "x+y=2 and 2x+2y=4 → all ratios equal → infinite solutions"
    },
    {
      subtopic: "Inequalities",
      name: "Sign flip when multiplying by a negative",
      formula: "If a > b and c < 0, then ac < bc",
      symbols: [["a, b", "the numbers"], ["c", "a negative multiplier"]],
      generalUse: "The key rule when solving inequalities — the inequality sign reverses.",
      laymanUse: "Multiplying or dividing an inequality by a negative number flips the < or > sign.",
      example: "−2x > 6 → x < −3 (sign flipped)"
    },
    {
      subtopic: "Logarithms",
      name: "Log of a root",
      formula: "log(ⁿ√m) = (1/n) × log m",
      symbols: [["m", "positive number"], ["n", "the root"]],
      generalUse: "To take the log of a root by turning the root into a fractional power.",
      laymanUse: "The log of an nth root is the log divided by n.",
      example: "log(√100) = ½ × log100 = 1"
    },
    {
      subtopic: "Logarithms",
      name: "Log and antilog relationship",
      formula: "if log_a x = y, then x = aʸ",
      symbols: [["a", "the base"], ["x", "the number"], ["y", "the log"]],
      generalUse: "The basic definition linking logarithms and exponents — used to solve exponential equations.",
      laymanUse: "A logarithm just asks 'what power gives this number?'.",
      example: "log₂8 = 3 because 2³ = 8"
    },
    {
      subtopic: "Series (Sum of n terms)",
      name: "Sum of first n even numbers",
      formula: "2 + 4 + 6 + … = n(n + 1)",
      symbols: [["n", "how many even numbers"]],
      generalUse: "To add the first n even numbers instantly.",
      laymanUse: "Add the first n even numbers and you get n times (n+1).",
      example: "2+4+6+8 = 4×5 = 20"
    },
    {
      subtopic: "Polynomials",
      name: "Division algorithm for polynomials",
      formula: "p(x) = g(x) × q(x) + r(x)",
      symbols: [
        ["p(x)", "dividend"],
        ["g(x)", "divisor"],
        ["q(x)", "quotient"],
        ["r(x)", "remainder"]
      ],
      generalUse: "The rule behind polynomial long division — used to factorise and simplify.",
      laymanUse: "Just like numbers: dividend equals divisor times quotient plus remainder.",
      example: "x²−1 = (x−1)(x+1) + 0"
    },
    {
      subtopic: "Polynomials",
      name: "Zeroes and coefficients (cubic)",
      formula: "α+β+γ = −b/a,  αβ+βγ+γα = c/a,  αβγ = −d/a",
      symbols: [["a,b,c,d", "coefficients of ax³+bx²+cx+d"], ["α,β,γ", "the three roots"]],
      generalUse: "To relate the three roots of a cubic to its coefficients.",
      laymanUse: "For a cubic, the three answers add, pair-multiply and all-multiply to fixed values from the coefficients.",
      example: "x³−6x²+11x−6: sum=6, product=6"
    },
    {
      subtopic: "Quadratic Equations",
      name: "Vertex of a parabola",
      formula: "x = −b/2a,   then y = value at that x",
      symbols: [["a, b", "coefficients"], ["(x, y)", "the turning point"]],
      generalUse: "To find the highest or lowest point of a quadratic — maxima/minima, projectile peaks.",
      laymanUse: "The turning point of the U-shaped curve sits at x = −b/(2a).",
      example: "y=x²−4x+3: vertex at x = 2, y = −1"
    },
    {
      subtopic: "Quadratic Equations",
      name: "Axis of symmetry",
      formula: "x = −b ÷ 2a",
      symbols: [["a, b", "coefficients of the quadratic"]],
      generalUse: "The vertical line that splits a parabola into two mirror halves.",
      laymanUse: "The U-shape is symmetric about the vertical line x = −b/(2a).",
      example: "y=x²−6x+5: axis is x = 3"
    },
    {
      subtopic: "Ratio & Proportion",
      name: "Fourth proportional",
      formula: "If a : b = c : d, then d = (b × c) ÷ a",
      symbols: [["a, b, c", "the three known quantities"], ["d", "the fourth"]],
      generalUse: "To find the missing fourth term in a proportion — scaling recipes, maps, prices.",
      laymanUse: "Cross-multiply to find the missing fourth number that keeps the ratio.",
      example: "2:3 = 4:d → d = 3×4/2 = 6"
    },
    {
      subtopic: "Ratio & Proportion",
      name: "Mean proportional (geometric mean)",
      formula: "If a : x = x : b, then x = √(a × b)",
      symbols: [["a, b", "the two numbers"], ["x", "the mean proportional"]],
      generalUse: "To find the number that is in continued proportion between two numbers.",
      laymanUse: "The middle term of a continued proportion is the square root of the product.",
      example: "4 : x = x : 9 → x = √36 = 6"
    },
    {
      subtopic: "Harmonic Progression",
      name: "Harmonic mean of two numbers",
      formula: "HM = 2ab ÷ (a + b)",
      symbols: [["a, b", "the two numbers"]],
      generalUse: "To average rates like speeds over equal distances, and in HP problems.",
      laymanUse: "The harmonic mean is used when averaging rates — twice the product over the sum.",
      example: "HM of 4 and 6 = 2·24/10 = 4.8"
    },
    {
      subtopic: "Surds",
      name: "Rationalising a denominator",
      formula: "1/√a = √a ÷ a",
      symbols: [["a", "positive number under the root"]],
      generalUse: "To remove a surd from the denominator so the fraction is easier to work with.",
      laymanUse: "Multiply top and bottom by the root to clear the root from the bottom.",
      example: "1/√2 = √2/2 ≈ 0.707"
    },
    {
      subtopic: "Identities",
      name: "Sum and difference of squares (numbers)",
      formula: "(a + b)(a − b) = a² − b²",
      symbols: [["a, b", "any numbers"]],
      generalUse: "A fast way to multiply numbers like 52×48 = (50+2)(50−2).",
      laymanUse: "Sum times difference of two numbers equals the difference of their squares.",
      example: "52×48 = 50²−2² = 2500−4 = 2496"
    }
  ]
});
