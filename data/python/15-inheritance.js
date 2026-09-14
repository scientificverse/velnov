/* ============================================================
   PYTHON - TOPIC 15: INHERITANCE & POLYMORPHISM (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "Python",
  icon: "🐍",
  color: "#3776ab",
  description: "Master Python from basics to advanced - 20 topics.",
  topics: [
    {
      name: "15. Inheritance & Polymorphism",
      questions: [
        {
          difficulty: "easy",
          question: "What is inheritance in OOP?",
          options: {
            A: "A class (child) automatically gets the attributes and methods of another class (parent)",
            B: "Copying code between files",
            C: "Objects sharing memory",
            D: "Importing modules"
          },
          answer: "A",
          explanation: "Inheritance lets you build a specialized class on top of a general one: Dog inherits everything Animal has, then adds or changes what it needs. Write the common code once.",
          code: "class Animal:\n    def eat(self):\n        print(\"eating\")\n\nclass Dog(Animal):     # Dog inherits eat()\n    pass\n\nDog().eat()             # eating",
          related: ["Code reuse", "is-a relationship"]
        },
        {
          difficulty: "easy",
          question: "Which syntax makes Dog inherit from Animal?",
          options: {
            A: "class Dog(Animal):",
            B: "class Dog extends Animal:",
            C: "class Dog inherits Animal:",
            D: "class Animal(Dog):"
          },
          answer: "A",
          explanation: "The parent goes in parentheses after the child's name. (extends is Java; option D is backwards - it would make Animal the child.)",
          related: ["Syntax", "Parent classes"]
        },
        {
          difficulty: "easy",
          question: "class Cat(Animal): pass - and Animal has a sleep() method. What does Cat().sleep() do?",
          options: {
            A: "Works - Cat inherited sleep() from Animal",
            B: "AttributeError - Cat is empty",
            C: "Returns None only",
            D: "SyntaxError"
          },
          answer: "A",
          explanation: "An empty child still owns everything the parent defined. Python looks for sleep on Cat, doesn't find it, and walks UP to Animal - found, called.",
          code: "class Animal:\n    def sleep(self):\n        print(\"zzz\")\n\nclass Cat(Animal):\n    pass\n\nCat().sleep()   # zzz",
          related: ["Method lookup", "Inheritance"]
        },
        {
          difficulty: "medium",
          question: "Class Dog inherits from Animal. Both define speak(). What runs for Dog().speak()?",
          options: {
            A: "Animal.speak() - parents win",
            B: "Dog.speak() - the child's version OVERRIDES the parent's",
            C: "Both run automatically",
            D: "TypeError - ambiguous"
          },
          answer: "B",
          explanation: "Method overriding: Python checks the instance's own class FIRST. Dog.speak() shadows Animal.speak(). The parent's version still exists - reachable via super().speak().",
          code: "class Animal:\n    def speak(self):\n        return \"...\"\n\nclass Dog(Animal):\n    def speak(self):\n        return \"Woof!\"\n\nprint(Dog().speak())   # Woof!",
          related: ["Overriding", "MRO"]
        },
        {
          difficulty: "medium",
          question: "What does super() give you inside a child class?",
          options: {
            A: "Access to the PARENT class's methods - e.g. super().__init__(...)",
            B: "A more powerful version of self",
            C: "The grandchild class",
            D: "Administrator rights"
          },
          answer: "A",
          explanation: "super() reaches the next class up the chain - most commonly used to run the parent's __init__ so its setup isn't lost when the child overrides it.",
          code: "class Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Dog(Animal):\n    def __init__(self, name, breed):\n        super().__init__(name)   # parent sets name\n        self.breed = breed        # child adds breed",
          related: ["super()", "__init__ chaining"]
        },
        {
          difficulty: "hard",
          question: "What breaks here?\nclass Animal:\n    def __init__(self, name):\n        self.name = name\nclass Dog(Animal):\n    def __init__(self, breed):\n        self.breed = breed\nd = Dog(\"lab\")\nprint(d.name)",
          options: {
            A: "AttributeError - Dog's __init__ REPLACED Animal's, so self.name was never set",
            B: "Prints lab",
            C: "Prints None",
            D: "Nothing breaks"
          },
          answer: "A",
          explanation: "Overriding __init__ means the parent's initializer does NOT run automatically - name never gets set. Fix: call super().__init__(name) inside Dog's __init__ (and accept name as a parameter).",
          code: "class Dog(Animal):\n    def __init__(self, name, breed):\n        super().__init__(name)   # don't skip this!\n        self.breed = breed",
          notes: ["Forgetting super().__init__() is the #1 inheritance bug."],
          related: ["super()", "AttributeError"]
        },
        {
          difficulty: "easy",
          question: "dog = Dog() where Dog inherits Animal. What is isinstance(dog, Animal)?",
          options: {
            A: "True - an instance of a subclass IS an instance of the parent too",
            B: "False - dog is only a Dog",
            C: "Error",
            D: "None"
          },
          answer: "A",
          explanation: "isinstance() respects inheritance: every Dog IS an Animal (the 'is-a' relationship). That's why isinstance is preferred over type() == for checks.",
          code: "print(isinstance(dog, Dog))      # True\nprint(isinstance(dog, Animal))   # True\nprint(type(dog) == Animal)        # False - exact type only",
          related: ["isinstance()", "is-a"]
        },
        {
          difficulty: "medium",
          question: "What does issubclass(Dog, Animal) check?",
          options: {
            A: "Whether the Dog CLASS inherits from Animal - True here",
            B: "Whether dog objects exist",
            C: "Whether Animal inherits from Dog",
            D: "Nothing - not a real function"
          },
          answer: "A",
          explanation: "issubclass compares CLASSES (isinstance compares an object to a class). issubclass(Dog, Animal) is True; issubclass(Animal, Dog) is False.",
          code: "print(issubclass(Dog, Animal))    # True\nprint(issubclass(bool, int))       # True - fun fact!",
          related: ["issubclass()", "Class relationships"]
        },
        {
          difficulty: "medium",
          question: "What is polymorphism?",
          options: {
            A: "Different classes responding to the SAME method call in their own way",
            B: "One class with many names",
            C: "Multiple inheritance",
            D: "Converting types"
          },
          answer: "A",
          explanation: "Poly = many, morph = forms. Call speak() on any animal - each class provides its own version, and the calling code doesn't care which: the same line of code works for every type.",
          code: "for animal in [Dog(), Cat(), Cow()]:\n    print(animal.speak())   # Woof! Meow! Moo!\n# one loop, three behaviors",
          related: ["Polymorphism", "Overriding"]
        },
        {
          difficulty: "hard",
          question: "What is DUCK TYPING?",
          options: {
            A: "'If it walks like a duck and quacks like a duck...' - Python cares about what an object CAN DO, not what class it is",
            B: "A special duck class in the standard library",
            C: "Typing very fast",
            D: "Inheritance from birds"
          },
          answer: "A",
          explanation: "Python doesn't require a shared parent class for polymorphism: ANY object with a speak() method works in code that calls .speak(). len() works on anything with __len__. Behavior over ancestry.",
          code: "class Robot:            # no Animal parent!\n    def speak(self):\n        return \"beep\"\n\nfor thing in [Dog(), Robot()]:\n    print(thing.speak())   # works - both can speak",
          related: ["Duck typing", "Protocols"]
        },
        {
          difficulty: "medium",
          question: "When the child overrides a method, is the PARENT class changed?",
          options: {
            A: "No - Animal.speak() still works exactly as before; only Dog's lookup changed",
            B: "Yes, the parent method is replaced everywhere",
            C: "The parent method is deleted",
            D: "Both methods merge"
          },
          answer: "A",
          explanation: "Overriding adds a method to the CHILD class; the parent is untouched. Animal instances (and other subclasses) keep the original behavior.",
          code: "class Cat(Animal):\n    pass\n\nprint(Dog().speak())   # Woof! (overridden)\nprint(Cat().speak())   # ...   (parent's original)",
          related: ["Overriding", "Isolation"]
        },
        {
          difficulty: "easy",
          question: "Can a child class ADD methods the parent doesn't have?",
          options: {
            A: "Yes - children extend parents freely (e.g. Dog adds fetch())",
            B: "No - children can only override",
            C: "Only one new method",
            D: "Only attributes, not methods"
          },
          answer: "A",
          explanation: "Children = parent's features + anything new. Dog gets eat() and sleep() from Animal and adds fetch(). Note Animal instances do NOT get fetch - inheritance flows downward only.",
          code: "class Dog(Animal):\n    def fetch(self):\n        print(\"fetching!\")\n\nDog().fetch()      # fine\n# Animal().fetch() # AttributeError",
          related: ["Extension", "Inheritance direction"]
        },
        {
          difficulty: "medium",
          question: "Which real-world pairs fit INHERITANCE ('is-a') best?",
          options: {
            A: "Car is-a Vehicle; Circle is-a Shape; Admin is-a User",
            B: "Car is-a Engine; House is-a Door",
            C: "Engine is-a Car",
            D: "All pairs fit inheritance"
          },
          answer: "A",
          explanation: "Inheritance models 'is-a': every Car IS a Vehicle. A Car HAS an Engine - that's composition (storing an Engine object as an attribute), not inheritance. Choosing wrong leads to awkward classes.",
          code: "class Car(Vehicle):          # is-a\n    def __init__(self):\n        self.engine = Engine()  # has-a (composition)",
          related: ["is-a vs has-a", "Composition"]
        },
        {
          difficulty: "hard",
          question: "What is COMPOSITION, and when is it better than inheritance?",
          options: {
            A: "Storing other objects as attributes ('has-a') - better when the relationship isn't truly 'is-a'",
            B: "Combining two classes into one file",
            C: "A stricter form of inheritance",
            D: "Composing music with Python"
          },
          answer: "A",
          explanation: "A Car HAS an Engine, so Engine is an attribute - not a parent. Composition is flexible (swap engines at runtime, no fragile hierarchies). Modern advice: 'prefer composition over inheritance' unless the is-a test clearly passes.",
          code: "class Engine:\n    def start(self): print(\"vroom\")\n\nclass Car:\n    def __init__(self):\n        self.engine = Engine()   # has-a\n    def start(self):\n        self.engine.start()",
          related: ["Composition", "Design principles"]
        },
        {
          difficulty: "medium",
          question: "What is the ultimate ancestor of EVERY Python class?",
          options: { A: "object", B: "type", C: "class", D: "root" },
          answer: "A",
          explanation: "All classes inherit from object (explicitly or not) - it provides the defaults: __init__, __str__, __eq__ and more. 'class Dog:' and 'class Dog(object):' are identical in Python 3.",
          code: "print(issubclass(Dog, object))   # True\nprint(issubclass(int, object))   # True",
          related: ["object", "Class hierarchy"]
        },
        {
          difficulty: "medium",
          question: "Is multiple inheritance allowed?\nclass FlyingCar(Car, Airplane):",
          options: {
            A: "Yes - a class may inherit from several parents (listed in order)",
            B: "No - Python allows only one parent",
            C: "Only with a plugin",
            D: "Only for built-in types"
          },
          answer: "A",
          explanation: "Python supports multiple inheritance: FlyingCar gets methods from BOTH parents. When both define the same method, the Method Resolution Order decides (left-to-right: Car wins here).",
          code: "class FlyingCar(Car, Airplane):\n    pass\n# lookup order: FlyingCar -> Car -> Airplane -> object",
          related: ["Multiple inheritance", "MRO"]
        },
        {
          difficulty: "hard",
          question: "class C(A, B) - both A and B define hello(). Which runs for C().hello()?",
          options: {
            A: "A's - the MRO checks parents LEFT to RIGHT as listed",
            B: "B's - rightmost wins",
            C: "Both run",
            D: "TypeError - conflict"
          },
          answer: "A",
          explanation: "The Method Resolution Order for C(A, B) is C -> A -> B -> object. First match wins: A.hello(). Inspect any class's order with C.__mro__ or C.mro().",
          code: "class A:\n    def hello(self): return \"A\"\nclass B:\n    def hello(self): return \"B\"\nclass C(A, B): pass\n\nprint(C().hello())   # A\nprint(C.__mro__)      # (C, A, B, object)",
          related: ["MRO", "Multiple inheritance"]
        },
        {
          difficulty: "medium",
          question: "In what ORDER does Python search for a method you call on an object?",
          options: {
            A: "The object's class first, then its parent, then grandparent... up to object",
            B: "object first, then down",
            C: "Random order",
            D: "Alphabetical by class name"
          },
          answer: "A",
          explanation: "Lookup climbs the inheritance chain from most-specific to most-general, stopping at the FIRST match - which is exactly why child methods override parent ones.",
          related: ["Method lookup", "MRO"]
        },
        {
          difficulty: "medium",
          question: "Trace the output:\nclass A:\n    def greet(self):\n        return \"hi from A\"\nclass B(A):\n    def greet(self):\n        return super().greet() + \" and B\"\nprint(B().greet())",
          options: {
            A: "hi from A and B",
            B: "hi from A",
            C: "and B",
            D: "Error"
          },
          answer: "A",
          explanation: "B's greet calls the parent's version via super() (getting 'hi from A') and extends it. This extend-not-replace pattern is what super() is for.",
          related: ["super()", "Extending methods"]
        },
        {
          difficulty: "hard",
          question: "How do you make a 'template' method that children MUST implement?",
          options: {
            A: "Raise NotImplementedError in the parent (or use the abc module's @abstractmethod)",
            B: "Leave the method out entirely",
            C: "Name it _must_implement",
            D: "Python can't express this"
          },
          answer: "A",
          explanation: "The simple way: the parent's method raises NotImplementedError, so forgetting to override it fails loudly. The formal way: inherit from abc.ABC and mark methods @abstractmethod - then instantiating an incomplete child is impossible.",
          code: "class Shape:\n    def area(self):\n        raise NotImplementedError(\"subclass must define area\")\n\nclass Circle(Shape):\n    def area(self):\n        return 3.14159 * self.r ** 2",
          related: ["Abstract classes", "NotImplementedError", "abc module"]
        },
        {
          difficulty: "medium",
          question: "Can you inherit from BUILT-IN types like list?",
          options: {
            A: "Yes - class Stack(list): adds/changes behavior on top of a real list",
            B: "No - built-ins are sealed",
            C: "Only from str",
            D: "Only in Python 2"
          },
          answer: "A",
          explanation: "Built-ins are classes like any other. A Stack(list) gets append, len, iteration for free and can add push/peek. (For dict, collections.UserDict is often smoother.)",
          code: "class Stack(list):\n    def push(self, x):\n        self.append(x)\n    def peek(self):\n        return self[-1]\n\ns = Stack()\ns.push(5)\nprint(s.peek())   # 5",
          related: ["Subclassing built-ins"]
        },
        {
          difficulty: "medium",
          question: "Which line lets Dog's __init__ accept name AND breed while reusing Animal's name setup?",
          options: {
            A: "def __init__(self, name, breed):\\n    super().__init__(name)\\n    self.breed = breed",
            B: "def __init__(self, breed):\\n    self.breed = breed",
            C: "def __init__(self, name, breed):\\n    Animal(name)\\n    self.breed = breed",
            D: "No way to do this"
          },
          answer: "A",
          explanation: "Accept all needed data, delegate the parent's part to super().__init__(name), then set what's new. Option C creates a THROWAWAY Animal object instead of initializing self.",
          related: ["super()", "__init__ patterns"]
        },
        {
          difficulty: "easy",
          question: "In class Rectangle(Shape): - which is the parent (base) class?",
          options: { A: "Shape", B: "Rectangle", C: "Both", D: "Neither" },
          answer: "A",
          explanation: "The class in parentheses is the parent (also called base or super class); Rectangle is the child (derived/sub class).",
          related: ["Terminology"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nclass Bird:\n    def move(self):\n        return \"fly\"\nclass Penguin(Bird):\n    def move(self):\n        return \"waddle\"\nanimals = [Bird(), Penguin(), Bird()]\nprint([a.move() for a in animals])",
          options: {
            A: "['fly', 'waddle', 'fly']",
            B: "['fly', 'fly', 'fly']",
            C: "['waddle', 'waddle', 'waddle']",
            D: "Error"
          },
          answer: "A",
          explanation: "Each object uses ITS OWN class's move() - Bird flies, Penguin waddles - even inside one uniform loop. Polymorphism in action.",
          related: ["Polymorphism", "Overriding"]
        },
        {
          difficulty: "hard",
          question: "Why is 'type(x) == Dog' usually WORSE than 'isinstance(x, Dog)'?",
          options: {
            A: "type() ignores inheritance - a Puppy(Dog) instance would FAIL the type check but pass isinstance",
            B: "type() is slower",
            C: "type() doesn't exist",
            D: "They're always identical"
          },
          answer: "A",
          explanation: "Exact-type checks break polymorphism: code demanding type(x) == Dog rejects perfectly good subclasses. isinstance accepts the whole family - almost always what you want.",
          code: "class Puppy(Dog): pass\np = Puppy()\nprint(type(p) == Dog)        # False!\nprint(isinstance(p, Dog))    # True",
          related: ["isinstance()", "Liskov principle"]
        },
        {
          difficulty: "medium",
          question: "A child needs the parent's method PLUS extra work. The cleanest pattern is:",
          options: {
            A: "Override it, call super().method() inside, then add the extra steps",
            B: "Copy-paste the parent's code",
            C: "Rename the parent method",
            D: "Make everything global"
          },
          answer: "A",
          explanation: "Extend, don't duplicate: super() runs the original, your code adds the difference. Parent bug-fixes automatically reach the child.",
          code: "class LoggedAccount(Account):\n    def deposit(self, amt):\n        super().deposit(amt)      # original logic\n        print(f\"logged: +{amt}\")  # the extra bit",
          related: ["super()", "DRY principle"]
        },
        {
          difficulty: "easy",
          question: "What is the main PURPOSE of inheritance?",
          options: {
            A: "Reuse and organize shared behavior - write common code once in the parent",
            B: "Make programs run faster",
            C: "Hide code from other developers",
            D: "It's required for classes to work"
          },
          answer: "A",
          explanation: "Shared logic lives once in the base class; specializations only express their differences. Less duplication, clearer structure - though don't force it where 'is-a' doesn't hold.",
          related: ["Code reuse", "DRY"]
        },
        {
          difficulty: "hard",
          question: "What is the 'diamond problem', and how does Python cope?",
          options: {
            A: "D inherits from B and C which both inherit A - Python's MRO (C3 linearization) gives ONE consistent lookup order, each class visited once",
            B: "A crash when classes form a square",
            C: "Python forbids the diamond shape entirely",
            D: "Methods run twice"
          },
          answer: "A",
          explanation: "The diamond: D(B, C), B(A), C(A). Which A-method does D see, and does A run twice? Python's C3 algorithm computes a deterministic order (D, B, C, A) and super() follows it - so cooperative calls visit each class exactly once.",
          code: "class A: pass\nclass B(A): pass\nclass C(A): pass\nclass D(B, C): pass\nprint(D.__mro__)   # D, B, C, A, object",
          related: ["Diamond problem", "MRO", "C3 linearization"]
        },
        {
          difficulty: "medium",
          question: "Grandparent -> Parent -> Child. Child calls a method only Grandparent defines. Does it work?",
          options: {
            A: "Yes - lookup climbs the WHOLE chain, however many levels",
            B: "No - only direct parents are searched",
            C: "Only with two super() calls",
            D: "Only if Parent re-exports it"
          },
          answer: "A",
          explanation: "Inheritance chains any depth: Child -> Parent -> Grandparent -> object are all searched in order. Deep hierarchies work - though beyond 2-3 levels they get hard to follow; prefer shallow designs.",
          related: ["Inheritance chains", "Design advice"]
        },
        {
          difficulty: "medium",
          question: "What does method overriding let a subclass do?",
          options: {
            A: "Provide its OWN version of a method the parent already defined, replacing it for instances of the subclass",
            B: "Delete the parent's method everywhere",
            C: "Rename the parent method",
            D: "Call two methods at once"
          },
          answer: "A",
          explanation: "Overriding = redefining an inherited method in the child with the same name. The child's version is used for child instances; the parent (and other subclasses) keep the original. Combine with super() to extend rather than fully replace.",
          code: "class Animal:\n    def speak(self):\n        return \"some sound\"\n\nclass Cat(Animal):\n    def speak(self):        # overrides\n        return \"Meow\"\n\nprint(Cat().speak())        # Meow\nprint(Animal().speak())     # some sound",
          related: ["Overriding", "super()", "Polymorphism"]
        }
      ]
    }
  ]
});
