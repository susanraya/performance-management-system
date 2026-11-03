# Traceability Matrix

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start legend -->
Built from recorded links, not written by a model: requirement key → plan item (`source_stable_key`) → development ticket (`stable_key`) → the ticket's test steps → the last live deployment that started after the work finished. **AC tests** counts the story's acceptance criteria that have a test case, and those whose test cases all passed in the latest finished E2E run.
<!-- sdlc:auto:end legend -->

<!-- sdlc:auto:start matrix -->
| Requirement | Epic | Title | Plan items | Sprint | Design | Code | Commits | Ticket | Tests | AC tests | Deployed |
|---|---|---|---|---|---|---|---|---|---|---|---|
| US-001 | EPIC-001 | Sign in with email and password | US-001 | 1 | POST /api/auth/login, POST /api/auth/logout, backend, employee, frontend | — | — | pending | not run | 0/3 tested · 0/3 passing | — |
| US-002 | EPIC-001 | Role-based access enforcement | US-002 | 1 | backend, employee, frontend | — | — | pending | not run | 0/3 tested · 0/3 passing | — |
| US-003 | EPIC-001 | Password reset | US-003 | 2 | POST /api/auth/password-reset/confirm, POST /api/auth/password-reset/request, backend, employee, smtp | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-004 | EPIC-002 | Manage employee records | US-004 | 1 | GET /api/employees, PATCH /api/employees/{id}, POST /api/employees, backend, db, employee | — | — | pending | not run | 0/4 tested · 0/4 passing | — |
| US-005 | EPIC-002 | Manage reporting lines and manager relationships | US-005 | 2 | PUT /api/employees/{id}/manager, backend, db, employee | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-006 | EPIC-002 | No HRIS integration in v1 | US-006 | 1 | employee | — | — | pending | not run | 0/1 tested · 0/1 passing | — |
| US-007 | EPIC-003 | Create a feedback cycle for a review period | US-007 | 2 | POST /api/cycles, POST /api/cycles/{id}/close, POST /api/cycles/{id}/launch, backend, db, feedback_cycle | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-008 | EPIC-003 | Build a questionnaire with rating-scale and open-text questions | US-008 | 3 | POST /api/cycles/{id}/questions, backend, db, feedback_cycle, question | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-009 | EPIC-003 | Select subjects and their reviewers | US-009, US-009-T1, US-009-T2, US-009-T3 | 3 | GET /api/cycles/{id}/subjects/{sid}/reviewer-suggestions, POST /api/cycles/{id}/subjects, backend, cycle_subject, db, employee, frontend, reviewer_assignment | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-010 | EPIC-003 | Configure minimum-reviewer threshold | US-010 | 2 | POST /api/cycles, backend, feedback_cycle | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-011 | EPIC-004 | Invite reviewers by email | US-011, US-011-T1, US-011-T2, US-011-T3 | 4 | GET /api/email-failures, POST /api/cycles/{id}/launch, backend, email_delivery, redis, reviewer_assignment, smtp, worker | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-012 | EPIC-004 | Send reminders for outstanding feedback | US-012 | 5 | POST /api/cycles/{id}/reminders, email_delivery, redis, reviewer_assignment, smtp, worker | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-013 | EPIC-005 | Submit feedback as a reviewer | US-013, US-013-T1, US-013-T2, US-013-T3, US-013-T4 | 4 | GET /api/assignments/{id}, POST /api/assignments/{id}/submit, PUT /api/assignments/{id}/draft, backend, db, feedback_response, frontend, reviewer_assignment | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-014 | EPIC-005 | Preserve reviewer anonymity | US-014 | 5 | backend, db, feedback_response | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-015 | EPIC-006 | View aggregated report in-app | US-015, US-015-T1, US-015-T2, US-015-T3 | 5 | GET /api/cycles/{id}/subjects/{sid}/report, backend, cycle_subject, db, feedback_response, frontend | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-016 | EPIC-006 | Export report to PDF | US-016 | 6 | GET /api/cycles/{id}/subjects/{sid}/report.pdf, backend, feedback_response | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-017 | EPIC-006 | No advanced org-wide analytics in v1 | US-017 | 6 | — | — | — | not started | not run | 0/1 tested · 0/1 passing | — |
| US-018 | EPIC-007 | Monitor cycle progress and completion | US-018 | 6 | GET /api/cycles/{id}/dashboard, backend, cycle_subject, frontend, reviewer_assignment | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-019 | EPIC-008 | Present a privacy notice | US-019 | 2 | POST /api/privacy-notice/acknowledge, backend, frontend, privacy_notice_acknowledgement | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-020 | EPIC-008 | Handle data-principal rights requests via HR | US-020 | 3 | POST /api/data-rights-requests, POST /api/data-rights-requests/{id}/action, audit_log, backend, data_rights_request, db, employee | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-021 | EPIC-008 | Host data in India (data residency) | US-021 | 1 | backend, db, redis | — | — | pending | not run | 0/1 tested · 0/1 passing | — |
| US-022 | EPIC-008 | Adults-only, no parental consent | US-022 | 2 | employee | — | — | not started | not run | 0/1 tested · 0/1 passing | — |
<!-- sdlc:auto:end matrix -->
