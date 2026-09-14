/* ============================================================
   MATH FORMULAS - TOPIC: MENSURATION (2D) - Perimeter & Area
   ============================================================ */

window.FORMULA_DATA = window.FORMULA_DATA || [];

FORMULA_DATA.push({
  topic: "Mensuration — Area & Perimeter (2D)",
  icon: "📐",
  color: "#7c3aed",
  formulas: [
    {
      cls: "Class 4",
      subtopic: "Square",
      name: "Perimeter of a square",
      formula: "P = 4 × a",
      symbols: [["a", "length of one side"]],
      generalUse: "To find the total length of the boundary of a square — fencing, framing, border tiles.",
      laymanUse: "All four sides of a square are equal, so add one side four times (or multiply by 4) to walk right around it.",
      example: "a = 5 cm → P = 4 × 5 = 20 cm"
    },
    {
      cls: "Class 4",
      subtopic: "Square",
      name: "Area of a square",
      formula: "A = a × a = a²",
      symbols: [["a", "length of one side"]],
      generalUse: "To find the flat space inside a square — floor tiles, plots of land, chess boards.",
      laymanUse: "Multiply a side by itself to find how much surface fits inside the square.",
      example: "a = 5 cm → A = 5 × 5 = 25 cm²"
    },
    {
      cls: "Class 4",
      subtopic: "Rectangle",
      name: "Perimeter of a rectangle",
      formula: "P = 2 × (l + b)",
      symbols: [["l", "length"], ["b", "breadth (width)"]],
      generalUse: "To find the boundary length of a rectangle — fencing a field, a picture frame, a room's skirting.",
      laymanUse: "Add one long side and one short side, then double it (because there are two of each).",
      example: "l = 6, b = 4 → P = 2 × (6 + 4) = 20 cm"
    },
    {
      cls: "Class 4",
      subtopic: "Rectangle",
      name: "Area of a rectangle",
      formula: "A = l × b",
      symbols: [["l", "length"], ["b", "breadth (width)"]],
      generalUse: "To find the flat space inside a rectangle — floors, walls, fields, sheets of paper.",
      laymanUse: "Multiply the length by the width to find how much surface is inside.",
      example: "l = 6, b = 4 → A = 6 × 4 = 24 cm²"
    },
    {
      cls: "Class 6",
      subtopic: "Triangle",
      name: "Area of a triangle",
      formula: "A = ½ × b × h",
      symbols: [["b", "base"], ["h", "height (perpendicular to base)"]],
      generalUse: "To find the space inside any triangle — roofs, sails, triangular plots, in geometry problems.",
      laymanUse: "A triangle is half of a rectangle. So multiply the base by the height and take half.",
      example: "b = 10, h = 6 → A = ½ × 10 × 6 = 30 cm²"
    },
    {
      cls: "Class 9",
      subtopic: "Triangle",
      name: "Heron's formula (area of a triangle)",
      formula: "A = √(s(s−a)(s−b)(s−c)),  s = (a+b+c)/2",
      symbols: [
        ["a, b, c", "the three sides"],
        ["s", "half the perimeter (semi-perimeter)"]
      ],
      generalUse: "To find the area of a triangle when all three sides are known but the height is not — surveying, land measurement.",
      laymanUse: "If you know only the three side lengths, this finds the area without needing the height.",
      example: "a=3, b=4, c=5, s=6 → A = √(6·3·2·1) = 6 cm²"
    },
    {
      cls: "Class 7",
      subtopic: "Parallelogram",
      name: "Area of a parallelogram",
      formula: "A = b × h",
      symbols: [["b", "base"], ["h", "height (perpendicular distance)"]],
      generalUse: "To find the space inside a slanted four-sided shape with parallel sides — used in geometry and design.",
      laymanUse: "Like a pushed-over rectangle: multiply the base by the straight-up height (not the slanting side).",
      example: "b = 8, h = 5 → A = 8 × 5 = 40 cm²"
    },
    {
      cls: "Class 7",
      subtopic: "Rhombus",
      name: "Area of a rhombus",
      formula: "A = ½ × d₁ × d₂",
      symbols: [["d₁, d₂", "the two diagonals"]],
      generalUse: "To find the area of a diamond-shaped figure using its diagonals — kites, tiles, patterns.",
      laymanUse: "Multiply the two crossing diagonals and take half.",
      example: "d₁ = 6, d₂ = 8 → A = ½ × 6 × 8 = 24 cm²"
    },
    {
      cls: "Class 8",
      subtopic: "Trapezium",
      name: "Area of a trapezium",
      formula: "A = ½ × (a + b) × h",
      symbols: [
        ["a, b", "the two parallel sides"],
        ["h", "distance between them (height)"]
      ],
      generalUse: "To find the area of a four-sided shape with one pair of parallel sides — plots of land, cross-sections of canals.",
      laymanUse: "Add the two parallel sides, take the average by halving, then multiply by the gap between them.",
      example: "a=10, b=6, h=4 → A = ½ × 16 × 4 = 32 cm²"
    },
    {
      cls: "Class 7",
      subtopic: "Circle",
      name: "Circumference of a circle",
      formula: "C = 2 × π × r",
      symbols: [
        ["C", "distance around the circle"],
        ["π", "pi ≈ 3.14 or 22/7"],
        ["r", "radius"]
      ],
      generalUse: "To find the boundary length of a circle — wheels, rings, circular tracks and pipes.",
      laymanUse: "It's the distance you'd walk all the way around a round shape. About 6.28 times the radius.",
      example: "r = 7 → C = 2 × 22/7 × 7 = 44 cm"
    },
    {
      cls: "Class 7",
      subtopic: "Circle",
      name: "Area of a circle",
      formula: "A = π × r²",
      symbols: [["π", "pi ≈ 3.14 or 22/7"], ["r", "radius (centre to edge)"]],
      generalUse: "To find the flat space inside a circle — round fields, plates, pizzas, circular halls.",
      laymanUse: "Measure from the middle to the edge, multiply that by itself, then by about 3.14.",
      example: "r = 7 → A = 22/7 × 7 × 7 = 154 cm²"
    },
    {
      cls: "Class 8",
      subtopic: "Circle",
      name: "Diameter of a circle",
      formula: "d = 2 × r",
      symbols: [["d", "diameter (edge to edge through centre)"], ["r", "radius"]],
      generalUse: "To relate the full width of a circle to its radius — used everywhere circles appear.",
      laymanUse: "The diameter is the full width across the middle, which is just twice the radius.",
      example: "r = 7 → d = 2 × 7 = 14 cm"
    },
    {
      subtopic: "Triangle",
      name: "Perimeter of a triangle",
      formula: "P = a + b + c",
      symbols: [["a, b, c", "the three sides"]],
      generalUse: "To find the boundary length of any triangle — fencing, framing, borders.",
      laymanUse: "Just add up the lengths of all three sides.",
      example: "sides 3, 4, 5 → P = 12 cm"
    },
    {
      subtopic: "Triangle",
      name: "Area of an equilateral triangle",
      formula: "A = (√3 ÷ 4) × a²",
      symbols: [["a", "the equal side length"]],
      generalUse: "To find the area of a triangle whose three sides are all equal — tiles, road signs, designs.",
      laymanUse: "For a triangle with all sides equal, square a side and multiply by about 0.433.",
      example: "a = 4 → A = (√3/4)×16 ≈ 6.93 cm²"
    },
    {
      subtopic: "Square",
      name: "Diagonal of a square",
      formula: "d = a × √2",
      symbols: [["a", "side of the square"], ["d", "diagonal"]],
      generalUse: "To find the corner-to-corner distance of a square — packing, screen sizes.",
      laymanUse: "The slanting line across a square is its side times about 1.414.",
      example: "a = 5 → d = 5√2 ≈ 7.07 cm"
    },
    {
      subtopic: "Rectangle",
      name: "Diagonal of a rectangle",
      formula: "d = √(l² + b²)",
      symbols: [["l", "length"], ["b", "breadth"], ["d", "diagonal"]],
      generalUse: "To find the corner-to-corner distance of a rectangle — TV/monitor sizes, framing.",
      laymanUse: "It's Pythagoras: the diagonal joins the length and width like the slanting side of a right triangle.",
      example: "l=3, b=4 → d = √(9+16) = 5"
    },
    {
      subtopic: "Circle",
      name: "Area of a semicircle",
      formula: "A = ½ × π × r²",
      symbols: [["r", "radius"]],
      generalUse: "To find the area of a half-circle — arches, half-round windows, protractors.",
      laymanUse: "Half a circle has half the area of the full circle.",
      example: "r = 7 → A = ½ × 22/7 × 49 = 77 cm²"
    },
    {
      subtopic: "Circle",
      name: "Length of an arc",
      formula: "Arc = (θ ÷ 360°) × 2πr",
      symbols: [["θ", "the central angle (degrees)"], ["r", "radius"]],
      generalUse: "To find the length of part of a circle's edge — curved roads, pie-chart edges, gears.",
      laymanUse: "An arc is a slice of the full circle's boundary — its share of 360° of the circumference.",
      example: "θ=90°, r=7 → (90/360)×44 = 11 cm"
    },
    {
      subtopic: "Circle",
      name: "Area of a sector",
      formula: "A = (θ ÷ 360°) × πr²",
      symbols: [["θ", "the central angle (degrees)"], ["r", "radius"]],
      generalUse: "To find the area of a 'pizza-slice' part of a circle — pie charts, fan-shaped fields.",
      laymanUse: "A sector is a slice of the circle — its share of 360° of the whole area.",
      example: "θ=90°, r=7 → (90/360)×154 = 38.5 cm²"
    },
    {
      subtopic: "Circle",
      name: "Perimeter of a semicircle",
      formula: "P = πr + 2r = r(π + 2)",
      symbols: [["r", "radius"]],
      generalUse: "To find the boundary of a half-circle — the curved arc plus the straight diameter.",
      laymanUse: "Add the curved half-edge and the flat diameter across the bottom.",
      example: "r=7 → P = 7(22/7+2) = 36 cm"
    },
    {
      subtopic: "Circle",
      name: "Area of a quadrant",
      formula: "A = ¼ × π × r²",
      symbols: [["r", "radius"]],
      generalUse: "To find the area of a quarter-circle.",
      laymanUse: "A quadrant is one-fourth of a circle, so it has a quarter of the area.",
      example: "r=14 → ¼×22/7×196 = 154 cm²"
    },
    {
      subtopic: "Circle",
      name: "Area of a ring (annulus)",
      formula: "A = π(R² − r²)",
      symbols: [["R", "outer radius"], ["r", "inner radius"]],
      generalUse: "To find the area between two concentric circles — washers, tracks, pipe cross-sections.",
      laymanUse: "Subtract the small circle's area from the big one to get the ring in between.",
      example: "R=7, r=5 → 22/7×(49−25) ≈ 75.4 cm²"
    },
    {
      subtopic: "Circle",
      name: "Length of a chord",
      formula: "Chord = 2√(r² − d²)",
      symbols: [["r", "radius"], ["d", "distance of chord from centre"]],
      generalUse: "To find the length of a chord from the radius and its distance from the centre.",
      laymanUse: "Uses Pythagoras between the radius and the chord's distance from the middle.",
      example: "r=5, d=3 → 2√(25−9) = 8"
    },
    {
      subtopic: "Triangle",
      name: "Area of a right triangle",
      formula: "A = ½ × base × height (the two perpendicular sides)",
      symbols: [["base, height", "the two sides at the right angle"]],
      generalUse: "To find the area of a right-angled triangle using its two shorter sides directly.",
      laymanUse: "The two sides that meet at the square corner are the base and height.",
      example: "legs 6 and 8 → ½×6×8 = 24 cm²"
    },
    {
      subtopic: "Triangle",
      name: "Area of an isosceles triangle",
      formula: "A = (b ÷ 4) × √(4a² − b²)",
      symbols: [["a", "the two equal sides"], ["b", "the base"]],
      generalUse: "To find the area of a triangle with two equal sides.",
      laymanUse: "A ready formula for the area when two sides are equal and the base is known.",
      example: "a=5, b=6 → (6/4)√(100−36) = 12 cm²"
    },
    {
      subtopic: "Quadrilateral",
      name: "Area of a general quadrilateral",
      formula: "A = ½ × d × (h₁ + h₂)",
      symbols: [
        ["d", "a diagonal"],
        ["h₁, h₂", "perpendiculars to it from the other corners"]
      ],
      generalUse: "To find the area of any four-sided figure by splitting it along a diagonal.",
      laymanUse: "Cut the shape into two triangles along a diagonal and add their areas.",
      example: "d=10, h₁=4, h₂=6 → ½×10×10 = 50 cm²"
    },
    {
      subtopic: "Polygon",
      name: "Perimeter of a regular polygon",
      formula: "P = n × s",
      symbols: [["n", "number of sides"], ["s", "length of a side"]],
      generalUse: "To find the boundary of a regular polygon with equal sides.",
      laymanUse: "All sides are equal, so multiply one side by the number of sides.",
      example: "Regular hexagon, s=5 → P = 30 cm"
    },
    {
      subtopic: "Polygon",
      name: "Each interior angle of a regular polygon",
      formula: "Interior angle = (n − 2) × 180° ÷ n",
      symbols: [["n", "number of sides"]],
      generalUse: "To find one inside angle of a regular polygon — tiling and design.",
      laymanUse: "Share the total interior angle equally among all the corners.",
      example: "Hexagon → (4×180)/6 = 120°"
    },
    {
      subtopic: "Polygon",
      name: "Each exterior angle of a regular polygon",
      formula: "Exterior angle = 360° ÷ n",
      symbols: [["n", "number of sides"]],
      generalUse: "To find the exterior angle of a regular polygon; also gives n if the angle is known.",
      laymanUse: "The outside angles always add to 360°, shared equally among the corners.",
      example: "Hexagon → 360/6 = 60°"
    },
    {
      subtopic: "Rhombus",
      name: "Area of a rhombus (base × height)",
      formula: "A = base × height",
      symbols: [["base", "one side"], ["height", "perpendicular distance"]],
      generalUse: "An alternate area of a rhombus using a side and its height (like a parallelogram).",
      laymanUse: "A rhombus is a slanted square, so area is base times straight-up height.",
      example: "base 6, height 4 → 24 cm²"
    },
    {
      subtopic: "Triangle",
      name: "Common Pythagorean triples",
      formula: "(3,4,5), (5,12,13), (8,15,17), (7,24,25)",
      symbols: [["—", "whole-number right-triangle sides"]],
      generalUse: "Handy side sets that satisfy a²+b²=c² — speed up right-triangle problems.",
      laymanUse: "These whole-number trios always make a perfect right triangle.",
      example: "6,8,10 is (3,4,5) doubled"
    },
    {
      subtopic: "Path",
      name: "Area of a path around a rectangle",
      formula: "A = (L+2w)(B+2w) − L×B",
      symbols: [
        ["L, B", "inner length and breadth"],
        ["w", "width of the path"]
      ],
      generalUse: "To find the area of a uniform path or border around a rectangular field or garden.",
      laymanUse: "Find the big outer rectangle's area and subtract the inner rectangle to leave the path.",
      example: "L=20,B=10,w=1 → 22×12 − 200 = 64 m²"
    },
    {
      subtopic: "Square",
      name: "Area of a square from its diagonal",
      formula: "A = ½ × d²",
      symbols: [["d", "the diagonal"]],
      generalUse: "To find a square's area directly from its diagonal.",
      laymanUse: "Half the diagonal squared gives the square's area.",
      example: "d=10 → A = ½×100 = 50 cm²"
    },
    {
      subtopic: "Circle",
      name: "Area of a circle from circumference",
      formula: "A = C² ÷ (4π)",
      symbols: [["C", "circumference"]],
      generalUse: "To find a circle's area when only the distance around it is known.",
      laymanUse: "Skip finding the radius — get the area straight from the boundary length.",
      example: "C=44 → 44²/(4×22/7) = 154 cm²"
    }
  ]
});
