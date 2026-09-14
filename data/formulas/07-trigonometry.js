/* ============================================================
   MATH FORMULAS - TOPIC: TRIGONOMETRY
   Ratios, identities, standard values, heights & distances.
   ============================================================ */

window.FORMULA_DATA = window.FORMULA_DATA || [];

FORMULA_DATA.push({
  topic: "Trigonometry",
  icon: "📐",
  color: "#0284c7",
  formulas: [
    {
      cls: "Class 10",
      subtopic: "Ratios",
      name: "Sine ratio",
      formula: "sin θ = Opposite ÷ Hypotenuse",
      symbols: [
        ["θ", "the angle"],
        ["Opposite", "side facing the angle"],
        ["Hypotenuse", "longest side"]
      ],
      generalUse: "In a right triangle, to link an angle to two of its sides — heights, distances, physics, waves.",
      laymanUse: "For a given corner angle, sine is the side across from it divided by the longest slanting side.",
      example: "Opposite=3, Hyp=5 → sin θ = 3/5 = 0.6"
    },
    {
      cls: "Class 10",
      subtopic: "Ratios",
      name: "Cosine ratio",
      formula: "cos θ = Adjacent ÷ Hypotenuse",
      symbols: [
        ["θ", "the angle"],
        ["Adjacent", "side next to the angle"],
        ["Hypotenuse", "longest side"]
      ],
      generalUse: "To relate an angle to the side beside it and the hypotenuse — surveying, navigation, forces.",
      laymanUse: "Cosine is the side next to the angle divided by the longest slanting side.",
      example: "Adjacent=4, Hyp=5 → cos θ = 4/5 = 0.8"
    },
    {
      cls: "Class 10",
      subtopic: "Ratios",
      name: "Tangent ratio",
      formula: "tan θ = Opposite ÷ Adjacent",
      symbols: [
        ["θ", "the angle"],
        ["Opposite", "side facing the angle"],
        ["Adjacent", "side next to the angle"]
      ],
      generalUse: "To find an angle or height from the two shorter sides — ramps, slopes, heights of buildings.",
      laymanUse: "Tangent is the side across from the angle divided by the side next to it. Also sin ÷ cos.",
      example: "Opposite=3, Adjacent=4 → tan θ = 3/4 = 0.75"
    },
    {
      cls: "Class 10",
      subtopic: "Identities",
      name: "Pythagorean identity",
      formula: "sin²θ + cos²θ = 1",
      symbols: [["θ", "any angle"]],
      generalUse: "The most-used trig identity — to find one ratio from another and to simplify expressions.",
      laymanUse: "For any angle, the square of its sine plus the square of its cosine is always exactly 1.",
      example: "sin30°=0.5, cos30°≈0.866 → 0.25+0.75 = 1"
    },
    {
      cls: "Class 10",
      subtopic: "Identities",
      name: "Tangent identity",
      formula: "tan θ = sin θ ÷ cos θ",
      symbols: [["θ", "the angle (cos θ ≠ 0)"]],
      generalUse: "To rewrite tangent in terms of sine and cosine when simplifying or solving.",
      laymanUse: "Tangent is just sine divided by cosine for the same angle.",
      example: "tan45° = sin45°/cos45° = 1"
    },
    {
      cls: "Class 10",
      subtopic: "Standard Values",
      name: "Standard angle values (sin)",
      formula: "sin0°=0, sin30°=½, sin45°=1/√2, sin60°=√3/2, sin90°=1",
      symbols: [["θ", "common angles 0°–90°"]],
      generalUse: "The key values memorised for quick trig calculations in exams and problems.",
      laymanUse: "These are the ready answers for sine of the common angles, no calculator needed.",
      example: "sin30° = ½ = 0.5"
    },
    {
      cls: "Class 10",
      subtopic: "Reciprocal Ratios",
      name: "Cosecant, secant, cotangent",
      formula: "cosec θ = 1/sin θ,  sec θ = 1/cos θ,  cot θ = 1/tan θ",
      symbols: [["θ", "the angle"]],
      generalUse: "The reciprocal trig ratios, used in identities, calculus and advanced problems.",
      laymanUse: "These are just 'one divided by' the three main ratios — the flipped versions.",
      example: "sin30°=0.5 → cosec30° = 1/0.5 = 2"
    },
    {
      cls: "Class 10",
      subtopic: "Heights & Distances",
      name: "Height using angle of elevation",
      formula: "Height = Distance × tan θ",
      symbols: [
        ["θ", "angle of elevation"],
        ["Distance", "horizontal distance to the object"]
      ],
      generalUse: "To find the height of a tower, tree or building from a distance and the angle looking up.",
      laymanUse: "Stand back a known distance, measure the up-angle to the top, and this gives the height.",
      example: "Distance=30 m, θ=45° → Height = 30 × 1 = 30 m"
    },
    {
      cls: "Class 11",
      subtopic: "Identities",
      name: "Sine of a sum",
      formula: "sin(A + B) = sinA cosB + cosA sinB",
      symbols: [["A, B", "two angles"]],
      generalUse: "To expand the sine of a combined angle — used in waves, oscillations and advanced trig.",
      laymanUse: "Breaks the sine of two added angles into a combination of their sines and cosines.",
      example: "sin(30°+60°) = sin90° = 1"
    },
    {
      cls: "Class 11",
      subtopic: "Identities",
      name: "Cosine of a sum",
      formula: "cos(A + B) = cosA cosB − sinA sinB",
      symbols: [["A, B", "two angles"]],
      generalUse: "To expand the cosine of a combined angle in trigonometry and physics.",
      laymanUse: "Breaks the cosine of two added angles into their cosines and sines combined.",
      example: "cos(30°+60°) = cos90° = 0"
    },
    {
      subtopic: "Ratios",
      name: "The six ratios (SOH-CAH-TOA)",
      formula: "sin=O/H, cos=A/H, tan=O/A, cosec=H/O, sec=H/A, cot=A/O",
      symbols: [["O", "opposite side"], ["A", "adjacent side"], ["H", "hypotenuse"]],
      generalUse: "The complete set of the six trig ratios in a right triangle, the base of all trigonometry.",
      laymanUse: "'SOH-CAH-TOA' helps you remember the first three; the last three are just their flips.",
      example: "O=3, A=4, H=5 → sin=3/5, cos=4/5, tan=3/4"
    },
    {
      subtopic: "Reciprocal Ratios",
      name: "Cotangent as cos over sin",
      formula: "cot θ = cos θ ÷ sin θ",
      symbols: [["θ", "the angle (sin θ ≠ 0)"]],
      generalUse: "To rewrite cotangent using sine and cosine when simplifying trig expressions.",
      laymanUse: "Cotangent is cosine divided by sine — the upside-down of tangent.",
      example: "cot45° = cos45°/sin45° = 1"
    },
    {
      subtopic: "Identities",
      name: "Secant identity",
      formula: "1 + tan²θ = sec²θ",
      symbols: [["θ", "any angle"]],
      generalUse: "A key identity used to switch between tangent and secant when simplifying or in calculus.",
      laymanUse: "One plus tangent-squared always equals secant-squared for the same angle.",
      example: "tan45°=1 → 1+1 = 2 = sec²45°"
    },
    {
      subtopic: "Identities",
      name: "Cosecant identity",
      formula: "1 + cot²θ = cosec²θ",
      symbols: [["θ", "any angle"]],
      generalUse: "Used to switch between cotangent and cosecant in proofs and integration.",
      laymanUse: "One plus cotangent-squared always equals cosecant-squared for the same angle.",
      example: "cot45°=1 → 1+1 = 2 = cosec²45°"
    },
    {
      subtopic: "Standard Values",
      name: "Standard angle values (cos)",
      formula: "cos0°=1, cos30°=√3/2, cos45°=1/√2, cos60°=½, cos90°=0",
      symbols: [["θ", "common angles 0°–90°"]],
      generalUse: "The memorised cosine values for quick trig calculations in exams.",
      laymanUse: "Ready answers for cosine of the common angles — notice they run opposite to the sine values.",
      example: "cos60° = ½ = 0.5"
    },
    {
      subtopic: "Standard Values",
      name: "Standard angle values (tan)",
      formula: "tan0°=0, tan30°=1/√3, tan45°=1, tan60°=√3, tan90°=∞",
      symbols: [["θ", "common angles 0°–90°"]],
      generalUse: "The memorised tangent values, used in heights-and-distances and geometry problems.",
      laymanUse: "Ready answers for tangent of the common angles; tan45° = 1 is the easiest to remember.",
      example: "tan60° = √3 ≈ 1.732"
    },
    {
      subtopic: "Compound Angles",
      name: "Sine of a difference",
      formula: "sin(A − B) = sinA cosB − cosA sinB",
      symbols: [["A, B", "two angles"]],
      generalUse: "To expand the sine of a difference of angles — trig proofs, waves, physics.",
      laymanUse: "Like the sum version, but with a minus in the middle.",
      example: "sin(60°−30°) = sin30° = 0.5"
    },
    {
      subtopic: "Compound Angles",
      name: "Cosine of a difference",
      formula: "cos(A − B) = cosA cosB + sinA sinB",
      symbols: [["A, B", "two angles"]],
      generalUse: "To expand the cosine of a difference of angles in trigonometry.",
      laymanUse: "Like the cosine sum version, but with a plus in the middle.",
      example: "cos(60°−30°) = cos30° ≈ 0.866"
    },
    {
      subtopic: "Compound Angles",
      name: "Tangent of a sum",
      formula: "tan(A + B) = (tanA + tanB) ÷ (1 − tanA tanB)",
      symbols: [["A, B", "two angles"]],
      generalUse: "To find the tangent of a combined angle — used in slopes and rotations.",
      laymanUse: "Combines the two tangents on top, with a correction underneath.",
      example: "tan(45°+45°) = tan90° = ∞ (denominator 0)"
    },
    {
      subtopic: "Double Angle",
      name: "Sine of double angle",
      formula: "sin 2A = 2 sinA cosA",
      symbols: [["A", "the angle"]],
      generalUse: "To rewrite sin of twice an angle — used in waves, integration and simplification.",
      laymanUse: "Sine of double the angle is twice the sine times the cosine of the single angle.",
      example: "sin60° = 2·sin30°·cos30° = 2·½·(√3/2) = √3/2"
    },
    {
      subtopic: "Double Angle",
      name: "Cosine of double angle",
      formula: "cos 2A = cos²A − sin²A = 1 − 2sin²A = 2cos²A − 1",
      symbols: [["A", "the angle"]],
      generalUse: "Three useful forms for cos of a double angle — chosen to suit the problem.",
      laymanUse: "Different ways to write cosine of double an angle; pick whichever fits what you already know.",
      example: "cos60° = 1 − 2sin²30° = 1 − 2(¼) = ½"
    },
    {
      subtopic: "Double Angle",
      name: "Tangent of double angle",
      formula: "tan 2A = 2 tanA ÷ (1 − tan²A)",
      symbols: [["A", "the angle"]],
      generalUse: "To find the tangent of twice an angle in trig and calculus.",
      laymanUse: "A ready formula for tangent of double an angle from the single-angle tangent.",
      example: "A=30°, tan30°=1/√3 → tan60° = (2/√3)/(1−1/3) = √3"
    },
    {
      subtopic: "Laws (Sine & Cosine)",
      name: "Sine rule",
      formula: "a/sinA = b/sinB = c/sinC",
      symbols: [
        ["a, b, c", "the three sides"],
        ["A, B, C", "the angles opposite them"]
      ],
      generalUse: "To find unknown sides or angles in ANY triangle (not just right-angled) — surveying, navigation.",
      laymanUse: "In any triangle, each side divided by the sine of its opposite angle gives the same value.",
      example: "If a=7, A=30°, B=45° → b = 7·sin45°/sin30°"
    },
    {
      subtopic: "Laws (Sine & Cosine)",
      name: "Cosine rule",
      formula: "c² = a² + b² − 2ab·cosC",
      symbols: [
        ["a, b, c", "the three sides"],
        ["C", "angle opposite side c"]
      ],
      generalUse: "To find the third side of any triangle from two sides and the angle between them, or to find an angle from three sides.",
      laymanUse: "A stronger Pythagoras that works for any triangle, adjusting for the angle between the sides.",
      example: "a=3, b=4, C=90° → c² = 9+16−0 = 25, c=5"
    },
    {
      subtopic: "Radians",
      name: "Degrees to radians",
      formula: "Radians = Degrees × (π ÷ 180)",
      symbols: [["π", "pi ≈ 3.14159"], ["180", "degrees in π radians"]],
      generalUse: "To convert an angle from degrees to radians — needed in higher maths, calculus and physics.",
      laymanUse: "Multiply the degrees by π and divide by 180 to get the same angle in radians.",
      example: "90° = 90 × π/180 = π/2 radians"
    },
    {
      subtopic: "Heights & Distances",
      name: "Distance from angle of elevation",
      formula: "Distance = Height ÷ tan θ",
      symbols: [["θ", "angle of elevation"], ["Height", "height of the object"]],
      generalUse: "To find how far you are standing from a tower or tree from its height and the up-angle.",
      laymanUse: "Knowing the height and the angle you look up at, this gives how far away you are.",
      example: "Height=30 m, θ=45° → Distance = 30 ÷ 1 = 30 m"
    },
    {
      subtopic: "Standard Values",
      name: "Standard values (cosec, sec, cot)",
      formula: "cosec30°=2, sec60°=2, cot45°=1, cosec45°=√2, sec45°=√2",
      symbols: [["θ", "common angles"]],
      generalUse: "The reciprocal-ratio values for the standard angles, for quick calculation.",
      laymanUse: "Just the flips of the sine, cosine and tangent standard values.",
      example: "cosec30° = 1/sin30° = 1/0.5 = 2"
    },
    {
      subtopic: "Quadrants & Signs",
      name: "Sign of ratios (ASTC rule)",
      formula: "Q1: All +,  Q2: Sin +,  Q3: Tan +,  Q4: Cos +",
      symbols: [["Q1–Q4", "the four quadrants (0–90, 90–180, 180–270, 270–360)"]],
      generalUse: "To decide whether a trig ratio is positive or negative for angles beyond 90°.",
      laymanUse: "'All-Silver-Tea-Cups': tells which ratios stay positive in each quarter turn.",
      example: "cos300° is positive (Q4), sin200° is negative (Q3)"
    },
    {
      subtopic: "Allied Angles",
      name: "Negative angle (even–odd) identities",
      formula: "sin(−θ)=−sinθ,  cos(−θ)=cosθ,  tan(−θ)=−tanθ",
      symbols: [["θ", "the angle"]],
      generalUse: "To simplify trig of negative angles — cosine is even, sine and tangent are odd.",
      laymanUse: "A minus angle keeps cosine the same but flips the sign of sine and tangent.",
      example: "sin(−30°) = −sin30° = −0.5"
    },
    {
      subtopic: "Allied Angles",
      name: "Cofunction identities (90° − θ)",
      formula: "sin(90°−θ)=cosθ,  cos(90°−θ)=sinθ,  tan(90°−θ)=cotθ",
      symbols: [["θ", "the angle"]],
      generalUse: "To convert between sine/cosine and tangent/cotangent of complementary angles.",
      laymanUse: "The sine of an angle equals the cosine of its complement, and vice versa.",
      example: "sin60° = cos30°"
    },
    {
      subtopic: "Allied Angles",
      name: "Supplementary angle (180° − θ)",
      formula: "sin(180°−θ)=sinθ,  cos(180°−θ)=−cosθ,  tan(180°−θ)=−tanθ",
      symbols: [["θ", "the angle"]],
      generalUse: "To find trig ratios of second-quadrant angles from first-quadrant ones.",
      laymanUse: "For an angle and its supplement, sine stays the same but cosine and tangent flip sign.",
      example: "sin150° = sin30° = 0.5"
    },
    {
      subtopic: "Periodicity",
      name: "Periodic identities",
      formula: "sin(θ+360°)=sinθ,  cos(θ+360°)=cosθ,  tan(θ+180°)=tanθ",
      symbols: [["θ", "the angle"]],
      generalUse: "To reduce very large angles by removing whole turns before finding the ratio.",
      laymanUse: "Trig ratios repeat every full turn (360°); tangent repeats every half turn.",
      example: "cos400° = cos40°"
    },
    {
      subtopic: "Compound Angles",
      name: "Tangent of a difference",
      formula: "tan(A − B) = (tanA − tanB) ÷ (1 + tanA tanB)",
      symbols: [["A, B", "two angles"]],
      generalUse: "To find the tangent of a difference of angles — slopes, angle between lines.",
      laymanUse: "Like the tangent sum, but signs swap: minus on top, plus underneath.",
      example: "tan(45°−45°) = tan0° = 0"
    },
    {
      subtopic: "Double Angle",
      name: "sinθ and cosθ using tan(θ/2)",
      formula: "sinθ = 2t/(1+t²),  cosθ = (1−t²)/(1+t²),  t = tan(θ/2)",
      symbols: [["t", "tan of the half angle"]],
      generalUse: "To express sine and cosine through a single variable — used in integration substitutions.",
      laymanUse: "Everything can be written in terms of the tangent of half the angle.",
      example: "θ=90°, t=1 → sin = 2/2 = 1, cos = 0"
    },
    {
      subtopic: "Triple Angle",
      name: "Triple angle formulas",
      formula: "sin3A = 3sinA − 4sin³A,   cos3A = 4cos³A − 3cosA",
      symbols: [["A", "the angle"]],
      generalUse: "To expand sine and cosine of three times an angle — used in equations and proofs.",
      laymanUse: "Ready formulas for the sine and cosine of triple an angle.",
      example: "sin90° = 3sin30° − 4sin³30° = 1.5 − 0.5 = 1"
    },
    {
      subtopic: "Product to Sum",
      name: "Product-to-sum formulas",
      formula: "2sinA cosB = sin(A+B) + sin(A−B)",
      symbols: [["A, B", "two angles"]],
      generalUse: "To turn a product of ratios into a sum — used in integration and wave problems.",
      laymanUse: "Rewrites a multiplication of sine and cosine as an addition, which is easier to handle.",
      example: "2sin45°cos15° = sin60° + sin30°"
    },
    {
      subtopic: "Sum to Product",
      name: "Sum-to-product formulas",
      formula: "sinC + sinD = 2 sin((C+D)/2) cos((C−D)/2)",
      symbols: [["C, D", "two angles"]],
      generalUse: "To turn a sum of sines into a product — used in solving trig equations.",
      laymanUse: "Rewrites the sum of two sines as a neat product of a sine and a cosine.",
      example: "sin50° + sin10° = 2 sin30° cos20°"
    },
    {
      subtopic: "Laws (Sine & Cosine)",
      name: "Area of a triangle (two sides & angle)",
      formula: "Area = ½ × a × b × sinC",
      symbols: [["a, b", "two sides"], ["C", "the angle between them"]],
      generalUse: "To find a triangle's area from two sides and the included angle — surveying, geometry.",
      laymanUse: "Half the product of two sides times the sine of the angle between them.",
      example: "a=6, b=8, C=30° → ½·6·8·0.5 = 12"
    },
    {
      subtopic: "Inverse Trigonometry",
      name: "Complementary inverse identities",
      formula: "sin⁻¹x + cos⁻¹x = 90°,   tan⁻¹x + cot⁻¹x = 90°",
      symbols: [["x", "the value (−1 ≤ x ≤ 1 for sin⁻¹, cos⁻¹)"]],
      generalUse: "Standard inverse-trig identities used in Class 12 calculus and equations.",
      laymanUse: "The inverse-sine and inverse-cosine of the same number always add up to 90°.",
      example: "sin⁻¹(0.5)=30°, cos⁻¹(0.5)=60° → 90°"
    },
    {
      subtopic: "Inverse Trigonometry",
      name: "Sum of two inverse tangents",
      formula: "tan⁻¹x + tan⁻¹y = tan⁻¹((x+y)/(1−xy)),  xy < 1",
      symbols: [["x, y", "the two values"]],
      generalUse: "To combine two inverse tangents into one — used in Class 12 problems.",
      laymanUse: "Adds two inverse-tangent angles into a single inverse tangent.",
      example: "tan⁻¹1 + tan⁻¹(1/2) combine via this rule"
    },
    {
      subtopic: "Radians",
      name: "Arc length in radians",
      formula: "s = r × θ",
      symbols: [["s", "arc length"], ["r", "radius"], ["θ", "angle in radians"]],
      generalUse: "To find the length of a circular arc when the angle is in radians — physics, engineering.",
      laymanUse: "Multiply the radius by the angle (in radians) to get the arc length.",
      example: "r=5, θ=2 rad → s = 10 units"
    },
    {
      subtopic: "Radians",
      name: "Radians to degrees",
      formula: "Degrees = Radians × (180 ÷ π)",
      symbols: [["π", "pi ≈ 3.14159"]],
      generalUse: "To convert an angle from radians back to degrees.",
      laymanUse: "Multiply radians by 180 and divide by π to get degrees.",
      example: "π/2 rad = 90°"
    },
    {
      subtopic: "Maxima & Minima",
      name: "Range of a·sinθ + b·cosθ",
      formula: "max = √(a²+b²),   min = −√(a²+b²)",
      symbols: [["a, b", "the coefficients"]],
      generalUse: "To find the largest and smallest values of a sine-plus-cosine expression — used in optimisation and waves.",
      laymanUse: "A sine and cosine added together swings between plus and minus the root of a²+b².",
      example: "3sinθ+4cosθ ranges from −5 to 5"
    },
    {
      subtopic: "Product to Sum",
      name: "2 cosA cosB and 2 sinA sinB",
      formula: "2cosA cosB = cos(A−B)+cos(A+B),  2sinA sinB = cos(A−B)−cos(A+B)",
      symbols: [["A, B", "two angles"]],
      generalUse: "To turn products of two cosines or two sines into sums — used in integration.",
      laymanUse: "Rewrites a product of two cosines (or two sines) as a sum of cosines.",
      example: "2cos45°cos15° = cos30° + cos60°"
    },
    {
      subtopic: "Product to Sum",
      name: "2 cosA sinB",
      formula: "2cosA sinB = sin(A+B) − sin(A−B)",
      symbols: [["A, B", "two angles"]],
      generalUse: "The fourth product-to-sum identity, completing the set.",
      laymanUse: "Turns cosine times sine into a difference of sines.",
      example: "2cos60°sin30° = sin90° − sin30°"
    },
    {
      subtopic: "Sum to Product",
      name: "Difference of sines",
      formula: "sinC − sinD = 2 cos((C+D)/2) sin((C−D)/2)",
      symbols: [["C, D", "two angles"]],
      generalUse: "To turn a difference of sines into a product — solving trig equations.",
      laymanUse: "Rewrites one sine minus another as a neat product.",
      example: "sin50° − sin10° = 2 cos30° sin20°"
    },
    {
      subtopic: "Sum to Product",
      name: "Sum and difference of cosines",
      formula: "cosC+cosD = 2cos((C+D)/2)cos((C−D)/2);  cosC−cosD = −2sin(..)sin(..)",
      symbols: [["C, D", "two angles"]],
      generalUse: "To turn a sum or difference of cosines into a product.",
      laymanUse: "Rewrites two cosines added or subtracted as a product form.",
      example: "cos40° + cos20° = 2 cos30° cos10°"
    },
    {
      subtopic: "Triple Angle",
      name: "Tangent of triple angle",
      formula: "tan3A = (3tanA − tan³A) ÷ (1 − 3tan²A)",
      symbols: [["A", "the angle"]],
      generalUse: "To expand the tangent of three times an angle.",
      laymanUse: "A ready formula for tangent of triple an angle from the single-angle tangent.",
      example: "Used to solve tan-based triple-angle equations."
    },
    {
      subtopic: "Half Angle",
      name: "Half-angle in terms of cos A",
      formula: "sin²(A/2) = (1−cosA)/2,   cos²(A/2) = (1+cosA)/2",
      symbols: [["A", "the angle"]],
      generalUse: "To find sine or cosine of half an angle from the cosine of the full angle.",
      laymanUse: "Gives the half-angle's sine and cosine using the full angle's cosine.",
      example: "cos²(30°) = (1+cos60°)/2 = 3/4"
    },
    {
      subtopic: "Half Angle",
      name: "tan of half angle",
      formula: "tan(A/2) = (1 − cosA) ÷ sinA = sinA ÷ (1 + cosA)",
      symbols: [["A", "the angle"]],
      generalUse: "To find the tangent of half an angle — used in integration substitutions.",
      laymanUse: "Two equivalent ways to get the tangent of half the angle.",
      example: "tan45° = (1−cos90°)/sin90° = 1"
    },
    {
      subtopic: "Extra Standard Values",
      name: "sin and cos of 15° and 75°",
      formula: "sin15° = (√3−1)/(2√2),   sin75° = (√3+1)/(2√2)",
      symbols: [["15°, 75°", "obtained from 45°−30° and 45°+30°"]],
      generalUse: "Exact values for non-standard angles, found using compound-angle formulas.",
      laymanUse: "The exact values for 15° and 75°, worked out from the 45° and 30° values.",
      example: "sin15° ≈ 0.259"
    },
    {
      subtopic: "Allied Angles",
      name: "Angles of the form (90° + θ)",
      formula: "sin(90°+θ)=cosθ,  cos(90°+θ)=−sinθ,  tan(90°+θ)=−cotθ",
      symbols: [["θ", "the angle"]],
      generalUse: "To reduce second-quadrant angles to first-quadrant ratios.",
      laymanUse: "Adding 90° swaps sine and cosine and adjusts the sign by quadrant.",
      example: "sin120° = sin(90°+30°) = cos30° ≈ 0.866"
    },
    {
      subtopic: "Allied Angles",
      name: "Reflex angles (360° − θ)",
      formula: "sin(360°−θ)=−sinθ,  cos(360°−θ)=cosθ,  tan(360°−θ)=−tanθ",
      symbols: [["θ", "the angle"]],
      generalUse: "To find ratios of fourth-quadrant angles from first-quadrant ones.",
      laymanUse: "An angle just short of a full turn keeps cosine but flips sine and tangent.",
      example: "cos330° = cos30° ≈ 0.866"
    },
    {
      subtopic: "Laws (Sine & Cosine)",
      name: "Projection formula",
      formula: "a = b·cosC + c·cosB",
      symbols: [["a, b, c", "sides"], ["B, C", "angles opposite b and c"]],
      generalUse: "Expresses one side of a triangle as the sum of projections of the other two — used in triangle proofs.",
      laymanUse: "One side equals the shadows the other two sides cast along it.",
      example: "Holds for any triangle's sides and angles."
    },
    {
      subtopic: "Laws (Sine & Cosine)",
      name: "Cosine rule for an angle",
      formula: "cosC = (a² + b² − c²) ÷ 2ab",
      symbols: [["a, b, c", "the three sides"], ["C", "angle opposite side c"]],
      generalUse: "To find an angle of a triangle when all three sides are known.",
      laymanUse: "Rearranges the cosine rule to give an angle from the three side lengths.",
      example: "a=b=c → cosC = 1/2, so C = 60° (equilateral)"
    },
    {
      subtopic: "General Solutions",
      name: "General solution of sinθ = sinα",
      formula: "θ = nπ + (−1)ⁿ α,   n = 0, ±1, ±2, …",
      symbols: [["α", "a known solution"], ["n", "any integer"]],
      generalUse: "To write all angles that share the same sine — solving trig equations (Class 11).",
      laymanUse: "Gives every angle, not just one, that has the same sine value.",
      example: "sinθ = ½ → θ = nπ + (−1)ⁿ·30°"
    },
    {
      subtopic: "General Solutions",
      name: "General solution of cosθ = cosα",
      formula: "θ = 2nπ ± α,   n = 0, ±1, ±2, …",
      symbols: [["α", "a known solution"], ["n", "any integer"]],
      generalUse: "To list all angles with the same cosine.",
      laymanUse: "Every angle with the same cosine as α, going round and round.",
      example: "cosθ = ½ → θ = 2nπ ± 60°"
    },
    {
      subtopic: "General Solutions",
      name: "General solution of tanθ = tanα",
      formula: "θ = nπ + α,   n = 0, ±1, ±2, …",
      symbols: [["α", "a known solution"], ["n", "any integer"]],
      generalUse: "To list all angles with the same tangent.",
      laymanUse: "Tangent repeats every half turn, so add any multiple of 180° to a solution.",
      example: "tanθ = 1 → θ = nπ + 45°"
    },
    {
      subtopic: "Inverse Trigonometry",
      name: "Principal value ranges",
      formula: "sin⁻¹: [−90°,90°],  cos⁻¹: [0°,180°],  tan⁻¹: (−90°,90°)",
      symbols: [["—", "the allowed output angles"]],
      generalUse: "The standard output ranges that make inverse trig single-valued (Class 12).",
      laymanUse: "Each inverse trig gives an angle only within a fixed range, so the answer is unique.",
      example: "sin⁻¹(0.5) = 30°, not 150°"
    },
    {
      subtopic: "Inverse Trigonometry",
      name: "Double of inverse tangent",
      formula: "2 tan⁻¹x = tan⁻¹(2x/(1−x²)),  |x| < 1",
      symbols: [["x", "the value"]],
      generalUse: "To simplify twice an inverse tangent into a single inverse tangent.",
      laymanUse: "Combines two equal inverse-tangent angles into one.",
      example: "2tan⁻¹(1/3) = tan⁻¹(3/4)"
    },
    {
      subtopic: "Ratios",
      name: "Complementary reciprocal ratios",
      formula: "sec(90°−θ)=cosecθ,   cosec(90°−θ)=secθ",
      symbols: [["θ", "the angle"]],
      generalUse: "Cofunction identities for the reciprocal ratios.",
      laymanUse: "Secant of an angle equals cosecant of its complement, and vice versa.",
      example: "sec60° = cosec30° = 2"
    },
    {
      subtopic: "Identities",
      name: "cos2A in terms of tanA",
      formula: "cos2A = (1 − tan²A) ÷ (1 + tan²A)",
      symbols: [["A", "the angle"]],
      generalUse: "A tangent form of the double-angle cosine — used in integration substitution.",
      laymanUse: "Gives cosine of double the angle using only the tangent of the single angle.",
      example: "A=45°, tanA=1 → cos90° = 0"
    },
    {
      subtopic: "Identities",
      name: "sin2A in terms of tanA",
      formula: "sin2A = 2tanA ÷ (1 + tan²A)",
      symbols: [["A", "the angle"]],
      generalUse: "A tangent form of the double-angle sine — used in integration substitution.",
      laymanUse: "Gives sine of double the angle using only the tangent of the single angle.",
      example: "A=45°, tanA=1 → sin90° = 1"
    },
    {
      subtopic: "Ratios",
      name: "Value ranges of sin and cos",
      formula: "−1 ≤ sinθ ≤ 1,   −1 ≤ cosθ ≤ 1",
      symbols: [["θ", "any angle"]],
      generalUse: "To check that a sine or cosine answer is valid — they never leave [−1, 1].",
      laymanUse: "Sine and cosine always stay between −1 and 1, whatever the angle.",
      example: "sinθ = 2 has no solution"
    },
    {
      subtopic: "Standard Values",
      name: "Quadrantal angle values",
      formula: "sin0°=0, sin90°=1, sin180°=0, sin270°=−1",
      symbols: [["0°,90°,180°,270°", "the quadrant boundaries"]],
      generalUse: "The sine values at the four main compass directions of the circle.",
      laymanUse: "Sine's values at the top, bottom and sides of the circle.",
      example: "sin270° = −1 (bottom of the circle)"
    },
    {
      subtopic: "Heights & Distances",
      name: "Angle of depression",
      formula: "Angle of depression = Angle of elevation (alternate angles)",
      symbols: [["—", "measured downward from the horizontal"]],
      generalUse: "To solve problems where you look DOWN at an object from a height.",
      laymanUse: "The down-angle from the top equals the up-angle from the bottom, so the same maths applies.",
      example: "From a cliff, the depression to a boat equals the boat's elevation to the cliff top."
    },
    {
      subtopic: "Maxima & Minima",
      name: "Max and min of sinθ·cosθ",
      formula: "sinθ cosθ = ½ sin2θ,  so max = ½, min = −½",
      symbols: [["θ", "the angle"]],
      generalUse: "To find the largest value of a sine-times-cosine product — optimisation.",
      laymanUse: "Sine times cosine is just half of sin(2θ), so it never exceeds one-half.",
      example: "Greatest value of sinθcosθ is ½ (at 45°)"
    },
    {
      subtopic: "Extra Standard Values",
      name: "Exact value of sin18°",
      formula: "sin18° = (√5 − 1) ÷ 4",
      symbols: [["18°", "a standard exact value"]],
      generalUse: "An exact special value used in pentagon geometry and some proofs.",
      laymanUse: "The precise value of sine 18°, linked to the golden ratio.",
      example: "sin18° ≈ 0.309"
    },
    {
      subtopic: "General Solutions",
      name: "General solution of sinθ = 0, cosθ = 0",
      formula: "sinθ=0 → θ=nπ;   cosθ=0 → θ=(2n+1)π/2",
      symbols: [["n", "any integer"]],
      generalUse: "The base cases for solving trig equations equal to zero.",
      laymanUse: "Sine is zero at whole multiples of 180°; cosine is zero at odd multiples of 90°.",
      example: "sinθ=0 → θ = 0°, 180°, 360°, …"
    },
    {
      subtopic: "Identities",
      name: "Complementary product identity",
      formula: "tanθ × cotθ = 1,   sinθ × cosecθ = 1,   cosθ × secθ = 1",
      symbols: [["θ", "any angle"]],
      generalUse: "The reciprocal pairs multiply to 1 — used to simplify expressions.",
      laymanUse: "Each ratio times its flip equals 1.",
      example: "tan30° × cot30° = 1"
    }
  ]
});
