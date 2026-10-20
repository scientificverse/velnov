/* ============================================================
   PHYSICS (Class 6-8) - TOPIC OVERVIEWS (study notes)
   ------------------------------------------------------------
   One hand-written study-notes overview per topic. tools/build-pages.js
   shows it as a "Topic overview" at the top of the topic's study page,
   above the questions. index.html does NOT load this file.

   Key = topic number (1 = first topic in data/physics/).
   `topic` must match the topic name exactly (without the "1. "),
   so the build can warn if topics are ever reordered.

   Each topic:
     title           heading shown at the top of the overview
     sections        [{ h: "heading", blocks: [...] }]   numbered 1, 2, 3...
     misconceptions  [["wrong idea", "correct idea"]]     shown as a table
     revision        [["term", "meaning"]]                "Quick revision"
     questions       [["question", "answer"]]             "Test your understanding"
     takeaway        one sentence                         "Key takeaway"

   Blocks (use them in this order: define first, then give examples):
     "plain text"                a paragraph (a definition or explanation)
     { examples: ["...", ...] }  "Example:" (one) or "Examples:" (several)
     { list: ["...", ...] }      a bullet list
     { remember: "..." }         a "Remember:" tip box
     { key: "..." }              a highlighted line (formula, order, comparison)
     { h: "A. Sub-heading", blocks: [...] }   a sub-section

   Text is plain; **double asterisks** make words bold. Everything else
   is escaped by the build.
   ============================================================ */

window.TOPIC_NOTES = window.TOPIC_NOTES || {};

TOPIC_NOTES["Physics"] = {
  footnote: "Notes written by Velnov for Class 6–8 students, following the topics of the NCERT science syllabus.",
  topics: {

    /* ---------------------------------------------------------- 1 */
    1: {
      topic: "Motion, Measurement & Time",
      title: "Motion, Measurement and Time – how far, how long, how fast",
      sections: [
        { h: "Why do we need standard units?", blocks: [
          "A **unit** is a fixed amount that we compare a quantity with. A **standard unit** means exactly the same amount to everyone, everywhere.",
          "Long ago, people measured with parts of the body, such as the handspan, the footspan and the **cubit** (elbow to fingertip). These vary from person to person, so measurements did not agree.",
          { examples: [
            "Two children measuring the same desk in handspans get different answers, because their hands are different sizes.",
            "Cloth sold by the cubit would give a tall customer more cloth than a short one.",
          ] },
          { remember: "The SI unit of length is the **metre (m)**, of mass the **kilogram (kg)** and of time the **second (s)**." },
        ] },
        { h: "Units of length", blocks: [
          "Bigger and smaller units of length are made from the metre:",
          { list: [
            "**10 millimetres (mm)** = 1 centimetre (cm)",
            "**100 centimetres** = 1 metre (m)",
            "**1,000 metres** = 1 kilometre (km)",
          ] },
          { key: "mm  <  cm  <  m  <  km" },
          { examples: [
            "The thickness of a coin is measured in millimetres.",
            "The length of a pencil is measured in centimetres.",
            "The distance between two cities is measured in kilometres.",
            "2.5 km = 2.5 × 1,000 = 2,500 m, and 350 cm = 350 ÷ 100 = 3.5 m.",
          ] },
        ] },
        { h: "Measuring length correctly", blocks: [
          "Careful measuring avoids small mistakes:",
          { list: [
            "**Place the ruler along the object**, with the zero mark at one end.",
            "**Keep your eye directly above the mark** you are reading. Looking from the side causes **parallax error**.",
            "**Broken zero end?** Start from a clear mark, such as 1 cm, and subtract it at the end.",
            "**Curved line?** Lay a thread along it, mark the ends, then straighten the thread against the ruler.",
          ] },
          { examples: [
            "A pencil lies from the 1.0 cm mark to the 13.5 cm mark, so its length is 13.5 − 1.0 = 12.5 cm.",
            "A flexible measuring tape is used for round things, such as a tree trunk or your waist.",
          ] },
        ] },
        { h: "What is motion?", blocks: [
          "An object is in **motion** when its position changes with time. If its position does not change, it is at **rest**.",
          "Rest and motion are **relative**: they depend on what you compare the object with.",
          { examples: ["A passenger sitting in a moving bus is at rest compared with the bus, but in motion compared with a tree by the road."] },
        ] },
        { h: "Types of motion", blocks: [
          { h: "A. Rectilinear motion", blocks: [
            "Motion along a **straight line**.",
            { examples: ["A car on a straight road, a soldier in a march-past, or a stone dropped from a height."] },
          ] },
          { h: "B. Circular motion", blocks: [
            "Motion along a **circular path**.",
            { examples: ["A stone tied to a string and whirled round, or the tip of a clock's hand."] },
          ] },
          { h: "C. Rotational motion", blocks: [
            "**Spinning** about a fixed axis.",
            { examples: ["A spinning top, or the Earth turning on its axis."] },
          ] },
          { h: "D. Periodic motion", blocks: [
            "Motion that **repeats itself** after equal intervals of time.",
            { examples: ["A swing, a pendulum, the needle of a sewing machine, or your heartbeat."] },
          ] },
          { h: "E. Random motion", blocks: [
            "Motion with **no fixed path** or pattern.",
            { examples: ["A flying insect, or a footballer changing direction."] },
          ] },
          { remember: "One object can show more than one type of motion. A ceiling fan rotates, while the tip of each blade moves in a circle." },
        ] },
        { h: "Speed", blocks: [
          "**Speed** is the distance an object covers in one unit of time.",
          { key: "Speed = Distance ÷ Time" },
          "Its SI unit is **metres per second (m/s)**. Road speeds are usually given in **kilometres per hour (km/h)**.",
          { examples: [
            "A car travels 100 m in 20 s. Speed = 100 ÷ 20 = 5 m/s.",
            "A cyclist covers 30 km in 2 hours. Speed = 30 ÷ 2 = 15 km/h.",
          ] },
          { h: "Uniform and non-uniform motion", blocks: [
            "In **uniform motion**, an object covers equal distances in equal intervals of time, so its speed stays the same. In **non-uniform motion**, the speed keeps changing.",
            { examples: [
              "Uniform: a train running steadily on a straight track.",
              "Non-uniform: a bus in city traffic, speeding up and slowing down.",
            ] },
          ] },
          { h: "Average speed", blocks: [
            "For a whole journey, **average speed = total distance ÷ total time**.",
            { examples: ["A train goes 120 km in 2 hours and then 180 km in 3 hours. Average speed = 300 km ÷ 5 h = 60 km/h."] },
          ] },
          { remember: "In a vehicle, the **speedometer** shows the speed and the **odometer** shows the total distance travelled." },
        ] },
        { h: "Measuring time", blocks: [
          "Time is measured using events that repeat at regular intervals.",
          "A **simple pendulum** is a small metal ball (the **bob**) hung from a fixed point by a thread. One complete to-and-fro swing is one **oscillation**, and the time it takes is the **time period**.",
          { key: "Time period = Total time ÷ Number of oscillations" },
          { examples: [
            "A pendulum makes 20 oscillations in 40 seconds. Time period = 40 ÷ 20 = 2 s.",
            "Every swing takes the same time, so pendulums were used to build accurate clocks.",
          ] },
          "Older timekeepers include the **sundial** (which uses the Sun's shadow), the water clock and the sand clock. Most modern watches use a vibrating **quartz crystal**.",
          { remember: "For small swings, the time period depends on the **length** of the pendulum, not on the weight of the bob." },
        ] },
        { h: "Distance–time graphs", blocks: [
          "A **distance–time graph** shows how far an object has travelled at each moment.",
          { list: [
            "**Straight sloping line:** uniform speed.",
            "**Steeper line:** higher speed.",
            "**Horizontal (flat) line:** the object is at rest.",
            "**Curved line:** the speed is changing.",
          ] },
        ] },
      ],
      misconceptions: [
        ["A heavier bob makes a pendulum swing faster.", "For small swings, only the length of the pendulum changes its time period."],
        ["Average speed is the average of the two speeds.", "Average speed = total distance ÷ total time."],
        ["You can mix units in a speed problem.", "Convert first: 600 m in 10 minutes is 600 m in 600 s, which is 1 m/s."],
        ["An object is simply moving or not moving.", "Rest and motion depend on what you compare the object with."],
        ["The speedometer shows how far a car has gone.", "The speedometer shows speed; the odometer shows distance."],
      ],
      revision: [
        ["Standard unit", "A unit that is the same for everyone, everywhere."],
        ["SI units", "Metre (length), kilogram (mass) and second (time)."],
        ["Parallax error", "A wrong reading caused by looking at a scale from an angle."],
        ["Motion", "A change in position with time."],
        ["Periodic motion", "Motion that repeats after equal intervals of time."],
        ["Speed", "Distance ÷ time, measured in m/s or km/h."],
        ["Uniform motion", "Equal distances covered in equal intervals of time."],
        ["Time period", "The time taken for one complete oscillation."],
      ],
      questions: [
        ["Why are body-based units like the handspan unreliable?", "Hands, feet and arms differ in size from person to person, so two people get different results."],
        ["Convert 350 cm into metres.", "350 ÷ 100 = 3.5 m."],
        ["Where should your eye be when you read a ruler?", "Directly above the mark being read, to avoid parallax error."],
        ["What type of motion does a swing show?", "Periodic (oscillatory) motion."],
        ["A boy walks 600 m in 10 minutes. What is his speed in m/s?", "10 minutes = 600 s, so speed = 600 ÷ 600 = 1 m/s."],
        ["What does a horizontal line on a distance–time graph show?", "The object is at rest: its distance is not changing."],
        ["A pendulum makes 20 oscillations in 40 s. What is its time period?", "40 ÷ 20 = 2 seconds."],
      ],
      takeaway: "Measure with standard units and care, describe motion by its path, and find speed as distance ÷ time, always in matching units.",
    },

    /* ---------------------------------------------------------- 2 */
    2: {
      topic: "Light, Shadows & Reflection",
      title: "Light, Shadows and Reflection – how we see the world",
      sections: [
        { h: "How do we see things?", blocks: [
          "We see an object only when **light from it enters our eyes**. In complete darkness nothing is visible, even with our eyes wide open.",
          { h: "Luminous and non-luminous objects", blocks: [
            "**Luminous** objects give out their own light. **Non-luminous** objects do not; we see them because they reflect light into our eyes.",
            { examples: [
              "Luminous: the Sun, a candle flame, a glowing bulb, a firefly.",
              "Non-luminous: a book, a chair, the Moon.",
            ] },
          ] },
          { remember: "The Moon is non-luminous. It shines only because it reflects sunlight." },
        ] },
        { h: "Transparent, translucent and opaque", blocks: [
          "Materials are grouped by how much light they let through:",
          { list: [
            "**Transparent:** let almost all light pass, so we see clearly through them. Examples: clear glass, clean water, air.",
            "**Translucent:** let some light pass, so things behind them look blurred. Examples: frosted glass, butter paper.",
            "**Opaque:** let no light pass. Examples: wood, metal, a brick wall.",
          ] },
          { examples: ["Bathroom windows often use frosted glass. Light comes in, but nobody can see clearly inside."] },
        ] },
        { h: "Light travels in straight lines", blocks: [
          "Light travels in **straight lines**. This is called the **rectilinear propagation** of light.",
          { examples: [
            "A torch beam in a dusty room is straight.",
            "We cannot see round a corner, because light cannot bend round it to reach our eyes.",
          ] },
        ] },
        { h: "Shadows", blocks: [
          "A **shadow** is the dark area formed when an opaque object blocks light.",
          "To form a shadow, you need three things:",
          { list: [
            "a **source of light**,",
            "an **opaque object**,",
            "a **screen or surface** for the shadow to fall on.",
          ] },
          "A shadow is always dark and shows only the **outline** of the object, not its colour or details. It forms on the side away from the light.",
          { examples: [
            "Shadows are longest in the early morning and late evening, when the Sun is low, and shortest around noon, when it is high.",
            "An object closer to a lamp casts a bigger shadow than the same object farther away.",
            "Shadow puppets are opaque cut-outs held between a lamp and a screen.",
          ] },
          { h: "Eclipses", blocks: [
            "An **eclipse** happens when the shadow of one body falls on another.",
            { list: [
              "**Solar eclipse:** the Moon comes between the Sun and the Earth, so the Moon's shadow falls on the Earth.",
              "**Lunar eclipse:** the Earth comes between the Sun and the Moon, so the Earth's shadow falls on the Moon.",
            ] },
          ] },
        ] },
        { h: "The pinhole camera", blocks: [
          "A **pinhole camera** is a box with a tiny hole at one end and a screen at the other. Light from an object passes straight through the hole and forms an **image** on the screen.",
          "The image is **upside down (inverted)**, because rays from the top of the object travel straight to the bottom of the screen, and rays from the bottom travel to the top.",
          { examples: ["The round patches of light under a leafy tree are pinhole images of the Sun, made by the small gaps between the leaves."] },
        ] },
        { h: "Reflection of light", blocks: [
          "**Reflection** is the bouncing back of light when it falls on a surface. Smooth, shiny surfaces give clear images; rough surfaces scatter the light.",
          { examples: ["You can see your face in a mirror or in still water, but not in rippling water."] },
          { h: "The image in a plane mirror", blocks: [
            "A **plane mirror** is a flat mirror. Its image is:",
            { list: [
              "**upright (erect)** and the **same size** as the object,",
              "as far **behind** the mirror as the object is in front of it,",
              "**virtual**: it cannot be caught on a screen,",
              "**laterally inverted**: left and right are swapped.",
            ] },
            { examples: [
              "Raise your right hand in front of a mirror, and your image raises its left hand.",
              "AMBULANCE is written back-to-front on the front of an ambulance, so drivers ahead read it correctly in their mirrors.",
              "Stand 1 m in front of a mirror, and your image is 1 m behind it, which is 2 m from you.",
            ] },
          ] },
          { h: "Uses of mirrors", blocks: [
            { list: [
              "**Periscope:** two plane mirrors let you see over an obstacle, as in a submarine.",
              "**Kaleidoscope:** mirrors set at an angle make repeating coloured patterns.",
              "**Concave mirror** (curved inwards, like the inside of a spoon): gives an enlarged image up close, so dentists use it.",
              "**Convex mirror** (bulging outwards): gives a smaller image but a wider view, so vehicles use it as a rear-view mirror.",
            ] },
          ] },
        ] },
        { h: "Refraction and dispersion", blocks: [
          "**Refraction** is the bending of light when it passes from one transparent material into another, such as from water into air.",
          { examples: [
            "A pencil dipped in water looks bent at the surface.",
            "A swimming pool looks shallower than it really is.",
          ] },
          "**Dispersion** is the splitting of white light into seven colours. A glass prism does this.",
          { key: "VIBGYOR: Violet, Indigo, Blue, Green, Yellow, Orange, Red" },
          { examples: ["A rainbow forms when raindrops refract, reflect and disperse sunlight. Red is on the outer (top) edge and violet on the inner edge."] },
        ] },
      ],
      misconceptions: [
        ["The Moon makes its own light.", "The Moon is non-luminous; it reflects sunlight."],
        ["A red ball casts a red shadow.", "A shadow is dark whatever the object's colour, because it is just where light is blocked."],
        ["A plane mirror turns your image upside down.", "A plane mirror only swaps left and right. A pinhole camera is what turns images upside down."],
        ["Reflection and refraction are the same thing.", "Reflection is light bouncing back; refraction is light bending as it enters a new material."],
        ["A mirror image can be caught on a screen.", "A plane mirror's image is virtual. Only a real image, like a pinhole camera's, appears on a screen."],
      ],
      revision: [
        ["Luminous", "Gives out its own light."],
        ["Opaque", "Lets no light through, and forms dark shadows."],
        ["Translucent", "Lets some light through, so things look blurred."],
        ["Shadow", "A dark area where an opaque object blocks light."],
        ["Lateral inversion", "Left and right swapped in a mirror image."],
        ["Virtual image", "An image that cannot be caught on a screen."],
        ["Refraction", "Bending of light as it passes into a new material."],
        ["Dispersion", "Splitting of white light into seven colours."],
      ],
      questions: [
        ["Why can't we see anything in a completely dark room?", "Seeing needs light from objects to enter our eyes, and there is none."],
        ["Classify clear glass, butter paper and wood.", "Transparent, translucent and opaque."],
        ["What three things are needed to form a shadow?", "A light source, an opaque object and a screen or surface."],
        ["Why is the image in a pinhole camera upside down?", "Light travels in straight lines, so rays from the top of the object reach the bottom of the screen, and rays from the bottom reach the top."],
        ["Why is AMBULANCE written back-to-front on ambulances?", "A mirror swaps left and right, so drivers ahead read it correctly in their mirrors."],
        ["Why do vehicles use convex mirrors as rear-view mirrors?", "They give a wider view of the road behind."],
        ["Why does a pencil in water look bent?", "Light from the pencil bends (refracts) as it passes from water into air."],
      ],
      takeaway: "Light travels in straight lines: blocked, it makes shadows; bounced back, it makes reflections; bent, it makes refraction and rainbows.",
    },

    /* ---------------------------------------------------------- 3 */
    3: {
      topic: "Electricity & Circuits",
      title: "Electricity and Circuits – making current flow",
      sections: [
        { h: "The electric cell", blocks: [
          "An **electric cell** is a source of electricity. It changes stored **chemical energy** into **electrical energy**.",
          "Every cell has two **terminals**:",
          { list: [
            "**Positive (+):** the raised metal cap.",
            "**Negative (–):** the flat metal base.",
          ] },
          "Two or more cells joined together make a **battery**. The positive terminal of one cell touches the negative terminal of the next.",
          { examples: [
            "A torch, a TV remote and a wall clock all run on cells.",
            "A torch with two cells usually gives a brighter light than one with a single cell.",
          ] },
          { remember: "When its chemicals are used up, a cell is “dead”. Ordinary dry cells are replaced; rechargeable cells, like a phone's, can be charged again." },
        ] },
        { h: "The electric bulb", blocks: [
          "Inside a bulb is a thin coiled wire called the **filament**. When current flows through it, the filament becomes so hot that it **glows** and gives light.",
          "A bulb has two terminals, connected to the two ends of the filament.",
          { key: "Cell: chemical energy → electrical energy  ·  Bulb: electrical energy → light (and heat)" },
          { examples: ["If the filament breaks, the bulb is “fused” and will not glow, because the path for the current is broken inside it."] },
        ] },
        { h: "The electric circuit", blocks: [
          "An **electric circuit** is a complete, closed path along which current flows: from one terminal of the cell, through the wires and the device, and back to the other terminal.",
          { list: [
            "**Closed circuit:** no gaps, so current flows and the bulb glows.",
            "**Open circuit:** a gap somewhere, so no current flows.",
          ] },
          { examples: [
            "A loose wire, a broken filament or a switch turned OFF all make an open circuit.",
            "If two bulbs are joined one after the other in a single loop and one fuses, the other goes out too.",
          ] },
          { h: "The switch", blocks: [
            "A **switch** opens or closes a circuit. ON closes the circuit; OFF opens it.",
            { examples: ["The light switch on your wall, or the slide switch on a torch."] },
          ] },
          { h: "Circuit diagrams", blocks: [
            "Circuits are drawn with standard symbols:",
            { list: [
              "**Cell:** a long thin line (+) beside a short thick line (–).",
              "**Bulb:** a circle with a cross inside it.",
              "**Switch:** a break in the line with a small lever.",
            ] },
          ] },
        ] },
        { h: "Conductors and insulators", blocks: [
          "**Conductors** are materials that let electric current pass through them easily. Most **metals** are good conductors.",
          { examples: ["Copper, aluminium, iron and silver."] },
          "**Insulators** are materials that do not let current pass through them.",
          { examples: ["Plastic, rubber, dry wood, glass and cotton thread."] },
          { h: "Testing a material", blocks: [
            "Make a **tester** with a cell, a bulb and wires, leaving a gap. Place the material across the gap:",
            { list: [
              "**Bulb glows:** the material is a conductor.",
              "**Bulb stays off:** the material is an insulator.",
            ] },
            { examples: ["An iron nail across the gap lights the bulb; a plastic spoon does not."] },
          ] },
          { remember: "Electric wires have a **copper core** to carry the current and a **plastic covering** to stop it reaching us." },
        ] },
        { h: "Using electricity safely", blocks: [
          "Our **bodies conduct electricity**, and so does ordinary **tap water**, because of the salts dissolved in it. This is why electric shocks are dangerous.",
          { list: [
            "Never touch switches or appliances with **wet hands**.",
            "Never push **metal objects** into a socket.",
            "Use **insulated** wires, and tools with rubber or plastic handles.",
            "Never let the two wires from a cell touch directly. This **short circuit** lets a very large current flow, heats the wires and drains the cell fast.",
          ] },
        ] },
        { h: "Bulbs and LEDs", blocks: [
          "An **LED** (light-emitting diode) is a small light with no filament. Unlike a bulb, it lights only when it is connected **the right way round**. It uses little energy and stays cool.",
          { examples: ["Turn the cell round in a bulb circuit and the bulb still glows; turn it round in an LED circuit and the LED goes off."] },
        ] },
      ],
      misconceptions: [
        ["One wire is enough to light a bulb.", "Both terminals of the bulb must be joined to both terminals of the cell."],
        ["All water is an insulator.", "Tap water conducts because of its dissolved salts; only very pure distilled water is a poor conductor."],
        ["A switch makes or stores electricity.", "A switch only opens or closes the path."],
        ["Turning the cell round stops any bulb.", "An ordinary bulb still glows; only an LED depends on direction."],
        ["Thread or string can replace a wire.", "Cotton thread is an insulator, so the circuit stays open."],
      ],
      revision: [
        ["Electric cell", "Changes chemical energy into electrical energy."],
        ["Battery", "Two or more cells joined together."],
        ["Filament", "The thin wire in a bulb that glows."],
        ["Closed circuit", "A complete path, so current flows."],
        ["Open circuit", "A path with a gap, so no current flows."],
        ["Conductor", "Lets current pass, e.g. copper."],
        ["Insulator", "Does not let current pass, e.g. plastic."],
        ["Short circuit", "The two wires touch directly; a dangerous, very large current flows."],
      ],
      questions: [
        ["Which energy change takes place in a cell?", "Chemical energy to electrical energy."],
        ["Why does a fused bulb not glow?", "Its broken filament leaves a gap, so the circuit is open."],
        ["What happens to a circuit when the switch is OFF?", "It is open, so no current flows."],
        ["How would you test whether a key is a conductor?", "Put it across the gap in a tester. If the bulb glows, it conducts."],
        ["Why are wires covered in plastic?", "Plastic is an insulator, so it stops the current reaching us and prevents shocks."],
        ["Why should you never touch a switch with wet hands?", "Water conducts electricity, so current could pass through your body."],
        ["Why should a torch be switched off when it is not in use?", "So that the cells' chemical energy is not used up."],
      ],
      takeaway: "Current flows only round a closed loop. Conductors carry it; insulators block it and keep us safe.",
    },

    /* ---------------------------------------------------------- 4 */
    4: {
      topic: "Magnets & Magnetism",
      title: "Magnets and Magnetism – the pull without a touch",
      sections: [
        { h: "What is a magnet?", blocks: [
          "A **magnet** is an object that attracts certain materials, such as iron, without touching them.",
          { list: [
            "**Natural magnets** are found in nature. They are pieces of a rock called **magnetite**, or **lodestone**.",
            "**Artificial magnets** are made by people in useful shapes: **bar, horseshoe, ring, cylinder and disc** magnets.",
          ] },
          { examples: ["An old story says a shepherd called Magnes found the iron nails in his shoes sticking to a rock. The word “magnet” is said to come from his name, or from the place, Magnesia."] },
        ] },
        { h: "Magnetic and non-magnetic materials", blocks: [
          "**Magnetic materials** are attracted by a magnet: mainly **iron, nickel and cobalt**, and alloys such as **steel** that contain iron. **Non-magnetic materials** are not attracted.",
          { examples: [
            "Magnetic: iron nails, steel pins, iron filings.",
            "Non-magnetic: plastic, wood, rubber, glass and paper, and metals such as copper, aluminium, gold and silver.",
          ] },
          { remember: "Magnets do **not** attract all metals." },
        ] },
        { h: "The poles of a magnet", blocks: [
          "Every magnet has two **poles**: a **north pole (N)** and a **south pole (S)**. The magnetic force is **strongest at the poles** and weakest in the middle.",
          { examples: ["Dip a bar magnet in iron filings, and most of the filings cling to its two ends."] },
          { h: "Attraction and repulsion", blocks: [
            { list: [
              "**Like poles repel:** N pushes N away, and S pushes S away.",
              "**Unlike poles attract:** N pulls S.",
            ] },
            { examples: ["If two magnets cling tightly end to end, the touching ends are unlike poles."] },
          ] },
          { h: "Poles cannot be separated", blocks: [
            "If you break a magnet, each piece becomes a **complete smaller magnet**, with its own north and south pole. A single pole on its own does not exist.",
          ] },
        ] },
        { h: "A magnet points north–south", blocks: [
          "A bar magnet hung freely always comes to rest pointing **north–south**. The end that points north is its **north-seeking (north) pole**.",
          "This happens because the **Earth itself behaves like a giant magnet**.",
          { h: "The compass", blocks: [
            "A **compass** has a small magnetic needle balanced so it can turn freely. Its north end always points north, so it shows direction anywhere, even at night or in fog.",
            { examples: [
              "Long ago, sailors floated a piece of lodestone on wood in water as an early compass.",
              "Hikers and pilots still use compasses to find their way.",
            ] },
            { remember: "Keep a compass away from iron objects and other magnets. They pull the needle off its north–south line." },
          ] },
        ] },
        { h: "Magnetic force and the magnetic field", blocks: [
          "Magnetic force is a **non-contact force**: it acts across a gap, and it passes through thin non-magnetic materials, such as paper, cloth or plastic. It gets **weaker** as the distance increases.",
          "The space around a magnet where its force can be felt is its **magnetic field**.",
          { examples: [
            "A magnet moved under a sheet of paper can drag a paper clip across the top.",
            "Iron filings sprinkled near a magnet line up along curved **field lines**, which crowd together near the poles.",
          ] },
        ] },
        { h: "How to test for a magnet", blocks: [
          "A magnet attracts both another magnet and plain iron, so **attraction does not prove** that something is a magnet.",
          "Only a magnet can **repel** another magnet. Repulsion is the **sure test**.",
          { examples: ["Bring one pole of a magnet near each end of an unknown bar. If one end is pushed away, the bar is a magnet."] },
        ] },
        { h: "Making magnets and keeping them strong", blocks: [
          { h: "Making a magnet", blocks: [
            "Stroke an iron bar or nail many times, from one end to the other, with **one pole** of a magnet. Always stroke in the **same direction**, lifting the magnet away between strokes.",
          ] },
          { h: "Temporary and permanent magnets", blocks: [
            { list: [
              "**Soft iron** becomes a magnet near a magnet but loses its magnetism quickly when the magnet is removed. It is used in electromagnets.",
              "**Steel** keeps its magnetism, so it is used for permanent magnets and compass needles.",
            ] },
            { examples: ["Pins hanging in a chain from a magnet: each pin becomes a temporary magnet (**magnetic induction**), and the chain falls apart when the magnet is removed."] },
          ] },
          { h: "Caring for magnets", blocks: [
            { list: [
              "**Heating, hammering or dropping** a magnet weakens it.",
              "Store bar magnets **in pairs**, with unlike poles side by side and **soft-iron keepers** across the ends.",
              "Keep strong magnets away from phones, computers and bank cards.",
            ] },
          ] },
        ] },
        { h: "Magnets in daily life", blocks: [
          { examples: [
            "Fridge door seals, pencil-box lids and cupboard catches.",
            "Separating iron filings from sand.",
            "Cranes with electromagnets that lift scrap iron.",
            "Loudspeakers and electric motors.",
          ] },
        ] },
      ],
      misconceptions: [
        ["Magnets attract all metals.", "Only iron, nickel, cobalt and their alloys, such as steel, are attracted."],
        ["Attraction proves an object is a magnet.", "Plain iron is attracted too; only repulsion proves both objects are magnets."],
        ["A broken magnet has lost one of its poles.", "Each piece is a complete magnet, with a north and a south pole."],
        ["Magnetism needs contact.", "It is a non-contact force that acts across a gap, even through paper or cloth."],
        ["A magnet is strongest in the middle.", "It is strongest at its poles."],
      ],
      revision: [
        ["Magnet", "An object that attracts iron, nickel and cobalt."],
        ["Poles", "The two ends of a magnet (N and S), where its force is strongest."],
        ["Like poles", "Repel each other."],
        ["Unlike poles", "Attract each other."],
        ["Compass", "A freely turning magnetic needle that points north–south."],
        ["Magnetic field", "The space around a magnet where its force acts."],
        ["Magnetic induction", "An iron object becoming a temporary magnet near a magnet."],
        ["Keepers", "Soft-iron pieces that help stored magnets stay strong."],
      ],
      questions: [
        ["Name three magnetic metals.", "Iron, nickel and cobalt."],
        ["Where is a bar magnet's pull strongest?", "At its two poles (ends)."],
        ["What happens when two north poles are brought together?", "They repel each other."],
        ["Why does a freely hanging magnet point north–south?", "Because the Earth behaves like a giant magnet."],
        ["What is the surest test for a magnet?", "Repulsion, because only two magnets can repel each other."],
        ["What happens if you break a bar magnet in two?", "You get two smaller magnets, each with a north and a south pole."],
        ["Name two things that weaken a magnet.", "Heating it, hammering it or dropping it repeatedly."],
      ],
      takeaway: "Like poles repel, unlike poles attract, and a free magnet always points north–south. That is the idea behind the compass.",
    },

    /* ---------------------------------------------------------- 5 */
    5: {
      topic: "Heat & Temperature",
      title: "Heat and Temperature – how hot things are and how heat moves",
      sections: [
        { h: "Heat and temperature", blocks: [
          "**Temperature** is a measure of how hot or cold something is. **Heat** is a form of **energy** that flows from a hotter object to a colder one.",
          { key: "Heat flows on its own from hot → cold, until both are at the same temperature." },
          { examples: [
            "A cup of hot tea left on a table cools down, because heat flows from the tea to the cooler air and table.",
            "When you touch a hot pan, heat flows from the pan into your hand.",
          ] },
          { remember: "Touch is not reliable. A steel spoon and a wooden spoon in the same room feel different, even though they are at the same temperature." },
        ] },
        { h: "Measuring temperature", blocks: [
          "A **thermometer** measures temperature. Its liquid **expands** and rises up a thin tube when it is heated.",
          "Temperature is usually measured in **degrees Celsius (°C)**. The SI unit is the **kelvin (K)**.",
          { list: [
            "Water **freezes at 0 °C** and **boils at 100 °C**.",
            "A healthy human body is about **37 °C** (98.6 °F).",
          ] },
          { h: "Clinical thermometer", blocks: [
            "Measures **body temperature**, with a range of about **35 °C to 42 °C**. A **kink** in its tube stops the liquid from falling back, so the reading stays until you shake it down.",
          ] },
          { h: "Laboratory thermometer", blocks: [
            "Measures other temperatures. It has **no kink** and a wider range, about **–10 °C to 110 °C**, so it must be read while it is still in the substance.",
          ] },
          { h: "Reading a thermometer correctly", blocks: [
            { list: [
              "Shake a clinical thermometer down before using it.",
              "Hold it by the **stem**, not by the bulb.",
              "Keep your eye **level with the top of the liquid**.",
            ] },
          ] },
          { remember: "Digital thermometers are now preferred, because they contain no poisonous mercury." },
        ] },
        { h: "Conduction", blocks: [
          "**Conduction** is the transfer of heat through a material, mainly a solid, from the hotter part to the colder part. The material itself does not move.",
          { examples: ["A steel spoon left in hot milk becomes warm all the way up to the handle."] },
          { list: [
            "**Good conductors** let heat pass easily: metals such as copper, aluminium and iron.",
            "**Insulators** (poor conductors) do not: wood, plastic, wool, cloth and air.",
          ] },
          { examples: ["Cooking pans are made of metal, so heat reaches the food quickly, but their handles are plastic or wood, so we can hold them."] },
        ] },
        { h: "Convection", blocks: [
          "**Convection** is the transfer of heat in **liquids and gases** by the movement of the heated fluid itself. The warmed part becomes lighter and rises, and cooler fluid sinks to take its place. This loop is called a **convection current**.",
          { examples: [
            "Water heated in a pot rises from the bottom, while cooler water sinks.",
            "Ventilators are placed high on walls so that warm, used air can rise out.",
          ] },
          { h: "Sea breeze and land breeze", blocks: [
            { list: [
              "**Sea breeze (day):** land heats up faster than the sea. Warm air over the land rises, and cooler air blows in from the sea.",
              "**Land breeze (night):** land cools faster than the sea, so cooler air blows from the land to the sea.",
            ] },
          ] },
        ] },
        { h: "Radiation", blocks: [
          "**Radiation** is the transfer of heat **without any material medium**. It can even cross empty space.",
          { examples: [
            "The Sun's heat reaches the Earth through space by radiation.",
            "You feel warm sitting near a fire, even without touching it.",
          ] },
          { h: "Dark and light surfaces", blocks: [
            { list: [
              "**Dark, dull surfaces** absorb heat radiation well.",
              "**Light, shiny surfaces** reflect most of it.",
            ] },
            { examples: [
              "We wear light-coloured clothes in summer and dark clothes in winter.",
              "The inside of a solar cooker is painted black to absorb the Sun's heat.",
            ] },
          ] },
        ] },
        { h: "Expansion", blocks: [
          "Most solids, liquids and gases **expand** (get bigger) when they are heated and **contract** (get smaller) when they are cooled.",
          { examples: [
            "Railway lines have small gaps, so the rails can expand on hot days.",
            "Overhead wires sag in summer and become tight in winter.",
          ] },
        ] },
        { h: "Keeping warm", blocks: [
          "Trapped air is a poor conductor of heat, so it slows down heat loss.",
          { examples: [
            "**Wool** traps air in its fibres, so woollen clothes keep us warm.",
            "**Two thin sweaters** are warmer than one thick one, because of the layer of air between them.",
            "Birds **fluff up their feathers** in winter to trap more air.",
            "A **vacuum flask** stops conduction and convection with the empty gap between its double walls, and its shiny walls reduce radiation.",
          ] },
        ] },
      ],
      misconceptions: [
        ["Heat and temperature mean the same thing.", "Temperature measures how hot something is; heat is energy that flows."],
        ["Cold flows into a drink to cool it.", "Heat flows out of the warmer thing; there is no flow of “cold”."],
        ["A sweater produces heat.", "It only slows down the heat leaving your body."],
        ["Metal objects are colder than wooden ones in the same room.", "Both are at room temperature; metal just conducts heat away from your hand faster."],
        ["Radiation needs air to travel.", "Radiation needs no medium at all. That is how the Sun's heat crosses space."],
      ],
      revision: [
        ["Temperature", "How hot or cold something is, measured in °C."],
        ["Heat", "Energy that flows from hotter to colder objects."],
        ["Clinical thermometer", "Measures body temperature (35–42 °C) and has a kink."],
        ["Conduction", "Heat passing through a solid without the solid moving."],
        ["Convection", "Heat carried by moving liquid or gas."],
        ["Radiation", "Heat transfer with no medium needed."],
        ["Insulator", "A poor conductor of heat, e.g. wood, wool, air."],
        ["Expansion", "Getting bigger when heated."],
      ],
      questions: [
        ["What is normal human body temperature?", "About 37 °C."],
        ["Why does a clinical thermometer have a kink?", "To stop the liquid falling back, so the reading can be taken after the thermometer is removed."],
        ["Why are pan handles made of plastic or wood?", "They are insulators, so they stay cool enough to hold."],
        ["How does the Sun's heat reach the Earth?", "By radiation, which needs no medium."],
        ["Why are ventilators placed near the ceiling?", "Warm air rises by convection and escapes through them."],
        ["Why are gaps left between railway rails?", "So the rails have room to expand on hot days."],
        ["Why do we wear light-coloured clothes in summer?", "Light colours reflect most of the Sun's heat."],
        ["Why are two thin sweaters warmer than one thick one?", "The air trapped between them is an extra insulating layer."],
      ],
      takeaway: "Heat always flows from hot to cold: by conduction in solids, by convection in liquids and gases, and by radiation through empty space.",
    },

    /* ---------------------------------------------------------- 6 */
    6: {
      topic: "Electric Current & its Effects",
      title: "Electric Current and its Effects – heat, magnetism and chemistry",
      sections: [
        { h: "Three effects of electric current", blocks: [
          "When current flows, it can produce three effects:",
          { list: [
            "**Heating effect:** a wire carrying current gets hot.",
            "**Magnetic effect:** a wire carrying current behaves like a magnet.",
            "**Chemical effect:** current passing through some liquids causes chemical changes.",
          ] },
          { examples: ["A heater (heating effect), an electric bell (magnetic effect) and electroplating (chemical effect)."] },
        ] },
        { h: "The heating effect", blocks: [
          "Every wire carrying current gets warm. How much heat is produced depends on the **material, length and thickness** of the wire and on the **amount of current**.",
          { examples: ["Electric irons, room heaters, toasters, kettles and geysers all use the heating effect."] },
          { h: "Heating elements", blocks: [
            "The hot coil in a heater is made of **nichrome**, an alloy of nickel and chromium. It gets very hot without melting.",
            { examples: ["The nichrome coil of a heater glows red-hot, while the copper wires leading to it stay fairly cool, because copper lets current through very easily."] },
          ] },
          { h: "The filament bulb", blocks: [
            "A bulb's filament is made of **tungsten**, which can glow white-hot without melting. The glass bulb holds an unreactive gas, or no air at all, so the filament does not burn away.",
          ] },
        ] },
        { h: "Safety: fuses and MCBs", blocks: [
          "Too much current makes wires dangerously hot. This happens with **overloading** (too many appliances on one circuit) or a **short circuit** (the live and neutral wires touching).",
          { h: "Electric fuse", blocks: [
            "A **fuse** is a short wire with a **low melting point**, connected so that all the current passes through it. If the current becomes too large, the wire **melts and breaks the circuit** before the wiring overheats.",
            { remember: "Replace a blown fuse with one of the **correct rating**, never with a thicker wire." },
          ] },
          { h: "MCB", blocks: [
            "An **MCB (miniature circuit breaker)** does the same job, but it simply **switches off**. Once the fault is fixed, it can be switched back on.",
          ] },
        ] },
        { h: "The magnetic effect", blocks: [
          "In 1820, **Hans Christian Oersted** noticed that a compass needle moved when current flowed through a nearby wire. This showed that **electric current produces a magnetic effect**.",
          { h: "Electromagnets", blocks: [
            "An **electromagnet** is a coil of insulated wire wound round a **soft-iron core**. It is a magnet **only while current flows**.",
            "You can make it stronger by:",
            { list: [
              "using **more turns** of wire in the coil,",
              "passing a **larger current**.",
            ] },
            { examples: [
              "Cranes that lift scrap iron: switched on to pick it up, switched off to drop it.",
              "Electric bells, loudspeakers and electric motors.",
              "Doctors use small electromagnets to remove iron splinters from the eye.",
            ] },
          ] },
          { h: "How an electric bell works", blocks: [
            "When current flows, the electromagnet pulls an iron strip (the **armature**), and the hammer strikes the gong. This breaks the circuit, so the magnet lets go. The circuit closes again, and the cycle repeats very quickly.",
          ] },
        ] },
        { h: "The chemical effect", blocks: [
          "Some liquids **conduct electricity**; others do not:",
          { list: [
            "**Conducting liquids:** salt water, lemon juice, vinegar, tap water.",
            "**Poor conductors:** distilled water, oil, kerosene.",
          ] },
          "When current passes through a conducting liquid, it can cause **chemical changes**: gas bubbles at the metal rods (**electrodes**), a layer of metal on one rod, or a change of colour.",
          { examples: ["Passing current through acidified water produces bubbles of hydrogen and oxygen."] },
          { remember: "An **LED** is better than a bulb for testing liquids, because it glows even with a very weak current." },
        ] },
        { h: "Electroplating", blocks: [
          "**Electroplating** is coating an object with a thin layer of another metal using electricity. The object to be coated is connected to the **negative terminal**.",
          { examples: [
            "**Chromium** on taps and bicycle parts makes them shiny and scratch-resistant.",
            "**Tin** on iron food cans stops rust and keeps the food safe.",
            "**Gold or silver** on cheaper jewellery gives the look of a precious metal at lower cost.",
            "**Zinc** on iron (**galvanising**) protects roofs and buckets from rust.",
          ] },
        ] },
      ],
      misconceptions: [
        ["A thicker fuse wire is safer.", "It may not melt during a fault, so the wiring can overheat and catch fire."],
        ["An electromagnet stays magnetic after it is switched off.", "It is magnetic only while current flows."],
        ["All water conducts electricity well.", "Distilled water is a poor conductor; the salts in tap water make it conduct."],
        ["Household copper wires get hot like a heater coil.", "Copper lets current pass easily, so it stays cool; nichrome is chosen because it gets hot."],
        ["An MCB must be replaced after it trips.", "An MCB is simply switched back on; a fuse must be replaced."],
      ],
      revision: [
        ["Heating effect", "Current makes a wire hot."],
        ["Nichrome", "An alloy used in heater coils; gets hot without melting."],
        ["Fuse", "A low-melting wire that breaks the circuit when the current is too high."],
        ["MCB", "A switch that turns off automatically when the current is too high."],
        ["Electromagnet", "A coil on a soft-iron core, magnetic only while current flows."],
        ["Electrode", "A metal rod dipped in a liquid in a circuit."],
        ["Electroplating", "Coating an object with a thin metal layer using current."],
        ["Galvanising", "Coating iron with zinc to stop rust."],
      ],
      questions: [
        ["Name the three effects of electric current.", "The heating, magnetic and chemical effects."],
        ["Why is nichrome used in heaters?", "It gets very hot without melting."],
        ["How does a fuse protect a house?", "Its low-melting wire melts when the current is too high, which breaks the circuit."],
        ["Who discovered the magnetic effect of current?", "Hans Christian Oersted, in 1820."],
        ["Give two ways to make an electromagnet stronger.", "Use more turns of wire, and pass a bigger current."],
        ["Why does a scrap-yard crane use an electromagnet?", "It can be switched off to drop the load."],
        ["In electroplating, which terminal is the object connected to?", "The negative terminal."],
        ["Why are food cans coated with tin?", "Tin stops the iron rusting and keeps food safe."],
      ],
      takeaway: "One current, three effects: heat for heaters and fuses, magnetism for bells and cranes, and chemistry for electroplating.",
    },

    /* ---------------------------------------------------------- 7 */
    7: {
      topic: "Force & Pressure",
      title: "Force and Pressure – pushes, pulls and how hard they press",
      sections: [
        { h: "What is a force?", blocks: [
          "A **force** is a **push or a pull** on an object.",
          { examples: [
            "Push: kicking a football, or closing a door.",
            "Pull: opening a drawer, or drawing water from a well.",
          ] },
          "Force is measured in **newtons (N)**. One newton is roughly the force needed to hold up a 100-gram object.",
          { remember: "A force has a **size (magnitude)** and a **direction**." },
        ] },
        { h: "What can a force do?", blocks: [
          { list: [
            "**Start or stop motion:** kicking a ball, or catching it.",
            "**Change speed:** pedalling harder makes a bicycle go faster.",
            "**Change direction:** a batter hitting a ball.",
            "**Change shape:** pressing dough, or squeezing a sponge.",
          ] },
        ] },
        { h: "Combining forces", blocks: [
          { list: [
            "**Same direction:** forces **add up**. 8 N + 5 N = 13 N.",
            "**Opposite directions:** forces **subtract**, and the object moves towards the larger force. 12 N − 7 N = 5 N.",
          ] },
          { h: "Balanced and unbalanced forces", blocks: [
            { list: [
              "**Balanced forces** are equal and opposite. The net force is zero, so the motion does not change.",
              "**Unbalanced forces** leave a net force that is not zero, so they change the motion.",
            ] },
            { examples: ["In a tug-of-war where both teams pull equally, the rope does not move: the forces are balanced. When one team pulls harder, the rope moves towards them."] },
          ] },
        ] },
        { h: "Contact and non-contact forces", blocks: [
          "**Contact forces** act only when the objects touch:",
          { list: [
            "**Muscular force:** from our muscles, as in lifting or pushing.",
            "**Friction:** between surfaces, opposing motion.",
          ] },
          "**Non-contact forces** act across a gap, without touching:",
          { list: [
            "**Gravity:** pulls everything towards the Earth and gives objects their **weight**. A ball thrown up comes back down.",
            "**Magnetic force:** a magnet pulls iron from a distance.",
            "**Electrostatic force:** a comb rubbed on dry hair picks up bits of paper.",
          ] },
        ] },
        { h: "Pressure", blocks: [
          "**Pressure** is the force acting on each unit of area.",
          { key: "Pressure = Force ÷ Area" },
          "The same force on a **smaller area** gives **more pressure**; on a **larger area**, it gives less pressure.",
          { h: "Using high pressure (small area)", blocks: [
            { examples: [
              "Knives have sharp edges, so they cut easily.",
              "Nails, needles and pins have pointed tips, so they pierce easily.",
            ] },
          ] },
          { h: "Using low pressure (large area)", blocks: [
            { examples: [
              "School bags have broad straps, so they don't dig into the shoulders.",
              "Camels have wide feet, so they don't sink into sand.",
              "Trucks have many wide tyres, and tall buildings have wide foundations.",
              "Skis spread a skier's weight, so the skier glides over the snow.",
            ] },
          ] },
        ] },
        { h: "Pressure in liquids and gases", blocks: [
          "Liquids press on the **bottom and sides** of their container, in all directions. The pressure **increases with depth**.",
          { examples: [
            "Dams are built thicker at the bottom, where the water pressure is greatest.",
            "Water spurts farther from a hole near the bottom of a bottle than from a hole near the top.",
          ] },
          "Gases also press on the walls of their container, in all directions.",
          { examples: ["The air inside keeps a tyre or a balloon firm."] },
        ] },
        { h: "Atmospheric pressure", blocks: [
          "**Atmospheric pressure** is the pressure of the air around the Earth, pressing on everything. It is measured with a **barometer**.",
          "We are not crushed by it, because the fluids inside our bodies press outwards just as hard.",
          { examples: [
            "Sipping through a straw lowers the pressure inside it, and atmospheric pressure pushes the drink up.",
            "A rubber sucker sticks to a wall because the air outside presses it in place.",
            "Atmospheric pressure is lower high up on mountains, which is why sealed packets puff up there.",
          ] },
        ] },
      ],
      misconceptions: [
        ["A bigger force always means a bigger pressure.", "Area matters too: the same force on a smaller area gives more pressure."],
        ["Forces of 12 N and 7 N always add up to 19 N.", "Only if they act in the same direction. In opposite directions, they give 5 N."],
        ["Balanced forces means no forces are acting.", "The forces are there; they just cancel each other out."],
        ["Water pressure depends on the shape or width of the container.", "It depends on depth (and on the liquid), not on the shape."],
        ["Gravity needs contact.", "Gravity is a non-contact force."],
      ],
      revision: [
        ["Force", "A push or a pull."],
        ["Newton (N)", "The SI unit of force."],
        ["Balanced forces", "Equal and opposite forces; the net force is zero."],
        ["Contact force", "Needs touching, e.g. muscular force and friction."],
        ["Non-contact force", "Acts across a gap, e.g. gravity and magnetism."],
        ["Weight", "The pull of gravity on an object."],
        ["Pressure", "Force ÷ area."],
        ["Atmospheric pressure", "The pressure of the air around us."],
      ],
      questions: [
        ["Give one example of a push and one of a pull.", "Push: closing a door. Pull: opening a drawer."],
        ["Forces of 12 N and 7 N act in opposite directions. What is the net force?", "5 N, in the direction of the 12 N force."],
        ["Why does the rope not move in an even tug-of-war?", "The forces are balanced, so the net force is zero."],
        ["Name three non-contact forces.", "Gravity, magnetic force and electrostatic force."],
        ["Why are knives sharp?", "A small edge area gives high pressure, so they cut easily."],
        ["Why do school bags have broad straps?", "A larger area reduces the pressure on the shoulders."],
        ["Why are dams thicker at the bottom?", "Water pressure increases with depth."],
        ["How does a drinking straw work?", "Sucking lowers the pressure inside it, and atmospheric pressure pushes the drink up."],
      ],
      takeaway: "A force is a push or a pull; pressure is how concentrated that force is. Small area, big pressure; big area, small pressure.",
    },

    /* ---------------------------------------------------------- 8 */
    8: {
      topic: "Friction",
      title: "Friction – a force that opposes motion",
      sections: [
        { h: "What is friction?", blocks: [
          "**Friction** is a force that opposes the motion, or attempted motion, of one surface over another. It always acts **opposite** to the direction of motion.",
          { examples: [
            "A rolling ball slows down and eventually stops because of friction.",
            "We can walk without slipping because of friction between our feet and the ground.",
            "Bicycle brakes use friction to slow down and stop the bicycle.",
          ] },
        ] },
        { h: "What causes friction?", blocks: [
          "Even surfaces that look smooth have tiny **bumps and hollows**. When two surfaces touch, these irregularities catch on each other and resist sliding. This resistance is friction.",
          "Friction depends mainly on:",
          { list: [
            "**The nature of the surfaces:** rough surfaces have more friction than smooth ones.",
            "**How hard the surfaces press together:** the harder they press, the more friction there is.",
          ] },
          { examples: ["A heavy box is harder to push than a light one, because it presses harder against the floor."] },
          { remember: "Friction is a **contact force**: it acts only between surfaces that are touching." },
        ] },
        { h: "Types of friction", blocks: [
          "There are three main types of friction between solid surfaces.",
          { h: "A. Static friction", blocks: [
            "Acts when an object is **at rest** and a force tries to move it.",
            { examples: ["You push a heavy cupboard, but it does not move at first. Static friction is holding it in place."] },
          ] },
          { h: "B. Sliding friction", blocks: [
            "Acts when one surface **slides** over another.",
            { examples: ["A book pushed across a table slides for a while, then stops."] },
          ] },
          { h: "C. Rolling friction", blocks: [
            "Acts when an object **rolls** over a surface.",
            { examples: ["A ball rolling on the ground slowly comes to rest."] },
          ] },
          { h: "Comparing the three", blocks: [
            "For the same object and surface:",
            { key: "Static friction  >  Sliding friction  >  Rolling friction" },
            "This explains why:",
            { list: [
              "it takes an extra push to **start** moving a heavy cupboard,",
              "sliding something is harder than rolling it,",
              "**wheels** make heavy loads much easier to move.",
            ] },
          ] },
        ] },
        { h: "Fluid friction (drag)", blocks: [
          "Liquids and gases also resist objects moving through them. This is called **fluid friction**, or **drag**. It increases as the object moves **faster**.",
          { examples: [
            "Water resists a swimming fish.",
            "Air resists a moving car or aeroplane.",
          ] },
          { h: "Streamlining", blocks: [
            "**Streamlining** means giving an object a smooth, pointed shape so that it moves through air or water with less drag.",
            { examples: ["Fish, birds, cars, boats and aeroplanes all have streamlined shapes."] },
          ] },
        ] },
        { h: "Friction: a necessary evil", blocks: [
          "Friction is called a **necessary evil** because it is both useful and harmful.",
          { h: "Advantages", blocks: [
            { list: [
              "**Walking:** friction between our feet and the ground stops us slipping.",
              "**Writing:** friction lets a pencil leave marks on paper.",
              "**Braking:** friction slows down bicycles and cars.",
              "**Holding:** friction lets us grip objects without dropping them.",
              "**Lighting a match:** friction heats the match head when it is struck.",
            ] },
          ] },
          { h: "Disadvantages", blocks: [
            { list: [
              "It **wears out** tyres, shoe soles and machine parts.",
              "It produces **unwanted heat** in machines.",
              "It **wastes energy**, so machines need more effort to run.",
            ] },
          ] },
        ] },
        { h: "How can we increase friction?", blocks: [
          "We increase friction when we need a **better grip** or want to stop slipping.",
          { list: [
            "**Tyre treads:** grooves grip the road, even when it is wet.",
            "**Grooved shoe soles:** help to stop slipping.",
            "**Spiked sports shoes:** grip grass and running tracks.",
            "**Chalk on gymnasts' hands:** absorbs sweat and improves grip.",
            "**Sand on icy roads:** roughens the slippery surface.",
          ] },
        ] },
        { h: "How can we reduce friction?", blocks: [
          "We reduce friction when we want things to move **easily** or machines to run smoothly.",
          { list: [
            "**Lubricants:** oil and grease form a slippery layer between surfaces.",
            "**Ball bearings:** turn sliding into rolling, as in cycle wheels and ceiling fans.",
            "**Powder on a carrom board:** lets the coins slide easily.",
            "**Streamlined shapes:** reduce drag in air and water.",
          ] },
        ] },
        { h: "Friction produces heat", blocks: [
          "When two surfaces rub together, some energy is turned into **heat**.",
          { examples: [
            "Rubbing your hands together warms them.",
            "Striking a match produces enough heat to light it.",
            "Machine parts become hot as they run.",
          ] },
        ] },
      ],
      misconceptions: [
        ["Friction is always harmful.", "Friction is essential for walking, writing and braking."],
        ["Smooth surfaces have no friction.", "Every real surface has some friction, even if it looks smooth."],
        ["Rolling friction is greater than sliding friction.", "Rolling friction is much smaller, which is why wheels help."],
        ["The colour of a surface affects friction.", "What matters is the material, how rough it is and how hard the surfaces press together."],
        ["Friction acts only on moving objects.", "Static friction acts even on an object at rest that you are trying to move."],
      ],
      revision: [
        ["Friction", "A force that opposes motion between surfaces in contact."],
        ["Static friction", "Acts on an object at rest that is being pushed."],
        ["Sliding friction", "Acts when one surface slides over another."],
        ["Rolling friction", "Acts when an object rolls; the smallest of the three."],
        ["Drag", "Fluid friction in liquids and gases."],
        ["Streamlining", "A smooth, pointed shape that reduces drag."],
        ["Lubricant", "Oil, grease or graphite that reduces friction."],
        ["Ball bearings", "Steel balls that turn sliding into rolling."],
      ],
      questions: [
        ["Why does a rolling ball eventually stop?", "Rolling friction with the ground, and air resistance, oppose its motion."],
        ["Why is it hard to start moving a heavy cupboard?", "Static friction, the largest kind, must be overcome first."],
        ["Name the three types of friction between solid surfaces.", "Static, sliding and rolling friction."],
        ["Why do tyres have treads?", "To increase friction and grip on the road."],
        ["How do ball bearings reduce friction?", "They change sliding friction into much smaller rolling friction."],
        ["Why are fish and aeroplanes streamlined?", "Their shape reduces drag in water or air."],
        ["Give two examples of friction producing heat.", "Rubbing your hands together, and striking a match."],
        ["Why is friction called a necessary evil?", "We need it for walking, writing and braking, but it also wastes energy and wears things out."],
      ],
      takeaway: "Friction can be useful or harmful. We increase it when we need grip, and reduce it when we need smooth movement.",
    },

    /* ---------------------------------------------------------- 9 */
    9: {
      topic: "Sound",
      title: "Sound – vibrations we can hear",
      sections: [
        { h: "How is sound produced?", blocks: [
          "Sound is produced by **vibrating** objects. A **vibration** is a rapid to-and-fro movement. When the vibration stops, the sound stops.",
          { examples: [
            "Pluck a stretched rubber band, and you can see it blur as it vibrates.",
            "Touch a ringing bell, and the sound stops.",
            "A vibrating tuning fork dipped in water makes the water splash.",
          ] },
          { h: "What vibrates in different sources", blocks: [
            { list: [
              "**Strings:** guitar, sitar, violin.",
              "**A stretched skin (membrane):** tabla, dholak, drum.",
              "**An air column:** flute, whistle.",
              "**Wings:** buzzing bees and mosquitoes.",
            ] },
          ] },
          { h: "The human voice", blocks: [
            "We speak using the **voice box (larynx)** in our throat. Air from the lungs makes two **vocal cords** vibrate.",
            { examples: ["Men usually have longer, thicker vocal cords, which vibrate more slowly and give a deeper voice."] },
          ] },
        ] },
        { h: "Sound needs a medium", blocks: [
          "Sound travels as a **wave**: each vibrating particle passes the vibration on to the next. So sound needs a **medium**, which can be a solid, a liquid or a gas.",
          "Sound **cannot travel through a vacuum** (empty space).",
          { examples: ["Astronauts in space, or on the Moon, where there is no air, talk to each other by radio."] },
          { h: "Speed of sound", blocks: [
            { key: "Fastest in solids  >  liquids  >  slowest in gases" },
            { examples: [
              "Put your ear to a long table and ask a friend to tap the far end. The sound is louder and clearer through the wood.",
              "We see lightning before we hear thunder, because light travels much faster than sound.",
            ] },
          ] },
        ] },
        { h: "How we hear", blocks: [
          "Sound enters the ear and makes the **eardrum**, a thin stretched membrane, vibrate. These vibrations are passed on, and signals are sent to the brain.",
        ] },
        { h: "Echo", blocks: [
          "An **echo** is a sound heard again after it **reflects** off a hard surface, such as a cliff or a large wall.",
          { examples: ["Shouting in a large empty hall, or across a valley, gives an echo."] },
          "Soft materials **absorb** sound instead of reflecting it.",
          { examples: [
            "Curtains, carpets and foam are used in cinemas and studios to cut down echoes.",
            "A hall full of people echoes much less than an empty one.",
          ] },
        ] },
        { h: "Frequency and pitch", blocks: [
          "**Frequency** is the number of vibrations per second. It is measured in **hertz (Hz)**.",
          "**Pitch** is how shrill or deep a sound is. It depends on frequency:",
          { list: [
            "**High frequency → high pitch** (shrill): a whistle, a child's voice.",
            "**Low frequency → low pitch** (deep): a big drum, a man's voice.",
          ] },
        ] },
        { h: "Amplitude and loudness", blocks: [
          "**Amplitude** is how far a vibrating object moves from its resting position. **Loudness** depends on amplitude: the bigger the vibration, the louder the sound.",
          "Loudness is measured in **decibels (dB)**.",
          { examples: [
            "Hit a drum harder, and it sounds louder, but not higher.",
            "A whisper is about 30 dB, and normal talk about 60 dB.",
          ] },
          { key: "Pitch depends on frequency  ·  Loudness depends on amplitude" },
        ] },
        { h: "Sounds we can and cannot hear", blocks: [
          "Humans can hear sounds from about **20 Hz to 20,000 Hz**. This is the **audible range**.",
          { list: [
            "**Ultrasound:** above 20,000 Hz. Bats use it to find insects in the dark, and doctors use it to see inside the body and check on unborn babies.",
            "**Infrasound:** below 20 Hz. Elephants and whales can use it.",
          ] },
          { examples: ["A dog whistle makes a sound too high for people to hear, but dogs hear it."] },
        ] },
        { h: "Noise and noise pollution", blocks: [
          "**Noise** is unwanted, unpleasant sound. **Noise pollution** is too much noise in our surroundings.",
          "Long exposure to very loud sound, above about **80 dB**, can damage hearing and cause stress, headaches and poor sleep.",
          "Ways to reduce noise pollution:",
          { list: [
            "**Silencers** on vehicles and machines.",
            "**Trees** along roads to absorb sound.",
            "**Ear protection** for people who work in noisy places.",
            "Using horns and loudspeakers only when needed.",
          ] },
        ] },
      ],
      misconceptions: [
        ["Pitch and loudness are the same thing.", "Pitch depends on frequency; loudness depends on amplitude."],
        ["Sound travels fastest in air.", "It is fastest in solids and slowest in gases."],
        ["The hollow body of a guitar makes the sound.", "The strings make the sound; the body makes it louder."],
        ["You could hear an explosion in space.", "Space is a vacuum, so there is nothing to carry the sound."],
        ["Hitting a drum harder raises its pitch.", "It makes the sound louder; the pitch stays about the same."],
      ],
      revision: [
        ["Vibration", "A rapid to-and-fro movement that produces sound."],
        ["Medium", "A solid, liquid or gas that carries sound."],
        ["Echo", "A sound reflected back from a hard surface."],
        ["Frequency", "Vibrations per second, measured in hertz (Hz)."],
        ["Pitch", "How shrill or deep a sound is; set by frequency."],
        ["Amplitude", "The size of a vibration; sets loudness."],
        ["Audible range", "About 20 Hz to 20,000 Hz for humans."],
        ["Ultrasound", "Sound above 20,000 Hz, too high for us to hear."],
      ],
      questions: [
        ["What must happen for sound to be produced?", "Something must vibrate."],
        ["What vibrates in a flute?", "The air column inside it."],
        ["Why can't astronauts hear each other directly in space?", "Space is a vacuum, and sound needs a medium to travel."],
        ["In which medium does sound travel fastest?", "In solids."],
        ["Why do we see lightning before we hear thunder?", "Light travels much faster than sound."],
        ["What decides the pitch of a sound?", "Its frequency."],
        ["What happens to the sound when a drum is hit harder?", "The amplitude increases, so the sound becomes louder."],
        ["What is the audible range for humans?", "About 20 Hz to 20,000 Hz."],
      ],
      takeaway: "Every sound starts as a vibration and needs a medium to travel. Frequency sets the pitch; amplitude sets the loudness.",
    },

    /* ---------------------------------------------------------- 10 */
    10: {
      topic: "Natural Phenomena & Solar System",
      title: "Natural Phenomena and the Solar System – lightning, earthquakes and space",
      sections: [
        { h: "Static electricity", blocks: [
          "Rubbing two objects together **moves electric charge** from one to the other, so both become **charged**. Charges that stay on a surface are called **static charges**.",
          { examples: [
            "A plastic comb rubbed on dry hair picks up small bits of paper.",
            "A balloon rubbed on a sweater sticks to a wall.",
          ] },
          { h: "Two kinds of charge", blocks: [
            "There are two kinds of charge: **positive (+)** and **negative (–)**.",
            { list: [
              "**Like charges repel.**",
              "**Unlike charges attract.**",
            ] },
            "This is the same pattern as the poles of a magnet.",
          ] },
          { remember: "Rubbing does not create charge; it only **transfers** it. A glass rod rubbed with silk becomes positive, because the silk takes some negative charge from it." },
          { h: "The electroscope", blocks: [
            "An **electroscope** shows whether an object is charged. Its two thin metal strips **spread apart** when a charged object touches it.",
          ] },
        ] },
        { h: "Lightning", blocks: [
          "In a thunderstorm, large charges build up in the clouds. When the charge becomes large enough, it jumps to another cloud or to the ground as a giant spark. This is **lightning**.",
          { examples: ["Around 1752, Benjamin Franklin showed that lightning is electrical."] },
          { h: "Lightning conductors and earthing", blocks: [
            "A **lightning conductor** is a metal rod on top of a tall building, joined to the ground by a thick wire. It carries the lightning's charge **safely into the Earth**.",
            "Passing charge into the Earth is called **earthing**. Electrical appliances are earthed for the same reason.",
          ] },
          { h: "Staying safe in a thunderstorm", blocks: [
            { list: [
              "Stay **inside a building** or a closed car.",
              "Never shelter under a **tall, lonely tree**, and keep away from poles, water and metal objects.",
              "If you are caught in the open, **crouch low** with your feet together. Do not lie flat.",
            ] },
          ] },
        ] },
        { h: "Earthquakes", blocks: [
          "An **earthquake** is a sudden shaking of the Earth's surface.",
          "The Earth's outer layer is broken into huge slabs called **tectonic plates**, which move very slowly. When they suddenly slip or push against each other, the ground shakes.",
          { list: [
            "A **seismograph** records the shaking.",
            "The **Richter scale** describes how strong it is. Earthquakes above about 7 are very destructive.",
          ] },
          { h: "Staying safe in an earthquake", blocks: [
            { list: [
              "**Indoors:** drop, take cover under a strong table and hold on. Keep away from windows and heavy furniture, and don't use lifts.",
              "**Outdoors:** move to open ground, away from buildings, trees and power lines.",
            ] },
            { examples: ["In earthquake zones, buildings use strong frames and light materials, so they are less likely to collapse."] },
          ] },
        ] },
        { h: "The Sun and the planets", blocks: [
          "The **Sun** is a **star**: a huge ball of hot, glowing gases that makes its own light and heat. It is the star nearest to the Earth.",
          "The **Solar System** is the Sun and everything that goes round it. The Sun's **gravity** keeps **eight planets** moving in paths called **orbits**.",
          { key: "Mercury · Venus · Earth · Mars · Jupiter · Saturn · Uranus · Neptune" },
          { remember: "To remember the order: **M**y **V**ery **E**fficient **M**other **J**ust **S**erved **U**s **N**uts." },
          { h: "Planet facts", blocks: [
            { list: [
              "**Mercury:** closest to the Sun, and the smallest planet.",
              "**Venus:** the hottest planet, because its thick carbon dioxide atmosphere traps heat. It is nearly the same size as the Earth.",
              "**Earth:** the only planet known to have life. It is called the Blue Planet because water covers most of it.",
              "**Mars:** the Red Planet, coloured by iron-rich dust.",
              "**Jupiter:** the largest planet.",
              "**Saturn:** famous for its bright rings of ice and rock.",
            ] },
          ] },
          { remember: "**Pluto** has been classed as a **dwarf planet** since 2006, so it is not one of the eight planets." },
        ] },
        { h: "The Earth and the Moon", blocks: [
          { list: [
            "The Earth **spins (rotates)** on its axis once in about 24 hours. This causes **day and night**.",
            "The Earth **goes round (revolves round)** the Sun once in about **365¼ days**. The extra quarter-days add up to a **leap year** every four years.",
          ] },
          "The **Moon** is the Earth's **natural satellite**: a body that goes round a planet. It has no light of its own and shines by reflecting sunlight.",
          { examples: ["The **phases of the Moon** (new moon, crescent, half moon, full moon) are the changing parts of its sunlit side that we see over about a month."] },
          "**Artificial satellites** are made by people and launched into orbit, for weather forecasting, communication, TV and navigation.",
        ] },
        { h: "Other bodies in the sky", blocks: [
          { list: [
            "**Asteroids:** small rocky bodies orbiting the Sun, mostly in a belt between Mars and Jupiter.",
            "**Comets:** bodies of ice, dust and rock with long, stretched orbits. Near the Sun, a comet grows a glowing tail that points away from the Sun.",
            "**Meteors:** “shooting stars”, which are bits of space rock that glow and burn up as they rush through our air. One that reaches the ground is a **meteorite**.",
          ] },
          { h: "Stars, constellations and galaxies", blocks: [
            { list: [
              "**Stars** make their own light, like the Sun, but they are so far away that they look like tiny twinkling points. Planets shine with a steady, reflected light.",
              "A **constellation** is a group of stars that forms a pattern. **Ursa Major (Saptarshi)** helps us find the **Pole Star (Dhruv Tara)**, which shows north.",
              "A **galaxy** is a huge collection of billions of stars. Ours is the **Milky Way (Akash Ganga)**.",
            ] },
          ] },
        ] },
      ],
      misconceptions: [
        ["Rubbing creates electric charge.", "Rubbing only transfers charge from one object to the other."],
        ["Mercury is the hottest planet because it is closest to the Sun.", "Venus is hotter, because its thick atmosphere traps heat."],
        ["The Sun is a planet, and the Moon is a star.", "The Sun is a star; the Moon is a satellite of the Earth."],
        ["A shooting star is a falling star.", "It is a meteor: a small bit of space rock burning up in our air."],
        ["A tall tree is a safe shelter in a thunderstorm.", "Lightning often strikes tall objects; a building or a closed car is safer."],
      ],
      revision: [
        ["Static charge", "Charge that stays on a surface after rubbing."],
        ["Earthing", "Passing electric charge safely into the Earth."],
        ["Lightning conductor", "A metal rod and wire that carry lightning into the ground."],
        ["Tectonic plates", "Huge moving slabs of the Earth's outer layer."],
        ["Seismograph", "An instrument that records earthquakes."],
        ["Star", "A hot ball of glowing gas that makes its own light."],
        ["Satellite", "A body that goes round a planet, like the Moon."],
        ["Galaxy", "Billions of stars held together by gravity."],
      ],
      questions: [
        ["Why does a rubbed comb pick up bits of paper?", "Rubbing charges the comb, and the charged comb attracts the light bits of paper."],
        ["What is lightning?", "A giant spark that happens when charges built up in clouds jump to another cloud or to the ground."],
        ["How does a lightning conductor protect a building?", "It carries the lightning's charge safely down a thick wire into the Earth."],
        ["What causes earthquakes?", "Sudden movements of the Earth's tectonic plates."],
        ["Which instrument records earthquakes?", "A seismograph."],
        ["Which is the largest planet?", "Jupiter."],
        ["Why is Venus hotter than Mercury?", "Its thick carbon dioxide atmosphere traps heat."],
        ["What causes day and night?", "The Earth spinning on its axis once in about 24 hours."],
      ],
      takeaway: "Electric charges cause lightning, moving plates cause earthquakes, and gravity holds the Sun's family of planets together.",
    },

  },
};
