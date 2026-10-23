/* ============================================================
   Velnov - check the code examples in data/notes/*.js
   ------------------------------------------------------------
   Every { code, output } block is run for real, and its printed
   output must match the `output` text exactly (trailing spaces at
   line ends are ignored, because a web page doesn't show them).
   Code blocks without an `output` are only checked for syntax.

       node tools/check-notes-code.js            check every subject
       node tools/check-notes-code.js Python     check one subject

   Needs Python 3 on the PATH (set PYTHON=... to use another one)
   for Python notes, and Node.js for JavaScript notes.
   No npm install needed - it only uses Node's built-in modules.
   ============================================================ */

const fs = require('fs');
const os = require('os');
const path = require('path');
const vm = require('vm');
const { spawnSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const NOTES_DIR = path.join(ROOT, 'data', 'notes');
const PYTHON = process.env.PYTHON || 'python';

// How to run (and syntax-check) code for each subject.
const RUNNERS = {
  Python: {
    ext: '.py',
    run: (file) => [PYTHON, ['-X', 'utf8', file]],
    check: (file) => [PYTHON, ['-X', 'utf8', '-c', 'import ast,sys; ast.parse(open(sys.argv[1], encoding="utf-8").read())', file]],
  },
  JavaScript: {
    ext: '.js',
    run: (file) => ['node', [file]],
    check: (file) => ['node', ['--check', file]],
  },
};

/* ---------- load the notes the same way the build does ---------- */
const ctx = {};
ctx.window = ctx;
vm.createContext(ctx);
for (const f of fs.readdirSync(NOTES_DIR).filter((x) => x.endsWith('.js')).sort()) {
  vm.runInContext(fs.readFileSync(path.join(NOTES_DIR, f), 'utf8'), ctx, { filename: `data/notes/${f}` });
}
const NOTES = ctx.TOPIC_NOTES || {};

/* ---------- collect every code block ---------- */
function collect(blocks, where, out) {
  for (const b of blocks || []) {
    if (b && typeof b === 'object') {
      if (b.code) out.push({ where, code: b.code, output: b.output });
      if (b.blocks) collect(b.blocks, `${where} › ${b.h}`, out);
    }
  }
  return out;
}

const normalise = (s) => String(s).replace(/\r\n/g, '\n').split('\n').map((l) => l.replace(/\s+$/, '')).join('\n').replace(/\n+$/, '');

const only = process.argv[2];
let ran = 0, checked = 0;
const failures = [];

for (const [subject, sn] of Object.entries(NOTES)) {
  if (only && subject !== only) continue;
  const runner = RUNNERS[subject];
  const blocks = [];
  for (const [num, t] of Object.entries(sn.topics || {})) {
    for (const s of t.sections || []) collect(s.blocks, `${subject} ${num} (${t.topic}) › ${s.h}`, blocks);
  }
  if (!blocks.length) continue;
  if (!runner) { console.warn(`! ${subject}: has code blocks but no runner is set up - skipped`); continue; }

  for (const b of blocks) {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'velnov-notes-'));
    const file = path.join(dir, `example${runner.ext}`);
    fs.writeFileSync(file, b.code);
    const [cmd, args] = b.output !== undefined ? runner.run(file) : runner.check(file);
    const r = spawnSync(cmd, args, { cwd: dir, encoding: 'utf8', timeout: 30000 });
    fs.rmSync(dir, { recursive: true, force: true });

    if (r.error) { failures.push({ ...b, problem: `could not run ${cmd}: ${r.error.message}` }); continue; }
    if (b.output === undefined) {
      checked++;
      if (r.status !== 0) failures.push({ ...b, problem: `syntax error:\n${r.stderr}` });
      continue;
    }
    ran++;
    if (r.status !== 0) { failures.push({ ...b, problem: `exited with code ${r.status}:\n${r.stderr}` }); continue; }
    if (normalise(r.stdout) !== normalise(b.output)) {
      failures.push({ ...b, problem: `output differs.\n--- notes say:\n${normalise(b.output)}\n--- program printed:\n${normalise(r.stdout)}` });
    }
  }
}

for (const f of failures) {
  console.log(`\n✗ ${f.where}\n${f.code.split('\n').map((l) => '    ' + l).join('\n')}\n${f.problem}`);
}
console.log(`\n${ran} examples run, ${checked} syntax-checked, ${failures.length} problem${failures.length === 1 ? '' : 's'}.`);
process.exit(failures.length ? 1 : 0);
