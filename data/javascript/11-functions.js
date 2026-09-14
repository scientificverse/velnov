/* ============================================================
   JAVASCRIPT - TOPIC 11: FUNCTIONS & ARROW FUNCTIONS (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "JavaScript",
  icon: "🟨",
  color: "#b8860b",
  description: "The language of the web - basics to advanced, 20 topics.",
  topics: [
    {
      name: "11. Functions & Arrow Functions",
      questions: [
        {
          difficulty: "easy",
          question: "Which is a function DECLARATION?",
          options: {
            A: "function greet() { }",
            B: "const greet = function() { };",
            C: "const greet = () => { };",
            D: "greet: function() { }"
          },
          answer: "A",
          explanation: "A declaration starts with the function keyword and has a name. Options B and C are function EXPRESSIONS (a function assigned to a variable).",
          related: ["Declarations", "Expressions"]
        },
        {
          difficulty: "medium",
          question: "What is the key practical difference between a function declaration and an expression?",
          options: {
            A: "Declarations are fully HOISTED, so they can be called before they appear; expressions cannot",
            B: "Expressions run faster",
            C: "Declarations cannot take parameters",
            D: "There is no difference"
          },
          answer: "A",
          explanation: "Declarations are lifted with their body, so calling them earlier in the file works. Function expressions follow variable hoisting rules, so calling early gives an error.",
          code: "sayHi();                       // works\nfunction sayHi() { }\n\nsayBye();                      // TypeError/ReferenceError\nconst sayBye = function() { };",
          related: ["Hoisting"]
        },
        {
          difficulty: "easy",
          question: "What does a function return if there is no return statement?",
          options: { A: "undefined", B: "null", C: "0", D: "An error" },
          answer: "A",
          explanation: "Every JavaScript function returns something; without an explicit return the result is undefined.",
          code: "function log(msg) { console.log(msg); }\nconst r = log(\"hi\");\nconsole.log(r);   // undefined",
          related: ["return", "undefined"]
        },
        {
          difficulty: "easy",
          question: "What is the arrow-function equivalent of\nfunction double(n) { return n * 2; }",
          options: {
            A: "const double = n => n * 2;",
            B: "const double = n => { n * 2; };",
            C: "const double => n * 2;",
            D: "arrow double(n) { n * 2 }"
          },
          answer: "A",
          explanation: "A concise arrow body (no braces) returns its expression automatically. Option B has braces without return, so it yields undefined.",
          related: ["Arrow functions", "Implicit return"]
        },
        {
          difficulty: "medium",
          question: "When can you omit the parentheses around an arrow function's parameter?",
          options: {
            A: "With exactly ONE parameter: n => n * 2",
            B: "Always",
            C: "Never",
            D: "Only with zero parameters"
          },
          answer: "A",
          explanation: "Zero parameters need (), and two or more need (a, b). A single parameter may drop them - though many style guides require them for consistency.",
          code: "() => 42\nn => n * 2\n(a, b) => a + b",
          related: ["Arrow syntax"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconst f = n => { n * 2 };\nconsole.log(f(5));",
          options: {
            A: "undefined - braces create a block body, which needs an explicit return",
            B: "10",
            C: "5",
            D: "SyntaxError"
          },
          answer: "A",
          explanation: "Curly braces switch the arrow to a full function body. Either remove them (n => n * 2) or add return (n => { return n * 2; }). A very common bug inside map().",
          related: ["Arrow functions", "Common mistakes"]
        },
        {
          difficulty: "medium",
          question: "How do you give a parameter a DEFAULT value?",
          options: {
            A: "function greet(name = \"Guest\") { }",
            B: "function greet(name || \"Guest\") { }",
            C: "function greet(name: \"Guest\") { }",
            D: "function greet(default name) { }"
          },
          answer: "A",
          explanation: "Default parameters (ES6) apply when the argument is undefined (including when omitted). They may reference earlier parameters too.",
          code: "function greet(name = \"Guest\") { return `Hi ${name}`; }\ngreet();          // Hi Guest\ngreet(undefined); // Hi Guest\ngreet(null);      // Hi null - null is NOT undefined!",
          related: ["Default parameters"]
        },
        {
          difficulty: "medium",
          question: "What happens when you call a function with FEWER arguments than parameters?",
          options: {
            A: "The missing parameters are undefined - no error is thrown",
            B: "TypeError",
            C: "The call is ignored",
            D: "They default to 0"
          },
          answer: "A",
          explanation: "JavaScript never enforces argument counts. Extra arguments are ignored; missing ones become undefined. This flexibility makes defaults and validation important.",
          related: ["Arguments", "undefined"]
        },
        {
          difficulty: "medium",
          question: "What do REST parameters do?\nfunction sum(...nums) { }",
          options: {
            A: "Collect all remaining arguments into a real ARRAY",
            B: "Spread an array into arguments",
            C: "Limit the function to 3 arguments",
            D: "Create optional parameters"
          },
          answer: "A",
          explanation: "...nums gathers any number of arguments into an array you can map/reduce over. It must be the LAST parameter.",
          code: "function sum(...nums) {\n  return nums.reduce((a, b) => a + b, 0);\n}\nconsole.log(sum(1, 2, 3));   // 6",
          related: ["Rest parameters", "Spread"]
        },
        {
          difficulty: "hard",
          question: "What is the difference between rest (...) in a definition and spread (...) in a call?",
          options: {
            A: "Rest COLLECTS arguments into an array; spread EXPANDS an array into separate arguments",
            B: "They are the same",
            C: "Rest only works with numbers",
            D: "Spread only works in definitions"
          },
          answer: "A",
          explanation: "Same three dots, opposite directions - context decides. Definition side = gather; call side = scatter.",
          code: "function sum(...nums) { }     // rest: gather\nsum(...[1, 2, 3]);              // spread: scatter",
          related: ["Rest", "Spread"]
        },
        {
          difficulty: "hard",
          question: "What is the arguments object, and do arrow functions have it?",
          options: {
            A: "An array-LIKE object of all passed arguments in regular functions - arrow functions do NOT have it",
            B: "A real array available everywhere",
            C: "Only available in arrow functions",
            D: "It stores return values"
          },
          answer: "A",
          explanation: "arguments exists in traditional functions but is not a real array (no map/filter). Arrow functions inherit it from the enclosing scope instead. Modern code prefers rest parameters.",
          code: "function old() { console.log(arguments[0]); }\nconst modern = (...args) => console.log(args[0]);   // preferred",
          related: ["arguments", "Rest parameters"]
        },
        {
          difficulty: "medium",
          question: "What is a callback function?",
          options: {
            A: "A function passed to another function to be called later",
            B: "A function that calls itself",
            C: "A function that returns a function",
            D: "A built-in browser function"
          },
          answer: "A",
          explanation: "Callbacks power event handlers, timers and array methods: you hand over a function and the other code decides when to run it.",
          code: "setTimeout(() => console.log(\"later\"), 1000);\nbtn.addEventListener(\"click\", handleClick);\n[1,2].map(n => n * 2);",
          related: ["Callbacks", "Higher-order functions"]
        },
        {
          difficulty: "hard",
          question: "What is the difference between passing greet and greet()?\nbtn.addEventListener(\"click\", greet);",
          options: {
            A: "greet passes the FUNCTION itself; greet() CALLS it immediately and passes its return value",
            B: "They are identical",
            C: "greet() is required for events",
            D: "greet is invalid"
          },
          answer: "A",
          explanation: "Adding parentheses runs the function right away and registers whatever it returned (usually undefined) as the handler - so nothing happens on click. Omit them, or wrap in an arrow: () => greet(arg).",
          code: "btn.addEventListener(\"click\", greet);         // correct\nbtn.addEventListener(\"click\", greet());       // WRONG - runs now\nbtn.addEventListener(\"click\", () => greet(1)); // correct with args",
          notes: ["A top-three beginner bug with event listeners."],
          related: ["Callbacks", "Events"]
        },
        {
          difficulty: "medium",
          question: "What is a higher-order function?",
          options: {
            A: "A function that takes a function as an argument and/or returns a function",
            B: "A function with many parameters",
            C: "A function declared first in a file",
            D: "A recursive function"
          },
          answer: "A",
          explanation: "map, filter, addEventListener and setTimeout are all higher-order. Functions being first-class values (storable, passable, returnable) is what makes this possible.",
          related: ["First-class functions", "map"]
        },
        {
          difficulty: "hard",
          question: "What is an IIFE?\n(function() { ... })();",
          options: {
            A: "Immediately Invoked Function Expression - it runs the moment it is defined, creating a private scope",
            B: "A function that never runs",
            C: "An imported function",
            D: "A class constructor"
          },
          answer: "A",
          explanation: "Before ES6 modules, IIFEs were the way to avoid polluting the global scope. The wrapping parentheses turn the declaration into an expression, and the trailing () invokes it.",
          code: "(function() {\n  const secret = 42;   // not global\n})();\n\n(() => { /* arrow IIFE */ })();",
          related: ["IIFE", "Scope"]
        },
        {
          difficulty: "medium",
          question: "What is function recursion?",
          options: {
            A: "A function calling ITSELF, with a base case to stop",
            B: "Two functions calling each other only",
            C: "A loop inside a function",
            D: "Calling a function twice"
          },
          answer: "A",
          explanation: "Recursion breaks a problem into smaller identical problems. Every recursive function needs a base case, or it hits 'Maximum call stack size exceeded'.",
          code: "function factorial(n) {\n  if (n <= 1) return 1;        // base case\n  return n * factorial(n - 1);\n}\nconsole.log(factorial(5));   // 120",
          related: ["Recursion", "Call stack"]
        },
        {
          difficulty: "medium",
          question: "What error does infinite recursion cause?",
          options: {
            A: "RangeError: Maximum call stack size exceeded",
            B: "SyntaxError",
            C: "TypeError",
            D: "It runs forever silently"
          },
          answer: "A",
          explanation: "Each call adds a frame to the call stack; without a base case the stack overflows. The error message is the signature of a missing or unreachable base case.",
          related: ["Call stack", "RangeError"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nfunction f(x) { x = 99; }\nlet a = 5;\nf(a);\nconsole.log(a);",
          options: {
            A: "5 - primitives are passed BY VALUE, so the function got a copy",
            B: "99",
            C: "undefined",
            D: "Error"
          },
          answer: "A",
          explanation: "Reassigning a parameter only changes the local copy. To change the caller's value, return the new one and reassign.",
          related: ["Pass by value", "Primitives"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nfunction f(obj) { obj.n = 99; }\nconst o = { n: 5 };\nf(o);\nconsole.log(o.n);",
          options: {
            A: "99 - objects are passed by reference VALUE, so mutations are visible outside",
            B: "5",
            C: "undefined",
            D: "Error"
          },
          answer: "A",
          explanation: "The parameter points at the same object, so mutating its properties affects the caller. But REASSIGNING the parameter (obj = {}) would not - the reference itself was copied.",
          code: "function g(obj) { obj = { n: 0 }; }   // no outside effect\ng(o);\nconsole.log(o.n);   // still 99",
          related: ["Pass by reference", "Mutation"]
        },
        {
          difficulty: "medium",
          question: "What is a pure function?",
          options: {
            A: "One that returns the same output for the same input and causes no side effects",
            B: "A function with no parameters",
            C: "An arrow function",
            D: "A function that only uses const"
          },
          answer: "A",
          explanation: "Pure functions do not modify external state, DOM or their arguments. They are easy to test, cache and reason about - the backbone of functional style and React.",
          code: "const add = (a, b) => a + b;          // pure\nlet total = 0;\nconst addTo = n => { total += n; };   // impure (side effect)",
          related: ["Purity", "Side effects"]
        },
        {
          difficulty: "hard",
          question: "How do arrow functions differ from regular functions regarding this?",
          options: {
            A: "Arrows have no own this - they inherit it from the surrounding scope (lexical this)",
            B: "Arrows always set this to window",
            C: "They behave identically",
            D: "Arrows set this to undefined always"
          },
          answer: "A",
          explanation: "This is the biggest practical difference. Arrows are perfect for callbacks inside methods (where you want the outer this) and wrong as object methods (where you want the object).",
          code: "const timer = {\n  count: 0,\n  start() {\n    setInterval(() => this.count++, 1000);   // arrow keeps this\n  }\n};",
          related: ["this", "Arrow functions"]
        },
        {
          difficulty: "hard",
          question: "Which is NOT true of arrow functions?",
          options: {
            A: "They can be used as constructors with new",
            B: "They have no own this",
            C: "They have no arguments object",
            D: "They can have implicit returns"
          },
          answer: "A",
          explanation: "Arrow functions cannot be called with new - 'is not a constructor'. They also lack prototype, this, arguments and super. Use regular functions or classes for constructors.",
          related: ["Arrow limitations", "Constructors"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nconst nums = [1, 2, 3];\nconsole.log(nums.map(function(n) { return n * 2; }));",
          options: { A: "[2, 4, 6]", B: "[1, 2, 3]", C: "undefined", D: "Error" },
          answer: "A",
          explanation: "An anonymous function expression works exactly like an arrow here. The arrow version is shorter: nums.map(n => n * 2).",
          related: ["Anonymous functions", "map"]
        },
        {
          difficulty: "medium",
          question: "What is a named function expression useful for?\nconst f = function myFunc() { };",
          options: {
            A: "The name appears in stack traces and allows self-reference inside the function",
            B: "It creates two functions",
            C: "It is required by strict mode",
            D: "It makes it global"
          },
          answer: "A",
          explanation: "The internal name aids debugging and recursion, but is not visible outside the function - only f exists in the enclosing scope.",
          related: ["Named expressions", "Debugging"]
        },
        {
          difficulty: "hard",
          question: "What does this return?\nfunction add(a) { return b => a + b; }\nconst add5 = add(5);\nconsole.log(add5(3));",
          options: {
            A: "8 - add returns a function that remembers a (a closure)",
            B: "5",
            C: "3",
            D: "undefined"
          },
          answer: "A",
          explanation: "add(5) produces a specialised function with a fixed at 5. This technique - a function returning a function - is called currying and relies on closures.",
          related: ["Closures", "Currying"]
        },
        {
          difficulty: "medium",
          question: "How do you write a function that takes an options OBJECT?",
          options: {
            A: "function create({ width = 100, height = 50 } = {}) { }",
            B: "function create(options[]) { }",
            C: "function create(width, height, ...) { }",
            D: "function create(object) { }"
          },
          answer: "A",
          explanation: "Destructuring with defaults, plus '= {}' so calling with no arguments still works. Callers pass named options in any order - self-documenting and easy to extend.",
          code: "create({ height: 80 });   // width defaults to 100\ncreate();                  // both defaults",
          related: ["Destructuring", "Options pattern"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nconsole.log(typeof function() {});",
          options: { A: "\"function\"", B: "\"object\"", C: "\"undefined\"", D: "\"method\"" },
          answer: "A",
          explanation: "Functions are objects internally, but typeof reports \"function\" - the standard way to check whether something is callable before calling it.",
          code: "if (typeof callback === \"function\") callback();",
          related: ["typeof", "Callbacks"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nfunction f() { return; \n  42; }\nconsole.log(f());",
          options: {
            A: "undefined - Automatic Semicolon Insertion ends the return statement at the line break",
            B: "42",
            C: "SyntaxError",
            D: "null"
          },
          answer: "A",
          explanation: "ASI inserts a semicolon right after return, making 42 unreachable code. Always put the returned value on the SAME line as return - especially with multi-line objects (use a parenthesis on the return line).",
          code: "return {      // correct - brace on the same line\n  a: 1\n};",
          related: ["ASI", "return", "Gotchas"]
        },
        {
          difficulty: "medium",
          question: "Which naming style is conventional for functions?",
          options: {
            A: "camelCase verbs: calculateTotal(), getUserById()",
            B: "PascalCase: CalculateTotal()",
            C: "snake_case: calculate_total()",
            D: "ALL_CAPS"
          },
          answer: "A",
          explanation: "Functions do things, so names usually start with a verb in camelCase. PascalCase is reserved for classes and React components.",
          related: ["Conventions", "Naming"]
        },
        {
          difficulty: "medium",
          question: "Why break code into small functions?",
          options: {
            A: "Reuse, easier testing, self-documenting names, and no duplicated logic",
            B: "Functions always run faster",
            C: "JavaScript requires at least five",
            D: "To use more memory"
          },
          answer: "A",
          explanation: "A well-named function replaces a comment and can be tested in isolation. The DRY principle - Don't Repeat Yourself - is the core motivation.",
          related: ["DRY", "Code organisation"]
        }
      ]
    }
  ]
});
