/* ============================================================
   SQL - TOPIC 13: ADVANCED JOINS (SELF, CROSS, multi-table) (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "SQL",
  icon: "🗄️",
  color: "#0f80cc",
  description: "Databases from basics to window functions - 20 topics.",
  topics: [
    {
      name: "13. Advanced Joins",
      questions: [
        {
          difficulty: "medium",
          question: "What is a SELF JOIN?",
          options: {
            A: "Joining a table to ITSELF using two aliases",
            B: "A join that repeats automatically",
            C: "A join with no condition",
            D: "A join between two databases"
          },
          answer: "A",
          explanation: "The same table appears twice under different aliases, letting you relate rows within one table - such as employees to their managers.",
          code: "SELECT e.name AS employee, m.name AS manager\nFROM employees e\nJOIN employees m ON e.manager_id = m.id;",
          related: ["Self join", "Hierarchies"]
        },
        {
          difficulty: "medium",
          question: "Why are aliases mandatory in a self join?",
          options: {
            A: "Both sides are the same table, so aliases distinguish the two roles and remove ambiguity",
            B: "For speed",
            C: "To sort the rows",
            D: "They are optional"
          },
          answer: "A",
          explanation: "Without aliases like e and m, the database cannot tell which 'name' or 'id' you mean. Aliases give each copy of the table a distinct identity.",
          related: ["Self join", "Aliases"]
        },
        {
          difficulty: "hard",
          question: "How do you find pairs of employees in the SAME department (without duplicates)?",
          options: {
            A: "Self join ON a.dept = b.dept AND a.id < b.id",
            B: "Self join ON a.dept = b.dept",
            C: "INNER JOIN with GROUP BY",
            D: "CROSS JOIN"
          },
          answer: "A",
          explanation: "The a.id < b.id condition prevents matching a row with itself and avoids listing each pair twice (A-B and B-A). A classic self-join interview question.",
          related: ["Self join", "Pairs"]
        },
        {
          difficulty: "easy",
          question: "What does CROSS JOIN produce?",
          options: {
            A: "The Cartesian product - every row of A combined with every row of B",
            B: "Only matching rows",
            C: "All left rows",
            D: "Nothing"
          },
          answer: "A",
          explanation: "CROSS JOIN has no ON condition. 5 rows crossed with 4 rows gives 20. Useful for generating combinations like every size/colour pairing.",
          code: "SELECT s.size, c.color FROM sizes s CROSS JOIN colors c;",
          related: ["CROSS JOIN", "Cartesian product"]
        },
        {
          difficulty: "medium",
          question: "When is a CROSS JOIN genuinely useful?",
          options: {
            A: "Generating all combinations - e.g. a calendar of every date x every store, or product variants",
            B: "It is never useful",
            C: "For filtering rows",
            D: "For sorting"
          },
          answer: "A",
          explanation: "Deliberate CROSS JOINs build complete grids: all days for all stores to plot sales (filling gaps with zeros), or all size/colour combinations for inventory.",
          related: ["CROSS JOIN", "Combinations"]
        },
        {
          difficulty: "hard",
          question: "What is an accidental Cartesian product, and how does it happen?",
          options: {
            A: "A huge result from a missing or wrong join condition - rows multiply instead of matching",
            B: "A deliberate CROSS JOIN",
            C: "A type of index",
            D: "An empty result"
          },
          answer: "A",
          explanation: "Forgetting ON (or a comma-join without WHERE) pairs every row with every row. Two 10,000-row tables produce 100 million rows - a common cause of runaway queries.",
          related: ["Cartesian product", "Bugs"]
        },
        {
          difficulty: "hard",
          question: "How do you build a hierarchy of unlimited depth (e.g. org chart)?",
          options: {
            A: "A recursive CTE (WITH RECURSIVE) - a self join only reaches a fixed number of levels",
            B: "Nested self joins forever",
            C: "CROSS JOIN",
            D: "It is impossible"
          },
          answer: "A",
          explanation: "Each self join adds exactly one level. For arbitrary depth (manager of manager of ...), a recursive CTE walks the tree. (CTEs are covered in topic 15.)",
          related: ["Recursive CTE", "Hierarchies"]
        },
        {
          difficulty: "medium",
          question: "How do you join four tables in one query?",
          options: {
            A: "Chain the JOINs, each with its own ON condition following the relationships",
            B: "Use four FROM clauses",
            C: "You cannot join four tables",
            D: "Use four subqueries"
          },
          answer: "A",
          explanation: "Multi-table joins are routine in reporting. Follow the foreign keys: orders to customers, orders to items, items to products.",
          code: "FROM orders o\nJOIN customers c ON o.customer_id = c.id\nJOIN order_items i ON i.order_id = o.id\nJOIN products p ON p.id = i.product_id",
          related: ["Multi-table joins"]
        },
        {
          difficulty: "hard",
          question: "In a multi-table join, why can row counts balloon unexpectedly?",
          options: {
            A: "Each one-to-many join multiplies rows - joining orders to items AND to payments can multiply items by payments",
            B: "Joins always reduce rows",
            C: "It is a syntax error",
            D: "Only with CROSS JOIN"
          },
          answer: "A",
          explanation: "If an order has 3 items and 2 payments, joining both to the order yields 3 x 2 = 6 rows. Aggregate each branch separately (in subqueries) before combining to avoid inflated totals.",
          notes: ["A hard-to-spot cause of wrong sums in reports."],
          related: ["Fan-out", "Multi-table joins"]
        },
        {
          difficulty: "medium",
          question: "How do you compare each row to the previous row using a self join?",
          options: {
            A: "Join the table to itself ON b.id = a.id - 1 (or on a matching sequence)",
            B: "It cannot be done",
            C: "Use CROSS JOIN",
            D: "Use GROUP BY"
          },
          answer: "A",
          explanation: "Self joining on adjacent ids compares consecutive rows - though window functions (LAG/LEAD, topic 20) are the modern, more reliable tool for this.",
          related: ["Self join", "LAG", "LEAD"]
        },
        {
          difficulty: "hard",
          question: "What does a self join reveal here?\nSELECT a.name FROM employees a JOIN employees b ON a.salary < b.salary WHERE b.name = 'Ana';",
          options: {
            A: "Employees who earn LESS than Ana",
            B: "Ana's manager",
            C: "Employees earning more than Ana",
            D: "An error"
          },
          answer: "A",
          explanation: "Self joins with inequality conditions compare rows against a reference row - here, everyone paid below Ana. Non-equi joins (using <, >, BETWEEN) are a powerful advanced technique.",
          related: ["Non-equi join", "Self join"]
        },
        {
          difficulty: "hard",
          question: "What is a non-equi join?",
          options: {
            A: "A join whose condition uses something other than equality (<, >, BETWEEN)",
            B: "A join with no condition",
            C: "An invalid join",
            D: "A join on two equal columns"
          },
          answer: "A",
          explanation: "For example joining sales to a tier table ON amount BETWEEN tier.low AND tier.high to assign a discount band. Equality is common but not required.",
          code: "SELECT s.id, t.discount\nFROM sales s JOIN tiers t ON s.amount BETWEEN t.min_amt AND t.max_amt;",
          related: ["Non-equi join", "Range join"]
        },
        {
          difficulty: "medium",
          question: "How do you find duplicate rows using a self join?",
          options: {
            A: "Join ON matching columns AND a.id <> b.id to find rows that share values",
            B: "Use CROSS JOIN",
            C: "Duplicates cannot be found",
            D: "Use DISTINCT only"
          },
          answer: "A",
          explanation: "Rows with equal email but different id are duplicates. GROUP BY ... HAVING COUNT(*) > 1 is usually cleaner, but a self join can also list the offending pairs.",
          related: ["Duplicates", "Self join"]
        },
        {
          difficulty: "hard",
          question: "Why order multi-table joins to filter the largest table early?",
          options: {
            A: "Reducing rows early means later joins process fewer rows - though the optimiser often reorders automatically",
            B: "Order never matters",
            C: "It changes the result",
            D: "To avoid syntax errors"
          },
          answer: "A",
          explanation: "For INNER joins the RESULT is order-independent, but applying selective filters early can help performance. Good indexes and current statistics matter more than manual ordering.",
          related: ["Performance", "Optimiser"]
        },
        {
          difficulty: "medium",
          question: "How does a self join model an org chart at one level?",
          options: {
            A: "Employee row joins to another employee row via manager_id = id",
            B: "It joins two tables",
            C: "It uses CROSS JOIN",
            D: "It cannot"
          },
          answer: "A",
          explanation: "Each employee stores their manager's id, which points back into the same table. One self join gives employee + manager; two levels need two joins or recursion.",
          related: ["Self join", "Org chart"]
        },
        {
          difficulty: "hard",
          question: "What does a LEFT self join achieve for the top of a hierarchy?",
          options: {
            A: "It keeps the CEO (whose manager_id is NULL) in the result with a NULL manager",
            B: "It removes the CEO",
            C: "It duplicates the CEO",
            D: "Nothing"
          },
          answer: "A",
          explanation: "An INNER self join would drop the top person because they have no manager to match. LEFT JOIN preserves them, showing NULL for the manager column.",
          related: ["LEFT JOIN", "Self join"]
        },
        {
          difficulty: "medium",
          question: "Can CROSS JOIN be combined with a WHERE clause?",
          options: {
            A: "Yes - and a CROSS JOIN plus a WHERE equality condition is effectively an INNER JOIN",
            B: "No, CROSS JOIN forbids WHERE",
            C: "Only with ON",
            D: "It errors"
          },
          answer: "A",
          explanation: "FROM a CROSS JOIN b WHERE a.id = b.a_id filters the product down to matches - the old implicit-join style. Explicit INNER JOIN ON expresses the same intent more safely.",
          related: ["CROSS JOIN", "WHERE"]
        },
        {
          difficulty: "hard",
          question: "How do you generate a row for every date in a range (a date spine)?",
          options: {
            A: "CROSS JOIN or a recursive CTE / generate_series to produce all dates, then LEFT JOIN the data",
            B: "Data always has every date",
            C: "GROUP BY date",
            D: "It is impossible"
          },
          answer: "A",
          explanation: "Reports often need zero-filled gaps (days with no sales). Build a complete date spine, then LEFT JOIN the actual data so missing days show 0.",
          code: "-- PostgreSQL\nSELECT d::date, COALESCE(SUM(s.amt),0)\nFROM generate_series('2026-01-01','2026-01-31',INTERVAL '1 day') d\nLEFT JOIN sales s ON s.day = d::date GROUP BY 1;",
          related: ["Date spine", "generate_series"]
        },
        {
          difficulty: "hard",
          question: "What does LATERAL / CROSS APPLY allow?",
          options: {
            A: "A subquery in the FROM clause that references columns from the preceding table - like a per-row lookup",
            B: "Nothing new",
            C: "A faster CROSS JOIN",
            D: "Joining three tables"
          },
          answer: "A",
          explanation: "LATERAL (PostgreSQL) and CROSS APPLY (SQL Server) let a join's right side depend on the left row - perfect for 'top 3 orders per customer'.",
          code: "SELECT c.name, o.total\nFROM customers c\nCROSS JOIN LATERAL (\n  SELECT total FROM orders WHERE customer_id = c.id ORDER BY total DESC LIMIT 3\n) o;",
          related: ["LATERAL", "CROSS APPLY"]
        },
        {
          difficulty: "medium",
          question: "How do you list every combination of two small lists?",
          options: {
            A: "CROSS JOIN the two tables",
            B: "INNER JOIN with no ON",
            C: "UNION them",
            D: "GROUP BY both"
          },
          answer: "A",
          explanation: "CROSS JOIN is the intended tool for building all combinations, such as a menu of every base x every topping.",
          related: ["CROSS JOIN", "Combinations"]
        },
        {
          difficulty: "hard",
          question: "In a query joining orders, items and payments, how do you avoid inflated sums?",
          options: {
            A: "Aggregate items and payments in SEPARATE subqueries first, then join the summaries to orders",
            B: "Use DISTINCT on everything",
            C: "Join all three directly and SUM",
            D: "Use CROSS JOIN"
          },
          answer: "A",
          explanation: "Joining two one-to-many branches multiplies rows. Pre-aggregating each branch to one row per order removes the fan-out before you combine them.",
          related: ["Fan-out", "Subqueries", "Aggregation"]
        },
        {
          difficulty: "medium",
          question: "What does joining a lookup/reference table achieve?",
          options: {
            A: "It replaces stored codes with human-readable labels (e.g. status_id -> status name)",
            B: "It speeds up writes",
            C: "It deletes codes",
            D: "Nothing"
          },
          answer: "A",
          explanation: "Normalised designs store small codes and keep the labels in a lookup table. Joining brings back readable text: JOIN statuses s ON o.status_id = s.id.",
          related: ["Lookup table", "Normalization"]
        },
        {
          difficulty: "hard",
          question: "What is the danger of SELECT * in a multi-table join?",
          options: {
            A: "Duplicate column names, huge unnecessary output, and fragile code if any table changes",
            B: "It is always fine",
            C: "It errors",
            D: "It sorts the result"
          },
          answer: "A",
          explanation: "Several tables may each have an 'id' or 'name'. Selecting only the qualified columns you need avoids ambiguous output and reduces data transfer.",
          related: ["SELECT *", "Best practices"]
        },
        {
          difficulty: "medium",
          question: "How do you find employees who have the same manager as 'Ana'?",
          options: {
            A: "Self join on manager_id, matching Ana's manager to others",
            B: "CROSS JOIN employees",
            C: "GROUP BY manager",
            D: "It cannot be done"
          },
          answer: "A",
          explanation: "Self join a (the person) to b (Ana) on a.manager_id = b.manager_id where b.name = 'Ana'. Peer-finding is a natural self-join task.",
          related: ["Self join", "Peers"]
        },
        {
          difficulty: "hard",
          question: "How does an anti-join differ from a semi-join?",
          options: {
            A: "Semi-join keeps left rows that HAVE a match (EXISTS); anti-join keeps those that have NO match (NOT EXISTS)",
            B: "They are the same",
            C: "Semi-join duplicates rows",
            D: "Anti-join is invalid"
          },
          answer: "A",
          explanation: "EXISTS is a semi-join (existence test, no fan-out). NOT EXISTS or LEFT JOIN ... IS NULL is an anti-join. Both return left columns only, unlike a normal join.",
          related: ["Semi-join", "Anti-join", "EXISTS"]
        },
        {
          difficulty: "medium",
          question: "What is a bridge (junction) table's role in joins?",
          options: {
            A: "It sits between two tables in a many-to-many relationship, joined to each side",
            B: "It stores backups",
            C: "It sorts data",
            D: "It has no role"
          },
          answer: "A",
          explanation: "students <-> enrollments <-> courses: two joins through the bridge connect the many-to-many sides. The bridge often carries relationship data like a grade.",
          related: ["Junction table", "Many-to-many"]
        },
        {
          difficulty: "hard",
          question: "Why can a range self join (t.value BETWEEN a AND b) be slow?",
          options: {
            A: "Range conditions are harder to index than equality, often forcing more comparisons",
            B: "It is always fast",
            C: "Ranges are not allowed in joins",
            D: "It errors"
          },
          answer: "A",
          explanation: "Equality joins can use hash/merge strategies efficiently; range joins often fall back to nested loops. Appropriate indexes and small tier tables keep them manageable.",
          related: ["Non-equi join", "Performance"]
        },
        {
          difficulty: "medium",
          question: "How do you show a manager and ALL their direct reports?",
          options: {
            A: "Self join employees (report) to employees (manager) ON report.manager_id = manager.id",
            B: "CROSS JOIN employees",
            C: "GROUP BY manager only",
            D: "It cannot be done"
          },
          answer: "A",
          explanation: "One self join lists each direct report alongside their manager. Ordering by manager groups each team together.",
          related: ["Self join", "Reporting lines"]
        },
        {
          difficulty: "hard",
          question: "What is the safest way to verify a complex join is correct?",
          options: {
            A: "Check the row count and spot-check sample rows against expected relationships before trusting aggregates",
            B: "Assume it is correct",
            C: "Only run it in production",
            D: "Add more joins"
          },
          answer: "A",
          explanation: "Unexpected row counts reveal fan-out or Cartesian products. Verifying the grain (one row per what?) before aggregating prevents silently wrong reports.",
          related: ["Testing", "Debugging joins"]
        },
        {
          difficulty: "medium",
          question: "Which join type has no ON condition by design?",
          options: {
            A: "CROSS JOIN",
            B: "INNER JOIN",
            C: "LEFT JOIN",
            D: "FULL JOIN"
          },
          answer: "A",
          explanation: "CROSS JOIN deliberately pairs every combination and needs no matching condition. All other join types require an ON (or USING) clause.",
          related: ["CROSS JOIN", "Join types"]
        }
      ]
    }
  ]
});
