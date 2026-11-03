# Development

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
### DEV-SPRINT-1 · approved · source: plan:Sprint 1

Stand up authentication, the employee directory, and the India-region hosting baseline.

Capacity: 20 points. Goal text names authentication, employee directory, and India-region hosting baseline as scope.

**Related:** EPIC-001, EPIC-002, US-021

- ⚠ Mapping of specific backlog items to this sprint is inferred only from the goal's wording -- the input has no explicit sprint-assignment field; confirm against the actual sprint board.

### DEV-SPRINT-2 · approved · source: plan:Sprint 2

Complete auth flows (reset, privacy notice), reporting lines, and cycle creation with the reviewer threshold.

Capacity: 20 points. Goal text names password reset, privacy notice, reporting lines, cycle creation, and reviewer threshold as scope.

**Related:** US-003, US-019, US-005, US-007, US-010

- ⚠ Mapping of specific backlog items to this sprint is inferred only from the goal's wording -- confirm against the actual sprint board.

### DEV-SPRINT-3 · approved · source: plan:Sprint 3

Build the questionnaire builder, subject/reviewer selection, and DPDP data-rights handling.

Capacity: 20 points. Goal text names questionnaire builder, subject/reviewer selection, and DPDP data-rights handling as scope.

**Related:** US-008, US-009, US-020

- ⚠ Mapping of specific backlog items to this sprint is inferred only from the goal's wording -- confirm against the actual sprint board.

### DEV-SPRINT-4 · approved · source: plan:Sprint 4

Launch cycles with email invitations and let reviewers submit feedback.

Capacity: 20 points. Goal text names cycle launch/email invitations and reviewer feedback submission as scope.

**Related:** US-011, US-013

- ⚠ Mapping of specific backlog items to this sprint is inferred only from the goal's wording -- confirm against the actual sprint board.

### DEV-SPRINT-5 · approved · source: plan:Sprint 5

Deliver reminders, anonymity enforcement, and in-app aggregated report viewing.

Capacity: 20 points. Goal text names reminders, anonymity enforcement, and in-app report viewing as scope.

**Related:** US-012, US-014, US-015

- ⚠ Mapping of specific backlog items to this sprint is inferred only from the goal's wording -- confirm against the actual sprint board.

### DEV-SPRINT-6 · approved · source: plan:Sprint 6

Add PDF export, the HR progress dashboard, and close out scope-clarification stories.

Capacity: 20 points. Goal text names PDF export, HR progress dashboard, and scope-clarification stories (no HRIS, no advanced analytics, adults-only) as scope.

**Related:** US-016, US-018, US-006, US-017, US-022

- ⚠ Mapping of specific backlog items to this sprint is inferred only from the goal's wording -- confirm against the actual sprint board.

### DEV-BACKLOG-EPIC-001 · approved · source: plan:EPIC-001

Backlog for Authentication and RBAC epic: 3 stories, 13 points, assigned to backend-agent and security-agent.

US-001 Sign in with email and password -- 5 pts -- backend-agent. US-002 Role-based access enforcement -- 5 pts -- security-agent. US-003 Password reset -- 3 pts -- backend-agent. EPIC-001 itself is unestimated/unassigned (epic-level item).

**Related:** EPIC-001, US-001, US-002, US-003

- ⚠ No execution/completion status (ticket state, commits, code review) was provided for these items -- cannot confirm how much, if any, has actually been implemented.

### DEV-BACKLOG-EPIC-002 · approved · source: plan:EPIC-002

Backlog for Employee Directory and Reporting Lines epic: 3 stories, 11 points, backend-agent and qa-agent.

US-004 Manage employee records -- 5 pts -- backend-agent. US-005 Manage reporting lines and manager relationships -- 5 pts -- backend-agent. US-006 No HRIS integration in v1 -- 1 pt -- qa-agent.

**Related:** EPIC-002, US-004, US-005, US-006

- ⚠ No execution/completion status provided.

### DEV-BACKLOG-EPIC-003 · approved · source: plan:EPIC-003

Backlog for Feedback Cycle and Questionnaire Setup epic: 4 stories (20 pts) plus 3 subtasks under US-009, backend-agent and frontend-agent.

US-007 Create a feedback cycle -- 5 pts -- backend-agent. US-008 Build a questionnaire -- 5 pts -- backend-agent. US-009 Select subjects and reviewers -- 8 pts -- backend-agent, with subtasks: US-009-T1 Implement subject/reviewer assignment endpoint (backend-agent), US-009-T2 Implement reviewer-suggestion logic from reporting lines (backend-agent), US-009-T3 Build reviewer selection and threshold-warning UI (frontend-agent). US-010 Configure minimum-reviewer threshold -- 2 pts -- backend-agent.

**Related:** EPIC-003, US-007, US-008, US-009, US-009-T1, US-009-T2, US-009-T3, US-010

- ⚠ No execution/completion status provided.

### DEV-BACKLOG-EPIC-004 · approved · source: plan:EPIC-004

Backlog for Reviewer Invitations and Reminders epic: 2 stories (13 pts) plus 3 subtasks under US-011, integration-agent and backend-agent.

US-011 Invite reviewers by email -- 8 pts -- integration-agent, with subtasks: US-011-T1 Implement Celery task to send invitation emails via SMTP (integration-agent), US-011-T2 Record and expose email delivery failures (backend-agent), US-011-T3 Wire cycle launch to enqueue invitation jobs (backend-agent). US-012 Send reminders for outstanding feedback -- 5 pts -- integration-agent.

**Related:** EPIC-004, US-011, US-011-T1, US-011-T2, US-011-T3, US-012

- ⚠ No execution/completion status provided.

### DEV-BACKLOG-EPIC-005 · approved · source: plan:EPIC-005

Backlog for Anonymous Feedback Submission epic: 2 stories (11 pts) plus 4 subtasks under US-013, frontend-agent, backend-agent and security-agent.

US-013 Submit feedback as a reviewer -- 8 pts -- frontend-agent, with subtasks: US-013-T1 Implement draft-save endpoint for assignments (backend-agent), US-013-T2 Implement submit endpoint with cycle-closed guard (backend-agent), US-013-T3 Build reviewer feedback form (frontend-agent), US-013-T4 Add resume-draft prefill flow (frontend-agent). US-014 Preserve reviewer anonymity -- 3 pts -- security-agent.

**Related:** EPIC-005, US-013, US-013-T1, US-013-T2, US-013-T3, US-013-T4, US-014

- ⚠ No execution/completion status provided.

### DEV-BACKLOG-EPIC-006 · approved · source: plan:EPIC-006

Backlog for Aggregated Feedback Reports and Export epic: 3 stories (14 pts) plus 3 subtasks under US-015, backend-agent, security-agent, frontend-agent and qa-agent.

US-015 View aggregated report in-app -- 8 pts -- backend-agent, with subtasks: US-015-T1 Implement threshold-gated aggregation query (backend-agent), US-015-T2 Enforce report access control (security-agent), US-015-T3 Build in-app report view (frontend-agent). US-016 Export report to PDF -- 5 pts -- backend-agent. US-017 No advanced org-wide analytics in v1 -- 1 pt -- qa-agent.

**Related:** EPIC-006, US-015, US-015-T1, US-015-T2, US-015-T3, US-016, US-017

- ⚠ No execution/completion status provided.

### DEV-BACKLOG-EPIC-007 · approved · source: plan:EPIC-007

Backlog for HR Cycle Progress Dashboard epic: 1 story, 5 points, frontend-agent.

US-018 Monitor cycle progress and completion -- 5 pts -- frontend-agent.

**Related:** EPIC-007, US-018

- ⚠ No execution/completion status provided.

### DEV-BACKLOG-EPIC-008 · approved · source: plan:EPIC-008

Backlog for DPDP Data Protection and Privacy epic: 4 stories, 12 points, frontend-agent, backend-agent, devops-agent and qa-agent.

US-019 Present a privacy notice -- 3 pts -- frontend-agent. US-020 Handle data-principal rights requests via HR -- 5 pts -- backend-agent. US-021 Host data in India (data residency) -- 3 pts -- devops-agent. US-022 Adults-only, no parental consent -- 1 pt -- qa-agent.

**Related:** EPIC-008, US-019, US-020, US-021, US-022

- ⚠ No execution/completion status provided.
<!-- sdlc:auto:end narrative -->
