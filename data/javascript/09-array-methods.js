/* ============================================================
   JAVASCRIPT - TOPIC 9: ARRAY METHODS (map/filter/reduce...) (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "JavaScript",
  icon: "🟨",
  color: "#b8860b",
  description: "The language of the web - basics to advanced, 20 topics.",
  topics: [
    {
      name: "9. Array Methods",
      questions: [
        {
          difficulty: "easy",
          question: "What does map() return?",
          options: {
            A: "A NEW array with the callback applied to every element",
            B: "The same array, modified",
            C: "A single value",
            D: "undefined"
          },
          answer: "A",
          explanation: "map transforms each element into a new one, always producing an array of the SAME length. The original is untouched.",
          code: "const nums = [1, 2, 3];\nconsole.log(nums.map(n => n * 2));   // [2, 4, 6]\nconsole.log(nums);                    // [1, 2, 3] - unchanged",
          related: ["map", "Immutability"]
        },
        {
          difficulty: "easy",
          question: "What does filter() return?",
          options: {
            A: "A new array with ONLY the elements whose callback returned truthy",
            B: "The first matching element",
            C: "true or false",
            D: "The removed elements"
          },
          answer: "A",
          explanation: "filter keeps elements that pass the test, so the result can be shorter (or empty). It never modifies the original.",
          code: "const nums = [1, 2, 3, 4];\nconsole.log(nums.filter(n => n % 2 === 0));   // [2, 4]",
          related: ["filter", "Predicates"]
        },
        {
          difficulty: "medium",
          question: "What is the key difference between map() and forEach()?",
          options: {
            A: "map RETURNS a new array; forEach returns undefined and is used for side effects",
            B: "They are identical",
            C: "forEach is faster and returns an array",
            D: "map cannot use arrow functions"
          },
          answer: "A",
          explanation: "Use map when you want a transformed array back; use forEach when you just want to DO something per element (logging, DOM updates). Using map without using its result is a code smell.",
          code: "const doubled = nums.map(n => n * 2);   // use the result\nnums.forEach(n => console.log(n));       // side effect only",
          related: ["map", "forEach"]
        },
        {
          difficulty: "medium",
          question: "What does reduce() do?",
          options: {
            A: "Boils an array down to a SINGLE value using an accumulator",
            B: "Removes elements",
            C: "Shrinks the array length",
            D: "Sorts the array"
          },
          answer: "A",
          explanation: "reduce((acc, item) => ..., initialValue) carries a running result across the array - sums, counts, groupings, even building objects.",
          code: "const total = [1, 2, 3].reduce((sum, n) => sum + n, 0);\nconsole.log(total);   // 6",
          related: ["reduce", "Accumulator"]
        },
        {
          difficulty: "hard",
          question: "Why should you pass an initial value to reduce()?\narr.reduce(fn, 0)",
          options: {
            A: "Without it, reduce throws a TypeError on an EMPTY array and starts with element 0 otherwise",
            B: "It is purely decorative",
            C: "It makes reduce faster",
            D: "It reverses the array"
          },
          answer: "A",
          explanation: "With no initial value, the first element becomes the accumulator and an empty array raises 'Reduce of empty array with no initial value'. Passing 0 (or {} or []) also makes the intended type explicit.",
          code: "[].reduce((a, b) => a + b);        // TypeError!\n[].reduce((a, b) => a + b, 0);     // 0 - safe",
          related: ["reduce", "Edge cases"]
        },
        {
          difficulty: "medium",
          question: "What does find() return?",
          options: {
            A: "The FIRST element matching the test, or undefined",
            B: "All matching elements",
            C: "The index of the match",
            D: "true or false"
          },
          answer: "A",
          explanation: "find returns the element itself and stops at the first match. findIndex returns its position instead (or -1).",
          code: "const users = [{id:1},{id:2}];\nconsole.log(users.find(u => u.id === 2));       // {id: 2}\nconsole.log(users.findIndex(u => u.id === 2));  // 1",
          related: ["find", "findIndex"]
        },
        {
          difficulty: "medium",
          question: "What is the difference between find() and filter()?",
          options: {
            A: "find returns ONE element (or undefined); filter returns an ARRAY of all matches",
            B: "They are the same",
            C: "find returns an array",
            D: "filter stops at the first match"
          },
          answer: "A",
          explanation: "Use find when you expect a single result (it also stops early, so it is faster). filter always scans the whole array.",
          related: ["find", "filter"]
        },
        {
          difficulty: "medium",
          question: "What do some() and every() return?",
          options: {
            A: "Booleans - some: does AT LEAST ONE pass? every: do ALL pass?",
            B: "Arrays of matches",
            C: "The matching elements",
            D: "Counts"
          },
          answer: "A",
          explanation: "Both short-circuit: some stops at the first true, every stops at the first false. Note every() on an EMPTY array is true (vacuous truth).",
          code: "const n = [2, 4, 6];\nconsole.log(n.some(x => x > 5));    // true\nconsole.log(n.every(x => x % 2 === 0)); // true\nconsole.log([].every(x => false));   // true!",
          related: ["some", "every"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nconsole.log([1, 2, 3].map(n => n * 2).filter(n => n > 2));",
          options: {
            A: "[4, 6] - map first gives [2,4,6], then filter keeps > 2",
            B: "[2, 4, 6]",
            C: "[4]",
            D: "[2, 3]"
          },
          answer: "A",
          explanation: "Array methods return arrays, so they CHAIN left to right. Each step creates a new array - readable, though it iterates more than once.",
          related: ["Chaining", "map", "filter"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log([1, 2, 3].map(n => { n * 2; }));",
          options: {
            A: "[undefined, undefined, undefined] - the arrow body has braces but no return",
            B: "[2, 4, 6]",
            C: "[1, 2, 3]",
            D: "SyntaxError"
          },
          answer: "A",
          explanation: "With curly braces you must write return explicitly. Concise bodies without braces return automatically: n => n * 2. A very common beginner bug.",
          code: "n => n * 2         // implicit return\nn => { return n * 2; }   // explicit return\nn => { n * 2; }    // returns undefined!",
          related: ["Arrow functions", "Implicit return"]
        },
        {
          difficulty: "hard",
          question: "How do you return an OBJECT from a concise arrow function?",
          options: {
            A: "Wrap it in parentheses: n => ({ value: n })",
            B: "n => { value: n }",
            C: "n => return { value: n }",
            D: "It is impossible"
          },
          answer: "A",
          explanation: "Without parentheses the braces are parsed as a function BODY, not an object literal (giving undefined). Parentheses tell JavaScript it is an expression.",
          code: "const wrap = n => ({ value: n });\nconsole.log([1,2].map(wrap));   // [{value:1},{value:2}]",
          related: ["Arrow functions", "Object literals"]
        },
        {
          difficulty: "medium",
          question: "What arguments does the map callback receive?",
          options: {
            A: "(element, index, wholeArray)",
            B: "(index, element)",
            C: "Only the element",
            D: "(array, index)"
          },
          answer: "A",
          explanation: "All iteration methods pass (value, index, array). You may ignore the extras - most callbacks only use the value.",
          code: "[\"a\",\"b\"].map((val, i) => `${i}: ${val}`);\n// [\"0: a\", \"1: b\"]",
          related: ["Callbacks", "Parameters"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log([\"1\", \"2\", \"3\"].map(parseInt));",
          options: {
            A: "[1, NaN, NaN] - map passes the index as parseInt's radix argument",
            B: "[1, 2, 3]",
            C: "[\"1\", \"2\", \"3\"]",
            D: "[NaN, NaN, NaN]"
          },
          answer: "A",
          explanation: "map calls parseInt(value, index): parseInt(\"1\",0)=1, parseInt(\"2\",1)=NaN (radix 1 is invalid), parseInt(\"3\",2)=NaN (3 is not a binary digit). Fix by wrapping: map(s => parseInt(s, 10)) or map(Number).",
          notes: ["A famous interview question about accidental extra arguments."],
          related: ["parseInt", "Callbacks", "Gotchas"]
        },
        {
          difficulty: "medium",
          question: "How do you sum an array of objects' prices?",
          options: {
            A: "items.reduce((sum, item) => sum + item.price, 0)",
            B: "items.sum(\"price\")",
            C: "items.map(i => i.price).total()",
            D: "items.add(price)"
          },
          answer: "A",
          explanation: "reduce with an accumulator starting at 0 is the standard total. Alternatively items.map(i => i.price).reduce((a,b) => a+b, 0).",
          code: "const cart = [{price: 100}, {price: 250}];\nconst total = cart.reduce((s, i) => s + i.price, 0);   // 350",
          related: ["reduce", "Real-world"]
        },
        {
          difficulty: "hard",
          question: "What does this reduce build?\narr.reduce((acc, x) => { acc[x] = (acc[x] || 0) + 1; return acc; }, {})",
          options: {
            A: "A frequency count object: { value: howManyTimes }",
            B: "A sum",
            C: "A sorted array",
            D: "A filtered array"
          },
          answer: "A",
          explanation: "Starting with an empty object, each element increments its own counter. Counting occurrences is one of reduce's most useful patterns.",
          code: "const votes = [\"a\", \"b\", \"a\"];\nconsole.log(votes.reduce((acc, v) => {\n  acc[v] = (acc[v] || 0) + 1; return acc;\n}, {}));   // { a: 2, b: 1 }",
          related: ["reduce", "Counting", "Grouping"]
        },
        {
          difficulty: "medium",
          question: "What does flatMap() do?",
          options: {
            A: "Maps each element then flattens the result one level",
            B: "Flattens only",
            C: "Maps twice",
            D: "Sorts and maps"
          },
          answer: "A",
          explanation: "flatMap is map + flat(1) in one pass - ideal when each input produces zero, one or many outputs.",
          code: "console.log([\"a b\", \"c\"].flatMap(s => s.split(\" \")));\n// [\"a\", \"b\", \"c\"]",
          related: ["flatMap", "flat"]
        },
        {
          difficulty: "medium",
          question: "How do you sort numbers ascending?",
          options: {
            A: "arr.sort((a, b) => a - b)",
            B: "arr.sort()",
            C: "arr.sort(\"asc\")",
            D: "arr.sortNumbers()"
          },
          answer: "A",
          explanation: "A comparator returning a negative number means 'a first', positive means 'b first', 0 means equal. a - b gives ascending; b - a gives descending.",
          code: "[10, 9, 100].sort((a, b) => a - b);   // [9, 10, 100]\n[10, 9, 100].sort((a, b) => b - a);   // [100, 10, 9]",
          related: ["sort", "Comparator"]
        },
        {
          difficulty: "medium",
          question: "How do you sort an array of objects by a property?",
          options: {
            A: "arr.sort((a, b) => a.age - b.age) for numbers, or localeCompare for strings",
            B: "arr.sort(\"age\")",
            C: "arr.sortBy(age)",
            D: "arr.order(age)"
          },
          answer: "A",
          explanation: "Subtract for numeric fields; use a.name.localeCompare(b.name) for text so that accents and locale rules are handled correctly.",
          code: "users.sort((a, b) => a.age - b.age);\nusers.sort((a, b) => a.name.localeCompare(b.name));",
          related: ["sort", "localeCompare"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconst a = [3, 1, 2];\nconst b = a.sort();\nb.push(9);\nconsole.log(a);",
          options: {
            A: "[1, 2, 3, 9] - sort mutates AND returns the SAME array, so a and b are one array",
            B: "[3, 1, 2]",
            C: "[1, 2, 3]",
            D: "[9]"
          },
          answer: "A",
          explanation: "sort() sorts in place and returns a reference to the same array - it does not copy. Use [...a].sort() or a.toSorted() when you need to keep the original.",
          related: ["sort", "Mutation", "References"]
        },
        {
          difficulty: "medium",
          question: "Which methods do NOT mutate the original array?",
          options: {
            A: "map, filter, slice, concat, reduce, join",
            B: "push, pop, splice, sort",
            C: "All array methods mutate",
            D: "No array methods mutate"
          },
          answer: "A",
          explanation: "The functional methods return new values. The mutators are push, pop, shift, unshift, splice, sort, reverse and fill. Knowing which is which prevents surprise bugs.",
          related: ["Immutability", "Mutation"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nconsole.log([1, 2, 3].includes(2), [1, 2, 3].indexOf(2));",
          options: {
            A: "true 1",
            B: "1 true",
            C: "true true",
            D: "2 2"
          },
          answer: "A",
          explanation: "includes gives a boolean; indexOf gives the position. includes also finds NaN correctly, which indexOf cannot.",
          code: "console.log([NaN].includes(NaN));   // true\nconsole.log([NaN].indexOf(NaN));    // -1",
          related: ["includes", "indexOf", "NaN"]
        },
        {
          difficulty: "hard",
          question: "How do you get unique values, sorted, from [3,1,3,2]?",
          options: {
            A: "[...new Set([3,1,3,2])].sort((a,b) => a-b)",
            B: "[3,1,3,2].unique().sort()",
            C: "[3,1,3,2].filter(unique)",
            D: "Set([3,1,3,2]).sort()"
          },
          answer: "A",
          explanation: "Set removes duplicates, spread converts back to an array, then sort with a numeric comparator gives [1, 2, 3]. Note a Set itself has no sort method.",
          related: ["Set", "sort", "Chaining"]
        },
        {
          difficulty: "medium",
          question: "What does Array.from() do?",
          options: {
            A: "Creates an array from an iterable or array-like object, optionally mapping each item",
            B: "Copies only arrays",
            C: "Sorts an array",
            D: "Converts an array to a string"
          },
          answer: "A",
          explanation: "Array.from turns strings, Sets, Maps, NodeLists and {length: n} objects into real arrays, with an optional map function as the second argument.",
          code: "Array.from(\"abc\");                      // [\"a\",\"b\",\"c\"]\nArray.from({length: 3}, (_, i) => i);    // [0, 1, 2]\nArray.from(document.querySelectorAll(\"p\"));",
          related: ["Array.from", "Array-like"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log([1,2,3].reduce((a, b) => a + b));",
          options: {
            A: "6 - without an initial value, the first element becomes the accumulator",
            B: "TypeError",
            C: "[1,2,3]",
            D: "0"
          },
          answer: "A",
          explanation: "Omitting the initial value starts with acc=1, b=2 (giving 3), then acc=3, b=3 (giving 6). It works for non-empty arrays, but always passing an initial value is safer.",
          related: ["reduce", "Initial value"]
        },
        {
          difficulty: "hard",
          question: "What does this do?\narr.filter(Boolean)",
          options: {
            A: "Removes all falsy values (0, \"\", null, undefined, NaN, false)",
            B: "Converts everything to booleans",
            C: "Keeps only booleans",
            D: "Throws an error"
          },
          answer: "A",
          explanation: "Boolean is passed as the callback: each element is converted, and only truthy ones survive. A clean idiom for cleaning data.",
          code: "console.log([0, \"a\", null, \"b\", \"\"].filter(Boolean));\n// [\"a\", \"b\"]",
          related: ["filter", "Truthiness"]
        },
        {
          difficulty: "medium",
          question: "How do you find the maximum value in an array?",
          options: {
            A: "Math.max(...arr)",
            B: "arr.max()",
            C: "Math.max(arr)",
            D: "arr.sort()[0]"
          },
          answer: "A",
          explanation: "Math.max takes separate arguments, so spread the array. Math.max(arr) would give NaN. For very large arrays use reduce to avoid argument limits.",
          code: "console.log(Math.max(...[3, 7, 2]));   // 7\nconsole.log([3,7,2].reduce((m, x) => x > m ? x : m));   // 7",
          related: ["Math.max", "Spread"]
        },
        {
          difficulty: "hard",
          question: "What is the performance concern with chaining many array methods?\narr.map(...).filter(...).map(...)",
          options: {
            A: "Each step creates a new array and iterates again - fine for small data, wasteful for very large arrays",
            B: "It always crashes",
            C: "Chaining is impossible",
            D: "It mutates the original"
          },
          answer: "A",
          explanation: "Three chained calls mean three passes and three temporary arrays. For typical UI data this is irrelevant and readability wins; for huge datasets a single reduce or for...of loop is more efficient.",
          related: ["Performance", "Chaining"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nconst users = [{name:\"Ana\", age:30}, {name:\"Ben\", age:20}];\nconsole.log(users.map(u => u.name).join(\", \"));",
          options: { A: "\"Ana, Ben\"", B: "[\"Ana\",\"Ben\"]", C: "\"AnaBen\"", D: "Error" },
          answer: "A",
          explanation: "map extracts the names into an array, then join turns them into a readable string. Extract-then-join is an everyday pattern for displaying lists.",
          related: ["map", "join", "Real-world"]
        },
        {
          difficulty: "hard",
          question: "How would you group items by a property using reduce?",
          options: {
            A: "reduce((acc, item) => { (acc[item.type] ||= []).push(item); return acc; }, {})",
            B: "arr.groupBy(\"type\")",
            C: "arr.filter(\"type\")",
            D: "arr.sort(\"type\")"
          },
          answer: "A",
          explanation: "Create the array for a key if missing, then push. (Object.groupBy exists in very new environments, but the reduce pattern works everywhere.)",
          code: "const byType = items.reduce((acc, item) => {\n  (acc[item.type] ||= []).push(item);\n  return acc;\n}, {});",
          related: ["reduce", "Grouping"]
        },
        {
          difficulty: "medium",
          question: "Which method would you use to check if EVERY form field is filled?",
          options: {
            A: "fields.every(f => f.value.trim() !== \"\")",
            B: "fields.some(...)",
            C: "fields.filter(...)",
            D: "fields.map(...)"
          },
          answer: "A",
          explanation: "every returns true only when all elements pass - exactly 'is the whole form valid?'. some would answer 'is at least one filled?'.",
          related: ["every", "Validation"]
        }
      ]
    }
  ]
});
