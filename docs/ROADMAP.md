# Roadmap — C# Learning Platform

High-level content roadmap from the current state to a complete beginner→OOP curriculum. See [VISION.md](./VISION.md) for what a "complete module" means.

**The bar for every module: a theory lesson + at least 10 exercises + at least 10 quiz questions + one mini-project (guided worksheet).**

*Original snapshot: 2026-07-19. **Roadmap completed: 2026-07-20.***

## ✅ Status: complete

Every module now meets the bar. Verified by an automated content check (`15/15 modules`, all green):

| # | Module | Lesson | Exercises | Quiz Qs | Mini-project |
|---|---|---|---|---|---|
| 1 | Basics (יסודות) | ✅ | ✅ 10 | ✅ 20 | ✅ תעודת זהות דיגיטלית |
| 2 | Type Conversion (המרות ואופרטורים) | ✅ | ✅ 10 | ✅ 10 | ✅ ממיר יחידות |
| 3 | Conditions (תנאים) | ✅ | ✅ 10 | ✅ 20 | ✅ מחשבון ציונים חכם |
| 4 | Loops (לולאות) | ✅ | ✅ 10 | ✅ 20 | ✅ משחק ניחוש המספרים |
| 5 | Strings (מחרוזות) | ✅ | ✅ 10 | ✅ 10 | ✅ בודק חוזק סיסמאות |
| 6 | Arrays (מערכים) | ✅ | ✅ 10 (incl. 2D) | ✅ 10 | ✅ יומן הציונים של הכיתה |
| 7 | Methods (מתודות) | ✅ | ✅ 10 | ✅ 10 | ✅ מחשבון קונסולה |
| 8 | Enums & Structs (Enum ו-Struct) | ✅ | ✅ 10 | ✅ 10 | ✅ דף דמות למשחק תפקידים |
| 9 | Value vs Reference (ערך מול הפניה) | ✅ | ✅ 10 | ✅ 10 | ✅ ציד הבאגים |
| 10 | Collections (אוספים) | ✅ | ✅ 10 | ✅ 10 | ✅ מנהל רשימת הקניות |
| 11 | Classes (מחלקות) | ✅ | ✅ 10 | ✅ 10 | ✅ חשבון בנק |
| 12 | Inheritance (ירושה) | ✅ | ✅ 10 | ✅ 10 | ✅ צי הרכבים |
| 13 | Polymorphism (פולימורפיזם) | ✅ | ✅ 10 | ✅ 10 | ✅ מערכת הצורות |
| 14 | Exceptions (טיפול בשגיאות) | ✅ | ✅ 10 | ✅ 10 | ✅ קולט הקלט החסין |
| 15 | LINQ | ✅ | ✅ 10 | ✅ 10 | ✅ מערכת ניהול התלמידים |

**What was delivered:**

| | Before | After | Written |
|---|---|---|---|
| Modules | 12 | **15** | +3 (conversion, enums/structs, value-vs-reference) |
| Exercises | 31 | **150** | +119 |
| Quiz questions | 130 | **180** | +50 |
| Theory lessons | 1 (OOP guide) | **15** | +14 |
| Mini-projects | 0 | **15** | +15 |

**What a mini-project is:** a multi-step guided worksheet (5 steps each) that builds one small program combining everything the module taught. Each step has its own instructions, an optional peek-at-the-code escape hatch, and a checkpoint ("run it — you should see…"). The final step leaves the learner with a complete program they wrote themselves. It is the module's capstone: exercises drill one concept each; the project makes them work together.

**Structural work completed:**

- ✅ Data-driven lesson system (`src/data/lessons/` + `LessonPage` at `/lesson/:topicId`), built from typed blocks; the OOP guide's building blocks were extracted into `src/components/content/blocks.tsx` and are now shared
- ✅ Mini-project system: `Project` data model with steps and checkpoints, `ProjectPage` at `/project/:topicId` with progress tracking beside a live editor, plus a `/projects` index
- ✅ Exercise/quiz data split per topic; ids are assigned by position in the index so files stay reorderable
- ✅ The `/oop` guide is kept as a deep-dive and linked from the classes/inheritance/polymorphism modules, which now have their own lessons
- ✅ README rewritten to match reality; dead Judge0 code (`codeExecutor.ts`, `exerciseValidator.ts`) removed
- ✅ Learning path and dashboard track all four content types per module

---

## Phase 1 — Foundation for lessons + docs hygiene

*Goal: make it cheap to author 14 lessons, ~119 exercises, and 15 projects; make the repo describe itself truthfully.*

- [x] Build a data-driven lesson system: `src/data/lessons/` + a generic `LessonPage` route (`/lesson/:topicId`), reusing the OOP guide's building blocks (CodeBlock, Callout, CompareTable) as shared components
- [x] Build the mini-project (worksheet) system: project data model (title, intro, ordered steps with instructions + checkpoints, final solution), a `ProjectPage` route (`/project/:topicId`) with step navigation next to the editor, and per-project progress tracking
- [x] Split exercise/quiz data files per topic (`src/data/exercises/loops.ts`, …) so 150 exercises stay maintainable
- [x] Migrate the OOP guide content into it (or keep `/oop` as-is and link it from the classes/inheritance/polymorphism modules — decide once the lesson system exists)
- [x] Update README to match reality (topics/exercise/quiz counts, DotNetFiddle)
- [x] Remove or clearly quarantine dead Judge0/validator code

## Phase 2 — Complete the pre-OOP ladder (topics 1–7 + 3 new modules)

*Goal: a learner can go from zero to "ready for classes" with no missing rungs, and every rung is a full module (lesson + 10 exercises + 10 questions + project).*

- [x] Write theory lessons for topics 1–7 (Basics → Collections)
- [x] Top up exercises to 10 per topic: Basics +5, Conditions +6, Loops +3, Strings +6, Arrays +6 (incl. 2D arrays), Methods +7 (incl. overloading, ref/out), Collections +8 (Dictionary, HashSet) — **+41 exercises**
- [x] Author mini-projects for topics 1–7 (ID card generator, grade calculator, guessing game, password checker, grade book, calculator, shopping list) — **7 projects**
- [x] Add the three missing modules, each as a full module (lesson + 10 exercises + 10-question quiz + mini-project):
  - [x] **Type conversion & operators** (between Basics and Conditions)
  - [x] **Enums & structs** (after Methods)
  - [x] **Value vs. reference types** (right before Classes)
- [x] Stretch: second quiz (→20 questions) for Strings, Arrays, Methods, Collections

## Phase 3 — Complete the OOP modules (topics 8–10)

*Goal: OOP is not just a reading guide — every OOP concept is practiced, tested, and built into a project at the same depth.*

- [x] Exercises: Classes +8 (properties, constructors, static), **Inheritance +10 (currently 0)**, **Polymorphism/Interfaces +10 (currently 0)** — **+28 exercises**
- [x] Quizzes: 10-question Inheritance quiz and 10-question Polymorphism/Interfaces quiz (currently none)
- [x] Mini-projects: bank account class, vehicle fleet (inheritance), shape drawing system (polymorphism/interfaces) — **3 projects**; the shape system doubles as the OOP capstone
- [x] Consider splitting the single 16-section OOP guide into per-module lessons aligned with topics 8–10, so progress tracking works per concept

## Phase 4 — Advanced track (topics 11–12)

*Goal: the two topics already on the path but contentless become real full modules.*

- [x] **Exceptions**: lesson + 10 exercises + robust-input-reader mini-project (has a 10-question quiz already)
- [x] **LINQ**: lesson + 10 exercises + student-database mini-project (has a 10-question quiz already)
- [ ] Optional new module: **Generics** (natural prerequisite for understanding `List<T>` deeply and LINQ signatures) — deliberately deferred; the 15-module curriculum is complete without it

## Phase 5 — Platform polish (after curriculum is complete)

- [x] Exercise flow rework: with DotNetFiddle embeds the old auto-validation is gone. **Decided: expected-output self-check.** Every exercise ships `testCases` with the expected output, the learner runs their code in the embedded editor, compares, and marks the exercise complete. Project steps use the same model via per-step checkpoints. This was settled before the bulk authoring, so all 150 exercises and 75 project steps carry the data
- [x] Learning path and dashboard integration: per-module progress across lesson / exercises / quiz / project
- [x] Achievements expansion (6 badges spanning exercises, projects and lessons)
- [ ] Streaks — not started
- [ ] Accounts / server-side progress, teacher dashboard (see VISION.md long-term) — not started; these are the natural next phase now that the curriculum is done

---

## Ordering rationale

1. **Lesson infrastructure and data-file split first** (Phase 1) — every later phase writes theory content and dozens of exercises; without a data-driven lesson system and per-topic files, each addition gets harder.
2. **Pre-OOP before OOP** (Phase 2 before 3) — the biggest learner-facing hole is that the ladder has missing rungs *before* the hardest material.
3. **Exercises before new features** — inheritance/polymorphism having zero exercises undercuts the platform's core promise more than any missing feature.
4. **Decide the exercise-completion mechanism (Phase 5 item) before the bulk authoring in Phases 2–4** — retrofitting validation onto ~119 exercises and 15 projects later would mean touching every one of them twice.
