/* ============================================================
   JAVASCRIPT - TOPIC 10: OBJECTS (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "JavaScript",
  icon: "🟨",
  color: "#b8860b",
  description: "The language of the web - basics to advanced, 20 topics.",
  topics: [
    {
      name: "10. Objects",
      questions: [
        {
          difficulty: "easy",
          question: "Which line creates an object?",
          options: {
            A: "const user = { name: \"Ana\", age: 21 };",
            B: "const user = [ name: \"Ana\" ];",
            C: "const user = ( name: \"Ana\" );",
            D: "const user = object(name, age);"
          },
          answer: "A",
          explanation: "Curly braces with key: value pairs create an object literal - the most common way to group related data.",
          related: ["Objects", "Literals"]
        },
        {
          difficulty: "easy",
          question: "What are the two ways to read a property?",
          options: {
            A: "Dot notation user.name and bracket notation user[\"name\"]",
            B: "Only dot notation",
            C: "user->name",
            D: "user::name"
          },
          answer: "A",
          explanation: "Dot notation is cleaner; brackets are required when the key is stored in a variable or is not a valid identifier.",
          code: "console.log(user.name);\nconsole.log(user[\"name\"]);\nconst key = \"name\";\nconsole.log(user[key]);   // dynamic - brackets required",
          related: ["Dot notation", "Bracket notation"]
        },
        {
          difficulty: "medium",
          question: "When MUST you use bracket notation?",
          options: {
            A: "When the key is in a variable, has spaces/hyphens, or starts with a digit",
            B: "Never - dot always works",
            C: "Only for numbers",
            D: "Only inside functions"
          },
          answer: "A",
          explanation: "obj.key looks for the literal key named 'key'; obj[key] uses the variable's value. Keys like \"first name\" or \"data-id\" also need brackets.",
          code: "const obj = { \"first name\": \"Ana\" };\nconsole.log(obj[\"first name\"]);   // brackets required",
          related: ["Bracket notation", "Dynamic keys"]
        },
        {
          difficulty: "easy",
          question: "What happens when you read a property that does not exist?\nconsole.log(user.email);",
          options: { A: "undefined", B: "null", C: "ReferenceError", D: "\"\"" },
          answer: "A",
          explanation: "Missing properties return undefined rather than throwing. But reading a property OF undefined (user.address.city when address is missing) throws a TypeError.",
          related: ["undefined", "Optional chaining"]
        },
        {
          difficulty: "easy",
          question: "How do you ADD a new property to an existing object?",
          options: {
            A: "user.email = \"a@b.com\";",
            B: "user.add(\"email\", \"a@b.com\");",
            C: "user.push({email: \"a@b.com\"});",
            D: "You cannot add properties later"
          },
          answer: "A",
          explanation: "Assigning to a new key creates it; assigning to an existing key updates it. Objects are dynamic - even const objects can gain properties.",
          related: ["Adding properties", "const"]
        },
        {
          difficulty: "medium",
          question: "How do you DELETE a property?",
          options: {
            A: "delete user.age;",
            B: "user.age = null;",
            C: "user.remove(\"age\");",
            D: "user.age.delete();"
          },
          answer: "A",
          explanation: "delete removes the key entirely, so \"age\" in user becomes false. Setting it to null keeps the key with a null value - a meaningful difference when iterating.",
          related: ["delete", "null"]
        },
        {
          difficulty: "medium",
          question: "How do you check whether an object HAS a property?",
          options: {
            A: "\"name\" in user  or  Object.hasOwn(user, \"name\")",
            B: "user.has(\"name\")",
            C: "user.contains(\"name\")",
            D: "user.exists(\"name\")"
          },
          answer: "A",
          explanation: "'in' also finds inherited properties; Object.hasOwn (or hasOwnProperty) checks only the object's own keys. Testing user.name !== undefined fails when the value legitimately IS undefined.",
          code: "console.log(\"name\" in user);\nconsole.log(Object.hasOwn(user, \"name\"));",
          related: ["in operator", "hasOwn"]
        },
        {
          difficulty: "medium",
          question: "What do Object.keys(), Object.values() and Object.entries() return?",
          options: {
            A: "Arrays of keys, of values, and of [key, value] pairs",
            B: "Objects",
            C: "Strings",
            D: "Numbers"
          },
          answer: "A",
          explanation: "They convert an object into arrays so you can use array methods on it - the standard way to iterate or transform objects.",
          code: "const u = { a: 1, b: 2 };\nObject.keys(u);      // [\"a\", \"b\"]\nObject.values(u);    // [1, 2]\nObject.entries(u);   // [[\"a\",1], [\"b\",2]]",
          related: ["Object.keys", "Iteration"]
        },
        {
          difficulty: "medium",
          question: "How do you loop over an object's key/value pairs?",
          options: {
            A: "for (const [k, v] of Object.entries(obj))",
            B: "for (const v of obj)",
            C: "obj.forEach((k, v) => ...)",
            D: "for (const k of obj)"
          },
          answer: "A",
          explanation: "Plain objects are not iterable, so for...of on the object itself throws. Object.entries plus destructuring is the modern approach (for...in also works, giving keys only).",
          related: ["Object.entries", "Destructuring"]
        },
        {
          difficulty: "easy",
          question: "What is a method?",
          options: {
            A: "A function stored as an object property",
            B: "A special kind of variable",
            C: "A loop",
            D: "A class only"
          },
          answer: "A",
          explanation: "When a property's value is a function, it is called a method and can act on the object's own data via this.",
          code: "const user = {\n  name: \"Ana\",\n  greet() { return `Hi, ${this.name}`; }\n};\nconsole.log(user.greet());   // Hi, Ana",
          related: ["Methods", "this"]
        },
        {
          difficulty: "medium",
          question: "What does this refer to inside a regular object method?",
          options: {
            A: "The object the method was called ON (user.greet() means this = user)",
            B: "The global object always",
            C: "The function itself",
            D: "undefined"
          },
          answer: "A",
          explanation: "this is determined by HOW the function is called - the object before the dot. Arrow functions are the exception: they inherit this from the surrounding scope.",
          related: ["this", "Methods"]
        },
        {
          difficulty: "hard",
          question: "Why does this break?\nconst user = { name: \"Ana\", greet: () => `Hi ${this.name}` };",
          options: {
            A: "Arrow functions have no own this - it comes from the outer scope, not the object",
            B: "Template literals cannot use this",
            C: "greet must be called with new",
            D: "It works fine"
          },
          answer: "A",
          explanation: "An arrow function as an object method captures this from where the object was DEFINED (often the module or window), so this.name is undefined. Use shorthand method syntax instead.",
          code: "const user = {\n  name: \"Ana\",\n  greet() { return `Hi ${this.name}`; }   // works\n};",
          related: ["Arrow functions", "this"]
        },
        {
          difficulty: "medium",
          question: "What does object destructuring do?\nconst { name, age } = user;",
          options: {
            A: "Creates variables name and age from the matching properties",
            B: "Deletes the properties",
            C: "Creates an array",
            D: "SyntaxError"
          },
          answer: "A",
          explanation: "Destructuring extracts properties by NAME (order does not matter, unlike arrays). Widely used for function parameters and imports.",
          code: "const { name, age } = user;\nconst { name: userName } = user;      // rename\nconst { city = \"Unknown\" } = user;    // default",
          related: ["Destructuring", "ES6"]
        },
        {
          difficulty: "medium",
          question: "What does the spread operator do with objects?\nconst copy = { ...user };",
          options: {
            A: "Creates a SHALLOW copy with the same properties",
            B: "Creates a deep copy",
            C: "Deletes properties",
            D: "Creates an array"
          },
          answer: "A",
          explanation: "Spread copies top-level properties into a new object. Nested objects are still shared - use structuredClone() for a deep copy.",
          code: "const copy = { ...user };\nconst merged = { ...defaults, ...userSettings };   // later wins",
          related: ["Spread", "Copying"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconst a = { x: { y: 1 } };\nconst b = { ...a };\nb.x.y = 99;\nconsole.log(a.x.y);",
          options: {
            A: "99 - spread is SHALLOW, so the nested object is shared",
            B: "1",
            C: "undefined",
            D: "Error"
          },
          answer: "A",
          explanation: "Only the top level was copied; a.x and b.x point to the same inner object. structuredClone(a) or JSON round-tripping gives a true deep copy.",
          code: "const deep = structuredClone(a);\ndeep.x.y = 99;\nconsole.log(a.x.y);   // 1 - safe",
          related: ["Shallow copy", "structuredClone"]
        },
        {
          difficulty: "medium",
          question: "How do you MERGE two objects?",
          options: {
            A: "{ ...obj1, ...obj2 } or Object.assign({}, obj1, obj2)",
            B: "obj1 + obj2",
            C: "obj1.merge(obj2)",
            D: "obj1.concat(obj2)"
          },
          answer: "A",
          explanation: "Both merge left to right, so later sources overwrite earlier keys. Note Object.assign(obj1, obj2) MUTATES obj1 - pass {} as the first argument to avoid that.",
          code: "const settings = { ...defaults, ...userPrefs };",
          related: ["Spread", "Object.assign"]
        },
        {
          difficulty: "medium",
          question: "What is shorthand property syntax?\nconst name = \"Ana\";\nconst user = { name };",
          options: {
            A: "When the key and variable have the same name, you can write it once - equals { name: name }",
            B: "It creates an empty property",
            C: "SyntaxError",
            D: "It creates a string"
          },
          answer: "A",
          explanation: "ES6 shorthand removes repetition, very common when building objects from existing variables or returning several values.",
          code: "const name = \"Ana\", age = 21;\nconst user = { name, age };   // { name: \"Ana\", age: 21 }",
          related: ["Shorthand", "ES6"]
        },
        {
          difficulty: "medium",
          question: "What are computed property names?\nconst key = \"score\";\nconst obj = { [key]: 100 };",
          options: {
            A: "Square brackets let you use a VARIABLE's value as the key - giving { score: 100 }",
            B: "They create an array property",
            C: "They compute a number",
            D: "SyntaxError"
          },
          answer: "A",
          explanation: "Without brackets the key would literally be \"key\". Computed keys are essential for dynamic objects built from data or form fields.",
          code: "const field = \"email\";\nsetForm({ ...form, [field]: value });   // React pattern",
          related: ["Computed keys", "Dynamic"]
        },
        {
          difficulty: "hard",
          question: "How do you safely read a deeply nested property that might be missing?",
          options: {
            A: "user?.address?.city - optional chaining returns undefined instead of throwing",
            B: "user.address.city",
            C: "user!address!city",
            D: "try { user.address.city } only"
          },
          answer: "A",
          explanation: "Without ?., reading .city on undefined throws 'Cannot read properties of undefined'. Combine with ?? for a default: user?.address?.city ?? \"N/A\".",
          related: ["Optional chaining", "Nullish coalescing"]
        },
        {
          difficulty: "medium",
          question: "What does JSON.stringify(obj) do?",
          options: {
            A: "Converts the object into a JSON STRING for storage or sending",
            B: "Parses a string into an object",
            C: "Copies the object",
            D: "Validates the object"
          },
          answer: "A",
          explanation: "stringify serialises to text (dropping functions and undefined); JSON.parse does the reverse. Essential for localStorage and API requests.",
          code: "localStorage.setItem(\"user\", JSON.stringify(user));\nconst back = JSON.parse(localStorage.getItem(\"user\"));",
          related: ["JSON", "localStorage"]
        },
        {
          difficulty: "hard",
          question: "What is lost when you copy an object via JSON.parse(JSON.stringify(obj))?",
          options: {
            A: "Functions, undefined values, Dates become strings, and Map/Set are destroyed",
            B: "Nothing - it is a perfect copy",
            C: "Only numbers",
            D: "The keys"
          },
          answer: "A",
          explanation: "The JSON round-trip is a quick deep copy but only supports JSON types. structuredClone() handles Dates, Maps, Sets and cycles properly.",
          code: "const deep = structuredClone(obj);   // preferred",
          related: ["Deep copy", "structuredClone"]
        },
        {
          difficulty: "medium",
          question: "What does Object.freeze(obj) do?",
          options: {
            A: "Prevents adding, removing or changing properties (shallowly)",
            B: "Deletes the object",
            C: "Makes it faster",
            D: "Converts it to a string"
          },
          answer: "A",
          explanation: "Frozen objects silently ignore changes (or throw in strict mode). It is shallow - nested objects can still change unless frozen too.",
          code: "const config = Object.freeze({ api: \"/v1\" });\nconfig.api = \"/v2\";        // ignored\nconsole.log(config.api);    // \"/v1\"",
          related: ["Object.freeze", "Immutability"]
        },
        {
          difficulty: "hard",
          question: "Why can you modify a const object's properties?",
          options: {
            A: "const locks the BINDING (the variable cannot point elsewhere), not the object's contents",
            B: "It is a bug",
            C: "const only works for numbers",
            D: "You cannot modify them"
          },
          answer: "A",
          explanation: "const guarantees the variable always refers to the same object; the object itself remains mutable. Use Object.freeze() if you need the contents locked too.",
          code: "const u = { n: 1 };\nu.n = 2;      // allowed\n// u = {};    // TypeError",
          related: ["const", "Mutability"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nconst a = { x: 1 };\nconst b = { x: 1 };\nconsole.log(a === b);",
          options: {
            A: "false - objects compare by REFERENCE, not contents",
            B: "true",
            C: "undefined",
            D: "Error"
          },
          answer: "A",
          explanation: "Two separately created objects are never ===, even with identical contents. Compare contents with JSON.stringify or a per-key check.",
          related: ["Reference equality"]
        },
        {
          difficulty: "medium",
          question: "How do you count an object's properties?",
          options: {
            A: "Object.keys(obj).length",
            B: "obj.length",
            C: "obj.size",
            D: "obj.count()"
          },
          answer: "A",
          explanation: "Objects have no length property (that is arrays). Convert the keys to an array and measure it. (A Map does have .size.)",
          code: "console.log(Object.keys({a:1, b:2}).length);   // 2",
          related: ["Object.keys", "length"]
        },
        {
          difficulty: "hard",
          question: "What is the difference between an Object and a Map?",
          options: {
            A: "Map allows ANY key type, preserves insertion order, has .size, and is optimised for frequent additions/removals",
            B: "They are identical",
            C: "Map only stores numbers",
            D: "Object is newer"
          },
          answer: "A",
          explanation: "Object keys are strings/symbols only; Map keys can be objects, numbers, anything. Use Object for records and JSON; use Map for dictionaries with dynamic or non-string keys.",
          code: "const m = new Map();\nm.set(\"a\", 1);\nm.set(userObj, \"data\");   // object as key!\nconsole.log(m.size, m.get(\"a\"));",
          related: ["Map", "Data structures"]
        },
        {
          difficulty: "medium",
          question: "What does this shorthand do?\nfunction show({ name, age }) { }",
          options: {
            A: "Destructures the parameter object, so callers pass one object and you get named variables",
            B: "Requires two arguments",
            C: "Creates an object",
            D: "SyntaxError"
          },
          answer: "A",
          explanation: "Parameter destructuring makes call sites self-documenting and order-independent - very common in modern APIs and React components.",
          code: "function show({ name, age = 0 }) {\n  console.log(name, age);\n}\nshow({ age: 21, name: \"Ana\" });   // order-free",
          related: ["Destructuring", "Parameters"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconst { a, ...rest } = { a: 1, b: 2, c: 3 };\nconsole.log(rest);",
          options: {
            A: "{ b: 2, c: 3 } - rest collects the remaining properties",
            B: "{ a: 1 }",
            C: "[2, 3]",
            D: "undefined"
          },
          answer: "A",
          explanation: "Rest in destructuring gathers everything not explicitly named - a neat way to remove a property without mutating: const { password, ...safeUser } = user.",
          related: ["Rest", "Destructuring"]
        },
        {
          difficulty: "medium",
          question: "How do you convert an object to an array of values and sum them?",
          options: {
            A: "Object.values(obj).reduce((a, b) => a + b, 0)",
            B: "obj.sum()",
            C: "obj.reduce(...)",
            D: "Object.sum(obj)"
          },
          answer: "A",
          explanation: "Objects have no array methods, so convert first with Object.values() and then use reduce. The same pattern applies with keys and entries.",
          code: "const scores = { math: 90, sci: 80 };\nconsole.log(Object.values(scores).reduce((a,b) => a+b, 0));   // 170",
          related: ["Object.values", "reduce"]
        },
        {
          difficulty: "hard",
          question: "What does optional chaining with a function call do?\nuser.getName?.()",
          options: {
            A: "Calls getName only if it exists - otherwise returns undefined instead of throwing",
            B: "Always calls it",
            C: "Defines the method",
            D: "SyntaxError"
          },
          answer: "A",
          explanation: "?.() guards against 'x is not a function' errors, useful for optional callbacks. Similarly arr?.[0] guards array access.",
          code: "onSuccess?.(data);   // call the callback only if provided",
          related: ["Optional chaining", "Callbacks"]
        }
      ]
    }
  ]
});
