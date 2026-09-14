/* ============================================================
   SQL - TOPIC 4: SORTING & LIMITING RESULTS (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "SQL",
  icon: "🗄️",
  color: "#0f80cc",
  description: "Databases from basics to window functions - 20 topics.",
  topics: [
    {
      name: "4. Sorting & Limiting",
      questions: [
        {
          difficulty: "easy",
          question: "Which clause sorts the result rows?",
          options: { A: "ORDER BY", B: "SORT BY", C: "GROUP BY", D: "ARRANGE BY" },
          answer: "A",
          explanation: "ORDER BY sorts the final result. GROUP BY groups rows for aggregation and does NOT guarantee any ordering.",
          code: "SELECT name, marks FROM students ORDER BY marks;",
          related: ["ORDER BY", "Sorting"]
        },
        {
          difficulty: "easy",
          question: "What is the DEFAULT sort direction?",
          options: {
            A: "ASC - ascending (smallest first, A to Z)",
            B: "DESC - descending",
            C: "Random",
            D: "Insertion order"
          },
          answer: "A",
          explanation: "ORDER BY marks is the same as ORDER BY marks ASC. Write DESC explicitly for highest-first.",
          code: "ORDER BY marks DESC;   -- highest first",
          related: ["ASC", "DESC"]
        },
        {
          difficulty: "medium",
          question: "How do you sort by class ascending, then by marks descending within each class?",
          options: {
            A: "ORDER BY class ASC, marks DESC",
            B: "ORDER BY class, marks ASC DESC",
            C: "ORDER BY class AND marks DESC",
            D: "ORDER BY class DESC marks"
          },
          answer: "A",
          explanation: "List columns in priority order, each with its own direction. The second column only breaks ties within equal values of the first.",
          related: ["Multi-column sort"]
        },
        {
          difficulty: "hard",
          question: "Is the row order guaranteed WITHOUT an ORDER BY?",
          options: {
            A: "No - never rely on it, even if results look sorted; the database may return rows in any order",
            B: "Yes, always insertion order",
            C: "Yes, primary key order",
            D: "Yes, alphabetical"
          },
          answer: "A",
          explanation: "Order can change with indexes, parallel execution or data growth. If order matters, say so explicitly with ORDER BY.",
          notes: ["A classic source of bugs that appear only in production."],
          related: ["ORDER BY", "Guarantees"]
        },
        {
          difficulty: "medium",
          question: "Can you sort by a column that is NOT in the SELECT list?",
          options: {
            A: "Yes - ORDER BY can use any column from the source table",
            B: "No, it must be selected",
            C: "Only with an alias",
            D: "Only for numbers"
          },
          answer: "A",
          explanation: "SELECT name FROM students ORDER BY marks works fine. (The exception is with SELECT DISTINCT or UNION, where the sort column must appear in the result.)",
          related: ["ORDER BY", "DISTINCT"]
        },
        {
          difficulty: "medium",
          question: "Can ORDER BY use a column ALIAS defined in SELECT?",
          options: {
            A: "Yes - ORDER BY runs AFTER SELECT, so the alias exists",
            B: "No, aliases never work there",
            C: "Only in MySQL",
            D: "Only for computed columns"
          },
          answer: "A",
          explanation: "This is the mirror of the WHERE rule: WHERE runs before SELECT (no alias), ORDER BY runs after (alias available).",
          code: "SELECT price * qty AS total\nFROM items\nORDER BY total DESC;   -- alias works here",
          related: ["Aliases", "Execution order"]
        },
        {
          difficulty: "hard",
          question: "What does ORDER BY 2 mean?",
          options: {
            A: "Sort by the SECOND column in the SELECT list (positional reference)",
            B: "Sort by the value 2",
            C: "Return 2 rows",
            D: "A syntax error"
          },
          answer: "A",
          explanation: "It works, but it is fragile: changing the SELECT list silently changes the sort. Name the column or alias instead.",
          related: ["Positional sort", "Best practices"]
        },
        {
          difficulty: "medium",
          question: "Which clause limits how many rows are returned in MySQL/PostgreSQL?",
          options: { A: "LIMIT 10", B: "TOP 10", C: "MAX 10", D: "FIRST 10" },
          answer: "A",
          explanation: "MySQL, PostgreSQL and SQLite use LIMIT. SQL Server uses SELECT TOP 10, and the SQL standard is FETCH FIRST 10 ROWS ONLY.",
          code: "-- MySQL / PostgreSQL\nSELECT * FROM students ORDER BY marks DESC LIMIT 10;\n\n-- SQL Server\nSELECT TOP 10 * FROM students ORDER BY marks DESC;",
          related: ["LIMIT", "TOP", "Dialects"]
        },
        {
          difficulty: "hard",
          question: "Why must LIMIT almost always be paired with ORDER BY?",
          options: {
            A: "Without a defined order, 'the top 10' is arbitrary and can differ between runs",
            B: "LIMIT is a syntax error alone",
            C: "It is only for performance",
            D: "They are unrelated"
          },
          answer: "A",
          explanation: "LIMIT truncates whatever order the database happened to produce. 'Top 10 scorers' only means something after ORDER BY marks DESC.",
          related: ["LIMIT", "ORDER BY"]
        },
        {
          difficulty: "medium",
          question: "What does OFFSET do?\nLIMIT 10 OFFSET 20",
          options: {
            A: "Skips the first 20 rows, then returns the next 10 - used for pagination",
            B: "Returns rows 10 to 20",
            C: "Skips 10 rows",
            D: "Returns 30 rows"
          },
          answer: "A",
          explanation: "For page N with a page size of 10: OFFSET = (N - 1) * 10. Page 3 skips 20 rows.",
          code: "SELECT * FROM posts\nORDER BY created_at DESC\nLIMIT 10 OFFSET 20;   -- page 3",
          related: ["OFFSET", "Pagination"]
        },
        {
          difficulty: "hard",
          question: "Why does OFFSET become slow on very large tables?",
          options: {
            A: "The database must still read and discard all skipped rows - OFFSET 100000 scans 100,000 rows first",
            B: "It locks the table",
            C: "It uses no index at all",
            D: "It is not slow"
          },
          answer: "A",
          explanation: "For deep pagination, use keyset (cursor) pagination instead: remember the last row's sort value and filter WHERE id > last_id ORDER BY id LIMIT 10.",
          related: ["Pagination", "Performance", "Keyset pagination"]
        },
        {
          difficulty: "medium",
          question: "Where do NULLs appear when sorting ascending?",
          options: {
            A: "It depends on the database - PostgreSQL puts them LAST, MySQL puts them FIRST",
            B: "Always first",
            C: "Always last",
            D: "They are excluded"
          },
          answer: "A",
          explanation: "For portable, explicit control use NULLS FIRST / NULLS LAST where supported, or sort on a CASE expression that maps NULLs to a chosen position.",
          code: "ORDER BY score DESC NULLS LAST;   -- PostgreSQL/Oracle",
          related: ["NULL", "Sorting"]
        },
        {
          difficulty: "hard",
          question: "How would you sort so that a specific status appears first?",
          options: {
            A: "ORDER BY CASE WHEN status = 'urgent' THEN 0 ELSE 1 END, created_at",
            B: "ORDER BY status = 'urgent'",
            C: "ORDER BY urgent FIRST",
            D: "It is impossible"
          },
          answer: "A",
          explanation: "A CASE expression creates a custom sort key. This 'priority sort' pattern is very common for dashboards and task lists.",
          related: ["CASE", "Custom sorting"]
        },
        {
          difficulty: "medium",
          question: "How do numbers stored as TEXT sort?",
          options: {
            A: "Alphabetically - so '10' comes before '9'",
            B: "Numerically",
            C: "Randomly",
            D: "They cannot be sorted"
          },
          answer: "A",
          explanation: "Character-by-character comparison puts '10' before '9' because '1' < '9'. Cast to a number to fix it: ORDER BY CAST(code AS INT). Better still, store numbers in numeric columns.",
          related: ["Data types", "CAST"]
        },
        {
          difficulty: "medium",
          question: "How do you find the single highest-scoring student?",
          options: {
            A: "SELECT * FROM students ORDER BY marks DESC LIMIT 1;",
            B: "SELECT MAX(*) FROM students;",
            C: "SELECT TOP marks FROM students;",
            D: "SELECT FIRST(marks) FROM students;"
          },
          answer: "A",
          explanation: "Sorting descending and taking one row also gives you the whole row, not just the maximum value (which is all MAX(marks) would return).",
          related: ["LIMIT", "MAX"]
        },
        {
          difficulty: "hard",
          question: "What is a problem with ORDER BY marks DESC LIMIT 1 when there are TIES?",
          options: {
            A: "It arbitrarily picks ONE of the tied rows - the others are hidden",
            B: "It errors on ties",
            C: "It returns all tied rows",
            D: "Ties are impossible"
          },
          answer: "A",
          explanation: "To return every top scorer, use a subquery (WHERE marks = (SELECT MAX(marks) ...)) or window functions with RANK(), which is covered in topic 20.",
          related: ["Ties", "RANK"]
        },
        {
          difficulty: "medium",
          question: "How do you get a random row?",
          options: {
            A: "ORDER BY RANDOM() LIMIT 1  (RAND() in MySQL, NEWID() in SQL Server)",
            B: "SELECT RANDOM FROM t",
            C: "LIMIT RANDOM",
            D: "It is not possible"
          },
          answer: "A",
          explanation: "It works but is expensive on big tables because every row gets a random value and the whole set is sorted. For large data, sample by id range instead.",
          related: ["Random", "Performance"]
        },
        {
          difficulty: "medium",
          question: "Does ORDER BY affect which rows are returned?",
          options: {
            A: "No - it only changes their ORDER (unless combined with LIMIT)",
            B: "Yes, it filters rows",
            C: "Yes, it removes duplicates",
            D: "It groups rows"
          },
          answer: "A",
          explanation: "Filtering is WHERE's job. But with LIMIT, the order determines WHICH rows survive the cut - which is why the pair must be considered together.",
          related: ["ORDER BY", "LIMIT"]
        },
        {
          difficulty: "hard",
          question: "In which order does the database EXECUTE these clauses?\nSELECT / FROM / WHERE / ORDER BY / LIMIT",
          options: {
            A: "FROM, WHERE, SELECT, ORDER BY, LIMIT",
            B: "SELECT, FROM, WHERE, ORDER BY, LIMIT",
            C: "LIMIT, ORDER BY, WHERE, FROM, SELECT",
            D: "The same order as written"
          },
          answer: "A",
          explanation: "Data is read, filtered, projected, sorted and finally truncated. This explains why aliases work in ORDER BY but not WHERE, and why LIMIT applies to sorted output.",
          related: ["Execution order"]
        },
        {
          difficulty: "medium",
          question: "How do you sort case-insensitively?",
          options: {
            A: "ORDER BY LOWER(name)",
            B: "ORDER BY name IGNORE CASE",
            C: "ORDER BY name ASC ASC",
            D: "It is automatic everywhere"
          },
          answer: "A",
          explanation: "Without it, some databases place all capitals before lowercase, so 'Zoe' sorts before 'anna'. Collation settings can also control this.",
          related: ["Collation", "LOWER"]
        },
        {
          difficulty: "medium",
          question: "How do you show the 5 most recent orders?",
          options: {
            A: "ORDER BY order_date DESC LIMIT 5",
            B: "ORDER BY order_date ASC LIMIT 5",
            C: "LIMIT 5 ORDER BY order_date",
            D: "SELECT LAST 5 FROM orders"
          },
          answer: "A",
          explanation: "Most recent means largest date, so sort descending. Option B would give the five OLDEST orders.",
          related: ["Dates", "LIMIT"]
        },
        {
          difficulty: "hard",
          question: "Why might the same LIMIT query return different rows on different runs?",
          options: {
            A: "Because ties (or a missing ORDER BY) leave the order undefined - add a unique tiebreaker column",
            B: "Because LIMIT is random",
            C: "Because of caching",
            D: "It cannot happen"
          },
          answer: "A",
          explanation: "For stable pagination always end with a unique column: ORDER BY created_at DESC, id DESC. Otherwise rows can repeat or vanish between pages.",
          related: ["Pagination", "Deterministic order"]
        },
        {
          difficulty: "medium",
          question: "Which is the SQL-standard way to limit rows?",
          options: {
            A: "FETCH FIRST 10 ROWS ONLY",
            B: "LIMIT 10",
            C: "TOP 10",
            D: "ROWNUM <= 10"
          },
          answer: "A",
          explanation: "OFFSET ... FETCH is the standard, supported by PostgreSQL, Oracle 12c+ and SQL Server. LIMIT is more common in practice; ROWNUM is old Oracle syntax.",
          code: "SELECT * FROM t ORDER BY id\nOFFSET 20 ROWS FETCH FIRST 10 ROWS ONLY;",
          related: ["Standards", "Dialects"]
        },
        {
          difficulty: "medium",
          question: "Can you use ORDER BY inside a subquery meaningfully?",
          options: {
            A: "Usually not - the outer query may reorder it; it only matters with LIMIT inside the subquery",
            B: "Yes, order is always preserved",
            C: "It is a syntax error",
            D: "Only in views"
          },
          answer: "A",
          explanation: "Sorting a subquery is generally pointless (and some databases forbid it without LIMIT). Apply ORDER BY at the outermost level.",
          related: ["Subqueries", "ORDER BY"]
        },
        {
          difficulty: "hard",
          question: "How do you sort by a value's position in a custom list?",
          options: {
            A: "Use CASE (or FIELD() in MySQL) to map each value to a sort number",
            B: "ORDER BY LIST(...)",
            C: "ORDER BY IN (...)",
            D: "It is impossible"
          },
          answer: "A",
          explanation: "For example ordering sizes S, M, L, XL - which are neither alphabetical nor numeric. Map them explicitly.",
          code: "ORDER BY CASE size\n  WHEN 'S' THEN 1 WHEN 'M' THEN 2\n  WHEN 'L' THEN 3 ELSE 4 END;",
          related: ["CASE", "Custom order"]
        },
        {
          difficulty: "medium",
          question: "Does ORDER BY slow down a query?",
          options: {
            A: "It can, since sorting takes work - but an index on the sort column can make it nearly free",
            B: "Never",
            C: "Always doubles the time",
            D: "Only with LIMIT"
          },
          answer: "A",
          explanation: "If an index already stores rows in the required order, the database can read them in order and skip sorting entirely - a big win for paginated queries.",
          related: ["Indexes", "Performance"]
        },
        {
          difficulty: "medium",
          question: "How do you return rows 11-20 of a sorted list?",
          options: {
            A: "ORDER BY ... LIMIT 10 OFFSET 10",
            B: "LIMIT 11, 20",
            C: "BETWEEN 11 AND 20",
            D: "OFFSET 20 LIMIT 10"
          },
          answer: "A",
          explanation: "Skip the first 10, then take 10. (MySQL also supports the shorthand LIMIT 10, 10 where the first number is the offset - easy to misread.)",
          related: ["Pagination", "OFFSET"]
        },
        {
          difficulty: "hard",
          question: "What does DISTINCT combined with ORDER BY require?",
          options: {
            A: "The ORDER BY columns must appear in the SELECT list",
            B: "Nothing special",
            C: "DISTINCT cannot be sorted",
            D: "ORDER BY must come first"
          },
          answer: "A",
          explanation: "After DISTINCT collapses rows, a column that was not selected no longer has a single well-defined value to sort by, so most databases reject it.",
          related: ["DISTINCT", "ORDER BY"]
        },
        {
          difficulty: "medium",
          question: "What is the safest ORDER BY for a paginated API?",
          options: {
            A: "A meaningful column plus a unique tiebreaker: ORDER BY created_at DESC, id DESC",
            B: "ORDER BY created_at only",
            C: "No ORDER BY, just LIMIT",
            D: "ORDER BY RANDOM()"
          },
          answer: "A",
          explanation: "The unique column guarantees a total order, so pages never overlap or skip rows when timestamps are identical.",
          related: ["Pagination", "Stability"]
        },
        {
          difficulty: "medium",
          question: "What does this query answer?\nSELECT city, COUNT(*) AS n FROM customers GROUP BY city ORDER BY n DESC LIMIT 3;",
          options: {
            A: "The three cities with the most customers",
            B: "The first three cities alphabetically",
            C: "Three random customers",
            D: "It is invalid"
          },
          answer: "A",
          explanation: "Group to count per city, sort by that count descending, then keep the top 3 - the standard 'top N by category' report pattern.",
          related: ["GROUP BY", "Top N"]
        }
      ]
    }
  ]
});
