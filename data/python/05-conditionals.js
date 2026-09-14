/* ============================================================
   PYTHON - TOPIC 5: CONDITIONALS (if / elif / else) (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "Python",
  icon: "🐍",
  color: "#3776ab",
  description: "Master Python from basics to advanced - 20 topics.",
  topics: [
    {
      name: "5. Conditionals",
      questions: [
        {
          difficulty: "easy",
          question: "Which is the correct syntax for an if statement?",
          options: {
            A: "if (x > 5) { print(\"big\") }",
            B: "if x > 5:\\n    print(\"big\")",
            C: "if x > 5 then print(\"big\")",
            D: "if x > 5 print(\"big\")"
          },
          answer: "B",
          explanation: "Python's if needs a colon at the end of the condition and an INDENTED body on the next line. No parentheses or braces are required.",
          code: "x = 10\nif x > 5:\n    print(\"big\")",
          notes: ["Forgetting the colon is the #1 beginner syntax error."],
          related: ["Indentation", "Colon"]
        },
        {
          difficulty: "easy",
          question: "What does elif mean?",
          options: {
            A: "End the if statement",
            B: "'Else if' - test another condition when the previous ones were False",
            C: "A loop keyword",
            D: "Error handling"
          },
          answer: "B",
          explanation: "elif is short for 'else if' - it adds another condition that is only checked when all previous if/elif conditions were False. You can chain as many as you like.",
          code: "if score >= 90:\n    print(\"A\")\nelif score >= 75:\n    print(\"B\")\nelif score >= 60:\n    print(\"C\")\nelse:\n    print(\"Fail\")",
          related: ["if/else chains"]
        },
        {
          difficulty: "easy",
          question: "When does the else block run?",
          options: {
            A: "Always",
            B: "Only when the if (and every elif) condition was False",
            C: "Only when the if condition was True",
            D: "Never - it's optional decoration"
          },
          answer: "B",
          explanation: "else is the catch-all: it runs exactly when none of the if/elif conditions matched. It takes no condition of its own.",
          code: "age = 15\nif age >= 18:\n    print(\"Adult\")\nelse:\n    print(\"Minor\")   # runs - condition was False",
          related: ["if/elif/else"]
        },
        {
          difficulty: "easy",
          question: "What is the output of:\nx = 7\nif x > 5:\n    print(\"A\")\nif x > 6:\n    print(\"B\")",
          options: { A: "A", B: "B", C: "A then B", D: "Nothing" },
          answer: "C",
          explanation: "These are two SEPARATE if statements - both conditions are checked independently, and both are True (7 > 5 and 7 > 6), so both print.",
          notes: ["With elif instead of the second if, only 'A' would print."],
          related: ["if vs elif"]
        },
        {
          difficulty: "medium",
          question: "What is the output of:\nx = 7\nif x > 5:\n    print(\"A\")\nelif x > 6:\n    print(\"B\")",
          options: { A: "A", B: "B", C: "A then B", D: "Nothing" },
          answer: "A",
          explanation: "In an if/elif chain, Python stops at the FIRST True condition. x > 5 is True, so 'A' prints and the elif is never even checked - even though x > 6 is also True.",
          code: "# Order matters in elif chains!\n# Put the most specific condition first.",
          notes: ["This is the key difference between elif and separate ifs."],
          related: ["elif", "Evaluation order"]
        },
        {
          difficulty: "easy",
          question: "What is the output of:\nif 0:\n    print(\"yes\")\nelse:\n    print(\"no\")",
          options: { A: "yes", B: "no", C: "0", D: "Error" },
          answer: "B",
          explanation: "if works with any value, not just True/False. 0 is falsy, so the else branch runs. Falsy values: 0, \"\", [], {}, (), None, False.",
          code: "if 0:        print(\"never\")\nif 1:        print(\"always\")   # any non-zero is truthy\nif \"hi\":     print(\"always\")   # non-empty string",
          related: ["Truthiness", "Falsy values"]
        },
        {
          difficulty: "medium",
          question: "What is the output of:\nitems = []\nif items:\n    print(\"has items\")\nelse:\n    print(\"empty\")",
          options: { A: "has items", B: "empty", C: "[]", D: "Error" },
          answer: "B",
          explanation: "An empty list is falsy, so 'if items:' fails and else runs. This is the Pythonic way to test for emptiness - no need for len(items) == 0.",
          code: "if items:            # Pythonic\nif len(items) > 0:   # works, but wordier",
          related: ["Truthiness", "Empty collections"]
        },
        {
          difficulty: "medium",
          question: "What is the ternary (one-line) form of:\nif age >= 18: status = \"adult\"\nelse: status = \"minor\"",
          options: {
            A: "status = \"adult\" if age >= 18 else \"minor\"",
            B: "status = if age >= 18 \"adult\" else \"minor\"",
            C: "status = age >= 18 ? \"adult\" : \"minor\"",
            D: "status = (age >= 18, \"adult\", \"minor\")"
          },
          answer: "A",
          explanation: "Python's conditional expression reads like English: VALUE_IF_TRUE if CONDITION else VALUE_IF_FALSE. Option C is the C/Java/JS syntax, which Python doesn't use.",
          code: "status = \"adult\" if age >= 18 else \"minor\"\nprint(\"even\" if n % 2 == 0 else \"odd\")",
          related: ["Ternary expression", "Conditional expression"]
        },
        {
          difficulty: "easy",
          question: "Which condition tests whether n is an even number?",
          options: { A: "n % 2 == 0", B: "n / 2 == 0", C: "n % 2 == 1", D: "n // 2 == 0" },
          answer: "A",
          explanation: "Even numbers leave remainder 0 when divided by 2, so n % 2 == 0. (n % 2 == 1 tests for ODD numbers.)",
          code: "n = 8\nif n % 2 == 0:\n    print(\"even\")   # prints\nelse:\n    print(\"odd\")",
          related: ["Modulo", "Even/odd"]
        },
        {
          difficulty: "easy",
          question: "What happens with:\nif x = 5:\n    print(\"five\")",
          options: {
            A: "Prints five when x is 5",
            B: "SyntaxError - assignment is not allowed as a condition",
            C: "Always prints five",
            D: "Sets x to 5 silently"
          },
          answer: "B",
          explanation: "A single = is assignment, and Python forbids it inside an if condition - you get a SyntaxError immediately. The comparison you want is == (two equals signs).",
          code: "if x == 5:    # correct - comparison\n    print(\"five\")",
          notes: ["In C this bug compiles and runs wrong; Python catches it for you."],
          related: ["= vs ==", "SyntaxError"]
        },
        {
          difficulty: "easy",
          question: "How do you require BOTH conditions to be true?",
          options: {
            A: "if a > 0 and b > 0:",
            B: "if a > 0 & also b > 0:",
            C: "if a > 0 && b > 0:",
            D: "if both(a > 0, b > 0):"
          },
          answer: "A",
          explanation: "Python uses the English words: and, or, not - instead of &&, ||, !. 'if a > 0 and b > 0:' passes only when both are true.",
          code: "if age >= 18 and has_id:\n    print(\"entry allowed\")",
          related: ["Logical operators"]
        },
        {
          difficulty: "medium",
          question: "Which condition checks that x is between 10 and 20 (inclusive)?",
          options: {
            A: "if 10 <= x <= 20:",
            B: "if x >= 10 and x <= 20:",
            C: "Both A and B work",
            D: "if x in (10, 20):"
          },
          answer: "C",
          explanation: "Both are correct. Chained comparison (10 <= x <= 20) is the more Pythonic form. Option D only tests if x is EXACTLY 10 or 20, not in between.",
          code: "x = 15\nprint(10 <= x <= 20)          # True - preferred\nprint(x >= 10 and x <= 20)    # True - also fine",
          related: ["Chained comparison"]
        },
        {
          difficulty: "easy",
          question: "What does this print when fruit = \"apple\"?\nif fruit in [\"apple\", \"mango\", \"banana\"]:\n    print(\"known fruit\")",
          options: { A: "known fruit", B: "Nothing", C: "apple", D: "Error" },
          answer: "A",
          explanation: "The in operator tests membership in a list - much cleaner than fruit == \"apple\" or fruit == \"mango\" or ... . \"apple\" is in the list, so it prints.",
          code: "if fruit in [\"apple\", \"mango\", \"banana\"]:  # clean\nif fruit == \"apple\" or fruit == \"mango\" or fruit == \"banana\":  # clumsy",
          related: ["in operator", "Membership"]
        },
        {
          difficulty: "medium",
          question: "What does the pass statement do?",
          options: {
            A: "Skips to the next loop iteration",
            B: "Nothing - it's a placeholder where code is syntactically required",
            C: "Exits the program",
            D: "Passes a value to a function"
          },
          answer: "B",
          explanation: "pass does literally nothing. It exists because Python blocks can't be empty - use it as a placeholder for code you'll write later. (continue is the one that skips loop iterations.)",
          code: "if x > 5:\n    pass    # TODO: handle this later\nelse:\n    print(\"small\")",
          related: ["continue", "Placeholders"]
        },
        {
          difficulty: "hard",
          question: "Bug hunt! Why does this print 'teen' for EVERY age?\nif age == 13 or 14 or 15:\n    print(\"teen\")",
          options: {
            A: "It's correct code",
            B: "or has higher precedence than ==",
            C: "14 and 15 are evaluated as standalone truthy values, so the condition is always True",
            D: "== can't be used with or"
          },
          answer: "C",
          explanation: "The condition parses as (age == 13) or (14) or (15). The bare numbers 14 and 15 are truthy on their own, so the whole condition is ALWAYS True. Correct: age in (13, 14, 15) or repeat the comparison.",
          code: "# WRONG - always True:\nif age == 13 or 14 or 15:\n\n# RIGHT:\nif age in (13, 14, 15):\nif age == 13 or age == 14 or age == 15:",
          notes: ["One of the most common logic bugs in beginner Python code."],
          related: ["Truthiness", "in operator", "Common gotchas"]
        },
        {
          difficulty: "medium",
          question: "What is the correct way to check if a variable is None?",
          options: {
            A: "if x is None:",
            B: "if x == None:",
            C: "if x = None:",
            D: "if None in x:"
          },
          answer: "A",
          explanation: "The convention (and PEP 8 rule) is 'is None' - identity check against the single None object. == None usually works but can be fooled by objects that override ==, and it's considered bad style.",
          code: "result = find_user(\"ana\")\nif result is None:\n    print(\"not found\")\nif result is not None:\n    print(\"found\")",
          related: ["None", "is operator", "PEP 8"]
        },
        {
          difficulty: "easy",
          question: "What is the output of:\nx = 3\nif x > 10:\n    print(\"big\")",
          options: { A: "big", B: "Nothing at all", C: "False", D: "Error" },
          answer: "B",
          explanation: "The condition is False and there's no else - so the block is skipped and the program simply continues. No output, no error.",
          related: ["if without else"]
        },
        {
          difficulty: "medium",
          question: "What is the output of:\nprint(5 > 3)",
          options: { A: "True", B: "yes", C: "1", D: "5" },
          answer: "A",
          explanation: "A comparison is an expression that evaluates to a bool - you can print it, store it, or return it directly. No if needed!",
          code: "is_adult = age >= 18      # store the bool\nprint(score > pass_mark)  # print it directly\nreturn n % 2 == 0          # return it from a function",
          notes: ["Writing 'if x > 5: return True else: return False' can be shortened to 'return x > 5'."],
          related: ["Booleans", "Expressions"]
        },
        {
          difficulty: "medium",
          question: "Grade logic: score = 95. What does this print?\nif score >= 60:\n    print(\"C\")\nelif score >= 75:\n    print(\"B\")\nelif score >= 90:\n    print(\"A\")",
          options: { A: "A", B: "B", C: "C", D: "Nothing" },
          answer: "C",
          explanation: "The chain stops at the FIRST true condition: 95 >= 60 is True, so it prints 'C' - clearly not intended! In elif chains, always test the most restrictive condition FIRST (>= 90, then >= 75, then >= 60).",
          code: "# Correct order - most specific first:\nif score >= 90:   print(\"A\")\nelif score >= 75: print(\"B\")\nelif score >= 60: print(\"C\")",
          notes: ["Classic interview trap about elif ordering."],
          related: ["elif ordering", "Logic bugs"]
        },
        {
          difficulty: "easy",
          question: "Can you put an if inside another if?",
          options: {
            A: "Yes - just indent one more level (nested if)",
            B: "No, Python forbids nesting",
            C: "Only with the nested keyword",
            D: "Only inside functions"
          },
          answer: "A",
          explanation: "Conditions nest freely - each level adds one more indent. But deep nesting gets hard to read; combining conditions with and is often cleaner.",
          code: "if logged_in:\n    if is_admin:\n        print(\"admin panel\")\n\n# often better:\nif logged_in and is_admin:\n    print(\"admin panel\")",
          related: ["Nesting", "and operator"]
        },
        {
          difficulty: "medium",
          question: "What is the output of:\nname = \"\"\nprint(\"Hello, \" + (name or \"Guest\"))",
          options: { A: "Hello, ", B: "Hello, Guest", C: "Hello, False", D: "Error" },
          answer: "B",
          explanation: "name is an empty string (falsy), so (name or \"Guest\") evaluates to \"Guest\" - or returns the first truthy operand. A neat idiom for default values.",
          code: "username = input(\"Name: \").strip()\nprint(\"Hello,\", username or \"Guest\")",
          related: ["Short-circuit or", "Default values"]
        },
        {
          difficulty: "hard",
          question: "Why is the ORDER of this condition important?\nif x != 0 and 10 / x > 2:",
          options: {
            A: "It isn't - order never matters with and",
            B: "and evaluates left to right and STOPS at the first False, so 10/x never runs when x is 0 - preventing ZeroDivisionError",
            C: "Python evaluates the right side first",
            D: "x != 0 is slower so it should be last"
          },
          answer: "B",
          explanation: "Short-circuiting: if x != 0 is False, Python skips the right side entirely. Reversed (10 / x > 2 and x != 0), a zero x would crash with ZeroDivisionError before the guard is reached.",
          code: "x = 0\nif x != 0 and 10 / x > 2:   # safe\n    ...\n# if 10 / x > 2 and x != 0:  # crashes when x == 0!",
          notes: ["Use the same trick with None: if obj is not None and obj.value > 5"],
          related: ["Short-circuit evaluation", "Guard conditions"]
        },
        {
          difficulty: "hard",
          question: "not (a and b) is always equal to:",
          options: {
            A: "not a and not b",
            B: "not a or not b",
            C: "a or b",
            D: "not a and b"
          },
          answer: "B",
          explanation: "De Morgan's law: negating an AND turns it into an OR of negations. 'Not (rich and famous)' means 'not rich OR not famous'. Similarly, not (a or b) == not a and not b.",
          code: "a, b = True, False\nprint(not (a and b))       # True\nprint(not a or not b)      # True - same",
          related: ["De Morgan's laws", "Boolean logic"]
        },
        {
          difficulty: "medium",
          question: "Python 3.10 added a switch-like statement. What is it called?",
          options: { A: "switch/case", B: "match/case", C: "select/when", D: "choose/option" },
          answer: "B",
          explanation: "match/case (structural pattern matching) arrived in Python 3.10. It compares a value against several patterns - like switch in other languages but more powerful. The underscore case is the default.",
          code: "match command:\n    case \"start\":\n        print(\"starting\")\n    case \"stop\":\n        print(\"stopping\")\n    case _:\n        print(\"unknown\")",
          related: ["match statement", "Python 3.10"]
        },
        {
          difficulty: "easy",
          question: "What is the output of:\nage = \"18\"\nif age == 18:\n    print(\"adult\")\nelse:\n    print(\"hmm\")",
          options: { A: "adult", B: "hmm", C: "18", D: "Error" },
          answer: "B",
          explanation: "age is the STRING \"18\" (in quotes), and \"18\" == 18 is False - a string never equals a number in Python. This bug commonly appears with input(), which always returns strings.",
          code: "age = input(\"Age: \")     # returns str!\nif int(age) == 18:        # convert first\n    print(\"adult\")",
          related: ["input()", "Type conversion", "Common gotchas"]
        },
        {
          difficulty: "medium",
          question: "Which is the correct one-line form (allowed but use sparingly)?",
          options: {
            A: "if x > 5: print(\"big\")",
            B: "if x > 5 then print(\"big\")",
            C: "if x > 5 -> print(\"big\")",
            D: "x > 5: print(\"big\")"
          },
          answer: "A",
          explanation: "A short body may sit on the same line after the colon: if x > 5: print(\"big\"). Fine for tiny cases, but multi-line style is more readable and preferred by PEP 8.",
          related: ["Style (PEP 8)"]
        },
        {
          difficulty: "medium",
          question: "What is the output of:\nx = 10\nresult = x if x > 100 else -x\nprint(result)",
          options: { A: "10", B: "-10", C: "100", D: "Error" },
          answer: "B",
          explanation: "The ternary picks the else-side because 10 > 100 is False: result = -x = -10. Read it as: 'result is x if x is big, otherwise negative x'.",
          related: ["Ternary expression"]
        },
        {
          difficulty: "easy",
          question: "if not is_raining: print(\"go outside\")\nWhen does this print?",
          options: {
            A: "When is_raining is True",
            B: "When is_raining is False",
            C: "Always",
            D: "Never"
          },
          answer: "B",
          explanation: "not flips the condition: 'if not is_raining' means 'if it is NOT raining'. When is_raining is False, not False is True, so it prints.",
          code: "if not logged_in:\n    print(\"please log in\")",
          related: ["not operator"]
        },
        {
          difficulty: "hard",
          question: "What is the output of:\nprint(bool([]) == bool(\"\"))",
          options: { A: "True", B: "False", C: "Error", D: "None" },
          answer: "A",
          explanation: "Both an empty list and an empty string are falsy: bool([]) is False and bool(\"\") is False, and False == False is True. All empty containers share the same truthiness.",
          code: "print(bool([]))    # False\nprint(bool(\"\"))    # False\nprint(bool({}))    # False\nprint(bool(0))     # False",
          related: ["Truthiness", "Falsy values"]
        },
        {
          difficulty: "medium",
          question: "A shop gives 10% discount to members AND seniors get 20% regardless of membership. Which order of checks is correct for a senior member to get 20%?",
          options: {
            A: "Check is_senior first, then is_member in an elif",
            B: "Check is_member first, then is_senior in an elif",
            C: "Order doesn't matter with elif",
            D: "Use two separate if statements to apply both"
          },
          answer: "A",
          explanation: "elif chains stop at the first match. If is_member is checked first, a senior member matches it and gets only 10%. Put the higher-priority rule (senior, 20%) first.",
          code: "if is_senior:\n    discount = 20    # priority rule first\nelif is_member:\n    discount = 10\nelse:\n    discount = 0",
          related: ["elif ordering", "Business logic"]
        }
      ]
    }
  ]
});
