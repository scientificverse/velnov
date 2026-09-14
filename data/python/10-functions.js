/* ============================================================
   PYTHON - TOPIC 10: FUNCTIONS (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "Python",
  icon: "🐍",
  color: "#3776ab",
  description: "Master Python from basics to advanced - 20 topics.",
  topics: [
    {
      name: "10. Functions",
      questions: [
        {
          difficulty: "easy",
          question: "Which is the correct way to define a function called greet?",
          options: {
            A: "def greet():",
            B: "function greet():",
            C: "define greet():",
            D: "greet() ="
          },
          answer: "A",
          explanation: "Functions are defined with the def keyword, the name, parentheses for parameters, and a colon. The body is indented below.",
          code: "def greet():\n    print(\"Hello!\")\n\ngreet()   # call it - Hello!",
          related: ["def", "Function calls"]
        },
        {
          difficulty: "easy",
          question: "What happens if you define a function but never CALL it?",
          options: {
            A: "Its body runs once automatically",
            B: "Nothing - the body only runs when the function is called",
            C: "SyntaxError",
            D: "It runs at the end of the program"
          },
          answer: "B",
          explanation: "def only CREATES the function. The body executes each time you call it with parentheses: greet(). Defining without calling produces no output.",
          code: "def greet():\n    print(\"Hi\")   # not printed yet!\n\ngreet()            # NOW it prints",
          related: ["def", "Calling"]
        },
        {
          difficulty: "easy",
          question: "What does a function return if it has no return statement?",
          options: { A: "0", B: "Empty string", C: "None", D: "Error" },
          answer: "C",
          explanation: "Every function returns something. Reaching the end without return (or a bare return) gives None.",
          code: "def greet(name):\n    print(f\"Hello {name}\")\n\nresult = greet(\"Ana\")   # prints Hello Ana\nprint(result)            # None",
          notes: ["print displays; return hands a value back - the classic beginner confusion."],
          related: ["None", "return"]
        },
        {
          difficulty: "easy",
          question: "What is the difference between print() and return in a function?",
          options: {
            A: "None - they do the same",
            B: "print shows a value on screen; return sends the value back to the caller for further use",
            C: "return shows on screen; print sends back",
            D: "return only works with numbers"
          },
          answer: "B",
          explanation: "print() is for humans (display only); return is for code - the caller receives the value and can store, compare or reuse it. A function that only prints can't have its result used in calculations.",
          code: "def add(a, b):\n    return a + b\n\ntotal = add(2, 3) * 10   # 50 - reusable!\n",
          related: ["return", "print()"]
        },
        {
          difficulty: "easy",
          question: "In def greet(name): ... and the call greet(\"Ana\") - what are name and \"Ana\" called?",
          options: {
            A: "name is the parameter; \"Ana\" is the argument",
            B: "name is the argument; \"Ana\" is the parameter",
            C: "Both are parameters",
            D: "Both are arguments"
          },
          answer: "A",
          explanation: "PARAMETER = the placeholder in the definition (name). ARGUMENT = the actual value passed when calling (\"Ana\"). Parameter is the parking spot, argument is the car.",
          related: ["Parameters", "Arguments"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\ndef greet(name=\"Guest\"):\n    print(\"Hello\", name)\ngreet()",
          options: { A: "Hello", B: "Hello Guest", C: "Error - missing argument", D: "Hello name" },
          answer: "B",
          explanation: "name=\"Guest\" is a DEFAULT argument - used when the caller doesn't supply one. greet() -> 'Hello Guest'; greet(\"Ana\") -> 'Hello Ana'.",
          code: "def greet(name=\"Guest\"):\n    print(\"Hello\", name)\n\ngreet()         # Hello Guest\ngreet(\"Ana\")   # Hello Ana",
          related: ["Default arguments"]
        },
        {
          difficulty: "medium",
          question: "What are keyword arguments in: book_ticket(seat=\"12A\", meal=\"veg\")?",
          options: {
            A: "Arguments passed by NAME, so order doesn't matter",
            B: "Arguments that must be strings",
            C: "Reserved Python keywords",
            D: "Arguments that can't have defaults"
          },
          answer: "A",
          explanation: "Passing name=value lets you give arguments in ANY order and makes calls self-documenting. book_ticket(meal=\"veg\", seat=\"12A\") works identically.",
          code: "def book(seat, meal):\n    print(seat, meal)\n\nbook(meal=\"veg\", seat=\"12A\")   # order-free",
          related: ["Keyword arguments", "Readability"]
        },
        {
          difficulty: "hard",
          question: "Which call is INVALID for def f(a, b)?",
          options: {
            A: "f(1, 2)",
            B: "f(a=1, b=2)",
            C: "f(1, b=2)",
            D: "f(a=1, 2)"
          },
          answer: "D",
          explanation: "Positional arguments must come BEFORE keyword arguments. f(a=1, 2) puts a positional after a keyword - SyntaxError: positional argument follows keyword argument.",
          code: "f(1, 2)       # ok - all positional\nf(1, b=2)     # ok - positional then keyword\n# f(a=1, 2)   # SyntaxError!",
          related: ["Argument order", "SyntaxError"]
        },
        {
          difficulty: "medium",
          question: "What is *args used for in a function definition?",
          options: {
            A: "To accept any number of positional arguments as a tuple",
            B: "To multiply arguments",
            C: "To pass arguments by reference",
            D: "To accept keyword arguments as a dict"
          },
          answer: "A",
          explanation: "*args collects extra positional arguments into a tuple, so the function accepts any count: total(1), total(1,2,3)... **kwargs does the same for keyword arguments (into a dict).",
          code: "def total(*args):\n    return sum(args)\n\nprint(total(1, 2, 3))   # 6\nprint(total(5))          # 5",
          related: ["*args", "**kwargs"]
        },
        {
          difficulty: "medium",
          question: "What does **kwargs collect in def config(**kwargs)?",
          options: {
            A: "Extra POSITIONAL arguments as a list",
            B: "Extra KEYWORD arguments as a dictionary",
            C: "Only two arguments",
            D: "Global variables"
          },
          answer: "B",
          explanation: "**kwargs gathers surplus name=value arguments into a dict: config(theme=\"dark\", size=12) gives kwargs = {'theme': 'dark', 'size': 12}.",
          code: "def config(**kwargs):\n    for key, value in kwargs.items():\n        print(key, \"=\", value)\n\nconfig(theme=\"dark\", size=12)",
          related: ["**kwargs", "Dictionaries"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\ndef stats(nums):\n    return min(nums), max(nums)\nlo, hi = stats([3, 8, 1])\nprint(lo, hi)",
          options: { A: "1 8", B: "3 8", C: "(1, 8)", D: "Error - can't return two values" },
          answer: "A",
          explanation: "Returning two values actually returns ONE tuple (1, 8), which unpacks into lo and hi. This is how Python 'returns multiple values'.",
          code: "def stats(nums):\n    return min(nums), max(nums)   # a tuple\n\nlo, hi = stats([3, 8, 1])\nprint(lo, hi)   # 1 8",
          related: ["Tuples", "Unpacking"]
        },
        {
          difficulty: "medium",
          question: "What is a lambda function?",
          options: {
            A: "A small anonymous one-expression function",
            B: "A function that runs in parallel",
            C: "A Greek module",
            D: "A function with no arguments"
          },
          answer: "A",
          explanation: "lambda arguments: expression creates a tiny unnamed function in one line. Best used inline where a short function is needed once - e.g. as a sort key.",
          code: "double = lambda x: x * 2\nprint(double(5))   # 10\n\n# same as:\ndef double(x):\n    return x * 2",
          related: ["lambda", "Anonymous functions"]
        },
        {
          difficulty: "hard",
          question: "What does the key argument do here?\nwords = [\"banana\", \"fig\", \"apple\"]\nprint(sorted(words, key=len))",
          options: {
            A: "['fig', 'apple', 'banana'] - sorts by word LENGTH",
            B: "['apple', 'banana', 'fig'] - alphabetical",
            C: "Removes short words",
            D: "Error"
          },
          answer: "A",
          explanation: "key tells sorted() what to compare - here each word's len(): 3, 5, 6 -> fig, apple, banana. Lambdas are common keys: sorted(students, key=lambda s: s[\"marks\"]).",
          code: "print(sorted(words, key=len))\n# ['fig', 'apple', 'banana']\n\nstudents = [{\"name\": \"Ana\", \"marks\": 92}, {\"name\": \"Ben\", \"marks\": 85}]\ntop = sorted(students, key=lambda s: s[\"marks\"], reverse=True)",
          related: ["sorted()", "lambda", "key functions"]
        },
        {
          difficulty: "medium",
          question: "What happens?\ndef f():\n    x = 10\nf()\nprint(x)",
          options: {
            A: "Prints 10",
            B: "NameError - x is local to f and doesn't exist outside",
            C: "Prints None",
            D: "Prints 0"
          },
          answer: "B",
          explanation: "Variables created inside a function are LOCAL - they exist only while the function runs and vanish afterwards. To get the value out, return it.",
          code: "def f():\n    x = 10\n    return x\n\nx = f()      # bring it out via return\nprint(x)      # 10",
          related: ["Local scope", "NameError"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nx = 5\ndef show():\n    print(x)\nshow()",
          options: { A: "5 - functions can READ global variables", B: "NameError", C: "None", D: "0" },
          answer: "A",
          explanation: "Functions can freely READ globals (Python looks outward: Local -> Enclosing -> Global -> Built-in, the LEGB rule). Only ASSIGNING to them requires the global keyword.",
          code: "x = 5\ndef show():\n    print(x)   # reading global - fine\nshow()          # 5",
          related: ["LEGB rule", "global"]
        },
        {
          difficulty: "hard",
          question: "Why does this raise UnboundLocalError?\ncount = 0\ndef inc():\n    count = count + 1\ninc()",
          options: {
            A: "count doesn't exist at all",
            B: "The assignment makes count LOCAL for the whole function, so 'count + 1' reads a local that has no value yet",
            C: "Functions can't use numbers",
            D: "inc needs a parameter"
          },
          answer: "B",
          explanation: "Because the function ASSIGNS to count, Python treats count as local everywhere in the function - including the right-hand side, where it hasn't been given a value yet. Fix: declare 'global count', or better, pass it in and return the new value.",
          code: "count = 0\ndef inc():\n    global count\n    count += 1     # now legal\n\n# better style:\ndef inc(count):\n    return count + 1",
          related: ["UnboundLocalError", "global", "Scope"]
        },
        {
          difficulty: "hard",
          question: "THE classic Python trap - what is the output?\ndef add(item, lst=[]):\n    lst.append(item)\n    return lst\nprint(add(1))\nprint(add(2))",
          options: {
            A: "[1] then [2]",
            B: "[1] then [1, 2] - the SAME default list is reused between calls",
            C: "[1, 2] then [1, 2]",
            D: "Error"
          },
          answer: "B",
          explanation: "Default values are created ONCE, at function definition - not per call. Every call without lst shares the same list, which keeps growing. Fix: default to None and create the list inside.",
          code: "def add(item, lst=None):\n    if lst is None:\n        lst = []       # fresh list per call\n    lst.append(item)\n    return lst",
          notes: ["Asked in countless interviews - the 'mutable default argument' trap."],
          related: ["Default arguments", "Mutability", "Interview traps"]
        },
        {
          difficulty: "easy",
          question: "What does return do the moment it executes?",
          options: {
            A: "Pauses the function",
            B: "Immediately EXITS the function, handing back the value - remaining lines don't run",
            C: "Prints the value",
            D: "Restarts the function"
          },
          answer: "B",
          explanation: "return ends the function on the spot. Code after an executed return is unreachable. Multiple returns are fine - typically one per branch.",
          code: "def check(n):\n    if n < 0:\n        return \"negative\"   # exits here for negatives\n    return \"positive\"\n    print(\"never runs\")",
          related: ["return", "Early return"]
        },
        {
          difficulty: "medium",
          question: "def f(a, b): ... What happens when you call f(1)?",
          options: {
            A: "b becomes None",
            B: "b becomes 0",
            C: "TypeError: f() missing 1 required positional argument: 'b'",
            D: "Runs with a=1 only"
          },
          answer: "C",
          explanation: "Parameters without defaults are REQUIRED. Calling with too few (or too many) arguments raises TypeError with a helpful message naming the missing parameter.",
          code: "def f(a, b):\n    return a + b\n# f(1)         # TypeError\nf(1, 2)        # 3",
          related: ["TypeError", "Required arguments"]
        },
        {
          difficulty: "hard",
          question: "Which definition is INVALID?",
          options: {
            A: "def f(a, b=2):",
            B: "def f(a=1, b):",
            C: "def f(a, b=2, c=3):",
            D: "def f(*args, **kwargs):"
          },
          answer: "B",
          explanation: "Parameters WITH defaults must come AFTER those without: def f(a=1, b): is a SyntaxError - Python couldn't tell which argument f(5) fills. Required first, optional after.",
          code: "def f(a, b=2):     # correct order\n# def f(a=1, b):   # SyntaxError!",
          related: ["Default arguments", "Parameter order"]
        },
        {
          difficulty: "medium",
          question: "What is recursion?",
          options: {
            A: "A function that calls ITSELF, with a base case to stop",
            B: "A loop inside a function",
            C: "Calling two functions at once",
            D: "A function without a return"
          },
          answer: "A",
          explanation: "A recursive function solves a problem by calling itself on a smaller piece, stopping at a base case. Classic example: factorial(n) = n * factorial(n-1), stopping at factorial(0) = 1.",
          code: "def factorial(n):\n    if n == 0:          # base case\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))   # 120",
          related: ["Recursion", "Base case"]
        },
        {
          difficulty: "hard",
          question: "What happens to a recursive function with NO base case?",
          options: {
            A: "It runs forever silently",
            B: "RecursionError: maximum recursion depth exceeded",
            C: "It returns None",
            D: "SyntaxError at definition"
          },
          answer: "B",
          explanation: "Each call stacks up; without a stopping condition Python hits its recursion limit (about 1000 calls) and raises RecursionError - its protection against a true infinite recursion crash.",
          code: "def broken(n):\n    return broken(n - 1)   # no base case!\n# broken(5)   # RecursionError",
          related: ["RecursionError", "Call stack"]
        },
        {
          difficulty: "medium",
          question: "What is the output of factorial(3) using:\ndef factorial(n):\n    if n <= 1: return 1\n    return n * factorial(n - 1)",
          options: { A: "3", B: "6", C: "9", D: "1" },
          answer: "B",
          explanation: "Trace it: factorial(3) = 3 * factorial(2) = 3 * 2 * factorial(1) = 3 * 2 * 1 = 6.",
          related: ["Recursion", "Tracing"]
        },
        {
          difficulty: "medium",
          question: "What are the type hints in: def add(a: int, b: int) -> int:",
          options: {
            A: "Optional annotations documenting expected types - not enforced at runtime",
            B: "Strict type checks that raise errors on wrong types",
            C: "Comments",
            D: "Required in Python 3"
          },
          answer: "A",
          explanation: "Hints document intent and let tools (IDEs, mypy) catch type mistakes - but Python itself ignores them at runtime: add(\"a\", \"b\") still runs. -> int hints the return type.",
          code: "def add(a: int, b: int) -> int:\n    return a + b\n\nadd(\"x\", \"y\")   # runs! returns 'xy' - hints not enforced",
          related: ["Type hints", "mypy"]
        },
        {
          difficulty: "easy",
          question: "By PEP 8 convention, function names should be written as:",
          options: {
            A: "snake_case: calculate_total()",
            B: "CamelCase: CalculateTotal()",
            C: "ALLCAPS: CALCULATETOTAL()",
            D: "kebab-case: calculate-total()"
          },
          answer: "A",
          explanation: "Functions and variables use snake_case; CamelCase is reserved for class names; ALL_CAPS for constants. (kebab-case is illegal - hyphens mean subtraction.)",
          related: ["PEP 8", "Naming conventions"]
        },
        {
          difficulty: "hard",
          question: "What does this show?\ndef shout(text): return text.upper()\nf = shout\nprint(f(\"hi\"))",
          options: {
            A: "HI - functions are objects that can be assigned to variables",
            B: "Error - functions can't be assigned",
            C: "hi",
            D: "shout"
          },
          answer: "A",
          explanation: "Functions are first-class objects: assign them, store them in lists, pass them to other functions. f = shout (NO parentheses) makes f another name for the same function; f(\"hi\") calls it.",
          code: "f = shout        # no () - the function itself\nprint(f(\"hi\"))  # HI\nops = [shout, str.lower]  # functions in a list!",
          notes: ["shout() with parentheses would CALL it; without, you refer to it."],
          related: ["First-class functions", "Callbacks"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\ndef apply(func, value):\n    return func(value)\nprint(apply(len, \"hello\"))",
          options: { A: "5", B: "hello", C: "len", D: "Error" },
          answer: "A",
          explanation: "apply receives the len function itself and calls it on \"hello\" -> 5. Passing functions as arguments is the foundation of callbacks, map(), sorted(key=...), and decorators.",
          code: "def apply(func, value):\n    return func(value)\n\nprint(apply(len, \"hello\"))       # 5\nprint(apply(str.upper, \"hi\"))    # HI",
          related: ["Higher-order functions", "Callbacks"]
        },
        {
          difficulty: "medium",
          question: "How do you read a function's docstring?",
          options: {
            A: "help(func) or func.__doc__",
            B: "func.doc()",
            C: "docstring(func)",
            D: "You can't after definition"
          },
          answer: "A",
          explanation: "The triple-quoted string right under def is stored in func.__doc__ and shown by help(func). Good docstrings say what the function does, its parameters and return value.",
          code: "def area(r):\n    \"\"\"Return the area of a circle with radius r.\"\"\"\n    return 3.14159 * r * r\n\nprint(area.__doc__)\nhelp(area)",
          related: ["Docstrings", "help()"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\ndef outer():\n    def inner():\n        return \"hi\"\n    return inner()\nprint(outer())",
          options: { A: "hi", B: "inner", C: "Error - functions can't nest", D: "None" },
          answer: "A",
          explanation: "Functions can be defined INSIDE other functions. outer defines inner, calls it (note the parentheses in 'return inner()'), and returns its result: 'hi'. Returning inner WITHOUT parentheses would return the function itself - that's how closures work (next topics!).",
          code: "def outer():\n    def inner():\n        return \"hi\"\n    return inner()   # calls inner, returns 'hi'\n\nprint(outer())        # hi",
          related: ["Nested functions", "Closures"]
        },
        {
          difficulty: "easy",
          question: "Why split a program into functions at all?",
          options: {
            A: "Reuse, readability, easier testing, and no copy-pasted code",
            B: "Functions make programs run faster automatically",
            C: "Python requires at least 5 functions",
            D: "Only to use return"
          },
          answer: "A",
          explanation: "Functions package logic behind a name: write once, call anywhere, test in isolation, and read programs as a story of well-named steps. The DRY principle: Don't Repeat Yourself.",
          related: ["DRY principle", "Code organization"]
        }
      ]
    }
  ]
});
