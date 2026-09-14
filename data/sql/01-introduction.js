/* ============================================================
   SQL - TOPIC 1: INTRODUCTION TO DATABASES & SQL (30 questions)
   One file per topic. See "HOW TO ADD QUESTIONS.md" for the
   question template.
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "SQL",
  icon: "🗄️",
  color: "#0f80cc",
  description: "Databases from basics to window functions - 20 topics.",
  topics: [
    {
      name: "1. Introduction to Databases & SQL",
      questions: [
        {
          difficulty: "easy",
          question: "What does SQL stand for?",
          options: {
            A: "Structured Query Language",
            B: "Simple Question Language",
            C: "Standard Quality Language",
            D: "Sequential Query Logic"
          },
          answer: "A",
          explanation: "SQL is the standard language for storing, retrieving and managing data in relational databases. It is often pronounced 'sequel' or spelled out as S-Q-L.",
          related: ["Databases", "RDBMS"]
        },
        {
          difficulty: "easy",
          question: "What is a relational database?",
          options: {
            A: "Data organised into TABLES of rows and columns, which can be linked by keys",
            B: "A database stored only in memory",
            C: "A collection of text files",
            D: "A spreadsheet program"
          },
          answer: "A",
          explanation: "Relational databases store data in tables. Relationships between tables are created with keys - for example an Orders table referencing a Customers table.",
          related: ["Tables", "Keys"]
        },
        {
          difficulty: "easy",
          question: "In a table, what does a ROW represent?",
          options: {
            A: "A single record - one complete entry, such as one customer",
            B: "One field of data",
            C: "The table name",
            D: "A query result only"
          },
          answer: "A",
          explanation: "A row (also called a record or tuple) is one complete item. A column (field or attribute) is one property shared by every row, such as email.",
          related: ["Rows", "Columns"]
        },
        {
          difficulty: "easy",
          question: "What is a COLUMN in a table?",
          options: {
            A: "A named field with a fixed data type, holding one attribute for every row",
            B: "One customer's data",
            C: "A group of tables",
            D: "A saved query"
          },
          answer: "A",
          explanation: "Every column has a name and a data type (INT, VARCHAR, DATE...). That type is enforced, so a numeric column cannot accidentally store text.",
          related: ["Columns", "Data types"]
        },
        {
          difficulty: "medium",
          question: "What is a PRIMARY KEY?",
          options: {
            A: "A column (or set of columns) that uniquely identifies each row - never NULL, never duplicated",
            B: "The first column of a table",
            C: "A password for the table",
            D: "The most important data in a row"
          },
          answer: "A",
          explanation: "The primary key guarantees every row can be identified unambiguously. Typical choices are an auto-incrementing id or a natural unique value like an ISBN.",
          code: "CREATE TABLE students (\n  id INT PRIMARY KEY,\n  name VARCHAR(50)\n);",
          related: ["Primary key", "Constraints"]
        },
        {
          difficulty: "medium",
          question: "What is a FOREIGN KEY?",
          options: {
            A: "A column that references the primary key of another table, creating a relationship",
            B: "A key from a foreign country",
            C: "An encrypted key",
            D: "A backup key"
          },
          answer: "A",
          explanation: "Foreign keys enforce referential integrity: an order cannot reference a customer_id that does not exist, and the database can block deleting a customer who still has orders.",
          code: "CREATE TABLE orders (\n  id INT PRIMARY KEY,\n  customer_id INT,\n  FOREIGN KEY (customer_id) REFERENCES customers(id)\n);",
          related: ["Foreign key", "Relationships"]
        },
        {
          difficulty: "easy",
          question: "Which of these is a popular relational database system?",
          options: {
            A: "MySQL, PostgreSQL, SQL Server, Oracle, SQLite",
            B: "MongoDB only",
            C: "Excel",
            D: "JSON"
          },
          answer: "A",
          explanation: "All of those speak SQL with small dialect differences. MongoDB is a NoSQL document database and does not use SQL.",
          related: ["RDBMS", "Dialects"]
        },
        {
          difficulty: "medium",
          question: "What is the difference between SQL and MySQL?",
          options: {
            A: "SQL is the LANGUAGE; MySQL is a database product that implements it",
            B: "They are the same thing",
            C: "MySQL is newer SQL",
            D: "SQL is only for Microsoft"
          },
          answer: "A",
          explanation: "You write SQL; MySQL, PostgreSQL and SQL Server are programs that run it. Each adds its own extensions, which is why some syntax differs between them.",
          related: ["Dialects", "RDBMS"]
        },
        {
          difficulty: "medium",
          question: "What does DDL stand for, and what does it do?",
          options: {
            A: "Data Definition Language - defines STRUCTURE: CREATE, ALTER, DROP",
            B: "Data Deletion Language",
            C: "Database Design Logic",
            D: "Dynamic Data Loader"
          },
          answer: "A",
          explanation: "DDL builds and changes the schema itself. DML (Data Manipulation Language) handles the data inside: SELECT, INSERT, UPDATE, DELETE.",
          related: ["DDL", "DML"]
        },
        {
          difficulty: "medium",
          question: "Which statements belong to DML (Data Manipulation Language)?",
          options: {
            A: "SELECT, INSERT, UPDATE, DELETE",
            B: "CREATE, ALTER, DROP",
            C: "GRANT, REVOKE",
            D: "COMMIT, ROLLBACK"
          },
          answer: "A",
          explanation: "DML works with the rows. DDL changes structure, DCL (GRANT/REVOKE) handles permissions, and TCL (COMMIT/ROLLBACK) manages transactions.",
          related: ["DML", "DDL", "TCL"]
        },
        {
          difficulty: "easy",
          question: "Is SQL case-sensitive for its KEYWORDS?",
          options: {
            A: "No - select and SELECT both work, though uppercase keywords are the convention",
            B: "Yes, keywords must be uppercase",
            C: "Yes, keywords must be lowercase",
            D: "Only in MySQL"
          },
          answer: "A",
          explanation: "Keywords are case-insensitive. Writing them in CAPS makes queries easier to read. Note that DATA and table/column names may be case-sensitive depending on the database and operating system.",
          code: "SELECT name FROM students;   -- conventional\nselect name from students;   -- also valid",
          related: ["Style", "Conventions"]
        },
        {
          difficulty: "easy",
          question: "How do you write a comment in SQL?",
          options: {
            A: "-- for a single line, /* ... */ for multiple lines",
            B: "# only",
            C: "// only",
            D: "Comments are not supported"
          },
          answer: "A",
          explanation: "Two hyphens start a single-line comment; /* */ wraps a block. (MySQL also accepts # for single lines, but -- is the standard.)",
          code: "-- get active users\nSELECT * FROM users   /* all columns */\nWHERE active = 1;",
          related: ["Comments"]
        },
        {
          difficulty: "easy",
          question: "What character traditionally ends an SQL statement?",
          options: {
            A: "A semicolon ;",
            B: "A full stop .",
            C: "A colon :",
            D: "Nothing"
          },
          answer: "A",
          explanation: "The semicolon separates statements. Some tools let you omit it for a single query, but it is required when running several statements together.",
          related: ["Syntax"]
        },
        {
          difficulty: "medium",
          question: "What is a SCHEMA?",
          options: {
            A: "The structure/blueprint of a database - its tables, columns, types and relationships",
            B: "The data itself",
            C: "A backup copy",
            D: "A query result"
          },
          answer: "A",
          explanation: "The schema describes how data is organised. In some systems (PostgreSQL, SQL Server) a schema is also a named namespace that groups tables, like public.users.",
          related: ["Schema", "Design"]
        },
        {
          difficulty: "medium",
          question: "What is a NULL value in SQL?",
          options: {
            A: "The absence of a value - 'unknown' or 'not applicable', which is NOT the same as 0 or an empty string",
            B: "The number zero",
            C: "An empty string",
            D: "A syntax error"
          },
          answer: "A",
          explanation: "NULL means 'no value recorded'. Because it is unknown, comparisons with it behave specially - you must use IS NULL, never = NULL.",
          related: ["NULL", "Three-valued logic"]
        },
        {
          difficulty: "medium",
          question: "What is a QUERY?",
          options: {
            A: "A statement that asks the database for data, typically starting with SELECT",
            B: "A table",
            C: "A database backup",
            D: "A user account"
          },
          answer: "A",
          explanation: "A query requests data and returns a RESULT SET - itself a table of rows and columns, which is why queries can be nested and combined.",
          related: ["SELECT", "Result set"]
        },
        {
          difficulty: "medium",
          question: "What is a result set?",
          options: {
            A: "The table of rows and columns returned by a query",
            B: "A permanent table",
            C: "An error message",
            D: "The database log"
          },
          answer: "A",
          explanation: "Result sets are temporary. Because they look like tables, they can feed into subqueries, CTEs and views.",
          related: ["Queries", "Subqueries"]
        },
        {
          difficulty: "hard",
          question: "What does it mean that SQL is a DECLARATIVE language?",
          options: {
            A: "You describe WHAT data you want; the database decides HOW to fetch it efficiently",
            B: "You must declare every variable",
            C: "It runs line by line like Python",
            D: "It only works with declarations"
          },
          answer: "A",
          explanation: "You never write loops over rows. The query optimiser chooses the execution plan - which indexes to use and which join order - based on statistics about your data.",
          related: ["Declarative", "Query optimiser"]
        },
        {
          difficulty: "medium",
          question: "What is the difference between a database and a table?",
          options: {
            A: "A database is the container; tables are the individual data structures inside it",
            B: "They are the same",
            C: "A table contains databases",
            D: "A database holds only one table"
          },
          answer: "A",
          explanation: "One database typically holds many related tables - for a shop: customers, products, orders, order_items.",
          related: ["Database", "Tables"]
        },
        {
          difficulty: "medium",
          question: "What is a composite (compound) primary key?",
          options: {
            A: "A primary key made of TWO OR MORE columns combined",
            B: "A key that is encrypted",
            C: "A key shared by two tables",
            D: "A backup key"
          },
          answer: "A",
          explanation: "Common in link tables: in enrollments, neither student_id nor course_id is unique alone, but together they uniquely identify one enrolment.",
          code: "CREATE TABLE enrollments (\n  student_id INT,\n  course_id INT,\n  PRIMARY KEY (student_id, course_id)\n);",
          related: ["Composite key", "Many-to-many"]
        },
        {
          difficulty: "hard",
          question: "What is referential integrity?",
          options: {
            A: "The guarantee that foreign key values always point to rows that actually exist",
            B: "That all data is encrypted",
            C: "That tables have the same number of rows",
            D: "That queries run fast"
          },
          answer: "A",
          explanation: "The database refuses to insert an order for a non-existent customer, and blocks (or cascades) deletion of a customer with existing orders - preventing 'orphan' records.",
          related: ["Foreign keys", "Integrity"]
        },
        {
          difficulty: "medium",
          question: "What is the difference between SQL and NoSQL databases?",
          options: {
            A: "SQL databases use fixed table schemas and relationships; NoSQL stores flexible documents/key-values without a rigid schema",
            B: "NoSQL cannot store data",
            C: "SQL is always faster",
            D: "They are identical"
          },
          answer: "A",
          explanation: "Relational databases excel where data is structured and consistency matters (banking, orders). NoSQL suits flexible or rapidly changing data at large scale. Many systems use both.",
          related: ["NoSQL", "MongoDB"]
        },
        {
          difficulty: "easy",
          question: "Which clause specifies WHICH TABLE to read from?",
          options: { A: "FROM", B: "SELECT", C: "WHERE", D: "TABLE" },
          answer: "A",
          explanation: "SELECT lists the columns you want; FROM names the source table. Both are required in a basic query.",
          code: "SELECT name, email\nFROM customers;",
          related: ["SELECT", "FROM"]
        },
        {
          difficulty: "medium",
          question: "What is an ENTITY in database design?",
          options: {
            A: "A real-world thing you store data about - which usually becomes a table",
            B: "A single column",
            C: "A query",
            D: "A user login"
          },
          answer: "A",
          explanation: "Entities (Customer, Product, Order) become tables; their attributes become columns; the links between them become foreign keys. This is the basis of ER modelling.",
          related: ["ER model", "Design"]
        },
        {
          difficulty: "hard",
          question: "What is a one-to-many relationship?",
          options: {
            A: "One row in table A relates to many rows in table B - e.g. one customer has many orders",
            B: "Two tables with equal rows",
            C: "Two primary keys",
            D: "A table with one column"
          },
          answer: "A",
          explanation: "It is implemented by putting the foreign key on the MANY side: orders.customer_id references customers.id. It is the most common relationship type.",
          related: ["Relationships", "Foreign keys"]
        },
        {
          difficulty: "hard",
          question: "How is a many-to-many relationship implemented?",
          options: {
            A: "With a third JUNCTION table holding foreign keys to both sides",
            B: "By adding two primary keys to one table",
            C: "It is impossible in SQL",
            D: "With a single foreign key"
          },
          answer: "A",
          explanation: "Students take many courses and courses have many students, so an enrollments table links them. Junction tables often carry extra data such as enrolment_date or grade.",
          related: ["Junction table", "Many-to-many"]
        },
        {
          difficulty: "medium",
          question: "What is an INDEX, in one sentence?",
          options: {
            A: "A data structure that speeds up lookups on a column - like the index at the back of a book",
            B: "A numbered list of rows",
            C: "The primary key",
            D: "A backup of the table"
          },
          answer: "A",
          explanation: "Without an index the database scans every row. With one it jumps straight to matches. The cost is extra storage and slightly slower writes.",
          related: ["Indexes", "Performance"]
        },
        {
          difficulty: "medium",
          question: "Which statement retrieves data WITHOUT changing it?",
          options: { A: "SELECT", B: "UPDATE", C: "DELETE", D: "INSERT" },
          answer: "A",
          explanation: "SELECT is read-only, so it is always safe to run. The other three modify data - always test them with a SELECT using the same WHERE clause first.",
          related: ["SELECT", "Safety"]
        },
        {
          difficulty: "hard",
          question: "What does ACID stand for in database transactions?",
          options: {
            A: "Atomicity, Consistency, Isolation, Durability",
            B: "Accuracy, Control, Integrity, Design",
            C: "Access, Create, Insert, Delete",
            D: "Automatic Column Index Definition"
          },
          answer: "A",
          explanation: "These properties guarantee reliable transactions: all-or-nothing (atomicity), valid state (consistency), no interference between concurrent transactions (isolation), and permanence after commit (durability).",
          related: ["ACID", "Transactions"]
        },
        {
          difficulty: "medium",
          question: "Why is SQL still essential decades after its creation?",
          options: {
            A: "It is a standard, declarative way to work with structured data, supported by nearly every data tool",
            B: "It is the only programming language",
            C: "It is required by browsers",
            D: "It replaced Python"
          },
          answer: "A",
          explanation: "Analytics, reporting, dashboards and machine-learning pipelines all pull from relational stores, so SQL remains one of the most in-demand data skills.",
          related: ["Careers", "Data analysis"]
        }
      ]
    }
  ]
});
