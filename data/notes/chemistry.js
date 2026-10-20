/* ============================================================
   CHEMISTRY (Class 6-8) - TOPIC OVERVIEWS (study notes)
   ------------------------------------------------------------
   Same format as data/notes/physics.js (see the notes at the top
   of that file): numbered sections where each idea is defined
   first and then followed by examples, then misconceptions,
   quick revision, test-yourself questions and a key takeaway.
   index.html does NOT load this file; tools/build-pages.js does.
   ============================================================ */

window.TOPIC_NOTES = window.TOPIC_NOTES || {};

TOPIC_NOTES["Chemistry"] = {
  footnote: "Notes written by Velnov for Class 6–8 students, following the topics of the NCERT science syllabus.",
  topics: {

    /* ---------------------------------------------------------- 1 */
    1: {
      topic: "Materials & Their Properties",
      title: "Materials and Their Properties – what things are made of",
      sections: [
        { h: "Objects and materials", blocks: [
          "A **material** is the substance an object is made from.",
          { list: [
            "**One material can make many objects:** wood is used for chairs, tables, doors and pencils.",
            "**One object can be made from many materials:** a tumbler can be glass, plastic, steel or even paper.",
          ] },
          "We choose a material for a job by looking at its **properties**: how it looks, how hard it is, whether it dissolves, whether light passes through it, and so on.",
        ] },
        { h: "Appearance and lustre", blocks: [
          "**Lustre** is the shine on the surface of a material. Most metals are **lustrous**.",
          { examples: [
            "Gold, silver and copper ornaments shine when polished.",
            "Iron and silver slowly look dull because air and moisture form a layer on their surface (rust or tarnish). Rubbing removes it.",
          ] },
        ] },
        { h: "Hard, soft, flexible and brittle", blocks: [
          { list: [
            "**Hard** materials resist scratching and pressing, e.g. iron and stone. **Diamond** is the hardest natural substance.",
            "**Soft** materials are easily pressed or scratched, e.g. sponge, cotton, rubber.",
            "**Flexible** materials bend without breaking, e.g. rubber and thin wire.",
            "**Brittle** materials break instead of bending, e.g. glass and chalk.",
          ] },
          { examples: ["A cricket ball is not made of glass, because glass is brittle and would shatter."] },
        ] },
        { h: "Transparent, translucent and opaque", blocks: [
          { list: [
            "**Transparent:** we see clearly through them, e.g. glass, clear plastic, water.",
            "**Translucent:** we see only blurred shapes, e.g. butter paper, frosted glass.",
            "**Opaque:** we cannot see through them at all, e.g. wood, metal, cardboard.",
          ] },
          { examples: ["Window panes are made of glass because it is transparent and hard."] },
        ] },
        { h: "Soluble and insoluble", blocks: [
          "A **soluble** substance dissolves completely in water. An **insoluble** substance does not dissolve.",
          { examples: [
            "Soluble: salt, sugar, glucose.",
            "Insoluble: sand, chalk powder, sawdust. Chalk settles at the bottom of the glass.",
          ] },
          { h: "Solute, solvent and solution", blocks: [
            "When sugar dissolves in water, the **sugar** is the **solute**, the **water** is the **solvent**, and the mixture is a **solution**.",
            { list: [
              "Water dissolves so many substances that it is called the **universal solvent**.",
              "A **saturated solution** cannot dissolve any more solute at that temperature.",
              "**Heating** usually lets more solid dissolve; sugar dissolves faster in hot tea.",
            ] },
          ] },
          { remember: "Dissolved salt is still there, even though you cannot see it. Evaporate the water and the salt is left behind." },
        ] },
        { h: "Liquids that do or don't mix", blocks: [
          "Liquids that mix completely are **miscible**. Liquids that form separate layers are **immiscible**.",
          { examples: [
            "Miscible with water: vinegar, lemon juice, milk.",
            "Immiscible with water: coconut oil and other oils, which float as a layer on top.",
          ] },
          "Some gases dissolve in water too. Fish breathe the **oxygen dissolved** in water.",
        ] },
        { h: "Floating and sinking", blocks: [
          "Whether something floats depends on its **density** compared with water. Objects **less dense** than water float; objects **denser** than water sink.",
          { examples: [
            "Wood, thermocol and oil float; stones, coins and iron nails sink.",
            "A huge iron ship floats because it is hollow. It pushes aside a lot of water, so its overall density is less than water's.",
          ] },
        ] },
        { h: "Conductors and insulators", blocks: [
          "**Conductors** let heat or electricity pass easily; most metals are good conductors. **Insulators** do not, e.g. wood, plastic, rubber, glass and air.",
          { examples: [
            "Cooking pots are metal so heat reaches the food, but their handles are plastic or wood so we can hold them.",
            "Electric wires are copper or aluminium inside and plastic outside.",
          ] },
        ] },
        { h: "Metals and non-metals", blocks: [
          { list: [
            "**Metals** are usually lustrous, hard, **malleable** (can be beaten into sheets), **ductile** (can be drawn into wires), **sonorous** (ring when struck) and good conductors.",
            "**Non-metals** are usually dull, brittle and poor conductors, e.g. sulphur.",
          ] },
          { examples: [
            "Aluminium foil shows malleability; copper wire shows ductility; temple bells show sonority.",
            "Mercury is unusual: it is a metal that is liquid at room temperature.",
          ] },
        ] },
        { h: "Natural and synthetic materials, and classification", blocks: [
          "**Natural** materials come from plants, animals or the earth, e.g. cotton, wood, wool, silk. **Synthetic** materials are made in factories from chemicals, e.g. plastic, nylon, polyester.",
          "**Classification** means grouping materials with similar properties. It makes them easier to study, and helps us predict how a new material will behave.",
          { examples: ["Raincoats are made of plastic because it is waterproof; cotton and paper soak up water."] },
        ] },
      ],
      misconceptions: [
        ["Every metal object is hard and solid.", "Mercury is a liquid metal; sodium is soft enough to cut with a knife."],
        ["Dissolved salt disappears completely.", "It is still in the water; evaporating the water leaves it behind."],
        ["Heavy things always sink.", "Floating depends on density and shape; a huge iron ship floats."],
        ["Oil dissolves in water if stirred hard enough.", "Oil and water are immiscible; they always separate into layers."],
        ["Plastic is used for everything because it is strongest.", "Materials are chosen for the property a job needs, not just strength."],
      ],
      revision: [
        ["Material", "The substance an object is made of."],
        ["Lustre", "The shine on a material's surface."],
        ["Soluble", "Dissolves completely in water, e.g. salt."],
        ["Solvent", "The liquid that does the dissolving, e.g. water."],
        ["Saturated solution", "Cannot dissolve any more solute at that temperature."],
        ["Immiscible", "Liquids that do not mix, e.g. oil and water."],
        ["Malleable", "Can be beaten into thin sheets."],
        ["Ductile", "Can be drawn into thin wires."],
      ],
      questions: [
        ["Give one object that can be made from three different materials.", "A tumbler: glass, plastic or steel (or a chair: wood, plastic or metal)."],
        ["Why does silver jewellery lose its shine?", "Air reacts with its surface and forms a dull layer, which polishing removes."],
        ["Classify butter paper, glass and wood.", "Translucent, transparent and opaque."],
        ["In salt water, which is the solute and which the solvent?", "Salt is the solute; water is the solvent."],
        ["How can you get the salt back from salt water?", "Evaporate the water; the salt is left behind."],
        ["Why does oil float on water?", "It is less dense than water and does not mix with it."],
        ["Why is a cooking pot metal but its handle plastic?", "Metal conducts heat to the food; plastic insulates, so the handle stays cool."],
        ["Which metal is liquid at room temperature?", "Mercury."],
      ],
      takeaway: "Every material has its own set of properties, and those properties decide what we use it for.",
    },

    /* ---------------------------------------------------------- 2 */
    2: {
      topic: "Separation of Substances",
      title: "Separation of Substances – getting mixtures apart",
      sections: [
        { h: "Why separate mixtures?", blocks: [
          "A **mixture** contains two or more substances that are not chemically joined. We separate mixtures:",
          { list: [
            "to **remove unwanted or harmful** parts, such as stones from rice,",
            "to **obtain a useful** part, such as butter from curd,",
            "to get a **pure** substance, such as salt from sea water.",
          ] },
          { remember: "Each method works because the parts of the mixture differ in some property: size, weight, solubility, magnetism or boiling point." },
        ] },
        { h: "Handpicking", blocks: [
          "**Handpicking** is removing unwanted particles by hand. It works only when they are **few** and clearly different in **size or colour**.",
          { examples: ["Picking small stones out of rice or pulses before cooking."] },
        ] },
        { h: "Threshing and winnowing", blocks: [
          { h: "Threshing", blocks: [
            "**Threshing** is beating harvested stalks to separate the grain from them.",
            { examples: ["Farmers beat wheat stalks by hand, use animals, or use threshing machines."] },
          ] },
          { h: "Winnowing", blocks: [
            "**Winnowing** separates **lighter** husk from **heavier** grain using wind. The mixture is dropped from a height: the wind blows the husk away, and the grain falls straight down.",
            { examples: ["After threshing, farmers winnow to get clean grain."] },
          ] },
        ] },
        { h: "Sieving", blocks: [
          "**Sieving** separates particles of **different sizes**. Small particles pass through the holes; large ones stay behind.",
          { examples: [
            "Sieving flour to remove bran.",
            "At a building site, sieving sand to separate it from pebbles.",
          ] },
        ] },
        { h: "Sedimentation and decantation", blocks: [
          { list: [
            "**Sedimentation:** heavier insoluble particles settle at the bottom when a mixture is left undisturbed. The settled layer is the **sediment**.",
            "**Decantation:** pouring off the clear liquid on top without disturbing the sediment.",
          ] },
          { examples: [
            "Leaving muddy water to stand, then pouring off the clearer water.",
            "Pouring off oil floating on water. A **separating funnel** does this more neatly, by draining the lower liquid through a tap.",
          ] },
          { h: "Loading with alum", blocks: [
            "Adding **alum (phitkari)** to muddy water makes tiny particles clump together and settle faster. This is called **loading**.",
          ] },
        ] },
        { h: "Filtration", blocks: [
          "**Filtration** removes **insoluble** solids from a liquid by passing it through filter paper or cloth.",
          { list: [
            "The clear liquid that passes through is the **filtrate**.",
            "The solid left on the filter is the **residue**.",
          ] },
          { examples: [
            "A tea strainer keeps back the tea leaves and lets the tea through.",
            "Filtering chalk out of water.",
          ] },
          { remember: "Filtration **cannot** remove dissolved substances. Salt or sugar particles are so small that they pass through the filter with the water." },
        ] },
        { h: "Evaporation and condensation", blocks: [
          { list: [
            "**Evaporation** is a liquid changing into vapour. It recovers a dissolved solid: the water goes, and the solid stays.",
            "**Condensation** is vapour changing back into liquid on cooling.",
          ] },
          { examples: [
            "Salt is made by trapping sea water in shallow pits and letting the sun evaporate it.",
            "Water droplets form on the outside of a glass of cold water: water vapour in the air condenses.",
          ] },
        ] },
        { h: "Distillation", blocks: [
          "**Distillation** is evaporation followed by condensation. The liquid is boiled, and its vapour is cooled and collected separately as **pure liquid**, while the dissolved solid stays behind.",
          { examples: [
            "Getting pure water from salt water.",
            "Rain is naturally distilled: water evaporates from seas, leaving the salt behind, and condenses into clouds.",
          ] },
          { h: "Fractional distillation", blocks: [
            "Separates **miscible liquids** with different **boiling points**. The liquid with the lower boiling point boils off first.",
            { examples: ["Petrol, kerosene and diesel are separated from crude oil this way."] },
          ] },
        ] },
        { h: "Crystallisation", blocks: [
          "In **crystallisation**, a hot saturated solution is cooled slowly, and the dissolved solid separates out as **pure crystals**. Impurities stay in the liquid, so crystals are purer than the solid from simple evaporation.",
          { examples: ["Growing large blue crystals of copper sulphate."] },
        ] },
        { h: "Other methods", blocks: [
          { list: [
            "**Magnetic separation:** a magnet pulls out the magnetic part, e.g. iron filings from sand.",
            "**Sublimation:** some solids turn straight into vapour on heating, e.g. camphor, naphthalene and ammonium chloride. This separates them from salt.",
            "**Centrifugation (churning):** fast spinning separates lighter parts from heavier ones, e.g. butter from curd, cream from milk, water from clothes in a washing machine.",
          ] },
        ] },
        { h: "Using more than one method", blocks: [
          "Many mixtures need two or three methods, one after another.",
          { examples: [
            "**Sand + salt:** add water to dissolve the salt, filter out the sand, then evaporate the water to get the salt.",
            "**Salt + sand + iron filings:** remove the iron with a magnet first, then dissolve, filter and evaporate.",
            "**Drinking water at a water works:** loading with alum and sedimentation, then filtration through sand beds, then chlorination to kill germs.",
          ] },
        ] },
      ],
      misconceptions: [
        ["Filtration can remove salt from salt water.", "Dissolved salt passes through the filter; evaporation or distillation is needed."],
        ["Evaporation gives you pure water.", "Evaporation recovers the solid. To collect the pure water as well, you need distillation."],
        ["Winnowing works because husk and grain differ in size.", "Winnowing works on weight: wind carries away the lighter husk."],
        ["Any two liquids can be decanted.", "Only immiscible liquids such as oil and water; miscible liquids need distillation."],
        ["One method can separate any mixture.", "The method depends on how the parts differ, and many mixtures need several methods."],
      ],
      revision: [
        ["Handpicking", "Removing a few visible impurities by hand."],
        ["Winnowing", "Separating light husk from heavy grain using wind."],
        ["Sieving", "Separating by particle size."],
        ["Sedimentation", "Heavy particles settling at the bottom."],
        ["Decantation", "Pouring off the clear liquid above a sediment."],
        ["Filtrate / residue", "The liquid that passes through a filter / the solid left on it."],
        ["Distillation", "Boiling a liquid and condensing its vapour to collect it pure."],
        ["Sublimation", "A solid turning directly into vapour, e.g. camphor."],
      ],
      questions: [
        ["Which method removes a few stones from rice?", "Handpicking."],
        ["What property difference does winnowing use?", "Weight: the husk is lighter than the grain."],
        ["Why can't filtration separate sugar from water?", "Dissolved sugar particles are too small and pass through the filter."],
        ["How is salt obtained from sea water?", "By letting the sun evaporate the water in shallow pits."],
        ["How would you get pure water from salt water?", "By distillation: boil it and condense the vapour separately."],
        ["How would you separate sand and salt?", "Dissolve the salt in water, filter out the sand, then evaporate the water."],
        ["Why is alum added to muddy water?", "It makes fine particles clump together and settle faster (loading)."],
        ["Name a method that separates iron filings from sand.", "Magnetic separation, using a magnet."],
      ],
      takeaway: "Every separation method uses a difference between the parts of a mixture, such as size, weight, solubility, magnetism or boiling point.",
    },

    /* ---------------------------------------------------------- 3 */
    3: {
      topic: "Physical & Chemical Changes",
      title: "Physical and Chemical Changes – is something new formed?",
      sections: [
        { h: "Physical change", blocks: [
          "A **physical change** alters only the shape, size, state or appearance of a substance. **No new substance** is formed. Most physical changes can be reversed.",
          { examples: [
            "Melting ice: it is still water.",
            "Boiling water into steam, and condensing it back.",
            "Dissolving salt in water: evaporate the water and the same salt is left.",
            "Cutting paper into pieces: the pieces are still paper.",
          ] },
          { remember: "Not every physical change is easy to undo. A cut sheet of paper or a broken glass stays broken, but no new substance has formed, so it is still a physical change." },
        ] },
        { h: "Chemical change", blocks: [
          "A **chemical change** (or **chemical reaction**) produces **one or more new substances** with different properties. Most chemical changes cannot be reversed easily.",
          { examples: [
            "Burning paper: ash, smoke and gases are formed.",
            "Cooking an egg, or baking a cake.",
            "Milk turning into curd: bacteria turn milk sugar into lactic acid.",
            "Ripening fruit, digesting food and photosynthesis in plants.",
          ] },
          { h: "Signs of a chemical change", blocks: [
            "A chemical change is often shown by one or more of these:",
            { list: [
              "**Heat, light or sound** is given out or taken in.",
              "A **gas** is produced (bubbles).",
              "The **colour** changes.",
              "A **smell** is produced.",
              "A solid called a **precipitate** forms from two solutions.",
            ] },
            { remember: "The real proof of a chemical change is that a **new substance** has formed. The signs above are clues." },
          ] },
        ] },
        { h: "Classic chemical changes to know", blocks: [
          { h: "A. Burning magnesium", blocks: [
            "Magnesium ribbon burns with a **dazzling white light**, leaving white **magnesium oxide** powder. Dissolved in water, this turns red litmus blue, so it is **basic**.",
          ] },
          { h: "B. Iron in copper sulphate", blocks: [
            "Put an iron nail in **blue** copper sulphate solution. The solution turns **green** and a **brown** coating of copper forms on the nail.",
            "Iron is more reactive, so it pushes copper out of its compound. This is a **displacement reaction**.",
          ] },
          { h: "C. Carbon dioxide and lime water", blocks: [
            "Carbon dioxide turns **lime water milky**, because insoluble calcium carbonate forms. This is the standard test for carbon dioxide.",
            { examples: ["Vinegar and baking soda fizz and give carbon dioxide, which turns lime water milky."] },
          ] },
          { h: "D. A candle burning", blocks: [
            "A burning candle shows **both** kinds of change: the wax **melts** (physical), and the wax vapour **burns** to form new substances (chemical).",
          ] },
        ] },
        { h: "Heat in changes", blocks: [
          { list: [
            "**Exothermic** changes **give out** heat, e.g. burning fuel, respiration, adding water to quicklime.",
            "**Endothermic** changes **take in** heat, e.g. melting ice, evaporating water, photosynthesis (which takes in light energy).",
          ] },
        ] },
        { h: "Combination and decomposition", blocks: [
          { list: [
            "**Combination:** two or more substances join to form one new substance, e.g. magnesium + oxygen → magnesium oxide; quicklime + water → slaked lime.",
            "**Decomposition:** one substance breaks into simpler ones, e.g. heating limestone (calcium carbonate) gives quicklime and carbon dioxide.",
          ] },
          "In a chemical equation, the starting substances on the left are **reactants**, and the new substances on the right are **products**.",
        ] },
        { h: "Rusting", blocks: [
          "**Rusting** is a chemical change in which iron reacts with **oxygen and water** to form **rust** (hydrated iron oxide), a brown, flaky substance.",
          { list: [
            "Iron needs **both** air and moisture to rust.",
            "Rusting is faster in **humid** and **coastal** areas, where the air is damp and salty.",
          ] },
          { h: "Preventing rust", blocks: [
            { list: [
              "**Painting or greasing** keeps air and water off the iron.",
              "**Galvanising** coats iron with **zinc**. Zinc corrodes first, so it protects the iron even when scratched.",
              "**Stainless steel** is iron mixed with chromium and nickel, so it does not rust.",
            ] },
            { examples: ["Iron bridges are painted regularly, and roofing sheets are galvanised."] },
          ] },
          { h: "Other corrosion", blocks: [
            { examples: [
              "Silver turns black, because it reacts with sulphur compounds in the air.",
              "Copper turns green, because it reacts with moist air and carbon dioxide.",
            ] },
          ] },
        ] },
        { h: "Crystallisation is physical", blocks: [
          "**Crystallisation** is a physical change: the same substance simply comes out of solution as crystals. Cooling a hot saturated solution **slowly and without disturbance** gives large, well-shaped crystals.",
          { examples: ["Growing crystals of copper sulphate from its hot solution."] },
        ] },
      ],
      misconceptions: [
        ["Every change that can't be undone is chemical.", "Cutting paper can't be undone, but no new substance forms, so it is physical."],
        ["Dissolving salt makes a new substance.", "The salt is unchanged; evaporating the water gets it back."],
        ["A burning candle shows only one kind of change.", "Melting wax is physical; burning wax vapour is chemical."],
        ["Iron rusts in dry air.", "Rusting needs both oxygen and moisture."],
        ["Colour change always means a chemical change.", "It is a clue; the real test is whether a new substance formed."],
      ],
      revision: [
        ["Physical change", "Shape, size or state changes; no new substance."],
        ["Chemical change", "One or more new substances form."],
        ["Precipitate", "An insoluble solid formed when two solutions react."],
        ["Displacement", "A more reactive metal pushes a less reactive one out of its compound."],
        ["Exothermic", "Gives out heat."],
        ["Endothermic", "Takes in heat."],
        ["Rust", "Hydrated iron oxide, formed from iron, oxygen and water."],
        ["Galvanising", "Coating iron with zinc to prevent rust."],
      ],
      questions: [
        ["Is melting ice a physical or a chemical change? Why?", "Physical: it is still water, only its state has changed."],
        ["Why is burning paper a chemical change?", "New substances such as ash and gases form, and the paper cannot be got back."],
        ["What two things does iron need to rust?", "Oxygen (air) and water (moisture)."],
        ["What happens when an iron nail is left in copper sulphate solution?", "The blue solution turns green and brown copper coats the nail: a displacement reaction."],
        ["What is the test for carbon dioxide?", "It turns lime water milky."],
        ["Why does a candle show both kinds of change?", "The wax melts (physical) and its vapour burns into new substances (chemical)."],
        ["How does galvanising protect iron?", "The zinc coating corrodes first, protecting the iron underneath."],
        ["Is souring of milk physical or chemical?", "Chemical: bacteria change milk sugar into lactic acid, a new substance."],
      ],
      takeaway: "Ask one question: has a new substance formed? If not, it is a physical change. If yes, it is a chemical change.",
    },

    /* ---------------------------------------------------------- 4 */
    4: {
      topic: "Acids, Bases & Salts",
      title: "Acids, Bases and Salts – sour, bitter and in between",
      sections: [
        { h: "Acids", blocks: [
          "**Acids** are substances that taste **sour** and turn **blue litmus red**. The word comes from the Latin word “acidus”, meaning sour.",
          { examples: ["Lemon juice, vinegar, tamarind and curd are acidic."] },
          { h: "Acids in daily life", blocks: [
            { list: [
              "**Citric acid:** lemon, orange.",
              "**Acetic acid:** vinegar.",
              "**Lactic acid:** curd and sour milk.",
              "**Tartaric acid:** tamarind, grapes.",
              "**Oxalic acid:** tomato, spinach.",
              "**Formic acid:** ant bites and nettle stings.",
              "**Hydrochloric acid:** our stomach, where it helps digestion and kills germs.",
            ] },
          ] },
          "**Mineral acids** such as sulphuric, hydrochloric and nitric acid are strong acids used in laboratories and industry.",
        ] },
        { h: "Bases", blocks: [
          "**Bases** are substances that taste **bitter**, feel **soapy** and turn **red litmus blue**.",
          { examples: [
            "**Sodium hydroxide:** used to make soap.",
            "**Calcium hydroxide:** lime water.",
            "**Ammonium hydroxide:** window cleaners.",
            "**Magnesium hydroxide:** milk of magnesia, taken for acidity.",
            "**Baking soda** solution is mildly basic.",
          ] },
          { remember: "**Never taste or touch** laboratory acids and bases. Many are corrosive and burn the skin and eyes. Always test them with indicators." },
        ] },
        { h: "Indicators", blocks: [
          "An **indicator** is a substance that changes colour to show whether something is acidic or basic.",
          { list: [
            "**Litmus** (made from lichens): purple when neutral, **red** in acid, **blue** in base.",
            "**Turmeric:** stays **yellow** in acid, turns **red** in base.",
            "**China rose (gudhal):** **magenta** in acid, **green** in base.",
            "**Phenolphthalein:** **colourless** in acid, **pink** in base.",
            "**Methyl orange:** **red** in acid, **yellow** in base.",
          ] },
          { examples: ["A turmeric stain on a shirt turns red when you rub soap on it, because soap is a base."] },
        ] },
        { h: "Neutral substances", blocks: [
          "A **neutral** substance is neither acidic nor basic. It does not change the colour of litmus.",
          { examples: ["Distilled water, sugar solution and common salt solution."] },
        ] },
        { h: "The pH scale", blocks: [
          "The **pH scale** shows how acidic or basic a solution is, from **0 to 14**.",
          { key: "pH below 7 = acidic  ·  pH 7 = neutral  ·  pH above 7 = basic" },
          { list: [
            "The **lower** the pH below 7, the **stronger** the acid; pH 2 is strongly acidic.",
            "The **higher** the pH above 7, the **stronger** the base; pH 12 is strongly basic.",
            "**Universal indicator** gives a different colour at each pH, so it shows how strong an acid or base is, not just which it is.",
          ] },
        ] },
        { h: "Neutralisation", blocks: [
          "**Neutralisation** is the reaction between an acid and a base. They cancel each other's effects and form a **salt and water**. Heat is given out.",
          { key: "Acid + Base → Salt + Water (+ heat)" },
          { examples: ["Hydrochloric acid + sodium hydroxide → sodium chloride (common salt) + water."] },
          { h: "Neutralisation in daily life", blocks: [
            { list: [
              "**Indigestion:** an **antacid** such as milk of magnesia neutralises extra stomach acid.",
              "**Ant or bee sting:** rubbing on **baking soda** neutralises the acid.",
              "**Acidic soil:** farmers add **lime**; **basic soil** is treated with organic matter such as compost.",
              "**Factory waste:** neutralised before release, so that it does not kill fish.",
              "**Toothpaste** is mildly basic. It neutralises the acid that mouth bacteria make from sugar, which can cause decay when the pH falls below about 5.5.",
            ] },
          ] },
        ] },
        { h: "Salts", blocks: [
          "A **salt** is the substance formed, along with water, when an acid neutralises a base. The metal comes from the base, and the rest comes from the acid.",
          { list: [
            "Hydrochloric acid gives **chlorides**, e.g. sodium chloride.",
            "Sulphuric acid gives **sulphates**, e.g. sodium sulphate.",
            "Nitric acid gives **nitrates**.",
          ] },
          { h: "Useful salts", blocks: [
            { list: [
              "**Common salt** (sodium chloride): seasons and preserves food.",
              "**Baking soda** (sodium hydrogen carbonate): cooking, antacid, fire extinguishers.",
              "**Washing soda** (sodium carbonate): laundry, and removing hardness from water.",
            ] },
          ] },
        ] },
        { h: "Reactions of acids", blocks: [
          { list: [
            "Acid + reactive metal (such as zinc) → salt + **hydrogen**. Hydrogen burns with a **pop** sound.",
            "Acid + carbonate (such as marble or baking soda) → salt + water + **carbon dioxide**, which turns lime water milky.",
          ] },
          { examples: [
            "**Acid rain** contains acids formed from polluting gases. It slowly eats away marble buildings such as the Taj Mahal, because marble is calcium carbonate.",
            "Lemon or tamarind cleans dull copper and brass vessels, because their acid dissolves the coating.",
          ] },
          { remember: "To dilute an acid, always add the **acid slowly to water**, never water to acid. A lot of heat is released, and the mixture can splash." },
        ] },
      ],
      misconceptions: [
        ["Tasting is a good way to test for acids.", "Never taste chemicals; use indicators such as litmus."],
        ["All acids are dangerous.", "Many acids in food are weak and safe, like citric acid in lemons; strong mineral acids are dangerous."],
        ["pH 2 is a weaker acid than pH 5.", "The lower the pH, the stronger the acid; pH 2 is stronger."],
        ["Neutralisation destroys both substances and leaves nothing.", "It produces a salt and water, and gives out heat."],
        ["Water can be poured into concentrated acid.", "Always add acid to water slowly; the reverse can splash dangerously."],
      ],
      revision: [
        ["Acid", "Sour; turns blue litmus red; pH below 7."],
        ["Base", "Bitter and soapy; turns red litmus blue; pH above 7."],
        ["Indicator", "Changes colour in acids and bases, e.g. litmus."],
        ["Neutral", "Neither acidic nor basic; pH 7."],
        ["Neutralisation", "Acid + base → salt + water, with heat."],
        ["Antacid", "A mild base that relieves acidity."],
        ["pH scale", "0–14 scale of how acidic or basic a solution is."],
        ["Salt", "Formed with water when an acid and a base react."],
      ],
      questions: [
        ["What colour does blue litmus turn in an acid?", "Red."],
        ["Name the acid in curd and the acid in vinegar.", "Lactic acid in curd; acetic acid in vinegar."],
        ["Why does a turmeric stain turn red when soap is applied?", "Soap is basic, and turmeric turns red in a base."],
        ["What is the pH of a neutral solution?", "7."],
        ["What do you get when an acid reacts with a base?", "A salt and water (and heat)."],
        ["How does milk of magnesia relieve acidity?", "It is a base that neutralises the extra stomach acid."],
        ["Why do farmers add lime to some soils?", "Lime is basic and neutralises soil that is too acidic."],
        ["Which gas is given off when an acid reacts with zinc?", "Hydrogen, which burns with a pop sound."],
      ],
      takeaway: "Acids turn blue litmus red, bases turn red litmus blue, and together they neutralise each other to form a salt and water.",
    },

    /* ---------------------------------------------------------- 5 */
    5: {
      topic: "Metals & Non-metals",
      title: "Metals and Non-metals – two families of elements",
      sections: [
        { h: "Physical properties of metals", blocks: [
          "**Metals** are elements that are usually shiny, strong and good conductors. Their typical properties are:",
          { list: [
            "**Lustre:** shiny surface, e.g. gold, silver.",
            "**Malleability:** can be beaten into thin sheets, e.g. aluminium foil.",
            "**Ductility:** can be drawn into wires, e.g. copper wire.",
            "**Sonority:** ring when struck, e.g. bells.",
            "**Good conductors** of heat and electricity. **Silver** is the best conductor; copper is used for wires because it is cheaper.",
          ] },
          { remember: "Metals conduct because they contain **free electrons** that can move through them." },
        ] },
        { h: "Physical properties of non-metals", blocks: [
          "**Non-metals** are usually **dull, brittle** and **poor conductors**. Solid non-metals break into powder when hammered.",
          { examples: ["Sulphur, carbon, phosphorus, oxygen and nitrogen are non-metals."] },
        ] },
        { h: "Exceptions to remember", blocks: [
          { list: [
            "**Mercury:** a metal that is **liquid** at room temperature.",
            "**Sodium and potassium:** metals **soft** enough to cut with a knife.",
            "**Diamond:** a form of carbon (a non-metal) that is the **hardest** natural substance.",
            "**Graphite:** a form of carbon that **conducts electricity**; used in pencils and in electrodes.",
            "**Bromine:** a non-metal that is **liquid** at room temperature.",
          ] },
        ] },
        { h: "Reaction with oxygen", blocks: [
          { list: [
            "Metals burn in oxygen to form **metal oxides**, which are **basic**. Magnesium oxide turns red litmus blue.",
            "Non-metals burn to form **non-metal oxides**, which are **acidic**. Sulphur dioxide in water turns blue litmus red.",
          ] },
          { key: "Metal oxide → basic  ·  Non-metal oxide → acidic" },
        ] },
        { h: "Reaction with water and acids", blocks: [
          { list: [
            "**Sodium** reacts violently with cold water and can catch fire, so sodium and potassium are **stored under kerosene**.",
            "**Iron** reacts only slowly, or with steam; **copper, silver and gold** do not react with water at all.",
            "Metals react with dilute acids to give a **salt + hydrogen** gas. Non-metals do **not** release hydrogen from acids.",
          ] },
          { examples: ["Zinc + hydrochloric acid → zinc chloride + hydrogen."] },
        ] },
        { h: "The reactivity series and displacement", blocks: [
          "The **reactivity series** lists metals from most reactive to least reactive.",
          { key: "Potassium > Sodium > Calcium > Magnesium > Aluminium > Zinc > Iron > Copper > Silver > Gold" },
          "A **more reactive** metal can **displace** a less reactive metal from its salt solution. A less reactive metal cannot.",
          { examples: [
            "Iron displaces copper from copper sulphate: the solution turns from blue to green.",
            "Copper cannot displace zinc from zinc sulphate, because copper is less reactive.",
          ] },
        ] },
        { h: "Alloys", blocks: [
          "An **alloy** is a mixture of a metal with other metals, or with a non-metal. It is made to improve strength or stop corrosion.",
          { list: [
            "**Steel:** iron + a little carbon. Stronger than iron.",
            "**Stainless steel:** iron + chromium + nickel. Does not rust.",
            "**Brass:** copper + zinc. Used for locks and utensils.",
            "**Bronze:** copper + tin. Used for statues and medals.",
          ] },
        ] },
        { h: "Uses of metals", blocks: [
          { list: [
            "**Aluminium:** light and strong, and does not corrode easily. Used for aeroplanes, cooking pans and foil.",
            "**Copper:** electrical wires, and bases of cooking pans, because it spreads heat well.",
            "**Gold and silver:** jewellery, because they are shiny, malleable and do not corrode.",
            "**Tungsten:** bulb filaments, because it has a very high melting point.",
            "**Zinc:** galvanising iron, and the casing of dry cells.",
            "**Tin:** coating the inside of food cans.",
          ] },
          { remember: "Aluminium is quite reactive, but a thin, tough **oxide layer** forms on its surface and protects it from further corrosion." },
        ] },
        { h: "Uses of non-metals", blocks: [
          { list: [
            "**Oxygen:** breathing and burning.",
            "**Nitrogen:** fertilisers; also filled into packets of chips, because it is unreactive and stops the food spoiling.",
            "**Chlorine:** purifying drinking water.",
            "**Iodine:** tincture of iodine, an antiseptic for wounds.",
            "**Carbon (graphite):** pencils and electrodes.",
            "**Sulphur and phosphorus:** matches and crackers.",
            "**Helium:** balloons, because it is light and does not burn.",
          ] },
        ] },
        { h: "Metalloids", blocks: [
          "**Metalloids** are elements with properties of **both** metals and non-metals.",
          { examples: ["**Silicon** conducts electricity only partly (a **semiconductor**), so it is used to make computer chips and solar cells."] },
        ] },
      ],
      misconceptions: [
        ["All metals are hard solids.", "Mercury is liquid; sodium and potassium are soft."],
        ["No non-metal conducts electricity.", "Graphite, a form of carbon, conducts electricity."],
        ["Pencil “lead” is the metal lead.", "Pencils contain graphite mixed with clay."],
        ["Metal oxides are acidic.", "Metal oxides are basic; non-metal oxides are acidic."],
        ["Any metal can displace any other metal.", "Only a more reactive metal can displace a less reactive one."],
      ],
      revision: [
        ["Malleable", "Can be beaten into sheets."],
        ["Ductile", "Can be drawn into wires."],
        ["Sonorous", "Rings when struck."],
        ["Reactivity series", "Metals listed from most to least reactive."],
        ["Displacement", "A more reactive metal replaces a less reactive one in a compound."],
        ["Alloy", "A metal mixed with other metals or with a non-metal, e.g. brass."],
        ["Metalloid", "Shows properties of both metals and non-metals, e.g. silicon."],
        ["Basic oxide", "A metal oxide, which forms a base with water."],
      ],
      questions: [
        ["Which metal is the best conductor of electricity?", "Silver."],
        ["Why are sodium and potassium stored under kerosene?", "They react violently with air and moisture."],
        ["Name a non-metal that conducts electricity.", "Graphite."],
        ["Is sulphur dioxide acidic or basic?", "Acidic: it is a non-metal oxide."],
        ["Can copper displace zinc from zinc sulphate?", "No, because copper is less reactive than zinc."],
        ["What is brass made of?", "Copper and zinc."],
        ["Why is nitrogen filled in chip packets?", "It is unreactive, so it stops the oil in the chips from going bad."],
        ["Why is tungsten used in bulb filaments?", "Its very high melting point lets it glow white-hot without melting."],
      ],
      takeaway: "Metals are shiny, malleable conductors that form basic oxides; non-metals are mostly dull, brittle non-conductors that form acidic oxides. Remember the exceptions.",
    },

    /* ---------------------------------------------------------- 6 */
    6: {
      topic: "Combustion, Flame & Fuels",
      title: "Combustion, Flame and Fuels – how things burn",
      sections: [
        { h: "What is combustion?", blocks: [
          "**Combustion** is a chemical reaction in which a substance reacts with **oxygen** and gives out **heat** (and often light).",
          { list: [
            "**Combustible** substances burn, e.g. wood, paper, kerosene, LPG.",
            "**Non-combustible** substances do not, e.g. stone, glass, iron nails.",
          ] },
        ] },
        { h: "Three things needed for burning", blocks: [
          "Combustion needs all three of these at the same time:",
          { list: [
            "a **fuel** (a combustible substance),",
            "a **supporter of combustion**, which is **oxygen** (air),",
            "**heat** to reach the **ignition temperature**.",
          ] },
          { examples: ["A candle covered with a glass jar goes out once the oxygen inside is used up."] },
          { remember: "Remove any one of the three and the fire stops. This is the idea behind all fire fighting." },
        ] },
        { h: "Ignition temperature", blocks: [
          "The **ignition temperature** is the lowest temperature at which a substance catches fire.",
          { list: [
            "Substances with a **very low** ignition temperature catch fire easily and are called **inflammable**, e.g. petrol, alcohol, LPG.",
            "Iron has a very high ignition temperature, so an iron nail does not burn in a candle flame, but paper does.",
          ] },
          { examples: ["Striking a match: friction produces enough heat to raise the chemicals on its head to their ignition temperature."] },
        ] },
        { h: "Types of combustion", blocks: [
          { list: [
            "**Rapid combustion:** burns quickly, giving heat and light, e.g. a gas stove.",
            "**Spontaneous combustion:** catches fire **on its own**, with no flame applied. White phosphorus does this in air, so it is stored under water.",
            "**Explosion:** a sudden burst of heat, light, sound and gas, e.g. a firecracker.",
          ] },
          { examples: ["Respiration in our cells is often described as slow combustion: food is oxidised slowly, releasing energy without a flame."] },
        ] },
        { h: "The flame", blocks: [
          "A **flame** forms only when a substance **vaporises** as it burns. Wax, kerosene and LPG give flames; **charcoal** only **glows**.",
          { h: "The three zones of a candle flame", blocks: [
            { list: [
              "**Innermost zone (dark):** unburnt wax vapour; the **least hot** part.",
              "**Middle zone (yellow, luminous):** partial burning; glowing carbon particles give the yellow light and leave soot on a cold glass.",
              "**Outer zone (blue, non-luminous):** complete burning; the **hottest** part.",
            ] },
            { examples: ["Goldsmiths blow the outer zone of a flame onto gold to melt it."] },
          ] },
        ] },
        { h: "Fuels and calorific value", blocks: [
          "A **fuel** is a substance burnt to produce heat. Fuels can be solid (wood, coal), liquid (kerosene, petrol, diesel) or gas (LPG, CNG).",
          "**Calorific value** is the heat produced by completely burning **1 kg** of a fuel. It is measured in **kilojoules per kilogram (kJ/kg)**.",
          { examples: ["**Hydrogen** has the highest calorific value of all fuels, about 150,000 kJ/kg, and burning it produces only water."] },
          { h: "An ideal fuel", blocks: [
            "An ideal fuel is **cheap**, **easily available**, easy to store and transport, has a **high calorific value**, burns at a steady rate and causes **little pollution**.",
            { examples: ["CNG is cleaner than petrol or diesel because it burns almost completely, with very little smoke."] },
          ] },
        ] },
        { h: "Harmful effects of burning fuels", blocks: [
          { list: [
            "**Carbon monoxide:** produced when there is too little oxygen (incomplete combustion). It is poisonous; it stops blood carrying oxygen. Never burn coal in a closed room.",
            "**Soot:** unburnt carbon particles that cause breathing problems such as asthma.",
            "**Carbon dioxide:** traps heat in the atmosphere, causing **global warming**.",
            "**Sulphur dioxide and nitrogen oxides:** dissolve in rainwater to form **acid rain**.",
          ] },
          { examples: ["A blue flame on a gas stove means complete combustion; a yellow, sooty flame means not enough air."] },
        ] },
        { h: "Fighting fires", blocks: [
          "A fire is put out by removing **fuel**, **oxygen** or **heat**.",
          { list: [
            "**Water:** for wood, paper and cloth. It cools the fire below the ignition temperature.",
            "**Not water** on electrical fires, because water conducts electricity and can give a shock.",
            "**Not water** on oil or petrol fires, because oil floats on water and keeps burning.",
            "**Carbon dioxide:** best for electrical and oil fires. It is heavier than air, so it blankets the fire and cuts off oxygen, and it also cools it.",
            "**Sand or a wet blanket:** smothers small fires by cutting off air.",
          ] },
          { examples: ["Firefighters clear a strip of forest ahead of a forest fire, so that there is no fuel for it to spread to."] },
        ] },
        { h: "Using fuels safely and wisely", blocks: [
          { list: [
            "LPG has a smell added so leaks can be noticed. If you smell gas: turn off the regulator, open the windows, and **do not** touch electrical switches.",
            "Save fuel by walking, cycling, using public transport, and switching off engines at red lights.",
          ] },
        ] },
      ],
      misconceptions: [
        ["Anything will burn if it is hot enough and has a flame.", "It also needs oxygen; and some substances, like stone, don't burn at all."],
        ["The yellow part of a flame is the hottest.", "The outer blue zone is the hottest; the yellow zone is only partly burning."],
        ["Water puts out every fire.", "Never use water on electrical or oil fires; use carbon dioxide or sand."],
        ["Carbon monoxide can be smelt.", "It has no colour and no smell, which makes it so dangerous."],
        ["Charcoal burns with a big flame.", "Charcoal does not vaporise, so it only glows."],
      ],
      revision: [
        ["Combustion", "A reaction with oxygen that gives out heat."],
        ["Ignition temperature", "The lowest temperature at which a substance catches fire."],
        ["Inflammable", "Catches fire very easily, e.g. petrol."],
        ["Spontaneous combustion", "Catching fire on its own, e.g. white phosphorus."],
        ["Calorific value", "Heat from burning 1 kg of fuel (kJ/kg)."],
        ["Incomplete combustion", "Burning with too little oxygen; gives carbon monoxide and soot."],
        ["Global warming", "Rise in Earth's temperature from extra carbon dioxide."],
        ["Fire extinguisher", "Removes oxygen and/or heat from a fire."],
      ],
      questions: [
        ["What three things are needed for combustion?", "A fuel, oxygen and heat to reach the ignition temperature."],
        ["Why does a candle under a glass jar go out?", "The oxygen inside gets used up."],
        ["Which zone of a candle flame is hottest?", "The outer, blue (non-luminous) zone."],
        ["What is calorific value measured in?", "Kilojoules per kilogram (kJ/kg)."],
        ["Which fuel has the highest calorific value?", "Hydrogen."],
        ["Why is it dangerous to burn coal in a closed room?", "Incomplete burning makes poisonous carbon monoxide."],
        ["Why shouldn't water be used on an electrical fire?", "Water conducts electricity, so it can give a shock."],
        ["Why is white phosphorus stored under water?", "It catches fire on its own in air (spontaneous combustion)."],
      ],
      takeaway: "Burning needs fuel, oxygen and heat. Take any one away and the fire goes out; choose clean fuels to keep the air safe.",
    },

    /* ---------------------------------------------------------- 7 */
    7: {
      topic: "Coal, Petroleum & Natural Resources",
      title: "Coal, Petroleum and Natural Resources – using what nature gives",
      sections: [
        { h: "Natural resources", blocks: [
          "**Natural resources** are things found in nature that people use.",
          { list: [
            "**Inexhaustible** resources are present in **unlimited** amounts and will not run out, e.g. sunlight and air.",
            "**Exhaustible** resources are **limited** and can be used up, e.g. forests, minerals, coal, petroleum and natural gas.",
          ] },
        ] },
        { h: "Fossil fuels", blocks: [
          "**Fossil fuels** are fuels formed from the **remains of dead plants and animals** buried under the earth for **millions of years**.",
          { key: "Coal (solid)  ·  Petroleum (liquid)  ·  Natural gas (gas)" },
          { remember: "Fossil fuels take millions of years to form, so once used up they cannot be replaced in our lifetime." },
        ] },
        { h: "Coal", blocks: [
          "**Coal** formed from huge forests that were buried about 300 million years ago. Heat and pressure, without air, slowly turned the plants into coal. This process is called **carbonisation**.",
          "Coal is mostly **carbon**. Its grades, from lowest to highest carbon content, are:",
          { key: "Peat → Lignite → Bituminous coal → Anthracite (best)" },
          { examples: ["Most of India's electricity comes from thermal power plants, which burn coal to turn water into steam that spins turbines."] },
          { h: "Products from coal", blocks: [
            "Heating coal **without air** (**destructive distillation**) gives three useful products:",
            { list: [
              "**Coke:** almost pure carbon, tough and porous. Used to make steel and to extract metals.",
              "**Coal tar:** a thick, black, smelly liquid that is a mixture of about 200 substances. Used to make dyes, paints, drugs, plastics, perfumes and **naphthalene balls**.",
              "**Coal gas:** a fuel gas. It lit the streets of London from 1810, and is now used in industry.",
            ] },
          ] },
        ] },
        { h: "Petroleum", blocks: [
          "**Petroleum** formed from tiny **sea plants and animals** that died, sank to the sea bed and were covered with sand and clay. Over millions of years, heat and pressure turned them into oil and natural gas.",
          "Oil and gas collect in rock, trapped under a layer that does not let them through. Gas sits on top, then oil, then water.",
          { examples: [
            "The world's first oil well was drilled in Pennsylvania, USA, in 1859.",
            "India's first oil well was at **Digboi, Assam**, in 1867.",
            "Petroleum is called **black gold** because it is dark and very valuable.",
          ] },
          { h: "Refining", blocks: [
            "Crude oil is a mixture, so it must be **refined** before use. It is separated in a **refinery** by **fractional distillation**, because each part (fraction) has a different boiling point.",
            { key: "Lightest (top) → Petroleum gas · Petrol · Kerosene · Diesel · Lubricating oil · Paraffin wax · Bitumen ← Heaviest (bottom)" },
          ] },
          { h: "Uses of petroleum products", blocks: [
            { list: [
              "**Petroleum gas (LPG):** cooking fuel.",
              "**Petrol:** cars and motorcycles; also a dry-cleaning solvent.",
              "**Kerosene:** jet aircraft fuel, stoves and lamps.",
              "**Diesel:** trucks, buses, tractors and generators.",
              "**Lubricating oil:** reduces friction in machines.",
              "**Paraffin wax:** candles, ointments and vaseline.",
              "**Bitumen:** road surfaces and waterproof paints.",
            ] },
            "**Petrochemicals** from petroleum and natural gas are used to make plastics, polythene, nylon, polyester and detergents.",
          ] },
        ] },
        { h: "Natural gas", blocks: [
          "**Natural gas** is found with petroleum. It is mainly **methane**. Stored under high pressure, it is called **CNG (Compressed Natural Gas)**.",
          { list: [
            "It is a **clean** fuel, with very little smoke.",
            "It can be sent straight to homes and factories through **pipelines**.",
            "It supplies hydrogen for making **fertilisers**.",
          ] },
          { examples: ["Delhi's buses and autorickshaws switched to CNG to cut air pollution."] },
        ] },
        { h: "Where they are found in India", blocks: [
          { list: [
            "**Coal:** Jharkhand, Odisha, West Bengal, Chhattisgarh, Madhya Pradesh.",
            "**Petroleum:** Assam, Gujarat, Maharashtra (Mumbai High) and Rajasthan.",
            "**Natural gas:** Tripura, Rajasthan, Maharashtra, and the Krishna–Godavari delta.",
          ] },
        ] },
        { h: "Problems and conservation", blocks: [
          "Fossil fuels are **limited**, and burning them causes **pollution**: carbon dioxide (global warming), sulphur dioxide (acid rain) and soot.",
          { h: "Saving fuel (PCRA tips)", blocks: [
            "The **Petroleum Conservation Research Association (PCRA)** advises:",
            { list: [
              "Drive at a **steady, moderate speed**.",
              "**Switch off** the engine at traffic lights.",
              "Keep the **tyre pressure** correct, and service vehicles regularly.",
            ] },
          ] },
          { h: "Alternatives", blocks: [
            "**Renewable** energy sources do not run out, e.g. **solar, wind, water (hydro) and biogas**.",
            { examples: ["**Biogas** is made when bacteria break down cow dung and plant waste without air. It is mostly methane, and the leftover slurry is good manure."] },
          ] },
        ] },
      ],
      misconceptions: [
        ["Coke is a petroleum product.", "Coke comes from coal; petroleum gives petrol, kerosene and diesel."],
        ["Fossil fuels will form again soon.", "They take millions of years, so for us they are effectively non-renewable."],
        ["Crude oil can be used straight from the well.", "It is a mixture that must be refined first."],
        ["Air and sunlight can run out.", "They are inexhaustible, though air can be polluted."],
        ["Coal and petroleum formed the same way.", "Coal came from land forests; petroleum came from tiny sea organisms."],
      ],
      revision: [
        ["Exhaustible resource", "Limited; can be used up, e.g. coal."],
        ["Fossil fuel", "Formed over millions of years from buried living things."],
        ["Carbonisation", "Slow change of buried plants into coal."],
        ["Coke", "Almost pure carbon from coal; used in steel making."],
        ["Coal tar", "A black liquid from coal; source of naphthalene."],
        ["Refining", "Separating petroleum into its fractions."],
        ["CNG", "Compressed natural gas; a clean fuel."],
        ["Petrochemicals", "Chemicals from petroleum used for plastics and fibres."],
      ],
      questions: [
        ["Give one inexhaustible and one exhaustible resource.", "Sunlight (inexhaustible) and coal (exhaustible)."],
        ["What is the process of coal formation called?", "Carbonisation."],
        ["Name three products made from coal.", "Coke, coal tar and coal gas."],
        ["Which product of coal tar repels moths?", "Naphthalene."],
        ["How is petroleum separated into petrol, kerosene and diesel?", "By refining (fractional distillation), using their different boiling points."],
        ["Which petroleum product is used for road surfaces?", "Bitumen."],
        ["Why is CNG called a clean fuel?", "It burns almost completely, with very little smoke."],
        ["Where was India's first oil well drilled?", "Digboi, in Assam."],
      ],
      takeaway: "Coal and petroleum took millions of years to form and are running out, so we must use them carefully and switch to renewable energy.",
    },

    /* ---------------------------------------------------------- 8 */
    8: {
      topic: "Synthetic Fibres & Plastics",
      title: "Synthetic Fibres and Plastics – long chains made by people",
      sections: [
        { h: "Natural and synthetic fibres", blocks: [
          { list: [
            "**Natural fibres** come from plants and animals, e.g. cotton, jute, wool, silk.",
            "**Synthetic fibres** are made by people from **chemicals**, mostly from petroleum, e.g. nylon, polyester, acrylic.",
          ] },
        ] },
        { h: "Polymers", blocks: [
          "A **polymer** is a very large molecule made by joining many small units, called **monomers**, into a long chain. The word means “many parts”.",
          { examples: [
            "Cotton is a **natural polymer** (cellulose), made of many glucose units.",
            "Nylon, polyester and all plastics are **synthetic polymers**.",
          ] },
        ] },
        { h: "Types of synthetic fibres", blocks: [
          { h: "A. Rayon (artificial silk)", blocks: [
            "Rayon is made by chemically treating **wood pulp**. It looks and feels like silk but is much cheaper. Because its raw material is natural, it is called **semi-synthetic**.",
            { examples: ["Bed sheets, carpets (mixed with wool) and medical dressings."] },
          ] },
          { h: "B. Nylon", blocks: [
            "Nylon, made in **1931**, was the **first fully synthetic fibre**, prepared from coal, water and air. It is **strong, elastic and light**, and dries quickly.",
            { examples: ["Parachutes, climbing ropes, seat belts, fishing nets, socks, tents and toothbrush bristles."] },
          ] },
          { h: "C. Polyester", blocks: [
            "Polyester is made of repeating units called **esters**. It **does not wrinkle easily**, stays crisp and is easy to wash. **Terylene** and **PET** are types of polyester.",
            { examples: ["Shirts and dress material; PET bottles and food jars."] },
          ] },
          { h: "D. Acrylic (artificial wool)", blocks: [
            "Acrylic looks and feels like **wool** but is cheaper, lasts longer and comes in many colours.",
            { examples: ["Sweaters, shawls and blankets."] },
          ] },
          { h: "Blended fabrics", blocks: [
            "Fibres are often mixed to combine their good points:",
            { list: [
              "**Terrycot** = terylene + cotton.",
              "**Polycot** = polyester + cotton.",
              "**Terrywool** = terylene + wool.",
            ] },
          ] },
        ] },
        { h: "Good and bad points of synthetic fibres", blocks: [
          { h: "Advantages", blocks: [
            { list: [
              "Strong and long-lasting.",
              "Dry quickly and are easy to wash.",
              "Cheaper than most natural fibres, and available in large amounts.",
            ] },
          ] },
          { h: "Disadvantages", blocks: [
            { list: [
              "They **do not absorb sweat**, so they feel sticky in hot weather. Cotton is better in summer.",
              "They **melt** when heated. Burning synthetic clothes stick to the skin, so cotton is safer in kitchens and laboratories.",
              "They are **non-biodegradable**.",
            ] },
          ] },
          { examples: ["In a burning test, nylon melts into a hard bead, cotton burns to soft ash, and wool smells like burning hair."] },
        ] },
        { h: "Plastics", blocks: [
          "**Plastics** are polymers that can be moulded into almost any shape. There are two kinds:",
          { h: "Thermoplastics", blocks: [
            "Can be **softened by heating and reshaped again and again**.",
            { examples: ["Polythene (bags, bottles) and PVC (pipes, cable covers, raincoats)."] },
          ] },
          { h: "Thermosetting plastics", blocks: [
            "Once set, they **cannot be softened** again by heating.",
            { examples: [
              "**Bakelite:** a poor conductor of heat and electricity, used for switches and pan handles.",
              "**Melamine:** resists heat and fire, used for kitchenware, floor tiles and firefighters' uniforms.",
            ] },
          ] },
          { h: "Why plastics are so widely used", blocks: [
            { list: [
              "They are **light, strong, cheap** and easy to mould.",
              "They **do not rust** or react with water, air or most chemicals, so they are used to store food and chemicals.",
              "They are **poor conductors**, so they are used for electrical insulation and tool handles.",
              "**Teflon** is a special plastic that oil and water do not stick to, used on non-stick pans.",
              "**Healthcare:** syringes, gloves and blood bags.",
            ] },
          ] },
        ] },
        { h: "Plastics and the environment", blocks: [
          "A **biodegradable** material is broken down naturally by bacteria, e.g. vegetable peels, paper and cotton. Plastics are **non-biodegradable**: they stay in the environment for hundreds of years.",
          { list: [
            "Plastic waste **clogs drains** and pollutes soil, rivers and oceans.",
            "**Cows** swallow polythene bags with food scraps, which can kill them.",
            "**Burning** plastic gives off **poisonous gases**.",
            "Abandoned nylon fishing nets keep trapping sea animals for years.",
          ] },
          { h: "The 4 R's", blocks: [
            { key: "Reduce · Reuse · Recycle · Recover" },
            { examples: [
              "**Reduce:** carry a cloth or jute bag when shopping.",
              "**Reuse:** use containers again.",
              "**Recycle:** send plastic for recycling, and keep biodegradable and non-biodegradable waste in separate bins.",
            ] },
          ] },
        ] },
      ],
      misconceptions: [
        ["Rayon is a natural fibre.", "Rayon is made from natural wood pulp, but by a chemical process, so it is semi-synthetic."],
        ["All plastics melt when heated.", "Thermosetting plastics such as bakelite do not soften again."],
        ["Synthetic clothes are best for hot weather.", "They don't absorb sweat; cotton is more comfortable."],
        ["Plastics rot away in a few months.", "They are non-biodegradable and last for hundreds of years."],
        ["Burning plastic is a clean way to get rid of it.", "It releases poisonous gases."],
      ],
      revision: [
        ["Polymer", "A long chain made of many repeating small units (monomers)."],
        ["Rayon", "Artificial silk made from wood pulp."],
        ["Nylon", "The first fully synthetic fibre: strong, elastic and light."],
        ["Polyester", "A wrinkle-free fibre; Terylene and PET are polyesters."],
        ["Acrylic", "Artificial wool."],
        ["Thermoplastic", "Can be softened and reshaped repeatedly, e.g. PVC."],
        ["Thermosetting plastic", "Cannot be softened again, e.g. bakelite."],
        ["Biodegradable", "Broken down naturally by bacteria."],
      ],
      questions: [
        ["What is a polymer?", "A large molecule made by joining many small units (monomers)."],
        ["Why is rayon called artificial silk?", "It looks and feels like silk but is made from wood pulp."],
        ["Why is nylon used for parachutes?", "It is very strong, elastic and light."],
        ["Why are synthetic clothes unsafe in a kitchen?", "They melt and stick to the skin if they catch fire."],
        ["What is the difference between a thermoplastic and a thermosetting plastic?", "A thermoplastic can be softened again by heat; a thermosetting plastic cannot."],
        ["Why is bakelite used for electric switches?", "It is a poor conductor of heat and electricity."],
        ["Why are plastics harmful to the environment?", "They are non-biodegradable, so they build up in soil and water for centuries."],
        ["What are the 4 R's?", "Reduce, Reuse, Recycle and Recover."],
      ],
      takeaway: "Synthetic fibres and plastics are useful, cheap polymers, but nature cannot break them down, so we must reduce, reuse and recycle them.",
    },

    /* ---------------------------------------------------------- 9 */
    9: {
      topic: "Air, Water & Pollution",
      title: "Air, Water and Pollution – keeping them clean",
      sections: [
        { h: "What is air made of?", blocks: [
          "**Air** is a **mixture** of gases, water vapour and dust. Its gases keep their own properties.",
          { list: [
            "**Nitrogen:** about **78%**.",
            "**Oxygen:** about **21%**.",
            "**Argon, carbon dioxide** (about 0.04%), water vapour and other gases make up the rest.",
          ] },
          { remember: "The amount of oxygen in air stays steady because plants release oxygen in photosynthesis, while breathing and burning use it up." },
        ] },
        { h: "Air pollution", blocks: [
          "**Air pollution** is the contamination of air by harmful substances, called **pollutants**. The main sources are burning fuels in **vehicles, factories and power plants**, and burning waste.",
          { h: "Main air pollutants", blocks: [
            { list: [
              "**Carbon monoxide:** from incomplete burning. It is poisonous and stops blood carrying oxygen.",
              "**Sulphur dioxide and nitrogen oxides:** from burning coal and fuels. They cause breathing problems and acid rain.",
              "**Particulate matter (PM2.5):** tiny particles of smoke and dust that go deep into the lungs.",
              "**CFCs:** from old refrigerators and air conditioners. They damage the ozone layer.",
              "**Carbon dioxide and methane:** greenhouse gases that cause global warming.",
            ] },
          ] },
        ] },
        { h: "Effects of air pollution", blocks: [
          { h: "A. Health problems", blocks: [
            { examples: ["Asthma, bronchitis, allergies and, with long exposure, lung cancer."] },
          ] },
          { h: "B. Acid rain", blocks: [
            "**Acid rain** forms when sulphur dioxide and nitrogen oxides dissolve in rainwater, making acids. It harms crops, soil, lakes and buildings.",
            { examples: ["Acid rain corrodes the marble of the **Taj Mahal**, turning it yellow (“marble cancer”). Industries nearby were told to switch to cleaner fuels such as CNG and LPG."] },
          ] },
          { h: "C. Greenhouse effect and global warming", blocks: [
            "The **greenhouse effect** is the trapping of the Earth's heat by gases such as carbon dioxide and methane. Too much of these gases causes **global warming**: a rise in the Earth's average temperature.",
            { examples: ["Glaciers and polar ice melt, sea levels rise, and weather becomes more extreme."] },
          ] },
          { h: "D. Smog and ozone damage", blocks: [
            { list: [
              "**Smog** is smoke mixed with fog. It cuts visibility and makes breathing hard.",
              "The **ozone layer** high in the sky absorbs the Sun's harmful **ultraviolet** rays. CFCs thin it.",
            ] },
          ] },
          { examples: ["The **Bhopal gas tragedy** of 1984, a leak of poisonous methyl isocyanate gas from a factory, killed thousands of people."] },
        ] },
        { h: "Reducing air pollution", blocks: [
          { list: [
            "Use **public transport**, cycle or walk.",
            "Use **cleaner fuels** such as CNG, and **unleaded** petrol.",
            "Fit vehicles with **catalytic converters**, which change harmful exhaust gases into less harmful ones.",
            "**Plant trees** (as in Van Mahotsav): they absorb carbon dioxide and trap dust.",
            "Use **solar** cookers and heaters, and avoid burning crop stubble, waste and firecrackers.",
          ] },
        ] },
        { h: "Water pollution", blocks: [
          "**Water pollution** is the addition of harmful substances that make water unsafe for drinking, bathing or aquatic life.",
          { h: "Causes", blocks: [
            { list: [
              "**Untreated sewage** from towns and cities.",
              "**Industrial waste**, including poisonous heavy metals such as mercury and lead.",
              "**Fertilisers and pesticides** washed from farms by rain.",
              "**Hot water** from factories (**thermal pollution**), which holds less oxygen.",
              "**Oil spills** at sea, and garbage thrown into rivers.",
            ] },
          ] },
          { h: "Eutrophication", blocks: [
            "Fertilisers in a lake make **algae** grow too much. When the algae die and rot, bacteria use up the **dissolved oxygen**, and fish die.",
          ] },
          { examples: [
            "Drinking dirty water spreads diseases such as **cholera, typhoid and jaundice**.",
            "The **Ganga Action Plan** (1985) was started to clean the river Ganga.",
          ] },
        ] },
        { h: "Making water safe to drink", blocks: [
          "Water that is safe to drink is called **potable water**.",
          { list: [
            "**Boiling:** the simplest way to kill germs at home.",
            "**Filtering:** removes dirt.",
            "**Chlorination:** adding chlorine tablets or bleaching powder kills germs.",
            "**UV purifiers:** ultraviolet light kills germs without adding chemicals.",
          ] },
          { examples: ["At a city water works: alum and sedimentation, then filtration through sand beds, then chlorination."] },
        ] },
        { h: "Saving water", blocks: [
          { list: [
            "Fix **leaking taps**, and turn off the tap while brushing.",
            "**Rainwater harvesting:** collecting rain from rooftops, or letting it soak into the ground to refill groundwater.",
            "**Drip irrigation:** watering plants drop by drop at their roots.",
            "Treat sewage in **treatment plants** before it reaches rivers.",
          ] },
        ] },
      ],
      misconceptions: [
        ["Air is mostly oxygen.", "Air is about 78% nitrogen and only about 21% oxygen."],
        ["Air is a compound.", "Air is a mixture: its gases can be separated, and their amounts vary."],
        ["Clear water is always safe to drink.", "It can still contain germs or dissolved poisons; boil or purify it."],
        ["Global warming and the ozone hole are the same problem.", "Global warming comes from greenhouse gases; ozone damage comes mainly from CFCs."],
        ["Fertilisers in lakes help fish.", "They cause algae to grow, which uses up oxygen when it rots and kills fish."],
      ],
      revision: [
        ["Pollutant", "A harmful substance added to air or water."],
        ["Carbon monoxide", "A poisonous gas from incomplete burning."],
        ["Acid rain", "Rain made acidic by sulphur dioxide and nitrogen oxides."],
        ["Greenhouse effect", "Trapping of Earth's heat by gases like carbon dioxide."],
        ["Ozone layer", "Absorbs harmful ultraviolet rays from the Sun."],
        ["Eutrophication", "Too much algae from fertilisers, which uses up oxygen in water."],
        ["Potable water", "Water that is safe to drink."],
        ["Rainwater harvesting", "Collecting rainwater or letting it recharge groundwater."],
      ],
      questions: [
        ["Which gas makes up most of the air?", "Nitrogen, about 78%."],
        ["Why is carbon monoxide dangerous?", "It stops the blood from carrying oxygen."],
        ["Which gases cause acid rain?", "Sulphur dioxide and nitrogen oxides."],
        ["Why is the Taj Mahal turning yellow?", "Acid rain is corroding its marble."],
        ["What does the ozone layer protect us from?", "The Sun's harmful ultraviolet rays."],
        ["Name two diseases spread by polluted water.", "Cholera and typhoid (also jaundice and dysentery)."],
        ["What is the simplest way to make water safe at home?", "Boiling it for several minutes."],
        ["Give two ways to save water.", "Fix leaking taps, and harvest rainwater (or use drip irrigation)."],
      ],
      takeaway: "Most air and water pollution comes from human activity, so cleaner fuels, treating waste and saving water can fix much of it.",
    },

    /* ---------------------------------------------------------- 10 */
    10: {
      topic: "Matter: Elements, Compounds & Mixtures",
      title: "Matter – elements, compounds and mixtures",
      sections: [
        { h: "What is matter?", blocks: [
          "**Matter** is anything that has **mass** and takes up **space**.",
          { examples: [
            "A book, water, air and a stone are all matter.",
            "Light and heat are **not** matter; they are forms of energy.",
          ] },
        ] },
        { h: "Matter is made of particles", blocks: [
          "Matter is made of tiny **particles** that:",
          { list: [
            "have **spaces** between them,",
            "are **always moving**,",
            "**attract** each other.",
          ] },
          { examples: ["Sugar dissolved in a full glass of water does not make it overflow: the sugar particles fit into the spaces between the water particles."] },
        ] },
        { h: "Solids, liquids and gases", blocks: [
          { list: [
            "**Solid:** fixed **shape** and fixed **volume**. Particles are tightly packed, with the strongest attraction between them.",
            "**Liquid:** fixed volume, but **takes the shape** of its container. Particles can slide past each other.",
            "**Gas:** **no fixed shape or volume**; it fills its container. Particles are far apart and move fast.",
          ] },
          { key: "Space between particles: Solid < Liquid < Gas" },
          { examples: ["Gases can be **compressed** a lot, which is why LPG and CNG can be packed into cylinders."] },
        ] },
        { h: "Diffusion", blocks: [
          "**Diffusion** is the spreading out and mixing of particles on their own, because they are always moving. It is **fastest in gases**, slower in liquids and very slow in solids, and it speeds up when it is **warmer**.",
          { examples: [
            "The smell of perfume, or of food cooking, spreads through a house.",
            "A drop of ink slowly spreads through a glass of water.",
          ] },
        ] },
        { h: "Changes of state", blocks: [
          { list: [
            "**Melting:** solid → liquid. Ice melts at 0 °C.",
            "**Freezing:** liquid → solid, at the same temperature as melting.",
            "**Boiling:** liquid → vapour throughout the liquid, at a fixed temperature. Water boils at 100 °C.",
            "**Condensation:** vapour → liquid on cooling.",
            "**Sublimation:** solid → gas directly, e.g. camphor, naphthalene, dry ice.",
          ] },
          { remember: "While ice melts, its temperature stays at 0 °C. The heat supplied goes into separating the particles, not warming them. This hidden heat is called **latent heat**." },
          { h: "Evaporation", blocks: [
            "**Evaporation** is a liquid turning into vapour **at its surface**, at **any temperature**. It **cools** what is left behind.",
            { list: [
              "**Faster** with heat, wind and a larger surface area.",
              "**Slower** when the air is humid.",
            ] },
            { examples: [
              "Wet clothes dry faster on a windy, sunny day.",
              "Water in an earthen pot (matka) stays cool, because water seeping through the pores evaporates.",
              "Sweating cools us down.",
            ] },
          ] },
        ] },
        { h: "Elements", blocks: [
          "An **element** is a pure substance made of only **one kind of atom**. It cannot be broken into anything simpler.",
          { examples: ["Oxygen, gold, iron, copper and carbon."] },
          "About **118** elements are known. They are grouped as **metals, non-metals and metalloids**.",
          { h: "Atoms, molecules and symbols", blocks: [
            { list: [
              "An **atom** is the smallest particle of an element that can take part in a reaction.",
              "A **molecule** is two or more atoms joined together, e.g. O₂, H₂O.",
              "Each element has a **symbol**, e.g. H (hydrogen), O (oxygen), C (carbon). Some symbols come from Latin names: **Na** sodium, **K** potassium, **Fe** iron, **Au** gold, **Ag** silver.",
            ] },
          ] },
        ] },
        { h: "Compounds", blocks: [
          "A **compound** is a pure substance formed when two or more elements **combine chemically** in a **fixed ratio**. Its properties are completely different from those of its elements, and it can be separated only by **chemical** methods.",
          { examples: [
            "**Water (H₂O):** 2 hydrogen atoms + 1 oxygen atom. Passing electricity through water (**electrolysis**) splits it into hydrogen and oxygen.",
            "**Common salt (NaCl):** made from sodium, a violently reactive metal, and chlorine, a poisonous gas, yet it is safe to eat.",
            "**Carbon dioxide (CO₂):** 1 carbon atom + 2 oxygen atoms.",
          ] },
        ] },
        { h: "Mixtures", blocks: [
          "A **mixture** contains two or more substances mixed **physically**, in **any proportion**. Each part keeps its own properties, and the parts can be separated by **physical** methods.",
          { examples: [
            "Air, sea water, soil and salad.",
            "Iron filings mixed with sulphur is a mixture, since a magnet still pulls out the iron. Heat them, and they form **iron sulphide**, a compound that a magnet does not attract.",
          ] },
          { h: "Homogeneous and heterogeneous", blocks: [
            { list: [
              "**Homogeneous:** the same throughout; you cannot see separate parts, e.g. salt solution, air and alloys such as brass.",
              "**Heterogeneous:** the parts can be seen separately, e.g. sand in water, oil and water.",
            ] },
          ] },
          { h: "Solution, suspension and colloid", blocks: [
            { list: [
              "**Solution:** particles fully dissolved and invisible; they do not settle and cannot be filtered, e.g. sugar in water.",
              "**Suspension:** visible particles that settle and can be filtered, e.g. chalk in water, muddy water.",
              "**Colloid:** tiny particles that do not settle but make the liquid cloudy, e.g. milk.",
            ] },
          ] },
        ] },
        { h: "Classifying matter", blocks: [
          { key: "Matter → Pure substances (elements, compounds) + Mixtures (homogeneous, heterogeneous)" },
          { examples: ["Distilled water is a pure substance; sea water and milk are mixtures."] },
        ] },
      ],
      misconceptions: [
        ["Air is a compound of gases.", "Air is a mixture: its parts vary and can be separated physically."],
        ["A compound behaves like the elements in it.", "A compound's properties are completely different; salt is nothing like sodium or chlorine."],
        ["Evaporation happens only at 100 °C.", "Evaporation happens at any temperature; boiling happens at 100 °C."],
        ["Heat added to melting ice raises its temperature.", "The temperature stays at 0 °C until all the ice has melted (latent heat)."],
        ["Brass is a compound.", "Brass is an alloy, which is a homogeneous mixture."],
      ],
      revision: [
        ["Matter", "Anything that has mass and takes up space."],
        ["Diffusion", "Particles spreading and mixing on their own."],
        ["Element", "Made of only one kind of atom, e.g. iron."],
        ["Compound", "Elements chemically joined in a fixed ratio, e.g. water."],
        ["Mixture", "Substances mixed physically in any ratio, e.g. air."],
        ["Solution", "A homogeneous mixture with the solute fully dissolved."],
        ["Suspension", "A mixture whose visible particles settle down."],
        ["Sublimation", "Solid turning directly into gas."],
      ],
      questions: [
        ["Which state of matter has a fixed volume but no fixed shape?", "A liquid."],
        ["Why can gases be compressed easily?", "There is a lot of space between their particles."],
        ["Why does the smell of cooking food spread through the house?", "Its particles diffuse through the air."],
        ["Why does water stay cool in an earthen pot?", "Water seeping through the pores evaporates and takes heat away."],
        ["Is water an element, a compound or a mixture?", "A compound of hydrogen and oxygen (H₂O)."],
        ["Is air an element, a compound or a mixture?", "A mixture."],
        ["What is the chemical symbol for iron?", "Fe (from its Latin name, ferrum)."],
        ["Give one example each of a solution and a suspension.", "Sugar in water (solution); chalk in water (suspension)."],
      ],
      takeaway: "Everything is made of tiny moving particles. Every sample of matter is either a pure substance (an element or a compound) or a mixture.",
    },

  },
};
