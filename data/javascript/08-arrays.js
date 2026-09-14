/* ============================================================
   JAVASCRIPT - TOPIC 8: ARRAYS (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "JavaScript",
  icon: "🟨",
  color: "#b8860b",
  description: "The language of the web - basics to advanced, 20 topics.",
  topics: [
    {
      name: "8. Arrays",
      questions: [
        {
          difficulty: "easy",
          question: "Which line creates an array of three numbers?",
          options: {
            A: "const nums = [1, 2, 3];",
            B: "const nums = {1, 2, 3};",
            C: "const nums = (1, 2, 3);",
            D: "const nums = array(1, 2, 3);"
          },
          answer: "A",
          explanation: "Square brackets create an array literal. Curly braces make an object, and parentheses are just grouping.",
          related: ["Arrays", "Literals"]
        },
        {
          difficulty: "easy",
          question: "What is the output?\nconst a = [\"x\", \"y\", \"z\"];\nconsole.log(a[1]);",
          options: { A: "\"y\"", B: "\"x\"", C: "\"z\"", D: "1" },
          answer: "A",
          explanation: "Array indexes start at 0, so a[0] is \"x\" and a[1] is \"y\".",
          related: ["Indexing"]
        },
        {
          difficulty: "easy",
          question: "What does arr.length give?",
          options: {
            A: "The number of elements",
            B: "The last index",
            C: "The array as a string",
            D: "The memory size"
          },
          answer: "A",
          explanation: "length counts elements, so the LAST index is always length - 1. Reading arr[arr.length] gives undefined.",
          code: "const a = [10, 20, 30];\nconsole.log(a.length);        // 3\nconsole.log(a[a.length - 1]);  // 30 - last item",
          related: ["length", "Indexing"]
        },
        {
          difficulty: "medium",
          question: "What does arr.at(-1) return?",
          options: {
            A: "The LAST element - at() supports negative indexes",
            B: "The first element",
            C: "undefined",
            D: "An error"
          },
          answer: "A",
          explanation: "at() (ES2022) accepts negative indexes counting from the end, unlike bracket notation where arr[-1] is undefined.",
          code: "const a = [1, 2, 3];\nconsole.log(a.at(-1));   // 3\nconsole.log(a[-1]);      // undefined",
          related: ["at()", "Negative index"]
        },
        {
          difficulty: "easy",
          question: "Which method adds an element to the END of an array?",
          options: { A: "push()", B: "append()", C: "add()", D: "unshift()" },
          answer: "A",
          explanation: "push() appends and returns the new length. unshift() adds to the START, pop() removes from the end, shift() removes from the start.",
          code: "const a = [1, 2];\na.push(3);      // [1, 2, 3]\na.unshift(0);   // [0, 1, 2, 3]",
          related: ["push", "unshift"]
        },
        {
          difficulty: "medium",
          question: "What does pop() return and do?",
          options: {
            A: "Removes the LAST element and returns it",
            B: "Removes the first element",
            C: "Returns the last element without removing",
            D: "Empties the array"
          },
          answer: "A",
          explanation: "pop() shortens the array by one and hands back the removed value. shift() does the same at the start (but is slower, since all indexes shift).",
          code: "const a = [1, 2, 3];\nconst last = a.pop();\nconsole.log(last, a);   // 3 [1, 2]",
          related: ["pop", "shift"]
        },
        {
          difficulty: "hard",
          question: "What is the difference between slice() and splice()?",
          options: {
            A: "slice() returns a COPY and leaves the original alone; splice() MUTATES the array (removing/inserting)",
            B: "They are identical",
            C: "splice() returns a copy",
            D: "slice() deletes elements"
          },
          answer: "A",
          explanation: "slice(start, end) extracts a section without side effects. splice(start, deleteCount, ...items) changes the array in place and returns the removed elements.",
          code: "const a = [1, 2, 3, 4];\nconsole.log(a.slice(1, 3));   // [2, 3] - a unchanged\na.splice(1, 2);                // a is now [1, 4]",
          notes: ["Remember: sPlice mutates (P for 'permanent')."],
          related: ["slice", "splice", "Mutation"]
        },
        {
          difficulty: "medium",
          question: "How do you REMOVE 2 elements starting at index 1?",
          options: {
            A: "arr.splice(1, 2)",
            B: "arr.slice(1, 2)",
            C: "arr.remove(1, 2)",
            D: "delete arr[1]"
          },
          answer: "A",
          explanation: "splice(startIndex, howMany) removes in place. delete arr[1] leaves an empty hole and does NOT change length - almost never what you want.",
          code: "const a = [1, 2, 3, 4];\na.splice(1, 2);\nconsole.log(a);   // [1, 4]",
          related: ["splice", "delete"]
        },
        {
          difficulty: "medium",
          question: "How do you INSERT \"x\" at index 1 without deleting anything?",
          options: {
            A: "arr.splice(1, 0, \"x\") - delete count of 0",
            B: "arr.insert(1, \"x\")",
            C: "arr.push(1, \"x\")",
            D: "arr[1] = \"x\"  // this overwrites"
          },
          answer: "A",
          explanation: "Passing 0 as the delete count makes splice a pure insertion. Option D would REPLACE the existing element instead.",
          code: "const a = [1, 3];\na.splice(1, 0, 2);\nconsole.log(a);   // [1, 2, 3]",
          related: ["splice", "Insertion"]
        },
        {
          difficulty: "easy",
          question: "How do you check whether an array contains a value?",
          options: {
            A: "arr.includes(value)",
            B: "arr.contains(value)",
            C: "value in arr",
            D: "arr.has(value)"
          },
          answer: "A",
          explanation: "includes() returns true/false. Note 'in' checks INDEXES for arrays, not values - a common mistake. indexOf(value) !== -1 is the older approach.",
          code: "const a = [10, 20];\nconsole.log(a.includes(20));   // true\nconsole.log(20 in a);          // false! (checks index 20)",
          related: ["includes", "indexOf"]
        },
        {
          difficulty: "medium",
          question: "What does arr.indexOf(\"z\") return when \"z\" is absent?",
          options: { A: "-1", B: "undefined", C: "null", D: "0" },
          answer: "A",
          explanation: "indexOf returns the first matching index, or -1 for 'not found'. It uses strict equality, so indexOf(\"5\") will not find the number 5.",
          related: ["indexOf", "Search"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log([1, 2] === [1, 2]);",
          options: {
            A: "false - each literal creates a NEW object, and objects compare by reference",
            B: "true",
            C: "undefined",
            D: "Error"
          },
          answer: "A",
          explanation: "Arrays are objects; === asks 'is it the same object in memory?'. Two separate arrays are never ===. Compare contents with JSON.stringify(a) === JSON.stringify(b) or an every() check.",
          code: "const a = [1, 2];\nconst b = a;\nconsole.log(a === b);   // true - same object",
          related: ["Reference equality", "Comparison"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconst a = [1, 2];\nconst b = a;\nb.push(3);\nconsole.log(a);",
          options: {
            A: "[1, 2, 3] - b is another name for the same array",
            B: "[1, 2]",
            C: "[3]",
            D: "Error"
          },
          answer: "A",
          explanation: "Assignment copies the REFERENCE, not the array. To copy: [...a], a.slice() or Array.from(a).",
          code: "const b = [...a];   // independent copy\nb.push(3);\nconsole.log(a);      // [1, 2] - unaffected",
          related: ["References", "Copying"]
        },
        {
          difficulty: "medium",
          question: "How do you make a (shallow) copy of an array?",
          options: {
            A: "[...arr], arr.slice(), or Array.from(arr)",
            B: "arr.copy()",
            C: "const b = arr;",
            D: "arr.clone()"
          },
          answer: "A",
          explanation: "All three create a new array with the same elements. Note it is SHALLOW: nested objects are still shared. Use structuredClone(arr) for a deep copy.",
          related: ["Spread", "slice", "Copying"]
        },
        {
          difficulty: "medium",
          question: "How do you merge two arrays into a new one?",
          options: {
            A: "[...a, ...b] or a.concat(b)",
            B: "a + b",
            C: "a.merge(b)",
            D: "a.push(b)"
          },
          answer: "A",
          explanation: "Spread and concat both return a NEW array. a + b would coerce both to strings; a.push(b) would nest b as a single element.",
          code: "const a = [1, 2], b = [3];\nconsole.log([...a, ...b]);   // [1, 2, 3]\nconsole.log(a.concat(b));     // [1, 2, 3]\na.push(b);                     // [1, 2, [3]] - nested!",
          related: ["concat", "Spread"]
        },
        {
          difficulty: "medium",
          question: "What does arr.join(\"-\") do?",
          options: {
            A: "Returns a STRING with all elements separated by \"-\"",
            B: "Joins two arrays",
            C: "Removes duplicates",
            D: "Sorts the array"
          },
          answer: "A",
          explanation: "join converts an array to a string using the given separator (default is a comma). The reverse is string.split(separator).",
          code: "console.log([\"a\",\"b\",\"c\"].join(\"-\"));   // \"a-b-c\"\nconsole.log([1,2,3].join(\"\"));           // \"123\"",
          related: ["join", "split"]
        },
        {
          difficulty: "hard",
          question: "Why does [10, 9, 100].sort() give [10, 100, 9]?",
          options: {
            A: "The default sort converts elements to STRINGS and compares alphabetically",
            B: "sort() is random",
            C: "It sorts descending",
            D: "It is a browser bug"
          },
          answer: "A",
          explanation: "\"10\" < \"100\" < \"9\" alphabetically. For numbers pass a comparator: sort((a, b) => a - b) for ascending, (a, b) => b - a for descending.",
          code: "console.log([10,9,100].sort((a,b) => a-b));   // [9, 10, 100]",
          notes: ["One of the most common real-world JavaScript bugs."],
          related: ["sort", "Comparator"]
        },
        {
          difficulty: "hard",
          question: "Does sort() mutate the original array?",
          options: {
            A: "Yes - sort() and reverse() change the array in place (use toSorted() to avoid this)",
            B: "No, it returns a copy",
            C: "Only for numbers",
            D: "Only in strict mode"
          },
          answer: "A",
          explanation: "sort(), reverse(), splice(), push(), pop(), shift(), unshift() and fill() all MUTATE. ES2023 added non-mutating twins: toSorted(), toReversed(), toSpliced(), with().",
          code: "const a = [3, 1, 2];\nconst sorted = [...a].sort();   // keep a intact\n// or: a.toSorted()",
          related: ["Mutation", "toSorted"]
        },
        {
          difficulty: "medium",
          question: "How do you remove duplicates from an array?",
          options: {
            A: "[...new Set(arr)]",
            B: "arr.unique()",
            C: "arr.distinct()",
            D: "arr.dedupe()"
          },
          answer: "A",
          explanation: "A Set stores only unique values; spreading it back gives an array. Order is preserved.",
          code: "const a = [1, 2, 2, 3];\nconsole.log([...new Set(a)]);   // [1, 2, 3]",
          related: ["Set", "Deduplication"]
        },
        {
          difficulty: "medium",
          question: "How do you check whether a value is an array?",
          options: {
            A: "Array.isArray(value)",
            B: "typeof value === \"array\"",
            C: "value instanceof Object",
            D: "value.isArray()"
          },
          answer: "A",
          explanation: "typeof gives \"object\" for arrays, so it cannot distinguish them. Array.isArray() is the reliable test.",
          code: "console.log(typeof []);            // \"object\"\nconsole.log(Array.isArray([]));    // true",
          related: ["Array.isArray", "typeof"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconst a = [1, 2, 3];\na.length = 1;\nconsole.log(a);",
          options: {
            A: "[1] - assigning to length TRUNCATES the array",
            B: "[1, 2, 3]",
            C: "Error",
            D: "[1, undefined, undefined]"
          },
          answer: "A",
          explanation: "length is writable: shrinking it deletes trailing elements; growing it creates empty slots. arr.length = 0 is a quick way to empty an array in place.",
          related: ["length", "Truncation"]
        },
        {
          difficulty: "hard",
          question: "What is a 'sparse array'?\nconst a = [1, , 3];",
          options: {
            A: "An array with HOLES - missing slots that many methods skip",
            B: "A very large array",
            C: "An array of nulls",
            D: "A syntax error"
          },
          answer: "A",
          explanation: "Holes are not the same as undefined values: forEach and map skip them, while for...of visits them as undefined. Sparse arrays arise from delete arr[i] or setting a large length - best avoided.",
          related: ["Sparse arrays", "Holes"]
        },
        {
          difficulty: "medium",
          question: "How do you create an array of 5 zeros?",
          options: {
            A: "new Array(5).fill(0)",
            B: "new Array(0, 5)",
            C: "Array(5)",
            D: "[0 * 5]"
          },
          answer: "A",
          explanation: "Array(5) makes a sparse array of 5 holes; fill(0) turns them into real zeros. Array.from({length: 5}, () => 0) also works.",
          code: "console.log(new Array(3).fill(0));                  // [0, 0, 0]\nconsole.log(Array.from({length: 3}, (_, i) => i));  // [0, 1, 2]",
          related: ["fill", "Array.from"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconst grid = new Array(2).fill([]);\ngrid[0].push(\"x\");\nconsole.log(grid[1]);",
          options: {
            A: "[\"x\"] - fill puts the SAME array reference in every slot",
            B: "[]",
            C: "undefined",
            D: "Error"
          },
          answer: "A",
          explanation: "fill([]) evaluates the literal once and shares that one array across all slots. Build independent rows with Array.from({length: 2}, () => []).",
          code: "const grid = Array.from({length: 2}, () => []);\ngrid[0].push(\"x\");\nconsole.log(grid[1]);   // [] - independent",
          related: ["fill", "References", "2D arrays"]
        },
        {
          difficulty: "medium",
          question: "How do you access an element in a 2D array (array of arrays)?",
          options: {
            A: "matrix[row][col]",
            B: "matrix[row, col]",
            C: "matrix(row)(col)",
            D: "matrix.get(row, col)"
          },
          answer: "A",
          explanation: "Chain the brackets: the first picks the inner array, the second picks an element from it.",
          code: "const m = [[1, 2], [3, 4]];\nconsole.log(m[1][0]);   // 3",
          related: ["2D arrays", "Nested"]
        },
        {
          difficulty: "medium",
          question: "What does arr.flat() do?",
          options: {
            A: "Flattens nested arrays one level deep (flat(Infinity) flattens completely)",
            B: "Sorts the array",
            C: "Removes duplicates",
            D: "Converts to a string"
          },
          answer: "A",
          explanation: "flat() unwraps nested arrays. flatMap() maps then flattens one level - handy for producing multiple items per input.",
          code: "console.log([1, [2, 3], [4]].flat());          // [1, 2, 3, 4]\nconsole.log([1, [2, [3]]].flat(Infinity));      // [1, 2, 3]",
          related: ["flat", "flatMap"]
        },
        {
          difficulty: "medium",
          question: "How do you convert a string to an array of characters?",
          options: {
            A: "[...str] or str.split(\"\")",
            B: "str.toArray()",
            C: "Array(str)",
            D: "str.chars()"
          },
          answer: "A",
          explanation: "Both work; spread handles emoji/surrogate pairs better than split(\"\"). Array.from(str) is equivalent to spread.",
          code: "console.log([...\"abc\"]);          // [\"a\",\"b\",\"c\"]\nconsole.log(\"abc\".split(\"\"));    // [\"a\",\"b\",\"c\"]",
          related: ["Spread", "split"]
        },
        {
          difficulty: "medium",
          question: "What does destructuring do here?\nconst [first, second] = [10, 20, 30];",
          options: {
            A: "Assigns first = 10 and second = 20, ignoring the rest",
            B: "Creates one array",
            C: "SyntaxError",
            D: "first becomes the whole array"
          },
          answer: "A",
          explanation: "Array destructuring unpacks by POSITION. Use rest to capture the remainder, and commas to skip elements.",
          code: "const [a, , c] = [1, 2, 3];       // a=1, c=3 (skipped 2)\nconst [head, ...tail] = [1, 2, 3];  // head=1, tail=[2,3]",
          related: ["Destructuring", "Rest"]
        },
        {
          difficulty: "medium",
          question: "How do you swap two variables using destructuring?",
          options: {
            A: "[a, b] = [b, a];",
            B: "a, b = b, a;",
            C: "swap(a, b);",
            D: "a = b; b = a;"
          },
          answer: "A",
          explanation: "The right side builds an array with the current values, then destructuring assigns them back swapped - no temporary variable needed.",
          code: "let a = 1, b = 2;\n[a, b] = [b, a];\nconsole.log(a, b);   // 2 1",
          related: ["Destructuring", "Swapping"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log([1, 2, 3] + [4, 5]);",
          options: {
            A: "\"1,2,34,5\" - both arrays become strings and concatenate",
            B: "[1,2,3,4,5]",
            C: "[5, 7, 3]",
            D: "Error"
          },
          answer: "A",
          explanation: "+ has no array meaning, so each array is converted via join(\",\") - giving \"1,2,3\" + \"4,5\". To merge properly use concat or spread.",
          related: ["Coercion", "concat"]
        }
      ]
    }
  ]
});
