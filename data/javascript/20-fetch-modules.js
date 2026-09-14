/* ============================================================
   JAVASCRIPT - TOPIC 20: FETCH, JSON & MODULES (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "JavaScript",
  icon: "🟨",
  color: "#b8860b",
  description: "The language of the web - basics to advanced, 20 topics.",
  topics: [
    {
      name: "20. Fetch, JSON & Modules",
      questions: [
        {
          difficulty: "easy",
          question: "What does fetch(url) return?",
          options: {
            A: "A promise that resolves to a Response object",
            B: "The data directly",
            C: "A string",
            D: "undefined"
          },
          answer: "A",
          explanation: "fetch is asynchronous: it resolves once the response HEADERS arrive. You then read the body with .json(), .text() or .blob() - each of which is also async.",
          code: "const res = await fetch(url);\nconst data = await res.json();",
          related: ["fetch", "Promises"]
        },
        {
          difficulty: "hard",
          question: "Does fetch REJECT on a 404 or 500 response?",
          options: {
            A: "No - it only rejects on network failure; HTTP errors still resolve successfully",
            B: "Yes, it rejects on any error status",
            C: "Only on 500",
            D: "It throws a SyntaxError"
          },
          answer: "A",
          explanation: "This surprises almost everyone. You must check response.ok (true for 200-299) and throw yourself, otherwise .catch() never sees server errors.",
          code: "const res = await fetch(url);\nif (!res.ok) throw new Error(`HTTP ${res.status}`);",
          notes: ["The most common fetch bug in real projects."],
          related: ["response.ok", "Error handling"]
        },
        {
          difficulty: "medium",
          question: "What does response.ok tell you?",
          options: {
            A: "true when the status is in the 200-299 range",
            B: "That the network worked",
            C: "That JSON parsed correctly",
            D: "Nothing useful"
          },
          answer: "A",
          explanation: "A quick success test. response.status gives the exact code (404, 500...) for more specific handling.",
          related: ["response.ok", "status"]
        },
        {
          difficulty: "medium",
          question: "How do you send a POST request with JSON?",
          options: {
            A: "fetch(url, { method: \"POST\", headers: {\"Content-Type\": \"application/json\"}, body: JSON.stringify(data) })",
            B: "fetch(url, data)",
            C: "fetch.post(url, data)",
            D: "fetch(url, { post: data })"
          },
          answer: "A",
          explanation: "Three parts matter: the method, the Content-Type header so the server parses it correctly, and a STRINGIFIED body (fetch cannot send a raw object).",
          related: ["POST", "JSON", "Headers"]
        },
        {
          difficulty: "hard",
          question: "Why must the body be JSON.stringify(data) rather than the object itself?",
          options: {
            A: "HTTP bodies are text/bytes - passing an object would send \"[object Object]\"",
            B: "It is optional",
            C: "To encrypt it",
            D: "To compress it"
          },
          answer: "A",
          explanation: "The object must be serialised to a JSON string. On the server it is parsed back; in the browser, response.json() does the reverse.",
          related: ["JSON.stringify", "Serialization"]
        },
        {
          difficulty: "medium",
          question: "What is JSON?",
          options: {
            A: "A text format for structured data, based on JavaScript object syntax but language-independent",
            B: "A JavaScript library",
            C: "A database",
            D: "A type of function"
          },
          answer: "A",
          explanation: "JavaScript Object Notation is the standard way APIs exchange data. It supports objects, arrays, strings, numbers, booleans and null - but not functions, undefined or comments.",
          related: ["JSON", "APIs"]
        },
        {
          difficulty: "medium",
          question: "What is the difference between JSON.parse and JSON.stringify?",
          options: {
            A: "parse turns a JSON STRING into a JS value; stringify turns a JS value into a JSON string",
            B: "They are the same",
            C: "parse converts to a string",
            D: "stringify validates JSON"
          },
          answer: "A",
          explanation: "Mnemonic: parse comes IN (from text), stringify goes OUT (to text). Wrap JSON.parse of untrusted input in try/catch - malformed JSON throws a SyntaxError.",
          related: ["JSON.parse", "JSON.stringify"]
        },
        {
          difficulty: "hard",
          question: "Which values are LOST by JSON.stringify?",
          options: {
            A: "Functions, undefined values and symbols are dropped; Dates become strings",
            B: "Nothing is lost",
            C: "Numbers are lost",
            D: "Only arrays survive"
          },
          answer: "A",
          explanation: "JSON has no concept of functions or undefined, so those keys vanish. Dates serialise to ISO strings and do NOT come back as Date objects - a frequent source of bugs.",
          code: "JSON.stringify({ a: 1, f() {}, u: undefined });   // '{\"a\":1}'",
          related: ["JSON limitations"]
        },
        {
          difficulty: "medium",
          question: "How do you store an object in localStorage?",
          options: {
            A: "localStorage.setItem(\"key\", JSON.stringify(obj)) then JSON.parse on read",
            B: "localStorage.setItem(\"key\", obj)",
            C: "localStorage.obj = obj",
            D: "Objects cannot be stored"
          },
          answer: "A",
          explanation: "localStorage stores STRINGS only; saving an object directly gives \"[object Object]\". Always stringify on write and parse on read.",
          code: "localStorage.setItem(\"user\", JSON.stringify(user));\nconst user = JSON.parse(localStorage.getItem(\"user\") ?? \"null\");",
          related: ["localStorage", "JSON"]
        },
        {
          difficulty: "medium",
          question: "What is the difference between localStorage and sessionStorage?",
          options: {
            A: "localStorage persists until cleared; sessionStorage is wiped when the tab closes",
            B: "They are identical",
            C: "sessionStorage is bigger",
            D: "localStorage is per-tab"
          },
          answer: "A",
          explanation: "Both store strings per origin (roughly 5-10 MB). Choose sessionStorage for temporary per-tab state, localStorage for preferences that should survive restarts.",
          related: ["Web Storage"]
        },
        {
          difficulty: "hard",
          question: "What is CORS?",
          options: {
            A: "A browser security rule requiring the server to permit cross-origin requests via response headers",
            B: "A JavaScript library",
            C: "A type of promise",
            D: "An encoding format"
          },
          answer: "A",
          explanation: "By default a page cannot read responses from another origin. The SERVER must send Access-Control-Allow-Origin. CORS errors cannot be fixed from client-side JavaScript alone.",
          related: ["CORS", "Security"]
        },
        {
          difficulty: "medium",
          question: "How do you send an authorisation token with fetch?",
          options: {
            A: "In the headers object: { Authorization: `Bearer ${token}` }",
            B: "In the URL always",
            C: "In the method",
            D: "Tokens cannot be sent"
          },
          answer: "A",
          explanation: "Headers carry auth data. Avoid putting tokens in URLs, where they leak into logs and browser history.",
          code: "fetch(url, { headers: { Authorization: `Bearer ${token}` } });",
          related: ["Headers", "Authentication"]
        },
        {
          difficulty: "hard",
          question: "How do you CANCEL an in-flight fetch request?",
          options: {
            A: "With an AbortController and its signal",
            B: "fetch.cancel()",
            C: "clearTimeout(fetch)",
            D: "You cannot cancel it"
          },
          answer: "A",
          explanation: "Essential for search-as-you-type (cancel the previous request) and for cleanup when a component unmounts. The aborted promise rejects with an AbortError.",
          code: "const ac = new AbortController();\nfetch(url, { signal: ac.signal });\nac.abort();",
          related: ["AbortController"]
        },
        {
          difficulty: "medium",
          question: "How do you read a plain-text response?",
          options: { A: "await response.text()", B: "response.body", C: "response.string()", D: "response.data" },
          answer: "A",
          explanation: "Body readers: .json() for JSON, .text() for text/HTML, .blob() for binary (images, files), .formData() for form payloads.",
          related: ["Response methods"]
        },
        {
          difficulty: "hard",
          question: "Why can a response body be read only ONCE?",
          options: {
            A: "It is a stream - after reading it is consumed; clone the response if you need it twice",
            B: "A browser bug",
            C: "For security",
            D: "It can be read many times"
          },
          answer: "A",
          explanation: "Calling both .json() and .text() on the same response throws 'body stream already read'. Use response.clone() when you truly need two reads.",
          related: ["Streams", "clone"]
        },
        {
          difficulty: "medium",
          question: "What does export do in an ES module?",
          options: {
            A: "Makes a value available for other modules to import",
            B: "Sends data to the server",
            C: "Saves a file",
            D: "Deletes a variable"
          },
          answer: "A",
          explanation: "Modules are private by default; export opens specific values to others. A file can have many NAMED exports and at most one DEFAULT export.",
          code: "export const PI = 3.14;\nexport function area(r) { }\nexport default class Circle { }",
          related: ["Modules", "export"]
        },
        {
          difficulty: "medium",
          question: "What is the difference between a named and a default export?",
          options: {
            A: "Named exports must be imported by their exact name in braces; a default export can be imported under any name",
            B: "They are identical",
            C: "Default exports are faster",
            D: "You can have many defaults"
          },
          answer: "A",
          explanation: "Named imports use braces and exact names (better for autocomplete and refactoring); default imports pick their own name.",
          code: "import { area, PI } from \"./math.js\";\nimport Circle from \"./circle.js\";        // any name works\nimport { area as calcArea } from \"./math.js\";   // rename",
          related: ["import", "export"]
        },
        {
          difficulty: "medium",
          question: "How do you enable ES modules in a browser?",
          options: {
            A: "<script type=\"module\" src=\"app.js\"></script>",
            B: "<script module>",
            C: "Modules work automatically",
            D: "<module src=\"app.js\">"
          },
          answer: "A",
          explanation: "type=\"module\" also implies defer and strict mode, and gives the file its own scope. Modules must be served over http(s), not opened via file://.",
          related: ["type=module", "Scripts"]
        },
        {
          difficulty: "hard",
          question: "Why do ES modules require a server (not file://)?",
          options: {
            A: "Module loading is subject to CORS, which does not apply to the file protocol",
            B: "Modules need a database",
            C: "Browsers ban local files entirely",
            D: "They do work with file://"
          },
          answer: "A",
          explanation: "Opening an HTML file directly gives a CORS error for module imports. Use a local server (VS Code Live Server, python -m http.server) during development.",
          related: ["CORS", "Modules"]
        },
        {
          difficulty: "medium",
          question: "What scope do variables in a module have?",
          options: {
            A: "Module scope - private to that file unless exported",
            B: "Global scope",
            C: "Function scope only",
            D: "No scope"
          },
          answer: "A",
          explanation: "This is a major advantage over classic scripts, where top-level var became global and could clash between files.",
          related: ["Module scope"]
        },
        {
          difficulty: "hard",
          question: "What is dynamic import()?",
          options: {
            A: "import(\"./mod.js\") returns a PROMISE, letting you load a module on demand at runtime",
            B: "A faster static import",
            C: "Importing many files at once",
            D: "A deprecated feature"
          },
          answer: "A",
          explanation: "Static imports are hoisted and always loaded. Dynamic import enables code splitting and lazy loading - only fetching a heavy module when the user actually needs it.",
          code: "button.onclick = async () => {\n  const { Chart } = await import(\"./chart.js\");\n  new Chart();\n};",
          related: ["Dynamic import", "Code splitting"]
        },
        {
          difficulty: "medium",
          question: "Are ES module imports hoisted?",
          options: {
            A: "Yes - imports are resolved before any module code runs, so import order in the file does not matter",
            B: "No",
            C: "Only default imports",
            D: "Only in Node"
          },
          answer: "A",
          explanation: "The module graph is built first, then code executes. Convention is still to put imports at the top for readability.",
          related: ["Hoisting", "Modules"]
        },
        {
          difficulty: "hard",
          question: "What is the difference between ES modules and CommonJS?",
          options: {
            A: "ESM uses import/export and is static/async; CommonJS uses require()/module.exports and is synchronous (Node's older system)",
            B: "They are the same",
            C: "CommonJS is browser-only",
            D: "ESM is deprecated"
          },
          answer: "A",
          explanation: "Browsers support ESM natively; Node supports both (.mjs or \"type\": \"module\" for ESM). ESM's static structure enables tree-shaking during bundling.",
          related: ["CommonJS", "Node.js"]
        },
        {
          difficulty: "hard",
          question: "What is tree-shaking?",
          options: {
            A: "Bundlers removing exported code that is never imported, shrinking the final file",
            B: "Sorting the DOM tree",
            C: "Clearing the cache",
            D: "A debugging technique"
          },
          answer: "A",
          explanation: "It works because ES module imports are static and analysable. Importing one function from a library can leave the rest out of your bundle.",
          related: ["Bundlers", "Optimisation"]
        },
        {
          difficulty: "medium",
          question: "How do you handle a fetch that might fail?",
          options: {
            A: "try/catch around await, plus a response.ok check inside",
            B: "Only try/catch",
            C: "Only response.ok",
            D: "Fetch never fails"
          },
          answer: "A",
          explanation: "You need BOTH: catch handles network/CORS failures, while the ok check handles HTTP error statuses that resolve normally.",
          code: "try {\n  const res = await fetch(url);\n  if (!res.ok) throw new Error(`HTTP ${res.status}`);\n  return await res.json();\n} catch (err) {\n  showError(err.message);\n}",
          related: ["Error handling", "fetch"]
        },
        {
          difficulty: "medium",
          question: "What does the async attribute do on a script tag?",
          options: {
            A: "Downloads in parallel and executes as soon as ready - order is NOT guaranteed",
            B: "Same as defer",
            C: "Delays the script",
            D: "Makes functions async"
          },
          answer: "A",
          explanation: "Use async for independent scripts like analytics. Use defer when scripts depend on the DOM or on each other, since defer preserves order and waits for parsing.",
          related: ["async", "defer"]
        },
        {
          difficulty: "hard",
          question: "What does the URLSearchParams API help with?",
          options: {
            A: "Building and reading query strings safely, with proper encoding",
            B: "Parsing JSON",
            C: "Creating modules",
            D: "Storing cookies"
          },
          answer: "A",
          explanation: "Manual string concatenation breaks with spaces and special characters. URLSearchParams encodes values correctly.",
          code: "const p = new URLSearchParams({ q: \"js books\", page: 2 });\nfetch(`/search?${p}`);   // /search?q=js+books&page=2",
          related: ["URLSearchParams", "Query strings"]
        },
        {
          difficulty: "medium",
          question: "How do you send FORM data (including files) with fetch?",
          options: {
            A: "Pass a FormData object as the body - and do NOT set Content-Type manually",
            B: "JSON.stringify the form",
            C: "Send it in the URL",
            D: "Files cannot be sent"
          },
          answer: "A",
          explanation: "The browser sets the correct multipart Content-Type with its boundary automatically; setting it yourself breaks the upload.",
          code: "const fd = new FormData(form);\nfetch(url, { method: \"POST\", body: fd });",
          related: ["FormData", "File upload"]
        },
        {
          difficulty: "hard",
          question: "Why should API keys never be stored in front-end JavaScript?",
          options: {
            A: "All client code is visible to users - anyone can read the key from DevTools or the bundle",
            B: "It makes the site slow",
            C: "Browsers block them",
            D: "It is fine to store them"
          },
          answer: "A",
          explanation: "Minification is not security. Secret keys belong on a server that proxies the request; the browser calls YOUR endpoint instead.",
          related: ["Security", "API keys"]
        },
        {
          difficulty: "medium",
          question: "What is the modern replacement for XMLHttpRequest?",
          options: {
            A: "fetch - promise-based and much cleaner",
            B: "jQuery.ajax",
            C: "WebSocket",
            D: "There is none"
          },
          answer: "A",
          explanation: "fetch is built in, returns promises and works naturally with async/await. XHR still appears in legacy code and for upload-progress events, which fetch handles less directly.",
          related: ["fetch", "XMLHttpRequest"]
        }
      ]
    }
  ]
});
