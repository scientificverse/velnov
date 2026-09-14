/* ============================================================
   MATH FORMULAS - TOPIC: ADVANCED (Class 11-12)
   Sets, permutations & combinations, binomial, matrices,
   determinants, vectors, complex numbers.
   ============================================================ */

window.FORMULA_DATA = window.FORMULA_DATA || [];

FORMULA_DATA.push({
  topic: "Advanced (Sets, Vectors, Matrices…)",
  icon: "🎓",
  color: "#be123c",
  formulas: [
    {
      cls: "Class 11",
      subtopic: "Sets",
      name: "Number of elements in a union",
      formula: "n(A ∪ B) = n(A) + n(B) − n(A ∩ B)",
      symbols: [
        ["n(A), n(B)", "sizes of sets A and B"],
        ["n(A ∩ B)", "number common to both"]
      ],
      generalUse: "To count elements in the union of two overlapping sets — surveys, group counting without double-counting.",
      laymanUse: "Add the two group sizes, then subtract the overlap so shared members aren't counted twice.",
      example: "n(A)=20, n(B)=15, common 5 → 20+15−5 = 30"
    },
    {
      cls: "Class 11",
      subtopic: "Permutations",
      name: "Permutations (arrangements)",
      formula: "ⁿPᵣ = n! ÷ (n − r)!",
      symbols: [
        ["n", "total items"],
        ["r", "items chosen and arranged"],
        ["!", "factorial"]
      ],
      generalUse: "To count ordered arrangements — passwords, seat orders, race finishes where order matters.",
      laymanUse: "Counts how many ways to arrange r things out of n when the order matters.",
      example: "⁵P₂ = 5!/3! = 20"
    },
    {
      cls: "Class 11",
      subtopic: "Combinations",
      name: "Combinations (selections)",
      formula: "ⁿCᵣ = n! ÷ [r!(n − r)!]",
      symbols: [
        ["n", "total items"],
        ["r", "items chosen"],
        ["!", "factorial"]
      ],
      generalUse: "To count selections where order does NOT matter — teams, committees, lottery picks.",
      laymanUse: "Counts how many ways to pick r things out of n when the order doesn't matter.",
      example: "⁵C₂ = 5!/(2!·3!) = 10"
    },
    {
      cls: "Class 11",
      subtopic: "Binomial Theorem",
      name: "General term of a binomial expansion",
      formula: "Tᵣ₊₁ = ⁿCᵣ · aⁿ⁻ʳ · bʳ",
      symbols: [
        ["n", "the power"],
        ["r", "term position (from 0)"],
        ["a, b", "the two terms of (a+b)ⁿ"]
      ],
      generalUse: "To find any single term in the expansion of (a+b)ⁿ without expanding the whole thing.",
      laymanUse: "A shortcut to jump straight to the term you want when expanding a bracket raised to a power.",
      example: "(x+2)⁵, term with x³: ⁵C₂·x³·2² = 40x³"
    },
    {
      cls: "Class 11",
      subtopic: "Complex Numbers",
      name: "Modulus of a complex number",
      formula: "|z| = √(a² + b²),  z = a + bi",
      symbols: [
        ["a", "real part"],
        ["b", "imaginary part"],
        ["i", "√(−1)"]
      ],
      generalUse: "To find the size (distance from origin) of a complex number — used in engineering and physics.",
      laymanUse: "Treat the real and imaginary parts like the sides of a right triangle; the modulus is the hypotenuse.",
      example: "z = 3 + 4i → |z| = √(9+16) = 5"
    },
    {
      cls: "Class 12",
      subtopic: "Matrices",
      name: "Order of a matrix",
      formula: "Order = (rows) × (columns) = m × n",
      symbols: [["m", "number of rows"], ["n", "number of columns"]],
      generalUse: "To describe the size of a matrix, which decides whether operations like multiplication are possible.",
      laymanUse: "Count the rows and columns; a matrix with m rows and n columns is 'm by n'.",
      example: "A matrix with 2 rows and 3 columns is order 2×3"
    },
    {
      cls: "Class 12",
      subtopic: "Determinants",
      name: "Determinant of a 2×2 matrix",
      formula: "|A| = ad − bc,  A = [[a, b], [c, d]]",
      symbols: [["a, b, c, d", "the four entries of the matrix"]],
      generalUse: "To solve linear equations, find inverses and check if a matrix is invertible.",
      laymanUse: "Multiply the main diagonal, subtract the other diagonal's product.",
      example: "[[1,2],[3,4]] → 1·4 − 2·3 = −2"
    },
    {
      cls: "Class 12",
      subtopic: "Vectors",
      name: "Magnitude of a vector",
      formula: "|v| = √(x² + y² + z²)",
      symbols: [["x, y, z", "the vector's components"]],
      generalUse: "To find the length of a vector in 2D or 3D — physics (force, velocity), computer graphics.",
      laymanUse: "Square each direction component, add them, and take the square root to get the arrow's length.",
      example: "v = (2,3,6) → |v| = √(4+9+36) = 7"
    },
    {
      cls: "Class 12",
      subtopic: "Vectors",
      name: "Dot product of two vectors",
      formula: "a · b = |a||b| cos θ",
      symbols: [
        ["|a|, |b|", "the vectors' magnitudes"],
        ["θ", "angle between them"]
      ],
      generalUse: "To find the angle between vectors or the work done by a force — physics and geometry.",
      laymanUse: "Multiplies two arrows in a way that depends on how much they point the same way.",
      example: "If a⊥b (θ=90°), a·b = 0"
    },
    {
      cls: "Class 11",
      subtopic: "Functions",
      name: "Distance a function idea (f(x))",
      formula: "y = f(x)",
      symbols: [
        ["x", "the input"],
        ["f", "the rule"],
        ["y", "the output"]
      ],
      generalUse: "The basic idea of a function — a rule that turns each input into exactly one output. Foundation of all higher maths.",
      laymanUse: "A function is a machine: put a number in, apply the rule, and get one number out.",
      example: "f(x) = 2x+1 → f(3) = 7"
    },
    {
      subtopic: "Permutations",
      name: "Factorial",
      formula: "n! = n × (n−1) × (n−2) × … × 2 × 1",
      symbols: [["n", "a whole number"], ["0!", "defined as 1"]],
      generalUse: "The building block of permutations and combinations — counting arrangements.",
      laymanUse: "Multiply all whole numbers from n down to 1. It counts how many ways to order n things.",
      example: "5! = 5×4×3×2×1 = 120"
    },
    {
      subtopic: "Combinations",
      name: "Relation between nPr and nCr",
      formula: "ⁿPᵣ = ⁿCᵣ × r!",
      symbols: [["ⁿPᵣ", "arrangements"], ["ⁿCᵣ", "selections"], ["r!", "r factorial"]],
      generalUse: "To convert between selections and arrangements of r items from n.",
      laymanUse: "Arrangements = selections times the number of ways to order the chosen r items.",
      example: "⁵P₂ = ⁵C₂ × 2! = 10 × 2 = 20"
    },
    {
      subtopic: "Binomial Theorem",
      name: "Binomial expansion",
      formula: "(a + b)ⁿ = Σ ⁿCᵣ · aⁿ⁻ʳ · bʳ",
      symbols: [["n", "the power"], ["ⁿCᵣ", "the binomial coefficients"]],
      generalUse: "To expand a bracket raised to a whole-number power without multiplying it out step by step.",
      laymanUse: "A shortcut to expand (a+b) raised to any power using the counting numbers ⁿCᵣ.",
      example: "(a+b)² = a² + 2ab + b²"
    },
    {
      subtopic: "Complex Numbers",
      name: "Powers of i",
      formula: "i² = −1, i³ = −i, i⁴ = 1  (i = √−1)",
      symbols: [["i", "the imaginary unit √(−1)"]],
      generalUse: "The basic rules for simplifying powers of i in complex-number arithmetic.",
      laymanUse: "i squared is −1, and higher powers cycle in a pattern of four.",
      example: "i⁴ = 1, so i⁵ = i"
    },
    {
      subtopic: "Vectors",
      name: "Cross product magnitude",
      formula: "|a × b| = |a||b| sin θ",
      symbols: [["|a|,|b|", "the magnitudes"], ["θ", "angle between them"]],
      generalUse: "To find the area of a parallelogram formed by two vectors, and directions in physics (torque, force).",
      laymanUse: "Multiplies two arrows in a way that is largest when they point at right angles.",
      example: "If a∥b (θ=0), a × b = 0"
    },
    {
      subtopic: "Matrices",
      name: "Identity matrix property",
      formula: "A × I = I × A = A",
      symbols: [["A", "any square matrix"], ["I", "the identity matrix"]],
      generalUse: "The identity matrix acts like the number 1 for matrices — used in inverses and solving systems.",
      laymanUse: "Just as multiplying a number by 1 leaves it unchanged, multiplying a matrix by I leaves it unchanged.",
      example: "Any 2×2 matrix times the 2×2 identity stays the same"
    },
    {
      subtopic: "Sets",
      name: "Union of three sets",
      formula: "n(A∪B∪C) = n(A)+n(B)+n(C) − n(A∩B) − n(B∩C) − n(C∩A) + n(A∩B∩C)",
      symbols: [["n(...)", "sizes of the sets and overlaps"]],
      generalUse: "To count elements in three overlapping sets — survey problems with three categories.",
      laymanUse: "Add the three groups, remove each double-counted overlap, then add back the triple overlap.",
      example: "Used in 'students who like tea/coffee/juice' problems"
    },
    {
      subtopic: "Sets",
      name: "Number of subsets",
      formula: "Subsets = 2ⁿ,   Proper subsets = 2ⁿ − 1",
      symbols: [["n", "number of elements in the set"]],
      generalUse: "To count how many subsets a set has.",
      laymanUse: "Each element is either in or out, giving 2 choices each, so 2ⁿ subsets in all.",
      example: "Set {a,b,c} has 2³ = 8 subsets"
    },
    {
      subtopic: "Sets",
      name: "De Morgan's laws",
      formula: "(A∪B)' = A'∩B',   (A∩B)' = A'∪B'",
      symbols: [["'", "complement (not in the set)"]],
      generalUse: "To simplify complements of unions and intersections — logic and set theory.",
      laymanUse: "The 'not' of an OR becomes an AND of 'nots', and vice versa.",
      example: "Not(A or B) = (not A) and (not B)"
    },
    {
      subtopic: "Permutations",
      name: "Circular permutations",
      formula: "Circular arrangements = (n − 1)!",
      symbols: [["n", "number of items in a circle"]],
      generalUse: "To count seatings around a round table, where rotations are the same.",
      laymanUse: "In a circle there's no fixed start, so fix one person and arrange the rest: (n−1)!.",
      example: "5 people round a table → 4! = 24 ways"
    },
    {
      subtopic: "Permutations",
      name: "Permutations with repeated items",
      formula: "Arrangements = n! ÷ (p! × q! × …)",
      symbols: [["n", "total items"], ["p, q", "counts of each repeated item"]],
      generalUse: "To count arrangements of a word or set with repeated letters.",
      laymanUse: "Divide by the factorials of the repeats, since swapping identical items doesn't make a new order.",
      example: "LEVEL: 5!/(2!·2!) = 30 arrangements"
    },
    {
      subtopic: "Combinations",
      name: "Symmetry of combinations",
      formula: "ⁿCᵣ = ⁿCₙ₋ᵣ,   ⁿC₀ + ⁿC₁ + … + ⁿCₙ = 2ⁿ",
      symbols: [["n, r", "total and chosen"]],
      generalUse: "Useful identities for combinations — choosing r is the same as leaving out (n−r).",
      laymanUse: "Picking r to keep is the same as picking (n−r) to drop; all the combinations add to 2ⁿ.",
      example: "⁵C₂ = ⁵C₃ = 10"
    },
    {
      subtopic: "Combinations",
      name: "Pascal's rule",
      formula: "ⁿCᵣ + ⁿCᵣ₋₁ = ⁿ⁺¹Cᵣ",
      symbols: [["n, r", "total and chosen"]],
      generalUse: "The rule that builds Pascal's triangle and the binomial coefficients.",
      laymanUse: "Each number in Pascal's triangle is the sum of the two above it.",
      example: "⁴C₂ + ⁴C₁ = 6 + 4 = 10 = ⁵C₂"
    },
    {
      subtopic: "Binomial Theorem",
      name: "Number of terms and middle term",
      formula: "Terms in (a+b)ⁿ = n+1;  middle term at (n/2 + 1) if n even",
      symbols: [["n", "the power"]],
      generalUse: "To locate the middle term of a binomial expansion.",
      laymanUse: "An expansion of power n has n+1 terms; the middle one is often asked for.",
      example: "(a+b)⁶ has 7 terms; middle is the 4th"
    },
    {
      subtopic: "Binomial Theorem",
      name: "Sum of binomial coefficients",
      formula: "ⁿC₀ + ⁿC₁ + … + ⁿCₙ = 2ⁿ",
      symbols: [["n", "the power"]],
      generalUse: "To find the sum of all coefficients in a binomial expansion (put a=b=1).",
      laymanUse: "Setting both terms to 1 shows all the coefficients add to 2ⁿ.",
      example: "(1+1)³ = 8 = 1+3+3+1"
    },
    {
      subtopic: "Complex Numbers",
      name: "Conjugate of a complex number",
      formula: "z = a + bi  →  z̄ = a − bi",
      symbols: [["a", "real part"], ["b", "imaginary part"]],
      generalUse: "Used to divide complex numbers and to find modulus (z·z̄ = |z|²).",
      laymanUse: "The conjugate just flips the sign of the imaginary part.",
      example: "z = 3+4i → z̄ = 3−4i"
    },
    {
      subtopic: "Complex Numbers",
      name: "Product of modulus",
      formula: "|z₁ z₂| = |z₁| × |z₂|",
      symbols: [["z₁, z₂", "two complex numbers"]],
      generalUse: "To find the modulus of a product of complex numbers.",
      laymanUse: "The size of a product equals the product of the sizes.",
      example: "|z₁|=2, |z₂|=3 → |z₁z₂| = 6"
    },
    {
      subtopic: "Determinants",
      name: "Area of triangle (determinant)",
      formula: "Area = ½ |det of the coordinate matrix|",
      symbols: [["det", "the 3×3 determinant of the vertices"]],
      generalUse: "To find a triangle's area from coordinates using a determinant (Class 12).",
      laymanUse: "A neat determinant of the three corner points gives twice the area.",
      example: "Vertices (0,0),(4,0),(0,3) → area 6"
    },
    {
      subtopic: "Determinants",
      name: "Determinant of a 3×3 matrix",
      formula: "|A| = a(ei − fh) − b(di − fg) + c(dh − eg)",
      symbols: [["a…i", "the nine entries by rows"]],
      generalUse: "To evaluate a 3×3 determinant by expansion along the first row.",
      laymanUse: "Expand along the top row, alternating signs, using 2×2 determinants.",
      example: "Used to solve 3-variable equations"
    },
    {
      subtopic: "Vectors",
      name: "Unit vector",
      formula: "â = a⃗ ÷ |a⃗|",
      symbols: [["a⃗", "the vector"], ["|a⃗|", "its magnitude"]],
      generalUse: "To find a vector of length 1 in the same direction — directions in physics and graphics.",
      laymanUse: "Divide a vector by its own length to get a pure-direction arrow of length 1.",
      example: "a⃗=(3,4), |a⃗|=5 → â = (0.6, 0.8)"
    },
    {
      subtopic: "Vectors",
      name: "Angle between two vectors",
      formula: "cos θ = (a⃗ · b⃗) ÷ (|a⃗| |b⃗|)",
      symbols: [["a⃗ · b⃗", "the dot product"], ["|a⃗|,|b⃗|", "magnitudes"]],
      generalUse: "To find the angle between two vectors — forces, directions, geometry.",
      laymanUse: "The dot product over the two lengths gives the cosine of the angle between them.",
      example: "Perpendicular vectors → cosθ = 0, θ = 90°"
    },
    {
      subtopic: "Relations & Functions",
      name: "Number of relations and functions",
      formula: "Relations from A to B = 2^(m·n);  Functions = nᵐ",
      symbols: [["m", "elements in A"], ["n", "elements in B"]],
      generalUse: "To count possible relations and functions between two sets.",
      laymanUse: "Counts how many ways elements of one set can be linked or mapped to another.",
      example: "|A|=2, |B|=3 → functions = 3² = 9"
    }
  ]
});
