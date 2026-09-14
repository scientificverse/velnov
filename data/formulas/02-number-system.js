/* ============================================================
   MATH FORMULAS - TOPIC: NUMBER SYSTEM
   Factors, HCF/LCM, exponents, squares & cubes, fractions.
   ============================================================ */

window.FORMULA_DATA = window.FORMULA_DATA || [];

FORMULA_DATA.push({
  topic: "Number System",
  icon: "🔢",
  color: "#2563eb",
  formulas: [
    {
      cls: "Class 6",
      subtopic: "HCF & LCM",
      name: "Product of HCF and LCM",
      formula: "HCF × LCM = a × b",
      symbols: [
        ["HCF", "highest common factor"],
        ["LCM", "lowest common multiple"],
        ["a, b", "the two numbers"]
      ],
      generalUse: "To find the LCM quickly when the HCF is known (or vice versa) for two numbers.",
      laymanUse: "For any two numbers, the biggest number that divides both, times the smallest number both divide into, equals the two numbers multiplied together.",
      example: "For 12 and 18: HCF=6, LCM=36 → 6×36 = 12×18 = 216"
    },
    {
      cls: "Class 6",
      subtopic: "HCF & LCM",
      name: "LCM from HCF",
      formula: "LCM = (a × b) ÷ HCF",
      symbols: [["a, b", "the two numbers"], ["HCF", "highest common factor"]],
      generalUse: "To calculate the LCM of two numbers using their product and their HCF — used in adding fractions and solving timing problems.",
      laymanUse: "Multiply the two numbers and divide by the biggest number that divides both.",
      example: "a=12, b=18, HCF=6 → LCM = 216 ÷ 6 = 36"
    },
    {
      cls: "Class 7",
      subtopic: "Exponents",
      name: "Product law of exponents",
      formula: "aᵐ × aⁿ = aᵐ⁺ⁿ",
      symbols: [["a", "the base"], ["m, n", "the powers"]],
      generalUse: "To multiply powers of the same base by adding the exponents — used all over algebra and science.",
      laymanUse: "When you multiply the same number raised to powers, just add the little numbers on top.",
      example: "2³ × 2² = 2⁵ = 32"
    },
    {
      cls: "Class 7",
      subtopic: "Exponents",
      name: "Quotient law of exponents",
      formula: "aᵐ ÷ aⁿ = aᵐ⁻ⁿ",
      symbols: [["a", "the base (a ≠ 0)"], ["m, n", "the powers"]],
      generalUse: "To divide powers of the same base by subtracting the exponents.",
      laymanUse: "When you divide the same number raised to powers, subtract the little numbers on top.",
      example: "2⁵ ÷ 2² = 2³ = 8"
    },
    {
      cls: "Class 7",
      subtopic: "Exponents",
      name: "Power of a power",
      formula: "(aᵐ)ⁿ = aᵐⁿ",
      symbols: [["a", "the base"], ["m, n", "the powers"]],
      generalUse: "To simplify a power raised to another power by multiplying the exponents.",
      laymanUse: "A power of a power: multiply the two little top numbers together.",
      example: "(2³)² = 2⁶ = 64"
    },
    {
      cls: "Class 8",
      subtopic: "Exponents",
      name: "Zero exponent",
      formula: "a⁰ = 1  (a ≠ 0)",
      symbols: [["a", "any non-zero number"]],
      generalUse: "A rule used constantly when simplifying algebraic and scientific expressions.",
      laymanUse: "Any number (except 0) raised to the power 0 equals 1.",
      example: "7⁰ = 1,  100⁰ = 1"
    },
    {
      cls: "Class 8",
      subtopic: "Exponents",
      name: "Negative exponent",
      formula: "a⁻ⁿ = 1 ÷ aⁿ",
      symbols: [["a", "the base (a ≠ 0)"], ["n", "the power"]],
      generalUse: "To rewrite negative powers as fractions — used in standard form and algebra.",
      laymanUse: "A negative power means 'one divided by' that power — it flips it into a fraction.",
      example: "2⁻³ = 1 ÷ 2³ = 1/8"
    },
    {
      cls: "Class 8",
      subtopic: "Standard Form",
      name: "Standard (scientific) form",
      formula: "N = k × 10ⁿ,  1 ≤ k < 10",
      symbols: [
        ["k", "a number between 1 and 10"],
        ["n", "an integer power of 10"]
      ],
      generalUse: "To write very big or very small numbers compactly — used in science for distances, sizes and masses.",
      laymanUse: "Write the number as a value between 1 and 10 times a power of ten, so huge or tiny numbers are easy to read.",
      example: "300000 = 3 × 10⁵"
    },
    {
      cls: "Class 8",
      subtopic: "Squares",
      name: "Square of a number",
      formula: "Square = n × n = n²",
      symbols: [["n", "the number"]],
      generalUse: "To find a number multiplied by itself — used in area, Pythagoras and algebra.",
      laymanUse: "Squaring means multiplying a number by itself.",
      example: "6² = 6 × 6 = 36"
    },
    {
      cls: "Class 8",
      subtopic: "Cubes",
      name: "Cube of a number",
      formula: "Cube = n × n × n = n³",
      symbols: [["n", "the number"]],
      generalUse: "To find a number multiplied by itself three times — used in volume and algebra.",
      laymanUse: "Cubing means multiplying a number by itself three times.",
      example: "4³ = 4 × 4 × 4 = 64"
    },
    {
      cls: "Class 5",
      subtopic: "Fractions",
      name: "Adding like fractions",
      formula: "a/c + b/c = (a + b)/c",
      symbols: [["a, b", "the numerators"], ["c", "the common denominator"]],
      generalUse: "To add fractions that share the same denominator — sharing, measuring, part-work problems.",
      laymanUse: "When the bottoms are the same, just add the tops and keep the bottom.",
      example: "2/7 + 3/7 = 5/7"
    },
    {
      cls: "Class 7",
      subtopic: "Fractions",
      name: "Multiplying fractions",
      formula: "a/b × c/d = (a × c)/(b × d)",
      symbols: [["a, c", "numerators"], ["b, d", "denominators"]],
      generalUse: "To multiply two fractions — scaling recipes, finding a fraction of a fraction.",
      laymanUse: "Multiply the top numbers together and the bottom numbers together.",
      example: "2/3 × 3/4 = 6/12 = 1/2"
    },
    {
      cls: "Class 7",
      subtopic: "Fractions",
      name: "Dividing fractions",
      formula: "a/b ÷ c/d = a/b × d/c",
      symbols: [["a/b", "first fraction"], ["c/d", "second fraction (flipped)"]],
      generalUse: "To divide by a fraction by multiplying with its reciprocal (flip) — a key algebra and arithmetic skill.",
      laymanUse: "To divide by a fraction, flip the second one upside down and multiply instead.",
      example: "1/2 ÷ 1/4 = 1/2 × 4/1 = 2"
    },
    {
      cls: "Class 6",
      subtopic: "Divisibility",
      name: "Divisibility idea (a = b × q + r)",
      formula: "Dividend = Divisor × Quotient + Remainder",
      symbols: [
        ["Dividend", "number being divided"],
        ["Divisor", "number you divide by"],
        ["Quotient", "how many times it fits"],
        ["Remainder", "what is left over"]
      ],
      generalUse: "The basic relationship behind all division — used to check answers and in number theory.",
      laymanUse: "The number you start with equals how many times the divisor fits, times the divisor, plus whatever is left over.",
      example: "17 = 5 × 3 + 2"
    },
    {
      subtopic: "Exponents",
      name: "Fractional exponent (roots)",
      formula: "a^(1/n) = ⁿ√a",
      symbols: [["a", "the base"], ["n", "the root"]],
      generalUse: "To rewrite roots as powers and vice versa — used in surds, indices and calculus.",
      laymanUse: "A power of one-over-n means the nth root: power 1/2 is a square root, 1/3 is a cube root.",
      example: "27^(1/3) = ³√27 = 3"
    },
    {
      subtopic: "Surds",
      name: "Product of square roots",
      formula: "√a × √b = √(ab)",
      symbols: [["a, b", "non-negative numbers"]],
      generalUse: "To multiply or simplify square roots (surds) in algebra.",
      laymanUse: "Multiply what's inside the roots and keep it under one root.",
      example: "√2 × √8 = √16 = 4"
    },
    {
      subtopic: "Order of Operations",
      name: "BODMAS rule",
      formula: "Brackets → Orders(powers) → Division/Multiplication → Addition/Subtraction",
      symbols: [["BODMAS", "the order to calculate in"]],
      generalUse: "To evaluate an expression in the correct order so everyone gets the same answer.",
      laymanUse: "Do brackets first, then powers, then × and ÷, and finally + and −.",
      example: "2 + 3 × 4 = 2 + 12 = 14 (not 20)"
    },
    {
      subtopic: "Rational Numbers",
      name: "A rational number between two numbers",
      formula: "Between a and b: (a + b) ÷ 2",
      symbols: [["a, b", "the two numbers"]],
      generalUse: "To find a number lying between any two given numbers — shows there are infinitely many.",
      laymanUse: "The average of two numbers always sits exactly between them.",
      example: "Between 1/2 and 1: (1/2 + 1)/2 = 3/4"
    },
    {
      subtopic: "Squares",
      name: "Square root by the meaning",
      formula: "√n = m,  where m × m = n",
      symbols: [["n", "the number"], ["m", "its square root"]],
      generalUse: "To find the number which, multiplied by itself, gives n — used in Pythagoras, areas, statistics.",
      laymanUse: "The square root asks: what number times itself makes this number?",
      example: "√64 = 8 because 8 × 8 = 64"
    },
    {
      subtopic: "Divisibility Rules",
      name: "Divisible by 2, 5 and 10",
      formula: "by 2: last digit even · by 5: ends in 0 or 5 · by 10: ends in 0",
      symbols: [["last digit", "the units digit"]],
      generalUse: "To check quickly whether a number divides by 2, 5 or 10 without dividing.",
      laymanUse: "Just look at the last digit to test these three.",
      example: "340 is divisible by 2, 5 and 10"
    },
    {
      subtopic: "Divisibility Rules",
      name: "Divisible by 3 and 9",
      formula: "by 3: digit sum ÷ 3 · by 9: digit sum ÷ 9",
      symbols: [["digit sum", "add all the digits"]],
      generalUse: "To test divisibility by 3 or 9 using the sum of the digits.",
      laymanUse: "Add all the digits — if that total divides by 3 (or 9), so does the number.",
      example: "927 → 9+2+7=18, divisible by both 3 and 9"
    },
    {
      subtopic: "Divisibility Rules",
      name: "Divisible by 4 and 8",
      formula: "by 4: last 2 digits ÷ 4 · by 8: last 3 digits ÷ 8",
      symbols: [["last digits", "the ending digits"]],
      generalUse: "To test divisibility by 4 or 8 using only the ending digits.",
      laymanUse: "Check the last two digits for 4, the last three for 8.",
      example: "1236 → 36 ÷ 4, so divisible by 4"
    },
    {
      subtopic: "Divisibility Rules",
      name: "Divisible by 11",
      formula: "Difference of alternate digit sums is 0 or a multiple of 11",
      symbols: [["—", "odd-place sum − even-place sum"]],
      generalUse: "To test divisibility by 11.",
      laymanUse: "Add the digits in odd spots and in even spots; if the difference is 0 or 11, it divides by 11.",
      example: "918082 → (9+8+8)−(1+0+2)=22, divisible by 11"
    },
    {
      subtopic: "Factors",
      name: "Number of factors",
      formula: "If N = aᵖ × bᑫ × …, factors = (p+1)(q+1)…",
      symbols: [["a, b", "prime factors"], ["p, q", "their powers"]],
      generalUse: "To count how many divisors a number has from its prime factorisation.",
      laymanUse: "Add one to each power in the prime factorisation and multiply them.",
      example: "12 = 2²×3¹ → (2+1)(1+1) = 6 factors"
    },
    {
      subtopic: "Factors",
      name: "Sum of factors",
      formula: "Sum = [(aᵖ⁺¹−1)/(a−1)] × [(bᑫ⁺¹−1)/(b−1)] …",
      symbols: [["a, b", "prime factors"], ["p, q", "their powers"]],
      generalUse: "To find the total of all divisors of a number from its prime factorisation.",
      laymanUse: "A formula that adds up every divisor of a number without listing them.",
      example: "12 = 2²×3 → (7)(4) = 28 (1+2+3+4+6+12)"
    },
    {
      subtopic: "HCF & LCM",
      name: "HCF and LCM of fractions",
      formula: "HCF = HCF(numerators)/LCM(denominators);  LCM = LCM(num)/HCF(den)",
      symbols: [["num", "numerators"], ["den", "denominators"]],
      generalUse: "To find the HCF or LCM of fractions.",
      laymanUse: "Special rule: swap where HCF and LCM go for the tops and bottoms.",
      example: "HCF of 2/3, 4/9 = HCF(2,4)/LCM(3,9) = 2/9"
    },
    {
      subtopic: "Number Types",
      name: "Types of numbers",
      formula: "Natural ⊂ Whole ⊂ Integers ⊂ Rational ⊂ Real",
      symbols: [["⊂", "is contained within"]],
      generalUse: "To classify numbers — the foundation of the number system.",
      laymanUse: "Counting numbers sit inside whole numbers, inside integers, inside fractions, inside all real numbers.",
      example: "−3 is an integer and a rational and a real number"
    },
    {
      subtopic: "Number Types",
      name: "Prime, composite and co-prime",
      formula: "Prime: exactly 2 factors · Composite: more than 2 · Co-prime: HCF = 1",
      symbols: [["factors", "numbers that divide it exactly"]],
      generalUse: "To identify prime, composite and co-prime numbers in number theory.",
      laymanUse: "A prime has only 1 and itself as factors; two co-primes share no common factor but 1.",
      example: "7 is prime; 8 is composite; 8 and 9 are co-prime"
    },
    {
      subtopic: "Fractions",
      name: "Subtracting like fractions",
      formula: "a/c − b/c = (a − b)/c",
      symbols: [["a, b", "numerators"], ["c", "common denominator"]],
      generalUse: "To subtract fractions with the same denominator.",
      laymanUse: "Same bottoms: subtract the tops and keep the bottom.",
      example: "5/8 − 3/8 = 2/8 = 1/4"
    },
    {
      subtopic: "Fractions",
      name: "Adding unlike fractions",
      formula: "a/b + c/d = (ad + bc) ÷ bd",
      symbols: [["a/b, c/d", "the two fractions"]],
      generalUse: "To add fractions with different denominators.",
      laymanUse: "Cross-multiply and add the tops over the product of the bottoms.",
      example: "1/2 + 1/3 = (3+2)/6 = 5/6"
    },
    {
      subtopic: "Fractions",
      name: "Mixed number to improper fraction",
      formula: "a b/c = (a × c + b) ÷ c",
      symbols: [["a", "whole part"], ["b/c", "fraction part"]],
      generalUse: "To convert a mixed number into an improper fraction before calculating.",
      laymanUse: "Multiply the whole number by the bottom, add the top, and keep the bottom.",
      example: "2¾ = (2×4+3)/4 = 11/4"
    },
    {
      subtopic: "Decimals",
      name: "Recurring decimal to fraction",
      formula: "0.ā = a/9,   0.āb̄ = ab/99",
      symbols: [["a, ab", "the repeating digits"]],
      generalUse: "To turn a repeating decimal into an exact fraction.",
      laymanUse: "Put the repeating digits over as many 9s as there are repeating digits.",
      example: "0.333… = 3/9 = 1/3"
    },
    {
      subtopic: "Exponents",
      name: "Power of a power (indices)",
      formula: "(aᵐ)ⁿ = a^(mn),   aᵐ × aⁿ = a^(m+n)",
      symbols: [["a", "the base"], ["m, n", "the powers"]],
      generalUse: "The core index laws used to simplify powers.",
      laymanUse: "Multiply powers of a power; add powers when multiplying the same base.",
      example: "(2²)³ = 2⁶ = 64"
    },
    {
      subtopic: "Squares",
      name: "Square of a number ending in 5",
      formula: "(n5)² = n(n+1) followed by 25",
      symbols: [["n", "the digits before the 5"]],
      generalUse: "A quick trick to square any number ending in 5.",
      laymanUse: "Multiply the front part by the next number, then stick 25 on the end.",
      example: "35² → 3×4=12, so 1225"
    },
    {
      subtopic: "Unit Digit",
      name: "Unit digit of a power (cyclicity)",
      formula: "Unit digits repeat in cycles (2,4,8,6…), period 4",
      symbols: [["—", "the last digit of the base"]],
      generalUse: "To find the last digit of a large power without full calculation.",
      laymanUse: "The last digit of powers repeats in a short cycle, so you only need the remainder of the power ÷ 4.",
      example: "2¹⁰ ends in 4 (cycle 2,4,8,6)"
    },
    {
      subtopic: "Place Value",
      name: "Place value vs face value",
      formula: "Place value = digit × its place;   Face value = the digit itself",
      symbols: [["digit", "a single figure in the number"]],
      generalUse: "To distinguish a digit's position-based value from the digit itself.",
      laymanUse: "Face value is the digit as-is; place value depends on where it sits.",
      example: "In 57, place value of 5 is 50, face value is 5"
    },
    {
      subtopic: "Consecutive Numbers",
      name: "Sum of consecutive integers",
      formula: "Sum = (number of terms) × (average of first and last)",
      symbols: [["average", "(first + last) ÷ 2"]],
      generalUse: "To add a run of consecutive numbers quickly.",
      laymanUse: "Multiply how many numbers there are by the average of the ends.",
      example: "5+6+7+8 = 4 × 6.5 = 26"
    },
    {
      subtopic: "Surds",
      name: "Quotient of square roots",
      formula: "√a ÷ √b = √(a/b)",
      symbols: [["a, b", "non-negative, b ≠ 0"]],
      generalUse: "To simplify a ratio of square roots.",
      laymanUse: "Divide what's inside the roots and keep it under one root.",
      example: "√18 ÷ √2 = √9 = 3"
    },
    {
      subtopic: "Comparing",
      name: "Comparing fractions (cross multiply)",
      formula: "a/b vs c/d:  compare a×d with b×c",
      symbols: [["a/b, c/d", "the two fractions"]],
      generalUse: "To decide which of two fractions is larger without a common denominator.",
      laymanUse: "Cross-multiply; the bigger product sits above the bigger fraction.",
      example: "3/4 vs 5/7 → 21 vs 20, so 3/4 is bigger"
    }
  ]
});
