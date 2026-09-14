/* ============================================================
   PYTHON - TOPIC 4: STRINGS (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "Python",
  icon: "🐍",
  color: "#3776ab",
  description: "Master Python from basics to advanced - 20 topics.",
  topics: [
    {
      name: "4. Strings",
      questions: [
        {
          difficulty: "easy",
          question: "What is the output of:\ns = \"python\"\nprint(s[0])",
          options: { A: "p", B: "y", C: "python", D: "Error" },
          answer: "A",
          explanation: "String indexing starts at 0: s[0] is the FIRST character 'p', s[1] is 'y', and so on.",
          code: "s = \"python\"\n#     012345   <- index positions\nprint(s[0])   # p\nprint(s[2])   # t",
          related: ["Indexing", "Zero-based counting"]
        },
        {
          difficulty: "easy",
          question: "What is the output of:\ns = \"python\"\nprint(s[-1])",
          options: { A: "p", B: "n", C: "o", D: "Error" },
          answer: "B",
          explanation: "Negative indexes count from the END: s[-1] is the last character 'n', s[-2] is 'o'. Very handy for grabbing the end without knowing the length.",
          code: "s = \"python\"\nprint(s[-1])   # n (last)\nprint(s[-2])   # o (second last)",
          related: ["Negative indexing"]
        },
        {
          difficulty: "medium",
          question: "What is the output of:\ns = \"python\"\nprint(s[1:4])",
          options: { A: "yth", B: "ytho", C: "pyt", D: "tho" },
          answer: "A",
          explanation: "Slicing s[start:end] takes characters from index start UP TO BUT NOT INCLUDING end: indexes 1, 2, 3 -> 'yth'. The end index is always excluded.",
          code: "s = \"python\"\nprint(s[1:4])   # yth (indexes 1,2,3)\nprint(s[0:2])   # py",
          notes: ["Remember: the slice grabs (end - start) characters."],
          related: ["Slicing", "Half-open ranges"]
        },
        {
          difficulty: "easy",
          question: "What is the output of: print(\"python\"[:3])",
          options: { A: "pyt", B: "pyth", C: "hon", D: "Error" },
          answer: "A",
          explanation: "Leaving out the start means 'from the beginning': [:3] takes indexes 0, 1, 2 -> 'pyt'. Similarly [3:] means 'from index 3 to the end' -> 'hon'.",
          code: "s = \"python\"\nprint(s[:3])   # pyt\nprint(s[3:])   # hon\nprint(s[:])    # python (full copy)",
          related: ["Slicing", "Defaults"]
        },
        {
          difficulty: "medium",
          question: "What is the output of: print(\"abcdef\"[::2])",
          options: { A: "abc", B: "ace", C: "bdf", D: "fedcba" },
          answer: "B",
          explanation: "The third slice number is the STEP: [::2] takes every 2nd character starting from index 0 -> a, c, e.",
          code: "print(\"abcdef\"[::2])    # ace\nprint(\"abcdef\"[1::2])   # bdf",
          related: ["Slicing", "Step"]
        },
        {
          difficulty: "medium",
          question: "What is the classic one-liner to REVERSE a string s?",
          options: { A: "s.reverse()", B: "reverse(s)", C: "s[::-1]", D: "s[-1:1]" },
          answer: "C",
          explanation: "A step of -1 walks the string backwards: s[::-1] returns the reversed string. Strings have no .reverse() method (lists do).",
          code: "s = \"python\"\nprint(s[::-1])   # nohtyp",
          notes: ["Famous interview question: check palindrome with s == s[::-1]."],
          related: ["Slicing", "Palindromes"]
        },
        {
          difficulty: "easy",
          question: "What is the output of: print(\"hello\".upper())",
          options: { A: "Hello", B: "HELLO", C: "hello", D: "hELLO" },
          answer: "B",
          explanation: ".upper() returns a NEW string with all letters uppercase. The original string is unchanged (strings can't be modified).",
          code: "s = \"hello\"\nprint(s.upper())   # HELLO\nprint(s)            # hello - original untouched",
          related: ["String methods", "lower()"]
        },
        {
          difficulty: "easy",
          question: "Which method converts \"PyThOn\" to \"python\"?",
          options: { A: "small()", B: "lowercase()", C: "lower()", D: "downcase()" },
          answer: "C",
          explanation: ".lower() returns the string with every letter in lowercase - commonly used to compare text case-insensitively.",
          code: "a = input(\"yes/no: \")\nif a.lower() == \"yes\":   # accepts YES, Yes, yes...\n    print(\"ok\")",
          related: ["upper()", "casefold()"]
        },
        {
          difficulty: "easy",
          question: "What does \"  hello  \".strip() return?",
          options: { A: "\"hello\"", B: "\"  hello\"", C: "\"hello  \"", D: "\"h e l l o\"" },
          answer: "A",
          explanation: ".strip() removes whitespace (spaces, tabs, newlines) from BOTH ends of a string - the middle is untouched. lstrip() and rstrip() do only the left or right side.",
          code: "s = \"  hello  \"\nprint(s.strip())    # 'hello'\nprint(s.lstrip())   # 'hello  '\nprint(s.rstrip())   # '  hello'",
          notes: ["Always strip() user input - people love typing stray spaces."],
          related: ["lstrip()", "rstrip()", "Cleaning input"]
        },
        {
          difficulty: "easy",
          question: "What does \"a,b,c\".split(\",\") return?",
          options: { A: "\"abc\"", B: "['a', 'b', 'c']", C: "('a', 'b', 'c')", D: "'a' 'b' 'c'" },
          answer: "B",
          explanation: ".split(separator) cuts a string into a LIST of pieces. \"a,b,c\".split(\",\") gives ['a', 'b', 'c']. With no argument, split() cuts on any whitespace.",
          code: "print(\"a,b,c\".split(\",\"))    # ['a', 'b', 'c']\nprint(\"one two  three\".split()) # ['one', 'two', 'three']",
          related: ["join()", "Lists"]
        },
        {
          difficulty: "medium",
          question: "What is the output of: print(\"-\".join([\"a\", \"b\", \"c\"]))",
          options: { A: "abc", B: "a-b-c", C: "-abc-", D: "['a-b-c']" },
          answer: "B",
          explanation: ".join() is the opposite of split(): it glues a list of strings together using the string it's called on as the separator: \"-\".join(...) -> a-b-c.",
          code: "words = [\"a\", \"b\", \"c\"]\nprint(\"-\".join(words))   # a-b-c\nprint(\"\".join(words))    # abc\nprint(\", \".join(words))  # a, b, c",
          notes: ["The separator comes FIRST - a common point of confusion."],
          related: ["split()", "Lists"]
        },
        {
          difficulty: "easy",
          question: "What does \"banana\".replace(\"a\", \"o\") return?",
          options: { A: "bonono", B: "bonana", C: "banana", D: "bonan" },
          answer: "A",
          explanation: ".replace(old, new) replaces EVERY occurrence by default: all three a's become o's -> 'bonono'. A third argument limits the count: replace(\"a\", \"o\", 1) -> 'bonana'.",
          code: "print(\"banana\".replace(\"a\", \"o\"))     # bonono\nprint(\"banana\".replace(\"a\", \"o\", 1))  # bonana",
          related: ["String methods"]
        },
        {
          difficulty: "medium",
          question: "What is the difference between find() and index() on strings?",
          options: {
            A: "No difference",
            B: "find() returns -1 when not found; index() raises ValueError",
            C: "index() returns -1; find() raises an error",
            D: "find() only works on numbers"
          },
          answer: "B",
          explanation: "Both return the position of a substring. When the substring is absent, find() politely returns -1 while index() raises ValueError. Use find() when absence is normal.",
          code: "s = \"hello\"\nprint(s.find(\"ll\"))    # 2\nprint(s.find(\"xy\"))    # -1\n# s.index(\"xy\")         # ValueError!",
          related: ["find()", "index()", "in operator"]
        },
        {
          difficulty: "easy",
          question: "What is the output of: print(\"py\" in \"python\")",
          options: { A: "True", B: "False", C: "0", D: "Error" },
          answer: "A",
          explanation: "The in operator checks whether a substring exists inside a string: \"py\" appears at the start of \"python\", so True. It's the cleanest way to test 'contains'.",
          code: "print(\"py\" in \"python\")      # True\nprint(\"java\" in \"python\")    # False\nprint(\"x\" not in \"python\")   # True",
          related: ["in operator", "Membership testing"]
        },
        {
          difficulty: "easy",
          question: "name = \"Ana\"\nWhich line prints: Hello Ana! using an f-string?",
          options: {
            A: "print(f\"Hello {name}!\")",
            B: "print(\"Hello {name}!\")",
            C: "print(f\"Hello name!\")",
            D: "print(\"Hello\" + {name})"
          },
          answer: "A",
          explanation: "An f-string starts with f before the quote and fills in {expressions}: f\"Hello {name}!\" -> Hello Ana!. Option B lacks the f, so it prints the braces literally.",
          code: "name = \"Ana\"\nprint(f\"Hello {name}!\")   # Hello Ana!\nprint(\"Hello {name}!\")    # Hello {name}!  (no f!)",
          notes: ["f-strings (Python 3.6+) are the modern, preferred way to format text."],
          related: ["f-strings", "format()"]
        },
        {
          difficulty: "medium",
          question: "What is the output of: print(f\"{2 + 3}\")",
          options: { A: "2 + 3", B: "5", C: "{2 + 3}", D: "Error" },
          answer: "B",
          explanation: "f-string braces can hold ANY expression, not just variable names - it's evaluated and the result inserted: f\"{2 + 3}\" -> \"5\".",
          code: "price = 100\nprint(f\"Total: {price * 1.18:.2f}\")  # Total: 118.00",
          notes: ["After a colon you can add formatting, e.g. :.2f = 2 decimal places."],
          related: ["f-strings", "Format specifiers"]
        },
        {
          difficulty: "medium",
          question: "What happens with:\ns = \"hello\"\ns[0] = \"H\"",
          options: {
            A: "s becomes \"Hello\"",
            B: "TypeError - strings are immutable",
            C: "s becomes \"H\"",
            D: "Nothing"
          },
          answer: "B",
          explanation: "Strings CANNOT be changed in place - assigning to a character raises TypeError. To 'change' a string you build a new one: \"H\" + s[1:].",
          code: "s = \"hello\"\n# s[0] = \"H\"          # TypeError!\ns = \"H\" + s[1:]       # build a new string\nprint(s)               # Hello",
          notes: ["Immutability is why all string methods RETURN a new string."],
          related: ["Immutability", "Slicing"]
        },
        {
          difficulty: "easy",
          question: "What is the output of: print(\"ab\" * 3)",
          options: { A: "ababab", B: "ab3", C: "ab ab ab", D: "Error" },
          answer: "A",
          explanation: "Multiplying a string by an integer repeats it: \"ab\" * 3 -> \"ababab\". Handy for separators: print(\"-\" * 30).",
          code: "print(\"ab\" * 3)    # ababab\nprint(\"-\" * 20)    # --------------------",
          related: ["String repetition", "Operators"]
        },
        {
          difficulty: "easy",
          question: "What does \"banana\".count(\"an\") return?",
          options: { A: "1", B: "2", C: "3", D: "0" },
          answer: "B",
          explanation: ".count(sub) counts non-overlapping occurrences: 'banana' contains 'an' at positions 1 and 3 -> 2.",
          code: "print(\"banana\".count(\"an\"))   # 2\nprint(\"banana\".count(\"a\"))    # 3",
          related: ["String methods"]
        },
        {
          difficulty: "medium",
          question: "Which expression checks if a filename ends with \".pdf\"?",
          options: {
            A: "filename.endswith(\".pdf\")",
            B: "filename.end(\".pdf\")",
            C: "filename[-4] == \".pdf\"",
            D: "filename.last(\".pdf\")"
          },
          answer: "A",
          explanation: ".endswith() and .startswith() test the ends of a string and return True/False. Option C is close but wrong - filename[-4] is a single character; you'd need filename[-4:].",
          code: "f = \"report.pdf\"\nprint(f.endswith(\".pdf\"))       # True\nprint(f.startswith(\"rep\"))      # True",
          related: ["startswith()", "Slicing"]
        },
        {
          difficulty: "easy",
          question: "What is the output of: print(\"hello world\".title())",
          options: { A: "Hello world", B: "HELLO WORLD", C: "Hello World", D: "hello World" },
          answer: "C",
          explanation: ".title() capitalizes the first letter of EVERY word. .capitalize() would capitalize only the first letter of the whole string ('Hello world').",
          code: "s = \"hello world\"\nprint(s.title())        # Hello World\nprint(s.capitalize())   # Hello world",
          related: ["capitalize()", "String methods"]
        },
        {
          difficulty: "medium",
          question: "What does \"123\".isdigit() return?",
          options: { A: "True", B: "False", C: "123", D: "Error" },
          answer: "A",
          explanation: ".isdigit() is True when every character is a digit 0-9. Great for validating input BEFORE calling int(). \"12.5\".isdigit() is False (the dot isn't a digit).",
          code: "print(\"123\".isdigit())    # True\nprint(\"12.5\".isdigit())   # False\nprint(\"abc\".isdigit())    # False",
          related: ["isalpha()", "Input validation"]
        },
        {
          difficulty: "medium",
          question: "What is the output of: print(\"apple\" < \"banana\")",
          options: { A: "True", B: "False", C: "Error", D: "5" },
          answer: "A",
          explanation: "Strings compare alphabetically (by character codes), letter by letter: 'a' < 'b', so \"apple\" < \"banana\" is True. This is why sorting a list of strings gives alphabetical order.",
          code: "print(\"apple\" < \"banana\")   # True\nprint(\"Zoo\" < \"apple\")      # True! capitals come before lowercase",
          notes: ["All UPPERCASE letters sort before all lowercase in default comparisons."],
          related: ["Ordering", "sorted()", "ord()"]
        },
        {
          difficulty: "hard",
          question: "What do ord(\"A\") and chr(66) return?",
          options: {
            A: "65 and \"B\"",
            B: "\"A\" and 66",
            C: "1 and \"66\"",
            D: "Error for both"
          },
          answer: "A",
          explanation: "ord() gives a character's Unicode number (A = 65) and chr() does the reverse (66 = B). They're inverses: chr(ord(\"A\")) is \"A\" again.",
          code: "print(ord(\"A\"))   # 65\nprint(chr(66))     # B\nprint(chr(ord(\"a\") + 1))  # b",
          notes: ["Used in Caesar ciphers and character math puzzles."],
          related: ["Unicode", "ASCII"]
        },
        {
          difficulty: "easy",
          question: "How do you create a string that spans several lines?",
          options: {
            A: "Triple quotes: \"\"\"line1\\nline2\"\"\" style blocks",
            B: "Using the multiline keyword",
            C: "Ending each line with a comma",
            D: "It's not possible"
          },
          answer: "A",
          explanation: "Triple-quoted strings keep their line breaks exactly as typed - ideal for long messages, menus, or SQL queries.",
          code: "menu = \"\"\"1. Start\n2. Options\n3. Quit\"\"\"\nprint(menu)",
          related: ["Triple quotes", "Docstrings"]
        },
        {
          difficulty: "medium",
          question: "What is the output of:\nage = 21\nprint(\"Age: \" + age)",
          options: {
            A: "Age: 21",
            B: "TypeError - can't concatenate str and int",
            C: "Age: \"21\"",
            D: "Age:21"
          },
          answer: "B",
          explanation: "+ can't join a string with a number. Fix it with str(age), an f-string, or a comma in print (which handles any type).",
          code: "age = 21\nprint(\"Age: \" + str(age))   # works\nprint(f\"Age: {age}\")         # best\nprint(\"Age:\", age)           # also works",
          related: ["TypeError", "f-strings", "str()"]
        },
        {
          difficulty: "medium",
          question: "What is the output of: print(\"Hello {}, you are {}\".format(\"Ana\", 21))",
          options: {
            A: "Hello Ana, you are 21",
            B: "Hello {}, you are {}",
            C: "Hello 21, you are Ana",
            D: "Error"
          },
          answer: "A",
          explanation: ".format() fills the {} placeholders in order: first {} gets \"Ana\", second gets 21. f-strings do the same job more readably, but .format() is common in older code.",
          code: "print(\"Hello {}, you are {}\".format(\"Ana\", 21))\n# same as:\nname, age = \"Ana\", 21\nprint(f\"Hello {name}, you are {age}\")",
          related: ["format()", "f-strings"]
        },
        {
          difficulty: "hard",
          question: "What is the output of: print(len(\"a\\nb\"))",
          options: { A: "4", B: "3", C: "2", D: "5" },
          answer: "B",
          explanation: "\\n is ONE character (the newline), not two. So the string contains 'a', newline, 'b' - length 3.",
          code: "print(len(\"a\\nb\"))    # 3\nprint(len(\"\\t\"))       # 1\nprint(len(\"\\\\\"))       # 1 (one backslash)",
          related: ["Escape sequences", "len()"]
        },
        {
          difficulty: "medium",
          question: "Which expression removes only the TRAILING newline from s = \"data\\n\"?",
          options: { A: "s.rstrip()", B: "s.strip(\"data\")", C: "s.replace(\"n\", \"\")", D: "s.cut()" },
          answer: "A",
          explanation: ".rstrip() strips whitespace (including \\n) from the right end only - the standard way to clean lines read from a file. Option C would delete the letter n from 'data' too!",
          code: "line = \"data\\n\"\nprint(repr(line.rstrip()))   # 'data'",
          related: ["strip()", "Reading files"]
        },
        {
          difficulty: "hard",
          question: "s = \"madam\" - which expression checks if s is a palindrome?",
          options: {
            A: "s == s[::-1]",
            B: "s.palindrome()",
            C: "s == reverse(s)",
            D: "s[::-1] == True"
          },
          answer: "A",
          explanation: "A palindrome reads the same backwards. s[::-1] is the reversed string, so comparing it to the original does the check in one line. There's no built-in palindrome() or reverse() function for strings.",
          code: "s = \"madam\"\nprint(s == s[::-1])   # True\n\ns = \"python\"\nprint(s == s[::-1])   # False",
          related: ["Slicing", "Interview questions"]
        }
      ]
    }
  ]
});
