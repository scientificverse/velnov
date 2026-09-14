/* ============================================================
   MATH FORMULAS - TOPIC: GEOMETRY & COORDINATE GEOMETRY
   Angles, triangles, Pythagoras, circle, coordinate geometry.
   ============================================================ */

window.FORMULA_DATA = window.FORMULA_DATA || [];

FORMULA_DATA.push({
  topic: "Geometry & Coordinate Geometry",
  icon: "📏",
  color: "#ea580c",
  formulas: [
    {
      cls: "Class 7",
      subtopic: "Triangle",
      name: "Angle sum of a triangle",
      formula: "∠A + ∠B + ∠C = 180°",
      symbols: [["∠A, ∠B, ∠C", "the three interior angles"]],
      generalUse: "To find a missing angle of a triangle when the other two are known — used throughout geometry.",
      laymanUse: "The three corners of any triangle always add up to 180 degrees.",
      example: "If two angles are 60° and 70°, the third = 180−130 = 50°"
    },
    {
      cls: "Class 8",
      subtopic: "Polygon",
      name: "Sum of interior angles of a polygon",
      formula: "Sum = (n − 2) × 180°",
      symbols: [["n", "number of sides"]],
      generalUse: "To find the total of all inside angles of any polygon — tiling, design, construction.",
      laymanUse: "Split the shape into triangles: a shape with n sides makes (n−2) triangles, each 180°.",
      example: "Pentagon (n=5): (5−2)×180 = 540°"
    },
    {
      cls: "Class 9",
      subtopic: "Pythagoras",
      name: "Pythagoras theorem",
      formula: "a² + b² = c²",
      symbols: [
        ["c", "hypotenuse (longest side, opposite right angle)"],
        ["a, b", "the two shorter sides"]
      ],
      generalUse: "In a right-angled triangle, to find one side from the other two — construction, navigation, distances.",
      laymanUse: "In an 'L'-shaped corner, the slanted side squared equals the two straight sides squared and added.",
      example: "a=3, b=4 → c = √(9+16) = 5"
    },
    {
      cls: "Class 9",
      subtopic: "Circle",
      name: "Angle in a semicircle",
      formula: "∠ in semicircle = 90°",
      symbols: [["∠", "angle at the circle from a diameter"]],
      generalUse: "A circle theorem used to prove right angles and solve geometry problems.",
      laymanUse: "Any angle drawn from the ends of a diameter to a point on the circle is a perfect right angle.",
      example: "A triangle drawn on a diameter always has a 90° corner."
    },
    {
      cls: "Class 10",
      subtopic: "Coordinate Geometry",
      name: "Distance between two points",
      formula: "d = √((x₂−x₁)² + (y₂−y₁)²)",
      symbols: [
        ["(x₁, y₁)", "first point"],
        ["(x₂, y₂)", "second point"]
      ],
      generalUse: "To find the straight-line distance between two points on a graph — maps, navigation, physics.",
      laymanUse: "It's Pythagoras on a graph: the gap sideways and the gap up, squared, added and rooted.",
      example: "(0,0) to (3,4): d = √(9+16) = 5"
    },
    {
      cls: "Class 10",
      subtopic: "Coordinate Geometry",
      name: "Midpoint of a line segment",
      formula: "M = ((x₁+x₂)/2, (y₁+y₂)/2)",
      symbols: [["(x₁,y₁), (x₂,y₂)", "the two end points"]],
      generalUse: "To find the exact centre point between two points — used in geometry and graphics.",
      laymanUse: "Average the two x-values and the two y-values to land exactly in the middle.",
      example: "Midpoint of (2,4) and (6,8) = (4,6)"
    },
    {
      cls: "Class 10",
      subtopic: "Coordinate Geometry",
      name: "Section formula",
      formula: "P = ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))",
      symbols: [
        ["m : n", "the dividing ratio"],
        ["(x₁,y₁), (x₂,y₂)", "the two points"]
      ],
      generalUse: "To find a point that divides a line segment in a given ratio — used in geometry and computer graphics.",
      laymanUse: "It finds a point that splits the line between two points in a chosen ratio, not just the middle.",
      example: "(2,3),(8,9) in 1:2 → P = (4,5)"
    },
    {
      cls: "Class 10",
      subtopic: "Coordinate Geometry",
      name: "Slope (gradient) of a line",
      formula: "m = (y₂ − y₁) ÷ (x₂ − x₁)",
      symbols: [["(x₁,y₁), (x₂,y₂)", "two points on the line"], ["m", "the slope"]],
      generalUse: "To measure how steep a line is — graphs, ramps, rates of change in science and economics.",
      laymanUse: "It's the rise divided by the run: how much the line goes up for every step across.",
      example: "(1,2) to (3,6): m = (6−2)/(3−1) = 2"
    },
    {
      cls: "Class 11",
      subtopic: "Coordinate Geometry",
      name: "Area of a triangle (coordinates)",
      formula: "A = ½ |x₁(y₂−y₃) + x₂(y₃−y₁) + x₃(y₁−y₂)|",
      symbols: [["(x₁,y₁),(x₂,y₂),(x₃,y₃)", "the three vertices"]],
      generalUse: "To find the area of a triangle from the coordinates of its corners — surveying, graphics.",
      laymanUse: "Plug the three corner points into this pattern to get the area, no height needed.",
      example: "(0,0),(4,0),(0,3): A = ½|0+12+0| = 6"
    },
    {
      cls: "Class 11",
      subtopic: "Straight Line",
      name: "Slope-intercept form of a line",
      formula: "y = mx + c",
      symbols: [
        ["m", "slope (steepness)"],
        ["c", "y-intercept (where it crosses the y-axis)"]
      ],
      generalUse: "The standard equation of a straight line — graphing, linear relationships, trend lines.",
      laymanUse: "'m' tells how steep the line is and 'c' tells where it starts on the up-axis.",
      example: "y = 2x + 1 has slope 2 and crosses y-axis at 1"
    },
    {
      subtopic: "Angles",
      name: "Complementary and supplementary angles",
      formula: "Complementary: A + B = 90°   ·   Supplementary: A + B = 180°",
      symbols: [["A, B", "the two angles"]],
      generalUse: "To find a missing angle that pairs with another to make a right angle or a straight line.",
      laymanUse: "Two angles that add to 90° are complementary; two that add to 180° are supplementary.",
      example: "Complement of 30° = 60°; supplement of 30° = 150°"
    },
    {
      subtopic: "Triangle",
      name: "Exterior angle of a triangle",
      formula: "Exterior angle = sum of the two opposite interior angles",
      symbols: [["—", "the outside angle at a corner"]],
      generalUse: "To find an exterior angle of a triangle without knowing the third interior angle.",
      laymanUse: "The angle formed outside a corner equals the two inside corners far from it, added together.",
      example: "Interior 50° and 60° → exterior = 110°"
    },
    {
      subtopic: "Circle",
      name: "Angle at centre vs at circumference",
      formula: "Angle at centre = 2 × angle at the circumference",
      symbols: [["—", "angles standing on the same arc"]],
      generalUse: "A circle theorem used to find unknown angles in circle geometry.",
      laymanUse: "An angle made at the centre is always double the same angle made at the edge, on the same arc.",
      example: "Angle at edge 40° → angle at centre 80°"
    },
    {
      subtopic: "Coordinate Geometry",
      name: "Centroid of a triangle",
      formula: "G = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3)",
      symbols: [["(x₁,y₁),(x₂,y₂),(x₃,y₃)", "the three vertices"]],
      generalUse: "To find the balancing point (centroid) of a triangle from its corner coordinates.",
      laymanUse: "Average the three corner points to find the triangle's balance point.",
      example: "(0,0),(6,0),(0,6) → G = (2,2)"
    },
    {
      subtopic: "Straight Line",
      name: "Line through two points (slope form)",
      formula: "y − y₁ = m(x − x₁)",
      symbols: [["m", "slope"], ["(x₁,y₁)", "a known point on the line"]],
      generalUse: "To write the equation of a line when a point on it and its slope are known.",
      laymanUse: "Start from a known point and use the slope to describe every other point on the line.",
      example: "Point (1,2), slope 3 → y − 2 = 3(x − 1)"
    },
    {
      subtopic: "Angles",
      name: "Angles on a straight line",
      formula: "Angles on a line add to 180°",
      symbols: [["—", "adjacent angles on a straight line"]],
      generalUse: "To find a missing angle that sits on a straight line with another.",
      laymanUse: "A straight line makes a half turn, so angles along it add to 180°.",
      example: "If one angle is 120°, the other is 60°"
    },
    {
      subtopic: "Angles",
      name: "Angles at a point",
      formula: "Angles around a point add to 360°",
      symbols: [["—", "angles meeting at one point"]],
      generalUse: "To find a missing angle among several meeting at a point.",
      laymanUse: "A full turn around a point is 360°, so all the angles there add to 360°.",
      example: "Three angles 100°+150°+? = 360° → ? = 110°"
    },
    {
      subtopic: "Angles",
      name: "Vertically opposite angles",
      formula: "Vertically opposite angles are equal",
      symbols: [["—", "angles opposite each other where two lines cross"]],
      generalUse: "To find equal angles formed when two lines cross.",
      laymanUse: "When two lines cross, the angles directly across from each other are equal.",
      example: "One angle 70° → its opposite is also 70°"
    },
    {
      subtopic: "Parallel Lines",
      name: "Angles with parallel lines",
      formula: "Corresponding = equal, Alternate = equal, Co-interior add to 180°",
      symbols: [["—", "angles made by a line crossing two parallel lines"]],
      generalUse: "To find angles when a transversal cuts two parallel lines.",
      laymanUse: "Parallel lines make matching angles equal and same-side inside angles add to 180°.",
      example: "Alternate angles are always equal"
    },
    {
      subtopic: "Triangle",
      name: "Congruence rules",
      formula: "SSS, SAS, ASA, AAS, RHS",
      symbols: [["S", "side"], ["A", "angle"], ["RHS", "right angle-hypotenuse-side"]],
      generalUse: "To prove two triangles are exactly equal in shape and size.",
      laymanUse: "If certain matching sides and angles are equal, the triangles are identical.",
      example: "Two sides and the angle between them equal → SAS"
    },
    {
      subtopic: "Triangle",
      name: "Similarity and area ratio",
      formula: "Ratio of areas = (Ratio of sides)²",
      symbols: [["—", "for two similar triangles"]],
      generalUse: "To compare areas of similar figures from their side ratio — maps, scale models.",
      laymanUse: "If a shape is scaled by 2, its area grows by 2² = 4 times.",
      example: "Sides in 2:3 → areas in 4:9"
    },
    {
      subtopic: "Triangle",
      name: "Basic proportionality (Thales)",
      formula: "A line parallel to one side divides the other two sides proportionally",
      symbols: [["—", "line parallel to a side of a triangle"]],
      generalUse: "To find unknown lengths when a line is drawn parallel to a triangle's side.",
      laymanUse: "A line parallel to one side cuts the other two sides in the same ratio.",
      example: "AD/DB = AE/EC"
    },
    {
      subtopic: "Circle",
      name: "Tangent and radius",
      formula: "A tangent is perpendicular (90°) to the radius at the point of contact",
      symbols: [["—", "tangent touching the circle"]],
      generalUse: "A circle theorem used to find angles and lengths involving tangents.",
      laymanUse: "Where a line just touches a circle, it meets the radius at a right angle.",
      example: "Radius to the touch point makes 90° with the tangent"
    },
    {
      subtopic: "Circle",
      name: "Tangents from an external point",
      formula: "Two tangents from an outside point are equal in length",
      symbols: [["—", "tangents from one external point"]],
      generalUse: "To find tangent lengths and prove equalities in circle geometry.",
      laymanUse: "From a point outside a circle, both touching lines are the same length.",
      example: "PA = PB for tangents from P"
    },
    {
      subtopic: "Circle",
      name: "Cyclic quadrilateral",
      formula: "Opposite angles add to 180°",
      symbols: [["—", "a four-sided figure inscribed in a circle"]],
      generalUse: "To find angles of a quadrilateral whose corners lie on a circle.",
      laymanUse: "In a four-sided shape drawn inside a circle, opposite corners add to 180°.",
      example: "If one angle is 110°, the opposite is 70°"
    },
    {
      subtopic: "Coordinate Geometry",
      name: "Collinearity of three points",
      formula: "Points are collinear if the triangle area = 0",
      symbols: [["—", "three points on a graph"]],
      generalUse: "To check whether three points lie on the same straight line.",
      laymanUse: "If the 'triangle' they form has zero area, the three points are in a line.",
      example: "(1,1),(2,2),(3,3) give area 0 → collinear"
    },
    {
      subtopic: "Straight Line",
      name: "Angle between two lines",
      formula: "tan θ = |(m₁ − m₂) ÷ (1 + m₁m₂)|",
      symbols: [["m₁, m₂", "the slopes of the two lines"]],
      generalUse: "To find the angle at which two lines cross.",
      laymanUse: "Uses the two slopes to find the crossing angle.",
      example: "m₁=1, m₂=0 → tanθ = 1, so θ = 45°"
    },
    {
      subtopic: "Straight Line",
      name: "Perpendicular and parallel lines",
      formula: "Parallel: m₁ = m₂;   Perpendicular: m₁ × m₂ = −1",
      symbols: [["m₁, m₂", "the slopes"]],
      generalUse: "To test if two lines are parallel or at right angles from their slopes.",
      laymanUse: "Equal slopes mean parallel; slopes multiplying to −1 mean a right angle.",
      example: "Slopes 2 and −½ → perpendicular"
    },
    {
      subtopic: "Straight Line",
      name: "Distance of a point from a line",
      formula: "d = |ax₁ + by₁ + c| ÷ √(a² + b²)",
      symbols: [
        ["ax+by+c=0", "the line"],
        ["(x₁, y₁)", "the point"]
      ],
      generalUse: "To find the shortest (perpendicular) distance from a point to a line.",
      laymanUse: "Gives the straight-line gap between a point and a line.",
      example: "Point (0,0) to 3x+4y−10=0 → 10/5 = 2"
    },
    {
      subtopic: "Straight Line",
      name: "Intercept form of a line",
      formula: "x/a + y/b = 1",
      symbols: [["a", "x-intercept"], ["b", "y-intercept"]],
      generalUse: "To write a line's equation from where it cuts the two axes.",
      laymanUse: "Uses the two points where the line crosses the axes.",
      example: "Cuts axes at 2 and 3 → x/2 + y/3 = 1"
    },
    {
      subtopic: "Polygon",
      name: "Number of diagonals of a polygon",
      formula: "Diagonals = n(n − 3) ÷ 2",
      symbols: [["n", "number of sides"]],
      generalUse: "To count the diagonals of any polygon.",
      laymanUse: "A quick count of how many corner-to-corner lines a shape has.",
      example: "Hexagon (n=6) → 6×3/2 = 9 diagonals"
    }
  ]
});
