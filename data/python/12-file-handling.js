/* ============================================================
   PYTHON - TOPIC 12: FILE HANDLING (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "Python",
  icon: "🐍",
  color: "#3776ab",
  description: "Master Python from basics to advanced - 20 topics.",
  topics: [
    {
      name: "12. File Handling",
      questions: [
        {
          difficulty: "easy",
          question: "Which function opens a file in Python?",
          options: { A: "open()", B: "file()", C: "read()", D: "load()" },
          answer: "A",
          explanation: "open(path, mode) returns a file object: open(\"notes.txt\", \"r\") opens for reading. The mode defaults to \"r\" if omitted.",
          code: "f = open(\"notes.txt\", \"r\")\ntext = f.read()\nf.close()",
          related: ["open()", "File modes"]
        },
        {
          difficulty: "easy",
          question: "What does mode \"r\" mean in open(\"data.txt\", \"r\")?",
          options: {
            A: "Read - file must already exist",
            B: "Remove the file",
            C: "Rename the file",
            D: "Read and write"
          },
          answer: "A",
          explanation: "\"r\" opens for READING only. If the file doesn't exist you get FileNotFoundError. Other modes: \"w\" write, \"a\" append, \"x\" create-new.",
          related: ["File modes", "FileNotFoundError"]
        },
        {
          difficulty: "medium",
          question: "What is the DANGER of mode \"w\"?",
          options: {
            A: "It's slower",
            B: "It ERASES the file's existing content the moment it opens",
            C: "It can't create new files",
            D: "It locks the file forever"
          },
          answer: "B",
          explanation: "\"w\" truncates: opening an existing file in \"w\" instantly wipes it - even if you never write anything. Use \"a\" (append) to keep existing content and add to the end.",
          code: "open(\"log.txt\", \"w\")   # content GONE\nopen(\"log.txt\", \"a\")   # content kept, writes go to the end",
          notes: ["Real data has been lost to this. Double-check your mode!"],
          related: ["Write mode", "Append mode"]
        },
        {
          difficulty: "easy",
          question: "Which mode ADDS to the end of a file without deleting what's there?",
          options: { A: "\"w\"", B: "\"a\"", C: "\"r\"", D: "\"end\"" },
          answer: "B",
          explanation: "\"a\" = append. Writes always go to the end; existing content is safe. Perfect for log files. The file is created if it doesn't exist.",
          code: "with open(\"log.txt\", \"a\") as f:\n    f.write(\"user logged in\\n\")",
          related: ["Append mode", "Logs"]
        },
        {
          difficulty: "easy",
          question: "What is the PREFERRED way to open files, and why?",
          options: {
            A: "with open(...) as f: - the file closes automatically, even on errors",
            B: "f = open(...) - simpler",
            C: "It makes no difference",
            D: "global open"
          },
          answer: "A",
          explanation: "The with statement (context manager) guarantees the file is closed when the block ends - even if an exception occurs inside. No forgotten close(), no leaked file handles.",
          code: "with open(\"notes.txt\") as f:\n    text = f.read()\n# file is ALREADY closed here",
          notes: ["Modern Python code almost never calls close() manually."],
          related: ["with statement", "Context managers"]
        },
        {
          difficulty: "easy",
          question: "What does f.read() return?",
          options: {
            A: "The ENTIRE file content as one string",
            B: "One line",
            C: "A list of lines",
            D: "The file size"
          },
          answer: "A",
          explanation: "read() slurps the whole file into a single string (newlines included). readline() gives one line; readlines() gives a list of all lines.",
          code: "with open(\"poem.txt\") as f:\n    text = f.read()      # one big string\nprint(len(text))",
          related: ["read()", "readlines()"]
        },
        {
          difficulty: "medium",
          question: "What is the difference between readline() and readlines()?",
          options: {
            A: "readline() returns the NEXT single line; readlines() returns ALL lines as a list",
            B: "They're identical",
            C: "readlines() reads one line",
            D: "readline() returns a list"
          },
          answer: "A",
          explanation: "readline() advances one line per call - good for reading just the header. readlines() loads every line into a list at once - convenient, but memory-heavy for huge files.",
          code: "with open(\"data.csv\") as f:\n    header = f.readline()     # first line only\n    rest = f.readlines()       # remaining lines as a list",
          related: ["readline()", "readlines()"]
        },
        {
          difficulty: "medium",
          question: "What is the BEST way to process a large file line by line?",
          options: {
            A: "for line in f: - iterate the file object directly",
            B: "f.read().split() always",
            C: "readlines() then loop",
            D: "while f.next():"
          },
          answer: "A",
          explanation: "A file object is iterable - looping it reads ONE line at a time, so even gigabyte files use tiny memory. readlines() would load everything at once.",
          code: "with open(\"big.log\") as f:\n    for line in f:\n        if \"ERROR\" in line:\n            print(line.strip())",
          related: ["Iteration", "Memory efficiency"]
        },
        {
          difficulty: "medium",
          question: "Why call line.strip() when reading lines from a file?",
          options: {
            A: "Each line ends with an invisible \\n newline - strip() removes it",
            B: "To remove all spaces inside the line",
            C: "Files require it",
            D: "To convert to lowercase"
          },
          answer: "A",
          explanation: "Lines keep their trailing newline character, so print(line) double-spaces and comparisons fail ('cat\\n' != 'cat'). strip() (or rstrip()) cleans it off.",
          code: "for line in f:\n    name = line.strip()\n    if name == \"cat\":    # now matches\n        print(\"found\")",
          related: ["strip()", "Newlines"]
        },
        {
          difficulty: "easy",
          question: "How do you WRITE text to an open file f?",
          options: { A: "f.write(\"hello\")", B: "f.print(\"hello\")", C: "write(f, \"hello\")", D: "f << \"hello\"" },
          answer: "A",
          explanation: "f.write(string) writes exactly the string you give - and returns the number of characters written.",
          code: "with open(\"out.txt\", \"w\") as f:\n    f.write(\"hello\\n\")\n    f.write(\"world\\n\")",
          related: ["write()"]
        },
        {
          difficulty: "medium",
          question: "What's the catch with f.write() compared to print()?",
          options: {
            A: "write() does NOT add a newline automatically - you must include \\n yourself",
            B: "write() adds two newlines",
            C: "write() can't write strings",
            D: "No difference"
          },
          answer: "A",
          explanation: "print() appends \\n for you; write() writes ONLY what you pass. Forgetting \\n glues all your lines into one. Alternative: print(\"text\", file=f) adds the newline.",
          code: "f.write(\"a\")\nf.write(\"b\")     # file contains: ab\nf.write(\"c\\n\")   # add \\n yourself\nprint(\"d\", file=f)  # or use print",
          related: ["write()", "Newlines"]
        },
        {
          difficulty: "medium",
          question: "What happens with f.write(42)?",
          options: {
            A: "Writes 42",
            B: "TypeError - write() needs a string, so convert: f.write(str(42))",
            C: "Writes '42' automatically",
            D: "Writes binary"
          },
          answer: "B",
          explanation: "write() only accepts strings (in text mode). Numbers must be converted first: str(42) or an f-string f\"{42}\\n\".",
          code: "total = 42\nf.write(str(total) + \"\\n\")\nf.write(f\"Total: {total}\\n\")   # cleaner",
          related: ["TypeError", "str()"]
        },
        {
          difficulty: "easy",
          question: "Opening a missing file in \"r\" mode raises:",
          options: { A: "FileNotFoundError", B: "ValueError", C: "KeyError", D: "Nothing - it creates the file" },
          answer: "A",
          explanation: "Read mode requires the file to exist. Write (\"w\") and append (\"a\") modes CREATE missing files instead.",
          code: "try:\n    with open(\"ghost.txt\") as f:\n        data = f.read()\nexcept FileNotFoundError:\n    data = \"\"",
          related: ["FileNotFoundError", "try/except"]
        },
        {
          difficulty: "hard",
          question: "What does mode \"x\" do?",
          options: {
            A: "Creates a NEW file - fails with FileExistsError if it already exists",
            B: "Extracts the file",
            C: "Executes the file",
            D: "Deletes the file"
          },
          answer: "A",
          explanation: "\"x\" is exclusive creation - a safe 'create only if new'. Unlike \"w\" it can never accidentally wipe an existing file.",
          code: "try:\n    with open(\"config.ini\", \"x\") as f:\n        f.write(\"[defaults]\\n\")\nexcept FileExistsError:\n    print(\"config already exists - not touching it\")",
          related: ["Exclusive mode", "FileExistsError"]
        },
        {
          difficulty: "medium",
          question: "When do you need mode \"rb\" or \"wb\"?",
          options: {
            A: "For BINARY files - images, audio, zip files - where data is bytes, not text",
            B: "For very big text files",
            C: "For read-backwards mode",
            D: "Never - text mode handles everything"
          },
          answer: "A",
          explanation: "The b suffix switches to binary mode: read() returns bytes instead of str, and no newline translation happens. Copying an image in text mode corrupts it.",
          code: "with open(\"photo.jpg\", \"rb\") as src:\n    data = src.read()          # bytes\nwith open(\"copy.jpg\", \"wb\") as dst:\n    dst.write(data)",
          related: ["Binary mode", "bytes"]
        },
        {
          difficulty: "medium",
          question: "What happens when you read from a file AFTER closing it?",
          options: {
            A: "Returns empty string",
            B: "ValueError: I/O operation on closed file",
            C: "Reopens automatically",
            D: "Returns None"
          },
          answer: "B",
          explanation: "A closed file object refuses all operations with ValueError. A common bug: doing f.read() OUTSIDE the with block - the file is already closed there.",
          code: "with open(\"a.txt\") as f:\n    data = f.read()      # inside: OK\n# f.read()               # outside: ValueError!",
          related: ["with statement", "ValueError"]
        },
        {
          difficulty: "hard",
          question: "Why does the SECOND read() return an empty string?\ndata1 = f.read()\ndata2 = f.read()",
          options: {
            A: "The file position is at the END after the first read - there's nothing left to read",
            B: "Files can only be read once ever",
            C: "It's a bug in Python",
            D: "The file gets deleted after reading"
          },
          answer: "A",
          explanation: "A file object keeps a position cursor. read() moves it to the end; the next read() starts there and finds nothing. f.seek(0) rewinds to the beginning to read again.",
          code: "data1 = f.read()   # everything; cursor at end\ndata2 = f.read()   # '' - nothing left\nf.seek(0)           # rewind\ndata3 = f.read()   # everything again",
          related: ["File position", "seek()"]
        },
        {
          difficulty: "hard",
          question: "What does f.seek(0) do?",
          options: {
            A: "Moves the read/write position back to the START of the file",
            B: "Deletes the first byte",
            C: "Searches for the number 0",
            D: "Closes the file"
          },
          answer: "A",
          explanation: "seek(position) jumps the file cursor to that byte offset - seek(0) rewinds to the beginning. f.tell() reports the current position.",
          related: ["seek()", "tell()"]
        },
        {
          difficulty: "medium",
          question: "A simple way to parse the CSV line \"Ana,21,Delhi\"?",
          options: {
            A: "line.strip().split(\",\") -> ['Ana', '21', 'Delhi']",
            B: "line.parse()",
            C: "line.csv()",
            D: "int(line)"
          },
          answer: "A",
          explanation: "split(\",\") cuts a comma-separated line into fields. For real CSV files with quoted commas, use the csv module - but split() handles simple data fine.",
          code: "with open(\"students.csv\") as f:\n    for line in f:\n        name, age, city = line.strip().split(\",\")\n        print(name, age)",
          related: ["split()", "csv module"]
        },
        {
          difficulty: "medium",
          question: "Which module converts Python dicts to/from the JSON text format?",
          options: { A: "json", B: "dict", C: "text", D: "xml" },
          answer: "A",
          explanation: "The built-in json module: json.dump(data, f) writes a dict as JSON to a file; json.load(f) reads it back. The universal format for configs and APIs.",
          code: "import json\n\ndata = {\"name\": \"Ana\", \"score\": 92}\nwith open(\"save.json\", \"w\") as f:\n    json.dump(data, f)\n\nwith open(\"save.json\") as f:\n    loaded = json.load(f)\nprint(loaded[\"score\"])   # 92",
          related: ["json module", "Serialization"]
        },
        {
          difficulty: "hard",
          question: "What is the difference between json.dump() and json.dumps()?",
          options: {
            A: "dump() writes to a FILE; dumps() returns a STRING (s = string)",
            B: "dumps() is the plural version for lists",
            C: "dump() deletes the data after",
            D: "No difference"
          },
          answer: "A",
          explanation: "The trailing s means 'string': dumps(data) gives you the JSON text to use however you like; dump(data, f) writes it straight into a file. Same pair for reading: loads(text) vs load(f).",
          code: "import json\ntext = json.dumps({\"a\": 1})   # '{\"a\": 1}' - a string\ndata = json.loads(text)        # back to a dict",
          related: ["json module", "dumps vs dump"]
        },
        {
          difficulty: "medium",
          question: "How do you check whether a file exists BEFORE opening it?",
          options: {
            A: "os.path.exists(\"data.txt\")  (or pathlib's Path(\"data.txt\").exists())",
            B: "open.exists(\"data.txt\")",
            C: "file.check(\"data.txt\")",
            D: "exists \"data.txt\""
          },
          answer: "A",
          explanation: "os.path.exists() returns True/False. (The EAFP alternative: just open it and catch FileNotFoundError - equally Pythonic.)",
          code: "import os\nif os.path.exists(\"save.json\"):\n    load_game()\nelse:\n    new_game()",
          related: ["os.path", "pathlib", "EAFP"]
        },
        {
          difficulty: "medium",
          question: "Why pass encoding=\"utf-8\" to open()?",
          options: {
            A: "So text with any language/emoji reads and writes correctly on every OS",
            B: "It compresses the file",
            C: "It's required for numbers",
            D: "It makes files read-only"
          },
          answer: "A",
          explanation: "Without it, Python uses a platform-dependent default (often cp1252 on Windows) - files with ñ, 中文 or emoji can crash or garble. Explicit utf-8 makes your code portable.",
          code: "with open(\"notes.txt\", encoding=\"utf-8\") as f:\n    text = f.read()   # handles any language",
          notes: ["Good habit: always specify encoding for text files."],
          related: ["Encoding", "Unicode"]
        },
        {
          difficulty: "easy",
          question: "How do you count the lines in a file?",
          options: {
            A: "sum(1 for line in f)  or  len(f.readlines())",
            B: "f.count_lines()",
            C: "f.length",
            D: "count(f)"
          },
          answer: "A",
          explanation: "Iterate and count: sum(1 for line in f) is memory-friendly; len(f.readlines()) is fine for small files. There's no built-in line counter.",
          code: "with open(\"data.txt\") as f:\n    count = sum(1 for _ in f)\nprint(count, \"lines\")",
          related: ["Iteration", "Generator expressions"]
        },
        {
          difficulty: "medium",
          question: "What does writelines() do - and what does it NOT do?",
          options: {
            A: "Writes each string from a list; it does NOT add newlines between them",
            B: "Writes lines and adds newlines automatically",
            C: "Reads lines",
            D: "Writes one line only"
          },
          answer: "A",
          explanation: "Despite the name, writelines(list) just concatenates the strings - no separators added. Include \\n in each string yourself.",
          code: "lines = [\"one\\n\", \"two\\n\", \"three\\n\"]\nwith open(\"out.txt\", \"w\") as f:\n    f.writelines(lines)",
          related: ["writelines()", "Newlines"]
        },
        {
          difficulty: "easy",
          question: "Which snippet appends one log entry safely?",
          options: {
            A: "with open(\"app.log\", \"a\") as f:\\n    f.write(\"login ok\\n\")",
            B: "with open(\"app.log\", \"w\") as f:\\n    f.write(\"login ok\\n\")",
            C: "open(\"app.log\").write(\"login ok\")",
            D: "append(\"app.log\", \"login ok\")"
          },
          answer: "A",
          explanation: "Mode \"a\" preserves old entries; with guarantees the file closes. Option B wipes the log each time; option C never closes and uses read mode.",
          related: ["Append mode", "with statement"]
        },
        {
          difficulty: "hard",
          question: "Copy a text file. Fill the blank:\nwith open(\"a.txt\") as src, ______ as dst:\n    dst.write(src.read())",
          options: {
            A: "open(\"b.txt\", \"w\")",
            B: "open(\"b.txt\", \"r\")",
            C: "copy(\"b.txt\")",
            D: "open(\"b.txt\")"
          },
          answer: "A",
          explanation: "One with statement can manage MULTIPLE files (comma-separated). The destination needs write mode; options B/D open read-only and writing would fail.",
          code: "with open(\"a.txt\") as src, open(\"b.txt\", \"w\") as dst:\n    dst.write(src.read())",
          related: ["Multiple context managers", "Copying"]
        },
        {
          difficulty: "medium",
          question: "What does mode \"r+\" allow?",
          options: {
            A: "Both reading AND writing, without erasing the file first",
            B: "Reading twice as fast",
            C: "Reading with automatic retry",
            D: "Read-only, but raises no errors"
          },
          answer: "A",
          explanation: "\"r+\" opens an EXISTING file for read and write - the cursor starts at the beginning, and writes overwrite bytes in place. (\"w+\" also reads+writes but truncates first.)",
          related: ["File modes", "r+ vs w+"]
        },
        {
          difficulty: "easy",
          question: "After 'with open(...) as f:' ends, is the file open or closed?",
          options: {
            A: "Closed - automatically, always",
            B: "Open until program exit",
            C: "Open until garbage collection",
            D: "Depends on the mode"
          },
          answer: "A",
          explanation: "That's the whole point of with: the file is closed the instant the block exits - normally or via an exception. f.closed is True afterwards.",
          code: "with open(\"a.txt\") as f:\n    pass\nprint(f.closed)   # True",
          related: ["Context managers"]
        },
        {
          difficulty: "hard",
          question: "You need to save a Python LIST so another run of your program can reload it. Best simple approach?",
          options: {
            A: "json.dump() it to a file, json.load() to restore",
            B: "write(str(list)) and eval() it back",
            C: "Print it and copy-paste later",
            D: "Lists can't be saved"
          },
          answer: "A",
          explanation: "JSON handles lists, dicts, strings, numbers and bools - safe and readable. eval() on file content is a security hole (it executes anything). For arbitrary Python objects, the pickle module exists - but JSON is the safe default.",
          code: "import json\nscores = [90, 85, 77]\nwith open(\"scores.json\", \"w\") as f:\n    json.dump(scores, f)\n\nwith open(\"scores.json\") as f:\n    scores = json.load(f)",
          related: ["json", "pickle", "eval() dangers"]
        }
      ]
    }
  ]
});
