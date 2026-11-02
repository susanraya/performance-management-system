# Development

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
### DEV-PLAN-OVERVIEW · approved · source: plan:v1

Development plan version 1 is approved and organizes all 22 user stories into 8 epics across 6 sprints of 20-point capacity each.

Plan status: approved, version 1. Epics: EPIC-001 Authentication and Role-Based Access; EPIC-002 Employee Directory and Reporting Lines; EPIC-003 Feedback Cycle and Questionnaire Setup; EPIC-004 Reviewer Invitations and Reminders; EPIC-005 Anonymous Feedback Submission; EPIC-006 Aggregated Feedback Reports and Export; EPIC-007 HR Cycle Progress Dashboard; EPIC-008 DPDP Data Protection and Privacy. Work is distributed across backend-agent, frontend-agent, security-agent, integration-agent, devops-agent, and qa-agent roles. No epic carries its own point estimate (points tracked at story/task level only).

**Related:** EPIC-001, EPIC-002, EPIC-003, EPIC-004, EPIC-005, EPIC-006, EPIC-007, EPIC-008

- ⚠ Input contains no record of actual implementation progress, ticket completion status, code commits, or velocity against the 20-point/sprint capacity -- only the planned assignment is available.
- ⚠ No dates are given for sprint start/end, so phase timeline cannot be documented.

### DEV-SPRINT-1 · approved · source: plan:Sprint 1

Sprint 1 goal: stand up authentication, the employee directory, and the India-region hosting baseline.

Planned items (inferred from goal wording): US-001 Sign in with email and password (5 pts, backend-agent); US-002 Role-based access enforcement (5 pts, security-agent); US-004 Manage employee records (5 pts, backend-agent); US-021 Host data in India / data residency (3 pts, devops-agent). Sum of inferred points: 18 of 20 capacity.

**Related:** US-001, US-002, US-004, US-021, EPIC-001, EPIC-002, EPIC-008

- ⚠ Sprint-to-item mapping is inferred from goal text, not an explicit input field -- confirm against the actual sprint board.
- ⚠ No completion/status data provided for these items.

### DEV-SPRINT-2 · approved · source: plan:Sprint 2

Sprint 2 goal: complete auth flows (reset, privacy notice), reporting lines, and cycle creation with the reviewer threshold.

Planned items (inferred from goal wording): US-003 Password reset (3 pts, backend-agent); US-019 Present a privacy notice (3 pts, frontend-agent); US-005 Manage reporting lines and manager relationships (5 pts, backend-agent); US-007 Create a feedback cycle for a review period (5 pts, backend-agent); US-010 Configure minimum-reviewer threshold (2 pts, backend-agent). Sum of inferred points: 18 of 20 capacity.

**Related:** US-003, US-019, US-005, US-007, US-010, EPIC-001, EPIC-002, EPIC-003, EPIC-008

- ⚠ Sprint-to-item mapping is inferred from goal text, not an explicit input field -- confirm against the actual sprint board.
- ⚠ No completion/status data provided for these items.

### DEV-SPRINT-3 · approved · source: plan:Sprint 3

Sprint 3 goal: build the questionnaire builder, subject/reviewer selection, and DPDP data-rights handling.

Planned items (inferred from goal wording): US-008 Build a questionnaire with rating-scale and open-text questions (5 pts, backend-agent); US-009 Select subjects and their reviewers (8 pts, backend-agent) with subtasks US-009-T1 Implement subject and reviewer assignment endpoint (backend-agent), US-009-T2 Implement reviewer-suggestion logic from reporting lines (backend-agent), US-009-T3 Build reviewer selection and threshold-warning UI (frontend-agent); US-020 Handle data-principal rights requests via HR (5 pts, backend-agent) -- DPDP: data-principal rights handling control. Sum of inferred story points: 18 of 20 capacity.

**Related:** US-008, US-009, US-020, EPIC-003, EPIC-008

- ⚠ Sprint-to-item mapping is inferred from goal text, not an explicit input field -- confirm against the actual sprint board.
- ⚠ No completion/status data provided for these items.
- ⚠ No detail on what specific data-principal rights (access, correction, erasure, grievance) US-020 covers -- only the story title is given.

### DEV-SPRINT-4 · approved · source: plan:Sprint 4

Sprint 4 goal: launch cycles with email invitations and let reviewers submit feedback.

Planned items (inferred from goal wording): US-011 Invite reviewers by email (8 pts, integration-agent) with subtasks US-011-T1 Implement Celery task to send invitation emails via SMTP (integration-agent), US-011-T2 Record and expose email delivery failures (backend-agent), US-011-T3 Wire cycle launch to enqueue invitation jobs (backend-agent); US-013 Submit feedback as a reviewer (8 pts, frontend-agent) with subtasks US-013-T1 Implement draft-save endpoint for assignments (backend-agent), US-013-T2 Implement submit endpoint with cycle-closed guard (backend-agent), US-013-T3 Build reviewer feedback form (frontend-agent), US-013-T4 Add resume-draft prefill flow (frontend-agent). Sum of inferred story points: 16 of 20 capacity.

**Related:** US-011, US-013, EPIC-004, EPIC-005

- ⚠ Sprint-to-item mapping is inferred from goal text, not an explicit input field -- confirm against the actual sprint board.
- ⚠ No completion/status data provided for these items.

### DEV-SPRINT-5 · approved · source: plan:Sprint 5

Sprint 5 goal: deliver reminders, anonymity enforcement, and in-app aggregated report viewing.

Planned items (inferred from goal wording): US-012 Send reminders for outstanding feedback (5 pts, integration-agent); US-014 Preserve reviewer anonymity (3 pts, security-agent); US-015 View aggregated report in-app (8 pts, backend-agent) with subtasks US-015-T1 Implement threshold-gated aggregation query (backend-agent), US-015-T2 Enforce report access control (security-agent), US-015-T3 Build in-app report view (frontend-agent). Sum of inferred story points: 16 of 20 capacity.

**Related:** US-012, US-014, US-015, EPIC-004, EPIC-005, EPIC-006

- ⚠ Sprint-to-item mapping is inferred from goal text, not an explicit input field -- confirm against the actual sprint board.
- ⚠ No completion/status data provided for these items.

### DEV-SPRINT-6 · approved · source: plan:Sprint 6

Sprint 6 goal: add PDF export, the HR progress dashboard, and close out scope-clarification stories.

Planned items (inferred from goal wording): US-016 Export report to PDF (5 pts, backend-agent); US-018 Monitor cycle progress and completion (5 pts, frontend-agent); plus three scope-boundary clarification stories handled by qa-agent: US-006 No HRIS integration in v1 (1 pt), US-017 No advanced org-wide analytics in v1 (1 pt), US-022 Adults-only, no parental consent (1 pt). Sum of inferred points: 13 of 20 capacity.

**Related:** US-016, US-018, US-006, US-017, US-022, EPIC-006, EPIC-007

- ⚠ Sprint-to-item mapping is inferred from goal text, not an explicit input field -- confirm against the actual sprint board.
- ⚠ No completion/status data provided for these items.
- ⚠ US-006, US-017, US-022 are documented as explicit scope exclusions (no HRIS integration, no advanced analytics, no parental consent in v1) -- these are decisions to confirm are still intended, not defects.
<!-- sdlc:auto:end narrative -->
