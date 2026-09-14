/* ============================================================
   MATH FORMULAS - TOPIC: STATISTICS & PROBABILITY
   ============================================================ */

window.FORMULA_DATA = window.FORMULA_DATA || [];

FORMULA_DATA.push({
  topic: "Statistics & Probability",
  icon: "📊",
  color: "#16a34a",
  formulas: [
    {
      cls: "Class 7",
      subtopic: "Statistics",
      name: "Mean (average)",
      formula: "Mean = Sum of observations ÷ Number of observations",
      symbols: [
        ["Sum", "total of all values"],
        ["Number", "how many values"]
      ],
      generalUse: "To find a single representative value of data — average marks, income, temperature.",
      laymanUse: "Add everything and share it equally among all the values.",
      example: "Data 4,6,8,10 → Mean = 28/4 = 7"
    },
    {
      cls: "Class 7",
      subtopic: "Statistics",
      name: "Median",
      formula: "Median = the middle value when data is arranged in order",
      symbols: [["—", "for even count, average the two middle values"]],
      generalUse: "To find the middle of a data set, unaffected by very large or small values — incomes, prices.",
      laymanUse: "Line the numbers up in order and pick the one in the very middle.",
      example: "3, 5, 7, 9, 11 → median = 7"
    },
    {
      cls: "Class 7",
      subtopic: "Statistics",
      name: "Mode",
      formula: "Mode = the value that occurs most often",
      symbols: [["—", "the most frequent observation"]],
      generalUse: "To find the most common value in data — popular shoe size, best-selling item.",
      laymanUse: "The mode is simply the number that shows up the most times.",
      example: "2, 3, 3, 5, 3, 8 → mode = 3"
    },
    {
      cls: "Class 8",
      subtopic: "Statistics",
      name: "Range",
      formula: "Range = Highest value − Lowest value",
      symbols: [["Highest", "largest data value"], ["Lowest", "smallest data value"]],
      generalUse: "To measure how spread out the data is — temperature swings, score spreads.",
      laymanUse: "The gap between the biggest and smallest number tells you how spread out the data is.",
      example: "Data 4 to 20 → range = 20 − 4 = 16"
    },
    {
      cls: "Class 9",
      subtopic: "Statistics",
      name: "Mean of grouped data",
      formula: "Mean = Σ(f × x) ÷ Σf",
      symbols: [
        ["f", "frequency of each value"],
        ["x", "the value (or class mark)"],
        ["Σ", "sum of"]
      ],
      generalUse: "To find the average when data is given in groups with frequencies — surveys, exam-score tables.",
      laymanUse: "Multiply each value by how many times it appears, add those up, and divide by the total count.",
      example: "x:10,20 with f:2,3 → (20+60)/5 = 16"
    },
    {
      cls: "Class 9",
      subtopic: "Probability",
      name: "Probability of an event",
      formula: "P(E) = Favourable outcomes ÷ Total outcomes",
      symbols: [
        ["P(E)", "probability of event E"],
        ["Favourable", "outcomes we want"],
        ["Total", "all possible outcomes"]
      ],
      generalUse: "To measure how likely something is — dice, cards, weather, games, risk.",
      laymanUse: "Chance = the number of ways to win divided by the total number of possible results. It's between 0 and 1.",
      example: "Rolling a 4 on a die: P = 1/6"
    },
    {
      cls: "Class 10",
      subtopic: "Probability",
      name: "Probability of 'not E'",
      formula: "P(not E) = 1 − P(E)",
      symbols: [["P(E)", "probability the event happens"]],
      generalUse: "To find the chance an event does NOT happen, using the chance that it does.",
      laymanUse: "Since something either happens or it doesn't, subtract its chance from 1 to get the opposite chance.",
      example: "P(rain)=0.3 → P(no rain) = 1 − 0.3 = 0.7"
    },
    {
      cls: "Class 8",
      subtopic: "Statistics",
      name: "Frequency from a pie chart",
      formula: "Value = (Angle ÷ 360°) × Total",
      symbols: [
        ["Angle", "the slice's angle"],
        ["Total", "grand total the pie represents"]
      ],
      generalUse: "To read a quantity from a pie chart slice, or to find the angle for a slice.",
      laymanUse: "A full pie is 360°. A slice's share of 360 is its share of the total.",
      example: "Slice 90°, total 200 → (90/360)×200 = 50"
    },
    {
      subtopic: "Statistics",
      name: "Empirical relation (mean, median, mode)",
      formula: "Mode = 3 × Median − 2 × Mean",
      symbols: [["Mean", "the average"], ["Median", "the middle value"], ["Mode", "the most frequent value"]],
      generalUse: "To estimate one average when the other two are known, for moderately skewed data.",
      laymanUse: "A handy link between the three 'middle' measures when you know two of them.",
      example: "Mean=20, Median=22 → Mode = 66 − 40 = 26"
    },
    {
      subtopic: "Statistics",
      name: "Class mark (mid-value)",
      formula: "Class mark = (Lower limit + Upper limit) ÷ 2",
      symbols: [["Lower, Upper", "the class interval limits"]],
      generalUse: "To get a single representative value for a class interval before finding a grouped mean.",
      laymanUse: "The middle of a group interval is just the average of its two ends.",
      example: "Interval 10–20 → class mark = 15"
    },
    {
      subtopic: "Probability",
      name: "Probability range",
      formula: "0 ≤ P(E) ≤ 1",
      symbols: [["P(E)", "probability of event E"]],
      generalUse: "To check that a probability answer is valid — it can never be negative or more than 1.",
      laymanUse: "A chance is always between 0 (impossible) and 1 (certain).",
      example: "P = 0.5 means a fifty-fifty chance"
    },
    {
      subtopic: "Probability",
      name: "Sum of all probabilities",
      formula: "P(E) + P(not E) = 1",
      symbols: [["P(E)", "chance it happens"], ["P(not E)", "chance it doesn't"]],
      generalUse: "The total probability of all outcomes of an event is always 1.",
      laymanUse: "The chance something happens plus the chance it doesn't must add up to a full 1.",
      example: "P(win)=0.4 → P(not win) = 0.6"
    },
    {
      subtopic: "Statistics",
      name: "Variance",
      formula: "σ² = Σ(x − mean)² ÷ n",
      symbols: [["x", "each value"], ["mean", "the average"], ["n", "number of values"]],
      generalUse: "To measure how spread out data is around the mean — used in statistics and science.",
      laymanUse: "The average of the squared distances from the mean; bigger means more spread out.",
      example: "Data 2,4,6, mean 4 → (4+0+4)/3 ≈ 2.67"
    },
    {
      subtopic: "Statistics",
      name: "Standard deviation",
      formula: "σ = √Variance",
      symbols: [["σ", "standard deviation"]],
      generalUse: "The most common measure of spread, in the same units as the data.",
      laymanUse: "The square root of the variance — the typical distance of values from the average.",
      example: "Variance 4 → SD = 2"
    },
    {
      subtopic: "Statistics",
      name: "Standard deviation shortcut",
      formula: "σ = √( Σx²/n − (Σx/n)² )",
      symbols: [["Σx²", "sum of squares"], ["Σx", "sum of values"], ["n", "count"]],
      generalUse: "A faster way to compute standard deviation without first finding each deviation.",
      laymanUse: "Uses the sum and the sum of squares directly, avoiding subtracting the mean each time.",
      example: "Handy for large data sets"
    },
    {
      subtopic: "Statistics",
      name: "Coefficient of variation",
      formula: "CV = (σ ÷ mean) × 100",
      symbols: [["σ", "standard deviation"], ["mean", "the average"]],
      generalUse: "To compare the spread of two data sets with different units or scales.",
      laymanUse: "Spread as a percentage of the average — lets you compare consistency fairly.",
      example: "σ=2, mean=40 → CV = 5%"
    },
    {
      subtopic: "Statistics",
      name: "Median of grouped data",
      formula: "Median = L + [(n/2 − cf) ÷ f] × h",
      symbols: [
        ["L", "lower limit of median class"],
        ["cf", "cumulative frequency before it"],
        ["f", "frequency of median class"],
        ["h", "class width"]
      ],
      generalUse: "To find the median when data is grouped into class intervals.",
      laymanUse: "Locates the middle value inside the class where the halfway count falls.",
      example: "Used with grouped frequency tables"
    },
    {
      subtopic: "Statistics",
      name: "Mode of grouped data",
      formula: "Mode = L + [(f₁ − f₀) ÷ (2f₁ − f₀ − f₂)] × h",
      symbols: [
        ["L", "lower limit of modal class"],
        ["f₁", "frequency of modal class"],
        ["f₀, f₂", "frequencies before and after"],
        ["h", "class width"]
      ],
      generalUse: "To find the mode when data is grouped into class intervals.",
      laymanUse: "Pinpoints the most common value inside the tallest bar of a grouped table.",
      example: "Used with grouped frequency tables"
    },
    {
      subtopic: "Probability",
      name: "Addition rule",
      formula: "P(A∪B) = P(A) + P(B) − P(A∩B)",
      symbols: [["P(A∩B)", "chance of both"]],
      generalUse: "To find the chance that A or B happens when they can overlap.",
      laymanUse: "Add the two chances, then subtract the overlap so it isn't counted twice.",
      example: "P(A)=0.5,P(B)=0.4,both 0.2 → 0.7"
    },
    {
      subtopic: "Probability",
      name: "Mutually exclusive events",
      formula: "P(A∪B) = P(A) + P(B)   (if they can't both happen)",
      symbols: [["A, B", "events that can't occur together"]],
      generalUse: "To find the chance of A or B when the two cannot happen at the same time.",
      laymanUse: "If the two events never overlap, just add their chances.",
      example: "Rolling a 2 or a 5: 1/6 + 1/6 = 1/3"
    },
    {
      subtopic: "Probability",
      name: "Multiplication rule (independent)",
      formula: "P(A∩B) = P(A) × P(B)",
      symbols: [["A, B", "independent events"]],
      generalUse: "To find the chance that two independent events both happen.",
      laymanUse: "If one event doesn't affect the other, multiply their chances.",
      example: "Two heads in a row: ½ × ½ = ¼"
    },
    {
      subtopic: "Probability",
      name: "Conditional probability",
      formula: "P(A | B) = P(A∩B) ÷ P(B)",
      symbols: [["P(A|B)", "chance of A given B happened"]],
      generalUse: "To find the chance of A when B is already known to have happened.",
      laymanUse: "Updates the chance of A once you know B has occurred.",
      example: "P(both)=0.2, P(B)=0.4 → P(A|B)=0.5"
    },
    {
      subtopic: "Probability",
      name: "Odds in favour and against",
      formula: "Odds in favour = favourable : unfavourable",
      symbols: [["favourable", "wanted outcomes"], ["unfavourable", "the rest"]],
      generalUse: "To express chance as odds rather than a probability — games, betting.",
      laymanUse: "Compares the number of winning ways to the number of losing ways.",
      example: "Rolling a 6: odds in favour 1:5"
    },
    {
      subtopic: "Probability",
      name: "Binomial distribution mean and variance",
      formula: "Mean = np,   Variance = npq   (q = 1 − p)",
      symbols: [["n", "number of trials"], ["p", "success probability"], ["q", "failure probability"]],
      generalUse: "To find the average and spread of successes in repeated yes/no trials (Class 12).",
      laymanUse: "For repeated coin-style trials, the average successes is n×p.",
      example: "10 tosses, p=0.5 → mean 5, variance 2.5"
    }
  ]
});
