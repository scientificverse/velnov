/* ============================================================
   SQL - TOPIC 6: AGGREGATE FUNCTIONS (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "SQL",
  icon: "🗄️",
  color: "#0f80cc",
  description: "Databases from basics to window functions - 20 topics.",
  topics: [
    {
      name: "6. Aggregate Functions",
      questions: [
        {
          difficulty: "easy",
          question: "What is an aggregate function?",
          options: {
            A: "A function that combines MANY rows into a single summary value",
            B: "A function that runs per row",
            C: "A way to join tables",
            D: "A sorting method"
          },
          answer: "A",
          explanation: "COUNT, SUM, AVG, MIN and MAX collapse a set of rows into one result - the foundation of every report and dashboard.",
          related: ["Aggregates", "Summary"]
        },
        {
          difficulty: "easy",
          question: "Which function counts rows?",
          options: { A: "COUNT()", B: "TOTAL()", C: "ROWS()", D: "NUMBER()" },
          answer: "A",
          explanation: "COUNT(*) counts all rows; COUNT(column) counts non-NULL values; COUNT(DISTINCT column) counts unique non-NULL values.",
          code: "SELECT COUNT(*) FROM orders;",
          related: ["COUNT"]
        },
        {
          difficulty: "medium",
          question: "What is the difference between COUNT(*) and COUNT(column)?",
          options: {
            A: "COUNT(*) counts every row; COUNT(column) skips rows where that column is NULL",
            B: "They are identical",
            C: "COUNT(column) counts columns",
            D: "COUNT(*) ignores NULLs"
          },
          answer: "A",
          explanation: "Comparing the two reveals data completeness: COUNT(*) = 100 with COUNT(phone) = 60 means 40 customers have no phone number.",
          related: ["COUNT", "NULL"]
        },
        {
          difficulty: "medium",
          question: "What does COUNT(DISTINCT city) return?",
          options: {
            A: "The number of unique non-NULL cities",
            B: "The total row count",
            C: "A list of cities",
            D: "An error"
          },
          answer: "A",
          explanation: "DISTINCT inside an aggregate deduplicates before counting - the standard way to answer 'how many different X do we have?'.",
          code: "SELECT COUNT(DISTINCT customer_id) AS unique_buyers FROM orders;",
          related: ["COUNT DISTINCT"]
        },
        {
          difficulty: "easy",
          question: "Which function adds up numeric values?",
          options: { A: "SUM()", B: "TOTAL()", C: "ADD()", D: "PLUS()" },
          answer: "A",
          explanation: "SUM works on numeric columns and ignores NULLs. If every value is NULL (or there are no rows), SUM returns NULL, not 0.",
          related: ["SUM"]
        },
        {
          difficulty: "hard",
          question: "What does SUM(amount) return when the table has NO matching rows?",
          options: {
            A: "NULL - not 0",
            B: "0",
            C: "An empty string",
            D: "An error"
          },
          answer: "A",
          explanation: "A frequent surprise in reports. Wrap it for a numeric default: COALESCE(SUM(amount), 0). Note COUNT does return 0 in the same situation.",
          code: "SELECT COALESCE(SUM(amount), 0) AS total FROM orders WHERE 1=0;",
          related: ["SUM", "NULL", "COALESCE"]
        },
        {
          difficulty: "medium",
          question: "How does AVG treat NULL values?",
          options: {
            A: "It ignores them - dividing only by the count of non-NULL values",
            B: "It treats them as 0",
            C: "It returns NULL if any value is NULL",
            D: "It errors"
          },
          answer: "A",
          explanation: "For 10, 20, NULL the average is 15, not 10. If missing values should count as zero, write AVG(COALESCE(score, 0)).",
          notes: ["This silently changes report numbers - know which behaviour you want."],
          related: ["AVG", "NULL"]
        },
        {
          difficulty: "medium",
          question: "What do MIN() and MAX() do?",
          options: {
            A: "Return the smallest and largest value - they work on numbers, dates and text",
            B: "Only work on numbers",
            C: "Return the first and last row",
            D: "Count rows"
          },
          answer: "A",
          explanation: "MAX(order_date) gives the most recent order; MIN(name) gives the alphabetically first name. Both ignore NULLs.",
          related: ["MIN", "MAX"]
        },
        {
          difficulty: "hard",
          question: "Why does this fail?\nSELECT name, MAX(marks) FROM students;",
          options: {
            A: "name is not aggregated and not grouped - the database cannot know WHICH name to show",
            B: "MAX only works with GROUP BY",
            C: "name must be numeric",
            D: "It always works"
          },
          answer: "A",
          explanation: "MAX collapses many rows to one value, but name has many possible values. Either group by name, or use ORDER BY marks DESC LIMIT 1 to get the whole top row. (MySQL may allow this and return an arbitrary name - a well-known trap.)",
          code: "SELECT name, marks FROM students ORDER BY marks DESC LIMIT 1;",
          related: ["GROUP BY", "Aggregates"]
        },
        {
          difficulty: "medium",
          question: "Can you use an aggregate in the WHERE clause?\nWHERE COUNT(*) > 5",
          options: {
            A: "No - aggregates are computed after WHERE; use HAVING instead",
            B: "Yes, always",
            C: "Only with COUNT",
            D: "Only in subqueries"
          },
          answer: "A",
          explanation: "Execution order is FROM, WHERE, GROUP BY, HAVING. WHERE filters raw rows before any aggregation exists; HAVING filters the aggregated groups.",
          related: ["HAVING", "Execution order"]
        },
        {
          difficulty: "medium",
          question: "What does this return?\nSELECT AVG(price) FROM products;",
          options: {
            A: "One row with the average price across all products",
            B: "One row per product",
            C: "The sum of prices",
            D: "An error without GROUP BY"
          },
          answer: "A",
          explanation: "An aggregate without GROUP BY treats the entire result set as one group, always returning exactly one row.",
          related: ["AVG", "Aggregates"]
        },
        {
          difficulty: "hard",
          question: "How do you round an average to 2 decimal places?",
          options: {
            A: "ROUND(AVG(price), 2)",
            B: "AVG(ROUND(price, 2))",
            C: "AVG(price).round(2)",
            D: "ROUND(price, 2) AS AVG"
          },
          answer: "A",
          explanation: "Aggregate first, then round the single result. Option B rounds each row before averaging, which can give a slightly different figure.",
          code: "SELECT ROUND(AVG(price), 2) AS avg_price FROM products;",
          related: ["ROUND", "AVG"]
        },
        {
          difficulty: "medium",
          question: "Which query counts orders over 1000?",
          options: {
            A: "SELECT COUNT(*) FROM orders WHERE total > 1000;",
            B: "SELECT COUNT(total > 1000) FROM orders;",
            C: "SELECT COUNT(*) HAVING total > 1000;",
            D: "SELECT COUNT(WHERE total > 1000);"
          },
          answer: "A",
          explanation: "Filter the rows with WHERE, then count what remains. This is more efficient than aggregating everything and filtering afterwards.",
          related: ["COUNT", "WHERE"]
        },
        {
          difficulty: "hard",
          question: "What is conditional aggregation?",
          options: {
            A: "Using CASE inside an aggregate to compute several different metrics in one query",
            B: "Aggregating with an IF statement outside SQL",
            C: "Filtering with HAVING",
            D: "Using two queries"
          },
          answer: "A",
          explanation: "It produces cross-tab style summaries in a single scan of the table - far faster than running several separate queries.",
          code: "SELECT\n  COUNT(*) AS total_orders,\n  SUM(CASE WHEN status='paid' THEN total ELSE 0 END) AS paid_value,\n  AVG(CASE WHEN status='paid' THEN total END)      AS avg_paid\nFROM orders;",
          related: ["CASE", "Conditional aggregation"]
        },
        {
          difficulty: "medium",
          question: "What does SUM(quantity * price) compute?",
          options: {
            A: "The total value - each row's product is calculated first, then summed",
            B: "The sum of quantities times the sum of prices",
            C: "An error",
            D: "The average value"
          },
          answer: "A",
          explanation: "Expressions inside an aggregate are evaluated per row. Note SUM(a) * SUM(b) would give a completely different (and usually wrong) answer.",
          related: ["SUM", "Expressions"]
        },
        {
          difficulty: "hard",
          question: "Can aggregates be nested, like MAX(COUNT(*))?",
          options: {
            A: "Not directly - you need a subquery or CTE to aggregate an aggregate",
            B: "Yes, always",
            C: "Only with GROUP BY",
            D: "Only MAX can nest"
          },
          answer: "A",
          explanation: "Compute the counts in an inner query, then aggregate that result. (Some databases allow MAX(COUNT(*)) with GROUP BY, but the subquery form is clearer and portable.)",
          code: "SELECT MAX(cnt) FROM (\n  SELECT city, COUNT(*) AS cnt FROM customers GROUP BY city\n) AS t;",
          related: ["Subqueries", "Nested aggregates"]
        },
        {
          difficulty: "medium",
          question: "What does COUNT(1) do compared with COUNT(*)?",
          options: {
            A: "Exactly the same thing - modern optimisers treat them identically",
            B: "COUNT(1) is much faster",
            C: "COUNT(1) counts only the first column",
            D: "COUNT(1) returns 1"
          },
          answer: "A",
          explanation: "An old performance myth. Both count rows; use COUNT(*) as it states the intent clearly.",
          related: ["COUNT", "Myths"]
        },
        {
          difficulty: "hard",
          question: "What does this compute?\nSELECT SUM(price) / COUNT(*) FROM products;",
          options: {
            A: "The average price - but it counts rows with NULL prices, unlike AVG(price)",
            B: "Exactly the same as AVG(price)",
            C: "The total price",
            D: "An error"
          },
          answer: "A",
          explanation: "SUM skips NULLs while COUNT(*) counts every row, so with missing prices the result is LOWER than AVG(price). A subtle reporting discrepancy worth knowing.",
          related: ["AVG", "NULL", "Gotchas"]
        },
        {
          difficulty: "medium",
          question: "How do you find the most recent date in a table?",
          options: { A: "SELECT MAX(created_at) FROM t;", B: "SELECT LAST(created_at) FROM t;", C: "SELECT created_at ORDER BY DESC;", D: "SELECT NEWEST(created_at);" },
          answer: "A",
          explanation: "MAX works on dates because they have a natural order. To get the whole row of that date, use ORDER BY created_at DESC LIMIT 1.",
          related: ["MAX", "Dates"]
        },
        {
          difficulty: "hard",
          question: "What is the difference between COUNT(DISTINCT x) and COUNT(x)?",
          options: {
            A: "DISTINCT counts unique values; without it, every non-NULL occurrence is counted",
            B: "They are identical",
            C: "DISTINCT includes NULLs",
            D: "COUNT(x) counts uniques"
          },
          answer: "A",
          explanation: "In an orders table, COUNT(customer_id) = number of orders, while COUNT(DISTINCT customer_id) = number of customers who ordered. Two very different metrics.",
          related: ["COUNT DISTINCT"]
        },
        {
          difficulty: "medium",
          question: "Which aggregate finds the cheapest product's PRICE?",
          options: { A: "MIN(price)", B: "FIRST(price)", C: "LOW(price)", D: "BOTTOM(price)" },
          answer: "A",
          explanation: "MIN returns the value only. For the product's name too, either group appropriately or use ORDER BY price ASC LIMIT 1.",
          related: ["MIN"]
        },
        {
          difficulty: "hard",
          question: "Do aggregates work on text columns?",
          options: {
            A: "COUNT, MIN and MAX do (alphabetical order); SUM and AVG do not",
            B: "None work on text",
            C: "All work on text",
            D: "Only COUNT works"
          },
          answer: "A",
          explanation: "MAX(name) returns the alphabetically last name. Attempting SUM on text either errors or silently coerces to 0 depending on the database.",
          related: ["MIN", "MAX", "Data types"]
        },
        {
          difficulty: "hard",
          question: "What does STRING_AGG / GROUP_CONCAT do?",
          options: {
            A: "Combines values from many rows into ONE delimited string",
            B: "Counts strings",
            C: "Splits a string",
            D: "Sorts strings"
          },
          answer: "A",
          explanation: "STRING_AGG(name, ', ') in PostgreSQL/SQL Server, GROUP_CONCAT(name) in MySQL, LISTAGG in Oracle - perfect for listing all tags of a product on one line.",
          code: "SELECT product_id, STRING_AGG(tag, ', ') AS tags\nFROM product_tags GROUP BY product_id;",
          related: ["STRING_AGG", "GROUP_CONCAT"]
        },
        {
          difficulty: "medium",
          question: "What does this return if orders is empty?\nSELECT COUNT(*) FROM orders;",
          options: { A: "0", B: "NULL", C: "No rows", D: "An error" },
          answer: "A",
          explanation: "COUNT always returns a number, so an empty table gives 0. Contrast with SUM, MIN, MAX and AVG, which return NULL when there is nothing to aggregate.",
          related: ["COUNT", "Empty tables"]
        },
        {
          difficulty: "hard",
          question: "How do you compute a percentage of the total in one query?",
          options: {
            A: "Divide by a subquery: amount * 100.0 / (SELECT SUM(amount) FROM t)",
            B: "amount / SUM(amount)",
            C: "PERCENT(amount)",
            D: "It requires two queries"
          },
          answer: "A",
          explanation: "The subquery computes the grand total once. A window function does this even more elegantly: amount * 100.0 / SUM(amount) OVER ().",
          related: ["Subqueries", "Window functions"]
        },
        {
          difficulty: "medium",
          question: "Which is faster for checking whether any matching row exists?",
          options: {
            A: "EXISTS - it stops at the first match, while COUNT(*) scans everything",
            B: "COUNT(*) > 0",
            C: "They are identical",
            D: "SUM(1)"
          },
          answer: "A",
          explanation: "Counting all matches just to compare with zero is wasted work on large tables. EXISTS short-circuits.",
          code: "-- prefer:\nIF EXISTS (SELECT 1 FROM orders WHERE customer_id = 5)",
          related: ["EXISTS", "Performance"]
        },
        {
          difficulty: "hard",
          question: "What is the median, and why is it awkward in standard SQL?",
          options: {
            A: "The middle value - there is no simple MEDIAN() in most databases, so it needs window functions or PERCENTILE_CONT",
            B: "The same as AVG",
            C: "A built-in aggregate everywhere",
            D: "Impossible to compute"
          },
          answer: "A",
          explanation: "PostgreSQL and Oracle offer PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY x). Elsewhere you rank rows and pick the middle one. Medians resist outliers better than averages.",
          related: ["Percentiles", "Statistics"]
        },
        {
          difficulty: "medium",
          question: "What does this compute?\nSELECT MAX(marks) - MIN(marks) FROM students;",
          options: {
            A: "The RANGE - the spread between the highest and lowest score",
            B: "The average",
            C: "The count",
            D: "An error"
          },
          answer: "A",
          explanation: "Aggregates can be combined in expressions, since each returns a single value. Useful for quick data-quality checks.",
          related: ["MIN", "MAX", "Expressions"]
        },
        {
          difficulty: "hard",
          question: "Why can aggregates give wrong totals after a JOIN?",
          options: {
            A: "A one-to-many join duplicates parent rows, so their values get summed multiple times",
            B: "Aggregates never work with joins",
            C: "Joins remove NULLs",
            D: "It cannot happen"
          },
          answer: "A",
          explanation: "Joining orders to order_items repeats each order once per item, inflating SUM(order.total). Aggregate in a subquery first, or sum the item-level values instead.",
          notes: ["A classic, hard-to-spot reporting bug."],
          related: ["Joins", "Fan-out", "Aggregates"]
        },
        {
          difficulty: "medium",
          question: "Which query answers 'what is our highest single order value'?",
          options: {
            A: "SELECT MAX(total) FROM orders;",
            B: "SELECT SUM(total) FROM orders;",
            C: "SELECT COUNT(total) FROM orders;",
            D: "SELECT total FROM orders;"
          },
          answer: "A",
          explanation: "MAX gives the largest single value; SUM would give total revenue and COUNT the number of orders. Choosing the right aggregate is choosing the right question.",
          related: ["MAX", "Business questions"]
        }
      ]
    }
  ]
});
