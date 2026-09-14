/* ============================================================
   JAVASCRIPT - TOPIC 19: PROMISES & ASYNC/AWAIT (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "JavaScript",
  icon: "🟨",
  color: "#b8860b",
  description: "The language of the web - basics to advanced, 20 topics.",
  topics: [
    {
      name: "19. Promises & async/await",
      questions: [
        {
          difficulty: "medium",
          question: "What is a Promise?",
          options: {
            A: "An object representing a value that will be available later - a placeholder for an async result",
            B: "A guaranteed return value",
            C: "A type of callback",
            D: "A loop construct"
          },
          answer: "A",
          explanation: "A promise is a receipt for future data. It lets you attach handlers now for a result that arrives later, avoiding deeply nested callbacks.",
          related: ["Promises", "Async"]
        },
        {
          difficulty: "medium",
          question: "What are the three states of a promise?",
          options: {
            A: "Pending, fulfilled, rejected",
            B: "Start, middle, end",
            C: "Open, closed, error",
            D: "Waiting, running, done"
          },
          answer: "A",
          explanation: "A promise begins pending and settles exactly once into fulfilled (with a value) or rejected (with a reason). It can never change again.",
          related: ["Promise states"]
        },
        {
          difficulty: "medium",
          question: "How do you handle a promise's SUCCESS value?",
          options: {
            A: ".then(value => ...) or await",
            B: ".catch(value => ...)",
            C: ".finally(value => ...)",
            D: "return value"
          },
          answer: "A",
          explanation: "then receives the fulfilled value. await unwraps it more readably inside an async function.",
          code: "fetch(url).then(res => res.json()).then(data => show(data));\n\nconst data = await (await fetch(url)).json();",
          related: ["then", "await"]
        },
        {
          difficulty: "medium",
          question: "How do you handle a promise REJECTION?",
          options: {
            A: ".catch(err => ...) or try/catch around await",
            B: ".then(err => ...)",
            C: "if (promise.error)",
            D: "Rejections cannot be handled"
          },
          answer: "A",
          explanation: "catch handles rejections anywhere earlier in the chain. With await, the rejection is thrown, so a normal try/catch works.",
          related: ["catch", "Error handling"]
        },
        {
          difficulty: "medium",
          question: "What does .finally() do?",
          options: {
            A: "Runs whether the promise fulfilled or rejected - ideal for cleanup",
            B: "Runs only on success",
            C: "Runs only on failure",
            D: "Ends the chain permanently"
          },
          answer: "A",
          explanation: "Perfect for hiding a loading spinner or re-enabling a button. It receives no argument and passes the result through unchanged.",
          code: "setLoading(true);\nfetchData().then(show).catch(showError).finally(() => setLoading(false));",
          related: ["finally", "Cleanup"]
        },
        {
          difficulty: "hard",
          question: "How do you create a promise manually?",
          options: {
            A: "new Promise((resolve, reject) => { ... })",
            B: "Promise.create()",
            C: "promise()",
            D: "new Async()"
          },
          answer: "A",
          explanation: "The executor runs immediately; call resolve(value) on success or reject(error) on failure. Mainly used to wrap old callback APIs.",
          code: "const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));",
          related: ["Promise constructor"]
        },
        {
          difficulty: "medium",
          question: "What does an async function ALWAYS return?",
          options: {
            A: "A promise - even if you return a plain value",
            B: "The value directly",
            C: "undefined",
            D: "A callback"
          },
          answer: "A",
          explanation: "return 42 inside async produces a promise fulfilled with 42. That is why you must await it or use .then() at the call site.",
          code: "async function f() { return 42; }\nf().then(v => console.log(v));   // 42\nconsole.log(f());                 // Promise { 42 }",
          related: ["async", "Return values"]
        },
        {
          difficulty: "medium",
          question: "Where can you use the await keyword?",
          options: {
            A: "Inside an async function, or at the top level of an ES module",
            B: "Anywhere",
            C: "Only inside loops",
            D: "Only in the browser"
          },
          answer: "A",
          explanation: "Using await in a regular function is a SyntaxError. Top-level await works in ES modules (type=\"module\"), not in classic scripts.",
          related: ["await", "async", "Modules"]
        },
        {
          difficulty: "hard",
          question: "What is the output ORDER?\nasync function f() {\n  console.log(\"1\");\n  await null;\n  console.log(\"2\");\n}\nf();\nconsole.log(\"3\");",
          options: {
            A: "1 3 2 - code before await runs synchronously; the rest resumes as a microtask",
            B: "1 2 3",
            C: "3 1 2",
            D: "1 3, then 2 never runs"
          },
          answer: "A",
          explanation: "An async function starts executing immediately and only pauses AT the first await, returning control to the caller. Awaiting even a non-promise defers the remainder.",
          related: ["async", "Event loop"]
        },
        {
          difficulty: "hard",
          question: "What is wrong with this sequential code?\nconst a = await fetchA();\nconst b = await fetchB();",
          options: {
            A: "If they are independent, this wastes time - B only starts after A finishes. Use Promise.all",
            B: "It is a syntax error",
            C: "await cannot be used twice",
            D: "Nothing is wrong"
          },
          answer: "A",
          explanation: "Sequential awaits are correct when B needs A's result, but wasteful otherwise. Promise.all runs them concurrently, roughly halving the wait.",
          code: "const [a, b] = await Promise.all([fetchA(), fetchB()]);",
          related: ["Promise.all", "Performance"]
        },
        {
          difficulty: "medium",
          question: "What does Promise.all([p1, p2]) do?",
          options: {
            A: "Waits for ALL to fulfil and gives an array of results - but rejects immediately if ANY rejects",
            B: "Waits for the first one",
            C: "Runs them one after another",
            D: "Ignores rejections"
          },
          answer: "A",
          explanation: "It is all-or-nothing: one failure rejects the whole thing (the others still run but their results are discarded). Use allSettled when partial success is acceptable.",
          related: ["Promise.all", "Concurrency"]
        },
        {
          difficulty: "hard",
          question: "How is Promise.allSettled different from Promise.all?",
          options: {
            A: "It NEVER rejects - it waits for all and returns each result as {status, value|reason}",
            B: "It is faster",
            C: "It returns only successes",
            D: "It stops at the first rejection"
          },
          answer: "A",
          explanation: "Ideal when you want every outcome, e.g. uploading ten files and reporting which succeeded and which failed.",
          code: "const results = await Promise.allSettled(promises);\nresults.forEach(r => r.status === \"fulfilled\" ? ok(r.value) : bad(r.reason));",
          related: ["allSettled"]
        },
        {
          difficulty: "hard",
          question: "What does Promise.race([p1, p2]) return?",
          options: {
            A: "The result of whichever settles FIRST - fulfilled or rejected",
            B: "The fastest successful one only",
            C: "All results",
            D: "The slowest one"
          },
          answer: "A",
          explanation: "Commonly used for timeouts: race the real request against a promise that rejects after N seconds.",
          code: "const timeout = ms => new Promise((_, rej) => setTimeout(() => rej(new Error(\"timeout\")), ms));\nawait Promise.race([fetch(url), timeout(5000)]);",
          related: ["Promise.race", "Timeouts"]
        },
        {
          difficulty: "hard",
          question: "What does Promise.any() do?",
          options: {
            A: "Fulfils with the FIRST successful promise, ignoring rejections (fails only if all fail)",
            B: "Same as race",
            C: "Same as all",
            D: "Returns any random one"
          },
          answer: "A",
          explanation: "Unlike race (which settles on the first result even if it is an error), any keeps waiting for a success - useful for querying several mirrors.",
          related: ["Promise.any", "Promise.race"]
        },
        {
          difficulty: "medium",
          question: "What does each .then() in a chain return?",
          options: {
            A: "A NEW promise resolved with the callback's return value - which is why chaining works",
            B: "The original promise",
            C: "undefined",
            D: "The raw value"
          },
          answer: "A",
          explanation: "Returning a value passes it to the next then; returning a PROMISE waits for it to settle first, flattening the chain automatically.",
          code: "fetch(url)\n  .then(res => res.json())   // returns a promise - awaited\n  .then(data => data.items)   // plain value\n  .then(items => show(items));",
          related: ["Chaining", "then"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nPromise.resolve(1)\n  .then(v => { console.log(v); })\n  .then(v => console.log(v));",
          options: {
            A: "1 then undefined - the first then returned nothing",
            B: "1 then 1",
            C: "1 only",
            D: "undefined twice"
          },
          answer: "A",
          explanation: "Forgetting to RETURN inside a then breaks the value chain - the next handler receives undefined. A very common bug.",
          code: ".then(v => { return v; })   // or just .then(v => v)",
          related: ["Chaining", "Return values"]
        },
        {
          difficulty: "hard",
          question: "Where does an error thrown inside a .then() go?",
          options: {
            A: "To the nearest .catch() LATER in the chain",
            B: "To the surrounding try/catch",
            C: "It is silently ignored",
            D: "It crashes the browser"
          },
          answer: "A",
          explanation: "Rejections skip subsequent then handlers until a catch is found. Note a catch placed BEFORE the throwing then cannot catch it - order matters.",
          related: ["Error propagation", "catch"]
        },
        {
          difficulty: "medium",
          question: "How do you catch an error from an awaited promise?",
          options: {
            A: "Wrap the await in try/catch",
            B: "Use .then only",
            C: "Errors cannot be caught with await",
            D: "Use if (error)"
          },
          answer: "A",
          explanation: "await converts rejection into a thrown error, so ordinary try/catch/finally works - one of the main readability wins of async/await.",
          code: "try {\n  const data = await getData();\n} catch (err) {\n  showError(err);\n}",
          related: ["try/catch", "await"]
        },
        {
          difficulty: "hard",
          question: "What is an unhandled promise rejection?",
          options: {
            A: "A rejected promise with no catch handler - it logs a warning and can terminate Node processes",
            B: "A promise that stays pending",
            C: "A syntax error",
            D: "A fulfilled promise"
          },
          answer: "A",
          explanation: "Always end chains with .catch() or wrap awaits in try/catch. A global fallback: window.addEventListener('unhandledrejection', ...).",
          related: ["Error handling", "Node.js"]
        },
        {
          difficulty: "hard",
          question: "What is wrong with using await inside forEach?\nitems.forEach(async (i) => { await save(i); });",
          options: {
            A: "forEach ignores the returned promises, so the code continues without waiting",
            B: "It is a syntax error",
            C: "async cannot be used in callbacks",
            D: "Nothing is wrong"
          },
          answer: "A",
          explanation: "forEach discards return values, so nothing awaits the saves. Use a for...of loop for sequential work, or Promise.all(items.map(...)) for concurrent work.",
          code: "for (const i of items) await save(i);        // sequential\nawait Promise.all(items.map(i => save(i)));   // concurrent",
          notes: ["A very common async bug in real projects."],
          related: ["forEach", "Async loops"]
        },
        {
          difficulty: "medium",
          question: "How do you run async operations SEQUENTIALLY?",
          options: {
            A: "A for...of loop with await inside",
            B: "forEach with await",
            C: "Promise.all",
            D: "map with await"
          },
          answer: "A",
          explanation: "for...of respects await, pausing each iteration until the operation completes - necessary when each step depends on the previous or you must not overload a server.",
          related: ["for...of", "Sequential"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nasync function f() { throw new Error(\"boom\"); }\nf().catch(e => console.log(e.message));",
          options: {
            A: "boom - throwing inside async REJECTS the returned promise",
            B: "An uncaught error",
            C: "Nothing",
            D: "SyntaxError"
          },
          answer: "A",
          explanation: "Async functions convert throws into rejections, which is why try/catch and .catch() are interchangeable ways to handle them.",
          related: ["async", "Rejection"]
        },
        {
          difficulty: "medium",
          question: "What does Promise.resolve(5) create?",
          options: {
            A: "A promise already fulfilled with 5",
            B: "A pending promise",
            C: "The number 5",
            D: "A rejected promise"
          },
          answer: "A",
          explanation: "Useful for returning a promise from a function that sometimes has a cached value, so callers can always use .then/await consistently.",
          related: ["Promise.resolve"]
        },
        {
          difficulty: "hard",
          question: "Can you await a NON-promise value?\nconst x = await 5;",
          options: {
            A: "Yes - it is wrapped in a resolved promise, though it still defers the rest of the function",
            B: "No, it throws",
            C: "It returns undefined",
            D: "It blocks forever"
          },
          answer: "A",
          explanation: "await accepts any value. This is handy when a function might return either a value or a promise - and it explains why 'await null' still yields to the event loop.",
          related: ["await", "Thenable"]
        },
        {
          difficulty: "hard",
          question: "What is the output ORDER?\nconsole.log(\"A\");\n(async () => { console.log(\"B\"); await 0; console.log(\"C\"); })();\nconsole.log(\"D\");",
          options: {
            A: "A B D C",
            B: "A B C D",
            C: "A D B C",
            D: "B A D C"
          },
          answer: "A",
          explanation: "The async function body starts synchronously (B), pauses at await, control returns to the caller (D), then the continuation runs as a microtask (C).",
          related: ["async", "Microtasks"]
        },
        {
          difficulty: "medium",
          question: "Why must you await response.json() after fetch?",
          options: {
            A: "Reading and parsing the body is itself asynchronous, so json() returns a promise",
            B: "It is optional",
            C: "To convert to a string",
            D: "fetch is synchronous"
          },
          answer: "A",
          explanation: "fetch resolves once the HEADERS arrive; the body may still be streaming. Hence the classic two awaits.",
          code: "const res = await fetch(url);\nconst data = await res.json();",
          related: ["fetch", "json"]
        },
        {
          difficulty: "hard",
          question: "What is the promisify pattern?",
          options: {
            A: "Wrapping a callback-based API in a promise so it can be awaited",
            B: "Converting promises to callbacks",
            C: "Making code synchronous",
            D: "A testing technique"
          },
          answer: "A",
          explanation: "Legacy APIs (older Node functions, geolocation, some libraries) take callbacks. Wrapping them once lets the rest of your code use async/await.",
          code: "const getPos = () => new Promise((res, rej) =>\n  navigator.geolocation.getCurrentPosition(res, rej));\nconst pos = await getPos();",
          related: ["Promisify", "Legacy APIs"]
        },
        {
          difficulty: "hard",
          question: "Does creating a promise start its work lazily or immediately?",
          options: {
            A: "Immediately - the executor runs as soon as the promise is created, even before .then is attached",
            B: "Only when .then is called",
            C: "Only when awaited",
            D: "Never automatically"
          },
          answer: "A",
          explanation: "Promises are EAGER. const p = fetch(url) starts the request at once; awaiting later just waits for the already-running work. This is why Promise.all(fns.map(f => f())) runs concurrently.",
          related: ["Eager evaluation"]
        },
        {
          difficulty: "medium",
          question: "Can a promise change state twice?",
          options: {
            A: "No - it settles once; later resolve/reject calls are ignored",
            B: "Yes, any number of times",
            C: "Only from rejected to fulfilled",
            D: "Only with .then"
          },
          answer: "A",
          explanation: "Immutability once settled makes promises predictable: every handler attached (before or after) sees the same single outcome.",
          related: ["Promise states"]
        },
        {
          difficulty: "hard",
          question: "What is the practical difference between .then chains and async/await?",
          options: {
            A: "They are equivalent - await is syntax over promises, usually more readable for sequential logic",
            B: "await is faster",
            C: "then is deprecated",
            D: "await avoids promises entirely"
          },
          answer: "A",
          explanation: "Use await for step-by-step flows and try/catch; use .then when composing pipelines or with combinators like Promise.all. Mixing both is fine.",
          related: ["async/await", "then"]
        }
      ]
    }
  ]
});
