/* ============================================================
   JAVASCRIPT - TOPIC 5: STRINGS & TEMPLATE LITERALS (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "JavaScript",
  icon: "🟨",
  color: "#b8860b",
  description: "The language of the web - basics to advanced, 20 topics.",
  topics: [
    {
      name: "5. Strings & Template Literals",
      questions: [
        {
          difficulty: "easy",
          question: "Which quote styles can create a string in JavaScript?",
          options: {
            A: "Single ' ', double \" \" and backticks ` `",
            B: "Only double quotes",
            C: "Only single quotes",
            D: "Only backticks"
          },
          answer: "A",
          explanation: "Single and double quotes are interchangeable. Backticks create template literals, which additionally support interpolation and multi-line text.",
          code: "const a = 'hi';\nconst b = \"hi\";\nconst c = `hi`;   // template literal",
          related: ["Template literals", "Quotes"]
        },
        {
          difficulty: "easy",
          question: "What is the output?\nconst name = \"Ana\";\nconsole.log(`Hello ${name}!`);",
          options: {
            A: "Hello Ana!",
            B: "Hello ${name}!",
            C: "Hello name!",
            D: "SyntaxError"
          },
          answer: "A",
          explanation: "Inside backticks, ${expression} is evaluated and inserted. This is string interpolation - far more readable than \"Hello \" + name + \"!\".",
          code: "console.log(`Hello ${name}!`);      // Hello Ana!\nconsole.log(\"Hello ${name}!\");     // literal - no interpolation",
          related: ["Template literals", "Interpolation"]
        },
        {
          difficulty: "medium",
          question: "What can go inside ${ } in a template literal?",
          options: {
            A: "Any expression - variables, maths, function calls, even ternaries",
            B: "Only variable names",
            C: "Only strings",
            D: "Only numbers"
          },
          answer: "A",
          explanation: "The braces hold a full expression, evaluated and converted to a string.",
          code: "console.log(`Total: ${price * qty}`);\nconsole.log(`${age >= 18 ? \"adult\" : \"minor\"}`);\nconsole.log(`${user.name.toUpperCase()}`);",
          related: ["Template literals", "Expressions"]
        },
        {
          difficulty: "easy",
          question: "How do you create a MULTI-LINE string most easily?",
          options: {
            A: "Use backticks - line breaks inside are preserved",
            B: "Use \\n in single quotes only",
            C: "Multi-line strings are impossible",
            D: "Use triple quotes"
          },
          answer: "A",
          explanation: "Template literals keep real line breaks, so HTML blocks and long messages stay readable. (\\n still works inside ordinary quotes.)",
          code: "const html = `\n  <div>\n    <p>Hello</p>\n  </div>\n`;",
          related: ["Template literals", "Multi-line"]
        },
        {
          difficulty: "easy",
          question: "What is the output?\nconsole.log(\"hello\".length);",
          options: { A: "5", B: "4", C: "6", D: "undefined" },
          answer: "A",
          explanation: "length is a PROPERTY (no parentheses) giving the number of characters. Note: \"hello\".length() would be a TypeError.",
          related: ["length", "Properties"]
        },
        {
          difficulty: "easy",
          question: "What is the output?\nconsole.log(\"hello\"[0], \"hello\".charAt(1));",
          options: {
            A: "h e - indexing starts at 0",
            B: "e l",
            C: "h h",
            D: "undefined e"
          },
          answer: "A",
          explanation: "Both bracket notation and charAt() read a character by index, counting from 0. Bracket notation returns undefined for out-of-range; charAt returns \"\".",
          related: ["Indexing", "charAt"]
        },
        {
          difficulty: "medium",
          question: "What does \"hello\".at(-1) return?",
          options: {
            A: "\"o\" - at() accepts NEGATIVE indexes counting from the end",
            B: "\"h\"",
            C: "undefined",
            D: "Error"
          },
          answer: "A",
          explanation: "at() (ES2022) supports negative indexes, unlike bracket notation. \"hello\"[-1] gives undefined, but \"hello\".at(-1) gives the last character.",
          code: "console.log(\"hello\".at(-1));   // \"o\"\nconsole.log(\"hello\"[-1]);      // undefined",
          related: ["at()", "Negative index"]
        },
        {
          difficulty: "easy",
          question: "What does \"hello\".toUpperCase() return - and does it change the original?",
          options: {
            A: "\"HELLO\", and the original is unchanged (strings are immutable)",
            B: "\"HELLO\", and the original becomes uppercase too",
            C: "\"hello\"",
            D: "undefined"
          },
          answer: "A",
          explanation: "Every string method returns a NEW string; the original can never be modified. You must capture the result: s = s.toUpperCase().",
          code: "let s = \"hello\";\ns.toUpperCase();       // result discarded!\nconsole.log(s);         // \"hello\"\ns = s.toUpperCase();   // correct\nconsole.log(s);         // \"HELLO\"",
          related: ["Immutability", "String methods"]
        },
        {
          difficulty: "medium",
          question: "What happens?\nlet s = \"hello\";\ns[0] = \"H\";\nconsole.log(s);",
          options: {
            A: "\"hello\" - strings are immutable, so the assignment silently does nothing",
            B: "\"Hello\"",
            C: "TypeError",
            D: "\"H\""
          },
          answer: "A",
          explanation: "You cannot change a character in place. In non-strict mode the assignment is ignored silently; in strict mode it throws. Build a new string instead: \"H\" + s.slice(1).",
          related: ["Immutability", "Strings"]
        },
        {
          difficulty: "medium",
          question: "What does \"javascript\".slice(0, 4) return?",
          options: { A: "\"java\"", B: "\"javas\"", C: "\"script\"", D: "\"jav\"" },
          answer: "A",
          explanation: "slice(start, end) extracts from start UP TO but not including end: indexes 0,1,2,3 give \"java\".",
          code: "const s = \"javascript\";\nconsole.log(s.slice(0, 4));   // \"java\"\nconsole.log(s.slice(4));       // \"script\"\nconsole.log(s.slice(-6));      // \"script\" - from the end",
          related: ["slice", "substring"]
        },
        {
          difficulty: "hard",
          question: "What is the key difference between slice() and substring()?",
          options: {
            A: "slice() accepts NEGATIVE indexes (counting from the end); substring() treats them as 0",
            B: "They are identical",
            C: "substring() is faster",
            D: "slice() only works on arrays"
          },
          answer: "A",
          explanation: "slice(-3) takes the last three characters; substring(-3) behaves like substring(0). substring also swaps its arguments if start > end. Prefer slice.",
          code: "\"hello\".slice(-3);       // \"llo\"\n\"hello\".substring(-3);   // \"hello\" (treated as 0)",
          related: ["slice", "substring"]
        },
        {
          difficulty: "easy",
          question: "Which method checks whether a string CONTAINS another string?",
          options: {
            A: "includes()",
            B: "contains()",
            C: "has()",
            D: "find()"
          },
          answer: "A",
          explanation: "\"hello world\".includes(\"world\") returns true/false. Related: startsWith(), endsWith(), and indexOf() (which returns a position or -1).",
          code: "const s = \"hello world\";\nconsole.log(s.includes(\"world\"));     // true\nconsole.log(s.startsWith(\"hello\"));   // true\nconsole.log(s.endsWith(\".js\"));       // false",
          related: ["includes", "indexOf"]
        },
        {
          difficulty: "medium",
          question: "What does \"hello\".indexOf(\"z\") return?",
          options: {
            A: "-1 - the standard 'not found' result",
            B: "0",
            C: "undefined",
            D: "null"
          },
          answer: "A",
          explanation: "indexOf returns the first position of the substring, or -1 when absent. Older code tests 'if (s.indexOf(x) !== -1)'; modern code uses includes().",
          related: ["indexOf", "includes"]
        },
        {
          difficulty: "easy",
          question: "What does \"  hi  \".trim() return?",
          options: { A: "\"hi\"", B: "\"  hi\"", C: "\"hi  \"", D: "\"h i\"" },
          answer: "A",
          explanation: "trim() removes whitespace from BOTH ends (not the middle). Always trim user input from forms. trimStart() and trimEnd() handle one side.",
          code: "const input = \"  ana@mail.com  \";\nconst clean = input.trim();",
          related: ["trim", "Input validation"]
        },
        {
          difficulty: "medium",
          question: "What does \"a,b,c\".split(\",\") return?",
          options: {
            A: "The array [\"a\", \"b\", \"c\"]",
            B: "The string \"abc\"",
            C: "[\"a,b,c\"]",
            D: "undefined"
          },
          answer: "A",
          explanation: "split(separator) breaks a string into an ARRAY. split(\"\") splits into individual characters. The reverse operation is array.join(separator).",
          code: "\"a,b,c\".split(\",\");    // [\"a\",\"b\",\"c\"]\n\"abc\".split(\"\");        // [\"a\",\"b\",\"c\"]\n[\"a\",\"b\"].join(\"-\");    // \"a-b\"",
          related: ["split", "join"]
        },
        {
          difficulty: "medium",
          question: "What does \"banana\".replace(\"a\", \"o\") return?",
          options: {
            A: "\"bonana\" - replace() changes only the FIRST match",
            B: "\"bonono\"",
            C: "\"banana\"",
            D: "\"bonan\""
          },
          answer: "A",
          explanation: "replace() with a string replaces one occurrence. Use replaceAll() (ES2021) or a global regex /a/g to replace every match.",
          code: "\"banana\".replace(\"a\", \"o\");      // \"bonana\"\n\"banana\".replaceAll(\"a\", \"o\");   // \"bonono\"\n\"banana\".replace(/a/g, \"o\");     // \"bonono\"",
          related: ["replace", "replaceAll", "Regex"]
        },
        {
          difficulty: "easy",
          question: "How do you join two strings?",
          options: {
            A: "With + or a template literal",
            B: "With & only",
            C: "With .concat() only",
            D: "With , "
          },
          answer: "A",
          explanation: "+ concatenates, and template literals are the modern readable choice. concat() exists but is rarely used.",
          code: "const full = first + \" \" + last;\nconst full2 = `${first} ${last}`;   // preferred",
          related: ["Concatenation", "Template literals"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nconsole.log(\"5\" + 5, 5 + 5);",
          options: {
            A: "\"55\" 10",
            B: "10 10",
            C: "\"55\" \"55\"",
            D: "NaN 10"
          },
          answer: "A",
          explanation: "With a string operand, + concatenates (\"55\"); with two numbers it adds (10). Always convert form input with Number() before doing maths.",
          related: ["Coercion", "Concatenation"]
        },
        {
          difficulty: "medium",
          question: "What does \"abc\".repeat(3) return?",
          options: { A: "\"abcabcabc\"", B: "\"abc3\"", C: "[\"abc\",\"abc\",\"abc\"]", D: "Error" },
          answer: "A",
          explanation: "repeat(n) returns the string repeated n times - useful for separators and simple patterns.",
          code: "console.log(\"-\".repeat(20));   // --------------------",
          related: ["repeat"]
        },
        {
          difficulty: "medium",
          question: "What does \"5\".padStart(3, \"0\") return?",
          options: {
            A: "\"005\" - pads the start until the string reaches length 3",
            B: "\"500\"",
            C: "\"5\"",
            D: "\"0005\""
          },
          answer: "A",
          explanation: "padStart/padEnd fill a string to a target length. Perfect for clock digits and invoice numbers.",
          code: "const mins = \"7\".padStart(2, \"0\");   // \"07\"\nconsole.log(`10:${mins}`);            // 10:07",
          related: ["padStart", "Formatting"]
        },
        {
          difficulty: "hard",
          question: "How do you REVERSE a string in JavaScript?",
          options: {
            A: "s.split(\"\").reverse().join(\"\") - strings have no reverse() method",
            B: "s.reverse()",
            C: "s[::-1]",
            D: "reverse(s)"
          },
          answer: "A",
          explanation: "reverse() is an ARRAY method, so convert to an array, reverse, and join back. ([...s].reverse().join(\"\") also works.)",
          code: "const s = \"hello\";\nconsole.log(s.split(\"\").reverse().join(\"\"));   // \"olleh\"",
          related: ["split", "reverse", "join"]
        },
        {
          difficulty: "medium",
          question: "How do you compare two strings ignoring case?",
          options: {
            A: "Convert both with toLowerCase() then compare with ===",
            B: "Use == which ignores case",
            C: "Use compareIgnoreCase()",
            D: "Strings cannot be compared"
          },
          answer: "A",
          explanation: "JavaScript comparison is always case-sensitive; normalise first. (For international text, a.localeCompare(b, undefined, {sensitivity:'base'}) is more correct.)",
          code: "if (input.toLowerCase() === \"yes\") { }   // accepts YES, Yes, yes",
          related: ["toLowerCase", "Comparison"]
        },
        {
          difficulty: "medium",
          question: "What is the output?\nconsole.log(\"apple\" < \"banana\");",
          options: {
            A: "true - strings compare alphabetically by character code",
            B: "false",
            C: "NaN",
            D: "Error"
          },
          answer: "A",
          explanation: "Comparison walks character by character using Unicode values. Note all UPPERCASE letters come before lowercase, so \"Zoo\" < \"apple\" is true.",
          related: ["String comparison", "Unicode"]
        },
        {
          difficulty: "medium",
          question: "How do you insert a quote inside a string?\nShe said \"hi\"",
          options: {
            A: "Escape it with \\\" or wrap the string in the other quote type",
            B: "It is impossible",
            C: "Use two quotes \"\"hi\"\"",
            D: "Use a comma"
          },
          answer: "A",
          explanation: "Either escape the quote with a backslash or use different outer quotes. Backticks avoid the problem entirely.",
          code: "'She said \"hi\"';\n\"She said \\\"hi\\\"\";\n`She said \"hi\"`;",
          related: ["Escaping", "Quotes"]
        },
        {
          difficulty: "medium",
          question: "What does the escape sequence \\n produce?",
          options: { A: "A new line", B: "A literal backslash-n", C: "A tab", D: "Nothing" },
          answer: "A",
          explanation: "\\n is a newline, \\t a tab, \\\\ a literal backslash, \\\" an escaped quote. Inside template literals you can simply press Enter instead.",
          related: ["Escape sequences"]
        },
        {
          difficulty: "hard",
          question: "What is the output?\nconsole.log(\"hello\".split(\"\").map(c => c.toUpperCase()).join(\"\"));",
          options: {
            A: "\"HELLO\"",
            B: "[\"H\",\"E\",\"L\",\"L\",\"O\"]",
            C: "\"hello\"",
            D: "Error"
          },
          answer: "A",
          explanation: "Split into characters, transform each with map, then join back into a string. (toUpperCase() alone does the same here, but this chain pattern generalises to any per-character transformation.)",
          related: ["Method chaining", "map"]
        },
        {
          difficulty: "medium",
          question: "What does the ${} syntax do OUTSIDE backticks?\nconsole.log(\"Hi ${name}\");",
          options: {
            A: "Nothing special - it prints literally as Hi ${name}",
            B: "It still interpolates",
            C: "SyntaxError",
            D: "It prints undefined"
          },
          answer: "A",
          explanation: "Interpolation only works inside backticks. Forgetting to switch from quotes to backticks is a very common beginner mistake.",
          related: ["Template literals", "Common mistakes"]
        },
        {
          difficulty: "hard",
          question: "What is a tagged template literal?\ntag`Hello ${name}`",
          options: {
            A: "A function call where the function receives the string pieces and the interpolated values separately",
            B: "An HTML tag",
            C: "A comment style",
            D: "Invalid syntax"
          },
          answer: "A",
          explanation: "Placing a function name before a template literal calls it with (stringsArray, ...values), letting you post-process the result. Libraries use it for styled-components, escaping HTML and internationalisation.",
          code: "function upper(strings, ...values) {\n  return strings.reduce((out, s, i) =>\n    out + s + (values[i] ? String(values[i]).toUpperCase() : \"\"), \"\");\n}\nconsole.log(upper`hi ${\"ana\"}`);   // \"hi ANA\"",
          related: ["Tagged templates", "Advanced"]
        },
        {
          difficulty: "medium",
          question: "How do you convert a number to a string?",
          options: {
            A: "String(n), n.toString(), or `${n}`",
            B: "n.toText()",
            C: "(string) n",
            D: "n + 0"
          },
          answer: "A",
          explanation: "All three work. toString() also accepts a radix: (255).toString(16) gives \"ff\". Note String(null) works but null.toString() throws.",
          code: "String(42);           // \"42\"\n(42).toString();       // \"42\"\n(255).toString(16);    // \"ff\"",
          related: ["toString", "Conversion"]
        },
        {
          difficulty: "hard",
          question: "What does \"cafe\\u0301\".length reveal about string length?",
          options: {
            A: "length counts CODE UNITS, so combined characters and emoji can count as more than one",
            B: "length always equals the visible characters",
            C: "length is always 4",
            D: "Unicode is not supported"
          },
          answer: "A",
          explanation: "JavaScript strings are UTF-16 code units. Accented characters built from combining marks, and emoji (which use surrogate pairs), report a length larger than what the eye sees. [...str].length handles emoji better.",
          code: "console.log(\"😀\".length);        // 2 - surrogate pair!\nconsole.log([...\"😀\"].length);   // 1",
          related: ["Unicode", "UTF-16", "Emoji"]
        }
      ]
    }
  ]
});
