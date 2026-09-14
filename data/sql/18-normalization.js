/* ============================================================
   SQL - TOPIC 18: NORMALIZATION & DATABASE DESIGN (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "SQL",
  icon: "🗄️",
  color: "#0f80cc",
  description: "Databases from basics to window functions - 20 topics.",
  topics: [
    {
      name: "18. Normalization & Design",
      questions: [
        {
          difficulty: "medium",
          question: "What is normalization?",
          options: {
            A: "Organising tables to reduce redundancy and prevent update anomalies",
            B: "Making all values lowercase",
            C: "Sorting data",
            D: "Backing up the database"
          },
          answer: "A",
          explanation: "Normalization splits data into related tables so each fact is stored once. This avoids duplication and the inconsistencies that arise when the same fact lives in many places.",
          related: ["Normalization", "Design"]
        },
        {
          difficulty: "medium",
          question: "What is a data redundancy problem?",
          options: {
            A: "The same information stored in multiple places, risking inconsistency when one copy changes",
            B: "Too many tables",
            C: "Missing indexes",
            D: "Slow queries"
          },
          answer: "A",
          explanation: "If a customer's address is copied into every order row, changing it means updating many rows - and missing one leaves conflicting data. Normalization stores it once.",
          related: ["Redundancy", "Anomalies"]
        },
        {
          difficulty: "hard",
          question: "What are update, insert and delete anomalies?",
          options: {
            A: "Problems from redundancy: updating misses copies, you cannot insert data without unrelated data, and deleting loses needed facts",
            B: "Syntax errors",
            C: "Index failures",
            D: "Types of joins"
          },
          answer: "A",
          explanation: "For example, if course info lives only in enrolment rows, deleting the last enrolment erases the course entirely (delete anomaly). Normalization prevents these.",
          related: ["Anomalies", "Normalization"]
        },
        {
          difficulty: "medium",
          question: "What does First Normal Form (1NF) require?",
          options: {
            A: "Atomic (indivisible) values - no repeating groups or multiple values in one cell",
            B: "A primary key only",
            C: "No foreign keys",
            D: "All numeric columns"
          },
          answer: "A",
          explanation: "1NF forbids storing '555-1234, 555-5678' in one phone column, or columns like phone1, phone2, phone3. Each cell holds one value; repeating data moves to its own table.",
          related: ["1NF", "Atomicity"]
        },
        {
          difficulty: "hard",
          question: "What does Second Normal Form (2NF) address?",
          options: {
            A: "Removing partial dependencies - non-key columns must depend on the WHOLE composite key, not part of it",
            B: "Removing all keys",
            C: "Making columns unique",
            D: "Adding indexes"
          },
          answer: "A",
          explanation: "2NF applies when the primary key is composite. If a column depends on only part of the key (e.g. product_name depends on product_id alone in an order_items table), it belongs in a separate table.",
          related: ["2NF", "Partial dependency"]
        },
        {
          difficulty: "hard",
          question: "What does Third Normal Form (3NF) address?",
          options: {
            A: "Removing transitive dependencies - non-key columns must not depend on OTHER non-key columns",
            B: "Removing the primary key",
            C: "Combining tables",
            D: "Adding redundancy"
          },
          answer: "A",
          explanation: "If a table has employee_id (key), dept_id, and dept_name, then dept_name depends on dept_id (a non-key), not directly on the key. 3NF moves department data to a departments table.",
          related: ["3NF", "Transitive dependency"]
        },
        {
          difficulty: "medium",
          question: "A common summary of 3NF is 'every non-key column depends on...'",
          options: {
            A: "the key, the whole key, and nothing but the key",
            B: "any column",
            C: "the first column",
            D: "no columns"
          },
          answer: "A",
          explanation: "This memorable phrase captures 1NF (atomic, tied to the key), 2NF (the WHOLE key), and 3NF (NOTHING BUT the key). It is a handy design checklist.",
          related: ["3NF", "Design rule"]
        },
        {
          difficulty: "medium",
          question: "What is denormalization?",
          options: {
            A: "Deliberately adding redundancy back to improve read performance, accepting the update cost",
            B: "A design mistake always",
            C: "Removing all tables",
            D: "The same as normalization"
          },
          answer: "A",
          explanation: "Sometimes storing a pre-computed total or a duplicated label speeds up heavy read workloads (reporting, analytics). It trades write complexity and consistency risk for read speed.",
          related: ["Denormalization", "Performance"]
        },
        {
          difficulty: "hard",
          question: "When is denormalization justified?",
          options: {
            A: "For read-heavy analytics/reporting where join cost is high and data changes rarely",
            B: "Always - normalization is bad",
            C: "Never",
            D: "Only for small tables"
          },
          answer: "A",
          explanation: "Data warehouses often denormalize into star schemas for fast aggregation. For transactional systems that change constantly, normalized designs remain safer. It is a deliberate trade-off, not a default.",
          related: ["Denormalization", "Data warehouse"]
        },
        {
          difficulty: "medium",
          question: "What is an ER (Entity-Relationship) diagram?",
          options: {
            A: "A visual model of entities (tables), their attributes, and the relationships between them",
            B: "A query plan",
            C: "An index structure",
            D: "A backup format"
          },
          answer: "A",
          explanation: "ER diagrams are the blueprint for a schema: boxes for entities, lines for relationships (one-to-many, many-to-many), and crow's-foot notation for cardinality. Design before you build.",
          related: ["ER diagram", "Modelling"]
        },
        {
          difficulty: "medium",
          question: "How is a one-to-many relationship implemented?",
          options: {
            A: "Put a foreign key on the MANY side referencing the ONE side",
            B: "A junction table",
            C: "Two primary keys",
            D: "Duplicate the data"
          },
          answer: "A",
          explanation: "One customer has many orders, so orders.customer_id references customers.id. The foreign key lives on the many side - the most common relationship in databases.",
          related: ["One-to-many", "Foreign keys"]
        },
        {
          difficulty: "hard",
          question: "How is a many-to-many relationship implemented?",
          options: {
            A: "With a junction (bridge) table holding foreign keys to both sides",
            B: "With one foreign key",
            C: "By duplicating rows",
            D: "It cannot be modelled"
          },
          answer: "A",
          explanation: "Students and courses: an enrollments table links them, with student_id and course_id. It resolves the many-to-many into two one-to-many relationships and can carry extra data like a grade.",
          related: ["Many-to-many", "Junction table"]
        },
        {
          difficulty: "medium",
          question: "How is a one-to-one relationship typically implemented?",
          options: {
            A: "A shared/foreign key with a UNIQUE constraint, or by merging into one table",
            B: "A junction table",
            C: "Two separate databases",
            D: "It is impossible"
          },
          answer: "A",
          explanation: "One-to-one splits optional or sensitive attributes (e.g. a user and their extended profile) into a second table sharing the key, enforced UNIQUE. Often the data could just live in one table.",
          related: ["One-to-one", "UNIQUE"]
        },
        {
          difficulty: "hard",
          question: "What is a lookup (reference) table?",
          options: {
            A: "A small table of allowed values (e.g. statuses, categories) referenced by foreign key",
            B: "A backup table",
            C: "A temporary table",
            D: "An index"
          },
          answer: "A",
          explanation: "Instead of repeating 'pending'/'shipped' text everywhere, store them once in a statuses table and reference by id. This enforces valid values and makes renaming a status a one-row change.",
          related: ["Lookup table", "Normalization"]
        },
        {
          difficulty: "medium",
          question: "What is a surrogate key in design terms?",
          options: {
            A: "An artificial identifier (like an auto-increment id) with no business meaning, used as the primary key",
            B: "A natural business value",
            C: "A foreign key",
            D: "An index"
          },
          answer: "A",
          explanation: "Surrogate keys are stable (they never change) and simple, which is why most designs use them. Natural keys carry meaning but can change, complicating references.",
          related: ["Surrogate key", "Primary key"]
        },
        {
          difficulty: "hard",
          question: "Why can columns like phone1, phone2, phone3 be a design smell?",
          options: {
            A: "They violate 1NF and cap the number of phones; a separate phones table scales cleanly",
            B: "They are always correct",
            C: "They save space",
            D: "They speed up queries"
          },
          answer: "A",
          explanation: "Repeating-group columns force a fixed maximum and make queries awkward ('find anyone with this number' must check three columns). A related phones table (one row per number) is the normalized solution.",
          related: ["1NF", "Repeating groups"]
        },
        {
          difficulty: "medium",
          question: "What is cardinality in a relationship?",
          options: {
            A: "How many rows on one side relate to rows on the other (one-to-one, one-to-many, many-to-many)",
            B: "The number of columns",
            C: "The table size",
            D: "The index depth"
          },
          answer: "A",
          explanation: "Cardinality describes the relationship's shape and drives how you implement it (foreign key placement, junction tables). ER diagrams annotate it with crow's-foot symbols.",
          related: ["Cardinality", "ER diagram"]
        },
        {
          difficulty: "hard",
          question: "What is a functional dependency?",
          options: {
            A: "When one column's value determines another's - e.g. zip_code determines city",
            B: "A type of function",
            C: "A foreign key",
            D: "An index"
          },
          answer: "A",
          explanation: "Functional dependencies are the theory behind normal forms. If A determines B but A is not a key, B usually belongs in a table keyed by A - the essence of 3NF.",
          related: ["Functional dependency", "3NF"]
        },
        {
          difficulty: "medium",
          question: "What problem does normalization solve when a customer changes address?",
          options: {
            A: "The address is stored once, so a single UPDATE fixes it everywhere - no missed copies",
            B: "It makes the address unchangeable",
            C: "It duplicates the address",
            D: "Nothing"
          },
          answer: "A",
          explanation: "In a denormalized design the address might be copied into every order. Normalized, it lives in one customer row, so one update keeps all data consistent.",
          related: ["Update anomaly", "Single source of truth"]
        },
        {
          difficulty: "hard",
          question: "What is BCNF (Boyce-Codd Normal Form)?",
          options: {
            A: "A stronger 3NF: every determinant must be a candidate key",
            B: "Weaker than 1NF",
            C: "The same as 2NF",
            D: "About indexes"
          },
          answer: "A",
          explanation: "BCNF handles edge cases 3NF misses, involving overlapping candidate keys. Most practical designs that reach 3NF are also in BCNF; it matters mainly in complex schemas.",
          related: ["BCNF", "Normal forms"]
        },
        {
          difficulty: "medium",
          question: "What is a star schema?",
          options: {
            A: "A denormalized analytics design: a central fact table linked to dimension tables",
            B: "A fully normalized design",
            C: "A backup strategy",
            D: "An index type"
          },
          answer: "A",
          explanation: "Data warehouses use star schemas: a fact table (sales) surrounded by dimensions (date, product, store). Deliberately denormalized for fast aggregation, unlike transactional 3NF designs.",
          related: ["Star schema", "Data warehouse"]
        },
        {
          difficulty: "hard",
          question: "What is the main trade-off of a highly normalized design?",
          options: {
            A: "Less redundancy and safer writes, but more joins - which can slow complex read queries",
            B: "It is always faster",
            C: "It uses more storage",
            D: "It has no downsides"
          },
          answer: "A",
          explanation: "Normalization optimises for correctness and write integrity. Read-heavy analytical workloads sometimes denormalize to avoid many joins - a conscious balance between the two goals.",
          related: ["Trade-offs", "Joins"]
        },
        {
          difficulty: "medium",
          question: "Where should a derived value like order total ideally live?",
          options: {
            A: "Usually computed on read (SUM of items) to avoid it going stale - or stored/cached deliberately for performance",
            B: "Always duplicated in every row",
            C: "In a text file",
            D: "It cannot be stored"
          },
          answer: "A",
          explanation: "Storing a total risks it drifting out of sync with the items. Computing it on demand keeps it correct; caching it (with careful maintenance) is a performance-driven denormalization.",
          related: ["Derived data", "Denormalization"]
        },
        {
          difficulty: "hard",
          question: "How do you decide how far to normalize?",
          options: {
            A: "Aim for 3NF by default, then denormalize selectively where measured performance requires it",
            B: "Always go to the highest normal form",
            C: "Never normalize",
            D: "Randomly"
          },
          answer: "A",
          explanation: "3NF is the practical sweet spot for most transactional systems: enough to prevent anomalies without excessive joins. Denormalize only with evidence that it helps a specific workload.",
          related: ["Design strategy", "3NF"]
        },
        {
          difficulty: "medium",
          question: "What is referential integrity's role in design?",
          options: {
            A: "It guarantees relationships stay valid - foreign keys always point to existing rows",
            B: "It sorts the data",
            C: "It compresses tables",
            D: "It has no role"
          },
          answer: "A",
          explanation: "Enforced by foreign keys, it prevents orphan records (an order for a deleted customer). It is a cornerstone of trustworthy relational data.",
          related: ["Referential integrity", "Foreign keys"]
        },
        {
          difficulty: "hard",
          question: "What is an associative entity?",
          options: {
            A: "Another name for a junction table - it represents the relationship itself and can hold its own attributes",
            B: "A primary key",
            C: "A view",
            D: "An index"
          },
          answer: "A",
          explanation: "The enrollments table between students and courses is an associative entity: it exists because of the relationship and can store attributes about it, like enrolment date and grade.",
          related: ["Associative entity", "Junction table"]
        },
        {
          difficulty: "medium",
          question: "Why store status codes in a lookup table rather than free text?",
          options: {
            A: "It enforces a fixed set of valid values and lets you rename or add statuses in one place",
            B: "It uses more space",
            C: "It is slower",
            D: "There is no benefit"
          },
          answer: "A",
          explanation: "Free text invites typos ('shpped', 'Shipped', 'SHIPPED') that fragment reports. A lookup table with a foreign key guarantees consistency and central control.",
          related: ["Lookup table", "Data quality"]
        },
        {
          difficulty: "hard",
          question: "What design issue does a NULL-heavy table often reveal?",
          options: {
            A: "Attributes that apply to only some rows may belong in a separate related table (subtype)",
            B: "The table is too small",
            C: "Missing indexes",
            D: "Nothing"
          },
          answer: "A",
          explanation: "If many columns are NULL for most rows (e.g. car-specific fields in a generic products table), those attributes likely belong to a subtype table linked by key - a cleaner, more normalized model.",
          related: ["NULL", "Subtypes", "Design"]
        },
        {
          difficulty: "medium",
          question: "What is the single source of truth principle?",
          options: {
            A: "Each fact is stored in exactly ONE place, so it is always consistent",
            B: "One table per database",
            C: "One user per row",
            D: "One index per table"
          },
          answer: "A",
          explanation: "Normalization implements this principle. When a fact lives in one place, it cannot contradict itself - the core reason normalized designs are trustworthy.",
          related: ["Single source of truth", "Normalization"]
        },
        {
          difficulty: "hard",
          question: "Why model the schema (ER diagram) BEFORE writing CREATE TABLE?",
          options: {
            A: "Relationships and keys are hard to change once data exists; a clear model prevents costly restructuring later",
            B: "It is required syntax",
            C: "It makes queries run faster",
            D: "There is no reason"
          },
          answer: "A",
          explanation: "Schema changes on populated production tables are risky and slow. Designing entities, keys and relationships upfront catches mistakes while they are cheap to fix.",
          related: ["ER diagram", "Planning"]
        }
      ]
    }
  ]
});
