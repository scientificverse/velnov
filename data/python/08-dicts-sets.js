/* ============================================================
   PYTHON - TOPIC 8: DICTIONARIES & SETS (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "Python",
  icon: "🐍",
  color: "#3776ab",
  description: "Master Python from basics to advanced - 20 topics.",
  topics: [
    {
      name: "8. Dictionaries & Sets",
      questions: [
        {
          difficulty: "easy",
          question: "Which line creates a dictionary mapping names to ages?",
          options: {
            A: "ages = {\"Ana\": 21, \"Ben\": 25}",
            B: "ages = [\"Ana\", 21, \"Ben\", 25]",
            C: "ages = (\"Ana\": 21, \"Ben\": 25)",
            D: "ages = dict[\"Ana\"=21]"
          },
          answer: "A",
          explanation: "Dictionaries use curly braces with key: value pairs. Each key maps to a value - like a real dictionary maps words to meanings.",
          code: "ages = {\"Ana\": 21, \"Ben\": 25}\nprint(ages[\"Ana\"])   # 21",
          related: ["Dictionaries", "Key-value pairs"]
        },
        {
          difficulty: "easy",
          question: "How do you read Ana's age from ages = {\"Ana\": 21, \"Ben\": 25}?",
          options: { A: "ages[0]", B: "ages[\"Ana\"]", C: "ages.Ana", D: "ages(\"Ana\")" },
          answer: "B",
          explanation: "Dictionary values are accessed BY KEY, not by position: ages[\"Ana\"] gives 21. There is no ages[0] - dicts aren't indexed by numbers (unless a number IS a key).",
          code: "ages = {\"Ana\": 21, \"Ben\": 25}\nprint(ages[\"Ana\"])   # 21\n# print(ages[0])      # KeyError!",
          related: ["Key access", "KeyError"]
        },
        {
          difficulty: "medium",
          question: "What happens with:\nages = {\"Ana\": 21}\nprint(ages[\"Zoe\"])",
          options: {
            A: "Prints None",
            B: "Prints 0",
            C: "KeyError: 'Zoe'",
            D: "Adds Zoe automatically"
          },
          answer: "C",
          explanation: "Reading a key that doesn't exist raises KeyError. Use .get() when a missing key is possible - it returns None (or your chosen default) instead of crashing.",
          code: "ages = {\"Ana\": 21}\nprint(ages.get(\"Zoe\"))        # None\nprint(ages.get(\"Zoe\", 0))     # 0 (custom default)",
          related: ["KeyError", "get()"]
        },
        {
          difficulty: "medium",
          question: "What is the difference between ages[\"Zoe\"] and ages.get(\"Zoe\")?",
          options: {
            A: "No difference",
            B: "[] raises KeyError when missing; get() returns None (or a default) instead",
            C: "get() is slower and deprecated",
            D: "get() also deletes the key"
          },
          answer: "B",
          explanation: "Square brackets demand the key exists. .get(key, default) is the safe version - perfect when missing keys are normal, like counting or optional settings.",
          code: "config = {\"theme\": \"dark\"}\nsize = config.get(\"font_size\", 14)   # 14 - safe default",
          related: ["get()", "Defaults"]
        },
        {
          difficulty: "easy",
          question: "How do you ADD a new pair to ages = {\"Ana\": 21}?",
          options: {
            A: "ages[\"Ben\"] = 25",
            B: "ages.append(\"Ben\", 25)",
            C: "ages.add(\"Ben\": 25)",
            D: "ages + {\"Ben\": 25}"
          },
          answer: "A",
          explanation: "Assigning to a NEW key simply creates it: ages[\"Ben\"] = 25. Assigning to an EXISTING key overwrites its value. Dicts have no append().",
          code: "ages = {\"Ana\": 21}\nages[\"Ben\"] = 25     # add\nages[\"Ana\"] = 22     # update existing\nprint(ages)           # {'Ana': 22, 'Ben': 25}",
          related: ["Adding keys", "Updating values"]
        },
        {
          difficulty: "easy",
          question: "What does \"Ana\" in ages check, for a dictionary ages?",
          options: {
            A: "Whether \"Ana\" is one of the KEYS",
            B: "Whether \"Ana\" is one of the VALUES",
            C: "Whether \"Ana\" is a key OR a value",
            D: "Nothing - in doesn't work on dicts"
          },
          answer: "A",
          explanation: "The in operator on a dict tests KEYS only. To search values, use: 21 in ages.values().",
          code: "ages = {\"Ana\": 21}\nprint(\"Ana\" in ages)           # True (key)\nprint(21 in ages)               # False!\nprint(21 in ages.values())      # True",
          related: ["in operator", "values()"]
        },
        {
          difficulty: "medium",
          question: "What do keys(), values() and items() return for {\"a\": 1, \"b\": 2}?",
          options: {
            A: "keys: a,b - values: 1,2 - items: pairs ('a',1),('b',2)",
            B: "All three return the same thing",
            C: "keys: 1,2 - values: a,b - items: nothing",
            D: "They return strings"
          },
          answer: "A",
          explanation: "Three views of a dict: .keys() gives the keys, .values() the values, .items() gives (key, value) tuples - the one you loop over when you need both.",
          code: "d = {\"a\": 1, \"b\": 2}\nprint(list(d.keys()))    # ['a', 'b']\nprint(list(d.values()))  # [1, 2]\nprint(list(d.items()))   # [('a', 1), ('b', 2)]",
          related: ["Dict views", "items()"]
        },
        {
          difficulty: "medium",
          question: "What does this print?\nfor k in {\"a\": 1, \"b\": 2}:\n    print(k)",
          options: { A: "a b (the keys)", B: "1 2 (the values)", C: "a 1 b 2", D: "Error" },
          answer: "A",
          explanation: "Looping over a dict directly gives its KEYS. For values loop over .values(); for both, loop over .items().",
          code: "d = {\"a\": 1, \"b\": 2}\nfor k in d:               # keys: a b\nfor v in d.values():      # values: 1 2\nfor k, v in d.items():    # both: a 1 / b 2",
          related: ["Iterating dicts", "items()"]
        },
        {
          difficulty: "easy",
          question: "How do you loop over BOTH keys and values at once?",
          options: {
            A: "for k, v in d.items():",
            B: "for k, v in d:",
            C: "for k, v in d.pairs():",
            D: "for k + v in d:"
          },
          answer: "A",
          explanation: ".items() yields (key, value) tuples which unpack straight into two loop variables - the standard dict-looping pattern.",
          code: "ages = {\"Ana\": 21, \"Ben\": 25}\nfor name, age in ages.items():\n    print(f\"{name} is {age}\")",
          related: ["items()", "Unpacking"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nd = {\"x\": 1}\nd[\"x\"] = 99\nprint(d)",
          options: {
            A: "{'x': 1, 'x': 99}",
            B: "{'x': 99}",
            C: "KeyError",
            D: "{'x': [1, 99]}"
          },
          answer: "B",
          explanation: "Keys are UNIQUE - assigning to an existing key replaces its value. A dict can never hold the same key twice. (Values, however, may repeat freely.)",
          code: "d = {\"x\": 1}\nd[\"x\"] = 99      # overwrite\nprint(d)          # {'x': 99}",
          related: ["Unique keys", "Updating"]
        },
        {
          difficulty: "medium",
          question: "Which of these CANNOT be a dictionary key?",
          options: { A: "\"name\" (a string)", B: "42 (an int)", C: "(1, 2) (a tuple)", D: "[1, 2] (a list)" },
          answer: "D",
          explanation: "Keys must be hashable, which in practice means immutable: strings, numbers and tuples are fine; lists, dicts and sets are NOT (they can change, so their hash could change).",
          code: "ok = {(1, 2): \"point\"}      # tuple key - fine\n# bad = {[1, 2]: \"point\"}     # TypeError: unhashable type: 'list'",
          related: ["Hashability", "Immutability"]
        },
        {
          difficulty: "medium",
          question: "How do you access \"Delhi\" in this nested dict?\nuser = {\"name\": \"Ana\", \"address\": {\"city\": \"Delhi\", \"pin\": 110001}}",
          options: {
            A: "user[\"address\"][\"city\"]",
            B: "user[\"city\"]",
            C: "user.address.city",
            D: "user[\"address.city\"]"
          },
          answer: "A",
          explanation: "Chain the keys: user[\"address\"] returns the inner dict, then [\"city\"] reads from it. Nested dicts are how JSON-like data is represented in Python.",
          code: "user = {\"name\": \"Ana\",\n        \"address\": {\"city\": \"Delhi\", \"pin\": 110001}}\nprint(user[\"address\"][\"city\"])   # Delhi",
          related: ["Nested dicts", "JSON"]
        },
        {
          difficulty: "easy",
          question: "What does len({\"a\": 1, \"b\": 2, \"c\": 3}) return?",
          options: { A: "6", B: "3 - the number of key-value pairs", C: "2", D: "Error" },
          answer: "B",
          explanation: "len() on a dict counts the PAIRS (keys), not keys+values separately: 3.",
          related: ["len()"]
        },
        {
          difficulty: "medium",
          question: "How do you REMOVE the key \"Ana\" from ages?",
          options: {
            A: "del ages[\"Ana\"]  or  ages.pop(\"Ana\")",
            B: "ages.remove(\"Ana\")",
            C: "ages.delete(\"Ana\")",
            D: "ages - \"Ana\""
          },
          answer: "A",
          explanation: "del ages[\"Ana\"] deletes the pair; ages.pop(\"Ana\") deletes it AND returns the value. Dicts have no .remove() method (that's for lists and sets).",
          code: "ages = {\"Ana\": 21, \"Ben\": 25}\nage = ages.pop(\"Ana\")   # age = 21\ndel ages[\"Ben\"]\nprint(ages)              # {}",
          related: ["del", "pop()"]
        },
        {
          difficulty: "hard",
          question: "Complete the word-counting pattern:\ncounts = {}\nfor word in words:\n    counts[word] = ______",
          options: {
            A: "counts.get(word, 0) + 1",
            B: "counts[word] + 1",
            C: "1",
            D: "word + 1"
          },
          answer: "A",
          explanation: "get(word, 0) returns the current count or 0 for a new word, then +1. Option B crashes with KeyError on the first occurrence; option C never counts past 1.",
          code: "words = [\"a\", \"b\", \"a\"]\ncounts = {}\nfor w in words:\n    counts[w] = counts.get(w, 0) + 1\nprint(counts)   # {'a': 2, 'b': 1}",
          notes: ["collections.Counter(words) does this in one line."],
          related: ["get()", "Counting pattern", "Counter"]
        },
        {
          difficulty: "medium",
          question: "In Python 3.7+, in what order does a dict keep its keys?",
          options: {
            A: "Alphabetical order",
            B: "Insertion order - the order you added them",
            C: "Random order each run",
            D: "Sorted by value"
          },
          answer: "B",
          explanation: "Since 3.7, dicts officially preserve insertion order - looping shows keys in the order they were added. They are never auto-sorted; use sorted(d) for that.",
          code: "d = {\"b\": 1, \"a\": 2}\nprint(list(d))          # ['b', 'a'] - insertion order\nprint(sorted(d))        # ['a', 'b'] - sorted view",
          related: ["Insertion order", "sorted()"]
        },
        {
          difficulty: "hard",
          question: "Which merges two dicts d1 and d2 into a new dict (Python 3.9+)?",
          options: { A: "d1 | d2", B: "d1 + d2", C: "d1 & d2", D: "merge(d1, d2)" },
          answer: "A",
          explanation: "The | operator merges dicts (3.9+); on duplicate keys, the RIGHT side wins. d1 + d2 is a TypeError. Older code uses {**d1, **d2} or d1.update(d2).",
          code: "a = {\"x\": 1, \"y\": 2}\nb = {\"y\": 99, \"z\": 3}\nprint(a | b)    # {'x': 1, 'y': 99, 'z': 3}\nprint({**a, **b})  # same, works in older Pythons",
          related: ["Merging dicts", "update()"]
        },
        {
          difficulty: "medium",
          question: "What does update() do?\nd = {\"a\": 1}\nd.update({\"a\": 5, \"b\": 2})",
          options: {
            A: "d becomes {'a': 5, 'b': 2} - existing keys overwritten, new ones added",
            B: "d becomes {'a': 1, 'b': 2} - existing keys kept",
            C: "Error - duplicate key",
            D: "d is replaced entirely by the new dict"
          },
          answer: "A",
          explanation: ".update() copies pairs from another dict into this one: existing keys get the new values, unknown keys are added. The dict is modified in place.",
          code: "d = {\"a\": 1}\nd.update({\"a\": 5, \"b\": 2})\nprint(d)   # {'a': 5, 'b': 2}",
          related: ["update()", "Merging"]
        },
        {
          difficulty: "easy",
          question: "Which line creates a SET of three numbers?",
          options: {
            A: "s = {1, 2, 3}",
            B: "s = [1, 2, 3]",
            C: "s = (1, 2, 3)",
            D: "s = set[1, 2, 3]"
          },
          answer: "A",
          explanation: "Curly braces WITHOUT colons create a set - an unordered collection of UNIQUE values. (With colons it would be a dict.)",
          code: "s = {1, 2, 3}\nprint(type(s))   # <class 'set'>",
          related: ["Sets"]
        },
        {
          difficulty: "hard",
          question: "How do you create an EMPTY set?",
          options: {
            A: "s = {}",
            B: "s = set()",
            C: "s = []",
            D: "s = empty_set"
          },
          answer: "B",
          explanation: "Gotcha: {} creates an empty DICT, not a set! The only way to make an empty set is set(). This trips up almost everyone once.",
          code: "a = {}\nprint(type(a))   # <class 'dict'> !\nb = set()\nprint(type(b))   # <class 'set'>",
          related: ["set()", "Common gotchas"]
        },
        {
          difficulty: "easy",
          question: "What is the output of: print({1, 2, 2, 3, 3, 3})",
          options: { A: "{1, 2, 2, 3, 3, 3}", B: "{1, 2, 3}", C: "[1, 2, 3]", D: "Error" },
          answer: "B",
          explanation: "Sets store each value only ONCE - duplicates are silently discarded: {1, 2, 3}. This is the defining property of a set.",
          code: "print({1, 2, 2, 3, 3, 3})   # {1, 2, 3}",
          related: ["Uniqueness"]
        },
        {
          difficulty: "medium",
          question: "What is the classic one-liner to remove duplicates from a list?",
          options: {
            A: "unique = list(set(nums))",
            B: "unique = nums.unique()",
            C: "unique = dedupe(nums)",
            D: "unique = nums - duplicates"
          },
          answer: "A",
          explanation: "Convert to a set (duplicates vanish), then back to a list. Note: original order may be lost - use list(dict.fromkeys(nums)) to keep order.",
          code: "nums = [3, 1, 3, 2, 1]\nprint(list(set(nums)))           # e.g. [1, 2, 3]\nprint(list(dict.fromkeys(nums))) # [3, 1, 2] - keeps order",
          related: ["set()", "Deduplication"]
        },
        {
          difficulty: "medium",
          question: "What happens with:\ns = {10, 20, 30}\nprint(s[0])",
          options: {
            A: "Prints 10",
            B: "TypeError - sets are unordered and don't support indexing",
            C: "Prints a random element",
            D: "Prints {10}"
          },
          answer: "B",
          explanation: "Sets have no positions - there IS no 'first' element, so s[0] raises TypeError. You can loop over a set or test membership, but never index it.",
          code: "s = {10, 20, 30}\n# print(s[0])     # TypeError!\nfor x in s:        # looping is fine\n    print(x)",
          related: ["Unordered collections", "TypeError"]
        },
        {
          difficulty: "easy",
          question: "Which method adds one element to a set?",
          options: { A: "append()", B: "add()", C: "insert()", D: "push()" },
          answer: "B",
          explanation: "Sets use .add() (append and insert are list methods). Adding an element that already exists does nothing - no error, no duplicate.",
          code: "s = {1, 2}\ns.add(3)\ns.add(2)     # already there - ignored\nprint(s)      # {1, 2, 3}",
          related: ["add()", "Uniqueness"]
        },
        {
          difficulty: "medium",
          question: "a = {1, 2, 3} and b = {2, 3, 4}. What is a & b?",
          options: { A: "{1, 2, 3, 4}", B: "{2, 3}", C: "{1}", D: "{4}" },
          answer: "B",
          explanation: "& is INTERSECTION - elements present in BOTH sets: {2, 3}. Think of overlapping circles in a Venn diagram.",
          code: "a = {1, 2, 3}\nb = {2, 3, 4}\nprint(a & b)   # {2, 3} - in both",
          related: ["Intersection", "Set operations"]
        },
        {
          difficulty: "medium",
          question: "a = {1, 2, 3} and b = {2, 3, 4}. What is a | b?",
          options: { A: "{2, 3}", B: "{1, 4}", C: "{1, 2, 3, 4}", D: "{1}" },
          answer: "C",
          explanation: "| is UNION - every element that appears in EITHER set, duplicates counted once: {1, 2, 3, 4}.",
          code: "print(a | b)   # {1, 2, 3, 4} - union\nprint(a & b)   # {2, 3}       - intersection\nprint(a - b)   # {1}           - difference",
          related: ["Union", "Set operations"]
        },
        {
          difficulty: "hard",
          question: "a = {1, 2, 3} and b = {2, 3, 4}. What is a - b?",
          options: { A: "{1}", B: "{4}", C: "{1, 4}", D: "{-1, -1, -1}" },
          answer: "A",
          explanation: "Set difference a - b keeps what's in a but NOT in b: only 1. Note it's directional: b - a would give {4}.",
          code: "print(a - b)   # {1} - in a, not in b\nprint(b - a)   # {4} - in b, not in a",
          related: ["Difference", "Set operations"]
        },
        {
          difficulty: "medium",
          question: "Why is 'x in my_set' much faster than 'x in my_list' for large data?",
          options: {
            A: "It isn't - both are the same speed",
            B: "Sets use hashing - membership is found instantly instead of checking items one by one",
            C: "Sets are stored in the CPU cache",
            D: "Lists compress their data"
          },
          answer: "B",
          explanation: "A list checks every element until it finds a match (linear time). A set jumps straight to where the value would live using its hash (constant time). With a million items, that's the difference between 1 check and 500,000.",
          code: "big = set(range(1_000_000))\nprint(999_999 in big)   # instant, even for huge sets",
          related: ["Hashing", "Performance"]
        },
        {
          difficulty: "easy",
          question: "Which structure best stores each student's marks BY NAME?",
          options: {
            A: "A dict: {\"Ana\": 92, \"Ben\": 85}",
            B: "A list: [92, 85]",
            C: "A set: {92, 85}",
            D: "A string: \"Ana 92 Ben 85\""
          },
          answer: "A",
          explanation: "When data is naturally 'look up X by Y', a dict is the right tool - marks by name, prices by product, settings by option. Lists are for ordered sequences, sets for uniqueness.",
          related: ["Choosing data structures"]
        },
        {
          difficulty: "hard",
          question: "What does dict.fromkeys([\"a\", \"b\"], 0) create?",
          options: {
            A: "{'a': 0, 'b': 0}",
            B: "{0: 'a', 0: 'b'}",
            C: "['a', 'b', 0]",
            D: "Error"
          },
          answer: "A",
          explanation: "fromkeys() builds a dict with the given keys, all mapped to the same default value: {'a': 0, 'b': 0}. Handy for initializing counters or settings.",
          code: "scores = dict.fromkeys([\"Ana\", \"Ben\"], 0)\nprint(scores)   # {'Ana': 0, 'Ben': 0}",
          notes: ["Careful with a mutable default like [] - all keys would share ONE list."],
          related: ["fromkeys()", "Initialization"]
        }
      ]
    }
  ]
});
