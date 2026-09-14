/* ============================================================
   SQL - TOPIC 20: WINDOW FUNCTIONS & OPTIMIZATION (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "SQL",
  icon: "🗄️",
  color: "#0f80cc",
  description: "Databases from basics to window functions - 20 topics.",
  topics: [
    {
      name: "20. Window Functions & Optimization",
      questions: [
        {
          difficulty: "hard",
          question: "What is a window function?",
          options: {
            A: "A function that computes across a set of rows RELATED to the current row, without collapsing them into one",
            B: "A GUI feature",
            C: "The same as GROUP BY",
            D: "A type of index"
          },
          answer: "A",
          explanation: "Unlike aggregates with GROUP BY (which return one row per group), window functions add a computed column while KEEPING every row - perfect for running totals, ranks and comparisons to a group.",
          code: "SELECT name, dept, salary,\n  AVG(salary) OVER (PARTITION BY dept) AS dept_avg\nFROM employees;",
          related: ["Window functions", "OVER"]
        },
        {
          difficulty: "hard",
          question: "What does the OVER() clause define?",
          options: {
            A: "The 'window' of rows the function operates on - via PARTITION BY and ORDER BY",
            B: "Which table to use",
            C: "The output format",
            D: "An index"
          },
          answer: "A",
          explanation: "OVER() is what makes a function a window function. Empty OVER() means the whole result set; PARTITION BY splits it into groups; ORDER BY orders rows within each partition.",
          related: ["OVER", "PARTITION BY"]
        },
        {
          difficulty: "hard",
          question: "What is the difference between GROUP BY and a window function?",
          options: {
            A: "GROUP BY collapses rows into one per group; a window function keeps all rows and adds the computed value to each",
            B: "They are identical",
            C: "Window functions delete rows",
            D: "GROUP BY keeps all rows"
          },
          answer: "A",
          explanation: "To show each employee's salary alongside their department average WITHOUT losing individual rows, you need a window function. GROUP BY would leave you with one row per department.",
          related: ["Window functions", "GROUP BY"]
        },
        {
          difficulty: "hard",
          question: "What does PARTITION BY do in a window function?",
          options: {
            A: "Divides rows into groups; the function restarts its calculation for each partition",
            B: "Sorts the rows",
            C: "Filters rows",
            D: "Creates partitions on disk"
          },
          answer: "A",
          explanation: "PARTITION BY dept means the window function (rank, running total, average) computes separately within each department, like a GROUP BY that keeps every row.",
          related: ["PARTITION BY", "OVER"]
        },
        {
          difficulty: "hard",
          question: "What does ROW_NUMBER() OVER (ORDER BY marks DESC) produce?",
          options: {
            A: "A sequential number 1, 2, 3... assigned by descending marks - unique even for ties",
            B: "The same number for ties",
            C: "The marks value",
            D: "A random number"
          },
          answer: "A",
          explanation: "ROW_NUMBER always gives distinct consecutive numbers, breaking ties arbitrarily. It is the tool for 'give me the top N per group' and for de-duplication.",
          related: ["ROW_NUMBER", "Ranking"]
        },
        {
          difficulty: "hard",
          question: "What is the difference between RANK() and DENSE_RANK()?",
          options: {
            A: "RANK leaves gaps after ties (1,1,3); DENSE_RANK does not (1,1,2)",
            B: "They are identical",
            C: "DENSE_RANK leaves gaps",
            D: "RANK never allows ties"
          },
          answer: "A",
          explanation: "With two rows tied at rank 1, RANK gives the next row rank 3 (skipping 2), while DENSE_RANK gives it rank 2. ROW_NUMBER would give 1 and 2 to the tied rows.",
          code: "SELECT name, RANK() OVER (ORDER BY marks DESC) AS r,\n            DENSE_RANK() OVER (ORDER BY marks DESC) AS dr\nFROM students;",
          related: ["RANK", "DENSE_RANK"]
        },
        {
          difficulty: "hard",
          question: "How do you find the top 3 earners PER DEPARTMENT?",
          options: {
            A: "Use ROW_NUMBER/RANK OVER (PARTITION BY dept ORDER BY salary DESC) and filter <= 3 in an outer query",
            B: "ORDER BY salary LIMIT 3",
            C: "GROUP BY dept HAVING salary",
            D: "MAX(salary)"
          },
          answer: "A",
          explanation: "You cannot filter a window function in WHERE (it is computed after WHERE), so wrap it in a subquery/CTE and filter the rank there. This 'top N per group' is a classic window-function use.",
          code: "WITH r AS (\n  SELECT *, RANK() OVER (PARTITION BY dept ORDER BY salary DESC) rk FROM emp\n)\nSELECT * FROM r WHERE rk <= 3;",
          related: ["Top N per group", "PARTITION BY"]
        },
        {
          difficulty: "hard",
          question: "Why can't you filter a window function's result in WHERE?",
          options: {
            A: "Window functions are computed AFTER WHERE (during SELECT), so the value does not exist yet - use a subquery/CTE",
            B: "It is a syntax preference",
            C: "You can filter them in WHERE",
            D: "They run first"
          },
          answer: "A",
          explanation: "Execution order places window functions after WHERE and GROUP BY. To filter on rank or a running total, compute it in a CTE and apply WHERE in the outer query.",
          related: ["Execution order", "Window functions"]
        },
        {
          difficulty: "hard",
          question: "What does a running total look like with window functions?",
          options: {
            A: "SUM(amount) OVER (ORDER BY date) - accumulates as rows progress",
            B: "SUM(amount) GROUP BY date",
            C: "SUM(amount) OVER () only",
            D: "It is impossible"
          },
          answer: "A",
          explanation: "Adding ORDER BY to a windowed SUM makes it a running total (cumulative sum) up to the current row. PARTITION BY resets it per group (e.g. running total per account).",
          code: "SELECT date, amount,\n  SUM(amount) OVER (ORDER BY date) AS running_total\nFROM transactions;",
          related: ["Running total", "SUM OVER"]
        },
        {
          difficulty: "hard",
          question: "What do LAG() and LEAD() do?",
          options: {
            A: "Access a value from a PREVIOUS (LAG) or NEXT (LEAD) row - useful for period-over-period comparisons",
            B: "Sort rows",
            C: "Lag the query",
            D: "Delete rows"
          },
          answer: "A",
          explanation: "LAG(sales) OVER (ORDER BY month) gives last month's sales on the current row, so you can compute growth. LEAD looks forward. Both replace awkward self joins.",
          code: "SELECT month, sales,\n  sales - LAG(sales) OVER (ORDER BY month) AS change\nFROM monthly;",
          related: ["LAG", "LEAD"]
        },
        {
          difficulty: "hard",
          question: "How do you compute month-over-month growth?",
          options: {
            A: "sales - LAG(sales) OVER (ORDER BY month) - compare each row to the previous",
            B: "SUM(sales) GROUP BY month",
            C: "MAX(sales) - MIN(sales)",
            D: "It cannot be done"
          },
          answer: "A",
          explanation: "LAG pulls the prior month's value into the current row, so a simple subtraction gives the change. Divide by the lagged value for a percentage.",
          related: ["LAG", "Growth"]
        },
        {
          difficulty: "hard",
          question: "What does NTILE(4) do?",
          options: {
            A: "Divides ordered rows into 4 roughly equal buckets (quartiles), labelling each row 1-4",
            B: "Returns the 4th row",
            C: "Multiplies by 4",
            D: "Creates 4 tables"
          },
          answer: "A",
          explanation: "NTILE distributes rows into N groups - useful for quartiles, percentiles and cohort analysis. NTILE(100) approximates percentiles.",
          related: ["NTILE", "Percentiles"]
        },
        {
          difficulty: "hard",
          question: "What do FIRST_VALUE() and LAST_VALUE() return?",
          options: {
            A: "The first or last value in the window's ordered frame - e.g. the earliest order per customer",
            B: "The min and max",
            C: "The row count",
            D: "The current row"
          },
          answer: "A",
          explanation: "FIRST_VALUE(price) OVER (PARTITION BY product ORDER BY date) gives the earliest price on every row. LAST_VALUE needs a full frame clause to work as expected, a common gotcha.",
          related: ["FIRST_VALUE", "LAST_VALUE", "Frame"]
        },
        {
          difficulty: "hard",
          question: "What is a window FRAME (ROWS BETWEEN ...)?",
          options: {
            A: "It defines which rows around the current row are included - e.g. a 3-row moving average",
            B: "A picture frame",
            C: "The whole table always",
            D: "An index"
          },
          answer: "A",
          explanation: "ROWS BETWEEN 2 PRECEDING AND CURRENT ROW creates a moving window. Frames enable moving averages and custom cumulative ranges - a powerful, advanced feature.",
          code: "AVG(price) OVER (ORDER BY date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW)",
          related: ["Window frame", "Moving average"]
        },
        {
          difficulty: "hard",
          question: "What is the default frame when you use ORDER BY in OVER() without ROWS?",
          options: {
            A: "RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW - a running total up to the current row (including ties)",
            B: "The whole partition",
            C: "Only the current row",
            D: "No frame"
          },
          answer: "A",
          explanation: "This default is why SUM(...) OVER (ORDER BY x) is a running total. It also explains the LAST_VALUE surprise: the default frame ends at the current row, not the partition end.",
          related: ["Frame", "Default behaviour"]
        },
        {
          difficulty: "hard",
          question: "How do you deduplicate keeping the newest row per key?",
          options: {
            A: "ROW_NUMBER() OVER (PARTITION BY key ORDER BY created_at DESC) then keep rows where the number = 1",
            B: "DISTINCT key",
            C: "GROUP BY key",
            D: "MAX(created_at)"
          },
          answer: "A",
          explanation: "Numbering rows per key by recency and keeping rn = 1 selects the latest per group while retaining its other columns - which DISTINCT and GROUP BY cannot do cleanly.",
          related: ["ROW_NUMBER", "Deduplication"]
        },
        {
          difficulty: "hard",
          question: "What does SUM(x) OVER () (empty parentheses) compute?",
          options: {
            A: "The grand total of x across ALL rows, repeated on every row",
            B: "A running total",
            C: "The current row only",
            D: "An error"
          },
          answer: "A",
          explanation: "Empty OVER() treats the whole result set as one window. It is the neat way to add a grand total to every row - handy for computing each row's percentage of the total.",
          code: "SELECT amount, amount * 100.0 / SUM(amount) OVER () AS pct FROM sales;",
          related: ["OVER()", "Percent of total"]
        },
        {
          difficulty: "medium",
          question: "What is the first step to optimise a slow query?",
          options: {
            A: "Run EXPLAIN to see the execution plan and identify scans, missing indexes or bad join orders",
            B: "Add more RAM",
            C: "Rewrite it randomly",
            D: "Drop the table"
          },
          answer: "A",
          explanation: "Measure before changing. EXPLAIN (or EXPLAIN ANALYZE) shows exactly how the database runs the query, so you optimise the real bottleneck rather than guessing.",
          related: ["EXPLAIN", "Optimisation"]
        },
        {
          difficulty: "hard",
          question: "Which query change most often gives the biggest speed-up?",
          options: {
            A: "Adding an index on the columns used in WHERE/JOIN, and making conditions sargable",
            B: "Using SELECT *",
            C: "Removing WHERE clauses",
            D: "Adding more subqueries"
          },
          answer: "A",
          explanation: "A missing index turning a full scan into an index seek can be orders of magnitude faster. Ensure conditions do not wrap the column in a function, or the index cannot be used.",
          related: ["Indexes", "Sargability"]
        },
        {
          difficulty: "medium",
          question: "Why avoid SELECT * in production queries?",
          options: {
            A: "It transfers unneeded columns, prevents covering indexes, and breaks if the schema changes",
            B: "It is a syntax error",
            C: "It is always faster",
            D: "No reason"
          },
          answer: "A",
          explanation: "Selecting only needed columns reduces I/O and network transfer and can let an index satisfy the query entirely (covering index). It also makes code resilient to column changes.",
          related: ["SELECT *", "Performance"]
        },
        {
          difficulty: "hard",
          question: "How does LIMIT help performance with an index?",
          options: {
            A: "With a matching index and ORDER BY, the database can stop after finding the first N rows instead of sorting everything",
            B: "It never helps",
            C: "It scans twice",
            D: "It ignores indexes"
          },
          answer: "A",
          explanation: "An index that already provides the requested order lets the engine read just the first N rows. Without the index it may sort the entire result before applying LIMIT.",
          related: ["LIMIT", "Indexes"]
        },
        {
          difficulty: "hard",
          question: "What is the N+1 query problem?",
          options: {
            A: "Running one query per row of a previous result (in application code) instead of a single join - very slow",
            B: "A window function",
            C: "An index type",
            D: "A transaction level"
          },
          answer: "A",
          explanation: "Fetching 100 orders then querying each order's customer separately = 101 queries. A single JOIN (or IN clause) does it in one round trip. A common ORM performance trap.",
          related: ["N+1 problem", "Joins"]
        },
        {
          difficulty: "hard",
          question: "When does an index NOT get used despite existing?",
          options: {
            A: "When the condition wraps the column in a function, uses a leading wildcard LIKE '%x', or the query returns most rows",
            B: "Never - indexes always apply",
            C: "Only on small tables",
            D: "When you use WHERE"
          },
          answer: "A",
          explanation: "Non-sargable conditions (functions on the column), leading-wildcard searches, and low-selectivity queries all defeat indexes. EXPLAIN reveals when a scan is chosen instead.",
          related: ["Sargability", "Index usage"]
        },
        {
          difficulty: "medium",
          question: "Why keep table statistics up to date?",
          options: {
            A: "The optimiser uses them to estimate row counts and choose good plans; stale stats lead to bad plans",
            B: "They store backups",
            C: "They are decorative",
            D: "They index data"
          },
          answer: "A",
          explanation: "After large data changes, running ANALYZE (or UPDATE STATISTICS) refreshes the numbers the optimiser relies on, helping it pick the right indexes and join methods.",
          related: ["Statistics", "Optimiser"]
        },
        {
          difficulty: "hard",
          question: "How can a CTE or subquery sometimes hurt performance?",
          options: {
            A: "If materialised, it may prevent the optimiser from pushing filters down or using indexes across the boundary",
            B: "They always speed things up",
            C: "They cannot affect performance",
            D: "They add indexes"
          },
          answer: "A",
          explanation: "In some databases a CTE is an optimisation fence. Readability is valuable, but for hot queries check EXPLAIN - occasionally inlining the logic lets the optimiser do more.",
          related: ["CTE", "Optimisation"]
        },
        {
          difficulty: "hard",
          question: "What does PARTITION BY combined with ORDER BY in a window give you?",
          options: {
            A: "Per-group ordered calculations - e.g. running total or rank that restarts for each partition",
            B: "A single total",
            C: "Random ordering",
            D: "An error"
          },
          answer: "A",
          explanation: "PARTITION BY account ORDER BY date with SUM gives a running balance PER account. The partition resets the calculation; the order defines the accumulation direction.",
          related: ["PARTITION BY", "Running total"]
        },
        {
          difficulty: "hard",
          question: "How do you compute a 7-day moving average?",
          options: {
            A: "AVG(value) OVER (ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW)",
            B: "AVG(value) GROUP BY date",
            C: "AVG(value) OVER ()",
            D: "It is impossible"
          },
          answer: "A",
          explanation: "The frame ROWS BETWEEN 6 PRECEDING AND CURRENT ROW includes the current day plus the six before it - a 7-row moving average. Frames make time-series smoothing straightforward.",
          related: ["Moving average", "Window frame"]
        },
        {
          difficulty: "medium",
          question: "What is denormalization's role in read optimization?",
          options: {
            A: "Pre-joining or pre-aggregating data reduces expensive joins at read time, at the cost of update complexity",
            B: "It always slows reads",
            C: "It removes all indexes",
            D: "It has no effect"
          },
          answer: "A",
          explanation: "For analytics dashboards, storing a summary table (updated periodically) avoids re-joining and re-aggregating huge tables on every query - a deliberate performance trade-off.",
          related: ["Denormalization", "Read optimisation"]
        },
        {
          difficulty: "hard",
          question: "How do you find the Nth highest value robustly?",
          options: {
            A: "DENSE_RANK() OVER (ORDER BY value DESC) and filter for the rank = N",
            B: "ORDER BY value LIMIT N",
            C: "MAX(value)",
            D: "It is impossible"
          },
          answer: "A",
          explanation: "DENSE_RANK handles ties sensibly and generalises to any N, unlike nested MAX subqueries or LIMIT/OFFSET tricks. Filter the ranked result in an outer query.",
          related: ["DENSE_RANK", "Nth highest"]
        },
        {
          difficulty: "hard",
          question: "What is the single best mindset for query optimization?",
          options: {
            A: "Measure with EXPLAIN, fix the real bottleneck (usually indexing and reducing rows early), then re-measure",
            B: "Guess and add random hints",
            C: "Always rewrite as subqueries",
            D: "Add every possible index"
          },
          answer: "A",
          explanation: "Optimisation is empirical: profile the actual plan, address the biggest cost (a missing index, a full scan, fetching too much), and verify the improvement. Avoid premature or blind tuning.",
          related: ["Optimisation", "EXPLAIN"]
        }
      ]
    }
  ]
});
