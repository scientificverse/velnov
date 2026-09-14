/* ============================================================
   JAVASCRIPT - TOPIC 16: DOM MANIPULATION (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "JavaScript",
  icon: "🟨",
  color: "#b8860b",
  description: "The language of the web - basics to advanced, 20 topics.",
  topics: [
    {
      name: "16. DOM Manipulation",
      questions: [
        {
          difficulty: "easy",
          question: "What is the DOM?",
          options: {
            A: "A tree of objects representing the HTML page, which JavaScript can read and change",
            B: "A JavaScript library",
            C: "A CSS feature",
            D: "A type of database"
          },
          answer: "A",
          explanation: "Document Object Model: the browser parses your HTML into a live object tree. Changing the DOM instantly changes what the user sees.",
          related: ["DOM", "document"]
        },
        {
          difficulty: "easy",
          question: "Which method selects the FIRST element matching a CSS selector?",
          options: {
            A: "document.querySelector(\".box\")",
            B: "document.getElement(\".box\")",
            C: "document.find(\".box\")",
            D: "document.select(\".box\")"
          },
          answer: "A",
          explanation: "querySelector accepts any CSS selector and returns the first match (or null). querySelectorAll returns all matches as a NodeList.",
          code: "document.querySelector(\"#title\");\ndocument.querySelector(\".card .btn\");\ndocument.querySelectorAll(\"li\");",
          related: ["querySelector", "Selectors"]
        },
        {
          difficulty: "medium",
          question: "What does querySelector return when nothing matches?",
          options: { A: "null", B: "undefined", C: "An empty array", D: "An error" },
          answer: "A",
          explanation: "It returns null, so accessing a property on it throws 'Cannot read properties of null' - the most common DOM error. Check first or use optional chaining.",
          code: "const el = document.querySelector(\".missing\");\nif (el) el.textContent = \"hi\";\nel?.classList.add(\"on\");",
          related: ["null", "Error handling"]
        },
        {
          difficulty: "medium",
          question: "What is the difference between getElementById and querySelector?",
          options: {
            A: "getElementById takes a bare id (no #) and is slightly faster; querySelector takes any CSS selector",
            B: "They are identical",
            C: "querySelector only works on classes",
            D: "getElementById returns an array"
          },
          answer: "A",
          explanation: "getElementById(\"title\") vs querySelector(\"#title\"). The speed difference is negligible in practice; querySelector's flexibility usually wins.",
          related: ["getElementById", "querySelector"]
        },
        {
          difficulty: "hard",
          question: "What is the difference between an HTMLCollection (getElementsByClassName) and a NodeList (querySelectorAll)?",
          options: {
            A: "HTMLCollection is LIVE (updates automatically); querySelectorAll's NodeList is a static snapshot",
            B: "They are the same",
            C: "NodeList is live",
            D: "HTMLCollection is an array"
          },
          answer: "A",
          explanation: "A live collection reflects later DOM changes, which can cause surprising loop behaviour. Static NodeLists are predictable and support forEach.",
          related: ["NodeList", "Live collections"]
        },
        {
          difficulty: "medium",
          question: "How do you change the visible TEXT of an element safely?",
          options: {
            A: "el.textContent = \"Hello\"",
            B: "el.value = \"Hello\"",
            C: "el.text = \"Hello\"",
            D: "el.write(\"Hello\")"
          },
          answer: "A",
          explanation: "textContent sets plain text and escapes any HTML - safe against injection. innerText is similar but slower (it respects CSS visibility).",
          related: ["textContent", "innerText"]
        },
        {
          difficulty: "hard",
          question: "Why is innerHTML risky with user-supplied data?",
          options: {
            A: "It parses the string as HTML, allowing script/event injection (XSS)",
            B: "It is slower only",
            C: "It does not work in modern browsers",
            D: "It is not risky"
          },
          answer: "A",
          explanation: "Inserting untrusted input via innerHTML lets attackers run code in your users' browsers. Use textContent for text; sanitise if HTML is genuinely required.",
          code: "el.textContent = userInput;   // safe\nel.innerHTML = userInput;      // dangerous!",
          related: ["XSS", "Security"]
        },
        {
          difficulty: "medium",
          question: "How do you read what a user typed into an <input>?",
          options: {
            A: "input.value",
            B: "input.textContent",
            C: "input.innerHTML",
            D: "input.text"
          },
          answer: "A",
          explanation: "Form controls store their current data in .value (always a STRING - convert with Number() for maths). textContent would be empty for inputs.",
          code: "const n = Number(document.querySelector(\"#age\").value);",
          related: ["Forms", "value"]
        },
        {
          difficulty: "medium",
          question: "How do you add a CSS class to an element?",
          options: {
            A: "el.classList.add(\"active\")",
            B: "el.class += \"active\"",
            C: "el.addClass(\"active\")",
            D: "el.style.class = \"active\""
          },
          answer: "A",
          explanation: "classList provides add, remove, toggle and contains - far safer than overwriting className, which would wipe existing classes.",
          code: "el.classList.add(\"active\");\nel.classList.remove(\"hidden\");\nel.classList.toggle(\"open\");\nel.classList.contains(\"active\");   // true/false",
          related: ["classList", "CSS"]
        },
        {
          difficulty: "medium",
          question: "What does classList.toggle(\"open\") do?",
          options: {
            A: "Adds the class if absent, removes it if present - and returns true/false",
            B: "Always adds it",
            C: "Always removes it",
            D: "Renames the class"
          },
          answer: "A",
          explanation: "Perfect for menus, modals and dark mode. An optional second argument forces the state: toggle(\"open\", isOpen).",
          related: ["classList", "toggle"]
        },
        {
          difficulty: "medium",
          question: "How do you change an inline style?",
          options: {
            A: "el.style.backgroundColor = \"red\"  (camelCase property names)",
            B: "el.style.background-color = \"red\"",
            C: "el.css(\"background-color\", \"red\")",
            D: "el.setStyle(\"background\", \"red\")"
          },
          answer: "A",
          explanation: "CSS hyphenated names become camelCase in JavaScript because background-color would be parsed as subtraction. Prefer toggling classes over many inline styles.",
          code: "el.style.backgroundColor = \"red\";\nel.style.fontSize = \"20px\";",
          related: ["style", "CSS"]
        },
        {
          difficulty: "medium",
          question: "How do you create a new element and add it to the page?",
          options: {
            A: "const li = document.createElement(\"li\"); parent.appendChild(li);",
            B: "document.newElement(\"li\")",
            C: "parent.add(\"<li>\")",
            D: "document.write(\"<li>\")"
          },
          answer: "A",
          explanation: "createElement builds a detached element; it appears only once inserted with appendChild, append, prepend or insertBefore.",
          code: "const li = document.createElement(\"li\");\nli.textContent = \"New item\";\ndocument.querySelector(\"ul\").appendChild(li);",
          related: ["createElement", "appendChild"]
        },
        {
          difficulty: "medium",
          question: "What is the difference between append() and appendChild()?",
          options: {
            A: "append() accepts multiple nodes AND plain strings; appendChild() takes exactly one node and returns it",
            B: "They are identical",
            C: "appendChild is newer",
            D: "append only works on text"
          },
          answer: "A",
          explanation: "append is the modern, more flexible method: parent.append(el, \"text\", el2). appendChild remains widely used and returns the appended node.",
          related: ["append", "appendChild"]
        },
        {
          difficulty: "medium",
          question: "How do you REMOVE an element from the page?",
          options: {
            A: "el.remove()",
            B: "el.delete()",
            C: "document.remove(el)",
            D: "el.destroy()"
          },
          answer: "A",
          explanation: "The modern one-liner. The older equivalent was el.parentNode.removeChild(el).",
          related: ["remove", "DOM manipulation"]
        },
        {
          difficulty: "medium",
          question: "How do you read a data attribute?\n<div data-user-id=\"42\">",
          options: {
            A: "el.dataset.userId",
            B: "el.data(\"user-id\")",
            C: "el.userId",
            D: "el.attributes.userId"
          },
          answer: "A",
          explanation: "dataset exposes all data-* attributes, converting kebab-case to camelCase. Values are always strings.",
          code: "const id = Number(el.dataset.userId);   // 42",
          related: ["dataset", "Attributes"]
        },
        {
          difficulty: "medium",
          question: "What is the difference between setAttribute and setting a property?",
          options: {
            A: "setAttribute changes the HTML attribute; properties reflect the CURRENT state (they can diverge, e.g. input.value)",
            B: "They are identical",
            C: "setAttribute is deprecated",
            D: "Properties do not exist"
          },
          answer: "A",
          explanation: "After a user types, input.value shows the typed text while getAttribute(\"value\") still shows the original HTML default. Use properties for live state.",
          related: ["Attributes vs properties"]
        },
        {
          difficulty: "hard",
          question: "Why should you avoid updating the DOM inside a long loop?",
          options: {
            A: "Each change can force reflow/repaint - build the content first, then insert once",
            B: "Loops cannot touch the DOM",
            C: "It causes syntax errors",
            D: "There is no problem"
          },
          answer: "A",
          explanation: "A thousand appendChild calls means a thousand layout recalculations. Build an HTML string or a DocumentFragment and insert it in one operation.",
          code: "const frag = document.createDocumentFragment();\nitems.forEach(t => { const li = document.createElement(\"li\"); li.textContent = t; frag.append(li); });\nlist.append(frag);   // one DOM update",
          related: ["Performance", "DocumentFragment"]
        },
        {
          difficulty: "medium",
          question: "What does el.closest(\".card\") do?",
          options: {
            A: "Walks UP the tree from el and returns the nearest ancestor (or el itself) matching the selector",
            B: "Finds the nearest child",
            C: "Returns the sibling",
            D: "Measures distance in pixels"
          },
          answer: "A",
          explanation: "closest is invaluable in event delegation: from a clicked button you can find the containing card or row.",
          code: "btn.closest(\".card\").remove();",
          related: ["closest", "Traversal"]
        },
        {
          difficulty: "medium",
          question: "Which property gives an element's PARENT?",
          options: { A: "el.parentElement", B: "el.parent", C: "el.up", D: "el.container" },
          answer: "A",
          explanation: "Traversal properties: parentElement, children, firstElementChild, nextElementSibling. (The older node-based versions like childNodes also include text nodes.)",
          related: ["Traversal", "parentElement"]
        },
        {
          difficulty: "hard",
          question: "Why does this return null?\n<script src=\"app.js\"></script> is in <head>, and app.js runs document.querySelector(\"#btn\")",
          options: {
            A: "The script runs BEFORE the body elements are parsed, so #btn does not exist yet",
            B: "querySelector is broken",
            C: "The id is wrong",
            D: "Scripts cannot use querySelector"
          },
          answer: "A",
          explanation: "Fix by adding defer to the script tag, moving it before </body>, or wrapping the code in a DOMContentLoaded listener.",
          code: "<script src=\"app.js\" defer></script>\n// or\ndocument.addEventListener(\"DOMContentLoaded\", init);",
          related: ["defer", "DOMContentLoaded"]
        },
        {
          difficulty: "medium",
          question: "What does the DOMContentLoaded event mean?",
          options: {
            A: "The HTML is parsed and the DOM is ready - images may still be loading",
            B: "Everything including images has loaded",
            C: "The page is closing",
            D: "CSS finished"
          },
          answer: "A",
          explanation: "DOMContentLoaded fires early (ideal for setup); the window 'load' event waits for all images and stylesheets, so it fires much later.",
          related: ["DOMContentLoaded", "load"]
        },
        {
          difficulty: "medium",
          question: "How do you loop over the result of querySelectorAll?",
          options: {
            A: "forEach or for...of - NodeLists support both",
            B: "Only a classic for loop",
            C: "map() directly",
            D: "You cannot loop it"
          },
          answer: "A",
          explanation: "NodeList has forEach and is iterable. It does NOT have map/filter - convert with Array.from(list) or [...list] first.",
          code: "document.querySelectorAll(\".item\").forEach(el => el.classList.add(\"on\"));\nconst texts = [...document.querySelectorAll(\"li\")].map(li => li.textContent);",
          related: ["NodeList", "Array.from"]
        },
        {
          difficulty: "medium",
          question: "What does insertAdjacentHTML(\"beforeend\", html) do?",
          options: {
            A: "Inserts HTML at a precise position without destroying existing children/listeners",
            B: "Replaces all content",
            C: "Deletes the element",
            D: "Only works with text"
          },
          answer: "A",
          explanation: "Unlike innerHTML += (which re-parses everything and kills existing event listeners), this inserts efficiently. Positions: beforebegin, afterbegin, beforeend, afterend.",
          related: ["insertAdjacentHTML", "Performance"]
        },
        {
          difficulty: "hard",
          question: "What is wrong with el.innerHTML += \"<li>x</li>\" in a loop?",
          options: {
            A: "It re-parses ALL the HTML each time and destroys existing elements' event listeners",
            B: "It is a syntax error",
            C: "It only adds text",
            D: "Nothing is wrong"
          },
          answer: "A",
          explanation: "The += reads, concatenates and re-writes the entire subtree, which is slow and replaces existing nodes with new ones (losing listeners and input state).",
          related: ["innerHTML", "Performance"]
        },
        {
          difficulty: "medium",
          question: "How do you check whether an element has a class?",
          options: {
            A: "el.classList.contains(\"active\")",
            B: "el.hasClass(\"active\")",
            C: "el.class === \"active\"",
            D: "el.classList === \"active\""
          },
          answer: "A",
          explanation: "contains returns a boolean. Comparing className directly fails whenever an element has multiple classes.",
          related: ["classList"]
        },
        {
          difficulty: "hard",
          question: "What does document.querySelector(\"#list\").children give you?",
          options: {
            A: "An HTMLCollection of ELEMENT children only (ignoring text/whitespace nodes)",
            B: "All descendants",
            C: "Text nodes too",
            D: "An array"
          },
          answer: "A",
          explanation: "children skips text nodes, unlike childNodes which includes the whitespace between tags - a classic source of unexpected counts.",
          related: ["children", "childNodes"]
        },
        {
          difficulty: "medium",
          question: "How do you hide an element with JavaScript?",
          options: {
            A: "Toggle a CSS class, or set el.style.display = \"none\"",
            B: "el.hide()",
            C: "el.visible = false",
            D: "delete el"
          },
          answer: "A",
          explanation: "Adding a class like .hidden { display: none } keeps styling in CSS where it belongs and is easy to animate or override.",
          related: ["style", "classList"]
        },
        {
          difficulty: "hard",
          question: "What is the difference between offsetWidth and getBoundingClientRect().width?",
          options: {
            A: "offsetWidth is a rounded integer; getBoundingClientRect gives precise fractional values including transforms",
            B: "They are identical",
            C: "offsetWidth includes margins",
            D: "getBoundingClientRect only works on images"
          },
          answer: "A",
          explanation: "Use getBoundingClientRect for precise measurement and viewport position (it also returns top/left/right/bottom).",
          related: ["Measurements", "Layout"]
        },
        {
          difficulty: "medium",
          question: "Which is generally better: building HTML strings or creating elements?",
          options: {
            A: "Strings are concise for static markup; createElement is safer with dynamic user data",
            B: "Strings are always better",
            C: "createElement is always better",
            D: "They are identical"
          },
          answer: "A",
          explanation: "Template literals are readable for trusted content, but inserting user data via innerHTML risks XSS. createElement + textContent escapes automatically.",
          related: ["Security", "Best practices"]
        },
        {
          difficulty: "medium",
          question: "How do you clear all children of an element?",
          options: {
            A: "el.replaceChildren()  (or el.innerHTML = \"\")",
            B: "el.clear()",
            C: "el.empty()",
            D: "delete el.children"
          },
          answer: "A",
          explanation: "replaceChildren() with no arguments removes everything cleanly and is the modern approach; innerHTML = \"\" also works and is widely used.",
          related: ["replaceChildren", "innerHTML"]
        }
      ]
    }
  ]
});
