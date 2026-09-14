/* ============================================================
   JAVASCRIPT - TOPIC 2: VARIABLES & DATA TYPES (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "JavaScript",
  icon: "🟨",
  color: "#b8860b",
  description: "The language of the web - basics to advanced, 20 topics.",
  topics: [
    {
      name: "2. Variables & Data Types",
      questions: [
        {
          difficulty: "easy",
          question: "Which keyword declares a block-scoped variable that CANNOT be reassigned?",
          options: { A: "var", B: "let", C: "const", D: "static" },
          answer: "C",
          explanation: "const creates a block-scoped binding that cannot be reassigned. let is block-scoped but reassignable; var is function-scoped and reassignable.",
          code: "const PI = 3.14159;\n// PI = 3;        // TypeError!\nlet count = 0;\ncount = 1;         // fine",
          related: ["let", "var", "Block scope"]
        },
        {
          difficulty: "medium",
          question: "Does const make an OBJECT immutable?\nconst user = { name: \"Ana\" };\nuser.name = \"Ben\";",
          options: {
            A: "No - const prevents REASSIGNMENT, not mutation. user.name = \"Ben\" works fine",
            B: "Yes - this throws an error",
            C: "It silently does nothing",
            D: "It converts the object to a string"
          },
          answer: "A",
          explanation: "const locks the binding, not the contents. You cannot do user = {} (reassignment), but you can change properties. Use Object.freeze(user) if you truly need immutability.",
          code: "const user = { name: \"Ana\" };\nuser.name = \"Ben\";   // allowed\n// user = {};         // TypeError: Assignment to constant",
          notes: ["Same applies to const arrays: push() works, reassigning does not."],
          related: ["const", "Object.freeze", "Mutability"]
        },
        {
          difficulty: "medium",
          question: "What is the main difference between let and var?",
          options: {
            A: "let is BLOCK-scoped ({ }); var is FUNCTION-scoped and leaks out of blocks",
            B: "let is faster",
            C: "var cannot hold numbers",
            D: "There is no difference"
          },
          answer: "A",
          explanation: "A var declared inside an if or for block is visible throughout the whole function; a let exists only inside its { } block. Modern code prefers let/const to avoid surprising leaks.",
          code: "if (true) {\n  var a = 1;\n  let b = 2;\n}\nconsole.log(a);   // 1 - leaked out!\n// console.log(b); // ReferenceError",
          related: ["Scope", "Hoisting"]
        },
        {
          difficulty: "easy",
          question: "Which declaration style is recommended by default in modern JavaScript?",
          options: {
            A: "const by default, let when the value must change, avoid var",
            B: "var everywhere",
            C: "let everywhere",
            D: "No declaration keyword at all"
          },
          answer: "A",
          explanation: "Start with const - it signals 'this will not be reassigned' and prevents accidental changes. Switch to let only when you genuinely reassign. var is legacy.",
          related: ["Best practices", "const"]
        },
        {
          difficulty: "medium",
          question: "What happens?\nconst x;",
          options: {
            A: "SyntaxError - a const must be initialised when declared",
            B: "x becomes undefined",
            C: "x becomes null",
            D: "It works fine"
          },
          answer: "A",
          explanation: "Because const can never be reassigned, it must be given its value immediately: 'Missing initializer in const declaration'. let x; is perfectly legal (x is undefined).",
          related: ["const", "SyntaxError"]
        },
        {
          difficulty: "easy",
          question: "How many PRIMITIVE data types does JavaScript have?",
          options: {
            A: "7 - string, number, boolean, null, undefined, symbol, bigint",
            B: "3 - string, number, boolean",
            C: "2 - number and object",
            D: "Unlimited"
          },
          answer: "A",
          explanation: "The seven primitives are string, number, boolean, null, undefined, symbol and bigint. Everything else (objects, arrays, functions) is an object.",
          related: ["Primitives", "typeof"]
        },
        {
          difficulty: "easy",
          question: "What does typeof \"hello\" return?",
          options: { A: "\"string\"", B: "\"text\"", C: "\"str\"", D: "\"String\"" },
          answer: "A",
          explanation: "typeof returns a lowercase string naming the type: \"string\", \"number\", \"boolean\", \"undefined\", \"object\", \"function\", \"symbol\", \"bigint\".",
          code: "console.log(typeof \"hi\");    // \"string\"\nconsole.log(typeof 42);       // \"number\"\nconsole.log(typeof true);     // \"boolean\"",
          related: ["typeof"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log(typeof null);",
          options: {
            A: "\"object\" - a famous historic BUG in JavaScript that can never be fixed",
            B: "\"null\"",
            C: "\"undefined\"",
            D: "\"empty\""
          },
          answer: "A",
          explanation: "typeof null returns \"object\" due to a bug in the very first JavaScript implementation. Fixing it would break countless websites, so it stays. To test for null, use: value === null.",
          code: "console.log(typeof null);        // \"object\" (bug)\nconsole.log(value === null);     // the correct check",
          notes: ["A classic interview question."],
          related: ["null", "typeof", "Gotchas"]
        },
        {
          difficulty: "medium",
          question: "What is the difference between null and undefined?",
          options: {
            A: "undefined means 'no value assigned yet' (JS sets it); null means 'deliberately empty' (you set it)",
            B: "They are identical",
            C: "null is a string",
            D: "undefined only appears in errors"
          },
          answer: "A",
          explanation: "JavaScript gives undefined to variables you declared but never assigned, and to missing function arguments. null is a value YOU assign to say 'intentionally nothing here'.",
          code: "let a;\nconsole.log(a);        // undefined - never assigned\nlet b = null;           // I deliberately set it empty",
          related: ["null", "undefined"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log(null == undefined, null === undefined);",
          options: {
            A: "true false - loosely equal but different types",
            B: "true true",
            C: "false false",
            D: "false true"
          },
          answer: "A",
          explanation: "With == (loose), null and undefined are considered equal to each other (a special rule). With === (strict), the types differ (object vs undefined), so it is false.",
          related: ["== vs ===", "null", "undefined"]
        },
        {
          difficulty: "easy",
          question: "How many NUMBER types does JavaScript have for everyday maths?",
          options: {
            A: "One - 'number' covers both integers and decimals",
            B: "Two - int and float",
            C: "Three - int, float, double",
            D: "Four"
          },
          answer: "A",
          explanation: "Unlike many languages, JavaScript has a single number type (64-bit floating point). 5 and 5.5 are both 'number'. (bigint exists separately for huge integers.)",
          code: "console.log(typeof 5);     // \"number\"\nconsole.log(typeof 5.5);   // \"number\"",
          related: ["number", "bigint"]
        },
        {
          difficulty: "medium",
          question: "What is NaN?",
          options: {
            A: "'Not a Number' - the result of an invalid maths operation, and its type is \"number\"",
            B: "A string meaning error",
            C: "null in disguise",
            D: "A syntax error"
          },
          answer: "A",
          explanation: "NaN appears when a numeric operation makes no sense, such as Number(\"abc\") or 0/0. Confusingly, typeof NaN is \"number\".",
          code: "console.log(Number(\"abc\"));   // NaN\nconsole.log(typeof NaN);       // \"number\"",
          related: ["NaN", "isNaN"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log(NaN === NaN);",
          options: {
            A: "false - NaN is the only value not equal to itself",
            B: "true",
            C: "undefined",
            D: "SyntaxError"
          },
          answer: "A",
          explanation: "By specification, NaN never equals anything including itself. To test for it use Number.isNaN(value) (or Object.is(value, NaN)).",
          code: "console.log(NaN === NaN);          // false\nconsole.log(Number.isNaN(NaN));    // true - correct test",
          related: ["NaN", "Number.isNaN"]
        },
        {
          difficulty: "medium",
          question: "Why prefer Number.isNaN() over the older global isNaN()?",
          options: {
            A: "Global isNaN() converts its argument first, so isNaN(\"abc\") is true; Number.isNaN(\"abc\") is false (it is a string, not NaN)",
            B: "They are identical",
            C: "Number.isNaN is deprecated",
            D: "isNaN only works on numbers"
          },
          answer: "A",
          explanation: "The old isNaN() coerces: isNaN(\"hello\") is true even though \"hello\" is a string. Number.isNaN() checks strictly for the actual NaN value - almost always what you want.",
          code: "isNaN(\"abc\");            // true  (coerced)\nNumber.isNaN(\"abc\");     // false (it's a string)\nNumber.isNaN(NaN);       // true",
          related: ["NaN", "Coercion"]
        },
        {
          difficulty: "easy",
          question: "Which are the two boolean values?",
          options: { A: "true and false", B: "True and False", C: "1 and 0 only", D: "yes and no" },
          answer: "A",
          explanation: "JavaScript booleans are lowercase true and false. (True with a capital T is an undefined variable and causes a ReferenceError.)",
          related: ["Booleans", "Case sensitivity"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nlet x;\nconsole.log(x);",
          options: { A: "undefined", B: "null", C: "0", D: "ReferenceError" },
          answer: "A",
          explanation: "A declared but unassigned variable holds undefined. (Using a variable that was never DECLARED gives a ReferenceError instead.)",
          related: ["undefined", "Declaration"]
        },
        {
          difficulty: "medium",
          question: "Which variable name is INVALID in JavaScript?",
          options: {
            A: "2ndPlace",
            B: "_private",
            C: "$element",
            D: "firstName"
          },
          answer: "A",
          explanation: "Names cannot start with a digit. They may start with a letter, underscore or dollar sign, and may contain digits after the first character. Reserved words (let, class, return) are also forbidden.",
          code: "let _private = 1;   // ok\nlet $el = 2;         // ok\nlet name2 = 3;       // ok\n// let 2ndPlace;     // SyntaxError",
          related: ["Identifiers", "Naming rules"]
        },
        {
          difficulty: "easy",
          question: "What naming convention is standard for JavaScript variables?",
          options: {
            A: "camelCase - firstName, totalPrice",
            B: "snake_case - first_name",
            C: "PascalCase - FirstName",
            D: "kebab-case - first-name"
          },
          answer: "A",
          explanation: "Variables and functions use camelCase; classes use PascalCase; true constants are sometimes ALL_CAPS. kebab-case is impossible (the hyphen means subtraction).",
          related: ["Conventions", "Style"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log(typeof []);",
          options: {
            A: "\"object\" - arrays are objects in JavaScript",
            B: "\"array\"",
            C: "\"list\"",
            D: "\"undefined\""
          },
          answer: "A",
          explanation: "typeof cannot distinguish arrays from plain objects - both give \"object\". Use Array.isArray(value) to test for an array.",
          code: "console.log(typeof []);            // \"object\"\nconsole.log(Array.isArray([]));    // true - correct test",
          related: ["Arrays", "Array.isArray"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nconsole.log(typeof function(){});",
          options: { A: "\"function\"", B: "\"object\"", C: "\"method\"", D: "\"undefined\"" },
          answer: "A",
          explanation: "Functions are technically objects, but typeof gives the special result \"function\" - useful for checking whether a value can be called.",
          related: ["Functions", "typeof"]
        },
        {
          difficulty: "medium",
          question: "What does 'dynamically typed' mean for JavaScript?",
          options: {
            A: "A variable can hold any type and change type at any time - the type belongs to the value, not the variable",
            B: "Types must be declared upfront",
            C: "Types cannot change ever",
            D: "Only numbers are allowed"
          },
          answer: "A",
          explanation: "let x = 5; then x = \"hello\"; is perfectly legal. Flexible, but type mistakes only show up at runtime - which is why TypeScript (typed JavaScript) is popular for large projects.",
          related: ["Dynamic typing", "TypeScript"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nlet a = 5;\nlet b = a;\na = 10;\nconsole.log(b);",
          options: {
            A: "5 - primitives are copied BY VALUE",
            B: "10",
            C: "undefined",
            D: "Error"
          },
          answer: "A",
          explanation: "Primitive values (number, string, boolean...) are copied. b received a snapshot of 5 and is unaffected when a changes later.",
          related: ["Value vs reference", "Primitives"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nlet a = { n: 5 };\nlet b = a;\na.n = 10;\nconsole.log(b.n);",
          options: {
            A: "10 - objects are copied BY REFERENCE, so a and b point to the same object",
            B: "5",
            C: "undefined",
            D: "Error"
          },
          answer: "A",
          explanation: "Objects (and arrays) are assigned by reference: b is another name for the same object. Changing it through a is visible through b. Copy with { ...a } or structuredClone(a).",
          code: "let b = { ...a };        // shallow copy - independent\nlet c = structuredClone(a);  // deep copy",
          related: ["Reference types", "Copying objects"]
        },
        {
          difficulty: "medium",
          question: "What does Number(\"42\") return, and what type is it?",
          options: {
            A: "The number 42",
            B: "The string \"42\"",
            C: "NaN",
            D: "undefined"
          },
          answer: "A",
          explanation: "Number() converts a string to a number. Alternatives: parseInt(\"42\"), parseFloat(\"4.2\"), or the unary plus +\"42\".",
          code: "Number(\"42\");      // 42\nparseInt(\"42px\");   // 42 - stops at the letters\nNumber(\"42px\");     // NaN - stricter",
          related: ["Type conversion", "parseInt"]
        },
        {
          difficulty: "medium",
          question: "What is the difference between Number(\"12px\") and parseInt(\"12px\")?",
          options: {
            A: "Number gives NaN (strict); parseInt gives 12 (reads digits until it hits a non-digit)",
            B: "Both give 12",
            C: "Both give NaN",
            D: "parseInt gives NaN"
          },
          answer: "A",
          explanation: "parseInt is forgiving - it parses leading digits and ignores the rest, useful for CSS values like \"12px\". Number() demands the whole string be a valid number.",
          related: ["parseInt", "Number()"]
        },
        {
          difficulty: "medium",
          question: "What does String(42) do?",
          options: {
            A: "Converts the number to the text \"42\"",
            B: "Keeps it a number",
            C: "Returns NaN",
            D: "Throws an error"
          },
          answer: "A",
          explanation: "String() converts any value to its string form. Alternatives: (42).toString() and template literals `${42}`.",
          code: "String(42);        // \"42\"\n(42).toString();    // \"42\"\n`${42}`;             // \"42\"",
          related: ["Type conversion", "toString"]
        },
        {
          difficulty: "hard",
          question: "What is a Symbol used for?",
          options: {
            A: "Creating a unique identifier that never clashes with another key - often used as a hidden object property",
            B: "Mathematical symbols",
            C: "Currency formatting",
            D: "Emoji support"
          },
          answer: "A",
          explanation: "Symbol() always produces a unique value, even with the same description. Used for object keys that must not collide with normal keys, and for built-in behaviours like Symbol.iterator.",
          code: "const id = Symbol(\"id\");\nconsole.log(Symbol(\"a\") === Symbol(\"a\"));   // false - always unique",
          related: ["Symbol", "Unique keys"]
        },
        {
          difficulty: "hard",
          question: "What is BigInt for?",
          options: {
            A: "Integers larger than Number.MAX_SAFE_INTEGER - written with an n suffix: 9007199254740993n",
            B: "Very long strings",
            C: "Large arrays",
            D: "Big decimal precision"
          },
          answer: "A",
          explanation: "Regular numbers lose precision above 2^53-1. BigInt handles arbitrarily large integers. Note: you cannot mix BigInt and Number in maths without converting.",
          code: "const big = 9007199254740993n;\nconsole.log(typeof big);   // \"bigint\"",
          related: ["BigInt", "MAX_SAFE_INTEGER"]
        },
        {
          difficulty: "hard",
          question: "What happens?\nconsole.log(x);\nvar x = 5;",
          options: {
            A: "undefined - var declarations are hoisted, but the assignment is not",
            B: "5",
            C: "ReferenceError",
            D: "null"
          },
          answer: "A",
          explanation: "JavaScript hoists the var declaration to the top of the scope, so x exists but holds undefined until the assignment runs. With let or const the same code throws a ReferenceError (temporal dead zone).",
          code: "console.log(x);   // undefined\nvar x = 5;\n\nconsole.log(y);   // ReferenceError\nlet y = 5;",
          related: ["Hoisting", "TDZ"]
        },
        {
          difficulty: "medium",
          question: "What happens if you assign to a variable that was never declared (without strict mode)?\nmyVar = 10;",
          options: {
            A: "It silently creates a GLOBAL variable - a common source of bugs (strict mode throws instead)",
            B: "SyntaxError",
            C: "It creates a local variable",
            D: "Nothing happens"
          },
          answer: "A",
          explanation: "Sloppy mode creates an accidental global, which can clash with other code. This is exactly what \"use strict\" (and ES modules) prevent by throwing a ReferenceError.",
          related: ["Globals", "Strict mode"]
        }
      ]
    }
  ]
});
