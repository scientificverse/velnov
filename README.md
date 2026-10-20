# Velnov — velnov.co.in

Free study notes, practice quizzes and maths formulas. A plain static site
(HTML, CSS and vanilla JavaScript, no frameworks, no npm packages), hosted on
GitHub Pages at **https://velnov.co.in**.

## Folder structure

```
velnov/
├── index.html              Quiz app (single page, drawn by js/app.js)
├── about.html              ┐
├── contact.html            │ Hand-written pages
├── privacy.html            │ (the build script never touches these)
├── terms.html              │
├── 404.html                ┘ "Page not found" page
│
├── css/
│   ├── style.css           Styles for the quiz app
│   └── study.css           Styles for the study-note and formula pages
├── js/
│   └── app.js              Quiz app logic
├── assets/                 SVG images used by the quiz app
│
├── data/                   ★ SOURCE CONTENT — edit these
│   ├── <subject>/NN-*.js   Questions, one file per topic (see HOW TO ADD QUESTIONS.md)
│   ├── formulas/NN-*.js    Maths formulas, one file per topic
│   └── notes/<subject>.js  "Topic overview" study notes shown above the questions
│
├── tools/
│   └── build-pages.js      Generator: turns data/ into the pages below
│
├── learn/                  ◆ GENERATED — do not edit by hand
│   ├── index.html          All subjects
│   └── <subject>/          Subject hub + one page per topic (questions, answers, explanations)
├── formulas/               ◆ GENERATED — formula reference pages
├── sitemap.xml             ◆ GENERATED
├── robots.txt              ◆ GENERATED
├── ads.txt                 ◆ GENERATED (AdSense authorised seller)
│
├── CNAME                   Custom domain for GitHub Pages: keep this file!
├── .nojekyll               Tells GitHub Pages to serve files exactly as they are
└── HOW TO ADD QUESTIONS.md Editing guide
```

## Updating the site

1. Edit files in `data/` (questions, formulas or topic notes).
2. Rebuild the generated pages from the site folder:
   ```
   node tools/build-pages.js
   ```
   It needs only Node.js. It prints how many pages it built and warns about
   any topic note that doesn't match a topic.
3. Preview locally (optional):
   ```
   python -m http.server 5657 --directory .
   ```
   Then open http://localhost:5657/. Use this instead of double-clicking files,
   because folder links such as `learn/` only work through a server.
4. Commit and push. GitHub Pages republishes in a minute or two.

## Advertising rules (AdSense)

The build script adds the AdSense script **only** to topic pages and formula
pages, which carry the actual content. It is never added to the quiz app
(`index.html`), the hub/listing pages, the hand-written pages, or the
Class 1–5 Mathematics and English pages, which are child-directed. Keep it
that way when changing the build script.
