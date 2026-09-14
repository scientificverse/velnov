/* ============================================================
   MATH FORMULAS - TOPIC: MENSURATION (3D) - Surface Area & Volume
   ============================================================ */

window.FORMULA_DATA = window.FORMULA_DATA || [];

FORMULA_DATA.push({
  topic: "Mensuration — Surface Area & Volume (3D)",
  icon: "🧊",
  color: "#0d9488",
  formulas: [
    {
      cls: "Class 8",
      subtopic: "Cube",
      name: "Volume of a cube",
      formula: "V = a³",
      symbols: [["a", "length of an edge"]],
      generalUse: "To find the space inside a cube — boxes, dice, storage cubes, and volume problems.",
      laymanUse: "A cube has equal sides. Multiply one edge by itself three times to find how much it can hold.",
      example: "a = 4 cm → V = 4³ = 64 cm³"
    },
    {
      cls: "Class 8",
      subtopic: "Cube",
      name: "Total surface area of a cube",
      formula: "TSA = 6 × a²",
      symbols: [["a", "length of an edge"]],
      generalUse: "To find the total outer area of a cube — how much paint or paper covers all 6 faces.",
      laymanUse: "A cube has 6 equal square faces. Find one face's area and multiply by 6.",
      example: "a = 4 → TSA = 6 × 16 = 96 cm²"
    },
    {
      cls: "Class 8",
      subtopic: "Cuboid",
      name: "Volume of a cuboid",
      formula: "V = l × b × h",
      symbols: [["l", "length"], ["b", "breadth"], ["h", "height"]],
      generalUse: "To find the space inside a box shape — rooms, bricks, tanks, cartons.",
      laymanUse: "Multiply length, width and height to find how much a box-shaped thing can hold.",
      example: "l=5, b=4, h=3 → V = 5×4×3 = 60 cm³"
    },
    {
      cls: "Class 8",
      subtopic: "Cuboid",
      name: "Total surface area of a cuboid",
      formula: "TSA = 2 × (lb + bh + hl)",
      symbols: [["l", "length"], ["b", "breadth"], ["h", "height"]],
      generalUse: "To find the total outer area of a box — wrapping paper, paint for a room's walls and ceiling.",
      laymanUse: "A box has 6 rectangular faces in 3 matching pairs. Add the three different faces and double it.",
      example: "l=5, b=4, h=3 → TSA = 2(20+12+15) = 94 cm²"
    },
    {
      cls: "Class 9",
      subtopic: "Cylinder",
      name: "Volume of a cylinder",
      formula: "V = π × r² × h",
      symbols: [["r", "radius of the circular base"], ["h", "height"]],
      generalUse: "To find the space inside a cylinder — pipes, tanks, tins, glasses, gas cylinders.",
      laymanUse: "Find the round base's area (πr²) and multiply by the height, like stacking many circles.",
      example: "r=7, h=10 → V = 22/7 × 49 × 10 = 1540 cm³"
    },
    {
      cls: "Class 9",
      subtopic: "Cylinder",
      name: "Curved surface area of a cylinder",
      formula: "CSA = 2 × π × r × h",
      symbols: [["r", "radius"], ["h", "height"]],
      generalUse: "To find the curved (side) area of a cylinder — the label on a tin, paint on a pipe's outside.",
      laymanUse: "Unroll the curved side and it becomes a rectangle: its area is the base's circumference times the height.",
      example: "r=7, h=10 → CSA = 2 × 22/7 × 7 × 10 = 440 cm²"
    },
    {
      cls: "Class 9",
      subtopic: "Cone",
      name: "Volume of a cone",
      formula: "V = ⅓ × π × r² × h",
      symbols: [["r", "radius of the base"], ["h", "height"]],
      generalUse: "To find the space inside a cone — ice-cream cones, funnels, conical tents and heaps.",
      laymanUse: "A cone holds exactly one-third of the cylinder with the same base and height.",
      example: "r=3, h=7 → V = ⅓ × 22/7 × 9 × 7 = 66 cm³"
    },
    {
      cls: "Class 9",
      subtopic: "Cone",
      name: "Curved surface area of a cone",
      formula: "CSA = π × r × l",
      symbols: [["r", "radius"], ["l", "slant height"]],
      generalUse: "To find the sloping surface area of a cone — the paper of a party hat or the cloth of a conical tent.",
      laymanUse: "Multiply pi by the radius and by the slanting side length to get the curved surface.",
      example: "r=7, l=25 → CSA = 22/7 × 7 × 25 = 550 cm²"
    },
    {
      cls: "Class 9",
      subtopic: "Sphere",
      name: "Volume of a sphere",
      formula: "V = 4/3 × π × r³",
      symbols: [["r", "radius"]],
      generalUse: "To find the space inside a ball-shaped object — balls, globes, bubbles, planets.",
      laymanUse: "For a perfectly round ball, cube the radius, multiply by pi, then by four-thirds.",
      example: "r=3 → V = 4/3 × 22/7 × 27 ≈ 113.1 cm³"
    },
    {
      cls: "Class 9",
      subtopic: "Sphere",
      name: "Surface area of a sphere",
      formula: "SA = 4 × π × r²",
      symbols: [["r", "radius"]],
      generalUse: "To find the outer area of a ball — leather for a football, paint for a dome.",
      laymanUse: "The whole surface of a ball is four times the area of the flat circle across its middle.",
      example: "r=7 → SA = 4 × 22/7 × 49 = 616 cm²"
    },
    {
      cls: "Class 9",
      subtopic: "Hemisphere",
      name: "Volume of a hemisphere",
      formula: "V = 2/3 × π × r³",
      symbols: [["r", "radius"]],
      generalUse: "To find the space inside a half-ball — bowls, domes, half-orange shapes.",
      laymanUse: "A hemisphere is half a ball, so it holds half the volume of the full sphere.",
      example: "r=3 → V = 2/3 × 22/7 × 27 ≈ 56.6 cm³"
    },
    {
      cls: "Class 9",
      subtopic: "Cone",
      name: "Slant height of a cone",
      formula: "l = √(r² + h²)",
      symbols: [["l", "slant height"], ["r", "radius"], ["h", "height"]],
      generalUse: "To find the sloping side of a cone from its radius and height, before finding curved surface area.",
      laymanUse: "The slant side, the height and the radius form a right triangle, so use Pythagoras to find the slant.",
      example: "r=3, h=4 → l = √(9+16) = 5"
    },
    {
      subtopic: "Cube",
      name: "Diagonal of a cube",
      formula: "d = a × √3",
      symbols: [["a", "edge length"], ["d", "longest inside diagonal"]],
      generalUse: "To find the longest straight line inside a cube (corner to opposite corner).",
      laymanUse: "The longest line through a cube is its edge times about 1.732.",
      example: "a = 4 → d = 4√3 ≈ 6.93 cm"
    },
    {
      subtopic: "Cuboid",
      name: "Diagonal of a cuboid",
      formula: "d = √(l² + b² + h²)",
      symbols: [["l", "length"], ["b", "breadth"], ["h", "height"]],
      generalUse: "To find the longest straight line inside a box — packing long items into cartons.",
      laymanUse: "Square all three dimensions, add them, and take the square root to get the longest inside line.",
      example: "l=3, b=4, h=12 → d = √(9+16+144) = 13"
    },
    {
      subtopic: "Cylinder",
      name: "Total surface area of a cylinder",
      formula: "TSA = 2πr(r + h)",
      symbols: [["r", "radius"], ["h", "height"]],
      generalUse: "To find the whole outer area of a closed cylinder — the curved side plus the two circle ends.",
      laymanUse: "Add the curved side and the two round lids to get the full outside area.",
      example: "r=7, h=10 → 2×22/7×7×17 = 748 cm²"
    },
    {
      subtopic: "Cone",
      name: "Total surface area of a cone",
      formula: "TSA = πr(l + r)",
      symbols: [["r", "radius"], ["l", "slant height"]],
      generalUse: "To find the whole outer area of a solid cone — the sloping side plus the circular base.",
      laymanUse: "Add the slanting surface and the round base to get the full outside area.",
      example: "r=7, l=25 → 22/7×7×32 = 704 cm²"
    },
    {
      subtopic: "Hemisphere",
      name: "Curved surface area of a hemisphere",
      formula: "CSA = 2πr²",
      symbols: [["r", "radius"]],
      generalUse: "To find the curved (dome) surface area of a half-ball — bowls, domes.",
      laymanUse: "The curved part of half a ball is twice the area of the flat circle across it.",
      example: "r=7 → 2×22/7×49 = 308 cm²"
    },
    {
      subtopic: "Hemisphere",
      name: "Total surface area of a hemisphere",
      formula: "TSA = 3πr²",
      symbols: [["r", "radius"]],
      generalUse: "To find the whole outer area of a solid half-ball — the dome plus its flat circular face.",
      laymanUse: "Add the curved dome and the flat circle to get three times the circle's area.",
      example: "r=7 → 3×22/7×49 = 462 cm²"
    },
    {
      subtopic: "Cube",
      name: "Lateral surface area of a cube",
      formula: "LSA = 4 × a²",
      symbols: [["a", "edge length"]],
      generalUse: "To find the area of the four side faces of a cube (not top and bottom).",
      laymanUse: "The four walls of a cube — four square faces.",
      example: "a=5 → 4×25 = 100 cm²"
    },
    {
      subtopic: "Cuboid",
      name: "Lateral surface area of a cuboid",
      formula: "LSA = 2h(l + b)",
      symbols: [["l", "length"], ["b", "breadth"], ["h", "height"]],
      generalUse: "To find the area of the four walls of a room (excluding floor and ceiling) — painting.",
      laymanUse: "The area of the four walls of a box-shaped room.",
      example: "l=5,b=4,h=3 → 2×3×9 = 54 m²"
    },
    {
      subtopic: "Cuboid",
      name: "Area of four walls of a room",
      formula: "Area = 2 × height × (length + breadth)",
      symbols: [["length, breadth, height", "room dimensions"]],
      generalUse: "To find how much paint or wallpaper the walls of a room need.",
      laymanUse: "Same as lateral surface area — just the four walls.",
      example: "5×4 room, 3 high → 2×3×9 = 54 m²"
    },
    {
      subtopic: "Prism",
      name: "Volume of a prism",
      formula: "V = Base area × Height",
      symbols: [["Base area", "area of the cross-section"], ["Height", "length of the prism"]],
      generalUse: "To find the space inside any prism — triangular, hexagonal, or other uniform cross-section.",
      laymanUse: "Find the area of the shape at the end and multiply by how long the prism is.",
      example: "triangular base 6 cm², length 10 → V = 60 cm³"
    },
    {
      subtopic: "Prism",
      name: "Lateral surface area of a prism",
      formula: "LSA = Perimeter of base × Height",
      symbols: [["Perimeter", "of the base shape"], ["Height", "length of the prism"]],
      generalUse: "To find the side surface area of a prism.",
      laymanUse: "Unroll the sides — their area is the base's perimeter times the length.",
      example: "base perimeter 12, length 10 → 120 cm²"
    },
    {
      subtopic: "Pyramid",
      name: "Volume of a pyramid",
      formula: "V = ⅓ × Base area × Height",
      symbols: [["Base area", "area of the base"], ["Height", "vertical height"]],
      generalUse: "To find the space inside any pyramid — square, triangular, etc.",
      laymanUse: "A pyramid holds one-third of the prism with the same base and height.",
      example: "base 36 cm², height 10 → V = 120 cm³"
    },
    {
      subtopic: "Frustum",
      name: "Volume of a frustum of a cone",
      formula: "V = ⅓ × π × h × (R² + r² + Rr)",
      symbols: [
        ["R", "larger radius"],
        ["r", "smaller radius"],
        ["h", "height"]
      ],
      generalUse: "To find the space inside a cone with the tip cut off — buckets, glasses, lampshades.",
      laymanUse: "A bucket shape: this gives its capacity from the two circle radii and the height.",
      example: "R=6,r=3,h=7 → ⅓×22/7×7×(36+9+18) = 462 cm³"
    },
    {
      subtopic: "Frustum",
      name: "Curved surface area of a frustum",
      formula: "CSA = π × l × (R + r)",
      symbols: [["l", "slant height"], ["R, r", "the two radii"]],
      generalUse: "To find the sloping surface area of a bucket-shaped frustum.",
      laymanUse: "The slanting side area of a cut-off cone.",
      example: "R=6,r=3,l=5 → 22/7×5×9 ≈ 141.4 cm²"
    },
    {
      subtopic: "Cylinder",
      name: "Volume of a hollow cylinder (pipe)",
      formula: "V = π × h × (R² − r²)",
      symbols: [["R", "outer radius"], ["r", "inner radius"], ["h", "length"]],
      generalUse: "To find the material volume of a pipe or tube.",
      laymanUse: "Subtract the hollow inside from the full outside to get the pipe's material.",
      example: "R=5,r=3,h=10 → 22/7×10×16 ≈ 502.9 cm³"
    },
    {
      subtopic: "Sphere",
      name: "Volume of a sphere from diameter",
      formula: "V = (1/6) × π × d³",
      symbols: [["d", "diameter"]],
      generalUse: "To find a sphere's volume directly from its diameter.",
      laymanUse: "If you know the full width instead of the radius, use this form.",
      example: "d=6 → 1/6×22/7×216 ≈ 113.1 cm³"
    },
    {
      subtopic: "Capacity",
      name: "Capacity: cm³ to litres",
      formula: "1000 cm³ = 1 litre,   1 m³ = 1000 litres",
      symbols: [["cm³, m³", "volume units"]],
      generalUse: "To convert a container's volume into how much liquid it holds.",
      laymanUse: "A box of 1000 cubic centimetres holds exactly one litre.",
      example: "2000 cm³ tank holds 2 litres"
    },
    {
      subtopic: "Cube",
      name: "Volume of a cube from diagonal",
      formula: "V = (d ÷ √3)³",
      symbols: [["d", "the long diagonal"]],
      generalUse: "To find a cube's volume when only its longest diagonal is known.",
      laymanUse: "Get the edge from the diagonal first, then cube it.",
      example: "d=√3 → edge 1 → V = 1 cm³"
    },
    {
      subtopic: "Cone",
      name: "Height of a cone from volume",
      formula: "h = 3V ÷ (π r²)",
      symbols: [["V", "volume"], ["r", "radius"]],
      generalUse: "To find a cone's height when its volume and radius are known.",
      laymanUse: "Rearranges the cone-volume formula to give the height.",
      example: "V=66, r=3 → h = 198/(22/7×9) = 7"
    }
  ]
});
