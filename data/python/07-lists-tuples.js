/* ============================================================
   PYTHON - TOPIC 7: LISTS & TUPLES (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "Python",
  icon: "🐍",
  color: "#3776ab",
  description: "Master Python from basics to advanced - 20 topics.",
  topics: [
    {
      name: "7. Lists & Tuples",
      questions: [
        {
          difficulty: "easy",
          question: "Which line creates a list of three numbers?",
          options: {
            A: "nums = [1, 2, 3]",
            B: "nums = (1, 2, 3)",
            C: "nums = {1, 2, 3}",
            D: "nums = list 1, 2, 3"
          },
          answer: "A",
          explanation: "Square brackets [] create a list. Parentheses () make a tuple and curly braces {} make a set - three different types!",
          code: "nums = [1, 2, 3]      # list\npoint = (1, 2)          # tuple\nids = {1, 2, 3}         # set",
          related: ["Lists", "Tuples", "Sets"]
        },
        {
          difficulty: "easy",
          question: "What is the output of:\nfruits = [\"apple\", \"mango\", \"banana\"]\nprint(fruits[1])",
          options: { A: "apple", B: "mango", C: "banana", D: "Error" },
          answer: "B",
          explanation: "List indexing starts at 0: fruits[0] is 'apple', fruits[1] is 'mango'. Same rule as strings.",
          code: "fruits = [\"apple\", \"mango\", \"banana\"]\n#          0        1        2\nprint(fruits[1])   # mango",
          related: ["Indexing"]
        },
        {
          difficulty: "easy",
          question: "What does fruits[-1] give for fruits = [\"apple\", \"mango\", \"banana\"]?",
          options: { A: "apple", B: "mango", C: "banana", D: "Error" },
          answer: "C",
          explanation: "Negative indexes count from the end: -1 is the LAST item ('banana'), -2 is 'mango'.",
          code: "print(fruits[-1])   # banana\nprint(fruits[-2])   # mango",
          related: ["Negative indexing"]
        },
        {
          difficulty: "easy",
          question: "Which method adds an item to the END of a list?",
          options: { A: "add()", B: "append()", C: "push()", D: "insert()" },
          answer: "B",
          explanation: ".append(item) adds one item at the end. (push is JavaScript, add is for sets; insert puts an item at a chosen position.)",
          code: "cart = [\"pen\"]\ncart.append(\"book\")\nprint(cart)   # ['pen', 'book']",
          related: ["append()", "insert()"]
        },
        {
          difficulty: "medium",
          question: "What does nums.insert(1, 99) do to nums = [10, 20, 30]?",
          options: {
            A: "Replaces 20 with 99 -> [10, 99, 30]",
            B: "Inserts 99 AT index 1 -> [10, 99, 20, 30]",
            C: "Appends 99 -> [10, 20, 30, 99]",
            D: "Error"
          },
          answer: "B",
          explanation: "insert(position, item) squeezes the item in at that index, shifting the rest right - nothing is overwritten: [10, 99, 20, 30].",
          code: "nums = [10, 20, 30]\nnums.insert(1, 99)\nprint(nums)   # [10, 99, 20, 30]",
          related: ["insert()", "append()"]
        },
        {
          difficulty: "medium",
          question: "What is the difference between remove() and pop() on a list?",
          options: {
            A: "No difference",
            B: "remove(x) deletes by VALUE; pop(i) deletes by POSITION and returns the item",
            C: "pop() deletes by value; remove() by position",
            D: "remove() empties the whole list"
          },
          answer: "B",
          explanation: "nums.remove(20) searches for the value 20 and deletes its first occurrence. nums.pop(1) removes whatever sits at index 1 AND hands it back to you. pop() with no argument removes the last item.",
          code: "nums = [10, 20, 30]\nnums.remove(20)      # by value -> [10, 30]\nlast = nums.pop()    # by position -> last = 30, nums = [10]",
          related: ["remove()", "pop()", "del"]
        },
        {
          difficulty: "easy",
          question: "What is the output of: print(len([1, 2, 3, 4]))",
          options: { A: "3", B: "4", C: "10", D: "Error" },
          answer: "B",
          explanation: "len() returns the number of items in the list: 4. Works on strings, tuples, dicts and sets too.",
          related: ["len()"]
        },
        {
          difficulty: "easy",
          question: "What is the output of: print([1, 2] + [3, 4])",
          options: { A: "[4, 6]", B: "[1, 2, 3, 4]", C: "[[1, 2], [3, 4]]", D: "Error" },
          answer: "B",
          explanation: "+ on lists concatenates them into a new longer list - it does NOT add the numbers element by element. [1,2] + [3,4] -> [1, 2, 3, 4].",
          code: "print([1, 2] + [3, 4])   # [1, 2, 3, 4]\nprint([0] * 3)            # [0, 0, 0]",
          related: ["Concatenation", "Repetition"]
        },
        {
          difficulty: "medium",
          question: "What is the output of:\nnums = [5, 2, 8, 1]\nnums.sort()\nprint(nums)",
          options: { A: "[5, 2, 8, 1]", B: "[1, 2, 5, 8]", C: "[8, 5, 2, 1]", D: "None" },
          answer: "B",
          explanation: ".sort() rearranges the list itself into ascending order (in place). For descending: nums.sort(reverse=True).",
          code: "nums = [5, 2, 8, 1]\nnums.sort()\nprint(nums)   # [1, 2, 5, 8]\nnums.sort(reverse=True)\nprint(nums)   # [8, 5, 2, 1]",
          related: ["sort()", "sorted()"]
        },
        {
          difficulty: "hard",
          question: "What is the output of:\nnums = [3, 1, 2]\nresult = nums.sort()\nprint(result)",
          options: { A: "[1, 2, 3]", B: "None", C: "[3, 1, 2]", D: "Error" },
          answer: "B",
          explanation: "Classic trap! .sort() sorts IN PLACE and returns None - the sorted data is in nums, not in result. Use sorted(nums) when you want the sorted list as a return value.",
          code: "nums = [3, 1, 2]\nprint(nums.sort())     # None !\nprint(nums)             # [1, 2, 3]\nprint(sorted([3,1,2]))  # [1, 2, 3] - returns a NEW list",
          notes: ["Rule: methods that modify in place (sort, append, reverse) return None."],
          related: ["sort() vs sorted()", "In-place methods"]
        },
        {
          difficulty: "medium",
          question: "What is the difference between sort() and sorted()?",
          options: {
            A: "They are identical",
            B: "list.sort() changes the original list; sorted() returns a NEW sorted list and works on any iterable",
            C: "sorted() changes the original; sort() returns new",
            D: "sorted() only works on numbers"
          },
          answer: "B",
          explanation: "nums.sort() modifies nums itself (and returns None). sorted(anything) leaves the original untouched and returns a new sorted list - it even accepts strings, tuples and sets.",
          code: "nums = [3, 1, 2]\nnew = sorted(nums)\nprint(nums)   # [3, 1, 2] - unchanged\nprint(new)    # [1, 2, 3]",
          related: ["sort()", "sorted()"]
        },
        {
          difficulty: "easy",
          question: "Can a Python list hold different types at once, like [1, \"two\", 3.0, True]?",
          options: {
            A: "No - all items must share one type",
            B: "Yes - lists can mix any types freely",
            C: "Only numbers and strings",
            D: "Only with the mixed keyword"
          },
          answer: "B",
          explanation: "Python lists are completely flexible - any mix of types, even other lists. (In practice most lists hold one type, but nothing enforces it.)",
          code: "stuff = [1, \"two\", 3.0, True, [4, 5]]\nprint(stuff[4][0])   # 4",
          related: ["Dynamic typing", "Nested lists"]
        },
        {
          difficulty: "medium",
          question: "What is the output of:\nmatrix = [[1, 2], [3, 4]]\nprint(matrix[1][0])",
          options: { A: "1", B: "2", C: "3", D: "4" },
          answer: "C",
          explanation: "Chained indexing: matrix[1] is the second inner list [3, 4], and [0] takes its first element -> 3. Read left to right: row 1, column 0.",
          code: "matrix = [[1, 2],\n          [3, 4]]\nprint(matrix[1][0])   # 3  (row 1, col 0)",
          related: ["Nested lists", "2D data"]
        },
        {
          difficulty: "easy",
          question: "How do you change the first item of nums = [10, 20, 30] to 99?",
          options: {
            A: "nums[0] = 99",
            B: "nums.change(0, 99)",
            C: "nums = 99",
            D: "You can't - lists are immutable"
          },
          answer: "A",
          explanation: "Lists ARE mutable - assign directly to an index: nums[0] = 99. (It's tuples and strings that can't be changed.)",
          code: "nums = [10, 20, 30]\nnums[0] = 99\nprint(nums)   # [99, 20, 30]",
          related: ["Mutability", "Indexing"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\na = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)",
          options: { A: "[1, 2, 3]", B: "[1, 2, 3, 4]", C: "[4]", D: "Error" },
          answer: "B",
          explanation: "b = a does NOT copy the list - both names point to the SAME list object. Appending through b changes the one shared list, so a shows [1, 2, 3, 4] too. To get an independent copy: b = a.copy() or b = a[:].",
          code: "a = [1, 2, 3]\nb = a            # same list, two names!\nb.append(4)\nprint(a)          # [1, 2, 3, 4]\n\nc = a.copy()      # independent copy\nc.append(5)\nprint(a)          # [1, 2, 3, 4] - unaffected",
          notes: ["One of the most important Python concepts - assignment never copies."],
          related: ["References", "copy()", "Aliasing"]
        },
        {
          difficulty: "medium",
          question: "Which of these creates an independent (shallow) COPY of list a?",
          options: {
            A: "b = a",
            B: "b = a.copy()  (or b = a[:])",
            C: "b = copy a",
            D: "b = a.clone()"
          },
          answer: "B",
          explanation: "a.copy(), a[:] and list(a) all create a new list with the same items. Plain b = a only creates a second name for the same list.",
          code: "b = a.copy()   # method\nb = a[:]        # full slice\nb = list(a)     # constructor - all equivalent",
          related: ["copy()", "Slicing", "References"]
        },
        {
          difficulty: "hard",
          question: "What is the difference in result?\na = [1, 2]; a.append([3, 4])\nversus\nb = [1, 2]; b.extend([3, 4])",
          options: {
            A: "Both give [1, 2, 3, 4]",
            B: "append gives [1, 2, [3, 4]] (nested); extend gives [1, 2, 3, 4] (flattened)",
            C: "extend gives [1, 2, [3, 4]]; append flattens",
            D: "Both give [1, 2, [3, 4]]"
          },
          answer: "B",
          explanation: "append() adds its argument as ONE item - even if it's a list, so you get a list inside a list. extend() unpacks the argument and adds each element individually.",
          code: "a = [1, 2]\na.append([3, 4])\nprint(a)   # [1, 2, [3, 4]] - length 3!\n\nb = [1, 2]\nb.extend([3, 4])\nprint(b)   # [1, 2, 3, 4] - length 4",
          related: ["append()", "extend()", "+= on lists"]
        },
        {
          difficulty: "easy",
          question: "What is the output of: print(3 in [1, 2, 3])",
          options: { A: "True", B: "False", C: "2", D: "Error" },
          answer: "A",
          explanation: "in tests membership: is 3 one of the list's items? Yes -> True. Works on lists, tuples, strings, sets and dict keys.",
          code: "print(3 in [1, 2, 3])       # True\nprint(5 not in [1, 2, 3])   # True",
          related: ["in operator", "Membership"]
        },
        {
          difficulty: "medium",
          question: "What does [10, 20, 30, 40][1:3] return?",
          options: { A: "[20, 30]", B: "[20, 30, 40]", C: "[10, 20, 30]", D: "[30, 40]" },
          answer: "A",
          explanation: "List slicing works exactly like string slicing: indexes 1 and 2 (stop 3 excluded) -> [20, 30]. Slices always return a NEW list.",
          code: "nums = [10, 20, 30, 40]\nprint(nums[1:3])    # [20, 30]\nprint(nums[:2])     # [10, 20]\nprint(nums[::-1])   # [40, 30, 20, 10]",
          related: ["Slicing"]
        },
        {
          difficulty: "easy",
          question: "What do max(), min() and sum() return for [4, 1, 7]?",
          options: {
            A: "7, 1 and 12",
            B: "7, 4 and 11",
            C: "1, 7 and 12",
            D: "Error - they need two arguments"
          },
          answer: "A",
          explanation: "These built-ins take a whole list: max is 7, min is 1, sum is 4+1+7 = 12. Average = sum(nums) / len(nums).",
          code: "nums = [4, 1, 7]\nprint(max(nums), min(nums), sum(nums))  # 7 1 12\nprint(sum(nums) / len(nums))             # 4.0 - average",
          related: ["Built-in functions", "Averages"]
        },
        {
          difficulty: "medium",
          question: "What does nums.index(20) return for nums = [10, 20, 30, 20]?",
          options: { A: "1 - the position of the FIRST 20", B: "[1, 3]", C: "3", D: "20" },
          answer: "A",
          explanation: ".index(value) returns the position of the first match only: 1. If the value isn't present it raises ValueError - check with in first.",
          code: "nums = [10, 20, 30, 20]\nprint(nums.index(20))    # 1\nprint(nums.count(20))    # 2 - counts ALL occurrences",
          related: ["index()", "count()"]
        },
        {
          difficulty: "easy",
          question: "Which line creates a TUPLE?",
          options: {
            A: "t = (1, 2, 3)",
            B: "t = [1, 2, 3]",
            C: "t = {1, 2, 3}",
            D: "t = tuple[1, 2, 3]"
          },
          answer: "A",
          explanation: "Parentheses create a tuple - an ordered collection like a list, but IMMUTABLE (cannot be changed after creation).",
          code: "point = (3, 5)\nprint(point[0])   # 3 - indexing works like lists",
          related: ["Tuples", "Immutability"]
        },
        {
          difficulty: "medium",
          question: "What happens?\nt = (1, 2, 3)\nt[0] = 99",
          options: {
            A: "t becomes (99, 2, 3)",
            B: "TypeError - tuples don't support item assignment",
            C: "t becomes (99,)",
            D: "Nothing"
          },
          answer: "B",
          explanation: "Tuples are immutable - no assigning, appending or removing after creation. If you need to modify it, convert to a list first or build a new tuple.",
          code: "t = (1, 2, 3)\n# t[0] = 99          # TypeError!\nt = (99,) + t[1:]    # build a new tuple\nprint(t)              # (99, 2, 3)",
          related: ["Immutability", "TypeError"]
        },
        {
          difficulty: "hard",
          question: "What is the type of x?\nx = (5)",
          options: {
            A: "tuple",
            B: "int - parentheses alone don't make a tuple; you need a comma: (5,)",
            C: "list",
            D: "str"
          },
          answer: "B",
          explanation: "(5) is just the number 5 in parentheses - like in math. A one-element tuple needs a trailing COMMA: (5,). The comma makes the tuple, not the parentheses!",
          code: "a = (5)\nprint(type(a))   # <class 'int'>\nb = (5,)\nprint(type(b))   # <class 'tuple'>",
          notes: ["A famous Python gotcha - remember: the comma makes the tuple."],
          related: ["Tuples", "Common gotchas"]
        },
        {
          difficulty: "medium",
          question: "What does tuple unpacking do here?\npoint = (3, 7)\nx, y = point",
          options: {
            A: "x = 3 and y = 7",
            B: "x = (3, 7) and y is undefined",
            C: "Error - tuples can't be split",
            D: "x = 7 and y = 3"
          },
          answer: "A",
          explanation: "Unpacking assigns each tuple element to a variable, position by position: x gets 3, y gets 7. The variable count must match the element count.",
          code: "point = (3, 7)\nx, y = point\nprint(x, y)   # 3 7",
          related: ["Unpacking", "Multiple assignment"]
        },
        {
          difficulty: "medium",
          question: "When should you prefer a TUPLE over a list?",
          options: {
            A: "For data that should never change - like coordinates, or dictionary keys",
            B: "When you need to add items later",
            C: "When sorting frequently",
            D: "Never - lists are always better"
          },
          answer: "A",
          explanation: "Use tuples for fixed collections: a point (x, y), an RGB color, a date triple. Being immutable makes them safe from accidental changes and usable as dict keys (lists can't be keys).",
          code: "locations = {(0, 0): \"origin\", (3, 5): \"target\"}  # tuple keys OK\n# {[0, 0]: \"x\"}   # TypeError - list keys not allowed",
          related: ["Immutability", "Dictionary keys"]
        },
        {
          difficulty: "easy",
          question: "What does list(\"abc\") return?",
          options: { A: "[\"abc\"]", B: "['a', 'b', 'c']", C: "(\"a\", \"b\", \"c\")", D: "Error" },
          answer: "B",
          explanation: "list() converts any iterable to a list - for a string, each CHARACTER becomes an item: ['a', 'b', 'c'].",
          code: "print(list(\"abc\"))       # ['a', 'b', 'c']\nprint(list(range(3)))     # [0, 1, 2]\nprint(list((1, 2)))       # [1, 2] - tuple to list",
          related: ["list()", "Type conversion"]
        },
        {
          difficulty: "medium",
          question: "What is the output of:\nnums = [1, 2, 3]\nnums.reverse()\nprint(nums)",
          options: { A: "[3, 2, 1]", B: "[1, 2, 3]", C: "None", D: "Error" },
          answer: "A",
          explanation: ".reverse() flips the list in place: [3, 2, 1]. Like sort(), it returns None - the change happens inside the original list.",
          code: "nums = [1, 2, 3]\nnums.reverse()\nprint(nums)         # [3, 2, 1]\n# nums[::-1] gives a reversed COPY instead",
          related: ["reverse()", "reversed()", "Slicing"]
        },
        {
          difficulty: "hard",
          question: "What is the output of: print([0] * 3 == [0, 0, 0])",
          options: { A: "True", B: "False", C: "[0, 0, 0]", D: "Error" },
          answer: "A",
          explanation: "[0] * 3 builds [0, 0, 0], and == on lists compares element by element - same length, same values -> True.",
          code: "print([0] * 3)              # [0, 0, 0]\ngrid = [[0] * 3 for _ in range(2)]  # safe 2D grid",
          notes: ["Careful: [[0]*3]*2 makes 2 references to the SAME row - use a comprehension for 2D grids."],
          related: ["Repetition", "List equality"]
        },
        {
          difficulty: "medium",
          question: "How do you delete the item at index 1 from nums = [10, 20, 30] using del?",
          options: { A: "del nums[1]", B: "nums.del(1)", C: "delete nums[1]", D: "nums - 20" },
          answer: "A",
          explanation: "The del statement removes by position: del nums[1] leaves [10, 30]. del can also delete slices (del nums[1:3]) or the whole variable (del nums).",
          code: "nums = [10, 20, 30]\ndel nums[1]\nprint(nums)   # [10, 30]",
          related: ["del", "pop()", "remove()"]
        }
      ]
    }
  ]
});
