/* ============================================================
   SQL - TOPIC 19: VIEWS, INDEXES & TRANSACTIONS (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "SQL",
  icon: "🗄️",
  color: "#0f80cc",
  description: "Databases from basics to window functions - 20 topics.",
  topics: [
    {
      name: "19. Views, Indexes & Transactions",
      questions: [
        {
          difficulty: "medium",
          question: "What is a VIEW?",
          options: {
            A: "A saved query that acts like a virtual table - it stores no data itself",
            B: "A copy of a table",
            C: "An index",
            D: "A backup"
          },
          answer: "A",
          explanation: "CREATE VIEW names a query. Selecting from the view runs the underlying query. Views simplify complex logic and provide a stable interface even if base tables change.",
          code: "CREATE VIEW active_customers AS\nSELECT * FROM customers WHERE active = 1;",
          related: ["VIEW", "Virtual table"]
        },
        {
          difficulty: "medium",
          question: "What is a key benefit of using views?",
          options: {
            A: "They hide complexity and restrict access - users query a simple view instead of complex joins or sensitive columns",
            B: "They always speed up queries",
            C: "They store data twice",
            D: "They replace indexes"
          },
          answer: "A",
          explanation: "Views encapsulate complicated joins and can expose only certain columns/rows (security). Consumers get a clean, stable interface without knowing the underlying structure.",
          related: ["VIEW", "Abstraction"]
        },
        {
          difficulty: "hard",
          question: "What is a materialized view?",
          options: {
            A: "A view whose results are STORED physically and refreshed periodically - fast reads, but data can be stale",
            B: "A normal view",
            C: "A temporary table",
            D: "An index"
          },
          answer: "A",
          explanation: "Unlike a regular view (recomputed each query), a materialized view caches the result. It speeds up expensive aggregations at the cost of needing REFRESH to stay current.",
          related: ["Materialized view", "Caching"]
        },
        {
          difficulty: "medium",
          question: "What is an INDEX?",
          options: {
            A: "A data structure that speeds up row lookups on one or more columns",
            B: "A sorted copy of the table",
            C: "A view",
            D: "A constraint"
          },
          answer: "A",
          explanation: "Like a book's index, it lets the database jump to matching rows instead of scanning every row. The trade-off is extra storage and slightly slower writes.",
          code: "CREATE INDEX idx_email ON customers(email);",
          related: ["Index", "Performance"]
        },
        {
          difficulty: "hard",
          question: "What is the trade-off of adding indexes?",
          options: {
            A: "Faster reads but slower writes (every INSERT/UPDATE/DELETE must maintain the index) and more storage",
            B: "They only help, no downside",
            C: "They slow reads",
            D: "They save storage"
          },
          answer: "A",
          explanation: "Indexes must be kept in sync on every write. Too many indexes hurt write-heavy tables. Index the columns you filter, join and sort on - not everything.",
          related: ["Index", "Trade-offs"]
        },
        {
          difficulty: "medium",
          question: "Which columns benefit most from an index?",
          options: {
            A: "Columns used in WHERE, JOIN and ORDER BY - especially foreign keys and frequently searched fields",
            B: "Every column",
            C: "Only text columns",
            D: "Columns never queried"
          },
          answer: "A",
          explanation: "Index the columns your queries filter and join on. A column that is never in a WHERE/JOIN/ORDER BY gains nothing from an index and just slows writes.",
          related: ["Index strategy"]
        },
        {
          difficulty: "hard",
          question: "What is a composite index, and why does column order matter?",
          options: {
            A: "An index on multiple columns; it helps queries filtering on a LEFT-prefix of those columns (leftmost-prefix rule)",
            B: "It indexes columns in any order equally",
            C: "It is two separate indexes",
            D: "Order never matters"
          },
          answer: "A",
          explanation: "An index on (a, b) helps WHERE a = ? and WHERE a = ? AND b = ?, but not WHERE b = ? alone. Put the most selective/most-filtered column first.",
          code: "CREATE INDEX idx_ab ON t(a, b);",
          related: ["Composite index", "Leftmost prefix"]
        },
        {
          difficulty: "hard",
          question: "What is a covering index?",
          options: {
            A: "An index that contains ALL columns a query needs, so the database answers it from the index alone",
            B: "An index on every column",
            C: "A backup index",
            D: "A unique index"
          },
          answer: "A",
          explanation: "If the index already holds the selected columns, the database skips reading the table (an 'index-only scan'), which is very fast. Adding INCLUDE columns can create covering indexes.",
          related: ["Covering index", "Index-only scan"]
        },
        {
          difficulty: "medium",
          question: "What does EXPLAIN (or EXPLAIN ANALYZE) show?",
          options: {
            A: "The query execution plan - how the database will run the query, including index use and join methods",
            B: "The query result",
            C: "The table structure",
            D: "Syntax errors"
          },
          answer: "A",
          explanation: "EXPLAIN reveals whether a query uses indexes or does full scans, its join order, and estimated costs. It is the primary tool for diagnosing slow queries.",
          code: "EXPLAIN ANALYZE SELECT * FROM orders WHERE customer_id = 5;",
          related: ["EXPLAIN", "Query plan"]
        },
        {
          difficulty: "hard",
          question: "What is a full table scan, and when is it a problem?",
          options: {
            A: "Reading every row - fine for small tables, but slow on large ones when an index could have been used",
            B: "Always fast",
            C: "A type of index",
            D: "A backup"
          },
          answer: "A",
          explanation: "Seeing 'Seq Scan' or 'full scan' on a large filtered query in EXPLAIN usually signals a missing index or a non-sargable condition (a function wrapped around the column).",
          related: ["Table scan", "EXPLAIN"]
        },
        {
          difficulty: "medium",
          question: "What is a transaction?",
          options: {
            A: "A group of statements executed as a single all-or-nothing unit",
            B: "A single SELECT",
            C: "A backup",
            D: "An index rebuild"
          },
          answer: "A",
          explanation: "BEGIN starts it; COMMIT makes all changes permanent; ROLLBACK undoes them. Either every statement succeeds or none do - essential for operations like money transfers.",
          code: "BEGIN;\nUPDATE accounts SET bal = bal - 100 WHERE id = 1;\nUPDATE accounts SET bal = bal + 100 WHERE id = 2;\nCOMMIT;",
          related: ["Transaction", "BEGIN/COMMIT"]
        },
        {
          difficulty: "hard",
          question: "What do the ACID properties guarantee?",
          options: {
            A: "Atomicity (all-or-nothing), Consistency (valid state), Isolation (no interference), Durability (survives crashes)",
            B: "Speed and compression",
            C: "Only backups",
            D: "Index maintenance"
          },
          answer: "A",
          explanation: "ACID is the contract of a reliable transaction. It is why relational databases are trusted for banking and orders - a committed transaction is complete, correct and permanent.",
          related: ["ACID", "Transactions"]
        },
        {
          difficulty: "medium",
          question: "What does ROLLBACK do?",
          options: {
            A: "Undoes all changes made since the transaction began",
            B: "Saves the changes",
            C: "Deletes the table",
            D: "Creates a backup"
          },
          answer: "A",
          explanation: "If an error occurs mid-transaction, ROLLBACK reverts everything to the pre-transaction state, preserving consistency. COMMIT is the opposite - it finalises the changes.",
          related: ["ROLLBACK", "Transactions"]
        },
        {
          difficulty: "hard",
          question: "What is a SAVEPOINT?",
          options: {
            A: "A marker within a transaction you can roll back TO, without undoing the whole transaction",
            B: "A full commit",
            C: "A backup file",
            D: "An index"
          },
          answer: "A",
          explanation: "SAVEPOINT sp1 lets you ROLLBACK TO sp1, undoing only the work after that point. Useful in long transactions to recover from a partial failure without discarding everything.",
          related: ["SAVEPOINT", "Transactions"]
        },
        {
          difficulty: "hard",
          question: "What problem does transaction ISOLATION address?",
          options: {
            A: "Interference between concurrent transactions - dirty reads, non-repeatable reads and phantom reads",
            B: "Disk space",
            C: "Index size",
            D: "Syntax errors"
          },
          answer: "A",
          explanation: "When many transactions run at once, they can see each other's uncommitted or changing data. Isolation levels control which anomalies are allowed, trading consistency against concurrency.",
          related: ["Isolation", "Concurrency"]
        },
        {
          difficulty: "hard",
          question: "What is a dirty read?",
          options: {
            A: "Reading data another transaction has changed but NOT yet committed - which may be rolled back",
            B: "Reading old backups",
            C: "A corrupted file",
            D: "A syntax error"
          },
          answer: "A",
          explanation: "Dirty reads happen at the READ UNCOMMITTED isolation level. If the other transaction rolls back, you acted on data that never really existed. Higher isolation levels prevent this.",
          related: ["Dirty read", "Isolation levels"]
        },
        {
          difficulty: "hard",
          question: "What are the four standard isolation levels, from weakest to strongest?",
          options: {
            A: "READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE",
            B: "LOW, MEDIUM, HIGH, MAX",
            C: "OPEN, CLOSED, LOCKED, FREE",
            D: "There is only one level"
          },
          answer: "A",
          explanation: "Each level prevents more anomalies but reduces concurrency. SERIALIZABLE behaves as if transactions ran one at a time (safest, slowest); READ COMMITTED is a common default.",
          related: ["Isolation levels"]
        },
        {
          difficulty: "hard",
          question: "What is a deadlock?",
          options: {
            A: "Two transactions each waiting for a lock the other holds - neither can proceed; the database aborts one",
            B: "A crashed server",
            C: "A full disk",
            D: "A slow query"
          },
          answer: "A",
          explanation: "Deadlocks arise from circular lock dependencies. Databases detect them and kill one transaction (a deadlock victim), which the application should retry. Consistent lock ordering reduces them.",
          related: ["Deadlock", "Locks"]
        },
        {
          difficulty: "medium",
          question: "Why must a money transfer use a transaction?",
          options: {
            A: "So the debit and credit both succeed or both fail - never one without the other",
            B: "For speed",
            C: "To use an index",
            D: "It does not need one"
          },
          answer: "A",
          explanation: "If the debit succeeds but the credit fails without a transaction, money vanishes. Atomicity guarantees the pair is all-or-nothing - the textbook example of why transactions exist.",
          related: ["Atomicity", "Transactions"]
        },
        {
          difficulty: "medium",
          question: "Does a VIEW improve performance by storing results?",
          options: {
            A: "No - a regular view re-runs its query each time; only a MATERIALIZED view stores results",
            B: "Yes, always",
            C: "It stores half the results",
            D: "Views cannot be queried"
          },
          answer: "A",
          explanation: "Regular views are purely a naming/abstraction convenience and add no caching. For stored results you need a materialized view (with periodic refresh).",
          related: ["VIEW", "Materialized view"]
        },
        {
          difficulty: "hard",
          question: "Can you INSERT or UPDATE through a view?",
          options: {
            A: "Sometimes - simple single-table views are updatable; views with joins, aggregates or DISTINCT usually are not",
            B: "Always",
            C: "Never",
            D: "Only DELETE works"
          },
          answer: "A",
          explanation: "If the database can unambiguously map the change back to base-table rows, the view is updatable. Complex views need INSTEAD OF triggers to be writable.",
          related: ["Updatable views", "INSTEAD OF triggers"]
        },
        {
          difficulty: "medium",
          question: "What is a UNIQUE index?",
          options: {
            A: "An index that also enforces uniqueness - no two rows may share the indexed value",
            B: "The fastest index",
            C: "A backup index",
            D: "A view"
          },
          answer: "A",
          explanation: "A unique index doubles as a UNIQUE constraint and speeds lookups. Primary keys are implemented as unique indexes automatically.",
          related: ["Unique index", "Constraints"]
        },
        {
          difficulty: "hard",
          question: "Why can too many indexes hurt a write-heavy table?",
          options: {
            A: "Every INSERT/UPDATE/DELETE must update all relevant indexes, adding overhead to each write",
            B: "Indexes never affect writes",
            C: "They speed writes up",
            D: "They only affect reads"
          },
          answer: "A",
          explanation: "Indexes are a read optimisation paid for with write cost and storage. On a table with heavy inserts, keep only the indexes that meaningfully help your queries.",
          related: ["Index overhead", "Write performance"]
        },
        {
          difficulty: "hard",
          question: "What makes a WHERE condition 'sargable' (index-friendly)?",
          options: {
            A: "The indexed column is compared directly, not wrapped in a function - so the index can be used",
            B: "It uses more functions",
            C: "It uses OR everywhere",
            D: "It has no WHERE"
          },
          answer: "A",
          explanation: "WHERE created_at >= '2026-01-01' is sargable; WHERE YEAR(created_at) = 2026 is not, because the function must run on every row. Keep the column bare and transform the constant instead.",
          related: ["Sargability", "Indexes"]
        },
        {
          difficulty: "medium",
          question: "What does COMMIT do?",
          options: {
            A: "Makes all changes in the transaction permanent and visible to others",
            B: "Undoes changes",
            C: "Starts a transaction",
            D: "Creates a backup"
          },
          answer: "A",
          explanation: "After COMMIT the changes are durable (survive a crash) and other transactions can see them. Before COMMIT, the work is provisional and can be rolled back.",
          related: ["COMMIT", "Durability"]
        },
        {
          difficulty: "hard",
          question: "What is optimistic vs pessimistic locking?",
          options: {
            A: "Pessimistic locks rows upfront to prevent conflicts; optimistic checks for conflicts at commit (e.g. a version column)",
            B: "They are the same",
            C: "Optimistic locks everything",
            D: "Neither involves locks"
          },
          answer: "A",
          explanation: "Pessimistic (SELECT ... FOR UPDATE) suits high-contention writes. Optimistic (compare a version/timestamp on update) suits low contention and avoids holding locks - common in web apps.",
          related: ["Locking", "Concurrency"]
        },
        {
          difficulty: "medium",
          question: "What does an index NOT help with?",
          options: {
            A: "Queries that must read most rows anyway, or conditions that wrap the column in a function",
            B: "Equality lookups",
            C: "Range scans",
            D: "Joins on the indexed column"
          },
          answer: "A",
          explanation: "If a query returns a large fraction of the table, a scan is cheaper than an index. And functions on the column (non-sargable conditions) prevent index use entirely.",
          related: ["Index limits", "Sargability"]
        },
        {
          difficulty: "hard",
          question: "What is index selectivity?",
          options: {
            A: "How many distinct values a column has - high selectivity (many distinct values) makes an index effective",
            B: "The index size",
            C: "The number of rows",
            D: "The column order"
          },
          answer: "A",
          explanation: "An index on a boolean (2 values) is rarely useful because each value matches half the table. An index on email (near-unique) is highly selective and very effective.",
          related: ["Selectivity", "Index effectiveness"]
        },
        {
          difficulty: "medium",
          question: "How do you remove an index?",
          options: {
            A: "DROP INDEX idx_name;",
            B: "DELETE INDEX",
            C: "REMOVE INDEX",
            D: "Indexes cannot be removed"
          },
          answer: "A",
          explanation: "DROP INDEX removes an index that is unused or hurting write performance. Some databases require the table name: DROP INDEX idx_name ON table.",
          related: ["DROP INDEX"]
        },
        {
          difficulty: "hard",
          question: "What is the durability guarantee in ACID?",
          options: {
            A: "Once a transaction commits, its changes survive crashes and power loss (written to durable storage)",
            B: "Data is deleted safely",
            C: "Queries run fast",
            D: "Backups happen automatically"
          },
          answer: "A",
          explanation: "Durability is typically achieved via a write-ahead log: changes are logged to disk before COMMIT returns, so recovery can replay them after a crash. A committed transaction is never lost.",
          related: ["Durability", "Write-ahead log"]
        }
      ]
    }
  ]
});
