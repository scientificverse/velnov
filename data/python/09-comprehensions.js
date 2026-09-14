/* ============================================================
   PYTHON - TOPIC 9: COMPREHENSIONS (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "Python",
  icon: "🐍",
  color: "#3776ab",
  description: "Master Python from basics to advanced - 20 topics.",
  topics: [
    {
      name: "9. Comprehensions",
      questions: [
        {
          difficulty: "easy",
          question: "What is the output of: print([x * 2 for x in range(3)])",
          options: { A: "[0, 2, 4]", B: "[2, 4, 6]", C: "[0, 1, 2]", D: "[0, 2, 4, 6]" },
          answer: "A",
          explanation: "A list comprehension applies the expression (x * 2) to every value of x in range(3) = 0, 1, 2 -> [0, 2, 4].",
          code: "print([x * 2 for x in range(3)])   # [0, 2, 4]",
          related: ["List comprehensions", "range()"]
        },
        {
          difficulty: "easy",
          question: "Which ordinary loop is equivalent to: squares = [x**2 for x in nums]",
          options: {
            A: "squares = []\\nfor x in nums:\\n    squares.append(x**2)",
            B: "for x in nums: squares = x**2",
            C: "squares = for x in nums: x**2",
            D: "while nums: squares.append(x**2)"
          },
          answer: "A",
          explanation: "A comprehension is exactly a build-a-list loop compressed to one line: create empty list, loop, append the expression. Same result, less code.",
          code: "# comprehension:\nsquares = [x**2 for x in nums]\n\n# equivalent loop:\nsquares = []\nfor x in nums:\n    squares.append(x**2)",
          related: ["append()", "Patterns"]
        },
        {
          difficulty: "medium",
          question: "What is the output of: print([x for x in range(10) if x % 3 == 0])",
          options: { A: "[3, 6, 9]", B: "[0, 3, 6, 9]", C: "[1, 2, 4, 5, 7, 8]", D: "[0, 3, 6]" },
          answer: "B",
          explanation: "The if clause FILTERS: only x values divisible by 3 are kept - 0, 3, 6, 9. Don't forget 0 is divisible by 3!",
          code: "print([x for x in range(10) if x % 3 == 0])\n# [0, 3, 6, 9]",
          related: ["Filtering", "Modulo"]
        },
        {
          difficulty: "hard",
          question: "What is the output of: print([x * 2 for x in range(4) if x % 2 == 0])",
          options: { A: "[0, 2, 4, 6]", B: "[0, 4]", C: "[2, 6]", D: "[0, 2]" },
          answer: "B",
          explanation: "First the filter keeps even x (0 and 2), then the expression doubles them -> [0, 4]. Filter first, transform second.",
          code: "# x in 0,1,2,3 -> keep 0,2 -> double -> [0, 4]",
          related: ["Filter + transform"]
        },
        {
          difficulty: "easy",
          question: "What is the output of: print([w.upper() for w in [\"hi\", \"bye\"]])",
          options: { A: "['HI', 'BYE']", B: "['hi', 'bye']", C: "'HI BYE'", D: "Error" },
          answer: "A",
          explanation: "The expression can call any method: each word is uppercased -> ['HI', 'BYE']. Comprehensions shine for transforming every item.",
          code: "words = [\"hi\", \"bye\"]\nprint([w.upper() for w in words])   # ['HI', 'BYE']",
          related: ["String methods", "Transformation"]
        },
        {
          difficulty: "medium",
          question: "What does this build?\nlengths = [len(w) for w in [\"apple\", \"fig\", \"banana\"]]",
          options: { A: "[5, 3, 6]", B: "['apple', 'fig', 'banana']", C: "14", D: "[6, 3, 5]" },
          answer: "A",
          explanation: "len() runs on each word: 'apple' -> 5, 'fig' -> 3, 'banana' -> 6, giving [5, 3, 6] in the same order.",
          related: ["len()", "Mapping"]
        },
        {
          difficulty: "hard",
          question: "Where does if-ELSE go in a comprehension?\nresult = [x if x > 0 else 0 for x in nums]",
          options: {
            A: "BEFORE the for - because with else it's a conditional EXPRESSION, not a filter",
            B: "After the for, like a filter",
            C: "if-else is not allowed in comprehensions",
            D: "Either position works"
          },
          answer: "A",
          explanation: "Two different ifs! A filtering if (no else) goes AFTER the for and drops items. A conditional expression (with else) goes BEFORE the for and transforms every item. [x if x > 0 else 0 ...] keeps all items, replacing negatives with 0.",
          code: "nums = [3, -1, 5]\nprint([x if x > 0 else 0 for x in nums])  # [3, 0, 5] - transform\nprint([x for x in nums if x > 0])           # [3, 5]    - filter",
          notes: ["[x for x in nums if x > 0 else 0] is a SyntaxError."],
          related: ["Ternary expression", "Filtering"]
        },
        {
          difficulty: "medium",
          question: "Which comprehension creates a DICT of squares: {1: 1, 2: 4, 3: 9}?",
          options: {
            A: "{x: x**2 for x in range(1, 4)}",
            B: "[x: x**2 for x in range(1, 4)]",
            C: "{x, x**2 for x in range(1, 4)}",
            D: "dict(x**2 for x in range(1, 4))"
          },
          answer: "A",
          explanation: "Dict comprehensions use braces with a key: value expression. {x: x**2 ...} maps each number to its square.",
          code: "squares = {x: x**2 for x in range(1, 4)}\nprint(squares)   # {1: 1, 2: 4, 3: 9}",
          related: ["Dict comprehensions"]
        },
        {
          difficulty: "medium",
          question: "What does this produce?\n{c for c in \"banana\"}",
          options: {
            A: "A set: {'b', 'a', 'n'} - unique characters only",
            B: "A list of 6 characters",
            C: "A dict",
            D: "The string 'ban'"
          },
          answer: "A",
          explanation: "Braces without a colon make a SET comprehension - duplicates are dropped automatically, leaving the unique characters of 'banana'.",
          code: "print({c for c in \"banana\"})   # {'b', 'a', 'n'}",
          related: ["Set comprehensions", "Uniqueness"]
        },
        {
          difficulty: "medium",
          question: "What is (x**2 for x in range(3)) - with PARENTHESES?",
          options: {
            A: "A tuple comprehension",
            B: "A generator expression - values are produced lazily, one at a time",
            C: "A syntax error",
            D: "The same as a list comprehension"
          },
          answer: "B",
          explanation: "Parentheses make a GENERATOR expression: nothing is computed until you iterate it, and values are produced one by one - using almost no memory. There is no 'tuple comprehension'; use tuple(...) to get a tuple.",
          code: "gen = (x**2 for x in range(3))\nprint(gen)         # <generator object ...>\nprint(list(gen))   # [0, 1, 4]",
          related: ["Generators", "Lazy evaluation"]
        },
        {
          difficulty: "hard",
          question: "Why prefer sum(x*x for x in range(10**7)) over sum([x*x for x in range(10**7)])?",
          options: {
            A: "The first is shorter to type only",
            B: "The generator version never builds a 10-million-item list in memory - values stream one by one",
            C: "The list version gives a wrong answer",
            D: "There is no difference"
          },
          answer: "B",
          explanation: "The list comprehension materializes ALL 10 million squares in RAM before summing. The generator produces each value, hands it to sum(), and forgets it - constant memory. For large data, generators win.",
          code: "total = sum(x*x for x in range(10**7))  # memory-friendly",
          related: ["Generators", "Memory efficiency"]
        },
        {
          difficulty: "medium",
          question: "What is the output of:\nprint([c for c in \"hello\" if c in \"aeiou\"])",
          options: { A: "['e', 'o']", B: "['h', 'l', 'l']", C: "'eo'", D: "['a', 'e', 'i', 'o', 'u']" },
          answer: "A",
          explanation: "Loop over each character, keep only vowels: 'e' and 'o' -> ['e', 'o']. Use \"\".join(...) if you want them as one string.",
          code: "vowels = [c for c in \"hello\" if c in \"aeiou\"]\nprint(vowels)             # ['e', 'o']\nprint(\"\".join(vowels))   # eo",
          related: ["Filtering", "join()"]
        },
        {
          difficulty: "hard",
          question: "What is the output of:\nprint([x + y for x in \"ab\" for y in \"cd\"])",
          options: {
            A: "['ac', 'ad', 'bc', 'bd']",
            B: "['ac', 'bd']",
            C: "['ab', 'cd']",
            D: "['ca', 'da', 'cb', 'db']"
          },
          answer: "A",
          explanation: "Two for clauses nest like a double loop - the FIRST for is the outer loop. For each x ('a', then 'b'), y runs through 'c', 'd': ac, ad, bc, bd.",
          code: "# same as:\nfor x in \"ab\":\n    for y in \"cd\":\n        result.append(x + y)",
          related: ["Nested comprehensions", "Cartesian product"]
        },
        {
          difficulty: "hard",
          question: "How do you FLATTEN matrix = [[1, 2], [3, 4]] into [1, 2, 3, 4] with a comprehension?",
          options: {
            A: "[x for row in matrix for x in row]",
            B: "[x for x in row for row in matrix]",
            C: "[matrix for row in x]",
            D: "flatten(matrix)"
          },
          answer: "A",
          explanation: "Read the for clauses LEFT TO RIGHT like nested loops: first 'for row in matrix' (outer), then 'for x in row' (inner). Option B is backwards - row isn't defined yet.",
          code: "matrix = [[1, 2], [3, 4]]\nflat = [x for row in matrix for x in row]\nprint(flat)   # [1, 2, 3, 4]",
          notes: ["Order rule: the fors appear in the same order as in the loop version."],
          related: ["Flattening", "Nested loops"]
        },
        {
          difficulty: "medium",
          question: "Which builds a list of (number, square) PAIRS: [(1, 1), (2, 4), (3, 9)]?",
          options: {
            A: "[(x, x**2) for x in range(1, 4)]",
            B: "[x, x**2 for x in range(1, 4)]",
            C: "{x: x**2 for x in range(1, 4)}",
            D: "[(x)(x**2) for x in range(1, 4)]"
          },
          answer: "A",
          explanation: "Wrap the pair in parentheses to make a tuple per item: (x, x**2). Without the inner parentheses (option B) it's a SyntaxError.",
          code: "pairs = [(x, x**2) for x in range(1, 4)]\nprint(pairs)   # [(1, 1), (2, 4), (3, 9)]",
          related: ["Tuples", "Pairs"]
        },
        {
          difficulty: "medium",
          question: "How do you swap keys and values of d = {\"a\": 1, \"b\": 2} with a comprehension?",
          options: {
            A: "{v: k for k, v in d.items()}",
            B: "{k: v for v, k in d.items()}",
            C: "d.swap()",
            D: "{d[k]: k for k in d.values()}"
          },
          answer: "A",
          explanation: "Loop over items() to get (key, value) pairs, then write them flipped: value becomes the key -> {1: 'a', 2: 'b'}.",
          code: "d = {\"a\": 1, \"b\": 2}\nflipped = {v: k for k, v in d.items()}\nprint(flipped)   # {1: 'a', 2: 'b'}",
          notes: ["Only safe when values are unique and hashable."],
          related: ["Dict comprehensions", "items()"]
        },
        {
          difficulty: "easy",
          question: "What is the main reason to use a comprehension instead of a loop?",
          options: {
            A: "It's the only way to build lists",
            B: "Shorter, clearer 'build a list from a list' code (and often slightly faster)",
            C: "It uses no memory at all",
            D: "Loops are deprecated"
          },
          answer: "B",
          explanation: "For simple transform/filter operations, one readable line beats four. But if the logic needs multiple steps or side effects, a normal loop is clearer - don't force everything into a comprehension.",
          related: ["Pythonic style", "Readability"]
        },
        {
          difficulty: "medium",
          question: "What does any() return here?\nany(x > 10 for x in [3, 15, 7])",
          options: {
            A: "True - at least one value passes the test",
            B: "False",
            C: "[False, True, False]",
            D: "15"
          },
          answer: "A",
          explanation: "any() is True if AT LEAST ONE element of the iterable is truthy - 15 > 10 passes, so True. It even stops early at the first success.",
          code: "nums = [3, 15, 7]\nprint(any(x > 10 for x in nums))   # True\nprint(all(x > 10 for x in nums))   # False",
          related: ["any()", "all()", "Generators"]
        },
        {
          difficulty: "medium",
          question: "What does all() return here?\nall(x > 0 for x in [1, 2, 3])",
          options: { A: "False", B: "True - every element passes", C: "3", D: "[True, True, True]" },
          answer: "B",
          explanation: "all() is True only when EVERY element is truthy - all three numbers are positive, so True. One failure would make it False (and it stops checking there).",
          code: "print(all(x > 0 for x in [1, 2, 3]))    # True\nprint(all(x > 0 for x in [1, -2, 3]))   # False",
          related: ["all()", "any()"]
        },
        {
          difficulty: "hard",
          question: "Which correctly builds a 3x3 grid of zeros where rows are INDEPENDENT?",
          options: {
            A: "grid = [[0] * 3 for _ in range(3)]",
            B: "grid = [[0] * 3] * 3",
            C: "Both A and B are identical",
            D: "grid = [0] * 9"
          },
          answer: "A",
          explanation: "Option B repeats a reference to the SAME row three times - changing grid[0][0] would change all three rows! The comprehension creates a fresh list each iteration, so rows are independent.",
          code: "bad = [[0] * 3] * 3\nbad[0][0] = 9\nprint(bad)    # [[9,0,0],[9,0,0],[9,0,0]] !!\n\ngood = [[0] * 3 for _ in range(3)]\ngood[0][0] = 9\nprint(good)   # [[9,0,0],[0,0,0],[0,0,0]]",
          notes: ["A classic trap when building 2D grids for games or matrices."],
          related: ["References", "2D lists"]
        },
        {
          difficulty: "medium",
          question: "What is the output of:\nprint(sorted([3, 1, 2], reverse=True))",
          options: { A: "[1, 2, 3]", B: "[3, 2, 1]", C: "[2, 1, 3]", D: "None" },
          answer: "B",
          explanation: "sorted() with reverse=True sorts descending: [3, 2, 1]. Comprehensions often feed into sorted(): sorted([w.lower() for w in words]).",
          related: ["sorted()", "reverse parameter"]
        },
        {
          difficulty: "hard",
          question: "In Python 3, does the loop variable of a comprehension LEAK outside?\n[x for x in range(3)]\nprint(x)",
          options: {
            A: "Yes - x is 2 afterwards",
            B: "No - NameError: comprehensions have their own scope in Python 3",
            C: "x becomes the whole list",
            D: "x is always 0"
          },
          answer: "B",
          explanation: "In Python 3, comprehension variables live in their own hidden scope and vanish afterwards - print(x) raises NameError (unless x existed before). In Python 2 they leaked; this was fixed.",
          code: "[x for x in range(3)]\n# print(x)   # NameError in Python 3",
          related: ["Scope", "Python 2 vs 3"]
        },
        {
          difficulty: "medium",
          question: "Convert with a comprehension: strings = [\"1\", \"2\", \"3\"] into numbers [1, 2, 3]",
          options: {
            A: "[int(s) for s in strings]",
            B: "int(strings)",
            C: "[s.int() for s in strings]",
            D: "strings.to_int()"
          },
          answer: "A",
          explanation: "Apply int() to each element: [int(s) for s in strings]. int(strings) fails - int() can't convert a whole list at once.",
          code: "strings = [\"1\", \"2\", \"3\"]\nnums = [int(s) for s in strings]\nprint(sum(nums))   # 6",
          related: ["Type conversion", "map()"]
        },
        {
          difficulty: "hard",
          question: "Which is equivalent to map(str.upper, words)?",
          options: {
            A: "[str.upper for w in words]",
            B: "[w.upper() for w in words]",
            C: "{w.upper() for w in words}",
            D: "(words.upper())"
          },
          answer: "B",
          explanation: "map(function, iterable) applies the function to each item - exactly what [w.upper() for w in words] does. Most Python style guides prefer the comprehension for readability.",
          code: "words = [\"hi\", \"bye\"]\nprint(list(map(str.upper, words)))   # ['HI', 'BYE']\nprint([w.upper() for w in words])     # same",
          related: ["map()", "filter()"]
        },
        {
          difficulty: "medium",
          question: "What is the output of:\nprint([i for i in range(20) if i % 2 == 0 if i % 3 == 0])",
          options: { A: "[0, 6, 12, 18]", B: "[6, 12, 18]", C: "[0, 2, 3, 4, 6...]", D: "SyntaxError" },
          answer: "A",
          explanation: "Multiple if clauses act like AND - keep numbers divisible by 2 AND by 3 (i.e. by 6): 0, 6, 12, 18. Equivalent to one if with and.",
          code: "[i for i in range(20) if i % 2 == 0 if i % 3 == 0]\n# same as: if i % 6 == 0",
          related: ["Multiple filters"]
        },
        {
          difficulty: "easy",
          question: "What is the output of: print([len(x) for x in [\"a\", \"bb\", \"ccc\"]])",
          options: { A: "[1, 2, 3]", B: "[3, 2, 1]", C: "6", D: "['a', 'bb', 'ccc']" },
          answer: "A",
          explanation: "len() of each string: 1, 2, 3. A straightforward mapping comprehension.",
          related: ["len()", "Mapping"]
        },
        {
          difficulty: "medium",
          question: "Marks: {\"Ana\": 92, \"Ben\": 45}. Which builds a list of names who PASSED (>= 50)?",
          options: {
            A: "[name for name, mark in marks.items() if mark >= 50]",
            B: "[mark for mark in marks if mark >= 50]",
            C: "[name for name in marks.values() if name >= 50]",
            D: "marks.passed()"
          },
          answer: "A",
          explanation: "Iterate items() to get both name and mark, filter on the mark, collect the name: ['Ana']. Option B loops over keys (strings) and compares them to 50 - TypeError.",
          code: "marks = {\"Ana\": 92, \"Ben\": 45}\npassed = [n for n, m in marks.items() if m >= 50]\nprint(passed)   # ['Ana']",
          related: ["items()", "Filtering dicts"]
        },
        {
          difficulty: "easy",
          question: "What is the output of: print([x for x in \"abc\"])",
          options: { A: "['abc']", B: "['a', 'b', 'c']", C: "'abc'", D: "Error" },
          answer: "B",
          explanation: "Iterating a string yields characters, and the comprehension collects them: ['a', 'b', 'c'] - same result as list(\"abc\").",
          related: ["Strings as iterables", "list()"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nfuncs = [x**2 for x in range(3)]\nprint(funcs[-1])",
          options: { A: "4", B: "2", C: "9", D: "[0, 1, 4]" },
          answer: "A",
          explanation: "The comprehension builds [0, 1, 4] (squares of 0, 1, 2), and [-1] takes the last element: 4. Combining comprehension results with indexing is common in interview snippets.",
          related: ["Indexing", "Tracing code"]
        },
        {
          difficulty: "medium",
          question: "Clean this data with one comprehension: names = [\" ana \", \"BEN \", \" Cy\"] -> [\"Ana\", \"Ben\", \"Cy\"]",
          options: {
            A: "[n.strip().title() for n in names]",
            B: "[n.title() for n in names.strip()]",
            C: "names.strip().title()",
            D: "[strip(n) + title(n) for n in names]"
          },
          answer: "A",
          explanation: "Chain methods inside the expression: strip() removes the spaces, then title() fixes the capitalization - applied to each name. Option B calls strip() on the LIST, which doesn't exist.",
          code: "names = [\" ana \", \"BEN \", \" Cy\"]\nclean = [n.strip().title() for n in names]\nprint(clean)   # ['Ana', 'Ben', 'Cy']",
          related: ["Method chaining", "Data cleaning"]
        }
      ]
    }
  ]
});
