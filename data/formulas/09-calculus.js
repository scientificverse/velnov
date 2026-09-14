/* ============================================================
   MATH FORMULAS - TOPIC: CALCULUS (Class 11-12)
   Limits, derivatives, integrals.
   ============================================================ */

window.FORMULA_DATA = window.FORMULA_DATA || [];

FORMULA_DATA.push({
  topic: "Calculus",
  icon: "∫",
  color: "#9333ea",
  formulas: [
    {
      cls: "Class 11",
      subtopic: "Derivatives",
      name: "Power rule (derivative)",
      formula: "d/dx (xⁿ) = n·xⁿ⁻¹",
      symbols: [["x", "the variable"], ["n", "the power"]],
      generalUse: "To differentiate power functions — the most-used rule for finding rates of change and slopes.",
      laymanUse: "To find how fast xⁿ changes, bring the power down in front and lower the power by one.",
      example: "d/dx(x³) = 3x²"
    },
    {
      cls: "Class 12",
      subtopic: "Derivatives",
      name: "Derivative of a constant",
      formula: "d/dx (c) = 0",
      symbols: [["c", "any constant"]],
      generalUse: "A basic differentiation rule — constants don't change, so their rate of change is zero.",
      laymanUse: "A number that never changes has zero rate of change.",
      example: "d/dx(7) = 0"
    },
    {
      cls: "Class 12",
      subtopic: "Derivatives",
      name: "Derivative of sin and cos",
      formula: "d/dx(sin x) = cos x,   d/dx(cos x) = −sin x",
      symbols: [["x", "the angle in radians"]],
      generalUse: "Standard derivatives used in physics (waves, oscillations) and engineering.",
      laymanUse: "The rate of change of sine is cosine, and of cosine is negative sine.",
      example: "slope of sin x at x=0 is cos 0 = 1"
    },
    {
      cls: "Class 12",
      subtopic: "Derivatives",
      name: "Product rule",
      formula: "d/dx(u·v) = u'v + uv'",
      symbols: [
        ["u, v", "two functions of x"],
        ["u', v'", "their derivatives"]
      ],
      generalUse: "To differentiate the product of two functions — used throughout calculus.",
      laymanUse: "For two things multiplied, differentiate the first (keep the second), plus keep the first (differentiate the second).",
      example: "d/dx(x·sin x) = sin x + x·cos x"
    },
    {
      cls: "Class 12",
      subtopic: "Derivatives",
      name: "Chain rule",
      formula: "d/dx f(g(x)) = f'(g(x)) · g'(x)",
      symbols: [
        ["f, g", "an outer and inner function"],
        ["f', g'", "their derivatives"]
      ],
      generalUse: "To differentiate a function inside another function — essential for composite functions.",
      laymanUse: "Differentiate the outside, keep the inside, then multiply by the derivative of the inside.",
      example: "d/dx (sin(x²)) = cos(x²) · 2x"
    },
    {
      cls: "Class 12",
      subtopic: "Integrals",
      name: "Power rule (integration)",
      formula: "∫ xⁿ dx = xⁿ⁺¹ ÷ (n+1) + C,  n ≠ −1",
      symbols: [
        ["x", "the variable"],
        ["n", "the power"],
        ["C", "constant of integration"]
      ],
      generalUse: "To integrate power functions — finding areas, totals from rates, and reversing differentiation.",
      laymanUse: "Integration undoes differentiation: raise the power by one and divide by the new power.",
      example: "∫ x² dx = x³/3 + C"
    },
    {
      cls: "Class 12",
      subtopic: "Integrals",
      name: "Integral of sin and cos",
      formula: "∫ sin x dx = −cos x + C,   ∫ cos x dx = sin x + C",
      symbols: [["x", "the variable"], ["C", "constant of integration"]],
      generalUse: "Standard integrals used in physics and engineering for areas and totals.",
      laymanUse: "The reverse of differentiating: integrating sine gives negative cosine, integrating cosine gives sine.",
      example: "∫ cos x dx = sin x + C"
    },
    {
      cls: "Class 12",
      subtopic: "Definite Integral",
      name: "Fundamental theorem (definite integral)",
      formula: "∫ₐᵇ f(x) dx = F(b) − F(a)",
      symbols: [
        ["F", "an antiderivative of f"],
        ["a, b", "the lower and upper limits"]
      ],
      generalUse: "To find the exact area under a curve between two points — physics, probability, economics.",
      laymanUse: "Find the antiderivative, then subtract its value at the start from its value at the end.",
      example: "∫₀¹ x² dx = 1³/3 − 0 = 1/3"
    },
    {
      cls: "Class 11",
      subtopic: "Limits",
      name: "Limit of sin x over x",
      formula: "lim (x→0) (sin x ÷ x) = 1",
      symbols: [["x", "angle in radians approaching 0"]],
      generalUse: "A fundamental limit used to derive the derivative of sine and in many proofs.",
      laymanUse: "As the angle gets tiny, sine of the angle and the angle itself become practically equal.",
      example: "For very small x, sin x ≈ x"
    },
    {
      subtopic: "Derivatives",
      name: "Derivative of eˣ and ln x",
      formula: "d/dx(eˣ) = eˣ,   d/dx(ln x) = 1/x",
      symbols: [["e", "Euler's number ≈ 2.718"], ["x", "the variable (x>0 for ln)"]],
      generalUse: "Standard derivatives of the exponential and natural-log functions — growth, decay, finance.",
      laymanUse: "eˣ is special — its rate of change equals itself; the log function's rate is one-over-x.",
      example: "slope of ln x at x=2 is 1/2"
    },
    {
      subtopic: "Derivatives",
      name: "Sum and constant-multiple rules",
      formula: "d/dx(u ± v) = u' ± v',   d/dx(k·u) = k·u'",
      symbols: [["u, v", "functions"], ["k", "a constant"]],
      generalUse: "To differentiate sums, differences and constant multiples term by term.",
      laymanUse: "Differentiate each piece separately; a constant multiplier just tags along.",
      example: "d/dx(3x² + 5x) = 6x + 5"
    },
    {
      subtopic: "Derivatives",
      name: "Quotient rule",
      formula: "d/dx(u/v) = (u'v − uv') ÷ v²",
      symbols: [["u, v", "two functions"], ["u', v'", "their derivatives"]],
      generalUse: "To differentiate one function divided by another.",
      laymanUse: "For a fraction of functions: bottom times derivative of top, minus top times derivative of bottom, all over bottom squared.",
      example: "d/dx(x/sin x) = (sin x − x cos x)/sin²x"
    },
    {
      subtopic: "Integrals",
      name: "Integral of 1/x and eˣ",
      formula: "∫ (1/x) dx = ln|x| + C,   ∫ eˣ dx = eˣ + C",
      symbols: [["x", "the variable"], ["C", "constant of integration"]],
      generalUse: "Standard integrals used constantly in calculus, physics and probability.",
      laymanUse: "The reverse of the log and exponential derivatives.",
      example: "∫ eˣ dx = eˣ + C"
    },
    {
      subtopic: "Application",
      name: "Slope of a curve at a point",
      formula: "Slope = dy/dx at that point",
      symbols: [["dy/dx", "the derivative of y with respect to x"]],
      generalUse: "To find the steepness of a curve at any point — tangents, maxima and minima, velocity.",
      laymanUse: "The derivative gives the exact tilt of the curve at whatever point you plug in.",
      example: "y = x², dy/dx = 2x → slope at x=3 is 6"
    },
    {
      subtopic: "Derivatives",
      name: "Derivative of tan, sec, cot, cosec",
      formula: "tan→sec²x, cot→−cosec²x, sec→secx tanx, cosec→−cosecx cotx",
      symbols: [["x", "the angle in radians"]],
      generalUse: "Standard derivatives of the other trig functions, used across calculus.",
      laymanUse: "The rate-of-change formulas for tangent, secant, cotangent and cosecant.",
      example: "d/dx(tan x) = sec²x"
    },
    {
      subtopic: "Derivatives",
      name: "Derivative of √x and aˣ",
      formula: "d/dx(√x) = 1/(2√x),   d/dx(aˣ) = aˣ ln a",
      symbols: [["a", "a positive base"], ["x", "the variable"]],
      generalUse: "Standard derivatives for roots and general exponentials.",
      laymanUse: "Handy derivatives for square root and any base raised to x.",
      example: "d/dx(2ˣ) = 2ˣ ln2"
    },
    {
      subtopic: "Derivatives",
      name: "Derivatives of inverse trig",
      formula: "sin⁻¹x → 1/√(1−x²),   tan⁻¹x → 1/(1+x²)",
      symbols: [["x", "the variable"]],
      generalUse: "Standard derivatives of inverse trig functions (Class 12).",
      laymanUse: "The rate-of-change formulas for inverse sine and inverse tangent.",
      example: "d/dx(tan⁻¹x) = 1/(1+x²)"
    },
    {
      subtopic: "Limits",
      name: "Standard limit (xⁿ − aⁿ)",
      formula: "lim (x→a) (xⁿ − aⁿ)/(x − a) = n·aⁿ⁻¹",
      symbols: [["n", "the power"], ["a", "the point"]],
      generalUse: "A fundamental limit used to derive the power rule of differentiation.",
      laymanUse: "This limit is exactly the derivative of xⁿ at x = a.",
      example: "n=2, a=3 → limit = 6"
    },
    {
      subtopic: "Limits",
      name: "Exponential and log limits",
      formula: "lim(x→0)(eˣ−1)/x = 1,   lim(x→0) log(1+x)/x = 1",
      symbols: [["x", "approaching 0"]],
      generalUse: "Standard limits used to differentiate exponential and log functions.",
      laymanUse: "For tiny x, eˣ−1 and log(1+x) both behave just like x.",
      example: "(e^0.001 − 1)/0.001 ≈ 1"
    },
    {
      subtopic: "Limits",
      name: "Limit giving e",
      formula: "lim (x→∞) (1 + 1/x)ˣ = e",
      symbols: [["e", "≈ 2.718"], ["x", "growing large"]],
      generalUse: "The famous limit that defines Euler's number e — compound interest, growth.",
      laymanUse: "Compounding a 100% return over more and more tiny steps approaches e.",
      example: "(1 + 1/1000)¹⁰⁰⁰ ≈ 2.717"
    },
    {
      subtopic: "Integrals",
      name: "Integral of aˣ",
      formula: "∫ aˣ dx = aˣ ÷ ln a + C",
      symbols: [["a", "a positive base ≠ 1"], ["C", "constant"]],
      generalUse: "To integrate a general exponential function.",
      laymanUse: "The reverse of differentiating aˣ.",
      example: "∫ 2ˣ dx = 2ˣ/ln2 + C"
    },
    {
      subtopic: "Integrals",
      name: "Integral of sec²x and cosec²x",
      formula: "∫ sec²x dx = tan x + C,   ∫ cosec²x dx = −cot x + C",
      symbols: [["x", "the variable"], ["C", "constant"]],
      generalUse: "Standard trig integrals — reverses of the tan and cot derivatives.",
      laymanUse: "Integrating sec² gives tan; integrating cosec² gives −cot.",
      example: "∫ sec²x dx = tan x + C"
    },
    {
      subtopic: "Integrals",
      name: "Integrals giving inverse trig",
      formula: "∫ dx/√(1−x²) = sin⁻¹x + C,   ∫ dx/(1+x²) = tan⁻¹x + C",
      symbols: [["x", "the variable"], ["C", "constant"]],
      generalUse: "Standard integrals that produce inverse trig functions.",
      laymanUse: "These special fractions integrate to inverse sine and inverse tangent.",
      example: "∫ dx/(1+x²) = tan⁻¹x + C"
    },
    {
      subtopic: "Integrals",
      name: "Integral of tan x",
      formula: "∫ tan x dx = ln|sec x| + C",
      symbols: [["x", "the variable"], ["C", "constant"]],
      generalUse: "A standard integral of the tangent function.",
      laymanUse: "Integrating tangent gives the log of secant.",
      example: "used in many area and volume problems"
    },
    {
      subtopic: "Application",
      name: "Increasing and decreasing functions",
      formula: "f'(x) > 0 → increasing;   f'(x) < 0 → decreasing",
      symbols: [["f'(x)", "the derivative"]],
      generalUse: "To find where a function rises or falls — graphs, optimisation.",
      laymanUse: "A positive slope means going up; a negative slope means going down.",
      example: "f(x)=x²: f'=2x>0 for x>0 → increasing"
    },
    {
      subtopic: "Application",
      name: "Maxima and minima test",
      formula: "f'(x) = 0, then f''(x) < 0 → max, f''(x) > 0 → min",
      symbols: [["f'", "first derivative"], ["f''", "second derivative"]],
      generalUse: "To find the highest and lowest points of a function — optimisation problems.",
      laymanUse: "Flat slope marks a turning point; the second derivative says if it's a peak or a valley.",
      example: "f(x)=x²: f'=0 at x=0, f''=2>0 → minimum"
    },
    {
      subtopic: "Application",
      name: "Rate of change",
      formula: "Rate = dy/dt  (derivative with respect to time)",
      symbols: [["y", "the changing quantity"], ["t", "time"]],
      generalUse: "To find how fast something changes with time — speed, growth, filling rates.",
      laymanUse: "The derivative with respect to time tells how quickly a quantity is changing.",
      example: "If s = t², velocity = ds/dt = 2t"
    },
    {
      subtopic: "Definite Integral",
      name: "Reversing the limits",
      formula: "∫ₐᵇ f(x) dx = − ∫ᵇₐ f(x) dx",
      symbols: [["a, b", "the limits"]],
      generalUse: "A property of definite integrals used to simplify calculations.",
      laymanUse: "Swapping the start and end of an integral just flips its sign.",
      example: "∫₀¹ = −∫₁₀"
    },
    {
      subtopic: "Definite Integral",
      name: "Area between curve and x-axis",
      formula: "Area = ∫ₐᵇ y dx",
      symbols: [["y", "the curve's equation"], ["a, b", "the x-limits"]],
      generalUse: "To find the area enclosed by a curve and the x-axis between two points.",
      laymanUse: "Integrating the curve's height across an interval gives the area underneath.",
      example: "Area under y=x² from 0 to 2 = 8/3"
    }
  ]
});
