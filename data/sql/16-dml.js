/* ============================================================
   SQL - TOPIC 16: INSERT, UPDATE, DELETE (DML) (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "SQL",
  icon: "🗄️",
  color: "#0f80cc",
  description: "Databases from basics to window functions - 20 topics.",
  topics: [
    {
      name: "16. INSERT, UPDATE, DELETE",
      questions: [
        {
          difficulty: "easy",
          question: "Which statement adds a new row to a table?",
          options: {
            A: "INSERT INTO",
            B: "ADD ROW",
            C: "CREATE ROW",
            D: "PUT INTO"
          },
          answer: "A",
          explanation: "INSERT INTO table (columns) VALUES (...) adds rows. Listing the columns explicitly is safest, so the statement keeps working if the table's column order changes.",
          code: "INSERT INTO students (name, marks) VALUES ('Ana', 92);",
          related: ["INSERT", "DML"]
        },
        {
          difficulty: "medium",
          question: "Why list column names in an INSERT?",
          options: {
            A: "It makes the insert robust to column additions/reordering and documents intent",
            B: "It is required syntax",
            C: "It is faster",
            D: "No reason"
          },
          answer: "A",
          explanation: "INSERT INTO t VALUES (...) relies on exact column order and count. Naming columns lets you omit ones with defaults and survives schema changes.",
          related: ["INSERT", "Best practices"]
        },
        {
          difficulty: "medium",
          question: "How do you insert MULTIPLE rows in one statement?",
          options: {
            A: "INSERT INTO t (a, b) VALUES (1, 2), (3, 4), (5, 6);",
            B: "Three separate INSERTs only",
            C: "INSERT MANY",
            D: "It is not possible"
          },
          answer: "A",
          explanation: "A multi-row VALUES list inserts several rows at once - far faster than many single inserts because it is one statement and one round trip.",
          related: ["INSERT", "Bulk insert"]
        },
        {
          difficulty: "hard",
          question: "How do you insert rows from a SELECT (copying data)?",
          options: {
            A: "INSERT INTO archive (id, total) SELECT id, total FROM orders WHERE year < 2020;",
            B: "COPY orders TO archive",
            C: "INSERT SELECT INTO",
            D: "It cannot be done"
          },
          answer: "A",
          explanation: "INSERT ... SELECT populates a table from a query - used for archiving, summarising and ETL. The SELECT's columns must line up with the target columns.",
          related: ["INSERT SELECT", "ETL"]
        },
        {
          difficulty: "easy",
          question: "Which statement modifies existing rows?",
          options: {
            A: "UPDATE",
            B: "MODIFY",
            C: "CHANGE",
            D: "SET ROW"
          },
          answer: "A",
          explanation: "UPDATE t SET col = value WHERE ... changes rows that match the condition. The SET clause lists the columns to change.",
          code: "UPDATE students SET marks = 95 WHERE id = 1;",
          related: ["UPDATE", "DML"]
        },
        {
          difficulty: "hard",
          question: "What is the danger of UPDATE without a WHERE clause?",
          options: {
            A: "It updates EVERY row in the table",
            B: "It errors",
            C: "It updates nothing",
            D: "It updates one row"
          },
          answer: "A",
          explanation: "UPDATE students SET marks = 0 with no WHERE sets every student's marks to 0. Always double-check the WHERE - and wrap risky changes in a transaction you can roll back.",
          notes: ["The classic 'I forgot the WHERE' disaster."],
          related: ["UPDATE", "Safety"]
        },
        {
          difficulty: "medium",
          question: "How do you update multiple columns at once?",
          options: {
            A: "SET col1 = v1, col2 = v2 - comma-separated assignments",
            B: "SET col1 = v1 AND col2 = v2",
            C: "SET (col1, col2)",
            D: "Two UPDATE statements only"
          },
          answer: "A",
          explanation: "One UPDATE can change many columns: SET status = 'shipped', shipped_at = NOW(). Use AND only in the WHERE clause, never in SET.",
          related: ["UPDATE", "SET"]
        },
        {
          difficulty: "hard",
          question: "How do you UPDATE using values from another table?",
          options: {
            A: "UPDATE ... SET col = (SELECT ...) or a JOIN-based update (UPDATE ... FROM in PostgreSQL)",
            B: "You cannot reference other tables",
            C: "Use INSERT",
            D: "Use UNION"
          },
          answer: "A",
          explanation: "A correlated subquery or a JOIN in the UPDATE lets you set values based on related data - for example, updating a cached total from a summary table.",
          code: "UPDATE orders o SET total = s.amt\nFROM summary s WHERE s.order_id = o.id;   -- PostgreSQL",
          related: ["UPDATE", "JOIN"]
        },
        {
          difficulty: "easy",
          question: "Which statement removes rows?",
          options: {
            A: "DELETE FROM",
            B: "REMOVE FROM",
            C: "DROP ROW",
            D: "ERASE"
          },
          answer: "A",
          explanation: "DELETE FROM t WHERE ... removes matching rows. Without WHERE it empties the table (but keeps its structure).",
          code: "DELETE FROM students WHERE id = 5;",
          related: ["DELETE", "DML"]
        },
        {
          difficulty: "hard",
          question: "What is the difference between DELETE and TRUNCATE?",
          options: {
            A: "DELETE removes rows one by one (logged, can have WHERE, fires triggers); TRUNCATE instantly empties the whole table",
            B: "They are identical",
            C: "TRUNCATE can use WHERE",
            D: "DELETE is faster for whole tables"
          },
          answer: "A",
          explanation: "TRUNCATE is much faster for clearing an entire table because it deallocates data pages instead of deleting rows individually, but it cannot filter and usually cannot be rolled back the same way.",
          related: ["DELETE", "TRUNCATE"]
        },
        {
          difficulty: "hard",
          question: "What is the difference between DELETE, TRUNCATE and DROP?",
          options: {
            A: "DELETE removes rows (optionally filtered), TRUNCATE empties the table, DROP removes the table itself",
            B: "They are the same",
            C: "DROP keeps the structure",
            D: "TRUNCATE removes the table"
          },
          answer: "A",
          explanation: "DELETE and TRUNCATE keep the table (its columns and indexes remain); DROP TABLE deletes the entire object. Choose based on whether you need the empty table afterward.",
          related: ["DELETE", "TRUNCATE", "DROP"]
        },
        {
          difficulty: "medium",
          question: "What is the safest habit before running a DELETE or UPDATE?",
          options: {
            A: "Run a SELECT with the SAME WHERE clause first to preview affected rows",
            B: "Run it immediately",
            C: "Disable indexes",
            D: "Delete a backup"
          },
          answer: "A",
          explanation: "Previewing shows exactly which rows will change. Combined with a transaction (BEGIN ... ROLLBACK if wrong), it prevents most accidental data loss.",
          related: ["Safety", "SELECT"]
        },
        {
          difficulty: "hard",
          question: "What is an UPSERT?",
          options: {
            A: "Insert a row, but UPDATE it instead if it already exists (INSERT ... ON CONFLICT / ON DUPLICATE KEY / MERGE)",
            B: "A faster insert",
            C: "Deleting then inserting",
            D: "An error type"
          },
          answer: "A",
          explanation: "UPSERT handles 'insert or update' atomically. PostgreSQL uses INSERT ... ON CONFLICT DO UPDATE; MySQL uses ON DUPLICATE KEY UPDATE; the standard is MERGE.",
          code: "INSERT INTO counters (id, n) VALUES (1, 1)\nON CONFLICT (id) DO UPDATE SET n = counters.n + 1;",
          related: ["UPSERT", "ON CONFLICT"]
        },
        {
          difficulty: "medium",
          question: "How do you increment a column's value?",
          options: {
            A: "UPDATE t SET views = views + 1 WHERE id = 5;",
            B: "UPDATE t SET views++ ",
            C: "INCREMENT views",
            D: "It cannot be done"
          },
          answer: "A",
          explanation: "Reference the column in its own SET expression. The database reads the current value and writes the new one atomically within the statement.",
          related: ["UPDATE", "Expressions"]
        },
        {
          difficulty: "hard",
          question: "What happens to child rows when you DELETE a parent with a foreign key?",
          options: {
            A: "It depends on the FK's ON DELETE rule: RESTRICT blocks it, CASCADE deletes children, SET NULL nulls the reference",
            B: "Children are always deleted",
            C: "Nothing happens",
            D: "It always errors"
          },
          answer: "A",
          explanation: "Referential actions defined on the foreign key control this. RESTRICT/NO ACTION protects data, CASCADE cleans up dependents, SET NULL orphans them safely.",
          related: ["Foreign keys", "ON DELETE CASCADE"]
        },
        {
          difficulty: "medium",
          question: "What does the RETURNING clause do (PostgreSQL)?",
          options: {
            A: "Returns the inserted/updated/deleted rows - e.g. to get an auto-generated id",
            B: "Rolls back the change",
            C: "Returns nothing",
            D: "Repeats the statement"
          },
          answer: "A",
          explanation: "INSERT ... RETURNING id gives back the new primary key in one round trip. SQL Server uses the OUTPUT clause for the same purpose.",
          code: "INSERT INTO users (name) VALUES ('Ana') RETURNING id;",
          related: ["RETURNING", "OUTPUT"]
        },
        {
          difficulty: "hard",
          question: "Why can a large single DELETE be problematic?",
          options: {
            A: "It can lock rows, bloat the transaction log, and run long - batching (delete in chunks) is often safer",
            B: "It is always fine",
            C: "It never locks",
            D: "It deletes too little"
          },
          answer: "A",
          explanation: "Deleting millions of rows in one transaction holds locks and grows the log. Deleting in batches (e.g. 10,000 rows at a time) reduces contention and log pressure.",
          related: ["DELETE", "Batching", "Locks"]
        },
        {
          difficulty: "medium",
          question: "How do you insert a row using DEFAULT values?",
          options: {
            A: "Omit those columns from the INSERT, or use the keyword DEFAULT",
            B: "You must specify every column",
            C: "Insert NULL always",
            D: "It is impossible"
          },
          answer: "A",
          explanation: "Columns with a DEFAULT (or that allow NULL, or auto-increment) can be left out of the column list. The database fills them in automatically.",
          code: "INSERT INTO orders (customer_id) VALUES (5);  -- status uses its default",
          related: ["DEFAULT", "INSERT"]
        },
        {
          difficulty: "hard",
          question: "What does a conditional UPDATE with CASE achieve?",
          options: {
            A: "Sets different values per row based on conditions in a single statement",
            B: "It filters rows",
            C: "It deletes rows",
            D: "Nothing"
          },
          answer: "A",
          explanation: "UPDATE t SET tier = CASE WHEN spend > 1000 THEN 'gold' ELSE 'silver' END updates every row with the appropriate value in one pass.",
          related: ["UPDATE", "CASE"]
        },
        {
          difficulty: "medium",
          question: "What does INSERT do if a UNIQUE constraint is violated?",
          options: {
            A: "It fails with a unique-constraint error unless you handle it (e.g. with ON CONFLICT)",
            B: "It overwrites silently",
            C: "It inserts a duplicate",
            D: "It updates the row"
          },
          answer: "A",
          explanation: "Constraints protect integrity by rejecting the insert. UPSERT syntax lets you decide to update instead, or IGNORE to skip the conflicting row.",
          related: ["UNIQUE", "Constraints"]
        },
        {
          difficulty: "hard",
          question: "What is a soft delete?",
          options: {
            A: "Marking a row as deleted (e.g. deleted_at timestamp) instead of physically removing it",
            B: "A slow DELETE",
            C: "DELETE without WHERE",
            D: "TRUNCATE"
          },
          answer: "A",
          explanation: "Soft deletes preserve history and allow recovery: queries add WHERE deleted_at IS NULL. The trade-off is extra filtering and eventual cleanup of old rows.",
          related: ["Soft delete", "Auditing"]
        },
        {
          difficulty: "medium",
          question: "How do you delete duplicate rows keeping one copy?",
          options: {
            A: "Use a window function (ROW_NUMBER) or a self join to identify extras, then DELETE them",
            B: "DELETE DISTINCT",
            C: "TRUNCATE the table",
            D: "It is impossible"
          },
          answer: "A",
          explanation: "Number the duplicates with ROW_NUMBER() OVER (PARTITION BY key) and delete those with rn > 1. A very common data-cleaning task.",
          code: "DELETE FROM t WHERE id IN (\n  SELECT id FROM (SELECT id, ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) rn FROM t) x WHERE rn > 1\n);",
          related: ["Duplicates", "ROW_NUMBER"]
        },
        {
          difficulty: "hard",
          question: "Why should DML changes often be wrapped in a transaction?",
          options: {
            A: "So a multi-step change is all-or-nothing and can be rolled back if something goes wrong",
            B: "To make it faster",
            C: "Transactions are required for INSERT",
            D: "No reason"
          },
          answer: "A",
          explanation: "BEGIN ... COMMIT groups related changes; ROLLBACK undoes them if an error occurs. This keeps data consistent - for example, debit one account and credit another together.",
          related: ["Transactions", "Atomicity"]
        },
        {
          difficulty: "medium",
          question: "What does DELETE return or affect besides removing rows?",
          options: {
            A: "It reports the number of rows affected and can fire triggers and cascade to related tables",
            B: "Only removes rows silently",
            C: "It returns the rows",
            D: "Nothing else"
          },
          answer: "A",
          explanation: "The affected-row count confirms the scope of the operation. Foreign key cascades and triggers may perform additional work - worth knowing before running big deletes.",
          related: ["DELETE", "Triggers", "Cascade"]
        },
        {
          difficulty: "hard",
          question: "How do you copy a table's structure AND data into a new table?",
          options: {
            A: "CREATE TABLE new AS SELECT * FROM old;  (CTAS)",
            B: "COPY TABLE",
            C: "INSERT INTO new",
            D: "It is impossible"
          },
          answer: "A",
          explanation: "CREATE TABLE AS SELECT (CTAS) creates and fills a table in one step - handy for backups and staging. Note it usually does NOT copy indexes or constraints.",
          related: ["CTAS", "CREATE TABLE"]
        },
        {
          difficulty: "medium",
          question: "How do you empty a table but keep its structure quickly?",
          options: {
            A: "TRUNCATE TABLE t;",
            B: "DROP TABLE t;",
            C: "DELETE TABLE t;",
            D: "CLEAR t;"
          },
          answer: "A",
          explanation: "TRUNCATE removes all rows almost instantly and resets auto-increment counters (in most databases), while leaving the table definition intact.",
          related: ["TRUNCATE"]
        },
        {
          difficulty: "hard",
          question: "What is the risk of updating a column used in the WHERE of the same statement?",
          options: {
            A: "Generally SQL applies the change atomically per the original match set, but semantics can surprise you - test carefully",
            B: "It always loops forever",
            C: "It is a syntax error",
            D: "It never works"
          },
          answer: "A",
          explanation: "SQL evaluates the WHERE against the pre-update state within the statement, so it does not re-match rows mid-update. Still, such statements deserve careful testing on sample data.",
          related: ["UPDATE", "Semantics"]
        },
        {
          difficulty: "medium",
          question: "How do you set a column to NULL?",
          options: {
            A: "UPDATE t SET middle_name = NULL WHERE id = 5;",
            B: "DELETE middle_name",
            C: "SET middle_name = ''",
            D: "REMOVE middle_name"
          },
          answer: "A",
          explanation: "Assigning NULL clears a value (if the column allows NULL). This differs from '' (empty string) - NULL means 'no value', empty string means 'a known blank'.",
          related: ["NULL", "UPDATE"]
        },
        {
          difficulty: "hard",
          question: "Why is INSERT ... SELECT preferred over row-by-row inserts for bulk loads?",
          options: {
            A: "It is a single set-based operation - far fewer round trips and log entries than thousands of individual inserts",
            B: "It is slower but safer",
            C: "It skips constraints",
            D: "There is no difference"
          },
          answer: "A",
          explanation: "Set-based operations let the database work in bulk. Looping single inserts from application code is dramatically slower due to per-statement overhead.",
          related: ["Bulk insert", "Performance"]
        },
        {
          difficulty: "medium",
          question: "Which clause limits how many rows an UPDATE or DELETE affects (MySQL)?",
          options: {
            A: "LIMIT - e.g. DELETE FROM logs WHERE ... LIMIT 1000 for batching",
            B: "TOP only",
            C: "FETCH only",
            D: "You cannot limit them"
          },
          answer: "A",
          explanation: "MySQL allows LIMIT on DELETE/UPDATE for batch processing. SQL Server uses DELETE TOP (n). Batching large modifications reduces locking and log growth.",
          related: ["Batching", "LIMIT"]
        }
      ]
    }
  ]
});
