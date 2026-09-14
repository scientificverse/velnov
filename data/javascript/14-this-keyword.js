/* ============================================================
   JAVASCRIPT - TOPIC 14: THE "this" KEYWORD (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "JavaScript",
  icon: "🟨",
  color: "#b8860b",
  description: "The language of the web - basics to advanced, 20 topics.",
  topics: [
    {
      name: "14. The this Keyword",
      questions: [
        {
          difficulty: "medium",
          question: "What determines the value of this in a regular function?",
          options: {
            A: "HOW the function is called (the call site), not where it was defined",
            B: "Where the function was written",
            C: "The function's name",
            D: "It is always the global object"
          },
          answer: "A",
          explanation: "this is bound at call time. The same function can have different this values depending on whether it is called as a method, standalone, with new, or via call/apply/bind.",
          related: ["this", "Binding"]
        },
        {
          difficulty: "easy",
          question: "What is this inside an object method?\nconst user = { name: \"Ana\", greet() { return this.name; } };\nuser.greet();",
          options: {
            A: "The object before the dot - user, so it returns \"Ana\"",
            B: "The global object",
            C: "undefined",
            D: "The function itself"
          },
          answer: "A",
          explanation: "In a method call obj.method(), this is obj. This 'implicit binding' is the most common case.",
          related: ["Methods", "Implicit binding"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconst user = { name: \"Ana\", greet() { return this.name; } };\nconst g = user.greet;\nconsole.log(g());",
          options: {
            A: "undefined - the function LOST its binding when detached from the object",
            B: "\"Ana\"",
            C: "TypeError",
            D: "null"
          },
          answer: "A",
          explanation: "this depends on the call site: g() has no object before the dot, so this is undefined (strict) or window (sloppy). Fix with g.bind(user) or an arrow wrapper.",
          code: "const g = user.greet.bind(user);\nconsole.log(g());   // \"Ana\"",
          notes: ["This is why passing methods as callbacks often breaks."],
          related: ["Losing this", "bind"]
        },
        {
          difficulty: "medium",
          question: "What is this in a plain function call in STRICT mode?\nfunction f() { return this; }\nf();",
          options: {
            A: "undefined",
            B: "window",
            C: "The function",
            D: "null"
          },
          answer: "A",
          explanation: "Strict mode (and ES modules) leave this undefined for standalone calls, preventing accidental writes to the global object. In sloppy mode it would be window.",
          related: ["Strict mode", "Default binding"]
        },
        {
          difficulty: "hard",
          question: "What is this inside an ARROW function?",
          options: {
            A: "Inherited from the surrounding (lexical) scope - arrows have no own this",
            B: "Always the global object",
            C: "Always undefined",
            D: "The object that called it"
          },
          answer: "A",
          explanation: "Arrows capture this where they are DEFINED, permanently. That makes them ideal for callbacks inside methods, and unsuitable as object methods themselves.",
          related: ["Arrow functions", "Lexical this"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconst user = {\n  name: \"Ana\",\n  greet: () => `Hi ${this.name}`\n};\nconsole.log(user.greet());",
          options: {
            A: "\"Hi undefined\" - the arrow's this is the outer scope, not user",
            B: "\"Hi Ana\"",
            C: "TypeError",
            D: "\"Hi null\""
          },
          answer: "A",
          explanation: "The arrow captured this from module/global scope where there is no name. Use shorthand method syntax: greet() { return `Hi ${this.name}`; }",
          related: ["Arrow functions", "Common mistakes"]
        },
        {
          difficulty: "hard",
          question: "Why does this arrow function work correctly?\nconst timer = {\n  count: 0,\n  start() { setInterval(() => this.count++, 1000); }\n};",
          options: {
            A: "The arrow inherits this from start(), where this is timer",
            B: "setInterval binds this",
            C: "It does not work",
            D: "count is global"
          },
          answer: "A",
          explanation: "This is the canonical good use of arrows: a callback inside a method that must keep the object's this. A regular function callback would get undefined/window instead.",
          code: "// broken version:\nsetInterval(function() { this.count++; }, 1000);   // this is not timer",
          related: ["Arrow functions", "Callbacks"]
        },
        {
          difficulty: "medium",
          question: "What does .call() do?\nfn.call(obj, a, b)",
          options: {
            A: "Calls fn immediately with this set to obj and arguments listed individually",
            B: "Returns a new bound function",
            C: "Calls fn with an array of arguments",
            D: "Nothing"
          },
          answer: "A",
          explanation: "call invokes right away with an explicit this. apply is identical but takes an ARRAY of arguments; bind returns a new function instead of calling.",
          code: "function greet(greeting) { return `${greeting} ${this.name}`; }\nconsole.log(greet.call({name: \"Ana\"}, \"Hi\"));   // \"Hi Ana\"",
          related: ["call", "apply", "bind"]
        },
        {
          difficulty: "medium",
          question: "What is the difference between call() and apply()?",
          options: {
            A: "call takes arguments separately; apply takes them as an ARRAY",
            B: "apply does not set this",
            C: "call returns a function",
            D: "They are identical"
          },
          answer: "A",
          explanation: "Mnemonic: Apply = Array, Call = Comma. Modern spread syntax has made apply largely unnecessary: fn(...args).",
          code: "fn.call(obj, 1, 2);\nfn.apply(obj, [1, 2]);\nfn(...[1, 2]);   // modern equivalent",
          related: ["call", "apply", "Spread"]
        },
        {
          difficulty: "medium",
          question: "What does .bind() return?",
          options: {
            A: "A NEW function permanently bound to the given this - it does not call it",
            B: "The result of calling the function",
            C: "undefined",
            D: "The original function"
          },
          answer: "A",
          explanation: "bind creates a copy with this locked in, useful for callbacks and event handlers. You must store or pass the returned function.",
          code: "const greet = user.greet.bind(user);\nbtn.addEventListener(\"click\", greet);   // this stays user",
          related: ["bind", "Callbacks"]
        },
        {
          difficulty: "hard",
          question: "Can a bound function be re-bound?\nconst f = fn.bind(a);\nf.call(b);",
          options: {
            A: "No - the first bind wins; call/apply cannot override it",
            B: "Yes, call overrides it",
            C: "It throws an error",
            D: "Only with apply"
          },
          answer: "A",
          explanation: "bind creates a permanently bound function. This makes bound callbacks predictable, but means you cannot reuse them with a different this.",
          related: ["bind", "Hard binding"]
        },
        {
          difficulty: "hard",
          question: "What is this inside a constructor called with new?\nfunction User(name) { this.name = name; }\nnew User(\"Ana\");",
          options: {
            A: "The brand-new empty object being created, which is returned automatically",
            B: "The global object",
            C: "undefined",
            D: "The User function"
          },
          answer: "A",
          explanation: "new creates an object, sets this to it, runs the function, and returns the object. This 'new binding' takes precedence over default and implicit binding.",
          related: ["new", "Constructors"]
        },
        {
          difficulty: "hard",
          question: "What is the precedence order of this binding rules?",
          options: {
            A: "new > explicit (bind/call/apply) > implicit (obj.method) > default (global/undefined)",
            B: "default > implicit > explicit > new",
            C: "They are all equal",
            D: "Alphabetical"
          },
          answer: "A",
          explanation: "Check in that order to determine this. Arrow functions sit outside this system entirely - they simply inherit lexically.",
          related: ["Binding rules", "Precedence"]
        },
        {
          difficulty: "medium",
          question: "What is this in an event handler added with addEventListener?\nbtn.addEventListener(\"click\", function() { ... });",
          options: {
            A: "The element the listener is attached to (btn)",
            B: "window",
            C: "The event object",
            D: "undefined"
          },
          answer: "A",
          explanation: "DOM listeners call the handler with this set to the current target - the same as event.currentTarget. But an ARROW handler would inherit this from the outer scope instead.",
          code: "btn.addEventListener(\"click\", function() {\n  this.classList.add(\"active\");   // this = btn\n});",
          related: ["Events", "DOM"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nbtn.addEventListener(\"click\", () => console.log(this));",
          options: {
            A: "The surrounding scope's this (module/window) - NOT the button",
            B: "The button",
            C: "undefined always",
            D: "The event"
          },
          answer: "A",
          explanation: "Arrows ignore the DOM's this binding. If you need the element inside an arrow handler, use event.currentTarget instead.",
          code: "btn.addEventListener(\"click\", (e) => {\n  e.currentTarget.classList.add(\"on\");   // reliable\n});",
          related: ["Arrow functions", "Events"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconst obj = {\n  name: \"outer\",\n  run() {\n    function inner() { return this?.name; }\n    return inner();\n  }\n};\nconsole.log(obj.run());",
          options: {
            A: "undefined - inner is a plain call, so it loses obj's this",
            B: "\"outer\"",
            C: "TypeError",
            D: "null"
          },
          answer: "A",
          explanation: "Nested regular functions do not inherit this. Classic fixes: make inner an arrow function, or capture 'const self = this' before it.",
          related: ["Nested functions", "this loss"]
        },
        {
          difficulty: "medium",
          question: "What is the old 'const self = this' pattern for?",
          options: {
            A: "Saving the outer this in a variable so nested regular functions can use it",
            B: "Creating a copy of the object",
            C: "Making this global",
            D: "Deleting this"
          },
          answer: "A",
          explanation: "Before arrow functions, developers wrote 'var self = this' (or that/_this) to carry the context into callbacks. Arrows made this unnecessary.",
          code: "run() {\n  const self = this;\n  setTimeout(function() { console.log(self.name); }, 100);\n}",
          related: ["Legacy patterns", "Arrow functions"]
        },
        {
          difficulty: "medium",
          question: "What is this inside a class method?",
          options: {
            A: "The instance the method was called on",
            B: "The class itself",
            C: "window",
            D: "undefined always"
          },
          answer: "A",
          explanation: "Class methods behave like object methods: user.getName() sets this to user. But class bodies are strict mode, so a detached method call gives undefined rather than window.",
          related: ["Classes", "Methods"]
        },
        {
          difficulty: "hard",
          question: "Why do React class components need this.handleClick = this.handleClick.bind(this)?",
          options: {
            A: "Because passing the method as a callback detaches it from the instance, losing this",
            B: "React requires bind for all methods",
            C: "To speed up rendering",
            D: "It is optional decoration"
          },
          answer: "A",
          explanation: "onClick={this.handleClick} passes the function alone. Without binding, this is undefined inside it. Modern alternative: define the handler as a class field arrow: handleClick = () => { }.",
          related: ["React", "bind"]
        },
        {
          difficulty: "medium",
          question: "What is this at the TOP LEVEL of a browser script (non-module)?",
          options: {
            A: "window (the global object)",
            B: "undefined",
            C: "document",
            D: "null"
          },
          answer: "A",
          explanation: "In classic scripts top-level this is window. In ES MODULES it is undefined, and in Node.js CommonJS it is module.exports - three different answers worth knowing.",
          related: ["Global this", "Modules"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconst a = { name: \"A\", get() { return this.name; } };\nconst b = { name: \"B\" };\nb.get = a.get;\nconsole.log(b.get());",
          options: {
            A: "\"B\" - this follows the CALL SITE, not where the function was defined",
            B: "\"A\"",
            C: "undefined",
            D: "TypeError"
          },
          answer: "A",
          explanation: "The same function borrowed by another object gets that object's this. This 'method borrowing' is intentional and powers utilities like Array.prototype.slice.call(arguments).",
          related: ["Implicit binding", "Method borrowing"]
        },
        {
          difficulty: "hard",
          question: "What does Array.prototype.slice.call(arguments) do?",
          options: {
            A: "Borrows the array method to convert an array-LIKE object into a real array",
            B: "Slices an array",
            C: "Creates a new prototype",
            D: "Nothing"
          },
          answer: "A",
          explanation: "Before Array.from and spread, this was the standard way to arrayify arguments or NodeLists - by explicitly setting this to the array-like object.",
          code: "// modern equivalents:\nArray.from(arguments);\n[...arguments];",
          related: ["call", "Array-like"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nfunction f() { return this; }\nconsole.log(f.call(null));  // strict mode",
          options: {
            A: "null - strict mode passes the given value through unchanged",
            B: "window",
            C: "undefined",
            D: "TypeError"
          },
          answer: "A",
          explanation: "In sloppy mode, null/undefined would be replaced by the global object ('boxing'). Strict mode keeps exactly what you pass.",
          related: ["call", "Strict mode"]
        },
        {
          difficulty: "hard",
          question: "How do you make a method safe to pass as a callback?",
          options: {
            A: "Bind it (obj.m.bind(obj)), wrap it in an arrow (() => obj.m()), or define it as a class-field arrow",
            B: "Add the this keyword",
            C: "Make it global",
            D: "It cannot be done"
          },
          answer: "A",
          explanation: "All three preserve the intended context. Class fields with arrows are popular because they bind once at construction with no extra code at the call site.",
          code: "class Btn {\n  handle = () => { console.log(this); };   // always bound\n}",
          related: ["bind", "Class fields"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nconst o = {\n  a: 1,\n  inner: { a: 2, get() { return this.a; } }\n};\nconsole.log(o.inner.get());",
          options: {
            A: "2 - this is the object immediately before the dot (inner)",
            B: "1",
            C: "undefined",
            D: "Error"
          },
          answer: "A",
          explanation: "Only the LAST object in the chain matters for implicit binding. o.inner.get() binds this to inner, not o.",
          related: ["Implicit binding", "Nested objects"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nclass A {\n  constructor() { this.v = 1; }\n  get() { return this.v; }\n}\nconst a = new A();\nconst g = a.get;\nconsole.log(g());",
          options: {
            A: "TypeError - class code is strict, so this is undefined and reading .v throws",
            B: "1",
            C: "undefined",
            D: "0"
          },
          answer: "A",
          explanation: "'Cannot read properties of undefined' - the classic detached-method error in classes. Bind it or use a class-field arrow.",
          related: ["Classes", "Strict mode", "bind"]
        },
        {
          difficulty: "medium",
          question: "Does this exist inside a standalone arrow function at module top level?",
          options: {
            A: "It resolves to the module's this, which is undefined in ES modules",
            B: "It is always window",
            C: "It throws",
            D: "It is the function"
          },
          answer: "A",
          explanation: "Arrows have no own this, so they look outward. At module top level that is undefined; in a classic script it would be window.",
          related: ["Modules", "Arrow functions"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconst o = { name: \"o\" };\nfunction f() { return this.name; }\nconsole.log(f.bind(o).call({name: \"x\"}));",
          options: {
            A: "\"o\" - bind wins; call cannot override a bound function",
            B: "\"x\"",
            C: "undefined",
            D: "TypeError"
          },
          answer: "A",
          explanation: "Hard binding takes precedence over explicit call/apply. Only 'new' can override a bound this (and even then, only partially).",
          related: ["bind", "Precedence"]
        },
        {
          difficulty: "medium",
          question: "When should you deliberately choose a REGULAR function over an arrow?",
          options: {
            A: "When you need a dynamic this - object methods, constructors, prototype methods, some DOM handlers",
            B: "Never - arrows are always better",
            C: "Only for long functions",
            D: "Only at top level"
          },
          answer: "A",
          explanation: "Arrows are great for callbacks that should keep the outer this. Regular functions are correct where this must be determined by the caller.",
          related: ["Arrow vs regular", "Best practices"]
        },
        {
          difficulty: "hard",
          question: "What is globalThis?",
          options: {
            A: "A standard reference to the global object that works in browsers, Node and workers",
            B: "The same as this in every context",
            C: "A deprecated feature",
            D: "The document object"
          },
          answer: "A",
          explanation: "Before globalThis you needed window (browser), global (Node) or self (workers). It gives one portable way to reach the global object.",
          related: ["globalThis", "Environments"]
        }
      ]
    }
  ]
});
