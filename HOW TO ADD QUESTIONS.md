# 🎓 Velnov — How to Use & Add Questions

## How to open the app
Just **double-click `index.html`** — it opens in your browser. No installation,
no internet, no server needed. Everything is free.

## Where the questions live
Every subject has its own file inside the **`data/`** folder:

```
data/
├── python/                    ← Python (BIG: split into 20 topic files, 600 questions)
│   ├── 01-introduction.js
│   ├── 02-variables-operators.js
│   ├── ... (topics 03 to 19)
│   └── 20-interview-questions.js
├── javascript/                ← JavaScript (20 topic files, 600 questions)
│   ├── 01-introduction.js
│   ├── 02-variables-types.js
│   ├── ... (topics 03 to 19)
│   └── 20-fetch-modules.js
├── sql/                       ← SQL (20 topic files, 600 questions)
│   ├── 01-introduction.js
│   ├── 02-select-basics.js
│   ├── ... (topics 03 to 19)
│   └── 20-window-functions.js
├── history-india/             ← Indian History, NCERT (9 topic files, 600 questions)
│   ├── 01-prehistory-stone-age.js
│   ├── 02-indus-valley.js
│   ├── ... (topics 03 to 08)
│   └── 09-post-gupta-early-medieval.js
├── physics/                   ← Physics Class 6-8, NCERT (10 topic files, 600 questions)
│   ├── 01-motion-measurement-time.js
│   ├── 02-light-shadows-reflection.js
│   ├── ... (topics 03 to 09)
│   └── 10-natural-phenomena-solar-system.js
├── chemistry/                 ← Chemistry Class 6-8, NCERT (10 topic files, 600 questions)
│   ├── 01-materials-properties.js
│   ├── 02-separation-substances.js
│   ├── ... (topics 03 to 09)
│   └── 10-matter-elements-compounds.js
├── biology/                   ← Biology Class 6-8, NCERT (10 topic files, 600 questions)
│   ├── 01-living-world-adaptation.js
│   ├── 02-food-sources-components.js
│   ├── ... (topics 03 to 09)
│   └── 10-crops-conservation-environment.js
├── english/                   ← English Grammar Class 1-5 (10 topic files, 600 questions)
│   ├── 01-nouns.js
│   ├── 02-pronouns.js
│   ├── ... (topics 03 to 09)
│   └── 10-sentences-punctuation.js
└── maths/                      ← Mathematics Class 1-5 (10 topic files, 600 questions)
    ├── 01-numbers-place-value.js
    ├── 02-addition.js
    ├── ... (topics 03 to 09)
    └── 10-shapes-patterns-data.js
```

To update questions, open the file in **Notepad** (or any editor), edit, save,
and refresh the browser. That's it.

### About the Python folder
Python has 600 questions (30 each across 20 topics), so instead of one giant
file it is split into **one file per topic** inside `data/python/`. Each file
adds ONE topic to the Python subject — the app automatically merges every file
whose `subject` is `"Python"` into a single subject. To edit, say, the Loops
questions, open `data/python/06-loops.js`. Small subjects (JavaScript, SQL, …)
still live in a single file; you can split any of them the same way later if
they grow large.

**Tip — after editing, do a hard refresh** (Ctrl+F5) so the browser reloads the
changed files instead of using its cache.

## Adding a question
Open the subject's file, find the topic, and paste a new block inside its
`questions: [ ... ]` list:

```js
{
  difficulty: "easy",              // "easy", "medium" or "hard"
  question: "Your question here?",
  options: {
    A: "first option",
    B: "second option",
    C: "third option",
    D: "fourth option"
  },
  answer: "B",                     // the correct option letter
  explanation: "Why B is correct.",
  code: "optional code example",   // optional - delete this line if not needed
  notes: ["optional note"],        // optional
  related: ["optional concept"],   // optional
  reference: "optional source"     // optional
},
```

⚠️ **Two things that break the file if forgotten:**
1. A **comma** after every closing `}` (except the very last one in a list)
2. Quotes around all text: `"like this"`

## Adding a new topic
Inside a subject file, add a new block to the `topics: [ ... ]` list:

```js
{
  name: "My New Topic",
  questions: [
    // paste question blocks here
  ]
},
```

## Adding a whole new subject
1. **Copy** an existing file (e.g. `python.js`), rename it (e.g. `chemistry.js`)
2. Change the `subject`, `icon`, `color`, `description` and questions inside
3. Open `index.html` and add **one line** next to the other data files:
   ```html
   <script src="data/chemistry.js"></script>
   ```
Refresh the browser — the new subject card appears automatically.

## Tips
- If the page suddenly shows nothing after an edit, you probably missed a comma
  or a quote. Press **F12** in the browser → Console tab shows which file and line.
- Your quiz results are saved in the browser (nothing is uploaded anywhere).
- The 🌙 button in the top-right switches dark/light mode.
