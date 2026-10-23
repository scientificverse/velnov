/* ============================================================
   PYTHON - TOPIC OVERVIEWS (study notes)
   ------------------------------------------------------------
   Same format as data/notes/physics.js (see the notes at the top
   of that file), plus two things for programming subjects:
     { code: `...`, output: `...` }  a code block, with its real output
     `inline code` in any text       shown in a code font
   Every code block that has an `output` is run by
   tools/check-notes-code.js, and the build is only trusted when the
   printed output matches exactly.
   index.html does NOT load this file; tools/build-pages.js does.
   ============================================================ */

window.TOPIC_NOTES = window.TOPIC_NOTES || {};

TOPIC_NOTES["Python"] = {
  footnote: "Notes written by Velnov. Every code example with an output was run in Python 3 to check that the output shown is exactly what Python prints.",
  topics: {

    /* ---------------------------------------------------------- 1 */
    1: {
      topic: "Introduction & Setup",
      title: "Introduction to Python – your first programs",
      sections: [
        { h: "What is Python?", blocks: [
          "**Python** is a high-level, **interpreted** programming language created by **Guido van Rossum** and first released in **1991**. It is famous for clear, readable code.",
          { list: [
            "Python files end in `.py`, e.g. `hello.py`.",
            "You run a file from the terminal with `python hello.py`.",
            "`python --version` shows which version is installed.",
            "Behind the scenes, Python compiles your code to **bytecode** and runs it on the **Python Virtual Machine**. This happens automatically.",
          ] },
          { examples: ["Python is used for websites, data science, machine learning, automation scripts and teaching programming."] },
        ] },
        { h: "Your first program: print()", blocks: [
          "`print()` shows values on the screen. Text must be inside quotes; numbers and calculations need no quotes.",
          { code: `print("Hello, World!")
print(2 + 3)
print("2 + 3")`, output: `Hello, World!
5
2 + 3` },
          { remember: "Quotes mark the start and end of text (a **string**). They are not printed." },
        ] },
        { h: "print() options: sep and end", blocks: [
          { list: [
            "`sep` sets what goes **between** several values (a space by default).",
            "`end` sets what goes **after** the line (a new line by default).",
          ] },
          { code: `print("a", "b", "c")
print("a", "b", "c", sep="-")
print("Hello", end=" ")
print("World")`, output: `a b c
a-b-c
Hello World` },
        ] },
        { h: "Escape sequences", blocks: [
          "An **escape sequence** is a backslash code inside a string: `\\n` means a new line and `\\t` means a tab.",
          { code: `print("Hello\\nWorld")
print("Name\\tAge")
print('She said "hi"')`, output: `Hello
World
Name	Age
She said "hi"` },
          { remember: "To print double quotes, wrap the string in single quotes (or the other way round)." },
        ] },
        { h: "Comments and docstrings", blocks: [
          "A **comment** starts with `#`. Python ignores everything after it on that line. A **docstring** is a triple-quoted string right under a function, used as its built-in help.",
          { code: `# This line is a comment
print("Hi")  # a comment can follow code

def greet():
    """Print a friendly greeting."""
    print("Hello")

greet()`, output: `Hi
Hello` },
        ] },
        { h: "Indentation defines blocks", blocks: [
          "Python uses **indentation** (spaces at the start of a line) to group code. Lines indented under an `if`, loop or function belong to it. Other languages use `{ }` for this.",
          { code: `score = 70
if score > 50:
    print("Pass")    # inside the if
print("Done")        # outside the if`, output: `Pass
Done` },
          { remember: "Inconsistent spacing gives an **IndentationError**. Use 4 spaces per level." },
        ] },
        { h: "Getting input from the user", blocks: [
          "`input()` shows a prompt, waits for the user to type, and **always returns a string**. Convert it with `int()` or `float()` to do maths.",
          { code: `name = input("Your name: ")
age = int(input("Your age: "))   # convert text to a number
print("Hello", name, "- next year you will be", age + 1)` },
          { remember: "If the user types `hello`, `int()` fails with a **ValueError**. You will learn to handle that in Error Handling." },
        ] },
        { h: "Ways to run Python", blocks: [
          { list: [
            "**Script:** write a `.py` file and run `python file.py`. Lines run from top to bottom.",
            "**REPL (interactive shell):** type `python` and press Enter. You get a `>>>` prompt where each line runs immediately; great for experimenting.",
            "**Editors:** IDLE comes with Python; VS Code and PyCharm are popular editors.",
          ] },
          { examples: [
            "`help(print)` shows the documentation for `print`.",
            "`import this` prints the **Zen of Python**, e.g. “Readability counts.”",
          ] },
          { remember: "A statement ends at the end of the line, so **no semicolons are needed**. Python is **case-sensitive**: `print` works, but `Print` is a NameError." },
        ] },
      ],
      misconceptions: [
        ["input() returns a number when the user types digits.", "input() always returns a string; convert it with int() or float()."],
        ["Indentation is just for neatness.", "In Python, indentation is the structure; wrong spacing is an error."],
        ["Every line must end with a semicolon.", "A new line ends a statement; semicolons are allowed but considered bad style."],
        ["Print and print are the same.", "Python is case-sensitive; only print exists."],
        ["Python is too slow to be compiled at all.", "Python compiles to bytecode automatically and runs it on the Python Virtual Machine."],
      ],
      revision: [
        ["Interpreter", "Runs Python code line by line."],
        ["print()", "Shows values on the screen."],
        ["input()", "Reads what the user types, as a string."],
        ["Comment", "Text after # that Python ignores."],
        ["Docstring", "Triple-quoted help text under a function."],
        ["Indentation", "Spaces at the start of a line that group code into blocks."],
        ["REPL", "Interactive shell where each line runs immediately."],
        ["\\n", "Escape sequence for a new line."],
      ],
      questions: [
        ["Who created Python?", "Guido van Rossum (first released in 1991)."],
        ["What type does input() always return?", "A string (str)."],
        ["Which symbol starts a comment?", "#"],
        ["What does print(\"a\", \"b\", sep=\"-\") show?", "a-b"],
        ["What is printed by print(\"2 + 3\")?", "2 + 3 (it is text, so it is not calculated)."],
        ["Which error comes from inconsistent spacing at the start of lines?", "IndentationError."],
        ["How do you run a file called app.py?", "python app.py"],
        ["What is the REPL?", "The interactive shell, where you type code and see results immediately."],
      ],
      takeaway: "Python reads like plain English: print() to show, input() to ask (always text), # for comments, and indentation to group code.",
    },

    /* ---------------------------------------------------------- 2 */
    2: {
      topic: "Variables & Operators",
      title: "Variables and Operators – storing values and calculating",
      sections: [
        { h: "Variables", blocks: [
          "A **variable** is a name that refers to a value. You create one with `=` (assignment). Python is **dynamically typed**: a name can later refer to a value of a different type.",
          { code: `x = 5
print(x)
x = "hello"      # now x refers to a string
print(x)`, output: `5
hello` },
          { h: "Naming rules", blocks: [
            { list: [
              "Start with a **letter or underscore**, then letters, digits or underscores.",
              "No spaces or hyphens, and no **keywords** such as `class`, `if` or `lambda`.",
              "Names are **case-sensitive**: `total` and `Total` are different.",
              "Style: `snake_case` for variables, `ALL_CAPS` for constants, e.g. `MAX_USERS = 100`.",
            ] },
            { examples: ["Valid: `_total`, `count2`, `user_name`. Invalid: `2count`, `my-var`, `class`."] },
          ] },
        ] },
        { h: "Multiple assignment and swapping", blocks: [
          "You can assign several names at once. Swapping two variables needs no temporary variable.",
          { code: `a, b = 1, 2
a, b = b, a        # swap
print(a, b)
x = y = z = 7
print(x, y, z)`, output: `2 1
7 7 7` },
        ] },
        { h: "Arithmetic operators", blocks: [
          { list: [
            "`+` add, `-` subtract, `*` multiply.",
            "`/` divide: **always gives a float**.",
            "`//` floor division: divides and rounds **down**.",
            "`%` modulo: the **remainder**.",
            "`**` power.",
          ] },
          { code: `print(7 / 2)
print(10 / 5)
print(7 // 2)
print(7 % 2)
print(2 ** 3)
print(-7 // 2)     # rounds DOWN, not toward zero`, output: `3.5
2.0
3
1
8
-4` },
          { remember: "`n % 2 == 0` is the standard test for an even number." },
        ] },
        { h: "Order of operations", blocks: [
          "Python follows maths rules: `**` first, then `*` `/` `//` `%`, then `+` `-`. **Parentheses** come before everything. `**` groups from **right to left**.",
          { code: `print(2 + 3 * 4)
print((2 + 3) * 4)
print(2 ** 3 ** 2)   # 2 ** (3 ** 2) = 2 ** 9`, output: `14
20
512` },
        ] },
        { h: "Augmented assignment", blocks: [
          "`x += 3` is a shortcut for `x = x + 3`. The same works for `-=`, `*=`, `/=`, `//=`, `%=` and `**=`.",
          { code: `x = 10
x += 3
x *= 2
print(x)`, output: `26` },
        ] },
        { h: "Comparison operators", blocks: [
          "Comparisons give `True` or `False`: `==` equal, `!=` not equal, `<`, `>`, `<=`, `>=`. Python also allows **chained** comparisons.",
          { code: `print(5 == 5, 5 != 3)
age = 25
print(18 <= age < 60)   # chained comparison`, output: `True True
True` },
          { remember: "`=` **stores** a value; `==` **compares** two values." },
        ] },
        { h: "Logical operators: and, or, not", blocks: [
          { list: [
            "`and` is True only when **both** sides are true.",
            "`or` is True when **at least one** side is true.",
            "`not` flips True and False.",
          ] },
          "They **short-circuit**: Python stops as soon as the answer is known. `or` returns the **first truthy value**, which is handy for defaults.",
          { code: `print(True and False)
print(not (5 > 3))
print(0 or "hello")
name = ""
print(name or "Guest")`, output: `False
False
hello
Guest` },
        ] },
        { h: "Useful built-in functions", blocks: [
          { code: `print(abs(-5))
print(min(4, 7, 1), max(4, 7, 1))
print(divmod(7, 2))          # (quotient, remainder)
print(round(2.5), round(3.5))  # halves round to the EVEN number`, output: `5
1 7
(3, 1)
2 4` },
          { remember: "`round()` uses **banker's rounding**: an exact half goes to the nearest even number." },
        ] },
      ],
      misconceptions: [
        ["10 / 5 gives 2.", "/ always gives a float: 10 / 5 is 2.0. Use // for a whole-number result."],
        ["-7 // 2 is -3.", "// rounds down (towards negative infinity), so -7 // 2 is -4."],
        ["= and == mean the same.", "= assigns a value; == compares two values."],
        ["`2 ** 3 ** 2` is 64.", "`**` groups right to left: `2 ** (3 ** 2)` = 512."],
        ["round(2.5) is 3.", "Python rounds halves to the even number, so round(2.5) is 2."],
      ],
      revision: [
        ["Variable", "A name that refers to a value."],
        ["Dynamic typing", "A name can refer to any type at any time."],
        ["`/`", "Division; always returns a float."],
        ["`//`", "Floor division; rounds down."],
        ["`%`", "Modulo; the remainder."],
        ["`**`", "Power (exponent)."],
        ["`==`", "Compares two values."],
        ["Short-circuit", "and/or stop as soon as the result is known."],
      ],
      questions: [
        ["What does 7 // 2 give?", "3"],
        ["What does 7 % 2 give?", "1 (the remainder)."],
        ["What type does 10 / 5 return?", "A float: 2.0."],
        ["How do you swap a and b in one line?", "a, b = b, a"],
        ["What is `2 + 3 * 4`?", "14 (multiplication first)."],
        ["What does 0 or \"hello\" return?", "\"hello\", the first truthy value."],
        ["Is 2count a valid variable name?", "No: names cannot start with a digit."],
        ["What does 18 <= 25 < 60 give?", "True (a chained comparison)."],
      ],
      takeaway: "Variables are names for values; remember that / gives a float, // rounds down, % gives the remainder, and = assigns while == compares.",
    },

    /* ---------------------------------------------------------- 3 */
    3: {
      topic: "Data Types & Conversion",
      title: "Data Types and Conversion – what kind of value is it?",
      sections: [
        { h: "The basic data types", blocks: [
          "Every value has a **type**, which decides what you can do with it. `type()` tells you a value's type.",
          { list: [
            "`int`: whole numbers, e.g. `5`, `-12`.",
            "`float`: numbers with a decimal point, e.g. `3.14`.",
            "`str`: text, e.g. `\"hello\"`.",
            "`bool`: `True` or `False` (capital letters).",
            "`NoneType`: the single value `None`, meaning “no value”.",
            "`complex`: numbers like `2 + 3j`.",
          ] },
          { code: `print(type(5))
print(type(5.0))
print(type("5"))
print(type(True))
print(type(None))`, output: `<class 'int'>
<class 'float'>
<class 'str'>
<class 'bool'>
<class 'NoneType'>` },
        ] },
        { h: "Converting between types", blocks: [
          "**Type conversion** (casting) changes a value into another type with `int()`, `float()`, `str()` or `bool()`. Python never mixes strings and numbers on its own.",
          { code: `print(int("12") + 3)
print(str(5) + "5")
print(int(3.9))        # cuts off the decimal, does not round
print(float("7"))
print(int(float("3.5")))`, output: `15
55
3
7.0
3` },
          { remember: "`\"5\" + 5` is a **TypeError**, and `int(\"3.5\")` is a **ValueError**. Convert in two steps: `int(float(\"3.5\"))`." },
          { h: "Mixing int and float", blocks: [
            "When an int and a float meet in arithmetic, the result is a float.",
            { code: `print(2 + 3.0)
print(10 == 10.0, type(10) == type(10.0))`, output: `5.0
True False` },
          ] },
        ] },
        { h: "Truthy and falsy values", blocks: [
          "In a condition, every value counts as true or false. **Falsy** values are `0`, `0.0`, `\"\"` (empty string), empty containers (`[]`, `{}`, `()`), `None` and `False`. Everything else is **truthy**.",
          { code: `print(bool(""), bool("hi"))
print(bool("False"))     # a non-empty string!
print(bool(0), bool(-1))
print(bool([]), bool([0]))`, output: `False True
True
False True
False True` },
        ] },
        { h: "bool is a kind of int", blocks: [
          "In Python, `True` behaves like `1` and `False` like `0`. This makes `sum()` a quick way to count `True` values.",
          { code: `print(True + True)
print(isinstance(True, int))
passed = [True, False, True]
print(sum(passed))`, output: `2
True
2` },
        ] },
        { h: "Floats are approximate", blocks: [
          "Floats are stored in binary, so many decimals cannot be stored exactly. **Never compare floats with `==`**; use `math.isclose()`.",
          { code: `import math
print(0.1 + 0.2)
print(0.1 + 0.2 == 0.3)
print(math.isclose(0.1 + 0.2, 0.3))`, output: `0.30000000000000004
False
True` },
        ] },
        { h: "Integers have no size limit", blocks: [
          "Python's `int` can grow as large as memory allows, so there is no overflow.",
          { code: `print(2 ** 100)
print(int("ff", 16), int("1010", 2))   # hex and binary`, output: `1267650600228229401496703205376
255 10` },
        ] },
        { h: "Checking types: isinstance()", blocks: [
          "`isinstance(x, int)` is the preferred check. It also accepts subclasses and a tuple of types.",
          { code: `print(isinstance(5, int))
print(isinstance(5.0, (int, float)))
x = None
print(x is None)`, output: `True
True
True` },
        ] },
      ],
      misconceptions: [
        ["bool(\"False\") is False.", "Any non-empty string is truthy, so bool(\"False\") is True."],
        ["int(3.9) rounds to 4.", "int() cuts off the decimal part: int(3.9) is 3."],
        ["0.1 + 0.2 == 0.3 is True.", "Floats are approximate; use math.isclose()."],
        ["None is the same as 0 or \"\".", "None is its own value meaning “nothing”, though it is falsy."],
        ["\"5\" + 5 gives 10.", "It is a TypeError; Python never mixes text and numbers automatically."],
      ],
      revision: [
        ["int", "Whole number."],
        ["float", "Number with a decimal point."],
        ["str", "Text."],
        ["bool", "True or False."],
        ["None", "The “no value” value."],
        ["Falsy", "0, empty string, empty containers, None, False."],
        ["type()", "Tells you a value's type."],
        ["isinstance()", "Checks a type, including subclasses."],
      ],
      questions: [
        ["What is the type of 5.0?", "float"],
        ["What does int(\"12\") + 3 give?", "15"],
        ["What does str(5) + \"5\" give?", "\"55\""],
        ["What does bool(\"\") give?", "False"],
        ["What does True + True give?", "2"],
        ["Why is 0.1 + 0.2 == 0.3 False?", "Floats are stored approximately in binary."],
        ["What error does int(\"3.5\") raise?", "ValueError."],
        ["Which is better: type(x) == int or isinstance(x, int)?", "isinstance(x, int): it also accepts subclasses."],
      ],
      takeaway: "Know each value's type, convert explicitly with int(), float() and str(), remember which values are falsy, and never compare floats with ==.",
    },

    /* ---------------------------------------------------------- 4 */
    4: {
      topic: "Strings",
      title: "Strings – working with text",
      sections: [
        { h: "What is a string?", blocks: [
          "A **string** (`str`) is a sequence of characters, written in single, double or triple quotes. Strings are **immutable**: once created, they cannot be changed.",
          { code: `a = 'hello'
b = "hello"
menu = """1. Start
2. Quit"""
print(a == b)
print(menu)`, output: `True
1. Start
2. Quit` },
        ] },
        { h: "Indexing", blocks: [
          "Each character has a position (**index**) starting at **0**. **Negative** indexes count from the end.",
          { code: `s = "python"
print(s[0], s[2])
print(s[-1], s[-2])
print(len(s))`, output: `p t
n o
6` },
        ] },
        { h: "Slicing", blocks: [
          "`s[start:end:step]` takes a piece of the string, **up to but not including** `end`.",
          { code: `s = "python"
print(s[1:4])
print(s[:3], s[3:])
print(s[::2])
print(s[::-1])      # reversed`, output: `yth
pyt hon
pto
nohtyp` },
          { examples: ["Palindrome check: `s == s[::-1]` is True for `\"madam\"`."] },
        ] },
        { h: "Common string methods", blocks: [
          "Methods return a **new** string; the original is unchanged.",
          { code: `s = "  Hello World  "
print(s.strip())
print(s.strip().lower(), s.strip().upper())
print("hello world".title())
print("banana".replace("a", "o"))
print("banana".count("a"))
print("report.pdf".endswith(".pdf"))
print("123".isdigit(), "12.5".isdigit())`, output: `Hello World
hello world HELLO WORLD
Hello World
bonono
3
True
True False` },
        ] },
        { h: "split() and join()", blocks: [
          { list: [
            "`split()` cuts a string into a **list** of pieces.",
            "`join()` glues a list of strings together with a separator.",
          ] },
          { code: `print("a,b,c".split(","))
print("one two  three".split())
words = ["a", "b", "c"]
print("-".join(words))`, output: `['a', 'b', 'c']
['one', 'two', 'three']
a-b-c` },
        ] },
        { h: "Searching: in, find() and index()", blocks: [
          { list: [
            "`\"py\" in \"python\"` tests whether a substring exists.",
            "`find()` returns the position, or `-1` if not found.",
            "`index()` returns the position, but raises **ValueError** if not found.",
          ] },
          { code: `s = "hello"
print("ll" in s)
print(s.find("ll"), s.find("xy"))`, output: `True
2 -1` },
        ] },
        { h: "f-strings and format()", blocks: [
          "An **f-string** starts with `f` and fills in `{expressions}` inside the text. A format code after `:` controls the display, e.g. `.2f` for 2 decimal places.",
          { code: `name, age = "Ana", 21
print(f"Hello {name}, you are {age}")
print(f"Next year: {age + 1}")
price = 100
print(f"Total: {price * 1.18:.2f}")
print("Hello {}, you are {}".format(name, age))`, output: `Hello Ana, you are 21
Next year: 22
Total: 118.00
Hello Ana, you are 21` },
        ] },
        { h: "Joining, repeating and immutability", blocks: [
          { code: `print("ab" * 3)
print("-" * 10)
s = "hello"
s = "H" + s[1:]     # build a new string
print(s)
age = 21
print("Age: " + str(age))`, output: `ababab
----------
Hello
Age: 21` },
          { remember: "`s[0] = \"H\"` is a **TypeError**, because strings can't be changed in place. And `\"Age: \" + 21` is also a TypeError: convert with `str()`, or use an f-string." },
        ] },
        { h: "Characters and comparison", blocks: [
          "Strings compare **alphabetically** by character codes. `ord()` gives a character's number, and `chr()` does the reverse.",
          { code: `print("apple" < "banana")
print("Zoo" < "apple")      # capitals come first
print(ord("A"), chr(66))`, output: `True
True
65 B` },
        ] },
      ],
      misconceptions: [
        ["s[1:4] includes index 4.", "The end index is excluded: s[1:4] gives indexes 1, 2 and 3."],
        ["s.upper() changes s.", "Strings are immutable; upper() returns a new string."],
        ["\"Age: \" + 21 works.", "You cannot add str and int; use str(21) or an f-string."],
        ["find() raises an error when not found.", "find() returns -1; index() is the one that raises ValueError."],
        ["\\n is two characters.", "\\n is one character (a new line); len(\"a\\nb\") is 3."],
      ],
      revision: [
        ["Index", "Position of a character, starting at 0."],
        ["Negative index", "Counts from the end; -1 is the last character."],
        ["Slice", "s[start:end:step]; end is excluded."],
        ["s[::-1]", "The string reversed."],
        ["split()", "Cuts a string into a list."],
        ["join()", "Glues a list of strings together."],
        ["f-string", "f\"...{expr}...\" fills in values."],
        ["Immutable", "Cannot be changed after it is created."],
      ],
      questions: [
        ["For s = \"python\", what is s[-1]?", "\"n\""],
        ["What does \"python\"[1:4] give?", "\"yth\""],
        ["How do you reverse a string s?", "s[::-1]"],
        ["What does \"a,b,c\".split(\",\") return?", "['a', 'b', 'c']"],
        ["What does \"-\".join([\"a\", \"b\"]) return?", "\"a-b\""],
        ["What does \"hello\".find(\"z\") return?", "-1"],
        ["How do you show a price with 2 decimal places in an f-string?", "f\"{price:.2f}\""],
        ["Why does s[0] = \"H\" fail?", "Strings are immutable; build a new string instead."],
      ],
      takeaway: "Strings are immutable sequences: index from 0, slice with [start:end:step], and use methods, split/join and f-strings to build new text.",
    },

    /* ---------------------------------------------------------- 5 */
    5: {
      topic: "Conditionals",
      title: "Conditionals – making decisions with if, elif and else",
      sections: [
        { h: "if, elif and else", blocks: [
          "An **if statement** runs a block only when its condition is true. `elif` (“else if”) checks another condition, and `else` runs when **nothing** above matched. Each line ends with a colon, and the body is indented.",
          { code: `score = 82
if score >= 90:
    print("A")
elif score >= 75:
    print("B")
elif score >= 60:
    print("C")
else:
    print("Fail")`, output: `B` },
        ] },
        { h: "Order matters in elif chains", blocks: [
          "Python stops at the **first** true condition and skips the rest. Put the **most specific** test first.",
          { code: `score = 95
# Wrong order: 95 >= 60 is true first
if score >= 60:
    print("C")
elif score >= 90:
    print("A")

# Right order
if score >= 90:
    print("A")
elif score >= 60:
    print("C")`, output: `C
A` },
          { remember: "Two separate `if` statements are **both** checked; an `if`/`elif` chain picks only **one** branch." },
        ] },
        { h: "Conditions can be any value", blocks: [
          "An `if` works with truthiness: empty containers, `0`, `\"\"` and `None` count as false.",
          { code: `items = []
if items:
    print("has items")
else:
    print("empty")`, output: `empty` },
          { examples: ["`if items:` is the Pythonic way to check for a non-empty list, instead of `len(items) > 0`."] },
        ] },
        { h: "Combining conditions", blocks: [
          { list: [
            "Use `and`, `or` and `not` to combine conditions.",
            "Use a **chained** comparison for ranges: `10 <= x <= 20`.",
            "Use `in` to test membership: `fruit in [\"apple\", \"mango\"]`.",
          ] },
          { code: `age, has_id = 20, True
if age >= 18 and has_id:
    print("entry allowed")
x = 15
print(10 <= x <= 20)
print("apple" in ["apple", "mango"])`, output: `entry allowed
True
True` },
          { h: "A common bug", blocks: [
            "`if age == 13 or 14 or 15:` is **always true**, because `14` on its own is a truthy value. Write `if age in (13, 14, 15):` instead.",
          ] },
        ] },
        { h: "The conditional expression (ternary)", blocks: [
          "A **conditional expression** picks one of two values in a single line: `A if condition else B`.",
          { code: `age = 15
status = "adult" if age >= 18 else "minor"
print(status)
n = 7
print("even" if n % 2 == 0 else "odd")`, output: `minor
odd` },
        ] },
        { h: "Short-circuit guards", blocks: [
          "`and` stops at the first false part, so you can put a **safety check** first.",
          { code: `x = 0
if x != 0 and 10 / x > 2:
    print("big")
else:
    print("skipped safely")`, output: `skipped safely` },
          { remember: "Reversing the order (`10 / x > 2 and x != 0`) would crash with **ZeroDivisionError** when `x` is 0." },
        ] },
        { h: "Checking for None and placeholders", blocks: [
          { list: [
            "Check for `None` with `is`: `if result is None:`.",
            "`pass` does nothing. Use it as a placeholder where Python needs a block.",
          ] },
          { code: `result = None
if result is None:
    print("not found")
if True:
    pass    # TODO: write this later`, output: `not found` },
        ] },
        { h: "match / case (Python 3.10+)", blocks: [
          "`match` compares a value against several patterns, like a `switch` in other languages. `case _:` is the default.",
          { code: `command = "stop"
match command:
    case "start":
        print("starting")
    case "stop":
        print("stopping")
    case _:
        print("unknown")`, output: `stopping` },
        ] },
        { h: "Comparing input", blocks: [
          "Input is text, so compare it to text, or convert it first.",
          { code: `age = "18"            # what input() would give you
print(age == 18)      # a string never equals a number
print(int(age) == 18)`, output: `False
True` },
        ] },
      ],
      misconceptions: [
        ["if x = 5: compares x with 5.", "= is assignment and is a SyntaxError in a condition; use ==."],
        ["All branches of an elif chain can run.", "Only the first true branch runs."],
        ["age == 13 or 14 checks two ages.", "It is always true; write age in (13, 14)."],
        ["\"18\" == 18 is True.", "A string never equals a number; convert with int() first."],
        ["x == None is the best None check.", "Use x is None."],
      ],
      revision: [
        ["if", "Runs a block when a condition is true."],
        ["elif", "Checks another condition if the earlier ones failed."],
        ["else", "Runs when no condition matched."],
        ["Ternary", "A if condition else B, in one line."],
        ["and / or / not", "Combine or flip conditions."],
        ["in", "Tests membership."],
        ["pass", "A placeholder that does nothing."],
        ["match / case", "Pattern matching, from Python 3.10."],
      ],
      questions: [
        ["When does an else block run?", "When none of the if/elif conditions were true."],
        ["score = 95, and the chain checks >= 60 first. Which branch runs?", "The >= 60 branch, because it is the first true condition."],
        ["What does if []: count as?", "False, because an empty list is falsy."],
        ["Write a one-line condition that sets status to \"adult\" or \"minor\".", "status = \"adult\" if age >= 18 else \"minor\""],
        ["Why is if age == 13 or 14: always true?", "14 alone is truthy, so the or is always true."],
        ["How do you check if x is None?", "if x is None:"],
        ["What does pass do?", "Nothing; it is a placeholder."],
        ["What is \"18\" == 18?", "False."],
      ],
      takeaway: "Python picks the first true branch of an if/elif chain, so order your tests carefully, and remember that any value can act as a condition.",
    },

    /* ---------------------------------------------------------- 6 */
    6: {
      topic: "Loops",
      title: "Loops – repeating work with for and while",
      sections: [
        { h: "The for loop and range()", blocks: [
          "A **for loop** runs once for each item in an iterable (a list, string, range…). `range(start, stop, step)` produces numbers up to, but **not including**, `stop`.",
          { code: `for i in range(3):
    print(i)
print(list(range(2, 10, 2)))
print(list(range(5, 0, -1)))   # counting down`, output: `0
1
2
[2, 4, 6, 8]
[5, 4, 3, 2, 1]` },
          { h: "Looping over strings and lists", blocks: [
            { code: `for ch in "abc":
    print(ch, end=" ")
print()
for fruit in ["apple", "mango"]:
    print(fruit)`, output: `a b c
apple
mango` },
          ] },
        ] },
        { h: "The while loop", blocks: [
          "A **while loop** repeats as long as its condition is true. You must change something inside the loop, or it never stops (an **infinite loop**; press **Ctrl+C** to stop it).",
          { code: `i = 1
while i <= 3:
    print(i)
    i += 1        # without this the loop runs forever`, output: `1
2
3` },
          { remember: "Use `for` when you know **what** to loop over, and `while` when you only know **when to stop**." },
        ] },
        { h: "break, continue and pass", blocks: [
          { list: [
            "`break` **exits** the loop immediately.",
            "`continue` **skips** the rest of this round and goes to the next one.",
            "`pass` does nothing at all.",
          ] },
          { code: `for n in [3, 7, 12, 5]:
    if n > 10:
        break
    print(n)
for i in range(5):
    if i == 2:
        continue
    print(i, end=" ")`, output: `3
7
0 1 3 4 ` },
        ] },
        { h: "Common loop patterns", blocks: [
          { h: "A. Running total (accumulator)", blocks: [
            { code: `total = 0
for i in range(1, 5):
    total += i
print(total)`, output: `10` },
          ] },
          { h: "B. Counting matches", blocks: [
            { code: `count = 0
for ch in "banana":
    if ch in "aeiou":
        count += 1
print(count)`, output: `3` },
          ] },
          { h: "C. Nested loops", blocks: [
            "The inner loop runs fully for **each** round of the outer loop, so the counts multiply.",
            { code: `for i in range(1, 4):
    print("*" * i)`, output: `*
**
***` },
          ] },
        ] },
        { h: "enumerate(), zip() and reversed()", blocks: [
          { list: [
            "`enumerate()` gives the **index and the item** together.",
            "`zip()` walks several lists side by side, stopping at the shortest.",
            "`reversed()` loops backwards without changing the list.",
          ] },
          { code: `for i, fruit in enumerate(["apple", "mango"], start=1):
    print(i, fruit)
for name, mark in zip(["Ana", "Ben"], [90, 85]):
    print(name, mark)
print(list(reversed([1, 2, 3])))`, output: `1 apple
2 mango
Ana 90
Ben 85
[3, 2, 1]` },
        ] },
        { h: "The loop else clause", blocks: [
          "A loop's `else` block runs only if the loop finished **without** a `break`. It is perfect for searches.",
          { code: `for n in [1, 3, 5]:
    if n == 4:
        print("found")
        break
else:
    print("not found")`, output: `not found` },
        ] },
        { h: "Loops that run at least once", blocks: [
          "Python has no do-while loop. Use `while True:` with a `break`.",
          { code: `while True:
    choice = input("Command (q to quit): ")
    if choice == "q":
        break
    print("You chose", choice)` },
        ] },
        { h: "Two traps", blocks: [
          { list: [
            "**Don't remove items from a list while looping over it**: items shift and get skipped. Loop over a copy (`nums[:]`) or build a new list.",
            "**The loop variable survives** after a for loop, holding its last value.",
          ] },
          { code: `nums = [1, -2, -3, 4]
nums = [x for x in nums if x >= 0]   # safe filtering
print(nums)
for i in range(3):
    pass
print(i)`, output: `[1, 4]
2` },
        ] },
      ],
      misconceptions: [
        ["range(5) includes 5.", "range(5) gives 0 to 4; the stop value is excluded."],
        ["break exits all nested loops.", "break exits only the innermost loop."],
        ["continue and pass do the same thing.", "continue skips to the next round; pass does nothing and the code below still runs."],
        ["A loop's else runs when the loop condition is false at the start.", "It runs when the loop ends without a break."],
        ["You can loop over a number: for i in 5.", "An int is not iterable; use range(5)."],
      ],
      revision: [
        ["for loop", "Repeats once per item in an iterable."],
        ["range()", "Numbers from start up to (not including) stop."],
        ["while loop", "Repeats while a condition is true."],
        ["break", "Leaves the loop."],
        ["continue", "Skips to the next round."],
        ["enumerate()", "Gives index and item together."],
        ["zip()", "Loops over several sequences side by side."],
        ["Loop else", "Runs if the loop ended without break."],
      ],
      questions: [
        ["How many times does for i in range(5) run?", "5 times (0 to 4)."],
        ["What does list(range(2, 10, 2)) give?", "[2, 4, 6, 8]"],
        ["What most often causes an infinite while loop?", "Forgetting to update the loop variable."],
        ["What does continue do?", "Skips the rest of this round and starts the next one."],
        ["How many stars does a 3 × 2 nested loop print (one per inner round)?", "6"],
        ["What does enumerate() give you?", "The index and the item."],
        ["When does a loop's else block run?", "When the loop finishes without break."],
        ["How do you stop a program stuck in an infinite loop?", "Press Ctrl+C."],
      ],
      takeaway: "Use for to go through items and while to repeat until a condition changes; break leaves, continue skips, and enumerate/zip keep loops clean.",
    },

    /* ---------------------------------------------------------- 7 */
    7: {
      topic: "Lists & Tuples",
      title: "Lists and Tuples – ordered collections",
      sections: [
        { h: "Lists", blocks: [
          "A **list** is an ordered, **changeable** (mutable) collection, written in square brackets. It can hold any mix of types. Indexing and slicing work just like strings.",
          { code: `fruits = ["apple", "mango", "banana"]
print(fruits[0], fruits[-1])
print(fruits[1:])
print(len(fruits))
fruits[0] = "kiwi"          # lists can be changed
print(fruits)`, output: `apple banana
['mango', 'banana']
3
['kiwi', 'mango', 'banana']` },
        ] },
        { h: "Adding and removing items", blocks: [
          { list: [
            "`append(x)` adds one item at the end.",
            "`insert(i, x)` adds an item at position `i`.",
            "`extend(list)` adds every item from another list.",
            "`remove(x)` deletes the first item equal to `x`.",
            "`pop(i)` removes the item at position `i` (the last by default) and **returns** it.",
            "`del nums[i]` deletes by position.",
          ] },
          { code: `nums = [10, 20, 30]
nums.append(40)
nums.insert(1, 99)
print(nums)
nums.remove(99)
last = nums.pop()
print(nums, last)
del nums[0]
print(nums)`, output: `[10, 99, 20, 30, 40]
[10, 20, 30] 40
[20, 30]` },
          { h: "append() vs extend()", blocks: [
            { code: `a = [1, 2]
a.append([3, 4])
print(a)
b = [1, 2]
b.extend([3, 4])
print(b)`, output: `[1, 2, [3, 4]]
[1, 2, 3, 4]` },
          ] },
        ] },
        { h: "Sorting", blocks: [
          { list: [
            "`list.sort()` sorts the list **in place** and returns `None`.",
            "`sorted(x)` returns a **new** sorted list and leaves the original alone.",
          ] },
          { code: `nums = [5, 2, 8, 1]
print(sorted(nums))
print(nums)
result = nums.sort()
print(result, nums)
nums.sort(reverse=True)
print(nums)`, output: `[1, 2, 5, 8]
[5, 2, 8, 1]
None [1, 2, 5, 8]
[8, 5, 2, 1]` },
          { remember: "`x = nums.sort()` sets `x` to `None`, a very common bug." },
        ] },
        { h: "Useful list operations", blocks: [
          { code: `nums = [4, 1, 7]
print(max(nums), min(nums), sum(nums))
print(sum(nums) / len(nums))
print(7 in nums)
print([1, 2] + [3, 4], [0] * 3)
print([10, 20, 30, 20].index(20), [10, 20, 30, 20].count(20))`, output: `7 1 12
4.0
True
[1, 2, 3, 4] [0, 0, 0]
1 2` },
        ] },
        { h: "Copying: names vs copies", blocks: [
          "`b = a` does **not** copy a list. Both names refer to the **same** list, so a change through one shows through the other. Use `a.copy()`, `a[:]` or `list(a)` for an independent copy.",
          { code: `a = [1, 2, 3]
b = a
b.append(4)
print(a)
c = a.copy()
c.append(5)
print(a, c)`, output: `[1, 2, 3, 4]
[1, 2, 3, 4] [1, 2, 3, 4, 5]` },
        ] },
        { h: "Nested lists", blocks: [
          "A list can contain other lists, like the rows of a table. Index the row first, then the column.",
          { code: `matrix = [[1, 2],
          [3, 4]]
print(matrix[1][0])`, output: `3` },
        ] },
        { h: "Tuples", blocks: [
          "A **tuple** is like a list, but **immutable**: it can't be changed after it is created. It is written with round brackets.",
          { code: `point = (3, 7)
x, y = point          # unpacking
print(x, y)
print(type((5)), type((5,)))   # the comma makes a tuple`, output: `3 7
<class 'int'> <class 'tuple'>` },
          { remember: "`point[0] = 9` raises **TypeError**. A one-item tuple needs a comma: `(5,)`." },
          { h: "When to use a tuple", blocks: [
            "Use a tuple for fixed data, such as coordinates or RGB colours. Because tuples can't change, they can be **dictionary keys**, while lists cannot.",
            { code: `places = {(0, 0): "origin", (3, 5): "target"}
print(places[(3, 5)])
print(list("abc"), tuple([1, 2]))`, output: `target
['a', 'b', 'c'] (1, 2)` },
          ] },
        ] },
      ],
      misconceptions: [
        ["b = a makes a copy of the list.", "Both names point to one list; use a.copy()."],
        ["nums.sort() returns the sorted list.", "It sorts in place and returns None; use sorted() for a new list."],
        ["(5) is a tuple.", "It is just the int 5; (5,) is a tuple."],
        ["Tuples can be changed like lists.", "Tuples are immutable."],
        ["[1, 2] + [3, 4] adds the numbers.", "It joins the lists: [1, 2, 3, 4]."],
      ],
      revision: [
        ["List", "Ordered, mutable collection: [ ]."],
        ["Tuple", "Ordered, immutable collection: ( )."],
        ["append()", "Adds one item at the end."],
        ["extend()", "Adds every item from another list."],
        ["pop()", "Removes and returns an item."],
        ["sort() vs sorted()", "In place vs returns a new list."],
        ["copy()", "Makes an independent list."],
        ["Unpacking", "x, y = point."],
      ],
      questions: [
        ["What is [\"a\", \"b\", \"c\"][-1]?", "\"c\""],
        ["What is the difference between remove() and pop()?", "remove() deletes by value; pop() deletes by position and returns the item."],
        ["What does print(nums.sort()) show?", "None"],
        ["a = [1, 2]; b = a; b.append(3). What is a?", "[1, 2, 3]"],
        ["How do you make an independent copy of list a?", "a.copy() (or a[:] or list(a))."],
        ["What does [1, 2].append([3]) give?", "[1, 2, [3]], a nested list."],
        ["How do you write a one-item tuple?", "(5,)"],
        ["Why can a tuple be a dictionary key but a list can't?", "Tuples are immutable (hashable); lists are not."],
      ],
      takeaway: "Lists are flexible and changeable, tuples are fixed; know sort() vs sorted(), append() vs extend(), and that b = a shares one list.",
    },

    /* ---------------------------------------------------------- 8 */
    8: {
      topic: "Dictionaries & Sets",
      title: "Dictionaries and Sets – lookups by key and unique values",
      sections: [
        { h: "Dictionaries", blocks: [
          "A **dictionary** (`dict`) stores **key: value** pairs. You look values up **by key**, not by position. Keys are unique.",
          { code: `ages = {"Ana": 21, "Ben": 25}
print(ages["Ana"])
ages["Cy"] = 30        # add a new key
ages["Ana"] = 22       # update an existing key
print(ages)
print(len(ages))`, output: `21
{'Ana': 22, 'Ben': 25, 'Cy': 30}
3` },
        ] },
        { h: "Missing keys: [] vs get()", blocks: [
          { list: [
            "`d[key]` raises **KeyError** if the key is missing.",
            "`d.get(key)` returns `None`, or a default you choose, instead.",
          ] },
          { code: `ages = {"Ana": 21}
print(ages.get("Zoe"))
print(ages.get("Zoe", 0))
print("Ana" in ages, 21 in ages)   # in checks KEYS`, output: `None
0
True False` },
        ] },
        { h: "Looping over a dictionary", blocks: [
          { list: [
            "Looping over a dict directly gives its **keys**.",
            "`.values()` gives the values, and `.items()` gives (key, value) pairs.",
          ] },
          { code: `ages = {"Ana": 21, "Ben": 25}
print(list(ages.keys()), list(ages.values()))
for name, age in ages.items():
    print(f"{name} is {age}")`, output: `['Ana', 'Ben'] [21, 25]
Ana is 21
Ben is 25` },
          { remember: "Since Python 3.7, dicts keep keys in the **order you added them**." },
        ] },
        { h: "Removing and merging", blocks: [
          { code: `d = {"a": 1, "b": 2, "c": 3}
value = d.pop("a")     # remove and return the value
del d["b"]
print(value, d)
x = {"x": 1, "y": 2}
y = {"y": 99, "z": 3}
print(x | y)            # merge (Python 3.9+); right side wins
x.update(y)
print(x)`, output: `1 {'c': 3}
{'x': 1, 'y': 99, 'z': 3}
{'x': 1, 'y': 99, 'z': 3}` },
        ] },
        { h: "The counting pattern", blocks: [
          "Counting things is one of the most common uses of a dict.",
          { code: `words = ["a", "b", "a", "c", "a"]
counts = {}
for w in words:
    counts[w] = counts.get(w, 0) + 1
print(counts)

from collections import Counter
print(Counter(words).most_common(1))`, output: `{'a': 3, 'b': 1, 'c': 1}
[('a', 3)]` },
        ] },
        { h: "Nested dictionaries and keys", blocks: [
          "Values can themselves be dicts or lists, which is how JSON data looks. Keys must be **hashable** (immutable): strings, numbers and tuples work, but lists do not.",
          { code: `user = {"name": "Ana", "address": {"city": "Delhi"}}
print(user["address"]["city"])
grid = {(0, 0): "start"}     # a tuple key is fine
print(grid[(0, 0)])`, output: `Delhi
start` },
        ] },
        { h: "Sets", blocks: [
          "A **set** is an **unordered** collection of **unique** values. Duplicates disappear automatically. Sets have no positions, so `s[0]` is an error.",
          { code: `s = {1, 2, 2, 3, 3, 3}
print(s)
s.add(4)
s.add(2)          # already there: ignored
print(s, len(s))
print(type({}), type(set()))`, output: `{1, 2, 3}
{1, 2, 3, 4} 4
<class 'dict'> <class 'set'>` },
          { remember: "`{}` is an empty **dict**. An empty set must be written `set()`." },
        ] },
        { h: "Set operations", blocks: [
          { list: [
            "`a | b` **union**: everything in either set.",
            "`a & b` **intersection**: only what is in both.",
            "`a - b` **difference**: in `a` but not in `b`.",
            "`a ^ b` **symmetric difference**: in one set, but not both.",
          ] },
          { code: `a = {1, 2, 3}
b = {2, 3, 4}
print(a | b, a & b)
print(a - b, a ^ b)`, output: `{1, 2, 3, 4} {2, 3}
{1} {1, 4}` },
        ] },
        { h: "Why sets are useful", blocks: [
          { list: [
            "**Removing duplicates:** `list(set(nums))`. Use `list(dict.fromkeys(nums))` to keep the original order.",
            "**Fast membership:** `x in my_set` is almost instant even for millions of items, because sets use **hashing**. A list checks items one by one.",
          ] },
          { code: `nums = [3, 1, 3, 2, 1]
print(list(dict.fromkeys(nums)))
big = set(range(1_000_000))
print(999_999 in big)`, output: `[3, 1, 2]
True` },
        ] },
      ],
      misconceptions: [
        ["{} creates an empty set.", "{} is an empty dict; use set()."],
        ["21 in ages checks the values.", "in checks keys; use 21 in ages.values()."],
        ["d[key] returns None when the key is missing.", "It raises KeyError; get() returns None."],
        ["Sets keep items in insertion order and allow s[0].", "Sets are unordered and cannot be indexed."],
        ["A list can be a dictionary key.", "Keys must be hashable; use a tuple instead."],
      ],
      revision: [
        ["dict", "Key: value pairs, looked up by key."],
        ["get()", "Safe lookup with an optional default."],
        ["items()", "(key, value) pairs for looping."],
        ["KeyError", "Raised when a key is missing."],
        ["set", "Unordered collection of unique values."],
        ["Union |", "Everything in either set."],
        ["Intersection &", "What is in both sets."],
        ["Hashable", "Can be a key or set item (immutable)."],
      ],
      questions: [
        ["How do you read Ana's age from ages?", "ages[\"Ana\"]"],
        ["What does ages.get(\"Zoe\", 0) return if Zoe is missing?", "0"],
        ["What does looping directly over a dict give you?", "Its keys."],
        ["How do you loop over keys and values together?", "for k, v in d.items():"],
        ["How do you create an empty set?", "set()"],
        ["What is {1, 2, 3} & {2, 3, 4}?", "{2, 3}"],
        ["How do you remove duplicates from a list?", "list(set(nums)), or list(dict.fromkeys(nums)) to keep order."],
        ["Why is x in a set faster than x in a list?", "Sets use hashing to jump straight to the value."],
      ],
      takeaway: "Use a dict when you look things up by a key, and a set when you need unique values or fast membership tests.",
    },

    /* ---------------------------------------------------------- 9 */
    9: {
      topic: "Comprehensions",
      title: "Comprehensions – building collections in one line",
      sections: [
        { h: "List comprehensions", blocks: [
          "A **list comprehension** builds a new list from an iterable in one line: `[expression for item in iterable]`. It replaces the “empty list, loop, append” pattern.",
          { code: `squares = []
for x in range(5):
    squares.append(x ** 2)
print(squares)

print([x ** 2 for x in range(5)])   # same result`, output: `[0, 1, 4, 9, 16]
[0, 1, 4, 9, 16]` },
          { examples: ["`[w.upper() for w in words]`, `[len(w) for w in words]` and `[int(s) for s in strings]` transform every item."] },
        ] },
        { h: "Filtering with if", blocks: [
          "An `if` at the **end** keeps only the items that pass the test.",
          { code: `print([x for x in range(10) if x % 3 == 0])
print([c for c in "hello" if c in "aeiou"])
marks = {"Ana": 92, "Ben": 45}
print([name for name, m in marks.items() if m >= 50])`, output: `[0, 3, 6, 9]
['e', 'o']
['Ana']` },
        ] },
        { h: "if-else goes at the front", blocks: [
          "To **change** every item (not drop any), put a conditional expression **before** the `for`.",
          { code: `nums = [3, -1, 5]
print([x if x > 0 else 0 for x in nums])   # transform: keeps all
print([x for x in nums if x > 0])           # filter: drops some`, output: `[3, 0, 5]
[3, 5]` },
        ] },
        { h: "Dictionary and set comprehensions", blocks: [
          { list: [
            "**Dict comprehension:** `{key: value for ...}`.",
            "**Set comprehension:** `{value for ...}`, which removes duplicates.",
          ] },
          { code: `print({x: x ** 2 for x in range(1, 4)})
d = {"a": 1, "b": 2}
print({v: k for k, v in d.items()})   # swap keys and values
print(sorted({c for c in "banana"}))`, output: `{1: 1, 2: 4, 3: 9}
{1: 'a', 2: 'b'}
['a', 'b', 'n']` },
        ] },
        { h: "Nested comprehensions", blocks: [
          "Several `for` clauses work like nested loops, read **left to right**: the first `for` is the outer loop.",
          { code: `print([x + y for x in "ab" for y in "cd"])
matrix = [[1, 2], [3, 4]]
print([x for row in matrix for x in row])   # flatten`, output: `['ac', 'ad', 'bc', 'bd']
[1, 2, 3, 4]` },
        ] },
        { h: "Generator expressions", blocks: [
          "With **round brackets**, you get a **generator expression**. It produces values one at a time, instead of building a whole list, which saves memory.",
          { code: `gen = (x ** 2 for x in range(4))
print(list(gen))
print(sum(x * x for x in range(1_000_000)))   # no big list in memory`, output: `[0, 1, 4, 9]
333332833333500000` },
          { remember: "There is no “tuple comprehension”: round brackets make a generator. Use `tuple(...)` if you need a tuple." },
        ] },
        { h: "any() and all()", blocks: [
          { list: [
            "`any()` is True if **at least one** item passes.",
            "`all()` is True only if **every** item passes.",
          ] },
          { code: `nums = [3, 15, 7]
print(any(x > 10 for x in nums))
print(all(x > 0 for x in nums))`, output: `True
True` },
        ] },
        { h: "The 2D grid trap", blocks: [
          "`[[0] * 3] * 3` repeats the **same** row three times, so changing one row changes them all. A comprehension makes a fresh row each time.",
          { code: `bad = [[0] * 3] * 3
bad[0][0] = 9
print(bad)
good = [[0] * 3 for _ in range(3)]
good[0][0] = 9
print(good)`, output: `[[9, 0, 0], [9, 0, 0], [9, 0, 0]]
[[9, 0, 0], [0, 0, 0], [0, 0, 0]]` },
        ] },
        { h: "When to use them", blocks: [
          "Use comprehensions for simple “transform” or “filter” jobs. If the logic needs several steps or `print` calls, a normal loop is clearer.",
          { remember: "In Python 3, a comprehension's loop variable does **not** leak outside it." },
        ] },
      ],
      misconceptions: [
        ["The filter if and the if-else go in the same place.", "A filter if goes after the for; an if-else expression goes before it."],
        ["(x for x in nums) makes a tuple.", "It makes a generator; use tuple(...) for a tuple."],
        ["`[[0] * 3] * 3` makes three separate rows.", "It repeats one row three times; use a comprehension."],
        ["Comprehensions are always better than loops.", "Use loops when the logic is long or has side effects."],
        ["The comprehension variable stays defined afterwards.", "In Python 3 it has its own scope and disappears."],
      ],
      revision: [
        ["List comprehension", "[expr for x in items]."],
        ["Filter", "[x for x in items if test]."],
        ["Transform with if-else", "[a if test else b for x in items]."],
        ["Dict comprehension", "{k: v for ...}."],
        ["Set comprehension", "{x for ...}; duplicates removed."],
        ["Generator expression", "(expr for x in items); lazy."],
        ["any()", "True if at least one item passes."],
        ["all()", "True if every item passes."],
      ],
      questions: [
        ["What does `[x * 2 for x in range(3)]` give?", "[0, 2, 4]"],
        ["Write a comprehension that keeps only even numbers from nums.", "[x for x in nums if x % 2 == 0]"],
        ["Where does if-else go in a comprehension?", "Before the for: [a if test else b for x in items]."],
        ["How do you build {1: 1, 2: 4, 3: 9}?", "`{x: x ** 2 for x in range(1, 4)}`"],
        ["How do you flatten [[1, 2], [3, 4]]?", "[x for row in matrix for x in row]"],
        ["Why use `sum(x * x for x in big)` instead of a list?", "The generator never builds the whole list in memory."],
        ["What does any(x > 10 for x in [3, 15]) give?", "True"],
        ["Why is `[[0] * 3] * 3` dangerous?", "All three rows are the same list."],
      ],
      takeaway: "Comprehensions turn “make a list, loop, append” into one readable line; use round brackets for a memory-friendly generator.",
    },

    /* ---------------------------------------------------------- 10 */
    10: {
      topic: "Functions",
      title: "Functions – reusable blocks of code",
      sections: [
        { h: "Defining and calling a function", blocks: [
          "A **function** is a named block of code that runs when you **call** it. You define it with `def`; its body runs only when it is called.",
          { code: `def greet(name):
    print(f"Hello, {name}!")

greet("Ana")
greet("Ben")`, output: `Hello, Ana!
Hello, Ben!` },
          { remember: "In `def greet(name)`, `name` is a **parameter**. In `greet(\"Ana\")`, `\"Ana\"` is an **argument**." },
        ] },
        { h: "return vs print", blocks: [
          "`return` **sends a value back** to the caller, so the result can be stored and reused. A function with no `return` gives back `None`.",
          { code: `def add(a, b):
    return a + b

total = add(2, 3) * 10
print(total)

def show(a, b):
    print(a + b)

result = show(2, 3)
print(result)`, output: `50
5
None` },
          { remember: "`return` exits the function immediately; code after it in the same branch never runs." },
        ] },
        { h: "Default and keyword arguments", blocks: [
          { list: [
            "A **default** value is used when the caller leaves the argument out.",
            "A **keyword argument** is passed by name, so the order doesn't matter.",
            "Parameters with defaults must come **after** those without.",
          ] },
          { code: `def book(seat, meal="veg"):
    print(seat, meal)

book("12A")
book("12A", "non-veg")
book(meal="none", seat="3C")`, output: `12A veg
12A non-veg
3C none` },
        ] },
        { h: "`*args` and `**kwargs`", blocks: [
          { list: [
            "`*args` collects any number of extra **positional** arguments into a **tuple**.",
            "`**kwargs` collects extra **keyword** arguments into a **dict**.",
          ] },
          { code: `def total(*args):
    return sum(args)

print(total(1, 2, 3), total(5))

def config(**kwargs):
    for key, value in kwargs.items():
        print(key, "=", value)

config(theme="dark", size=12)`, output: `6 5
theme = dark
size = 12` },
        ] },
        { h: "Returning several values", blocks: [
          "Returning several values really returns one **tuple**, which you can unpack.",
          { code: `def stats(nums):
    return min(nums), max(nums)

lo, hi = stats([3, 8, 1])
print(lo, hi)`, output: `1 8` },
        ] },
        { h: "Scope: local and global", blocks: [
          "Variables created inside a function are **local**: they exist only while the function runs. Functions can **read** global variables, but **assigning** to one needs the `global` keyword. Usually it is better to pass values in and return them.",
          { code: `x = 5
def show():
    print(x)        # reading a global is fine
show()

count = 0
def inc():
    global count
    count += 1
inc()
print(count)`, output: `5
1` },
          { remember: "Assigning to a name anywhere in a function makes it local for the **whole** function. Reading it before the assignment gives **UnboundLocalError**." },
        ] },
        { h: "The mutable default trap", blocks: [
          "A default value is created **once**, when the function is defined. A default list is therefore **shared** between calls. Use `None` and create the list inside.",
          { code: `def add_bad(item, lst=[]):
    lst.append(item)
    return lst
print(add_bad(1), add_bad(2))

def add_good(item, lst=None):
    if lst is None:
        lst = []
    lst.append(item)
    return lst
print(add_good(1), add_good(2))`, output: `[1, 2] [1, 2]
[1] [2]` },
        ] },
        { h: "Lambda functions and sort keys", blocks: [
          "A **lambda** is a small nameless function with a single expression. It is most often used as a `key` for sorting.",
          { code: `double = lambda x: x * 2
print(double(5))
words = ["banana", "fig", "apple"]
print(sorted(words, key=len))
students = [("Ana", 92), ("Ben", 85)]
print(sorted(students, key=lambda s: s[1]))`, output: `10
['fig', 'apple', 'banana']
[('Ben', 85), ('Ana', 92)]` },
        ] },
        { h: "Recursion", blocks: [
          "A **recursive** function calls itself on a smaller problem, and must have a **base case** that stops it. Without one, Python raises **RecursionError** (the default limit is about 1,000 calls).",
          { code: `def factorial(n):
    if n <= 1:          # base case
        return 1
    return n * factorial(n - 1)

print(factorial(5))`, output: `120` },
        ] },
        { h: "Functions are objects", blocks: [
          "Functions can be stored in variables, kept in lists, passed to other functions and returned. This is called being **first-class**.",
          { code: `def shout(text):
    return text.upper()

def apply(func, value):
    return func(value)

f = shout                     # no brackets: the function itself
print(f("hi"))
print(apply(len, "hello"))`, output: `HI
5` },
          { examples: ["Type hints such as `def add(a: int, b: int) -> int:` document the expected types, but Python does **not** enforce them."] },
        ] },
      ],
      misconceptions: [
        ["print and return do the same job.", "print only shows a value; return gives it back for further use."],
        ["A default list starts fresh on every call.", "It is created once and shared; use None as the default."],
        ["Variables made inside a function exist outside it.", "They are local and disappear when the function ends."],
        ["def f(a=1, b): is fine.", "Parameters with defaults must come after required ones."],
        ["Type hints stop wrong types at runtime.", "Python ignores them at runtime; tools like mypy check them."],
      ],
      revision: [
        ["def", "Defines a function."],
        ["Parameter / argument", "The placeholder / the actual value passed."],
        ["return", "Sends a value back and exits the function."],
        ["Default argument", "Used when the caller leaves it out."],
        ["`*args`", "Extra positional arguments, as a tuple."],
        ["`**kwargs`", "Extra keyword arguments, as a dict."],
        ["lambda", "A small one-expression function."],
        ["Recursion", "A function calling itself, with a base case."],
      ],
      questions: [
        ["What does a function without return give back?", "None"],
        ["In def greet(name), what is name called?", "A parameter."],
        ["What does `*args` collect?", "Extra positional arguments, as a tuple."],
        ["What does `**kwargs` collect?", "Extra keyword arguments, as a dict."],
        ["What is wrong with def add(item, lst=[]):?", "The default list is shared between calls."],
        ["How do you sort words by length?", "sorted(words, key=len)"],
        ["What must every recursive function have?", "A base case."],
        ["How do you return two values?", "return a, b (it returns a tuple)."],
      ],
      takeaway: "Functions package code behind a name: take inputs as parameters, give results back with return, and beware the shared mutable default.",
    },

    /* ---------------------------------------------------------- 11 */
    11: {
      topic: "Error Handling",
      title: "Error Handling – try, except, else and finally",
      sections: [
        { h: "Exceptions vs syntax errors", blocks: [
          { list: [
            "A **syntax error** breaks Python's grammar (e.g. a missing colon). It is found before the program runs and cannot be caught.",
            "An **exception** is an error that happens **while the program runs**. It can be caught and handled.",
          ] },
          "An uncaught exception stops the program and prints a **traceback**. Read it from the **bottom**: the last line names the exception and its message.",
        ] },
        { h: "Common exceptions", blocks: [
          { list: [
            "**ZeroDivisionError:** `10 / 0`.",
            "**ValueError:** right type, bad value, e.g. `int(\"abc\")`.",
            "**TypeError:** wrong type, e.g. `\"hello\" + 5`.",
            "**IndexError:** list position out of range.",
            "**KeyError:** missing dictionary key.",
            "**NameError:** a name that was never defined.",
            "**AttributeError:** an attribute or method that doesn't exist.",
            "**FileNotFoundError:** opening a file that isn't there.",
          ] },
        ] },
        { h: "try and except", blocks: [
          "Put the risky code in `try`. If it raises an exception, the matching `except` block runs instead of the program crashing. Use `as e` to get the message.",
          { code: `try:
    n = int("abc")
except ValueError as e:
    print("Bad value:", e)
print("program continues")`, output: `Bad value: invalid literal for int() with base 10: 'abc'
program continues` },
          { h: "Trace what happens", blocks: [
            { code: `try:
    print("A")
    x = 1 / 0
    print("B")          # skipped
except ZeroDivisionError:
    print("C")
print("D")`, output: `A
C
D` },
          ] },
        ] },
        { h: "Handling several exceptions", blocks: [
          { list: [
            "Use **several `except` blocks** for different handling. Python runs the first one that matches.",
            "Use a **tuple** when several exceptions share one handler: `except (ValueError, TypeError):`.",
          ] },
          { code: `for text in ["5", "zero", "0"]:
    try:
        print(10 / int(text))
    except ValueError:
        print("not a number")
    except ZeroDivisionError:
        print("can't divide by zero")`, output: `2.0
not a number
can't divide by zero` },
        ] },
        { h: "else and finally", blocks: [
          { list: [
            "`else` runs only if the `try` block finished **without** an exception.",
            "`finally` runs **always**, even after a `return`. Use it for cleanup.",
          ] },
          { code: `def convert(text):
    try:
        n = int(text)
    except ValueError:
        print("bad input")
    else:
        print("got", n)
    finally:
        print("done")

convert("7")
convert("x")`, output: `got 7
done
bad input
done` },
        ] },
        { h: "Raising your own exceptions", blocks: [
          "`raise` triggers an exception on purpose. For your own error types, create a class that inherits from `Exception`.",
          { code: `class InsufficientFunds(Exception):
    pass

def withdraw(balance, amount):
    if amount > balance:
        raise InsufficientFunds(f"short by {amount - balance}")
    return balance - amount

try:
    withdraw(100, 150)
except InsufficientFunds as e:
    print("Error:", e)`, output: `Error: short by 50` },
          { remember: "Raising is better than returning `-1`: an exception can't be silently ignored. A bare `raise` inside `except` re-raises the same error." },
        ] },
        { h: "Asking until the input is valid", blocks: [
          { code: `while True:
    try:
        n = int(input("Number: "))
        break
    except ValueError:
        print("Not a number - try again")` },
        ] },
        { h: "Good habits", blocks: [
          { list: [
            "**Catch specific exceptions.** A bare `except:` hides real bugs and even catches Ctrl+C.",
            "**Keep `try` blocks small**: wrap only the line that can fail.",
            "**EAFP** (“Easier to Ask Forgiveness than Permission”): Python style is to try the operation and catch the error, rather than check everything first.",
            "`assert condition, \"message\"` is for development checks, **not** for validating user input. Assertions can be switched off.",
          ] },
          { code: `d = {"a": 1}
try:
    value = d["b"]
except KeyError:
    value = 0
print(value)`, output: `0` },
        ] },
      ],
      misconceptions: [
        ["try/except can catch a missing colon.", "Syntax errors are found before running and can't be caught."],
        ["A bare except: is the safest choice.", "It hides real bugs; catch the specific exceptions you expect."],
        ["finally runs only if there was an error.", "finally always runs."],
        ["int(\"abc\") is a TypeError.", "It is a ValueError: right type, bad value."],
        ["else in try runs when there is an error.", "else runs only when no exception occurred."],
      ],
      revision: [
        ["Exception", "An error that happens while the program runs."],
        ["Traceback", "The error report; read the last line first."],
        ["try / except", "Run risky code / handle its error."],
        ["as e", "Gives access to the exception and its message."],
        ["else", "Runs when no exception happened."],
        ["finally", "Always runs; used for cleanup."],
        ["raise", "Triggers an exception on purpose."],
        ["EAFP", "Try first, handle the error if it happens."],
      ],
      questions: [
        ["Which exception does 10 / 0 raise?", "ZeroDivisionError."],
        ["Which exception does int(\"abc\") raise?", "ValueError."],
        ["How do you get the error message inside except?", "except ValueError as e: then print(e)."],
        ["How do you catch two exception types with one handler?", "except (ValueError, TypeError):"],
        ["When does the finally block run?", "Always."],
        ["When does the else block of a try run?", "Only when the try block raised no exception."],
        ["How do you create your own exception type?", "class MyError(Exception): pass"],
        ["Why is a bare except: bad practice?", "It hides real bugs and even catches Ctrl+C."],
      ],
      takeaway: "Wrap only the risky line in try, catch the specific exceptions you expect, use finally for cleanup, and raise clear errors of your own.",
    },

    /* ---------------------------------------------------------- 12 */
    12: {
      topic: "File Handling",
      title: "File Handling – reading and writing files",
      sections: [
        { h: "Opening a file", blocks: [
          "`open(path, mode)` returns a **file object**. The **mode** says what you want to do:",
          { list: [
            "`\"r\"` **read** (the default); the file must exist.",
            "`\"w\"` **write**; this **erases** the file first.",
            "`\"a\"` **append**; adds to the end, keeping old content.",
            "`\"x\"` **create**; fails if the file already exists.",
            "`\"r+\"` read and write; add `\"b\"` for binary files, e.g. `\"rb\"` for images.",
          ] },
          { remember: "Opening an existing file with `\"w\"` wipes it immediately, even if you write nothing. Use `\"a\"` to add to it." },
        ] },
        { h: "Use with to close files automatically", blocks: [
          "The **with** statement closes the file when the block ends, even if an error happens. It is the recommended way to work with files.",
          { code: `with open("notes.txt", "w", encoding="utf-8") as f:
    f.write("first line\\n")
    f.write("second line\\n")

print(f.closed)`, output: `True` },
        ] },
        { h: "Writing", blocks: [
          { list: [
            "`f.write(text)` writes **exactly** the string you give. It adds **no new line**, so include `\\n` yourself.",
            "`write()` needs a **string**: convert numbers with `str()` or an f-string.",
            "`print(..., file=f)` writes and adds the new line for you.",
            "`f.writelines(list)` writes each string; it does not add new lines.",
          ] },
          { code: `total = 42
with open("out.txt", "w", encoding="utf-8") as f:
    f.write(f"Total: {total}\\n")
    print("Done", file=f)
with open("out.txt", encoding="utf-8") as f:
    print(f.read(), end="")`, output: `Total: 42
Done` },
        ] },
        { h: "Reading", blocks: [
          { list: [
            "`f.read()` gives the **whole file** as one string.",
            "`f.readline()` gives the **next line**.",
            "`f.readlines()` gives **all lines** as a list.",
            "`for line in f:` reads **one line at a time**, the best choice for big files.",
          ] },
          { code: `with open("notes.txt", "w", encoding="utf-8") as f:
    f.write("cat\\ndog\\nbird\\n")

with open("notes.txt", encoding="utf-8") as f:
    for line in f:
        print(line.strip())`, output: `cat
dog
bird` },
          { remember: "Each line ends with an invisible `\\n`. Use `line.strip()` before comparing or printing it." },
        ] },
        { h: "The file position", blocks: [
          "A file object remembers **where it is**. After `read()`, the position is at the end, so a second `read()` returns an empty string. `seek(0)` goes back to the start.",
          { code: `with open("notes.txt", "w", encoding="utf-8") as f:
    f.write("hello")
with open("notes.txt", encoding="utf-8") as f:
    print(repr(f.read()))
    print(repr(f.read()))
    f.seek(0)
    print(repr(f.read()))`, output: `'hello'
''
'hello'` },
        ] },
        { h: "Handling missing files", blocks: [
          { code: `import os
try:
    with open("ghost.txt", encoding="utf-8") as f:
        data = f.read()
except FileNotFoundError:
    data = ""
print(repr(data), os.path.exists("ghost.txt"))`, output: `'' False` },
          { examples: ["Simple CSV: `name, age, city = line.strip().split(\",\")`. For real CSV files with quoted commas, use the `csv` module."] },
        ] },
        { h: "Saving data with JSON", blocks: [
          "The `json` module saves lists and dicts as text and loads them back. `dump`/`load` work with files; `dumps`/`loads` work with strings.",
          { code: `import json
scores = {"Ana": 92, "Ben": 85}
with open("save.json", "w", encoding="utf-8") as f:
    json.dump(scores, f)
with open("save.json", encoding="utf-8") as f:
    loaded = json.load(f)
print(loaded["Ana"])
print(json.dumps([1, 2, 3]))`, output: `92
[1, 2, 3]` },
        ] },
        { h: "Good habits", blocks: [
          { list: [
            "Always use `with`.",
            "Pass `encoding=\"utf-8\"` so text in any language reads correctly on every computer.",
            "Never use `eval()` on file contents; use `json`.",
          ] },
        ] },
      ],
      misconceptions: [
        ["\"w\" mode adds to a file.", "\"w\" erases the file first; \"a\" adds to the end."],
        ["write() adds a new line like print().", "write() writes only what you pass; add \\n yourself."],
        ["You can call f.read() after the with block.", "The file is closed there; reading raises ValueError."],
        ["A second read() reads the file again.", "The position is at the end; use seek(0) first."],
        ["write(42) works.", "write() needs a string: write(str(42))."],
      ],
      revision: [
        ["\"r\"", "Read mode; the file must exist."],
        ["\"w\"", "Write mode; erases the file first."],
        ["\"a\"", "Append mode; adds to the end."],
        ["with", "Closes the file automatically."],
        ["read()", "Whole file as one string."],
        ["for line in f", "Reads one line at a time."],
        ["seek(0)", "Back to the start of the file."],
        ["json.dump / json.load", "Save / load data as JSON."],
      ],
      questions: [
        ["Which mode adds to the end of a file?", "\"a\" (append)."],
        ["What is the danger of \"w\" mode?", "It erases the existing content as soon as the file opens."],
        ["Why use with open(...) as f:?", "The file is closed automatically, even if an error happens."],
        ["What is the best way to read a huge file?", "for line in f: one line at a time."],
        ["Why call line.strip() on lines from a file?", "Each line ends with a \\n character."],
        ["What does a second f.read() return?", "An empty string, because the position is at the end."],
        ["Which error comes from opening a missing file for reading?", "FileNotFoundError."],
        ["How do you save a dict to a file?", "json.dump(data, f)"],
      ],
      takeaway: "Open files with with, choose the right mode (beware \"w\"), remember write() adds no new line, and use json to save structured data.",
    },

    /* ---------------------------------------------------------- 13 */
    13: {
      topic: "Modules & Packages",
      title: "Modules and Packages – reusing code",
      sections: [
        { h: "Modules and import", blocks: [
          "A **module** is a `.py` file whose functions and variables you can reuse with `import`.",
          { list: [
            "`import math`: use `math.sqrt(16)`.",
            "`from math import sqrt`: use `sqrt(16)` directly.",
            "`import numpy as np`: an **alias** (a shorter name).",
            "`from math import *` imports everything. **Avoid it**: names become unclear and can clash.",
          ] },
          { code: `import math
from math import sqrt
print(math.sqrt(16), sqrt(25))
print(math.floor(2.7), math.ceil(2.1))
print(round(math.pi, 4))`, output: `4.0 5.0
2 3
3.1416` },
        ] },
        { h: "The standard library", blocks: [
          "The **standard library** is the set of modules that come **with** Python, with nothing to install.",
          { list: [
            "`math`: square roots, rounding, pi.",
            "`random`: random numbers and choices.",
            "`datetime` and `time`: dates, times and pauses.",
            "`os` and `sys`: files, folders and command-line arguments.",
            "`json`: saving data.",
            "`statistics`: mean and median.",
            "`collections`: `Counter`, `defaultdict` and more.",
          ] },
          { code: `import statistics
from collections import Counter
print(statistics.mean([80, 90, 100]))
print(statistics.median([1, 3, 99]))
print(Counter("banana"))`, output: `90
3
Counter({'a': 3, 'n': 2, 'b': 1})` },
          { h: "random", blocks: [
            { code: `import random
dice = random.randint(1, 6)          # 1 to 6, BOTH included
winner = random.choice(["Ana", "Ben", "Cy"])
x = random.random()                  # 0.0 up to (not including) 1.0` },
          ] },
        ] },
        { h: "pip and third-party packages", blocks: [
          "**pip** installs packages from **PyPI** (the Python Package Index). You run it in the terminal, not inside Python.",
          { list: [
            "`pip install requests` installs a package.",
            "`pip list` shows what is installed.",
            "`requirements.txt` lists a project's packages; `pip install -r requirements.txt` installs them all.",
          ] },
          { remember: "Importing something that isn't installed raises **ModuleNotFoundError**." },
        ] },
        { h: "Your own modules", blocks: [
          "Any `.py` file you write is a module too. If `helpers.py` sits next to `main.py`, then `main.py` can `import helpers`.",
          { code: `# helpers.py
def greet(name):
    return f"Hello {name}"

# main.py
import helpers
print(helpers.greet("Ana"))` },
          { remember: "Importing a module **runs** its top-level code, but only on the first import. Python caches it after that." },
        ] },
        { h: "if __name__ == \"__main__\":", blocks: [
          "Python sets `__name__` to `\"__main__\"` in the file you run directly, and to the module's name when it is imported. This guard runs code **only when the file is run directly**, not when it is imported.",
          { code: `def main():
    print("running as a script")

if __name__ == "__main__":
    main()`, output: `running as a script` },
        ] },
        { h: "Packages", blocks: [
          "A **package** is a **folder of modules**, often with an `__init__.py` file.",
          { code: `# myapp/
#     __init__.py
#     utils.py
#     models.py

from myapp import utils
from myapp.models import User` },
        ] },
        { h: "Where Python looks for modules", blocks: [
          "Python searches the **running script's folder first**, then the folders in `sys.path` (the standard library, then installed packages).",
          { remember: "If you name your own file `random.py`, it **shadows** the real `random` module and `import random` breaks. Never name files after standard modules." },
          { examples: [
            "`sys.argv` holds command-line arguments: `python app.py Ana` gives `['app.py', 'Ana']`.",
            "A **circular import** happens when two modules import each other. Fix it by moving the shared code to a third module.",
          ] },
        ] },
        { h: "Import style (PEP 8)", blocks: [
          "Put imports at the **top** of the file, in three groups separated by blank lines: **standard library**, then **third-party**, then **your own** modules.",
          { code: `import os
import json

import requests

from myapp import helpers` },
        ] },
      ],
      misconceptions: [
        ["random.randint(1, 6) never gives 6.", "randint includes both ends; it can give 6."],
        ["`from math import *` is the cleanest import.", "It hides where names come from and can overwrite yours."],
        ["Importing a module twice runs it twice.", "Python caches modules; top-level code runs only on the first import."],
        ["You run pip inside the Python shell.", "pip runs in the terminal."],
        ["A file called random.py is harmless.", "It shadows the real random module."],
      ],
      revision: [
        ["Module", "A .py file you can import."],
        ["Package", "A folder of modules."],
        ["Alias", "import numpy as np."],
        ["Standard library", "Modules that come with Python."],
        ["pip", "Installs packages from PyPI."],
        ["requirements.txt", "Lists a project's packages."],
        ["__name__ == \"__main__\"", "True only when the file is run directly."],
        ["sys.path", "The folders Python searches for modules."],
      ],
      questions: [
        ["After import math, how do you call the square root?", "math.sqrt(16)"],
        ["What does from math import sqrt let you write?", "sqrt(16), without the math. prefix."],
        ["What range does random.randint(1, 6) cover?", "1 to 6, both included."],
        ["What is pip?", "Python's package installer, which downloads packages from PyPI."],
        ["What does if __name__ == \"__main__\": do?", "Runs code only when the file is run directly, not when it is imported."],
        ["What is a package?", "A folder of modules."],
        ["Why does naming your file random.py break import random?", "Your file shadows the standard random module."],
        ["Which exception does importing a missing module raise?", "ModuleNotFoundError."],
      ],
      takeaway: "Import what you need from the standard library, install extras with pip, split your project into modules, and guard script code with __name__.",
    },

    /* ---------------------------------------------------------- 14 */
    14: {
      topic: "Classes & Objects",
      title: "Classes and Objects – your own data types",
      sections: [
        { h: "Class and object", blocks: [
          "A **class** is a **blueprint**; an **object** (or **instance**) is a thing built from it. A class bundles **data** (attributes) with the **functions** that work on it (methods).",
          { examples: ["A `Dog` class is the cookie cutter; `rex` and `buddy` are two cookies, each with their own name and age."] },
        ] },
        { h: "Defining a class: __init__ and self", blocks: [
          { list: [
            "`class Dog:` starts the class. Class names use **CamelCase**.",
            "`__init__` runs **automatically** when you create an object, and sets up its attributes.",
            "`self` is the **object itself**. `self.name = name` stores a value **on the object**.",
            "Create an object by calling the class: `Dog(\"Rex\")`. Python has no `new` keyword.",
          ] },
          { code: `class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        print(self.name, "says woof")

rex = Dog("Rex", 3)
buddy = Dog("Buddy", 5)
rex.bark()
print(buddy.name, buddy.age)`, output: `Rex says woof
Buddy 5` },
          { remember: "`rex.bark()` is really `Dog.bark(rex)`: the object is passed in as `self`. Forget `self` in the `def`, and the call fails with “takes 0 positional arguments but 1 was given”." },
        ] },
        { h: "Objects keep their own state", blocks: [
          "Each object has its **own** attributes, and methods can change them.",
          { code: `class Account:
    def __init__(self, balance=0):
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self.balance

a = Account(100)
b = Account()
print(a.deposit(50), b.balance)`, output: `150 0` },
        ] },
        { h: "Class attributes vs instance attributes", blocks: [
          { list: [
            "A **class attribute**, written in the class body, is **shared** by all objects.",
            "An **instance attribute**, set through `self.x` in `__init__`, belongs to **each object** separately.",
          ] },
          { code: `class Dog:
    count = 0                  # class attribute: shared
    def __init__(self, name):
        self.name = name       # instance attribute: per dog
        Dog.count += 1

a, b, c = Dog("Rex"), Dog("Max"), Dog("Leo")
print(Dog.count, a.name, c.name)`, output: `3 Rex Leo` },
          { h: "The shared list trap", blocks: [
            "A **list** in the class body is shared by every object. Create per-object lists in `__init__`.",
            { code: `class Team:
    members = []               # ONE list for all teams!
    def add(self, name):
        self.members.append(name)

x, y = Team(), Team()
x.add("Ana")
print(y.members)`, output: `['Ana']` },
          ] },
        ] },
        { h: "Printing and comparing objects", blocks: [
          "By default, `print(obj)` shows something like `<__main__.Dog object at 0x...>`, and `==` checks whether two names are the **same object**. Defining `__str__` and `__eq__` changes this (see Magic Methods).",
          { code: `class Dog:
    def __init__(self, name):
        self.name = name
    def __str__(self):
        return f"Dog named {self.name}"
    def __eq__(self, other):
        return self.name == other.name

print(Dog("Rex"))
print(Dog("Rex") == Dog("Rex"))`, output: `Dog named Rex
True` },
        ] },
        { h: "Inspecting objects", blocks: [
          { code: `class Dog:
    def __init__(self, name):
        self.name = name

rex = Dog("Rex")
rex.age = 3                       # objects accept new attributes
print(rex.__dict__)
print(isinstance(rex, Dog))
print(hasattr(rex, "color"), getattr(rex, "color", "unknown"))`, output: `{'name': 'Rex', 'age': 3}
True
False unknown` },
          { remember: "Reading a missing attribute raises **AttributeError**. Define all attributes in `__init__`, so a typo like `rex.nmae = ...` doesn't silently create a new one." },
        ] },
        { h: "Why use classes?", blocks: [
          "Classes keep related data and behaviour together, so bigger programs stay organised. This idea is called **encapsulation**.",
          { examples: ["A `BankAccount` keeps its `balance` together with `deposit()` and `withdraw()`, instead of loose variables and separate functions."] },
        ] },
      ],
      misconceptions: [
        ["self is a keyword you can leave out.", "self must be the first parameter of every normal method."],
        ["Changing one object's attribute changes the others.", "Instance attributes belong to each object separately."],
        ["A list in the class body gives each object its own list.", "It is shared by all objects; create it in __init__."],
        ["Two objects with equal data are == by default.", "By default == checks identity; define __eq__ to compare data."],
        ["You need new to create an object.", "Call the class like a function: Dog(\"Rex\")."],
      ],
      revision: [
        ["Class", "A blueprint for objects."],
        ["Object / instance", "A thing made from a class."],
        ["__init__", "Sets up a new object's attributes."],
        ["self", "The object a method is working on."],
        ["Attribute", "Data stored on an object, e.g. rex.name."],
        ["Method", "A function defined in a class."],
        ["Class attribute", "Shared by all objects of the class."],
        ["Encapsulation", "Keeping data and its methods together."],
      ],
      questions: [
        ["What is the difference between a class and an object?", "The class is the blueprint; an object is a thing built from it."],
        ["When does __init__ run?", "Automatically, whenever a new object is created."],
        ["What does self refer to?", "The object the method was called on."],
        ["How do you create a Dog object?", "Dog(\"Rex\")"],
        ["What error do you get if a method is defined without self?", "TypeError: it takes 0 positional arguments but 1 was given."],
        ["What is a class attribute?", "One value shared by all objects of the class."],
        ["Why is members = [] in a class body a trap?", "All objects share the same list."],
        ["What does print(obj) show without __str__?", "Something like <__main__.Dog object at 0x...>."],
      ],
      takeaway: "A class is a blueprint: __init__ sets up each object's data through self, methods act on it, and each object keeps its own state.",
    },

    /* ---------------------------------------------------------- 15 */
    15: {
      topic: "Inheritance & Polymorphism",
      title: "Inheritance and Polymorphism – building on other classes",
      sections: [
        { h: "Inheritance", blocks: [
          "**Inheritance** lets a **child** class automatically get the attributes and methods of a **parent** class. Write the shared code once, in the parent.",
          { code: `class Animal:
    def eat(self):
        print("eating")

class Dog(Animal):        # Dog inherits from Animal
    def fetch(self):
        print("fetching")

d = Dog()
d.eat()                   # inherited
d.fetch()                 # Dog's own method`, output: `eating
fetching` },
          { examples: ["Inheritance means “is-a”: a Dog **is an** Animal, a Car **is a** Vehicle."] },
        ] },
        { h: "Overriding methods", blocks: [
          "A child can **override** a parent's method by defining one with the same name. Python looks in the object's own class first, then climbs up to the parent.",
          { code: `class Animal:
    def speak(self):
        return "some sound"

class Cat(Animal):
    def speak(self):
        return "Meow"

print(Cat().speak())
print(Animal().speak())   # the parent is unchanged`, output: `Meow
some sound` },
        ] },
        { h: "super()", blocks: [
          "`super()` calls the **parent's** version of a method. Its most common use is running the parent's `__init__`, because overriding `__init__` means the parent's one no longer runs by itself.",
          { code: `class Animal:
    def __init__(self, name):
        self.name = name

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)    # let the parent set name
        self.breed = breed

d = Dog("Rex", "Labrador")
print(d.name, d.breed)`, output: `Rex Labrador` },
          { remember: "If you forget `super().__init__(name)`, `self.name` is never set, and reading it gives **AttributeError**." },
          { h: "Extending instead of replacing", blocks: [
            { code: `class A:
    def greet(self):
        return "hi from A"

class B(A):
    def greet(self):
        return super().greet() + " and B"

print(B().greet())`, output: `hi from A and B` },
          ] },
        ] },
        { h: "isinstance() and issubclass()", blocks: [
          { code: `class Animal: pass
class Dog(Animal): pass

d = Dog()
print(isinstance(d, Dog), isinstance(d, Animal))
print(type(d) == Animal)          # exact type only
print(issubclass(Dog, Animal), issubclass(bool, int))`, output: `True True
False
True True` },
          { remember: "Prefer `isinstance()`: it accepts subclasses, while `type(x) == Dog` rejects them." },
        ] },
        { h: "Polymorphism", blocks: [
          "**Polymorphism** means different classes answering the **same method call** in their own way. The calling code doesn't need to know which class it has.",
          { code: `class Dog:
    def speak(self): return "Woof"
class Cat:
    def speak(self): return "Meow"
class Robot:
    def speak(self): return "Beep"

for thing in [Dog(), Cat(), Robot()]:
    print(thing.speak())`, output: `Woof
Meow
Beep` },
          { h: "Duck typing", blocks: [
            "“If it walks like a duck and quacks like a duck…”: Python cares what an object **can do**, not what class it comes from. The Robot above works without any shared parent class.",
          ] },
        ] },
        { h: "Composition: “has-a”", blocks: [
          "**Composition** means storing another object as an attribute. Use it when the relationship is “has-a” rather than “is-a”.",
          { code: `class Engine:
    def start(self):
        return "vroom"

class Car:
    def __init__(self):
        self.engine = Engine()    # a Car HAS an Engine
    def start(self):
        return self.engine.start()

print(Car().start())`, output: `vroom` },
          { remember: "Common advice: **prefer composition over inheritance** unless “is-a” clearly fits." },
        ] },
        { h: "Multiple inheritance and the MRO", blocks: [
          "A class can have **several parents**. When they share a method name, Python follows the **Method Resolution Order (MRO)**, checking parents **left to right**.",
          { code: `class A:
    def hello(self): return "A"
class B:
    def hello(self): return "B"
class C(A, B):
    pass

print(C().hello())
print([k.__name__ for k in C.__mro__])`, output: `A
['C', 'A', 'B', 'object']` },
          { examples: ["Every class ultimately inherits from `object`."] },
        ] },
        { h: "Methods children must write", blocks: [
          "A parent can force children to provide a method: raise `NotImplementedError`, or use the `abc` module's `@abstractmethod`.",
          { code: `class Shape:
    def area(self):
        raise NotImplementedError("subclass must define area")

class Square(Shape):
    def __init__(self, side):
        self.side = side
    def area(self):
        return self.side ** 2

print(Square(3).area())`, output: `9` },
        ] },
      ],
      misconceptions: [
        ["The parent's __init__ runs automatically even if the child defines its own.", "Overriding __init__ replaces it; call super().__init__()."],
        ["Overriding a method changes the parent class.", "Only the child's lookup changes; the parent keeps its version."],
        ["Polymorphism needs a shared parent class.", "Python uses duck typing; any object with the method works."],
        ["A Car should inherit from Engine.", "A Car has an Engine; use composition."],
        ["type(x) == Parent is the best check.", "isinstance(x, Parent) also accepts subclasses."],
      ],
      revision: [
        ["Inheritance", "A child class gets a parent's methods."],
        ["Override", "Redefine a parent's method in the child."],
        ["super()", "Calls the parent's version of a method."],
        ["Polymorphism", "Same method call, different behaviour."],
        ["Duck typing", "What an object can do matters, not its class."],
        ["Composition", "“Has-a”: an object stored as an attribute."],
        ["MRO", "The order Python searches classes for a method."],
        ["object", "The root of every class."],
      ],
      questions: [
        ["How do you make Dog inherit from Animal?", "class Dog(Animal):"],
        ["Both classes define speak(). Which runs for Dog().speak()?", "Dog's version (it overrides the parent's)."],
        ["What is super() most often used for?", "Calling the parent's __init__."],
        ["d = Dog(), Dog inherits Animal. What is isinstance(d, Animal)?", "True"],
        ["What is polymorphism?", "Different classes responding to the same method call in their own way."],
        ["What is duck typing?", "Caring about what an object can do, not what class it is."],
        ["Should Car inherit from Engine?", "No: a Car has an Engine, so use composition."],
        ["class C(A, B): both define hello(). Which runs?", "A's, because the MRO checks parents left to right."],
      ],
      takeaway: "Inherit for “is-a” relationships, override to specialise, call super() to keep the parent's work, and let polymorphism treat different objects the same way.",
    },

    /* ---------------------------------------------------------- 16 */
    16: {
      topic: "Magic Methods & Advanced OOP",
      title: "Magic Methods and Advanced OOP – making objects feel built-in",
      sections: [
        { h: "What are magic methods?", blocks: [
          "**Magic methods** (or **dunder** methods, for “double underscore”) have names like `__str__` and `__len__`. Python calls them automatically: `print(obj)` calls `__str__`, `len(obj)` calls `__len__`, and `a + b` calls `__add__`.",
        ] },
        { h: "__str__ and __repr__", blocks: [
          { list: [
            "`__str__` is the **friendly** text for users, used by `print()`, `str()` and f-strings.",
            "`__repr__` is the **developer** view, used in the shell and **inside lists**. By convention it looks like the code that recreates the object.",
          ] },
          { code: `class Book:
    def __init__(self, title):
        self.title = title
    def __str__(self):
        return f"Book: {self.title}"
    def __repr__(self):
        return f"Book({self.title!r})"

b = Book("Dune")
print(b)
print([b])`, output: `Book: Dune
[Book('Dune')]` },
          { remember: "If you define only one, define `__repr__`; `str()` falls back to it." },
        ] },
        { h: "Operators: __add__, __eq__, __lt__", blocks: [
          "Defining these lets your objects work with `+`, `==` and `<`. This is called **operator overloading**. A single `__lt__` also makes `sorted()` work.",
          { code: `class Vector:
    def __init__(self, x, y):
        self.x, self.y = x, y
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    def __eq__(self, other):
        return (self.x, self.y) == (other.x, other.y)
    def __lt__(self, other):
        return self.x < other.x
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"

print(Vector(1, 2) + Vector(3, 4))
print(Vector(1, 2) == Vector(1, 2))
print(sorted([Vector(5, 0), Vector(2, 0)]))`, output: `Vector(4, 6)
True
[Vector(2, 0), Vector(5, 0)]` },
          { examples: ["`__rmul__` handles your object on the **right** side, so that `3 * v` works as well as `v * 3`."] },
        ] },
        { h: "Containers: __len__, __getitem__, __contains__", blocks: [
          { code: `class Playlist:
    def __init__(self, songs):
        self.songs = songs
    def __len__(self):
        return len(self.songs)
    def __getitem__(self, i):
        return self.songs[i]
    def __contains__(self, song):
        return song in self.songs

p = Playlist(["a", "b", "c"])
print(len(p), p[1], "b" in p)
print(bool(Playlist([])))     # empty, because __len__ is 0`, output: `3 b True
False` },
        ] },
        { h: "Callable objects: __call__", blocks: [
          "`__call__` lets you call an object like a function.",
          { code: `class Greeter:
    def __init__(self, greeting):
        self.greeting = greeting
    def __call__(self, name):
        return f"{self.greeting} {name}"

hello = Greeter("Hi")
print(hello("Ana"))`, output: `Hi Ana` },
        ] },
        { h: "Private by convention", blocks: [
          { list: [
            "`_balance` (one underscore) means “internal, please don't touch”. It is only a convention.",
            "`__pin` (two underscores) triggers **name mangling**: Python renames it to `_Account__pin`.",
            "Python has **no truly private** attributes.",
          ] },
          { code: `class Account:
    def __init__(self):
        self.__pin = 1234

a = Account()
print(hasattr(a, "__pin"), a._Account__pin)`, output: `False 1234` },
        ] },
        { h: "@property and setters", blocks: [
          "`@property` turns a method into a **computed attribute**, read without brackets. A matching **setter** can check values when they are assigned.",
          { code: `class Circle:
    def __init__(self, r):
        self.r = r
    @property
    def area(self):
        return round(3.14159 * self.r ** 2, 2)

class Person:
    @property
    def age(self):
        return self._age
    @age.setter
    def age(self, value):
        if value < 0:
            raise ValueError("age can't be negative")
        self._age = value

print(Circle(2).area)
p = Person()
p.age = 30
print(p.age)`, output: `12.57
30` },
        ] },
        { h: "@staticmethod and @classmethod", blocks: [
          { list: [
            "A **normal method** receives `self`, the object.",
            "A **classmethod** receives `cls`, the class. It is often used as an **alternative constructor**.",
            "A **staticmethod** receives nothing automatically; it is just a function kept inside the class.",
          ] },
          { code: `class Date:
    def __init__(self, d, m, y):
        self.d, self.m, self.y = d, m, y
    @classmethod
    def from_string(cls, text):
        d, m, y = map(int, text.split("-"))
        return cls(d, m, y)
    @staticmethod
    def is_leap(year):
        return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)

date = Date.from_string("03-07-2026")
print(date.y, Date.is_leap(2024))`, output: `2026 True` },
        ] },
        { h: "__new__, singletons and dataclasses", blocks: [
          { list: [
            "`__new__` **creates** the object, then `__init__` **sets it up**. You rarely need `__new__`, except for things like a **singleton** (a class with only one instance).",
            "`@dataclass` writes `__init__`, `__repr__` and `__eq__` for you, from the fields you declare.",
          ] },
          { code: `from dataclasses import dataclass

@dataclass
class Point:
    x: int
    y: int

p = Point(1, 2)
print(p)
print(p == Point(1, 2))`, output: `Point(x=1, y=2)
True` },
          { remember: "`__enter__` and `__exit__` make a class work with the `with` statement (see Advanced Concepts)." },
        ] },
      ],
      misconceptions: [
        ["print([obj]) uses __str__.", "Lists show their items with __repr__."],
        ["__pin makes an attribute truly private.", "It is only name-mangled; obj._Class__pin still reaches it."],
        ["A property needs brackets: c.area().", "A property is read like an attribute: c.area."],
        ["__init__ creates the object.", "__new__ creates it; __init__ fills in its attributes."],
        ["You must write getters for every attribute.", "Use plain attributes and add @property only when logic is needed."],
      ],
      revision: [
        ["Dunder method", "Double-underscore method Python calls automatically."],
        ["__str__", "Friendly display for users."],
        ["__repr__", "Developer view; used inside lists."],
        ["__add__ / __eq__ / __lt__", "+ / == / <."],
        ["__len__ / __getitem__", "len(obj) / obj[i]."],
        ["@property", "A method read like an attribute."],
        ["@classmethod", "Receives the class (cls); alternative constructors."],
        ["@dataclass", "Writes __init__, __repr__ and __eq__ for you."],
      ],
      questions: [
        ["Which method controls what print(obj) shows?", "__str__"],
        ["Why does print([obj]) look different from print(obj)?", "Lists use __repr__ for their items."],
        ["Which method makes v1 + v2 work?", "__add__"],
        ["Which method makes len(obj) work?", "__len__"],
        ["What does a single leading underscore (_x) mean?", "Internal by convention; not enforced."],
        ["What does @property do?", "Lets you read a computed value without brackets, like an attribute."],
        ["What does a classmethod receive as its first argument?", "cls, the class itself."],
        ["What does @dataclass generate?", "__init__, __repr__ and __eq__."],
      ],
      takeaway: "Magic methods let your objects work with print, len, +, == and sorting; properties, classmethods and dataclasses keep classes clean.",
    },

    /* ---------------------------------------------------------- 17 */
    17: {
      topic: "Iterators & Generators",
      title: "Iterators and Generators – values one at a time",
      sections: [
        { h: "Iterables and iterators", blocks: [
          { list: [
            "An **iterable** can be looped over: lists, strings, dicts, ranges.",
            "An **iterator** is the object that hands out the values **one at a time** with `next()`. `iter(x)` gets one from an iterable.",
            "When an iterator runs out, `next()` raises **StopIteration**.",
          ] },
          { code: `nums = [1, 2]
it = iter(nums)
print(next(it))
print(next(it))
print(next(it, "done"))   # a default instead of StopIteration`, output: `1
2
done` },
          { remember: "A `for` loop calls `iter()` once, then `next()` again and again, and stops quietly at StopIteration." },
        ] },
        { h: "Generator functions and yield", blocks: [
          "A function that contains `yield` is a **generator function**. Calling it runs **nothing**: it returns a generator object. Each `next()` runs the body up to the next `yield`, **pauses** there, and remembers everything.",
          { code: `def count_up(n):
    for i in range(1, n + 1):
        yield i

g = count_up(3)
print(next(g))
print(list(g))          # the rest`, output: `1
[2, 3]` },
          { h: "Pause and resume", blocks: [
            { code: `def demo():
    print("start")
    yield 1
    print("resumed")
    yield 2

g = demo()
print("before")
print(next(g))
print(next(g))`, output: `before
start
1
resumed
2` },
          ] },
        ] },
        { h: "Why generators save memory", blocks: [
          "A list stores **every** value at once. A generator produces each value **only when asked**, so it can handle huge or even **endless** data in very little memory.",
          { code: `from itertools import islice

def naturals():
    n = 1
    while True:          # endless, but harmless
        yield n
        n += 1

print(list(islice(naturals(), 5)))

def fib():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

print(list(islice(fib(), 8)))`, output: `[1, 2, 3, 4, 5]
[0, 1, 1, 2, 3, 5, 8, 13]` },
        ] },
        { h: "Generators are one-pass", blocks: [
          "Once a generator is used up, it stays **empty**. Call the generator function again for a fresh one, or save the values in a list if you need two passes.",
          { code: `def gen():
    yield 1
    yield 2

g = gen()
print(list(g))
print(list(g))
print(list(gen()))      # a new generator`, output: `[1, 2]
[]
[1, 2]` },
          { remember: "Even `x in g` uses up values from a generator." },
        ] },
        { h: "Generator expressions and pipelines", blocks: [
          "`(expr for x in items)` is a one-line generator. Chaining them makes a **pipeline**: each item flows through every step one at a time.",
          { code: `lines = ["ok", "ERROR disk", "ok", "ERROR net"]
errors = (l for l in lines if "ERROR" in l)
short = (l.split()[1] for l in errors)
print(list(short))
print(sum(x * x for x in range(4)))`, output: `['disk', 'net']
14` },
        ] },
        { h: "yield from", blocks: [
          "`yield from iterable` hands out every value of another iterable. It is very useful in recursive generators.",
          { code: `def all_items():
    yield from [1, 2]
    yield from "ab"

print(list(all_items()))`, output: `[1, 2, 'a', 'b']` },
        ] },
        { h: "Writing an iterator class", blocks: [
          "A class becomes an iterator by defining `__iter__` (which returns `self`) and `__next__` (which returns the next value, or raises StopIteration). Generators do all of this for you, which is why they are usually preferred.",
          { code: `class Countdown:
    def __init__(self, n):
        self.n = n
    def __iter__(self):
        return self
    def __next__(self):
        if self.n <= 0:
            raise StopIteration
        self.n -= 1
        return self.n + 1

print(list(Countdown(3)))`, output: `[3, 2, 1]` },
        ] },
        { h: "Lazy built-ins and itertools", blocks: [
          "`range`, `map`, `filter` and `zip` are lazy too. The `itertools` module has ready-made iterator tools: `count`, `cycle`, `chain` and `islice`.",
          { code: `from itertools import chain, count, islice
m = map(str.upper, ["a", "b"])
print(m.__class__.__name__, list(m))
print(list(chain([1, 2], [3])))
print(list(islice(count(10), 3)))
print(10**11 in range(10**12))    # instant: computed, not searched`, output: `map ['A', 'B']
[1, 2, 3]
[10, 11, 12]
True` },
        ] },
      ],
      misconceptions: [
        ["Calling a generator function runs its body.", "It returns a generator; the body runs only on next() or in a loop."],
        ["You can loop over a generator twice.", "Generators are one-pass; after use they are empty."],
        ["yield works like return.", "return ends the function; yield pauses it and resumes later."],
        ["g[0] gives a generator's first value.", "Generators can't be indexed; use next(g)."],
        ["`range(10**12)` builds a huge list.", "range is lazy and stores only start, stop and step."],
      ],
      revision: [
        ["Iterable", "Something you can loop over."],
        ["Iterator", "Hands out values one by one with next()."],
        ["StopIteration", "Raised when an iterator is used up."],
        ["yield", "Hands out a value and pauses the function."],
        ["Generator", "A lazy iterator made by a yield function."],
        ["Generator expression", "(expr for x in items)."],
        ["yield from", "Hands out all values of another iterable."],
        ["itertools", "Module of iterator tools."],
      ],
      questions: [
        ["What happens when next() is called on a used-up iterator?", "StopIteration is raised (unless a default is given)."],
        ["What makes a function a generator function?", "It contains yield."],
        ["What is the key difference between yield and return?", "yield pauses and resumes; return ends the function."],
        ["Why does a generator save memory?", "It produces values one at a time instead of storing them all."],
        ["What does list(g) give the second time for the same generator?", "[] (it is already used up)."],
        ["Complete the Fibonacci step after yield a.", "a, b = b, a + b"],
        ["How do you take the first 5 values of an endless generator?", "itertools.islice(gen(), 5)"],
        ["Which two methods make a class an iterator?", "__iter__ and __next__."],
      ],
      takeaway: "Generators hand out values one at a time with yield, so they handle huge or endless data in little memory, but each one can only be used once.",
    },

    /* ---------------------------------------------------------- 18 */
    18: {
      topic: "Decorators & Closures",
      title: "Decorators and Closures – functions that wrap and remember",
      sections: [
        { h: "Functions inside functions", blocks: [
          "Functions are **first-class** objects: they can be passed around, returned and defined inside other functions. A **higher-order function** takes or returns another function.",
          { code: `def apply_twice(f, x):
    return f(f(x))

print(apply_twice(lambda n: n + 3, 10))`, output: `16` },
        ] },
        { h: "Closures", blocks: [
          "A **closure** is an inner function that **remembers** variables from the outer function, even after the outer function has finished.",
          { code: `def make_adder(n):
    def add(x):
        return x + n       # n is remembered
    return add

add5 = make_adder(5)
add10 = make_adder(10)
print(add5(1), add10(1))`, output: `6 11` },
        ] },
        { h: "nonlocal", blocks: [
          "To **change** a variable of the outer function, the inner function needs `nonlocal`.",
          { code: `def counter():
    count = 0
    def inc():
        nonlocal count
        count += 1
        return count
    return inc

a = counter()
b = counter()
print(a(), a(), b())     # each counter has its own count`, output: `1 2 1` },
        ] },
        { h: "The late-binding trap", blocks: [
          "A closure remembers the **variable**, not its value at that moment. Lambdas made in a loop therefore all see the **last** value. Fix it with a default argument.",
          { code: `funcs = [lambda x: x * i for i in range(3)]
print([f(10) for f in funcs])

fixed = [lambda x, i=i: x * i for i in range(3)]
print([f(10) for f in fixed])`, output: `[20, 20, 20]
[0, 10, 20]` },
        ] },
        { h: "Decorators", blocks: [
          "A **decorator** takes a function and returns a **new** function that adds behaviour around it, without changing the original code. `@deco` above a `def` is shorthand for `f = deco(f)`.",
          { code: `def deco(func):
    def wrapper():
        print("before")
        func()
        print("after")
    return wrapper

@deco
def hello():
    print("hello")

hello()`, output: `before
hello
after` },
        ] },
        { h: "A proper decorator: `*args`, `**kwargs` and `wraps`", blocks: [
          { list: [
            "Use `*args, **kwargs` in the wrapper so it works with **any** function.",
            "Use `@functools.wraps(func)` so the wrapped function keeps its own **name** and **docstring**.",
          ] },
          { code: `import functools

def logged(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print(f"calling {func.__name__}")
        return func(*args, **kwargs)
    return wrapper

@logged
def add(a, b):
    return a + b

print(add(2, 3))
print(add.__name__)`, output: `calling add
5
add` },
          { remember: "Without `functools.wraps`, `add.__name__` would say `wrapper`." },
        ] },
        { h: "Decorators with arguments", blocks: [
          "`@repeat(3)` needs **three layers**: the outer function takes the argument and returns the real decorator.",
          { code: `def repeat(n):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(n):
                func(*args, **kwargs)
        return wrapper
    return decorator

@repeat(3)
def hi():
    print("hi")

hi()`, output: `hi
hi
hi` },
        ] },
        { h: "Stacking and timing", blocks: [
          { list: [
            "Stacked decorators apply **bottom-up**: `@a` then `@b` above `f` means `f = a(b(f))`.",
            "A decorator runs **once, when the function is defined**; the wrapper runs on each call.",
          ] },
          { code: `def tag(name):
    def deco(f):
        def wrapper():
            return f"<{name}>{f()}</{name}>"
        return wrapper
    return deco

@tag("b")
@tag("i")
def text():
    return "hi"

print(text())`, output: `<b><i>hi</i></b>` },
        ] },
        { h: "Decorators you will meet", blocks: [
          { list: [
            "`@functools.lru_cache`: **memoization**, which caches results so repeated calls are instant.",
            "`@property`, `@staticmethod` and `@classmethod`, on class methods.",
            "Web frameworks, e.g. Flask's `@app.route(\"/\")`.",
          ] },
          { code: `from functools import lru_cache

@lru_cache
def fib(n):
    return n if n < 2 else fib(n - 1) + fib(n - 2)

print(fib(50))`, output: `12586269025` },
          { examples: ["A class can also be a decorator by defining `__call__`, e.g. to count how many times a function is called."] },
        ] },
      ],
      misconceptions: [
        ["A closure copies the value at creation time.", "It remembers the variable; lambdas in a loop see its last value."],
        ["An inner function can change outer variables directly.", "Changing an outer variable needs nonlocal."],
        ["A decorator runs every time before the function.", "The decorator runs once at definition; the wrapper runs on each call."],
        ["A decorator should return wrapper().", "It must return the function wrapper, not the result of calling it."],
        ["@a @b applies a first.", "Decorators apply bottom-up: f = a(b(f))."],
      ],
      revision: [
        ["First-class function", "Can be stored, passed and returned like any value."],
        ["Higher-order function", "Takes or returns a function."],
        ["Closure", "Inner function that remembers outer variables."],
        ["nonlocal", "Lets an inner function change an outer variable."],
        ["Decorator", "Wraps a function to add behaviour."],
        ["@deco", "Shorthand for f = deco(f)."],
        ["functools.wraps", "Keeps the original function's name and docstring."],
        ["lru_cache", "Caches results (memoization)."],
      ],
      questions: [
        ["What is a closure?", "An inner function that remembers variables from its enclosing function."],
        ["Which keyword lets an inner function change an outer variable?", "nonlocal"],
        ["What does `[f(10) for f in [lambda x: x * i for i in range(3)]]` give?", "[20, 20, 20], because all lambdas see i = 2."],
        ["How do you fix that late-binding problem?", "Use a default argument: `lambda x, i=i: x * i`."],
        ["@deco above def f is shorthand for what?", "f = deco(f)"],
        ["Why use `*args` and `**kwargs` in a wrapper?", "So it can accept and pass on any arguments."],
        ["What does functools.wraps do?", "Copies the original function's name and docstring onto the wrapper."],
        ["How many layers does a decorator with arguments need?", "Three: argument → decorator → wrapper."],
      ],
      takeaway: "Closures remember outer variables, and decorators use that to wrap functions with extra behaviour; always pass `*args`/`**kwargs` and use `functools.wraps`.",
    },

    /* ---------------------------------------------------------- 19 */
    19: {
      topic: "Advanced Concepts",
      title: "Advanced Concepts – the tools experienced Python developers use",
      sections: [
        { h: "The GIL and running things in parallel", blocks: [
          "The **GIL** (Global Interpreter Lock) in CPython lets only **one thread** run Python code at a time.",
          { list: [
            "**threading** and **asyncio:** good for **I/O-bound** work (waiting on the network or disk).",
            "**multiprocessing:** separate processes, each with its own interpreter. Use it for **CPU-heavy** work on several cores.",
          ] },
        ] },
        { h: "Shallow copy vs deep copy", blocks: [
          { list: [
            "A **shallow copy** (`.copy()`, `[:]`) copies the outer list, but **shares** the inner objects.",
            "A **deep copy** (`copy.deepcopy()`) copies **everything**, all the way down.",
          ] },
          { code: `import copy
a = [[1, 2], [3, 4]]
shallow = a.copy()
deep = copy.deepcopy(a)
shallow[0][0] = 99
print(a)
print(deep)`, output: `[[99, 2], [3, 4]]
[[1, 2], [3, 4]]` },
        ] },
        { h: "Unpacking with `*` and `**`", blocks: [
          { list: [
            "`a, *rest = items` collects the leftover items into a list.",
            "`f(*my_list)` spreads a list into arguments; `f(**my_dict)` spreads a dict into keyword arguments.",
            "`{**d1, **d2}` merges dicts; the later one wins.",
          ] },
          { code: `first, *middle, last = [1, 2, 3, 4]
print(first, middle, last)

def add(a, b, c):
    return a + b + c
print(add(*[1, 2, 3]))
print({**{"x": 1, "y": 2}, **{"y": 99}})`, output: `1 [2, 3] 4
6
{'x': 1, 'y': 99}` },
        ] },
        { h: "The walrus operator := (Python 3.8+)", blocks: [
          "`:=` **assigns and uses** a value in the same expression.",
          { code: `data = [5, 12, 8, 20]
if (n := len(data)) > 3:
    print(f"{n} items")
print([y for x in data if (y := x * 2) > 15])`, output: `4 items
[24, 16, 40]` },
        ] },
        { h: "Type hints", blocks: [
          "**Type hints** document the expected types. Tools such as **mypy** and IDEs check them, but **Python does not enforce them** at runtime. `Optional[str]` means “a str or None”; in 3.10+ you can write `str | None`.",
          { code: `from typing import Optional

def find(names: dict[int, str], id: int) -> Optional[str]:
    return names.get(id)

print(find({1: "Ana"}, 1), find({1: "Ana"}, 2))`, output: `Ana None` },
        ] },
        { h: "Context managers", blocks: [
          "A **context manager** runs set-up code on entering a `with` block and clean-up code on leaving it, **even if an error happens**. Build one with `__enter__`/`__exit__`, or with `@contextmanager`.",
          { code: `from contextlib import contextmanager

@contextmanager
def tag(name):
    print(f"<{name}>")
    yield
    print(f"</{name}>")

with tag("b"):
    print("hi")`, output: `<b>
hi
</b>` },
        ] },
        { h: "Handy standard-library tools", blocks: [
          { code: `from collections import defaultdict
from functools import partial
from itertools import zip_longest

groups = defaultdict(list)            # missing keys start as []
for name in ["ana", "amy", "bob"]:
    groups[name[0]].append(name)
print(dict(groups))

cube = partial(pow, exp=3)            # pre-fill an argument
print(cube(2))

matrix = [[1, 2], [3, 4]]
print(list(zip(*matrix)))             # transpose
print(list(zip_longest([1, 2, 3], ["a"], fillvalue="?")))`, output: `{'a': ['ana', 'amy'], 'b': ['bob']}
8
[(1, 3), (2, 4)]
[(1, 'a'), (2, '?'), (3, '?')]` },
        ] },
        { h: "Small features worth knowing", blocks: [
          { list: [
            "`f\"{x=}\"` prints the expression **and** its value; great for debugging.",
            "`__slots__` fixes an object's attributes. It saves memory and blocks new attributes.",
            "**Monkey patching** replaces code at runtime, e.g. in tests. Use it sparingly.",
            "A **metaclass** is “the class of a class”; `type` is the default. Rarely needed.",
          ] },
          { code: `x = 5
print(f"{x=}", f"{x * 2=}")

class Point:
    __slots__ = ("x", "y")
    def __init__(self, x, y):
        self.x, self.y = x, y

p = Point(1, 2)
try:
    p.z = 3
except AttributeError:
    print("no new attributes allowed")`, output: `x=5 x * 2=10
no new attributes allowed` },
        ] },
        { h: "is vs == (one more time)", blocks: [
          "`==` compares **values**; `is` checks whether two names are the **same object**. CPython reuses the small integers from -5 to 256, so `is` can look like it works for them, but **never** use `is` to compare numbers or strings. Use `is` only for `None`.",
          { code: `a = [1, 2]
b = [1, 2]
print(a == b, a is b)
print(sorted([3, 1]) is sorted([3, 1]))`, output: `True False
False` },
        ] },
      ],
      misconceptions: [
        ["Threads make CPU-heavy Python code faster.", "The GIL allows one thread at a time; use multiprocessing for CPU work."],
        ["list.copy() copies the nested lists too.", "It is a shallow copy; use copy.deepcopy()."],
        ["Type hints stop wrong types.", "Python ignores them at runtime; tools like mypy check them."],
        ["is works for comparing numbers.", "Use == for values; is only for None."],
        ["Metaclasses are needed in everyday code.", "They are rarely needed; normal classes cover almost everything."],
      ],
      revision: [
        ["GIL", "Lets one thread run Python code at a time."],
        ["Shallow copy", "Copies the outer object; shares inner ones."],
        ["Deep copy", "Copies everything (copy.deepcopy)."],
        ["`*rest`", "Collects leftover items when unpacking."],
        ["`:=`", "Walrus operator: assign inside an expression."],
        ["Type hints", "Documented types; not enforced."],
        ["Context manager", "Set-up and clean-up around a with block."],
        ["defaultdict", "Dict that creates missing keys automatically."],
      ],
      questions: [
        ["For CPU-heavy work, should you use threading or multiprocessing?", "multiprocessing (it bypasses the GIL)."],
        ["What is the difference between a shallow and a deep copy?", "A shallow copy shares nested objects; a deep copy copies everything."],
        ["What do `a` and `rest` get from `a, *rest = [1, 2, 3]`?", "a = 1, rest = [2, 3]."],
        ["What does the walrus operator := do?", "Assigns a value and uses it in the same expression."],
        ["Are type hints enforced at runtime?", "No; tools such as mypy check them."],
        ["What does with run when the block ends?", "The context manager's clean-up code, even after an error."],
        ["What does `zip(*matrix)` do?", "Transposes the matrix (rows become columns)."],
        ["What does f\"{x=}\" print when x = 5?", "x=5"],
      ],
      takeaway: "Know when the GIL matters, copy deeply when data is nested, unpack with `*` and `**`, and let context managers and the standard library do the heavy lifting.",
    },

    /* ---------------------------------------------------------- 20 */
    20: {
      topic: "Interview Questions",
      title: "Python Interview Questions – the classic traps, explained",
      sections: [
        { h: "How to answer “what is the output?”", blocks: [
          "Interviewers love short snippets with a surprise. Read slowly and ask:",
          { list: [
            "**What type** is each value?",
            "**Which operator** runs first?",
            "Is something **copied**, or **shared**?",
            "Is the value **truthy**, or actually **equal**?",
          ] },
        ] },
        { h: "1. Mutable default arguments", blocks: [
          "A default list is created **once** and shared by every call.",
          { code: `def f(a, b=[]):
    b.append(a)
    return b

print(f(1))
print(f(2))`, output: `[1]
[1, 2]` },
          { remember: "Fix: use `b=None`, then `if b is None: b = []` inside the function." },
        ] },
        { h: "2. Shared lists and +=", blocks: [
          "`b = a` shares one list, and `+=` on a list changes it **in place**.",
          { code: `a = b = [1, 2]
a += [3]
print(a, b)
x = [1, 2, 3]
y = x[:]             # a real copy
y.append(4)
print(x, y)`, output: `[1, 2, 3] [1, 2, 3]
[1, 2, 3] [1, 2, 3, 4]` },
        ] },
        { h: "3. Numbers and precedence", blocks: [
          { code: `print(0.1 + 0.2 == 0.3)
print(2 ** 3 ** 2)
print(3 * "ab" + "c")
print(-7 // 2, round(2.5))`, output: `False
512
abababc
-4 2` },
          { examples: ["Floats are approximate; `**` is right-associative; `*` binds before `+`; `//` rounds down; `round()` uses banker's rounding."] },
        ] },
        { h: "4. bool is an int", blocks: [
          { code: `print(True == 1, False == 0, True + True)
print([1] == [True])
print(sum([True, False, True]))`, output: `True True 2
True
2` },
        ] },
        { h: "5. Truthiness is not equality", blocks: [
          "An empty list is **falsy**, but it is **not equal** to `False`. Any non-empty string is truthy, even `\"False\"`.",
          { code: `print([] == False, bool([]) == False)
print(bool("False"), bool("0"), bool(0), bool(""))`, output: `False True
True True False False` },
        ] },
        { h: "6. finally always wins", blocks: [
          "`finally` runs even after `return`, and a `return` inside `finally` **replaces** the earlier one.",
          { code: `def f():
    try:
        return 1
    finally:
        return 2

print(f())`, output: `2` },
        ] },
        { h: "7. Immutability is shallow", blocks: [
          "A tuple's items can't be replaced, but a **list inside** a tuple can still change.",
          { code: `t = (1, 2, [3, 4])
t[2].append(5)
print(t)`, output: `(1, 2, [3, 4, 5])` },
        ] },
        { h: "8. Loop variables and late binding", blocks: [
          { code: `for i in range(3):
    pass
print(i)                       # the for-loop variable survives

funcs = [lambda: i for i in range(3)]
print([f() for f in funcs])    # all see the last i`, output: `2
[2, 2, 2]` },
        ] },
        { h: "9. Strings and ranges", blocks: [
          { code: `print("ab" in "banana", "ba" in "banana")
print("abc".find("d"), "abc".find("b"))
print(list(range(3, 0)), list(range(3, 0, -1)))
print("-".join(str(x) for x in range(3)))`, output: `False True
-1 1
[] [3, 2, 1]
0-1-2` },
        ] },
        { h: "10. Quick concept questions", blocks: [
          { list: [
            "**List vs tuple:** a list is mutable, a tuple is immutable (and hashable).",
            "**`is` vs `==`:** identity vs value; use `is` only for `None`.",
            "**`sort()` vs `sorted()`:** in place (returns `None`) vs a new list.",
            "**`*args` / `**kwargs`:** extra positional arguments as a tuple / keyword arguments as a dict.",
            "**Generator vs list:** lazy and one-pass vs stored in memory and reusable.",
            "**Shallow vs deep copy:** inner objects shared vs everything copied.",
            "**GIL:** one thread runs Python code at a time; use multiprocessing for CPU work.",
            "**`__str__` vs `__repr__`:** a friendly view vs the developer view (used in lists).",
          ] },
        ] },
      ],
      misconceptions: [
        ["f(2) after f(1) returns [2] when the default is [].", "The default list is shared, so it returns [1, 2]."],
        ["[] == False is True.", "An empty list is falsy but not equal to False."],
        ["`2 ** 3 ** 2` is 64.", "It is `2 ** 9` = 512."],
        ["A tuple can never change at all.", "Its items can't be replaced, but a list inside it can change."],
        ["After for i in range(3), i is undefined.", "The for-loop variable stays, holding 2."],
      ],
      revision: [
        ["Mutable default", "Shared between calls; use None."],
        ["Aliasing", "b = a shares one object."],
        ["Right-associative `**`", "`2 ** 3 ** 2` = `2 ** 9`."],
        ["bool is int", "True == 1, False == 0."],
        ["Truthy vs equal", "bool([]) is False, but [] != False."],
        ["finally", "Runs even after return; its return wins."],
        ["Shallow immutability", "A tuple's inner list can change."],
        ["Late binding", "Closures see a variable's latest value."],
      ],
      questions: [
        ["What does print(0.1 + 0.2 == 0.3) print?", "False"],
        ["What does `print(2 ** 3 ** 2)` print?", "512"],
        ["a = b = [1]; a += [2]. What is b?", "[1, 2]"],
        ["What is True + True?", "2"],
        ["What does [] == False give?", "False"],
        ["try: return 1, finally: return 2. What is returned?", "2"],
        ["What is i after for i in range(3): pass?", "2"],
        ["What is bool(\"False\")?", "True (a non-empty string)."],
      ],
      takeaway: "Most Python “trick” questions come down to five ideas: shared mutable objects, operator precedence, bool being an int, truthiness vs equality, and late binding.",
    },

  },
};
