/* ============================================================
   PYTHON - TOPIC 19: ADVANCED CONCEPTS (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "Python",
  icon: "🐍",
  color: "#3776ab",
  description: "Master Python from basics to advanced - 20 topics.",
  topics: [
    {
      name: "19. Advanced Concepts",
      questions: [
        {
          difficulty: "hard",
          question: "What is the GIL (Global Interpreter Lock)?",
          options: {
            A: "A lock that lets only ONE thread run Python bytecode at a time in CPython",
            B: "A security feature for imports",
            C: "A garbage collector",
            D: "A way to lock files"
          },
          answer: "A",
          explanation: "In CPython, the GIL ensures only one thread executes Python bytecode at once. This means threads don't give true parallelism for CPU-bound work - but they still help I/O-bound tasks (waiting on network/disk).",
          notes: ["For CPU-bound parallelism, use multiprocessing instead of threading."],
          related: ["Threading", "multiprocessing", "CPython"]
        },
        {
          difficulty: "hard",
          question: "For CPU-heavy work needing real parallelism, which should you use?",
          options: {
            A: "multiprocessing - separate processes each with their own interpreter, bypassing the GIL",
            B: "threading - always faster",
            C: "A bigger for loop",
            D: "asyncio"
          },
          answer: "A",
          explanation: "Because the GIL blocks parallel bytecode execution, threads can't speed up CPU-bound work. multiprocessing spawns separate processes (each with its own GIL) that run on multiple cores. asyncio and threading suit I/O-bound work.",
          related: ["multiprocessing", "GIL", "Parallelism"]
        },
        {
          difficulty: "hard",
          question: "What is the difference between a shallow copy and a deep copy?",
          options: {
            A: "Shallow copies the outer object but shares nested objects; deep copies everything recursively",
            B: "They are identical",
            C: "Deep copy is faster",
            D: "Shallow copy only works on strings"
          },
          answer: "A",
          explanation: "A shallow copy (list[:], .copy(), copy.copy) duplicates the top level but the inner objects are still shared. copy.deepcopy() recursively duplicates everything, so nested objects are independent too.",
          code: "import copy\na = [[1, 2], [3, 4]]\nb = a.copy()          # shallow\nb[0][0] = 99\nprint(a)               # [[99, 2], [3, 4]] - inner shared!\nc = copy.deepcopy(a)   # fully independent",
          related: ["copy module", "References"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\na = [[0, 0], [0, 0]]\nb = a[:]\nb[0][1] = 9\nprint(a[0][1])",
          options: {
            A: "9 - the slice is a shallow copy, so the inner lists are shared",
            B: "0 - b is fully independent",
            C: "None",
            D: "Error"
          },
          answer: "A",
          explanation: "a[:] copies only the outer list; both a and b point to the SAME inner lists. Modifying b[0][1] shows up in a. Use copy.deepcopy() for true independence of nested structures.",
          related: ["Shallow copy", "Nested lists"]
        },
        {
          difficulty: "medium",
          question: "What is the walrus operator := used for (Python 3.8+)?",
          options: {
            A: "Assign a value AND use it in the same expression",
            B: "Compare two values",
            C: "Multiply and assign",
            D: "Unpack a tuple"
          },
          answer: "A",
          explanation: "The walrus operator assigns within an expression, avoiding a separate line. Common in while loops and comprehensions where you'd otherwise compute a value twice.",
          code: "while (line := input()) != \"quit\":\n    print(line)\n\n# instead of:\n# line = input()\n# while line != 'quit': ... line = input()",
          related: ["Assignment expressions", "Python 3.8"]
        },
        {
          difficulty: "medium",
          question: "What does *rest capture here?\na, *rest = [1, 2, 3, 4]",
          options: {
            A: "a = 1 and rest = [2, 3, 4] - starred unpacking grabs the remaining items as a list",
            B: "a = [1, 2, 3, 4], rest = []",
            C: "a = 1, rest = 2",
            D: "Error"
          },
          answer: "A",
          explanation: "Extended unpacking: the starred name collects all leftover elements into a list. It can appear anywhere: first, *middle, last = [1,2,3,4] gives 1, [2,3], 4.",
          code: "a, *rest = [1, 2, 3, 4]\nprint(a, rest)          # 1 [2, 3, 4]\nfirst, *mid, last = [1, 2, 3, 4]\nprint(mid)               # [2, 3]",
          related: ["Extended unpacking", "*args"]
        },
        {
          difficulty: "hard",
          question: "What does the ** operator do here?\ncombined = {**dict1, **dict2}",
          options: {
            A: "Merges the two dicts into a new one; dict2's values win on key clashes",
            B: "Multiplies the dicts",
            C: "Raises dict1 to the power dict2",
            D: "Compares the dicts"
          },
          answer: "A",
          explanation: "** unpacks a dict's key-value pairs. Inside a new dict literal it merges them; later keys override earlier ones. Also used to pass a dict as keyword arguments: func(**kwargs).",
          code: "a = {\"x\": 1, \"y\": 2}\nb = {\"y\": 99, \"z\": 3}\nprint({**a, **b})   # {'x': 1, 'y': 99, 'z': 3}",
          related: ["Dict unpacking", "**kwargs"]
        },
        {
          difficulty: "medium",
          question: "What are type hints, and are they enforced at runtime?\ndef f(x: int) -> str:",
          options: {
            A: "Annotations documenting expected types; NOT enforced - tools like mypy check them, Python ignores them",
            B: "Strict runtime type checks",
            C: "Comments only",
            D: "Required in Python 3"
          },
          answer: "A",
          explanation: "Hints improve readability and let static checkers (mypy, IDEs) catch bugs before running. But Python itself doesn't enforce them: f(\"hello\") still runs. They're purely advisory at runtime.",
          code: "def greet(name: str) -> str:\n    return \"Hi \" + name\ngreet(123)   # runs (then crashes on +), hints not enforced",
          related: ["Type hints", "mypy", "typing module"]
        },
        {
          difficulty: "hard",
          question: "What does this type hint mean?\nfrom typing import Optional\ndef find(id: int) -> Optional[str]:",
          options: {
            A: "The function returns a str OR None",
            B: "The argument is optional",
            C: "The function might not exist",
            D: "It returns an optional number"
          },
          answer: "A",
          explanation: "Optional[str] means 'str or None' (shorthand for Union[str, None]). It signals a function that may return a value or nothing. In Python 3.10+ you can write str | None instead.",
          code: "def find_user(id: int) -> Optional[str]:\n    return names.get(id)   # str or None",
          related: ["Optional", "Union", "typing"]
        },
        {
          difficulty: "hard",
          question: "What is a context manager?",
          options: {
            A: "An object usable with 'with' that runs setup on entry and cleanup on exit (via __enter__/__exit__)",
            B: "A manager class for variables",
            C: "A type of decorator",
            D: "A threading tool"
          },
          answer: "A",
          explanation: "Context managers guarantee cleanup. 'with open(...) as f:' closes the file automatically, even on exceptions. You can build your own with __enter__/__exit__ or the @contextmanager decorator.",
          code: "from contextlib import contextmanager\n@contextmanager\ndef tag(name):\n    print(f\"<{name}>\")\n    yield\n    print(f\"</{name}>\")\nwith tag(\"b\"):\n    print(\"hi\")",
          related: ["with statement", "contextlib"]
        },
        {
          difficulty: "hard",
          question: "What is monkey patching?",
          options: {
            A: "Modifying or replacing a class/module's attributes at RUNTIME",
            B: "Fixing bugs with a debugger",
            C: "A testing framework",
            D: "Writing messy code"
          },
          answer: "A",
          explanation: "Monkey patching changes code dynamically at runtime - e.g. replacing a method on an existing class, often in tests to swap out slow/external calls. Powerful but risky; use sparingly.",
          code: "import time\ntime.sleep = lambda s: None   # patch away real sleeping in tests",
          related: ["Runtime modification", "Testing", "Mocking"]
        },
        {
          difficulty: "hard",
          question: "What does __slots__ do in a class?",
          options: {
            A: "Restricts instances to a fixed set of attributes, saving memory by removing the per-instance __dict__",
            B: "Creates database slots",
            C: "Adds time slots",
            D: "Makes the class abstract"
          },
          answer: "A",
          explanation: "Normally each instance stores attributes in a __dict__. __slots__ replaces it with a fixed layout: less memory per object (big when you have millions) and no new attributes allowed.",
          code: "class Point:\n    __slots__ = ('x', 'y')\n    def __init__(self, x, y):\n        self.x, self.y = x, y\np = Point(1, 2)\n# p.z = 3   # AttributeError - not in __slots__",
          related: ["Memory optimization", "__dict__"]
        },
        {
          difficulty: "medium",
          question: "What is an f-string's =  debug feature (Python 3.8+)?\nprint(f\"{x=}\")",
          options: {
            A: "Prints both the expression and its value: x=5",
            B: "Compares x to 5",
            C: "Assigns 5 to x",
            D: "Prints just the value"
          },
          answer: "A",
          explanation: "f\"{x=}\" expands to 'x=5' - it shows the variable name AND value. A quick debugging shortcut that saves typing the name twice.",
          code: "x = 5\nprint(f\"{x=}\")          # x=5\nprint(f\"{x * 2=}\")      # x * 2=10",
          related: ["f-strings", "Debugging"]
        },
        {
          difficulty: "hard",
          question: "What does @dataclass reduce boilerplate for?",
          options: {
            A: "Auto-generating __init__, __repr__, and __eq__ from declared fields",
            B: "Database connections",
            C: "File handling",
            D: "Threading"
          },
          answer: "A",
          explanation: "For classes that mainly hold data, @dataclass writes the constructor, a readable repr, and equality-by-fields for you. Declare the fields with type hints and you're done.",
          code: "from dataclasses import dataclass\n@dataclass\nclass Point:\n    x: int\n    y: int\nprint(Point(1, 2))   # Point(x=1, y=2)",
          related: ["dataclasses", "Boilerplate"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nfrom collections import defaultdict\nd = defaultdict(list)\nd[\"a\"].append(1)\nprint(d[\"a\"])",
          options: {
            A: "[1] - defaultdict auto-creates an empty list for a missing key",
            B: "KeyError",
            C: "None",
            D: "[]"
          },
          answer: "A",
          explanation: "defaultdict(list) makes missing keys spring into existence with a default (here, an empty list) instead of raising KeyError. Perfect for grouping items without checking 'if key in d' first.",
          code: "from collections import defaultdict\ngroups = defaultdict(list)\nfor name in [\"ana\", \"amy\", \"bob\"]:\n    groups[name[0]].append(name)   # group by first letter",
          related: ["defaultdict", "collections"]
        },
        {
          difficulty: "medium",
          question: "What does zip(*matrix) do to matrix = [[1, 2], [3, 4]]?",
          options: {
            A: "Transposes it: [(1, 3), (2, 4)] - rows become columns",
            B: "Flattens it",
            C: "Reverses it",
            D: "Sums the rows"
          },
          answer: "A",
          explanation: "zip(*matrix) unpacks the rows as arguments to zip, pairing up matching positions - effectively transposing the matrix. A neat one-liner.",
          code: "matrix = [[1, 2], [3, 4]]\nprint(list(zip(*matrix)))   # [(1, 3), (2, 4)]",
          related: ["zip()", "Unpacking", "Transpose"]
        },
        {
          difficulty: "hard",
          question: "What is the difference between is and == (recap for advanced code)?",
          options: {
            A: "== compares values; is checks whether two names point to the exact same object",
            B: "They are the same",
            C: "is compares values",
            D: "== only works on numbers"
          },
          answer: "A",
          explanation: "is tests identity (same memory object). == tests equality of value. Use is ONLY for None, True, False and sentinel objects. Comparing values with is can give surprising results due to caching.",
          code: "a = [1, 2]; b = [1, 2]\nprint(a == b)   # True - equal values\nprint(a is b)   # False - different objects",
          related: ["Identity", "Equality"]
        },
        {
          difficulty: "hard",
          question: "Why can small ints behave oddly with is?\na = 256; b = 256; print(a is b)  # True\na = 257; b = 257; print(a is b)  # often False",
          options: {
            A: "CPython caches small integers (-5 to 256), so identical small ints share one object; larger ones may not",
            B: "It's a bug",
            C: "256 is special in binary",
            D: "is never works on numbers"
          },
          answer: "A",
          explanation: "CPython pre-creates and reuses int objects from -5 to 256, so 'a is b' is True for those. Beyond that range, separate objects may be created. This is exactly why you compare numbers with ==, never is.",
          notes: ["An implementation detail - never rely on it in real code."],
          related: ["Integer caching", "is vs =="]
        },
        {
          difficulty: "medium",
          question: "What does enumerate(items, start=1) change?",
          options: {
            A: "Numbering begins at 1 instead of 0",
            B: "It starts from the second item",
            C: "It reverses the items",
            D: "Nothing"
          },
          answer: "A",
          explanation: "The start argument sets the first index. enumerate(items, 1) is handy for user-facing numbered lists that should begin at 1.",
          code: "for i, name in enumerate([\"a\", \"b\"], start=1):\n    print(i, name)   # 1 a / 2 b",
          related: ["enumerate()", "Indexing"]
        },
        {
          difficulty: "hard",
          question: "What is a generator's role in the memory-efficient processing of big data?",
          options: {
            A: "It yields items lazily, so pipelines process huge datasets without loading everything into memory",
            B: "It compresses the data",
            C: "It stores data on disk",
            D: "It runs on the GPU"
          },
          answer: "A",
          explanation: "Chaining generator expressions builds a lazy pipeline: each item flows through filters/transforms one at a time. You can process files far larger than RAM. (Full topic 17.)",
          code: "lines = (l.strip() for l in open(\"huge.log\"))\nerrors = (l for l in lines if \"ERROR\" in l)\nfor e in errors: ...   # constant memory",
          related: ["Generators", "Streaming"]
        },
        {
          difficulty: "hard",
          question: "What does functools.partial do?\nfrom functools import partial\nsquare = partial(pow, exp=2)",
          options: {
            A: "Creates a new function with some arguments pre-filled",
            B: "Splits a function in half",
            C: "Runs a function partially then pauses",
            D: "Caches results"
          },
          answer: "A",
          explanation: "partial(func, *fixed_args) 'freezes' some arguments, returning a simpler function. Useful for adapting a general function to a specific use, e.g. as a callback.",
          code: "from functools import partial\ncube = partial(pow, exp=3)\nprint(cube(2))   # 8",
          related: ["functools", "Currying"]
        },
        {
          difficulty: "medium",
          question: "What does the ternary/conditional expression evaluate to?\nx = a if condition else b",
          options: {
            A: "a when condition is True, otherwise b",
            B: "Always a",
            C: "A tuple (a, b)",
            D: "b when condition is True"
          },
          answer: "A",
          explanation: "This is Python's inline if-else expression. It returns one of two values based on the condition, all in one line - great for concise assignments.",
          code: "status = \"adult\" if age >= 18 else \"minor\"",
          related: ["Conditional expression", "Ternary"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nprint(list(zip([1, 2, 3], [\"a\", \"b\"])))",
          options: {
            A: "[(1, 'a'), (2, 'b')] - zip stops at the SHORTER iterable",
            B: "[(1, 'a'), (2, 'b'), (3, None)]",
            C: "Error - lengths differ",
            D: "[(1, 2, 3), ('a', 'b')]"
          },
          answer: "A",
          explanation: "zip pairs items until the shortest input runs out - the leftover 3 is dropped. Use itertools.zip_longest if you want to pad with a fill value instead.",
          code: "from itertools import zip_longest\nprint(list(zip_longest([1,2,3], [\"a\",\"b\"], fillvalue=\"?\")))\n# [(1,'a'), (2,'b'), (3,'?')]",
          related: ["zip()", "zip_longest"]
        },
        {
          difficulty: "hard",
          question: "What are *args and **kwargs at a CALL site (unpacking)?\nf(*my_list, **my_dict)",
          options: {
            A: "* spreads a list into positional arguments; ** spreads a dict into keyword arguments",
            B: "They multiply the arguments",
            C: "They create new lists",
            D: "They are only valid in definitions"
          },
          answer: "A",
          explanation: "At a call, * and ** unpack: f(*[1,2,3]) is f(1,2,3), and f(**{'a':1}) is f(a=1). The mirror image of collecting them with *args/**kwargs in a definition.",
          code: "def add(a, b, c): return a + b + c\nnums = [1, 2, 3]\nprint(add(*nums))   # 6",
          related: ["Unpacking", "*args", "**kwargs"]
        },
        {
          difficulty: "medium",
          question: "What does the else clause of a for loop do?\nfor x in items:\n    if x == target: break\nelse:\n    print(\"not found\")",
          options: {
            A: "Runs only if the loop finished WITHOUT hitting break",
            B: "Runs after every iteration",
            C: "Runs only when break happens",
            D: "Is a syntax error"
          },
          answer: "A",
          explanation: "for-else: the else block runs when the loop completes normally (no break). Ideal for search loops - if break never fired, the item wasn't found.",
          related: ["for-else", "Search pattern"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nx = 10\ndef f():\n    print(x)\n    x = 20\nf()",
          options: {
            A: "UnboundLocalError - assigning x anywhere makes it local for the whole function",
            B: "10",
            C: "20",
            D: "None"
          },
          answer: "A",
          explanation: "Because x is assigned inside f (x = 20), Python treats x as local throughout f - so print(x) references a local that hasn't been assigned yet. Fix with 'global x' or rename.",
          related: ["UnboundLocalError", "Scope", "LEGB"]
        },
        {
          difficulty: "medium",
          question: "What does any() with a generator do?\nany(x > 100 for x in nums)",
          options: {
            A: "Returns True if at least one item satisfies the condition, stopping early on the first True",
            B: "Returns all matching items",
            C: "Counts the matches",
            D: "Returns the largest item"
          },
          answer: "A",
          explanation: "any() short-circuits: it stops as soon as one truthy value appears - efficient even on huge/infinite generators. all() is the opposite: True only if every item passes.",
          code: "has_big = any(x > 100 for x in nums)\nall_positive = all(x > 0 for x in nums)",
          related: ["any()", "all()", "Short-circuit"]
        },
        {
          difficulty: "hard",
          question: "What is a metaclass, in one line?",
          options: {
            A: "The 'class of a class' - it controls how classes themselves are created (type is the default metaclass)",
            B: "A class with metadata",
            C: "A very large class",
            D: "An abstract base class"
          },
          answer: "A",
          explanation: "Just as objects are instances of classes, classes are instances of metaclasses. type is the default. Metaclasses customize class creation - a deep, rarely-needed feature (frameworks use them). 'If you wonder whether you need them, you don't.'",
          code: "class Meta(type): ...\nclass MyClass(metaclass=Meta): ...",
          related: ["Metaclasses", "type"]
        },
        {
          difficulty: "medium",
          question: "What does sorted(data, key=lambda x: x[1], reverse=True) do?",
          options: {
            A: "Sorts data by each item's second element, in descending order",
            B: "Sorts alphabetically",
            C: "Reverses without sorting",
            D: "Sorts by the first element ascending"
          },
          answer: "A",
          explanation: "key picks what to compare (element [1] of each item); reverse=True flips to descending. This is the standard way to sort tuples/dicts by a chosen field.",
          code: "pairs = [(\"a\", 3), (\"b\", 1)]\nprint(sorted(pairs, key=lambda x: x[1]))   # [('b', 1), ('a', 3)]",
          related: ["sorted()", "key functions", "lambda"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nprint([1, 2, 3] * 2)\nprint((1, 2) + (3,))",
          options: {
            A: "[1, 2, 3, 1, 2, 3] and (1, 2, 3)",
            B: "[2, 4, 6] and (4, 5)",
            C: "Error",
            D: "[1, 2, 3, 2] and (1, 5)"
          },
          answer: "A",
          explanation: "* repeats a sequence; + concatenates. Works on both lists and tuples: [1,2,3]*2 duplicates the list, and (1,2)+(3,) joins tuples (note the trailing comma makes (3,) a one-tuple).",
          related: ["Sequence operations", "Tuples"]
        }
      ]
    }
  ]
});
