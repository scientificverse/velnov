/* ============================================================
   SQL - TOPIC 7: GROUP BY & HAVING (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "SQL",
  icon: "🗄️",
  color: "#0f80cc",
  description: "Databases from basics to window functions - 20 topics.",
  topics: [
    {
      name: "7. GROUP BY & HAVING",
      questions: [
        {
          difficulty: "easy",
          question: "What does GROUP BY do?",
          options: {
            A: "Collapses rows sharing the same value into ONE row per group, so aggregates can be computed per group",
            B: "Sorts the rows",
            C: "Filters the rows",
            D: "Joins tables"
          },
          answer: "A",
          explanation: "GROUP BY city turns a table of customers into one row per city, letting COUNT(*) report customers per city.",
          code: "SELECT city, COUNT(*) AS customers\nFROM customers\nGROUP BY city;",
          related: ["GROUP BY", "Aggregates"]
        },
        {
          difficulty: "medium",
          question: "Which columns may appear in SELECT alongside GROUP BY?",
          options: {
            A: "Only the grouped columns and aggregate functions",
            B: "Any column",
            C: "Only aggregates",
            D: "Only the first column"
          },
          answer: "A",
          explanation: "Every other column would have many possible values per group, so the database cannot pick one. Group by it, or aggregate it with MAX/MIN.",
          related: ["GROUP BY", "Rules"]
        },
        {
          difficulty: "hard",
          question: "Why does this fail in most databases?\nSELECT city, name, COUNT(*) FROM customers GROUP BY city;",
          options: {
            A: "name is neither grouped nor aggregated - each city has many names",
            B: "COUNT cannot be used with GROUP BY",
            C: "city must be aggregated",
            D: "It always works"
          },
          answer: "A",
          explanation: "Add name to GROUP BY (giving one row per city+name), or aggregate it: MAX(name). MySQL historically allowed this and returned an arbitrary name - a source of silently wrong reports.",
          related: ["GROUP BY", "ONLY_FULL_GROUP_BY"]
        },
        {
          difficulty: "medium",
          question: "What does HAVING do?",
          options: {
            A: "Filters the GROUPS after aggregation - it can use aggregate functions",
            B: "Filters rows before grouping",
            C: "Sorts groups",
            D: "Is the same as WHERE"
          },
          answer: "A",
          explanation: "WHERE filters raw rows first; HAVING then filters the summarised groups. Both can appear in one query.",
          code: "SELECT city, COUNT(*) AS n\nFROM customers\nWHERE active = 1      -- rows\nGROUP BY city\nHAVING COUNT(*) > 10; -- groups",
          related: ["HAVING", "WHERE"]
        },
        {
          difficulty: "hard",
          question: "In what ORDER does the database process these clauses?",
          options: {
            A: "FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY, LIMIT",
            B: "SELECT, FROM, WHERE, GROUP BY",
            C: "GROUP BY, WHERE, SELECT",
            D: "The order they are written"
          },
          answer: "A",
          explanation: "This single fact explains most GROUP BY rules: WHERE cannot see aggregates (they do not exist yet), and SELECT aliases are unavailable to WHERE, GROUP BY and HAVING - but ARE available to ORDER BY.",
          related: ["Execution order"]
        },
        {
          difficulty: "medium",
          question: "Which is more efficient for filtering rows that will never be needed?",
          options: {
            A: "WHERE - it removes rows BEFORE the expensive grouping",
            B: "HAVING - it filters at the end",
            C: "They are identical",
            D: "Neither"
          },
          answer: "A",
          explanation: "Filter as early as possible. Reserve HAVING for conditions that genuinely depend on aggregated values.",
          related: ["Performance", "WHERE"]
        },
        {
          difficulty: "medium",
          question: "Can you GROUP BY several columns?",
          options: {
            A: "Yes - it groups by each unique COMBINATION of those columns",
            B: "No, only one column",
            C: "Only with a JOIN",
            D: "Only two columns maximum"
          },
          answer: "A",
          explanation: "GROUP BY country, city produces one row per country+city pair - the standard way to build multi-level summaries.",
          related: ["GROUP BY", "Multiple columns"]
        },
        {
          difficulty: "medium",
          question: "What does this produce?\nSELECT dept, COUNT(*) FROM employees GROUP BY dept ORDER BY COUNT(*) DESC;",
          options: {
            A: "Departments listed from largest to smallest headcount",
            B: "Departments in alphabetical order",
            C: "An error - you cannot ORDER BY an aggregate",
            D: "One row"
          },
          answer: "A",
          explanation: "ORDER BY runs after aggregation, so it can sort by aggregate values (or by their alias). This is the classic 'top categories' report.",
          related: ["ORDER BY", "Aggregates"]
        },
        {
          difficulty: "hard",
          question: "How does GROUP BY treat NULL values?",
          options: {
            A: "All NULLs form ONE group together",
            B: "Each NULL becomes its own group",
            C: "NULL rows are excluded",
            D: "It errors"
          },
          answer: "A",
          explanation: "Even though NULL = NULL is not TRUE in comparisons, grouping and DISTINCT treat NULLs as the same value. Your report will show a single NULL row.",
          related: ["NULL", "GROUP BY"]
        },
        {
          difficulty: "medium",
          question: "Can HAVING be used without GROUP BY?",
          options: {
            A: "Yes - the whole result is treated as one group",
            B: "No, GROUP BY is mandatory",
            C: "Only with COUNT",
            D: "It is always an error"
          },
          answer: "A",
          explanation: "SELECT COUNT(*) FROM t HAVING COUNT(*) > 100 returns the count only if it exceeds 100. Rare, but valid.",
          related: ["HAVING"]
        },
        {
          difficulty: "hard",
          question: "Which query finds duplicate emails?",
          options: {
            A: "SELECT email, COUNT(*) FROM users GROUP BY email HAVING COUNT(*) > 1;",
            B: "SELECT DISTINCT email FROM users;",
            C: "SELECT email FROM users WHERE COUNT(*) > 1;",
            D: "SELECT COUNT(email) FROM users;"
          },
          answer: "A",
          explanation: "Group by the column and keep groups appearing more than once - the canonical duplicate-finding query, and a common interview question.",
          related: ["Duplicates", "HAVING"]
        },
        {
          difficulty: "medium",
          question: "What does this answer?\nSELECT customer_id, SUM(total) FROM orders GROUP BY customer_id HAVING SUM(total) > 10000;",
          options: {
            A: "Which customers have spent more than 10,000 in total",
            B: "Which single orders exceed 10,000",
            C: "All customers",
            D: "An error"
          },
          answer: "A",
          explanation: "The condition applies to the SUM per customer, not to individual orders. Using WHERE total > 10000 would ask a different question entirely.",
          related: ["HAVING", "Business queries"]
        },
        {
          difficulty: "hard",
          question: "Can you use a column ALIAS in GROUP BY?",
          options: {
            A: "It depends - MySQL and PostgreSQL allow it, but the standard (and SQL Server) require the full expression",
            B: "Always yes",
            C: "Never",
            D: "Only for numbers"
          },
          answer: "A",
          explanation: "For portable code, repeat the expression in GROUP BY or wrap the query in a subquery. Aliases are always safe in ORDER BY.",
          related: ["Aliases", "Dialects"]
        },
        {
          difficulty: "medium",
          question: "How would you count orders per month?",
          options: {
            A: "GROUP BY a date expression such as DATE_TRUNC('month', order_date) or EXTRACT(MONTH FROM order_date)",
            B: "GROUP BY order_date",
            C: "GROUP BY month",
            D: "It is impossible"
          },
          answer: "A",
          explanation: "Grouping by the raw timestamp would create a group per second. Truncating to the month collapses them correctly. Include the year, or January 2025 and January 2026 merge.",
          code: "SELECT DATE_TRUNC('month', order_date) AS month, COUNT(*)\nFROM orders GROUP BY 1 ORDER BY 1;",
          related: ["Dates", "DATE_TRUNC"]
        },
        {
          difficulty: "hard",
          question: "What does GROUP BY 1 mean?",
          options: {
            A: "Group by the FIRST column in the SELECT list (positional reference)",
            B: "Group into one group",
            C: "Group by the number 1",
            D: "A syntax error"
          },
          answer: "A",
          explanation: "Convenient shorthand for long expressions, common in analytics. The risk is that reordering SELECT silently changes the grouping.",
          related: ["Positional grouping"]
        },
        {
          difficulty: "medium",
          question: "How many rows does GROUP BY return?",
          options: {
            A: "One row per unique group",
            B: "The same as the original table",
            C: "Always one",
            D: "Twice the groups"
          },
          answer: "A",
          explanation: "Ten cities produce ten rows. This 'collapse' is why non-grouped, non-aggregated columns are not allowed.",
          related: ["GROUP BY"]
        },
        {
          difficulty: "hard",
          question: "What is the difference between these two?\nA) WHERE status='paid' GROUP BY city\nB) GROUP BY city HAVING MIN(status)='paid'",
          options: {
            A: "A counts only paid rows per city; B keeps cities where a condition holds across the whole group",
            B: "They are identical",
            C: "B is invalid",
            D: "A is invalid"
          },
          answer: "A",
          explanation: "WHERE changes which rows enter each group; HAVING decides which finished groups survive. Mixing them up changes the meaning of a report entirely.",
          related: ["WHERE vs HAVING"]
        },
        {
          difficulty: "hard",
          question: "What does GROUP BY ROLLUP(country, city) add?",
          options: {
            A: "Subtotal rows per country plus a grand total, alongside the detail rows",
            B: "Sorting by country",
            C: "Nothing extra",
            D: "It removes duplicates"
          },
          answer: "A",
          explanation: "ROLLUP generates hierarchical subtotals - very useful for financial reports. The subtotal rows show NULL in the columns they aggregate over.",
          code: "SELECT country, city, SUM(sales)\nFROM t GROUP BY ROLLUP(country, city);",
          related: ["ROLLUP", "CUBE", "Reporting"]
        },
        {
          difficulty: "medium",
          question: "Which query finds departments with an average salary above 50000?",
          options: {
            A: "SELECT dept, AVG(salary) FROM emp GROUP BY dept HAVING AVG(salary) > 50000;",
            B: "SELECT dept FROM emp WHERE AVG(salary) > 50000;",
            C: "SELECT dept, AVG(salary) FROM emp WHERE salary > 50000;",
            D: "SELECT AVG(dept) FROM emp;"
          },
          answer: "A",
          explanation: "Option B is invalid (aggregate in WHERE). Option C is a different question - it averages only the high salaries, ignoring low earners.",
          related: ["HAVING", "AVG"]
        },
        {
          difficulty: "hard",
          question: "Can HAVING reference a column NOT in GROUP BY or an aggregate?",
          options: {
            A: "No - HAVING can only use grouped columns and aggregates",
            B: "Yes, any column",
            C: "Only text columns",
            D: "Only with a subquery"
          },
          answer: "A",
          explanation: "After grouping, individual row values no longer exist. Conditions on raw values belong in WHERE.",
          related: ["HAVING", "Rules"]
        },
        {
          difficulty: "medium",
          question: "What does this find?\nSELECT product_id FROM order_items GROUP BY product_id HAVING COUNT(DISTINCT order_id) >= 3;",
          options: {
            A: "Products appearing in at least 3 different orders",
            B: "Products ordered 3 times total",
            C: "The three most popular products",
            D: "An error"
          },
          answer: "A",
          explanation: "COUNT(DISTINCT order_id) counts distinct orders, not line items - so a product bought 3 times in ONE order would not qualify. Precision matters in metrics.",
          related: ["COUNT DISTINCT", "HAVING"]
        },
        {
          difficulty: "hard",
          question: "Why might GROUP BY be slow, and what helps?",
          options: {
            A: "It must sort or hash all rows - an index on the grouped column, and filtering first with WHERE, both help",
            B: "It is never slow",
            C: "Only more RAM helps",
            D: "Removing SELECT helps"
          },
          answer: "A",
          explanation: "Grouping a million rows requires organising them all. Reducing the input with WHERE and supporting the grouping with an index are the main levers.",
          related: ["Performance", "Indexes"]
        },
        {
          difficulty: "medium",
          question: "How do you show groups WITHOUT the aggregate column?",
          options: {
            A: "Just omit it from SELECT - GROUP BY still works: SELECT city FROM t GROUP BY city;",
            B: "It is required in SELECT",
            C: "Use DISTINCT instead only",
            D: "Not possible"
          },
          answer: "A",
          explanation: "That query is effectively SELECT DISTINCT city. GROUP BY without aggregates is legal, though DISTINCT states the intent more clearly.",
          related: ["DISTINCT", "GROUP BY"]
        },
        {
          difficulty: "hard",
          question: "What does FILTER (WHERE ...) do on an aggregate?",
          options: {
            A: "Applies a condition to that ONE aggregate only - a cleaner alternative to CASE inside aggregates",
            B: "Filters the whole query",
            C: "Sorts the aggregate",
            D: "Is invalid SQL"
          },
          answer: "A",
          explanation: "Standard SQL, supported by PostgreSQL and SQLite. Elsewhere use SUM(CASE WHEN ... THEN 1 ELSE 0 END).",
          code: "SELECT\n  COUNT(*) AS total,\n  COUNT(*) FILTER (WHERE status='paid') AS paid\nFROM orders;",
          related: ["FILTER", "Conditional aggregation"]
        },
        {
          difficulty: "medium",
          question: "Which finds cities with exactly one customer?",
          options: {
            A: "GROUP BY city HAVING COUNT(*) = 1",
            B: "WHERE COUNT(*) = 1",
            C: "GROUP BY city LIMIT 1",
            D: "SELECT DISTINCT city"
          },
          answer: "A",
          explanation: "HAVING can test for any count - equal to, greater than, or a range. Useful for finding one-off or anomalous values.",
          related: ["HAVING"]
        },
        {
          difficulty: "hard",
          question: "What is the risk of GROUP BY after a one-to-many JOIN?",
          options: {
            A: "Parent values are duplicated by the join, so SUM/COUNT on them is inflated",
            B: "GROUP BY cannot follow a join",
            C: "It removes NULLs",
            D: "There is no risk"
          },
          answer: "A",
          explanation: "Joining customers to orders repeats each customer per order. COUNT(*) then counts orders, not customers - use COUNT(DISTINCT customer_id) or aggregate before joining.",
          related: ["Joins", "Fan-out"]
        },
        {
          difficulty: "medium",
          question: "How do you get the top 3 categories by revenue?",
          options: {
            A: "GROUP BY category, ORDER BY SUM(revenue) DESC, LIMIT 3",
            B: "HAVING TOP 3",
            C: "GROUP BY category LIMIT 3",
            D: "MAX(revenue, 3)"
          },
          answer: "A",
          explanation: "Aggregate, sort by the aggregate, then limit. Option C would return three arbitrary categories because LIMIT applies before any sorting is specified.",
          related: ["Top N", "ORDER BY"]
        },
        {
          difficulty: "hard",
          question: "What does GROUP BY GROUPING SETS give you?",
          options: {
            A: "Several different groupings computed in ONE query - e.g. by country, by city, and overall",
            B: "Only one grouping",
            C: "A sorted output",
            D: "A join"
          },
          answer: "A",
          explanation: "It avoids running three separate queries and UNIONing them. ROLLUP and CUBE are convenient shorthands for common grouping sets.",
          related: ["GROUPING SETS", "ROLLUP", "CUBE"]
        },
        {
          difficulty: "medium",
          question: "Which clause would you add to only show groups with no NULL values in a column?",
          options: {
            A: "HAVING COUNT(col) = COUNT(*)",
            B: "WHERE col IS NOT NULL only",
            C: "HAVING col IS NOT NULL",
            D: "It is impossible"
          },
          answer: "A",
          explanation: "COUNT(col) skips NULLs, so equality with COUNT(*) means the group is complete. A neat data-quality check - option B would instead remove the NULL rows before grouping.",
          related: ["COUNT", "Data quality"]
        },
        {
          difficulty: "medium",
          question: "Can you combine WHERE, GROUP BY, HAVING and ORDER BY in one query?",
          options: {
            A: "Yes - in that exact order: WHERE (rows), GROUP BY (group), HAVING (groups), ORDER BY (sort)",
            B: "No, only one filter is allowed",
            C: "HAVING must come before GROUP BY",
            D: "ORDER BY must come first"
          },
          answer: "A",
          explanation: "A full aggregate query commonly uses all four. Written order is fixed; the database executes them as WHERE, GROUP BY, HAVING, then ORDER BY - which is why each clause can only reference what already exists at its stage.",
          code: "SELECT city, COUNT(*) AS n\nFROM customers\nWHERE active = 1\nGROUP BY city\nHAVING COUNT(*) > 5\nORDER BY n DESC;",
          related: ["Clause order", "Execution order"]
        }
      ]
    }
  ]
});
