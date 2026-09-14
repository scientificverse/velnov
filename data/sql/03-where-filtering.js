/* ============================================================
   SQL - TOPIC 3: FILTERING WITH WHERE (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "SQL",
  icon: "🗄️",
  color: "#0f80cc",
  description: "Databases from basics to window functions - 20 topics.",
  topics: [
    {
      name: "3. Filtering with WHERE",
      questions: [
        {
          difficulty: "easy",
          question: "What does the WHERE clause do?",
          options: {
            A: "Filters rows, keeping only those where the condition is TRUE",
            B: "Sorts the rows",
            C: "Groups the rows",
            D: "Selects which columns to show"
          },
          answer: "A",
          explanation: "WHERE decides which ROWS appear; SELECT decides which COLUMNS. A row is kept only when the condition evaluates to TRUE (not FALSE and not NULL).",
          code: "SELECT * FROM students WHERE marks > 50;",
          related: ["WHERE", "Filtering"]
        },
        {
          difficulty: "easy",
          question: "Which operator tests equality in SQL?",
          options: {
            A: "= (a single equals sign)",
            B: "== ",
            C: "===",
            D: "eq"
          },
          answer: "A",
          explanation: "Unlike most programming languages, SQL uses one equals sign for comparison. There is no assignment operator inside a WHERE clause to confuse it with.",
          code: "WHERE city = 'Delhi'",
          related: ["Comparison operators"]
        },
        {
          difficulty: "easy",
          question: "Which operator means NOT EQUAL in standard SQL?",
          options: {
            A: "<> (and != is accepted by most databases)",
            B: "!== only",
            C: "NOT=",
            D: "=/="
          },
          answer: "A",
          explanation: "<> is the SQL standard; != works in MySQL, PostgreSQL and SQL Server too. Both behave identically.",
          code: "WHERE status <> 'cancelled'",
          related: ["Comparison operators"]
        },
        {
          difficulty: "medium",
          question: "How do you require TWO conditions to both be true?",
          options: {
            A: "WHERE age > 18 AND city = 'Delhi'",
            B: "WHERE age > 18 && city = 'Delhi'",
            C: "WHERE age > 18, city = 'Delhi'",
            D: "WHERE both(age > 18, city = 'Delhi')"
          },
          answer: "A",
          explanation: "SQL uses the words AND, OR and NOT rather than symbols. (MySQL accepts && but it is non-standard.)",
          related: ["Logical operators"]
        },
        {
          difficulty: "hard",
          question: "Which has higher precedence: AND or OR?",
          options: {
            A: "AND - so 'a OR b AND c' means 'a OR (b AND c)'",
            B: "OR",
            C: "They are equal, evaluated left to right",
            D: "It depends on the database"
          },
          answer: "A",
          explanation: "AND binds tighter, exactly like multiplication before addition. This causes real bugs - use parentheses whenever you mix them.",
          code: "-- probably WRONG:\nWHERE city = 'Delhi' OR city = 'Mumbai' AND active = 1\n-- means: Delhi OR (Mumbai AND active)\n\n-- intended:\nWHERE (city = 'Delhi' OR city = 'Mumbai') AND active = 1",
          notes: ["A very common interview question and a frequent real-world bug."],
          related: ["Precedence", "Parentheses"]
        },
        {
          difficulty: "medium",
          question: "What does BETWEEN do?\nWHERE marks BETWEEN 50 AND 80",
          options: {
            A: "Matches values from 50 to 80 INCLUSIVE of both ends",
            B: "Matches 51 to 79",
            C: "Matches only 50 and 80",
            D: "Matches values outside the range"
          },
          answer: "A",
          explanation: "BETWEEN is inclusive: equivalent to marks >= 50 AND marks <= 80. Remember this when working with dates, where the upper bound often surprises people.",
          related: ["BETWEEN", "Ranges"]
        },
        {
          difficulty: "hard",
          question: "Why is 'WHERE order_date BETWEEN '2026-01-01' AND '2026-01-31'' risky?",
          options: {
            A: "If the column stores times, rows later on 31 Jan (e.g. 14:30) are EXCLUDED because the bound means midnight",
            B: "BETWEEN does not work with dates",
            C: "The dates need to be numbers",
            D: "It is perfectly safe"
          },
          answer: "A",
          explanation: "A DATETIME of 2026-01-31 14:30 is greater than 2026-01-31 00:00. The safe pattern uses a half-open range: >= start AND < next_month_start.",
          code: "WHERE order_date >= '2026-01-01'\n  AND order_date <  '2026-02-01'",
          related: ["Dates", "BETWEEN", "Gotchas"]
        },
        {
          difficulty: "medium",
          question: "What does IN do?\nWHERE city IN ('Delhi', 'Mumbai', 'Pune')",
          options: {
            A: "Matches rows whose city equals ANY value in the list",
            B: "Matches rows containing those letters",
            C: "Requires all three cities",
            D: "Is the same as BETWEEN"
          },
          answer: "A",
          explanation: "IN is shorthand for a chain of ORs and is far more readable. It can also take a subquery: WHERE id IN (SELECT customer_id FROM orders).",
          related: ["IN", "Subqueries"]
        },
        {
          difficulty: "medium",
          question: "What does LIKE 'A%' match?",
          options: {
            A: "Any value STARTING with A - % matches zero or more characters",
            B: "Only the exact text 'A%'",
            C: "Values ending with A",
            D: "Values containing exactly one A"
          },
          answer: "A",
          explanation: "% is the multi-character wildcard and _ matches exactly one character. So 'A%' is starts-with, '%a%' is contains, and '_a%' means second letter is a.",
          code: "WHERE name LIKE 'A%'      -- starts with A\nWHERE name LIKE '%son'    -- ends with son\nWHERE name LIKE '%an%'    -- contains an\nWHERE code LIKE 'A_1'     -- A, any char, 1",
          related: ["LIKE", "Wildcards"]
        },
        {
          difficulty: "medium",
          question: "What does the _ wildcard match in LIKE?",
          options: {
            A: "Exactly ONE character",
            B: "Zero or more characters",
            C: "A literal underscore",
            D: "A space"
          },
          answer: "A",
          explanation: "'J_n' matches Jan and Jon but not Jain. To match a literal underscore or percent sign, use an ESCAPE clause.",
          related: ["LIKE", "Wildcards"]
        },
        {
          difficulty: "hard",
          question: "Why can 'WHERE name LIKE '%son'' be slow on a large table?",
          options: {
            A: "A leading wildcard prevents the database using an index, forcing a full scan",
            B: "LIKE is always slow",
            C: "It uses too much memory",
            D: "It is not slow"
          },
          answer: "A",
          explanation: "Indexes work like a dictionary - sorted by the start of the value. 'A%' can seek directly; '%son' must check every row. For contains-searches at scale, use full-text search.",
          related: ["Indexes", "Performance"]
        },
        {
          difficulty: "hard",
          question: "How do you correctly test for a NULL value?",
          options: {
            A: "WHERE email IS NULL",
            B: "WHERE email = NULL",
            C: "WHERE email == NULL",
            D: "WHERE email = 'NULL'"
          },
          answer: "A",
          explanation: "NULL means 'unknown', and comparing anything to unknown yields UNKNOWN - never TRUE. So = NULL silently matches nothing. Always use IS NULL / IS NOT NULL.",
          code: "WHERE email IS NULL\nWHERE email IS NOT NULL",
          notes: ["One of the most-tested SQL concepts."],
          related: ["NULL", "Three-valued logic"]
        },
        {
          difficulty: "hard",
          question: "What does 'WHERE status <> 'shipped'' return for rows where status is NULL?",
          options: {
            A: "It EXCLUDES them - NULL <> 'shipped' is UNKNOWN, not TRUE",
            B: "It includes them",
            C: "It throws an error",
            D: "It includes them only in MySQL"
          },
          answer: "A",
          explanation: "A frequent bug: 'everything not shipped' silently drops NULL rows. Write: WHERE status <> 'shipped' OR status IS NULL.",
          related: ["NULL", "Gotchas"]
        },
        {
          difficulty: "medium",
          question: "What does NOT IN do when the list contains a NULL?\nWHERE id NOT IN (1, 2, NULL)",
          options: {
            A: "It returns NO rows at all - a classic NULL trap",
            B: "It ignores the NULL",
            C: "It returns all rows",
            D: "It throws an error"
          },
          answer: "A",
          explanation: "NOT IN expands to id <> 1 AND id <> 2 AND id <> NULL, and the last comparison is always UNKNOWN, so the whole condition can never be TRUE. Use NOT EXISTS, or filter NULLs from the subquery.",
          notes: ["A famous SQL interview question."],
          related: ["NOT IN", "NULL", "NOT EXISTS"]
        },
        {
          difficulty: "medium",
          question: "How do you negate a condition?",
          options: {
            A: "WHERE NOT (age > 18)  - or use the opposite operator: age <= 18",
            B: "WHERE !age > 18",
            C: "WHERE age NOT > 18",
            D: "WHERE opposite(age > 18)"
          },
          answer: "A",
          explanation: "NOT inverts a condition. It also combines with other keywords: NOT IN, NOT LIKE, NOT BETWEEN, IS NOT NULL.",
          related: ["NOT", "Negation"]
        },
        {
          difficulty: "medium",
          question: "Is string comparison in WHERE case-sensitive?",
          options: {
            A: "It depends on the database's COLLATION - MySQL is usually case-insensitive, PostgreSQL is case-sensitive",
            B: "Always case-sensitive",
            C: "Always case-insensitive",
            D: "Only for numbers"
          },
          answer: "A",
          explanation: "Because behaviour varies, portable code normalises both sides: WHERE LOWER(email) = LOWER('Ana@X.com'). Note that wrapping the column in a function can prevent index use.",
          related: ["Collation", "Case sensitivity"]
        },
        {
          difficulty: "medium",
          question: "Which query finds students with marks over 90 OR under 20?",
          options: {
            A: "WHERE marks > 90 OR marks < 20",
            B: "WHERE marks > 90 AND marks < 20",
            C: "WHERE marks BETWEEN 90 AND 20",
            D: "WHERE marks NOT BETWEEN 20 AND 90"
          },
          answer: "A",
          explanation: "Option B can never be true (no number is both). Option D is close but INCLUSIVE at the boundaries, so it excludes exactly 20 and 90 differently from option A.",
          related: ["OR", "Ranges"]
        },
        {
          difficulty: "hard",
          question: "Why avoid wrapping a column in a function in WHERE?\nWHERE YEAR(order_date) = 2026",
          options: {
            A: "It makes the condition non-sargable - the index on order_date cannot be used",
            B: "YEAR() does not exist",
            C: "It returns wrong results",
            D: "There is no problem"
          },
          answer: "A",
          explanation: "The database must compute YEAR() for every row before comparing. Rewrite as a range so the index works: order_date >= '2026-01-01' AND order_date < '2027-01-01'.",
          related: ["Sargable", "Indexes", "Performance"]
        },
        {
          difficulty: "medium",
          question: "What does this return?\nSELECT * FROM orders WHERE total > 100 AND total < 100;",
          options: {
            A: "Zero rows - the conditions contradict each other",
            B: "All rows",
            C: "Rows equal to 100",
            D: "An error"
          },
          answer: "A",
          explanation: "No value satisfies both. Contradictory filters usually mean AND was written where OR was intended.",
          related: ["Logic", "AND"]
        },
        {
          difficulty: "medium",
          question: "How do you filter on a boolean column?",
          options: {
            A: "WHERE is_active = TRUE  (or = 1 where booleans are stored as integers)",
            B: "WHERE is_active is on",
            C: "WHERE is_active",
            D: "WHERE active(is_active)"
          },
          answer: "A",
          explanation: "PostgreSQL has a real BOOLEAN type and even allows bare 'WHERE is_active'. MySQL stores booleans as TINYINT, so = 1 is normal.",
          related: ["Booleans", "Dialects"]
        },
        {
          difficulty: "hard",
          question: "What is the result of comparing NULL = NULL?",
          options: {
            A: "UNKNOWN - not TRUE, because two unknown values cannot be proven equal",
            B: "TRUE",
            C: "FALSE",
            D: "An error"
          },
          answer: "A",
          explanation: "SQL uses three-valued logic: TRUE, FALSE and UNKNOWN. WHERE keeps only TRUE rows, so NULL comparisons filter everything out. (The IS NOT DISTINCT FROM operator treats NULLs as equal where supported.)",
          related: ["NULL", "Three-valued logic"]
        },
        {
          difficulty: "medium",
          question: "How do you find rows where a text column is empty OR missing?",
          options: {
            A: "WHERE name IS NULL OR name = ''",
            B: "WHERE name = NULL",
            C: "WHERE name IS EMPTY",
            D: "WHERE LENGTH(name) = NULL"
          },
          answer: "A",
          explanation: "An empty string and NULL are different values in SQL: '' is a known-but-blank value, NULL is unknown. Real data often contains both, so check for both.",
          related: ["NULL", "Empty string"]
        },
        {
          difficulty: "medium",
          question: "What does WHERE id IN (SELECT customer_id FROM orders) do?",
          options: {
            A: "Keeps customers who have at least one order - a subquery supplies the list",
            B: "Is invalid syntax",
            C: "Returns all customers",
            D: "Joins the tables"
          },
          answer: "A",
          explanation: "IN accepts a subquery returning one column. For large data, EXISTS often performs better and handles NULLs more safely.",
          related: ["Subqueries", "IN", "EXISTS"]
        },
        {
          difficulty: "hard",
          question: "What is the difference between WHERE and HAVING?",
          options: {
            A: "WHERE filters individual ROWS before grouping; HAVING filters GROUPS after aggregation",
            B: "They are interchangeable",
            C: "HAVING is faster",
            D: "WHERE only works with numbers"
          },
          answer: "A",
          explanation: "Aggregates like COUNT(*) cannot appear in WHERE because grouping has not happened yet. Filter raw rows in WHERE (more efficient) and group results in HAVING.",
          code: "SELECT dept, COUNT(*) AS n\nFROM employees\nWHERE active = 1        -- rows first\nGROUP BY dept\nHAVING COUNT(*) > 5;    -- then groups",
          related: ["HAVING", "GROUP BY"]
        },
        {
          difficulty: "medium",
          question: "Which query is written correctly?",
          options: {
            A: "SELECT name FROM users WHERE age > 18 ORDER BY name;",
            B: "SELECT name FROM users ORDER BY name WHERE age > 18;",
            C: "SELECT name WHERE age > 18 FROM users;",
            D: "WHERE age > 18 SELECT name FROM users;"
          },
          answer: "A",
          explanation: "Clause order is fixed: SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT. Writing them out of order is a syntax error.",
          related: ["Clause order"]
        },
        {
          difficulty: "hard",
          question: "What does this match?\nWHERE phone LIKE '9%' AND LENGTH(phone) = 10",
          options: {
            A: "Ten-character phone numbers starting with 9",
            B: "Any number containing 9",
            C: "Numbers ending in 9",
            D: "An error"
          },
          answer: "A",
          explanation: "Combining pattern matching with a length check is a common validation query for finding malformed data. (Some databases call the function LEN instead of LENGTH.)",
          related: ["LIKE", "Data validation"]
        },
        {
          difficulty: "medium",
          question: "How would you exclude several statuses?",
          options: {
            A: "WHERE status NOT IN ('cancelled', 'refunded')",
            B: "WHERE status != ('cancelled', 'refunded')",
            C: "WHERE NOT status = 'cancelled', 'refunded'",
            D: "WHERE status EXCEPT ('cancelled')"
          },
          answer: "A",
          explanation: "NOT IN is the readable form. Remember it silently returns nothing if the list contains NULL, and that rows where status itself is NULL are excluded too.",
          related: ["NOT IN", "NULL"]
        },
        {
          difficulty: "hard",
          question: "What does 'WHERE 1=1' accomplish in generated SQL?",
          options: {
            A: "It is an always-true placeholder, so every real condition can be appended with AND",
            B: "It filters one row",
            C: "It speeds up the query",
            D: "It is a syntax error"
          },
          answer: "A",
          explanation: "When code builds queries dynamically, starting with 1=1 avoids awkward logic about whether to write WHERE or AND. Optimisers ignore the constant.",
          code: "WHERE 1=1\n  AND city = 'Delhi'\n  AND active = 1",
          related: ["Dynamic SQL", "Tricks"]
        },
        {
          difficulty: "hard",
          question: "Why should application code use parameterised queries instead of building WHERE strings?",
          options: {
            A: "To prevent SQL injection - user input is sent separately from the query text",
            B: "To make queries shorter",
            C: "Because concatenation is a syntax error",
            D: "It makes no difference"
          },
          answer: "A",
          explanation: "Concatenating input allows an attacker to inject SQL (e.g. ' OR 1=1 --). Parameters keep data and code separate, so input can never change the query's structure.",
          code: "-- safe (placeholder):\nSELECT * FROM users WHERE email = ?;",
          related: ["SQL injection", "Security"]
        },
        {
          difficulty: "medium",
          question: "Before running a DELETE, what is the safest habit?",
          options: {
            A: "Run the same WHERE clause in a SELECT first to see exactly which rows will be affected",
            B: "Run it and check afterwards",
            C: "Use DELETE without WHERE first",
            D: "Disable the index"
          },
          answer: "A",
          explanation: "Previewing with SELECT (and wrapping changes in a transaction you can roll back) prevents the classic disaster of a DELETE whose WHERE was wrong - or missing entirely.",
          related: ["Safety", "DELETE", "Transactions"]
        }
      ]
    }
  ]
});
