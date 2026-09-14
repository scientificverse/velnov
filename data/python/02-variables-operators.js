/* ============================================================
   PYTHON - TOPIC 2: VARIABLES & OPERATORS (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "Python",
  icon: "🐍",
  color: "#3776ab",
  description: "Master Python from basics to advanced - 20 topics.",
  topics: [
    {
      name: "2. Variables & Operators",
      questions: [
        {
          difficulty: "easy",
          question: "Which of the following is a valid variable name in Python?",
          options: { A: "2count", B: "my-var", C: "_total", D: "class" },
          answer: "C",
          explanation: "Variable names must start with a letter or underscore, cannot contain hyphens, and cannot be reserved keywords. \"_total\" is valid. \"2count\" starts with a digit, \"my-var\" contains a hyphen, and \"class\" is a keyword.",
          code: "_total = 100      # valid\ncount2 = 5        # valid\n# 2count = 5      # SyntaxError\n# class = 'math'  # SyntaxError: keyword",
          notes: ["By convention, use snake_case: student_name, total_marks."],
          related: ["Keywords", "Identifiers"]
        },
        {
          difficulty: "easy",
          question: "What is the output of:\nx = 5\ny = x\nx = 10\nprint(y)",
          options: { A: "10", B: "5", C: "Error", D: "None" },
          answer: "B",
          explanation: "y = x makes y refer to the value 5. Reassigning x to 10 later does not change y - numbers are immutable, and y still points to 5.",
          code: "x = 5\ny = x     # y refers to 5\nx = 10    # only x changes\nprint(y)  # 5",
          related: ["Assignment", "References"]
        },
        {
          difficulty: "easy",
          question: "Are total and Total the same variable in Python?",
          options: {
            A: "Yes, capitalization doesn't matter",
            B: "No - Python is case-sensitive, they are two different variables",
            C: "Only inside functions",
            D: "Only if declared with var"
          },
          answer: "B",
          explanation: "Python is case-sensitive: total, Total and TOTAL are three separate variables. Using the wrong capitalization gives a NameError.",
          related: ["Case sensitivity", "NameError"]
        },
        {
          difficulty: "easy",
          question: "Which of these words CANNOT be used as a variable name?",
          options: { A: "value", B: "lambda", C: "data", D: "result" },
          answer: "B",
          explanation: "lambda is a reserved keyword (it creates anonymous functions), so it cannot be a variable name. Other keywords include if, for, class, def, return, True, False, None.",
          code: "import keyword\nprint(keyword.kwlist)   # shows all 35+ reserved words",
          related: ["Keywords", "lambda"]
        },
        {
          difficulty: "easy",
          question: "What does this multiple assignment do?\na, b = 1, 2",
          options: {
            A: "Error - only one variable per line",
            B: "a becomes 1 and b becomes 2",
            C: "Both a and b become (1, 2)",
            D: "a becomes 2 and b becomes 1"
          },
          answer: "B",
          explanation: "Python unpacks the values left to right: a gets 1, b gets 2. This is called tuple unpacking and works with any matching number of values.",
          code: "a, b = 1, 2\nx, y, z = \"do\", \"re\", \"mi\"",
          related: ["Unpacking", "Tuples"]
        },
        {
          difficulty: "medium",
          question: "What is the output of:\na, b = 5, 10\na, b = b, a\nprint(a, b)",
          options: { A: "5 10", B: "10 5", C: "10 10", D: "Error" },
          answer: "B",
          explanation: "a, b = b, a swaps the two variables in one line - the right side (10, 5) is built first, then unpacked. Most languages need a temporary third variable for this.",
          code: "a, b = 5, 10\na, b = b, a     # swap!\nprint(a, b)     # 10 5",
          notes: ["This one-line swap is a favorite Python interview question."],
          related: ["Unpacking", "Swapping"]
        },
        {
          difficulty: "medium",
          question: "After: x = y = z = 7 - what are the values?",
          options: {
            A: "Only z is 7; x and y are undefined",
            B: "x, y and z are all 7",
            C: "Error - chained assignment is not allowed",
            D: "x is 7, y and z are None"
          },
          answer: "B",
          explanation: "Chained assignment gives the same value to every name in the chain: all three variables now refer to 7.",
          code: "x = y = z = 7\nprint(x, y, z)   # 7 7 7",
          notes: ["Careful with mutable objects: x = y = [] makes BOTH names share ONE list."],
          related: ["Assignment", "References"]
        },
        {
          difficulty: "easy",
          question: "What does x += 3 mean?",
          options: {
            A: "x = x + 3",
            B: "x = 3",
            C: "Compare x with 3",
            D: "x = x * 3"
          },
          answer: "A",
          explanation: "+= is an augmented assignment operator: it adds 3 to the current value of x. Similar shortcuts: -=, *=, /=, //=, %=, **=.",
          code: "x = 10\nx += 3    # x is now 13\nx *= 2    # x is now 26",
          related: ["Augmented assignment", "Operators"]
        },
        {
          difficulty: "easy",
          question: "What is the output of: print(7 // 2)",
          options: { A: "3.5", B: "3", C: "4", D: "3.0" },
          answer: "B",
          explanation: "// is floor division - it divides and rounds DOWN to a whole number: 7 // 2 = 3. Regular division 7 / 2 would give 3.5.",
          code: "print(7 / 2)    # 3.5\nprint(7 // 2)   # 3",
          related: ["Floor division", "Division"]
        },
        {
          difficulty: "easy",
          question: "What is the output of: print(7 % 2)",
          options: { A: "3", B: "3.5", C: "1", D: "0" },
          answer: "C",
          explanation: "% is the modulo operator - it gives the REMAINDER after division. 7 divided by 2 is 3 remainder 1, so 7 % 2 = 1.",
          code: "print(10 % 3)   # 1\nprint(8 % 2)    # 0  (even numbers % 2 == 0)",
          notes: ["n % 2 == 0 is the standard test for even numbers."],
          related: ["Modulo", "Even/odd check"]
        },
        {
          difficulty: "easy",
          question: "What is the output of: print(2 ** 3)",
          options: { A: "6", B: "8", C: "9", D: "23" },
          answer: "B",
          explanation: "** is the power (exponent) operator: 2 ** 3 = 2 x 2 x 2 = 8. It is not multiplication (2 * 3 = 6).",
          code: "print(2 ** 3)    # 8\nprint(5 ** 2)    # 25\nprint(9 ** 0.5)  # 3.0 (square root!)",
          related: ["Exponentiation", "pow()"]
        },
        {
          difficulty: "medium",
          question: "What is the result type of: 10 / 5",
          options: { A: "int (2)", B: "float (2.0)", C: "str ('2')", D: "Error" },
          answer: "B",
          explanation: "In Python 3, / ALWAYS returns a float - even when the division is exact: 10 / 5 gives 2.0, not 2. Use // if you need an integer result.",
          code: "print(10 / 5)    # 2.0\nprint(10 // 5)   # 2",
          related: ["Division", "Numeric types"]
        },
        {
          difficulty: "easy",
          question: "What is the output of: print(2 + 3 * 4)",
          options: { A: "20", B: "14", C: "24", D: "9" },
          answer: "B",
          explanation: "Multiplication happens before addition (standard math precedence): 3 * 4 = 12, then 2 + 12 = 14.",
          code: "print(2 + 3 * 4)     # 14\nprint((2 + 3) * 4)   # 20 - parentheses first",
          related: ["Operator precedence", "BODMAS"]
        },
        {
          difficulty: "easy",
          question: "How do you force the addition to happen first in 2 + 3 * 4?",
          options: {
            A: "Write it as (2 + 3) * 4",
            B: "Use the keyword 'first'",
            C: "Put it on a separate line",
            D: "You cannot change the order"
          },
          answer: "A",
          explanation: "Parentheses have the highest precedence - anything inside them is evaluated first: (2 + 3) * 4 = 5 * 4 = 20.",
          related: ["Operator precedence", "Parentheses"]
        },
        {
          difficulty: "easy",
          question: "What is the difference between = and == ?",
          options: {
            A: "No difference",
            B: "= assigns a value; == compares two values",
            C: "== assigns a value; = compares",
            D: "== is only for strings"
          },
          answer: "B",
          explanation: "One equals sign stores a value in a variable (x = 5). Two equals signs ask a question - are these equal? - and give True or False (x == 5).",
          code: "x = 5          # assignment\nprint(x == 5)  # True (comparison)\nprint(x == 7)  # False",
          notes: ["Writing if x = 5: instead of if x == 5: is a SyntaxError in Python."],
          related: ["Assignment", "Comparison operators"]
        },
        {
          difficulty: "easy",
          question: "Which operator means NOT EQUAL in Python?",
          options: { A: "<>", B: "!=", C: "=/=", D: "not=" },
          answer: "B",
          explanation: "!= tests inequality: 5 != 3 is True. (The old <> form existed in Python 2 but was removed in Python 3.)",
          code: "print(5 != 3)   # True\nprint(5 != 5)   # False",
          related: ["Comparison operators"]
        },
        {
          difficulty: "easy",
          question: "What is the output of: print(True and False)",
          options: { A: "True", B: "False", C: "1", D: "Error" },
          answer: "B",
          explanation: "and is True only when BOTH sides are True. True and False -> False. Compare: or is True when AT LEAST ONE side is True.",
          code: "print(True and True)    # True\nprint(True and False)   # False\nprint(True or False)    # True",
          related: ["Logical operators", "Truth tables"]
        },
        {
          difficulty: "medium",
          question: "What is the output of: print(not (5 > 3))",
          options: { A: "True", B: "False", C: "5", D: "Error" },
          answer: "B",
          explanation: "5 > 3 is True, and not flips it to False. not simply reverses a boolean value.",
          code: "print(not True)      # False\nprint(not (5 > 3))   # False",
          related: ["not operator", "Booleans"]
        },
        {
          difficulty: "medium",
          question: "What is the output of: print(1 < 2 < 3)",
          options: { A: "True", B: "False", C: "Error", D: "3" },
          answer: "A",
          explanation: "Python allows chained comparisons: 1 < 2 < 3 means (1 < 2) and (2 < 3) - both are True, so the result is True. Most languages don't support this.",
          code: "age = 25\nprint(18 <= age < 60)   # True - very readable!",
          related: ["Chained comparison", "Comparison operators"]
        },
        {
          difficulty: "hard",
          question: "What is the output of:\nresult = 0 or \"hello\"\nprint(result)",
          options: { A: "0", B: "True", C: "hello", D: "Error" },
          answer: "C",
          explanation: "or returns the FIRST truthy value (not just True/False!). 0 is falsy, so or moves on and returns \"hello\" itself. This is called short-circuit evaluation.",
          code: "print(0 or \"hello\")    # hello\nprint(\"hi\" or \"bye\")   # hi (first truthy wins)\nprint(0 and \"hello\")   # 0 (and stops at first falsy)",
          notes: ["Common use: name = user_input or \"Guest\"  (default value)."],
          related: ["Short-circuit evaluation", "Truthiness"]
        },
        {
          difficulty: "hard",
          question: "What is the output of: print(-7 // 2)",
          options: { A: "-3", B: "-3.5", C: "-4", D: "4" },
          answer: "C",
          explanation: "Floor division rounds DOWN (toward negative infinity), not toward zero. -7 / 2 = -3.5, and rounding DOWN gives -4. This surprises people from C/Java where -7/2 truncates to -3.",
          code: "print(7 // 2)    # 3\nprint(-7 // 2)   # -4  (not -3!)",
          related: ["Floor division", "Negative numbers"]
        },
        {
          difficulty: "medium",
          question: "What does divmod(7, 2) return?",
          options: { A: "3.5", B: "(3, 1) - the quotient and remainder", C: "[3, 1]", D: "1" },
          answer: "B",
          explanation: "divmod(a, b) returns the tuple (a // b, a % b) - the whole-number quotient and the remainder in one call.",
          code: "q, r = divmod(7, 2)\nprint(q, r)   # 3 1",
          related: ["Floor division", "Modulo", "Tuples"]
        },
        {
          difficulty: "easy",
          question: "By convention, how are constants written in Python?",
          options: {
            A: "ALL_CAPS_WITH_UNDERSCORES",
            B: "camelCase",
            C: "with the const keyword",
            D: "prefixed with $"
          },
          answer: "A",
          explanation: "Python has no true const keyword - instead, ALL_CAPS names like MAX_SPEED = 120 signal 'please don't change this'. It's a convention, not enforced by the language.",
          code: "PI = 3.14159\nMAX_USERS = 100",
          related: ["Naming conventions", "PEP 8"]
        },
        {
          difficulty: "medium",
          question: "What happens after:\nx = 10\ndel x\nprint(x)",
          options: { A: "Prints 10", B: "Prints None", C: "NameError - x is not defined", D: "Prints 0" },
          answer: "C",
          explanation: "del removes the name x entirely. Using it afterwards raises NameError, exactly as if x had never existed.",
          code: "x = 10\ndel x\n# print(x)   # NameError: name 'x' is not defined",
          related: ["del statement", "NameError"]
        },
        {
          difficulty: "medium",
          question: "What does this show about Python?\nx = 5\nx = \"hello\"\nprint(x)",
          options: {
            A: "Error - x is locked to numbers",
            B: "Prints hello - variables can be rebound to any type (dynamic typing)",
            C: "Prints 5",
            D: "Prints 5hello"
          },
          answer: "B",
          explanation: "Python is dynamically typed: a variable is just a name and can point to a value of any type at any time. x pointed to an int, now it points to a string.",
          code: "x = 5          # int\nx = \"hello\"    # now str - perfectly legal\nprint(type(x))  # <class 'str'>",
          notes: ["Convenient, but it means type errors appear at runtime, not before."],
          related: ["Dynamic typing", "type()"]
        },
        {
          difficulty: "medium",
          question: "What does the global keyword do inside a function?",
          options: {
            A: "Creates a new local variable",
            B: "Lets the function modify a variable defined at module level",
            C: "Makes the variable visible to other files",
            D: "Declares a constant"
          },
          answer: "B",
          explanation: "Assigning inside a function normally creates a LOCAL variable. global tells Python the name refers to the module-level variable, so the function modifies the global one.",
          code: "count = 0\n\ndef increment():\n    global count\n    count += 1\n\nincrement()\nprint(count)  # 1",
          notes: ["Prefer return values over globals - easier to test and debug."],
          related: ["Scope", "LEGB rule"]
        },
        {
          difficulty: "hard",
          question: "What is the difference between == and is?",
          options: {
            A: "They are identical",
            B: "== compares values; is checks if both names point to the SAME object in memory",
            C: "is compares values; == checks memory",
            D: "is only works with numbers"
          },
          answer: "B",
          explanation: "== asks 'do these have equal values?'. is asks 'are these literally the same object?'. Two equal lists are == but not is. Use is only for None checks.",
          code: "a = [1, 2]\nb = [1, 2]\nprint(a == b)   # True  - same values\nprint(a is b)   # False - two separate lists\nprint(a is None) # False - the correct use of is",
          notes: ["Always write: if x is None:  (not == None)."],
          related: ["Identity", "id()", "None"]
        },
        {
          difficulty: "hard",
          question: "What is the output of: print(round(2.5), round(3.5))",
          options: { A: "3 4", B: "2 4", C: "3 3", D: "2 3" },
          answer: "B",
          explanation: "Python uses banker's rounding: exact halves round to the nearest EVEN number. round(2.5) -> 2, round(3.5) -> 4. This reduces bias when rounding many values.",
          code: "print(round(2.5))   # 2\nprint(round(3.5))   # 4\nprint(round(2.6))   # 3 (normal rounding)",
          related: ["Rounding", "Floating point"]
        },
        {
          difficulty: "easy",
          question: "What is the output of: print(abs(-5))",
          options: { A: "-5", B: "5", C: "0", D: "Error" },
          answer: "B",
          explanation: "abs() returns the absolute value - the distance from zero, always positive: abs(-5) = 5, abs(5) = 5.",
          code: "print(abs(-5))    # 5\nprint(abs(3.7))   # 3.7",
          related: ["Built-in functions", "Numbers"]
        },
        {
          difficulty: "medium",
          question: "What is the output of: print(min(4, 7, 1), max(4, 7, 1))",
          options: { A: "1 7", B: "4 1", C: "7 1", D: "1 4" },
          answer: "A",
          explanation: "min() returns the smallest of its arguments (1) and max() the largest (7). They also work on lists: min([4, 7, 1]).",
          code: "print(min(4, 7, 1))   # 1\nprint(max(4, 7, 1))   # 7\nprint(sum([4, 7, 1])) # 12",
          related: ["Built-in functions", "sum()"]
        }
      ]
    }
  ]
});
