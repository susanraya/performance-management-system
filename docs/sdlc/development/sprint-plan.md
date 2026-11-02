# Sprint Plan

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start sprints -->
## Sprint 1: Sprint 1

Stand up authentication, the employee directory, and the India-region hosting baseline.

Capacity: 20 points · Committed: 19

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-001 | Story | Sign in with email and password | 5 | backend-agent | — |
| US-002 | Story | Role-based access enforcement | 5 | security-agent | US-001 |
| US-004 | Story | Manage employee records | 5 | backend-agent | US-001, US-002 |
| US-006 | Story | No HRIS integration in v1 | 1 | qa-agent | US-004 |
| US-021 | Story | Host data in India (data residency) | 3 | devops-agent | — |

## Sprint 2: Sprint 2

Complete auth flows (reset, privacy notice), reporting lines, and cycle creation with the reviewer threshold.

Capacity: 20 points · Committed: 19

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-003 | Story | Password reset | 3 | backend-agent | US-001 |
| US-005 | Story | Manage reporting lines and manager relationships | 5 | backend-agent | US-004 |
| US-007 | Story | Create a feedback cycle for a review period | 5 | backend-agent | US-004 |
| US-010 | Story | Configure minimum-reviewer threshold | 2 | backend-agent | US-007 |
| US-019 | Story | Present a privacy notice | 3 | frontend-agent | US-001 |
| US-022 | Story | Adults-only, no parental consent | 1 | qa-agent | US-004 |

## Sprint 3: Sprint 3

Build the questionnaire builder, subject/reviewer selection, and DPDP data-rights handling.

Capacity: 20 points · Committed: 18

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-008 | Story | Build a questionnaire with rating-scale and open-text questions | 5 | backend-agent | US-007 |
| US-009 | Story | Select subjects and their reviewers | 8 | backend-agent | US-007, US-005 |
| ↳ US-009-T1 | Task | Implement subject and reviewer assignment endpoint | — | backend-agent | — |
| ↳ US-009-T2 | Task | Implement reviewer-suggestion logic from reporting lines | — | backend-agent | — |
| ↳ US-009-T3 | Task | Build reviewer selection and threshold-warning UI | — | frontend-agent | — |
| US-020 | Story | Handle data-principal rights requests via HR | 5 | backend-agent | US-004, US-019 |

## Sprint 4: Sprint 4

Launch cycles with email invitations and let reviewers submit feedback.

Capacity: 20 points · Committed: 16

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-011 | Story | Invite reviewers by email | 8 | integration-agent | US-009, US-007 |
| ↳ US-011-T1 | Task | Implement Celery task to send invitation emails via SMTP | — | integration-agent | — |
| ↳ US-011-T2 | Task | Record and expose email delivery failures | — | backend-agent | — |
| ↳ US-011-T3 | Task | Wire cycle launch to enqueue invitation jobs | — | backend-agent | — |
| US-013 | Story | Submit feedback as a reviewer | 8 | frontend-agent | US-011, US-008 |
| ↳ US-013-T1 | Task | Implement draft-save endpoint for assignments | — | backend-agent | — |
| ↳ US-013-T2 | Task | Implement submit endpoint with cycle-closed guard | — | backend-agent | — |
| ↳ US-013-T3 | Task | Build reviewer feedback form | — | frontend-agent | — |
| ↳ US-013-T4 | Task | Add resume-draft prefill flow | — | frontend-agent | — |

## Sprint 5: Sprint 5

Deliver reminders, anonymity enforcement, and in-app aggregated report viewing.

Capacity: 20 points · Committed: 16

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-012 | Story | Send reminders for outstanding feedback | 5 | integration-agent | US-011 |
| US-014 | Story | Preserve reviewer anonymity | 3 | security-agent | US-013, US-010 |
| US-015 | Story | View aggregated report in-app | 8 | backend-agent | US-013, US-014, US-010 |
| ↳ US-015-T1 | Task | Implement threshold-gated aggregation query | — | backend-agent | — |
| ↳ US-015-T2 | Task | Enforce report access control | — | security-agent | — |
| ↳ US-015-T3 | Task | Build in-app report view | — | frontend-agent | — |

## Sprint 6: Sprint 6

Add PDF export, the HR progress dashboard, and close out scope-clarification stories.

Capacity: 20 points · Committed: 11

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-016 | Story | Export report to PDF | 5 | backend-agent | US-015 |
| US-017 | Story | No advanced org-wide analytics in v1 | 1 | qa-agent | US-015 |
| US-018 | Story | Monitor cycle progress and completion | 5 | frontend-agent | US-013, US-009, US-010 |

## Unscheduled

_Nothing unscheduled._
<!-- sdlc:auto:end sprints -->
