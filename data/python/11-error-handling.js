/* ============================================================
   PYTHON - TOPIC 11: ERROR HANDLING (try / except) (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "Python",
  icon: "🐍",
  color: "#3776ab",
  description: "Master Python from basics to advanced - 20 topics.",
  topics: [
    {
      name: "11. Error Handling",
      questions: [
        {
          difficulty: "easy",
          question: "What is an exception in Python?",
          options: {
            A: "A syntax mistake caught before running",
            B: "An error that occurs WHILE the program runs, which can be caught and handled",
            C: "A warning message",
            D: "A special comment"
          },
          answer: "B",
          explanation: "Exceptions are runtime errors - division by zero, missing file, bad conversion. Unlike syntax errors (caught before the program starts), exceptions happen mid-run and CAN be caught with try/except.",
          related: ["Runtime errors", "SyntaxError vs exceptions"]
        },
        {
          difficulty: "easy",
          question: "Which is the correct basic structure for handling an error?",
          options: {
            A: "try:\\n    risky()\\nexcept:\\n    handle()",
            B: "attempt:\\n    risky()\\nrescue:\\n    handle()",
            C: "try risky() catch handle()",
            D: "if error: handle()"
          },
          answer: "A",
          explanation: "Python uses try/except: the risky code goes in try; if it raises an exception, the except block runs instead of crashing.",
          code: "try:\n    n = int(input(\"Number: \"))\nexcept ValueError:\n    print(\"That's not a number\")",
          related: ["try/except"]
        },
        {
          difficulty: "easy",
          question: "What exception does 10 / 0 raise?",
          options: { A: "ValueError", B: "ZeroDivisionError", C: "MathError", D: "TypeError" },
          answer: "B",
          explanation: "Dividing by zero raises ZeroDivisionError. Its message: 'division by zero'.",
          code: "try:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print(\"Can't divide by zero!\")",
          related: ["ZeroDivisionError"]
        },
        {
          difficulty: "easy",
          question: "What exception does int(\"abc\") raise?",
          options: { A: "TypeError", B: "NameError", C: "ValueError", D: "ConversionError" },
          answer: "C",
          explanation: "The TYPE is right (a string) but the VALUE can't be converted - that's ValueError. TypeError would be for a wrong type entirely, like int([1,2]).",
          code: "try:\n    n = int(\"abc\")\nexcept ValueError as e:\n    print(\"Bad value:\", e)",
          related: ["ValueError", "TypeError"]
        },
        {
          difficulty: "medium",
          question: "Match the exception: accessing nums[10] when nums has 3 items?",
          options: { A: "KeyError", B: "IndexError", C: "ValueError", D: "RangeError" },
          answer: "B",
          explanation: "Lists raise IndexError for out-of-range positions. KeyError is the dict equivalent (missing key). There is no RangeError in Python.",
          code: "nums = [1, 2, 3]\n# nums[10]        # IndexError: list index out of range\nd = {\"a\": 1}\n# d[\"z\"]           # KeyError: 'z'",
          related: ["IndexError", "KeyError"]
        },
        {
          difficulty: "easy",
          question: "Using a variable that was never defined raises:",
          options: { A: "NameError", B: "ValueError", C: "KeyError", D: "UndefinedError" },
          answer: "A",
          explanation: "NameError: name 'x' is not defined - Python doesn't know that name. Often caused by typos in variable names.",
          related: ["NameError", "Typos"]
        },
        {
          difficulty: "easy",
          question: "What happens to a program when an exception is NOT caught?",
          options: {
            A: "It continues from the next line",
            B: "It stops and prints a traceback showing where the error happened",
            C: "It restarts",
            D: "Nothing visible"
          },
          answer: "B",
          explanation: "An unhandled exception crashes the program and prints a traceback - the chain of calls that led to the error, ending with the exception type and message. Learning to READ tracebacks is a superpower.",
          notes: ["Read tracebacks bottom-up: the last line names the error; lines above show where."],
          related: ["Traceback", "Debugging"]
        },
        {
          difficulty: "medium",
          question: "In a try/except, what runs when NO exception occurs?",
          options: {
            A: "Both try and except blocks",
            B: "Only the try block - except is skipped entirely",
            C: "Only the except block",
            D: "Neither"
          },
          answer: "B",
          explanation: "except is the emergency exit - it only runs when its exception actually happens. On a clean run, the try body completes and except is ignored.",
          code: "try:\n    print(\"works fine\")\nexcept ValueError:\n    print(\"never printed here\")\n# output: works fine",
          related: ["Control flow"]
        },
        {
          difficulty: "medium",
          question: "How do you get the error MESSAGE inside except?",
          options: {
            A: "except ValueError as e: print(e)",
            B: "except ValueError: print(error)",
            C: "except ValueError(e): print(e)",
            D: "print(except.message)"
          },
          answer: "A",
          explanation: "'as e' binds the exception object to a name; printing it shows the message. e is only available inside that except block.",
          code: "try:\n    int(\"abc\")\nexcept ValueError as e:\n    print(\"Problem:\", e)\n# Problem: invalid literal for int() with base 10: 'abc'",
          related: ["Exception objects", "as keyword"]
        },
        {
          difficulty: "medium",
          question: "How do you handle TWO different exceptions DIFFERENTLY?",
          options: {
            A: "Multiple except blocks, one per exception type",
            B: "Two try blocks",
            C: "except handles everything the same way always",
            D: "Use if/else inside try"
          },
          answer: "A",
          explanation: "Stack except blocks - Python runs the FIRST one matching the raised exception. Order specific-to-general.",
          code: "try:\n    n = int(input())\n    print(10 / n)\nexcept ValueError:\n    print(\"Not a number\")\nexcept ZeroDivisionError:\n    print(\"Can't divide by zero\")",
          related: ["Multiple except", "Exception matching"]
        },
        {
          difficulty: "medium",
          question: "How do you catch ValueError AND TypeError with the SAME handler?",
          options: {
            A: "except (ValueError, TypeError):",
            B: "except ValueError and TypeError:",
            C: "except ValueError, TypeError:",
            D: "except [ValueError, TypeError]:"
          },
          answer: "A",
          explanation: "A TUPLE of exception types shares one handler: except (ValueError, TypeError) as e. Option C was Python 2 syntax and is now an error.",
          code: "try:\n    risky()\nexcept (ValueError, TypeError) as e:\n    print(\"Bad input:\", e)",
          related: ["Exception tuples"]
        },
        {
          difficulty: "hard",
          question: "What does the ELSE clause do in try/except/else?",
          options: {
            A: "Runs when an exception WAS raised",
            B: "Runs only when the try block completed WITHOUT any exception",
            C: "Always runs",
            D: "Same as finally"
          },
          answer: "B",
          explanation: "else is the 'success path' - it runs after a clean try. Putting follow-up code there (rather than inside try) keeps the try block small, so you only catch errors from the truly risky line.",
          code: "try:\n    n = int(text)\nexcept ValueError:\n    print(\"bad input\")\nelse:\n    print(\"got number\", n)   # only on success",
          related: ["try/else", "Minimal try blocks"]
        },
        {
          difficulty: "medium",
          question: "When does the FINALLY block run?",
          options: {
            A: "Only on success",
            B: "Only on error",
            C: "ALWAYS - success, exception, even a return",
            D: "Only if except matched"
          },
          answer: "C",
          explanation: "finally is guaranteed cleanup - it runs no matter how the try block exits: normally, via an exception (caught or not), or via return/break. Perfect for closing files and connections.",
          code: "try:\n    risky()\nexcept ValueError:\n    print(\"handled\")\nfinally:\n    print(\"always runs\")  # cleanup here",
          related: ["finally", "Cleanup"]
        },
        {
          difficulty: "easy",
          question: "Which statement deliberately TRIGGERS an exception?",
          options: { A: "raise", B: "throw", C: "error", D: "panic" },
          answer: "A",
          explanation: "raise fires an exception on purpose: raise ValueError(\"age cannot be negative\"). (throw is Java/JavaScript.)",
          code: "def set_age(age):\n    if age < 0:\n        raise ValueError(\"age cannot be negative\")\n    return age",
          related: ["raise", "Validation"]
        },
        {
          difficulty: "medium",
          question: "Why raise an exception in your OWN function instead of returning -1 or None on bad input?",
          options: {
            A: "Exceptions can't be ignored silently, carry a clear message, and stop bad data spreading",
            B: "Exceptions are faster",
            C: "return doesn't work for errors",
            D: "No reason - error codes are better"
          },
          answer: "A",
          explanation: "A returned -1 can be forgotten and treated as data; a raised exception demands attention and pinpoints the problem. 'Errors should never pass silently' - the Zen of Python.",
          code: "def withdraw(balance, amount):\n    if amount > balance:\n        raise ValueError(\"insufficient funds\")\n    return balance - amount",
          related: ["raise", "API design"]
        },
        {
          difficulty: "hard",
          question: "Why is a BARE except (catching everything) considered bad practice?",
          options: {
            A: "It's slower",
            B: "It hides real bugs and even catches Ctrl+C - you can't tell WHAT went wrong",
            C: "It's a syntax error in Python 3",
            D: "It only catches ValueError"
          },
          answer: "B",
          explanation: "except: swallows EVERYTHING - typos (NameError), logic bugs, even KeyboardInterrupt - making failures invisible. Catch the specific exceptions you expect; at worst use except Exception as e and log it.",
          code: "# BAD - hides all bugs:\ntry: process()\nexcept: pass\n\n# GOOD:\ntry: process()\nexcept FileNotFoundError:\n    print(\"file missing\")",
          related: ["Bare except", "Best practices"]
        },
        {
          difficulty: "medium",
          question: "Trying to open a file that doesn't exist raises:",
          options: { A: "FileNotFoundError", B: "IOError only in Python 2", C: "MissingFileError", D: "KeyError" },
          answer: "A",
          explanation: "open(\"nofile.txt\") raises FileNotFoundError - one of the most commonly handled exceptions in real programs.",
          code: "try:\n    f = open(\"nofile.txt\")\nexcept FileNotFoundError:\n    print(\"File not found - creating a new one\")",
          related: ["FileNotFoundError", "Files"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\ntry:\n    print(\"A\")\n    x = 1 / 0\n    print(\"B\")\nexcept ZeroDivisionError:\n    print(\"C\")\nprint(\"D\")",
          options: { A: "A C D", B: "A B C D", C: "A C", D: "C D" },
          answer: "A",
          explanation: "'A' prints, then 1/0 raises - the rest of try ('B') is SKIPPED, control jumps to except ('C'), and the program continues normally after ('D').",
          notes: ["Key point: the try block stops at the line that raised."],
          related: ["Control flow", "Tracing"]
        },
        {
          difficulty: "medium",
          question: "Which loop keeps asking until the user types a valid number?",
          options: {
            A: "while True:\\n    try:\\n        n = int(input()); break\\n    except ValueError:\\n        print(\"try again\")",
            B: "try until valid: n = int(input())",
            C: "n = int(input()) repeat except",
            D: "for i in valid: input()"
          },
          answer: "A",
          explanation: "The standard robust-input pattern: loop forever, try the conversion, break on success, catch ValueError and re-ask on failure.",
          code: "while True:\n    try:\n        n = int(input(\"Number: \"))\n        break\n    except ValueError:\n        print(\"Not a number - try again\")",
          related: ["Input validation", "while True"]
        },
        {
          difficulty: "hard",
          question: "What does assert x > 0, \"x must be positive\" do?",
          options: {
            A: "Raises AssertionError with that message if the condition is False",
            B: "Prints the message always",
            C: "Converts x to positive",
            D: "Nothing in any mode"
          },
          answer: "A",
          explanation: "assert is a development-time sanity check: if the condition fails, AssertionError is raised with your message. Note: assertions are STRIPPED when Python runs with -O, so never use them for real input validation.",
          code: "def average(nums):\n    assert len(nums) > 0, \"empty list!\"\n    return sum(nums) / len(nums)",
          related: ["assert", "AssertionError"]
        },
        {
          difficulty: "hard",
          question: "What is EAFP - the Pythonic error philosophy?",
          options: {
            A: "'Easier to Ask Forgiveness than Permission' - just try it and catch the exception, instead of checking first",
            B: "'Every Assertion Fails Predictably'",
            C: "A testing framework",
            D: "'Except All, Fix Later'"
          },
          answer: "A",
          explanation: "EAFP: try the operation and handle failure - vs LBYL ('Look Before You Leap'): check conditions first. Python favors EAFP: it avoids race conditions and duplicate checks.",
          code: "# EAFP (Pythonic):\ntry:\n    value = d[\"key\"]\nexcept KeyError:\n    value = default\n\n# LBYL:\nif \"key\" in d:\n    value = d[\"key\"]",
          related: ["EAFP vs LBYL", "Python philosophy"]
        },
        {
          difficulty: "hard",
          question: "How do you define your OWN exception type?",
          options: {
            A: "class InsufficientFunds(Exception): pass",
            B: "def InsufficientFunds(Exception):",
            C: "exception InsufficientFunds:",
            D: "new Exception(\"InsufficientFunds\")"
          },
          answer: "A",
          explanation: "Custom exceptions are classes inheriting from Exception - often just 'pass' bodies. They let callers catch YOUR specific error: except InsufficientFunds.",
          code: "class InsufficientFunds(Exception):\n    pass\n\ndef withdraw(bal, amt):\n    if amt > bal:\n        raise InsufficientFunds(f\"short by {amt - bal}\")",
          related: ["Custom exceptions", "Inheritance"]
        },
        {
          difficulty: "medium",
          question: "Inside except, what does a bare 'raise' (no arguments) do?",
          options: {
            A: "Re-raises the SAME exception it just caught",
            B: "Raises a new generic Exception",
            C: "Cancels the exception",
            D: "SyntaxError"
          },
          answer: "A",
          explanation: "Bare raise re-throws the current exception - useful to log or clean up but still let the error propagate upward for someone else to handle.",
          code: "try:\n    process()\nexcept ValueError:\n    print(\"logging the error...\")\n    raise    # pass it up unchanged",
          related: ["Re-raising", "Logging"]
        },
        {
          difficulty: "medium",
          question: "except Exception: catches...",
          options: {
            A: "Almost all normal errors - but NOT KeyboardInterrupt or SystemExit",
            B: "Absolutely everything including Ctrl+C",
            C: "Only built-in exceptions",
            D: "Only one error per program"
          },
          answer: "A",
          explanation: "Nearly every error inherits from Exception. KeyboardInterrupt (Ctrl+C) and SystemExit inherit from BaseException instead - deliberately, so except Exception doesn't block a user trying to quit. That's why it's safer than a bare except.",
          related: ["Exception hierarchy", "BaseException"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\ndef f():\n    try:\n        return \"from try\"\n    finally:\n        print(\"cleanup\")\nprint(f())",
          options: {
            A: "cleanup then from try",
            B: "from try then cleanup",
            C: "only from try",
            D: "only cleanup"
          },
          answer: "A",
          explanation: "finally runs even on return - the return value is computed, finally executes ('cleanup'), THEN the function actually returns ('from try' is printed by the outer print).",
          code: "def f():\n    try:\n        return \"from try\"\n    finally:\n        print(\"cleanup\")   # runs first!\nprint(f())\n# cleanup\n# from try",
          related: ["finally", "return interaction"]
        },
        {
          difficulty: "easy",
          question: "\"hello\" + 5 raises which exception?",
          options: { A: "ValueError", B: "TypeError", C: "NameError", D: "SyntaxError" },
          answer: "B",
          explanation: "Mixing incompatible TYPES (str + int) is TypeError: can only concatenate str (not \"int\") to str. Compare: int(\"abc\") is ValueError - right type, bad value.",
          related: ["TypeError", "ValueError"]
        },
        {
          difficulty: "medium",
          question: "Where in a traceback do you find the actual error?",
          options: {
            A: "The FIRST line",
            B: "The LAST line names the exception; the lines above show the path of calls to it",
            C: "The middle",
            D: "Tracebacks don't show errors"
          },
          answer: "B",
          explanation: "Read from the bottom: last line = exception type + message; the 'File ..., line ...' entries above show where - the DEEPEST one is usually your bug. 'most recent call last' means the bottom entries are closest to the error.",
          related: ["Traceback", "Debugging"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\ntry:\n    try:\n        1 / 0\n    except ValueError:\n        print(\"inner\")\nexcept ZeroDivisionError:\n    print(\"outer\")",
          options: { A: "inner", B: "outer", C: "inner outer", D: "Uncaught error" },
          answer: "B",
          explanation: "The inner except only handles ValueError - it does NOT match ZeroDivisionError, so the exception keeps travelling outward until the OUTER handler matches: 'outer'. Unmatched exceptions bubble up.",
          related: ["Exception propagation", "Nested try"]
        },
        {
          difficulty: "easy",
          question: "Which of these is a SYNTAX error rather than an exception?",
          options: {
            A: "if x > 5   (missing colon)",
            B: "10 / 0",
            C: "int(\"abc\")",
            D: "nums[99]"
          },
          answer: "A",
          explanation: "A missing colon breaks Python's grammar - detected BEFORE the program even starts, and try/except cannot catch it. The other three are runtime exceptions.",
          related: ["SyntaxError", "Runtime vs parse time"]
        },
        {
          difficulty: "medium",
          question: "Best practice: which code goes INSIDE the try block?",
          options: {
            A: "As little as possible - only the line(s) that can actually fail",
            B: "The whole program",
            C: "Only print statements",
            D: "Nothing - try can be empty"
          },
          answer: "A",
          explanation: "Small try blocks make it obvious WHICH operation failed and avoid accidentally catching unrelated bugs. Wrap the risky line, handle the specific error, keep the rest outside (or in else).",
          code: "try:\n    n = int(text)          # only the risky line\nexcept ValueError:\n    n = 0\nresult = n * 2              # safe code outside",
          related: ["Best practices", "try/else"]
        }
      ]
    }
  ]
});
