/* ============================================================
   PYTHON - TOPIC 16: MAGIC METHODS & ADVANCED OOP (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "Python",
  icon: "🐍",
  color: "#3776ab",
  description: "Master Python from basics to advanced - 20 topics.",
  topics: [
    {
      name: "16. Magic Methods & Advanced OOP",
      questions: [
        {
          difficulty: "easy",
          question: "What are 'magic methods' (dunder methods)?",
          options: {
            A: "Methods with double underscores (__str__, __len__...) that hook your class into Python's built-in behavior",
            B: "Methods that run magically fast",
            C: "Hidden methods you can't call",
            D: "Deprecated Python 2 methods"
          },
          answer: "A",
          explanation: "'Dunder' = Double UNDERscore. Python calls them automatically: print(obj) calls __str__, len(obj) calls __len__, a + b calls __add__. Define them to make your objects behave like built-ins.",
          related: ["Dunder methods", "Protocols"]
        },
        {
          difficulty: "easy",
          question: "Which method controls what print(obj) displays?",
          options: { A: "__str__", B: "__print__", C: "__show__", D: "__display__" },
          answer: "A",
          explanation: "__str__ returns the human-readable text for your object - used by print(), str() and f-strings. Without it you get the ugly <__main__.X object at 0x...>.",
          code: "class Book:\n    def __init__(self, title):\n        self.title = title\n    def __str__(self):\n        return f\"Book: {self.title}\"\n\nprint(Book(\"Dune\"))   # Book: Dune",
          related: ["__str__", "print()"]
        },
        {
          difficulty: "hard",
          question: "What is the difference between __str__ and __repr__?",
          options: {
            A: "__str__ is the friendly display for users; __repr__ is the unambiguous version for developers/debugging (shown in the REPL and inside lists)",
            B: "They are interchangeable aliases",
            C: "__repr__ repeats the string twice",
            D: "__str__ is Python 2 only"
          },
          answer: "A",
          explanation: "print(obj) uses __str__; typing obj in the shell, or printing a LIST of objects, uses __repr__. Convention: __repr__ looks like the code to recreate the object: Book('Dune'). If you define only one, define __repr__ - str falls back to it.",
          code: "class Book:\n    def __repr__(self):\n        return f\"Book({self.title!r})\"\n\nbooks = [Book(\"Dune\")]\nprint(books)   # [Book('Dune')] - repr used inside lists!",
          related: ["__repr__", "Debugging"]
        },
        {
          difficulty: "medium",
          question: "Which method makes len(obj) work for your class?",
          options: { A: "__len__", B: "__size__", C: "__count__", D: "length()" },
          answer: "A",
          explanation: "len(cart) simply calls cart.__len__(). Return an integer - typically the length of an internal collection.",
          code: "class Cart:\n    def __init__(self):\n        self.items = []\n    def __len__(self):\n        return len(self.items)\n\nprint(len(Cart()))   # 0",
          related: ["__len__", "Protocols"]
        },
        {
          difficulty: "medium",
          question: "Which method makes == compare your objects by CONTENT?",
          options: { A: "__eq__", B: "__equals__", C: "__compare__", D: "__is__" },
          answer: "A",
          explanation: "a == b calls a.__eq__(b). Without it, == falls back to identity (same object?). Define it to compare data instead.",
          code: "class Point:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n    def __eq__(self, other):\n        return self.x == other.x and self.y == other.y\n\nprint(Point(1, 2) == Point(1, 2))   # True",
          related: ["__eq__", "Equality"]
        },
        {
          difficulty: "medium",
          question: "Which method lets you write v1 + v2 for your own Vector class?",
          options: { A: "__add__", B: "__plus__", C: "__sum__", D: "add()" },
          answer: "A",
          explanation: "v1 + v2 calls v1.__add__(v2) - operator overloading. Return a NEW object with the combined values. Siblings: __sub__ (-), __mul__ (*), __truediv__ (/).",
          code: "class Vector:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n\nv = Vector(1, 2) + Vector(3, 4)\nprint(v.x, v.y)   # 4 6",
          related: ["Operator overloading", "__add__"]
        },
        {
          difficulty: "hard",
          question: "What does defining __lt__ (less-than) unlock for your class?",
          options: {
            A: "The < operator AND sorting: sorted() can order your objects",
            B: "Only printing",
            C: "Nothing without __gt__ too",
            D: "Subtraction"
          },
          answer: "A",
          explanation: "sorted() compares elements with < - so one __lt__ makes lists of your objects sortable. (functools.total_ordering can derive the other comparisons from __lt__ + __eq__.)",
          code: "class Student:\n    def __init__(self, marks):\n        self.marks = marks\n    def __lt__(self, other):\n        return self.marks < other.marks\n\nprint(sorted([Student(90), Student(70)])[0].marks)  # 70",
          related: ["__lt__", "sorted()", "total_ordering"]
        },
        {
          difficulty: "medium",
          question: "Which method makes square brackets work: playlist[0]?",
          options: { A: "__getitem__", B: "__index__", C: "__bracket__", D: "__at__" },
          answer: "A",
          explanation: "obj[key] calls obj.__getitem__(key). Bonus: defining it also enables for-loops and 'in' over your object (Python iterates by index automatically).",
          code: "class Playlist:\n    def __init__(self, songs):\n        self.songs = songs\n    def __getitem__(self, i):\n        return self.songs[i]\n\np = Playlist([\"a\", \"b\"])\nprint(p[1])          # b\nfor song in p: ...    # even iteration works!",
          related: ["__getitem__", "Indexing"]
        },
        {
          difficulty: "medium",
          question: "Which method powers 'x in obj'?",
          options: { A: "__contains__", B: "__in__", C: "__has__", D: "__member__" },
          answer: "A",
          explanation: "'song in playlist' calls playlist.__contains__(song). Without it Python falls back to iterating and comparing - __contains__ lets you do it smarter/faster.",
          code: "class Playlist:\n    def __contains__(self, song):\n        return song in self.songs",
          related: ["__contains__", "in operator"]
        },
        {
          difficulty: "hard",
          question: "What does __call__ do?\nclass Greeter:\n    def __call__(self, name):\n        return f\"Hi {name}\"\ng = Greeter()\nprint(g(\"Ana\"))",
          options: {
            A: "Makes INSTANCES callable like functions - g(\"Ana\") works, printing Hi Ana",
            B: "Calls the constructor again",
            C: "It's an error - objects can't be called",
            D: "Renames the object"
          },
          answer: "A",
          explanation: "__call__ turns objects into function-like things: g(\"Ana\") runs g.__call__(\"Ana\"). Useful for objects that act like configurable functions (and it's how decorator classes work).",
          related: ["__call__", "Callables"]
        },
        {
          difficulty: "medium",
          question: "What does a SINGLE leading underscore mean: self._balance?",
          options: {
            A: "A convention: 'internal - please don't touch from outside' (not enforced)",
            B: "Truly private - Python blocks access",
            C: "A syntax error",
            D: "The attribute is constant"
          },
          answer: "A",
          explanation: "_name is a gentleman's agreement - the language doesn't stop anyone, but tools and developers treat it as private API. Python's philosophy: 'we're all consenting adults'.",
          code: "class Account:\n    def __init__(self):\n        self._balance = 0   # internal by convention",
          related: ["Encapsulation", "Conventions"]
        },
        {
          difficulty: "hard",
          question: "What does a DOUBLE leading underscore do: self.__secret?",
          options: {
            A: "Name mangling - Python renames it to _ClassName__secret, making accidental outside access harder",
            B: "Makes it 100% inaccessible",
            C: "Deletes it after __init__",
            D: "Nothing different from one underscore"
          },
          answer: "A",
          explanation: "__secret becomes _Account__secret internally - obj.__secret fails with AttributeError, though obj._Account__secret still works (so it's tamper-resistant, not secure). Main real use: avoiding name clashes in subclasses.",
          code: "class Account:\n    def __init__(self):\n        self.__pin = 1234\n\na = Account()\n# a.__pin              # AttributeError\nprint(a._Account__pin)  # 1234 - mangled name",
          related: ["Name mangling", "Encapsulation"]
        },
        {
          difficulty: "hard",
          question: "What does @property do?\nclass Circle:\n    @property\n    def area(self):\n        return 3.14 * self.r ** 2",
          options: {
            A: "Lets you access area WITHOUT parentheses - c.area - computed fresh each time like an attribute",
            B: "Caches the value forever",
            C: "Makes area static",
            D: "Prints the area"
          },
          answer: "A",
          explanation: "@property turns a method into a computed attribute: c.area (no parentheses!) runs the method. The Pythonic replacement for Java-style get_area() - callers see a simple attribute, you keep the logic.",
          code: "c = Circle()\nc.r = 2\nprint(c.area)    # 12.56 - no () needed",
          related: ["@property", "Getters"]
        },
        {
          difficulty: "hard",
          question: "How do you add validation when SETTING obj.age = value?",
          options: {
            A: "Define @property for age plus an @age.setter method that checks the value before storing",
            B: "Python can't intercept assignment",
            C: "Override __init__ only",
            D: "Use a global validator"
          },
          answer: "A",
          explanation: "The property/setter pair intercepts both read and write. Assignment (p.age = -5) runs the setter, which can validate and raise. Callers still use plain attribute syntax.",
          code: "class Person:\n    @property\n    def age(self):\n        return self._age\n    @age.setter\n    def age(self, value):\n        if value < 0:\n            raise ValueError(\"age can't be negative\")\n        self._age = value",
          related: ["Setters", "Validation"]
        },
        {
          difficulty: "medium",
          question: "What is a @staticmethod?",
          options: {
            A: "A method that gets NO automatic self/cls - a plain function stored in the class for organization",
            B: "A method that can't be changed",
            C: "A method shared with other classes",
            D: "A method that runs at import"
          },
          answer: "A",
          explanation: "Static methods neither read nor modify instance/class state - they just belong logically to the class. Call via the class or an instance: MathUtils.add(2, 3).",
          code: "class MathUtils:\n    @staticmethod\n    def add(a, b):        # no self!\n        return a + b\n\nprint(MathUtils.add(2, 3))   # 5",
          related: ["@staticmethod"]
        },
        {
          difficulty: "hard",
          question: "What does @classmethod receive instead of self?",
          options: {
            A: "cls - the CLASS itself, so it can read class attributes or build instances",
            B: "Nothing at all",
            C: "A copy of every instance",
            D: "The parent class"
          },
          answer: "A",
          explanation: "Class methods get the class as their first argument (named cls). Their killer use: ALTERNATIVE CONSTRUCTORS - building instances from different input formats.",
          code: "class Date:\n    def __init__(self, d, m, y):\n        self.d, self.m, self.y = d, m, y\n    @classmethod\n    def from_string(cls, text):     # 'Date' arrives as cls\n        d, m, y = map(int, text.split(\"-\"))\n        return cls(d, m, y)          # builds the instance\n\ndate = Date.from_string(\"03-07-2026\")",
          related: ["@classmethod", "Alternative constructors"]
        },
        {
          difficulty: "hard",
          question: "staticmethod vs classmethod vs normal method - which first argument does each receive?",
          options: {
            A: "normal: self (the instance); classmethod: cls (the class); staticmethod: nothing automatic",
            B: "All three receive self",
            C: "normal: cls; classmethod: self; staticmethod: both",
            D: "They're interchangeable"
          },
          answer: "A",
          explanation: "The rule of thumb: needs instance data -> normal method. Needs the class (attributes, alternative constructor) -> classmethod. Needs neither but belongs thematically -> staticmethod.",
          related: ["Method types", "Choosing"]
        },
        {
          difficulty: "hard",
          question: "What is the true division of labor between __new__ and __init__?",
          options: {
            A: "__new__ CREATES the object; __init__ then INITIALIZES the already-created object",
            B: "__init__ creates, __new__ initializes",
            C: "They are aliases",
            D: "__new__ is Python 2 only"
          },
          answer: "A",
          explanation: "Calling Dog() first runs __new__ (allocates the instance) then __init__ (fills in attributes). You almost never touch __new__ - exceptions: immutable subclasses and singletons. Strictly, __init__ is an initializer, not a constructor.",
          related: ["__new__", "Object creation"]
        },
        {
          difficulty: "medium",
          question: "Which method decides your object's truthiness in 'if obj:'?",
          options: {
            A: "__bool__ (falling back to __len__ != 0 if absent)",
            B: "__true__",
            C: "__if__",
            D: "Objects are always False"
          },
          answer: "A",
          explanation: "if cart: calls cart.__bool__() - or, if undefined, treats the object as truthy unless __len__ returns 0. That's why empty custom containers naturally read as falsy once __len__ exists.",
          code: "class Cart:\n    def __init__(self):\n        self.items = []\n    def __len__(self):\n        return len(self.items)\n\nif not Cart():\n    print(\"empty cart\")   # prints!",
          related: ["__bool__", "Truthiness"]
        },
        {
          difficulty: "medium",
          question: "Why is c.area (a @property) better Python style than c.get_area()?",
          options: {
            A: "Attribute syntax is cleaner, and you can start as a plain attribute and add logic later WITHOUT breaking callers",
            B: "get_ methods are illegal",
            C: "Properties are faster",
            D: "No reason - Java style is preferred"
          },
          answer: "A",
          explanation: "In Java you write getters defensively from day one. Python lets you expose a plain attribute now and transparently swap in a @property later - same c.area syntax for callers. So write simple attributes first; add properties only when logic is needed.",
          related: ["@property", "API design"]
        },
        {
          difficulty: "easy",
          question: "str(obj) and f\"{obj}\" both call which method?",
          options: { A: "__str__", B: "__format__ only", C: "__text__", D: "__value__" },
          answer: "A",
          explanation: "str(), print() and f-string interpolation all route through __str__ (f-strings via __format__, which defaults to __str__). One method, consistent display everywhere.",
          related: ["__str__", "f-strings"]
        },
        {
          difficulty: "hard",
          question: "print([Book(\"Dune\")]) shows <Book object at 0x...> even though Book defines __str__. Why?",
          options: {
            A: "Containers display their items using __repr__, not __str__ - define __repr__ too",
            B: "Lists erase methods",
            C: "__str__ has a typo",
            D: "print can't handle lists"
          },
          answer: "A",
          explanation: "A list's own str() calls repr() on every element - by design, to show unambiguous contents. This surprise is the #1 reason to always define __repr__ on your classes.",
          code: "class Book:\n    def __repr__(self):\n        return f\"Book({self.title!r})\"\nprint([Book(\"Dune\")])   # [Book('Dune')]",
          related: ["__repr__", "Containers"]
        },
        {
          difficulty: "medium",
          question: "Does Python have truly PRIVATE attributes like Java's private keyword?",
          options: {
            A: "No - only conventions (_x) and name mangling (__x); everything remains reachable",
            B: "Yes - the private keyword",
            C: "Yes - via @private",
            D: "Only in classes marked sealed"
          },
          answer: "A",
          explanation: "Python chose openness: nothing is enforced-private. _x says 'don't', __x adds mangling, but a determined caller can reach anything. Discipline over locks.",
          related: ["Encapsulation philosophy"]
        },
        {
          difficulty: "medium",
          question: "Trace:\nclass Money:\n    def __init__(self, amt):\n        self.amt = amt\n    def __add__(self, other):\n        return Money(self.amt + other.amt)\n    def __str__(self):\n        return f\"Rs.{self.amt}\"\nprint(Money(100) + Money(50))",
          options: { A: "Rs.150", B: "150", C: "Money(150)", D: "Error" },
          answer: "A",
          explanation: "+ triggers __add__ (returning Money(150)); print then triggers __str__ ('Rs.150'). Two magic methods cooperating - exactly how int and str themselves work.",
          related: ["Operator overloading", "Tracing"]
        },
        {
          difficulty: "hard",
          question: "v * 3 works on your Vector but 3 * v fails. Which method fixes the reversed order?",
          options: { A: "__rmul__", B: "__mul2__", C: "__xmul__", D: "It cannot be fixed" },
          answer: "A",
          explanation: "3 * v first tries (3).__mul__(v) - int doesn't know Vector, so Python then tries v.__rmul__(3). The r-prefixed 'reflected' methods handle your object on the RIGHT side of an operator.",
          code: "class Vector:\n    def __mul__(self, n):\n        return Vector(self.x * n, self.y * n)\n    __rmul__ = __mul__     # 3 * v now works too",
          related: ["Reflected operators", "__rmul__"]
        },
        {
          difficulty: "medium",
          question: "Which dunder pair powers the WITH statement (context managers)?",
          options: {
            A: "__enter__ and __exit__",
            B: "__open__ and __close__",
            C: "__start__ and __stop__",
            D: "__with__ and __without__"
          },
          answer: "A",
          explanation: "with obj: calls obj.__enter__() at the start and obj.__exit__() at the end - ALWAYS, even on exceptions. Define both and your class works in with statements, like open() does.",
          code: "class Timer:\n    def __enter__(self):\n        self.start = time.time()\n        return self\n    def __exit__(self, *args):\n        print(f\"took {time.time() - self.start:.2f}s\")\n\nwith Timer():\n    do_work()",
          related: ["Context managers", "with statement"]
        },
        {
          difficulty: "easy",
          question: "dir(obj) is useful because it...",
          options: {
            A: "Lists all attributes and methods of the object - including inherited and dunder ones",
            B: "Shows the object's folder on disk",
            C: "Deletes the object",
            D: "Sorts the object"
          },
          answer: "A",
          explanation: "dir() is your class X-ray: every method (own, inherited, magic) in one list. Pair with help(obj.method) to read docs.",
          code: "print(dir([]))\n# [..., 'append', 'clear', 'copy', 'count', ...]",
          related: ["dir()", "Introspection"]
        },
        {
          difficulty: "hard",
          question: "What is a SINGLETON, and which method is typically overridden to make one?",
          options: {
            A: "A class allowing only ONE instance ever - override __new__ to return the same stored instance",
            B: "A class with one method - override __init__",
            C: "A single-file module",
            D: "An unmarried class"
          },
          answer: "A",
          explanation: "__new__ controls creation, so it can hand back a cached instance instead of a fresh one - every Config() call returns the same object. (In practice, a module-level instance is often the simpler Python singleton.)",
          code: "class Config:\n    _instance = None\n    def __new__(cls):\n        if cls._instance is None:\n            cls._instance = super().__new__(cls)\n        return cls._instance\n\nprint(Config() is Config())   # True",
          related: ["Singleton", "__new__", "Design patterns"]
        },
        {
          difficulty: "medium",
          question: "What does @dataclass (from dataclasses) generate for you?",
          options: {
            A: "__init__, __repr__ and __eq__ automatically from the declared fields",
            B: "A database table",
            C: "Only documentation",
            D: "Getters and setters"
          },
          answer: "A",
          explanation: "For classes that mainly hold data, @dataclass writes the boilerplate: constructor, nice repr, equality by fields. Three lines replace fifteen.",
          code: "from dataclasses import dataclass\n\n@dataclass\nclass Point:\n    x: int\n    y: int\n\np = Point(1, 2)\nprint(p)               # Point(x=1, y=2)\nprint(p == Point(1, 2))  # True",
          related: ["dataclasses", "Boilerplate"]
        },
        {
          difficulty: "medium",
          question: "Why define __repr__ on every class you debug often?",
          options: {
            A: "Debuggers, logs, lists and the REPL all show __repr__ - a good one makes object state visible at a glance",
            B: "Python requires it",
            C: "It speeds up the class",
            D: "It enables inheritance"
          },
          answer: "A",
          explanation: "When a log line says <Order object at 0x7f...> you know nothing; Order(id=42, status='paid') tells the whole story. One method, hours of debugging saved.",
          code: "def __repr__(self):\n    return f\"Order(id={self.id}, status={self.status!r})\"",
          related: ["__repr__", "Debugging"]
        }
      ]
    }
  ]
});
