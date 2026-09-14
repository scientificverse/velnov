/* ============================================================
   MATHEMATICS (Class 1-5) - TOPIC 10: SHAPES, PATTERNS & DATA (60)
   2D & 3D shapes, sides/corners, patterns, simple data handling.
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "Mathematics",
  icon: "➗",
  color: "#dc2626",
  description: "Maths problems for Class 1-5 - 10 topics.",
  topics: [
    {
      name: "10. Shapes, Patterns & Data",
      questions: [
        {
          difficulty: "easy",
          question: "How many sides does a triangle have?",
          options: { A: "3", B: "4", C: "5", D: "6" },
          answer: "A",
          explanation: "A triangle has 3 sides and 3 corners. 'Tri' means three.",
          related: ["Shapes", "Triangle"]
        },
        {
          difficulty: "easy",
          question: "How many sides does a square have?",
          options: { A: "4", B: "3", C: "5", D: "6" },
          answer: "A",
          explanation: "A square has 4 equal sides and 4 corners.",
          related: ["Shapes", "Square"]
        },
        {
          difficulty: "easy",
          question: "How many corners does a square have?",
          options: { A: "4", B: "3", C: "2", D: "6" },
          answer: "A",
          explanation: "A square has 4 corners (also called vertices).",
          related: ["Shapes", "Corners"]
        },
        {
          difficulty: "easy",
          question: "How many sides does a rectangle have?",
          options: { A: "4", B: "3", C: "5", D: "2" },
          answer: "A",
          explanation: "A rectangle has 4 sides - two long and two short - and 4 corners.",
          related: ["Shapes", "Rectangle"]
        },
        {
          difficulty: "easy",
          question: "How many sides does a circle have?",
          options: { A: "0 (it is a curved shape)", B: "1", C: "3", D: "4" },
          answer: "A",
          explanation: "A circle has no straight sides and no corners - it is a round, curved shape.",
          related: ["Shapes", "Circle"]
        },
        {
          difficulty: "medium",
          question: "Which shape is round with no corners?",
          options: { A: "Circle", B: "Square", C: "Triangle", D: "Rectangle" },
          answer: "A",
          explanation: "A circle is round and has no corners or straight sides.",
          related: ["Shapes", "Circle"]
        },
        {
          difficulty: "medium",
          question: "A shape with 4 equal sides is a:",
          options: { A: "Square", B: "Rectangle", C: "Triangle", D: "Circle" },
          answer: "A",
          explanation: "A square has 4 sides that are all the same length.",
          related: ["Shapes", "Square"]
        },
        {
          difficulty: "medium",
          question: "A shape with 4 sides where two are long and two are short is a:",
          options: { A: "Rectangle", B: "Square", C: "Triangle", D: "Circle" },
          answer: "A",
          explanation: "A rectangle has two long sides and two short sides.",
          related: ["Shapes", "Rectangle"]
        },
        {
          difficulty: "medium",
          question: "How many corners does a triangle have?",
          options: { A: "3", B: "4", C: "0", D: "6" },
          answer: "A",
          explanation: "A triangle has 3 corners, one at each point.",
          related: ["Shapes", "Triangle"]
        },
        {
          difficulty: "hard",
          question: "How many sides does a pentagon have?",
          options: { A: "5", B: "4", C: "6", D: "3" },
          answer: "A",
          explanation: "A pentagon has 5 sides. 'Penta' means five.",
          related: ["Shapes", "Pentagon"]
        },
        {
          difficulty: "hard",
          question: "How many sides does a hexagon have?",
          options: { A: "6", B: "5", C: "8", D: "4" },
          answer: "A",
          explanation: "A hexagon has 6 sides. 'Hexa' means six.",
          related: ["Shapes", "Hexagon"]
        },
        {
          difficulty: "medium",
          question: "Which of these is a 3D (solid) shape?",
          options: { A: "Cube", B: "Square", C: "Circle", D: "Triangle" },
          answer: "A",
          explanation: "A cube is a solid (3D) shape, like a dice. Square, circle and triangle are flat (2D) shapes.",
          related: ["Shapes", "3D"]
        },
        {
          difficulty: "hard",
          question: "A dice (like in Ludo) is shaped like a:",
          options: { A: "Cube", B: "Sphere", C: "Cone", D: "Cylinder" },
          answer: "A",
          explanation: "A dice is a cube - a solid shape with 6 square faces.",
          related: ["Shapes", "Cube"]
        },
        {
          difficulty: "hard",
          question: "A ball is shaped like a:",
          options: { A: "Sphere", B: "Cube", C: "Cone", D: "Cuboid" },
          answer: "A",
          explanation: "A ball is a sphere - a perfectly round solid shape.",
          related: ["Shapes", "Sphere"]
        },
        {
          difficulty: "hard",
          question: "An ice-cream cone is shaped like a:",
          options: { A: "Cone", B: "Sphere", C: "Cube", D: "Cylinder" },
          answer: "A",
          explanation: "An ice-cream cone is a cone - round at the bottom and pointed at the top.",
          related: ["Shapes", "Cone"]
        },
        {
          difficulty: "hard",
          question: "A tin of food or a pipe is shaped like a:",
          options: { A: "Cylinder", B: "Cube", C: "Sphere", D: "Cone" },
          answer: "A",
          explanation: "A tin or pipe is a cylinder - round with two flat circle ends.",
          related: ["Shapes", "Cylinder"]
        },
        {
          difficulty: "hard",
          question: "A brick or a matchbox is shaped like a:",
          options: { A: "Cuboid", B: "Cube", C: "Sphere", D: "Cone" },
          answer: "A",
          explanation: "A brick or matchbox is a cuboid - a box shape with 6 rectangular faces.",
          related: ["Shapes", "Cuboid"]
        },
        {
          difficulty: "medium",
          question: "How many corners does a rectangle have?",
          options: { A: "4", B: "3", C: "2", D: "0" },
          answer: "A",
          explanation: "A rectangle has 4 corners.",
          related: ["Shapes", "Corners"]
        },
        {
          difficulty: "medium",
          question: "What comes next in the pattern? Circle, Square, Circle, Square, ___",
          options: { A: "Circle", B: "Square", C: "Triangle", D: "Rectangle" },
          answer: "A",
          explanation: "The pattern repeats Circle, Square. After Square comes Circle again.",
          related: ["Patterns", "Shapes"]
        },
        {
          difficulty: "medium",
          question: "What comes next in the number pattern? 2, 4, 6, 8, ___",
          options: { A: "10", B: "9", C: "12", D: "7" },
          answer: "A",
          explanation: "The pattern adds 2 each time: 2, 4, 6, 8, 10.",
          related: ["Patterns", "Numbers"]
        },
        {
          difficulty: "medium",
          question: "What comes next? 5, 10, 15, 20, ___",
          options: { A: "25", B: "21", C: "30", D: "22" },
          answer: "A",
          explanation: "The pattern adds 5 each time: 5, 10, 15, 20, 25.",
          related: ["Patterns", "Numbers"]
        },
        {
          difficulty: "hard",
          question: "What comes next? 1, 2, 4, 8, ___",
          options: { A: "16", B: "10", C: "12", D: "9" },
          answer: "A",
          explanation: "Each number is doubled: 1, 2, 4, 8, 16 (8 × 2 = 16).",
          related: ["Patterns", "Doubling"]
        },
        {
          difficulty: "medium",
          question: "What comes next? A, B, C, D, ___",
          options: { A: "E", B: "F", C: "A", D: "Z" },
          answer: "A",
          explanation: "The pattern follows the alphabet in order: A, B, C, D, E.",
          related: ["Patterns", "Letters"]
        },
        {
          difficulty: "hard",
          question: "What comes next? 20, 18, 16, 14, ___",
          options: { A: "12", B: "13", C: "15", D: "10" },
          answer: "A",
          explanation: "The pattern goes down by 2 each time: 20, 18, 16, 14, 12.",
          related: ["Patterns", "Decreasing"]
        },
        {
          difficulty: "medium",
          question: "Which shape has 3 sides and 3 corners?",
          options: { A: "Triangle", B: "Square", C: "Circle", D: "Rectangle" },
          answer: "A",
          explanation: "A triangle has 3 sides and 3 corners.",
          related: ["Shapes", "Triangle"]
        },
        {
          difficulty: "hard",
          question: "The distance all around a shape is called its:",
          options: { A: "Perimeter", B: "Area", C: "Corner", D: "Side" },
          answer: "A",
          explanation: "The perimeter is the total length of all the sides of a shape - the distance around it.",
          related: ["Shapes", "Perimeter"]
        },
        {
          difficulty: "hard",
          question: "A square has all sides of 5 cm. What is its perimeter?",
          options: { A: "20 cm", B: "10 cm", C: "25 cm", D: "5 cm" },
          answer: "A",
          explanation: "Perimeter = add all 4 sides = 5 + 5 + 5 + 5 = 20 cm.",
          related: ["Shapes", "Perimeter"]
        },
        {
          difficulty: "hard",
          question: "A rectangle has sides 6 cm, 4 cm, 6 cm and 4 cm. What is its perimeter?",
          options: { A: "20 cm", B: "24 cm", C: "10 cm", D: "16 cm" },
          answer: "A",
          explanation: "Perimeter = 6 + 4 + 6 + 4 = 20 cm.",
          related: ["Shapes", "Perimeter"]
        },
        {
          difficulty: "medium",
          question: "The amount of space inside a flat shape is called its:",
          options: { A: "Area", B: "Perimeter", C: "Corner", D: "Side" },
          answer: "A",
          explanation: "The area is the space covered inside a flat shape. It is measured in square units.",
          related: ["Shapes", "Area"]
        },
        {
          difficulty: "medium",
          question: "Which of these objects is round like a circle?",
          options: { A: "A coin", B: "A book", C: "A door", D: "A matchbox" },
          answer: "A",
          explanation: "A coin is round like a circle. A book, door and matchbox are rectangle shapes.",
          related: ["Shapes", "Real objects"]
        },
        {
          difficulty: "medium",
          question: "Which of these objects is shaped like a rectangle?",
          options: { A: "A door", B: "A ball", C: "A wheel", D: "A plate" },
          answer: "A",
          explanation: "A door is shaped like a rectangle. A ball, wheel and plate are round.",
          related: ["Shapes", "Real objects"]
        },
        {
          difficulty: "hard",
          question: "In a bar chart, 5 children like apples and 3 like bananas. How many more like apples?",
          options: { A: "2", B: "8", C: "5", D: "3" },
          answer: "A",
          explanation: "5 - 3 = 2 more children like apples.",
          related: ["Data", "Bar chart"]
        },
        {
          difficulty: "hard",
          question: "A tally chart shows: Red = 4, Blue = 6, Green = 2. Which colour is most liked?",
          options: { A: "Blue", B: "Red", C: "Green", D: "All equal" },
          answer: "A",
          explanation: "Blue has the highest number (6), so it is the most liked colour.",
          related: ["Data", "Tally chart"]
        },
        {
          difficulty: "hard",
          question: "A chart shows fruits sold: Apple = 10, Mango = 15, Banana = 5. How many fruits were sold in all?",
          options: { A: "30", B: "25", C: "20", D: "35" },
          answer: "A",
          explanation: "Total = 10 + 15 + 5 = 30 fruits.",
          related: ["Data", "Total"]
        },
        {
          difficulty: "medium",
          question: "A tally mark of |||| (four lines) with a line across means:",
          options: { A: "5", B: "4", C: "10", D: "1" },
          answer: "A",
          explanation: "Four lines with one crossing them stands for 5 in a tally chart. It makes counting in fives easy.",
          related: ["Data", "Tally marks"]
        },
        {
          difficulty: "hard",
          question: "A pictograph shows 1 star = 2 books. If a shelf has 3 stars, how many books?",
          options: { A: "6", B: "3", C: "2", D: "5" },
          answer: "A",
          explanation: "3 stars × 2 books each = 6 books.",
          related: ["Data", "Pictograph"]
        },
        {
          difficulty: "medium",
          question: "Which shape can roll?",
          options: { A: "A ball (sphere)", B: "A cube", C: "A cuboid", D: "A square" },
          answer: "A",
          explanation: "A ball (sphere) can roll because it is round. Cubes and cuboids have flat faces and do not roll.",
          related: ["Shapes", "3D properties"]
        },
        {
          difficulty: "medium",
          question: "What comes next in the pattern? △ ○ △ ○ △ ___",
          options: { A: "○", B: "△", C: "□", D: "◇" },
          answer: "A",
          explanation: "The pattern repeats triangle, circle. After a triangle comes a circle (○).",
          related: ["Patterns", "Shapes"]
        },
        {
          difficulty: "hard",
          question: "What comes next? 10, 20, 30, 40, ___",
          options: { A: "50", B: "45", C: "60", D: "41" },
          answer: "A",
          explanation: "The pattern adds 10 each time: 10, 20, 30, 40, 50.",
          related: ["Patterns", "Numbers"]
        },
        {
          difficulty: "medium",
          question: "How many faces does a cube have?",
          options: { A: "6", B: "4", C: "8", D: "2" },
          answer: "A",
          explanation: "A cube has 6 square faces, like a dice.",
          related: ["Shapes", "Cube faces"]
        },
        {
          difficulty: "hard",
          question: "How many corners (vertices) does a cube have?",
          options: { A: "8", B: "6", C: "4", D: "12" },
          answer: "A",
          explanation: "A cube has 8 corners (vertices).",
          related: ["Shapes", "Cube"]
        },
        {
          difficulty: "medium",
          question: "Which shape is like the face of a clock?",
          options: { A: "Circle", B: "Square", C: "Triangle", D: "Rectangle" },
          answer: "A",
          explanation: "The face of a clock is round, so it is a circle.",
          related: ["Shapes", "Real objects"]
        },
        {
          difficulty: "hard",
          question: "A triangle has sides 3 cm, 4 cm and 5 cm. What is its perimeter?",
          options: { A: "12 cm", B: "9 cm", C: "10 cm", D: "60 cm" },
          answer: "A",
          explanation: "Perimeter = 3 + 4 + 5 = 12 cm.",
          related: ["Shapes", "Perimeter"]
        },
        {
          difficulty: "medium",
          question: "What comes next in the pattern? 1, 3, 5, 7, ___",
          options: { A: "9", B: "8", C: "10", D: "6" },
          answer: "A",
          explanation: "These are odd numbers, adding 2 each time: 1, 3, 5, 7, 9.",
          related: ["Patterns", "Odd numbers"]
        },
        {
          difficulty: "hard",
          question: "A pictograph shows 1 picture = 5 pens. If there are 4 pictures, how many pens?",
          options: { A: "20", B: "9", C: "5", D: "45" },
          answer: "A",
          explanation: "4 pictures × 5 pens each = 20 pens.",
          related: ["Data", "Pictograph"]
        },
        {
          difficulty: "medium",
          question: "Which of these shapes has the most sides?",
          options: { A: "Hexagon (6 sides)", B: "Triangle (3)", C: "Square (4)", D: "Pentagon (5)" },
          answer: "A",
          explanation: "A hexagon has 6 sides, which is more than a triangle (3), square (4) or pentagon (5).",
          related: ["Shapes", "Comparing sides"]
        },
        {
          difficulty: "hard",
          question: "In a data table: Monday = 2 books, Tuesday = 4, Wednesday = 6. On which day were most books read?",
          options: { A: "Wednesday", B: "Monday", C: "Tuesday", D: "All same" },
          answer: "A",
          explanation: "Wednesday has the highest number (6 books), so most books were read on Wednesday.",
          related: ["Data", "Reading tables"]
        },
        {
          difficulty: "medium",
          question: "Which shape is used for a road sign that is a triangle warning?",
          options: { A: "Triangle", B: "Circle", C: "Square", D: "Star" },
          answer: "A",
          explanation: "Warning road signs are often triangle-shaped.",
          related: ["Shapes", "Real objects"]
        },
        {
          difficulty: "hard",
          question: "What comes next? 100, 90, 80, 70, ___",
          options: { A: "60", B: "65", C: "75", D: "50" },
          answer: "A",
          explanation: "The pattern goes down by 10 each time: 100, 90, 80, 70, 60.",
          related: ["Patterns", "Decreasing"]
        },
        {
          difficulty: "medium",
          question: "How many sides does a square have that are equal?",
          options: { A: "All 4 sides are equal", B: "Only 2", C: "Only 3", D: "None" },
          answer: "A",
          explanation: "In a square, all 4 sides are the same length. This is what makes it different from a rectangle.",
          related: ["Shapes", "Square"]
        },
        {
          difficulty: "hard",
          question: "A tally chart shows Cats = |||| , Dogs = ||| . How many pets in all? (each | is 1)",
          options: { A: "7", B: "8", C: "4", D: "3" },
          answer: "A",
          explanation: "Cats = 4, Dogs = 3. Total = 4 + 3 = 7 pets.",
          related: ["Data", "Tally chart"]
        },
        {
          difficulty: "medium",
          question: "Which shape has no straight sides at all?",
          options: { A: "Circle", B: "Square", C: "Triangle", D: "Rectangle" },
          answer: "A",
          explanation: "A circle is made of one smooth curve and has no straight sides.",
          related: ["Shapes", "Circle"]
        },
        {
          difficulty: "hard",
          question: "What comes next in the growing pattern? 1, 4, 9, 16, ___",
          options: { A: "25", B: "20", C: "24", D: "18" },
          answer: "A",
          explanation: "These are square numbers: 1×1, 2×2, 3×3, 4×4, 5×5 = 1, 4, 9, 16, 25.",
          related: ["Patterns", "Square numbers"]
        },
        {
          difficulty: "medium",
          question: "Which solid shape has a pointed top and a round base?",
          options: { A: "Cone", B: "Cube", C: "Sphere", D: "Cuboid" },
          answer: "A",
          explanation: "A cone has a round base and comes to a point at the top, like a party hat or an ice-cream cone.",
          related: ["Shapes", "Cone"]
        },
        {
          difficulty: "hard",
          question: "A bar graph shows Class A = 20 students and Class B = 25 students. How many students in both classes?",
          options: { A: "45", B: "5", C: "40", D: "50" },
          answer: "A",
          explanation: "Total = 20 + 25 = 45 students.",
          related: ["Data", "Bar graph"]
        },
        {
          difficulty: "medium",
          question: "Which of these is a pattern that repeats?",
          options: {
            A: "Red, Blue, Red, Blue, Red, Blue",
            B: "Red, Blue, Green, Yellow, Pink",
            C: "1, 5, 2, 9, 3",
            D: "A, X, M, P"
          },
          answer: "A",
          explanation: "Red, Blue keeps repeating, so it is a repeating pattern. The others do not repeat in a regular way.",
          related: ["Patterns", "Repeating"]
        },
        {
          difficulty: "hard",
          question: "A rectangle's long side is 8 cm and short side is 3 cm. What is its perimeter?",
          options: { A: "22 cm", B: "11 cm", C: "24 cm", D: "16 cm" },
          answer: "A",
          explanation: "Perimeter = 8 + 3 + 8 + 3 = 22 cm (add all four sides).",
          related: ["Shapes", "Perimeter"]
        },
        {
          difficulty: "medium",
          question: "How many corners does a circle have?",
          options: { A: "0 (none)", B: "1", C: "2", D: "4" },
          answer: "A",
          explanation: "A circle has no corners - it is a smooth round shape.",
          related: ["Shapes", "Circle"]
        },
        {
          difficulty: "hard",
          question: "Which overall statement about shapes, patterns and data is CORRECT?",
          options: {
            A: "Flat (2D) shapes have sides and corners, solid (3D) shapes have faces and can roll or stack; patterns repeat or grow in a rule; and charts help us read and compare data",
            B: "All shapes have 4 sides",
            C: "A circle has 4 corners",
            D: "Patterns never follow a rule"
          },
          answer: "A",
          explanation: "This sums up the topic: 2D shapes (circle, triangle, square, rectangle) have sides and corners; 3D shapes (cube, sphere, cone, cylinder, cuboid) have faces; patterns follow a rule of repeating or growing; and bar charts, tally marks and pictographs help us organise and compare information.",
          related: ["Summary"]
        },
        {
          difficulty: "medium",
          question: "What comes next in the pattern? 3, 6, 9, 12, ___",
          options: { A: "15", B: "13", C: "14", D: "18" },
          answer: "A",
          explanation: "The pattern adds 3 each time: 3, 6, 9, 12, 15 (the 3 times table).",
          related: ["Patterns", "Numbers"]
        }
      ]
    }
  ]
});
