/* ============================================================
   JAVASCRIPT - TOPIC 13: CLOSURES (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "JavaScript",
  icon: "🟨",
  color: "#b8860b",
  description: "The language of the web - basics to advanced, 20 topics.",
  topics: [
    {
      name: "13. Closures",
      questions: [
        {
          difficulty: "medium",
          question: "What is a closure?",
          options: {
            A: "A function that remembers variables from the scope where it was CREATED, even after that scope has finished",
            B: "A function that closes the browser",
            C: "A way to end a loop",
            D: "A private class method"
          },
          answer: "A",
          explanation: "When an inner function references an outer variable and outlives the outer call, JavaScript keeps that variable alive for it. Closures are the foundation of callbacks, modules and React hooks.",
          code: "function outer() {\n  const msg = \"hi\";\n  return () => msg;    // closure over msg\n}\nconsole.log(outer()());   // \"hi\"",
          related: ["Lexical scope", "Functions"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nfunction outer() {\n  let x = 10;\n  return function() { return x; };\n}\nconst f = outer();\nconsole.log(f());",
          options: {
            A: "10 - the closure keeps x alive after outer() returned",
            B: "undefined",
            C: "ReferenceError",
            D: "0"
          },
          answer: "A",
          explanation: "Normally locals vanish when a function returns, but because the returned function still references x, it is retained in memory.",
          related: ["Closures", "Memory"]
        },
        {
          difficulty: "medium",
          question: "What does this counter demonstrate?\nfunction makeCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst c = makeCounter();\nconsole.log(c(), c(), c());",
          options: {
            A: "1 2 3 - the closure keeps private state between calls",
            B: "1 1 1",
            C: "0 1 2",
            D: "undefined"
          },
          answer: "A",
          explanation: "count lives in the closure, not the global scope, and persists across calls - giving encapsulated, tamper-proof state.",
          related: ["Closures", "State"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconst a = makeCounter();\nconst b = makeCounter();\nconsole.log(a(), a(), b());",
          options: {
            A: "1 2 1 - each call to makeCounter creates a SEPARATE closure",
            B: "1 2 3",
            C: "1 1 1",
            D: "3 3 3"
          },
          answer: "A",
          explanation: "Every invocation creates a fresh scope with its own count. a and b are completely independent - like two instances of a class.",
          related: ["Closures", "Independence"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}",
          options: {
            A: "3 3 3 - all closures share ONE var binding, which is 3 when the timers run",
            B: "0 1 2",
            C: "0 0 0",
            D: "undefined x3"
          },
          answer: "A",
          explanation: "The loop finishes before any timer fires, and var has a single function-scoped binding. Every callback reads the same final value.",
          notes: ["The most famous JavaScript closure question."],
          related: ["var", "Event loop", "Closures"]
        },
        {
          difficulty: "medium",
          question: "How does changing var to let fix the loop-closure problem?",
          options: {
            A: "let creates a NEW binding per iteration, so each callback closes over its own copy",
            B: "let delays the timers",
            C: "let makes the loop synchronous",
            D: "It does not fix it"
          },
          answer: "A",
          explanation: "The specification re-binds a let loop variable each iteration, giving three separate closures that print 0 1 2.",
          code: "for (let i = 0; i < 3; i++) setTimeout(() => console.log(i));\n// 0 1 2",
          related: ["let", "Closures"]
        },
        {
          difficulty: "hard",
          question: "How would you fix the var loop WITHOUT using let?",
          options: {
            A: "Wrap the body in an IIFE that receives i as a parameter",
            B: "Add a return statement",
            C: "Use a while loop",
            D: "It cannot be fixed"
          },
          answer: "A",
          explanation: "The classic pre-ES6 solution: an immediately invoked function creates a new scope per iteration, capturing the current value as its parameter.",
          code: "for (var i = 0; i < 3; i++) {\n  (function(j) {\n    setTimeout(() => console.log(j));\n  })(i);\n}   // 0 1 2",
          related: ["IIFE", "Closures"]
        },
        {
          difficulty: "medium",
          question: "What is the module pattern using closures?",
          options: {
            A: "An IIFE that keeps variables private and returns only the public methods",
            B: "Importing files",
            C: "A class",
            D: "A loop pattern"
          },
          answer: "A",
          explanation: "Before ES modules, this was the standard way to get privacy: internal state lives in the closure and only the returned object is reachable.",
          code: "const bank = (function() {\n  let balance = 0;                       // private\n  return {\n    deposit(n) { balance += n; },\n    getBalance() { return balance; }\n  };\n})();\nbank.deposit(100);\nconsole.log(bank.balance);   // undefined - private!",
          related: ["Module pattern", "Encapsulation"]
        },
        {
          difficulty: "medium",
          question: "How do closures create 'private' variables?",
          options: {
            A: "The variable is only reachable through the functions that closed over it - nothing outside can touch it",
            B: "By using the private keyword",
            C: "By using const",
            D: "They cannot"
          },
          answer: "A",
          explanation: "There is no way to reach a closure variable from outside except through the exposed functions - real encapsulation without any special syntax.",
          related: ["Encapsulation", "Privacy"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nfunction multiplier(factor) {\n  return n => n * factor;\n}\nconst triple = multiplier(3);\nconsole.log(triple(5));",
          options: {
            A: "15 - the closure remembers factor = 3",
            B: "5",
            C: "3",
            D: "undefined"
          },
          answer: "A",
          explanation: "multiplier is a function factory: it bakes a value into the returned function. This pattern (partial application) is used constantly in functional JavaScript.",
          related: ["Function factories", "Currying"]
        },
        {
          difficulty: "hard",
          question: "What is currying?",
          options: {
            A: "Turning a multi-argument function into a chain of single-argument functions returning functions",
            B: "Sorting an array",
            C: "Caching results",
            D: "An error-handling pattern"
          },
          answer: "A",
          explanation: "Currying relies on closures to remember earlier arguments: add(1)(2)(3). It enables reusable specialised functions.",
          code: "const add = a => b => c => a + b + c;\nconsole.log(add(1)(2)(3));   // 6\nconst add5 = add(5);          // reusable",
          related: ["Currying", "Closures"]
        },
        {
          difficulty: "medium",
          question: "Why do event handlers commonly rely on closures?",
          options: {
            A: "The handler runs long after setup, but still needs the variables from when it was created",
            B: "Events require the closure keyword",
            C: "Closures make events faster",
            D: "They do not use closures"
          },
          answer: "A",
          explanation: "A click may happen minutes later; the callback still sees the id, element or config captured at registration time - because of the closure.",
          code: "function setup(id) {\n  btn.addEventListener(\"click\", () => console.log(id));   // remembers id\n}",
          related: ["Events", "Callbacks"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nlet x = 1;\nfunction show() { console.log(x); }\nx = 99;\nshow();",
          options: {
            A: "99 - closures capture the VARIABLE, not a snapshot of its value",
            B: "1",
            C: "undefined",
            D: "ReferenceError"
          },
          answer: "A",
          explanation: "A closure holds a live reference to the binding, so it sees the latest value. This is exactly why the var-loop prints 3 3 3.",
          related: ["Live binding", "Closures"]
        },
        {
          difficulty: "hard",
          question: "What is memoization, and how do closures enable it?",
          options: {
            A: "Caching results in a closure-held object so repeated calls with the same input return instantly",
            B: "Writing memos in comments",
            C: "Freeing memory",
            D: "Sorting cached data"
          },
          answer: "A",
          explanation: "The cache lives in the closure - private, persistent between calls, and invisible to callers.",
          code: "function memoize(fn) {\n  const cache = {};\n  return n => {\n    if (n in cache) return cache[n];\n    return (cache[n] = fn(n));\n  };\n}",
          related: ["Memoization", "Caching"]
        },
        {
          difficulty: "hard",
          question: "What does this debounce function use closures for?\nfunction debounce(fn, ms) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), ms);\n  };\n}",
          options: {
            A: "To remember the pending timer id between calls, so rapid calls cancel the previous one",
            B: "To speed up the function",
            C: "To count calls",
            D: "Nothing - closures are unused"
          },
          answer: "A",
          explanation: "timer persists across invocations in the closure. Debouncing is essential for search-as-you-type and resize handlers.",
          code: "input.addEventListener(\"input\", debounce(search, 300));",
          related: ["Debounce", "Real-world"]
        },
        {
          difficulty: "medium",
          question: "Do closures keep variables in memory longer than usual?",
          options: {
            A: "Yes - captured variables cannot be garbage collected while the closure lives (a possible leak if careless)",
            B: "No, memory is freed immediately",
            C: "Closures use no memory",
            D: "Only in old browsers"
          },
          answer: "A",
          explanation: "This is normally fine and intentional, but holding closures that capture large DOM nodes or datasets (e.g. never-removed listeners) can cause memory leaks.",
          related: ["Memory", "Garbage collection"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nfunction f() {\n  const fns = [];\n  for (let i = 0; i < 3; i++) fns.push(() => i);\n  return fns.map(fn => fn());\n}\nconsole.log(f());",
          options: {
            A: "[0, 1, 2] - let gives each closure its own i",
            B: "[3, 3, 3]",
            C: "[0, 0, 0]",
            D: "[undefined x3]"
          },
          answer: "A",
          explanation: "Because let re-binds per iteration, the three stored functions capture different values. With var the answer would be [3, 3, 3].",
          related: ["Closures", "let"]
        },
        {
          difficulty: "medium",
          question: "Can a closure MODIFY the variable it captured?",
          options: {
            A: "Yes - it holds a live reference, so it can read and write",
            B: "No, captured variables are read-only",
            C: "Only with const",
            D: "Only inside loops"
          },
          answer: "A",
          explanation: "That is precisely how counters work: the inner function increments the outer variable, and the change persists for the next call.",
          related: ["Mutation", "State"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconst fns = [];\nfor (var i = 0; i < 3; i++) {\n  fns.push(() => i);\n}\nconsole.log(fns.map(f => f()));",
          options: {
            A: "[3, 3, 3] - all three share the single var binding",
            B: "[0, 1, 2]",
            C: "[0, 0, 0]",
            D: "Error"
          },
          answer: "A",
          explanation: "var creates one binding for the whole function; after the loop it holds 3, and every closure reads that same variable.",
          related: ["var", "Closures"]
        },
        {
          difficulty: "medium",
          question: "Are closures created for EVERY function, or only special ones?",
          options: {
            A: "Every function forms a closure over its enclosing scope - we only 'notice' when it outlives that scope",
            B: "Only functions with the closure keyword",
            C: "Only arrow functions",
            D: "Only returned functions"
          },
          answer: "A",
          explanation: "Closure is inherent to lexical scoping. The term is usually used when a function is passed around or returned, keeping outer variables alive.",
          related: ["Lexical scope"]
        },
        {
          difficulty: "hard",
          question: "What does this once() helper do?\nfunction once(fn) {\n  let called = false, result;\n  return (...a) => {\n    if (!called) { called = true; result = fn(...a); }\n    return result;\n  };\n}",
          options: {
            A: "Ensures fn runs only the FIRST time, caching and returning that result afterwards",
            B: "Runs fn once per second",
            C: "Deletes fn after use",
            D: "Runs fn in a loop"
          },
          answer: "A",
          explanation: "The closure remembers called and result. Useful for one-time initialisation, single-submit buttons and lazy setup.",
          related: ["Closures", "Patterns"]
        },
        {
          difficulty: "hard",
          question: "Why is this a common React-hooks pitfall (stale closure)?\nuseEffect(() => {\n  const id = setInterval(() => setCount(count + 1), 1000);\n}, []);",
          options: {
            A: "The effect captured count from the FIRST render, so it always adds 1 to that stale value",
            B: "setInterval is not allowed",
            C: "The syntax is wrong",
            D: "It works correctly"
          },
          answer: "A",
          explanation: "With an empty dependency array the callback closes over the initial count forever. The fix is the functional updater: setCount(c => c + 1), which does not depend on the captured value.",
          related: ["React", "Stale closures"]
        },
        {
          difficulty: "medium",
          question: "What does the returned function 'close over' here?\nfunction greeter(greeting) {\n  return name => `${greeting}, ${name}!`;\n}",
          options: {
            A: "The greeting parameter",
            B: "The name parameter",
            C: "Nothing",
            D: "The whole global scope"
          },
          answer: "A",
          explanation: "greeting belongs to the outer call and is captured; name is the inner function's own parameter, supplied at call time.",
          code: "const hi = greeter(\"Hi\");\nconsole.log(hi(\"Ana\"));   // \"Hi, Ana!\"",
          related: ["Closures", "Parameters"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nlet fn;\n{\n  let secret = \"hidden\";\n  fn = () => secret;\n}\nconsole.log(fn());",
          options: {
            A: "\"hidden\" - the block ended, but the closure keeps secret alive",
            B: "ReferenceError",
            C: "undefined",
            D: "null"
          },
          answer: "A",
          explanation: "Closures work over any scope, including plain blocks. secret is unreachable by name but preserved for fn.",
          related: ["Block scope", "Closures"]
        },
        {
          difficulty: "medium",
          question: "Which everyday feature is powered by closures?",
          options: {
            A: "setTimeout callbacks, event handlers, array method callbacks and React hooks",
            B: "Only recursion",
            C: "Only classes",
            D: "None - closures are theoretical"
          },
          answer: "A",
          explanation: "Any callback that uses variables from where it was written is a closure. You have been using them since your first setTimeout.",
          related: ["Callbacks", "Real-world"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nfunction counter() {\n  let n = 0;\n  return { inc: () => ++n, get: () => n };\n}\nconst c = counter();\nc.inc(); c.inc();\nconsole.log(c.get(), c.n);",
          options: {
            A: "2 undefined - both methods share the closure, but n is not a property",
            B: "2 2",
            C: "0 0",
            D: "undefined undefined"
          },
          answer: "A",
          explanation: "Several functions from the same scope share one closure, which is how the module pattern works. n stays private, so c.n is undefined.",
          related: ["Shared closures", "Privacy"]
        },
        {
          difficulty: "medium",
          question: "How can a closure cause a memory leak in the DOM?",
          options: {
            A: "A listener that captures a large element and is never removed keeps it in memory after removal from the page",
            B: "Closures always leak",
            C: "By using const",
            D: "Closures cannot leak"
          },
          answer: "A",
          explanation: "The captured reference blocks garbage collection. Call removeEventListener when cleaning up (React does this in the effect cleanup function).",
          related: ["Memory leaks", "Events"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconst add = (a) => (b) => a + b;\nconsole.log(add(2)(3), add(2)(10));",
          options: {
            A: "5 12 - each call to add(2) creates a fresh closure",
            B: "5 5",
            C: "12 12",
            D: "undefined"
          },
          answer: "A",
          explanation: "add(2) returns a new function each time, all remembering a = 2 but applied to different b values.",
          related: ["Currying", "Closures"]
        },
        {
          difficulty: "medium",
          question: "In one sentence, why do closures matter?",
          options: {
            A: "They let functions carry private, persistent state - enabling callbacks, factories, modules and encapsulation",
            B: "They make code shorter",
            C: "They speed up loops",
            D: "They are required by the browser"
          },
          answer: "A",
          explanation: "Closures are what make JavaScript's functional patterns possible: data privacy without classes, and callbacks that remember their context.",
          related: ["Summary"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nfunction f() {\n  var x = 1;\n  { var x = 2; }\n  return x;\n}\nconsole.log(f());",
          options: {
            A: "2 - var ignores the block, so both declarations are the SAME variable",
            B: "1",
            C: "undefined",
            D: "SyntaxError"
          },
          answer: "A",
          explanation: "With var there is one function-scoped x that gets overwritten. With let, the inner one would be a separate block-scoped variable and the function would return 1.",
          related: ["var", "Block scope", "Shadowing"]
        }
      ]
    }
  ]
});
