/* ============================================================
   JAVASCRIPT - TOPIC 15: ERROR HANDLING (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "JavaScript",
  icon: "🟨",
  color: "#b8860b",
  description: "The language of the web - basics to advanced, 20 topics.",
  topics: [
    {
      name: "15. Error Handling",
      questions: [
        {
          difficulty: "easy",
          question: "Which structure catches runtime errors?",
          options: {
            A: "try { risky(); } catch (err) { handle(err); }",
            B: "attempt { } rescue { }",
            C: "try: ... except: ...",
            D: "if (error) { }"
          },
          answer: "A",
          explanation: "Code that might throw goes in try; if an error occurs, execution jumps to catch with the error object. (except is Python, rescue is Ruby.)",
          related: ["try/catch"]
        },
        {
          difficulty: "medium",
          question: "What is in the err object inside catch?",
          options: {
            A: "Properties like name, message and stack describing what went wrong",
            B: "Only a string",
            C: "The failed function",
            D: "Nothing"
          },
          answer: "A",
          explanation: "err.name is the type (TypeError, ReferenceError...), err.message is the description, and err.stack shows where it happened.",
          code: "try { null.x; }\ncatch (err) {\n  console.log(err.name);      // TypeError\n  console.log(err.message);   // Cannot read properties of null\n}",
          related: ["Error object"]
        },
        {
          difficulty: "medium",
          question: "When does the finally block run?",
          options: {
            A: "ALWAYS - whether an error occurred, was caught, or the function returned",
            B: "Only on success",
            C: "Only on error",
            D: "Only if catch is omitted"
          },
          answer: "A",
          explanation: "finally is for cleanup that must happen regardless: hiding a loading spinner, closing a connection, releasing a lock.",
          code: "try { await save(); }\ncatch (e) { showError(e); }\nfinally { hideSpinner(); }   // always",
          related: ["finally", "Cleanup"]
        },
        {
          difficulty: "easy",
          question: "How do you deliberately raise an error?",
          options: {
            A: "throw new Error(\"message\")",
            B: "raise Error(\"message\")",
            C: "error(\"message\")",
            D: "return Error(\"message\")"
          },
          answer: "A",
          explanation: "throw stops execution and looks for the nearest catch. Always throw an Error OBJECT (not a string) so you get a stack trace.",
          code: "if (amount < 0) throw new Error(\"Amount cannot be negative\");",
          related: ["throw", "Error"]
        },
        {
          difficulty: "medium",
          question: "Why throw new Error(\"x\") rather than throw \"x\"?",
          options: {
            A: "Error objects carry a stack trace and a name; a thrown string has neither",
            B: "Strings are not allowed",
            C: "It is only a style preference",
            D: "Strings are faster"
          },
          answer: "A",
          explanation: "You can technically throw anything, but catch blocks then cannot rely on err.message or err.stack, making debugging much harder.",
          related: ["Error object", "Best practices"]
        },
        {
          difficulty: "medium",
          question: "Which error occurs when you use a variable that was never declared?",
          options: { A: "ReferenceError", B: "TypeError", C: "SyntaxError", D: "RangeError" },
          answer: "A",
          explanation: "ReferenceError: x is not defined - usually a typo or a missing import. Contrast with TypeError, which means the value exists but is the wrong type.",
          related: ["ReferenceError"]
        },
        {
          difficulty: "medium",
          question: "Which error does null.name produce?",
          options: {
            A: "TypeError: Cannot read properties of null",
            B: "ReferenceError",
            C: "SyntaxError",
            D: "No error"
          },
          answer: "A",
          explanation: "The single most common runtime error in JavaScript. Guard with optional chaining (obj?.name) or a null check before accessing properties.",
          related: ["TypeError", "Optional chaining"]
        },
        {
          difficulty: "medium",
          question: "Can try/catch catch a SYNTAX error in the same file?",
          options: {
            A: "No - syntax errors are found before the code runs, so nothing executes",
            B: "Yes, always",
            C: "Only in strict mode",
            D: "Only with finally"
          },
          answer: "A",
          explanation: "Parsing happens first; a malformed file never runs at all. try/catch only handles RUNTIME errors. (Syntax errors inside eval or dynamically loaded code are a special case.)",
          related: ["SyntaxError", "Parse time"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\ntry { console.log(\"A\"); throw new Error(\"x\"); console.log(\"B\"); }\ncatch (e) { console.log(\"C\"); }\nconsole.log(\"D\");",
          options: {
            A: "A C D - the throw skips the rest of try",
            B: "A B C D",
            C: "A C",
            D: "C D"
          },
          answer: "A",
          explanation: "Statements after the throw inside try never run. After catch handles the error, normal execution resumes.",
          related: ["Control flow"]
        },
        {
          difficulty: "medium",
          question: "How do you create a CUSTOM error type?",
          options: {
            A: "class ValidationError extends Error { }",
            B: "function ValidationError() { }",
            C: "new CustomError()",
            D: "You cannot"
          },
          answer: "A",
          explanation: "Extending Error lets callers catch your specific type with instanceof, which is far cleaner than string-matching messages.",
          code: "class ValidationError extends Error {\n  constructor(msg) { super(msg); this.name = \"ValidationError\"; }\n}\ntry { throw new ValidationError(\"bad email\"); }\ncatch (e) { if (e instanceof ValidationError) showFieldError(e.message); }",
          related: ["Custom errors", "extends"]
        },
        {
          difficulty: "hard",
          question: "How do you handle DIFFERENT error types differently?",
          options: {
            A: "Check inside catch with instanceof and re-throw what you cannot handle",
            B: "Write multiple catch blocks",
            C: "catch (TypeError e) { }",
            D: "JavaScript cannot distinguish them"
          },
          answer: "A",
          explanation: "JavaScript has only ONE catch block per try (unlike Java), so branch inside it. Re-throwing unknown errors avoids silently swallowing real bugs.",
          code: "catch (e) {\n  if (e instanceof ValidationError) showMsg(e);\n  else throw e;   // let it bubble up\n}",
          related: ["instanceof", "Re-throwing"]
        },
        {
          difficulty: "hard",
          question: "Does try/catch catch errors inside an ASYNC callback?\ntry { setTimeout(() => { throw new Error(\"x\"); }, 0); } catch (e) { }",
          options: {
            A: "No - the callback runs later, long after the try block finished",
            B: "Yes, always",
            C: "Only with finally",
            D: "Only in strict mode"
          },
          answer: "A",
          explanation: "try/catch is synchronous: it only guards code running right now. The timer callback executes on a later tick with an empty stack, so the error becomes an uncaught exception. Put try/catch INSIDE the callback.",
          code: "setTimeout(() => {\n  try { risky(); } catch (e) { handle(e); }\n}, 0);",
          related: ["Async", "Event loop"]
        },
        {
          difficulty: "hard",
          question: "How do you catch errors from a PROMISE?",
          options: {
            A: "With .catch() on the chain, or try/catch around await",
            B: "With a plain try/catch around the promise creation",
            C: "Promises never fail",
            D: "With if statements"
          },
          answer: "A",
          explanation: "Rejections are not thrown synchronously. Use promise.then().catch(), or await inside try/catch which converts rejection into a normal throw.",
          code: "fetch(url).then(r => r.json()).catch(err => show(err));\n\ntry { const r = await fetch(url); }\ncatch (err) { show(err); }",
          related: ["Promises", "async/await"]
        },
        {
          difficulty: "medium",
          question: "What happens to an uncaught error in the browser?",
          options: {
            A: "It stops the current script and logs a red message in the console",
            B: "The page closes",
            C: "It is silently ignored",
            D: "The browser crashes"
          },
          answer: "A",
          explanation: "Execution of that task halts, but the page stays open and later events still work. You can log such errors globally with window.addEventListener('error', ...).",
          related: ["Uncaught errors", "Debugging"]
        },
        {
          difficulty: "hard",
          question: "Why is an EMPTY catch block bad?\ntry { risky(); } catch (e) { }",
          options: {
            A: "It silently swallows errors, hiding bugs and making failures invisible",
            B: "It is a syntax error",
            C: "It is slower",
            D: "It is fine"
          },
          answer: "A",
          explanation: "Failures disappear with no trace, so the app misbehaves for reasons nobody can diagnose. At minimum log the error; ideally handle it or re-throw.",
          related: ["Anti-patterns", "Best practices"]
        },
        {
          difficulty: "medium",
          question: "What does the optional catch binding allow (ES2019)?",
          options: {
            A: "Omitting the parameter: catch { } when you do not need the error object",
            B: "Catching two errors",
            C: "Catching without try",
            D: "Nothing"
          },
          answer: "A",
          explanation: "Useful when you only care that something failed, e.g. attempting an optional parse. Still, logging the error is usually wiser.",
          code: "try { data = JSON.parse(text); }\ncatch { data = {}; }   // no (e) needed",
          related: ["ES2019", "catch"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nfunction f() {\n  try { return \"try\"; }\n  finally { console.log(\"finally\"); }\n}\nconsole.log(f());",
          options: {
            A: "finally then try - finally runs before the function actually returns",
            B: "try then finally",
            C: "only try",
            D: "only finally"
          },
          answer: "A",
          explanation: "The return value is computed, then finally executes, then the value is returned. Beware: a return inside finally would OVERRIDE the original return.",
          related: ["finally", "return"]
        },
        {
          difficulty: "medium",
          question: "Which error type means a number is outside an allowed range?",
          options: {
            A: "RangeError - e.g. new Array(-1) or infinite recursion",
            B: "TypeError",
            C: "ReferenceError",
            D: "SyntaxError"
          },
          answer: "A",
          explanation: "RangeError covers invalid lengths, bad toFixed digits, and 'Maximum call stack size exceeded' from runaway recursion.",
          related: ["RangeError"]
        },
        {
          difficulty: "medium",
          question: "How do you validate input and report a clear failure?",
          options: {
            A: "Check the condition and throw a descriptive Error the caller can catch",
            B: "Return -1 silently",
            C: "console.log a warning only",
            D: "Ignore invalid input"
          },
          answer: "A",
          explanation: "Throwing forces the problem to be addressed and carries a message. Silent sentinel values like -1 are easy to forget to check and propagate bad data.",
          code: "function setAge(age) {\n  if (!Number.isFinite(age) || age < 0)\n    throw new RangeError(\"age must be a positive number\");\n  return age;\n}",
          related: ["Validation", "throw"]
        },
        {
          difficulty: "hard",
          question: "What does the error's stack property give you?",
          options: {
            A: "The chain of function calls that led to the error, with file and line numbers",
            B: "The memory stack size",
            C: "A list of variables",
            D: "Nothing useful"
          },
          answer: "A",
          explanation: "Read a stack from the top: the first line is where it threw, the lines below show who called it. Essential for locating the real source of a bug.",
          related: ["Stack trace", "Debugging"]
        },
        {
          difficulty: "hard",
          question: "What is an unhandled promise rejection?",
          options: {
            A: "A rejected promise with no .catch() - it logs a warning and can crash Node processes",
            B: "A promise that never resolves",
            C: "A syntax error",
            D: "A resolved promise"
          },
          answer: "A",
          explanation: "Always terminate promise chains with .catch(), or wrap awaits in try/catch. Global safety net: window.addEventListener('unhandledrejection', ...).",
          related: ["Promises", "Async errors"]
        },
        {
          difficulty: "medium",
          question: "Where should you put try/catch for best results?",
          options: {
            A: "Around the smallest risky section, at a level where you can actually DO something about the error",
            B: "Around the entire program",
            C: "Around every single line",
            D: "Never use it"
          },
          answer: "A",
          explanation: "Catching too broadly hides which operation failed; catching where you cannot recover just adds noise. Let errors bubble to a layer that can show a message or retry.",
          related: ["Best practices", "Error boundaries"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\ntry { JSON.parse(\"{bad}\"); }\ncatch (e) { console.log(e.name); }",
          options: {
            A: "SyntaxError - JSON.parse throws it at RUNTIME, so it IS catchable",
            B: "TypeError",
            C: "Nothing is logged",
            D: "The code does not compile"
          },
          answer: "A",
          explanation: "This is a runtime SyntaxError produced by the parser function, unlike a syntax error in your own source. Always wrap JSON.parse of untrusted data in try/catch.",
          related: ["JSON.parse", "SyntaxError"]
        },
        {
          difficulty: "medium",
          question: "How do you re-throw an error after logging it?",
          options: {
            A: "catch (e) { log(e); throw e; }",
            B: "catch (e) { return e; }",
            C: "catch (e) { throw; }",
            D: "You cannot re-throw"
          },
          answer: "A",
          explanation: "Re-throwing lets a lower layer record the problem while a higher layer decides how to respond. (Unlike Python, a bare throw is invalid - you must name the error.)",
          related: ["Re-throwing", "Logging"]
        },
        {
          difficulty: "hard",
          question: "What does the cause option do (ES2022)?\nthrow new Error(\"Save failed\", { cause: err })",
          options: {
            A: "Attaches the original error, preserving the chain for debugging",
            B: "Sets the error message",
            C: "Prevents the throw",
            D: "Logs to the server"
          },
          answer: "A",
          explanation: "Wrapping a low-level error in a friendlier one used to lose the original. cause keeps both, so err.cause reveals the underlying failure.",
          related: ["Error cause", "ES2022"]
        },
        {
          difficulty: "medium",
          question: "How do you catch errors from EVERY unhandled place in a browser app?",
          options: {
            A: "window.addEventListener('error', ...) and 'unhandledrejection'",
            B: "One giant try/catch",
            C: "It is impossible",
            D: "console.log everything"
          },
          answer: "A",
          explanation: "These global hooks are how error-reporting tools (Sentry and similar) capture crashes in production. They are a safety net, not a replacement for local handling.",
          related: ["Global handlers", "Monitoring"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nasync function f() { throw new Error(\"x\"); }\nf().catch(e => console.log(\"caught\", e.message));",
          options: {
            A: "caught x - a throw inside async becomes a REJECTED promise",
            B: "An uncaught error",
            C: "Nothing",
            D: "SyntaxError"
          },
          answer: "A",
          explanation: "async functions always return a promise; throwing rejects it. That is why await + try/catch works so naturally with them.",
          related: ["async", "Promises"]
        },
        {
          difficulty: "medium",
          question: "Why check response.ok after fetch?",
          options: {
            A: "fetch only rejects on NETWORK failure - a 404 or 500 still resolves successfully",
            B: "It is unnecessary",
            C: "To parse JSON",
            D: "To set headers"
          },
          answer: "A",
          explanation: "A very common bug: developers assume .catch() covers HTTP errors. You must inspect response.ok (or status) and throw yourself.",
          code: "const res = await fetch(url);\nif (!res.ok) throw new Error(`HTTP ${res.status}`);",
          related: ["fetch", "HTTP errors"]
        },
        {
          difficulty: "medium",
          question: "What is a graceful fallback in error handling?",
          options: {
            A: "Showing a helpful message or default data instead of a blank/broken screen",
            B: "Crashing quickly",
            C: "Retrying forever",
            D: "Hiding all errors from developers"
          },
          answer: "A",
          explanation: "Users should never see a dead page. Show cached content, a retry button, or a clear message - while still logging the real error for developers.",
          related: ["UX", "Resilience"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nfunction f() {\n  try { throw new Error(\"a\"); }\n  catch (e) { return \"caught\"; }\n  finally { return \"finally\"; }\n}\nconsole.log(f());",
          options: {
            A: "\"finally\" - a return in finally OVERRIDES the catch's return",
            B: "\"caught\"",
            C: "\"a\"",
            D: "undefined"
          },
          answer: "A",
          explanation: "finally has the last word, discarding pending returns AND pending errors. This is why returning from finally is discouraged - it can silently swallow exceptions.",
          related: ["finally", "Gotchas"]
        }
      ]
    }
  ]
});
