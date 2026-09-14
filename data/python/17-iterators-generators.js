/* ============================================================
   PYTHON - TOPIC 17: ITERATORS & GENERATORS (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "Python",
  icon: "🐍",
  color: "#3776ab",
  description: "Master Python from basics to advanced - 20 topics.",
  topics: [
    {
      name: "17. Iterators & Generators",
      questions: [
        {
          difficulty: "medium",
          question: "What is the difference between an ITERABLE and an ITERATOR?",
          options: {
            A: "An iterable can PRODUCE an iterator (lists, strings); an iterator is the object that actually yields values one by one via next()",
            B: "They are exact synonyms",
            C: "Iterators are always faster",
            D: "Iterables only hold numbers"
          },
          answer: "A",
          explanation: "A list is iterable - you can loop it many times; each loop asks it for a fresh ITERATOR (via iter()), and the iterator is what next() pulls values from until it's exhausted.",
          code: "nums = [1, 2, 3]        # iterable\nit = iter(nums)          # iterator\nprint(next(it))          # 1\nprint(next(it))          # 2",
          related: ["iter()", "next()"]
        },
        {
          difficulty: "medium",
          question: "What does next(it) do when the iterator has NO values left?",
          options: {
            A: "Raises StopIteration",
            B: "Returns None forever",
            C: "Restarts from the beginning",
            D: "Returns -1"
          },
          answer: "A",
          explanation: "Exhausted iterators raise StopIteration - the signal that iteration is over. for-loops catch it silently; manual next() calls will see the exception.",
          code: "it = iter([1])\nnext(it)        # 1\n# next(it)      # StopIteration!\nnext(it, \"done\")  # 'done' - default avoids the error",
          related: ["StopIteration", "next() default"]
        },
        {
          difficulty: "hard",
          question: "What does a for loop REALLY do under the hood?\nfor x in nums:",
          options: {
            A: "Calls iter(nums) once, then next() repeatedly until StopIteration",
            B: "Indexes nums[0], nums[1]... until IndexError",
            C: "Copies the list first",
            D: "Uses a while loop with a counter"
          },
          answer: "A",
          explanation: "for is sugar over the iterator protocol: get an iterator with iter(), pull values with next(), stop cleanly on StopIteration. That's why ANY object implementing the protocol works in a for loop.",
          code: "# for x in nums:  ==\nit = iter(nums)\nwhile True:\n    try:\n        x = next(it)\n    except StopIteration:\n        break",
          related: ["Iterator protocol", "for loops"]
        },
        {
          difficulty: "easy",
          question: "What makes a function a GENERATOR function?",
          options: {
            A: "It contains the yield keyword",
            B: "It's named with gen_",
            C: "It returns a list",
            D: "It uses async"
          },
          answer: "A",
          explanation: "One yield anywhere in the body changes everything: calling the function no longer runs it - it returns a generator object that produces values lazily as you iterate.",
          code: "def count_up(n):\n    for i in range(1, n + 1):\n        yield i\n\ng = count_up(3)\nprint(list(g))   # [1, 2, 3]",
          related: ["yield", "Generators"]
        },
        {
          difficulty: "medium",
          question: "What is the KEY difference between yield and return?",
          options: {
            A: "return exits for good; yield PAUSES the function, remembers everything, and resumes on the next next()",
            B: "yield is just a faster return",
            C: "return sends multiple values",
            D: "No difference"
          },
          answer: "A",
          explanation: "yield hands out a value and freezes the function mid-flight - locals, loop position, everything preserved. The next next() resumes right after the yield. return (or falling off the end) raises StopIteration.",
          code: "def demo():\n    print(\"start\")\n    yield 1\n    print(\"resumed\")\n    yield 2\n\ng = demo()\nnext(g)   # prints start, gives 1\nnext(g)   # prints resumed, gives 2",
          related: ["yield", "Function state"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\ndef gen():\n    yield \"a\"\n    yield \"b\"\nprint(gen())",
          options: {
            A: "<generator object gen at 0x...> - calling it produces a generator, not values",
            B: "a",
            C: "['a', 'b']",
            D: "ab"
          },
          answer: "A",
          explanation: "Calling a generator function runs NONE of its body - it returns a generator object. Values appear only when iterated: list(gen()), next(g), or a for loop.",
          code: "print(gen())         # <generator object ...>\nprint(list(gen()))   # ['a', 'b']",
          related: ["Generator objects", "Lazy evaluation"]
        },
        {
          difficulty: "medium",
          question: "Why is a generator more MEMORY-EFFICIENT than returning a list?",
          options: {
            A: "It produces one value at a time on demand - never storing the whole sequence",
            B: "It compresses the list",
            C: "It uses the GPU",
            D: "It isn't - lists are always better"
          },
          answer: "A",
          explanation: "A list of 10 million items sits fully in RAM. A generator holds just the current state (a few variables) and manufactures each value when asked - processing unlimited data in constant memory.",
          code: "def read_big_file(path):\n    with open(path) as f:\n        for line in f:\n            yield line.strip()   # one line at a time",
          related: ["Memory efficiency", "Streaming"]
        },
        {
          difficulty: "hard",
          question: "Can a generator be INFINITE?\ndef naturals():\n    n = 1\n    while True:\n        yield n\n        n += 1",
          options: {
            A: "Yes - it only computes values as requested, so the infinite loop is harmless",
            B: "No - it would hang immediately",
            C: "Only up to 1 million",
            D: "Only with recursion"
          },
          answer: "A",
          explanation: "Laziness makes infinity practical: each next() runs the loop exactly one step. Consumers take what they need (islice, break, zip with something finite). Lists could never do this.",
          code: "g = naturals()\nprint(next(g), next(g), next(g))   # 1 2 3\n\nfrom itertools import islice\nprint(list(islice(naturals(), 5)))  # [1, 2, 3, 4, 5]",
          related: ["Infinite generators", "itertools.islice"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\ndef gen():\n    yield 1\n    yield 2\ng = gen()\nprint(list(g))\nprint(list(g))",
          options: {
            A: "[1, 2] then [] - generators are ONE-PASS; once exhausted, they're empty forever",
            B: "[1, 2] then [1, 2]",
            C: "[1, 2] then Error",
            D: "[] then [1, 2]"
          },
          answer: "A",
          explanation: "The first list() drains the generator; the second finds it exhausted and gets []. To iterate again, call gen() for a FRESH generator. Silent empty results after accidental double-iteration is a classic bug.",
          code: "g = gen()\nprint(list(g))   # [1, 2]\nprint(list(g))   # [] !\nprint(list(gen()))  # [1, 2] - new generator",
          notes: ["Same trap applies to zip, map and filter objects."],
          related: ["One-pass iteration", "Exhaustion"]
        },
        {
          difficulty: "medium",
          question: "Which two methods must a CLASS implement to be its own iterator?",
          options: {
            A: "__iter__ (returns self) and __next__ (returns the next value or raises StopIteration)",
            B: "__loop__ and __stop__",
            C: "__for__ and __in__",
            D: "next() and prev()"
          },
          answer: "A",
          explanation: "The iterator protocol: __iter__ makes the object usable in for loops; __next__ supplies each value and raises StopIteration when done. Generators implement all this automatically - which is why they're usually preferred.",
          code: "class Countdown:\n    def __init__(self, n):\n        self.n = n\n    def __iter__(self):\n        return self\n    def __next__(self):\n        if self.n <= 0:\n            raise StopIteration\n        self.n -= 1\n        return self.n + 1\n\nprint(list(Countdown(3)))   # [3, 2, 1]",
          related: ["Iterator protocol", "__next__"]
        },
        {
          difficulty: "medium",
          question: "Why does range(10**12) create INSTANTLY without eating memory?",
          options: {
            A: "range is lazy - it stores only start/stop/step and computes values on demand",
            B: "Python compresses the numbers",
            C: "It secretly fails",
            D: "Modern RAM is big enough"
          },
          answer: "A",
          explanation: "range objects are not lists - they're compact lazy sequences (3 numbers + math). Values materialize only during iteration, and 'x in range(...)' is even computed arithmetically without looping.",
          code: "r = range(10**12)     # instant\nprint(len(r))          # 1000000000000\nprint(10**11 in r)     # True - computed, not searched",
          related: ["range", "Lazy sequences"]
        },
        {
          difficulty: "medium",
          question: "In Python 3, what do map() and filter() return?",
          options: {
            A: "Lazy iterator objects - wrap in list() to see all values",
            B: "Lists, like Python 2",
            C: "Tuples",
            D: "Strings"
          },
          answer: "A",
          explanation: "map/filter/zip all went lazy in Python 3 - they yield on demand and print as <map object ...>. list() forces them. They're also one-pass, like generators.",
          code: "m = map(str.upper, [\"a\", \"b\"])\nprint(m)          # <map object ...>\nprint(list(m))    # ['A', 'B']\nprint(list(m))    # [] - exhausted!",
          related: ["map()", "filter()", "Python 2 vs 3"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\ndef squares(n):\n    for i in range(n):\n        yield i * i\nprint(sum(squares(4)))",
          options: { A: "14", B: "30", C: "6", D: "Error" },
          answer: "A",
          explanation: "squares(4) yields 0, 1, 4, 9; sum() consumes them as they're produced: 14. Feeding generators straight into sum/max/min/any/all is the idiomatic pattern.",
          related: ["sum()", "Generator consumption"]
        },
        {
          difficulty: "hard",
          question: "The classic: complete the Fibonacci generator.\ndef fib():\n    a, b = 0, 1\n    while True:\n        yield a\n        ______",
          options: {
            A: "a, b = b, a + b",
            B: "a = b + a",
            C: "b = a",
            D: "a, b = a + b"
          },
          answer: "A",
          explanation: "Tuple assignment advances both numbers at once: new a = old b, new b = old a+b. Yields 0, 1, 1, 2, 3, 5, 8... The most-asked generator interview question.",
          code: "def fib():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\nfrom itertools import islice\nprint(list(islice(fib(), 8)))  # [0, 1, 1, 2, 3, 5, 8, 13]",
          related: ["Fibonacci", "Tuple assignment"]
        },
        {
          difficulty: "medium",
          question: "sum(x*x for x in nums) - why no extra brackets inside sum()?",
          options: {
            A: "A generator expression can drop its parentheses when it's the ONLY argument of a call",
            B: "It's actually a list comprehension",
            C: "sum() has special syntax",
            D: "It's a syntax error"
          },
          answer: "A",
          explanation: "Normally genexps need (x*x for x in nums), but as a lone function argument the call's own parentheses suffice - clean and memory-friendly. With two arguments you'd need the inner parens back.",
          code: "total = sum(x*x for x in nums)          # OK\nsorted((x*x for x in nums), reverse=True)  # parens needed - 2 args",
          related: ["Generator expressions", "Syntax"]
        },
        {
          difficulty: "hard",
          question: "What does yield from do?\ndef all_items():\n    yield from [1, 2]\n    yield from [3, 4]",
          options: {
            A: "Delegates to another iterable - yielding each of ITS values in turn: 1, 2, 3, 4",
            B: "Imports yields from another file",
            C: "Yields the list objects themselves",
            D: "SyntaxError"
          },
          answer: "A",
          explanation: "yield from iterable is shorthand for 'for x in iterable: yield x' - flattening sub-iterables into your generator. Essential for recursive generators (e.g. walking a tree).",
          code: "def walk(tree):\n    yield tree.value\n    for child in tree.children:\n        yield from walk(child)   # recursive delegation",
          related: ["yield from", "Delegation"]
        },
        {
          difficulty: "medium",
          question: "How do you take just the FIRST value from a generator g?",
          options: { A: "next(g)", B: "g[0]", C: "g.first()", D: "g.pop()" },
          answer: "A",
          explanation: "Generators support next(), not indexing - g[0] is a TypeError (no __getitem__). next(g) pulls exactly one value.",
          code: "g = (x*x for x in range(10))\nprint(next(g))   # 0\n# g[0]            # TypeError!",
          related: ["next()", "No indexing"]
        },
        {
          difficulty: "medium",
          question: "Trace the output ORDER:\ndef gen():\n    print(\"A\")\n    yield 1\n    print(\"B\")\ng = gen()\nprint(\"C\")\nnext(g)",
          options: {
            A: "C then A - the body doesn't start until the first next()",
            B: "A then C",
            C: "A B C",
            D: "C A B"
          },
          answer: "A",
          explanation: "g = gen() runs NOTHING. print(\"C\") happens first. Only next(g) starts the body: 'A' prints, 1 is yielded, and the function pauses before 'B'. Laziness surprises everyone once.",
          related: ["Lazy execution", "Tracing"]
        },
        {
          difficulty: "hard",
          question: "What is a generator PIPELINE?\nlines = open(\"log.txt\")\nerrors = (l for l in lines if \"ERROR\" in l)\nshort = (l[:50] for l in errors)",
          options: {
            A: "Chained lazy stages - each line flows through filter and slice one at a time; nothing processes until you iterate the last stage",
            B: "Running generators in parallel threads",
            C: "A pipe character syntax",
            D: "An error - generators can't chain"
          },
          answer: "A",
          explanation: "Each genexp wraps the previous one; iterating 'short' pulls one line through the whole chain at a time. Gigabyte logs processed in kilobytes of RAM - Unix pipes, in Python.",
          related: ["Pipelines", "Streaming"]
        },
        {
          difficulty: "medium",
          question: "What does next(it, \"default\") do that next(it) doesn't?",
          options: {
            A: "Returns \"default\" instead of raising StopIteration when the iterator is exhausted",
            B: "Sets the iterator's default forever",
            C: "Skips one value",
            D: "Nothing different"
          },
          answer: "A",
          explanation: "The two-argument form is exception-free iteration: perfect for 'give me the next one, or a fallback'. Great with generator-based searches: next((x for x in items if x > 5), None).",
          code: "match = next((x for x in nums if x > 100), None)\nif match is None:\n    print(\"nothing found\")",
          related: ["next() default", "Search pattern"]
        },
        {
          difficulty: "medium",
          question: "Is a STRING iterable, an iterator, or both?",
          options: {
            A: "Iterable only - iter(\"abc\") produces the iterator; the string itself has no __next__",
            B: "Iterator only",
            C: "Both at once",
            D: "Neither"
          },
          answer: "A",
          explanation: "Strings (like lists and dicts) are re-iterable containers: every for-loop gets a fresh iterator. True iterators (generators, map objects, file objects) can be looped only once.",
          code: "s = \"abc\"\n# next(s)          # TypeError\nit = iter(s)\nprint(next(it))    # a",
          related: ["Iterables vs iterators"]
        },
        {
          difficulty: "hard",
          question: "Which standard-library module is the toolbox for iterator tricks (count, cycle, chain, islice)?",
          options: { A: "itertools", B: "itermod", C: "looptools", D: "generators" },
          answer: "A",
          explanation: "itertools = lazy iterator building blocks: count(10) counts forever, cycle('AB') repeats, chain(a, b) concatenates lazily, islice takes slices of any iterator. Combine them like LEGO.",
          code: "from itertools import count, islice, chain\nprint(list(islice(count(10), 3)))     # [10, 11, 12]\nprint(list(chain([1, 2], [3])))        # [1, 2, 3]",
          related: ["itertools"]
        },
        {
          difficulty: "medium",
          question: "A file object f is an iterator. What does that mean practically?",
          options: {
            A: "for line in f reads lazily, one line at a time - and a second loop over f continues from where the first stopped (or finds it exhausted)",
            B: "Files load fully into RAM on open",
            C: "You can index f[3]",
            D: "Files must be lists"
          },
          answer: "A",
          explanation: "Files stream: perfect for huge logs. But being iterators, they exhaust - a second 'for line in f' reads nothing unless you f.seek(0) first.",
          related: ["File iteration", "Exhaustion"]
        },
        {
          difficulty: "easy",
          question: "Which is the LAZY equivalent of the list comprehension [x*2 for x in nums]?",
          options: {
            A: "(x*2 for x in nums)",
            B: "{x*2 for x in nums}",
            C: "lazy[x*2 for x in nums]",
            D: "[x*2 async for x in nums]"
          },
          answer: "A",
          explanation: "Same syntax, round brackets: a generator expression. Choose it whenever you'll iterate once (feeding sum, join, any...); choose the list when you need indexing, len, or multiple passes.",
          related: ["Generator expressions", "Choosing"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\ng = (x for x in range(3))\nprint(2 in g)\nprint(list(g))",
          options: {
            A: "True then [] - the membership test CONSUMED the generator up to (and past) 2",
            B: "True then [0, 1, 2]",
            C: "False then [0, 1, 2]",
            D: "Error"
          },
          answer: "A",
          explanation: "'in' iterates the generator until it finds 2 - consuming 0, 1, 2 along the way. The generator is then exhausted (nothing after 2 in this case), so list(g) is []. Membership tests are destructive on iterators!",
          related: ["in on generators", "Exhaustion traps"]
        },
        {
          difficulty: "medium",
          question: "Why use a generator to produce test data like a million fake users?",
          options: {
            A: "Consumers can process users one at a time without a million-object list in memory - and stop early for free",
            B: "Generators create more realistic data",
            C: "Lists can't hold a million items",
            D: "No benefit"
          },
          answer: "A",
          explanation: "yield one user at a time: whoever consumes can take 10 or a million, memory stays flat, and breaking out early costs nothing (remaining users are never created).",
          code: "def fake_users():\n    i = 0\n    while True:\n        i += 1\n        yield {\"id\": i, \"name\": f\"user{i}\"}",
          related: ["Lazy generation", "Early exit"]
        },
        {
          difficulty: "easy",
          question: "iter([1, 2, 3]) returns:",
          options: {
            A: "A list_iterator object ready for next() calls",
            B: "The same list",
            C: "The first element",
            D: "A tuple"
          },
          answer: "A",
          explanation: "iter() asks the iterable for its iterator - the object for loops actually drive. You rarely call it yourself, but it's what happens inside every for.",
          related: ["iter()"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\ndef gen():\n    yield 1\n    return\n    yield 2\nprint(list(gen()))",
          options: {
            A: "[1] - return stops the generator; the second yield is never reached",
            B: "[1, 2]",
            C: "[1, None, 2]",
            D: "Error"
          },
          answer: "A",
          explanation: "return inside a generator ends iteration (raising StopIteration internally). Everything after it is dead code - list() collects only the 1.",
          related: ["return in generators", "StopIteration"]
        },
        {
          difficulty: "hard",
          question: "You need to loop over data TWICE. Which is correct?",
          options: {
            A: "If it's a generator/iterator, materialize once: data = list(gen()) - then loop the list twice",
            B: "Loop the generator twice - it resets automatically",
            C: "Use reverse() to rewind it",
            D: "Iterators loop forever"
          },
          answer: "A",
          explanation: "Iterators don't rewind. Either call the generator function again for a fresh one, or - if the data fits - convert to a list once and reuse it. Trying to re-loop an exhausted iterator silently gives zero iterations.",
          code: "data = list(expensive_gen())   # materialize once\ntotal = sum(data)\nbiggest = max(data)             # second pass OK",
          related: ["Exhaustion", "Materializing"]
        },
        {
          difficulty: "medium",
          question: "Rule of thumb: WHEN should you write a generator instead of returning a list?",
          options: {
            A: "Large/unbounded data, streaming pipelines, or when callers may stop early - laziness pays off",
            B: "Always - lists are obsolete",
            C: "Never - lists are always simpler",
            D: "Only for numbers"
          },
          answer: "A",
          explanation: "Small data you'll reuse: return a list. Huge files, endless streams, expensive items, early-exit searches: yield. The beauty: callers loop over both the same way.",
          related: ["Design choice", "Lazy vs eager"]
        }
      ]
    }
  ]
});
