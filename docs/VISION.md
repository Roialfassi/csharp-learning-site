# Vision — C# Learning Platform

## What this is

An interactive, Hebrew-first (RTL) web platform that takes a complete beginner — a student aged 12–18 with zero programming experience — from their first `Console.WriteLine` all the way to confident Object-Oriented Programming in C#.

The platform runs entirely in the browser: theory lessons, hands-on exercises with a live C# editor (DotNetFiddle embed), multiple-choice quizzes, and local progress tracking. No accounts, no installs, no friction.

## Who it's for

- **Primary:** Hebrew-speaking middle/high-school students learning C# (the standard language in Israeli CS tracks).
- **Secondary:** Teachers looking for a structured, self-serve practice resource to assign alongside classroom instruction.

## The core promise

> **Every topic on the learning path is a complete module** — you can read it, practice it, and test yourself on it, without leaving the site.

A **complete module** means:

| Component | Definition of done |
|---|---|
| 📖 Theory lesson | A written, Hebrew, RTL lesson page with code examples, callouts, and common pitfalls (the `/oop` guide is the quality bar) |
| 💪 Exercises | **At least 10 exercises** spanning easy → medium → hard, with starter code, 3-level hints, and a reference solution |
| 🧠 Quiz | **At least 10 quiz questions** (one full quiz; two-part quizzes of 20 questions are the stretch goal) with explanations for every answer |
| 🛠️ Mini-project | **One small guided project (worksheet)** that combines the module's concepts into something the learner builds step by step and can show off (e.g., a grade calculator for Conditions, a bank-account class for Classes) |
| 📊 Progress | The module appears on the learning path with per-topic progress tracking |

**Status (2026-07-20): all 15 modules meet the bar** — 15 lessons, 150 exercises, 180 quiz questions and 15 mini-projects. See [ROADMAP.md](./ROADMAP.md) for the delivery record.

## Pedagogical principles

1. **Learn by doing.** Theory pages are short and example-driven; the real learning happens in exercises. Every concept introduced gets practiced within the same module, and every module ends with a mini-project that ties its concepts together into something real.
2. **One new idea at a time.** The path is strictly sequential — no exercise requires a concept from a later module. Gaps in the ladder (e.g., jumping from methods straight to classes without covering value/reference types or enums) are treated as bugs.
3. **Struggle is productive, frustration is not.** Progressive hints (3 levels) before revealing a solution; error messages explained in Hebrew.
4. **Hebrew-first, not Hebrew-translated.** All learner-facing content is written natively in Hebrew with correct RTL layout. Code and C# keywords stay in English, as they will in real life.
5. **Instant feedback.** Code runs in the browser within seconds; quiz answers are explained immediately, right or wrong.

## The destination (end-state curriculum)

When the roadmap is complete, the path covers, in order:

**Foundations:** program structure → variables & types → type conversion & operators → conditions → loops → strings → arrays (incl. 2D) → methods → enums & structs → value vs. reference types → collections.

**OOP:** classes & objects → constructors & `this` → encapsulation & properties → static members → inheritance → abstraction & abstract classes → polymorphism → interfaces → composition vs. inheritance.

**Beyond OOP (advanced track):** exception handling → LINQ. *(Generics remains a candidate for a 16th module but is not required for the path to be complete.)*

## Longer-term direction (post-curriculum)

The curriculum is now complete, so this is the active work queue, in rough priority order:

- User accounts + server-side progress (replacing localStorage)
- Teacher dashboard: assign modules, view class progress
- Achievements/gamification expansion
- AI-assisted hints and code review on exercise submissions

The curriculum always comes first: **a feature that helps learners through existing content beats a feature that adds a new surface.**
