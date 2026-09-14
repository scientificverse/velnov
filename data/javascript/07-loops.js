/* ============================================================
   JAVASCRIPT - TOPIC 7: LOOPS (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "JavaScript",
  icon: "🟨",
  color: "#b8860b",
  description: "The language of the web - basics to advanced, 20 topics.",
  topics: [
    {
      name: "7. Loops",
      questions: [
        {
          difficulty: "easy",
          question: "What are the three parts of a classic for loop?\nfor (A; B; C)",
          options: {
            A: "Initialisation; condition; update",
            B: "Start; end; step size",
            C: "Variable; array; index",
            D: "Condition; body; return"
          },
          answer: "A",
          explanation: "for (let i = 0; i < 5; i++) means: create i, keep going while the condition holds, and run the update after each pass.",
          code: "for (let i = 0; i < 5; i++) {\n  console.log(i);   // 0 1 2 3 4\n}",
          related: ["for loop", "Syntax"]
        },
        {
          difficulty: "easy",
          question: "How many times does this run?\nfor (let i = 0; i < 5; i++) { }",
          options: { A: "5 times (i = 0,1,2,3,4)", B: "4 times", C: "6 times", D: "Infinite" },
          answer: "A",
          explanation: "Starting at 0 and stopping before 5 gives five iterations. Starting at 0 with < length is the standard array pattern.",
          related: ["for loop", "Off-by-one"]
        },
        {
          difficulty: "medium",
          question: "What does break do inside a loop?",
          options: {
            A: "Exits the loop immediately",
            B: "Skips one iteration",
            C: "Pauses the loop",
            D: "Restarts the loop"
          },
          answer: "A",
          explanation: "break stops the loop entirely and continues after it - useful once you have found what you were searching for.",
          code: "for (const n of nums) {\n  if (n > 100) break;   // stop searching\n  console.log(n);\n}",
          related: ["break", "continue"]
        },
        {
          difficulty: "medium",
          question: "What does continue do?",
          options: {
            A: "Skips the rest of the current iteration and moves to the next one",
            B: "Exits the loop",
            C: "Restarts from zero",
            D: "Nothing"
          },
          answer: "A",
          explanation: "continue jumps to the next iteration, skipping the remaining statements in the body for this pass only.",
          code: "for (let i = 0; i < 5; i++) {\n  if (i === 2) continue;\n  console.log(i);   // 0 1 3 4\n}",
          related: ["continue", "break"]
        },
        {
          difficulty: "easy",
          question: "What is the difference between while and do...while?",
          options: {
            A: "do...while checks the condition AFTER the body, so it always runs at least once",
            B: "They are identical",
            C: "while runs at least once",
            D: "do...while cannot use break"
          },
          answer: "A",
          explanation: "while may run zero times if the condition starts false; do...while guarantees one execution - handy for menus and input prompts.",
          code: "let i = 10;\nwhile (i < 5) { console.log(\"never\"); }\ndo { console.log(\"once\"); } while (i < 5);",
          related: ["while", "do-while"]
        },
        {
          difficulty: "medium",
          question: "What causes an INFINITE loop most often?",
          options: {
            A: "Forgetting to update the variable the condition depends on",
            B: "Using const",
            C: "Using break",
            D: "Nesting loops"
          },
          answer: "A",
          explanation: "If nothing changes the condition, it stays true forever and the browser tab freezes. Always ensure the loop makes progress toward termination.",
          code: "let i = 0;\nwhile (i < 5) {\n  console.log(i);\n  // forgot i++  -> infinite!\n}",
          related: ["while", "Debugging"]
        },
        {
          difficulty: "medium",
          question: "What does for...of iterate over?",
          options: {
            A: "The VALUES of an iterable (array, string, Map, Set)",
            B: "The keys/indexes",
            C: "Object properties",
            D: "Only numbers"
          },
          answer: "A",
          explanation: "for...of gives you each value directly - the cleanest way to loop an array when you do not need the index.",
          code: "for (const fruit of [\"apple\", \"mango\"]) {\n  console.log(fruit);   // apple, mango\n}",
          related: ["for...of", "Iterables"]
        },
        {
          difficulty: "medium",
          question: "What does for...in iterate over?",
          options: {
            A: "The KEYS (property names) of an object - or indexes of an array",
            B: "The values",
            C: "Only arrays",
            D: "Nothing"
          },
          answer: "A",
          explanation: "for...in walks enumerable property names. Use it for plain objects; for arrays prefer for...of or forEach, because for...in gives string indexes and can include inherited properties.",
          code: "const user = { name: \"Ana\", age: 21 };\nfor (const key in user) {\n  console.log(key, user[key]);\n}",
          related: ["for...in", "Objects"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nfor (const i in [\"a\", \"b\"]) console.log(typeof i);",
          options: {
            A: "\"string\" twice - for...in gives indexes as STRINGS",
            B: "\"number\" twice",
            C: "\"a\" \"b\"",
            D: "undefined"
          },
          answer: "A",
          explanation: "Object keys are always strings, so array indexes come out as \"0\" and \"1\". This breaks arithmetic (i + 1 becomes \"01\") - one reason to avoid for...in on arrays.",
          related: ["for...in", "Gotchas"]
        },
        {
          difficulty: "medium",
          question: "Which loop is best for iterating an array's values?",
          options: {
            A: "for...of (or forEach) - clear and index-free",
            B: "for...in",
            C: "do...while",
            D: "A while loop with a counter"
          },
          answer: "A",
          explanation: "for...of reads naturally and avoids index bugs. Use a classic for loop when you need the index or must skip/step, and forEach when you like the callback style.",
          related: ["for...of", "forEach"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nconst arr = [10, 20, 30];\narr.forEach((v, i) => console.log(i, v));",
          options: {
            A: "0 10 / 1 20 / 2 30 - the callback receives (value, index)",
            B: "10 0 / 20 1 / 30 2",
            C: "Only the values",
            D: "Error"
          },
          answer: "A",
          explanation: "forEach passes (value, index, array) to the callback. Note the VALUE comes first, which surprises people expecting index first.",
          related: ["forEach", "Callbacks"]
        },
        {
          difficulty: "hard",
          question: "Can you break out of a forEach loop?",
          options: {
            A: "No - break is not allowed; use for...of, some(), or every() instead",
            B: "Yes, with break",
            C: "Yes, with return",
            D: "Yes, with continue"
          },
          answer: "A",
          explanation: "forEach always visits every element; break is a syntax error inside it, and return only exits the current callback (acting like continue). For early exit use for...of with break, or some()/find().",
          code: "// early exit alternatives:\nfor (const x of arr) { if (x > 10) break; }\narr.some(x => x > 10);   // stops at first true",
          related: ["forEach", "some", "Early exit"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}",
          options: {
            A: "3 3 3 - var is function-scoped, so all callbacks share one i",
            B: "0 1 2",
            C: "0 0 0",
            D: "undefined x3"
          },
          answer: "A",
          explanation: "The timeouts run after the loop finishes, when i is 3. Changing var to let creates a fresh binding per iteration and prints 0 1 2 - the classic demonstration of why let exists.",
          code: "for (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);   // 0 1 2\n}",
          notes: ["The single most famous JavaScript interview question."],
          related: ["Closures", "let vs var", "Event loop"]
        },
        {
          difficulty: "medium",
          question: "Why does let fix the loop-closure problem?",
          options: {
            A: "let creates a NEW binding for each iteration, so every callback captures its own value",
            B: "let is faster",
            C: "let delays the callbacks",
            D: "It does not fix it"
          },
          answer: "A",
          explanation: "The specification re-binds a let loop variable per iteration, giving each closure its own copy. var has a single shared binding for the whole function.",
          related: ["let", "Closures"]
        },
        {
          difficulty: "medium",
          question: "How do you loop BACKWARDS through an array?",
          options: {
            A: "for (let i = arr.length - 1; i >= 0; i--)",
            B: "for (let i = arr.length; i > 0; i++)",
            C: "for (const x of arr.reverse())  // mutates!",
            D: "for (let i = 0; i < arr.length; i--)"
          },
          answer: "A",
          explanation: "Start at the last index (length - 1), continue while >= 0, and decrement. Option C works but reverse() MUTATES the original array - use [...arr].reverse() to avoid that.",
          related: ["Reverse iteration", "reverse()"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nlet sum = 0;\nfor (let i = 1; i <= 3; i++) sum += i;\nconsole.log(sum);",
          options: { A: "6", B: "3", C: "5", D: "0" },
          answer: "A",
          explanation: "1 + 2 + 3 = 6. The accumulator pattern (start at 0, add each value) is the most common loop use.",
          related: ["Accumulator", "reduce"]
        },
        {
          difficulty: "medium",
          question: "How many times does the inner body run?\nfor (let i = 0; i < 3; i++)\n  for (let j = 0; j < 4; j++) { }",
          options: { A: "12 - 3 x 4", B: "7", C: "3", D: "4" },
          answer: "A",
          explanation: "The inner loop runs fully for every outer iteration, so counts multiply. Nested loops are common for grids and tables - watch out for performance with large data.",
          related: ["Nested loops", "Complexity"]
        },
        {
          difficulty: "hard",
          question: "In nested loops, what does a plain break exit?",
          options: {
            A: "Only the INNERMOST loop containing it",
            B: "All loops",
            C: "The function",
            D: "Nothing"
          },
          answer: "A",
          explanation: "break leaves just its own loop. To exit both, use a labelled break, a flag variable, or extract the loops into a function and return.",
          code: "outer:\nfor (let i = 0; i < 3; i++) {\n  for (let j = 0; j < 3; j++) {\n    if (j === 1) break outer;   // exits BOTH\n  }\n}",
          related: ["Labels", "break"]
        },
        {
          difficulty: "medium",
          question: "What does this loop over?\nfor (const [key, value] of Object.entries(obj))",
          options: {
            A: "Each key/value pair of the object, destructured into two variables",
            B: "Only keys",
            C: "Only values",
            D: "Nothing - objects are not iterable"
          },
          answer: "A",
          explanation: "Object.entries returns [key, value] arrays; destructuring in the loop header unpacks them. The modern, readable way to iterate objects (alternatives: Object.keys / Object.values).",
          code: "const user = { name: \"Ana\", age: 21 };\nfor (const [k, v] of Object.entries(user)) {\n  console.log(`${k}: ${v}`);\n}",
          related: ["Object.entries", "Destructuring"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nfor (const ch of \"hi\") console.log(ch);",
          options: { A: "h then i - strings are iterable", B: "hi", C: "0 1", D: "Error" },
          answer: "A",
          explanation: "for...of works on any iterable, including strings (character by character), arrays, Maps, Sets and NodeLists.",
          related: ["Iterables", "Strings"]
        },
        {
          difficulty: "hard",
          question: "Why is caching the length sometimes suggested?\nfor (let i = 0, n = arr.length; i < n; i++)",
          options: {
            A: "It avoids re-reading .length each iteration - a micro-optimisation, rarely needed today",
            B: "It is required for correctness",
            C: "It prevents infinite loops",
            D: "It changes the iteration order"
          },
          answer: "A",
          explanation: "Modern engines optimise .length access, so this matters only in extreme hot loops. Readability usually wins - but it IS important if the loop modifies the array's length.",
          related: ["Performance", "Optimisation"]
        },
        {
          difficulty: "hard",
          question: "What is the danger of modifying an array WHILE looping over it by index?",
          options: {
            A: "Removing items shifts positions, so the loop can SKIP elements",
            B: "It throws an error",
            C: "The array becomes read-only",
            D: "Nothing happens"
          },
          answer: "A",
          explanation: "After splice(i, 1), every later element moves left while i still advances - skipping one. Loop backwards, or build a new array with filter().",
          code: "// safest:\narr = arr.filter(x => x >= 0);\n// or loop backwards when removing",
          related: ["splice", "filter", "Mutation"]
        },
        {
          difficulty: "medium",
          question: "What does for (;;) do?",
          options: {
            A: "Creates an infinite loop (all three parts omitted) - needs a break inside",
            B: "SyntaxError",
            C: "Runs once",
            D: "Runs zero times"
          },
          answer: "A",
          explanation: "All three clauses are optional; an absent condition is treated as true. Equivalent to while (true) - use break to exit.",
          related: ["Infinite loops", "while(true)"]
        },
        {
          difficulty: "medium",
          question: "Which loop should you choose when you do not know how many iterations are needed?",
          options: {
            A: "while - it is condition-driven rather than count-driven",
            B: "for - always",
            C: "for...of",
            D: "forEach"
          },
          answer: "A",
          explanation: "Use for/for...of when iterating a known collection or count; use while when looping until some state changes ('until the user quits', 'until the queue is empty').",
          related: ["while", "Choosing loops"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconst arr = [1, 2, 3];\nfor (let i = 0; i < arr.length; i++) {\n  if (i === 1) arr.push(99);\n}\nconsole.log(arr.length, i_ran_times = \"?\");",
          options: {
            A: "Length 4, and the loop runs 4 times - the condition re-reads the GROWN length each pass",
            B: "Length 4, but the loop still runs only 3 times",
            C: "Length 3 - push inside a loop is ignored",
            D: "Infinite loop"
          },
          answer: "A",
          explanation: "i < arr.length is re-evaluated every iteration. At i=1 the push makes length 4, so the loop continues to i=3 and runs four times instead of three. Pushing on every pass would loop forever - which is why mutating an array while looping over it is dangerous.",
          code: "// safe: iterate a copy\nfor (const x of [...arr]) { arr.push(x); }   // terminates",
          related: ["Mutation", "Tracing", "Infinite loops"]
        },
        {
          difficulty: "medium",
          question: "What is the modern way to repeat something N times without needing the index?",
          options: {
            A: "for (let i = 0; i < n; i++) - or Array.from({length: n}).forEach(...)",
            B: "repeat(n)",
            C: "times(n)",
            D: "loop n"
          },
          answer: "A",
          explanation: "JavaScript has no times() helper. A plain for loop is clearest; Array.from({length: n}, (_, i) => ...) is handy when you want to BUILD an array of n items.",
          code: "const squares = Array.from({length: 5}, (_, i) => i * i);\n// [0, 1, 4, 9, 16]",
          related: ["Array.from", "Repetition"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nlet i = 0;\nwhile (i < 3) {\n  i++;\n  if (i === 2) continue;\n  console.log(i);\n}",
          options: { A: "1 then 3", B: "1 2 3", C: "1 2", D: "2 3" },
          answer: "A",
          explanation: "i increments first, so values are 1, 2, 3. When i is 2, continue skips the log. Note the increment comes BEFORE continue here - if it came after, this would loop forever.",
          related: ["continue", "while", "Tracing"]
        },
        {
          difficulty: "medium",
          question: "What does the map() method do compared with a for loop?",
          options: {
            A: "Builds a NEW array by transforming every element - a loop that returns a result",
            B: "Loops without returning anything",
            C: "Filters elements",
            D: "Sorts the array"
          },
          answer: "A",
          explanation: "map is a declarative loop for transformation: [1,2,3].map(n => n * 2) gives [2,4,6]. It never mutates the original. (forEach is the version that returns nothing.)",
          related: ["map", "forEach", "Array methods"]
        },
        {
          difficulty: "medium",
          question: "How do you loop over a NodeList returned by querySelectorAll?",
          options: {
            A: "for...of or forEach - NodeLists are iterable and have forEach",
            B: "Only a classic for loop works",
            C: "You must convert with Array.from() first, always",
            D: "NodeLists cannot be looped"
          },
          answer: "A",
          explanation: "Modern NodeLists support both for...of and forEach. Convert with Array.from(list) or [...list] only when you need array methods like map or filter.",
          code: "document.querySelectorAll(\".item\").forEach(el => el.classList.add(\"on\"));",
          related: ["DOM", "NodeList"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log([1,2,3].reduce((a, b) => a + b, 0));",
          options: {
            A: "6 - reduce accumulates the array into a single value",
            B: "[1,2,3]",
            C: "123",
            D: "0"
          },
          answer: "A",
          explanation: "reduce runs a callback over each element carrying an accumulator: 0+1=1, 1+2=3, 3+3=6. It is the loop-with-a-running-total expressed as one call.",
          code: "const total = cart.reduce((sum, item) => sum + item.price, 0);",
          related: ["reduce", "Accumulator"]
        }
      ]
    }
  ]
});
