/* ============================================================
   PYTHON - TOPIC 20: PYTHONIC INTERVIEW QUESTIONS (30 questions)
   Tricky outputs, common gotchas, and "why does this happen?"
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "Python",
  icon: "🐍",
  color: "#3776ab",
  description: "Master Python from basics to advanced - 20 topics.",
  topics: [
    {
      name: "20. Interview Questions",
      questions: [
        {
          difficulty: "hard",
          question: "What is the output?\ndef f(a, b=[]):\n    b.append(a)\n    return b\nprint(f(1))\nprint(f(2))",
          options: {
            A: "[1] then [1, 2] - the default list is created ONCE and reused across calls",
            B: "[1] then [2]",
            C: "[1, 2] then [1, 2]",
            D: "Error"
          },
          answer: "A",
          explanation: "The mutable default argument trap. The default [] is created once at definition and shared by every call that omits b, so it accumulates. Fix: use b=None and create the list inside.",
          code: "def f(a, b=None):\n    if b is None:\n        b = []\n    b.append(a)\n    return b",
          related: ["Mutable defaults", "Common traps"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nprint(0.1 + 0.2 == 0.3)",
          options: {
            A: "False - floating-point rounding makes 0.1 + 0.2 = 0.30000000000000004",
            B: "True",
            C: "Error",
            D: "0.3"
          },
          answer: "A",
          explanation: "Floats are binary approximations; 0.1 and 0.2 can't be represented exactly. Never compare floats with ==; use math.isclose(a, b) or round to a few decimals.",
          code: "import math\nprint(math.isclose(0.1 + 0.2, 0.3))   # True",
          related: ["Floating point", "isclose"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\na = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)",
          options: {
            A: "[1, 2, 3, 4] - a and b are two names for the SAME list",
            B: "[1, 2, 3]",
            C: "[4]",
            D: "Error"
          },
          answer: "A",
          explanation: "b = a does not copy; both names reference one list. Mutating through b is visible through a. For an independent copy: b = a.copy() or b = a[:].",
          related: ["References", "Aliasing"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nprint(2 ** 3 ** 2)",
          options: {
            A: "512 - ** is right-associative, so it's 2 ** (3 ** 2) = 2 ** 9",
            B: "64 - (2 ** 3) ** 2",
            C: "12",
            D: "18"
          },
          answer: "A",
          explanation: "Exponentiation groups right-to-left (unlike most operators). So 3 ** 2 = 9 first, then 2 ** 9 = 512. A favorite precedence gotcha.",
          related: ["Operator precedence", "Associativity"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nprint(True == 1, False == 0, True + True)",
          options: {
            A: "True True 2 - bool is a subclass of int (True is 1, False is 0)",
            B: "False False 0",
            C: "True True True",
            D: "Error"
          },
          answer: "A",
          explanation: "Booleans ARE integers under the hood: True equals 1, False equals 0, and they do arithmetic. That's why sum([True, False, True]) counts the Trues (2).",
          related: ["bool as int", "Truthiness"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nprint([] == False, bool([]) == False)",
          options: {
            A: "False True - an empty list is falsy but NOT equal to False",
            B: "True True",
            C: "False False",
            D: "Error"
          },
          answer: "A",
          explanation: "[] == False compares a list to a boolean (different values) -> False. But bool([]) converts the empty list to False first -> True. Truthiness (used by if) is different from == equality.",
          related: ["Truthiness vs equality"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nprint([i for i in range(3)] + [i*2 for i in range(3)])",
          options: {
            A: "[0, 1, 2, 0, 2, 4]",
            B: "[0, 1, 2, 2, 4, 6]",
            C: "[0, 2, 4]",
            D: "Error"
          },
          answer: "A",
          explanation: "First comprehension: [0, 1, 2]. Second: [0, 2, 4]. + concatenates the two lists -> [0, 1, 2, 0, 2, 4].",
          related: ["Comprehensions", "List concatenation"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\ns = \"hello\"\nprint(s[::-1])",
          options: { A: "olleh", B: "hello", C: "hell", D: "Error" },
          answer: "A",
          explanation: "A slice with step -1 walks the string backwards, reversing it: 'olleh'. The idiomatic Python reverse - also used to check palindromes with s == s[::-1].",
          related: ["Slicing", "Reverse"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nprint(1 == True, [1] == [True])",
          options: {
            A: "True True - 1 equals True, so the lists compare equal too",
            B: "True False",
            C: "False False",
            D: "Error"
          },
          answer: "A",
          explanation: "1 == True is True (bool is int). List equality compares elements: 1 == True is True, so [1] == [True]. Consistent once you know True behaves as 1.",
          related: ["bool as int", "List equality"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nprint(\"a\" in \"banana\", \"ba\" in \"banana\", \"ab\" in \"banana\")",
          options: {
            A: "True True False - 'in' checks for a contiguous SUBSTRING",
            B: "True True True",
            C: "False False False",
            D: "Error"
          },
          answer: "A",
          explanation: "in tests substrings: 'a' and 'ba' appear in 'banana', but 'ab' does not (the letters aren't adjacent in that order). Substring, not subsequence.",
          related: ["in operator", "Substrings"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\ndef f():\n    try:\n        return 1\n    finally:\n        return 2\nprint(f())",
          options: {
            A: "2 - finally's return OVERRIDES the try's return",
            B: "1",
            C: "1 then 2",
            D: "Error"
          },
          answer: "A",
          explanation: "finally always runs, and its return replaces the pending one from try. This is why returning inside finally is discouraged - it silently swallows the real result (and even exceptions).",
          related: ["try/finally", "return"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nprint(3 * \"ab\" + \"c\")",
          options: {
            A: "ababcabc",
            B: "abababc",
            C: "ababab c",
            D: "Error"
          },
          answer: "B",
          explanation: "* binds tighter than +: 3 * \"ab\" = \"ababab\" first, then + \"c\" -> \"abababc\". Precedence applies to string operators too.",
          related: ["Operator precedence", "String operations"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nx = [1, 2, 3]\ny = x[:]\ny.append(4)\nprint(x, y)",
          options: {
            A: "[1, 2, 3] [1, 2, 3, 4] - x[:] made an independent copy",
            B: "[1, 2, 3, 4] [1, 2, 3, 4]",
            C: "[1, 2, 3] [4]",
            D: "Error"
          },
          answer: "A",
          explanation: "x[:] creates a shallow copy, so y is a separate list. Appending to y leaves x unchanged. (Contrast with y = x, which would share the list.)",
          related: ["Slicing", "Copying"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nprint(bool(\"False\"), bool(\"0\"), bool(0), bool(\"\"))",
          options: {
            A: "True True False False",
            B: "False False False False",
            C: "True True True True",
            D: "False True False True"
          },
          answer: "A",
          explanation: "Any NON-EMPTY string is truthy - even \"False\" and \"0\". Only the empty string is falsy. The number 0 is falsy. So: True, True, False, False.",
          related: ["Truthiness", "Gotchas"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\na = (1, 2, [3, 4])\na[2].append(5)\nprint(a)",
          options: {
            A: "(1, 2, [3, 4, 5]) - the tuple is immutable but its inner LIST is mutable",
            B: "Error - tuples can't change",
            C: "(1, 2, [3, 4])",
            D: "(1, 2, 3, 4, 5)"
          },
          answer: "A",
          explanation: "A tuple can't have its elements REPLACED, but if an element is itself mutable (a list), that object can still be modified. Immutability is shallow.",
          related: ["Tuple immutability", "Mutable elements"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nprint(len(\"café\"))",
          options: {
            A: "4 - Python 3 strings count CHARACTERS, not bytes",
            B: "5",
            C: "3",
            D: "Error"
          },
          answer: "A",
          explanation: "In Python 3, strings are sequences of Unicode characters, so 'café' has length 4 regardless of how many bytes it takes to encode. (Encoded as UTF-8 bytes it would be 5.)",
          related: ["Unicode", "len()"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nprint(list(range(0)), list(range(5, 5)), list(range(3, 0)))",
          options: {
            A: "[] [] [] - all three ranges are empty",
            B: "[0] [5] [3, 2, 1]",
            C: "Error",
            D: "[] [] [3, 2, 1]"
          },
          answer: "A",
          explanation: "range(0) and range(5,5) produce nothing. range(3, 0) is also empty because it counts UP by default and 3 is already past 0 - you'd need range(3, 0, -1) to count down.",
          related: ["range()", "Empty ranges"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nprint(\"5\" + \"5\", \"5\" * 2, int(\"5\") + 5)",
          options: {
            A: "55 55 10",
            B: "10 10 10",
            C: "55 25 10",
            D: "Error"
          },
          answer: "A",
          explanation: "\"5\" + \"5\" joins strings -> \"55\". \"5\" * 2 repeats -> \"55\". int(\"5\") + 5 does math -> 10. Same-looking data behaving three ways depending on type.",
          related: ["Type behavior", "Operators"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nx = {1, 2, 3}\ny = {3, 4, 5}\nprint(x & y, x | y, x ^ y)",
          options: {
            A: "{3} {1,2,3,4,5} {1,2,4,5}",
            B: "{3} {3} {3}",
            C: "{1,2} {4,5} {3}",
            D: "Error"
          },
          answer: "A",
          explanation: "& intersection (common: {3}), | union (all: {1,2,3,4,5}), ^ symmetric difference (in one but not both: {1,2,4,5}).",
          related: ["Set operations"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nnums = [1, 2, 3, 4]\nprint(nums[::2], nums[1::2], nums[::-2])",
          options: {
            A: "[1, 3] [2, 4] [4, 2]",
            B: "[1, 2] [3, 4] [4, 3]",
            C: "[2, 4] [1, 3] [1, 3]",
            D: "Error"
          },
          answer: "A",
          explanation: "[::2] every other from start -> [1,3]. [1::2] every other from index 1 -> [2,4]. [::-2] every other going backwards -> [4,2].",
          related: ["Slicing", "Step"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nprint(sorted([3, 1, 2]) is sorted([3, 1, 2]))",
          options: {
            A: "False - sorted() returns a NEW list each call, so they're different objects",
            B: "True",
            C: "Error",
            D: "[1, 2, 3]"
          },
          answer: "A",
          explanation: "Both calls produce equal lists ([1,2,3]), but they're separate objects in memory, so 'is' (identity) is False. == would be True. Classic is-vs-== distinction.",
          related: ["is vs ==", "sorted()"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nd = {\"a\": 1, \"b\": 2}\nprint([k for k in d], [v for v in d.values()])",
          options: {
            A: "['a', 'b'] [1, 2]",
            B: "[1, 2] ['a', 'b']",
            C: "['a', 'b'] ['a', 'b']",
            D: "Error"
          },
          answer: "A",
          explanation: "Iterating a dict directly gives its KEYS (['a', 'b']); .values() gives the values ([1, 2]). A frequent point of confusion when looping dicts.",
          related: ["Dict iteration", "keys/values"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nprint(\"abc\".find(\"d\"), \"abc\".find(\"b\"))",
          options: {
            A: "-1 1 - find returns -1 when not found, else the index",
            B: "None 1",
            C: "Error 1",
            D: "0 1"
          },
          answer: "A",
          explanation: "find returns the index of the substring, or -1 if absent. 'd' isn't there (-1); 'b' is at index 1. (index() would raise ValueError instead of returning -1.)",
          related: ["find()", "index()"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nprint(list(map(lambda x: x**2, filter(lambda x: x % 2, range(6)))))",
          options: {
            A: "[1, 9, 25] - keep odds (1,3,5), then square them",
            B: "[0, 4, 16]",
            C: "[1, 4, 9, 16, 25]",
            D: "[0, 1, 4, 9, 16, 25]"
          },
          answer: "A",
          explanation: "filter keeps values where x % 2 is truthy (odd): 1, 3, 5. map squares them: 1, 9, 25. Read inside-out. A comprehension would be [x**2 for x in range(6) if x % 2].",
          related: ["map()", "filter()", "lambda"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\na = b = [1, 2]\na += [3]\nprint(a, b)",
          options: {
            A: "[1, 2, 3] [1, 2, 3] - += mutates the shared list in place",
            B: "[1, 2, 3] [1, 2]",
            C: "[1, 2] [1, 2, 3]",
            D: "Error"
          },
          answer: "A",
          explanation: "a and b point to the same list. For lists, += calls extend (in-place mutation), so both names see [1, 2, 3]. (For an int, += would rebind and NOT affect the other name.)",
          related: ["Aliasing", "In-place operators"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nprint(\"-\".join([str(x) for x in range(3)]))",
          options: { A: "0-1-2", B: "012", C: "0 1 2", D: "['0-1-2']" },
          answer: "A",
          explanation: "The comprehension makes ['0', '1', '2'] (join needs strings, not ints), then join glues them with '-' -> '0-1-2'.",
          related: ["join()", "Comprehensions"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nx = 1\nprint(x, end=\"\")\nprint(x + 1)",
          options: {
            A: "12 (on one line) - end=\"\" removes the newline after the first print",
            B: "1 then 2 on separate lines",
            C: "1 2",
            D: "3"
          },
          answer: "A",
          explanation: "end=\"\" replaces the default trailing newline with nothing, so the second print continues on the same line: '1' then '2' -> '12'.",
          related: ["print end", "Output formatting"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nprint(max(\"apple\", \"banana\", key=len), max(\"apple\", \"banana\"))",
          options: {
            A: "banana banana - one by LENGTH, the other alphabetically (b > a)",
            B: "apple apple",
            C: "banana apple",
            D: "apple banana"
          },
          answer: "A",
          explanation: "With key=len, max compares lengths: 'banana' (6) wins. Without key, max compares alphabetically: 'banana' > 'apple' because 'b' > 'a'. Both give 'banana' here, for different reasons.",
          related: ["max()", "key functions"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nprint(type([]) == list, type([]) is list, isinstance([], list))",
          options: {
            A: "True True True - all three confirm [] is a list",
            B: "True False True",
            C: "False False True",
            D: "Error"
          },
          answer: "A",
          explanation: "type([]) is the list class. == compares it to list (True); is checks identity - and classes are singletons, so True; isinstance is the preferred check (True). All three agree here, but isinstance is best because it respects subclasses.",
          related: ["type()", "isinstance()"]
        },
        {
          difficulty: "hard",
          question: "The famous one - what is the output?\nfor i in range(3):\n    pass\nprint(i)",
          options: {
            A: "2 - the loop variable survives with its LAST value after the loop",
            B: "3",
            C: "NameError",
            D: "0"
          },
          answer: "A",
          explanation: "Unlike comprehensions, a for-loop variable leaks into the surrounding scope and keeps its final value (2, the last item of range(3)). If range were empty, i would never be defined.",
          related: ["Loop variable scope", "Gotchas"]
        }
      ]
    }
  ]
});
