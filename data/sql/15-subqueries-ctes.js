/* ============================================================
   SQL - TOPIC 15: SUBQUERIES & CTEs (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "SQL",
  icon: "🗄️",
  color: "#0f80cc",
  description: "Databases from basics to window functions - 20 topics.",
  topics: [
    {
      name: "15. Subqueries & CTEs",
      questions: [
        {
          difficulty: "easy",
          question: "What is a subquery?",
          options: {
            A: "A query nested inside another query, whose result feeds the outer query",
            B: "A second database",
            C: "A backup query",
            D: "A type of join"
          },
          answer: "A",
          explanation: "Subqueries appear in WHERE, FROM, SELECT or HAVING. They let you use the result of one query as an input to another - for example, comparing against an average.",
          code: "SELECT name FROM students\nWHERE marks > (SELECT AVG(marks) FROM students);",
          related: ["Subqueries", "Nesting"]
        },
        {
          difficulty: "medium",
          question: "What is a scalar subquery?",
          options: {
            A: "A subquery that returns exactly ONE value (one row, one column)",
            B: "A subquery returning many rows",
            C: "A subquery with no result",
            D: "A subquery in FROM"
          },
          answer: "A",
          explanation: "Scalar subqueries can be used anywhere a single value is expected, such as = comparisons or the SELECT list. Returning more than one row causes an error.",
          code: "SELECT name, (SELECT AVG(marks) FROM students) AS class_avg FROM students;",
          related: ["Scalar subquery"]
        },
        {
          difficulty: "medium",
          question: "What does this find?\nSELECT name FROM products WHERE price > (SELECT AVG(price) FROM products);",
          options: {
            A: "Products priced above the overall average",
            B: "The most expensive product",
            C: "All products",
            D: "An error"
          },
          answer: "A",
          explanation: "The subquery computes one average value, and the outer query compares each product to it. A classic 'above average' pattern that a single query cannot express with an aggregate in WHERE.",
          related: ["Scalar subquery", "AVG"]
        },
        {
          difficulty: "hard",
          question: "What is a correlated subquery?",
          options: {
            A: "A subquery that REFERENCES a column from the outer query, so it re-runs for each outer row",
            B: "A subquery that runs once",
            C: "A subquery with no WHERE",
            D: "Two unrelated queries"
          },
          answer: "A",
          explanation: "Correlated subqueries depend on the current outer row, executing repeatedly. Powerful but potentially slow - often rewritable as a join or window function.",
          code: "SELECT e.name FROM employees e\nWHERE e.salary > (SELECT AVG(salary) FROM employees WHERE dept = e.dept);",
          related: ["Correlated subquery", "Performance"]
        },
        {
          difficulty: "hard",
          question: "How does a correlated subquery differ from a regular (non-correlated) one in execution?",
          options: {
            A: "A non-correlated subquery runs ONCE; a correlated one runs for EACH outer row",
            B: "They run identically",
            C: "Correlated runs once",
            D: "Non-correlated never runs"
          },
          answer: "A",
          explanation: "Because it references the outer row, the correlated subquery is conceptually re-evaluated per row. Optimisers can sometimes transform it into a join, but be mindful of the performance model.",
          related: ["Correlated subquery", "Execution"]
        },
        {
          difficulty: "medium",
          question: "What does EXISTS with a correlated subquery test?",
          options: {
            A: "Whether at least one matching row exists for the current outer row - it stops at the first match",
            B: "The count of rows",
            C: "Whether a table exists",
            D: "Nothing"
          },
          answer: "A",
          explanation: "EXISTS is a semi-join: it returns the outer row if the subquery finds anything. It is efficient because it short-circuits and does not care what the subquery selects.",
          code: "SELECT c.name FROM customers c\nWHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.id);",
          related: ["EXISTS", "Semi-join"]
        },
        {
          difficulty: "hard",
          question: "Why is EXISTS often preferred over IN for large subqueries?",
          options: {
            A: "EXISTS can stop at the first match and handles NULLs safely; IN may materialise the whole list and mishandle NULLs",
            B: "IN is always faster",
            C: "They are identical",
            D: "EXISTS is invalid"
          },
          answer: "A",
          explanation: "IN with a subquery containing NULL can behave unexpectedly (especially NOT IN). EXISTS/NOT EXISTS avoid the NULL trap and often perform better on big data.",
          related: ["EXISTS", "IN", "NULL"]
        },
        {
          difficulty: "medium",
          question: "What does a subquery in the FROM clause create?",
          options: {
            A: "A derived table (inline view) that the outer query treats as a regular table",
            B: "A permanent table",
            C: "An index",
            D: "A join"
          },
          answer: "A",
          explanation: "A derived table must be given an alias. It is handy for pre-aggregating or filtering before the outer query works on the result.",
          code: "SELECT dept, avg_sal FROM (\n  SELECT dept, AVG(salary) AS avg_sal FROM employees GROUP BY dept\n) t WHERE avg_sal > 50000;",
          related: ["Derived table", "Inline view"]
        },
        {
          difficulty: "medium",
          question: "What is a CTE (Common Table Expression)?",
          options: {
            A: "A named temporary result defined with WITH, usable in the query that follows",
            B: "A permanent table",
            C: "A type of index",
            D: "A backup"
          },
          answer: "A",
          explanation: "CTEs improve readability by naming and separating steps. They exist only for the duration of the query, acting like a labelled subquery you can reference by name.",
          code: "WITH dept_avg AS (\n  SELECT dept, AVG(salary) AS avg_sal FROM employees GROUP BY dept\n)\nSELECT * FROM dept_avg WHERE avg_sal > 50000;",
          related: ["CTE", "WITH"]
        },
        {
          difficulty: "medium",
          question: "What is the main advantage of a CTE over a nested subquery?",
          options: {
            A: "Readability - complex logic is broken into named, top-to-bottom steps",
            B: "It is always faster",
            C: "It uses less storage",
            D: "It prevents errors"
          },
          answer: "A",
          explanation: "Deeply nested subqueries are hard to follow. CTEs read like a sequence of named steps, and one CTE can be referenced multiple times in the same query.",
          related: ["CTE", "Readability"]
        },
        {
          difficulty: "hard",
          question: "Can you define MULTIPLE CTEs in one query?",
          options: {
            A: "Yes - separate them with commas after a single WITH, and later CTEs can reference earlier ones",
            B: "No, only one",
            C: "Only two",
            D: "Only with UNION"
          },
          answer: "A",
          explanation: "Chaining CTEs builds a readable pipeline: WITH a AS (...), b AS (SELECT ... FROM a) SELECT ... FROM b. Each step names an intermediate result.",
          code: "WITH sales AS (...),\n     ranked AS (SELECT *, RANK() OVER (...) FROM sales)\nSELECT * FROM ranked WHERE rnk <= 3;",
          related: ["CTE", "Chaining"]
        },
        {
          difficulty: "hard",
          question: "What is a RECURSIVE CTE used for?",
          options: {
            A: "Traversing hierarchies or generating sequences - it references ITSELF until a stopping condition",
            B: "Nothing special",
            C: "Faster joins",
            D: "Sorting data"
          },
          answer: "A",
          explanation: "WITH RECURSIVE has an anchor (starting rows) and a recursive part that repeatedly joins back to the CTE - ideal for org charts, category trees and number series.",
          code: "WITH RECURSIVE nums AS (\n  SELECT 1 AS n\n  UNION ALL\n  SELECT n + 1 FROM nums WHERE n < 10\n)\nSELECT * FROM nums;",
          related: ["Recursive CTE", "Hierarchies"]
        },
        {
          difficulty: "hard",
          question: "What are the two parts of a recursive CTE?",
          options: {
            A: "The anchor member (base rows) and the recursive member (which references the CTE), joined by UNION ALL",
            B: "SELECT and FROM",
            C: "WHERE and HAVING",
            D: "Two subqueries"
          },
          answer: "A",
          explanation: "The anchor runs once to seed the result; the recursive member runs repeatedly, each time using the previous iteration's rows, until it produces no new rows.",
          related: ["Recursive CTE", "Structure"]
        },
        {
          difficulty: "medium",
          question: "What does this scalar subquery in SELECT do?\nSELECT name, (SELECT COUNT(*) FROM orders o WHERE o.customer_id = c.id) AS order_count FROM customers c;",
          options: {
            A: "Shows each customer with their order count via a correlated subquery",
            B: "Counts all orders once",
            C: "Returns an error",
            D: "Lists all orders"
          },
          answer: "A",
          explanation: "The correlated subquery runs per customer, counting their orders. A LEFT JOIN with GROUP BY often does this more efficiently, but the subquery form is readable.",
          related: ["Correlated subquery", "SELECT"]
        },
        {
          difficulty: "hard",
          question: "How do you find the customer(s) with the maximum total spend?",
          options: {
            A: "Use a subquery for the max: WHERE total = (SELECT MAX(total) FROM ...) after aggregating",
            B: "ORDER BY total LIMIT 1 always suffices",
            C: "MAX(customer)",
            D: "It is impossible"
          },
          answer: "A",
          explanation: "Comparing to a MAX subquery returns ALL tied top spenders, whereas LIMIT 1 arbitrarily picks one. A CTE that computes totals first makes this clean.",
          code: "WITH t AS (SELECT customer_id, SUM(total) s FROM orders GROUP BY 1)\nSELECT * FROM t WHERE s = (SELECT MAX(s) FROM t);",
          related: ["Subquery", "Ties"]
        },
        {
          difficulty: "medium",
          question: "Where can subqueries appear in a statement?",
          options: {
            A: "In SELECT, FROM, WHERE, HAVING - and even in INSERT/UPDATE/DELETE",
            B: "Only in WHERE",
            C: "Only in FROM",
            D: "Only in SELECT"
          },
          answer: "A",
          explanation: "Subqueries are versatile. A scalar one in SELECT computes a value per row; one in FROM is a derived table; one in WHERE filters; and they drive many INSERT ... SELECT operations.",
          related: ["Subqueries", "Placement"]
        },
        {
          difficulty: "hard",
          question: "What does WHERE col IN (SELECT ...) do, and its risk?",
          options: {
            A: "Keeps rows whose col matches any value the subquery returns; risky as NOT IN with a NULL returns no rows",
            B: "It always works safely",
            C: "It joins tables",
            D: "It sorts rows"
          },
          answer: "A",
          explanation: "IN is fine, but its negation NOT IN silently returns nothing if the subquery yields a NULL. Prefer NOT EXISTS for anti-membership tests.",
          related: ["IN", "NOT IN", "NULL"]
        },
        {
          difficulty: "medium",
          question: "Are CTEs materialised (computed once) or inlined?",
          options: {
            A: "It depends on the database - some materialise them, others inline them into the main query",
            B: "Always materialised",
            C: "Always inlined",
            D: "They are never computed"
          },
          answer: "A",
          explanation: "PostgreSQL historically materialised CTEs (an optimisation fence) but now can inline them; MySQL and SQL Server generally inline. Behaviour affects performance, so test on your platform.",
          related: ["CTE", "Optimisation"]
        },
        {
          difficulty: "hard",
          question: "How can a correlated subquery often be rewritten for speed?",
          options: {
            A: "As a JOIN or a window function that computes the value once per group instead of per row",
            B: "It cannot be rewritten",
            C: "As a CROSS JOIN",
            D: "As a UNION"
          },
          answer: "A",
          explanation: "For example, 'salary above department average' via a correlated subquery can become AVG(salary) OVER (PARTITION BY dept) - one pass instead of many.",
          related: ["Window functions", "Performance"]
        },
        {
          difficulty: "medium",
          question: "What must a derived table (FROM subquery) always have?",
          options: {
            A: "An ALIAS - a name by which the outer query refers to it",
            B: "An index",
            C: "A primary key",
            D: "A WHERE clause"
          },
          answer: "A",
          explanation: "Most databases require an alias for a subquery in FROM, e.g. ) AS t. Without it you get a syntax error.",
          related: ["Derived table", "Alias"]
        },
        {
          difficulty: "hard",
          question: "What does this recursive CTE compute?\nWITH RECURSIVE t AS (SELECT 1 n UNION ALL SELECT n*2 FROM t WHERE n < 100) SELECT * FROM t;",
          options: {
            A: "Powers of 2 up to 128 (1, 2, 4, ... doubling until n >= 100)",
            B: "Numbers 1 to 100",
            C: "An infinite loop",
            D: "An error"
          },
          answer: "A",
          explanation: "The anchor seeds 1; each step doubles the previous value while it is under 100, yielding 1, 2, 4, 8, 16, 32, 64, 128 (128 is produced from 64, which was < 100).",
          related: ["Recursive CTE", "Sequences"]
        },
        {
          difficulty: "hard",
          question: "What prevents a recursive CTE from looping forever?",
          options: {
            A: "A termination condition in the recursive member's WHERE - and databases also enforce a max recursion depth",
            B: "Nothing - they always stop",
            C: "The LIMIT clause only",
            D: "They cannot loop"
          },
          answer: "A",
          explanation: "You must ensure the recursive part eventually produces no rows. Cyclic data (A manages B manages A) can loop, so many databases cap recursion depth as a safety net.",
          related: ["Recursive CTE", "Termination"]
        },
        {
          difficulty: "medium",
          question: "Can a CTE be referenced more than once in the main query?",
          options: {
            A: "Yes - define it once with WITH and use its name multiple times",
            B: "No, only once",
            C: "Only in subqueries",
            D: "Only with UNION"
          },
          answer: "A",
          explanation: "This is a readability win over subqueries: a self join on a computed set can reference the same CTE twice by name instead of repeating the subquery.",
          related: ["CTE", "Reuse"]
        },
        {
          difficulty: "hard",
          question: "What does a subquery returning multiple rows require in a comparison?",
          options: {
            A: "An operator like IN, ANY or ALL - a bare = expects a single value and errors",
            B: "Nothing special",
            C: "Only =",
            D: "A join"
          },
          answer: "A",
          explanation: "= (SELECT ...) fails if the subquery returns many rows. Use IN for membership, or > ANY / > ALL for range comparisons against the set.",
          related: ["IN", "ANY", "ALL"]
        },
        {
          difficulty: "medium",
          question: "How do you filter a GROUP BY result using a subquery threshold?",
          options: {
            A: "Compute the threshold in a subquery and compare in HAVING (or wrap in a CTE and filter outside)",
            B: "Use WHERE with the aggregate",
            C: "It cannot be done",
            D: "Use ORDER BY"
          },
          answer: "A",
          explanation: "For example, HAVING SUM(total) > (SELECT AVG(order_total) FROM ...). A CTE that pre-aggregates then a plain WHERE is often clearer.",
          related: ["HAVING", "Subquery"]
        },
        {
          difficulty: "hard",
          question: "When would you choose a CTE over a temporary table?",
          options: {
            A: "For a single query's readability without persistence; temp tables suit reuse across multiple statements or very large intermediate data",
            B: "CTEs are always better",
            C: "Temp tables cannot be indexed",
            D: "They are identical"
          },
          answer: "A",
          explanation: "A CTE lives only within one statement. If you need the intermediate result across several queries, or want to index it, a temporary table is the better tool.",
          related: ["CTE", "Temp tables"]
        },
        {
          difficulty: "medium",
          question: "What does WHERE col = (SELECT MAX(col) FROM t) return?",
          options: {
            A: "The row(s) holding the maximum value - including ties",
            B: "Only one row always",
            C: "All rows",
            D: "An error"
          },
          answer: "A",
          explanation: "Unlike ORDER BY ... LIMIT 1, comparing to the MAX subquery returns every tied maximum. Useful when ties matter.",
          related: ["Subquery", "MAX", "Ties"]
        },
        {
          difficulty: "hard",
          question: "What is a common readability pattern for a multi-step analysis?",
          options: {
            A: "Chained CTEs: filter in one, aggregate in the next, rank in the next, then SELECT the final result",
            B: "One giant nested subquery",
            C: "Many separate queries copied by hand",
            D: "CROSS JOINs"
          },
          answer: "A",
          explanation: "Building a pipeline of named CTEs mirrors how you think about the problem and makes each step testable. It is the modern idiom for complex analytical SQL.",
          related: ["CTE", "Pipelines"]
        },
        {
          difficulty: "medium",
          question: "Does a subquery in SELECT run for every output row?",
          options: {
            A: "A correlated one does; a non-correlated scalar subquery is typically evaluated once and reused",
            B: "Always once",
            C: "Always per row",
            D: "It never runs"
          },
          answer: "A",
          explanation: "Correlation is the key: if the subquery references the outer row it recomputes per row; if it is constant, the optimiser can compute it a single time.",
          related: ["Correlated subquery", "Performance"]
        },
        {
          difficulty: "hard",
          question: "How do you find the second-highest salary using a subquery?",
          options: {
            A: "SELECT MAX(salary) FROM emp WHERE salary < (SELECT MAX(salary) FROM emp)",
            B: "SELECT MAX(salary) FROM emp",
            C: "ORDER BY salary LIMIT 2",
            D: "It is impossible"
          },
          answer: "A",
          explanation: "The subquery finds the top salary; the outer MAX finds the highest below it - the second highest. A famous interview question; window functions (DENSE_RANK) generalise it to Nth.",
          related: ["Subquery", "Nth highest", "Interview"]
        }
      ]
    }
  ]
});
