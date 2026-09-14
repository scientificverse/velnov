/* ============================================================
   PYTHON - TOPIC 14: CLASSES & OBJECTS (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "Python",
  icon: "🐍",
  color: "#3776ab",
  description: "Master Python from basics to advanced - 20 topics.",
  topics: [
    {
      name: "14. Classes & Objects",
      questions: [
        {
          difficulty: "easy",
          question: "What is the relationship between a CLASS and an OBJECT?",
          options: {
            A: "A class is the blueprint; objects are the individual things built from it",
            B: "They are the same thing",
            C: "Objects contain classes",
            D: "A class is one specific example of an object"
          },
          answer: "A",
          explanation: "The class defines what attributes and methods exist (the cookie cutter); each object (instance) is a concrete item made from it (a cookie) with its own data.",
          code: "class Dog:            # blueprint\n    pass\n\nrex = Dog()            # object #1\nbuddy = Dog()          # object #2",
          related: ["Classes", "Instances"]
        },
        {
          difficulty: "easy",
          question: "Which is the correct syntax to define a class?",
          options: {
            A: "class Student:",
            B: "def Student:",
            C: "class Student():{}",
            D: "new class Student"
          },
          answer: "A",
          explanation: "The class keyword, a name (CamelCase by convention), and a colon. The body - methods and attributes - is indented below.",
          code: "class Student:\n    def __init__(self, name):\n        self.name = name",
          related: ["class keyword", "Naming conventions"]
        },
        {
          difficulty: "easy",
          question: "What is the purpose of the __init__ method?",
          options: {
            A: "To delete an object",
            B: "To initialize a new object's attributes - it runs automatically on creation",
            C: "To import the class",
            D: "To print the object"
          },
          answer: "B",
          explanation: "__init__ is the initializer: Python calls it automatically every time you create an instance, letting you set up the object's starting attribute values.",
          code: "class Student:\n    def __init__(self, name, grade):\n        self.name = name\n        self.grade = grade\n\ns = Student(\"Ravi\", \"A\")   # __init__ runs here\nprint(s.name)                # Ravi",
          related: ["__init__", "Constructors"]
        },
        {
          difficulty: "easy",
          question: "What does self refer to inside a class method?",
          options: {
            A: "The class itself",
            B: "The specific OBJECT the method was called on",
            C: "The Python interpreter",
            D: "The parent class"
          },
          answer: "B",
          explanation: "self is the current instance - when you call rex.bark(), self IS rex inside the method. It's how each object accesses ITS OWN attributes: self.name, self.age.",
          code: "class Dog:\n    def __init__(self, name):\n        self.name = name\n    def bark(self):\n        print(self.name, \"says woof\")\n\nrex = Dog(\"Rex\")\nrex.bark()    # Rex says woof  (self = rex)",
          related: ["self", "Instances"]
        },
        {
          difficulty: "easy",
          question: "How do you CREATE an object of class Dog?",
          options: { A: "d = Dog()", B: "d = new Dog()", C: "d = create Dog", D: "d = Dog.new()" },
          answer: "A",
          explanation: "Call the class like a function: Dog(). Arguments go to __init__: Dog(\"Rex\", 3). No 'new' keyword in Python (that's Java/JavaScript/C++).",
          code: "class Dog:\n    def __init__(self, name):\n        self.name = name\n\nd = Dog(\"Rex\")",
          related: ["Instantiation"]
        },
        {
          difficulty: "easy",
          question: "What does self.name = name do inside __init__(self, name)?",
          options: {
            A: "Stores the parameter's value as an ATTRIBUTE on the object, so it survives after __init__ ends",
            B: "Creates a global variable",
            C: "Renames the class",
            D: "Nothing - it's redundant"
          },
          answer: "A",
          explanation: "The parameter name is a temporary local variable; self.name attaches the value to the OBJECT itself, making it available later as obj.name. Without self. the value would vanish when __init__ returns.",
          code: "def __init__(self, name):\n    self.name = name     # kept on the object\n    nickname = name       # lost after __init__!",
          related: ["Attributes", "self"]
        },
        {
          difficulty: "easy",
          question: "How do you read the name attribute of object s?",
          options: { A: "s.name", B: "s[name]", C: "name(s)", D: "s->name" },
          answer: "A",
          explanation: "Dot notation: object.attribute. (Square brackets are for lists/dicts; arrows are C++.)",
          code: "s = Student(\"Ana\")\nprint(s.name)      # Ana\ns.name = \"Anita\"  # attributes can be updated too",
          related: ["Dot notation", "Attributes"]
        },
        {
          difficulty: "medium",
          question: "Why must methods declare self as their first parameter?",
          options: {
            A: "Python passes the instance automatically as the first argument - self receives it",
            B: "It's optional decoration",
            C: "For speed",
            D: "To make methods private"
          },
          answer: "A",
          explanation: "rex.bark() is really Dog.bark(rex) behind the scenes - the instance is passed in as the first argument, which the method receives as self. Forget self in the def and calls break.",
          code: "class Dog:\n    def bark(self):        # receives the instance\n        print(\"woof\")\n\nrex.bark()                  # same as Dog.bark(rex)",
          related: ["self", "Method calls"]
        },
        {
          difficulty: "medium",
          question: "What error results from this, and when?\nclass Dog:\n    def bark():\n        print(\"woof\")\nDog().bark()",
          options: {
            A: "TypeError when calling - bark() takes 0 arguments but 1 was given (the instance!)",
            B: "SyntaxError at definition",
            C: "No error",
            D: "NameError"
          },
          answer: "A",
          explanation: "The def compiles fine, but the CALL passes the instance automatically - and bark() declared no parameter to receive it. The confusing message 'takes 0 positional arguments but 1 was given' almost always means: you forgot self.",
          code: "class Dog:\n    def bark(self):    # fixed\n        print(\"woof\")",
          notes: ["Learn to recognize this error message - everyone hits it."],
          related: ["self", "TypeError"]
        },
        {
          difficulty: "medium",
          question: "a = Dog(\"Rex\") and b = Dog(\"Buddy\"). Does changing a.name affect b.name?",
          options: {
            A: "No - each instance has its OWN attributes",
            B: "Yes - all objects share attributes",
            C: "Only if they were created on the same line",
            D: "b is deleted"
          },
          answer: "A",
          explanation: "Instance attributes (set via self.x = ...) belong to each object separately. a and b are independent - that's the point of instances.",
          code: "a = Dog(\"Rex\")\nb = Dog(\"Buddy\")\na.name = \"King\"\nprint(b.name)    # Buddy - unaffected",
          related: ["Instance attributes", "Independence"]
        },
        {
          difficulty: "easy",
          question: "By convention, class names are written in:",
          options: {
            A: "CamelCase: BankAccount, StudentRecord",
            B: "snake_case: bank_account",
            C: "ALLCAPS: BANKACCOUNT",
            D: "lowercase: bankaccount"
          },
          answer: "A",
          explanation: "PEP 8: classes use CamelCase (CapWords); functions/variables use snake_case; constants use ALL_CAPS. Seeing BankAccount() you instantly know it's a class.",
          related: ["PEP 8", "Naming conventions"]
        },
        {
          difficulty: "medium",
          question: "What is the difference between a FUNCTION and a METHOD?",
          options: {
            A: "A method is a function defined inside a class and called on an object: obj.method()",
            B: "Methods are faster",
            C: "Functions can't take arguments",
            D: "No difference at all"
          },
          answer: "A",
          explanation: "Methods live in classes and receive the instance (self) automatically: \"hi\".upper(), list.append(), dog.bark(). Plain functions stand alone: len(), print().",
          related: ["Methods", "Functions"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nclass Counter:\n    def __init__(self):\n        self.count = 0\n    def increment(self):\n        self.count += 1\nc = Counter()\nc.increment()\nc.increment()\nprint(c.count)",
          options: { A: "0", B: "1", C: "2", D: "Error" },
          answer: "C",
          explanation: "count starts at 0 in __init__; each increment() adds 1 to THIS object's count: 0 -> 1 -> 2. Objects carrying state between method calls is the essence of OOP.",
          related: ["State", "Methods"]
        },
        {
          difficulty: "hard",
          question: "What is the difference between these two attributes?\nclass Dog:\n    species = \"canine\"      # (1)\n    def __init__(self):\n        self.name = \"Rex\"   # (2)",
          options: {
            A: "(1) is a CLASS attribute shared by all dogs; (2) is an INSTANCE attribute unique to each dog",
            B: "Both are identical",
            C: "(1) is private, (2) is public",
            D: "(2) is shared, (1) is unique"
          },
          answer: "A",
          explanation: "species lives on the CLASS - one copy, seen by every instance (Dog.species). self.name lives on EACH object separately. Use class attributes for values common to all instances.",
          code: "print(Dog.species)     # canine - via the class\na, b = Dog(), Dog()\nprint(a.species)        # canine - shared\na.name = \"King\"        # only a's name changes",
          related: ["Class attributes", "Instance attributes"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nclass Dog:\n    count = 0\n    def __init__(self):\n        Dog.count += 1\na = Dog(); b = Dog(); c = Dog()\nprint(Dog.count)",
          options: { A: "0", B: "1", C: "3", D: "Error" },
          answer: "C",
          explanation: "Dog.count is a class attribute - one shared counter. Each __init__ increments it, so after three instances it's 3. A classic pattern for counting how many objects exist.",
          related: ["Class attributes", "Counting instances"]
        },
        {
          difficulty: "medium",
          question: "What does type(rex) return for rex = Dog(\"Rex\")?",
          options: {
            A: "<class '__main__.Dog'> - the object's class",
            B: "'Rex'",
            C: "object",
            D: "dog"
          },
          answer: "A",
          explanation: "type() reveals which class made the object. For checks, prefer isinstance(rex, Dog) - it also accepts subclasses.",
          code: "print(type(rex))              # <class '__main__.Dog'>\nprint(isinstance(rex, Dog))   # True",
          related: ["type()", "isinstance()"]
        },
        {
          difficulty: "medium",
          question: "Accessing an attribute that doesn't exist (rex.age when never set) raises:",
          options: { A: "AttributeError", B: "KeyError", C: "NameError", D: "ValueError" },
          answer: "A",
          explanation: "AttributeError: 'Dog' object has no attribute 'age'. Check safely with hasattr(rex, \"age\") or supply a fallback with getattr(rex, \"age\", 0).",
          code: "print(hasattr(rex, \"age\"))       # False\nprint(getattr(rex, \"age\", 0))    # 0 - default",
          related: ["AttributeError", "hasattr()", "getattr()"]
        },
        {
          difficulty: "medium",
          question: "Can one method call another method of the same object?",
          options: {
            A: "Yes - via self: self.other_method()",
            B: "No, methods are isolated",
            C: "Only with global",
            D: "Only in subclasses"
          },
          answer: "A",
          explanation: "self gives access to everything on the object - attributes AND other methods. Building bigger methods from smaller ones keeps classes tidy.",
          code: "class Order:\n    def total(self):\n        return self.subtotal() + self.tax()\n    def subtotal(self): ...\n    def tax(self): ...",
          related: ["self", "Method composition"]
        },
        {
          difficulty: "medium",
          question: "What does this print?\nclass Product:\n    def __init__(self, name, price=100):\n        self.name = name\n        self.price = price\np = Product(\"Pen\")\nprint(p.price)",
          options: { A: "100", B: "None", C: "Error - price missing", D: "0" },
          answer: "A",
          explanation: "__init__ is a normal function - default parameter values work exactly the same: price defaults to 100 when not supplied.",
          related: ["Default arguments", "__init__"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\na = Dog(\"Rex\")\nb = Dog(\"Rex\")\nprint(a == b)",
          options: {
            A: "False - by default == compares object IDENTITY, and these are two separate objects",
            B: "True - same name means equal",
            C: "Error",
            D: "None"
          },
          answer: "A",
          explanation: "Unless a class defines __eq__, == falls back to 'are they the SAME object?' - and a, b are two distinct instances, however identical their data. Defining __eq__ lets you compare by content.",
          code: "class Dog:\n    def __init__(self, name):\n        self.name = name\n    def __eq__(self, other):\n        return self.name == other.name\n\nprint(Dog(\"Rex\") == Dog(\"Rex\"))   # True now",
          related: ["__eq__", "Identity vs equality"]
        },
        {
          difficulty: "medium",
          question: "What does print(rex) show by DEFAULT (no __str__ defined)?",
          options: {
            A: "Something like <__main__.Dog object at 0x000001A2B3C4D5E6>",
            B: "All the attributes nicely formatted",
            C: "The name attribute",
            D: "Nothing"
          },
          answer: "A",
          explanation: "The default representation shows the class and memory address - not helpful. Define __str__ to control what print() shows (covered in the Magic Methods topic).",
          code: "class Dog:\n    def __init__(self, name):\n        self.name = name\n    def __str__(self):\n        return f\"Dog named {self.name}\"\n\nprint(Dog(\"Rex\"))   # Dog named Rex",
          related: ["__str__", "Object representation"]
        },
        {
          difficulty: "easy",
          question: "What is the main benefit of OOP (classes) over loose variables and functions?",
          options: {
            A: "It bundles related DATA and the FUNCTIONS that work on it into one unit",
            B: "Programs always run faster",
            C: "Less typing in all cases",
            D: "It's required by Python"
          },
          answer: "A",
          explanation: "A BankAccount class keeps balance (data) and deposit/withdraw (behavior) together - instead of parallel lists and free functions hoping to stay in sync. Encapsulation makes bigger programs manageable.",
          related: ["Encapsulation", "OOP benefits"]
        },
        {
          difficulty: "medium",
          question: "Can you add a NEW attribute to an object after creation?\nrex = Dog(\"Rex\")\nrex.tricks = [\"sit\"]",
          options: {
            A: "Yes - Python objects accept new attributes at any time (by default)",
            B: "No - only __init__ can create attributes",
            C: "Only with add_attribute()",
            D: "It deletes the object"
          },
          answer: "A",
          explanation: "Python is dynamic - rex.tricks = [...] just works, attaching the attribute to that one object. Handy but risky (typos create NEW attributes silently: rex.nmae = ... !). Best practice: define everything in __init__.",
          notes: ["A typo like rex.nmae = 'x' creates a new attribute instead of failing!"],
          related: ["Dynamic attributes", "Best practices"]
        },
        {
          difficulty: "medium",
          question: "Trace the output:\nclass Account:\n    def __init__(self, balance):\n        self.balance = balance\n    def deposit(self, amt):\n        self.balance += amt\n        return self.balance\nacc = Account(100)\nprint(acc.deposit(50))",
          options: { A: "150", B: "100", C: "50", D: "None" },
          answer: "A",
          explanation: "balance starts at 100; deposit adds 50 and returns the new balance: 150. A miniature of every real-world class: state + methods that change it.",
          related: ["State", "Tracing"]
        },
        {
          difficulty: "hard",
          question: "What does obj.__dict__ show?",
          options: {
            A: "A dict of the object's instance attributes: {'name': 'Rex', 'age': 3}",
            B: "The class's methods",
            C: "Python's built-in dictionary",
            D: "Nothing - it's an error"
          },
          answer: "A",
          explanation: "Instance attributes are literally stored in a dict per object - __dict__ exposes it. Great for debugging: see exactly what data an object carries.",
          code: "rex = Dog(\"Rex\")\nrex.age = 3\nprint(rex.__dict__)   # {'name': 'Rex', 'age': 3}",
          related: ["__dict__", "Introspection"]
        },
        {
          difficulty: "medium",
          question: "Where does the code in the CLASS BODY (outside methods) run?\nclass Config:\n    print(\"setting up\")\n    version = 1",
          options: {
            A: "Once, when the class statement is first executed - NOT on each instance",
            B: "Every time an object is created",
            C: "Never",
            D: "On every method call"
          },
          answer: "A",
          explanation: "The class body executes top-to-bottom ONCE to build the class - creating class attributes and methods. Creating instances later runs only __init__, not the body again.",
          related: ["Class body", "Class creation"]
        },
        {
          difficulty: "easy",
          question: "A class Car should store its color and speed. Which __init__ is right?",
          options: {
            A: "def __init__(self, color, speed):\\n    self.color = color\\n    self.speed = speed",
            B: "def __init__(color, speed):\\n    color = color",
            C: "def init(self):\\n    self.color",
            D: "def __init__(self):\\n    color = color"
          },
          answer: "A",
          explanation: "Take self plus the values, then store each with self.attr = value. Option B forgets self entirely; C misspells __init__ and stores nothing; D never receives the values.",
          related: ["__init__", "Attributes"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nclass Team:\n    members = []\n    def add(self, name):\n        self.members.append(name)\na = Team(); b = Team()\na.add(\"Ana\")\nprint(b.members)",
          options: {
            A: "['Ana'] - the CLASS-level list is shared by ALL instances!",
            B: "[] - each team has its own list",
            C: "Error",
            D: "None"
          },
          answer: "A",
          explanation: "members = [] in the class body creates ONE list on the class, shared by every instance - a.add() mutates the list b sees too. For per-instance lists, create them in __init__: self.members = [].",
          code: "class Team:\n    def __init__(self):\n        self.members = []   # each team its own list",
          notes: ["The mutable-class-attribute trap - sibling of the mutable default argument."],
          related: ["Class attributes", "Mutability traps"]
        },
        {
          difficulty: "medium",
          question: "isinstance(x, (int, float)) returns True when...",
          options: {
            A: "x is an int OR a float (or a subclass of either)",
            B: "x is both at once",
            C: "x is exactly the tuple (int, float)",
            D: "Never - invalid syntax"
          },
          answer: "A",
          explanation: "isinstance accepts a tuple of types - True if x matches ANY of them. The standard way to accept 'any number'.",
          code: "def half(x):\n    if not isinstance(x, (int, float)):\n        raise TypeError(\"number required\")\n    return x / 2",
          related: ["isinstance()", "Type checking"]
        },
        {
          difficulty: "easy",
          question: "In rex = Dog(\"Rex\"), which part triggers __init__?",
          options: {
            A: "Calling the class: Dog(\"Rex\")",
            B: "The assignment to rex",
            C: "The quotes around Rex",
            D: "__init__ must be called manually"
          },
          answer: "A",
          explanation: "Calling a class creates the object and automatically runs __init__ with your arguments. The assignment merely names the finished object.",
          related: ["Instantiation", "__init__"]
        }
      ]
    }
  ]
});
