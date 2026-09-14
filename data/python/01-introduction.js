/* ============================================================
   PYTHON - TOPIC 1: INTRODUCTION & SETUP (30 questions)
   One file per topic. See "HOW TO ADD QUESTIONS.md" for the
   question template.
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "Python",
  icon: "🐍",
  color: "#3776ab",
  description: "Master Python from basics to advanced - 20 topics.",
  topics: [
    {
      name: "1. Introduction & Setup",
      questions: [
        {
          difficulty: "easy",
          question: "Who created the Python programming language?",
          options: { A: "James Gosling", B: "Guido van Rossum", C: "Dennis Ritchie", D: "Bjarne Stroustrup" },
          answer: "B",
          explanation: "Python was created by Guido van Rossum and first released in 1991. James Gosling created Java, Dennis Ritchie created C, and Bjarne Stroustrup created C++.",
          notes: ["Python is named after the comedy group 'Monty Python', not the snake."],
          related: ["History of Python"]
        },
        {
          difficulty: "easy",
          question: "Python is best described as:",
          options: {
            A: "A compiled, low-level language",
            B: "An interpreted, high-level language",
            C: "A markup language",
            D: "A database language"
          },
          answer: "B",
          explanation: "Python is a high-level, interpreted language - your code is executed line by line by the Python interpreter instead of being compiled to machine code first. This makes it easy to write and test quickly.",
          notes: ["Technically Python compiles to bytecode first, but you never have to manage that step."],
          related: ["Interpreter", "Compiler"]
        },
        {
          difficulty: "easy",
          question: "What file extension do Python files use?",
          options: { A: ".pt", B: ".pyt", C: ".py", D: ".python" },
          answer: "C",
          explanation: "Python source files end in .py, for example: hello.py. You run them with: python hello.py",
          related: ["Running scripts"]
        },
        {
          difficulty: "easy",
          question: "What is the output of:\nprint(\"Hello, World!\")",
          options: { A: "Hello, World!", B: "\"Hello, World!\"", C: "print(Hello, World!)", D: "Error" },
          answer: "A",
          explanation: "print() displays the text inside the quotes. The quotes themselves are not printed - they only mark where the text (string) starts and ends.",
          code: "print(\"Hello, World!\")   # Hello, World!",
          related: ["print()", "Strings"]
        },
        {
          difficulty: "easy",
          question: "Which symbol starts a single-line comment in Python?",
          options: { A: "//", B: "#", C: "/*", D: "--" },
          answer: "B",
          explanation: "Everything after # on a line is a comment - Python ignores it. // is used in C/Java/JavaScript, /* */ in C-style languages, and -- in SQL.",
          code: "# This is a comment\nprint(\"Hi\")  # comments can follow code too",
          related: ["Comments", "Docstrings"]
        },
        {
          difficulty: "easy",
          question: "How do you typically write a multi-line comment / documentation string in Python?",
          options: {
            A: "Triple quotes \"\"\" ... \"\"\"",
            B: "/* ... */",
            C: "<!-- ... -->",
            D: "## ... ##"
          },
          answer: "A",
          explanation: "Triple-quoted strings (\"\"\"like this\"\"\") span multiple lines. Placed right after a function or class definition they become the docstring - Python's built-in documentation.",
          code: "def greet():\n    \"\"\"This function prints a greeting.\"\"\"\n    print(\"Hello\")",
          notes: ["For plain multi-line notes you can also just use # on each line."],
          related: ["Docstrings", "help()"]
        },
        {
          difficulty: "medium",
          question: "What type of value does input() always return?",
          options: { A: "int", B: "float", C: "str", D: "It depends on what the user types" },
          answer: "C",
          explanation: "input() ALWAYS returns a string, even if the user types 25. To use it as a number you must convert it: int(input()) or float(input()).",
          code: "age = input(\"Age: \")     # user types 25\nprint(type(age))          # <class 'str'>\nage = int(age)            # now it's a number",
          notes: ["Forgetting this conversion is one of the most common beginner bugs."],
          related: ["Type conversion", "int()"]
        },
        {
          difficulty: "easy",
          question: "Python is case-sensitive. What does that mean?",
          options: {
            A: "Uppercase letters are not allowed",
            B: "name, Name and NAME are three different variables",
            C: "Strings must be lowercase",
            D: "Keywords must be uppercase"
          },
          answer: "B",
          explanation: "Case-sensitive means capitalization matters everywhere: name, Name and NAME are treated as completely different identifiers, and Print is not the same as print.",
          code: "name = \"Ana\"\n# print(Name)   # NameError: Name is not defined",
          related: ["Identifiers", "NameError"]
        },
        {
          difficulty: "easy",
          question: "How does Python know which lines belong inside an if statement or a loop?",
          options: {
            A: "Curly braces { }",
            B: "The keyword 'end'",
            C: "Indentation (spaces at the start of the line)",
            D: "Semicolons"
          },
          answer: "C",
          explanation: "Python uses indentation to define code blocks - lines indented under an if/for/def belong to it. Most languages use { } instead; in Python the indentation IS the structure.",
          code: "if score > 50:\n    print(\"Pass\")    # inside the if\nprint(\"Done\")        # outside the if",
          notes: ["The standard is 4 spaces per level. Never mix tabs and spaces."],
          related: ["Code blocks", "IndentationError"]
        },
        {
          difficulty: "easy",
          question: "What error do you get when the spacing at the start of lines is inconsistent?",
          options: { A: "SyntaxError only", B: "IndentationError", C: "SpacingError", D: "TypeError" },
          answer: "B",
          explanation: "Python raises IndentationError when a block's indentation is wrong or inconsistent - for example a line indented with 3 spaces inside a 4-space block.",
          code: "if True:\n    print(\"a\")\n   print(\"b\")   # IndentationError!",
          related: ["Indentation", "SyntaxError"]
        },
        {
          difficulty: "easy",
          question: "Which command runs a Python file called app.py from the terminal?",
          options: { A: "run app.py", B: "python app.py", C: "execute app.py", D: "app.py start" },
          answer: "B",
          explanation: "You run a script by passing its filename to the interpreter: python app.py (or python3 app.py on some systems).",
          notes: ["On Windows you can also use: py app.py"],
          related: ["Interpreter", "Command line"]
        },
        {
          difficulty: "medium",
          question: "What is the Python REPL / interactive shell?",
          options: {
            A: "A tool that converts Python to C",
            B: "A prompt where you type code and see results immediately",
            C: "A graphical app builder",
            D: "Python's package installer"
          },
          answer: "B",
          explanation: "Typing just 'python' in the terminal opens the interactive shell (REPL = Read, Evaluate, Print, Loop). You type one line at a time and instantly see the result - perfect for experimenting.",
          code: ">>> 2 + 3\n5\n>>> \"py\" * 3\n'pypypy'",
          related: ["IDLE", "Jupyter"]
        },
        {
          difficulty: "easy",
          question: "What is the output of:\nprint(2 + 3)\nprint(\"2 + 3\")",
          options: { A: "5 then 5", B: "5 then 2 + 3", C: "2 + 3 then 5", D: "2 + 3 then 2 + 3" },
          answer: "B",
          explanation: "Without quotes, 2 + 3 is a math expression that evaluates to 5. With quotes, \"2 + 3\" is just text and is printed exactly as written.",
          code: "print(2 + 3)     # 5\nprint(\"2 + 3\")   # 2 + 3",
          related: ["Expressions", "Strings"]
        },
        {
          difficulty: "easy",
          question: "What does \\n mean inside a string?",
          options: { A: "A literal backslash-n", B: "A new line", C: "A tab", D: "Nothing - it's an error" },
          answer: "B",
          explanation: "\\n is an escape sequence meaning 'new line'. When printed, the text after it appears on the next line.",
          code: "print(\"Hello\\nWorld\")\n# Hello\n# World",
          notes: ["Other escapes: \\t = tab, \\\\ = one backslash, \\\" = a quote inside a string."],
          related: ["Escape sequences", "\\t"]
        },
        {
          difficulty: "easy",
          question: "Which escape sequence inserts a TAB space inside a string?",
          options: { A: "\\n", B: "\\s", C: "\\t", D: "\\b" },
          answer: "C",
          explanation: "\\t inserts a horizontal tab - useful for aligning columns of text. \\n is a newline; \\s is not a Python escape sequence.",
          code: "print(\"Name\\tAge\")\nprint(\"Ana\\t21\")\n# Name    Age\n# Ana     21",
          related: ["Escape sequences"]
        },
        {
          difficulty: "medium",
          question: "How can you print: She said \"hi\"  (with the double quotes)?",
          options: {
            A: "print('She said \"hi\"')",
            B: "print(\"She said \"hi\"\")",
            C: "print(She said \"hi\")",
            D: "It is impossible to print quotes"
          },
          answer: "A",
          explanation: "Wrap the string in SINGLE quotes so the double quotes inside are just normal characters. Alternatively, escape them: print(\"She said \\\"hi\\\"\").",
          code: "print('She said \"hi\"')      # works\nprint(\"She said \\\"hi\\\"\")    # also works",
          related: ["Quotes", "Escape sequences"]
        },
        {
          difficulty: "medium",
          question: "What does the sep parameter do in print(\"a\", \"b\", \"c\", sep=\"-\")?",
          options: {
            A: "Prints a-b-c (puts - between the values)",
            B: "Prints abc- (adds - at the end)",
            C: "Separates the output onto 3 lines",
            D: "Causes an error"
          },
          answer: "A",
          explanation: "sep sets the text placed BETWEEN multiple values (default is a space). So the output is a-b-c.",
          code: "print(\"a\", \"b\", \"c\")            # a b c\nprint(\"a\", \"b\", \"c\", sep=\"-\")   # a-b-c",
          related: ["print()", "end parameter"]
        },
        {
          difficulty: "medium",
          question: "What does the end parameter do in print(\"Hello\", end=\"\")?",
          options: {
            A: "Ends the program",
            B: "Prevents print from moving to a new line afterwards",
            C: "Deletes the last character",
            D: "Prints Hello twice"
          },
          answer: "B",
          explanation: "By default print() ends with a newline (\\n). Setting end=\"\" (empty) means the NEXT print continues on the same line.",
          code: "print(\"Hello\", end=\" \")\nprint(\"World\")\n# Hello World   (one line)",
          related: ["print()", "sep parameter"]
        },
        {
          difficulty: "easy",
          question: "What is the output of:\nprint(\"A\", \"B\", \"C\")",
          options: { A: "ABC", B: "A B C", C: "A,B,C", D: "(\"A\", \"B\", \"C\")" },
          answer: "B",
          explanation: "print() with multiple values separated by commas prints them with a single space between each (the default sep).",
          related: ["print()", "sep parameter"]
        },
        {
          difficulty: "medium",
          question: "A user runs: n = int(input())  and types: hello\nWhat happens?",
          options: {
            A: "n becomes 0",
            B: "n becomes \"hello\"",
            C: "ValueError - invalid literal for int()",
            D: "The program waits for a number"
          },
          answer: "C",
          explanation: "int(\"hello\") cannot convert letters to a number, so Python raises ValueError. Real programs wrap this in try/except to handle bad input politely.",
          code: "try:\n    n = int(input(\"Number: \"))\nexcept ValueError:\n    print(\"That's not a number!\")",
          related: ["ValueError", "try/except", "input()"]
        },
        {
          difficulty: "easy",
          question: "Which line correctly asks the user for their name and stores it?",
          options: {
            A: "name = input(\"Your name: \")",
            B: "input = name(\"Your name: \")",
            C: "name = read(\"Your name: \")",
            D: "get name \"Your name: \""
          },
          answer: "A",
          explanation: "input(\"prompt\") shows the prompt text, waits for the user to type, and returns what they typed as a string - which we store in the variable name.",
          code: "name = input(\"Your name: \")\nprint(\"Hello,\", name)",
          related: ["input()", "Variables"]
        },
        {
          difficulty: "easy",
          question: "Are semicolons required at the end of Python statements?",
          options: {
            A: "Yes, always",
            B: "No - a new line ends a statement",
            C: "Only inside functions",
            D: "Only in Python 2"
          },
          answer: "B",
          explanation: "Unlike C/Java/JavaScript, Python statements end at the end of the line. Semicolons are allowed (to squeeze two statements on one line) but are considered bad style.",
          code: "x = 1\ny = 2        # normal\nx = 1; y = 2  # legal but unpythonic",
          related: ["Statements", "Style (PEP 8)"]
        },
        {
          difficulty: "medium",
          question: "How can a long statement be continued onto the next line?",
          options: {
            A: "With a backslash \\ at the end of the line, or inside brackets ( )",
            B: "With the keyword 'continue'",
            C: "With a semicolon",
            D: "It's impossible - statements must fit one line"
          },
          answer: "A",
          explanation: "A trailing backslash joins physical lines, and anything inside (), [] or {} can span lines freely - the bracket style is preferred.",
          code: "total = (1 + 2 + 3 +\n         4 + 5)        # preferred\n\ntotal = 1 + 2 + 3 + \\\n        4 + 5          # backslash style",
          related: ["Line continuation", "Style (PEP 8)"]
        },
        {
          difficulty: "medium",
          question: "What does help(print) do in the Python shell?",
          options: {
            A: "Prints the word 'help'",
            B: "Shows the documentation for the print function",
            C: "Opens a web browser",
            D: "Causes an error"
          },
          answer: "B",
          explanation: "help(anything) shows the built-in documentation (docstring) for that object - functions, modules, classes. It's Python's built-in manual.",
          code: ">>> help(print)\n# Help on built-in function print ...",
          related: ["Docstrings", "dir()"]
        },
        {
          difficulty: "medium",
          question: "What appears when you run: import this",
          options: {
            A: "An error - 'this' doesn't exist",
            B: "The Zen of Python - a poem of design principles",
            C: "The Python version number",
            D: "A list of all keywords"
          },
          answer: "B",
          explanation: "import this prints 'The Zen of Python' - 19 guiding principles like 'Simple is better than complex' and 'Readability counts'. It's a famous Easter egg.",
          notes: ["Its ideas explain why Python code favors clarity over cleverness."],
          related: ["PEP 20", "Pythonic style"]
        },
        {
          difficulty: "easy",
          question: "Which command shows which Python version is installed?",
          options: { A: "python --version", B: "python --v", C: "version python", D: "python ?version" },
          answer: "A",
          explanation: "python --version (or python -V) prints the installed version, e.g. Python 3.12.1.",
          notes: ["Python 3 is the modern version; Python 2 support ended in 2020."],
          related: ["Python 2 vs 3"]
        },
        {
          difficulty: "medium",
          question: "In what order does Python execute the lines of a script?",
          options: {
            A: "Top to bottom, line by line",
            B: "It starts from a main() function like C",
            C: "Alphabetical order of variables",
            D: "Random order"
          },
          answer: "A",
          explanation: "Python simply runs the file from the first line to the last. Functions are only DEFINED when read - their bodies run later, when called. There is no required main() function.",
          code: "print(\"first\")\n\ndef greet():\n    print(\"third - only when called\")\n\nprint(\"second\")\ngreet()",
          related: ["def", "__main__"]
        },
        {
          difficulty: "hard",
          question: "What is the difference between an expression and a statement?",
          options: {
            A: "They are the same thing",
            B: "An expression produces a value; a statement performs an action",
            C: "Expressions are only used in loops",
            D: "Statements always return values"
          },
          answer: "B",
          explanation: "An expression evaluates to a value (2+3, len(\"hi\"), x > 5) and can be used inside other code. A statement is a complete instruction (if, for, x = 5, return) that DOES something but isn't itself a value.",
          code: "y = 2 + 3        # '2 + 3' is an expression,\n                  # 'y = 2 + 3' is a statement",
          related: ["Evaluation", "Assignment"]
        },
        {
          difficulty: "hard",
          question: "Python code is actually compiled before running. Into what?",
          options: {
            A: "Machine code for your CPU",
            B: "Bytecode, executed by the Python Virtual Machine",
            C: "JavaScript",
            D: "Assembly language"
          },
          answer: "B",
          explanation: "Python source is compiled to bytecode (.pyc files in __pycache__), which the Python Virtual Machine (PVM) then interprets. This is automatic and invisible - which is why Python is still called an interpreted language.",
          notes: ["The __pycache__ folder you see in projects holds this cached bytecode."],
          related: ["PVM", "__pycache__", "CPython"]
        },
        {
          difficulty: "easy",
          question: "Which of these is a popular editor / IDE for writing Python?",
          options: {
            A: "VS Code",
            B: "PyCharm",
            C: "IDLE (comes with Python)",
            D: "All of the above"
          },
          answer: "D",
          explanation: "All three are widely used: IDLE ships with Python itself, VS Code is a free general-purpose editor with a great Python extension, and PyCharm is a dedicated Python IDE.",
          related: ["Development environment"]
        }
      ]
    }
  ]
});
