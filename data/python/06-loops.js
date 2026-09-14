/* ============================================================
   PYTHON - TOPIC 6: LOOPS (for / while) (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "Python",
  icon: "🐍",
  color: "#3776ab",
  description: "Master Python from basics to advanced - 20 topics.",
  topics: [
    {
      name: "6. Loops",
      questions: [
        {
          difficulty: "easy",
          question: "How many times does this loop run?\nfor i in range(5):\n    print(i)",
          options: { A: "4", B: "5", C: "6", D: "Infinite" },
          answer: "B",
          explanation: "range(5) generates 0, 1, 2, 3, 4 - five values, so the body runs 5 times. The stop value (5) is never included.",
          code: "for i in range(5):\n    print(i)   # 0 1 2 3 4",
          related: ["range()", "Iteration"]
        },
        {
          difficulty: "easy",
          question: "What values does range(2, 10, 2) produce?",
          options: { A: "2, 4, 6, 8, 10", B: "2, 4, 6, 8", C: "4, 6, 8, 10", D: "2, 10, 2" },
          answer: "B",
          explanation: "range(start, stop, step): begin at 2, jump by 2, stop BEFORE 10 - giving 2, 4, 6, 8. The stop value is always excluded.",
          code: "print(list(range(2, 10, 2)))   # [2, 4, 6, 8]\nprint(list(range(1, 6)))        # [1, 2, 3, 4, 5]",
          related: ["range()", "Step"]
        },
        {
          difficulty: "easy",
          question: "What does the break statement do inside a loop?",
          options: {
            A: "Skips one iteration",
            B: "Exits the loop immediately",
            C: "Pauses the loop",
            D: "Restarts the loop"
          },
          answer: "B",
          explanation: "break terminates the loop at once - execution jumps to the first line AFTER the loop. Used to stop early when you've found what you need.",
          code: "for n in [3, 7, 12, 5]:\n    if n > 10:\n        break        # stop at 12\n    print(n)          # 3 7\nprint(\"done\")",
          related: ["continue", "Loop control"]
        },
        {
          difficulty: "medium",
          question: "What does the continue statement do inside a loop?",
          options: {
            A: "Exits the loop entirely",
            B: "Skips the rest of the current iteration and moves to the next one",
            C: "Restarts the loop from the beginning",
            D: "Does nothing"
          },
          answer: "B",
          explanation: "continue jumps straight to the next iteration, skipping any remaining statements in the loop body this time around. break, by contrast, exits the loop completely.",
          code: "for i in range(5):\n    if i == 2:\n        continue   # skip printing 2\n    print(i)       # 0 1 3 4",
          related: ["break", "Loop control"]
        },
        {
          difficulty: "easy",
          question: "Which is the correct while loop that counts 1 to 3?",
          options: {
            A: "i = 1\\nwhile i <= 3:\\n    print(i)\\n    i += 1",
            B: "while i <= 3:\\n    print(i)",
            C: "while (i = 1; i <= 3; i++):\\n    print(i)",
            D: "while i in range(3): print(i)"
          },
          answer: "A",
          explanation: "A while loop needs: the variable created BEFORE the loop, a condition, and an update INSIDE the loop. Option B never defines or updates i; option C is C-language syntax.",
          code: "i = 1\nwhile i <= 3:\n    print(i)\n    i += 1     # without this: infinite loop!",
          related: ["while", "Infinite loops"]
        },
        {
          difficulty: "easy",
          question: "What causes an INFINITE loop most often?",
          options: {
            A: "Using range() with big numbers",
            B: "Forgetting to update the loop variable inside a while loop",
            C: "Using break",
            D: "Nesting loops"
          },
          answer: "B",
          explanation: "If the while condition never becomes False - typically because you forgot i += 1 - the loop runs forever. Press Ctrl+C to stop a runaway program.",
          code: "i = 0\nwhile i < 5:\n    print(i)\n    # forgot i += 1  -> prints 0 forever!",
          related: ["while", "Ctrl+C"]
        },
        {
          difficulty: "easy",
          question: "What is the output of:\nfor ch in \"abc\":\n    print(ch)",
          options: { A: "abc", B: "a b c (each on its own line)", C: "0 1 2", D: "Error" },
          answer: "B",
          explanation: "A for loop over a string visits each CHARACTER in order: 'a', then 'b', then 'c' - each printed on its own line. Strings are iterable.",
          code: "for ch in \"abc\":\n    print(ch)\n# a\n# b\n# c",
          related: ["Iterables", "Strings"]
        },
        {
          difficulty: "easy",
          question: "What is the output of:\ntotal = 0\nfor i in range(3):\n    total += i\nprint(total)",
          options: { A: "3", B: "6", C: "0", D: "2" },
          answer: "A",
          explanation: "range(3) gives 0, 1, 2. The accumulator adds them: 0 + 0 + 1 + 2 = 3. This 'running total' pattern is one of the most common loop uses.",
          code: "total = 0\nfor i in range(3):\n    total += i    # 0, then 1, then 3\nprint(total)       # 3",
          related: ["Accumulator pattern", "sum()"]
        },
        {
          difficulty: "medium",
          question: "How many stars does this print?\nfor i in range(3):\n    for j in range(2):\n        print(\"*\")",
          options: { A: "5", B: "6", C: "3", D: "9" },
          answer: "B",
          explanation: "The inner loop runs completely (2 times) for EACH of the 3 outer iterations: 3 x 2 = 6 stars. Nested loop counts always multiply.",
          code: "for i in range(3):      # 3 times\n    for j in range(2):  # 2 times each\n        print(\"*\")       # 6 total",
          related: ["Nested loops"]
        },
        {
          difficulty: "medium",
          question: "What does enumerate() give you in:\nfor i, fruit in enumerate([\"apple\", \"mango\"]):",
          options: {
            A: "Only the values",
            B: "Only the indexes",
            C: "Both the index AND the value of each item",
            D: "The list sorted"
          },
          answer: "C",
          explanation: "enumerate() pairs each item with its position: (0, 'apple'), (1, 'mango'). It's the Pythonic replacement for range(len(list)) when you need both index and value.",
          code: "for i, fruit in enumerate([\"apple\", \"mango\"]):\n    print(i, fruit)\n# 0 apple\n# 1 mango",
          notes: ["enumerate(items, start=1) begins counting at 1."],
          related: ["enumerate()", "Unpacking"]
        },
        {
          difficulty: "medium",
          question: "Which range counts DOWN from 10 to 1?",
          options: {
            A: "range(10, 0, -1)",
            B: "range(10, 1)",
            C: "range(1, 10, -1)",
            D: "range(-10)"
          },
          answer: "A",
          explanation: "A negative step walks backwards: range(10, 0, -1) gives 10, 9, 8, ... 1 (stop 0 excluded). Option C produces nothing - you can't go from 1 down to 10.",
          code: "for i in range(10, 0, -1):\n    print(i)          # 10 9 8 ... 1\nprint(\"Liftoff!\")",
          related: ["range()", "Negative step"]
        },
        {
          difficulty: "easy",
          question: "What happens with:\nfor i in range(0):\n    print(\"hello\")",
          options: {
            A: "Prints hello once",
            B: "Prints hello forever",
            C: "The body never runs - no output",
            D: "Error"
          },
          answer: "C",
          explanation: "range(0) is empty, so the loop body executes zero times. No error - the program just moves on. Same happens looping over an empty list.",
          related: ["range()", "Empty iterables"]
        },
        {
          difficulty: "medium",
          question: "How many times does this while loop run?\nx = 0\nwhile x < 10:\n    x += 3",
          options: { A: "3", B: "4", C: "10", D: "Infinite" },
          answer: "B",
          explanation: "x takes the values 0, 3, 6, 9 (each < 10, so the body runs) and then 12, which fails the check. That's 4 iterations.",
          code: "x = 0\ncount = 0\nwhile x < 10:\n    x += 3\n    count += 1\nprint(count)   # 4  (x: 3, 6, 9, 12)",
          related: ["while", "Tracing code"]
        },
        {
          difficulty: "hard",
          question: "What is the loop-else clause?\nfor n in nums:\n    if n == target: break\nelse:\n    print(\"not found\")",
          options: {
            A: "It runs after every iteration",
            B: "It runs only when the loop finished WITHOUT hitting break",
            C: "It's a syntax error - else can't follow for",
            D: "It runs only when break happened"
          },
          answer: "B",
          explanation: "Python's unusual for-else: the else block runs when the loop completes normally (no break). Perfect for search loops - if break never fired, the item wasn't found.",
          code: "for n in [1, 3, 5]:\n    if n == 4:\n        print(\"found\")\n        break\nelse:\n    print(\"not found\")   # runs - no break happened",
          notes: ["Think of else here as 'no-break'."],
          related: ["for-else", "Search patterns"]
        },
        {
          difficulty: "medium",
          question: "In a NESTED loop, what does break exit?",
          options: {
            A: "All loops at once",
            B: "Only the innermost loop containing it",
            C: "The outermost loop",
            D: "The whole program"
          },
          answer: "B",
          explanation: "break only exits the single loop it lives in - the outer loop continues. To exit multiple levels, use a flag variable, return from a function, or restructure the code.",
          code: "for i in range(3):\n    for j in range(3):\n        if j == 1:\n            break      # exits inner only\n    print(i)            # still prints 0 1 2",
          related: ["Nested loops", "break"]
        },
        {
          difficulty: "easy",
          question: "What does the underscore mean in:\nfor _ in range(3):\n    print(\"hi\")",
          options: {
            A: "It's a syntax error",
            B: "A throwaway variable name - we don't need the loop value",
            C: "It makes the loop private",
            D: "It repeats twice as fast"
          },
          answer: "B",
          explanation: "_ is a normal variable name that conventionally signals 'I'm not going to use this value'. Here we only care about repeating 3 times, not about the counter.",
          code: "for _ in range(3):\n    print(\"hi\")   # hi hi hi",
          related: ["Conventions", "range()"]
        },
        {
          difficulty: "medium",
          question: "What is the standard pattern for a loop that must run AT LEAST once (like a menu)?",
          options: {
            A: "while True: ... with break when done",
            B: "do { } while - Python's do-while loop",
            C: "for ever:",
            D: "repeat until done:"
          },
          answer: "A",
          explanation: "Python has NO do-while loop. The idiom is while True: with a break when the exit condition is met - the body always runs at least once.",
          code: "while True:\n    choice = input(\"Command (q to quit): \")\n    if choice == \"q\":\n        break\n    print(\"You chose\", choice)",
          related: ["while True", "Menus"]
        },
        {
          difficulty: "medium",
          question: "What happens with:\nfor i in 5:\n    print(i)",
          options: {
            A: "Prints 0 to 4",
            B: "Prints 5",
            C: "TypeError - int is not iterable",
            D: "Prints 1 to 5"
          },
          answer: "C",
          explanation: "You can't loop over a bare number - for needs an ITERABLE (range, list, string...). The fix: for i in range(5).",
          code: "# for i in 5:        # TypeError!\nfor i in range(5):   # correct\n    print(i)",
          related: ["Iterables", "TypeError"]
        },
        {
          difficulty: "medium",
          question: "What is the difference between continue and pass?",
          options: {
            A: "They are identical",
            B: "continue skips to the next iteration; pass does nothing and execution continues to the next line",
            C: "pass skips the iteration; continue does nothing",
            D: "pass exits the loop"
          },
          answer: "B",
          explanation: "continue actively jumps to the next iteration - lines after it don't run. pass is a no-op placeholder - lines after it DO run normally.",
          code: "for i in range(3):\n    if i == 1:\n        continue\n    print(i)        # 0 2  (1 skipped)\n\nfor i in range(3):\n    if i == 1:\n        pass\n    print(i)        # 0 1 2  (nothing skipped)",
          related: ["continue", "pass"]
        },
        {
          difficulty: "medium",
          question: "What does reversed() do in:\nfor x in reversed([1, 2, 3]):\n    print(x)",
          options: {
            A: "Prints 3 2 1",
            B: "Prints 1 2 3",
            C: "Reverses the list permanently",
            D: "Error"
          },
          answer: "A",
          explanation: "reversed() iterates the sequence back to front WITHOUT changing the original list. (list.reverse() is the method that permanently reverses in place.)",
          code: "nums = [1, 2, 3]\nfor x in reversed(nums):\n    print(x)          # 3 2 1\nprint(nums)            # [1, 2, 3] - unchanged",
          related: ["reversed()", "Slicing [::-1]"]
        },
        {
          difficulty: "hard",
          question: "What does zip() do in:\nfor name, mark in zip([\"Ana\", \"Ben\"], [90, 85]):",
          options: {
            A: "Compresses the lists to save memory",
            B: "Pairs items position-by-position: (\"Ana\", 90), then (\"Ben\", 85)",
            C: "Joins the lists into one long list",
            D: "Sorts both lists"
          },
          answer: "B",
          explanation: "zip() walks multiple sequences in parallel, yielding tuples of matching positions. It stops at the SHORTEST sequence.",
          code: "names = [\"Ana\", \"Ben\"]\nmarks = [90, 85]\nfor name, mark in zip(names, marks):\n    print(name, mark)\n# Ana 90\n# Ben 85",
          related: ["zip()", "Parallel iteration"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nfor i in range(3):\n    i = 100\nprint(i)",
          options: { A: "100", B: "2", C: "102", D: "Error" },
          answer: "A",
          explanation: "Tricky! Reassigning i inside the body doesn't affect the iteration - each pass, the for loop reassigns i to the NEXT range value. After the final pass, i was set to 100 by the body, so print shows 100.",
          code: "for i in range(3):\n    i = 100      # overwritten next iteration\n    print(i)      # 100 100 100\nprint(i)          # 100 (last value assigned)",
          notes: ["The loop still runs exactly 3 times - you can't skip ahead by changing i."],
          related: ["Loop variables", "Tracing code"]
        },
        {
          difficulty: "easy",
          question: "Which loop is better for 'do something for EACH item in a list'?",
          options: {
            A: "for - it's made for iterating over collections",
            B: "while - it's more powerful",
            C: "Both are equally idiomatic",
            D: "Neither - use recursion"
          },
          answer: "A",
          explanation: "Rule of thumb: for when you know WHAT to iterate over (a list, string, range); while when you only know the STOPPING CONDITION (e.g. 'until the user quits').",
          code: "for item in cart:       # natural\n    print(item)\n\nwhile balance > 0:       # condition-driven\n    balance -= withdraw()",
          related: ["for vs while"]
        },
        {
          difficulty: "medium",
          question: "Count the vowels: what is the output?\ncount = 0\nfor ch in \"banana\":\n    if ch in \"aeiou\":\n        count += 1\nprint(count)",
          options: { A: "2", B: "3", C: "6", D: "0" },
          answer: "B",
          explanation: "'banana' contains a, a, a - three vowels. The pattern: loop over characters, test membership with in, count matches.",
          code: "count = 0\nfor ch in \"banana\":\n    if ch in \"aeiou\":\n        count += 1\nprint(count)   # 3",
          related: ["Counting pattern", "in operator"]
        },
        {
          difficulty: "medium",
          question: "Which is the more Pythonic way to loop over a list's values?",
          options: {
            A: "for item in items:",
            B: "for i in range(len(items)): ... items[i]",
            C: "while i < len(items): ... items[i]",
            D: "All equally preferred"
          },
          answer: "A",
          explanation: "Iterate directly over the items - it's shorter, faster and can't have index bugs. Use range(len()) only when you must MODIFY items by index, and enumerate() when you need index AND value.",
          code: "for item in items:            # best\nfor i, item in enumerate(items):  # need index too\nfor i in range(len(items)):    # only to assign items[i] = ...",
          related: ["enumerate()", "Pythonic style"]
        },
        {
          difficulty: "easy",
          question: "What is the last number printed?\nfor i in range(1, 5):\n    print(i)",
          options: { A: "5", B: "4", C: "1", D: "0" },
          answer: "B",
          explanation: "range(1, 5) produces 1, 2, 3, 4 - it starts AT 1 and stops BEFORE 5. The last printed value is 4.",
          related: ["range()", "Off-by-one errors"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nfor i in range(3):\n    print(\"*\" * (i + 1))",
          options: {
            A: "*\\n**\\n*** (a triangle)",
            B: "*** three times",
            C: "* three times",
            D: "Error"
          },
          answer: "A",
          explanation: "i takes 0, 1, 2, so it prints 1, 2, then 3 stars - a growing triangle. String repetition inside a loop is the classic pattern-printing technique.",
          code: "for i in range(3):\n    print(\"*\" * (i + 1))\n# *\n# **\n# ***",
          related: ["Pattern printing", "String repetition"]
        },
        {
          difficulty: "hard",
          question: "Why is modifying a list WHILE looping over it dangerous?\nfor x in nums:\n    if x < 0: nums.remove(x)",
          options: {
            A: "It's perfectly safe",
            B: "Removing items shifts positions, so the loop SKIPS elements",
            C: "It raises SyntaxError",
            D: "The list becomes immutable during loops"
          },
          answer: "B",
          explanation: "When you remove an item, everything after it shifts left - but the loop's internal position still advances, silently skipping the next element. Loop over a COPY (nums[:]) or build a new filtered list instead.",
          code: "nums = [1, -2, -3, 4]\nfor x in nums[:]:        # loop over a copy\n    if x < 0:\n        nums.remove(x)\n\n# or better:\nnums = [x for x in nums if x >= 0]",
          notes: ["A very common source of 'why did it skip one?' bugs."],
          related: ["List mutation", "Copies"]
        },
        {
          difficulty: "easy",
          question: "How do you stop a program stuck in an infinite loop in the terminal?",
          options: { A: "Press Ctrl+C", B: "Type 'stop'", C: "Press Enter", D: "Close your eyes" },
          answer: "A",
          explanation: "Ctrl+C sends a KeyboardInterrupt, which stops the running Python program. Every programmer needs this shortcut on day one of learning while loops!",
          related: ["KeyboardInterrupt", "Infinite loops"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nn = 1\nwhile n < 100:\n    n *= 2\nprint(n)",
          options: { A: "64", B: "100", C: "128", D: "Infinite loop" },
          answer: "C",
          explanation: "n doubles: 1, 2, 4, 8, 16, 32, 64 (still < 100, so doubles again) -> 128, which fails the check. The loop exits with n = 128 - the first power of 2 that is >= 100.",
          code: "n = 1\nwhile n < 100:\n    n *= 2\nprint(n)   # 128",
          related: ["while", "Tracing code", "Powers of 2"]
        }
      ]
    }
  ]
});
