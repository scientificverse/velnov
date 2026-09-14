/* ============================================================
   SQL - TOPIC 8: DATA TYPES (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "SQL",
  icon: "🗄️",
  color: "#0f80cc",
  description: "Databases from basics to window functions - 20 topics.",
  topics: [
    {
      name: "8. Data Types",
      questions: [
        {
          difficulty: "easy",
          question: "Why does every column need a data type?",
          options: {
            A: "It enforces valid values, determines storage size, and defines how comparisons and sorting behave",
            B: "It is only documentation",
            C: "To make queries shorter",
            D: "It is optional"
          },
          answer: "A",
          explanation: "A DATE column rejects 'hello' and sorts chronologically; a VARCHAR column would accept anything and sort alphabetically. Types are your first line of data quality.",
          related: ["Data types", "Integrity"]
        },
        {
          difficulty: "easy",
          question: "Which type stores whole numbers?",
          options: { A: "INTEGER (INT)", B: "VARCHAR", C: "DECIMAL only", D: "TEXT" },
          answer: "A",
          explanation: "INT typically holds about +/- 2.1 billion. Use BIGINT for larger values and SMALLINT/TINYINT where space matters.",
          related: ["INT", "Numeric types"]
        },
        {
          difficulty: "medium",
          question: "What is the difference between CHAR(10) and VARCHAR(10)?",
          options: {
            A: "CHAR always uses 10 characters (padding with spaces); VARCHAR stores only what you put in",
            B: "They are identical",
            C: "VARCHAR is always faster",
            D: "CHAR holds more"
          },
          answer: "A",
          explanation: "CHAR suits fixed-length codes like country codes; VARCHAR suits names and emails. CHAR padding can cause surprising trailing spaces in comparisons.",
          related: ["CHAR", "VARCHAR"]
        },
        {
          difficulty: "medium",
          question: "What does VARCHAR(50) mean?",
          options: {
            A: "Variable-length text with a MAXIMUM of 50 characters",
            B: "Exactly 50 characters",
            C: "50 rows",
            D: "50 bytes only"
          },
          answer: "A",
          explanation: "Inserting a longer string either errors or truncates depending on settings. Choose limits that reflect real data - overly tight limits cause production failures.",
          related: ["VARCHAR", "Length"]
        },
        {
          difficulty: "hard",
          question: "Why should you use DECIMAL/NUMERIC for money instead of FLOAT?",
          options: {
            A: "FLOAT is binary and cannot represent 0.1 exactly, causing rounding errors in totals",
            B: "DECIMAL is faster",
            C: "FLOAT cannot store decimals",
            D: "There is no difference"
          },
          answer: "A",
          explanation: "DECIMAL(10,2) stores exact values. With FLOAT, summing thousands of prices drifts by fractions of a cent - unacceptable for financial data.",
          code: "price DECIMAL(10, 2)   -- 8 digits before the point, 2 after",
          notes: ["A standard interview question about numeric precision."],
          related: ["DECIMAL", "FLOAT", "Precision"]
        },
        {
          difficulty: "medium",
          question: "What does DECIMAL(10, 2) specify?",
          options: {
            A: "Precision 10 (total digits) and scale 2 (digits after the decimal point)",
            B: "10 rows, 2 columns",
            C: "A range of 10 to 2",
            D: "10 bytes with 2 decimals"
          },
          answer: "A",
          explanation: "So the largest value is 99999999.99. Exceeding the scale rounds; exceeding the precision raises an error.",
          related: ["DECIMAL", "Precision and scale"]
        },
        {
          difficulty: "medium",
          question: "Which type stores a date WITHOUT a time?",
          options: { A: "DATE", B: "DATETIME", C: "TIMESTAMP", D: "TIME" },
          answer: "A",
          explanation: "DATE holds year-month-day. DATETIME/TIMESTAMP add the time of day, and TIME stores only the clock portion.",
          related: ["DATE", "Temporal types"]
        },
        {
          difficulty: "hard",
          question: "What is the key difference between TIMESTAMP and DATETIME (MySQL)?",
          options: {
            A: "TIMESTAMP is timezone-aware and converts to UTC; DATETIME stores the literal value unchanged",
            B: "They are identical",
            C: "DATETIME is smaller",
            D: "TIMESTAMP cannot store dates"
          },
          answer: "A",
          explanation: "TIMESTAMP also has a narrower range (roughly 1970-2038). For global applications, storing UTC timestamps and converting for display is the usual approach.",
          related: ["TIMESTAMP", "Timezones"]
        },
        {
          difficulty: "medium",
          question: "How do booleans work across databases?",
          options: {
            A: "PostgreSQL has a real BOOLEAN; MySQL stores it as TINYINT(1) where 1 is true and 0 is false",
            B: "All databases have BOOLEAN",
            C: "Booleans are impossible in SQL",
            D: "Only strings can hold true/false"
          },
          answer: "A",
          explanation: "SQL Server uses BIT. This is why some codebases compare with = 1 and others with = TRUE - both are correct for their platform.",
          related: ["BOOLEAN", "Dialects"]
        },
        {
          difficulty: "medium",
          question: "What is TEXT used for?",
          options: {
            A: "Long or unbounded strings - articles, descriptions, comments",
            B: "Numbers stored as text",
            C: "Exactly 255 characters",
            D: "Binary files"
          },
          answer: "A",
          explanation: "TEXT has no practical length limit but often cannot be fully indexed and may be stored separately. Use VARCHAR when you have a sensible maximum.",
          related: ["TEXT", "VARCHAR"]
        },
        {
          difficulty: "hard",
          question: "Why store numbers in numeric columns rather than VARCHAR?",
          options: {
            A: "Text sorts alphabetically ('10' before '9'), blocks arithmetic, and wastes space",
            B: "There is no difference",
            C: "VARCHAR is faster for numbers",
            D: "Numeric types cannot be indexed"
          },
          answer: "A",
          explanation: "The classic symptom is a report where 100 appears before 20. Note that identifiers like phone numbers and postcodes ARE text - leading zeros matter and you never do arithmetic on them.",
          related: ["Data modelling", "Sorting"]
        },
        {
          difficulty: "medium",
          question: "What does AUTO_INCREMENT / SERIAL / IDENTITY do?",
          options: {
            A: "Automatically assigns the next unique number to a new row - typically for primary keys",
            B: "Counts rows",
            C: "Sorts the table",
            D: "Encrypts the id"
          },
          answer: "A",
          explanation: "AUTO_INCREMENT in MySQL, SERIAL/GENERATED AS IDENTITY in PostgreSQL, IDENTITY in SQL Server. Gaps in the sequence are normal after failed inserts - do not treat ids as a count.",
          related: ["Primary keys", "Sequences"]
        },
        {
          difficulty: "hard",
          question: "What is a UUID/GUID key, and when is it preferred?",
          options: {
            A: "A 128-bit globally unique identifier - useful for distributed systems where ids must be generated without a central counter",
            B: "A faster integer",
            C: "An encrypted password",
            D: "A type of index"
          },
          answer: "A",
          explanation: "UUIDs avoid collisions across servers and hide row counts, at the cost of more storage and (for random UUIDs) worse index locality than sequential integers.",
          related: ["UUID", "Distributed systems"]
        },
        {
          difficulty: "medium",
          question: "How do you convert between types?",
          options: {
            A: "CAST(value AS type) - standard SQL",
            B: "CONVERT_TO(value)",
            C: "TYPEOF(value)",
            D: "It happens automatically always"
          },
          answer: "A",
          explanation: "CAST is portable; CONVERT() exists in SQL Server and MySQL with extra formatting options. PostgreSQL also allows the shorthand value::type.",
          code: "SELECT CAST('2026-07-04' AS DATE);",
          related: ["CAST", "Conversion"]
        },
        {
          difficulty: "hard",
          question: "What is implicit type conversion, and why be careful?",
          options: {
            A: "The database silently converts types to compare them - which can produce surprises and block index use",
            B: "It never happens",
            C: "It always errors",
            D: "It is always faster"
          },
          answer: "A",
          explanation: "Comparing a VARCHAR column to a number may force converting EVERY row, ignoring the index. Match types explicitly in your queries and schema.",
          related: ["Implicit conversion", "Performance"]
        },
        {
          difficulty: "medium",
          question: "What does the JSON data type allow?",
          options: {
            A: "Storing structured documents in a column, with functions to query inside them",
            B: "Only plain text",
            C: "Nothing special",
            D: "Binary images"
          },
          answer: "A",
          explanation: "PostgreSQL's JSONB and MySQL's JSON support indexing and path queries - useful for flexible attributes. Overusing it, though, sacrifices the integrity relational design gives you.",
          code: "SELECT data->>'email' FROM users WHERE data->>'plan' = 'pro';",
          related: ["JSON", "Semi-structured data"]
        },
        {
          difficulty: "medium",
          question: "What is the ENUM type?",
          options: {
            A: "A column restricted to a fixed list of allowed string values",
            B: "A numbering system",
            C: "An index type",
            D: "A join type"
          },
          answer: "A",
          explanation: "ENUM('small','medium','large') enforces valid values. Changing the list later requires altering the table, so many teams prefer a lookup table plus a foreign key.",
          related: ["ENUM", "Constraints"]
        },
        {
          difficulty: "hard",
          question: "Why can INT overflow be a real problem?",
          options: {
            A: "An id column can exhaust its maximum (about 2.1 billion for INT), causing insert failures",
            B: "INT never overflows",
            C: "It only wastes space",
            D: "It corrupts other tables"
          },
          answer: "A",
          explanation: "Several large platforms have hit this in production. For high-volume tables (events, logs, messages) choose BIGINT from the start - migrating later is painful.",
          related: ["BIGINT", "Capacity planning"]
        },
        {
          difficulty: "medium",
          question: "What is the difference between NULL and a DEFAULT value?",
          options: {
            A: "DEFAULT supplies a value when none is given at insert; NULL means no value is stored",
            B: "They are the same",
            C: "DEFAULT only works for numbers",
            D: "NULL is a kind of default"
          },
          answer: "A",
          explanation: "Combining NOT NULL with a DEFAULT guarantees a usable value in every row - often better than allowing NULLs you must handle in every query.",
          code: "status VARCHAR(20) NOT NULL DEFAULT 'pending'",
          related: ["DEFAULT", "NOT NULL"]
        },
        {
          difficulty: "medium",
          question: "Which type would you choose for a percentage like 87.5?",
          options: {
            A: "DECIMAL(5,2) - exact and bounded",
            B: "INT",
            C: "VARCHAR",
            D: "BOOLEAN"
          },
          answer: "A",
          explanation: "INT would lose the fraction and text would prevent arithmetic. DECIMAL keeps the value exact and lets you add a CHECK constraint for 0-100.",
          related: ["DECIMAL", "Modelling"]
        },
        {
          difficulty: "hard",
          question: "Why do string comparisons depend on COLLATION?",
          options: {
            A: "Collation defines sort order and case/accent sensitivity for text",
            B: "It only affects storage size",
            C: "It has no effect on comparisons",
            D: "It is a type of index"
          },
          answer: "A",
          explanation: "The same query can return different results on two servers with different collations - a subtle portability issue. It also determines whether 'a' = 'A'.",
          related: ["Collation", "Character sets"]
        },
        {
          difficulty: "medium",
          question: "What is a BLOB used for?",
          options: {
            A: "Binary Large Objects - images, PDFs and other binary data",
            B: "Long text only",
            C: "Boolean lists",
            D: "Backups"
          },
          answer: "A",
          explanation: "Storing files in the database is possible but often discouraged: it bloats backups and slows queries. Storing a file PATH or URL is usually better.",
          related: ["BLOB", "File storage"]
        },
        {
          difficulty: "hard",
          question: "What happens when you INSERT a 60-character string into VARCHAR(50)?",
          options: {
            A: "Standard behaviour is an error; some configurations truncate with a warning instead",
            B: "It always truncates silently",
            C: "The column expands",
            D: "It becomes NULL"
          },
          answer: "A",
          explanation: "MySQL in strict mode errors, but older/lax modes silently truncated - which quietly corrupted data. Validate input length in the application too.",
          related: ["VARCHAR", "Strict mode"]
        },
        {
          difficulty: "medium",
          question: "How should you store a phone number?",
          options: {
            A: "As VARCHAR - to preserve leading zeros, plus signs and formatting",
            B: "As INT",
            C: "As DECIMAL",
            D: "As BOOLEAN"
          },
          answer: "A",
          explanation: "Numeric storage destroys leading zeros and cannot hold '+91' or extensions. The rule of thumb: if you never do arithmetic on it, it is not a number.",
          related: ["Modelling", "VARCHAR"]
        },
        {
          difficulty: "hard",
          question: "What is the advantage of choosing the SMALLEST adequate type?",
          options: {
            A: "Less storage means more rows per page, smaller indexes and faster scans",
            B: "It has no effect",
            C: "It only saves disk",
            D: "It prevents NULLs"
          },
          answer: "A",
          explanation: "On large tables the savings compound: narrower rows mean fewer disk reads and better cache use. Balance this against future growth needs.",
          related: ["Performance", "Storage"]
        },
        {
          difficulty: "medium",
          question: "How do you change a column's type?",
          options: {
            A: "ALTER TABLE t ALTER COLUMN c TYPE new_type  (syntax varies by database)",
            B: "UPDATE TYPE",
            C: "CHANGE COLUMN TYPE",
            D: "Types cannot be changed"
          },
          answer: "A",
          explanation: "MySQL uses MODIFY COLUMN; PostgreSQL uses ALTER COLUMN ... TYPE. On huge tables this can lock and rewrite the table, so plan such migrations carefully.",
          related: ["ALTER TABLE", "Migrations"]
        },
        {
          difficulty: "hard",
          question: "What does the INTERVAL type represent?",
          options: {
            A: "A span of time (e.g. '3 days'), which can be added to or subtracted from dates",
            B: "A range of numbers",
            C: "An index gap",
            D: "A transaction period"
          },
          answer: "A",
          explanation: "PostgreSQL and Oracle support INTERVAL directly; MySQL uses it in expressions like DATE_ADD(d, INTERVAL 3 DAY).",
          code: "SELECT order_date + INTERVAL '7 days' AS due_date FROM orders;",
          related: ["INTERVAL", "Date arithmetic"]
        },
        {
          difficulty: "medium",
          question: "What is an ARRAY column (PostgreSQL)?",
          options: {
            A: "A column holding multiple values of the same type in one field",
            B: "A table with many columns",
            C: "A JSON alias",
            D: "Not supported anywhere"
          },
          answer: "A",
          explanation: "Convenient for simple lists like tags, but it breaks first normal form. A junction table remains the better choice when you need joins, constraints or per-item data.",
          related: ["Arrays", "Normalization"]
        },
        {
          difficulty: "hard",
          question: "Why is choosing types an important DESIGN decision, not a detail?",
          options: {
            A: "Types enforce correctness at the database level and are costly to change once a table holds millions of rows",
            B: "They only matter for documentation",
            C: "Types can be changed instantly at any scale",
            D: "Applications handle all validation anyway"
          },
          answer: "A",
          explanation: "The database is the last line of defence: applications get rewritten, but a well-typed schema keeps rejecting invalid data for years.",
          related: ["Design", "Data integrity"]
        },
        {
          difficulty: "medium",
          question: "Which is the safest way to store money?",
          options: {
            A: "DECIMAL with an explicit scale - or an INTEGER count of the smallest unit (paise/cents)",
            B: "FLOAT",
            C: "DOUBLE",
            D: "VARCHAR"
          },
          answer: "A",
          explanation: "Both approaches avoid binary rounding. Storing integer cents is common in payment systems because every arithmetic operation stays exact.",
          related: ["DECIMAL", "Money"]
        }
      ]
    }
  ]
});
