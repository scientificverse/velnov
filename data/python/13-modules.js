/* ============================================================
   PYTHON - TOPIC 13: MODULES & PACKAGES (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "Python",
  icon: "🐍",
  color: "#3776ab",
  description: "Master Python from basics to advanced - 20 topics.",
  topics: [
    {
      name: "13. Modules & Packages",
      questions: [
        {
          difficulty: "easy",
          question: "What is a module in Python?",
          options: {
            A: "A .py file whose functions/variables you can import and reuse",
            B: "A type of loop",
            C: "A compressed archive",
            D: "A class method"
          },
          answer: "A",
          explanation: "Any Python file is a module. import makes its functions, classes and variables available in your code - the basic unit of code reuse.",
          related: ["import", "Code reuse"]
        },
        {
          difficulty: "easy",
          question: "After 'import math', how do you call its square root function?",
          options: { A: "math.sqrt(16)", B: "sqrt(16)", C: "math->sqrt(16)", D: "import sqrt(16)" },
          answer: "A",
          explanation: "Plain import binds the MODULE name - you access contents with the dot: math.sqrt(16). Bare sqrt(16) only works after 'from math import sqrt'.",
          code: "import math\nprint(math.sqrt(16))   # 4.0\nprint(math.pi)          # 3.141592653589793",
          related: ["import", "Namespaces"]
        },
        {
          difficulty: "easy",
          question: "What does 'from math import sqrt' let you write?",
          options: {
            A: "sqrt(16) - directly, without the math. prefix",
            B: "math.sqrt(16) only",
            C: "Nothing - it's invalid",
            D: "sqrt.math(16)"
          },
          answer: "A",
          explanation: "from-import copies a specific name into your file's namespace: sqrt(16) works directly. The rest of math stays unimported (math.pi would be a NameError).",
          code: "from math import sqrt, pi\nprint(sqrt(16))   # 4.0\nprint(pi)          # 3.14159...",
          related: ["from-import"]
        },
        {
          difficulty: "easy",
          question: "What does 'import numpy as np' do?",
          options: {
            A: "Imports numpy under the shorter alias np",
            B: "Imports only the np part of numpy",
            C: "Renames the numpy package on disk",
            D: "Creates a copy of numpy"
          },
          answer: "A",
          explanation: "as creates an alias - the module is used as np.array(...) instead of numpy.array(...). Common conventions: numpy as np, pandas as pd.",
          code: "import numpy as np\nimport pandas as pd\narr = np.array([1, 2, 3])",
          related: ["Aliases", "Conventions"]
        },
        {
          difficulty: "medium",
          question: "Why is 'from math import *' discouraged?",
          options: {
            A: "It dumps EVERY name into your file - unclear origins, and it can silently overwrite your own variables",
            B: "It's slower to run",
            C: "It's a syntax error",
            D: "It only imports half the module"
          },
          answer: "A",
          explanation: "Star imports pollute the namespace: readers can't tell where a function came from, and two star imports can clash (both defining e.g. sqrt). Import what you need, explicitly.",
          code: "# unclear:\nfrom math import *\nprint(floor(2.7))    # where's floor from?\n\n# clear:\nimport math\nprint(math.floor(2.7))",
          related: ["Namespaces", "Best practices"]
        },
        {
          difficulty: "easy",
          question: "What does random.randint(1, 6) return?",
          options: {
            A: "A random integer from 1 to 6, BOTH ends included - like a dice roll",
            B: "1 to 5 (6 excluded)",
            C: "A random float",
            D: "Always 6"
          },
          answer: "A",
          explanation: "randint is INCLUSIVE on both ends - unusual for Python (range excludes its stop!). Perfect dice: random.randint(1, 6).",
          code: "import random\ndice = random.randint(1, 6)   # 1,2,3,4,5 or 6",
          notes: ["Contrast: random.randrange(1, 6) gives 1-5."],
          related: ["random module", "randint vs randrange"]
        },
        {
          difficulty: "easy",
          question: "Which picks ONE random item from a list?",
          options: {
            A: "random.choice(items)",
            B: "random.pick(items)",
            C: "items.random()",
            D: "random.one(items)"
          },
          answer: "A",
          explanation: "random.choice(sequence) returns one random element. Related: random.sample(items, 3) picks 3 without repeats; random.shuffle(items) reorders the list in place.",
          code: "import random\nwinner = random.choice([\"Ana\", \"Ben\", \"Cy\"])\nprint(winner)",
          related: ["choice()", "sample()", "shuffle()"]
        },
        {
          difficulty: "medium",
          question: "What does random.random() return?",
          options: {
            A: "A float from 0.0 up to (but not including) 1.0",
            B: "A random integer",
            C: "0 or 1",
            D: "A float from -1 to 1"
          },
          answer: "A",
          explanation: "random.random() gives a float in [0.0, 1.0). Scale it for other ranges, or use random.uniform(a, b) directly.",
          code: "import random\nprint(random.random())        # e.g. 0.7134...\nprint(random.uniform(1, 10))  # float between 1 and 10",
          related: ["random()", "uniform()"]
        },
        {
          difficulty: "easy",
          question: "What do math.floor(2.7) and math.ceil(2.1) return?",
          options: { A: "2 and 3", B: "3 and 2", C: "2.7 and 2.1", D: "3 and 3" },
          answer: "A",
          explanation: "floor() rounds DOWN to the nearest integer (2.7 -> 2), ceil() rounds UP (2.1 -> 3). Both return ints.",
          code: "import math\nprint(math.floor(2.7))   # 2\nprint(math.ceil(2.1))    # 3",
          related: ["math module", "Rounding"]
        },
        {
          difficulty: "easy",
          question: "How do you get today's date?",
          options: {
            A: "from datetime import date; date.today()",
            B: "import today",
            C: "time.today()",
            D: "date.now.today"
          },
          answer: "A",
          explanation: "The datetime module handles dates and times: date.today() gives the current date; datetime.now() adds the time of day.",
          code: "from datetime import date, datetime\nprint(date.today())      # 2026-07-03\nprint(datetime.now())    # 2026-07-03 14:30:05.123",
          related: ["datetime module"]
        },
        {
          difficulty: "easy",
          question: "Which pauses the program for 2 seconds?",
          options: { A: "time.sleep(2)", B: "time.wait(2)", C: "sleep.time(2)", D: "pause(2)" },
          answer: "A",
          explanation: "time.sleep(seconds) blocks execution for that long - used for delays, animations, rate limiting.",
          code: "import time\nprint(\"3...\")\ntime.sleep(1)\nprint(\"2...\")",
          related: ["time module"]
        },
        {
          difficulty: "easy",
          question: "What is pip?",
          options: {
            A: "Python's package installer - downloads third-party libraries from PyPI",
            B: "A Python IDE",
            C: "A file format",
            D: "Python's debugger"
          },
          answer: "A",
          explanation: "pip installs packages from the Python Package Index (PyPI): pip install requests. The standard library needs no installing; pip is for everything beyond it.",
          code: "# in the terminal (not in Python!):\npip install requests\npip list            # show installed packages",
          related: ["PyPI", "Third-party packages"]
        },
        {
          difficulty: "medium",
          question: "What is the STANDARD LIBRARY?",
          options: {
            A: "The modules that ship WITH Python - math, random, os, json... no pip needed",
            B: "Any code on GitHub",
            C: "Packages you must pay for",
            D: "Only the built-in functions like print"
          },
          answer: "A",
          explanation: "Python comes 'batteries included': hundreds of ready modules (math, random, datetime, os, json, csv, sqlite3...) available to import immediately. Third-party packages (numpy, requests) are the ones pip installs.",
          related: ["Batteries included", "pip"]
        },
        {
          difficulty: "medium",
          question: "You wrote helpers.py with a function greet(). How does main.py (same folder) use it?",
          options: {
            A: "import helpers, then helpers.greet()",
            B: "include helpers.py",
            C: "using helpers",
            D: "You can't import your own files"
          },
          answer: "A",
          explanation: "Your own .py files are modules too! import helpers (no .py extension) loads the file; call its contents with the dot. This is how projects split into multiple files.",
          code: "# helpers.py\ndef greet(name):\n    return f\"Hello {name}\"\n\n# main.py\nimport helpers\nprint(helpers.greet(\"Ana\"))",
          related: ["Custom modules", "Project structure"]
        },
        {
          difficulty: "hard",
          question: "What is the purpose of:\nif __name__ == \"__main__\":\n    main()",
          options: {
            A: "Run main() only when the file is executed DIRECTLY - not when it's imported by another file",
            B: "Declare the program's name",
            C: "Make the file importable at all",
            D: "It's required in every Python file"
          },
          answer: "A",
          explanation: "Python sets __name__ to \"__main__\" in the file being run, but to the module's name when imported. The guard lets a file be BOTH a runnable script AND an importable library - imports get the functions without side effects.",
          code: "# helpers.py\ndef greet(): ...\n\nif __name__ == \"__main__\":\n    greet()   # runs only via: python helpers.py\n              # NOT when: import helpers",
          notes: ["A favorite interview question - know this one cold."],
          related: ["__name__", "Scripts vs modules"]
        },
        {
          difficulty: "hard",
          question: "print(\"loading!\") sits at the TOP of helpers.py (outside any function). What happens on 'import helpers'?",
          options: {
            A: "It prints 'loading!' - top-level code RUNS at import time (but only on the first import)",
            B: "Nothing - imports never execute code",
            C: "SyntaxError",
            D: "It prints on every import statement, even repeated ones"
          },
          answer: "A",
          explanation: "Importing EXECUTES the module top to bottom - defs create functions, and loose statements run. Python caches modules, so a second 'import helpers' does NOT re-run it. This is why the __main__ guard matters.",
          code: "# helpers.py\nprint(\"loading!\")     # runs on import!\ndef greet(): ...\n\n# main.py\nimport helpers   # prints: loading!\nimport helpers   # (cached - nothing prints)",
          related: ["Import mechanics", "Module caching"]
        },
        {
          difficulty: "medium",
          question: "Which exception does 'import nosuchmodule' raise?",
          options: { A: "ModuleNotFoundError", B: "FileNotFoundError", C: "NameError", D: "KeyError" },
          answer: "A",
          explanation: "Importing something that isn't installed or doesn't exist raises ModuleNotFoundError (a subclass of ImportError). Usually the fix: pip install it, or check the spelling.",
          code: "try:\n    import numpy\nexcept ModuleNotFoundError:\n    print(\"run: pip install numpy\")",
          related: ["ModuleNotFoundError", "pip"]
        },
        {
          difficulty: "medium",
          question: "What does dir(math) show?",
          options: {
            A: "Every name (functions, constants) defined in the math module",
            B: "The folder containing math",
            C: "The math source code",
            D: "Math homework"
          },
          answer: "A",
          explanation: "dir(anything) lists its attributes - for a module, all its functions and constants. Great for exploring: dir(str), dir(list), dir(random).",
          code: "import math\nprint(dir(math))\n# ['ceil', 'cos', 'floor', 'pi', 'sqrt', ...]",
          related: ["dir()", "help()", "Exploration"]
        },
        {
          difficulty: "medium",
          question: "What is the os module mainly for?",
          options: {
            A: "Talking to the operating system - files, folders, paths, environment variables",
            B: "Object serialization",
            C: "Online services",
            D: "Optimizing speed"
          },
          answer: "A",
          explanation: "os (and its friend os.path, plus the modern pathlib) handles OS tasks: list folders (os.listdir), make dirs (os.makedirs), check paths, read environment variables.",
          code: "import os\nprint(os.getcwd())          # current folder\nprint(os.listdir(\".\"))     # files in it\nos.makedirs(\"output\", exist_ok=True)",
          related: ["os module", "pathlib"]
        },
        {
          difficulty: "medium",
          question: "What does collections.Counter do?\nCounter([\"a\", \"b\", \"a\", \"a\"])",
          options: {
            A: "Counts occurrences: Counter({'a': 3, 'b': 1})",
            B: "Counts to infinity",
            C: "Removes duplicates",
            D: "Sorts the list"
          },
          answer: "A",
          explanation: "Counter is a dict subclass that counts items in one line - replacing the manual get(x, 0) + 1 loop. Bonus: .most_common(n) gives the top n.",
          code: "from collections import Counter\nvotes = [\"ana\", \"ben\", \"ana\", \"ana\"]\nc = Counter(votes)\nprint(c)                  # Counter({'ana': 3, 'ben': 1})\nprint(c.most_common(1))   # [('ana', 3)]",
          related: ["Counter", "collections module"]
        },
        {
          difficulty: "easy",
          question: "Which computes the average of [80, 90, 100] using the standard library?",
          options: {
            A: "statistics.mean([80, 90, 100])",
            B: "math.average([80, 90, 100])",
            C: "avg([80, 90, 100])",
            D: "numpy only can do this"
          },
          answer: "A",
          explanation: "The statistics module has mean, median, mode, stdev - no installation needed. (math has no average function; numpy works too but isn't required.)",
          code: "import statistics\nprint(statistics.mean([80, 90, 100]))    # 90\nprint(statistics.median([1, 3, 99]))      # 3",
          related: ["statistics module"]
        },
        {
          difficulty: "hard",
          question: "What is a PACKAGE, as opposed to a module?",
          options: {
            A: "A folder of modules (traditionally marked by an __init__.py file) - importable as package.module",
            B: "A zip file",
            C: "Any file over 1000 lines",
            D: "A module with classes"
          },
          answer: "A",
          explanation: "Packages organize related modules into folders: myapp/utils.py imports as 'from myapp import utils'. __init__.py marks the folder as a package (optional since 3.3 but still common) and runs on package import.",
          code: "myapp/\n  __init__.py\n  utils.py\n  models.py\n\n# usage:\nfrom myapp import utils\nfrom myapp.models import User",
          related: ["Packages", "__init__.py"]
        },
        {
          difficulty: "hard",
          question: "Where does Python LOOK for modules when you import?",
          options: {
            A: "The script's folder, then the paths in sys.path (standard library, installed packages)",
            B: "The whole hard drive",
            C: "Only the standard library",
            D: "The internet"
          },
          answer: "A",
          explanation: "Python walks sys.path in order: the running script's directory first, then standard library locations, then site-packages (pip installs). This is why a local file named random.py can SHADOW the real random module - a classic bug!",
          code: "import sys\nprint(sys.path)",
          notes: ["Never name your files math.py, random.py, string.py..."],
          related: ["sys.path", "Shadowing", "Import order"]
        },
        {
          difficulty: "medium",
          question: "You named your script random.py and 'import random' now breaks. Why?",
          options: {
            A: "Your own file shadows the standard random module - Python imports YOUR file instead",
            B: "random was removed from Python",
            C: "You must restart the computer",
            D: "randint is Python 2 only"
          },
          answer: "A",
          explanation: "The script's own folder is FIRST on the import path, so random.py (yours) wins over the standard library. Symptoms: AttributeError: module 'random' has no attribute 'randint'. Fix: rename your file.",
          related: ["Shadowing", "sys.path"]
        },
        {
          difficulty: "medium",
          question: "What does sys.argv contain?",
          options: {
            A: "The command-line arguments: sys.argv[0] is the script name, the rest are user-supplied",
            B: "All environment variables",
            C: "The Python version",
            D: "System errors"
          },
          answer: "A",
          explanation: "Running 'python app.py hello 42' gives sys.argv = ['app.py', 'hello', '42'] - all strings. It's the simplest way to accept command-line input.",
          code: "import sys\n# python app.py Ana\nprint(sys.argv)        # ['app.py', 'Ana']\nprint(sys.argv[1])     # Ana",
          related: ["sys module", "Command line"]
        },
        {
          difficulty: "medium",
          question: "What does math.pi ** 2 compute, roughly?",
          options: { A: "9.87 (pi squared)", B: "6.28 (2 pi)", C: "3.14", D: "Error - pi is a function" },
          answer: "A",
          explanation: "math.pi is a CONSTANT (3.14159...), not a function - no parentheses. pi squared is about 9.87.",
          code: "import math\nprint(math.pi ** 2)     # 9.869...\narea = math.pi * r**2   # circle area",
          related: ["math constants"]
        },
        {
          difficulty: "hard",
          question: "What is a circular import?",
          options: {
            A: "a.py imports b.py while b.py imports a.py - one gets a half-loaded module and often crashes",
            B: "Importing the same module twice",
            C: "Importing with a loop",
            D: "A pip feature"
          },
          answer: "A",
          explanation: "When two modules import each other, Python starts loading a, pauses to load b, which asks for a - but a is only half-executed, so names may be missing (ImportError/AttributeError). Fix: restructure, move shared code to a third module, or import inside functions.",
          related: ["Circular imports", "Architecture"]
        },
        {
          difficulty: "easy",
          question: "Which command shows every package pip has installed?",
          options: { A: "pip list", B: "pip show all", C: "python --packages", D: "pip everything" },
          answer: "A",
          explanation: "pip list prints installed packages and versions. pip show <name> gives details of one; pip freeze outputs the requirements.txt format.",
          related: ["pip", "requirements.txt"]
        },
        {
          difficulty: "medium",
          question: "What is requirements.txt used for?",
          options: {
            A: "Listing a project's package dependencies so others can 'pip install -r requirements.txt'",
            B: "Python's TODO list",
            C: "License requirements",
            D: "The program's system requirements"
          },
          answer: "A",
          explanation: "It records exactly what packages (and versions) a project needs. Anyone cloning your project runs one command to install them all - reproducible environments.",
          code: "# requirements.txt\nrequests==2.31.0\nnumpy>=1.24\n\n# install everything:\npip install -r requirements.txt",
          related: ["Dependencies", "pip"]
        },
        {
          difficulty: "medium",
          question: "Which import style does PEP 8 recommend at the TOP of a file?",
          options: {
            A: "Standard library first, then third-party, then your own modules - in separate groups",
            B: "Alphabetical single list, mixed",
            C: "Imports go at the bottom",
            D: "One giant from x import *"
          },
          answer: "A",
          explanation: "PEP 8 groups imports: 1) standard library, 2) third-party, 3) local modules - blank line between groups, all at the top of the file. Readers instantly see what the file depends on.",
          code: "import os\nimport json\n\nimport requests\n\nfrom myapp import helpers",
          related: ["PEP 8", "Code style"]
        }
      ]
    }
  ]
});
