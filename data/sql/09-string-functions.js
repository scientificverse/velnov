/* ============================================================
   SQL - TOPIC 9: STRING FUNCTIONS (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "SQL",
  icon: "🗄️",
  color: "#0f80cc",
  description: "Databases from basics to window functions - 20 topics.",
  topics: [
    {
      name: "9. String Functions",
      questions: [
        {
          difficulty: "easy",
          question: "Which function joins two or more strings together?",
          options: {
            A: "CONCAT(first, ' ', last)",
            B: "JOIN(first, last)",
            C: "MERGE(first, last)",
            D: "ADD(first, last)"
          },
          answer: "A",
          explanation: "CONCAT joins its arguments into one string and works in most databases. The standard operator || does the same in PostgreSQL, Oracle and SQLite; SQL Server uses +.",
          code: "SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM users;",
          related: ["CONCAT", "String joining"]
        },
        {
          difficulty: "easy",
          question: "What does LENGTH('hello') return?",
          options: { A: "5", B: "4", C: "6", D: "'hello'" },
          answer: "A",
          explanation: "LENGTH (LEN in SQL Server) returns the number of characters. Be careful with trailing spaces and with multi-byte characters, where CHAR_LENGTH may differ from byte length.",
          code: "SELECT LENGTH('hello');   -- 5",
          related: ["LENGTH", "LEN"]
        },
        {
          difficulty: "easy",
          question: "Which function converts text to capital letters?",
          options: { A: "UPPER()", B: "CAPS()", C: "TOUPPER()", D: "BIG()" },
          answer: "A",
          explanation: "UPPER() uppercases and LOWER() lowercases. They are essential for case-insensitive comparisons: WHERE LOWER(email) = LOWER(:input).",
          code: "SELECT UPPER('sql');   -- 'SQL'",
          related: ["UPPER", "LOWER"]
        },
        {
          difficulty: "medium",
          question: "What does TRIM('  hello  ') return?",
          options: {
            A: "'hello' - leading and trailing spaces removed",
            B: "'  hello  '",
            C: "'hello  '",
            D: "'h e l l o'"
          },
          answer: "A",
          explanation: "TRIM removes whitespace from both ends. LTRIM removes only the left side and RTRIM only the right. Spaces inside the string are untouched.",
          code: "SELECT TRIM('  hello  ');   -- 'hello'",
          related: ["TRIM", "LTRIM", "RTRIM"]
        },
        {
          difficulty: "medium",
          question: "What does SUBSTRING('database', 1, 4) return?",
          options: {
            A: "'data' - 4 characters starting at position 1",
            B: "'base'",
            C: "'atab'",
            D: "'databa'"
          },
          answer: "A",
          explanation: "SUBSTRING(string, start, length) extracts a portion. Note SQL positions are usually 1-based, not 0-based like most programming languages.",
          code: "SELECT SUBSTRING('database', 1, 4);   -- 'data'\nSELECT SUBSTRING('database', 5, 4);   -- 'base'",
          related: ["SUBSTRING", "SUBSTR"]
        },
        {
          difficulty: "hard",
          question: "In SQL, string positions typically start at what number?",
          options: {
            A: "1 - SQL is 1-indexed, unlike most programming languages",
            B: "0",
            C: "-1",
            D: "It varies randomly"
          },
          answer: "A",
          explanation: "SUBSTRING('abc', 1, 1) returns 'a'. This 1-based indexing catches out developers used to Python or JavaScript, where the first character is at index 0.",
          related: ["Indexing", "SUBSTRING"]
        },
        {
          difficulty: "medium",
          question: "What does REPLACE('2026-07-04', '-', '/') return?",
          options: {
            A: "'2026/07/04' - every '-' replaced with '/'",
            B: "'20260704'",
            C: "Only the first '-' replaced",
            D: "An error"
          },
          answer: "A",
          explanation: "REPLACE swaps EVERY occurrence of the search text, not just the first. It is commonly used for reformatting and cleaning data.",
          code: "SELECT REPLACE(phone, '-', '');   -- strip dashes",
          related: ["REPLACE"]
        },
        {
          difficulty: "medium",
          question: "How do you find the position of a substring?",
          options: {
            A: "POSITION('@' IN email)  or  CHARINDEX / INSTR depending on the database",
            B: "FIND('@', email)",
            C: "INDEX(email, '@')",
            D: "SEARCH(email, '@')"
          },
          answer: "A",
          explanation: "POSITION is standard SQL; SQL Server uses CHARINDEX('@', email) and MySQL/Oracle use INSTR(email, '@'). All return 1-based positions, or 0 when not found.",
          code: "SELECT SUBSTRING(email, 1, POSITION('@' IN email) - 1) AS username;",
          related: ["POSITION", "CHARINDEX", "INSTR"]
        },
        {
          difficulty: "hard",
          question: "How would you extract the username (before @) from an email?",
          options: {
            A: "SUBSTRING(email, 1, POSITION('@' IN email) - 1)",
            B: "LEFT(email, '@')",
            C: "SPLIT(email, '@')",
            D: "email BEFORE '@'"
          },
          answer: "A",
          explanation: "Find the @ position, then take everything before it. The -1 excludes the @ itself. Combining POSITION with SUBSTRING is a common text-parsing pattern.",
          related: ["SUBSTRING", "POSITION"]
        },
        {
          difficulty: "medium",
          question: "What do LEFT('hello', 3) and RIGHT('hello', 2) return?",
          options: {
            A: "'hel' and 'lo'",
            B: "'llo' and 'he'",
            C: "'hel' and 'll'",
            D: "'lo' and 'hel'"
          },
          answer: "A",
          explanation: "LEFT takes characters from the start, RIGHT from the end. They are shorthand for common SUBSTRING cases. (Oracle lacks them; use SUBSTR instead.)",
          code: "SELECT LEFT(code, 2) AS prefix, RIGHT(code, 4) AS suffix FROM items;",
          related: ["LEFT", "RIGHT"]
        },
        {
          difficulty: "medium",
          question: "What does REVERSE('SQL') return?",
          options: { A: "'LQS'", B: "'SQL'", C: "'QLS'", D: "An error" },
          answer: "A",
          explanation: "REVERSE flips the character order. It is occasionally useful for extracting text after the LAST occurrence of a character (reverse, find, reverse again).",
          related: ["REVERSE"]
        },
        {
          difficulty: "hard",
          question: "What does CONCAT('Hi', NULL, 'there') return in MySQL vs the || operator?",
          options: {
            A: "CONCAT ignores NULL and returns 'Hithere'; || in standard SQL would return NULL",
            B: "Both return NULL",
            C: "Both return 'Hithere'",
            D: "Both error"
          },
          answer: "A",
          explanation: "CONCAT() in MySQL and SQL Server treats NULL as an empty string, but the standard || operator (and Oracle) returns NULL if any operand is NULL. This difference causes real bugs when building names.",
          code: "-- safe with ||:\nfirst || COALESCE(' ' || middle, '') || ' ' || last",
          related: ["CONCAT", "NULL", "Dialects"]
        },
        {
          difficulty: "medium",
          question: "What does CONCAT_WS(', ', city, state, country) do?",
          options: {
            A: "Joins with a separator AND skips NULL arguments - no doubled separators",
            B: "Joins without any separator",
            C: "Only joins two strings",
            D: "Reverses the string"
          },
          answer: "A",
          explanation: "CONCAT_WS ('with separator') is ideal for addresses: it puts ', ' between values and gracefully skips missing fields instead of leaving ', , '.",
          code: "SELECT CONCAT_WS(', ', city, state, country) AS location FROM addresses;",
          related: ["CONCAT_WS", "NULL"]
        },
        {
          difficulty: "medium",
          question: "How do you pad a number to a fixed width, like '007'?",
          options: {
            A: "LPAD('7', 3, '0')",
            B: "PAD('7', 3)",
            C: "FILL('7', '0', 3)",
            D: "FORMAT('7', 3)"
          },
          answer: "A",
          explanation: "LPAD pads on the left to reach a target length; RPAD pads on the right. Useful for invoice numbers and codes. (SQL Server lacks LPAD - use RIGHT('000' + val, 3).)",
          code: "SELECT LPAD(CAST(id AS CHAR), 5, '0') FROM invoices;   -- 00042",
          related: ["LPAD", "RPAD"]
        },
        {
          difficulty: "hard",
          question: "Why might WHERE UPPER(name) = 'ANA' be slow on a large table?",
          options: {
            A: "Wrapping the column in a function prevents the index on name from being used",
            B: "UPPER is always slow",
            C: "It returns wrong results",
            D: "It is not slow"
          },
          answer: "A",
          explanation: "The database must compute UPPER for every row. Solutions: a case-insensitive collation, a functional index on UPPER(name), or a generated column storing the uppercased value.",
          related: ["Sargability", "Indexes", "Performance"]
        },
        {
          difficulty: "medium",
          question: "What does SUBSTRING('database' FROM 5) return (no length given)?",
          options: {
            A: "'base' - from position 5 to the end",
            B: "'data'",
            C: "'d'",
            D: "An error"
          },
          answer: "A",
          explanation: "Omitting the length extracts everything from the start position onward. This is handy when you know where to start but not how long the remainder is.",
          related: ["SUBSTRING"]
        },
        {
          difficulty: "medium",
          question: "How do you capitalise the first letter of each word (title case)?",
          options: {
            A: "INITCAP('hello world') in PostgreSQL/Oracle returns 'Hello World'",
            B: "UPPER() does it automatically",
            C: "TITLE('hello world')",
            D: "CAPITALIZE()"
          },
          answer: "A",
          explanation: "INITCAP handles title case in PostgreSQL and Oracle. MySQL and SQL Server lack it, so you build it with SUBSTRING + UPPER or a custom function.",
          related: ["INITCAP", "Dialects"]
        },
        {
          difficulty: "hard",
          question: "What does TRIM(BOTH 'x' FROM 'xxhelloxx') return?",
          options: {
            A: "'hello' - TRIM can remove characters other than spaces",
            B: "'xxhelloxx'",
            C: "'helloxx'",
            D: "An error"
          },
          answer: "A",
          explanation: "Standard TRIM accepts a character set and a direction (BOTH, LEADING, TRAILING). Not every database supports the full syntax, but it is powerful for cleaning delimited data.",
          related: ["TRIM", "Standard SQL"]
        },
        {
          difficulty: "medium",
          question: "How do you split a full name into first and last using space position?",
          options: {
            A: "Use POSITION(' ' IN name) with SUBSTRING for each part",
            B: "SPLIT(name, ' ')",
            C: "name.split(' ')",
            D: "EXPLODE(name)"
          },
          answer: "A",
          explanation: "Most databases lack a simple SPLIT into columns. You locate the delimiter and slice around it. (PostgreSQL has SPLIT_PART(name, ' ', 1) which is much cleaner.)",
          code: "SELECT SPLIT_PART(name, ' ', 1) AS first_name;   -- PostgreSQL",
          related: ["SPLIT_PART", "POSITION"]
        },
        {
          difficulty: "hard",
          question: "What does SPLIT_PART('a,b,c', ',', 2) return in PostgreSQL?",
          options: {
            A: "'b' - the 2nd part when split on comma",
            B: "'a'",
            C: "'c'",
            D: "'a,b'"
          },
          answer: "A",
          explanation: "SPLIT_PART extracts one field from delimited text by position (1-based). It is the neat way to parse CSV-like values stored in a single column.",
          related: ["SPLIT_PART", "Parsing"]
        },
        {
          difficulty: "medium",
          question: "How do you count occurrences of a character in a string?",
          options: {
            A: "LENGTH(str) - LENGTH(REPLACE(str, 'x', '')) gives the count of 'x'",
            B: "COUNT('x', str)",
            C: "OCCURRENCES(str, 'x')",
            D: "There is no way"
          },
          answer: "A",
          explanation: "A clever idiom: remove the character, and the drop in length equals how many were removed. Works in any database with LENGTH and REPLACE.",
          code: "SELECT LENGTH(tags) - LENGTH(REPLACE(tags, ',', '')) + 1 AS tag_count;",
          related: ["LENGTH", "REPLACE", "Tricks"]
        },
        {
          difficulty: "medium",
          question: "What does the || operator do in PostgreSQL?",
          options: {
            A: "String concatenation - 'Hello' || ' World' gives 'Hello World'",
            B: "Logical OR",
            C: "Bitwise OR",
            D: "Absolute value"
          },
          answer: "A",
          explanation: "In standard SQL, || concatenates strings (it is NOT logical OR - that is the keyword OR). Remember it returns NULL if either side is NULL.",
          related: ["Concatenation", "Operators"]
        },
        {
          difficulty: "hard",
          question: "Which finds rows where a name contains only letters (basic validation)?",
          options: {
            A: "WHERE name ~ '^[A-Za-z]+$' (PostgreSQL regex) or a LIKE/pattern check",
            B: "WHERE name = LETTERS",
            C: "WHERE ISALPHA(name)",
            D: "WHERE name LIKE '%[0-9]%'"
          },
          answer: "A",
          explanation: "PostgreSQL's ~ operator applies a regular expression. MySQL uses REGEXP, and SQL Server uses LIKE with character ranges. Regex is the flexible tool for text validation.",
          code: "WHERE name ~ '^[A-Za-z ]+$';   -- letters and spaces only",
          related: ["Regex", "Validation"]
        },
        {
          difficulty: "medium",
          question: "What does FORMAT or TO_CHAR help with?",
          options: {
            A: "Formatting numbers and dates as strings - e.g. adding commas or currency symbols",
            B: "Only uppercasing",
            C: "Splitting strings",
            D: "Counting rows"
          },
          answer: "A",
          explanation: "TO_CHAR(1234567, '9,999,999') gives '1,234,567' in PostgreSQL/Oracle; SQL Server uses FORMAT(). Ideally do display formatting in the application, not the query.",
          related: ["TO_CHAR", "FORMAT"]
        },
        {
          difficulty: "medium",
          question: "How do you remove all spaces from a string?",
          options: {
            A: "REPLACE(str, ' ', '')",
            B: "TRIM(str)",
            C: "DELETE(str, ' ')",
            D: "STRIP(str)"
          },
          answer: "A",
          explanation: "TRIM only removes spaces at the ENDS. REPLACE with an empty string removes them everywhere - useful for normalising phone numbers or codes.",
          related: ["REPLACE", "TRIM"]
        },
        {
          difficulty: "hard",
          question: "Why can trailing spaces in CHAR columns cause comparison surprises?",
          options: {
            A: "CHAR pads with spaces, so 'ab' stored in CHAR(5) is really 'ab   ' - comparisons may ignore or include the padding depending on rules",
            B: "CHAR never pads",
            C: "Spaces are always removed",
            D: "It never causes issues"
          },
          answer: "A",
          explanation: "Standard SQL comparison ignores trailing spaces for equality, but LENGTH and LIKE may not. VARCHAR avoids the whole problem by storing exactly what you insert.",
          related: ["CHAR", "Trailing spaces"]
        },
        {
          difficulty: "medium",
          question: "How do you mask a value like a credit card, showing only the last 4?",
          options: {
            A: "CONCAT('****-****-****-', RIGHT(card, 4))",
            B: "HIDE(card)",
            C: "MASK(card, 4)",
            D: "card - 4"
          },
          answer: "A",
          explanation: "Combine a literal mask with RIGHT to reveal only the tail. This is a common display transformation - though real card numbers should never be stored in plain text.",
          related: ["RIGHT", "CONCAT", "Security"]
        },
        {
          difficulty: "hard",
          question: "What does REGEXP_REPLACE do?",
          options: {
            A: "Replaces text matching a regular expression pattern - more powerful than plain REPLACE",
            B: "Only replaces the first character",
            C: "Reverses a string",
            D: "Counts matches"
          },
          answer: "A",
          explanation: "REGEXP_REPLACE(phone, '[^0-9]', '', 'g') strips every non-digit in one call. Available in PostgreSQL, Oracle and MySQL 8+.",
          code: "SELECT REGEXP_REPLACE(phone, '[^0-9]', '', 'g') AS digits FROM contacts;",
          related: ["REGEXP_REPLACE", "Regex"]
        },
        {
          difficulty: "medium",
          question: "How do you compare strings ignoring case portably?",
          options: {
            A: "LOWER(a) = LOWER(b) - normalise both sides",
            B: "a == b",
            C: "a EQUALS b",
            D: "IGNORECASE(a, b)"
          },
          answer: "A",
          explanation: "Since collation defaults differ between databases, normalising with LOWER (or UPPER) guarantees consistent case-insensitive comparison - at the cost of possibly bypassing an index.",
          related: ["LOWER", "Collation"]
        },
        {
          difficulty: "hard",
          question: "Which query finds names with leading or trailing spaces (a data-quality check)?",
          options: {
            A: "WHERE name <> TRIM(name)",
            B: "WHERE name LIKE ' %'",
            C: "WHERE LENGTH(name) > 0",
            D: "WHERE name IS NULL"
          },
          answer: "A",
          explanation: "If a value differs from its trimmed version, it has stray spaces. This one-line check finds messy data that would otherwise break joins and grouping. (Option B only catches leading spaces.)",
          related: ["TRIM", "Data quality"]
        }
      ]
    }
  ]
});
