/* ============================================================
   PYTHON - TOPIC 18: DECORATORS & CLOSURES (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "Python",
  icon: "🐍",
  color: "#3776ab",
  description: "Master Python from basics to advanced - 20 topics.",
  topics: [
    {
      name: "18. Decorators & Closures",
      questions: [
        {
          difficulty: "medium",
          question: "What is a nested function in Python?",
          options: {
            A: "A function defined inside another function",
            B: "A function that calls itself",
            C: "Two functions with the same name",
            D: "A function imported from another module"
          },
          answer: "A",
          explanation: "Python lets you define a function inside another. The inner function is created fresh each time the outer runs, and it can see the outer function's variables.",
          code: "def outer():\n    def inner():\n        print(\"inside\")\n    inner()\n\nouter()   # inside",
          related: ["Closures", "Scope"]
        },
        {
          difficulty: "hard",
          question: "What is a CLOSURE?",
          options: {
            A: "An inner function that remembers variables from its enclosing function, even after that function has finished",
            B: "A function that closes a file",
            C: "The end of a loop",
            D: "A private variable"
          },
          answer: "A",
          explanation: "When an inner function uses a variable from the outer function AND is returned, it keeps ('closes over') that variable alive - even after the outer function returns.",
          code: "def make_adder(n):\n    def add(x):\n        return x + n   # remembers n\n    return add\n\nadd5 = make_adder(5)\nprint(add5(10))   # 15 - n=5 is remembered",
          related: ["Nested functions", "Free variables"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\ndef outer():\n    x = 10\n    def inner():\n        return x\n    return inner\nf = outer()\nprint(f())",
          options: { A: "10", B: "None", C: "NameError - x is gone", D: "<function>" },
          answer: "A",
          explanation: "Even though outer() has finished, the returned inner function still remembers x=10 through the closure. Calling f() returns 10.",
          code: "f = outer()   # outer finishes, but x lives on in f\nprint(f())     # 10",
          related: ["Closures", "Variable lifetime"]
        },
        {
          difficulty: "hard",
          question: "Which keyword lets an inner function MODIFY a variable in the enclosing (outer) function?",
          options: { A: "nonlocal", B: "global", C: "outer", D: "enclosing" },
          answer: "A",
          explanation: "nonlocal targets the nearest enclosing function's variable (not the global one). Without it, assigning inside the inner function would create a new local instead.",
          code: "def counter():\n    count = 0\n    def inc():\n        nonlocal count\n        count += 1\n        return count\n    return inc\n\nc = counter()\nprint(c(), c(), c())   # 1 2 3",
          related: ["nonlocal", "global", "Closures"]
        },
        {
          difficulty: "medium",
          question: "Why can a function be passed as an argument to another function?",
          options: {
            A: "Functions are first-class objects - they can be stored in variables, passed around, and returned",
            B: "Because of a special decorator",
            C: "Only lambda functions can be passed",
            D: "They can't - only their results can"
          },
          answer: "A",
          explanation: "In Python, functions are objects like ints or strings. You can assign them (f = print), put them in lists, pass them as arguments (sorted(key=len)), and return them from other functions.",
          code: "def shout(t): return t.upper()\nfuncs = [shout, str.lower]\nprint(funcs[0](\"hi\"))   # HI",
          related: ["First-class functions", "Higher-order functions"]
        },
        {
          difficulty: "medium",
          question: "What is a higher-order function?",
          options: {
            A: "A function that takes another function as an argument and/or returns a function",
            B: "A function with many arguments",
            C: "A recursive function",
            D: "A function defined at the top of a file"
          },
          answer: "A",
          explanation: "Higher-order functions operate on other functions. Examples: map(), filter(), sorted(key=...), and any function that returns a function (like decorators).",
          code: "def apply_twice(f, x):\n    return f(f(x))\n\nprint(apply_twice(lambda n: n + 3, 10))   # 16",
          related: ["map()", "Decorators"]
        },
        {
          difficulty: "medium",
          question: "What does the @ symbol mean above a function definition?\n@timer\ndef slow(): ...",
          options: {
            A: "It applies a decorator - shorthand for slow = timer(slow)",
            B: "It's a comment",
            C: "It imports timer",
            D: "It makes slow private"
          },
          answer: "A",
          explanation: "@timer is syntactic sugar. It runs the decorator timer with slow as its argument and rebinds the name slow to the result. The two forms are identical.",
          code: "@timer\ndef slow(): ...\n# is exactly the same as:\ndef slow(): ...\nslow = timer(slow)",
          related: ["Decorator syntax", "Syntactic sugar"]
        },
        {
          difficulty: "hard",
          question: "What is a decorator?",
          options: {
            A: "A function that takes a function and returns a NEW function, usually adding behavior around it",
            B: "A comment style",
            C: "A type of loop",
            D: "A class attribute"
          },
          answer: "A",
          explanation: "A decorator wraps a function to add behavior (logging, timing, access checks) without changing the original function's code. It receives the function and returns a replacement.",
          code: "def logged(func):\n    def wrapper(*args, **kwargs):\n        print(f\"calling {func.__name__}\")\n        return func(*args, **kwargs)\n    return wrapper\n\n@logged\ndef greet(): print(\"hi\")",
          related: ["Closures", "Wrapping"]
        },
        {
          difficulty: "hard",
          question: "In a decorator's wrapper, why use *args and **kwargs?\ndef wrapper(*args, **kwargs):",
          options: {
            A: "So the wrapper can accept ANY arguments and pass them through to the wrapped function unchanged",
            B: "To make it faster",
            C: "They are required keywords for decorators",
            D: "To limit the function to two arguments"
          },
          answer: "A",
          explanation: "The decorator doesn't know what arguments the decorated function takes. *args/**kwargs let the wrapper accept everything and forward it: func(*args, **kwargs).",
          code: "def logged(func):\n    def wrapper(*args, **kwargs):\n        return func(*args, **kwargs)   # pass all through\n    return wrapper",
          related: ["*args", "**kwargs", "Decorators"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\ndef deco(f):\n    def wrapper():\n        print(\"before\")\n        f()\n        print(\"after\")\n    return wrapper\n@deco\ndef hello():\n    print(\"hello\")\nhello()",
          options: {
            A: "before / hello / after",
            B: "hello",
            C: "before / after",
            D: "hello / before / after"
          },
          answer: "A",
          explanation: "@deco replaces hello with wrapper. Calling hello() now runs wrapper: prints 'before', calls the original hello ('hello'), then 'after'.",
          code: "# output:\n# before\n# hello\n# after",
          related: ["Decorators", "Wrapping"]
        },
        {
          difficulty: "hard",
          question: "After @deco wraps hello(), what does hello.__name__ show WITHOUT functools.wraps?",
          options: {
            A: "'wrapper' - the wrapper's name replaces the original, losing metadata",
            B: "'hello' - the name is preserved automatically",
            C: "'deco'",
            D: "An empty string"
          },
          answer: "A",
          explanation: "The decorated name now points to wrapper, so its __name__, __doc__ etc. are the wrapper's. This confuses debuggers and docs. functools.wraps copies the original's metadata onto the wrapper.",
          code: "from functools import wraps\ndef deco(f):\n    @wraps(f)          # preserves f's name/doc\n    def wrapper(*a, **k):\n        return f(*a, **k)\n    return wrapper",
          related: ["functools.wraps", "Metadata"]
        },
        {
          difficulty: "hard",
          question: "What does functools.wraps do inside a decorator?",
          options: {
            A: "Copies the original function's name, docstring and metadata onto the wrapper",
            B: "Wraps the function in a try/except",
            C: "Makes the function run twice",
            D: "Caches the result"
          },
          answer: "A",
          explanation: "@wraps(func) on the wrapper preserves func.__name__, __doc__ and __module__, so tools and help() still see the real function's identity. Best practice in every decorator.",
          related: ["functools.wraps", "Best practices"]
        },
        {
          difficulty: "hard",
          question: "How can a decorator itself take arguments?\n@repeat(3)\ndef greet(): ...",
          options: {
            A: "You need THREE nested functions - the outer takes the argument and returns the actual decorator",
            B: "Decorators can't take arguments",
            C: "Use @repeat, 3",
            D: "Pass it to the wrapped function instead"
          },
          answer: "A",
          explanation: "@repeat(3) first CALLS repeat(3), which returns a decorator, which then wraps greet. That's three layers: repeat(n) -> decorator(func) -> wrapper(*args).",
          code: "def repeat(n):\n    def decorator(func):\n        def wrapper(*a, **k):\n            for _ in range(n):\n                func(*a, **k)\n        return wrapper\n    return decorator\n\n@repeat(3)\ndef hi(): print(\"hi\")   # prints hi 3 times",
          related: ["Parametrized decorators", "Nested functions"]
        },
        {
          difficulty: "medium",
          question: "Which is a common REAL use for decorators?",
          options: {
            A: "Logging, timing, caching, access control, retrying - cross-cutting concerns",
            B: "Declaring variables",
            C: "Importing modules",
            D: "Creating loops"
          },
          answer: "A",
          explanation: "Decorators shine for behavior you want around MANY functions without repeating it: @lru_cache (caching), Flask's @app.route (web routing), @staticmethod, timing, authentication.",
          related: ["Use cases", "DRY"]
        },
        {
          difficulty: "hard",
          question: "What does @functools.lru_cache do?",
          options: {
            A: "Caches a function's results so repeated calls with the same arguments return instantly",
            B: "Limits how many times a function runs",
            C: "Logs the function calls",
            D: "Clears memory"
          },
          answer: "A",
          explanation: "lru_cache memoizes: it stores results by arguments. A slow recursive fib() becomes fast because repeated subproblems are looked up, not recomputed. LRU = Least Recently Used eviction when the cache is full.",
          code: "from functools import lru_cache\n@lru_cache\ndef fib(n):\n    return n if n < 2 else fib(n-1) + fib(n-2)\nprint(fib(50))   # instant, not slow",
          related: ["Memoization", "Caching"]
        },
        {
          difficulty: "medium",
          question: "Can you stack multiple decorators on one function?\n@a\n@b\ndef f(): ...",
          options: {
            A: "Yes - they apply bottom-up: f = a(b(f))",
            B: "No, only one decorator per function",
            C: "Yes, but they apply top-down: f = b(a(f))",
            D: "Only if they take arguments"
          },
          answer: "A",
          explanation: "Decorators stack closest-first: b wraps f, then a wraps the result. Reading order matters - @a on top runs its 'before' code first at call time, but wraps last.",
          code: "@a\n@b\ndef f(): ...\n# equivalent to: f = a(b(f))",
          related: ["Decorator stacking", "Order"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\ndef make_multipliers():\n    return [lambda x: x * i for i in range(3)]\nprint([m(10) for m in make_multipliers()])",
          options: {
            A: "[20, 20, 20] - all lambdas share the SAME i, which ends at 2",
            B: "[0, 10, 20]",
            C: "[0, 20, 40]",
            D: "[10, 10, 10]"
          },
          answer: "A",
          explanation: "The lambdas close over the VARIABLE i, not its value at creation. By the time they run, the loop finished with i=2, so every lambda computes x*2 -> [20, 20, 20]. Classic closure trap.",
          code: "# Fix with a default argument to capture the value:\n[lambda x, i=i: x * i for i in range(3)]\n# -> [0, 10, 20]",
          notes: ["Same root cause as the setTimeout(var i) trap in JavaScript."],
          related: ["Late binding", "Closure traps"]
        },
        {
          difficulty: "hard",
          question: "How do you FIX late-binding so each lambda captures its own i?\n[lambda x: x * i for i in range(3)]",
          options: {
            A: "Add a default argument: [lambda x, i=i: x * i for i in range(3)]",
            B: "Use global i",
            C: "Remove the loop",
            D: "It cannot be fixed"
          },
          answer: "A",
          explanation: "Default arguments are evaluated at definition time, so i=i freezes the CURRENT value into each lambda. Now they give 0, 10, 20. (A factory function that takes i also works.)",
          code: "mults = [lambda x, i=i: x * i for i in range(3)]\nprint([m(10) for m in mults])   # [0, 10, 20]",
          related: ["Default arguments", "Late binding"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\ndef power(base):\n    def raise_to(exp):\n        return base ** exp\n    return raise_to\nsquare = power(2)\nprint(square(5))",
          options: { A: "32", B: "10", C: "25", D: "7" },
          answer: "A",
          explanation: "power(2) returns raise_to with base=2 remembered. square(5) computes 2 ** 5 = 32. A closure acting as a configurable function factory.",
          related: ["Closures", "Function factories"]
        },
        {
          difficulty: "medium",
          question: "How can you inspect the values a closure has captured?",
          options: {
            A: "func.__closure__ (each cell has .cell_contents)",
            B: "func.__vars__",
            C: "func.closure()",
            D: "You can't inspect them"
          },
          answer: "A",
          explanation: "The __closure__ attribute holds cell objects, one per captured variable, each exposing .cell_contents. Rarely needed, but proves closures really do store the values.",
          code: "def outer():\n    x = 42\n    return lambda: x\nf = outer()\nprint(f.__closure__[0].cell_contents)   # 42",
          related: ["__closure__", "Introspection"]
        },
        {
          difficulty: "medium",
          question: "Why might you prefer a CLOSURE over a full CLASS for simple state?",
          options: {
            A: "Less boilerplate when you only need one method plus some remembered state",
            B: "Closures are always faster",
            C: "Classes can't hold state",
            D: "Closures support inheritance"
          },
          answer: "A",
          explanation: "For a single behavior over some captured data (a counter, a multiplier, a validator), a closure is lighter than a class with __init__ and one method. For richer state/behavior, a class is clearer.",
          related: ["Closures vs classes", "Design"]
        },
        {
          difficulty: "hard",
          question: "A class-based decorator implements which method to make instances act as the wrapper?",
          options: { A: "__call__", B: "__wrap__", C: "__deco__", D: "__init__ only" },
          answer: "A",
          explanation: "The class stores the function in __init__ and defines __call__ so instances are callable. @MyDeco replaces the function with an instance; calling it runs __call__.",
          code: "class CountCalls:\n    def __init__(self, f):\n        self.f = f\n        self.n = 0\n    def __call__(self, *a, **k):\n        self.n += 1\n        return self.f(*a, **k)",
          related: ["__call__", "Class decorators"]
        },
        {
          difficulty: "medium",
          question: "What is the output ORDER?\n@deco\ndef f(): print(\"body\")\n# where deco prints 'decorating' at wrap time\nprint(\"---\")\nf()",
          options: {
            A: "decorating / --- / body (decorator runs at definition, before the call)",
            B: "--- / decorating / body",
            C: "body / decorating / ---",
            D: "--- / body"
          },
          answer: "A",
          explanation: "The decorator runs ONCE when the function is defined (that's when @deco is applied) - printing 'decorating' immediately. The wrapper body runs later, when f() is called.",
          related: ["Decoration time", "Call time"]
        },
        {
          difficulty: "hard",
          question: "Why does a decorator usually RETURN the wrapper function instead of calling it?",
          options: {
            A: "The decorator replaces the original name; it must return a callable to be called later, not the result of one call",
            B: "Returning is optional",
            C: "To save memory",
            D: "So the function runs immediately once"
          },
          answer: "A",
          explanation: "@deco sets f = deco(f). If deco returned wrapper() (a result) instead of wrapper (the function), then f would be that result, and calling f() would fail. Return the function object.",
          related: ["Decorators", "Common mistakes"]
        },
        {
          difficulty: "medium",
          question: "Which built-in decorators are common on class methods?",
          options: {
            A: "@property, @staticmethod, @classmethod",
            B: "@public, @private, @protected",
            C: "@method, @class, @object",
            D: "@get, @set, @delete"
          },
          answer: "A",
          explanation: "These three shape how methods work: @property exposes a method as an attribute, @staticmethod drops self, @classmethod passes cls. All are decorators applied above the method.",
          related: ["@property", "@staticmethod", "@classmethod"]
        },
        {
          difficulty: "hard",
          question: "What is memoization (as done by a caching decorator)?",
          options: {
            A: "Storing results of expensive calls and reusing them for repeated inputs",
            B: "Writing memos in comments",
            C: "Freeing memory automatically",
            D: "Running a function in memory only"
          },
          answer: "A",
          explanation: "Memoization trades memory for speed: a dict maps arguments to results, so a repeated call is a lookup, not a recomputation. A decorator is the clean way to add it. lru_cache does exactly this.",
          code: "def memoize(f):\n    cache = {}\n    def wrapper(n):\n        if n not in cache:\n            cache[n] = f(n)\n        return cache[n]\n    return wrapper",
          related: ["Caching", "lru_cache", "Dynamic programming"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\ndef tag(name):\n    def deco(f):\n        def wrapper():\n            return f\"<{name}>{f()}</{name}>\"\n        return wrapper\n    return deco\n@tag(\"b\")\ndef text():\n    return \"hi\"\nprint(text())",
          options: { A: "<b>hi</b>", B: "hi", C: "<b></b>", D: "<tag>hi</tag>" },
          answer: "A",
          explanation: "tag(\"b\") returns a decorator that wraps text(). Calling text() runs the wrapper: it calls the original (returning 'hi') and surrounds it with <b> tags -> '<b>hi</b>'. A parametrized decorator in action.",
          related: ["Parametrized decorators", "Tracing"]
        },
        {
          difficulty: "easy",
          question: "A lambda is best described as:",
          options: {
            A: "A small anonymous function limited to a single expression",
            B: "A named recursive function",
            C: "A class method",
            D: "A loop construct"
          },
          answer: "A",
          explanation: "lambda args: expression makes a one-line, unnamed function - handy inline where a short function is needed once, like a sort key. For anything longer, use def.",
          code: "add = lambda a, b: a + b\nprint(sorted(data, key=lambda x: x[1]))",
          related: ["Lambda", "Anonymous functions"]
        },
        {
          difficulty: "medium",
          question: "Why can't a lambda contain statements like if/for or assignments?",
          options: {
            A: "A lambda body must be a single EXPRESSION - use def for anything with statements",
            B: "Lambdas are too slow for them",
            C: "They can, with semicolons",
            D: "Only in Python 2"
          },
          answer: "A",
          explanation: "Lambdas are limited to one expression that becomes the return value. You can use a conditional EXPRESSION (a if c else b), but not statements. Reach for def when you need real logic.",
          code: "grade = lambda s: \"pass\" if s >= 50 else \"fail\"   # OK\n# lambda s: for i in s: ...   # SyntaxError",
          related: ["Lambda limits", "def"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\ncounter = 0\ndef make():\n    counter = 0\n    def inc():\n        nonlocal counter\n        counter += 1\n        return counter\n    return inc\na = make()\nb = make()\nprint(a(), a(), b())",
          options: {
            A: "1 2 1 - each closure has its OWN independent counter",
            B: "1 2 3 - they share one counter",
            C: "1 1 1",
            D: "Error"
          },
          answer: "A",
          explanation: "Each call to make() creates a fresh counter variable and a fresh inc closure over it. a and b are independent: a advances its own counter to 2, b's starts fresh at 1.",
          related: ["Closures", "Independent state"]
        }
      ]
    }
  ]
});
