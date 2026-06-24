# Autonomous QA Engineer — Lesson 1.3 Homework

This project is the capstone exercise for lesson 1.3 (CLAUDE.md, Memory, Skills, Hooks, Scheduling).
It demonstrates a fully autonomous QA workflow using Claude Routines: a cloud-scheduled routine
that runs every Sunday morning, scans the codebase for uncommented JavaScript functions,
cross-checks MEMORY.md for new coding standards, and writes a weekly log — without any manual intervention.

---

# Cloud Routines

## qa-weekly
**Schedule:** 0 8 * * 0
**Description:** Weekly QA check at the start of the Israeli work week.
**Tasks:**
1. Run the `qa-report` skill — scan all `.js` files and generate `diagnostics/QA_REPORT.md`
2. Read `MEMORY.md` and note any new coding standards added since last run
3. Append a dated summary of findings to `qa-weekly.log`
