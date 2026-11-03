# Development

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
### DEV-SPRINT-1 · approved · source: plan:Sprint 1

Sprint 1 goal: stand up authentication, the employee directory, and the India-region hosting baseline. Capacity 20 points.

Goal text implies work on EPIC-001 (auth) and EPIC-002 (directory) stories plus US-021 (India hosting), but the input does not explicitly list which backlog items were assigned to this sprint.

**Related:** EPIC-001, EPIC-002, US-021

- ⚠ Input gives sprint goals and a flat backlog list but does not explicitly map individual stories/tasks to this sprint -- item-to-sprint assignment above is inferred from the goal wording only.

### DEV-SPRINT-2 · approved · source: plan:Sprint 2

Sprint 2 goal: complete auth flows (reset, privacy notice), reporting lines, and cycle creation with the reviewer threshold. Capacity 20 points.

Goal text implies US-003 (password reset), US-019 (privacy notice), US-005 (reporting lines), US-007 (cycle creation) and US-010 (minimum-reviewer threshold).

**Related:** US-003, US-019, US-005, US-007, US-010

- ⚠ Explicit item-to-sprint assignment not provided in input; inferred from goal text only.

### DEV-SPRINT-3 · approved · source: plan:Sprint 3

Sprint 3 goal: build the questionnaire builder, subject/reviewer selection, and DPDP data-rights handling. Capacity 20 points.

Goal text implies US-008 (questionnaire builder), US-009 (subject/reviewer selection, with tasks US-009-T1/T2/T3), and US-020 (DPDP rights requests).

**Related:** US-008, US-009, US-020

- ⚠ Explicit item-to-sprint assignment not provided in input; inferred from goal text only.

### DEV-SPRINT-4 · approved · source: plan:Sprint 4

Sprint 4 goal: launch cycles with email invitations and let reviewers submit feedback. Capacity 20 points.

Goal text implies cycle-launch behaviour of US-007, US-011 (invitations, with tasks US-011-T1/T2/T3) and US-013 (feedback submission, with tasks US-013-T1..T4).

**Related:** US-007, US-011, US-013

- ⚠ Explicit item-to-sprint assignment not provided in input; inferred from goal text only.

### DEV-SPRINT-5 · approved · source: plan:Sprint 5

Sprint 5 goal: deliver reminders, anonymity enforcement, and in-app aggregated report viewing. Capacity 20 points.

Goal text implies US-012 (reminders), US-014 (anonymity), and US-015 (in-app report, with tasks US-015-T1/T2/T3).

**Related:** US-012, US-014, US-015

- ⚠ Explicit item-to-sprint assignment not provided in input; inferred from goal text only.

### DEV-SPRINT-6 · approved · source: plan:Sprint 6

Sprint 6 goal: add PDF export, the HR progress dashboard, and close out scope-clarification stories. Capacity 20 points.

Goal text implies US-016 (PDF export), US-018 (dashboard), and the low-point scope-clarification stories US-006, US-017, US-022.

**Related:** US-016, US-018, US-006, US-017, US-022

- ⚠ Explicit item-to-sprint assignment not provided in input; inferred from goal text only.

### DEV-EPIC-001 · approved · source: plan:EPIC-001

Planned work for Authentication and Role-Based Access.

US-001 Sign in with email and password (5 pts, backend-agent). US-002 Role-based access enforcement (5 pts, security-agent). US-003 Password reset (3 pts, backend-agent).

**Related:** EPIC-001, US-001, US-002, US-003

- ⚠ No implementation/completion status, code artifacts, or PR references were provided -- only planning assignments.

### DEV-EPIC-002 · approved · source: plan:EPIC-002

Planned work for Employee Directory and Reporting Lines.

US-004 Manage employee records (5 pts, backend-agent). US-005 Manage reporting lines and manager relationships (5 pts, backend-agent). US-006 No HRIS integration in v1 (1 pt, qa-agent).

**Related:** EPIC-002, US-004, US-005, US-006

- ⚠ No implementation/completion status provided.

### DEV-EPIC-003 · approved · source: plan:EPIC-003

Planned work for Feedback Cycle and Questionnaire Setup.

US-007 Create a feedback cycle (5 pts, backend-agent). US-008 Build a questionnaire (5 pts, backend-agent). US-009 Select subjects and reviewers (8 pts, backend-agent) with tasks: US-009-T1 assignment endpoint (backend-agent), US-009-T2 reviewer-suggestion logic (backend-agent), US-009-T3 reviewer selection/threshold-warning UI (frontend-agent). US-010 Configure minimum-reviewer threshold (2 pts, backend-agent).

**Related:** EPIC-003, US-007, US-008, US-009, US-010

- ⚠ No implementation/completion status provided.

### DEV-EPIC-004 · approved · source: plan:EPIC-004

Planned work for Reviewer Invitations and Reminders.

US-011 Invite reviewers by email (8 pts, integration-agent) with tasks: US-011-T1 Celery invitation-email task (integration-agent), US-011-T2 record/expose delivery failures (backend-agent), US-011-T3 wire launch to enqueue jobs (backend-agent). US-012 Send reminders for outstanding feedback (5 pts, integration-agent).

**Related:** EPIC-004, US-011, US-012

- ⚠ No implementation/completion status provided.

### DEV-EPIC-005 · approved · source: plan:EPIC-005

Planned work for Anonymous Feedback Submission.

US-013 Submit feedback as a reviewer (8 pts, frontend-agent) with tasks: US-013-T1 draft-save endpoint (backend-agent), US-013-T2 submit endpoint with cycle-closed guard (backend-agent), US-013-T3 reviewer feedback form (frontend-agent), US-013-T4 resume-draft prefill flow (frontend-agent). US-014 Preserve reviewer anonymity (3 pts, security-agent).

**Related:** EPIC-005, US-013, US-014

- ⚠ No implementation/completion status provided.

### DEV-EPIC-006 · approved · source: plan:EPIC-006

Planned work for Aggregated Feedback Reports and Export.

US-015 View aggregated report in-app (8 pts, backend-agent) with tasks: US-015-T1 threshold-gated aggregation query (backend-agent), US-015-T2 enforce report access control (security-agent), US-015-T3 build in-app report view (frontend-agent). US-016 Export report to PDF (5 pts, backend-agent). US-017 No advanced org-wide analytics in v1 (1 pt, qa-agent).

**Related:** EPIC-006, US-015, US-016, US-017

- ⚠ No implementation/completion status provided.

### DEV-EPIC-007 · approved · source: plan:EPIC-007

Planned work for HR Cycle Progress Dashboard.

US-018 Monitor cycle progress and completion (5 pts, frontend-agent).

**Related:** EPIC-007, US-018

- ⚠ No implementation/completion status provided.

### DEV-EPIC-008 · approved · source: plan:EPIC-008

Planned work for DPDP Data Protection and Privacy.

US-019 Present a privacy notice (3 pts, frontend-agent). US-020 Handle data-principal rights requests via HR (5 pts, backend-agent). US-021 Host data in India (3 pts, devops-agent). US-022 Adults-only, no parental consent (1 pt, qa-agent).

**Related:** EPIC-008, US-019, US-020, US-021, US-022

- ⚠ No implementation/completion status provided.
<!-- sdlc:auto:end narrative -->
