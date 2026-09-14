/* ============================================================
   PYTHON - TOPIC 3: DATA TYPES & TYPE CONVERSION (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "Python",
  icon: "🐍",
  color: "#3776ab",
  description: "Master Python from basics to advanced - 20 topics.",
  topics: [
    {
      name: "3. Data Types & Conversion",
      questions: [
        {
          difficulty: "easy",
          question: "What is the type of the value 5?",
          options: { A: "float", B: "int", C: "str", D: "number" },
          answer: "B",
          explanation: "Whole numbers without a decimal point are int (integers). 5.0 would be a float, and \"5\" (in quotes) would be a str.",
          code: "print(type(5))     # <class 'int'>\nprint(type(5.0))   # <class 'float'>\nprint(type(\"5\"))   # <class 'str'>",
          related: ["type()", "Numeric types"]
        },
        {
          difficulty: "easy",
          question: "What is the type of True?",
          options: { A: "str", B: "int", C: "bool", D: "boolean" },
          answer: "C",
          explanation: "True and False are the two values of the bool type. Note the capital letters - true and false (lowercase) are NameErrors in Python.",
          code: "print(type(True))   # <class 'bool'>",
          notes: ["The type is spelled bool, not boolean."],
          related: ["Booleans", "Comparison results"]
        },
        {
          difficulty: "easy",
          question: "What is the output of: print(int(\"12\") + 3)",
          options: { A: "123", B: "15", C: "\"123\"", D: "Error" },
          answer: "B",
          explanation: "int(\"12\") converts the string to the number 12, then 12 + 3 = 15. Without the conversion, \"12\" + 3 would be a TypeError.",
          code: "print(int(\"12\") + 3)   # 15\n# print(\"12\" + 3)      # TypeError!",
          related: ["Type conversion", "int()"]
        },
        {
          difficulty: "easy",
          question: "What is the output of: print(str(5) + \"5\")",
          options: { A: "10", B: "55", C: "Error", D: "5 5" },
          answer: "B",
          explanation: "str(5) converts the number to the text \"5\", and + on two strings joins them: \"5\" + \"5\" = \"55\".",
          code: "print(str(5) + \"5\")   # 55  (text joining)\nprint(5 + 5)           # 10  (math)",
          related: ["str()", "String concatenation"]
        },
        {
          difficulty: "easy",
          question: "What happens when you run: print(\"5\" + 5)",
          options: {
            A: "Prints 10",
            B: "Prints 55",
            C: "TypeError - can't add str and int",
            D: "Prints 5 5"
          },
          answer: "C",
          explanation: "Python refuses to mix a string and a number with + . You must convert one side first: int(\"5\") + 5 = 10, or \"5\" + str(5) = \"55\". (JavaScript would silently give \"55\" - Python is stricter.)",
          code: "# print(\"5\" + 5)      # TypeError\nprint(int(\"5\") + 5)   # 10\nprint(\"5\" + str(5))   # 55",
          related: ["TypeError", "Type conversion"]
        },
        {
          difficulty: "easy",
          question: "What is the output of: print(int(3.9))",
          options: { A: "4", B: "3", C: "3.9", D: "Error" },
          answer: "B",
          explanation: "int() TRUNCATES a float - it simply cuts off the decimal part, it does not round. int(3.9) is 3. Use round(3.9) if you want 4.",
          code: "print(int(3.9))     # 3  (cut, not rounded)\nprint(round(3.9))   # 4\nprint(int(-3.9))    # -3 (cuts toward zero)",
          related: ["int()", "round()", "Truncation"]
        },
        {
          difficulty: "medium",
          question: "What is the result type of: 3 / 2 in Python 3?",
          options: { A: "int", B: "float", C: "decimal", D: "Error" },
          answer: "B",
          explanation: "The / operator always returns a float in Python 3, even for integers: 3 / 2 = 1.5. Use // for integer (floor) division.",
          code: "print(3 / 2)         # 1.5\nprint(3 // 2)        # 1\nprint(type(3 / 2))   # <class 'float'>",
          notes: ["Key difference from Python 2, where 3 / 2 gave 1."],
          related: ["Division", "Floor division"]
        },
        {
          difficulty: "easy",
          question: "Which function tells you the type of a value?",
          options: { A: "typeof()", B: "type()", C: "gettype()", D: "kind()" },
          answer: "B",
          explanation: "type(x) returns the type of x, e.g. type(3.14) is <class 'float'>. (typeof is JavaScript, gettype is PHP.)",
          code: "print(type(42))       # <class 'int'>\nprint(type([1, 2]))   # <class 'list'>",
          related: ["isinstance()", "Introspection"]
        },
        {
          difficulty: "medium",
          question: "What is the output of: print(bool(\"\"))",
          options: { A: "True", B: "False", C: "Error", D: "None" },
          answer: "B",
          explanation: "An EMPTY string is falsy - bool(\"\") is False. Empty containers ([], {}, ()), the number 0, and None are all falsy. Everything else is truthy.",
          code: "print(bool(\"\"))      # False\nprint(bool(\"hi\"))    # True\nprint(bool(0))        # False\nprint(bool([]))       # False",
          related: ["Truthiness", "bool()"]
        },
        {
          difficulty: "hard",
          question: "What is the output of: print(bool(\"False\"))",
          options: { A: "False", B: "True", C: "Error", D: "None" },
          answer: "B",
          explanation: "Tricky! \"False\" is a NON-EMPTY string, and any non-empty string is truthy - regardless of what it says. Only the empty string \"\" is falsy.",
          code: "print(bool(\"False\"))  # True (non-empty text!)\nprint(bool(\"0\"))       # True\nprint(bool(\"\"))        # False",
          notes: ["This matters when reading 'True'/'False' from files or input - compare the text instead."],
          related: ["Truthiness", "Common gotchas"]
        },
        {
          difficulty: "easy",
          question: "What is the output of: print(bool(0), bool(-1))",
          options: { A: "False False", B: "False True", C: "True True", D: "True False" },
          answer: "B",
          explanation: "Only zero is falsy among numbers. ANY non-zero number - including negatives - is truthy, so bool(-1) is True.",
          code: "print(bool(0))     # False\nprint(bool(-1))    # True\nprint(bool(0.0))   # False",
          related: ["Truthiness"]
        },
        {
          difficulty: "easy",
          question: "Which data type would you use to store 3.14?",
          options: { A: "int", B: "float", C: "str", D: "bool" },
          answer: "B",
          explanation: "Numbers with a decimal point are floats (floating-point numbers). Integers (int) hold only whole numbers.",
          code: "pi = 3.14\nprint(type(pi))   # <class 'float'>",
          related: ["Numeric types"]
        },
        {
          difficulty: "medium",
          question: "What is the type of the result: 2 + 3.0",
          options: { A: "int", B: "float", C: "str", D: "Error" },
          answer: "B",
          explanation: "When int and float mix in arithmetic, Python converts the int to float automatically: 2 + 3.0 = 5.0 (a float). The 'wider' type wins.",
          code: "print(2 + 3.0)        # 5.0\nprint(type(2 + 3.0))  # <class 'float'>",
          related: ["Type promotion", "Mixed arithmetic"]
        },
        {
          difficulty: "medium",
          question: "What happens with: int(\"3.5\")",
          options: {
            A: "Returns 3",
            B: "Returns 3.5",
            C: "Returns 4",
            D: "ValueError - int() can't parse a decimal string"
          },
          answer: "D",
          explanation: "int() can convert \"3\" but NOT \"3.5\" - the decimal point makes it invalid. Convert in two steps: int(float(\"3.5\")) gives 3.",
          code: "# int(\"3.5\")          # ValueError!\nprint(float(\"3.5\"))    # 3.5\nprint(int(float(\"3.5\")))  # 3",
          related: ["ValueError", "Type conversion"]
        },
        {
          difficulty: "easy",
          question: "What does float(\"7\") return?",
          options: { A: "7", B: "7.0", C: "\"7.0\"", D: "Error" },
          answer: "B",
          explanation: "float() converts a value to a floating-point number: float(\"7\") is 7.0. It accepts integer strings, decimal strings, and numbers.",
          code: "print(float(\"7\"))     # 7.0\nprint(float(\"3.14\"))  # 3.14\nprint(float(5))        # 5.0",
          related: ["float()", "Type conversion"]
        },
        {
          difficulty: "medium",
          question: "What is the value and type of x?\nx = None",
          options: {
            A: "0, int",
            B: "Empty string, str",
            C: "None, NoneType - it represents 'no value'",
            D: "False, bool"
          },
          answer: "C",
          explanation: "None is Python's special 'nothing here' value, with its own type NoneType. It is NOT zero, not an empty string, and not False - though it is falsy in conditions.",
          code: "x = None\nprint(type(x))     # <class 'NoneType'>\nprint(x is None)   # True - the proper check",
          related: ["None", "is operator"]
        },
        {
          difficulty: "hard",
          question: "What is the output of: print(0.1 + 0.2 == 0.3)",
          options: { A: "True", B: "False", C: "Error", D: "0.3" },
          answer: "B",
          explanation: "Floats are stored in binary, and 0.1, 0.2, 0.3 can't be represented exactly - 0.1 + 0.2 is actually 0.30000000000000004. Never compare floats with ==; use math.isclose() or round first.",
          code: "print(0.1 + 0.2)            # 0.30000000000000004\nimport math\nprint(math.isclose(0.1 + 0.2, 0.3))  # True",
          notes: ["This is true in nearly every language, not just Python."],
          related: ["Floating point precision", "math.isclose()"]
        },
        {
          difficulty: "medium",
          question: "What is the value of: 1e3",
          options: { A: "13", B: "1000.0", C: "103", D: "Error" },
          answer: "B",
          explanation: "1e3 is scientific notation: 1 x 10^3 = 1000.0 (always a float). Similarly 2.5e2 = 250.0 and 1e-2 = 0.01.",
          code: "print(1e3)     # 1000.0\nprint(1e-2)    # 0.01",
          related: ["Scientific notation", "Floats"]
        },
        {
          difficulty: "hard",
          question: "What is the output of: print(True + True)",
          options: { A: "TrueTrue", B: "2", C: "True", D: "Error" },
          answer: "B",
          explanation: "bool is actually a subclass of int: True behaves as 1 and False as 0 in arithmetic. So True + True = 2. Useful trick: sum(list_of_bools) counts the Trues.",
          code: "print(True + True)   # 2\nprint(True * 10)     # 10\nmarks = [True, False, True]\nprint(sum(marks))    # 2 - counts passes",
          related: ["bool as int", "sum()"]
        },
        {
          difficulty: "hard",
          question: "What is the output of: print(isinstance(True, int))",
          options: { A: "False", B: "True", C: "Error", D: "None" },
          answer: "B",
          explanation: "Surprising but true: bool is a subclass of int in Python, so True IS an instance of int. This is why True + 1 equals 2.",
          code: "print(isinstance(True, bool))  # True\nprint(isinstance(True, int))   # True (subclass!)",
          related: ["isinstance()", "Inheritance"]
        },
        {
          difficulty: "medium",
          question: "Which is the better way to check if x is a number, and why?\nA) type(x) == int   B) isinstance(x, int)",
          options: {
            A: "A - type() is faster",
            B: "B - isinstance() also accepts subclasses and is the Python convention",
            C: "Both are identical",
            D: "Neither works"
          },
          answer: "B",
          explanation: "isinstance(x, int) is preferred: it returns True for int AND its subclasses (like bool), works with a tuple of types, and reads better. type(x) == int does strict exact-type matching only.",
          code: "print(isinstance(5, int))          # True\nprint(isinstance(5.0, (int, float)))  # True - multiple types",
          related: ["isinstance()", "type()"]
        },
        {
          difficulty: "medium",
          question: "Python has a built-in type for complex numbers. Which literal creates one?",
          options: { A: "2 + 3i", B: "complex only via import", C: "2 + 3j", D: "(2, 3)" },
          answer: "C",
          explanation: "Python uses j (from engineering) for the imaginary unit: 2 + 3j is a complex number with real part 2 and imaginary part 3. No import needed.",
          code: "z = 2 + 3j\nprint(z.real)   # 2.0\nprint(z.imag)   # 3.0\nprint(type(z))  # <class 'complex'>",
          related: ["Numeric types", "complex()"]
        },
        {
          difficulty: "medium",
          question: "What is the output of: print(int(\"ff\", 16))",
          options: { A: "Error", B: "255", C: "ff", D: "1616" },
          answer: "B",
          explanation: "int() takes an optional base: int(\"ff\", 16) reads \"ff\" as hexadecimal, which is 255 in decimal. Base 2 works too: int(\"1010\", 2) = 10.",
          code: "print(int(\"ff\", 16))    # 255 (hex)\nprint(int(\"1010\", 2))   # 10 (binary)\nprint(int(\"77\", 8))     # 63 (octal)",
          related: ["Number bases", "hex()", "bin()"]
        },
        {
          difficulty: "easy",
          question: "Converting a value from one type to another (e.g. int(\"5\")) is commonly called:",
          options: { A: "Mutation", B: "Type casting / type conversion", C: "Inheritance", D: "Compilation" },
          answer: "B",
          explanation: "Changing a value's type - int(\"5\"), str(3.14), float(2) - is called type conversion or type casting. Python requires it to be explicit; it won't silently convert strings to numbers.",
          related: ["int()", "str()", "float()"]
        },
        {
          difficulty: "easy",
          question: "Which of these creates a string?",
          options: { A: "x = 5", B: "x = 'hello'", C: "x = True", D: "x = 5.5" },
          answer: "B",
          explanation: "Text wrapped in quotes (single OR double - both work identically) is a string. 5 is int, True is bool, 5.5 is float.",
          code: "a = 'hello'   # str\nb = \"hello\"   # also str - same thing",
          related: ["Strings", "Quotes"]
        },
        {
          difficulty: "medium",
          question: "What is the output of: print(str(3.0))",
          options: { A: "3", B: "3.0", C: "'3.0'", D: "Error" },
          answer: "B",
          explanation: "str(3.0) converts the float to the text \"3.0\", and print shows it without quotes: 3.0. The .0 is kept because the float's standard representation includes it.",
          code: "print(str(3.0))    # 3.0\nprint(str(True))   # True\nprint(str(None))   # None",
          related: ["str()", "String representation"]
        },
        {
          difficulty: "medium",
          question: "What is the output of: print(type(10) == type(10.0))",
          options: { A: "True", B: "False", C: "Error", D: "10" },
          answer: "B",
          explanation: "type(10) is int and type(10.0) is float - two different types, so the comparison is False. Note that 10 == 10.0 (comparing VALUES) is True!",
          code: "print(10 == 10.0)              # True - equal values\nprint(type(10) == type(10.0))  # False - different types",
          related: ["type()", "Value vs type equality"]
        },
        {
          difficulty: "hard",
          question: "Which statement about int in Python 3 is TRUE?",
          options: {
            A: "It overflows above 2 billion like in C",
            B: "It has unlimited precision - it can hold arbitrarily large numbers",
            C: "It maxes out at 64 bits",
            D: "Big numbers must use the long type"
          },
          answer: "B",
          explanation: "Python 3 integers grow as large as memory allows - 2**1000 works fine. There's no overflow and no separate long type (that was Python 2). This is unusual: C, Java and JavaScript all have fixed-size integers.",
          code: "print(2 ** 100)\n# 1267650600228229401496703205376",
          related: ["Arbitrary precision", "Python 2 vs 3"]
        },
        {
          difficulty: "easy",
          question: "What is the output of: print(len(\"hello\"))",
          options: { A: "4", B: "5", C: "6", D: "Error" },
          answer: "B",
          explanation: "len() returns the number of characters in a string: \"hello\" has 5 letters. len() also works on lists, tuples, dicts and sets.",
          code: "print(len(\"hello\"))    # 5\nprint(len(\"\"))          # 0\nprint(len([1, 2, 3]))   # 3",
          related: ["len()", "Strings"]
        },
        {
          difficulty: "medium",
          question: "Which core types will we meet later that hold COLLECTIONS of values?",
          options: {
            A: "list, tuple, dict, set",
            B: "int, float, bool, str",
            C: "array, vector, map, table",
            D: "group, bundle, pack, batch"
          },
          answer: "A",
          explanation: "Python's four main collection types: list (ordered, changeable), tuple (ordered, unchangeable), dict (key-value pairs), set (unique values). Each gets its own topic later in this course.",
          code: "nums = [1, 2, 3]          # list\npoint = (4, 5)             # tuple\nages = {\"Ana\": 21}        # dict\nids = {101, 102, 103}      # set",
          related: ["Lists", "Tuples", "Dictionaries", "Sets"]
        }
      ]
    }
  ]
});
