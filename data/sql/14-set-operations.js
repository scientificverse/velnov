/* ============================================================
   SQL - TOPIC 14: SET OPERATIONS (UNION, INTERSECT, EXCEPT) (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "SQL",
  icon: "🗄️",
  color: "#0f80cc",
  description: "Databases from basics to window functions - 20 topics.",
  topics: [
    {
      name: "14. Set Operations",
      questions: [
        {
          difficulty: "easy",
          question: "What does UNION do?",
          options: {
            A: "Combines the rows of two queries into one result, REMOVING duplicates",
            B: "Joins two tables side by side",
            C: "Multiplies rows",
            D: "Filters rows"
          },
          answer: "A",
          explanation: "UNION stacks result sets vertically (adding rows) and removes duplicates. JOIN, by contrast, combines tables horizontally (adding columns).",
          code: "SELECT city FROM customers\nUNION\nSELECT city FROM suppliers;",
          related: ["UNION", "Set operations"]
        },
        {
          difficulty: "easy",
          question: "What is the difference between UNION and UNION ALL?",
          options: {
            A: "UNION removes duplicates; UNION ALL keeps ALL rows including duplicates (and is faster)",
            B: "They are identical",
            C: "UNION ALL removes duplicates",
            D: "UNION is faster"
          },
          answer: "A",
          explanation: "UNION does an extra de-duplication pass, which costs time. If you know there are no duplicates (or want them), UNION ALL is faster and preferred.",
          related: ["UNION ALL", "Performance"]
        },
        {
          difficulty: "medium",
          question: "What must be true for two queries to be combined with UNION?",
          options: {
            A: "They must have the SAME number of columns, in compatible data types and order",
            B: "They must query the same table",
            C: "They must have the same column names",
            D: "Nothing"
          },
          answer: "A",
          explanation: "UNION aligns columns by POSITION, not name. Column 1 of both queries must be type-compatible, and so on. The result uses the first query's column names.",
          related: ["UNION", "Compatibility"]
        },
        {
          difficulty: "hard",
          question: "Where does ORDER BY go in a UNION query?",
          options: {
            A: "At the very END, after the last SELECT - it sorts the combined result",
            B: "In each SELECT",
            C: "Before UNION",
            D: "ORDER BY is not allowed"
          },
          answer: "A",
          explanation: "A single ORDER BY at the end applies to the whole union. Putting it inside an individual SELECT is either an error or ignored, since the union reorders everything anyway.",
          code: "SELECT name, 'customer' AS type FROM customers\nUNION ALL\nSELECT name, 'supplier' FROM suppliers\nORDER BY name;",
          related: ["UNION", "ORDER BY"]
        },
        {
          difficulty: "medium",
          question: "What does INTERSECT return?",
          options: {
            A: "Only rows that appear in BOTH queries",
            B: "All rows from both",
            C: "Rows in the first but not the second",
            D: "Nothing"
          },
          answer: "A",
          explanation: "INTERSECT is the overlap - customers who are also suppliers, for example. Like UNION, it removes duplicates by default.",
          code: "SELECT email FROM customers\nINTERSECT\nSELECT email FROM newsletter_subscribers;",
          related: ["INTERSECT", "Overlap"]
        },
        {
          difficulty: "medium",
          question: "What does EXCEPT (or MINUS in Oracle) return?",
          options: {
            A: "Rows in the FIRST query that are NOT in the second",
            B: "Rows in both",
            C: "All rows",
            D: "Rows in the second only"
          },
          answer: "A",
          explanation: "EXCEPT is set difference. Customers who never subscribed = customers EXCEPT subscribers. Oracle spells it MINUS; the meaning is identical.",
          code: "SELECT email FROM customers\nEXCEPT\nSELECT email FROM unsubscribed;",
          related: ["EXCEPT", "MINUS", "Set difference"]
        },
        {
          difficulty: "hard",
          question: "Is EXCEPT symmetric - does A EXCEPT B equal B EXCEPT A?",
          options: {
            A: "No - order matters; A EXCEPT B keeps A's extras, B EXCEPT A keeps B's extras",
            B: "Yes, always symmetric",
            C: "Only for numbers",
            D: "They both return everything"
          },
          answer: "A",
          explanation: "Set difference is directional, unlike UNION and INTERSECT which are symmetric. Choose the order based on which side's unmatched rows you want.",
          related: ["EXCEPT", "Direction"]
        },
        {
          difficulty: "medium",
          question: "How does UNION handle the column NAMES of the result?",
          options: {
            A: "It uses the column names (or aliases) from the FIRST SELECT",
            B: "It combines both names",
            C: "It uses the second query's names",
            D: "Columns become unnamed"
          },
          answer: "A",
          explanation: "Only the first query's names (or aliases) appear in the output. Alias the first query's columns to control the result headers.",
          related: ["UNION", "Column names"]
        },
        {
          difficulty: "hard",
          question: "Why might UNION ALL be preferred even when duplicates are possible?",
          options: {
            A: "It avoids the costly de-duplication sort; if downstream logic handles duplicates, it is faster",
            B: "It is always wrong",
            C: "It removes more duplicates",
            D: "It sorts automatically"
          },
          answer: "A",
          explanation: "On large data the distinct pass of UNION is expensive. When you know rows are unique (e.g. non-overlapping date ranges), UNION ALL gives the same result faster.",
          related: ["UNION ALL", "Performance"]
        },
        {
          difficulty: "medium",
          question: "How do you tag which query each row came from in a UNION?",
          options: {
            A: "Add a literal column: SELECT name, 'A' AS source ... UNION ALL SELECT name, 'B' ...",
            B: "It is automatic",
            C: "Use GROUP BY",
            D: "It cannot be done"
          },
          answer: "A",
          explanation: "A constant column labels the origin of each row - very useful when merging similar data from different sources into one list.",
          related: ["UNION", "Literals"]
        },
        {
          difficulty: "hard",
          question: "What is the precedence between INTERSECT and UNION when combined?",
          options: {
            A: "INTERSECT binds tighter than UNION/EXCEPT - use parentheses to be explicit",
            B: "UNION binds tighter",
            C: "They are equal, left to right",
            D: "You cannot combine them"
          },
          answer: "A",
          explanation: "In standard SQL INTERSECT has higher precedence, so A UNION B INTERSECT C means A UNION (B INTERSECT C). Parentheses remove any doubt and improve readability.",
          related: ["Precedence", "Set operations"]
        },
        {
          difficulty: "medium",
          question: "Can you UNION more than two queries?",
          options: {
            A: "Yes - chain them: SELECT ... UNION SELECT ... UNION SELECT ...",
            B: "No, only two",
            C: "Only with ALL",
            D: "Only three"
          },
          answer: "A",
          explanation: "Any number of compatible queries can be unioned. Each must have the same column count and compatible types.",
          related: ["UNION", "Chaining"]
        },
        {
          difficulty: "hard",
          question: "When would you use UNION instead of a JOIN?",
          options: {
            A: "When STACKING similar rows from different sources (adding rows), not correlating tables (adding columns)",
            B: "They are interchangeable",
            C: "UNION is always better",
            D: "Never use UNION"
          },
          answer: "A",
          explanation: "JOIN answers 'what related data goes with this row?'. UNION answers 'combine these two lists into one'. Choosing the right one starts with whether you need more columns or more rows.",
          related: ["UNION vs JOIN"]
        },
        {
          difficulty: "medium",
          question: "What happens if the two queries have different column COUNTS?",
          options: {
            A: "An error - 'each UNION query must have the same number of columns'",
            B: "Missing columns become NULL",
            C: "Extra columns are dropped",
            D: "It works anyway"
          },
          answer: "A",
          explanation: "The counts must match exactly. If one query lacks a column, add a placeholder like NULL AS missing_col or a constant to line them up.",
          related: ["UNION", "Errors"]
        },
        {
          difficulty: "hard",
          question: "How do you find values in table A that are NOT in table B, using set operations?",
          options: {
            A: "SELECT x FROM A EXCEPT SELECT x FROM B",
            B: "A INTERSECT B",
            C: "A UNION B",
            D: "A JOIN B"
          },
          answer: "A",
          explanation: "EXCEPT is the direct set-difference tool. Alternatives include LEFT JOIN ... IS NULL and NOT EXISTS, which can be faster and handle multiple columns more flexibly.",
          related: ["EXCEPT", "Anti-join"]
        },
        {
          difficulty: "medium",
          question: "Does INTERSECT remove duplicates?",
          options: {
            A: "Yes - like UNION, it returns distinct rows (INTERSECT ALL keeps duplicates where supported)",
            B: "No, it keeps all",
            C: "Only for text",
            D: "It errors on duplicates"
          },
          answer: "A",
          explanation: "The set operators default to distinct results. Some databases offer INTERSECT ALL and EXCEPT ALL to preserve duplicate multiplicities.",
          related: ["INTERSECT", "Duplicates"]
        },
        {
          difficulty: "hard",
          question: "How do set operations treat NULLs when deciding if rows are equal?",
          options: {
            A: "They treat two NULLs as the SAME (unlike = comparisons), so duplicate NULL rows collapse",
            B: "NULLs are always different",
            C: "NULLs are removed",
            D: "It errors"
          },
          answer: "A",
          explanation: "Set operations use 'not distinct' semantics: NULL matches NULL for de-duplication and intersection. This differs from the WHERE clause, where NULL = NULL is UNKNOWN.",
          related: ["NULL", "Set operations"]
        },
        {
          difficulty: "medium",
          question: "What is a practical use of UNION ALL with literals?",
          options: {
            A: "Building a small fixed list of values inline without creating a table",
            B: "Deleting rows",
            C: "Indexing",
            D: "Sorting"
          },
          answer: "A",
          explanation: "SELECT 'S' UNION ALL SELECT 'M' UNION ALL SELECT 'L' creates a quick lookup set. (Modern SQL also offers VALUES lists for this.)",
          code: "SELECT * FROM (VALUES ('S'),('M'),('L')) AS sizes(label);",
          related: ["UNION ALL", "VALUES"]
        },
        {
          difficulty: "hard",
          question: "Why does data-type compatibility matter in UNION?",
          options: {
            A: "Corresponding columns are merged, so mixing e.g. a number and a date causes an error or implicit conversion",
            B: "It does not matter",
            C: "Types are ignored",
            D: "Only names matter"
          },
          answer: "A",
          explanation: "Each output column takes a single type derived from both inputs. Incompatible types (text vs date) either fail or coerce unexpectedly - align them with CAST.",
          related: ["Type compatibility", "CAST"]
        },
        {
          difficulty: "medium",
          question: "How do you combine two monthly report queries into one result?",
          options: {
            A: "UNION ALL the two SELECTs (rows are distinct by month, so no dedup needed)",
            B: "JOIN them",
            C: "INTERSECT them",
            D: "CROSS JOIN them"
          },
          answer: "A",
          explanation: "When each query returns non-overlapping rows, UNION ALL simply stacks them efficiently. Add a month label column to distinguish the segments.",
          related: ["UNION ALL", "Reporting"]
        },
        {
          difficulty: "hard",
          question: "What is the row count of 'SELECT 1 UNION SELECT 1 UNION ALL SELECT 1'?",
          options: {
            A: "2 - the first UNION dedups to one, then UNION ALL adds another",
            B: "3",
            C: "1",
            D: "An error"
          },
          answer: "A",
          explanation: "Evaluated left to right: SELECT 1 UNION SELECT 1 gives one row, then UNION ALL SELECT 1 appends a duplicate, giving two. Mixing UNION and UNION ALL requires care.",
          related: ["UNION", "UNION ALL"]
        },
        {
          difficulty: "medium",
          question: "Can you apply LIMIT to a UNION result?",
          options: {
            A: "Yes - a LIMIT (with ORDER BY) at the end applies to the combined result",
            B: "No, LIMIT is forbidden",
            C: "Only in each SELECT",
            D: "Only with INTERSECT"
          },
          answer: "A",
          explanation: "Place ORDER BY and LIMIT after the final query to page the whole union. To limit an individual branch, wrap that SELECT in a subquery.",
          related: ["UNION", "LIMIT"]
        },
        {
          difficulty: "hard",
          question: "How would you find emails common to two lists AND unique to the first, in one query set?",
          options: {
            A: "Use INTERSECT for the common ones and EXCEPT for the unique ones (as separate queries or combined with care)",
            B: "One UNION does it",
            C: "A single JOIN",
            D: "It is impossible"
          },
          answer: "A",
          explanation: "INTERSECT gives the overlap; EXCEPT gives list-one-only. Set operators are a clean vocabulary for these membership questions, complementing joins.",
          related: ["INTERSECT", "EXCEPT"]
        },
        {
          difficulty: "medium",
          question: "Do the queries in a UNION need matching WHERE clauses?",
          options: {
            A: "No - each SELECT can have completely different logic, as long as the output columns line up",
            B: "Yes, identical WHERE",
            C: "They must query one table",
            D: "WHERE is not allowed"
          },
          answer: "A",
          explanation: "The branches are independent queries; only their output shape must match. This flexibility lets you merge quite different selections into one list.",
          related: ["UNION", "Flexibility"]
        },
        {
          difficulty: "hard",
          question: "What is a performance advantage of EXCEPT/INTERSECT over equivalent joins?",
          options: {
            A: "They express set logic concisely and can be optimised well - though NOT EXISTS/LEFT JOIN are sometimes faster on large indexed data",
            B: "They are always fastest",
            C: "They never use indexes",
            D: "There is no difference ever"
          },
          answer: "A",
          explanation: "Set operators are readable for whole-row membership tests. For large tables, benchmark against NOT EXISTS and anti-joins, which can leverage indexes more directly.",
          related: ["Performance", "EXCEPT"]
        },
        {
          difficulty: "medium",
          question: "How do you deduplicate a combined list of tags from two tables?",
          options: {
            A: "SELECT tag FROM a UNION SELECT tag FROM b  (UNION removes duplicates)",
            B: "UNION ALL",
            C: "JOIN a and b",
            D: "CROSS JOIN"
          },
          answer: "A",
          explanation: "Plain UNION is exactly the tool for a distinct merged list. Use UNION ALL only if you deliberately want to keep the repeats.",
          related: ["UNION", "Deduplication"]
        },
        {
          difficulty: "hard",
          question: "Why must you sometimes wrap a UNION in a subquery?",
          options: {
            A: "To apply further operations (GROUP BY, JOIN, additional filtering) to the combined result as a whole",
            B: "UNION cannot be used otherwise",
            C: "For syntax reasons only",
            D: "You never need to"
          },
          answer: "A",
          explanation: "A UNION is a single result set; to aggregate or join it, place it in a subquery or CTE: SELECT type, COUNT(*) FROM (SELECT ... UNION ALL ...) t GROUP BY type.",
          related: ["Subqueries", "UNION"]
        },
        {
          difficulty: "medium",
          question: "Which set operation answers 'who is in both group A and group B'?",
          options: {
            A: "INTERSECT",
            B: "UNION",
            C: "EXCEPT",
            D: "CROSS JOIN"
          },
          answer: "A",
          explanation: "INTERSECT returns the common membership. UNION would give everyone in either group, and EXCEPT gives those in one but not the other.",
          related: ["INTERSECT", "Membership"]
        },
        {
          difficulty: "hard",
          question: "What is the safest way to ensure UNION columns align correctly?",
          options: {
            A: "Explicitly list and, if needed, CAST each column in both queries in the same order",
            B: "Use SELECT * in both",
            C: "Rely on column names matching",
            D: "Add extra columns"
          },
          answer: "A",
          explanation: "SELECT * across differently structured tables is fragile - column order or count can drift. Naming (and casting) columns makes the alignment explicit and change-proof.",
          related: ["UNION", "Best practices"]
        },
        {
          difficulty: "medium",
          question: "Which set operation combines two result sets and keeps duplicates for maximum speed?",
          options: {
            A: "UNION ALL",
            B: "UNION",
            C: "INTERSECT",
            D: "EXCEPT"
          },
          answer: "A",
          explanation: "UNION ALL simply appends the second result to the first with no de-duplication pass, so it is the fastest way to stack rows. Use plain UNION only when you actually need to remove duplicates.",
          related: ["UNION ALL", "Performance"]
        }
      ]
    }
  ]
});
