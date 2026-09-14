/* ============================================================
   SQL - TOPIC 12: OUTER JOINS (LEFT, RIGHT, FULL) (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "SQL",
  icon: "🗄️",
  color: "#0f80cc",
  description: "Databases from basics to window functions - 20 topics.",
  topics: [
    {
      name: "12. OUTER JOINs",
      questions: [
        {
          difficulty: "easy",
          question: "What does a LEFT JOIN return?",
          options: {
            A: "ALL rows from the left table, plus matching right-table columns (NULL where no match)",
            B: "Only matching rows",
            C: "All rows from the right table",
            D: "Rows with no match only"
          },
          answer: "A",
          explanation: "LEFT JOIN preserves every left row. Customers with no orders still appear, with the order columns showing NULL - which INNER JOIN would have dropped.",
          code: "SELECT c.name, o.id\nFROM customers c\nLEFT JOIN orders o ON c.id = o.customer_id;",
          related: ["LEFT JOIN", "Outer joins"]
        },
        {
          difficulty: "medium",
          question: "In 'orders LEFT JOIN customers', which table keeps all its rows?",
          options: {
            A: "orders - the LEFT (first) table",
            B: "customers - the right table",
            C: "Both tables",
            D: "Neither"
          },
          answer: "A",
          explanation: "LEFT JOIN keeps everything from the table on the left of the keyword. Every order appears, even those whose customer_id has no matching customer.",
          related: ["LEFT JOIN", "Direction"]
        },
        {
          difficulty: "medium",
          question: "What does RIGHT JOIN return?",
          options: {
            A: "All rows from the RIGHT table, plus matching left-table columns (NULL where no match)",
            B: "Only matches",
            C: "All left rows",
            D: "Nothing"
          },
          answer: "A",
          explanation: "RIGHT JOIN is the mirror of LEFT JOIN. In practice most people rewrite RIGHT joins as LEFT joins by swapping table order, because left-to-right reads more naturally.",
          related: ["RIGHT JOIN"]
        },
        {
          difficulty: "hard",
          question: "How can any RIGHT JOIN be rewritten?",
          options: {
            A: "As a LEFT JOIN with the two tables swapped",
            B: "As an INNER JOIN",
            C: "As a CROSS JOIN",
            D: "It cannot be rewritten"
          },
          answer: "A",
          explanation: "A RIGHT JOIN B equals B LEFT JOIN A. Because LEFT joins are more intuitive, many teams standardise on them and avoid RIGHT joins entirely.",
          related: ["LEFT JOIN", "RIGHT JOIN"]
        },
        {
          difficulty: "medium",
          question: "What does FULL OUTER JOIN return?",
          options: {
            A: "ALL rows from BOTH tables - matched where possible, NULLs filled in where not",
            B: "Only matching rows",
            C: "Only unmatched rows",
            D: "The left table only"
          },
          answer: "A",
          explanation: "FULL OUTER JOIN is the union of LEFT and RIGHT: every unmatched row from either side is kept. (MySQL lacks it natively; emulate with LEFT JOIN UNION RIGHT JOIN.)",
          related: ["FULL OUTER JOIN"]
        },
        {
          difficulty: "hard",
          question: "How do you find customers who have placed NO orders (an anti-join)?",
          options: {
            A: "LEFT JOIN orders and keep rows WHERE o.id IS NULL",
            B: "INNER JOIN and count zero",
            C: "RIGHT JOIN customers",
            D: "It is impossible"
          },
          answer: "A",
          explanation: "A LEFT JOIN gives NULLs for unmatched right rows; filtering for those NULLs finds the 'orphans'. This is the anti-join pattern - a very common interview question.",
          code: "SELECT c.name\nFROM customers c\nLEFT JOIN orders o ON c.id = o.customer_id\nWHERE o.id IS NULL;",
          notes: ["Filter on the right table's PRIMARY KEY being NULL for reliability."],
          related: ["Anti-join", "LEFT JOIN", "NULL"]
        },
        {
          difficulty: "hard",
          question: "In an anti-join, which column should you test for IS NULL?",
          options: {
            A: "The right table's PRIMARY KEY (or a NOT NULL column) - a nullable column could be NULL even when matched",
            B: "Any column works",
            C: "The left table's key",
            D: "The join column of the left table"
          },
          answer: "A",
          explanation: "If you test a nullable right column, a matched row that happens to store NULL there would be falsely flagged as unmatched. The primary key is never NULL in a real match.",
          related: ["Anti-join", "NULL"]
        },
        {
          difficulty: "hard",
          question: "Why does putting a right-table filter in WHERE 'break' a LEFT JOIN?\nLEFT JOIN orders o ON ... WHERE o.status = 'paid'",
          options: {
            A: "The WHERE removes the NULL rows, silently turning the LEFT JOIN into an INNER JOIN",
            B: "It causes a syntax error",
            C: "It has no effect",
            D: "It duplicates rows"
          },
          answer: "A",
          explanation: "Unmatched left rows have o.status = NULL, and NULL = 'paid' is not TRUE, so WHERE discards them. To keep them, move the condition into the ON clause instead.",
          code: "LEFT JOIN orders o ON c.id = o.customer_id AND o.status = 'paid'",
          notes: ["A subtle, very common bug."],
          related: ["LEFT JOIN", "ON vs WHERE"]
        },
        {
          difficulty: "hard",
          question: "What is the difference between putting a condition in ON vs WHERE for a LEFT JOIN?",
          options: {
            A: "ON filters which rows MATCH (unmatched left rows are still kept); WHERE filters the final result (can drop unmatched rows)",
            B: "No difference",
            C: "ON is only for inner joins",
            D: "WHERE runs first"
          },
          answer: "A",
          explanation: "For INNER JOIN the placement is equivalent, but for OUTER joins it changes the result fundamentally. Conditions on the outer (right) table usually belong in ON.",
          related: ["ON vs WHERE", "Outer joins"]
        },
        {
          difficulty: "medium",
          question: "What does this count?\nSELECT c.name, COUNT(o.id) FROM customers c LEFT JOIN orders o ON c.id = o.customer_id GROUP BY c.name;",
          options: {
            A: "Every customer's order count, showing 0 for customers with no orders",
            B: "Only customers with orders",
            C: "Total orders",
            D: "An error"
          },
          answer: "A",
          explanation: "COUNT(o.id) counts non-NULL order ids, so unmatched customers correctly show 0. Note COUNT(*) would show 1 for them (the single NULL-padded row), which is a subtle trap.",
          related: ["LEFT JOIN", "COUNT"]
        },
        {
          difficulty: "hard",
          question: "Why use COUNT(o.id) instead of COUNT(*) in a LEFT JOIN aggregate?",
          options: {
            A: "COUNT(*) counts the NULL-padded row as 1; COUNT(o.id) counts only real matches, giving 0 for no orders",
            B: "They are identical",
            C: "COUNT(*) is faster and correct",
            D: "COUNT(o.id) is invalid"
          },
          answer: "A",
          explanation: "A customer with no orders still produces one result row (all order columns NULL). COUNT(*) counts that row; COUNT of a specific order column ignores it. Getting this wrong overstates counts by one.",
          related: ["COUNT", "NULL", "Gotchas"]
        },
        {
          difficulty: "medium",
          question: "What does a LEFT JOIN return when the left table is empty?",
          options: {
            A: "Zero rows - there are no left rows to preserve",
            B: "All right rows",
            C: "One NULL row",
            D: "An error"
          },
          answer: "A",
          explanation: "LEFT JOIN preserves LEFT rows; with none, the result is empty regardless of the right table's contents.",
          related: ["LEFT JOIN", "Empty tables"]
        },
        {
          difficulty: "hard",
          question: "How do you find rows that exist in EITHER table but not both (symmetric difference)?",
          options: {
            A: "FULL OUTER JOIN with WHERE a.id IS NULL OR b.id IS NULL",
            B: "INNER JOIN",
            C: "CROSS JOIN",
            D: "LEFT JOIN only"
          },
          answer: "A",
          explanation: "FULL join keeps unmatched rows from both sides; filtering for NULL on either key leaves only the non-overlapping rows. Useful for reconciling two data sources.",
          related: ["FULL OUTER JOIN", "Reconciliation"]
        },
        {
          difficulty: "medium",
          question: "Does the ORDER of tables matter for LEFT JOIN?",
          options: {
            A: "Yes - LEFT JOIN is NOT symmetric; A LEFT JOIN B differs from B LEFT JOIN A",
            B: "No, it is symmetric",
            C: "Only for three tables",
            D: "Only with WHERE"
          },
          answer: "A",
          explanation: "The left table's rows are always preserved, so swapping the tables changes which side keeps its unmatched rows. This is a key difference from INNER JOIN.",
          related: ["LEFT JOIN", "Order"]
        },
        {
          difficulty: "hard",
          question: "In a chain of LEFT JOINs, why can a later INNER JOIN undo earlier ones?",
          options: {
            A: "An INNER JOIN after LEFT JOINs discards rows that had NULLs, effectively filtering out the preserved rows",
            B: "It never happens",
            C: "INNER always comes first",
            D: "Chained joins are invalid"
          },
          answer: "A",
          explanation: "Once you switch to INNER later in the chain, any row lacking a match there is dropped - including the NULL-padded rows the LEFT JOIN kept. Keep the chain LEFT if you must preserve rows throughout.",
          related: ["Join chains", "Outer joins"]
        },
        {
          difficulty: "medium",
          question: "How do you show all products and their total sales, INCLUDING never-sold products?",
          options: {
            A: "LEFT JOIN from products to order_items, then SUM with COALESCE for zero",
            B: "INNER JOIN products to order_items",
            C: "RIGHT JOIN order_items",
            D: "CROSS JOIN"
          },
          answer: "A",
          explanation: "Starting from products and LEFT JOINing sales keeps every product. Wrap the sum: COALESCE(SUM(i.quantity), 0) so unsold products show 0 rather than NULL.",
          code: "SELECT p.title, COALESCE(SUM(i.quantity), 0) AS sold\nFROM products p\nLEFT JOIN order_items i ON p.id = i.product_id\nGROUP BY p.title;",
          related: ["LEFT JOIN", "COALESCE"]
        },
        {
          difficulty: "hard",
          question: "Why might SUM over a LEFT JOIN return NULL for unmatched rows?",
          options: {
            A: "There are no values to sum, and SUM of nothing is NULL - wrap with COALESCE(SUM(x), 0)",
            B: "SUM always errors on joins",
            C: "LEFT JOIN removes the row",
            D: "It returns 0 automatically"
          },
          answer: "A",
          explanation: "The unmatched right columns are all NULL, so SUM has nothing to add and yields NULL. COALESCE converts it to a numeric 0 for clean reports.",
          related: ["SUM", "NULL", "COALESCE"]
        },
        {
          difficulty: "medium",
          question: "What is a common real-world use of LEFT JOIN?",
          options: {
            A: "Listing all items and their optional related data - e.g. all users with their last login (or none)",
            B: "Deleting orphan rows",
            C: "Speeding up queries",
            D: "Sorting tables"
          },
          answer: "A",
          explanation: "Whenever the related data is optional - a profile photo, a last order, a manager - LEFT JOIN ensures the main entity is not dropped just because the optional part is missing.",
          related: ["LEFT JOIN", "Optional data"]
        },
        {
          difficulty: "hard",
          question: "Does MySQL support FULL OUTER JOIN?",
          options: {
            A: "Not directly - you emulate it with LEFT JOIN UNION RIGHT JOIN",
            B: "Yes, fully",
            C: "Only in views",
            D: "Only with indexes"
          },
          answer: "A",
          explanation: "PostgreSQL, SQL Server and Oracle support FULL OUTER JOIN. In MySQL, combine a LEFT JOIN and a RIGHT JOIN with UNION to get the same result.",
          code: "SELECT * FROM a LEFT JOIN b ON a.id=b.a_id\nUNION\nSELECT * FROM a RIGHT JOIN b ON a.id=b.a_id;",
          related: ["FULL OUTER JOIN", "MySQL"]
        },
        {
          difficulty: "medium",
          question: "What does the term 'outer' mean in outer join?",
          options: {
            A: "Rows OUTSIDE the matched set (unmatched rows) are preserved, unlike inner join",
            B: "It joins external databases",
            C: "It refers to the outermost query",
            D: "Nothing specific"
          },
          answer: "A",
          explanation: "INNER keeps only the intersection; OUTER additionally keeps the 'outer' unmatched rows from one side (LEFT/RIGHT) or both (FULL).",
          related: ["Outer joins", "Terminology"]
        },
        {
          difficulty: "hard",
          question: "How would you list departments and their employee count, showing empty departments too?",
          options: {
            A: "SELECT d.name, COUNT(e.id) FROM departments d LEFT JOIN employees e ON d.id = e.dept_id GROUP BY d.name;",
            B: "INNER JOIN departments and employees",
            C: "RIGHT JOIN employees",
            D: "Count employees only"
          },
          answer: "A",
          explanation: "LEFT JOIN from departments preserves every department; COUNT(e.id) yields 0 for empty ones. INNER JOIN would silently hide departments with no staff.",
          related: ["LEFT JOIN", "COUNT"]
        },
        {
          difficulty: "medium",
          question: "What appears in the right-table columns for an unmatched LEFT JOIN row?",
          options: { A: "NULL", B: "0", C: "Empty string", D: "The default value" },
          answer: "A",
          explanation: "Every right column is NULL when there is no match. This is why you test for NULL to find unmatched rows, and use COALESCE to supply display defaults.",
          related: ["NULL", "LEFT JOIN"]
        },
        {
          difficulty: "hard",
          question: "Which join finds products that have NEVER been ordered?",
          options: {
            A: "products LEFT JOIN order_items ... WHERE order_items.id IS NULL",
            B: "products INNER JOIN order_items",
            C: "products RIGHT JOIN order_items",
            D: "products CROSS JOIN order_items"
          },
          answer: "A",
          explanation: "The anti-join again: keep all products, then filter to those with no matching order line. Equivalent to WHERE NOT EXISTS (SELECT 1 FROM order_items ...).",
          related: ["Anti-join", "NOT EXISTS"]
        },
        {
          difficulty: "medium",
          question: "Can you LEFT JOIN more than two tables?",
          options: {
            A: "Yes - chain them, keeping in mind each LEFT preserves rows accumulated so far",
            B: "No, only two",
            C: "Only with FULL join",
            D: "Only in subqueries"
          },
          answer: "A",
          explanation: "Multiple LEFT JOINs are common (a user, their optional profile, their optional settings). Be careful that a later INNER JOIN does not filter out preserved rows.",
          related: ["Join chains", "LEFT JOIN"]
        },
        {
          difficulty: "hard",
          question: "What is the row count of A LEFT JOIN B when every A row matches exactly one B row, plus 5 A rows match none?",
          options: {
            A: "The number of A rows (matched rows once each, plus the 5 unmatched once each)",
            B: "A rows minus 5",
            C: "A times B",
            D: "Only the matched rows"
          },
          answer: "A",
          explanation: "One-to-one matches produce one row each, and unmatched A rows also produce one (NULL-padded) row each - so the total equals the A row count. Fan-out only occurs with one-to-many matches.",
          related: ["LEFT JOIN", "Row counts"]
        },
        {
          difficulty: "medium",
          question: "Which is clearer to read: LEFT JOIN or RIGHT JOIN?",
          options: {
            A: "LEFT JOIN - reading left to right, the 'main' table comes first",
            B: "RIGHT JOIN always",
            C: "They are equally clear",
            D: "FULL JOIN"
          },
          answer: "A",
          explanation: "Convention favours LEFT JOIN so the preserved (main) table leads the FROM clause. Consistent direction makes complex queries easier to follow.",
          related: ["Style", "Readability"]
        },
        {
          difficulty: "hard",
          question: "How does a LEFT JOIN interact with a one-to-many relationship?",
          options: {
            A: "Matched left rows still fan out to multiple rows; unmatched left rows appear once with NULLs",
            B: "It prevents fan-out",
            C: "It always returns one row per left row",
            D: "It errors"
          },
          answer: "A",
          explanation: "LEFT JOIN does not stop duplication - a customer with 3 orders still yields 3 rows. It only guarantees that customers with 0 orders are not lost.",
          related: ["Fan-out", "LEFT JOIN"]
        },
        {
          difficulty: "medium",
          question: "What does COALESCE(o.status, 'no orders') do in a LEFT JOIN?",
          options: {
            A: "Displays 'no orders' for unmatched customers instead of NULL",
            B: "Filters out NULLs",
            C: "Counts orders",
            D: "Sorts the result"
          },
          answer: "A",
          explanation: "COALESCE gives friendly labels to the NULLs that outer joins produce - much nicer in a report than blank cells.",
          related: ["COALESCE", "LEFT JOIN"]
        },
        {
          difficulty: "hard",
          question: "Why can a LEFT JOIN sometimes be SLOWER than an INNER JOIN?",
          options: {
            A: "It must preserve unmatched rows, giving the optimiser fewer ways to prune and reorder",
            B: "It is always slower",
            C: "It scans twice",
            D: "It never differs"
          },
          answer: "A",
          explanation: "INNER joins let the optimiser drop non-matching rows early and choose join order freely. Outer joins constrain this, so use INNER when you genuinely only need matches.",
          related: ["Performance", "Optimiser"]
        },
        {
          difficulty: "medium",
          question: "When should you choose LEFT JOIN over INNER JOIN?",
          options: {
            A: "When you must keep ALL rows of the main table even if the related data is missing",
            B: "Always",
            C: "Never - INNER is always better",
            D: "Only for two tables"
          },
          answer: "A",
          explanation: "If missing related data should hide the main row, use INNER. If the main row must always appear (all customers, all products), use LEFT. Choosing correctly is the heart of join design.",
          related: ["LEFT JOIN", "INNER JOIN", "Design"]
        }
      ]
    }
  ]
});
