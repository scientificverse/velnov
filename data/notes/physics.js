/* ============================================================
   PHYSICS (Class 6-8) - TOPIC OVERVIEWS (study notes)
   ------------------------------------------------------------
   One short, hand-written overview per topic. tools/build-pages.js
   shows it as a "Topic overview" at the top of the topic's study
   page, above the questions. index.html does NOT load this file.

   Key = topic number (1 = first topic in data/physics/).
   `topic` must match the topic name exactly (without the "1. "),
   so the build can warn if topics are ever reordered.
     intro     one paragraph: what the topic is about
     ideas     [{ h: heading, p: [paragraphs] }]  the key ideas
     terms     [[word, meaning]]                  "Words to know"
     examples  [paragraphs]                       "In everyday life"
     mistakes  [sentences]                        "Common mistakes"
   Plain text only - the build escapes it.
   ============================================================ */

window.TOPIC_NOTES = window.TOPIC_NOTES || {};

TOPIC_NOTES["Physics"] = {
  footnote: "Notes written by Velnov for Class 6–8 students, following the topics of the NCERT science syllabus.",
  topics: {

    1: {
      topic: "Motion, Measurement & Time",
      intro: "This topic answers three everyday questions: how long is something, how long does it take, and how fast is it moving? Answering them needs units that mean the same to everyone, careful measuring, and clear words for the different kinds of motion.",
      ideas: [
        { h: "Why we need standard units", p: [
          "Long ago, people measured with their bodies: a handspan, a footstep, or a cubit (elbow to fingertip). But hands and feet differ in size, so two people measuring the same table could get different answers. Standard units fix this because they are the same everywhere. The SI unit of length is the metre (m) and the SI unit of time is the second (s). 10 millimetres make 1 centimetre, 100 centimetres make 1 metre, and 1,000 metres make 1 kilometre. One hour is 60 minutes, or 3,600 seconds.",
          "If the zero end of your ruler is worn, start from a clear mark such as 1 cm and subtract it at the end.",
        ] },
        { h: "Kinds of motion", p: [
          "An object is in motion when its position changes with time. Moving along a straight line is rectilinear motion, like a car on a straight road. Moving along a circle is circular motion, like a stone whirled on a string. Spinning about an axis is rotational motion, like a top. Motion that repeats after equal intervals is periodic motion, like a swing. One object can show more than one kind: the tip of a fan blade moves in a circle while the whole fan rotates.",
        ] },
        { h: "Speed and time", p: [
          "Speed is the distance covered in a unit of time: speed = distance ÷ time. Its SI unit is metres per second (m/s); road speeds are often given in kilometres per hour (km/h). If equal distances are covered in equal times, the motion is uniform; otherwise it is non-uniform. For a whole journey, average speed = total distance ÷ total time. A simple pendulum, a small weight on a thread, takes the same time for every complete swing, which is why pendulums were used in clocks.",
        ] },
      ],
      terms: [
        ["Parallax error", "A wrong reading caused by looking at a scale from an angle. Keep your eye directly above the mark."],
        ["Time period", "The time a pendulum takes for one complete to-and-fro swing. For small swings it depends on the pendulum's length, not on the weight of the bob."],
        ["Distance–time graph", "A straight sloping line means uniform speed, a steeper line means a higher speed, and a flat line means the object is at rest."],
      ],
      examples: [
        "A passenger in a moving bus is at rest compared with the bus but in motion compared with a roadside tree: rest and motion depend on what you compare with. The bus's speedometer shows its speed right now, while its odometer adds up the distance travelled.",
      ],
      mistakes: [
        "Mixing units. If a boy walks 600 m in 10 minutes, change the time to 600 seconds first: his speed is 600 ÷ 600 = 1 m/s.",
        "Finding average speed by averaging two speeds. Always divide the total distance by the total time.",
        "Thinking a heavier bob makes a pendulum swing faster. Only its length matters.",
      ],
    },

    2: {
      topic: "Light, Shadows & Reflection",
      intro: "We see an object only when light from it enters our eyes, which is why nothing is visible in total darkness. This topic explains where light comes from, how it travels, why shadows form, and what mirrors and water do to light.",
      ideas: [
        { h: "Sources of light and kinds of materials", p: [
          "Things that give out their own light, such as the Sun, a candle flame or a glowing bulb, are luminous. Most things, including the Moon, are non-luminous: we see them by the light they reflect. Transparent materials such as clear glass let light pass, so we see clearly through them. Translucent ones such as frosted glass or butter paper let some through, so things behind them look blurred. Opaque ones such as wood and metal let none through.",
        ] },
        { h: "Light travels in straight lines", p: [
          "A torch beam in a dusty room is straight, and we cannot see round a corner. Because light travels in straight lines, an opaque object in its path blocks it and leaves a dark patch behind: a shadow. A shadow needs a light source, an opaque object and a surface to fall on, and it shows only the object's outline. A pinhole camera works for the same reason: light from the top of an object goes straight through a tiny hole to the bottom of the screen, so the image is upside down.",
        ] },
        { h: "Reflection and refraction", p: [
          "When light hits a smooth, shiny surface it bounces back; this is reflection. A plane (flat) mirror gives an image that is upright, the same size as the object, as far behind the mirror as the object is in front, and laterally inverted, which means left and right are swapped. Light also bends when it passes from one transparent material into another, such as from water into air. This bending is refraction. It makes a pencil in water look broken and a pool look shallower than it really is. A prism splits white light into seven colours (VIBGYOR); this is dispersion, and raindrops do it to sunlight to make a rainbow.",
        ] },
      ],
      terms: [
        ["Virtual image", "An image that cannot be caught on a screen, like the one in a plane mirror. A real image, like a pinhole camera's, can be."],
        ["Concave mirror", "Curves inwards like the inside of a spoon. Held close, it gives an enlarged image, so dentists use it."],
        ["Convex mirror", "Bulges outwards. Its image is smaller but shows a wider view, so vehicles use it as a rear-view mirror."],
      ],
      examples: [
        "AMBULANCE is printed back-to-front so that drivers ahead read it correctly in their mirrors. Shadows are longest early in the morning and late in the evening, when the Sun is low, and shortest around noon. In a solar eclipse the Moon's shadow falls on the Earth; in a lunar eclipse the Earth's shadow falls on the Moon.",
      ],
      mistakes: [
        "Calling the Moon luminous. It has no light of its own and only reflects sunlight.",
        "Thinking a red object casts a red shadow. A shadow is dark because it is simply where light is blocked.",
        "Saying a plane mirror turns an image upside down. It only swaps left and right.",
      ],
    },

    3: {
      topic: "Electricity & Circuits",
      intro: "A torch, a toy car and a TV remote all work because electric current flows round a closed loop. This topic explains what a cell does, why a bulb glows, why a circuit must have no gaps, and which materials let current pass.",
      ideas: [
        { h: "Cells and bulbs", p: [
          "An electric cell stores chemical energy and changes it into electrical energy. It has two terminals: positive (+), the raised metal cap, and negative (–), the flat metal base. Joining cells so that the positive of one touches the negative of the next makes a battery. Inside a bulb is a thin coiled wire called the filament. Current makes the filament so hot that it glows, changing electrical energy into light and heat. A cell whose chemicals are used up is \"dead\" and must be replaced or recharged.",
        ] },
        { h: "A circuit must be closed", p: [
          "Current flows only along a complete path: from one terminal of the cell, through the wires and the bulb, and back to the other terminal. This path is an electric circuit. If there is a gap anywhere, such as a loose wire, a broken filament or a switch turned off, the circuit is open and no current flows. A switch is just a handy way to close or open the path. If two bulbs share a single loop and one fuses, the other goes out too, because the only path is broken.",
        ] },
        { h: "Conductors and insulators", p: [
          "Materials that let current pass easily are conductors. Most metals, such as copper, aluminium and iron, are good conductors. Materials that do not let current pass are insulators: plastic, rubber, dry wood, glass and cotton thread. You can test a material with a simple tester made of a cell, a bulb and wires with a gap. Put the material across the gap; if the bulb glows, the material conducts. That is why a wire has a copper core to carry the current and a plastic covering to keep it away from our hands.",
        ] },
      ],
      terms: [
        ["Open circuit", "A circuit with a break in it, so no current flows."],
        ["Short circuit", "When the wires from the two terminals touch directly. A very large current flows, heating the wires and draining the cell quickly."],
        ["LED", "A light-emitting diode. Unlike an ordinary bulb, it lights only when connected the right way round."],
      ],
      examples: [
        "Our bodies conduct electricity, and ordinary tap water conducts because of the salts dissolved in it. That is why we must never touch switches with wet hands or push anything metal into a socket, and why electricians' tools have rubber or plastic handles.",
      ],
      mistakes: [
        "Connecting a bulb with only one wire. Both terminals of the bulb must be joined to both terminals of the cell.",
        "Thinking all water is an insulator. Only very pure distilled water is a poor conductor.",
        "Believing a switch makes or stores electricity. It only opens or closes the path.",
        "Expecting a bulb to stop working when the cell is turned round. An ordinary bulb still glows; only an LED cares about direction.",
      ],
    },

    4: {
      topic: "Magnets & Magnetism",
      intro: "A magnet can pull on certain objects without touching them. This topic covers which materials magnets attract, how the two poles behave, why a hanging magnet points north, and how to make and look after magnets.",
      ideas: [
        { h: "What magnets attract", p: [
          "Magnets attract magnetic materials: mainly iron, nickel and cobalt, and alloys such as steel that contain iron. Plastic, wood, rubber, glass and paper are non-magnetic, and so are many metals, including copper, aluminium, gold and silver. The pull passes through thin non-magnetic materials like paper or cloth, and it gets weaker as the distance grows. Because it works without touching, magnetism is a non-contact force. Natural magnets are pieces of a rock called lodestone (magnetite); bar, horseshoe and ring magnets are artificial magnets made by people.",
        ] },
        { h: "Two poles that cannot be separated", p: [
          "Every magnet has a north pole and a south pole, where its pull is strongest. Dip a bar magnet in iron filings and most of them cling to the two ends, with very few in the middle. Like poles repel (north pushes north away) and unlike poles attract (north pulls south). Break a magnet and you do not get a separate north piece and south piece: each piece becomes a smaller magnet with both poles. The space around a magnet where its force acts is its magnetic field, and iron filings sprinkled near a magnet line up along its curved field lines.",
        ] },
        { h: "Pointing north", p: [
          "A bar magnet hung freely by a thread always settles in the north–south direction. The end that points to geographic north is its north-seeking, or north, pole. This happens because the Earth itself behaves like a giant magnet. A compass is a tiny magnet balanced so that it can turn freely, which lets sailors and hikers find direction in fog, at sea or at night. Keep a compass away from iron objects and other magnets, which pull its needle off course.",
        ] },
      ],
      terms: [
        ["Magnetic induction", "An iron object near a magnet becomes a temporary magnet itself. That is how a chain of pins can hang from a magnet."],
        ["Soft iron and steel", "Soft iron loses its magnetism quickly, so it is used in electromagnets. Steel keeps it, so it is used for permanent magnets and compass needles."],
      ],
      examples: [
        "Magnets hold fridge doors shut, close pencil boxes and cupboard catches, and can pull iron filings out of a mixture of sand and iron. To make a magnet, stroke an iron nail many times from one end to the other with one pole of a magnet, always in the same direction. Heating, hammering or repeatedly dropping a magnet weakens it, so bar magnets are stored in pairs with soft-iron keepers across their ends.",
      ],
      mistakes: [
        "Saying magnets attract all metals. Only iron, nickel, cobalt and their alloys are attracted.",
        "Using attraction to prove something is a magnet. A magnet attracts plain iron too; only repulsion proves both objects are magnets.",
        "Thinking a broken magnet has lost a pole. Every piece still has a north and a south pole.",
      ],
    },

    5: {
      topic: "Heat & Temperature",
      intro: "Touch is not a reliable thermometer: a steel spoon and a wooden spoon in the same room feel different even though they are at the same temperature. This topic explains how we measure temperature, the three ways heat moves, and how we use these ideas at home.",
      ideas: [
        { h: "Heat, temperature and thermometers", p: [
          "Temperature tells us how hot or cold something is. Heat is energy, and on its own it always flows from a hotter object to a cooler one until both are at the same temperature, which is why tea left on a table cools down. We measure temperature with a thermometer, usually in degrees Celsius (°C). Water freezes at 0 °C and boils at 100 °C, and a healthy body is about 37 °C. A clinical thermometer reads body temperature, from about 35 °C to 42 °C. A kink in its tube stops the liquid falling back, so it is shaken down before each use. A laboratory thermometer has no kink and a wider range, about –10 °C to 110 °C.",
        ] },
        { h: "Three ways heat travels", p: [
          "In conduction, heat passes through a material from the hot part to the cold part while the material itself stays still; a steel spoon in hot milk warms right up to the handle. Metals are good conductors, while wood, plastic, wool and air are poor conductors, called insulators. In convection, a liquid or gas carries heat by moving: the warmed part becomes lighter and rises, cooler fluid sinks to take its place, and a loop called a convection current forms. In radiation, heat travels without needing any material at all, which is how the Sun's heat crosses empty space to reach us.",
        ] },
        { h: "Expanding, absorbing and reflecting", p: [
          "Most solids, liquids and gases expand when heated and contract when cooled. A thermometer's liquid expands up the tube, and railway lines have small gaps so the rails can expand on hot days. Dark, dull surfaces absorb heat radiation well; light and shiny surfaces reflect most of it.",
        ] },
      ],
      terms: [
        ["Sea breeze", "By day the land heats up faster than the sea, so warm air over the land rises and cooler air blows in from the sea. At night the land cools faster and a land breeze blows the other way."],
      ],
      examples: [
        "Cooking pans are metal so heat reaches the food quickly, but their handles are plastic or wood so we can hold them. White clothes keep us cooler in summer. Wool keeps us warm because it traps air, a poor conductor, and two thin sweaters are warmer than one thick one because of the extra layer of air between them.",
      ],
      mistakes: [
        "Treating heat and temperature as the same thing. Temperature is a measurement; heat is energy on the move.",
        "Saying cold flows into an object. It is always heat flowing out of the warmer thing.",
        "Holding a thermometer by its bulb, or reading it from an angle. Hold it by the stem and keep your eye level with the top of the liquid.",
        "Thinking a sweater makes heat. It only slows down the heat leaving your body.",
      ],
    },

    6: {
      topic: "Electric Current & its Effects",
      intro: "Electric current can do three useful things: make a wire hot, turn a coil into a magnet, and cause chemical changes in a liquid. Almost every electrical device in your home uses at least one of these effects.",
      ideas: [
        { h: "The heating effect", p: [
          "Every wire that carries current warms up. How much depends on the wire's material, length and thickness, and on the current. Heaters, irons and toasters use coils of nichrome, an alloy that gets very hot without melting, while the copper wires leading to them stay fairly cool. A filament bulb uses tungsten, which can glow white-hot; the glass holds an unreactive gas, or no air at all, so the filament does not burn away. A fuse uses the same effect. Its wire melts at a low temperature, so if too much current flows because of overloading or a short circuit, it melts and breaks the circuit before the house wiring can overheat.",
        ] },
        { h: "The magnetic effect", p: [
          "In 1820 Hans Christian Oersted saw a compass needle move when current flowed through a nearby wire: current has a magnetic effect. Wind insulated wire into a coil round a soft-iron core and you have an electromagnet, which is a magnet only while current flows. More turns of wire or a bigger current make it stronger. Electromagnets work cranes that lift scrap iron, electric bells, loudspeakers and motors.",
        ] },
        { h: "The chemical effect", p: [
          "Some liquids, such as salt water, lemon juice and tap water, conduct electricity; distilled water and oil hardly do. When current passes through a conducting liquid, it can cause chemical changes: gas bubbles at the metal rods (electrodes), a layer of metal on one rod, or a change of colour. An LED in the tester shows up even a weak current. Electroplating uses this effect to coat an object, joined to the negative terminal, with a thin layer of another metal. Chromium makes taps and bicycle parts shiny and scratch-resistant, and tin protects the iron of food cans from rusting.",
        ] },
      ],
      terms: [
        ["MCB", "A miniature circuit breaker. Like a fuse, it cuts off a dangerous current, but it simply switches off and can be switched back on."],
        ["Galvanising", "Coating iron with zinc to stop it rusting."],
      ],
      examples: [
        "A room heater, an iron and a toaster use the heating effect; an electric bell, a crane magnet and the motor in a fan use the magnetic effect; electroplated jewellery and shiny taps show the chemical effect.",
      ],
      mistakes: [
        "Replacing a blown fuse with a thicker wire. It may not melt during a fault, and the wiring can catch fire.",
        "Thinking an electromagnet stays magnetic after it is switched off.",
        "Assuming all water conducts well. Pure distilled water is a poor conductor; the salts in tap water are what let current through.",
      ],
    },

    7: {
      topic: "Force & Pressure",
      intro: "Kicking a ball, opening a drawer and pressing dough all involve forces. This topic explains what a force is, how forces add up or cancel, the different kinds of force, and why the same force can have very different effects depending on the area it acts on.",
      ideas: [
        { h: "Pushes and pulls", p: [
          "A force is a push or a pull. It can start or stop motion, speed an object up or slow it down, change its direction, or change its shape. Force is measured in newtons (N); one newton is roughly the force needed to hold up a 100-gram object. A force has a size (its magnitude) and a direction. Forces in the same direction add up; forces in opposite directions subtract, and the object moves towards the larger one. Equal forces pulling in opposite directions, as in a tug-of-war nobody is winning, are balanced: the net force is zero and the motion does not change.",
        ] },
        { h: "Contact and non-contact forces", p: [
          "Contact forces need the objects to touch, like muscular force and friction. Non-contact forces act across a gap: gravity pulls everything towards the Earth and gives objects their weight, magnetic force pulls on iron, and electrostatic force lets a comb rubbed on dry hair pick up bits of paper.",
        ] },
        { h: "Pressure", p: [
          "Pressure is the force acting on each unit of area: pressure = force ÷ area. The same force on a smaller area gives a bigger pressure, which is why knives, needles and nails are sharp. Spreading a force over a larger area lowers the pressure, which is why school bags have broad straps, camels have wide feet and trucks have many wheels. Liquids press on the bottom and sides of their container, and the pressure grows with depth, so dams are built thicker at the bottom. Gases press on their container too, keeping a tyre firm. The air around the Earth also presses on us from all sides. We are not crushed because the fluids inside our bodies press outwards just as hard. This atmospheric pressure is lower high up a mountain.",
        ] },
      ],
      examples: [
        "When you sip through a straw, you lower the air pressure inside it, and the atmosphere pressing on the drink in the glass pushes it up. A rubber sucker sticks to a wall for a similar reason: pressing it pushes the air out from underneath, and the air outside holds it in place.",
      ],
      mistakes: [
        "Thinking a bigger force always means a bigger pressure. The area matters just as much.",
        "Ignoring direction when combining forces. 12 N and 7 N acting in opposite directions give 5 N, not 19 N.",
        "Thinking balanced forces means there are no forces at all. The forces are there; they just cancel out.",
        "Believing water pressure depends on the width or shape of the container. It depends on depth.",
      ],
    },

    8: {
      topic: "Friction",
      intro: "Friction is the force that makes a rolling ball slow down and stop, and also the force that stops your feet slipping when you walk. This topic covers what causes friction, its different kinds, and how and why we increase or reduce it.",
      ideas: [
        { h: "What causes friction", p: [
          "Friction acts between two surfaces in contact and opposes their motion over each other. Even surfaces that feel smooth have tiny bumps and hollows. When two surfaces touch, these bumps catch on each other, and friction is the resistance to sliding them past one another. Rougher surfaces have bigger bumps and so more friction. Pressing the surfaces together harder also increases friction, which is why a heavy box is harder to slide than a light one. Friction needs touching surfaces, so it is a contact force.",
        ] },
        { h: "Static, sliding and rolling friction", p: [
          "Static friction acts while an object is still at rest and you try to move it. Sliding friction acts once it is moving, and rolling friction acts when a wheel or ball rolls. For the same object and surface, static friction is the largest, sliding friction is a little smaller, and rolling friction is much smaller still. That is why it takes an extra-hard push to get a heavy cupboard moving, and why the wheel made carrying loads so much easier. Liquids and gases also resist objects moving through them. This fluid friction, called drag, grows with speed, so fish, birds, cars and aeroplanes have smooth, pointed (streamlined) shapes to cut it down.",
        ] },
        { h: "A necessary evil", p: [
          "Without friction we could not walk, hold a pen, write with a pencil or stop a bicycle; brakes work by pressing pads against the wheel. But friction also wears out shoe soles, tyres and machine parts, and turns useful energy into heat. So we change it to suit the job. To increase friction we use treads on tyres, grooved soles, spiked sports shoes, chalk on a gymnast's hands and sand on icy roads. To reduce it we use oil and grease (lubricants), ball bearings, which turn sliding into rolling, and powder on a carrom board.",
        ] },
      ],
      examples: [
        "Rub your hands together on a cold morning and they warm up, because friction produces heat. The same heat lights a match when it is struck on the rough side of the box.",
      ],
      mistakes: [
        "Thinking friction is always bad. Walking, writing and braking all depend on it.",
        "Saying rolling friction is greater than sliding friction. It is much smaller.",
        "Thinking a smooth-looking surface has no friction. Every real surface has some.",
        "Believing the colour of a surface affects friction. What matters is what the surfaces are made of, how rough they are and how hard they press together.",
      ],
    },

    9: {
      topic: "Sound",
      intro: "Every sound, from a whisper to a thunderclap, starts with something vibrating. This topic follows sound from the vibrating object, through the air (or water or a solid), to your ear, and explains why sounds differ in loudness and pitch.",
      ideas: [
        { h: "Sound comes from vibration", p: [
          "A vibration is a quick to-and-fro movement. Pluck a stretched rubber band and you can see it blur; touch it and the sound stops. Different sources vibrate in different ways: the strings of a guitar or sitar, the stretched skin of a tabla, the air inside a flute, the wings of a buzzing bee. We speak because air from our lungs makes two vocal cords in the voice box (larynx) vibrate. Men usually have longer, thicker vocal cords, which give a deeper voice.",
        ] },
        { h: "Sound needs a medium", p: [
          "Sound travels as a wave: each vibrating particle nudges the next, passing the vibration along. So sound needs a medium, which can be a solid, a liquid or a gas, and it cannot cross a vacuum. That is why astronauts in space talk by radio. Sound travels fastest in solids, slower in liquids and slowest in gases; put your ear to a table and ask a friend to tap the far end. Sound is far slower than light, so we see lightning before we hear thunder. Sound bounces off hard surfaces, and a reflected sound we hear separately is an echo. Curtains, carpets and people absorb sound, so an empty hall echoes and a full one does not.",
        ] },
        { h: "Pitch and loudness", p: [
          "The number of vibrations each second is the frequency, measured in hertz (Hz). Frequency decides pitch: a high frequency gives a shrill sound like a whistle, and a low frequency gives a deep sound like a big drum. The size of the vibration is its amplitude, and amplitude decides loudness. Hit a drum harder and it sounds louder, not higher. Loudness is measured in decibels (dB). Humans hear from about 20 Hz to 20,000 Hz. Higher than that is ultrasound, which bats use to find insects in the dark and doctors use to see inside the body.",
        ] },
      ],
      terms: [
        ["Eardrum", "A thin, stretched skin inside the ear that vibrates when sound reaches it, so we can hear."],
        ["Noise pollution", "Too much unwanted sound around us. Long exposure to very loud sound, above about 80 dB, can harm hearing; silencers, trees along roads and ear protection help."],
      ],
      mistakes: [
        "Mixing up pitch and loudness. Pitch depends on frequency; loudness depends on amplitude.",
        "Thinking sound travels fastest in air. It is slowest in gases and fastest in solids.",
        "Saying the hollow body of a guitar makes the sound. The strings make it; the body makes it louder.",
        "Believing you could hear an explosion in space. With no air, there is nothing to carry the sound.",
      ],
    },

    10: {
      topic: "Natural Phenomena & Solar System",
      intro: "This topic joins two big stories: what causes lightning and earthquakes here on Earth, and the Sun's family of planets and the other bodies we see in the night sky.",
      ideas: [
        { h: "Static charge and lightning", p: [
          "Rub a plastic comb on dry hair and it will pick up tiny bits of paper. Rubbing moves charge from one object to the other, so both become charged. There are two kinds of charge, positive and negative: like charges repel and unlike charges attract, the same pattern as magnetic poles. Charges that stay on a surface are called static charges. In a thunderstorm, huge charges build up in clouds. When they grow large enough, they jump to another cloud or to the ground as a giant spark: lightning. A lightning conductor, a metal rod on a tall building joined to the ground by a thick wire, carries this charge safely into the Earth. Passing charge into the Earth is called earthing.",
        ] },
        { h: "Earthquakes", p: [
          "The Earth's outer layer is broken into huge slabs called tectonic plates, which move very slowly. When they suddenly slip or push against each other, the ground shakes. A seismograph records the shaking, and the Richter scale describes its strength. Indoors, take cover under a strong table, away from windows and heavy furniture; outdoors, move to open ground away from buildings and power lines.",
        ] },
        { h: "The Sun and its family", p: [
          "The Sun is a star: a huge ball of hot, glowing gases that makes its own light. Its gravity keeps eight planets in orbit around it: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune. Mercury is closest to the Sun, Jupiter is the largest and Saturn has the brightest rings. Mars looks red because of its iron-rich dust, and Venus is the hottest planet because its thick carbon dioxide atmosphere traps heat. Earth is the only planet known to have life. The Moon, Earth's natural satellite, has no light of its own; its phases are the changing parts of its sunlit side that we see over about a month. Earth spins once a day, giving day and night, and goes round the Sun in about 365¼ days.",
        ] },
      ],
      terms: [
        ["Meteor", "A \"shooting star\": a bit of rock from space glowing as it burns up in our air. One that reaches the ground is a meteorite."],
        ["Constellation", "A group of stars that forms a pattern, such as Ursa Major (Saptarshi), which helps us find the Pole Star."],
      ],
      mistakes: [
        "Thinking rubbing creates charge. It only moves charge from one object to the other.",
        "Guessing that Mercury is the hottest planet because it is closest to the Sun. Venus is hotter.",
        "Calling the Sun a planet or the Moon a star. The Sun is a star; the Moon is a satellite.",
        "Sheltering under a tall, lonely tree during lightning. A building or a closed car is far safer.",
      ],
    },

  },
};
