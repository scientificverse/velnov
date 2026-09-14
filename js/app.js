/* ============================================================
   Velnov - simple quiz app
   All questions come from the files in the data/ folder.
   No server, no database - just open index.html.
   ============================================================ */

var QUIZ_DATA = window.QUIZ_DATA || []; // filled by the data/*.js files

/* Merge entries that share the same subject name, so one big subject
   (e.g. Python) can be split across many small files - one per topic.
   The first file loaded provides the icon/color/description. */
QUIZ_DATA = QUIZ_DATA.reduce(function (merged, entry) {
  const existing = merged.find(function (s) { return s.subject === entry.subject; });
  if (existing) existing.topics.push(...entry.topics);
  else merged.push(entry);
  return merged;
}, []);

/* Formula reference data — filled by data/formulas/*.js. Merge by topic name,
   so one topic (e.g. Mensuration) can be split across files. */
var FORMULA_DATA = window.FORMULA_DATA || [];
FORMULA_DATA = FORMULA_DATA.reduce(function (merged, entry) {
  const existing = merged.find(function (t) { return t.topic === entry.topic; });
  if (existing) existing.formulas.push(...entry.formulas);
  else merged.push(entry);
  return merged;
}, []);

const QUESTIONS_PER_QUIZ = 10; // max questions per quiz round

const app = document.getElementById('app');

/* ------------------------------------------------------------
   Small helpers
   ------------------------------------------------------------ */

/** Escape text so question content can safely contain < > & etc. */
function esc(text) {
  return String(text ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

/** Shuffle a copy of an array (Fisher-Yates). */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return m + ':' + String(s).padStart(2, '0');
}

function countQuestions(subject) {
  return subject.topics.reduce((sum, t) => sum + t.questions.length, 0);
}

/* ------------------------------------------------------------
   Dark / light mode (remembered in localStorage)
   ------------------------------------------------------------ */





// show current progress in the trophy popover on load
if (typeof updateTrackStats === 'function') updateTrackStats();

/* ------------------------------------------------------------
   Score history (saved in the browser via localStorage)
   ------------------------------------------------------------ */

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem('learnhub_history')) || [];
  } catch {
    return [];
  }
}

function saveResult(entry) {
  const history = getHistory();
  history.unshift(entry);          // newest first
  history.length = Math.min(history.length, 20); // keep last 20
  localStorage.setItem('learnhub_history', JSON.stringify(history));

  // lifetime counter (stays accurate beyond the 20-entry history cap)
  const s = getRawStats();
  s.count += 1;
  s.sumPct += (entry.pct || 0);
  localStorage.setItem('learnhub_stats', JSON.stringify(s));
  updateTrackStats();
}

/* ------------------------------------------------------------
   Lightweight progress (trophy popover): quizzes taken + avg %
   ------------------------------------------------------------ */

function getRawStats() {
  try {
    const s = JSON.parse(localStorage.getItem('learnhub_stats'));
    if (s && typeof s.count === 'number') return s;
  } catch { /* fall through */ }
  return { count: 0, sumPct: 0 };
}

function getStats() {
  const s = getRawStats();
  return { count: s.count, avg: s.count ? Math.round(s.sumPct / s.count) : 0 };
}

function updateTrackStats() {
  const el = document.getElementById('trackStats');
  if (!el) return;
  const { count, avg } = getStats();
  el.textContent = count
    ? count + (count === 1 ? ' quiz taken · avg ' : ' quizzes taken · avg ') + avg + '%'
    : 'No quizzes yet — take one!';
}

let _trackDocHandler = null;
function toggleTrackPop(e) {
  if (e) e.stopPropagation();
  const track = document.getElementById('track');
  if (!track) return;
  const open = track.classList.toggle('open');
  updateTrackStats();
  if (open && !_trackDocHandler) {
    _trackDocHandler = function () { closeTrackPop(); };
    // defer so this same click doesn't immediately close it
    setTimeout(function () { document.addEventListener('click', _trackDocHandler); }, 0);
  }
}
function closeTrackPop() {
  const track = document.getElementById('track');
  if (track) track.classList.remove('open');
  if (_trackDocHandler) {
    document.removeEventListener('click', _trackDocHandler);
    _trackDocHandler = null;
  }
}

/* ------------------------------------------------------------
   State + views
   ------------------------------------------------------------ */

let state = {
  subjectIndex: null,   // which subject is open
  difficulty: 'all',    // difficulty filter on the subject page
  quiz: null            // active quiz (see startQuiz)
};

/* ---------------- HOME ---------------- */

function goHome() {
  stopTimer();
  state.subjectIndex = null;
  state.quiz = null;

  const history = getHistory().slice(0, 5);

  app.innerHTML = `
    <section class="hero fade-in">
      <h1>Learn anything, <span class="text-gradient">one question at a time</span></h1>
      <p>Pick a subject, take a quiz, and read the detailed solution for every question.</p>
      <div class="search-bar">
        <input type="search" id="searchBox" placeholder="Search subjects... e.g. Python, History"
               oninput="filterSubjects(this.value)" />
      </div>
    </section>

    <h2 class="section-title">Subjects</h2>
    <div class="grid" id="subjectGrid">${subjectCardsHtml('')}</div>

    ${history.length ? `
      <h2 class="section-title">Your Recent Results</h2>
      <div class="card">
        <table class="history-table">
          <thead><tr><th>Date</th><th>Quiz</th><th>Score</th><th>Time</th></tr></thead>
          <tbody>
            ${history.map((h) => `
              <tr>
                <td>${esc(h.date)}</td>
                <td>${esc(h.subject)} · ${esc(h.topic)}</td>
                <td><span class="badge ${h.pct >= 70 ? 'badge-easy' : h.pct >= 40 ? 'badge-medium' : 'badge-hard'}">
                  ${h.score}/${h.total} · ${h.pct}%</span></td>
                <td>${formatTime(h.time)}</td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>` : ''}
  `;
  window.scrollTo(0, 0);
}

function subjectCardsHtml(searchText) {
  const query = searchText.trim().toLowerCase();
  const matches = QUIZ_DATA
    .map((s, i) => ({ s, i }))
    .filter(({ s }) => !query || s.subject.toLowerCase().includes(query));

  if (!matches.length) return '<p class="muted">No subjects match your search.</p>';

  return matches.map(({ s, i }) => `
    <button class="card subject-card" style="--accent:${esc(s.color)}" onclick="openSubject(${i})">
      <span class="subject-icon">${esc(s.icon)}</span>
      <h3>${esc(s.subject)}</h3>
      <span class="muted small">${esc(s.description)}</span>
      <span class="card-meta">${s.topics.length} topics · ${countQuestions(s)} questions</span>
    </button>`).join('');
}

function filterSubjects(text) {
  document.getElementById('subjectGrid').innerHTML = subjectCardsHtml(text);
}

/* ---------------- SUBJECT (topic list) ---------------- */

function openSubject(index) {
  state.subjectIndex = index;
  state.difficulty = 'all';
  renderSubject();
}

function setDifficulty(level) {
  state.difficulty = level;
  renderSubject();
}

function renderSubject() {
  const subject = QUIZ_DATA[state.subjectIndex];
  const levels = ['all', 'easy', 'medium', 'hard'];

  const rows = subject.topics.map((topic, tIndex) => {
    const available = topic.questions.filter(
      (q) => state.difficulty === 'all' || q.difficulty === state.difficulty
    ).length;
    return `
      <div class="card topic-row fade-in">
        <div>
          <h3>${esc(topic.name)}</h3>
          <span class="muted small">${available} question${available === 1 ? '' : 's'}
            ${state.difficulty !== 'all' ? '(' + esc(state.difficulty) + ')' : ''}</span>
        </div>
        ${available > 0
          ? `<button class="btn btn-primary" onclick="startQuiz(${state.subjectIndex}, ${tIndex})">Start Quiz</button>`
          : '<span class="muted small">No questions at this level</span>'}
      </div>`;
  }).join('');

  app.innerHTML = `
    <span class="back-link" onclick="goHome()">← All subjects</span>
    <div class="page-head">
      <span class="subject-icon">${esc(subject.icon)}</span>
      <div>
        <h1>${esc(subject.subject)}</h1>
        <p class="muted">${esc(subject.description)}</p>
      </div>
    </div>

    <div class="chips">
      <span class="muted small">Difficulty:</span>
      ${levels.map((l) => `
        <button class="chip ${state.difficulty === l ? 'chip-active' : ''}"
                onclick="setDifficulty('${l}')">${l[0].toUpperCase() + l.slice(1)}</button>`).join('')}
    </div>

    ${rows}
  `;
  window.scrollTo(0, 0);
}

/* ---------------- QUIZ ---------------- */

let timerId = null;

function stopTimer() {
  if (timerId) { clearInterval(timerId); timerId = null; }
}

function startQuiz(subjectIndex, topicIndex) {
  const subject = QUIZ_DATA[subjectIndex];
  const topic = subject.topics[topicIndex];

  // filter by chosen difficulty, shuffle, and take up to 10
  const pool = topic.questions.filter(
    (q) => state.difficulty === 'all' || q.difficulty === state.difficulty
  );
  const questions = shuffle(pool).slice(0, QUESTIONS_PER_QUIZ);

  state.quiz = {
    subjectIndex,
    topicIndex,
    questions,
    index: 0,          // current question number
    selected: null,    // 'A' | 'B' | 'C' | 'D'
    answered: false,   // was Submit / Show Solution pressed?
    revealed: false,   // was the solution shown without answering?
    records: [],       // one entry per finished question (for the result page)
    startTime: Date.now()
  };

  stopTimer();
  timerId = setInterval(function () {
    const el = document.getElementById('quizTimer');
    if (el) el.textContent = '⏱ ' + formatTime(Math.floor((Date.now() - state.quiz.startTime) / 1000));
  }, 1000);

  renderQuestion();
}

function renderQuestion() {
  const quiz = state.quiz;
  const subject = QUIZ_DATA[quiz.subjectIndex];
  const topic = subject.topics[quiz.topicIndex];
  const q = quiz.questions[quiz.index];
  const total = quiz.questions.length;
  const progress = ((quiz.index + (quiz.answered ? 1 : 0)) / total) * 100;

  const optionsHtml = ['A', 'B', 'C', 'D'].map((key) => {
    let cls = 'option';
    if (!quiz.answered) {
      if (quiz.selected === key) cls += ' selected';
    } else {
      if (key === q.answer) cls += ' correct';
      else if (key === quiz.selected) cls += ' wrong';
      else cls += ' faded';
    }
    return `
      <button class="${cls}" onclick="selectOption('${key}')" ${quiz.answered ? 'disabled' : ''}>
        <span class="option-key">${key}</span>
        <span>${esc(q.options[key])}</span>
      </button>`;
  }).join('');

  app.innerHTML = `
    <span class="back-link" onclick="renderSubject()">← ${esc(subject.subject)} topics</span>

    <div class="quiz-top">
      <div>
        <h1>${esc(topic.name)}</h1>
        <span class="muted small">${esc(subject.subject)}</span>
      </div>
      <div>
        <span class="badge" id="quizTimer">⏱ ${formatTime(Math.floor((Date.now() - quiz.startTime) / 1000))}</span>
        <span class="badge">Question ${quiz.index + 1} / ${total}</span>
      </div>
    </div>
    <div class="progress-track"><div class="progress-fill" style="width:${progress}%"></div></div>

    <div class="card fade-in">
      <span class="badge badge-${esc(q.difficulty)}">${esc(q.difficulty)}</span>
      <p class="question-text">${esc(q.question)}</p>
      ${optionsHtml}
      <div class="quiz-actions">
        <button class="btn btn-primary" onclick="submitAnswer()"
                ${(!quiz.selected || quiz.answered) ? 'disabled' : ''}>Submit Answer</button>
        <button class="btn btn-outline" onclick="showSolution()"
                ${quiz.answered ? 'disabled' : ''}>Show Solution</button>
        <button class="btn btn-secondary" onclick="nextQuestion()">
          ${quiz.index + 1 < total ? 'Next Question →' : 'Finish Quiz'}</button>
      </div>
      ${quiz.answered && quiz.revealed
        ? '<p class="muted small" style="margin-top:0.6rem">Solution revealed — this counts as unanswered.</p>' : ''}
    </div>

    <div id="solutionBox">${quiz.answered ? solutionHtml(q, quiz.selected) : ''}</div>
  `;
  window.scrollTo(0, 0);
}

function selectOption(key) {
  if (state.quiz.answered) return;
  state.quiz.selected = key;
  renderQuestion();
}

function submitAnswer() {
  const quiz = state.quiz;
  if (!quiz.selected || quiz.answered) return;
  quiz.answered = true;

  const q = quiz.questions[quiz.index];
  quiz.records.push({
    question: q,
    selected: quiz.selected,
    isCorrect: quiz.selected === q.answer
  });
  renderQuestion();
}

function showSolution() {
  const quiz = state.quiz;
  if (quiz.answered) return;
  quiz.answered = true;
  quiz.revealed = true;
  quiz.selected = null; // counts as unanswered

  const q = quiz.questions[quiz.index];
  quiz.records.push({ question: q, selected: null, isCorrect: false });
  renderQuestion();
}

function nextQuestion() {
  const quiz = state.quiz;

  // Skipping without submitting = unanswered
  if (!quiz.answered) {
    quiz.records.push({ question: quiz.questions[quiz.index], selected: null, isCorrect: false });
  }

  if (quiz.index + 1 < quiz.questions.length) {
    quiz.index++;
    quiz.selected = null;
    quiz.answered = false;
    quiz.revealed = false;
    renderQuestion();
  } else {
    finishQuiz();
  }
}

/* ---------------- SOLUTION panel ---------------- */

function solutionHtml(q, selected) {
  let verdict;
  if (selected === null) verdict = '<span class="verdict neutral">👁️ Solution</span>';
  else if (selected === q.answer) verdict = '<span class="verdict ok">✅ Correct! Well done.</span>';
  else verdict = '<span class="verdict no">❌ Not quite — see why below.</span>';

  return `
    <div class="card solution">
      ${verdict}
      <p style="margin-top:0.5rem"><b>Correct answer: Option ${esc(q.answer)}</b> — ${esc(q.options[q.answer])}</p>
      <h4>Explanation</h4>
      <p class="solution-text">${esc(q.explanation)}</p>
      ${q.code ? `<h4>Example Code</h4><pre class="code">${esc(q.code)}</pre>` : ''}
      ${q.notes && q.notes.length ? `
        <h4>Important Notes</h4>
        <ul class="notes">${q.notes.map((n) => `<li>${esc(n)}</li>`).join('')}</ul>` : ''}
      ${q.related && q.related.length ? `
        <h4>Related Concepts</h4>
        <div class="tag-row">${q.related.map((r) => `<span class="chip">${esc(r)}</span>`).join('')}</div>` : ''}
      ${q.reference ? `<p class="muted small" style="margin-top:0.7rem">📎 Reference: ${esc(q.reference)}</p>` : ''}
    </div>`;
}

/* ---------------- RESULT ---------------- */

function finishQuiz() {
  stopTimer();
  const quiz = state.quiz;
  const subject = QUIZ_DATA[quiz.subjectIndex];
  const topic = subject.topics[quiz.topicIndex];

  const total = quiz.records.length;
  const correct = quiz.records.filter((r) => r.isCorrect).length;
  const wrong = total - correct;
  const pct = total ? Math.round((correct / total) * 100) : 0;
  const time = Math.floor((Date.now() - quiz.startTime) / 1000);

  saveResult({
    date: new Date().toLocaleDateString(),
    subject: subject.subject,
    topic: topic.name,
    score: correct,
    total,
    pct,
    time
  });

  const message =
    pct >= 90 ? 'Outstanding! 🌟' :
    pct >= 70 ? 'Great job! 🎉' :
    pct >= 50 ? 'Good effort — keep practicing! 💪' :
    'Keep going — review the solutions and try again! 📚';

  const wrongOnes = quiz.records.filter((r) => !r.isCorrect);

  app.innerHTML = `
    <div class="card result-card">
      <h1>Quiz Complete!</h1>
      <p class="muted">${esc(subject.subject)} · ${esc(topic.name)}</p>
      <div class="result-ring" style="--pct:${pct}"><span>${pct}%</span></div>
      <p><b>${esc(message)}</b></p>
      <div class="result-stats">
        <div class="stat"><b>${total}</b><span class="muted small">Questions</span></div>
        <div class="stat"><b class="good">${correct}</b><span class="muted small">Correct</span></div>
        <div class="stat"><b class="bad">${wrong}</b><span class="muted small">Wrong / Skipped</span></div>
        <div class="stat"><b>${formatTime(time)}</b><span class="muted small">Time Taken</span></div>
      </div>
      <div class="quiz-actions center">
        <button class="btn btn-primary" onclick="startQuiz(${quiz.subjectIndex}, ${quiz.topicIndex})">🔄 Retry Quiz</button>
        ${wrongOnes.length ? `<button class="btn btn-secondary" onclick="toggleReview()">📋 Review Wrong Answers (${wrongOnes.length})</button>` : ''}
        <button class="btn btn-outline" onclick="renderSubject()">More Topics</button>
        <button class="btn btn-outline" onclick="goHome()">🏠 Home</button>
      </div>
    </div>
    <div id="reviewBlock" class="review-block" style="display:none">
      <h2 class="section-title">Review</h2>
      ${wrongOnes.map((r) => `
        <div class="card">
          <p class="question-text">${esc(r.question.question)}</p>
          <p class="muted">Your answer:
            ${r.selected ? esc(r.selected) + ' — ' + esc(r.question.options[r.selected]) : 'Not answered'}</p>
        </div>
        ${solutionHtml(r.question, r.selected)}`).join('')}
    </div>
  `;
  window.scrollTo(0, 0);
}

function toggleReview() {
  const block = document.getElementById('reviewBlock');
  block.style.display = block.style.display === 'none' ? 'block' : 'none';
}

/* ============================================================
   SIDEBAR VIEW ROUTER  (Quizzes / Formulas / Calculator)
   ============================================================ */

let currentView = 'quizzes';

function showView(view) {
  currentView = view;
  document.querySelectorAll('.side-link').forEach(function (b) {
    b.classList.toggle('active', b.dataset.view === view);
  });
  stopTimer();
  if (view === 'quizzes') goHome();
  else if (view === 'formulas') formulasHome();
  else if (view === 'calculator') renderCalculator();
}

/* Mobile sidebar (hamburger) open/close */
function toggleSidebar() { document.body.classList.toggle('sidebar-open'); }
function closeSidebar() { document.body.classList.remove('sidebar-open'); }

/* ============================================================
   MATH FORMULAS  (read-and-learn reference, grouped by topic)
   ============================================================ */

let formulaTopicIndex = 0;

function formulasHome() {
  const total = FORMULA_DATA.reduce((n, t) => n + t.formulas.length, 0);
  app.innerHTML = `
    <section class="hero fade-in">
      <h1>Math <span class="text-gradient">Formulas</span></h1>
      <p>Every formula from Class 1 to 12, grouped by topic — with where it is used and a simple explanation.</p>
      <div class="search-bar">
        <input type="search" id="fSearch" placeholder="Search a formula... e.g. area, speed, interest"
               oninput="filterFormulas(this.value)" />
      </div>
    </section>

    <h2 class="section-title">Topics <span class="muted small">· ${total} formulas</span></h2>
    <div class="grid" id="formulaTopicGrid">${formulaTopicCards()}</div>
    <div id="formulaSearchResults"></div>
  `;
  window.scrollTo(0, 0);
}

function formulaTopicCards() {
  if (!FORMULA_DATA.length) return '<p class="muted">No formula files loaded yet.</p>';
  return FORMULA_DATA.map((t, i) => `
    <button class="card formula-topic-card" style="--accent:${esc(t.color || '#4f46e5')}"
            onclick="openFormulaTopic(${i})">
      <span class="subject-icon">${esc(t.icon || '📐')}</span>
      <h3>${esc(t.topic)}</h3>
      <span class="card-meta">${t.formulas.length} formulas</span>
    </button>`).join('');
}

function filterFormulas(text) {
  const q = text.trim().toLowerCase();
  const grid = document.getElementById('formulaTopicGrid');
  const res = document.getElementById('formulaSearchResults');
  if (!grid || !res) return;
  if (!q) { grid.style.display = ''; res.innerHTML = ''; return; }
  grid.style.display = 'none';

  const matches = [];
  FORMULA_DATA.forEach((t) => t.formulas.forEach((f) => {
    const hay = (f.name + ' ' + (f.subtopic || '') + ' ' + t.topic + ' ' + (f.formula || '')).toLowerCase();
    if (hay.includes(q)) matches.push(f);
  }));

  res.innerHTML = matches.length
    ? `<h2 class="section-title">Results · ${matches.length}</h2>${matches.map(formulaCardHtml).join('')}`
    : '<p class="muted">No formula matches your search.</p>';
}

function openFormulaTopic(i) {
  formulaTopicIndex = i;
  renderFormulaTopic();
}

function renderFormulaTopic() {
  const t = FORMULA_DATA[formulaTopicIndex];

  // group the formulas by sub-topic, keeping their basic → advanced order
  const groups = [];
  t.formulas.forEach((f) => {
    const key = f.subtopic || 'General';
    let g = groups.find((x) => x.name === key);
    if (!g) { g = { name: key, items: [] }; groups.push(g); }
    g.items.push(f);
  });

  app.innerHTML = `
    <span class="back-link" onclick="formulasHome()">← All topics</span>
    <div class="page-head">
      <span class="subject-icon">${esc(t.icon || '📐')}</span>
      <div>
        <h1>${esc(t.topic)}</h1>
        <p class="muted">${t.formulas.length} formulas · basic to Class 12</p>
      </div>
    </div>

    ${groups.map((g) => `
      <h2 class="section-title">${esc(g.name)}</h2>
      ${g.items.map(formulaCardHtml).join('')}
    `).join('')}
  `;
  window.scrollTo(0, 0);
}

function formulaCardHtml(f) {
  return `
    <div class="card formula-card fade-in">
      <h3>${esc(f.name)}</h3>
      <div class="formula-expr">${esc(f.formula)}</div>
      ${f.symbols && f.symbols.length ? `
        <ul class="formula-syms">
          ${f.symbols.map((s) => `<li><span class="sym">${esc(s[0])}</span><span>${esc(s[1])}</span></li>`).join('')}
        </ul>` : ''}
      <div class="formula-block use">
        <div class="label">Where it is used</div>
        <p>${esc(f.generalUse)}</p>
      </div>
      <div class="formula-block layman">
        <div class="label">In simple words</div>
        <p>${esc(f.laymanUse)}</p>
      </div>
      ${f.example ? `<div class="formula-eg"><div class="label">Example</div><code>${esc(f.example)}</code></div>` : ''}
    </div>`;
}

/* ============================================================
   SCIENTIFIC CALCULATOR
   Safe expression evaluator (tokenizer + shunting-yard, no eval).
   ============================================================ */

let calcState = { expr: '', result: '0', angle: 'deg', justEvaluated: false };

function renderCalculator() {
  const c = calcState;

  // [label, token, cssClass]  — special tokens handled in calcPress: 'C', 'DEL', 'EQ'
  const rows = [
    [['sin', 'sin(', 'fn'], ['cos', 'cos(', 'fn'], ['tan', 'tan(', 'fn'], ['xʸ', '^', 'op'], ['√', 'sqrt(', 'fn']],
    [['log', 'log(', 'fn'], ['ln', 'ln(', 'fn'], ['π', 'pi', 'fn'], ['e', 'e', 'fn'], ['n!', '!', 'fn']],
    [['7', '7', ''], ['8', '8', ''], ['9', '9', ''], ['(', '(', 'op'], [')', ')', 'op']],
    [['4', '4', ''], ['5', '5', ''], ['6', '6', ''], ['×', '*', 'op'], ['÷', '/', 'op']],
    [['1', '1', ''], ['2', '2', ''], ['3', '3', ''], ['−', '-', 'op'], ['+', '+', 'op']],
    [['0', '0', ''], ['.', '.', ''], ['%', '%', 'op'], ['C', 'C', 'clear'], ['⌫', 'DEL', '']]
  ];

  const gridHtml = rows.map((row) => row.map(([label, token, cls]) =>
    `<button class="calc-btn ${cls}" onclick="calcPress('${token}')">${label}</button>`
  ).join('')).join('');

  app.innerHTML = `
    <div class="calc-view">
      <aside class="calc-aside">
        <img class="calc-3d" src="assets/sphere-purple.svg" alt="" />
        <h2>Scientific <span class="text-gradient">Calculator</span></h2>
        <p class="muted">Trig (sin/cos/tan), powers xʸ, roots √, logs, ln, factorial n!, π and e — all in one place.</p>
        <ul class="calc-tips">
          <li>Switch <b>DEG / RAD</b> before using trig functions.</li>
          <li>Use <b>( )</b> to group; <b>%</b> for percentages.</li>
          <li><b>C</b> clears everything, <b>⌫</b> deletes the last entry.</li>
        </ul>
      </aside>

      <div class="calc">
        <div class="calc-display">
          <div class="calc-expr" id="calcExpr">${esc(c.expr)}</div>
          <div class="calc-result" id="calcResult">${esc(c.result)}</div>
        </div>
        <div class="calc-modes">
          <span class="muted small">Angle:</span>
          <button class="chip ${c.angle === 'deg' ? 'chip-active' : ''}" onclick="setAngle('deg')">DEG</button>
          <button class="chip ${c.angle === 'rad' ? 'chip-active' : ''}" onclick="setAngle('rad')">RAD</button>
        </div>
        <div class="calc-grid">${gridHtml}</div>
        <button class="calc-btn eq" style="width:100%;margin-top:0.6rem" onclick="calcPress('EQ')">=</button>
      </div>
    </div>
  `;
  window.scrollTo(0, 0);
}

function setAngle(mode) {
  calcState.angle = mode;
  renderCalculator();
}

function calcPress(token) {
  const c = calcState;

  if (token === 'C') { c.expr = ''; c.result = '0'; c.justEvaluated = false; return updateCalcDisplay(); }
  if (token === 'DEL') { c.expr = c.expr.slice(0, -1); c.justEvaluated = false; return liveEval(); }
  if (token === 'EQ') {
    try {
      const v = evalMath(c.expr, c.angle);
      c.result = fmtNum(v);
      if (c.result !== 'Error') c.expr = c.result;
      c.justEvaluated = true;
    } catch (e) { c.result = 'Error'; }
    return updateCalcDisplay();
  }

  // starting a fresh number right after '=' clears the old expression
  if (c.justEvaluated) {
    if (/[0-9.]/.test(token) || token.endsWith('(')) c.expr = '';
    c.justEvaluated = false;
  }
  c.expr += token;
  liveEval();
}

function liveEval() {
  const c = calcState;
  try {
    c.result = c.expr.trim() === '' ? '0' : fmtNum(evalMath(c.expr, c.angle));
  } catch (e) { /* keep last good result while the user is still typing */ }
  updateCalcDisplay();
}

function updateCalcDisplay() {
  const e = document.getElementById('calcExpr');
  const r = document.getElementById('calcResult');
  if (e) e.textContent = calcState.expr;
  if (r) r.textContent = calcState.result;
}

function fmtNum(x) {
  if (typeof x !== 'number' || Number.isNaN(x)) return 'Error';
  if (!isFinite(x)) return x > 0 ? '∞' : '-∞';
  const r = Math.round(x * 1e10) / 1e10;   // trim floating-point noise
  return String(r);
}

/** Evaluate a maths expression safely (no eval). Supports + - * / ^, unary minus,
    parentheses, factorial (!), percent (%), constants pi/e, and the functions
    sin cos tan asin acos atan log(base10) ln sqrt abs exp. Trig uses the angle mode. */
function evalMath(input, angle) {
  const deg = angle === 'deg';
  const funcs = {
    sin: (x) => Math.sin(deg ? x * Math.PI / 180 : x),
    cos: (x) => Math.cos(deg ? x * Math.PI / 180 : x),
    tan: (x) => Math.tan(deg ? x * Math.PI / 180 : x),
    asin: (x) => { const r = Math.asin(x); return deg ? r * 180 / Math.PI : r; },
    acos: (x) => { const r = Math.acos(x); return deg ? r * 180 / Math.PI : r; },
    atan: (x) => { const r = Math.atan(x); return deg ? r * 180 / Math.PI : r; },
    log: (x) => Math.log10(x),
    ln: (x) => Math.log(x),
    sqrt: (x) => Math.sqrt(x),
    abs: (x) => Math.abs(x),
    exp: (x) => Math.exp(x)
  };
  const consts = { pi: Math.PI, e: Math.E };

  const s = String(input).replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
  const tokens = [];
  const pushTok = (tok) => {
    const last = tokens[tokens.length - 1];
    const starter = tok.t === 'num' || tok.t === 'func' || tok.t === 'lp';
    const ender = last && (last.t === 'num' || last.t === 'rp' || last.t === 'fact' || last.t === 'pct');
    if (starter && ender) tokens.push({ t: 'op', v: '*' }); // implicit multiply, e.g. 2π or 3(4)
    tokens.push(tok);
  };

  let i = 0;
  while (i < s.length) {
    const ch = s[i];
    if (ch === ' ') { i++; continue; }
    if (/[0-9.]/.test(ch)) {
      let num = '';
      while (i < s.length && /[0-9.]/.test(s[i])) num += s[i++];
      pushTok({ t: 'num', v: parseFloat(num) });
    } else if (/[a-zA-Z]/.test(ch)) {
      let name = '';
      while (i < s.length && /[a-zA-Z]/.test(s[i])) name += s[i++];
      if (funcs[name]) pushTok({ t: 'func', v: name });
      else if (name in consts) pushTok({ t: 'num', v: consts[name] });
      else throw new Error('Unknown: ' + name);
    } else if ('+-*/^'.includes(ch)) { tokens.push({ t: 'op', v: ch }); i++; }
    else if (ch === '(') { pushTok({ t: 'lp' }); i++; }
    else if (ch === ')') { tokens.push({ t: 'rp' }); i++; }
    else if (ch === '!') { tokens.push({ t: 'fact' }); i++; }
    else if (ch === '%') { tokens.push({ t: 'pct' }); i++; }
    else throw new Error('Bad char: ' + ch);
  }

  // shunting-yard → RPN
  const out = [], ops = [];
  const prec = { 'u-': 5, '^': 4, '*': 3, '/': 3, '+': 2, '-': 2 };
  const rightAssoc = { '^': true, 'u-': true };
  let prev = null;
  for (const tk of tokens) {
    if (tk.t === 'num') { out.push(tk); prev = 'val'; }
    else if (tk.t === 'func') { ops.push(tk); prev = 'func'; }
    else if (tk.t === 'fact') { out.push({ t: 'uop', v: '!' }); prev = 'val'; }
    else if (tk.t === 'pct') { out.push({ t: 'uop', v: '%' }); prev = 'val'; }
    else if (tk.t === 'op') {
      let v = tk.v;
      if ((v === '-' || v === '+') && (prev === null || prev === 'op' || prev === 'lp' || prev === 'func')) {
        if (v === '+') { prev = 'op'; continue; } // unary plus = no-op
        v = 'u-';
      }
      while (ops.length) {
        const top = ops[ops.length - 1];
        if (top.t === 'func') { out.push(ops.pop()); continue; }
        if (top.t === 'op') {
          const tp = prec[top.v], cp = prec[v];
          if (tp > cp || (tp === cp && !rightAssoc[v])) { out.push(ops.pop()); continue; }
        }
        break;
      }
      ops.push({ t: 'op', v }); prev = 'op';
    }
    else if (tk.t === 'lp') { ops.push(tk); prev = 'lp'; }
    else if (tk.t === 'rp') {
      while (ops.length && ops[ops.length - 1].t !== 'lp') out.push(ops.pop());
      if (!ops.length) throw new Error('Mismatched )');
      ops.pop();
      if (ops.length && ops[ops.length - 1].t === 'func') out.push(ops.pop());
      prev = 'val';
    }
  }
  while (ops.length) { const o = ops.pop(); if (o.t === 'lp') throw new Error('Mismatched ('); out.push(o); }

  // evaluate RPN
  const st = [];
  const fact = (n) => {
    if (n < 0 || !Number.isInteger(n)) throw new Error('bad factorial');
    let r = 1; for (let j = 2; j <= n; j++) r *= j; return r;
  };
  for (const tk of out) {
    if (tk.t === 'num') st.push(tk.v);
    else if (tk.t === 'func') { const a = st.pop(); if (a === undefined) throw new Error('Incomplete'); st.push(funcs[tk.v](a)); }
    else if (tk.t === 'uop') { const a = st.pop(); if (a === undefined) throw new Error('Incomplete'); st.push(tk.v === '!' ? fact(a) : a / 100); }
    else if (tk.t === 'op') {
      if (tk.v === 'u-') { const a = st.pop(); if (a === undefined) throw new Error('Incomplete'); st.push(-a); continue; }
      const b = st.pop(), a = st.pop();
      if (a === undefined || b === undefined) throw new Error('Incomplete');
      if (tk.v === '+') st.push(a + b);
      else if (tk.v === '-') st.push(a - b);
      else if (tk.v === '*') st.push(a * b);
      else if (tk.v === '/') st.push(a / b);
      else if (tk.v === '^') st.push(Math.pow(a, b));
    }
  }
  if (st.length !== 1) throw new Error('Invalid expression');
  return st[0];
}

/* ---------------- start ---------------- */

if (!QUIZ_DATA.length) {
  app.innerHTML = '<p class="muted">No question files loaded. Check the &lt;script&gt; tags in index.html.</p>';
} else {
  showView('quizzes');
}
