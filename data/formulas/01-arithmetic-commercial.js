/* ============================================================
   MATH FORMULAS - TOPIC: ARITHMETIC & COMMERCIAL MATHS
   Percentage, profit & loss, interest, ratio, average, speed.
   ============================================================ */

window.FORMULA_DATA = window.FORMULA_DATA || [];

FORMULA_DATA.push({
  topic: "Arithmetic & Commercial Maths",
  icon: "💰",
  color: "#0891b2",
  formulas: [
    {
      cls: "Class 5",
      subtopic: "Percentage",
      name: "Percentage of a number",
      formula: "Value = (Percentage ÷ 100) × Number",
      symbols: [
        ["%", "the percentage (per hundred)"],
        ["Number", "the total amount"]
      ],
      generalUse: "To find a part of a total when the part is given as a percentage — used in discounts, marks, tax, tips and statistics.",
      laymanUse: "'Per cent' means 'out of 100'. To find 20% of something, split it into 100 equal parts and take 20 of them.",
      example: "20% of 50 = (20 ÷ 100) × 50 = 10"
    },
    {
      cls: "Class 6",
      subtopic: "Percentage",
      name: "Convert a fraction to a percentage",
      formula: "Percentage = Fraction × 100",
      symbols: [["Fraction", "a part written as a/b"]],
      generalUse: "To express a fraction or a score out of a total as a percentage, so different quantities can be compared easily.",
      laymanUse: "Multiply the fraction by 100 to see how much it would be out of 100.",
      example: "3/4 = 3/4 × 100 = 75%"
    },
    {
      cls: "Class 6",
      subtopic: "Percentage",
      name: "One quantity as a percentage of another",
      formula: "Percentage = (Part ÷ Whole) × 100",
      symbols: [
        ["Part", "the amount you have"],
        ["Whole", "the total amount"]
      ],
      generalUse: "To find what percentage one number is of another — such as marks obtained out of total marks, or attendance.",
      laymanUse: "Divide the part by the whole, then multiply by 100 to turn it into a percentage.",
      example: "45 marks out of 60 = (45 ÷ 60) × 100 = 75%"
    },
    {
      cls: "Class 7",
      subtopic: "Profit & Loss",
      name: "Profit",
      formula: "Profit = Selling Price − Cost Price",
      symbols: [
        ["SP", "selling price (price you sell at)"],
        ["CP", "cost price (price you bought at)"]
      ],
      generalUse: "Used in business and shopkeeping to find the gain made when something is sold for more than it cost.",
      laymanUse: "If you sell a thing for more than you paid, the extra money is your profit.",
      example: "Bought at ₹80, sold at ₹100 → Profit = 100 − 80 = ₹20"
    },
    {
      cls: "Class 7",
      subtopic: "Profit & Loss",
      name: "Loss",
      formula: "Loss = Cost Price − Selling Price",
      symbols: [
        ["CP", "cost price (price you bought at)"],
        ["SP", "selling price (price you sell at)"]
      ],
      generalUse: "Used in trade to find how much money is lost when something is sold for less than it cost.",
      laymanUse: "If you sell a thing for less than you paid, the money you fall short by is your loss.",
      example: "Bought at ₹100, sold at ₹80 → Loss = 100 − 80 = ₹20"
    },
    {
      cls: "Class 7",
      subtopic: "Profit & Loss",
      name: "Profit percentage",
      formula: "Profit % = (Profit ÷ Cost Price) × 100",
      symbols: [
        ["Profit", "SP − CP"],
        ["CP", "cost price"]
      ],
      generalUse: "To compare how good a deal is, as a percentage of the cost — the standard way businesses state their gain.",
      laymanUse: "It tells you your gain compared to what you spent, out of 100. Higher percent = better deal.",
      example: "Profit ₹20 on CP ₹80 → 20/80 × 100 = 25%"
    },
    {
      cls: "Class 7",
      subtopic: "Profit & Loss",
      name: "Loss percentage",
      formula: "Loss % = (Loss ÷ Cost Price) × 100",
      symbols: [["Loss", "CP − SP"], ["CP", "cost price"]],
      generalUse: "To state a loss as a percentage of the cost price, so losses on different items can be compared.",
      laymanUse: "It shows how big your loss is compared to what you paid, out of 100.",
      example: "Loss ₹20 on CP ₹100 → 20/100 × 100 = 20%"
    },
    {
      cls: "Class 8",
      subtopic: "Profit & Loss",
      name: "Selling price from profit %",
      formula: "SP = CP × (100 + Profit %) ÷ 100",
      symbols: [["CP", "cost price"], ["Profit %", "gain percent"]],
      generalUse: "To work out the price to sell at so as to make a required percentage of profit.",
      laymanUse: "Add the profit percent to 100, then take that percent of the cost price to get the selling price.",
      example: "CP ₹200, profit 10% → SP = 200 × 110/100 = ₹220"
    },
    {
      cls: "Class 8",
      subtopic: "Discount",
      name: "Discount",
      formula: "Discount = Marked Price − Selling Price",
      symbols: [
        ["MP", "marked price (label price)"],
        ["SP", "selling price (price actually paid)"]
      ],
      generalUse: "Used in shops and sales to find the reduction given on the labelled price.",
      laymanUse: "The money taken off the printed price during a sale is the discount.",
      example: "MP ₹500, SP ₹400 → Discount = ₹100"
    },
    {
      cls: "Class 8",
      subtopic: "Discount",
      name: "Discount percentage",
      formula: "Discount % = (Discount ÷ Marked Price) × 100",
      symbols: [["Discount", "MP − SP"], ["MP", "marked price"]],
      generalUse: "To express a sale reduction as a percentage of the marked price — how sales are advertised ('20% off').",
      laymanUse: "It shows how much is taken off, out of every 100 rupees of the printed price.",
      example: "Discount ₹100 on MP ₹500 → 100/500 × 100 = 20%"
    },
    {
      cls: "Class 7",
      subtopic: "Simple Interest",
      name: "Simple Interest",
      formula: "SI = (P × R × T) ÷ 100",
      symbols: [
        ["P", "principal (money borrowed or saved)"],
        ["R", "rate of interest per year (%)"],
        ["T", "time in years"]
      ],
      generalUse: "To find the extra money (interest) paid or earned on a loan or deposit, when interest is the same each year.",
      laymanUse: "It's the rent you pay for borrowing money. Bigger loan, higher rate, or longer time all make it more.",
      example: "P=₹1000, R=5%, T=2 yrs → SI = 1000×5×2/100 = ₹100"
    },
    {
      cls: "Class 7",
      subtopic: "Simple Interest",
      name: "Amount (with simple interest)",
      formula: "A = P + SI",
      symbols: [
        ["A", "total amount to be paid back"],
        ["P", "principal"],
        ["SI", "simple interest"]
      ],
      generalUse: "To find the total money returned at the end of a loan or the maturity value of a deposit.",
      laymanUse: "Add the interest to the money you started with to get the total you'll have or owe.",
      example: "P=₹1000, SI=₹100 → A = 1000 + 100 = ₹1100"
    },
    {
      cls: "Class 8",
      subtopic: "Compound Interest",
      name: "Amount (compound interest)",
      formula: "A = P × (1 + R/100)^T",
      symbols: [
        ["A", "final amount"],
        ["P", "principal"],
        ["R", "rate per year (%)"],
        ["T", "time in years"]
      ],
      generalUse: "For loans and savings where interest is added to the principal each year, so you earn interest on interest.",
      laymanUse: "Each year the interest joins your money, and next year you earn interest on that bigger amount too — it grows faster and faster.",
      example: "P=₹1000, R=10%, T=2 → A = 1000×(1.1)² = ₹1210"
    },
    {
      cls: "Class 8",
      subtopic: "Compound Interest",
      name: "Compound Interest",
      formula: "CI = A − P",
      symbols: [["A", "final amount"], ["P", "principal"]],
      generalUse: "To find just the interest part when interest is compounded, by removing the original money.",
      laymanUse: "Take away the money you started with from the final amount to see how much extra you gained.",
      example: "A=₹1210, P=₹1000 → CI = ₹210"
    },
    {
      cls: "Class 6",
      subtopic: "Ratio & Proportion",
      name: "Ratio",
      formula: "Ratio = a : b = a ÷ b",
      symbols: [["a, b", "the two quantities being compared"]],
      generalUse: "To compare two quantities of the same kind — mixing, sharing, map scales, recipes.",
      laymanUse: "It tells you how many of one thing there are for each of another, like 2 cups of rice for every 1 cup of dal.",
      example: "20 boys and 30 girls → ratio 20:30 = 2:3"
    },
    {
      cls: "Class 6",
      subtopic: "Ratio & Proportion",
      name: "Proportion",
      formula: "a : b = c : d  ⇒  a × d = b × c",
      symbols: [["a, b, c, d", "four quantities in proportion"]],
      generalUse: "To check if two ratios are equal, or to find a missing value when scaling recipes, maps or prices.",
      laymanUse: "When two ratios are equal, the cross-products match. This lets you find a missing amount when keeping the same ratio.",
      example: "2:3 = 4:6 because 2×6 = 3×4 = 12"
    },
    {
      cls: "Class 6",
      subtopic: "Average",
      name: "Average (Mean)",
      formula: "Average = Sum of values ÷ Number of values",
      symbols: [
        ["Sum", "total of all the numbers"],
        ["Number", "how many numbers there are"]
      ],
      generalUse: "To find a single typical value for a set of numbers — average marks, runs, temperature or income.",
      laymanUse: "Add everything up and share it out equally. It's the 'middle' amount if everyone had the same.",
      example: "Marks 10, 20, 30 → (10+20+30)/3 = 20"
    },
    {
      cls: "Class 7",
      subtopic: "Speed, Distance, Time",
      name: "Speed",
      formula: "Speed = Distance ÷ Time",
      symbols: [
        ["Distance", "how far (m or km)"],
        ["Time", "how long (s or hours)"]
      ],
      generalUse: "To find how fast something moves — vehicles, trains, runners — and to plan travel times.",
      laymanUse: "It tells you how much distance is covered in one unit of time. Cover more ground in less time and your speed is higher.",
      example: "120 km in 2 hours → Speed = 120/2 = 60 km/h"
    },
    {
      cls: "Class 7",
      subtopic: "Speed, Distance, Time",
      name: "Distance",
      formula: "Distance = Speed × Time",
      symbols: [["Speed", "how fast"], ["Time", "how long"]],
      generalUse: "To find how far something travels when its speed and travel time are known.",
      laymanUse: "Multiply how fast you go by how long you go for, to find how far you get.",
      example: "60 km/h for 3 hours → Distance = 60×3 = 180 km"
    },
    {
      cls: "Class 7",
      subtopic: "Speed, Distance, Time",
      name: "Time",
      formula: "Time = Distance ÷ Speed",
      symbols: [["Distance", "how far"], ["Speed", "how fast"]],
      generalUse: "To find how long a journey takes when the distance and speed are known.",
      laymanUse: "Divide the distance by the speed to find how long the trip will take.",
      example: "180 km at 60 km/h → Time = 180/60 = 3 hours"
    },
    {
      cls: "Class 8",
      subtopic: "Percentage",
      name: "Percentage increase",
      formula: "Increase % = (Increase ÷ Original) × 100",
      symbols: [
        ["Increase", "new value − old value"],
        ["Original", "the starting value"]
      ],
      generalUse: "To measure growth as a percentage — price rise, population growth, salary hike.",
      laymanUse: "It shows how much bigger something got, compared to what it was, out of 100.",
      example: "Price ₹200 → ₹250: increase 50, so 50/200 × 100 = 25%"
    },
    {
      cls: "Class 8",
      subtopic: "Percentage",
      name: "Percentage decrease",
      formula: "Decrease % = (Decrease ÷ Original) × 100",
      symbols: [
        ["Decrease", "old value − new value"],
        ["Original", "the starting value"]
      ],
      generalUse: "To measure a fall as a percentage — price drop, weight loss, reduction in pollution.",
      laymanUse: "It shows how much smaller something got, compared to what it was, out of 100.",
      example: "Price ₹200 → ₹150: decrease 50, so 50/200 × 100 = 25%"
    },
    {
      subtopic: "Percentage",
      name: "Fraction/decimal to percentage",
      formula: "Percentage = Decimal × 100",
      symbols: [["Decimal", "the number in decimal form"]],
      generalUse: "To turn a decimal or fraction into a percentage for easy comparison.",
      laymanUse: "Move the decimal point two places right (multiply by 100) to get the percentage.",
      example: "0.25 = 0.25 × 100 = 25%"
    },
    {
      subtopic: "Profit & Loss",
      name: "Cost price from profit %",
      formula: "CP = (SP × 100) ÷ (100 + Profit %)",
      symbols: [["SP", "selling price"], ["Profit %", "gain percent"]],
      generalUse: "To work backwards to the cost price when the selling price and profit percent are known.",
      laymanUse: "Given the selling price and the profit percent, this recovers what it originally cost.",
      example: "SP ₹220 at 10% profit → CP = 22000/110 = ₹200"
    },
    {
      subtopic: "Discount",
      name: "Selling price after discount",
      formula: "SP = MP × (100 − Discount %) ÷ 100",
      symbols: [["MP", "marked price"], ["Discount %", "percent off"]],
      generalUse: "To find the price you actually pay after a percentage discount is applied.",
      laymanUse: "Take the printed price, knock off the discount percent, and that's what you pay.",
      example: "MP ₹500, 20% off → SP = 500 × 80/100 = ₹400"
    },
    {
      subtopic: "Tax (GST)",
      name: "Price including GST",
      formula: "Final Price = Price × (100 + GST %) ÷ 100",
      symbols: [["Price", "price before tax"], ["GST %", "tax rate"]],
      generalUse: "To find the final bill amount after Goods and Services Tax is added.",
      laymanUse: "Add the tax percent on top of the price to get the total you pay at the counter.",
      example: "Price ₹1000, GST 18% → 1000 × 118/100 = ₹1180"
    },
    {
      subtopic: "Compound Interest",
      name: "CI compounded half-yearly",
      formula: "A = P × (1 + R/200)^(2T)",
      symbols: [["P", "principal"], ["R", "annual rate (%)"], ["T", "time in years"]],
      generalUse: "For deposits/loans where interest is added twice a year instead of once.",
      laymanUse: "When interest is added every 6 months, halve the rate and double the number of periods.",
      example: "P=₹1000, R=10%, T=1 → A = 1000×(1.05)² = ₹1102.50"
    },
    {
      subtopic: "Growth & Depreciation",
      name: "Population growth / depreciation",
      formula: "Value = P × (1 ± R/100)^T",
      symbols: [
        ["P", "starting value"],
        ["R", "rate per period (%)"],
        ["T", "number of periods"],
        ["±", "+ for growth, − for depreciation"]
      ],
      generalUse: "To find future population (growth, +) or the falling value of machines/vehicles (depreciation, −).",
      laymanUse: "Same idea as compound interest: use plus for things that grow, minus for things that lose value.",
      example: "Car ₹5,00,000, depreciates 10%/yr, 2 yrs → 5,00,000×(0.9)² = ₹4,05,000"
    },
    {
      subtopic: "Time & Work",
      name: "Combined work rate",
      formula: "1/T = 1/a + 1/b",
      symbols: [
        ["a", "days A alone takes"],
        ["b", "days B alone takes"],
        ["T", "days together"]
      ],
      generalUse: "To find how long two people/pipes take together when each one's solo time is known.",
      laymanUse: "Add how much each does in a day; the total per day tells how fast they finish together.",
      example: "A=6 days, B=12 days → 1/T = 1/6+1/12 = 1/4, so T = 4 days"
    },
    {
      subtopic: "Speed, Distance, Time",
      name: "Average speed (equal distances)",
      formula: "Average speed = 2xy ÷ (x + y)",
      symbols: [
        ["x", "speed one way"],
        ["y", "speed the return way"]
      ],
      generalUse: "To find the average speed for a round trip covering the same distance at two different speeds.",
      laymanUse: "You can't just average the two speeds — this formula gives the correct average for equal distances.",
      example: "x=60, y=40 → 2·60·40/100 = 48 km/h"
    },
    {
      subtopic: "Speed, Distance, Time",
      name: "Unit conversion (km/h to m/s)",
      formula: "m/s = km/h × (5 ÷ 18)",
      symbols: [["5/18", "conversion factor"]],
      generalUse: "To convert a speed from kilometres per hour to metres per second (and ×18/5 for the reverse).",
      laymanUse: "Multiply km/h by 5/18 to get metres per second.",
      example: "72 km/h = 72 × 5/18 = 20 m/s"
    },
    {
      subtopic: "Percentage",
      name: "Successive discounts (net)",
      formula: "Net = 100 − [x + y − (xy ÷ 100)]  % off",
      symbols: [["x, y", "the two discount percents"]],
      generalUse: "To find the single equivalent discount when two discounts are applied one after another.",
      laymanUse: "Two discounts don't just add — the second acts on the reduced price, so this gives the real total off.",
      example: "20% then 10%: 20+10−2 = 28% off"
    },
    {
      subtopic: "Percentage",
      name: "Percentage error",
      formula: "Error % = (|Error| ÷ Actual value) × 100",
      symbols: [["Error", "measured − actual"], ["Actual", "true value"]],
      generalUse: "To express how far a measurement is from the true value, as a percentage.",
      laymanUse: "How wrong a measurement is compared to the correct value, out of 100.",
      example: "Measured 52 vs actual 50 → 2/50×100 = 4%"
    },
    {
      subtopic: "Simple Interest",
      name: "Rate of simple interest",
      formula: "R = (SI × 100) ÷ (P × T)",
      symbols: [["SI", "interest"], ["P", "principal"], ["T", "time (years)"]],
      generalUse: "To find the yearly interest rate when the interest, principal and time are known.",
      laymanUse: "Rearranges the simple-interest formula to solve for the rate.",
      example: "SI=100, P=1000, T=2 → R = 5%"
    },
    {
      subtopic: "Simple Interest",
      name: "Time (simple interest)",
      formula: "T = (SI × 100) ÷ (P × R)",
      symbols: [["SI", "interest"], ["P", "principal"], ["R", "rate (%)"]],
      generalUse: "To find how long money was invested/borrowed from the interest, principal and rate.",
      laymanUse: "Rearranges simple interest to solve for the time.",
      example: "SI=100, P=1000, R=5 → T = 2 years"
    },
    {
      subtopic: "Mixtures & Alligation",
      name: "Rule of alligation",
      formula: "Cheaper : Dearer = (D − Mean) : (Mean − C)",
      symbols: [
        ["C", "cost of cheaper part"],
        ["D", "cost of dearer part"],
        ["Mean", "cost of the mixture"]
      ],
      generalUse: "To find the ratio in which two ingredients at different prices must be mixed for a target price.",
      laymanUse: "Balances how much of the cheap and the costly item to mix to hit an average price.",
      example: "₹10 and ₹15 to make ₹12 → (15−12):(12−10) = 3:2"
    },
    {
      subtopic: "Partnership",
      name: "Profit sharing in partnership",
      formula: "Profit ratio = (Capital × Time) of each partner",
      symbols: [["Capital", "money invested"], ["Time", "months invested"]],
      generalUse: "To split business profit fairly among partners by their investment and duration.",
      laymanUse: "Each partner's share depends on how much they put in and for how long.",
      example: "A: ₹5000×12, B: ₹6000×10 → 60000:60000 = 1:1"
    },
    {
      subtopic: "Trains",
      name: "Time for a train to pass a pole",
      formula: "Time = Length of train ÷ Speed",
      symbols: [["Length", "length of the train"], ["Speed", "train's speed"]],
      generalUse: "To find how long a train takes to cross a pole or a standing person.",
      laymanUse: "The train only has to move its own length past a pole, so divide length by speed.",
      example: "200 m at 20 m/s → 200/20 = 10 s"
    },
    {
      subtopic: "Trains",
      name: "Time to cross a platform",
      formula: "Time = (Train length + Platform length) ÷ Speed",
      symbols: [["Speed", "train's speed"]],
      generalUse: "To find how long a train takes to fully cross a platform or bridge.",
      laymanUse: "The train must cover its own length plus the platform's length.",
      example: "(200+300) m at 25 m/s → 500/25 = 20 s"
    },
    {
      subtopic: "Boats & Streams",
      name: "Downstream and upstream speed",
      formula: "Down = b + s,   Up = b − s",
      symbols: [["b", "speed of boat in still water"], ["s", "speed of stream"]],
      generalUse: "To find a boat's effective speed with or against a river current.",
      laymanUse: "Going with the flow adds the current's speed; going against subtracts it.",
      example: "Boat 10, stream 2 → down 12, up 8 km/h"
    },
    {
      subtopic: "Pipes & Cisterns",
      name: "Two pipes filling together",
      formula: "1/T = 1/a + 1/b",
      symbols: [["a, b", "hours each pipe alone takes"], ["T", "hours together"]],
      generalUse: "To find how long two pipes take to fill a tank together (same idea as time & work).",
      laymanUse: "Add how much each pipe fills per hour to find the combined filling time.",
      example: "a=6, b=12 → 1/T = 1/4, T = 4 hours"
    },
    {
      subtopic: "Ages",
      name: "Ages after / before n years",
      formula: "Future age = present + n,   Past age = present − n",
      symbols: [["n", "the number of years"]],
      generalUse: "The basis of age word-problems — everyone ages by the same amount over time.",
      laymanUse: "Add the years for the future, subtract them for the past — for every person equally.",
      example: "Now 20 → in 5 years 25, 5 years ago 15"
    },
    {
      subtopic: "Clocks",
      name: "Angle of a clock",
      formula: "Angle = |30H − 5.5M|  degrees",
      symbols: [["H", "the hour"], ["M", "the minutes"]],
      generalUse: "To find the angle between the hour and minute hands at a given time.",
      laymanUse: "A formula that gives the angle between the two clock hands from the time shown.",
      example: "At 3:00 → |90 − 0| = 90°"
    },
    {
      subtopic: "Average",
      name: "Average speed (whole journey)",
      formula: "Average speed = Total distance ÷ Total time",
      symbols: [["Total distance", "sum of all distances"], ["Total time", "sum of all times"]],
      generalUse: "To find the true average speed of a journey with several stages or stops.",
      laymanUse: "Add up all the distance and all the time, then divide — don't just average the speeds.",
      example: "120 km in 3 h total → 40 km/h"
    },
    {
      subtopic: "Average",
      name: "New average after a change",
      formula: "New avg = (Old sum ± change) ÷ New count",
      symbols: [["Old sum", "total before"], ["New count", "number of items after"]],
      generalUse: "To update an average when a value is added, removed or replaced.",
      laymanUse: "Adjust the total, then divide by the new number of items.",
      example: "Avg of 4 nums=10 (sum 40); add 20 → 60/5 = 12"
    },
    {
      subtopic: "Profit & Loss",
      name: "Overall gain/loss on two equal sales",
      formula: "If sold at same price, one at +x% and one at −x%, net = −(x²/100)%",
      symbols: [["x", "the percent"]],
      generalUse: "A classic result: selling two items at the same price with equal profit and loss percents gives an overall loss.",
      laymanUse: "Equal profit and loss percents don't cancel — you always end with a small loss.",
      example: "x=10 → net loss = 100/100 = 1%"
    },
    {
      subtopic: "Percentage",
      name: "Net effect of increase then decrease",
      formula: "Net % = a − b − (ab ÷ 100)",
      symbols: [["a", "increase %"], ["b", "decrease %"]],
      generalUse: "To find the overall change when a value rises by a% and then falls by b%.",
      laymanUse: "The rise and fall don't simply cancel — this gives the true overall change.",
      example: "+20% then −20% → 20−20−4 = −4%"
    },
    {
      subtopic: "Percentage",
      name: "If A is x% more than B",
      formula: "B is less than A by [x ÷ (100+x)] × 100 %",
      symbols: [["x", "the percent A is more than B"]],
      generalUse: "To convert 'A is x% more than B' into 'B is how much % less than A'.",
      laymanUse: "The percent more one way is not the same as the percent less the other way.",
      example: "A is 25% more than B → B is 20% less than A"
    },
    {
      subtopic: "Compound Interest",
      name: "Difference between CI and SI (2 years)",
      formula: "CI − SI = P × (R ÷ 100)²",
      symbols: [["P", "principal"], ["R", "rate (%)"]],
      generalUse: "A quick way to find how much more compound interest gives than simple interest over 2 years.",
      laymanUse: "Over two years, the extra that compounding adds is just P times (R/100) squared.",
      example: "P=1000, R=10% → CI−SI = 1000×0.01 = ₹10"
    },
    {
      subtopic: "Simple Interest",
      name: "Time to double at simple interest",
      formula: "T = 100 ÷ R",
      symbols: [["R", "rate per year (%)"]],
      generalUse: "To find how many years it takes money to double under simple interest.",
      laymanUse: "Divide 100 by the rate to see how long the money takes to double.",
      example: "R = 5% → T = 100/5 = 20 years"
    },
    {
      subtopic: "Compound Interest",
      name: "Rule of 72 (doubling time)",
      formula: "Years to double ≈ 72 ÷ R",
      symbols: [["R", "annual compound rate (%)"]],
      generalUse: "A quick estimate of how long money takes to double under compound interest.",
      laymanUse: "Divide 72 by the interest rate for a fast estimate of the doubling time.",
      example: "R = 8% → about 72/8 = 9 years"
    },
    {
      subtopic: "Ratio & Proportion",
      name: "Dividing an amount in a ratio",
      formula: "Share = (its ratio part ÷ total parts) × Amount",
      symbols: [["Amount", "the total to divide"]],
      generalUse: "To split money or quantity between people in a given ratio.",
      laymanUse: "Add the ratio numbers, then give each person their share of the total.",
      example: "₹600 in 1:2 → 200 and 400"
    },
    {
      subtopic: "Ratio & Proportion",
      name: "Direct proportion",
      formula: "y = k × x   (y/x is constant)",
      symbols: [["k", "the constant"], ["x, y", "the two quantities"]],
      generalUse: "When two quantities rise and fall together — cost vs quantity, distance vs time at fixed speed.",
      laymanUse: "If one doubles, the other doubles; their ratio stays the same.",
      example: "5 pens ₹50 → 8 pens ₹80"
    },
    {
      subtopic: "Ratio & Proportion",
      name: "Inverse proportion",
      formula: "x × y = constant",
      symbols: [["x, y", "the two quantities"]],
      generalUse: "When one quantity rises as the other falls — speed vs time, workers vs days.",
      laymanUse: "If one doubles, the other halves; their product stays the same.",
      example: "4 workers 6 days → 8 workers 3 days"
    },
    {
      subtopic: "Time & Work",
      name: "Men–days relationship",
      formula: "M₁ × D₁ = M₂ × D₂",
      symbols: [["M", "number of workers"], ["D", "number of days"]],
      generalUse: "To find how many workers or days are needed for the same job.",
      laymanUse: "More workers means fewer days; the total worker-days stays the same.",
      example: "10 men × 6 days = 15 men × 4 days"
    },
    {
      subtopic: "Time & Work",
      name: "Work done in given time",
      formula: "Work = Rate × Time",
      symbols: [["Rate", "work per unit time"], ["Time", "time worked"]],
      generalUse: "To find how much of a job is completed in a given time.",
      laymanUse: "Multiply how fast you work by how long you work to find how much gets done.",
      example: "Rate 1/6 per day, 3 days → 3/6 = half the job"
    },
    {
      subtopic: "Speed, Distance, Time",
      name: "Relative speed (same direction)",
      formula: "Relative speed = a − b",
      symbols: [["a", "faster speed"], ["b", "slower speed"]],
      generalUse: "To find how fast one moving object gains on another going the same way.",
      laymanUse: "When both move the same way, subtract their speeds to see how fast one catches up.",
      example: "60 and 40 km/h same way → gap closes at 20 km/h"
    },
    {
      subtopic: "Speed, Distance, Time",
      name: "Relative speed (opposite directions)",
      formula: "Relative speed = a + b",
      symbols: [["a, b", "the two speeds"]],
      generalUse: "To find how fast two objects approach each other head-on.",
      laymanUse: "When moving toward each other, add their speeds to see how fast the gap shrinks.",
      example: "60 and 40 km/h toward each other → 100 km/h"
    },
    {
      subtopic: "Percentage",
      name: "Ratio to percentage",
      formula: "Percentage = (Ratio value) × 100",
      symbols: [["Ratio value", "the fraction form of the ratio"]],
      generalUse: "To convert a ratio into a percentage for comparison.",
      laymanUse: "Turn the ratio into a fraction, then multiply by 100.",
      example: "3:5 → 3/8 × 100 = 37.5%"
    },
    {
      subtopic: "Profit & Loss",
      name: "Selling price with profit and discount",
      formula: "SP = CP × (100+P%)/100;  MP set so that after discount SP is reached",
      symbols: [["CP", "cost price"], ["P%", "desired profit"]],
      generalUse: "To fix a marked price that still gives the wanted profit after a discount is offered.",
      laymanUse: "Shopkeepers mark the price high so that even after a discount they still make their profit.",
      example: "CP ₹100, want 20% profit after 20% discount → mark ₹150"
    },
    {
      subtopic: "Profit & Loss",
      name: "Dishonest dealer's gain",
      formula: "Gain % = (Error ÷ (True − Error)) × 100",
      symbols: [["True", "true weight (e.g. 1000 g)"], ["Error", "shortfall in weight"]],
      generalUse: "To find the extra profit a trader makes by giving less than the true weight.",
      laymanUse: "If a shopkeeper's '1 kg' is actually less, this is the hidden profit they gain.",
      example: "Sells 900 g as 1 kg → 100/900 × 100 ≈ 11.1%"
    },
    {
      subtopic: "Discount",
      name: "Marked price from selling price",
      formula: "MP = (SP × 100) ÷ (100 − Discount %)",
      symbols: [["SP", "selling price"], ["Discount %", "percent off"]],
      generalUse: "To recover the marked (label) price when the paid price and discount are known.",
      laymanUse: "Works backwards from the paid price and discount to the printed price.",
      example: "SP ₹400, 20% off → MP = 40000/80 = ₹500"
    },
    {
      subtopic: "Average",
      name: "Average of first n natural numbers",
      formula: "Average = (n + 1) ÷ 2",
      symbols: [["n", "how many numbers"]],
      generalUse: "A quick average for 1, 2, 3, … up to n.",
      laymanUse: "The average of the first n counting numbers is just the middle value.",
      example: "Average of 1..9 = 10/2 = 5"
    },
    {
      subtopic: "Simple Interest",
      name: "Principal from simple interest",
      formula: "P = (SI × 100) ÷ (R × T)",
      symbols: [["SI", "interest"], ["R", "rate (%)"], ["T", "time (years)"]],
      generalUse: "To find the original sum when the interest, rate and time are known.",
      laymanUse: "Rearranges the simple-interest formula to find the starting money.",
      example: "SI=100, R=5, T=2 → P = 10000/10 = ₹1000"
    },
    {
      subtopic: "Growth & Depreciation",
      name: "Value n years ago",
      formula: "Past value = Present ÷ (1 + R/100)ⁿ",
      symbols: [["R", "growth rate (%)"], ["n", "years back"]],
      generalUse: "To find a past population or value from the present one and the growth rate.",
      laymanUse: "Divide instead of multiply to step backwards in time.",
      example: "Now 12100 at 10%/yr → 2 yrs ago = 12100/1.21 = 10000"
    },
    {
      subtopic: "Percentage",
      name: "Passing marks / exam percentage",
      formula: "Percentage = (Marks obtained ÷ Total marks) × 100",
      symbols: [["Marks obtained", "your score"], ["Total marks", "maximum"]],
      generalUse: "To find an exam percentage — the most common everyday use of percentage.",
      laymanUse: "Divide your marks by the total and multiply by 100.",
      example: "425 out of 500 → 85%"
    },
    {
      subtopic: "Compound Interest",
      name: "CI compounded quarterly",
      formula: "A = P × (1 + R/400)^(4T)",
      symbols: [["P", "principal"], ["R", "annual rate (%)"], ["T", "years"]],
      generalUse: "For interest added four times a year (every 3 months).",
      laymanUse: "Quarter the rate and quadruple the periods when interest is added every three months.",
      example: "P=1000, R=8%, T=1 → 1000×(1.02)⁴ ≈ ₹1082.4"
    },
    {
      subtopic: "Mixtures & Alligation",
      name: "Replacement / repeated dilution",
      formula: "Final = Initial × (1 − x/V)ⁿ",
      symbols: [
        ["V", "total volume"],
        ["x", "amount replaced each time"],
        ["n", "number of times"]
      ],
      generalUse: "To find how much pure liquid remains after repeated removal and replacement with water.",
      laymanUse: "Each time you remove some mixture and top up with water, the pure part shrinks by a fixed fraction.",
      example: "40 L, remove 4 L twice → 40×(0.9)² = 32.4 L pure"
    },
    {
      subtopic: "Speed, Distance, Time",
      name: "m/s to km/h",
      formula: "km/h = m/s × (18 ÷ 5)",
      symbols: [["18/5", "conversion factor"]],
      generalUse: "To convert a speed from metres per second to kilometres per hour.",
      laymanUse: "Multiply m/s by 18/5 to get km/h.",
      example: "20 m/s = 20 × 18/5 = 72 km/h"
    }
  ]
});
