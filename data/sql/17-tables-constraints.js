/* ============================================================
   SQL - TOPIC 17: CREATING TABLES & CONSTRAINTS (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "SQL",
  icon: "🗄️",
  color: "#0f80cc",
  description: "Databases from basics to window functions - 20 topics.",
  topics: [
    {
      name: "17. Tables & Constraints",
      questions: [
        {
          difficulty: "easy",
          question: "Which statement creates a new table?",
          options: {
            A: "CREATE TABLE",
            B: "NEW TABLE",
            C: "MAKE TABLE",
            D: "ADD TABLE"
          },
          answer: "A",
          explanation: "CREATE TABLE name (column definitions) defines a table's structure - its columns, types and constraints.",
          code: "CREATE TABLE students (\n  id INT PRIMARY KEY,\n  name VARCHAR(50) NOT NULL\n);",
          related: ["CREATE TABLE", "DDL"]
        },
        {
          difficulty: "medium",
          question: "What does a PRIMARY KEY constraint guarantee?",
          options: {
            A: "The column(s) are UNIQUE and NOT NULL - uniquely identifying each row",
            B: "The column is the first one",
            C: "The column is indexed only",
            D: "The column is encrypted"
          },
          answer: "A",
          explanation: "A primary key combines UNIQUE + NOT NULL and is automatically indexed. Every table should normally have one to identify rows unambiguously.",
          related: ["PRIMARY KEY", "Constraints"]
        },
        {
          difficulty: "medium",
          question: "What does a FOREIGN KEY constraint enforce?",
          options: {
            A: "That the value must exist as a key in the referenced table (referential integrity)",
            B: "That the column is unique",
            C: "That the column is NOT NULL",
            D: "Encryption"
          },
          answer: "A",
          explanation: "A foreign key prevents orphan rows: you cannot insert an order for a customer_id that does not exist, and (with RESTRICT) cannot delete a referenced customer.",
          code: "FOREIGN KEY (customer_id) REFERENCES customers(id)",
          related: ["FOREIGN KEY", "Referential integrity"]
        },
        {
          difficulty: "medium",
          question: "What does a UNIQUE constraint do?",
          options: {
            A: "Ensures no two rows have the same value in that column (but allows NULLs, usually)",
            B: "Makes the column the primary key",
            C: "Sorts the column",
            D: "Encrypts values"
          },
          answer: "A",
          explanation: "UNIQUE enforces distinct values - ideal for emails or usernames. Unlike PRIMARY KEY, a table can have several UNIQUE constraints, and they typically permit one (or more) NULLs.",
          related: ["UNIQUE", "Constraints"]
        },
        {
          difficulty: "hard",
          question: "How does UNIQUE treat NULL values?",
          options: {
            A: "In most databases multiple NULLs are allowed (NULL is 'unknown', not equal to another NULL)",
            B: "Only one NULL is allowed",
            C: "NULLs are forbidden",
            D: "NULLs cause errors"
          },
          answer: "A",
          explanation: "Because NULL != NULL, a UNIQUE column usually permits many NULLs (SQL Server allows only one). If you need every row to have a distinct real value, combine UNIQUE with NOT NULL.",
          related: ["UNIQUE", "NULL"]
        },
        {
          difficulty: "medium",
          question: "What does NOT NULL enforce?",
          options: {
            A: "The column must always have a value - inserts/updates cannot leave it NULL",
            B: "The column cannot be zero",
            C: "The column is unique",
            D: "The column is a key"
          },
          answer: "A",
          explanation: "NOT NULL rejects missing values, guaranteeing the data is present. Pair it with a DEFAULT so inserts that omit the column still succeed.",
          related: ["NOT NULL", "Constraints"]
        },
        {
          difficulty: "medium",
          question: "What does a CHECK constraint do?",
          options: {
            A: "Enforces a custom condition on values, e.g. CHECK (age >= 0)",
            B: "Checks spelling",
            C: "Indexes the column",
            D: "Runs a query"
          },
          answer: "A",
          explanation: "CHECK validates data at write time: prices non-negative, status in a set, end date after start date. The database rejects any row that fails the condition.",
          code: "price DECIMAL(10,2) CHECK (price >= 0)",
          related: ["CHECK", "Validation"]
        },
        {
          difficulty: "medium",
          question: "What does a DEFAULT do?",
          options: {
            A: "Supplies a value automatically when an insert omits the column",
            B: "Sets the primary key",
            C: "Makes the column unique",
            D: "Deletes old values"
          },
          answer: "A",
          explanation: "DEFAULT 'pending' or DEFAULT CURRENT_TIMESTAMP fills in a value so callers need not specify it. Combined with NOT NULL, it guarantees a usable value in every row.",
          code: "created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP",
          related: ["DEFAULT"]
        },
        {
          difficulty: "hard",
          question: "What does ON DELETE CASCADE do on a foreign key?",
          options: {
            A: "Automatically deletes child rows when the referenced parent row is deleted",
            B: "Blocks the delete",
            C: "Sets children to NULL",
            D: "Nothing"
          },
          answer: "A",
          explanation: "CASCADE keeps data consistent by removing dependents (deleting an order deletes its order_items). Use carefully - it can remove more than you expect. Alternatives: RESTRICT (block) and SET NULL.",
          related: ["ON DELETE CASCADE", "Foreign keys"]
        },
        {
          difficulty: "hard",
          question: "What is the difference between ON DELETE RESTRICT and CASCADE?",
          options: {
            A: "RESTRICT blocks deleting a parent that has children; CASCADE deletes the children too",
            B: "They are identical",
            C: "RESTRICT deletes children",
            D: "CASCADE blocks the delete"
          },
          answer: "A",
          explanation: "RESTRICT (and NO ACTION) protect data by refusing the delete. CASCADE propagates it. SET NULL orphans children by nulling their foreign key. Choose based on business rules.",
          related: ["Referential actions"]
        },
        {
          difficulty: "medium",
          question: "How do you ADD a column to an existing table?",
          options: {
            A: "ALTER TABLE t ADD COLUMN email VARCHAR(100);",
            B: "UPDATE TABLE ADD email",
            C: "CREATE COLUMN email",
            D: "INSERT COLUMN email"
          },
          answer: "A",
          explanation: "ALTER TABLE changes structure. You can add, drop or modify columns and constraints. On large tables, adding a column can lock or rewrite the table, so plan migrations carefully.",
          related: ["ALTER TABLE", "Migrations"]
        },
        {
          difficulty: "medium",
          question: "How do you remove a column?",
          options: {
            A: "ALTER TABLE t DROP COLUMN email;",
            B: "DELETE COLUMN email",
            C: "REMOVE email",
            D: "DROP email FROM t"
          },
          answer: "A",
          explanation: "DROP COLUMN permanently removes the column and its data. This is irreversible without a backup, so confirm it is truly unused first.",
          related: ["ALTER TABLE", "DROP COLUMN"]
        },
        {
          difficulty: "easy",
          question: "How do you delete an entire table and its data?",
          options: {
            A: "DROP TABLE t;",
            B: "DELETE TABLE t;",
            C: "REMOVE TABLE t;",
            D: "TRUNCATE t;"
          },
          answer: "A",
          explanation: "DROP TABLE removes the table structure, data, indexes and constraints entirely. TRUNCATE only empties the rows; DELETE removes rows selectively.",
          related: ["DROP TABLE"]
        },
        {
          difficulty: "hard",
          question: "What is a composite primary key defined in DDL?",
          options: {
            A: "PRIMARY KEY (col1, col2) - the combination is unique, though neither column need be alone",
            B: "Two separate primary keys",
            C: "A foreign key",
            D: "An index"
          },
          answer: "A",
          explanation: "Common in junction tables: PRIMARY KEY (student_id, course_id) means a student can enrol in a course only once, though each id repeats across rows.",
          related: ["Composite key", "Junction table"]
        },
        {
          difficulty: "medium",
          question: "How do you make a column auto-increment?",
          options: {
            A: "AUTO_INCREMENT (MySQL), SERIAL / GENERATED AS IDENTITY (PostgreSQL), or IDENTITY (SQL Server)",
            B: "AUTO NUMBER everywhere",
            C: "INCREMENT BY 1",
            D: "It is automatic"
          },
          answer: "A",
          explanation: "These generate a unique increasing value for each new row, typically for surrogate primary keys. Syntax varies by database, but the concept is universal.",
          code: "id INT AUTO_INCREMENT PRIMARY KEY   -- MySQL",
          related: ["Auto-increment", "Surrogate key"]
        },
        {
          difficulty: "hard",
          question: "What is the difference between a natural key and a surrogate key?",
          options: {
            A: "A natural key uses meaningful data (email, ISBN); a surrogate key is a system-generated id with no business meaning",
            B: "They are identical",
            C: "Natural keys are always integers",
            D: "Surrogate keys must be text"
          },
          answer: "A",
          explanation: "Surrogate keys (auto-increment ids) are stable and simple, so they are the common default. Natural keys carry meaning but can change, which complicates foreign keys.",
          related: ["Surrogate key", "Natural key"]
        },
        {
          difficulty: "medium",
          question: "Can you name a constraint?",
          options: {
            A: "Yes - CONSTRAINT chk_price CHECK (price >= 0) - named constraints are easier to reference and drop",
            B: "No, constraints are anonymous",
            C: "Only primary keys can be named",
            D: "Names are random"
          },
          answer: "A",
          explanation: "Naming constraints gives clearer error messages and lets you drop or alter a specific one later: ALTER TABLE ... DROP CONSTRAINT chk_price.",
          related: ["Named constraints"]
        },
        {
          difficulty: "hard",
          question: "How do you add a foreign key to an EXISTING table?",
          options: {
            A: "ALTER TABLE orders ADD CONSTRAINT fk_cust FOREIGN KEY (customer_id) REFERENCES customers(id);",
            B: "You must recreate the table",
            C: "CREATE FOREIGN KEY",
            D: "It is impossible"
          },
          answer: "A",
          explanation: "ALTER TABLE ... ADD CONSTRAINT adds it after the fact. The database first checks that all existing values satisfy the constraint, or the ALTER fails.",
          related: ["ALTER TABLE", "FOREIGN KEY"]
        },
        {
          difficulty: "medium",
          question: "What does CREATE TABLE IF NOT EXISTS do?",
          options: {
            A: "Creates the table only if it does not already exist - avoiding an error on re-run",
            B: "Always recreates the table",
            C: "Deletes the table first",
            D: "Nothing"
          },
          answer: "A",
          explanation: "Useful in setup scripts and migrations so re-running them does not fail. Similarly, DROP TABLE IF EXISTS avoids errors when the table is absent.",
          related: ["IF NOT EXISTS", "Idempotency"]
        },
        {
          difficulty: "hard",
          question: "Why are constraints better than validating only in application code?",
          options: {
            A: "The database enforces them for EVERY client and script - a last line of defence that never gets bypassed",
            B: "They are faster to write",
            C: "Application checks are always enough",
            D: "Constraints are optional decoration"
          },
          answer: "A",
          explanation: "Multiple apps, admin scripts and manual edits all touch a database. Constraints guarantee integrity regardless of how the data arrives, whereas app validation can be skipped.",
          related: ["Data integrity", "Defence in depth"]
        },
        {
          difficulty: "medium",
          question: "How do you rename a table?",
          options: {
            A: "ALTER TABLE old_name RENAME TO new_name;  (syntax varies slightly)",
            B: "RENAME COLUMN",
            C: "UPDATE TABLE NAME",
            D: "Tables cannot be renamed"
          },
          answer: "A",
          explanation: "Most databases support renaming via ALTER TABLE ... RENAME TO (MySQL also has RENAME TABLE). Be aware that views and code referencing the old name will break.",
          related: ["ALTER TABLE", "RENAME"]
        },
        {
          difficulty: "hard",
          question: "What does a CHECK constraint referencing two columns enforce?",
          options: {
            A: "A relationship between them, e.g. CHECK (end_date >= start_date)",
            B: "Only single-column checks are allowed",
            C: "It indexes both",
            D: "Nothing"
          },
          answer: "A",
          explanation: "Multi-column CHECKs validate cross-field rules at the database level - ensuring, for instance, that a booking's end is never before its start.",
          related: ["CHECK", "Cross-column"]
        },
        {
          difficulty: "medium",
          question: "What happens if you insert a row that violates a CHECK constraint?",
          options: {
            A: "The insert is rejected with a constraint-violation error",
            B: "It inserts anyway",
            C: "The value is corrected",
            D: "The constraint is dropped"
          },
          answer: "A",
          explanation: "Constraints reject invalid data rather than silently accepting it - exactly the protection you want. Handle the error gracefully in the application.",
          related: ["CHECK", "Errors"]
        },
        {
          difficulty: "hard",
          question: "Why index foreign key columns?",
          options: {
            A: "Joins and cascade checks scan them frequently; without an index those operations are slow",
            B: "Foreign keys index automatically everywhere",
            C: "It is never needed",
            D: "To save space"
          },
          answer: "A",
          explanation: "Primary keys are indexed automatically, but foreign keys often are not (except in some databases). Indexing them speeds joins and makes ON DELETE checks efficient.",
          related: ["Indexes", "Foreign keys"]
        },
        {
          difficulty: "medium",
          question: "What is a self-referencing foreign key?",
          options: {
            A: "A foreign key that references the same table - e.g. employees.manager_id -> employees.id",
            B: "A key that references itself literally",
            C: "An invalid key",
            D: "A primary key"
          },
          answer: "A",
          explanation: "It models hierarchies within one table. The top of the hierarchy (a CEO) has a NULL in the self-referencing column since they have no parent.",
          related: ["Self-reference", "Hierarchies"]
        },
        {
          difficulty: "hard",
          question: "What is the effect of a DEFERRABLE constraint?",
          options: {
            A: "Its check can be postponed until the transaction commits, allowing temporary violations mid-transaction",
            B: "It disables the constraint",
            C: "It runs the constraint twice",
            D: "Nothing"
          },
          answer: "A",
          explanation: "Deferrable foreign keys (PostgreSQL, Oracle) let you insert rows in an order that would momentarily violate the constraint, as long as everything is consistent at COMMIT - useful for circular references.",
          related: ["Deferrable constraints", "Transactions"]
        },
        {
          difficulty: "medium",
          question: "How do you change a column to allow (or disallow) NULL?",
          options: {
            A: "ALTER TABLE t ALTER COLUMN c SET/DROP NOT NULL (or MODIFY in MySQL)",
            B: "You cannot change nullability",
            C: "DROP the column",
            D: "Recreate the table only"
          },
          answer: "A",
          explanation: "Adding NOT NULL requires that no existing rows are NULL, or the change fails. Syntax differs: PostgreSQL uses SET/DROP NOT NULL; MySQL uses MODIFY COLUMN.",
          related: ["ALTER TABLE", "NOT NULL"]
        },
        {
          difficulty: "hard",
          question: "What is a generated (computed) column?",
          options: {
            A: "A column whose value is derived from other columns by a formula, maintained automatically",
            B: "A random column",
            C: "A backup column",
            D: "An index"
          },
          answer: "A",
          explanation: "GENERATED ALWAYS AS (price * quantity) STORED computes and stores a value from other columns. Great for search or indexing on derived data without app-side maintenance.",
          code: "total DECIMAL(12,2) GENERATED ALWAYS AS (price * qty) STORED",
          related: ["Generated columns"]
        },
        {
          difficulty: "medium",
          question: "Which constraint would ensure an email column has no duplicates and is always provided?",
          options: {
            A: "UNIQUE combined with NOT NULL",
            B: "PRIMARY KEY only",
            C: "CHECK only",
            D: "DEFAULT only"
          },
          answer: "A",
          explanation: "UNIQUE stops duplicates and NOT NULL stops missing values. Together they guarantee every row has a distinct, present email - without making it the primary key.",
          related: ["UNIQUE", "NOT NULL"]
        },
        {
          difficulty: "hard",
          question: "Why prefer defining constraints at table creation over adding them later?",
          options: {
            A: "The table starts valid, and adding constraints later can fail on existing bad data or require costly full-table validation",
            B: "It is faster to type",
            C: "Later constraints are ignored",
            D: "There is no difference"
          },
          answer: "A",
          explanation: "Constraints defined upfront prevent bad data from ever entering. Adding them to a populated table forces a validation scan and may fail if pre-existing rows violate the rule.",
          related: ["Design", "Migrations"]
        }
      ]
    }
  ]
});
