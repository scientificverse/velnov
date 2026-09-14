/* ============================================================
   SQL - TOPIC 2: SELECT BASICS (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "SQL",
  icon: "🗄️",
  color: "#0f80cc",
  description: "Databases from basics to window functions - 20 topics.",
  topics: [
    {
      name: "2. SELECT Basics",
      questions: [
        {
          difficulty: "easy",
          question: "Which query retrieves ALL columns from the students table?",
          options: {
            A: "SELECT * FROM students;",
            B: "SELECT ALL FROM students;",
            C: "GET * FROM students;",
            D: "SELECT students;"
          },
          answer: "A",
          explanation: "The asterisk is a wildcard meaning 'every column'. Handy for exploring a table, but in real code you should list the columns you actually need.",
          code: "SELECT * FROM students;",
          related: ["SELECT", "Wildcard"]
        },
        {
          difficulty: "medium",
          question: "Why is SELECT * discouraged in production code?",
          options: {
            A: "It fetches unnecessary data, breaks if columns are added or reordered, and hides intent",
            B: "It is a syntax error",
            C: "It only returns one column",
            D: "It is slower to type"
          },
          answer: "A",
          explanation: "Naming columns explicitly keeps queries stable when the schema changes, reduces network transfer, and lets the database use covering indexes.",
          code: "SELECT id, name, email FROM students;   -- explicit and safe",
          related: ["Best practices", "Performance"]
        },
        {
          difficulty: "easy",
          question: "Which query selects only the name and email columns?",
          options: {
            A: "SELECT name, email FROM students;",
            B: "SELECT (name, email) FROM students;",
            C: "SELECT name AND email FROM students;",
            D: "SELECT name email FROM students;"
          },
          answer: "A",
          explanation: "Separate column names with commas. Option D would be interpreted as aliasing name to 'email'.",
          related: ["SELECT", "Columns"]
        },
        {
          difficulty: "easy",
          question: "What does DISTINCT do?",
          options: {
            A: "Removes duplicate rows from the result",
            B: "Sorts the results",
            C: "Counts the rows",
            D: "Deletes duplicates from the table"
          },
          answer: "A",
          explanation: "DISTINCT filters the RESULT SET only - the stored data is untouched. It applies to the whole selected row, not just the first column.",
          code: "SELECT DISTINCT city FROM customers;",
          related: ["DISTINCT", "Duplicates"]
        },
        {
          difficulty: "hard",
          question: "What does SELECT DISTINCT city, country return?",
          options: {
            A: "Unique COMBINATIONS of city and country",
            B: "Unique cities only",
            C: "Unique countries only",
            D: "A syntax error"
          },
          answer: "A",
          explanation: "DISTINCT always applies to the entire row of selected columns. Paris/France and Paris/USA are two distinct rows.",
          related: ["DISTINCT", "Multiple columns"]
        },
        {
          difficulty: "medium",
          question: "What does AS do in: SELECT name AS student_name FROM students;",
          options: {
            A: "Renames the column in the result (an alias) - the table is unchanged",
            B: "Creates a new column in the table",
            C: "Casts the data type",
            D: "Sorts by that column"
          },
          answer: "A",
          explanation: "Aliases make output readable, especially for calculated columns. The keyword AS is optional in most databases but improves clarity.",
          code: "SELECT price * 1.18 AS price_with_tax FROM products;",
          related: ["Aliases", "AS"]
        },
        {
          difficulty: "medium",
          question: "How do you alias a column name that contains a space?",
          options: {
            A: "Wrap it in double quotes \"Student Name\" (or backticks/brackets depending on the database)",
            B: "Use single quotes",
            C: "Spaces are not allowed at all",
            D: "Use a hyphen"
          },
          answer: "A",
          explanation: "Standard SQL uses double quotes for identifiers; MySQL uses backticks and SQL Server uses [square brackets]. Single quotes are for string VALUES, not identifiers.",
          code: "SELECT name AS \"Student Name\" FROM students;",
          related: ["Aliases", "Quoting"]
        },
        {
          difficulty: "medium",
          question: "Can you do arithmetic inside a SELECT?",
          options: {
            A: "Yes - SELECT price * quantity AS total FROM order_items;",
            B: "No, only column names are allowed",
            C: "Only with a special function",
            D: "Only in WHERE"
          },
          answer: "A",
          explanation: "SELECT can contain expressions: arithmetic, function calls, CASE statements and literals. The computed values appear as columns in the result.",
          related: ["Expressions", "Calculations"]
        },
        {
          difficulty: "medium",
          question: "What does this return?\nSELECT 5 + 3 AS result;",
          options: {
            A: "A single row with the value 8 - a query needs no table for constant expressions",
            B: "A syntax error - FROM is required",
            C: "The text '5 + 3'",
            D: "An empty result"
          },
          answer: "A",
          explanation: "Most databases (MySQL, PostgreSQL, SQL Server) allow a FROM-less SELECT for testing expressions. Oracle requires FROM dual.",
          related: ["Expressions", "Testing"]
        },
        {
          difficulty: "medium",
          question: "How do you join two text columns into one?",
          options: {
            A: "CONCAT(first_name, ' ', last_name) - or first_name || ' ' || last_name in standard SQL",
            B: "first_name + last_name always works",
            C: "JOIN(first_name, last_name)",
            D: "You cannot combine text"
          },
          answer: "A",
          explanation: "CONCAT works nearly everywhere. The || operator is standard SQL and works in PostgreSQL/Oracle/SQLite; SQL Server uses + for strings.",
          code: "SELECT CONCAT(first_name, ' ', last_name) AS full_name\nFROM employees;",
          related: ["CONCAT", "String functions"]
        },
        {
          difficulty: "easy",
          question: "Which quotes surround a TEXT VALUE in SQL?",
          options: {
            A: "Single quotes: 'Delhi'",
            B: "Double quotes: \"Delhi\"",
            C: "Backticks: `Delhi`",
            D: "No quotes needed"
          },
          answer: "A",
          explanation: "Single quotes mark string literals. Double quotes and backticks are for identifiers (table/column names) - a very common source of confusing errors.",
          code: "SELECT * FROM customers WHERE city = 'Delhi';",
          related: ["Literals", "Quoting"]
        },
        {
          difficulty: "medium",
          question: "How do you include an apostrophe inside a string?",
          options: {
            A: "Double it: 'O''Brien'",
            B: "Escape it with a backslash always",
            C: "Use double quotes instead",
            D: "Apostrophes are impossible"
          },
          answer: "A",
          explanation: "Doubling the quote is the standard escape. (MySQL also accepts \\'.) In application code, use parameterised queries so the driver handles escaping - and prevents SQL injection.",
          related: ["Escaping", "SQL injection"]
        },
        {
          difficulty: "medium",
          question: "What is the logical order in which a simple query is written?",
          options: {
            A: "SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... ORDER BY ... LIMIT",
            B: "FROM ... SELECT ... WHERE",
            C: "WHERE ... SELECT ... FROM",
            D: "Any order works"
          },
          answer: "A",
          explanation: "That written order is fixed. Interestingly, the database EXECUTES them in a different order (FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY, LIMIT) - which explains several rules you meet later.",
          related: ["Clause order", "Execution order"]
        },
        {
          difficulty: "hard",
          question: "Why can you NOT use a column alias in the WHERE clause?\nSELECT price * 2 AS dbl FROM p WHERE dbl > 10;",
          options: {
            A: "WHERE is evaluated BEFORE SELECT, so the alias does not exist yet",
            B: "Aliases only work with strings",
            C: "It is a typo",
            D: "You can - it always works"
          },
          answer: "A",
          explanation: "Execution order is FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY. Repeat the expression in WHERE, or wrap the query in a subquery. (ORDER BY runs after SELECT, so aliases DO work there.)",
          code: "SELECT price * 2 AS dbl FROM p WHERE price * 2 > 10;   -- works\nSELECT price * 2 AS dbl FROM p ORDER BY dbl;             -- also works",
          related: ["Execution order", "Aliases"]
        },
        {
          difficulty: "medium",
          question: "What does this query return?\nSELECT name, 'Active' AS status FROM users;",
          options: {
            A: "Each name plus a literal column containing 'Active' for every row",
            B: "Only users whose status is Active",
            C: "An error",
            D: "One row"
          },
          answer: "A",
          explanation: "A literal in SELECT creates a constant column. Useful for tagging rows, especially when combining result sets with UNION.",
          related: ["Literals", "UNION"]
        },
        {
          difficulty: "medium",
          question: "How do you reference a column when two tables have the same column name?",
          options: {
            A: "Qualify it: customers.id or an alias like c.id",
            B: "Rename the table",
            C: "It is impossible",
            D: "Use quotes"
          },
          answer: "A",
          explanation: "Prefixing removes ambiguity. Table aliases keep multi-table queries readable: FROM customers c JOIN orders o ON c.id = o.customer_id.",
          related: ["Qualified names", "Table aliases"]
        },
        {
          difficulty: "medium",
          question: "How do you give a TABLE an alias?",
          options: {
            A: "FROM customers AS c  (the AS is optional: FROM customers c)",
            B: "FROM customers = c",
            C: "ALIAS customers c",
            D: "Tables cannot be aliased"
          },
          answer: "A",
          explanation: "Short aliases shorten joins and are required for self-joins, where the same table appears twice.",
          code: "SELECT c.name, o.total\nFROM customers c\nJOIN orders o ON c.id = o.customer_id;",
          related: ["Table aliases", "Joins"]
        },
        {
          difficulty: "hard",
          question: "What does a CASE expression do in SELECT?",
          options: {
            A: "Returns different values per row based on conditions - SQL's if/else",
            B: "Changes text case",
            C: "Creates a new table",
            D: "Sorts the rows"
          },
          answer: "A",
          explanation: "CASE WHEN ... THEN ... ELSE ... END produces a computed column. It is one of the most useful tools for reporting and bucketing values.",
          code: "SELECT name,\n  CASE\n    WHEN marks >= 90 THEN 'A'\n    WHEN marks >= 75 THEN 'B'\n    ELSE 'C'\n  END AS grade\nFROM students;",
          related: ["CASE", "Conditional logic"]
        },
        {
          difficulty: "medium",
          question: "What happens if a CASE expression has no ELSE and nothing matches?",
          options: {
            A: "It returns NULL for that row",
            B: "It throws an error",
            C: "It returns 0",
            D: "It skips the row"
          },
          answer: "A",
          explanation: "ELSE is optional but recommended - an unexpected NULL in a report is usually a bug you would rather catch explicitly.",
          related: ["CASE", "NULL"]
        },
        {
          difficulty: "medium",
          question: "Which query returns every column of orders plus a computed column?",
          options: {
            A: "SELECT *, price * qty AS total FROM orders;",
            B: "SELECT * AND total FROM orders;",
            C: "SELECT ALL, total FROM orders;",
            D: "You cannot mix * with expressions"
          },
          answer: "A",
          explanation: "You may combine * with additional expressions. With multiple tables, qualify it: SELECT o.*, c.name FROM orders o JOIN customers c ...",
          related: ["SELECT *", "Expressions"]
        },
        {
          difficulty: "hard",
          question: "What does SELECT COUNT(*) FROM students; return?",
          options: {
            A: "A single row with the total number of rows in the table",
            B: "One row per student",
            C: "The number of columns",
            D: "An error without GROUP BY"
          },
          answer: "A",
          explanation: "Aggregate functions with no GROUP BY collapse the whole table into one summary row. COUNT(*) counts rows including those with NULLs.",
          related: ["COUNT", "Aggregates"]
        },
        {
          difficulty: "medium",
          question: "How do you select rows from a table in another schema?",
          options: {
            A: "Qualify the name: SELECT * FROM sales.orders;",
            B: "SELECT * FROM orders IN sales;",
            C: "USE sales SELECT * FROM orders;",
            D: "It is not possible"
          },
          answer: "A",
          explanation: "The full form is database.schema.table. You only need the parts that are not already the current default.",
          related: ["Schemas", "Qualified names"]
        },
        {
          difficulty: "medium",
          question: "What does this return if the table is empty?\nSELECT name FROM students;",
          options: {
            A: "Zero rows - an empty result set, not an error",
            B: "NULL",
            C: "An error",
            D: "One blank row"
          },
          answer: "A",
          explanation: "An empty result is a normal outcome. Applications should handle 'no rows' as a valid case rather than an error.",
          related: ["Empty results"]
        },
        {
          difficulty: "hard",
          question: "What is the difference between COUNT(*) and COUNT(column)?",
          options: {
            A: "COUNT(*) counts all rows; COUNT(column) counts only rows where that column is NOT NULL",
            B: "They are identical",
            C: "COUNT(column) is faster always",
            D: "COUNT(*) ignores NULLs"
          },
          answer: "A",
          explanation: "This difference matters constantly: COUNT(email) tells you how many customers actually provided an email, while COUNT(*) counts everyone.",
          code: "SELECT COUNT(*) AS total, COUNT(email) AS with_email\nFROM customers;",
          related: ["COUNT", "NULL"]
        },
        {
          difficulty: "medium",
          question: "Which is valid for selecting a computed percentage?",
          options: {
            A: "SELECT (passed * 100.0 / total) AS pct FROM stats;",
            B: "SELECT passed % total AS pct FROM stats;",
            C: "SELECT percent(passed, total) FROM stats;",
            D: "SELECT passed / total * 100 - always exact"
          },
          answer: "A",
          explanation: "Multiplying by 100.0 (a decimal) forces floating-point division. With two integers, many databases perform INTEGER division, so 3/4 becomes 0 - a classic reporting bug.",
          related: ["Integer division", "Casting"]
        },
        {
          difficulty: "hard",
          question: "What does SELECT DISTINCT * FROM t; do?",
          options: {
            A: "Returns rows that are unique across ALL columns - removing exact duplicate rows",
            B: "Removes duplicate values per column independently",
            C: "Is invalid syntax",
            D: "Returns one row"
          },
          answer: "A",
          explanation: "Only fully identical rows are collapsed. If a table has a primary key, every row is already unique and DISTINCT changes nothing.",
          related: ["DISTINCT", "Duplicates"]
        },
        {
          difficulty: "medium",
          question: "Does SELECT change the data in the table?",
          options: {
            A: "No - SELECT is read-only and always safe to run",
            B: "Yes, it locks rows permanently",
            C: "Yes, it can delete rows",
            D: "Only with *"
          },
          answer: "A",
          explanation: "This is why you should always preview an UPDATE or DELETE by running the same WHERE clause in a SELECT first.",
          related: ["Safety", "Best practices"]
        },
        {
          difficulty: "hard",
          question: "What does this return?\nSELECT name FROM students WHERE 1 = 0;",
          options: {
            A: "Zero rows - the condition is never true",
            B: "All rows",
            C: "An error",
            D: "One row"
          },
          answer: "A",
          explanation: "WHERE 1=0 is a handy trick to fetch a result's STRUCTURE with no data, e.g. to create an empty copy of a table. Conversely, WHERE 1=1 matches everything and is used when building dynamic queries.",
          related: ["Tricks", "Dynamic SQL"]
        },
        {
          difficulty: "medium",
          question: "Which is the more readable way to write a long query?",
          options: {
            A: "Put each clause on its own line, with keywords in caps and consistent indentation",
            B: "Everything on one line",
            C: "All lowercase, no line breaks",
            D: "Random formatting"
          },
          answer: "A",
          explanation: "SQL ignores whitespace, so formatting is purely for humans - and long joins become far easier to review when each clause starts a new line.",
          related: ["Style", "Readability"]
        },
        {
          difficulty: "hard",
          question: "Why does SELECT return columns in the order you list them?",
          options: {
            A: "Because the SELECT list defines the projection - the shape of the output",
            B: "It always uses the table's column order",
            C: "It sorts them alphabetically",
            D: "The order is random"
          },
          answer: "A",
          explanation: "You control the output shape: reorder, rename and compute columns freely. Only SELECT * inherits the table's physical order - another reason to avoid it in code that depends on position.",
          related: ["Projection", "SELECT *"]
        }
      ]
    }
  ]
});
