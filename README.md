# KTU S3 Minimalist Study Engine

> A high-retention, minimalist Bauhaus study app built for KTU B.Tech Semester 3 (2024 Scheme).

## 🎯 Features

- **Minimalist Bauhaus Design**: Clean, single-focus UI inspired by modern Japanese minimalism (`#F6F4EE` warm paper background, `#111111` solid ink, zero clutter).
- **5 Complete S3 Subjects**:
  - `PCCST303`: Data Structures & Algorithms (DSA)
  - `PCAMT302`: Machine Learning - I (ML)
  - `PBCST304`: Object Oriented Programming - Java (OOPs)
  - `GAEST305`: Digital Electronics & Logic Design (DELD)
  - `GAMAT301`: Mathematics for Information Science - 3 (Maths)
- **5 Structured Layers per Module**:
  1. **Official Syllabus Micro-Checklist**: Official KTU curriculum topics per module.
  2. **Concept Relationship Tree & Clouds**: Visual cluster maps illustrating prerequisite flows and concept dependencies.
  3. **Detailed Comprehensive Notes**: Exam-grade deep dive with step counts, C/Java code snippets, formulas, and KTU strategy alerts.
  4. **Active Recall Quiz**: Interactive self-testing MCQs with instant verification and explanations.
  5. **KTU Solved PYQ Vault**: Part A (3 Marks) and Part B (9 Marks) past university exam questions with step-by-step solutions.
- **Offline Mathematical Typography**: 100% offline KaTeX engine rendering LaTeX equations (`$...$`, `$$...$$`).
- **Focus Sprint Timer**: Built-in 15-minute quiet focus timer with automatic rest intervals.
- **Progress Gauge**: Visual preparedness meter tracking mastery across all 20 modules with local storage persistence and JSON export.

## 🚀 Getting Started

Simply open `index.html` in any modern web browser, or serve locally:
```bash
npm start
```

## 🛠️ Data Architecture

- `data/`: Modular per-subject JSON definitions (`dsa.json`, `ml.json`, `oops.json`, `deld.json`, `maths.json`, `meta.json`).
- `build_data.js`: Compiler script that compiles modular datasets into `data.json` and embeds them into `index.html` for 100% offline standalone usage:
  ```bash
  npm run build
  ```
- `vendor/katex/`: Vendored KaTeX distribution for offline formula rendering without requiring internet access.
