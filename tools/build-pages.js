/* ============================================================
   Velnov - static study page generator
   ------------------------------------------------------------
   The quiz app (index.html) draws everything with JavaScript, so
   search engines and Google AdSense see almost no content on it.
   This script turns the SAME question and formula files into plain
   HTML pages anyone (and any crawler) can read:

     learn/index.html                     all subjects
     learn/<subject>/index.html           topics in a subject
     learn/<subject>/<NN-topic>.html      every question + answer + explanation
                                          (plus a "Topic overview" if data/notes/ has one)
     formulas/index.html                  all formula topics
     formulas/<NN-topic>.html             every formula with uses and examples
     sitemap.xml, robots.txt, ads.txt

   Run it again whenever you add or edit questions:
       node tools/build-pages.js
   No npm install needed - it only uses Node's built-in modules.
   ============================================================ */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const SITE = 'https://velnov.co.in';
const ADSENSE_CLIENT = 'ca-pub-8107155228021093';

// Subjects written for young children (Class 1-5). Their pages carry no ads,
// to stay clear of AdSense's rules for child-directed content.
const NO_AD_SUBJECTS = ['Mathematics', 'English'];

const TODAY = new Date().toISOString().slice(0, 10);

/* ---------- load the data exactly the way index.html does ---------- */
const indexHtml = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const dataFiles = [...indexHtml.matchAll(/<script src="(data\/[^"?]+)/g)].map((m) => m[1]);
const ctx = {};
ctx.window = ctx;
vm.createContext(ctx);
for (const f of dataFiles) vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx, { filename: f });

// Hand-written study notes ("Topic overview"), one file per subject in data/notes/.
// Only this script reads them - index.html does not load them.
const notesDir = path.join(ROOT, 'data', 'notes');
if (fs.existsSync(notesDir)) {
  for (const f of fs.readdirSync(notesDir).filter((x) => x.endsWith('.js')).sort()) {
    vm.runInContext(fs.readFileSync(path.join(notesDir, f), 'utf8'), ctx, { filename: `data/notes/${f}` });
  }
}
const NOTES = ctx.TOPIC_NOTES || {};

// Same merge rules as js/app.js, so subject/topic order (and quiz links) match the app.
const SUBJECTS = (ctx.QUIZ_DATA || []).reduce((out, e) => {
  const s = out.find((x) => x.subject === e.subject);
  if (s) s.topics.push(...e.topics);
  else out.push({ ...e, topics: [...e.topics] });
  return out;
}, []);
const FORMULAS = (ctx.FORMULA_DATA || []).reduce((out, e) => {
  const t = out.find((x) => x.topic === e.topic);
  if (t) t.formulas.push(...e.formulas);
  else out.push({ ...e, formulas: [...e.formulas] });
  return out;
}, []);

/* ---------- helpers ---------- */
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const slug = (s) => String(s).toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const pad = (n) => String(n).padStart(2, '0');
const cleanTopic = (name) => String(name).replace(/^\s*\d+\.\s*/, '');
const plural = (n, w) => `${n} ${w}${n === 1 ? '' : 's'}`;

const subjectSlug = (s) => slug(s.subject);
const topicFile = (t, i) => `${pad(i + 1)}-${slug(cleanTopic(t.name))}.html`;
const formulaFile = (t, i) => `${pad(i + 1)}-${slug(t.topic)}.html`;

const written = [];   // [{ url, file }] for the sitemap
function write(rel, html) {
  const file = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  written.push(rel);
}

/* ---------- page shell ---------- */
// `depth` = how many folders below the site root the page lives (for relative links).
function page({ rel, title, description, body, ads = true, jsonLd }) {
  const up = '../'.repeat(rel.split('/').length - 1);
  const url = SITE + '/' + rel.replace(/index\.html$/, '');
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}" />
  <link rel="canonical" href="${url}" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Velnov" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(description)}" />
  <meta property="og:url" content="${url}" />
  <meta name="google-adsense-account" content="${ADSENSE_CLIENT}" />
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎓</text></svg>" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="${up}css/study.css?v=3" />
${ads ? `  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}" crossorigin="anonymous"></script>\n` : ''}${jsonLd ? `  <script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>\n` : ''}</head>
<body>
  <header class="site-head">
    <div class="wrap head-inner">
      <a class="brand" href="${up}index.html">🎓 Vel<span>nov</span></a>
      <nav aria-label="Main">
        <a href="${up}learn/">Study Notes</a>
        <a href="${up}formulas/">Formulas</a>
        <a href="${up}index.html">Practice Quizzes</a>
      </nav>
    </div>
  </header>
  <main class="wrap">
${body}
  </main>
  <footer class="site-foot">
    <div class="wrap">
      <p>🎓 Velnov — learn any subject, one question at a time.</p>
      <p><a href="${up}about.html">About Velnov</a> · <a href="${up}contact.html">Contact</a> · <a href="${up}privacy.html">Privacy Policy</a> · <a href="${up}terms.html">Terms of Use</a></p>
    </div>
  </footer>
</body>
</html>
`;
}

const crumbs = (items) => `    <nav class="crumbs" aria-label="Breadcrumb">${items.map(([href, label]) => (href ? `<a href="${href}">${esc(label)}</a>` : `<span>${esc(label)}</span>`)).join(' <span aria-hidden="true">›</span> ')}</nav>`;

const breadcrumbLd = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([url, name], i) => ({ '@type': 'ListItem', position: i + 1, name, item: SITE + url })),
});

function difficultyCounts(questions) {
  const c = { easy: 0, medium: 0, hard: 0 };
  questions.forEach((q) => { c[q.difficulty] = (c[q.difficulty] || 0) + 1; });
  return c;
}

/* ---------- one question, written out as study notes ---------- */
function questionHtml(q, n) {
  const opts = Object.entries(q.options || {});
  const notes = (q.notes || []).filter(Boolean);
  const related = (q.related || []).filter(Boolean);
  return `      <article class="q" id="q${n}">
        <p class="q-head"><span class="q-num">Q${n}.</span> <span class="badge badge-${esc(q.difficulty)}">${esc(q.difficulty)}</span></p>
        <p class="q-text">${esc(q.question)}</p>
${q.code ? `        <pre class="code"><code>${esc(q.code)}</code></pre>\n` : ''}        <ol class="opts" type="A">
${opts.map(([k, v]) => `          <li${k === q.answer ? ' class="correct"' : ''}><span class="opt-key">${esc(k)}</span> ${esc(v)}</li>`).join('\n')}
        </ol>
        <div class="ans">
          <p><strong>Answer: ${esc(q.answer)}</strong> — ${esc(q.options?.[q.answer])}</p>
          <p class="expl">${esc(q.explanation)}</p>
${notes.length ? `          <ul class="notes">${notes.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>\n` : ''}${related.length ? `          <p class="tags">${related.map((x) => `<span>${esc(x)}</span>`).join('')}</p>\n` : ''}        </div>
      </article>`;
}

/* ---------- "Topic overview": study notes above the questions ---------- */
// Layout: numbered sections, each a definition followed by examples, then
// misconceptions, quick revision, test-yourself questions and a key takeaway.
// The format is described at the top of data/notes/physics.js.
// **bold** and `inline code` only; everything else is escaped. Code spans are
// set aside first so that a Python `**` inside them is never read as bold.
const fmt = (s) => {
  const codes = [];
  const out = esc(s)
    .replace(/`([^`]+)`/g, (_, c) => `\u0000${codes.push(c) - 1}\u0000`)
    .replace(/\*\*(?=\S)(.+?)(?<=\S)\*\*/g, '<strong>$1</strong>');   // "2 ** 3 ** 2" stays as it is
  return out.replace(/\u0000(\d+)\u0000/g, (_, i) => `<code class="ic">${codes[i]}</code>`);
};
const li = (xs) => xs.filter(Boolean).map((x) => `<li>${fmt(x)}</li>`).join('');

function noteBlock(b) {
  if (typeof b === 'string') return `      <p>${fmt(b)}</p>`;
  if (b.examples) {
    const xs = b.examples.filter(Boolean);
    return xs.length === 1
      ? `      <p class="ov-eg"><strong>Example:</strong> ${fmt(xs[0])}</p>`
      : `      <div class="ov-eg"><p><strong>Examples:</strong></p><ul>${li(xs)}</ul></div>`;
  }
  if (b.list) return `      <ul class="ov-list">${li(b.list)}</ul>`;
  if (b.remember) return `      <p class="ov-remember"><strong>Remember:</strong> ${fmt(b.remember)}</p>`;
  if (b.key) return `      <p class="ov-key">${fmt(b.key)}</p>`;
  if (b.code) return `      <pre class="code"><code>${esc(b.code)}</code></pre>${b.output ? `\n      <pre class="ov-out"><span>Output</span>${esc(b.output)}</pre>` : ''}`;
  if (b.h) return `      <h4>${fmt(b.h)}</h4>\n${(b.blocks || []).map(noteBlock).join('\n')}`;
  throw new Error(`notes: unknown block ${JSON.stringify(b).slice(0, 80)}`);
}

function overviewHtml(n, footnote) {
  const secs = (n.sections || []).map((s) => ({ h: s.h, html: (s.blocks || []).map(noteBlock).join('\n') }));
  if (n.misconceptions?.length) secs.push({ h: 'Common misconceptions', html: `      <table class="ov-table">
        <thead><tr><th scope="col">Misconception</th><th scope="col">Correct understanding</th></tr></thead>
        <tbody>
${n.misconceptions.map(([w, r]) => `          <tr><td>${fmt(w)}</td><td>${fmt(r)}</td></tr>`).join('\n')}
        </tbody>
      </table>` });
  if (n.revision?.length) secs.push({ h: 'Quick revision', html: `      <dl class="terms">
${n.revision.map(([t, d]) => `        <div><dt>${fmt(t)}</dt><dd>${fmt(d)}</dd></div>`).join('\n')}
      </dl>` });
  if (n.questions?.length) secs.push({ h: 'Test your understanding', html: `      <ol class="ov-quiz">
${n.questions.map(([q, a]) => `        <li><p>${fmt(q)}</p><details><summary>Show answer</summary><p>${fmt(a)}</p></details></li>`).join('\n')}
      </ol>` });

  return `    <section class="overview" id="overview">
      <p class="ov-kicker">Topic overview</p>
      <h2>${fmt(n.title || 'Topic overview')}</h2>
${n.intro ? `      <p class="ov-intro">${fmt(n.intro)}</p>\n` : ''}      <nav class="ov-toc" aria-label="In this overview"><strong>In this overview:</strong> ${secs.map((s, i) => `<a href="#ov-${i + 1}">${fmt(s.h)}</a>`).join(' · ')}</nav>
${secs.map((s, i) => `      <h3 id="ov-${i + 1}">${i + 1}. ${fmt(s.h)}</h3>\n${s.html}`).join('\n')}
${n.takeaway ? `      <p class="ov-takeaway"><strong>Key takeaway:</strong> ${fmt(n.takeaway)}</p>\n` : ''}${footnote ? `      <p class="ov-foot">${fmt(footnote)}</p>\n` : ''}    </section>\n`;
}

// Catch notes that point at a subject or topic that does not exist (or has moved).
Object.entries(NOTES).forEach(([subject, sn]) => {
  const s = SUBJECTS.find((x) => x.subject === subject);
  if (!s) return console.warn(`! notes: no subject called "${subject}"`);
  Object.entries(sn.topics || {}).forEach(([num, n]) => {
    const t = s.topics[num - 1];
    if (!t) console.warn(`! notes: ${subject} has no topic ${num}`);
    else if (n.topic && n.topic !== cleanTopic(t.name)) console.warn(`! notes: ${subject} topic ${num} is "${cleanTopic(t.name)}", but the notes are for "${n.topic}"`);
  });
});
let notedTopics = 0;

/* ---------- learn/<subject>/<topic>.html ---------- */
SUBJECTS.forEach((s, si) => {
  const sSlug = subjectSlug(s);
  const ads = !NO_AD_SUBJECTS.includes(s.subject);

  s.topics.forEach((t, ti) => {
    const name = cleanTopic(t.name);
    const rel = `learn/${sSlug}/${topicFile(t, ti)}`;
    const qs = t.questions;
    const dc = difficultyCounts(qs);
    const concepts = [...new Set(qs.flatMap((q) => q.related || []).filter(Boolean))].slice(0, 24);
    const prev = s.topics[ti - 1], next = s.topics[ti + 1];
    const sn = NOTES[s.subject];
    const note = sn?.topics?.[ti + 1];
    const hasNote = !!(note && note.sections && (!note.topic || note.topic === name));
    if (hasNote) notedTopics++;

    const sections = ['easy', 'medium', 'hard'].map((d) => {
      const list = qs.map((q, i) => [q, i + 1]).filter(([q]) => q.difficulty === d);
      if (!list.length) return '';
      const label = { easy: 'Easy', medium: 'Medium', hard: 'Hard' }[d];
      return `    <section>
      <h2 id="${d}">${label} questions (${list.length})</h2>
${list.map(([q, n]) => questionHtml(q, n)).join('\n')}
    </section>`;
    }).join('\n');

    const body = `${crumbs([['../', 'Study Notes'], ['./', s.subject], [null, name]])}
    <header class="page-head">
      <p class="kicker">${esc(s.icon || '📚')} ${esc(s.subject)} · Topic ${ti + 1} of ${s.topics.length}</p>
      <h1>${esc(name)} — ${esc(s.subject)} Questions with Answers</h1>
      <p class="lead">${hasNote
        ? `Start with the study notes on <strong>${esc(name)}</strong> (definitions, examples and a quick revision), then work through ${plural(qs.length, 'practice question')}, each with the correct answer and a clear explanation of why it is right. When you are ready, <a href="../../index.html#quiz-${si}-${ti}">take this topic as an interactive quiz</a> to test yourself.`
        : `${plural(qs.length, 'practice question')} on <strong>${esc(name)}</strong>, each with the correct answer and a clear explanation of why it is right. Read through them as revision notes, or <a href="../../index.html#quiz-${si}-${ti}">take this topic as an interactive quiz</a> to test yourself.`}</p>
      <p class="meta">${dc.easy} easy · ${dc.medium} medium · ${dc.hard} hard · Part of <a href="./">${esc(s.subject)}</a>: ${esc(s.description || '')}</p>
    </header>
${hasNote ? overviewHtml(note, sn.footnote) : ''}${concepts.length ? `    <section class="box">
      <h2>Key concepts in this topic</h2>
      <p class="tags">${concepts.map((c) => `<span>${esc(c)}</span>`).join('')}</p>
    </section>\n` : ''}    <p class="jump">Jump to: ${['easy', 'medium', 'hard'].filter((d) => dc[d]).map((d) => `<a href="#${d}">${d[0].toUpperCase() + d.slice(1)}</a>`).join(' · ')}</p>
${sections}
    <nav class="pager">
      ${prev ? `<a href="${topicFile(prev, ti - 1)}">← ${esc(cleanTopic(prev.name))}</a>` : '<span></span>'}
      ${next ? `<a href="${topicFile(next, ti + 1)}">${esc(cleanTopic(next.name))} →</a>` : '<span></span>'}
    </nav>
    <p class="cta"><a class="btn" href="../../index.html#quiz-${si}-${ti}">Practice “${esc(name)}” as a quiz</a></p>`;

    write(rel, page({
      rel, ads, body,
      title: `${name} – ${s.subject} Questions and Answers with Explanations | Velnov`,
      description: hasNote
        ? `${name} (${s.subject}) study notes with definitions, examples, common misconceptions and quick revision, plus ${qs.length} practice questions with answers and explanations.`
        : `${qs.length} ${s.subject} practice questions on ${name} with answers and detailed explanations — ${dc.easy} easy, ${dc.medium} medium and ${dc.hard} hard.`,
      jsonLd: breadcrumbLd([['/learn/', 'Study Notes'], [`/learn/${sSlug}/`, s.subject], ['/' + rel, name]]),
    }));
  });

  /* learn/<subject>/index.html */
  const total = s.topics.reduce((n, t) => n + t.questions.length, 0);
  const rel = `learn/${sSlug}/index.html`;
  write(rel, page({
    rel, ads: false,
    title: `${s.subject} Study Notes – ${total} Questions with Answers | Velnov`,
    description: `${s.subject}: ${s.description || ''} ${total} practice questions across ${s.topics.length} topics, each with the answer and an explanation.`,
    body: `${crumbs([['../', 'Study Notes'], [null, s.subject]])}
    <header class="page-head">
      <p class="kicker">${esc(s.icon || '📚')} Study Notes</p>
      <h1>${esc(s.subject)}</h1>
      <p class="lead">${esc(s.description || '')} Every topic below has its full set of practice questions written out with the correct answer and an explanation — ${total} questions in all.</p>
    </header>
    <ol class="topic-list">
${s.topics.map((t, ti) => {
      const dc = difficultyCounts(t.questions);
      return `      <li><a href="${topicFile(t, ti)}"><strong>${esc(cleanTopic(t.name))}</strong><span>${plural(t.questions.length, 'question')} · ${dc.easy} easy, ${dc.medium} medium, ${dc.hard} hard</span></a></li>`;
    }).join('\n')}
    </ol>`,
  }));
});

/* ---------- learn/index.html ---------- */
{
  const total = SUBJECTS.reduce((n, s) => n + s.topics.reduce((m, t) => m + t.questions.length, 0), 0);
  const rel = 'learn/index.html';
  write(rel, page({
    rel, ads: false,
    title: 'Study Notes – Practice Questions with Answers and Explanations | Velnov',
    description: `Free study notes: ${total} practice questions with answers and explanations in Python, JavaScript, SQL, Physics, Chemistry, Biology, Indian History, Maths and English.`,
    body: `${crumbs([[null, 'Study Notes']])}
    <header class="page-head">
      <h1>Study Notes</h1>
      <p class="lead">Every Velnov quiz question, written out with its answer and an explanation — ${total} questions across ${SUBJECTS.length} subjects. Read a topic as revision notes, then test yourself with the <a href="../index.html">interactive quizzes</a>.</p>
    </header>
    <div class="subject-grid">
${SUBJECTS.map((s) => {
      const n = s.topics.reduce((m, t) => m + t.questions.length, 0);
      return `      <a class="subject-card" href="${subjectSlug(s)}/" style="--accent:${esc(s.color || '#4f46e5')}"><span class="ico">${esc(s.icon || '📚')}</span><strong>${esc(s.subject)}</strong><span>${esc(s.description || '')}</span><span class="small">${plural(s.topics.length, 'topic')} · ${n} questions</span></a>`;
    }).join('\n')}
    </div>`,
  }));
}

/* ---------- formulas ---------- */
const symbolsTable = (symbols) => (symbols && symbols.length
  ? `<table class="sym"><tbody>${symbols.map(([sym, mean]) => `<tr><th>${esc(sym)}</th><td>${esc(mean)}</td></tr>`).join('')}</tbody></table>`
  : '');

FORMULAS.forEach((t, i) => {
  const rel = `formulas/${formulaFile(t, i)}`;
  const groups = [];
  t.formulas.forEach((f) => {
    const key = f.subtopic || 'General';
    let g = groups.find((x) => x.name === key);
    if (!g) groups.push(g = { name: key, items: [] });
    g.items.push(f);
  });
  const prev = FORMULAS[i - 1], next = FORMULAS[i + 1];
  write(rel, page({
    rel,
    title: `${t.topic} Formulas – with Meaning, Uses and Examples | Velnov`,
    description: `${t.formulas.length} ${t.topic} formulas grouped by sub-topic, each with what the symbols mean, where it is used, a simple explanation and a worked example.`,
    jsonLd: breadcrumbLd([['/formulas/', 'Math Formulas'], ['/' + rel, t.topic]]),
    body: `${crumbs([['./', 'Math Formulas'], [null, t.topic]])}
    <header class="page-head">
      <p class="kicker">${esc(t.icon || '📐')} Math Formulas</p>
      <h1>${esc(t.topic)} Formulas</h1>
      <p class="lead">${plural(t.formulas.length, 'formula')} in ${plural(groups.length, 'section')}. For each one you get the formula, what every symbol means, where it is used, an explanation in plain words and a worked example.</p>
      <p class="jump">Sections: ${groups.map((g) => `<a href="#${slug(g.name)}">${esc(g.name)}</a>`).join(' · ')}</p>
    </header>
${groups.map((g) => `    <section>
      <h2 id="${slug(g.name)}">${esc(g.name)}</h2>
${g.items.map((f) => `      <article class="formula">
        <h3>${esc(f.name)}${f.cls ? ` <span class="badge">${esc(f.cls)}</span>` : ''}</h3>
        <p class="f-eq">${esc(f.formula)}</p>
        ${symbolsTable(f.symbols)}
${f.generalUse ? `        <p><strong>Where it is used:</strong> ${esc(f.generalUse)}</p>\n` : ''}${f.laymanUse ? `        <p><strong>In simple words:</strong> ${esc(f.laymanUse)}</p>\n` : ''}${f.example ? `        <p class="eg"><strong>Example:</strong> <code>${esc(f.example)}</code></p>\n` : ''}      </article>`).join('\n')}
    </section>`).join('\n')}
    <nav class="pager">
      ${prev ? `<a href="${formulaFile(prev, i - 1)}">← ${esc(prev.topic)}</a>` : '<span></span>'}
      ${next ? `<a href="${formulaFile(next, i + 1)}">${esc(next.topic)} →</a>` : '<span></span>'}
    </nav>`,
  }));
});

{
  const total = FORMULAS.reduce((n, t) => n + t.formulas.length, 0);
  const rel = 'formulas/index.html';
  write(rel, page({
    rel, ads: false,
    title: `Math Formulas – ${total} Formulas from Class 1 to 12 Explained | Velnov`,
    description: `${total} maths formulas grouped by topic — arithmetic, algebra, mensuration, geometry, trigonometry, statistics, calculus and more — with meanings, uses and examples.`,
    body: `${crumbs([[null, 'Math Formulas']])}
    <header class="page-head">
      <h1>Math Formulas</h1>
      <p class="lead">${total} formulas from Class 1 to 12, grouped by topic. Each formula comes with what its symbols mean, where it is used, a plain-words explanation and an example. Need to calculate something? Try the <a href="../index.html#calculator">scientific calculator</a>.</p>
    </header>
    <div class="subject-grid">
${FORMULAS.map((t, i) => `      <a class="subject-card" href="${formulaFile(t, i)}" style="--accent:${esc(t.color || '#4f46e5')}"><span class="ico">${esc(t.icon || '📐')}</span><strong>${esc(t.topic)}</strong><span class="small">${plural(t.formulas.length, 'formula')}</span></a>`).join('\n')}
    </div>`,
  }));
}

/* ---------- sitemap.xml, robots.txt, ads.txt ---------- */
const pages = ['', 'about.html', 'contact.html', 'privacy.html', 'terms.html',
  ...written.map((r) => r.replace(/index\.html$/, ''))];
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${SITE}/${p}</loc><lastmod>${TODAY}</lastmod></url>`).join('\n')}
</urlset>
`);
fs.writeFileSync(path.join(ROOT, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /tools/\n\nSitemap: ${SITE}/sitemap.xml\n`);
fs.writeFileSync(path.join(ROOT, 'ads.txt'), `google.com, ${ADSENSE_CLIENT.replace(/^ca-/, '')}, DIRECT, f08c47fec0942fa0\n`);

console.log(`Built ${written.length} pages (${SUBJECTS.length} subjects, ${SUBJECTS.reduce((n, s) => n + s.topics.length, 0)} topics, ${notedTopics} with a topic overview, ${FORMULAS.length} formula topics). sitemap.xml has ${pages.length} URLs.`);
