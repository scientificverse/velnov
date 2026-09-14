/* ============================================================
   JAVASCRIPT - TOPIC 18: ASYNCHRONOUS JAVASCRIPT (30 questions)
   Callbacks, the call stack and the event loop.
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "JavaScript",
  icon: "🟨",
  color: "#b8860b",
  description: "The language of the web - basics to advanced, 20 topics.",
  topics: [
    {
      name: "18. Asynchronous JavaScript",
      questions: [
        {
          difficulty: "medium",
          question: "What does 'JavaScript is single-threaded' mean?",
          options: {
            A: "It executes one statement at a time on one call stack - long tasks block everything",
            B: "It can only run one file",
            C: "It uses one CPU core for rendering",
            D: "It cannot handle events"
          },
          answer: "A",
          explanation: "There is one main thread, so a slow loop freezes the whole page including clicks and animations. Asynchronous APIs exist so waiting does not block that thread.",
          related: ["Single-threaded", "Call stack"]
        },
        {
          difficulty: "medium",
          question: "What is the output ORDER?\nconsole.log(\"A\");\nsetTimeout(() => console.log(\"B\"), 0);\nconsole.log(\"C\");",
          options: {
            A: "A C B - the timer callback waits until the synchronous code finishes",
            B: "A B C",
            C: "B A C",
            D: "A C, then B after a long delay"
          },
          answer: "A",
          explanation: "Even with 0 ms, the callback is queued and can only run once the call stack is empty. This is the clearest demonstration of the event loop.",
          related: ["Event loop", "setTimeout"]
        },
        {
          difficulty: "hard",
          question: "Does setTimeout(fn, 1000) guarantee the callback runs in exactly 1 second?",
          options: {
            A: "No - it runs after AT LEAST 1 second, once the stack is free",
            B: "Yes, exactly",
            C: "It runs immediately",
            D: "It never runs"
          },
          answer: "A",
          explanation: "The delay is a minimum. If synchronous code is still running (or other callbacks are queued), the timer waits longer. Never rely on precise timing.",
          related: ["setTimeout", "Timing"]
        },
        {
          difficulty: "hard",
          question: "What is the event loop?",
          options: {
            A: "The mechanism that moves queued callbacks onto the call stack whenever the stack is empty",
            B: "A for loop over events",
            C: "A browser animation",
            D: "The DOM event system"
          },
          answer: "A",
          explanation: "Web APIs (timers, network) handle waiting off-thread and push their callbacks into a queue. The event loop constantly checks: is the stack empty? If so, take the next callback.",
          related: ["Event loop", "Task queue"]
        },
        {
          difficulty: "hard",
          question: "Which runs FIRST when the stack empties: a promise callback or a setTimeout callback?",
          options: {
            A: "The promise - MICROtasks have priority over macrotasks (timers)",
            B: "setTimeout, because it was scheduled first",
            C: "Whichever was written first",
            D: "They run simultaneously"
          },
          answer: "A",
          explanation: "The microtask queue (promises, queueMicrotask) is fully drained before the next macrotask (setTimeout, events). This is why .then() consistently beats setTimeout(0).",
          code: "setTimeout(() => console.log(\"timeout\"));\nPromise.resolve().then(() => console.log(\"promise\"));\n// promise, then timeout",
          related: ["Microtasks", "Macrotasks"]
        },
        {
          difficulty: "hard",
          question: "What is the output order?\nconsole.log(1);\nsetTimeout(() => console.log(2));\nPromise.resolve().then(() => console.log(3));\nconsole.log(4);",
          options: {
            A: "1 4 3 2",
            B: "1 2 3 4",
            C: "1 4 2 3",
            D: "1 3 4 2"
          },
          answer: "A",
          explanation: "Synchronous first (1, 4), then microtasks (3), then macrotasks (2). This exact question appears in countless interviews.",
          related: ["Event loop", "Ordering"]
        },
        {
          difficulty: "medium",
          question: "What is a callback in asynchronous code?",
          options: {
            A: "A function you hand to an async operation, to be run when it finishes",
            B: "A function that calls itself",
            C: "A returned value",
            D: "An error type"
          },
          answer: "A",
          explanation: "Rather than blocking to wait for a result, you say 'call this when done'. Timers, events and older APIs all use this pattern.",
          related: ["Callbacks"]
        },
        {
          difficulty: "hard",
          question: "What is 'callback hell'?",
          options: {
            A: "Deeply nested callbacks for sequential async steps, hard to read and to error-handle",
            B: "Too many functions in a file",
            C: "A browser crash",
            D: "Using callbacks at all"
          },
          answer: "A",
          explanation: "Each step nests inside the previous one, drifting rightward (the 'pyramid of doom') with error handling duplicated at every level. Promises and async/await were created to flatten this.",
          code: "getUser(id, (u) => {\n  getOrders(u, (o) => {\n    getItems(o, (i) => {\n      // deeply nested...\n    });\n  });\n});",
          related: ["Callback hell", "Promises"]
        },
        {
          difficulty: "medium",
          question: "What is the error-first callback convention?",
          options: {
            A: "The callback's FIRST parameter is an error (null when successful), the second is the data",
            B: "Errors are thrown instead",
            C: "The callback returns errors",
            D: "There is no convention"
          },
          answer: "A",
          explanation: "Standard in Node.js: fs.readFile(path, (err, data) => { if (err) return handle(err); ... }). It forces callers to consider failure first.",
          related: ["Node.js", "Callbacks"]
        },
        {
          difficulty: "medium",
          question: "What does setInterval do, and how do you stop it?",
          options: {
            A: "Repeats a callback every N ms until clearInterval(id) is called",
            B: "Runs once after N ms",
            C: "Cannot be stopped",
            D: "Pauses the page"
          },
          answer: "A",
          explanation: "Always keep the returned id and clear it when done, or the interval keeps running (and leaking) after the component or page section is gone.",
          code: "const id = setInterval(tick, 1000);\nclearInterval(id);",
          related: ["setInterval", "clearInterval"]
        },
        {
          difficulty: "hard",
          question: "Why can a long synchronous loop freeze the page?",
          options: {
            A: "It occupies the single thread, so rendering, clicks and timers cannot run until it finishes",
            B: "It uses too much memory",
            C: "The browser blocks loops",
            D: "It does not freeze anything"
          },
          answer: "A",
          explanation: "The browser cannot repaint or process events while your code holds the thread. Break heavy work into chunks (setTimeout/requestIdleCallback) or move it to a Web Worker.",
          related: ["Blocking", "Performance"]
        },
        {
          difficulty: "hard",
          question: "What is a Web Worker?",
          options: {
            A: "A script running on a SEPARATE thread, so heavy work does not block the UI",
            B: "A server process",
            C: "A type of callback",
            D: "A browser extension"
          },
          answer: "A",
          explanation: "Workers communicate by messages and cannot touch the DOM, but they are ideal for parsing large files, image processing or heavy computation.",
          code: "const w = new Worker(\"worker.js\");\nw.postMessage(data);\nw.onmessage = (e) => console.log(e.data);",
          related: ["Web Workers", "Threads"]
        },
        {
          difficulty: "medium",
          question: "What is the call stack?",
          options: {
            A: "The list of functions currently executing - each call pushes a frame, each return pops one",
            B: "A queue of events",
            C: "Browser memory",
            D: "The DOM tree"
          },
          answer: "A",
          explanation: "Error stack traces are printouts of this stack. Overflowing it with runaway recursion gives 'Maximum call stack size exceeded'.",
          related: ["Call stack", "Stack trace"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nfunction a() { b(); }\nfunction b() { throw new Error(\"x\"); }\ntry { a(); } catch (e) { console.log(\"caught\"); }",
          options: {
            A: "caught - the error propagates DOWN the call stack to the nearest try/catch",
            B: "An uncaught error",
            C: "Nothing",
            D: "SyntaxError"
          },
          answer: "A",
          explanation: "Synchronous errors bubble through the stack until a try/catch handles them. Asynchronous callbacks run on an empty stack, which is why try/catch cannot catch them.",
          related: ["Error propagation", "Call stack"]
        },
        {
          difficulty: "hard",
          question: "Why does this NOT catch the error?\ntry { setTimeout(() => { throw new Error(\"x\"); }, 0); }\ncatch (e) { console.log(\"caught\"); }",
          options: {
            A: "The callback runs later on a fresh stack, long after the try block completed",
            B: "setTimeout cannot throw",
            C: "The syntax is wrong",
            D: "It does catch it"
          },
          answer: "A",
          explanation: "try/catch is strictly synchronous. Move it inside the callback, or use promises with .catch()/await.",
          related: ["Async errors", "try/catch"]
        },
        {
          difficulty: "medium",
          question: "What does requestAnimationFrame do?",
          options: {
            A: "Schedules a callback to run just before the next repaint - ideal for smooth animation",
            B: "Runs code every second",
            C: "Loads images",
            D: "Requests data from a server"
          },
          answer: "A",
          explanation: "It syncs with the display refresh (about 60 fps) and pauses in background tabs, making it far better than setInterval for animation.",
          code: "function loop() {\n  move();\n  requestAnimationFrame(loop);\n}\nrequestAnimationFrame(loop);",
          related: ["Animation", "rAF"]
        },
        {
          difficulty: "hard",
          question: "What is the output order?\nsetTimeout(() => console.log(\"t1\"), 0);\nsetTimeout(() => console.log(\"t2\"), 0);\nPromise.resolve().then(() => console.log(\"p1\")).then(() => console.log(\"p2\"));",
          options: {
            A: "p1 p2 t1 t2 - ALL microtasks drain before any timer",
            B: "t1 t2 p1 p2",
            C: "p1 t1 p2 t2",
            D: "t1 p1 t2 p2"
          },
          answer: "A",
          explanation: "The chained .then also schedules a microtask, which runs in the same drain cycle - so both promise logs beat both timers.",
          related: ["Microtasks", "Event loop"]
        },
        {
          difficulty: "medium",
          question: "Which of these are handled by Web APIs rather than the JS engine itself?",
          options: {
            A: "setTimeout, fetch, DOM events, geolocation",
            B: "for loops and arithmetic",
            C: "Array methods",
            D: "String operations"
          },
          answer: "A",
          explanation: "The engine runs your code; the browser provides timers, networking and events. They do the waiting off-thread and queue callbacks when ready.",
          related: ["Web APIs", "Runtime"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log(\"start\");\nfor (let i = 0; i < 3; i++) setTimeout(() => console.log(i), 0);\nconsole.log(\"end\");",
          options: {
            A: "start end 0 1 2",
            B: "start 0 1 2 end",
            C: "start end 3 3 3",
            D: "0 1 2 start end"
          },
          answer: "A",
          explanation: "Both logs run synchronously first; the three timer callbacks follow in order. let gives each its own i, so 0 1 2 (var would give 3 3 3).",
          related: ["Event loop", "Closures"]
        },
        {
          difficulty: "medium",
          question: "What is the difference between synchronous and asynchronous code?",
          options: {
            A: "Synchronous blocks until it finishes; asynchronous starts an operation and continues, handling the result later",
            B: "Async code is always faster",
            C: "Sync code runs on another thread",
            D: "There is no difference"
          },
          answer: "A",
          explanation: "Async does not mean parallel in JavaScript - it means 'do not block the thread while waiting'. The waiting happens elsewhere; your callback runs later on the same thread.",
          related: ["Concurrency"]
        },
        {
          difficulty: "hard",
          question: "Why is nested async code better expressed with promises?",
          options: {
            A: "Promises flatten the nesting into a chain and centralise error handling in one .catch()",
            B: "Promises are synchronous",
            C: "Callbacks are unsupported",
            D: "Promises are slower but prettier"
          },
          answer: "A",
          explanation: "Each callback level needed its own error check; a promise chain propagates rejections automatically to a single handler at the end.",
          related: ["Promises", "Callback hell"]
        },
        {
          difficulty: "medium",
          question: "What does queueMicrotask(fn) do?",
          options: {
            A: "Schedules fn in the microtask queue - it runs before timers but after current sync code",
            B: "Runs fn immediately",
            C: "Runs fn after 1 ms",
            D: "Creates a Web Worker"
          },
          answer: "A",
          explanation: "It gives the same priority as promise callbacks, useful for deferring work to just after the current task without waiting for a timer.",
          related: ["Microtasks"]
        },
        {
          difficulty: "hard",
          question: "What happens if a microtask schedules another microtask endlessly?",
          options: {
            A: "The queue never empties, so the page freezes - timers and rendering never get a turn",
            B: "The browser alternates fairly",
            C: "It throws an error",
            D: "Nothing happens"
          },
          answer: "A",
          explanation: "Microtasks are drained completely before anything else, so an infinite chain starves the event loop - worse than a long timer loop.",
          related: ["Microtasks", "Starvation"]
        },
        {
          difficulty: "medium",
          question: "How do you pause for 2 seconds in modern async code?",
          options: {
            A: "await new Promise(r => setTimeout(r, 2000))",
            B: "sleep(2000)",
            C: "wait(2)",
            D: "thread.sleep(2000)"
          },
          answer: "A",
          explanation: "JavaScript has no built-in sleep. Wrapping setTimeout in a promise gives a clean, non-blocking delay usable with await.",
          code: "const sleep = ms => new Promise(r => setTimeout(r, ms));\nawait sleep(2000);",
          related: ["Promises", "async/await"]
        },
        {
          difficulty: "hard",
          question: "Why is a while loop the WRONG way to wait 2 seconds?\nwhile (Date.now() - start < 2000) { }",
          options: {
            A: "It blocks the single thread completely - the page freezes and nothing renders",
            B: "It is not accurate",
            C: "It uses too much memory",
            D: "It works fine"
          },
          answer: "A",
          explanation: "This 'busy wait' burns CPU and prevents all rendering and input. Always yield with a timer or promise instead.",
          related: ["Blocking", "Busy waiting"]
        },
        {
          difficulty: "medium",
          question: "What does clearTimeout(id) do?",
          options: {
            A: "Cancels a pending timer before it fires",
            B: "Stops all timers",
            C: "Resets the clock",
            D: "Nothing after the timer is set"
          },
          answer: "A",
          explanation: "Essential for debouncing: each new keystroke clears the previous pending timer so only the final one runs.",
          related: ["clearTimeout", "Debounce"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconst start = Date.now();\nsetTimeout(() => console.log(Date.now() - start), 100);\nfor (let i = 0; i < 1e9; i++) { }",
          options: {
            A: "A number much LARGER than 100 - the blocking loop delays the callback",
            B: "Exactly 100",
            C: "0",
            D: "Nothing is printed"
          },
          answer: "A",
          explanation: "The timer becomes ready at 100 ms but must wait for the stack to clear. This proves timer delays are minimums, not guarantees.",
          related: ["Blocking", "Timers"]
        },
        {
          difficulty: "medium",
          question: "Which pattern reads most clearly for sequential async steps today?",
          options: {
            A: "async/await with try/catch",
            B: "Nested callbacks",
            C: "Long .then() chains only",
            D: "Synchronous XMLHttpRequest"
          },
          answer: "A",
          explanation: "await makes asynchronous code read top-to-bottom like synchronous code, with familiar try/catch error handling - built on promises underneath.",
          related: ["async/await", "Readability"]
        },
        {
          difficulty: "hard",
          question: "Is async code parallel?",
          options: {
            A: "No - it is CONCURRENT: operations overlap in waiting, but JS callbacks still run one at a time on the main thread",
            B: "Yes, fully parallel",
            C: "Only with promises",
            D: "Only in Node.js"
          },
          answer: "A",
          explanation: "Several network requests can be in flight simultaneously (the browser handles them), but your JavaScript callbacks are processed sequentially. True parallel JS requires Web Workers.",
          related: ["Concurrency vs parallelism"]
        },
        {
          difficulty: "medium",
          question: "Why does console.log show the OLD value here?\nlet data = null;\nfetchData(d => data = d);\nconsole.log(data);",
          options: {
            A: "The callback has not run yet - the log executes before the async work completes",
            B: "fetchData is broken",
            C: "data is const",
            D: "console.log is async"
          },
          answer: "A",
          explanation: "The single most common async misunderstanding. You must USE the data inside the callback (or await the promise) rather than reading it immediately after.",
          related: ["Async timing", "Common mistakes"]
        }
      ]
    }
  ]
});
