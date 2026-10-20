/* ============================================================
   BIOLOGY (Class 6-8) - TOPIC OVERVIEWS (study notes)
   ------------------------------------------------------------
   Same format as data/notes/physics.js (see the notes at the top
   of that file): numbered sections where each idea is defined
   first and then followed by examples, then misconceptions,
   quick revision, test-yourself questions and a key takeaway.
   index.html does NOT load this file; tools/build-pages.js does.
   ============================================================ */

window.TOPIC_NOTES = window.TOPIC_NOTES || {};

TOPIC_NOTES["Biology"] = {
  footnote: "Notes written by Velnov for Class 6–8 students, following the topics of the NCERT science syllabus.",
  topics: {

    /* ---------------------------------------------------------- 1 */
    1: {
      topic: "Living World: Characteristics, Habitat & Adaptation",
      title: "The Living World – what is alive, where it lives and how it survives",
      sections: [
        { h: "Characteristics of living things", blocks: [
          "All **living things** share these features:",
          { list: [
            "**Nutrition:** they need food for energy, growth and repair.",
            "**Respiration:** they release energy from food, day and night.",
            "**Growth:** they grow from within by making new cells.",
            "**Excretion:** they remove waste from their bodies.",
            "**Reproduction:** they produce young of their own kind.",
            "**Response to stimuli:** they react to changes around them.",
            "**Death:** they have a limited lifespan.",
          ] },
          { examples: [
            "A car moves and uses fuel, but it cannot grow or reproduce, so it is not alive.",
            "A crystal “grows” only by adding material on its outside; living things grow from within.",
          ] },
        ] },
        { h: "Responding to stimuli", blocks: [
          "A **stimulus** is any change in the surroundings, such as light, heat, touch or sound, that produces a reaction.",
          { examples: [
            "You pull your hand back from a hot pan.",
            "The leaves of the touch-me-not plant (Mimosa) fold when touched.",
            "A plant shoot bends towards light, and roots grow down towards water and gravity.",
          ] },
          { remember: "Plants cannot walk about, but they do move parts of their bodies and respond to stimuli." },
        ] },
        { h: "Habitat", blocks: [
          "A **habitat** is the place where an organism naturally lives. It provides food, water, air, shelter and a place to breed.",
          { list: [
            "**Terrestrial** habitats are on land: forests, deserts, grasslands, mountains.",
            "**Aquatic** habitats are in water: ponds, rivers, lakes, seas and oceans.",
          ] },
          { h: "Biotic and abiotic components", blocks: [
            { list: [
              "**Biotic** components are the **living** things in a habitat: plants, animals and microorganisms.",
              "**Abiotic** components are the **non-living** things: sunlight, air, water, soil and temperature.",
            ] },
          ] },
        ] },
        { h: "Adaptation", blocks: [
          "An **adaptation** is a special feature of body or behaviour that helps an organism survive in its habitat. Adaptations develop slowly, over **many generations**.",
          { h: "A. Desert", blocks: [
            { list: [
              "**Camel:** long legs keep its body away from the hot sand; it passes very little urine, hardly sweats, and stores fat in its hump.",
              "**Cactus:** leaves are reduced to **spines** to cut water loss; the thick green stem stores water and makes food; roots go very deep.",
            ] },
          ] },
          { h: "B. Mountains and polar regions", blocks: [
            { list: [
              "**Yak, snow leopard:** thick fur or a layer of fat keeps them warm.",
              "**Polar bear:** white fur keeps it warm and hides it against the snow.",
              "**Mountain trees:** cone-shaped, with sloping branches, so snow slides off.",
            ] },
          ] },
          { h: "C. Water", blocks: [
            { list: [
              "**Fish:** a **streamlined** body cuts water resistance; **gills** take in oxygen dissolved in water; fins help them swim.",
              "**Dolphins and whales** live in water but breathe air through **lungs**, using a blowhole.",
              "**Water lily:** hollow stems and broad floating leaves.",
              "**Frog** (an **amphibian**): webbed feet for swimming, and lungs and strong legs for land.",
              "**Duck:** webbed feet, and oily feathers that keep it dry.",
            ] },
          ] },
          { h: "D. Grasslands and forests", blocks: [
            { list: [
              "**Deer:** eyes on the sides of the head to watch for danger, and strong legs to run.",
              "**Lion:** eyes at the front to judge distance while hunting.",
              "**Owl:** large eyes, sharp hearing and silent flight for hunting at night.",
              "**Birds:** hollow, light bones and strong flight muscles.",
            ] },
          ] },
        ] },
        { h: "Survival behaviours", blocks: [
          { list: [
            "**Camouflage:** blending with the surroundings to hide, e.g. a chameleon changing colour.",
            "**Migration:** travelling long distances to a better place with the seasons, e.g. the Siberian crane in winter.",
            "**Hibernation:** a deep **winter** sleep to survive the cold, e.g. frogs and bears.",
            "**Aestivation:** a **summer** sleep to escape heat and dryness, e.g. some snails.",
          ] },
        ] },
        { h: "Cold-blooded and warm-blooded animals", blocks: [
          { list: [
            "**Cold-blooded** animals' body temperature changes with their surroundings, e.g. snakes and lizards, which bask in the sun to warm up.",
            "**Warm-blooded** animals keep a nearly steady body temperature, e.g. birds and mammals.",
          ] },
          { remember: "Destroying a habitat leaves its organisms nowhere to live. Most cannot simply move elsewhere, so protecting habitats protects species." },
        ] },
      ],
      misconceptions: [
        ["Anything that moves is alive.", "Cars and clouds move but don't grow, respire or reproduce."],
        ["Plants are not alive because they don't move.", "Plants grow, respire, reproduce and respond to stimuli."],
        ["An animal can grow an adaptation when it needs one.", "Adaptations develop slowly over many generations."],
        ["Dolphins and whales breathe with gills.", "They are mammals and breathe air with lungs."],
        ["Hibernation and aestivation are the same.", "Hibernation is a winter sleep; aestivation is a summer sleep."],
      ],
      revision: [
        ["Stimulus", "A change in the surroundings that causes a response."],
        ["Habitat", "The natural home of an organism."],
        ["Biotic", "Living parts of a habitat."],
        ["Abiotic", "Non-living parts of a habitat, e.g. sunlight, water."],
        ["Adaptation", "A feature that helps an organism survive in its habitat."],
        ["Camouflage", "Blending with the surroundings."],
        ["Migration", "Seasonal long-distance movement."],
        ["Hibernation", "Winter sleep."],
      ],
      questions: [
        ["Name four characteristics of all living things.", "They need food, respire, grow and reproduce (and also excrete and respond to stimuli)."],
        ["Is sunlight a biotic or an abiotic component?", "Abiotic: it is non-living."],
        ["Why are a cactus's leaves reduced to spines?", "To reduce water loss in the dry desert."],
        ["How does a camel save water?", "It passes very little urine and hardly sweats."],
        ["Why do fish have a streamlined body?", "It reduces water resistance, so they swim easily."],
        ["How do dolphins breathe?", "With lungs, taking in air through a blowhole on top of the head."],
        ["What is camouflage? Give an example.", "Blending with the surroundings to hide, e.g. a chameleon changing colour."],
        ["What is the difference between hibernation and aestivation?", "Hibernation is a winter sleep; aestivation is a summer sleep."],
      ],
      takeaway: "Living things share the signs of life, live in habitats that meet their needs, and survive there thanks to adaptations built up over many generations.",
    },

    /* ---------------------------------------------------------- 2 */
    2: {
      topic: "Food: Sources & Components",
      title: "Food – where it comes from and what it contains",
      sections: [
        { h: "Sources of food", blocks: [
          "All our food comes from **plants** or **animals**.",
          { list: [
            "**From plants:** grains, pulses, fruits and vegetables.",
            "**From animals:** milk, eggs, honey, fish and meat.",
          ] },
          { h: "Which plant part do we eat?", blocks: [
            { list: [
              "**Root:** carrot, radish, beetroot, sweet potato.",
              "**Stem:** potato and ginger (underground stems), sugarcane.",
              "**Leaf:** spinach, cabbage.",
              "**Flower:** cauliflower, broccoli.",
              "**Seed:** wheat, rice, pulses.",
            ] },
            { remember: "A potato is a **stem**, not a root. Its “eyes” are buds, and roots never have buds." },
          ] },
          { examples: ["Bees make **honey** from the **nectar** of flowers."] },
        ] },
        { h: "What animals eat", blocks: [
          { list: [
            "**Herbivores** eat only plants, e.g. cow, deer, elephant.",
            "**Carnivores** eat only other animals, e.g. lion, tiger.",
            "**Omnivores** eat both plants and animals, e.g. humans, crows, bears.",
            "**Scavengers** eat dead animals, e.g. vultures and hyenas, which help keep the environment clean.",
          ] },
        ] },
        { h: "Components of food", blocks: [
          "Food contains **nutrients** (carbohydrates, proteins, fats, vitamins and minerals), along with **water** and **roughage**. Each has its own job.",
          { key: "Energy-giving: carbohydrates, fats · Body-building: proteins · Protective: vitamins, minerals" },
        ] },
        { h: "Carbohydrates", blocks: [
          "**Carbohydrates** are the body's **main source of energy**. They are starch and sugars.",
          { examples: [
            "Starch: rice, wheat, potato, maize.",
            "Sugars: fruits, honey, sugarcane.",
          ] },
        ] },
        { h: "Proteins", blocks: [
          "**Proteins** are **body-building** foods. They help us **grow** and **repair** damaged parts.",
          { examples: ["Pulses, soybean, milk, paneer, eggs, fish and meat."] },
        ] },
        { h: "Fats", blocks: [
          "**Fats** give **more energy** than the same amount of carbohydrates, and are stored in the body for later use.",
          { examples: ["Butter, ghee, oil, groundnuts and nuts."] },
        ] },
        { h: "Vitamins and minerals", blocks: [
          "**Vitamins** and **minerals** are **protective** foods. They are needed in **small amounts**, but they keep the body healthy and protect it from disease.",
          { h: "Important vitamins", blocks: [
            { list: [
              "**Vitamin A:** healthy eyes and skin. Carrot, papaya, mango, green leaves, milk.",
              "**Vitamin B1:** carrying energy to the body's cells. Whole grains, pulses.",
              "**Vitamin C:** healthy gums and healing. Amla, guava, orange, lemon, tomato.",
              "**Vitamin D:** strong bones, because it helps absorb calcium. Our skin makes it in **sunlight**.",
            ] },
          ] },
          { h: "Important minerals", blocks: [
            { list: [
              "**Calcium:** strong bones and teeth. Milk, curd, ragi.",
              "**Iron:** makes **haemoglobin** in blood. Green leafy vegetables, jaggery, dates.",
              "**Iodine:** needed by the thyroid gland. Iodised salt.",
            ] },
          ] },
        ] },
        { h: "Water and roughage", blocks: [
          { list: [
            "**Water** helps absorb nutrients, removes waste, and cools the body through sweat. We also get water from fruits and vegetables.",
            "**Roughage** (dietary fibre) gives no nutrients, but it helps food move through the gut and **prevents constipation**. Whole grains, pulses, fruits and vegetables supply it.",
          ] },
        ] },
        { h: "Testing food", blocks: [
          { list: [
            "**Starch:** add iodine solution. It turns **blue-black**.",
            "**Protein:** add copper sulphate and caustic soda solution. It turns **violet**.",
            "**Fat:** rub on paper. It leaves an **oily patch** that lets light through.",
          ] },
        ] },
        { h: "Balanced diet and deficiency diseases", blocks: [
          "A **balanced diet** contains all the nutrients, plus water and roughage, in the right amounts. It need not be expensive: pulses, seasonal vegetables, millets and sprouts are cheap and nutritious.",
          { examples: ["Chapati, dal, a vegetable, curd and a fruit make a balanced meal."] },
          "A **deficiency disease** is caused by lacking a nutrient for a long time:",
          { list: [
            "No vitamin A → **night blindness**.",
            "No vitamin B1 → **beriberi**.",
            "No vitamin C → **scurvy** (bleeding gums).",
            "No vitamin D or calcium → **rickets** (weak, bent bones).",
            "No iron → **anaemia** (tiredness, pale skin).",
            "No iodine → **goitre** (swollen neck).",
          ] },
          { remember: "Wash vegetables **before** cutting them, and don't overcook them. Vitamins B and C dissolve in water and are destroyed by heat." },
        ] },
      ],
      misconceptions: [
        ["A potato is a root.", "It is an underground stem; its eyes are buds."],
        ["Vitamins give us energy.", "Vitamins protect and regulate the body; carbohydrates and fats give energy."],
        ["Roughage is useless because it isn't digested.", "It prevents constipation and keeps digestion healthy."],
        ["A healthy diet must be expensive.", "Cheap local foods like pulses, millets and sprouts are very nutritious."],
        ["More of one good food is enough.", "No single food has everything; we need a balanced diet."],
      ],
      revision: [
        ["Omnivore", "Eats both plants and animals."],
        ["Carbohydrates", "The main energy-giving food."],
        ["Proteins", "Body-building food for growth and repair."],
        ["Vitamins", "Protective nutrients needed in small amounts."],
        ["Roughage", "Fibre that prevents constipation."],
        ["Balanced diet", "All nutrients in the right amounts."],
        ["Deficiency disease", "Caused by a long-term lack of a nutrient."],
        ["Iodine test", "Turns blue-black if starch is present."],
      ],
      questions: [
        ["Which part of the plant is a carrot?", "The root."],
        ["What is the main energy-giving nutrient?", "Carbohydrates."],
        ["Name two good sources of protein.", "Pulses and eggs (also milk, fish and meat)."],
        ["Which vitamin can our skin make in sunlight?", "Vitamin D."],
        ["Lack of which vitamin causes scurvy?", "Vitamin C."],
        ["Which mineral prevents anaemia?", "Iron."],
        ["How do you test a food for starch?", "Add iodine solution; a blue-black colour shows starch."],
        ["Why should vegetables be washed before cutting?", "Water-soluble vitamins would wash out of the cut surfaces."],
      ],
      takeaway: "Carbohydrates and fats give energy, proteins build the body, vitamins and minerals protect it, and a balanced diet gives you all of them.",
    },

    /* ---------------------------------------------------------- 3 */
    3: {
      topic: "Nutrition in Plants",
      title: "Nutrition in Plants – how plants make and get their food",
      sections: [
        { h: "Autotrophs and heterotrophs", blocks: [
          { list: [
            "**Autotrophs** make their own food, e.g. green plants.",
            "**Heterotrophs** depend on other organisms for food, e.g. all animals, fungi and most bacteria.",
          ] },
          { remember: "Every food chain starts with a green plant, the **producer**." },
        ] },
        { h: "Photosynthesis", blocks: [
          "**Photosynthesis** is the process by which green plants make food (glucose) from **carbon dioxide and water**, using **sunlight** and **chlorophyll**. Oxygen is given out.",
          { key: "Carbon dioxide + Water  —(sunlight, chlorophyll)→  Glucose + Oxygen" },
          { list: [
            "**Carbon dioxide** enters from the air through tiny pores called **stomata**.",
            "**Water** is absorbed from the soil by **root hairs** and carried up by **xylem**.",
            "**Sunlight** provides the energy.",
            "**Chlorophyll**, the green pigment in **chloroplasts**, traps the light.",
          ] },
          "The glucose made is stored as **starch**, and is carried to other parts of the plant by **phloem**.",
          { examples: ["Water plants like Hydrilla give off bubbles in sunlight. The gas is oxygen."] },
        ] },
        { h: "The leaf: the plant's food factory", blocks: [
          "The **leaf** is where most photosynthesis happens.",
          { list: [
            "It is **broad and flat** to catch plenty of sunlight.",
            "Its **stomata** let gases in and out. Each stoma is opened and closed by two **guard cells**.",
            "Most stomata are on the **lower surface**, where it is cooler, to reduce water loss.",
            "Its **veins** carry water in and food out.",
          ] },
          { remember: "Leaves look green because chlorophyll **reflects green light** and absorbs red and blue light." },
        ] },
        { h: "Testing a leaf for starch", blocks: [
          "Boil the leaf in **alcohol** (in a water bath) to remove the chlorophyll, then add **iodine**. A **blue-black** colour shows that starch is present.",
          { h: "What the experiments prove", blocks: [
            { list: [
              "**Variegated leaf** (green and white): only the green parts turn blue-black, so **chlorophyll is needed**.",
              "**Leaf partly covered with black paper:** the covered part has no starch, so **sunlight is needed**.",
              "**Leaf in a flask with potassium hydroxide** (which absorbs carbon dioxide): no starch forms, so **carbon dioxide is needed**.",
            ] },
          ] },
        ] },
        { h: "Other ways plants get food", blocks: [
          { h: "A. Parasites", blocks: [
            "A **parasite** takes food from another living plant, the **host**, and harms it.",
            { examples: ["**Cuscuta (amarbel)** is yellow because it has no chlorophyll. It winds round a host plant and sucks food from it."] },
          ] },
          { h: "B. Insectivorous plants", blocks: [
            "**Insectivorous plants** trap and digest insects to get **nitrogen**, which their soil lacks. They still make food by photosynthesis.",
            { examples: ["Pitcher plant (its pitcher is a modified leaf), Venus flytrap and sundew."] },
          ] },
          { h: "C. Saprotrophs", blocks: [
            "**Saprotrophs** feed on **dead and decaying** matter, then return its nutrients to the soil.",
            { examples: ["Mushrooms, bread mould and many bacteria."] },
          ] },
          { h: "D. Symbiosis", blocks: [
            "**Symbiosis** is when two organisms live together and **both benefit**.",
            { examples: [
              "**Lichen:** an alga makes food; a fungus gives it shelter, water and minerals.",
              "**Rhizobium** bacteria in the root nodules of legumes (gram, pea, beans) fix nitrogen from the air for the plant, and get food and shelter in return.",
            ] },
          ] },
        ] },
        { h: "Replacing soil nutrients", blocks: [
          "Plants take **nitrogen, phosphorus and potassium** from the soil, but they get **carbon** from carbon dioxide in the air. Nitrogen is needed to make **proteins and chlorophyll**.",
          { examples: [
            "Farmers add **manure and fertilisers** to put nutrients back into the soil.",
            "Growing **legumes** naturally adds nitrogen to the soil.",
          ] },
        ] },
        { h: "Photosynthesis and respiration", blocks: [
          { list: [
            "**Photosynthesis** happens only in light. It **takes in carbon dioxide** and **gives out oxygen**, making food.",
            "**Respiration** happens **all the time**, day and night. It takes in oxygen and gives out carbon dioxide, releasing energy.",
          ] },
          { remember: "Plants respire at night too. By day photosynthesis is faster, so plants give out more oxygen than they use." },
        ] },
      ],
      misconceptions: [
        ["Plants get their food from the soil.", "Plants make food by photosynthesis; the soil gives only water and minerals."],
        ["Plants don't respire, they only photosynthesise.", "Plants respire all the time, day and night."],
        ["Oxygen is needed for photosynthesis.", "Oxygen is a product; carbon dioxide, water, light and chlorophyll are needed."],
        ["Insectivorous plants can't make food.", "They photosynthesise; they eat insects only to get nitrogen."],
        ["Carbon for plants comes from the soil.", "Carbon comes from carbon dioxide in the air."],
      ],
      revision: [
        ["Autotroph", "Makes its own food, e.g. a green plant."],
        ["Photosynthesis", "Making glucose from carbon dioxide and water using light."],
        ["Chlorophyll", "The green pigment that traps light, found in chloroplasts."],
        ["Stomata", "Tiny leaf pores for gas exchange."],
        ["Parasite", "Feeds on a living host and harms it, e.g. Cuscuta."],
        ["Saprotroph", "Feeds on dead matter, e.g. mushroom."],
        ["Symbiosis", "Two organisms living together, both benefiting."],
        ["Rhizobium", "Nitrogen-fixing bacteria in legume roots."],
      ],
      questions: [
        ["What are the raw materials of photosynthesis?", "Carbon dioxide and water (with sunlight and chlorophyll)."],
        ["What are the products of photosynthesis?", "Glucose and oxygen."],
        ["Through what do gases enter and leave a leaf?", "The stomata."],
        ["Why is a leaf boiled in alcohol before the starch test?", "To remove chlorophyll so the blue-black colour can be seen."],
        ["Why is Cuscuta yellow?", "It has no chlorophyll; it is a parasite."],
        ["Why does a pitcher plant catch insects?", "To get nitrogen, which its soil lacks."],
        ["How does Rhizobium help a pea plant?", "It fixes nitrogen from the air into a form the plant can use."],
        ["Do plants respire at night?", "Yes, plants respire all the time."],
      ],
      takeaway: "Green plants make their own food from carbon dioxide and water using sunlight and chlorophyll, and almost all life depends on that food and oxygen.",
    },

    /* ---------------------------------------------------------- 4 */
    4: {
      topic: "Nutrition in Animals & Digestion",
      title: "Nutrition in Animals – from eating to digesting",
      sections: [
        { h: "The five steps of nutrition", blocks: [
          "Animals are **heterotrophs**. Their nutrition happens in five steps:",
          { list: [
            "**Ingestion:** taking food into the body.",
            "**Digestion:** breaking complex food into simple, soluble substances.",
            "**Absorption:** passing digested food into the blood.",
            "**Assimilation:** cells using the absorbed food for energy, growth and repair.",
            "**Egestion:** removing undigested food as faeces.",
          ] },
          { key: "Ingestion → Digestion → Absorption → Assimilation → Egestion" },
        ] },
        { h: "The human digestive system", blocks: [
          "The **alimentary canal** is a long tube from mouth to anus. **Digestive glands** (salivary glands, liver and pancreas) pour juices into it.",
          { key: "Mouth → Oesophagus → Stomach → Small intestine → Large intestine → Rectum → Anus" },
        ] },
        { h: "The mouth", blocks: [
          "Digestion **begins in the mouth**. Teeth break food into small pieces, and **saliva** mixes with it.",
          "Saliva contains the enzyme **salivary amylase**, which turns **starch into sugar**.",
          { examples: ["Chew a piece of chapati for a long time and it begins to taste sweet."] },
          { h: "Teeth", blocks: [
            { list: [
              "**Incisors** (8): cut and bite.",
              "**Canines** (4): tear and pierce.",
              "**Premolars** (8) and **molars** (12): crush and grind.",
            ] },
            "An adult has **32** teeth; a child has **20** milk teeth.",
            { remember: "Bacteria turn leftover sugar into **acid**, which attacks the enamel and causes tooth decay. Brush after meals." },
          ] },
          { h: "The tongue", blocks: [
            "The **tongue** mixes food with saliva, rolls it into a ball, helps us swallow, and has **taste buds**.",
          ] },
        ] },
        { h: "The oesophagus and stomach", blocks: [
          "The **oesophagus** (food pipe) carries food to the stomach by **peristalsis**: wave-like squeezing of its muscles.",
          "The **stomach** produces:",
          { list: [
            "**Hydrochloric acid**, which kills germs and helps the enzymes work,",
            "**digestive juices** that start breaking down **proteins** (the enzyme **pepsin**),",
            "**mucus**, which protects the stomach wall from its own acid.",
          ] },
          { examples: ["The **epiglottis**, a small flap, covers the windpipe when you swallow, so food doesn't go down the wrong way."] },
        ] },
        { h: "Liver and pancreas", blocks: [
          { list: [
            "The **liver**, the **largest gland** in the body, makes **bile**, which is stored in the **gall bladder**. Bile breaks fat into tiny droplets so it can be digested.",
            "The **pancreas** makes **pancreatic juice**, which digests **carbohydrates, proteins and fats**.",
          ] },
        ] },
        { h: "The small intestine", blocks: [
          "**Most digestion and absorption** happen in the **small intestine**, which is about 7.5 metres long.",
          "Its inner wall has millions of finger-like **villi**. They give a huge surface area for absorbing digested food into the blood.",
          { h: "What food is broken into", blocks: [
            { list: [
              "**Carbohydrates** → **glucose**.",
              "**Proteins** → **amino acids**.",
              "**Fats** → **fatty acids and glycerol**.",
            ] },
          ] },
          "**Enzymes** are the substances that speed up these breakdowns, e.g. amylase (starch), pepsin (protein) and lipase (fat).",
        ] },
        { h: "The large intestine", blocks: [
          "The **large intestine** absorbs **water and some salts** from undigested food. The waste is stored in the **rectum** and passed out through the **anus** (egestion).",
          { examples: [
            "Too little roughage and water causes **constipation**.",
            "**Diarrhoea** drains water and salts from the body. **ORS**, a pinch of salt and a spoon of sugar in clean water, replaces them.",
          ] },
        ] },
        { h: "How other animals feed", blocks: [
          { h: "A. Amoeba", blocks: [
            "**Amoeba** pushes out finger-like **pseudopodia** around its food and traps it in a **food vacuole**, where the food is digested.",
          ] },
          { h: "B. Grass-eaters (ruminants)", blocks: [
            "**Ruminants** such as cows swallow grass quickly and store it in the **rumen**. Later they bring it back up and chew it again: **chewing the cud**.",
            "Bacteria in their stomach digest **cellulose**, which humans cannot digest.",
            { examples: ["Horses and rabbits have a large **caecum**, where bacteria digest cellulose."] },
          ] },
          { h: "C. Other feeding methods", blocks: [
            { list: [
              "**Mosquito:** sucks blood through a needle-like mouthpart.",
              "**Butterfly:** sips nectar through a long, coiled tube.",
              "**Snake:** swallows its prey whole.",
              "**Starfish:** pushes its stomach out of its mouth onto its prey, and digests it outside its body.",
            ] },
          ] },
        ] },
      ],
      misconceptions: [
        ["Digestion begins in the stomach.", "It begins in the mouth, where saliva starts breaking down starch."],
        ["Egestion and excretion are the same.", "Egestion removes undigested food; excretion removes wastes like urea made by the body."],
        ["Bile is an enzyme.", "Bile has no enzymes; it breaks fat into droplets so enzymes can work on it."],
        ["Most digestion happens in the large intestine.", "Most digestion and absorption happen in the small intestine."],
        ["Humans can digest the cellulose in grass.", "We can't; it passes through as roughage."],
      ],
      revision: [
        ["Ingestion", "Taking food in."],
        ["Digestion", "Breaking food into simple soluble substances."],
        ["Absorption", "Digested food passing into the blood."],
        ["Assimilation", "Cells using absorbed food."],
        ["Egestion", "Removing undigested food."],
        ["Peristalsis", "Wave-like squeezing that moves food along."],
        ["Villi", "Finger-like projections that absorb food in the small intestine."],
        ["Enzyme", "A substance that speeds up digestion, e.g. amylase."],
      ],
      questions: [
        ["Put the five steps of nutrition in order.", "Ingestion, digestion, absorption, assimilation, egestion."],
        ["Why does chapati taste sweet after long chewing?", "Salivary amylase turns its starch into sugar."],
        ["How many teeth does an adult have?", "32."],
        ["What does hydrochloric acid do in the stomach?", "It kills germs and helps the protein-digesting enzymes work."],
        ["Which is the largest gland, and what does it make?", "The liver; it makes bile."],
        ["Where does most absorption of food take place?", "In the small intestine, through the villi."],
        ["What is the main job of the large intestine?", "To absorb water and some salts."],
        ["How can cows digest grass?", "Bacteria in their stomach digest the cellulose."],
      ],
      takeaway: "Food is taken in, broken down by enzymes, absorbed in the small intestine, used by the cells, and whatever is left is passed out.",
    },

    /* ---------------------------------------------------------- 5 */
    5: {
      topic: "Plants: Structure & Transportation",
      title: "Plants – their parts and how they move water and food",
      sections: [
        { h: "Root system and shoot system", blocks: [
          { list: [
            "The **root system** grows below ground. It anchors the plant and absorbs water and minerals.",
            "The **shoot system** grows above ground: stem, leaves, flowers and fruits.",
          ] },
        ] },
        { h: "Roots", blocks: [
          { list: [
            "**Tap root:** one main thick root with smaller side roots, e.g. mustard, gram, mango.",
            "**Fibrous roots:** many thin roots of similar size, e.g. wheat, rice, maize, grass.",
          ] },
          "**Root hairs** are fine outgrowths that give a large surface area for absorbing water. Water enters them by **osmosis**.",
          { examples: [
            "**Storage roots:** carrot, radish and sweet potato store food.",
            "**Prop roots** hang from the branches of a banyan tree and support them like pillars.",
          ] },
        ] },
        { h: "Stem and leaf", blocks: [
          "The **stem** holds the leaves up to the light and carries water and food. A **node** is where a leaf grows; the part between two nodes is the **internode**.",
          { h: "Parts of a leaf", blocks: [
            { list: [
              "**Lamina:** the broad, flat green blade.",
              "**Petiole:** the stalk that joins the leaf to the stem.",
              "**Midrib and veins:** carry water and food.",
            ] },
          ] },
          { h: "Venation", blocks: [
            "**Venation** is the pattern of veins in a leaf.",
            { list: [
              "**Reticulate** (net-like) venation goes with **tap roots**, e.g. mango, hibiscus.",
              "**Parallel** venation goes with **fibrous roots**, e.g. grass, maize.",
            ] },
          ] },
        ] },
        { h: "Transport in plants", blocks: [
          "Plants have two transport tissues, together called **vascular tissue**:",
          { list: [
            "**Xylem** carries **water and minerals up** from the roots to the leaves.",
            "**Phloem** carries **food** made in the leaves to all other parts of the plant.",
          ] },
          { examples: ["Stand a white flower or a celery stalk in coloured water. Coloured streaks appear, showing the path of the xylem."] },
          { remember: "Remove a ring of bark (with its phloem) all the way round a tree trunk, and the roots get no food, so the tree slowly dies." },
        ] },
        { h: "Transpiration", blocks: [
          "**Transpiration** is the loss of water as vapour from the leaves, mainly through the **stomata**.",
          { list: [
            "It creates a **pull** that draws water up from the roots.",
            "It **cools** the plant.",
            "It **increases** when the weather is hot, dry and windy.",
          ] },
          { examples: [
            "A polythene bag tied over a leafy branch soon has water droplets inside.",
            "Plants **wilt** on hot afternoons, when they lose water faster than their roots can take it in.",
          ] },
        ] },
        { h: "Parts of a flower", blocks: [
          { list: [
            "**Sepals:** green, leaf-like parts that protect the bud.",
            "**Petals:** bright and often scented, to attract insects.",
            "**Stamen** (male part): the **anther** makes **pollen**; it sits on a stalk called the filament.",
            "**Pistil** (female part): a sticky **stigma**, the **style**, and the **ovary** containing **ovules**.",
          ] },
          { examples: ["A flower with both stamens and pistil, like mustard or hibiscus, is called **bisexual**."] },
        ] },
        { h: "Pollination, fertilisation and seeds", blocks: [
          { list: [
            "**Pollination:** pollen moves from the anther to the stigma, carried by **insects, wind, water or birds**.",
            "**Fertilisation:** the male cell from the pollen joins the egg in the ovule.",
            "After fertilisation, the **ovary becomes the fruit** and the **ovules become seeds**.",
          ] },
          { examples: ["Wind-pollinated flowers, such as grass and maize, are small and dull and make lots of light pollen."] },
        ] },
        { h: "Seed dispersal", blocks: [
          "**Seed dispersal** is the scattering of seeds away from the parent plant, so the new plants are not crowded.",
          { list: [
            "**Wind:** winged or hairy seeds, e.g. drumstick, maple, madar.",
            "**Water:** a coconut floats on its fibrous husk.",
            "**Animals:** hooked seeds stick to fur, e.g. Xanthium; fleshy fruits are eaten.",
            "**Explosion:** pods burst open, e.g. castor, balsam.",
          ] },
        ] },
        { h: "Germination", blocks: [
          "**Germination** is a seed sprouting into a new plant. It needs **water, air and a suitable temperature**.",
          { list: [
            "The **radicle** grows into the root.",
            "The **plumule** grows into the shoot.",
            "The **cotyledons** store food for the young seedling.",
          ] },
          { examples: ["Gram has two cotyledons (a **dicot**); maize has one (a **monocot**)."] },
        ] },
        { h: "Vegetative propagation", blocks: [
          "**Vegetative propagation** is growing new plants from roots, stems or leaves instead of seeds. The new plants are **identical** to the parent.",
          { examples: [
            "Potato (from the buds, or “eyes”), ginger (rhizome), sugarcane and rose (stem cuttings).",
            "Bryophyllum (from buds on the edges of its leaves).",
          ] },
        ] },
      ],
      misconceptions: [
        ["Xylem carries food.", "Xylem carries water and minerals; phloem carries food."],
        ["Transpiration is just a waste of water.", "It pulls water up and cools the plant."],
        ["The flower becomes the fruit.", "The ovary becomes the fruit; the ovules become seeds."],
        ["Seeds need light to germinate.", "They need water, air and warmth; light is needed only after the shoot comes up."],
        ["Pollination and fertilisation are the same.", "Pollination moves pollen to the stigma; fertilisation is the joining of male and female cells."],
      ],
      revision: [
        ["Tap root", "One main root with side roots."],
        ["Fibrous roots", "Many thin roots of similar size."],
        ["Xylem", "Carries water and minerals up."],
        ["Phloem", "Carries food to all parts."],
        ["Transpiration", "Loss of water vapour from leaves."],
        ["Stamen / pistil", "Male part / female part of a flower."],
        ["Pollination", "Transfer of pollen to the stigma."],
        ["Germination", "A seed sprouting into a new plant."],
      ],
      questions: [
        ["Which kind of root does maize have?", "Fibrous roots."],
        ["What do xylem and phloem carry?", "Xylem carries water and minerals; phloem carries food."],
        ["What is transpiration, and how does it help the plant?", "Water vapour lost from the leaves; it pulls water up and cools the plant."],
        ["Why do plants wilt on hot afternoons?", "They lose water faster than the roots can absorb it."],
        ["Which part of a flower makes pollen?", "The anther."],
        ["What does the ovary become after fertilisation?", "The fruit."],
        ["How is a coconut dispersed?", "By water: its fibrous husk lets it float."],
        ["What three things does a seed need to germinate?", "Water, air and a suitable temperature."],
      ],
      takeaway: "Roots absorb water, xylem carries it up, leaves make food, phloem carries the food everywhere, and flowers make seeds for the next generation.",
    },

    /* ---------------------------------------------------------- 6 */
    6: {
      topic: "Human Body Systems",
      title: "Human Body Systems – how the body works together",
      sections: [
        { h: "The skeletal system", blocks: [
          "The **skeleton** is the framework of bones that gives the body its shape, supports it, protects organs, and helps us move. An adult has **206 bones**.",
          { list: [
            "The **skull** protects the brain.",
            "The **rib cage** protects the heart and lungs.",
            "The **backbone** is made of small bones called **vertebrae**, and protects the spinal cord.",
            "**Bone marrow**, inside large bones, makes blood cells.",
          ] },
          "**Cartilage** is softer and bendable; it is found in the ear, the nose and the ends of bones.",
        ] },
        { h: "Joints", blocks: [
          "A **joint** is where two bones meet.",
          { list: [
            "**Ball and socket:** moves in all directions, e.g. shoulder, hip.",
            "**Hinge:** bends one way only, like a door, e.g. elbow, knee.",
            "**Pivot:** lets the head turn from side to side, at the neck.",
            "**Fixed:** does not move, e.g. the bones of the skull.",
          ] },
          { remember: "**Ligaments** join bone to bone; **tendons** join muscle to bone." },
        ] },
        { h: "The muscular system", blocks: [
          "**Muscles** move bones by **contracting** (getting shorter) and pulling them. A muscle can only pull, so muscles work in **pairs**.",
          { examples: ["To bend the arm, the **biceps** contracts while the triceps relaxes. To straighten it, the **triceps** contracts."] },
          { list: [
            "**Voluntary** muscles work when we want them to, e.g. arms and legs.",
            "**Involuntary** muscles work on their own, e.g. the stomach.",
            "**Cardiac** (heart) muscle beats all our life without tiring.",
          ] },
        ] },
        { h: "The respiratory system", blocks: [
          "**Breathing** is taking air in (**inhalation**) and pushing it out (**exhalation**). **Respiration** is releasing energy from food inside our cells.",
          { list: [
            "When we breathe in, the **diaphragm** moves down and the ribs move up and out, so air rushes into the lungs.",
            "Gases are exchanged in millions of tiny air sacs called **alveoli**.",
            "An adult at rest breathes about **15–18 times a minute**, and faster during exercise.",
          ] },
          { examples: ["Breathe out through lime water and it turns milky, because exhaled air has more carbon dioxide."] },
          { h: "Aerobic and anaerobic respiration", blocks: [
            { list: [
              "**Aerobic:** uses oxygen; breaks glucose down completely and releases lots of energy.",
              "**Anaerobic:** without oxygen. Hard-working muscles make **lactic acid**, which causes cramps; yeast makes **alcohol and carbon dioxide**.",
            ] },
          ] },
        ] },
        { h: "The circulatory system", blocks: [
          "The **heart**, **blood vessels** and **blood** carry oxygen, food and wastes around the body.",
          { list: [
            "The **heart** has **four chambers** and pumps blood. It beats about **72 times a minute**; we feel this as the **pulse**.",
            "**Arteries** carry blood **away from** the heart.",
            "**Veins** carry blood **back to** the heart; their valves stop it flowing backwards.",
            "**Capillaries** are very thin vessels where materials pass to and from the cells.",
          ] },
          { h: "Parts of the blood", blocks: [
            { list: [
              "**Red blood cells** contain **haemoglobin**, which carries oxygen.",
              "**White blood cells** fight germs.",
              "**Platelets** help blood **clot** at a cut.",
              "**Plasma** is the liquid that carries everything.",
            ] },
          ] },
        ] },
        { h: "The excretory system", blocks: [
          "**Excretion** is the removal of harmful wastes made by the body.",
          { list: [
            "The **kidneys** filter the blood and make **urine**. Their filtering units are **nephrons**.",
            "Urine goes down the ureters, is stored in the **urinary bladder**, and passes out through the urethra.",
            "The main waste in urine is **urea**.",
            "**Sweat** cools the body and removes some salt; the **lungs** remove carbon dioxide.",
          ] },
          { examples: ["If the kidneys fail, a **dialysis** machine filters the blood instead."] },
        ] },
        { h: "The nervous system", blocks: [
          "The **nervous system** (the **brain**, the **spinal cord** and **nerves**) controls and coordinates the whole body. Its basic unit is the **neuron** (nerve cell).",
          { h: "Reflex actions", blocks: [
            "A **reflex action** is a quick, automatic response, controlled by the **spinal cord**, that protects the body.",
            { examples: ["Pulling your hand away from a hot object, blinking, coughing."] },
          ] },
          { h: "Sense organs", blocks: [
            "Our five sense organs are the **eyes, ears, nose, tongue and skin**. They detect light, sound, smell, taste and touch.",
          ] },
        ] },
        { h: "Keeping the body healthy", blocks: [
          { list: [
            "**Exercise** strengthens muscles, bones, the heart and the lungs.",
            "Sit and stand with good **posture** to protect the backbone.",
            "Drink plenty of **water** to help the kidneys.",
            "**Don't smoke**: it damages the alveoli and causes lung cancer.",
          ] },
        ] },
      ],
      misconceptions: [
        ["Breathing and respiration are the same.", "Breathing moves air in and out; respiration releases energy in cells."],
        ["Muscles can push bones.", "Muscles can only pull, so they work in pairs."],
        ["All arteries carry oxygen-rich blood.", "Arteries carry blood away from the heart; the pulmonary artery carries oxygen-poor blood."],
        ["The brain controls every reflex.", "Reflexes are controlled by the spinal cord, which makes them very fast."],
        ["Tendons and ligaments are the same.", "Tendons join muscle to bone; ligaments join bone to bone."],
      ],
      revision: [
        ["Skeleton", "206 bones that support and protect the body."],
        ["Joint", "Where two bones meet."],
        ["Tendon", "Joins muscle to bone."],
        ["Alveoli", "Tiny air sacs in the lungs where gases are exchanged."],
        ["Artery", "Carries blood away from the heart."],
        ["Haemoglobin", "The red pigment that carries oxygen."],
        ["Nephron", "The filtering unit of the kidney."],
        ["Reflex action", "A quick, automatic protective response."],
      ],
      questions: [
        ["How many bones does an adult have?", "206."],
        ["Name the joint in the elbow.", "A hinge joint."],
        ["Why do muscles work in pairs?", "A muscle can only pull, so another muscle is needed to pull the bone back."],
        ["Where does gas exchange happen in the lungs?", "In the alveoli."],
        ["What causes muscle cramps during heavy exercise?", "Lactic acid from anaerobic respiration."],
        ["Which blood cells fight germs?", "White blood cells."],
        ["Which organs filter the blood to make urine?", "The kidneys."],
        ["Give an example of a reflex action.", "Pulling your hand away from a hot object (or blinking)."],
      ],
      takeaway: "The body's systems work together: bones and muscles move us, lungs and blood carry oxygen, kidneys remove wastes, and nerves control it all.",
    },

    /* ---------------------------------------------------------- 7 */
    7: {
      topic: "Cell Structure & Functions",
      title: "The Cell – the building block of life",
      sections: [
        { h: "What is a cell?", blocks: [
          "The **cell** is the **basic unit of life**. Every living thing is made of one or more cells, just as a wall is built from bricks.",
          { list: [
            "**Unicellular** organisms have one cell, e.g. Amoeba, Paramecium, bacteria, yeast.",
            "**Multicellular** organisms have many cells, e.g. plants, animals and humans.",
          ] },
        ] },
        { h: "Discovery of the cell", blocks: [
          { list: [
            "**Robert Hooke** (1665) saw tiny box-like compartments in a thin slice of **cork** and called them cells.",
            "**Anton van Leeuwenhoek** (1674) was the first to see **living** cells, in pond water.",
            "**Robert Brown** (1831) discovered the **nucleus**.",
          ] },
          { h: "The cell theory", blocks: [
            "**Schleiden and Schwann** said that all living things are made of cells. **Virchow** added that **new cells come only from existing cells**.",
          ] },
        ] },
        { h: "Cell size and shape", blocks: [
          "Cells come in many sizes and shapes, each suited to its job. Most are so small that we need a **microscope** to see them.",
          { examples: [
            "**Largest cell:** an ostrich egg.",
            "**Longest cell** in the human body: the nerve cell, which can be about a metre long.",
            "**Smallest cells:** bacteria.",
            "**Red blood cells** are disc-shaped, and **Amoeba** keeps changing shape.",
          ] },
        ] },
        { h: "The three basic parts of a cell", blocks: [
          { h: "A. Cell membrane", blocks: [
            "The thin outer covering of every cell. It is **selectively permeable**: it lets only certain substances in and out.",
          ] },
          { h: "B. Cytoplasm", blocks: [
            "The jelly-like substance between the cell membrane and the nucleus. It holds the **organelles**, the cell's tiny working parts.",
          ] },
          { h: "C. Nucleus", blocks: [
            "The **control centre** of the cell. It contains **chromosomes**, which carry **genes**, the units that pass features from parents to children.",
            { examples: ["Human body cells have **46 chromosomes** (23 pairs)."] },
          ] },
          { remember: "Bacteria have no proper nucleus; their genetic material lies loose in the cytoplasm. They are **prokaryotes**. Cells with a proper nucleus are **eukaryotes**." },
        ] },
        { h: "Organelles and their jobs", blocks: [
          { list: [
            "**Mitochondria:** the **powerhouse** of the cell, releasing energy from food.",
            "**Ribosomes:** make proteins.",
            "**Endoplasmic reticulum:** a network of tubes that moves materials around the cell.",
            "**Golgi apparatus:** packs and sends out materials.",
            "**Lysosomes:** contain enzymes that break down worn-out parts; called “suicide bags”.",
            "**Vacuoles:** store water and other substances.",
            "**Plastids** (plant cells only): **chloroplasts** (green, photosynthesis), **chromoplasts** (colour flowers and fruits) and **leucoplasts** (store food).",
          ] },
        ] },
        { h: "Plant cell and animal cell", blocks: [
          "Both have a cell membrane, cytoplasm, nucleus and mitochondria. **Only plant cells** have:",
          { list: [
            "a rigid **cell wall** made of **cellulose**, which gives a fixed, box-like shape,",
            "**chloroplasts**, for photosynthesis,",
            "a large central **vacuole**, which keeps the cell firm.",
          ] },
          { examples: [
            "**Onion peel** cells look rectangular and neatly packed, with clear walls.",
            "**Cheek cells** look rounded and irregular, with no cell wall.",
          ] },
          { remember: "Put in water, a plant cell swells but does not burst, because its cell wall holds firm. An animal cell may burst." },
        ] },
        { h: "From cells to organisms", blocks: [
          "In multicellular organisms, cells are **specialised** for different jobs. This is called **division of labour**.",
          { key: "Cell → Tissue → Organ → Organ system → Organism" },
          { examples: [
            "A **nerve cell** is long, to carry messages far.",
            "A **root hair cell** is long and thin, to absorb more water.",
            "A **sperm cell** has a tail, for swimming.",
            "A **red blood cell** has no nucleus, leaving room for more haemoglobin.",
          ] },
        ] },
        { h: "Looking at cells", blocks: [
          "Cells are seen with a **microscope**. Stains such as **iodine** or **safranin** colour the cell parts so they show up clearly.",
          "Cells **divide** for growth, to repair damage, and for reproduction.",
        ] },
      ],
      misconceptions: [
        ["Hooke saw living cells in cork.", "He saw the empty walls of dead cork cells."],
        ["Animal cells have a cell wall.", "Only plant cells have a cell wall; all cells have a cell membrane."],
        ["All cells are the same shape.", "Cell shape depends on its job: long nerve cells, disc-shaped red blood cells."],
        ["All cells can be seen without a microscope.", "Almost all cells need a microscope; an egg is a rare exception."],
        ["Every cell has a proper nucleus.", "Bacteria (prokaryotes) do not; mature red blood cells lose theirs."],
      ],
      revision: [
        ["Cell", "The basic unit of life."],
        ["Cell membrane", "The selectively permeable outer layer of every cell."],
        ["Nucleus", "The control centre; holds the chromosomes."],
        ["Gene", "A unit of inheritance on a chromosome."],
        ["Mitochondria", "The powerhouse; releases energy."],
        ["Chloroplast", "Green plastid where photosynthesis happens."],
        ["Cell wall", "Rigid cellulose layer, found only in plant cells."],
        ["Tissue", "A group of similar cells doing one job."],
      ],
      questions: [
        ["Who discovered the cell, and in what?", "Robert Hooke, in a thin slice of cork."],
        ["Which is the longest cell in the human body?", "The nerve cell (neuron)."],
        ["Why is the cell membrane called selectively permeable?", "It lets only certain substances pass in and out."],
        ["Which organelle is the powerhouse of the cell?", "The mitochondrion."],
        ["Name three things found in plant cells but not animal cells.", "Cell wall, chloroplasts and a large central vacuole."],
        ["How many chromosomes are in a human body cell?", "46 (23 pairs)."],
        ["Put these in order: organ, cell, organism, tissue.", "Cell → tissue → organ → organism."],
        ["Why doesn't a plant cell burst in water?", "Its rigid cell wall holds it in."],
      ],
      takeaway: "Every living thing is made of cells. Each cell has a membrane, cytoplasm and a nucleus, and plant cells also have a wall, chloroplasts and a big vacuole.",
    },

    /* ---------------------------------------------------------- 8 */
    8: {
      topic: "Microorganisms",
      title: "Microorganisms – tiny friends and foes",
      sections: [
        { h: "What are microorganisms?", blocks: [
          "**Microorganisms** (microbes) are living things too small to see without a **microscope**. They live almost everywhere: in air, water and soil, inside our bodies, and even in hot springs and polar ice.",
          { h: "Main groups", blocks: [
            { list: [
              "**Bacteria:** single cells, e.g. Lactobacillus, Rhizobium.",
              "**Fungi:** e.g. yeast, bread mould (Rhizopus), mushrooms.",
              "**Protozoa:** e.g. Amoeba, Plasmodium.",
              "**Algae:** contain chlorophyll and make their own food, e.g. Spirogyra.",
              "**Viruses:** the smallest of all. They reproduce **only inside a living host cell**.",
            ] },
          ] },
        ] },
        { h: "Useful microorganisms", blocks: [
          { h: "A. In food", blocks: [
            { list: [
              "**Lactobacillus** bacteria turn milk into **curd**, by changing milk sugar into lactic acid.",
              "**Yeast** makes **bread rise**: it gives off carbon dioxide, which forms bubbles in the dough.",
              "Microbes **ferment** idli and dosa batter, making it soft.",
            ] },
            "**Fermentation** is the process in which yeast turns sugar into **alcohol and carbon dioxide**. It was discovered by **Louis Pasteur**.",
            { examples: ["A spoonful of curd added to warm milk adds Lactobacillus, which multiplies and sets the milk into curd."] },
          ] },
          { h: "B. In medicine", blocks: [
            { list: [
              "**Antibiotics** are medicines that kill or stop the growth of harmful bacteria. **Alexander Fleming** discovered **penicillin**, the first one, from a mould.",
              "A **vaccine** contains dead or weakened germs. It trains the body to fight a disease in future. **Edward Jenner** made the first one, against **smallpox**, which has now been wiped out worldwide.",
            ] },
            { remember: "Antibiotics **do not work against viruses**, such as colds and flu. Take them only when a doctor prescribes them, and finish the full course." },
          ] },
          { h: "C. In the soil and environment", blocks: [
            { list: [
              "**Rhizobium** in the root nodules of legumes, and blue-green algae in paddy fields, **fix nitrogen** from the air into the soil.",
              "**Decomposers** (bacteria and fungi) break down dead plants and animals, returning nutrients to the soil.",
              "Microbes turn kitchen and farm waste into **compost**.",
              "Some bacteria help clean up **sewage** and **oil spills**.",
            ] },
          ] },
        ] },
        { h: "Harmful microorganisms", blocks: [
          "Microbes that cause disease are called **pathogens**. A disease that spreads from person to person is **communicable**.",
          { h: "Diseases in humans", blocks: [
            { list: [
              "**Bacteria:** tuberculosis (TB), typhoid, cholera.",
              "**Viruses:** common cold, flu, measles, polio, chicken pox.",
              "**Protozoa:** malaria (Plasmodium), amoebic dysentery.",
              "**Fungi:** ringworm, which, despite its name, is not a worm.",
            ] },
          ] },
          { h: "How diseases spread", blocks: [
            { list: [
              "**Air:** coughs and sneezes spread TB, flu and colds.",
              "**Water and food:** cholera and typhoid.",
              "**Carriers (vectors):** the female **Anopheles** mosquito spreads **malaria**; the **Aedes** mosquito spreads **dengue**; houseflies carry germs to our food.",
            ] },
          ] },
          { examples: ["Plant diseases include citrus canker (bacteria), rust of wheat (fungus) and yellow vein mosaic of bhindi (virus)."] },
        ] },
        { h: "Preventing disease", blocks: [
          { list: [
            "Wash your hands with soap; cover your mouth when you cough.",
            "**Boil** drinking water.",
            "Don't let water collect in coolers, pots or tyres, so mosquitoes cannot breed. Use nets and repellents.",
            "Get **vaccinated** against polio, measles, TB and other diseases.",
          ] },
        ] },
        { h: "Food spoilage and preservation", blocks: [
          "**Food spoilage** happens when microbes grow on food, making it smell and taste bad and sometimes making it poisonous.",
          "**Food preservation** stops or slows the growth of microbes:",
          { list: [
            "**Salt and sugar:** draw water out of microbes, e.g. pickles and jams.",
            "**Oil and vinegar:** keep out air and make the food too acidic for microbes, e.g. pickles.",
            "**Refrigeration:** cold slows microbes down.",
            "**Chemical preservatives** such as sodium benzoate, in jams and squashes.",
            "**Pasteurisation:** milk is heated to about 70 °C for a short time and quickly cooled, killing harmful microbes.",
            "**Drying:** grains are dried in the sun before storage.",
          ] },
        ] },
      ],
      misconceptions: [
        ["All microbes are harmful.", "Many are useful: they make curd, bread and medicines, and enrich the soil."],
        ["Antibiotics cure colds and flu.", "Colds and flu are caused by viruses; antibiotics don't work on them."],
        ["Ringworm is caused by a worm.", "Ringworm is caused by a fungus."],
        ["Refrigeration kills microbes.", "Cold only slows them down; food still spoils eventually."],
        ["All mosquitoes spread malaria.", "Only the female Anopheles spreads malaria; Aedes spreads dengue."],
      ],
      revision: [
        ["Microorganism", "A living thing too small to see without a microscope."],
        ["Virus", "Reproduces only inside a living host cell."],
        ["Fermentation", "Yeast turning sugar into alcohol and carbon dioxide."],
        ["Antibiotic", "A medicine that kills or stops bacteria."],
        ["Vaccine", "Dead or weakened germs that build immunity."],
        ["Communicable disease", "A disease that spreads from person to person."],
        ["Carrier (vector)", "An animal that spreads germs, e.g. a mosquito."],
        ["Pasteurisation", "Heating milk and cooling it quickly to kill microbes."],
      ],
      questions: [
        ["Which microbe turns milk into curd?", "Lactobacillus bacteria."],
        ["Why does bread dough rise?", "Yeast gives off carbon dioxide, which forms bubbles."],
        ["Who discovered penicillin?", "Alexander Fleming."],
        ["Why are antibiotics useless against the common cold?", "The cold is caused by a virus, and antibiotics don't work on viruses."],
        ["Which mosquito spreads malaria?", "The female Anopheles mosquito."],
        ["How does a vaccine protect us?", "It trains the body to make antibodies before the real germ attacks."],
        ["Why do salt and sugar preserve food?", "They draw water out of microbes, so the microbes cannot grow."],
        ["Name a microbe that adds nitrogen to soil.", "Rhizobium (or blue-green algae)."],
      ],
      takeaway: "Microbes are both friends and foes: they give us curd, bread, medicines and fertile soil, but they also cause disease and spoil food.",
    },

    /* ---------------------------------------------------------- 9 */
    9: {
      topic: "Reproduction in Living Things",
      title: "Reproduction – making the next generation",
      sections: [
        { h: "What is reproduction?", blocks: [
          "**Reproduction** is the process by which living things produce new individuals of their own kind. It keeps a species going from one generation to the next.",
          { key: "Asexual: one parent, identical offspring  ·  Sexual: two parents, varied offspring" },
        ] },
        { h: "Asexual reproduction", blocks: [
          "**Asexual reproduction** needs only **one parent**, with no joining of reproductive cells. The young are **identical** to the parent.",
          { h: "A. Binary fission", blocks: [
            "The parent cell **splits into two**.",
            { examples: ["Amoeba and bacteria."] },
          ] },
          { h: "B. Multiple fission", blocks: [
            "The parent splits into **many** new individuals at once.",
            { examples: ["Plasmodium, the malaria parasite."] },
          ] },
          { h: "C. Budding", blocks: [
            "A small outgrowth (**bud**) grows on the parent and separates as a new individual.",
            { examples: ["Yeast and Hydra."] },
          ] },
          { h: "D. Fragmentation", blocks: [
            "The body **breaks into pieces**, and each piece grows into a new organism.",
            { examples: ["Spirogyra (an alga)."] },
          ] },
          { h: "E. Spore formation", blocks: [
            "Tiny, light **spores** with a hard coat are carried by the wind. They survive harsh conditions, and grow when conditions improve.",
            { examples: ["Bread mould (Rhizopus) and ferns."] },
          ] },
          { h: "F. Vegetative propagation", blocks: [
            "New plants grow from **roots, stems or leaves**, instead of seeds.",
            { examples: [
              "Potato (eyes), ginger (rhizome), sugarcane and rose (cuttings), Bryophyllum (buds on its leaves).",
              "Gardeners use **grafting** (joining a shoot of one plant onto the rooted stem of another) and **layering** (burying a branch until it grows roots).",
            ] },
          ] },
          { h: "G. Regeneration", blocks: [
            "Some simple animals can **regrow** lost parts, and even a whole body from a piece.",
            { examples: ["Hydra, Planaria and starfish."] },
          ] },
        ] },
        { h: "Sexual reproduction", blocks: [
          "**Sexual reproduction** involves **two parents**. A male reproductive cell and a female reproductive cell (**gametes**) join together. This joining is **fertilisation**, and it forms a **zygote**.",
          { key: "Sperm + Egg → Zygote → Embryo → Young one" },
          { list: [
            "**Male gamete:** the **sperm**, made in the **testes**. It is small and has a tail for swimming.",
            "**Female gamete:** the **egg (ovum)**, made in the **ovaries**. It is larger and stores food.",
          ] },
          { remember: "Sexual reproduction creates **variation**. The young are not identical to their parents, which helps a species survive changes in its environment." },
        ] },
        { h: "Internal and external fertilisation", blocks: [
          { list: [
            "**External fertilisation:** eggs and sperm meet **outside** the body, in water, e.g. frogs and fish. They lay **huge numbers** of eggs, because many are eaten or lost.",
            "**Internal fertilisation:** sperm meet the egg **inside** the female's body, e.g. humans, birds and cows. Fewer young are produced, but they are better protected.",
          ] },
        ] },
        { h: "Oviparous and viviparous animals", blocks: [
          { list: [
            "**Oviparous** animals **lay eggs**, e.g. birds, reptiles, fish, frogs and insects. A hard shell protects a bird's egg.",
            "**Viviparous** animals **give birth to live young**, e.g. humans, cows and dogs.",
          ] },
          { examples: ["In humans, the baby grows in the mother's womb and gets food and oxygen through the **placenta**. The developing baby is called an **embryo**, and later a **foetus**."] },
        ] },
        { h: "Metamorphosis", blocks: [
          "**Metamorphosis** is a big change in body form as a young animal grows into an adult.",
          { h: "Frog", blocks: [
            { key: "Egg → Tadpole → Adult frog" },
            "A tadpole lives in water and breathes with **gills**. It gradually grows legs and **lungs**.",
          ] },
          { h: "Butterfly", blocks: [
            { key: "Egg → Caterpillar (larva) → Pupa (chrysalis) → Adult butterfly" },
          ] },
          { remember: "Humans, cats and birds don't go through metamorphosis. Their young look like small adults (**direct development**)." },
        ] },
        { h: "Reproduction in flowering plants", blocks: [
          { list: [
            "The **stamen** (male) makes **pollen**; the **pistil** (female) has the **ovules**.",
            "**Pollination** carries pollen to the stigma, by insects, wind, water or birds.",
            "After fertilisation, the **ovule becomes a seed** and the **ovary becomes the fruit**.",
          ] },
        ] },
        { h: "Cloning", blocks: [
          "A **clone** is an exact genetic copy of another organism.",
          { examples: ["**Dolly the sheep**, born in 1996, was the first mammal cloned from an adult cell."] },
        ] },
      ],
      misconceptions: [
        ["Asexual offspring are different from their parent.", "Asexual offspring are identical to the parent; sexual offspring vary."],
        ["All animals give birth to live young.", "Birds, reptiles, fish and frogs lay eggs (they are oviparous)."],
        ["Every egg will hatch.", "Only a fertilised egg can develop; the eggs we usually eat won't hatch."],
        ["A tadpole is just a small frog.", "A tadpole has gills and a tail; it changes completely by metamorphosis."],
        ["Plants reproduce only by seeds.", "Many also reproduce by vegetative parts, such as potato eyes and stem cuttings."],
      ],
      revision: [
        ["Asexual reproduction", "One parent; identical offspring."],
        ["Binary fission", "A cell splitting into two, e.g. Amoeba."],
        ["Budding", "A new individual growing from a bud, e.g. yeast."],
        ["Gametes", "Male and female reproductive cells."],
        ["Fertilisation", "The joining of male and female gametes."],
        ["Zygote", "The first cell of a new individual."],
        ["Oviparous", "Lays eggs."],
        ["Metamorphosis", "Big change in form from young to adult."],
      ],
      questions: [
        ["How does Amoeba reproduce?", "By binary fission."],
        ["How does yeast reproduce?", "By budding."],
        ["What is the main advantage of sexual reproduction?", "It produces variation, which helps the species survive change."],
        ["What is formed when a sperm joins an egg?", "A zygote."],
        ["Why do frogs lay so many eggs?", "Fertilisation is external and many eggs are eaten or lost."],
        ["Is a hen oviparous or viviparous?", "Oviparous: it lays eggs."],
        ["Name the four stages in a butterfly's life.", "Egg, caterpillar (larva), pupa and adult."],
        ["Which plant grows new plants from its leaves?", "Bryophyllum."],
      ],
      takeaway: "Asexual reproduction is quick and makes identical copies; sexual reproduction joins two parents' cells and makes varied young that help a species survive.",
    },

    /* ---------------------------------------------------------- 10 */
    10: {
      topic: "Crop Production, Conservation & Environment",
      title: "Crop Production and Conservation – growing food and protecting nature",
      sections: [
        { h: "Crops and seasons", blocks: [
          "A **crop** is a large number of plants of one kind grown by people.",
          { list: [
            "**Kharif crops** are grown in the **rainy season** (June–September), e.g. paddy (rice), maize, cotton, groundnut.",
            "**Rabi crops** are grown in **winter** (October–March), e.g. wheat, gram, peas, mustard.",
          ] },
        ] },
        { h: "Steps of crop production", blocks: [
          { h: "1. Preparing the soil", blocks: [
            "**Ploughing** (tilling) loosens and turns the soil, letting in air and helping roots grow.",
          ] },
          { h: "2. Sowing", blocks: [
            "**Sowing** is placing seeds in the soil. A **seed drill** sows seeds evenly at the right depth.",
          ] },
          { h: "3. Adding manure and fertilisers", blocks: [
            "These replace the nutrients that crops use up.",
            { list: [
              "**Manure** is natural (decomposed dung and plant waste). It improves the soil's texture and is eco-friendly.",
              "**Fertilisers** are factory-made chemicals. They act fast, but overuse harms the soil and pollutes water.",
            ] },
            { examples: ["**Vermicompost** is made by earthworms from waste. Earthworms are the “farmer's friend” because they loosen and enrich the soil."] },
          ] },
          { h: "4. Irrigation", blocks: [
            "**Irrigation** is supplying water to crops at regular intervals, from wells, canals, rivers or dams.",
            { list: [
              "**Drip irrigation:** water drips straight onto the roots; very little is wasted.",
              "**Sprinklers:** spray water like rain; good for uneven or sandy land.",
            ] },
          ] },
          { h: "5. Protecting the crop", blocks: [
            "**Weeds** are unwanted plants that steal water, light and nutrients from the crop. They are removed by hand, with tools, or with **weedicides**. **Pesticides** kill insect pests, but must be used carefully.",
          ] },
          { h: "6. Harvesting, threshing and storage", blocks: [
            { list: [
              "**Harvesting:** cutting the mature crop, with a sickle or a harvester.",
              "**Threshing:** separating the grain from the stalks. A **combine harvester** harvests and threshes in one go.",
              "**Storage:** grains are **dried** first, so that microbes and pests cannot spoil them.",
            ] },
          ] },
        ] },
        { h: "Keeping the soil fertile", blocks: [
          { list: [
            "**Crop rotation:** growing different crops in turn. A **legume** such as gram puts nitrogen back into the soil.",
            "**Mixed cropping:** growing two crops together, e.g. wheat with gram, so that if one fails the other still gives a yield.",
          ] },
        ] },
        { h: "Animal husbandry", blocks: [
          "**Animal husbandry** is raising animals for food and other products.",
          { list: [
            "**Apiculture:** bee-keeping, for honey and wax.",
            "**Sericulture:** raising silkworms, for silk.",
            "**Pisciculture:** fish farming.",
          ] },
          { examples: [
            "The **Green Revolution** greatly increased food-grain production, using high-yielding seeds and irrigation.",
            "The **White Revolution** made India the world's largest milk producer.",
          ] },
        ] },
        { h: "Deforestation and its effects", blocks: [
          "**Deforestation** is clearing forests for farms, towns, roads and industry.",
          { list: [
            "**Soil erosion**, because no roots hold the soil.",
            "**Less rainfall** and higher temperatures.",
            "**More carbon dioxide** in the air.",
            "**Loss of wildlife** habitats.",
          ] },
          { list: [
            "**Afforestation** is planting trees to create new forests.",
            "**Reforestation** is replanting where a forest was cut down.",
          ] },
          { examples: ["In the **Chipko Movement** of the 1970s, villagers in Uttarakhand hugged trees to stop them being cut."] },
        ] },
        { h: "Biodiversity and endangered species", blocks: [
          "**Biodiversity** is the variety of plants, animals and microbes in an area.",
          { list: [
            "**Endangered** species may soon die out, e.g. the tiger and the one-horned rhinoceros.",
            "**Extinct** species have died out completely, e.g. the dodo and the dinosaurs.",
            "**Endemic** species are found in only one area, e.g. the Asiatic lion in Gir forest.",
          ] },
          { examples: ["The **Red Data Book** records the species at risk."] },
        ] },
        { h: "Protected areas", blocks: [
          { list: [
            "**Wildlife sanctuary:** animals are protected in their natural home; hunting is banned.",
            "**National park:** protects a whole ecosystem; human activity is strictly limited, e.g. Jim Corbett, and **Kaziranga** (one-horned rhinoceros).",
            "**Biosphere reserve:** a large area protecting biodiversity, where local people also live, e.g. Nilgiri, Sundarbans.",
          ] },
          { examples: ["**Project Tiger** (1973) set up tiger reserves to save the tiger."] },
        ] },
        { h: "What we can do", blocks: [
          { list: [
            "**Plant trees**, and save water and electricity.",
            "Follow the **3 R's**: **Reduce, Reuse, Recycle**.",
            "Separate biodegradable and non-biodegradable waste.",
            "Avoid **burning crop stubble**, which pollutes the air and kills useful soil organisms.",
            "On hills, use **terrace farming** to stop soil being washed away.",
          ] },
        ] },
      ],
      misconceptions: [
        ["Wheat is a kharif crop.", "Wheat is a rabi (winter) crop; rice is a kharif (rainy-season) crop."],
        ["More fertiliser always means a better crop.", "Overuse damages the soil and pollutes rivers and lakes."],
        ["All insects in a field are pests.", "Bees and many insects help crops; pesticides can kill them too."],
        ["Endangered and extinct mean the same.", "Endangered species still survive but are at risk; extinct species are gone forever."],
        ["Cutting forests only affects trees.", "It causes soil erosion, less rain and loss of wildlife."],
      ],
      revision: [
        ["Kharif crop", "A rainy-season crop, e.g. rice."],
        ["Rabi crop", "A winter crop, e.g. wheat."],
        ["Irrigation", "Watering crops at regular intervals."],
        ["Weeds", "Unwanted plants growing with a crop."],
        ["Crop rotation", "Growing different crops in turn to keep the soil fertile."],
        ["Deforestation", "Clearing of forests."],
        ["Biodiversity", "The variety of living things in an area."],
        ["Endangered", "A species at risk of dying out."],
      ],
      questions: [
        ["Give one kharif and one rabi crop.", "Rice (kharif) and wheat (rabi)."],
        ["Why is the soil ploughed before sowing?", "To loosen it, so that air gets in and roots grow easily."],
        ["Why is drip irrigation good for dry areas?", "It drips water straight onto the roots, so very little is wasted."],
        ["Why are grains dried before storage?", "Moisture would let microbes and pests spoil them."],
        ["How does growing gram help the soil?", "Its root nodules hold bacteria that add nitrogen to the soil."],
        ["What is apiculture?", "Bee-keeping, for honey and wax."],
        ["Name two harmful effects of deforestation.", "Soil erosion and loss of wildlife habitat (also less rainfall)."],
        ["Where is the one-horned rhinoceros protected?", "In Kaziranga National Park, Assam."],
      ],
      takeaway: "Good farming feeds us, but forests, soil, water and wildlife must be protected so the Earth can keep feeding future generations.",
    },

  },
};
