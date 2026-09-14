/* ============================================================
   JAVASCRIPT - TOPIC 3: OPERATORS (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "JavaScript",
  icon: "🟨",
  color: "#b8860b",
  description: "The language of the web - basics to advanced, 20 topics.",
  topics: [
    {
      name: "3. Operators",
      questions: [
        {
          difficulty: "easy",
          question: "What is the output?\nconsole.log(7 / 2);",
          options: {
            A: "3.5 - JavaScript division always gives a decimal when needed",
            B: "3",
            C: "4",
            D: "3.0"
          },
          answer: "A",
          explanation: "There is only one number type, so 7 / 2 is 3.5. To get a whole number use Math.floor(7 / 2) or Math.trunc(7 / 2).",
          related: ["Division", "Math.floor"]
        },
        {
          difficulty: "easy",
          question: "What does the % (modulo) operator return?\nconsole.log(7 % 2);",
          options: {
            A: "1 - the REMAINDER after division",
            B: "3.5",
            C: "3",
            D: "0.5"
          },
          answer: "A",
          explanation: "% gives the remainder: 7 divided by 2 is 3 remainder 1. The standard even-number test is n % 2 === 0.",
          code: "console.log(10 % 3);   // 1\nconsole.log(8 % 2);    // 0 - even",
          related: ["Modulo", "Even/odd"]
        },
        {
          difficulty: "easy",
          question: "What does ** do?\nconsole.log(2 ** 3);",
          options: { A: "8 - exponentiation (2 to the power 3)", B: "6", C: "23", D: "5" },
          answer: "A",
          explanation: "** is the exponent operator (ES2016): 2 ** 3 = 8. The older equivalent is Math.pow(2, 3).",
          code: "console.log(2 ** 3);        // 8\nconsole.log(9 ** 0.5);      // 3 - square root",
          related: ["Exponent", "Math.pow"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nlet x = 5;\nconsole.log(x++);\nconsole.log(x);",
          options: {
            A: "5 then 6 - POST-increment returns the old value first, then increments",
            B: "6 then 6",
            C: "5 then 5",
            D: "6 then 7"
          },
          answer: "A",
          explanation: "x++ (postfix) yields the current value 5, THEN adds 1. ++x (prefix) would add first and yield 6.",
          code: "let a = 5;\nconsole.log(a++);   // 5 (then a is 6)\nlet b = 5;\nconsole.log(++b);   // 6",
          related: ["Increment", "Prefix vs postfix"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nlet x = 5;\nconsole.log(++x);",
          options: { A: "6 - PRE-increment adds first, then returns", B: "5", C: "7", D: "undefined" },
          answer: "A",
          explanation: "++x increments to 6 and returns the new value. The difference only matters when you use the result in the same expression.",
          related: ["Increment"]
        },
        {
          difficulty: "easy",
          question: "What does += do?\nlet x = 10;\nx += 5;",
          options: { A: "x becomes 15 (x = x + 5)", B: "x becomes 5", C: "x becomes 105", D: "SyntaxError" },
          answer: "A",
          explanation: "Compound assignment: += adds and reassigns. Others: -=, *=, /=, %=, **=. With strings, += concatenates.",
          code: "let s = \"Hello\";\ns += \" World\";   // \"Hello World\"",
          related: ["Compound assignment"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log(\"5\" + 3);",
          options: {
            A: "\"53\" - the number is converted to a string and concatenated",
            B: "8",
            C: "NaN",
            D: "TypeError"
          },
          answer: "A",
          explanation: "When either operand of + is a string, JavaScript converts the other to a string and joins them. This is the most common coercion surprise.",
          code: "console.log(\"5\" + 3);   // \"53\"\nconsole.log(5 + 3);      // 8",
          related: ["Coercion", "Concatenation"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log(\"5\" - 3);",
          options: {
            A: "2 - unlike +, the minus operator converts strings to NUMBERS",
            B: "\"53\"",
            C: "\"2\"",
            D: "NaN"
          },
          answer: "A",
          explanation: "Only + has the string-concatenation meaning. -, *, / and % always try numeric conversion, so \"5\" - 3 is 2. This asymmetry catches many beginners.",
          code: "console.log(\"5\" - 3);   // 2\nconsole.log(\"5\" * 2);   // 10\nconsole.log(\"5\" + 3);   // \"53\" - the odd one out",
          related: ["Coercion", "Operators"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nconsole.log(2 + 3 + \"4\");",
          options: {
            A: "\"54\" - 2 + 3 is calculated first (5), then \"4\" turns it into a string",
            B: "\"234\"",
            C: "9",
            D: "\"9\""
          },
          answer: "A",
          explanation: "+ evaluates left to right: 2 + 3 = 5 (both numbers), then 5 + \"4\" concatenates to \"54\".",
          code: "console.log(2 + 3 + \"4\");   // \"54\"\nconsole.log(\"4\" + 2 + 3);   // \"423\" - order matters!",
          related: ["Associativity", "Coercion"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nconsole.log(2 + 3 * 4);",
          options: { A: "14 - multiplication happens before addition", B: "20", C: "24", D: "9" },
          answer: "A",
          explanation: "Standard precedence: * before +. Use parentheses to change it: (2 + 3) * 4 is 20.",
          related: ["Operator precedence"]
        },
        {
          difficulty: "easy",
          question: "Which operator checks equality WITHOUT type conversion?",
          options: { A: "===", B: "==", C: "=", D: "!=" },
          answer: "A",
          explanation: "=== (strict equality) compares value AND type - no coercion. == converts types first, which causes surprises. Always prefer ===.",
          code: "console.log(5 === \"5\");   // false - different types\nconsole.log(5 == \"5\");    // true  - coerced",
          related: ["Strict equality", "Coercion"]
        },
        {
          difficulty: "easy",
          question: "What is the difference between = and ==?",
          options: {
            A: "= ASSIGNS a value; == COMPARES two values",
            B: "They are the same",
            C: "== assigns; = compares",
            D: "= only works with numbers"
          },
          answer: "A",
          explanation: "One equals sign stores a value (x = 5). Two compare (x == 5). Three compare strictly (x === 5). Using = inside an if is a classic bug.",
          related: ["Assignment", "Comparison"]
        },
        {
          difficulty: "medium",
          question: "Which operator means 'strictly NOT equal'?",
          options: { A: "!==", B: "!=", C: "<>", D: "not ===" },
          answer: "A",
          explanation: "!== is the strict inequality operator (no type conversion), the counterpart of ===. != is the loose version.",
          code: "console.log(5 !== \"5\");   // true  - different types\nconsole.log(5 != \"5\");    // false - coerced to equal",
          related: ["Inequality"]
        },
        {
          difficulty: "easy",
          question: "What does && (logical AND) return?\nconsole.log(true && false);",
          options: { A: "false - both sides must be truthy", B: "true", C: "undefined", D: "0" },
          answer: "A",
          explanation: "&& is true only when BOTH operands are truthy. || (OR) is true when at least one is.",
          code: "console.log(true && true);    // true\nconsole.log(true && false);   // false\nconsole.log(false || true);   // true",
          related: ["Logical operators"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log(0 || \"hello\");",
          options: {
            A: "\"hello\" - || returns the first TRUTHY value, not just true/false",
            B: "true",
            C: "0",
            D: "false"
          },
          answer: "A",
          explanation: "Logical operators return one of the OPERANDS, not booleans. 0 is falsy so || moves on and returns \"hello\". A common way to supply a default value.",
          code: "const name = userInput || \"Guest\";   // fallback if empty",
          related: ["Short-circuit", "Defaults"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log(\"hi\" && \"bye\");",
          options: {
            A: "\"bye\" - && returns the LAST value if all are truthy (or the first falsy one)",
            B: "\"hi\"",
            C: "true",
            D: "false"
          },
          answer: "A",
          explanation: "&& stops at the first falsy operand and returns it; if none are falsy it returns the last one. Used for conditional execution: isLoggedIn && showDashboard().",
          related: ["Short-circuit", "Logical AND"]
        },
        {
          difficulty: "hard",
          question: "What is the difference between || and ?? (nullish coalescing)?",
          options: {
            A: "|| falls back on ANY falsy value (0, \"\", false); ?? falls back only on null or undefined",
            B: "They are identical",
            C: "?? is deprecated",
            D: "?? only works with numbers"
          },
          answer: "A",
          explanation: "If a valid value can be 0 or \"\", || wrongly replaces it. ?? treats only null/undefined as 'missing', which is usually what you want for defaults.",
          code: "const count = 0;\nconsole.log(count || 10);   // 10 - wrong!\nconsole.log(count ?? 10);   // 0  - correct",
          related: ["Nullish coalescing", "Defaults"]
        },
        {
          difficulty: "medium",
          question: "What does the ternary operator do?\nlet status = age >= 18 ? \"adult\" : \"minor\";",
          options: {
            A: "Returns \"adult\" if the condition is true, otherwise \"minor\" - a one-line if/else",
            B: "Compares three values",
            C: "Loops three times",
            D: "SyntaxError"
          },
          answer: "A",
          explanation: "condition ? valueIfTrue : valueIfFalse is JavaScript's only three-operand operator. Great for short assignments; avoid deep nesting.",
          code: "const msg = score > 50 ? \"Pass\" : \"Fail\";",
          related: ["Ternary", "Conditional expression"]
        },
        {
          difficulty: "medium",
          question: "What does ! (logical NOT) do?\nconsole.log(!true, !0);",
          options: {
            A: "true becomes false; 0 (falsy) becomes true",
            B: "Both become true",
            C: "Both become false",
            D: "SyntaxError"
          },
          answer: "A",
          explanation: "! converts its operand to a boolean and flips it. !0 is true because 0 is falsy.",
          code: "console.log(!true);    // false\nconsole.log(!0);       // true\nconsole.log(!\"\");      // true",
          related: ["Logical NOT", "Truthiness"]
        },
        {
          difficulty: "hard",
          question: "What does the double NOT !! do?\nconsole.log(!!\"hello\");",
          options: {
            A: "Converts any value to its boolean equivalent - here true",
            B: "Nothing - it cancels out",
            C: "Returns the string",
            D: "SyntaxError"
          },
          answer: "A",
          explanation: "!! is a shorthand for Boolean(value): the first ! makes it a flipped boolean, the second flips it back. Common for turning a value into a real true/false.",
          code: "console.log(!!\"hello\");   // true\nconsole.log(!!0);          // false\nconsole.log(Boolean(0));   // false - clearer alternative",
          related: ["Boolean conversion", "Truthiness"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nconsole.log(5 > 3 && 2 > 1);",
          options: { A: "true - both comparisons are true", B: "false", C: "5", D: "SyntaxError" },
          answer: "A",
          explanation: "Comparisons produce booleans, and && requires both to be true. Comparison operators have higher precedence than &&, so no parentheses are needed.",
          related: ["Comparison", "Logical operators"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log(1 < 2 < 3, 3 > 2 > 1);",
          options: {
            A: "true false - chaining does NOT work as maths; the second becomes (3>2)=true, then true>1 is false",
            B: "true true",
            C: "false false",
            D: "SyntaxError"
          },
          answer: "A",
          explanation: "Comparisons evaluate left to right into booleans. 3 > 2 gives true, then true > 1 converts true to 1, and 1 > 1 is false. Never chain comparisons - write (3 > 2) && (2 > 1).",
          notes: ["A favourite trick question."],
          related: ["Chained comparison", "Coercion"]
        },
        {
          difficulty: "medium",
          question: "What does the optional chaining operator ?. do?\nuser?.address?.city",
          options: {
            A: "Safely reads nested properties - returns undefined instead of throwing if something is null/undefined",
            B: "Makes properties optional to declare",
            C: "Creates the property if missing",
            D: "Is a syntax error"
          },
          answer: "A",
          explanation: "Without ?., reading user.address.city when address is undefined throws a TypeError. Optional chaining short-circuits to undefined instead - very handy with API data.",
          code: "const city = user?.address?.city ?? \"Unknown\";",
          related: ["Optional chaining", "Nullish coalescing"]
        },
        {
          difficulty: "medium",
          question: "What does the spread operator ... do here?\nconst combined = [...arr1, ...arr2];",
          options: {
            A: "Expands both arrays' elements into a new array (concatenation)",
            B: "Multiplies the arrays",
            C: "Nests them",
            D: "Deletes duplicates"
          },
          answer: "A",
          explanation: "Spread unpacks iterables into a new array or object. It is the modern way to copy or merge without mutating the originals.",
          code: "const a = [1, 2], b = [3];\nconsole.log([...a, ...b]);      // [1, 2, 3]\nconsole.log({ ...obj1, ...obj2 });  // merged object",
          related: ["Spread", "Rest parameters"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nconsole.log(10 + +\"5\");",
          options: {
            A: "15 - the unary plus converts \"5\" to the number 5",
            B: "\"105\"",
            C: "NaN",
            D: "SyntaxError"
          },
          answer: "A",
          explanation: "A single + before a value is the unary plus, a compact way to convert to a number. So 10 + 5 = 15.",
          code: "console.log(+\"5\");      // 5 (number)\nconsole.log(+true);      // 1\nconsole.log(+\"abc\");    // NaN",
          related: ["Unary plus", "Type conversion"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log(typeof (5 > 3));",
          options: { A: "\"boolean\"", B: "\"number\"", C: "\"string\"", D: "\"object\"" },
          answer: "A",
          explanation: "A comparison evaluates to true or false, whose type is \"boolean\". You can store or return comparisons directly instead of writing if/else.",
          code: "const isAdult = age >= 18;   // store the boolean\nreturn n % 2 === 0;           // return it",
          related: ["Booleans", "Comparison"]
        },
        {
          difficulty: "medium",
          question: "What does the comma operator do?\nlet x = (1, 2, 3);",
          options: {
            A: "Evaluates each expression and returns the LAST one - x is 3",
            B: "Creates an array",
            C: "SyntaxError",
            D: "x becomes 1"
          },
          answer: "A",
          explanation: "The comma operator evaluates left to right and yields the final value. Rarely used deliberately, but it appears in compact for-loop headers.",
          related: ["Comma operator"]
        },
        {
          difficulty: "hard",
          question: "What are the bitwise operators & | ^ ~ << >> used for?",
          options: {
            A: "Operating on the individual bits of numbers - flags, masks, low-level maths",
            B: "Logical AND/OR only",
            C: "String manipulation",
            D: "Comparing objects"
          },
          answer: "A",
          explanation: "They convert numbers to 32-bit integers and work bit by bit. Everyday web code rarely needs them, but they appear in permissions flags, graphics and optimisation tricks.",
          code: "console.log(5 & 3);    // 1  (0101 & 0011)\nconsole.log(5 | 3);    // 7\nconsole.log(5 << 1);   // 10 (shift left = x2)",
          related: ["Bitwise", "Binary"]
        },
        {
          difficulty: "medium",
          question: "What does the delete operator do?\ndelete user.age;",
          options: {
            A: "Removes the property from the object",
            B: "Deletes the whole object",
            C: "Sets the property to null",
            D: "Deletes a variable"
          },
          answer: "A",
          explanation: "delete removes a property entirely (afterwards 'age' in user is false). It does not work on variables, and on arrays it leaves a hole rather than shifting elements - use splice() for arrays.",
          related: ["delete", "Objects"]
        },
        {
          difficulty: "medium",
          question: "What does the in operator check?\nconsole.log(\"name\" in user);",
          options: {
            A: "Whether the object has a property with that KEY",
            B: "Whether a value exists in the object",
            C: "Whether a string contains 'name'",
            D: "Whether user is inside name"
          },
          answer: "A",
          explanation: "in tests for a property key (including inherited ones). For arrays it checks INDEXES, not values - use includes() for array values.",
          code: "console.log(\"name\" in { name: \"Ana\" });   // true\nconsole.log(1 in [10, 20]);                 // true - index 1!\nconsole.log([10, 20].includes(20));         // true - value",
          related: ["in operator", "includes"]
        }
      ]
    }
  ]
});
