/* ============================================================
   JAVASCRIPT - TOPIC 17: EVENTS (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "JavaScript",
  icon: "🟨",
  color: "#b8860b",
  description: "The language of the web - basics to advanced, 20 topics.",
  topics: [
    {
      name: "17. Events",
      questions: [
        {
          difficulty: "easy",
          question: "What is the modern way to react to a click?",
          options: {
            A: "btn.addEventListener(\"click\", handler)",
            B: "btn.onClick = handler",
            C: "btn.click(handler)",
            D: "btn.on(\"click\", handler)"
          },
          answer: "A",
          explanation: "addEventListener allows MULTIPLE handlers for the same event and supports options like once and capture. The onclick property allows only one handler.",
          code: "btn.addEventListener(\"click\", () => console.log(\"clicked\"));",
          related: ["addEventListener", "Events"]
        },
        {
          difficulty: "hard",
          question: "What is wrong here?\nbtn.addEventListener(\"click\", handleClick());",
          options: {
            A: "The parentheses CALL handleClick immediately and register its return value instead of the function",
            B: "Nothing is wrong",
            C: "The event name is wrong",
            D: "It needs three arguments"
          },
          answer: "A",
          explanation: "Pass the function itself (no parentheses). If you must pass arguments, wrap it: () => handleClick(id).",
          code: "btn.addEventListener(\"click\", handleClick);          // correct\nbtn.addEventListener(\"click\", () => handleClick(5));  // with args",
          notes: ["A top beginner mistake with event listeners."],
          related: ["Callbacks", "Common mistakes"]
        },
        {
          difficulty: "medium",
          question: "What is the event object passed to a handler?",
          options: {
            A: "An object describing what happened - target, type, coordinates, key pressed, etc.",
            B: "The element only",
            C: "A string",
            D: "Nothing is passed"
          },
          answer: "A",
          explanation: "Every handler receives the event as its first argument (conventionally e or event), carrying details and control methods like preventDefault.",
          code: "btn.addEventListener(\"click\", (e) => {\n  console.log(e.type, e.target, e.clientX);\n});",
          related: ["Event object"]
        },
        {
          difficulty: "hard",
          question: "What is the difference between e.target and e.currentTarget?",
          options: {
            A: "target is the element that ACTUALLY triggered the event; currentTarget is the element the listener is attached to",
            B: "They are always the same",
            C: "currentTarget is the parent",
            D: "target is always the document"
          },
          answer: "A",
          explanation: "Clicking a <span> inside a button makes target the span but currentTarget the button. This distinction is the key to event delegation.",
          related: ["target", "currentTarget", "Delegation"]
        },
        {
          difficulty: "medium",
          question: "What does e.preventDefault() do?",
          options: {
            A: "Stops the browser's default action - e.g. a form submitting or a link navigating",
            B: "Stops the event bubbling",
            C: "Removes the listener",
            D: "Prevents all events"
          },
          answer: "A",
          explanation: "Essential for handling forms with JavaScript, since without it the page reloads and your code appears to do nothing.",
          code: "form.addEventListener(\"submit\", (e) => {\n  e.preventDefault();   // stop page reload\n  sendData();\n});",
          related: ["preventDefault", "Forms"]
        },
        {
          difficulty: "medium",
          question: "What does e.stopPropagation() do?",
          options: {
            A: "Prevents the event from continuing to bubble up to ancestor elements",
            B: "Stops the default action",
            C: "Deletes the event",
            D: "Cancels all listeners on the page"
          },
          answer: "A",
          explanation: "Useful when an inner element's click should not also trigger a parent's handler (e.g. clicking inside a modal should not close it). Use sparingly - it can make behaviour hard to trace.",
          related: ["stopPropagation", "Bubbling"]
        },
        {
          difficulty: "hard",
          question: "What is event BUBBLING?",
          options: {
            A: "An event fires on the target, then travels UP through each ancestor, triggering their handlers",
            B: "Events go downward from document",
            C: "Events repeat",
            D: "Events fire twice"
          },
          answer: "A",
          explanation: "Click a button inside a div inside body: handlers fire on the button, then the div, then body, then document. Bubbling is what makes delegation possible.",
          related: ["Bubbling", "Propagation"]
        },
        {
          difficulty: "hard",
          question: "What are the three phases of event propagation?",
          options: {
            A: "Capturing (down), target, then bubbling (up)",
            B: "Start, middle, end",
            C: "Click, hold, release",
            D: "Only bubbling exists"
          },
          answer: "A",
          explanation: "The event descends from document to the target (capture), fires at the target, then bubbles back up. Passing true (or {capture: true}) to addEventListener runs your handler during the capture phase.",
          code: "el.addEventListener(\"click\", fn, true);   // capture phase",
          related: ["Capturing", "Bubbling"]
        },
        {
          difficulty: "hard",
          question: "What is event DELEGATION?",
          options: {
            A: "Attaching ONE listener to a parent and using e.target to handle events from many children",
            B: "Assigning events to another developer",
            C: "Using multiple listeners per element",
            D: "Removing listeners"
          },
          answer: "A",
          explanation: "Instead of a listener per row, put one on the container. It uses less memory and automatically covers elements added LATER - the standard pattern for dynamic lists.",
          code: "list.addEventListener(\"click\", (e) => {\n  const btn = e.target.closest(\".delete\");\n  if (!btn) return;\n  btn.closest(\"li\").remove();\n});",
          related: ["Delegation", "Performance"]
        },
        {
          difficulty: "medium",
          question: "Why does event delegation work for elements added dynamically?",
          options: {
            A: "The listener is on the parent, which already exists - new children bubble to it automatically",
            B: "The browser re-scans listeners",
            C: "It does not work for new elements",
            D: "JavaScript adds listeners automatically"
          },
          answer: "A",
          explanation: "Directly attached listeners only cover elements present at the time. Delegation solves the common bug where newly created buttons stop responding.",
          related: ["Delegation", "Dynamic content"]
        },
        {
          difficulty: "medium",
          question: "How do you REMOVE an event listener?",
          options: {
            A: "removeEventListener with the SAME function reference used to add it",
            B: "removeEventListener(\"click\")",
            C: "el.listeners = []",
            D: "delete el.onclick"
          },
          answer: "A",
          explanation: "An anonymous inline arrow cannot be removed because you have no reference to it. Store the function in a variable if you plan to remove it.",
          code: "function onClick() { }\nbtn.addEventListener(\"click\", onClick);\nbtn.removeEventListener(\"click\", onClick);   // works",
          related: ["removeEventListener", "Cleanup"]
        },
        {
          difficulty: "medium",
          question: "What does the { once: true } option do?",
          options: {
            A: "The listener fires at most once, then removes itself automatically",
            B: "It fires once per second",
            C: "It only works on one element",
            D: "Nothing"
          },
          answer: "A",
          explanation: "Ideal for one-time actions like an intro animation or a single-submit guard - no manual cleanup needed.",
          code: "btn.addEventListener(\"click\", init, { once: true });",
          related: ["Listener options"]
        },
        {
          difficulty: "medium",
          question: "Which event fires as the user TYPES in an input?",
          options: {
            A: "input - it fires on every change, including paste",
            B: "change - only when leaving the field",
            C: "keypress only",
            D: "submit"
          },
          answer: "A",
          explanation: "Use input for live search or character counters. change fires only after the value is committed (blur or selection), which is better for selects and checkboxes.",
          code: "search.addEventListener(\"input\", (e) => filter(e.target.value));",
          related: ["input", "change"]
        },
        {
          difficulty: "medium",
          question: "How do you detect which key was pressed?",
          options: {
            A: "e.key - a readable string like \"Enter\", \"a\", \"ArrowUp\"",
            B: "e.keyCode only",
            C: "e.char",
            D: "e.button"
          },
          answer: "A",
          explanation: "e.key is the modern, readable property. e.keyCode is deprecated. Use e.code when you need the physical key regardless of layout.",
          code: "input.addEventListener(\"keydown\", (e) => {\n  if (e.key === \"Enter\") submit();\n});",
          related: ["Keyboard events", "e.key"]
        },
        {
          difficulty: "medium",
          question: "What is the difference between keydown and keyup?",
          options: {
            A: "keydown fires when the key goes DOWN (and repeats if held); keyup fires on release",
            B: "They are identical",
            C: "keyup fires first",
            D: "keydown only works for letters"
          },
          answer: "A",
          explanation: "Use keydown for shortcuts and to preventDefault before the character appears; use keyup when you need the final state after the key is released.",
          related: ["Keyboard events"]
        },
        {
          difficulty: "hard",
          question: "How do you read all values from a form on submit?",
          options: {
            A: "const data = Object.fromEntries(new FormData(form))",
            B: "form.values",
            C: "form.data()",
            D: "JSON.parse(form)"
          },
          answer: "A",
          explanation: "FormData collects every named field; fromEntries turns it into a plain object. Remember to call e.preventDefault() first.",
          code: "form.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  const data = Object.fromEntries(new FormData(form));\n  console.log(data.email);\n});",
          related: ["FormData", "Forms"]
        },
        {
          difficulty: "medium",
          question: "What is the difference between mouseover and mouseenter?",
          options: {
            A: "mouseover BUBBLES and re-fires when moving over children; mouseenter fires once for the element itself",
            B: "They are identical",
            C: "mouseenter bubbles",
            D: "mouseover works only on links"
          },
          answer: "A",
          explanation: "mouseenter/mouseleave are usually what you want for hover effects, because mouseover fires repeatedly as the pointer crosses child elements.",
          related: ["Mouse events"]
        },
        {
          difficulty: "hard",
          question: "What is the output order?\nparent.addEventListener(\"click\", () => console.log(\"parent\"));\nchild.addEventListener(\"click\", () => console.log(\"child\"));\n// user clicks child",
          options: {
            A: "child then parent - the event bubbles upward",
            B: "parent then child",
            C: "Only child",
            D: "Only parent"
          },
          answer: "A",
          explanation: "Default listeners run in the bubbling phase, starting at the target. Adding {capture: true} to the parent would make it fire FIRST instead.",
          related: ["Bubbling", "Order"]
        },
        {
          difficulty: "medium",
          question: "Which event should you use to run code after the page's HTML is ready?",
          options: {
            A: "DOMContentLoaded",
            B: "click",
            C: "resize",
            D: "beforeunload"
          },
          answer: "A",
          explanation: "DOMContentLoaded fires as soon as the DOM is parsed. Alternatively, adding defer to your script tag achieves the same effect without a listener.",
          related: ["DOMContentLoaded", "Page lifecycle"]
        },
        {
          difficulty: "hard",
          question: "Why should scroll and resize handlers be throttled or debounced?",
          options: {
            A: "They fire extremely often, so heavy work in them causes janky, slow scrolling",
            B: "They are disabled by default",
            C: "They only fire once",
            D: "No reason"
          },
          answer: "A",
          explanation: "Scroll can fire dozens of times per second. Throttle limits the rate; debounce waits for a pause. For visibility detection, IntersectionObserver is better still.",
          related: ["Performance", "Debounce", "Throttle"]
        },
        {
          difficulty: "medium",
          question: "What does the { passive: true } listener option indicate?",
          options: {
            A: "That the handler will NOT call preventDefault, letting the browser scroll without waiting",
            B: "That the listener runs once",
            C: "That the event is ignored",
            D: "That it captures"
          },
          answer: "A",
          explanation: "Passive touch/wheel listeners improve scrolling smoothness because the browser need not block to see whether you cancel the default.",
          code: "window.addEventListener(\"touchstart\", fn, { passive: true });",
          related: ["Performance", "Touch events"]
        },
        {
          difficulty: "hard",
          question: "How do you trigger a custom event?",
          options: {
            A: "el.dispatchEvent(new CustomEvent(\"myEvent\", { detail: data }))",
            B: "el.trigger(\"myEvent\")",
            C: "el.fire(\"myEvent\")",
            D: "Custom events are impossible"
          },
          answer: "A",
          explanation: "CustomEvent lets components communicate without direct coupling. The listener reads the payload from e.detail.",
          code: "el.addEventListener(\"cart:add\", e => console.log(e.detail.id));\nel.dispatchEvent(new CustomEvent(\"cart:add\", { detail: { id: 7 } }));",
          related: ["CustomEvent", "Component communication"]
        },
        {
          difficulty: "medium",
          question: "What is this inside a REGULAR function event handler?",
          options: {
            A: "The element the listener is attached to (same as e.currentTarget)",
            B: "window",
            C: "The event object",
            D: "undefined"
          },
          answer: "A",
          explanation: "The DOM binds this to the current element - but an ARROW handler inherits this from the outer scope instead, so use e.currentTarget there.",
          related: ["this", "Events"]
        },
        {
          difficulty: "medium",
          question: "Can one element have TWO listeners for the same event?",
          options: {
            A: "Yes with addEventListener - they run in the order added",
            B: "No, only one",
            C: "Only with capture",
            D: "Only on different elements"
          },
          answer: "A",
          explanation: "This is a key advantage over the onclick property, which each new assignment overwrites.",
          related: ["addEventListener", "Multiple handlers"]
        },
        {
          difficulty: "hard",
          question: "What does e.stopImmediatePropagation() add over stopPropagation()?",
          options: {
            A: "It also prevents OTHER listeners on the SAME element from running",
            B: "Nothing extra",
            C: "It removes the listener",
            D: "It prevents the default action"
          },
          answer: "A",
          explanation: "stopPropagation only halts the journey to ancestors; remaining handlers on the same element still fire. stopImmediatePropagation stops those too.",
          related: ["Propagation control"]
        },
        {
          difficulty: "medium",
          question: "Which event fires when a form is submitted?",
          options: { A: "submit (on the FORM element)", B: "click on the button only", C: "send", D: "post" },
          answer: "A",
          explanation: "Listen on the form, not the button - that way Enter-key submission is also captured. Then call e.preventDefault() to handle it in JavaScript.",
          related: ["Forms", "submit"]
        },
        {
          difficulty: "hard",
          question: "Why might a listener attached in a loop capture the wrong value?\nfor (var i = 0; i < 3; i++) btns[i].addEventListener(\"click\", () => console.log(i));",
          options: {
            A: "var creates ONE shared binding, so every handler logs 3 - use let",
            B: "Listeners cannot be added in loops",
            C: "btns is undefined",
            D: "It works correctly"
          },
          answer: "A",
          explanation: "The same closure trap as with setTimeout. Changing var to let gives each iteration its own binding, so the handlers log 0, 1 and 2.",
          related: ["Closures", "let vs var"]
        },
        {
          difficulty: "medium",
          question: "What does the change event on a checkbox give you?",
          options: {
            A: "It fires when checked state changes - read e.target.checked (a boolean)",
            B: "It gives the text value",
            C: "It fires on hover",
            D: "It does not work on checkboxes"
          },
          answer: "A",
          explanation: "For checkboxes and radios use .checked, not .value (which is the static value attribute).",
          code: "cb.addEventListener(\"change\", e => console.log(e.target.checked));",
          related: ["Forms", "Checkboxes"]
        },
        {
          difficulty: "hard",
          question: "Why remove event listeners when destroying a component?",
          options: {
            A: "Listeners keep references alive, preventing garbage collection - a memory leak",
            B: "It is purely cosmetic",
            C: "Listeners expire automatically",
            D: "To reset the page"
          },
          answer: "A",
          explanation: "Especially for listeners on window/document that reference removed elements. React's useEffect cleanup and AbortController exist for exactly this.",
          code: "const ac = new AbortController();\nwindow.addEventListener(\"resize\", fn, { signal: ac.signal });\nac.abort();   // removes it",
          related: ["Memory leaks", "AbortController"]
        },
        {
          difficulty: "medium",
          question: "Which is better for a list of 100 buttons: 100 listeners or 1 delegated listener?",
          options: {
            A: "One delegated listener on the parent - less memory and it covers future items",
            B: "100 individual listeners",
            C: "They are identical",
            D: "Neither works"
          },
          answer: "A",
          explanation: "Delegation is the standard solution for lists, tables and any dynamically generated content.",
          related: ["Delegation", "Performance"]
        }
      ]
    }
  ]
});
