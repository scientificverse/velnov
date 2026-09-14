/* ============================================================
   JAVASCRIPT - TOPIC 1: INTRODUCTION & SETUP (30 questions)
   One file per topic. See "HOW TO ADD QUESTIONS.md" for the
   question template.
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "JavaScript",
  icon: "🟨",
  color: "#b8860b",
  description: "The language of the web - basics to advanced, 20 topics.",
  topics: [
    {
      name: "1. Introduction & Setup",
      questions: [
        {
          difficulty: "easy",
          question: "What is JavaScript mainly used for?",
          options: {
            A: "Making web pages interactive - and also servers, apps and games",
            B: "Styling web pages only",
            C: "Structuring web page content only",
            D: "Managing databases only"
          },
          answer: "A",
          explanation: "HTML gives structure, CSS gives style, and JavaScript adds behaviour: reacting to clicks, updating content, fetching data. With Node.js it also runs servers, and it powers mobile and desktop apps too.",
          notes: ["The three web languages: HTML = structure, CSS = looks, JS = behaviour."],
          related: ["HTML", "CSS", "Node.js"]
        },
        {
          difficulty: "easy",
          question: "Is JavaScript the same language as Java?",
          options: {
            A: "No - completely different languages with similar names",
            B: "Yes, JavaScript is a version of Java",
            C: "JavaScript is Java for browsers",
            D: "Java is compiled JavaScript"
          },
          answer: "A",
          explanation: "They are unrelated. JavaScript was named for marketing reasons when Java was popular in 1995. A famous line: 'Java is to JavaScript what car is to carpet'.",
          related: ["History of JavaScript"]
        },
        {
          difficulty: "easy",
          question: "Which tag embeds JavaScript inside an HTML page?",
          options: {
            A: "<script> ... </script>",
            B: "<js> ... </js>",
            C: "<javascript> ... </javascript>",
            D: "<code> ... </code>"
          },
          answer: "A",
          explanation: "The <script> tag holds JavaScript, either written inline or loaded from a file with the src attribute.",
          code: "<script>\n  console.log(\"Hello!\");\n</script>\n\n<script src=\"app.js\"></script>",
          related: ["script tag", "HTML"]
        },
        {
          difficulty: "easy",
          question: "Which statement prints a message to the browser console?",
          options: {
            A: "console.log(\"Hello\")",
            B: "print(\"Hello\")",
            C: "echo \"Hello\"",
            D: "System.out.println(\"Hello\")"
          },
          answer: "A",
          explanation: "console.log() writes to the developer console - the main tool for checking values while coding. print() is Python, echo is PHP, System.out.println is Java.",
          code: "console.log(\"Hello\");\nconsole.log(\"Score:\", 95);",
          notes: ["Open the console with F12 in most browsers."],
          related: ["console", "Debugging"]
        },
        {
          difficulty: "easy",
          question: "Which key usually opens the browser's developer tools?",
          options: { A: "F12", B: "F1", C: "Esc", D: "Tab" },
          answer: "A",
          explanation: "F12 (or Ctrl+Shift+I) opens DevTools, where the Console tab shows your console.log output and any errors.",
          related: ["DevTools", "Console"]
        },
        {
          difficulty: "easy",
          question: "What file extension do JavaScript files use?",
          options: { A: ".js", B: ".java", C: ".jsx only", D: ".script" },
          answer: "A",
          explanation: "JavaScript files end in .js, for example app.js. (.jsx is a React-flavoured variant; .ts is TypeScript.)",
          related: ["Files", "script src"]
        },
        {
          difficulty: "easy",
          question: "How do you write a SINGLE-LINE comment in JavaScript?",
          options: { A: "// this is a comment", B: "# this is a comment", C: "-- this is a comment", D: "<!-- comment -->" },
          answer: "A",
          explanation: "// starts a single-line comment; everything after it on that line is ignored. # is Python, -- is SQL, <!-- --> is HTML.",
          code: "// a single-line comment\nlet x = 5; // can follow code too",
          related: ["Comments"]
        },
        {
          difficulty: "easy",
          question: "How do you write a MULTI-LINE comment?",
          options: {
            A: "/* comment spanning lines */",
            B: "''' comment '''",
            C: "// on every line only",
            D: "<!-- comment -->"
          },
          answer: "A",
          explanation: "/* ... */ can span any number of lines. It is also used for documentation blocks (/** ... */ is the JSDoc style).",
          code: "/*\n  This explanation\n  spans several lines.\n*/",
          related: ["Comments", "JSDoc"]
        },
        {
          difficulty: "medium",
          question: "Where is the RECOMMENDED place to put a <script> tag that manipulates the page?",
          options: {
            A: "Just before </body>, or in <head> with the defer attribute",
            B: "Always at the very top of <head> with no attributes",
            C: "Inside the <title> tag",
            D: "Anywhere - position never matters"
          },
          answer: "A",
          explanation: "Scripts run as the browser reaches them. A plain script in <head> runs BEFORE the HTML elements exist, so document.querySelector() finds nothing. Putting it before </body> (or using defer) guarantees the page is ready.",
          code: "<head>\n  <script src=\"app.js\" defer></script>\n</head>\n<!-- or -->\n  <script src=\"app.js\"></script>\n</body>",
          related: ["defer", "async", "DOM ready"]
        },
        {
          difficulty: "medium",
          question: "What does the defer attribute do?\n<script src=\"app.js\" defer></script>",
          options: {
            A: "Downloads the script in parallel but runs it only after the HTML is fully parsed",
            B: "Delays the script by 5 seconds",
            C: "Stops the script from ever running",
            D: "Runs the script before the HTML"
          },
          answer: "A",
          explanation: "defer keeps HTML parsing uninterrupted, then executes the script once the document is ready - best of both worlds. async also downloads in parallel but runs as soon as it arrives, in unpredictable order.",
          related: ["defer vs async", "Performance"]
        },
        {
          difficulty: "easy",
          question: "Is JavaScript case-sensitive?",
          options: {
            A: "Yes - myVar, myvar and MyVar are three different names",
            B: "No - capitalization is ignored",
            C: "Only inside functions",
            D: "Only for keywords"
          },
          answer: "A",
          explanation: "Case matters everywhere: getElementById works, GetElementByID does not. Most JS bugs for beginners are simple capitalization mistakes.",
          related: ["Identifiers", "Naming"]
        },
        {
          difficulty: "medium",
          question: "Are semicolons required at the end of statements?",
          options: {
            A: "Not strictly - JavaScript inserts them automatically (ASI) - but writing them is safer and common",
            B: "Yes, always, or the code fails",
            C: "Never allowed",
            D: "Only inside functions"
          },
          answer: "A",
          explanation: "Automatic Semicolon Insertion adds them for you in most cases, but it occasionally guesses wrong (especially before lines starting with ( or [). Many teams write them; some styles omit them deliberately. Be consistent.",
          code: "let a = 1;\nlet b = 2;   // explicit semicolons - safest for beginners",
          related: ["ASI", "Code style"]
        },
        {
          difficulty: "easy",
          question: "Which statement shows a popup dialog in the browser?",
          options: { A: "alert(\"Hi\")", B: "console.log(\"Hi\")", C: "print(\"Hi\")", D: "popup(\"Hi\")" },
          answer: "A",
          explanation: "alert() opens a blocking popup with an OK button. Handy for quick tests, but it freezes the page - console.log() is far better for real debugging.",
          code: "alert(\"Welcome!\");",
          related: ["alert", "prompt", "confirm"]
        },
        {
          difficulty: "medium",
          question: "What does prompt(\"Your name?\") return?",
          options: {
            A: "Whatever the user typed, as a STRING (or null if cancelled)",
            B: "A number",
            C: "true or false",
            D: "Nothing"
          },
          answer: "A",
          explanation: "prompt() shows an input dialog and returns the typed text as a string - even if the user types 25. Convert with Number() before doing maths. Cancel returns null.",
          code: "let age = prompt(\"Age?\");   // \"25\" - a string!\nage = Number(age);            // 25 - now a number",
          related: ["prompt", "Type conversion"]
        },
        {
          difficulty: "medium",
          question: "What does confirm(\"Delete this?\") return?",
          options: {
            A: "true if the user clicks OK, false if Cancel",
            B: "The word \"OK\"",
            C: "A string",
            D: "Always true"
          },
          answer: "A",
          explanation: "confirm() shows an OK/Cancel dialog and returns a boolean - typically used in an if statement to guard a destructive action.",
          code: "if (confirm(\"Delete this?\")) {\n  deleteItem();\n}",
          related: ["confirm", "Booleans"]
        },
        {
          difficulty: "easy",
          question: "Which console method displays a message styled as an ERROR (in red)?",
          options: { A: "console.error()", B: "console.red()", C: "console.warn() only", D: "console.fail()" },
          answer: "A",
          explanation: "console.error() prints in red with a stack trace; console.warn() shows a yellow warning; console.table() prints arrays/objects as a neat table. All are useful for debugging.",
          code: "console.error(\"Something broke!\");\nconsole.warn(\"Careful...\");\nconsole.table([{a:1},{a:2}]);",
          related: ["console methods", "Debugging"]
        },
        {
          difficulty: "medium",
          question: "Where can JavaScript run BESIDES the browser?",
          options: {
            A: "On servers via Node.js - plus desktop (Electron) and mobile (React Native) apps",
            B: "Only in browsers, nowhere else",
            C: "Only on Windows",
            D: "Only inside HTML files"
          },
          answer: "A",
          explanation: "Node.js runs JavaScript outside the browser, enabling servers, command-line tools and build systems. Electron builds desktop apps (VS Code is one), React Native builds mobile apps.",
          related: ["Node.js", "Electron", "Runtime"]
        },
        {
          difficulty: "medium",
          question: "What does 'JavaScript is an interpreted (JIT-compiled) language' mean?",
          options: {
            A: "The engine reads and runs your source directly - no separate compile step for you",
            B: "You must compile it to .exe first",
            C: "It only runs on interpreters you install",
            D: "It converts to Java bytecode"
          },
          answer: "A",
          explanation: "You write .js and the browser engine (V8 in Chrome, SpiderMonkey in Firefox) executes it immediately. Modern engines use Just-In-Time compilation internally for speed, but you never run a compiler yourself.",
          related: ["V8 engine", "JIT"]
        },
        {
          difficulty: "medium",
          question: "What is ECMAScript (ES)?",
          options: {
            A: "The official standard that JavaScript implements - ES6/ES2015 was a major update",
            B: "A JavaScript framework",
            C: "A browser",
            D: "A rival language"
          },
          answer: "A",
          explanation: "ECMAScript is the specification; JavaScript is its best-known implementation. ES6 (2015) introduced let/const, arrow functions, classes, promises and template literals. Yearly updates continue (ES2020, ES2021...).",
          related: ["ES6", "Standards"]
        },
        {
          difficulty: "easy",
          question: "What is the output?\nconsole.log(2 + 3);\nconsole.log(\"2 + 3\");",
          options: {
            A: "5 then 2 + 3",
            B: "5 then 5",
            C: "2 + 3 then 5",
            D: "Error"
          },
          answer: "A",
          explanation: "Without quotes it is a maths expression evaluating to 5. With quotes it is plain text, printed exactly as written.",
          related: ["Expressions", "Strings"]
        },
        {
          difficulty: "medium",
          question: "What does \"use strict\"; at the top of a file do?",
          options: {
            A: "Enables strict mode - catches sloppy mistakes like using undeclared variables",
            B: "Makes the code run faster only",
            C: "Blocks all errors",
            D: "Nothing in modern browsers"
          },
          answer: "A",
          explanation: "Strict mode turns silent errors into thrown errors: assigning to an undeclared variable fails instead of creating a global. ES6 modules and classes are strict automatically.",
          code: "\"use strict\";\nx = 5;   // ReferenceError instead of a silent global",
          related: ["Strict mode", "Best practices"]
        },
        {
          difficulty: "medium",
          question: "In what order does the browser execute the lines of a script?",
          options: {
            A: "Top to bottom, one statement at a time (single-threaded)",
            B: "Random order",
            C: "All lines at once in parallel",
            D: "Bottom to top"
          },
          answer: "A",
          explanation: "JavaScript is single-threaded: statements run in order, one at a time. Asynchronous work (timers, network requests) is scheduled and handled later by the event loop - covered in the Async topic.",
          related: ["Single-threaded", "Event loop"]
        },
        {
          difficulty: "easy",
          question: "Which is a valid way to link an external JavaScript file?",
          options: {
            A: "<script src=\"app.js\"></script>",
            B: "<script href=\"app.js\">",
            C: "<link src=\"app.js\">",
            D: "<import file=\"app.js\">"
          },
          answer: "A",
          explanation: "Scripts use the src attribute (href is for <link> and <a>). Note the closing </script> tag is required even when the tag is empty.",
          related: ["script src", "HTML"]
        },
        {
          difficulty: "medium",
          question: "Why is keeping JavaScript in a SEPARATE .js file better than writing it inside HTML?",
          options: {
            A: "Reusable across pages, cached by the browser, and keeps structure separate from behaviour",
            B: "It runs faster in every case",
            C: "Inline JavaScript is not allowed",
            D: "It hides the code from users"
          },
          answer: "A",
          explanation: "External files can be shared by many pages, cached after the first download, and edited without touching the HTML. This 'separation of concerns' also keeps files readable. (Note: users can still view the code.)",
          related: ["Separation of concerns", "Caching"]
        },
        {
          difficulty: "easy",
          question: "What is the output?\nconsole.log(\"A\", \"B\", 1 + 1);",
          options: { A: "A B 2", B: "AB2", C: "A,B,2", D: "A B 1 + 1" },
          answer: "A",
          explanation: "console.log accepts multiple comma-separated values and prints them separated by spaces, evaluating each expression first: A B 2.",
          related: ["console.log"]
        },
        {
          difficulty: "medium",
          question: "What happens if a script contains a syntax error?",
          options: {
            A: "The whole script fails to run, and the error appears in the console",
            B: "Only that line is skipped",
            C: "The browser fixes it automatically",
            D: "The page refuses to load at all"
          },
          answer: "A",
          explanation: "A syntax error stops that script file from executing - the page still displays, but its behaviour is missing. Always check the console (F12) when something 'does nothing'.",
          related: ["SyntaxError", "Debugging"]
        },
        {
          difficulty: "medium",
          question: "What does document.write(\"Hi\") do, and why is it discouraged?",
          options: {
            A: "Writes directly into the page - but it can wipe the whole document if used after loading",
            B: "Writes to a file on disk",
            C: "It is the modern way to update pages",
            D: "It writes to the console"
          },
          answer: "A",
          explanation: "document.write() injects HTML while the page parses; calling it after load replaces the entire document. Modern code uses DOM methods like textContent or innerHTML instead.",
          related: ["DOM", "Legacy methods"]
        },
        {
          difficulty: "easy",
          question: "Which of these is a popular editor for writing JavaScript?",
          options: {
            A: "VS Code",
            B: "Notepad (works, but no help)",
            C: "Any text editor technically works",
            D: "All of the above"
          },
          answer: "D",
          explanation: "JavaScript is plain text, so any editor works - but VS Code (free) adds syntax highlighting, error hints and autocomplete, which prevents many beginner mistakes.",
          related: ["Tools", "VS Code"]
        },
        {
          difficulty: "medium",
          question: "What is the browser console REPL useful for?",
          options: {
            A: "Typing JavaScript directly and seeing results instantly - perfect for experimenting",
            B: "Editing HTML files permanently",
            C: "Installing packages",
            D: "Nothing - it is read-only"
          },
          answer: "A",
          explanation: "The Console tab lets you run any expression on the current page: check a variable, test a method, inspect an element. Changes are temporary and vanish on refresh.",
          code: "> 2 + 3\n5\n> \"js\".toUpperCase()\n'JS'",
          related: ["DevTools", "Experimenting"]
        },
        {
          difficulty: "medium",
          question: "What is the difference between a statement and an expression?",
          options: {
            A: "An expression produces a VALUE (2 + 3); a statement performs an ACTION (let x = 5;)",
            B: "They are the same",
            C: "Expressions only appear in loops",
            D: "Statements always return values"
          },
          answer: "A",
          explanation: "Expressions evaluate to a value and can be nested inside other code. Statements are complete instructions. In 'let y = 2 + 3;', the whole line is a statement and '2 + 3' is an expression.",
          related: ["Syntax", "Evaluation"]
        }
      ]
    }
  ]
});
