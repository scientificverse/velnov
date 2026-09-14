/* ============================================================
   SQL - TOPIC 11: INNER JOIN (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "SQL",
  icon: "🗄️",
  color: "#0f80cc",
  description: "Databases from basics to window functions - 20 topics.",
  topics: [
    {
      name: "11. INNER JOIN",
      questions: [
        {
          difficulty: "easy",
          question: "What does a JOIN do?",
          options: {
            A: "Combines rows from two or more tables based on a related column",
            B: "Merges two databases",
            C: "Sorts a table",
            D: "Deletes duplicate rows"
          },
          answer: "A",
          explanation: "Joins reunite data that normalisation split across tables - for example matching each order to its customer via customer_id.",
          code: "SELECT o.id, c.name\nFROM orders o\nJOIN customers c ON o.customer_id = c.id;",
          related: ["JOIN", "Relationships"]
        },
        {
          difficulty: "easy",
          question: "What does INNER JOIN return?",
          options: {
            A: "Only rows that have a MATCH in BOTH tables",
            B: "All rows from both tables",
            C: "All rows from the left table",
            D: "Rows with no match"
          },
          answer: "A",
          explanation: "INNER JOIN keeps only matched pairs. An order with a NULL or non-existent customer_id, or a customer with no orders, is excluded.",
          related: ["INNER JOIN", "Matching"]
        },
        {
          difficulty: "easy",
          question: "Is 'JOIN' the same as 'INNER JOIN'?",
          options: {
            A: "Yes - INNER is the default, so plain JOIN means INNER JOIN",
            B: "No, JOIN means CROSS JOIN",
            C: "No, JOIN means LEFT JOIN",
            D: "They are different in every database"
          },
          answer: "A",
          explanation: "Writing INNER is optional but makes the intent explicit. Many style guides recommend spelling it out for clarity.",
          related: ["INNER JOIN", "Syntax"]
        },
        {
          difficulty: "medium",
          question: "What does the ON clause specify?",
          options: {
            A: "The condition that matches rows between the tables (the join key)",
            B: "Which columns to return",
            C: "How to sort the result",
            D: "The table name"
          },
          answer: "A",
          explanation: "ON defines how rows relate, usually foreign key = primary key. Without a correct ON condition you get wrong or exploded results.",
          code: "... JOIN customers c ON o.customer_id = c.id",
          related: ["ON", "Join condition"]
        },
        {
          difficulty: "medium",
          question: "Why are table aliases (o, c) useful in joins?",
          options: {
            A: "They shorten qualified column names and are required when the same column exists in both tables",
            B: "They speed up the query",
            C: "They sort the tables",
            D: "They are never needed"
          },
          answer: "A",
          explanation: "When both tables have an 'id' column, you must qualify it (o.id vs c.id). Short aliases keep long joins readable.",
          related: ["Aliases", "Qualified names"]
        },
        {
          difficulty: "hard",
          question: "What happens if you JOIN two tables but forget the ON clause?",
          options: {
            A: "You get a CROSS JOIN (Cartesian product) - every row of A paired with every row of B",
            B: "A syntax error always",
            C: "An empty result",
            D: "Only matching rows"
          },
          answer: "A",
          explanation: "1000 rows joined to 1000 rows with no ON gives 1,000,000 rows. Modern databases often require ON for INNER JOIN, but implicit comma-joins without a WHERE cause this explosion.",
          notes: ["A classic accidental-Cartesian-product bug."],
          related: ["CROSS JOIN", "Cartesian product"]
        },
        {
          difficulty: "medium",
          question: "How do you join THREE tables?",
          options: {
            A: "Chain JOINs: FROM a JOIN b ON ... JOIN c ON ...",
            B: "Use three FROM clauses",
            C: "You cannot join more than two",
            D: "Nest three SELECTs"
          },
          answer: "A",
          explanation: "Each additional JOIN adds another table and its ON condition. Order rarely affects results for inner joins, but readability improves when you follow the relationships.",
          code: "SELECT o.id, c.name, p.title\nFROM orders o\nJOIN customers c ON o.customer_id = c.id\nJOIN order_items i ON i.order_id = o.id\nJOIN products p ON p.id = i.product_id;",
          related: ["Multi-table joins"]
        },
        {
          difficulty: "medium",
          question: "Can you join a table to itself?",
          options: {
            A: "Yes - a self join uses two aliases of the same table (e.g. employees to their managers)",
            B: "No, that is forbidden",
            C: "Only with UNION",
            D: "Only for numbers"
          },
          answer: "A",
          explanation: "Self joins model hierarchies and comparisons within one table. Aliases are mandatory to distinguish the two roles. (Covered further in Advanced Joins.)",
          code: "SELECT e.name AS emp, m.name AS manager\nFROM employees e JOIN employees m ON e.manager_id = m.id;",
          related: ["Self join", "Hierarchies"]
        },
        {
          difficulty: "hard",
          question: "Does the ORDER of tables matter in an INNER JOIN result?",
          options: {
            A: "No - INNER JOIN is symmetric; A JOIN B and B JOIN A return the same rows (columns may be ordered differently)",
            B: "Yes, it changes which rows match",
            C: "Yes, it changes the count",
            D: "It causes an error"
          },
          answer: "A",
          explanation: "The result set is identical. (The optimiser may choose a different execution order for performance, but that is invisible in the output.) This symmetry does NOT hold for outer joins.",
          related: ["INNER JOIN", "Commutativity"]
        },
        {
          difficulty: "medium",
          question: "What does USING(customer_id) do?",
          options: {
            A: "A shorthand for ON when both tables share the same column name - it also merges the column in output",
            B: "Selects a column",
            C: "Creates an index",
            D: "Filters rows"
          },
          answer: "A",
          explanation: "JOIN customers USING(customer_id) equals ON a.customer_id = b.customer_id. It works only when the join column has an identical name in both tables.",
          related: ["USING", "Join syntax"]
        },
        {
          difficulty: "hard",
          question: "What is a NATURAL JOIN, and why is it risky?",
          options: {
            A: "It auto-joins on ALL columns with matching names - risky because adding a column later can silently change the join",
            B: "It joins without any condition",
            C: "It is the same as CROSS JOIN",
            D: "It only joins numeric columns"
          },
          answer: "A",
          explanation: "NATURAL JOIN is convenient but fragile: if both tables gain a 'created_at' column, it suddenly becomes part of the join key. Explicit ON is safer.",
          related: ["NATURAL JOIN", "Best practices"]
        },
        {
          difficulty: "medium",
          question: "Can the ON condition use more than one column?",
          options: {
            A: "Yes - combine with AND for composite keys: ON a.x = b.x AND a.y = b.y",
            B: "No, only one column",
            C: "Only with USING",
            D: "Only two tables allow it"
          },
          answer: "A",
          explanation: "Composite-key tables (like a junction table) need multi-column ON conditions to match correctly.",
          related: ["Composite keys", "ON"]
        },
        {
          difficulty: "hard",
          question: "What extra condition can go in ON besides equality?",
          options: {
            A: "Any boolean condition - ranges, inequalities, or extra filters (e.g. ON a.id = b.a_id AND b.active = 1)",
            B: "Only = is allowed",
            C: "Only column names",
            D: "Nothing"
          },
          answer: "A",
          explanation: "ON accepts any condition. For INNER JOIN, putting a filter in ON or WHERE gives the same result - but for OUTER joins the placement matters greatly (covered next topic).",
          related: ["ON", "Join conditions"]
        },
        {
          difficulty: "medium",
          question: "What does this return?\nSELECT c.name, COUNT(o.id) FROM customers c JOIN orders o ON c.id = o.customer_id GROUP BY c.name;",
          options: {
            A: "Each customer WHO HAS orders, with their order count",
            B: "All customers including those with zero orders",
            C: "Only customers with no orders",
            D: "An error"
          },
          answer: "A",
          explanation: "INNER JOIN excludes customers with no matching orders, so they never appear - even with COUNT. To include zero-order customers you need a LEFT JOIN.",
          related: ["INNER JOIN", "GROUP BY"]
        },
        {
          difficulty: "hard",
          question: "Why might an INNER JOIN return MORE rows than the left table has?",
          options: {
            A: "A one-to-many relationship duplicates left rows - one order joined to its many items produces multiple rows",
            B: "Joins never add rows",
            C: "It is always a bug",
            D: "Only with DISTINCT"
          },
          answer: "A",
          explanation: "This 'fan-out' is expected and correct when matching a parent to many children. It becomes a problem only when you then aggregate the parent's columns, inflating the totals.",
          related: ["Fan-out", "One-to-many"]
        },
        {
          difficulty: "medium",
          question: "How do you select all columns from one table but only some from another?",
          options: {
            A: "SELECT o.*, c.name FROM orders o JOIN customers c ON ...",
            B: "SELECT * FROM both",
            C: "SELECT o AND c.name",
            D: "It is not possible"
          },
          answer: "A",
          explanation: "table.* expands to all columns of that table, and you can mix it with individually named columns from others.",
          related: ["SELECT", "Qualified *"]
        },
        {
          difficulty: "hard",
          question: "What is the effect of an index on the join column?",
          options: {
            A: "It lets the database find matching rows quickly instead of scanning the whole table for each row",
            B: "It has no effect on joins",
            C: "It slows joins down",
            D: "It changes the result"
          },
          answer: "A",
          explanation: "Foreign key columns are prime candidates for indexes. Joining on unindexed columns can force slow nested-loop scans or full table sorts.",
          related: ["Indexes", "Performance"]
        },
        {
          difficulty: "medium",
          question: "What does joining on the WRONG columns typically produce?",
          options: {
            A: "Wrong matches or a near-Cartesian explosion of rows",
            B: "A syntax error always",
            C: "An empty result always",
            D: "The correct result anyway"
          },
          answer: "A",
          explanation: "Joining orders.id = customers.id (instead of orders.customer_id = customers.id) matches unrelated rows by coincidence. Always verify the join key represents the real relationship.",
          related: ["Join keys", "Bugs"]
        },
        {
          difficulty: "hard",
          question: "In older syntax, how was an inner join written?",
          options: {
            A: "FROM a, b WHERE a.id = b.a_id - the comma (implicit) join with the condition in WHERE",
            B: "FROM a INNER b",
            C: "MERGE a WITH b",
            D: "It was impossible"
          },
          answer: "A",
          explanation: "The comma form still works but is discouraged: forgetting the WHERE condition silently produces a Cartesian product. Explicit JOIN ... ON keeps the condition attached to the join.",
          related: ["Implicit join", "Legacy syntax"]
        },
        {
          difficulty: "medium",
          question: "What does this find?\nSELECT p.title FROM products p JOIN order_items i ON p.id = i.product_id;",
          options: {
            A: "Titles of products that appear in at least one order (with duplicates per order line)",
            B: "All products",
            C: "Products never ordered",
            D: "One row"
          },
          answer: "A",
          explanation: "INNER JOIN returns only products with matching order items, repeated once per line item. Add DISTINCT for a unique list of sold products.",
          related: ["INNER JOIN", "DISTINCT"]
        },
        {
          difficulty: "hard",
          question: "How do you count how many DISTINCT customers placed orders?",
          options: {
            A: "SELECT COUNT(DISTINCT c.id) FROM customers c JOIN orders o ON c.id = o.customer_id;",
            B: "SELECT COUNT(*) FROM customers JOIN orders;",
            C: "SELECT COUNT(o.id) ...",
            D: "SELECT COUNT(c.id) ..."
          },
          answer: "A",
          explanation: "Because the join fans out one customer to many orders, COUNT(c.id) or COUNT(*) would count orders. DISTINCT collapses each customer to one.",
          related: ["COUNT DISTINCT", "Fan-out"]
        },
        {
          difficulty: "medium",
          question: "Can you filter a joined result with WHERE?",
          options: {
            A: "Yes - WHERE applies to the combined rows after the join",
            B: "No, only ON filters joins",
            C: "Only for the left table",
            D: "Only with HAVING"
          },
          answer: "A",
          explanation: "For INNER JOIN, an equality filter behaves the same in ON or WHERE. Use WHERE for conditions on the final result and ON for the matching logic.",
          code: "... JOIN customers c ON o.customer_id = c.id\nWHERE c.country = 'India';",
          related: ["WHERE", "JOIN"]
        },
        {
          difficulty: "hard",
          question: "What does joining a junction table achieve in a many-to-many design?",
          options: {
            A: "It connects the two main tables - e.g. students to courses via an enrollments table",
            B: "It sorts the tables",
            C: "It removes duplicates",
            D: "Nothing useful"
          },
          answer: "A",
          explanation: "A many-to-many relationship requires two joins through the junction table: students JOIN enrollments JOIN courses. The junction may also carry extra data like enrolment date.",
          code: "SELECT s.name, c.title\nFROM students s\nJOIN enrollments e ON s.id = e.student_id\nJOIN courses c ON c.id = e.course_id;",
          related: ["Many-to-many", "Junction table"]
        },
        {
          difficulty: "medium",
          question: "Which columns should typically be indexed to speed up joins?",
          options: {
            A: "The foreign key columns used in ON conditions",
            B: "Every text column",
            C: "Only the primary key",
            D: "None"
          },
          answer: "A",
          explanation: "Primary keys are indexed automatically, but foreign keys often are not. Indexing them is one of the highest-impact tuning steps for join-heavy queries.",
          related: ["Indexes", "Foreign keys"]
        },
        {
          difficulty: "hard",
          question: "What is the result if a join column contains NULLs in an INNER JOIN?",
          options: {
            A: "Those rows are excluded - NULL never equals anything, so they find no match",
            B: "They match all rows",
            C: "They cause an error",
            D: "They match other NULLs"
          },
          answer: "A",
          explanation: "An order with customer_id = NULL cannot match any customer. If you need such rows, use a LEFT JOIN (which keeps them with NULLs on the right side).",
          related: ["NULL", "INNER JOIN"]
        },
        {
          difficulty: "medium",
          question: "How do you join and show a computed column from both tables?",
          options: {
            A: "SELECT i.quantity * p.price AS line_total FROM order_items i JOIN products p ON i.product_id = p.id;",
            B: "SELECT quantity * price without a join",
            C: "SELECT SUM(both tables)",
            D: "It cannot be done"
          },
          answer: "A",
          explanation: "After joining, columns from both tables are available in the same row, so you can compute expressions like quantity times price.",
          related: ["Expressions", "JOIN"]
        },
        {
          difficulty: "hard",
          question: "Why prefer explicit JOIN syntax over comma-joins?",
          options: {
            A: "It separates the join CONDITION (ON) from row FILTERS (WHERE), preventing accidental Cartesian products and clarifying intent",
            B: "It runs faster",
            C: "Comma joins are invalid",
            D: "There is no reason"
          },
          answer: "A",
          explanation: "With explicit JOIN, forgetting the ON condition is an immediate, obvious error. It also makes outer joins possible, which comma syntax cannot express portably.",
          related: ["Best practices", "Readability"]
        },
        {
          difficulty: "medium",
          question: "What does DISTINCT do in a joined query?",
          options: {
            A: "Removes duplicate rows caused by one-to-many fan-out",
            B: "Speeds up the join",
            C: "Adds a column",
            D: "Sorts the result"
          },
          answer: "A",
          explanation: "When a join repeats parent rows, DISTINCT can collapse them - but it is a blunt tool. Often the better fix is aggregating or selecting only the columns you need.",
          related: ["DISTINCT", "Fan-out"]
        },
        {
          difficulty: "hard",
          question: "How does the query optimiser decide the physical join method?",
          options: {
            A: "Based on table sizes, indexes and statistics it picks nested-loop, hash or merge joins automatically",
            B: "It always uses nested loops",
            C: "The programmer must specify it",
            D: "It joins randomly"
          },
          answer: "A",
          explanation: "You write WHAT to join; the optimiser chooses HOW. EXPLAIN shows the plan. Keeping statistics current and indexes appropriate helps it choose well.",
          related: ["Optimiser", "EXPLAIN"]
        },
        {
          difficulty: "medium",
          question: "What is the everyday purpose of INNER JOIN?",
          options: {
            A: "To reassemble related data that normalisation split into separate tables",
            B: "To back up tables",
            C: "To delete rows",
            D: "To rename columns"
          },
          answer: "A",
          explanation: "Because good design stores customers, orders and products separately, nearly every real report joins them back together to answer business questions.",
          related: ["Normalization", "Reporting"]
        }
      ]
    }
  ]
});
