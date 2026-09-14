/* ============================================================
   JAVASCRIPT - TOPIC 12: SCOPE & HOISTING (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "JavaScript",
  icon: "🟨",
  color: "#b8860b",
  description: "The language of the web - basics to advanced, 20 topics.",
  topics: [
    {
      name: "12. Scope & Hoisting",
      questions: [
        {
          difficulty: "easy",
          question: "What is 'scope'?",
          options: {
            A: "The region of code where a variable is accessible",
            B: "The size of a variable",
            C: "The type of a variable",
            D: "How long a variable lives in memory"
          },
          answer: "A",
          explanation: "Scope decides where a name can be seen. JavaScript has global scope, function scope, block scope and module scope.",
          related: ["Scope", "Variables"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nfunction f() { var x = 1; }\nf();\nconsole.log(x);",
          options: {
            A: "ReferenceError - x is local to f",
            B: "1",
            C: "undefined",
            D: "null"
          },
          answer: "A",
          explanation: "Variables declared inside a function are invisible outside it. This encapsulation is a feature - it prevents name collisions.",
          related: ["Function scope"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nif (true) { var a = 1; let b = 2; }\nconsole.log(a, typeof b);",
          options: {
            A: "1 \"undefined\" - var leaks out of the block, let does not",
            B: "1 2",
            C: "ReferenceError",
            D: "undefined undefined"
          },
          answer: "A",
          explanation: "var ignores blocks and belongs to the whole function, so a escapes. b is block-scoped, so it does not exist outside - typeof safely reports \"undefined\" instead of throwing.",
          related: ["Block scope", "var vs let"]
        },
        {
          difficulty: "easy",
          question: "Which declarations are BLOCK-scoped?",
          options: { A: "let and const", B: "var only", C: "All three", D: "None" },
          answer: "A",
          explanation: "let and const respect { } braces (if, for, while, or a bare block). var is function-scoped and ignores blocks - the main reason modern code avoids it.",
          related: ["let", "const", "Block scope"]
        },
        {
          difficulty: "medium",
          question: "What is hoisting?",
          options: {
            A: "JavaScript moving DECLARATIONS to the top of their scope before running the code",
            B: "Moving code to the server",
            C: "Optimising loops",
            D: "Deleting unused variables"
          },
          answer: "A",
          explanation: "During compilation, declarations are registered first. Only the declaration is hoisted, not the assigned value - which is why var variables read as undefined before their assignment line.",
          related: ["Hoisting", "Execution context"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nconsole.log(x);\nvar x = 5;",
          options: {
            A: "undefined - the declaration is hoisted but the assignment is not",
            B: "5",
            C: "ReferenceError",
            D: "null"
          },
          answer: "A",
          explanation: "JavaScript effectively runs 'var x;' first (giving undefined), then 'x = 5' at its original position.",
          related: ["Hoisting", "var"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log(y);\nlet y = 5;",
          options: {
            A: "ReferenceError: Cannot access 'y' before initialization",
            B: "undefined",
            C: "5",
            D: "null"
          },
          answer: "A",
          explanation: "let and const ARE hoisted, but sit in the Temporal Dead Zone until their declaration line - accessing them there throws. This surfaces bugs that var would have hidden as undefined.",
          related: ["TDZ", "let"]
        },
        {
          difficulty: "hard",
          question: "What is the Temporal Dead Zone (TDZ)?",
          options: {
            A: "The span between entering a scope and the let/const declaration, where the variable exists but cannot be touched",
            B: "A memory leak",
            C: "A slow region of code",
            D: "An old browser feature"
          },
          answer: "A",
          explanation: "The TDZ is why let/const feel 'not hoisted' - they are, but access is forbidden until initialised. It catches use-before-declare mistakes early.",
          related: ["TDZ", "Hoisting"]
        },
        {
          difficulty: "medium",
          question: "Are FUNCTION DECLARATIONS hoisted with their body?",
          options: {
            A: "Yes - you can call them before they are defined in the file",
            B: "No, never",
            C: "Only in strict mode",
            D: "Only inside functions"
          },
          answer: "A",
          explanation: "Function declarations are fully hoisted, so helper functions can be defined at the bottom of a file. Function EXPRESSIONS follow variable rules and cannot be called early.",
          code: "greet();                    // works\nfunction greet() { }\n\nhello();                    // TypeError\nvar hello = function() { };",
          related: ["Hoisting", "Declarations"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nhello();\nvar hello = function() { console.log(\"hi\"); };",
          options: {
            A: "TypeError: hello is not a function - the var is hoisted as undefined",
            B: "hi",
            C: "ReferenceError",
            D: "undefined"
          },
          answer: "A",
          explanation: "At call time hello holds undefined, and calling undefined throws a TypeError. Note the ERROR TYPE differs from a truly undeclared name (ReferenceError) - useful for diagnosing.",
          related: ["Hoisting", "TypeError"]
        },
        {
          difficulty: "medium",
          question: "What is lexical scope?",
          options: {
            A: "Inner functions can access variables from the scope where they were WRITTEN",
            B: "Scope determined by where a function is called",
            C: "Global scope only",
            D: "Random scoping"
          },
          answer: "A",
          explanation: "JavaScript uses static/lexical scoping: nesting in the source decides visibility, not the call site. This is what makes closures predictable.",
          code: "function outer() {\n  const msg = \"hi\";\n  function inner() { console.log(msg); }   // sees msg\n  inner();\n}",
          related: ["Lexical scope", "Closures"]
        },
        {
          difficulty: "medium",
          question: "What is the scope chain?",
          options: {
            A: "The lookup path: current scope, then enclosing scopes, up to global",
            B: "A list of all functions",
            C: "The call stack",
            D: "A linked list of objects"
          },
          answer: "A",
          explanation: "When a name is used, JavaScript searches outward one level at a time and stops at the first match. Not finding it anywhere gives a ReferenceError.",
          related: ["Scope chain", "Lookup"]
        },
        {
          difficulty: "medium",
          question: "What is variable shadowing?\nlet x = 1;\nfunction f() { let x = 2; }",
          options: {
            A: "An inner variable with the same name HIDES the outer one inside that scope",
            B: "An error",
            C: "The outer value is deleted",
            D: "Both variables merge"
          },
          answer: "A",
          explanation: "The inner x is a separate variable; the outer one is untouched and reappears outside the function. Shadowing is legal but can confuse readers if overused.",
          related: ["Shadowing", "Scope"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nlet x = 1;\nfunction f() { console.log(x); let x = 2; }\nf();",
          options: {
            A: "ReferenceError - the inner let shadows x for the WHOLE function, creating a TDZ",
            B: "1",
            C: "2",
            D: "undefined"
          },
          answer: "A",
          explanation: "Because f declares its own x, every reference inside f refers to the LOCAL x - which is in its TDZ on the console.log line. Shadowing applies to the entire block, not just after the declaration.",
          related: ["TDZ", "Shadowing"]
        },
        {
          difficulty: "medium",
          question: "What is the global scope in a browser?",
          options: {
            A: "The outermost scope, whose var declarations and function declarations attach to window",
            B: "Any function's scope",
            C: "The scope inside a module",
            D: "Block scope"
          },
          answer: "A",
          explanation: "var x = 1 at top level creates window.x. let/const do NOT attach to window, and ES modules have their own module scope entirely.",
          code: "var a = 1;\nlet b = 2;\nconsole.log(window.a);   // 1\nconsole.log(window.b);   // undefined",
          related: ["Global scope", "window"]
        },
        {
          difficulty: "medium",
          question: "Why is polluting the global scope a problem?",
          options: {
            A: "Names can collide between scripts, causing hard-to-trace bugs",
            B: "It uses more disk space",
            C: "Globals are always slower",
            D: "It is a syntax error"
          },
          answer: "A",
          explanation: "Two libraries both defining 'config' would overwrite each other. Modules, IIFEs and block scoping exist to keep names contained.",
          related: ["Globals", "Modules"]
        },
        {
          difficulty: "hard",
          question: "What is the output (non-strict mode)?\nfunction f() { undeclared = 5; }\nf();\nconsole.log(undeclared);",
          options: {
            A: "5 - assigning without a keyword creates an accidental GLOBAL",
            B: "ReferenceError",
            C: "undefined",
            D: "SyntaxError"
          },
          answer: "A",
          explanation: "Sloppy mode silently creates a global, which is why 'use strict' (and modules) turn this into a ReferenceError. Always declare with const or let.",
          related: ["Implicit globals", "Strict mode"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nfor (var i = 0; i < 3; i++) { }\nconsole.log(i);",
          options: {
            A: "3 - var leaks out of the loop and keeps its final value",
            B: "ReferenceError",
            C: "2",
            D: "undefined"
          },
          answer: "A",
          explanation: "var is function-scoped, so the counter survives the loop. With let, i exists only inside the loop and this line would throw - usually what you want.",
          related: ["var", "let", "Loops"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nfor (let i = 0; i < 3; i++) setTimeout(() => console.log(i));",
          options: {
            A: "0 1 2 - let creates a fresh binding per iteration",
            B: "3 3 3",
            C: "0 0 0",
            D: "undefined"
          },
          answer: "A",
          explanation: "Each iteration gets its own i, so each callback captures a different value. With var, all three would share one binding and print 3 3 3.",
          related: ["Closures", "let", "Loops"]
        },
        {
          difficulty: "medium",
          question: "Do blocks like { } (standalone) create scope for let?",
          options: {
            A: "Yes - any pair of braces creates a block scope for let/const",
            B: "Only in functions",
            C: "No",
            D: "Only in loops"
          },
          answer: "A",
          explanation: "You can use a bare block to limit a temporary variable's lifetime, useful in switch cases to avoid redeclaration errors.",
          code: "{\n  let temp = compute();\n  use(temp);\n}\n// temp is gone here",
          related: ["Block scope"]
        },
        {
          difficulty: "hard",
          question: "Why does this throw in a switch?\nswitch (x) { case 1: let a = 1; break; case 2: let a = 2; }",
          options: {
            A: "The whole switch body is ONE block, so a is declared twice",
            B: "let is not allowed in switch",
            C: "break is missing",
            D: "It does not throw"
          },
          answer: "A",
          explanation: "All cases share a single block scope. Wrap each case body in its own braces { } to give each a private scope.",
          code: "case 1: { let a = 1; break; }\ncase 2: { let a = 2; break; }",
          related: ["switch", "Block scope"]
        },
        {
          difficulty: "medium",
          question: "What does 'use strict' change about scope?",
          options: {
            A: "Assigning to an undeclared variable throws instead of creating a global",
            B: "It removes function scope",
            C: "It makes everything global",
            D: "Nothing"
          },
          answer: "A",
          explanation: "Strict mode also forbids duplicate parameter names and changes this in plain function calls from window to undefined. ES modules and class bodies are strict automatically.",
          related: ["Strict mode"]
        },
        {
          difficulty: "hard",
          question: "In a regular (non-method) function call in strict mode, what is this?",
          options: {
            A: "undefined (in sloppy mode it would be window)",
            B: "Always window",
            C: "The function itself",
            D: "null"
          },
          answer: "A",
          explanation: "Strict mode stops this from silently defaulting to the global object, which prevents accidental global property writes inside functions.",
          related: ["this", "Strict mode"]
        },
        {
          difficulty: "medium",
          question: "What scope do ES modules have?",
          options: {
            A: "Their own module scope - top-level declarations are NOT global",
            B: "Always global",
            C: "Block scope only",
            D: "No scope"
          },
          answer: "A",
          explanation: "Each module file has a private scope; you share values deliberately with export/import. Modules are also strict mode by default - a major reason to prefer them.",
          related: ["Modules", "import/export"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nvar x = 1;\nfunction f() { console.log(x); var x = 2; }\nf();",
          options: {
            A: "undefined - the local var x is hoisted, shadowing the global before assignment",
            B: "1",
            C: "2",
            D: "ReferenceError"
          },
          answer: "A",
          explanation: "The function's own x is hoisted to the top as undefined, so the console.log sees the local (not the global 1). This confusing behaviour is exactly what let's TDZ replaced with a clear error.",
          related: ["Hoisting", "Shadowing", "var"]
        },
        {
          difficulty: "medium",
          question: "Can a function access variables declared AFTER it in the same scope?",
          options: {
            A: "Yes, if it is CALLED after those lines run - scope is about location, timing decides the value",
            B: "Never",
            C: "Always, immediately",
            D: "Only with var"
          },
          answer: "A",
          explanation: "The function body is evaluated at CALL time, so by then later declarations have executed. Calling it too early gives undefined (var) or a TDZ error (let).",
          code: "function show() { console.log(msg); }\nlet msg = \"hi\";\nshow();   // \"hi\" - called after msg exists",
          related: ["Scope", "Execution order"]
        },
        {
          difficulty: "hard",
          question: "What creates a new scope in JavaScript?",
          options: {
            A: "Functions (all declarations) and blocks { } (let/const only), plus modules",
            B: "Only functions",
            C: "Only blocks",
            D: "Every statement"
          },
          answer: "A",
          explanation: "Functions create scope for everything including var. Blocks create scope only for let/const/class. Modules add a file-level scope.",
          related: ["Scope types"]
        },
        {
          difficulty: "medium",
          question: "What is the practical advice about var today?",
          options: {
            A: "Avoid it - use const by default and let when reassignment is needed",
            B: "Use var for all loops",
            C: "var is required for globals",
            D: "var is faster"
          },
          answer: "A",
          explanation: "var's function scoping and silent hoisting cause bugs that let/const prevent. You still need to RECOGNISE var in older code, but there is no reason to write it in new code.",
          related: ["Best practices"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nlet count = 0;\nfunction inc() { count++; }\ninc(); inc();\nconsole.log(count);",
          options: {
            A: "2 - the function modifies the outer variable through the scope chain",
            B: "0",
            C: "1",
            D: "ReferenceError"
          },
          answer: "A",
          explanation: "Functions can READ and WRITE outer variables (unlike creating a new local, which needs a declaration keyword). This is the basis of closures holding state.",
          related: ["Scope chain", "Closures"]
        },
        {
          difficulty: "medium",
          question: "Why does minified/bundled code rarely break due to scope?",
          options: {
            A: "Because module and function scoping keep names private, so renaming is safe",
            B: "Because everything is global",
            C: "Minifiers avoid variables",
            D: "It often does break"
          },
          answer: "A",
          explanation: "Tools can safely shorten local names precisely because scope guarantees nothing outside references them - another practical benefit of avoiding globals.",
          related: ["Modules", "Tooling"]
        }
      ]
    }
  ]
});
