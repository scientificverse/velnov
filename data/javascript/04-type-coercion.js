/* ============================================================
   JAVASCRIPT - TOPIC 4: TYPE COERCION & EQUALITY (30 questions)
   The topic behind most "wat?" moments in JavaScript.
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "JavaScript",
  icon: "🟨",
  color: "#b8860b",
  description: "The language of the web - basics to advanced, 20 topics.",
  topics: [
    {
      name: "4. Type Coercion & Equality",
      questions: [
        {
          difficulty: "easy",
          question: "What is type coercion?",
          options: {
            A: "JavaScript automatically converting a value from one type to another during an operation",
            B: "Forcing a variable to keep one type",
            C: "Deleting a type",
            D: "A syntax error"
          },
          answer: "A",
          explanation: "When operands have different types, JavaScript silently converts one to match - like turning 5 into \"5\" for concatenation. Convenient, but the cause of many surprises.",
          code: "console.log(\"5\" + 3);   // \"53\" - number coerced to string\nconsole.log(\"5\" - 3);   // 2    - string coerced to number",
          related: ["Coercion", "Type conversion"]
        },
        {
          difficulty: "easy",
          question: "What is the difference between == and ===?",
          options: {
            A: "== converts types before comparing (loose); === requires the same type (strict)",
            B: "They are identical",
            C: "=== is slower and deprecated",
            D: "== only works with numbers"
          },
          answer: "A",
          explanation: "5 == \"5\" is true (the string is converted). 5 === \"5\" is false (number vs string). Best practice: always use === unless you deliberately want coercion.",
          code: "console.log(5 == \"5\");    // true\nconsole.log(5 === \"5\");   // false",
          related: ["Strict equality", "Best practices"]
        },
        {
          difficulty: "medium",
          question: "Which values are FALSY in JavaScript?",
          options: {
            A: "false, 0, -0, \"\", null, undefined, NaN (and 0n)",
            B: "Only false",
            C: "false, 0 and []",
            D: "Everything except true"
          },
          answer: "A",
          explanation: "Those are the only falsy values - EVERYTHING else is truthy, including \"0\", \"false\", [], {} and negative numbers. Memorising this short list explains most if-statement surprises.",
          code: "if (\"\") { }       // skipped\nif (\"0\") { }      // runs! non-empty string\nif ([]) { }       // runs! empty array is truthy",
          related: ["Truthy", "Falsy"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log(Boolean([]), Boolean({}));",
          options: {
            A: "true true - empty arrays and objects are TRUTHY",
            B: "false false",
            C: "true false",
            D: "false true"
          },
          answer: "A",
          explanation: "Any object - including an empty array or object - is truthy. To test emptiness check arr.length === 0 or Object.keys(obj).length === 0.",
          code: "if (arr.length === 0) { }              // correct emptiness test\nif (Object.keys(obj).length === 0) { }",
          notes: ["This trips up people coming from Python, where [] is falsy."],
          related: ["Truthiness", "Objects"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log([] == false);",
          options: {
            A: "true - [] converts to \"\" then to 0, and false converts to 0",
            B: "false",
            C: "undefined",
            D: "TypeError"
          },
          answer: "A",
          explanation: "Loose equality converts both sides to numbers: [] becomes \"\" becomes 0, and false becomes 0. So 0 == 0 is true - even though Boolean([]) is true! A perfect argument for using ===.",
          code: "console.log([] == false);    // true  (coerced)\nconsole.log(Boolean([]));    // true  (truthy)\nconsole.log([] === false);   // false (strict)",
          related: ["Loose equality", "Gotchas"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log(\"\" == 0, \"0\" == 0, \"\" == \"0\");",
          options: {
            A: "true true false - == converts strings to numbers, but \"\" and \"0\" are different strings",
            B: "true true true",
            C: "false false false",
            D: "false true false"
          },
          answer: "A",
          explanation: "\"\" converts to 0 (true), \"0\" converts to 0 (true), but comparing two STRINGS does no numeric conversion, so \"\" == \"0\" is false. Loose equality is not transitive - a classic demonstration of why to avoid it.",
          related: ["Loose equality", "Coercion rules"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nconsole.log(null == undefined, null === undefined);",
          options: {
            A: "true false",
            B: "true true",
            C: "false false",
            D: "false true"
          },
          answer: "A",
          explanation: "A special rule makes null and undefined loosely equal to each other (and to nothing else). Strictly they are different types. Handy: value == null tests for 'null OR undefined' in one check.",
          code: "if (value == null) { }   // catches null AND undefined",
          related: ["null", "undefined"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log(NaN == NaN, NaN === NaN);",
          options: {
            A: "false false - NaN is never equal to anything, including itself",
            B: "true true",
            C: "true false",
            D: "SyntaxError"
          },
          answer: "A",
          explanation: "The IEEE floating-point standard defines NaN as unequal to everything. Test with Number.isNaN(x) or Object.is(x, NaN).",
          related: ["NaN", "Number.isNaN"]
        },
        {
          difficulty: "medium",
          question: "What does Number(\"\") return?",
          options: { A: "0 - an empty string converts to zero", B: "NaN", C: "undefined", D: "\"\"" },
          answer: "A",
          explanation: "Number(\"\") and Number(\"   \") are both 0, which surprises people expecting NaN. Number(\"abc\") is NaN. This is why empty form fields can silently become 0.",
          code: "console.log(Number(\"\"));      // 0\nconsole.log(Number(\"  \"));    // 0\nconsole.log(Number(\"abc\"));   // NaN",
          related: ["Number()", "Coercion"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nconsole.log(Number(true), Number(false), Number(null));",
          options: {
            A: "1 0 0",
            B: "true false null",
            C: "1 0 NaN",
            D: "NaN NaN NaN"
          },
          answer: "A",
          explanation: "true converts to 1, false to 0, and null to 0. (But Number(undefined) is NaN - another inconsistency between null and undefined.)",
          code: "console.log(Number(undefined));   // NaN\nconsole.log(Number(null));        // 0",
          related: ["Number conversion"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log(true + true);",
          options: {
            A: "2 - booleans convert to 1 and 0 in arithmetic",
            B: "\"truetrue\"",
            C: "true",
            D: "NaN"
          },
          answer: "A",
          explanation: "Arithmetic coerces booleans to numbers: true is 1, so 1 + 1 = 2. A neat trick: array.filter(Boolean).length or summing booleans to count matches.",
          related: ["Boolean coercion", "Arithmetic"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log([] + []);",
          options: {
            A: "\"\" (an empty string) - both arrays convert to empty strings and concatenate",
            B: "[]",
            C: "0",
            D: "NaN"
          },
          answer: "A",
          explanation: "The + operator converts objects to primitives; an array becomes its join(\",\") string, so [] becomes \"\". Empty + empty = empty string. The result is a string, not an array.",
          code: "console.log(typeof ([] + []));   // \"string\"\nconsole.log([1,2] + [3]);        // \"1,23\"",
          related: ["Array coercion", "Gotchas"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log([] + {});",
          options: {
            A: "\"[object Object]\" - [] becomes \"\" and {} becomes \"[object Object]\"",
            B: "\"{}\"",
            C: "0",
            D: "TypeError"
          },
          answer: "A",
          explanation: "A plain object's default string form is \"[object Object]\", so \"\" + \"[object Object]\" gives that famous string. Seeing it in your UI means you printed an object instead of its contents - use JSON.stringify() instead.",
          related: ["Object coercion", "toString"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log(\"5\" * \"2\");",
          options: {
            A: "10 - both strings are converted to numbers",
            B: "\"52\"",
            C: "NaN",
            D: "\"10\""
          },
          answer: "A",
          explanation: "*, -, / and % have only a numeric meaning, so both operands are converted. Only + is ambiguous because it also concatenates.",
          related: ["Numeric coercion"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nconsole.log(\"10\" > \"9\");",
          options: {
            A: "false - two strings compare ALPHABETICALLY, and \"1\" comes before \"9\"",
            B: "true",
            C: "NaN",
            D: "SyntaxError"
          },
          answer: "A",
          explanation: "When both operands are strings, comparison is lexicographic (character by character), not numeric. \"10\" > \"9\" is false. Convert first: Number(\"10\") > Number(\"9\") is true.",
          code: "console.log(\"10\" > \"9\");           // false - string compare\nconsole.log(10 > 9);                // true\nconsole.log(\"10\" > 9);              // true - mixed types convert to number",
          related: ["String comparison", "Sorting"]
        },
        {
          difficulty: "hard",
          question: "Why does [10, 9, 100].sort() give [10, 100, 9]?",
          options: {
            A: "sort() converts elements to STRINGS by default and sorts alphabetically",
            B: "sort() is broken",
            C: "It sorts by length",
            D: "It sorts randomly"
          },
          answer: "A",
          explanation: "The default sort compares string forms: \"10\" < \"100\" < \"9\". For numbers you must pass a comparator: sort((a, b) => a - b).",
          code: "console.log([10, 9, 100].sort());              // [10, 100, 9]\nconsole.log([10, 9, 100].sort((a,b) => a-b));   // [9, 10, 100]",
          notes: ["One of the most common real-world JavaScript bugs."],
          related: ["sort()", "Comparator"]
        },
        {
          difficulty: "medium",
          question: "What is the safest way to compare two values?",
          options: {
            A: "Use === (and !==) so no hidden conversion happens",
            B: "Always use ==",
            C: "Use = for comparison",
            D: "Convert everything to strings first"
          },
          answer: "A",
          explanation: "=== compares type and value with no surprises. The single accepted exception is x == null to catch both null and undefined at once.",
          related: ["Best practices", "Strict equality"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log(\"5\" === 5, \"5\" == 5);",
          options: { A: "false true", B: "true true", C: "false false", D: "true false" },
          answer: "A",
          explanation: "Strict comparison fails because the types differ. Loose comparison converts the string to a number first, so it succeeds. Data from input fields and APIs is often a string - a frequent source of this bug.",
          code: "const input = \"5\";        // from a form\nif (input === 5) { }       // never runs!\nif (Number(input) === 5) { }  // correct",
          related: ["Forms", "Input validation"]
        },
        {
          difficulty: "medium",
          question: "How do you safely convert user input \"42\" to a number?",
          options: {
            A: "Number(input) or parseInt(input, 10) - then check with Number.isNaN()",
            B: "input.toNumber()",
            C: "(int) input",
            D: "input * \"1\""
          },
          answer: "A",
          explanation: "Number() is strict (rejects \"42abc\"); parseInt(str, 10) reads leading digits. Always pass the radix 10 to parseInt and verify the result is not NaN.",
          code: "const n = Number(input);\nif (Number.isNaN(n)) {\n  alert(\"Please enter a number\");\n}",
          related: ["parseInt", "Validation"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log(0.1 + 0.2 === 0.3);",
          options: {
            A: "false - floating-point maths gives 0.30000000000000004",
            B: "true",
            C: "NaN",
            D: "SyntaxError"
          },
          answer: "A",
          explanation: "Binary floating point cannot represent 0.1 and 0.2 exactly. Compare with a tolerance: Math.abs(a - b) < Number.EPSILON, or work in integers (cents instead of rupees).",
          code: "console.log(0.1 + 0.2);   // 0.30000000000000004\nconsole.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON);   // true",
          related: ["Floating point", "Number.EPSILON"]
        },
        {
          difficulty: "medium",
          question: "What does String(null) return?",
          options: { A: "\"null\" (the text)", B: "\"\"", C: "null", D: "undefined" },
          answer: "A",
          explanation: "String() turns any value into readable text, including \"null\" and \"undefined\". That is why concatenating a null value shows the word null in the UI.",
          code: "console.log(\"Value: \" + null);   // \"Value: null\"",
          related: ["String()", "Concatenation"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log(1 + \"2\" - 3);",
          options: {
            A: "9 - 1 + \"2\" gives \"12\", then \"12\" - 3 converts back to 12 - 3",
            B: "0",
            C: "\"12-3\"",
            D: "NaN"
          },
          answer: "A",
          explanation: "Left to right: + with a string concatenates to \"12\"; then - forces numeric conversion, giving 12 - 3 = 9. A perfect illustration of mixed coercion.",
          related: ["Coercion", "Operator order"]
        },
        {
          difficulty: "medium",
          question: "How can you check whether a value is a real number (not NaN, not a numeric string)?",
          options: {
            A: "typeof v === \"number\" && !Number.isNaN(v)  (or Number.isFinite(v))",
            B: "typeof v === \"number\" only",
            C: "v > 0",
            D: "isNaN(v) === false"
          },
          answer: "A",
          explanation: "typeof alone accepts NaN (whose type is \"number\"). Number.isFinite(v) is the neat one-call version - it rejects NaN, Infinity and non-numbers.",
          code: "Number.isFinite(42);      // true\nNumber.isFinite(\"42\");    // false\nNumber.isFinite(NaN);     // false",
          related: ["Number.isFinite", "Validation"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log(!!\"false\", !!\"0\", !!0);",
          options: {
            A: "true true false - any non-empty string is truthy regardless of its content",
            B: "false false false",
            C: "true false false",
            D: "false true true"
          },
          answer: "A",
          explanation: "The strings \"false\" and \"0\" are non-empty, so they are truthy. Only the number 0 is falsy here. Reading \"false\" from an API and using it in an if is a common bug - compare explicitly instead.",
          code: "const flag = \"false\";\nif (flag) { }                  // runs! (truthy string)\nif (flag === \"true\") { }       // correct check",
          related: ["Truthiness", "API data"]
        },
        {
          difficulty: "medium",
          question: "What does JSON.parse() do with the string '{\"a\":1}'?",
          options: {
            A: "Converts JSON TEXT into a real JavaScript object",
            B: "Converts an object into text",
            C: "Validates the object",
            D: "Deletes the object"
          },
          answer: "A",
          explanation: "JSON.parse turns text into objects (used on API responses); JSON.stringify does the reverse (used before sending or storing data).",
          code: "const obj = JSON.parse('{\"a\":1}');\nconsole.log(obj.a);              // 1\nconsole.log(JSON.stringify(obj)); // '{\"a\":1}'",
          related: ["JSON", "APIs"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log(typeof (\"5\" - 3), typeof (\"5\" + 3));",
          options: {
            A: "\"number\" \"string\"",
            B: "\"string\" \"string\"",
            C: "\"number\" \"number\"",
            D: "\"string\" \"number\""
          },
          answer: "A",
          explanation: "Subtraction always produces a number (2), while + with a string produces a string (\"53\"). Same operands, different result types - the essence of JavaScript coercion.",
          related: ["typeof", "Coercion"]
        },
        {
          difficulty: "medium",
          question: "Which comparison is safe for checking if a variable exists and has a value?",
          options: {
            A: "if (value != null) - catches both null and undefined",
            B: "if (value) - also rejects 0 and \"\"",
            C: "if (value !== false)",
            D: "if (typeof value)"
          },
          answer: "A",
          explanation: "if (value) rejects legitimate values like 0 and \"\". value != null (the one accepted use of loose equality) checks only for null/undefined. Modern alternative: value ?? fallback.",
          related: ["null checks", "Nullish"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log([1] == 1, [1,2] == \"1,2\");",
          options: {
            A: "true true - arrays convert to their comma-joined string, then compare",
            B: "false false",
            C: "true false",
            D: "TypeError"
          },
          answer: "A",
          explanation: "[1] becomes \"1\" then the number 1 - equal. [1,2] becomes \"1,2\", matching the string. Bizarre, but consistent with the coercion rules. Yet another reason to use ===.",
          related: ["Array coercion", "Gotchas"]
        },
        {
          difficulty: "medium",
          question: "What does Object.is(NaN, NaN) return?",
          options: {
            A: "true - Object.is treats NaN as equal to itself, unlike === ",
            B: "false",
            C: "NaN",
            D: "undefined"
          },
          answer: "A",
          explanation: "Object.is is like === with two fixes: NaN equals NaN, and +0 is NOT equal to -0. Useful for precise value comparison.",
          code: "console.log(Object.is(NaN, NaN));   // true\nconsole.log(NaN === NaN);            // false\nconsole.log(Object.is(0, -0));       // false",
          related: ["Object.is", "NaN"]
        },
        {
          difficulty: "hard",
          question: "Why should you write === almost everywhere, in one sentence?",
          options: {
            A: "It compares without hidden conversions, so results are predictable and bug-free",
            B: "It is faster to type",
            C: "== was removed from the language",
            D: "=== works on more types"
          },
          answer: "A",
          explanation: "Loose equality follows a complex conversion table that is not even transitive (\"\" == 0 and \"0\" == 0, but \"\" != \"0\"). Strict equality has one simple rule: same type, same value. Linters flag == for this reason.",
          related: ["Best practices", "Linting"]
        }
      ]
    }
  ]
});
