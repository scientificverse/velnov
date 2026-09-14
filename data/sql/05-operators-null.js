/* ============================================================
   SQL - TOPIC 5: OPERATORS, NULL & PATTERN MATCHING (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "SQL",
  icon: "🗄️",
  color: "#0f80cc",
  description: "Databases from basics to window functions - 20 topics.",
  topics: [
    {
      name: "5. Operators, NULL & Patterns",
      questions: [
        {
          difficulty: "medium",
          question: "What does NULL represent in SQL?",
          options: {
            A: "An UNKNOWN or missing value - not zero, not an empty string, not false",
            B: "The number zero",
            C: "An empty string",
            D: "A deleted row"
          },
          answer: "A",
          explanation: "NULL means 'we do not know'. That is why arithmetic and comparisons involving NULL produce NULL rather than a definite answer.",
          related: ["NULL", "Missing data"]
        },
        {
          difficulty: "hard",
          question: "What is the result of 100 + NULL?",
          options: {
            A: "NULL - any arithmetic with NULL yields NULL",
            B: "100",
            C: "0",
            D: "An error"
          },
          answer: "A",
          explanation: "Unknown plus anything is still unknown. This silently propagates: a single NULL bonus can turn a computed total salary into NULL. Use COALESCE to substitute a default.",
          code: "SELECT salary + COALESCE(bonus, 0) AS total FROM staff;",
          related: ["NULL", "COALESCE"]
        },
        {
          difficulty: "medium",
          question: "What does COALESCE(a, b, c) return?",
          options: {
            A: "The FIRST non-NULL value among its arguments",
            B: "The sum of all values",
            C: "Always the first argument",
            D: "NULL if any argument is NULL"
          },
          answer: "A",
          explanation: "COALESCE is the standard way to supply fallbacks: COALESCE(nickname, first_name, 'Guest'). It accepts any number of arguments.",
          related: ["COALESCE", "Defaults"]
        },
        {
          difficulty: "medium",
          question: "What does IFNULL(x, 0) / ISNULL(x, 0) / NVL(x, 0) do?",
          options: {
            A: "Returns 0 when x is NULL - the two-argument, dialect-specific version of COALESCE",
            B: "Tests whether x is NULL",
            C: "Deletes NULLs",
            D: "Counts NULLs"
          },
          answer: "A",
          explanation: "IFNULL is MySQL, ISNULL is SQL Server, NVL is Oracle. COALESCE works everywhere and is preferred for portable code.",
          related: ["COALESCE", "Dialects"]
        },
        {
          difficulty: "hard",
          question: "What does NULLIF(a, b) return?",
          options: {
            A: "NULL if a equals b, otherwise a",
            B: "a if b is NULL",
            C: "The first non-NULL value",
            D: "TRUE or FALSE"
          },
          answer: "A",
          explanation: "Its classic use is avoiding division by zero: total / NULLIF(count, 0) yields NULL instead of raising an error.",
          code: "SELECT passed * 100.0 / NULLIF(total, 0) AS pct FROM stats;",
          related: ["NULLIF", "Division by zero"]
        },
        {
          difficulty: "hard",
          question: "Do aggregate functions like SUM and AVG include NULLs?",
          options: {
            A: "No - they IGNORE NULLs (which changes what AVG divides by)",
            B: "Yes, treating them as 0",
            C: "They return NULL if any value is NULL",
            D: "They throw an error"
          },
          answer: "A",
          explanation: "AVG(score) over values 10, 20, NULL is 15 (sum 30 divided by 2), not 10. If NULL should count as zero, write AVG(COALESCE(score, 0)).",
          notes: ["A very common source of subtly wrong reports."],
          related: ["Aggregates", "NULL", "AVG"]
        },
        {
          difficulty: "medium",
          question: "What does COUNT(*) do with NULL rows?",
          options: {
            A: "Counts every row, including rows full of NULLs",
            B: "Skips rows containing NULLs",
            C: "Returns NULL",
            D: "Errors"
          },
          answer: "A",
          explanation: "COUNT(*) counts rows; COUNT(column) counts non-NULL values in that column. The difference between them tells you how many values are missing.",
          related: ["COUNT", "NULL"]
        },
        {
          difficulty: "hard",
          question: "What does this return when some emails are NULL?\nSELECT COUNT(*) - COUNT(email) FROM users;",
          options: {
            A: "The number of users whose email IS NULL",
            B: "Zero always",
            C: "The total user count",
            D: "NULL"
          },
          answer: "A",
          explanation: "A neat idiom for counting missing values without a separate WHERE clause. Equivalent to COUNT(*) FILTER (WHERE email IS NULL) where supported.",
          related: ["COUNT", "Data quality"]
        },
        {
          difficulty: "medium",
          question: "How does DISTINCT treat multiple NULLs?",
          options: {
            A: "They collapse into ONE NULL in the result",
            B: "Each NULL is kept separately",
            C: "NULLs are removed",
            D: "It errors"
          },
          answer: "A",
          explanation: "For grouping and DISTINCT, NULLs are treated as 'the same unknown', even though NULL = NULL is not TRUE in comparisons. GROUP BY behaves the same way.",
          related: ["DISTINCT", "GROUP BY", "NULL"]
        },
        {
          difficulty: "medium",
          question: "Which pattern finds emails at gmail.com?",
          options: {
            A: "WHERE email LIKE '%@gmail.com'",
            B: "WHERE email = '%@gmail.com'",
            C: "WHERE email LIKE '@gmail.com'",
            D: "WHERE email CONTAINS 'gmail'"
          },
          answer: "A",
          explanation: "LIKE enables wildcards; = matches literally. The % before @gmail.com allows any username.",
          related: ["LIKE", "Wildcards"]
        },
        {
          difficulty: "hard",
          question: "How do you match a LITERAL percent sign with LIKE?",
          options: {
            A: "Use an escape character: LIKE '%50\\%%' ESCAPE '\\'",
            B: "Use double %%",
            C: "Put it in quotes",
            D: "It is impossible"
          },
          answer: "A",
          explanation: "Without escaping, % is a wildcard. The ESCAPE clause designates a character that makes the next symbol literal - needed when searching for discounts like '50%'.",
          related: ["LIKE", "ESCAPE"]
        },
        {
          difficulty: "medium",
          question: "What does ILIKE do (PostgreSQL)?",
          options: {
            A: "Case-INSENSITIVE pattern matching",
            B: "Inverted LIKE",
            C: "Integer LIKE",
            D: "Index-based LIKE"
          },
          answer: "A",
          explanation: "PostgreSQL is case-sensitive by default, so ILIKE 'a%' matches both 'Ana' and 'ana'. Portable alternative: LOWER(name) LIKE 'a%'.",
          related: ["ILIKE", "Case sensitivity"]
        },
        {
          difficulty: "medium",
          question: "What does NOT LIKE do?",
          options: {
            A: "Matches rows that do NOT fit the pattern",
            B: "Matches everything",
            C: "Is invalid",
            D: "Is the same as <>"
          },
          answer: "A",
          explanation: "Remember rows where the column is NULL are excluded by NOT LIKE too - NULL never matches or 'not matches'.",
          code: "WHERE email NOT LIKE '%@test.com'\n   OR email IS NULL;",
          related: ["NOT LIKE", "NULL"]
        },
        {
          difficulty: "hard",
          question: "What is the difference between BETWEEN and >= / <= ?",
          options: {
            A: "None functionally - BETWEEN is shorthand and is INCLUSIVE at both ends",
            B: "BETWEEN excludes the endpoints",
            C: "BETWEEN is faster",
            D: "BETWEEN only works on numbers"
          },
          answer: "A",
          explanation: "x BETWEEN 10 AND 20 is exactly x >= 10 AND x <= 20. For dates and timestamps the explicit form is safer because you can use a half-open range.",
          related: ["BETWEEN", "Ranges"]
        },
        {
          difficulty: "medium",
          question: "What does the modulo operator % (or MOD) return?",
          options: {
            A: "The remainder after division - useful for finding even/odd values",
            B: "A percentage",
            C: "A wildcard",
            D: "Multiplication"
          },
          answer: "A",
          explanation: "Note the same symbol is a wildcard inside LIKE but an arithmetic operator elsewhere. Oracle uses MOD(a, b).",
          code: "WHERE id % 2 = 0;   -- even ids",
          related: ["Arithmetic", "MOD"]
        },
        {
          difficulty: "hard",
          question: "What is integer division in SQL?\nSELECT 3 / 2;",
          options: {
            A: "In many databases it returns 1 - integer inputs give an integer result",
            B: "Always 1.5",
            C: "An error",
            D: "0"
          },
          answer: "A",
          explanation: "PostgreSQL and SQL Server truncate; MySQL returns 1.5. To be safe, force decimals: 3 * 1.0 / 2 or CAST(3 AS DECIMAL) / 2.",
          related: ["Division", "Type casting"]
        },
        {
          difficulty: "medium",
          question: "How do you convert a value's type?",
          options: {
            A: "CAST(value AS INTEGER) - or the shorthand value::INTEGER in PostgreSQL",
            B: "CONVERT_TYPE(value)",
            C: "TYPE(value, INT)",
            D: "Types cannot be converted"
          },
          answer: "A",
          explanation: "CAST is standard SQL. Casting matters when comparing or sorting values stored in the wrong type, e.g. numbers kept in a VARCHAR column.",
          code: "SELECT CAST('42' AS INTEGER) + 8;   -- 50",
          related: ["CAST", "Data types"]
        },
        {
          difficulty: "hard",
          question: "What does EXISTS test?",
          options: {
            A: "Whether a subquery returns AT LEAST ONE row - it returns TRUE/FALSE, not data",
            B: "Whether a table exists",
            C: "Whether a column is NULL",
            D: "Whether a value is in a list"
          },
          answer: "A",
          explanation: "EXISTS stops at the first matching row, so it is efficient. Unlike NOT IN, NOT EXISTS handles NULLs correctly - the safer choice for anti-joins.",
          code: "SELECT * FROM customers c\nWHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.id);",
          related: ["EXISTS", "Subqueries"]
        },
        {
          difficulty: "hard",
          question: "Why prefer NOT EXISTS over NOT IN?",
          options: {
            A: "NOT IN returns NO rows if the subquery contains any NULL; NOT EXISTS handles NULLs correctly",
            B: "NOT IN is invalid syntax",
            C: "NOT EXISTS is shorter",
            D: "They are identical"
          },
          answer: "A",
          explanation: "This silent-empty-result bug is a favourite interview topic. Either use NOT EXISTS, or add WHERE col IS NOT NULL inside the subquery.",
          related: ["NOT EXISTS", "NULL", "Gotchas"]
        },
        {
          difficulty: "medium",
          question: "What does ANY / SOME do?\nWHERE price > ANY (SELECT price FROM budget_items)",
          options: {
            A: "TRUE if the comparison holds for AT LEAST ONE value returned by the subquery",
            B: "TRUE only if it holds for all values",
            C: "Returns any random row",
            D: "Is invalid"
          },
          answer: "A",
          explanation: "> ANY means 'greater than the minimum'. Its counterpart ALL means the comparison must hold for every value, so > ALL means 'greater than the maximum'.",
          related: ["ANY", "ALL", "Subqueries"]
        },
        {
          difficulty: "hard",
          question: "What does > ALL (SELECT ...) mean?",
          options: {
            A: "Greater than EVERY returned value - i.e. greater than the maximum",
            B: "Greater than at least one",
            C: "Greater than the average",
            D: "Invalid syntax"
          },
          answer: "A",
          explanation: "Careful: if the subquery returns no rows, > ALL is TRUE by definition (vacuous truth), while > ANY would be FALSE.",
          related: ["ALL", "ANY"]
        },
        {
          difficulty: "medium",
          question: "How do you concatenate text in standard SQL?",
          options: {
            A: "first || ' ' || last  (or CONCAT(first, ' ', last))",
            B: "first + last everywhere",
            C: "first & last",
            D: "CONCATENATE(first, last)"
          },
          answer: "A",
          explanation: "|| is standard (PostgreSQL, Oracle, SQLite); SQL Server uses +; CONCAT works in most modern databases and often handles NULLs more gracefully.",
          related: ["Concatenation", "Dialects"]
        },
        {
          difficulty: "hard",
          question: "What happens with 'Hello' || NULL in most databases?",
          options: {
            A: "The result is NULL - concatenating with NULL wipes the whole string",
            B: "'Hello'",
            C: "'HelloNULL'",
            D: "An error"
          },
          answer: "A",
          explanation: "This is why full-name columns sometimes come out blank when a middle name is missing. CONCAT() in MySQL/SQL Server treats NULL as an empty string, or wrap values in COALESCE.",
          code: "SELECT first || ' ' || COALESCE(middle || ' ', '') || last AS full_name;",
          related: ["NULL", "Concatenation"]
        },
        {
          difficulty: "medium",
          question: "What does the CASE expression evaluate to when several WHEN conditions are true?",
          options: {
            A: "The result of the FIRST matching condition - evaluation stops there",
            B: "All matching results",
            C: "The last match",
            D: "An error"
          },
          answer: "A",
          explanation: "Like an if/else-if chain, order matters. Put the most specific conditions first, exactly as in the grade-boundary example.",
          related: ["CASE", "Order"]
        },
        {
          difficulty: "hard",
          question: "How do you count rows matching a condition WITHOUT a WHERE clause?",
          options: {
            A: "SUM(CASE WHEN condition THEN 1 ELSE 0 END)",
            B: "COUNT(condition)",
            C: "COUNT(*) WHERE condition",
            D: "It is impossible"
          },
          answer: "A",
          explanation: "This 'conditional aggregation' lets you compute several different counts in a single pass - the standard way to build summary reports.",
          code: "SELECT\n  COUNT(*) AS total,\n  SUM(CASE WHEN status='paid' THEN 1 ELSE 0 END) AS paid,\n  SUM(CASE WHEN status='due'  THEN 1 ELSE 0 END) AS due\nFROM invoices;",
          related: ["Conditional aggregation", "CASE"]
        },
        {
          difficulty: "hard",
          question: "Why does COUNT(CASE WHEN x THEN 1 END) work without ELSE?",
          options: {
            A: "Non-matching rows produce NULL, and COUNT ignores NULLs",
            B: "It counts zeros",
            C: "ELSE is required",
            D: "It errors"
          },
          answer: "A",
          explanation: "A neat alternative to SUM(...ELSE 0). Both are widely used; the COUNT version relies on NULL being skipped.",
          related: ["COUNT", "NULL", "CASE"]
        },
        {
          difficulty: "medium",
          question: "What does the IS NOT DISTINCT FROM operator do?",
          options: {
            A: "Compares two values treating NULL as equal to NULL",
            B: "The same as <>",
            C: "Tests data types",
            D: "Removes duplicates"
          },
          answer: "A",
          explanation: "Supported in PostgreSQL and some others, it solves the awkward case of comparing nullable columns without writing (a = b OR (a IS NULL AND b IS NULL)).",
          related: ["NULL", "Comparison"]
        },
        {
          difficulty: "medium",
          question: "Which is TRUE about the empty string '' versus NULL?",
          options: {
            A: "They are different: '' is a known blank value, NULL is unknown (except in Oracle, which treats '' as NULL)",
            B: "They are always identical",
            C: "'' is invalid SQL",
            D: "NULL is shorter to store"
          },
          answer: "A",
          explanation: "Real datasets frequently contain both, so data-cleaning queries usually check for both: WHERE col IS NULL OR TRIM(col) = ''.",
          related: ["NULL", "Empty string", "Oracle"]
        },
        {
          difficulty: "hard",
          question: "Why is a column full of NULLs a design smell?",
          options: {
            A: "It often signals a missing related table or an attribute belonging to a subtype",
            B: "NULLs are always forbidden",
            C: "NULLs use lots of storage",
            D: "It is never a problem"
          },
          answer: "A",
          explanation: "If only 2% of rows use a set of columns, those attributes may belong in a separate related table. Normalisation (topic 18) addresses exactly this.",
          related: ["Design", "Normalization"]
        },
        {
          difficulty: "medium",
          question: "Which condition safely finds rows where a numeric column is missing OR zero?",
          options: {
            A: "WHERE COALESCE(amount, 0) = 0",
            B: "WHERE amount = 0",
            C: "WHERE amount = NULL OR 0",
            D: "WHERE amount IS 0"
          },
          answer: "A",
          explanation: "COALESCE converts NULL to 0 first, so one condition covers both cases. (Note this prevents index use on amount - acceptable for reporting queries.)",
          related: ["COALESCE", "NULL"]
        }
      ]
    }
  ]
});
