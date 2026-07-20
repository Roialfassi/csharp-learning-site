# 🎓 C# Learning Platform | פלטפורמת לימוד C#

An interactive, Hebrew-first (RTL) web platform that takes a complete beginner from their first `Console.WriteLine` to confident Object-Oriented Programming in C#.

Built with React 19, TypeScript, Tailwind CSS v4 and Vite.

---

## 📚 The curriculum

**15 modules, each complete: a theory lesson + 10 exercises + 10 quiz questions + a guided mini-project.**

| # | Module | נושא | Mini-project |
|---|---|---|---|
| 1 | Basics | יסודות | 🪪 תעודת זהות דיגיטלית |
| 2 | Type Conversion & Operators | המרות ואופרטורים | 🌡️ ממיר יחידות |
| 3 | Conditions | תנאים | 🎓 מחשבון ציונים חכם |
| 4 | Loops | לולאות | 🎲 משחק ניחוש המספרים |
| 5 | Strings | מחרוזות | 🔐 בודק חוזק סיסמאות |
| 6 | Arrays | מערכים | 📊 יומן הציונים של הכיתה |
| 7 | Methods | מתודות | 🧮 מחשבון קונסולה |
| 8 | Enums & Structs | Enum ו-Struct | ⚔️ דף דמות למשחק תפקידים |
| 9 | Value vs Reference | ערך מול הפניה | 🐛 ציד הבאגים |
| 10 | Collections | אוספים | 🛒 מנהל רשימת הקניות |
| 11 | Classes | מחלקות | 🏦 חשבון בנק |
| 12 | Inheritance | ירושה | 🚗 צי הרכבים |
| 13 | Polymorphism | פולימורפיזם | 🔺 מערכת הצורות הגיאומטריות |
| 14 | Exception Handling | טיפול בשגיאות | 🛡️ קולט הקלט החסין |
| 15 | LINQ | LINQ | 🎓 מערכת ניהול התלמידים |

**Totals:** 15 lessons · 150 exercises · 18 quizzes (180 questions) · 15 mini-projects.

The curriculum is strictly sequential — no exercise requires a concept from a later module. See [docs/VISION.md](docs/VISION.md) for the pedagogical principles and [docs/ROADMAP.md](docs/ROADMAP.md) for the build plan.

---

## ✨ Features

- 📖 **Theory lessons** — data-driven Hebrew lessons with code examples, callouts, comparison tables and common pitfalls
- 💪 **150 exercises** — starter code, expected-output test cases, 3 progressive hints and a reference solution
- 🧠 **18 quizzes** — multiple choice with an explanation for every answer, right or wrong
- 🚀 **15 mini-projects** — multi-step guided worksheets, each step with its own checkpoint, built beside a live editor
- 💻 **Live C# editor** — DotNetFiddle embed; write and run real C# in the browser, no installs
- 📊 **Progress tracking** — per-module progress across all four content types, saved in `localStorage`
- 🇮🇱 **Hebrew-first** — full RTL layout, with code blocks kept LTR

---

## 🚀 Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
```

Requires Node.js 18+ and npm 10+.

---

## 🗺️ Routes

| Route | Page |
|---|---|
| `/` | Landing page |
| `/path` | Learning path — all 15 modules with progress |
| `/lesson/:topicId` | Theory lesson for a module |
| `/exercises`, `/exercise/:id` | Exercise list and detail |
| `/quizzes`, `/quiz/:id` | Quiz list and quiz runner |
| `/projects`, `/project/:topicId` | Mini-project list and worksheet |
| `/playground` | Free-form C# editor |
| `/oop` | Comprehensive 16-section OOP deep-dive guide |
| `/dashboard` | Progress statistics and achievements |

---

## 📁 Project structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── TopicSidebar.tsx
│   └── content/blocks.tsx      # shared CodeBlock, Callout, CompareTable, block renderer
├── pages/
│   ├── LandingPage.tsx  Dashboard.tsx  LearningPath.tsx
│   ├── LessonPage.tsx          # renders any lesson from data
│   ├── ProjectPage.tsx         # step-by-step worksheet + editor
│   ├── Projects.tsx  Exercises.tsx  ExerciseDetail.tsx
│   ├── Quizzes.tsx  QuizDetail.tsx  ConsolePlayground.tsx
│   └── OOP.tsx                 # standalone OOP guide
├── data/
│   ├── topics.ts               # the 15 modules, in curriculum order
│   ├── lessons/                # one file per module + index registry
│   ├── exercises/              # one file per module + index (ids assigned in index)
│   ├── quizzes/                # one file per module + index
│   └── projects/               # one file per module + index registry
├── types/                      # exercise, quiz, lesson, project
└── utils/storage.ts            # localStorage progress helpers
```

### Adding content

Each content type is plain data — no React needed:

1. **Lesson** — add a `Lesson` object in `src/data/lessons/<topic>.ts`, register it in `lessons/index.ts`
2. **Exercises** — append to `src/data/exercises/<topic>.ts` (leave `id: 0`; ids are assigned by position in `index.ts`)
3. **Quiz** — append to `src/data/quizzes/<topic>.ts`
4. **Project** — add a `Project` object in `src/data/projects/<topic>.ts`, register it in `projects/index.ts`

Lessons are composed from typed blocks (`p`, `h3`, `code`, `callout`, `table`, `list`). Text supports `` `backticks` `` for inline code.

---

## 💾 Data storage

All progress lives in the browser's `localStorage` under the `csharp_learning_` prefix:

| Key | Contents |
|---|---|
| `completed_exercises` | Array of completed exercise ids |
| `completed_lessons` | Array of completed topic ids |
| `quiz_progress` | Score and attempts per quiz |
| `project_progress` | Completed step indexes per project |
| `playground_code` | Free-form editor contents |

Progress is per-browser and per-device. Clearing browser data resets it.

---

## 🛠️ Tech stack

React 19 · TypeScript · Tailwind CSS v4 · React Router · Vite · Lucide icons · DotNetFiddle (embedded C# execution)

---

## 🔮 Future direction

The curriculum is complete. Next up, in rough priority order: user accounts with server-side progress, a teacher dashboard for assigning modules and viewing class progress, expanded gamification, and AI-assisted hints. See [docs/VISION.md](docs/VISION.md).

---

**Built with ❤️ for students learning C# | בנוי עם ❤️ לתלמידים הלומדים C#**
