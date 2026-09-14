/* ============================================================
   JAVASCRIPT - TOPIC 6: CONDITIONALS (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "JavaScript",
  icon: "🟨",
  color: "#b8860b",
  description: "The language of the web - basics to advanced, 20 topics.",
  topics: [
    {
      name: "6. Conditionals",
      questions: [
        {
          difficulty: "easy",
          question: "Which is the correct if statement syntax?",
          options: {
            A: "if (x > 5) { ... }",
            B: "if x > 5: ...",
            C: "if x > 5 then ... end",
            D: "if [x > 5] { ... }"
          },
          answer: "A",
          explanation: "JavaScript requires parentheses around the condition and uses curly braces for the block. (Python uses a colon; other languages use then/end.)",
          code: "if (score > 50) {\n  console.log(\"Pass\");\n}",
          related: ["if", "Syntax"]
        },
        {
          difficulty: "easy",
          question: "When does the else block run?",
          options: {
            A: "Only when the if condition (and every else if) was false",
            B: "Always",
            C: "Only when the if was true",
            D: "Never"
          },
          answer: "A",
          explanation: "else is the catch-all branch; it takes no condition of its own and runs when nothing above it matched.",
          code: "if (age >= 18) {\n  console.log(\"Adult\");\n} else {\n  console.log(\"Minor\");\n}",
          related: ["if/else"]
        },
        {
          difficulty: "easy",
          question: "How do you test a second condition when the first fails?",
          options: {
            A: "else if (condition) { ... }",
            B: "elif (condition) { ... }",
            C: "elseif condition: ...",
            D: "otherwise (condition)"
          },
          answer: "A",
          explanation: "JavaScript writes it as two words: else if. (elif is Python, elseif is PHP.) You can chain as many as you need.",
          code: "if (s >= 90) grade = \"A\";\nelse if (s >= 75) grade = \"B\";\nelse if (s >= 60) grade = \"C\";\nelse grade = \"F\";",
          related: ["else if", "Chains"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nlet x = 7;\nif (x > 5) console.log(\"A\");\nif (x > 6) console.log(\"B\");",
          options: {
            A: "A then B - two independent ifs, both conditions are true",
            B: "A only",
            C: "B only",
            D: "Nothing"
          },
          answer: "A",
          explanation: "Separate if statements are each evaluated. With 'else if' instead, only the first matching branch would run.",
          related: ["if vs else if"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nlet x = 7;\nif (x > 5) console.log(\"A\");\nelse if (x > 6) console.log(\"B\");",
          options: {
            A: "A only - the chain stops at the first true condition",
            B: "A then B",
            C: "B only",
            D: "Nothing"
          },
          answer: "A",
          explanation: "In an if/else-if chain, evaluation stops at the first true branch. The x > 6 test never runs, even though it is also true. Order matters: put the most specific condition first.",
          related: ["else if", "Order"]
        },
        {
          difficulty: "hard",
          question: "Why does this print \"C\" for score = 95?\nif (s >= 60) grade = \"C\";\nelse if (s >= 75) grade = \"B\";\nelse if (s >= 90) grade = \"A\";",
          options: {
            A: "The chain matches the FIRST true condition (95 >= 60) - the tests are in the wrong order",
            B: "The comparison operators are wrong",
            C: "grade is undefined",
            D: "It should print A"
          },
          answer: "A",
          explanation: "With overlapping ranges, always test the most restrictive first: >= 90, then >= 75, then >= 60. This ordering bug is extremely common in grading code.",
          related: ["Logic bugs", "Ordering"]
        },
        {
          difficulty: "medium",
          question: "Can you omit the curly braces for a single statement?\nif (x) console.log(\"hi\");",
          options: {
            A: "Yes, but it is risky - adding a second line later silently falls outside the if",
            B: "No, braces are mandatory",
            C: "Only in strict mode",
            D: "Only for else"
          },
          answer: "A",
          explanation: "Braceless ifs are legal but a known source of bugs (the famous 'goto fail' security flaw). Most style guides require braces always.",
          code: "if (x)\n  doA();\n  doB();   // ALWAYS runs - not part of the if!",
          related: ["Style", "Best practices"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nif (0) console.log(\"yes\");\nelse console.log(\"no\");",
          options: { A: "no - 0 is falsy", B: "yes", C: "0", D: "Error" },
          answer: "A",
          explanation: "if converts the condition to a boolean. 0 is one of the falsy values (false, 0, \"\", null, undefined, NaN), so the else branch runs.",
          related: ["Truthiness"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconst arr = [];\nif (arr) console.log(\"truthy\");\nelse console.log(\"falsy\");",
          options: {
            A: "truthy - an empty ARRAY is truthy in JavaScript",
            B: "falsy",
            C: "Error",
            D: "undefined"
          },
          answer: "A",
          explanation: "All objects, including empty arrays and objects, are truthy. To test emptiness use arr.length === 0. (In Python [] is falsy - a common cross-language mix-up.)",
          code: "if (arr.length === 0) console.log(\"empty\");",
          related: ["Truthiness", "Arrays"]
        },
        {
          difficulty: "medium",
          question: "How do you require BOTH conditions to be true?",
          options: {
            A: "if (a > 0 && b > 0)",
            B: "if (a > 0 and b > 0)",
            C: "if (a > 0 AND b > 0)",
            D: "if (a > 0, b > 0)"
          },
          answer: "A",
          explanation: "JavaScript uses the symbols && (AND), || (OR) and ! (NOT) - not the words. (Python uses the words.)",
          related: ["Logical operators"]
        },
        {
          difficulty: "medium",
          question: "What is the switch statement used for?",
          options: {
            A: "Comparing ONE value against several possible cases - a tidy alternative to a long else-if chain",
            B: "Looping",
            C: "Switching variable types",
            D: "Error handling"
          },
          answer: "A",
          explanation: "switch compares the expression to each case using strict equality (===) and runs the matching block.",
          code: "switch (day) {\n  case \"Mon\": console.log(\"Start\"); break;\n  case \"Fri\": console.log(\"Almost!\"); break;\n  default: console.log(\"Midweek\");\n}",
          related: ["switch", "case"]
        },
        {
          difficulty: "hard",
          question: "What happens if you forget break in a switch case?",
          options: {
            A: "Execution FALLS THROUGH into the following cases until it hits a break or the end",
            B: "SyntaxError",
            C: "Only that case runs anyway",
            D: "The switch is skipped"
          },
          answer: "A",
          explanation: "Without break, JavaScript continues executing subsequent case bodies regardless of their labels. This causes real bugs - but is occasionally used deliberately to group cases.",
          code: "switch (x) {\n  case 1:\n    console.log(\"one\");   // no break - falls through!\n  case 2:\n    console.log(\"two\");\n    break;\n}\n// x = 1 prints BOTH 'one' and 'two'",
          related: ["Fall-through", "break"]
        },
        {
          difficulty: "medium",
          question: "How can fall-through be used INTENTIONALLY?",
          options: {
            A: "Stack several case labels together so they share one block of code",
            B: "It can never be useful",
            C: "By writing break twice",
            D: "By using continue"
          },
          answer: "A",
          explanation: "Empty cases stacked above a shared body let several values run the same code - the one legitimate use of fall-through.",
          code: "switch (day) {\n  case \"Sat\":\n  case \"Sun\":\n    console.log(\"Weekend\");\n    break;\n  default:\n    console.log(\"Weekday\");\n}",
          related: ["switch", "Grouping cases"]
        },
        {
          difficulty: "medium",
          question: "What does the default clause in a switch do?",
          options: {
            A: "Runs when no case matched - like else",
            B: "Runs first",
            C: "Runs always",
            D: "Is required"
          },
          answer: "A",
          explanation: "default is optional and handles unmatched values. By convention it goes last (though technically it can appear anywhere).",
          related: ["switch", "default"]
        },
        {
          difficulty: "hard",
          question: "Does switch use == or === for matching?",
          options: {
            A: "=== (strict) - so \"5\" does NOT match case 5",
            B: "== (loose)",
            C: "It depends on the browser",
            D: "It uses Object.is"
          },
          answer: "A",
          explanation: "switch uses strict comparison. A value read from an input field (a string) will not match a numeric case - convert it first with Number().",
          code: "const val = \"5\";      // from a form\nswitch (Number(val)) {  // convert first!\n  case 5: console.log(\"five\");\n}",
          related: ["Strict equality", "Forms"]
        },
        {
          difficulty: "medium",
          question: "What is the ternary equivalent of this?\nif (age >= 18) s = \"adult\"; else s = \"minor\";",
          options: {
            A: "const s = age >= 18 ? \"adult\" : \"minor\";",
            B: "const s = if age >= 18 then \"adult\" else \"minor\";",
            C: "const s = (age >= 18) ? \"adult\" | \"minor\";",
            D: "const s = age >= 18 : \"adult\" ? \"minor\";"
          },
          answer: "A",
          explanation: "condition ? valueIfTrue : valueIfFalse. It is an expression, so it can be assigned, returned, or embedded in a template literal.",
          code: "console.log(`You are ${age >= 18 ? \"adult\" : \"minor\"}`);",
          related: ["Ternary"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log(true ? \"a\" : false ? \"b\" : \"c\");",
          options: {
            A: "\"a\" - the first condition is true so the rest is skipped",
            B: "\"b\"",
            C: "\"c\"",
            D: "SyntaxError"
          },
          answer: "A",
          explanation: "Nested ternaries evaluate left to right; the true branch returns \"a\" immediately. Nesting more than one level hurts readability - prefer if/else there.",
          related: ["Ternary", "Nesting"]
        },
        {
          difficulty: "medium",
          question: "What does this pattern do?\nisLoggedIn && showDashboard();",
          options: {
            A: "Calls showDashboard() only if isLoggedIn is truthy - short-circuit evaluation",
            B: "Always calls showDashboard()",
            C: "Compares the two",
            D: "SyntaxError"
          },
          answer: "A",
          explanation: "&& stops at the first falsy operand, so the right side runs only when the left is truthy. Common in React JSX for conditional rendering.",
          code: "// equivalent to:\nif (isLoggedIn) showDashboard();",
          related: ["Short-circuit", "Guard clause"]
        },
        {
          difficulty: "medium",
          question: "What does this do?\nconst name = input || \"Guest\";",
          options: {
            A: "Uses input if it is truthy, otherwise falls back to \"Guest\"",
            B: "Always uses \"Guest\"",
            C: "Compares them",
            D: "Concatenates them"
          },
          answer: "A",
          explanation: "|| returns the first truthy operand. Careful: it also replaces valid values like 0 and \"\" - use ?? if only null/undefined should trigger the fallback.",
          code: "const count = 0;\nconsole.log(count || 10);   // 10 - probably wrong\nconsole.log(count ?? 10);   // 0  - correct",
          related: ["Defaults", "Nullish coalescing"]
        },
        {
          difficulty: "medium",
          question: "What is a guard clause?",
          options: {
            A: "An early return for invalid cases, so the main logic stays unindented",
            B: "A security check",
            C: "A type of loop",
            D: "A try/catch block"
          },
          answer: "A",
          explanation: "Handling the exceptional cases first and returning early avoids deep nesting and keeps the 'happy path' readable.",
          code: "function process(user) {\n  if (!user) return;          // guard\n  if (!user.active) return;   // guard\n  // main logic, not nested\n}",
          related: ["Early return", "Readability"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nif (\"0\") console.log(\"A\");\nelse console.log(\"B\");",
          options: {
            A: "A - the STRING \"0\" is non-empty, therefore truthy",
            B: "B",
            C: "0",
            D: "Error"
          },
          answer: "A",
          explanation: "Only the empty string is falsy; \"0\" and \"false\" are truthy strings. Values arriving from APIs, forms or localStorage are strings - compare explicitly rather than relying on truthiness.",
          related: ["Truthiness", "Gotchas"]
        },
        {
          difficulty: "medium",
          question: "How do you check that a value is between 10 and 20 inclusive?",
          options: {
            A: "if (x >= 10 && x <= 20)",
            B: "if (10 <= x <= 20)",
            C: "if (x between 10, 20)",
            D: "if (x in [10, 20])"
          },
          answer: "A",
          explanation: "Chained comparisons do not work in JavaScript: 10 <= x <= 20 evaluates left to right into a boolean, then compares that boolean to 20 - always true. Combine with &&.",
          related: ["Chained comparison", "Logical AND"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nlet x;\nif (x === undefined) console.log(\"unset\");\nelse console.log(\"set\");",
          options: { A: "unset", B: "set", C: "undefined", D: "Error" },
          answer: "A",
          explanation: "A declared but unassigned variable holds undefined, so the strict comparison succeeds. Alternatively 'if (x == null)' catches both undefined and null.",
          related: ["undefined", "Checks"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nif (1 < 2 < 3) console.log(\"A\");\nif (3 > 2 > 1) console.log(\"B\");",
          options: {
            A: "A only - (3>2) becomes true, then true > 1 is false",
            B: "A and B",
            C: "B only",
            D: "Neither"
          },
          answer: "A",
          explanation: "1 < 2 gives true, and true < 3 converts true to 1, so 1 < 3 is true (prints A). But 3 > 2 gives true, and true > 1 is 1 > 1 which is false (no B). Never chain comparisons.",
          related: ["Coercion", "Comparison chains"]
        },
        {
          difficulty: "medium",
          question: "Which is the cleanest way to check several possible values?\nif (fruit is apple, mango or banana)",
          options: {
            A: "if ([\"apple\", \"mango\", \"banana\"].includes(fruit))",
            B: "if (fruit == \"apple\" || fruit == \"mango\" || fruit == \"banana\")",
            C: "if (fruit in \"apple mango banana\")",
            D: "if (fruit === [\"apple\", \"mango\"])"
          },
          answer: "A",
          explanation: "includes() on an array is readable and easy to extend. Option B works but grows unwieldy; option D compares against an array object and is always false.",
          related: ["includes", "Readability"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nconst x = 5;\nconsole.log(x > 3 ? x > 4 ? \"big\" : \"medium\" : \"small\");",
          options: { A: "big", B: "medium", C: "small", D: "SyntaxError" },
          answer: "A",
          explanation: "x > 3 is true, so evaluate the nested ternary: x > 4 is also true, giving \"big\". Correct, but this is exactly the nesting that hurts readability.",
          related: ["Nested ternary"]
        },
        {
          difficulty: "medium",
          question: "Does an if block create a new scope for let/const?",
          options: {
            A: "Yes - let and const inside { } are not visible outside; var would leak",
            B: "No, if blocks never create scope",
            C: "Only in strict mode",
            D: "Only for const"
          },
          answer: "A",
          explanation: "Curly braces form a block scope for let/const. var ignores blocks and belongs to the enclosing function - one of the main reasons to avoid var.",
          code: "if (true) {\n  let a = 1;\n  var b = 2;\n}\n// console.log(a);  // ReferenceError\nconsole.log(b);      // 2 - leaked",
          related: ["Block scope", "var vs let"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconst v = null;\nif (v?.name) console.log(\"has name\");\nelse console.log(\"no name\");",
          options: {
            A: "no name - optional chaining returns undefined instead of throwing",
            B: "TypeError",
            C: "has name",
            D: "null"
          },
          answer: "A",
          explanation: "Without ?., reading v.name on null throws 'Cannot read properties of null'. Optional chaining short-circuits to undefined, which is falsy, so else runs.",
          related: ["Optional chaining", "Null safety"]
        },
        {
          difficulty: "medium",
          question: "Which condition correctly checks that a string is non-empty after trimming?",
          options: {
            A: "if (input.trim() !== \"\")",
            B: "if (input !== null)",
            C: "if (input.length)  // fails for \"   \"",
            D: "if (input)"
          },
          answer: "A",
          explanation: "A string of only spaces is truthy and has length > 0, so options C and D wrongly accept it. Trim first, then compare - standard form validation.",
          code: "if (nameInput.value.trim() !== \"\") { }",
          related: ["Validation", "trim"]
        },
        {
          difficulty: "medium",
          question: "What is the recommended way to write a long chain of conditions on ONE variable?",
          options: {
            A: "A switch statement, or an object/map lookup",
            B: "Deeply nested ifs",
            C: "Many separate if statements",
            D: "A while loop"
          },
          answer: "A",
          explanation: "switch reads better than a long else-if chain. For simple value-to-value mappings, an object lookup is even cleaner and easier to extend.",
          code: "const messages = { 404: \"Not found\", 500: \"Server error\" };\nconst msg = messages[code] ?? \"Unknown\";",
          related: ["switch", "Lookup tables"]
        }
      ]
    }
  ]
});
