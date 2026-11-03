# Product Requirements

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
## Summary

### EPIC-001 · approved · source: requirements:EPIC-001

Email/password sign-in for three roles (HR/admin, manager, employee); each role is restricted to its permitted features/data; users can self-service reset a forgotten password. No SSO in v1.

US-001 (critical) Sign in with email and password: correct credentials authenticate and route to a role-appropriate home screen (AC-001); incorrect credentials show one generic error that does not reveal whether the email is registered (AC-002); signing out ends the session, requiring re-authentication for protected pages (AC-003).
US-002 (critical) Role-based access enforcement: employees are denied HR-only/manager-only pages and data (AC-004); managers are denied reports for employees outside their reporting line (AC-005); HR/admin has access to employee management, cycle setup, dashboards and reports (AC-006).
US-003 (medium) Password reset: a reset link is emailed to the registered address on request (AC-007); a valid unexpired link lets the user set a new password meeting password rules and sign in with it (AC-008).
Epic-level assumption stated in the input: roles are exactly HR/admin, manager and employee; sign-in is email/password only, no SSO in v1.

**Related:** NFR-001, NFR-002, NFR-003, NFR-011, US-001, US-002, US-003

- ⚠ The three-role / email-password-only assumption is explicitly flagged in the input as needing confirmation ('Correct if different') -- no product-owner confirmation is present in the material provided.

### EPIC-002 · approved · source: requirements:EPIC-002

HR/admin manages the employee directory and reporting lines directly in-app; there is no HRIS/payroll sync in v1.

US-004 (critical) Manage employee records: HR can add employees with name/work email/other details (AC-009); edit details with persisted updates shown app-wide (AC-010); deactivate a leaver so they can't sign in and are excluded from new cycles while historical data is retained (AC-011); duplicate work emails are rejected with a clear validation message (AC-012).
US-005 (high) Manage reporting lines: HR can assign a manager to an employee so the manager can later access that employee's aggregated report (AC-013); manager changes take effect for future access and are persisted (AC-014); self-manager or direct circular relationships are rejected with a clear message (AC-015).
US-006 (low) No HRIS integration in v1: directory data is entered and maintained manually; no import/sync from an HRIS or payroll system is offered (AC-016), consistent with the explicit out-of-scope item (HRIS/payroll integration, e.g. Darwinbox, Keka, Workday sync).

**Related:** US-004, US-005, US-006

### EPIC-003 · approved · source: requirements:EPIC-003

HR creates a time-bounded 360° feedback cycle, builds a rating-scale plus open-text questionnaire, selects subjects/reviewers (with reporting-line suggestions), and sets a minimum-reviewer threshold that gates report visibility.

US-007 (critical) Create a feedback cycle: cycle created with name/review period/dates, saved as draft (AC-017); launching a fully configured cycle (subjects, reviewers, questionnaire) makes it active and triggers invitations (AC-018); reaching the end date or manual close stops further submissions (AC-019).
US-008 (critical) Build questionnaire: rating-scale questions saved with their defined scale, e.g. 1-5 (AC-020); open-text questions saved allowing free text (AC-021); launch is blocked if the questionnaire is empty, prompting at least one question (AC-022).
US-009 (critical) Select subjects and reviewers: subject + reviewer list saved per cycle (AC-023); system suggests peers/direct reports/manager from reporting lines, HR can accept/add/remove before launch (AC-024); HR is warned pre-launch if a subject has fewer reviewers than the configured minimum threshold (AC-025).
US-010 (high) Configure minimum-reviewer threshold: HR sets and saves the minimum-reviewer value, applied to report visibility (AC-026); subjects below threshold have their aggregated report withheld with a message that too few responses were received (AC-027).

**Related:** US-007, US-008, US-009, US-010, NFR-005, NFR-010

### EPIC-004 · approved · source: requirements:EPIC-004

Reviewers are invited and reminded by background email jobs so HR is never blocked; delivery failures are recorded for retry.

US-011 (critical) Invite reviewers by email: launch completion sends each reviewer an email invitation with a feedback link (AC-028); missing/invalid SMTP credentials cause the failure to be recorded and surfaced to HR for retry (AC-029).
US-012 (high) Send reminders for outstanding feedback: reviewers with outstanding (not submitted) requests in an active cycle get a reminder email, sent on schedule or HR-triggered, with the pending-feedback link (AC-030); reviewers who already submitted are excluded from reminders (AC-031).

**Related:** US-011, US-012, NFR-009

### EPIC-005 · approved · source: requirements:EPIC-005

Reviewers complete rating-scale and open-text questionnaires for assigned subjects anonymously; identities are never shown, only aggregated results, and individual/small-group results are withheld below the minimum-reviewer threshold.

US-013 (critical) Submit feedback as a reviewer: assigned reviewer answers questions and submits, recorded against the cycle/subject (AC-032); partial answers can be saved and resumed later (AC-033); submission is blocked once the cycle closes (AC-034).
US-014 (critical) Preserve reviewer anonymity: individual responses are never attributed to a reviewer in any report or view, only aggregates shown (AC-035); below-threshold subjects have individual/small-group results withheld to prevent re-identification (AC-036).

**Related:** US-013, US-014, NFR-004, NFR-005

### EPIC-006 · approved · source: requirements:EPIC-006

Subjects, their manager and HR view an aggregated per-employee 360° report in-app (rating results plus collated comments, no identities) and can export it to PDF; results are withheld below threshold; no org-wide analytics in v1.

US-015 (critical) View aggregated report in-app: authorised viewers see aggregated ratings and collated comments with no reviewer identities once threshold is met (AC-037); below threshold the report is withheld with an explanatory message (AC-038); unauthorised managers/employees are denied access (AC-039).
US-016 (high) Export report to PDF: a visible report can be exported to PDF with the same aggregated content and no identities (AC-040); a withheld report produces no PDF and shows the same withheld message (AC-041).
US-017 (low) No advanced org-wide analytics in v1: only per-employee aggregated reports and the cycle progress dashboard are available; cross-org trend analytics/benchmarking are explicitly out of scope for v1 (AC-042).

**Related:** US-015, US-016, US-017, NFR-004, NFR-005

### EPIC-007 · approved · source: requirements:EPIC-007

HR/admin dashboard tracks cycle progress and completion so outstanding feedback can be followed up before close.

US-018 (high) Monitor cycle progress and completion: dashboard shows overall completion and, per subject, submitted vs outstanding reviewer counts (AC-043); subjects below the minimum-reviewer threshold are flagged (AC-044); figures refresh to reflect the latest submissions (AC-045).

**Related:** US-018

### EPIC-008 · approved · source: requirements:EPIC-008

DPDP Act 2023 compliance: a privacy notice is presented and acknowledgement recorded, HR actions data-principal access/correction/erasure requests, all data is hosted in India, and the app assumes an adults-only workforce (no parental-consent flows).

DPDP Act 2023 -- notice and consent (US-019): user is shown a privacy notice on first sign-in or when updated (AC-046); presentation/acknowledgement is recorded (AC-047).
DPDP Act 2023 -- data-principal rights (US-020): HR records and actions access/correction/erasure requests, logging the action (AC-048); erasure removes personal data while retaining anonymised aggregates that cannot re-identify anyone (AC-049).
DPDP Act 2023 -- data residency (US-021): employee and feedback data are hosted on infrastructure located in India, AWS Mumbai ap-south-1 per architecture (AC-050); input states no sector-specific RBI/SEBI/IRDAI localisation applies since this is an internal HR tool, not a regulated financial/insurance platform.
DPDP Act 2023 -- children's data (US-022): app assumes all employees are 18+, so no parental-consent or child-data workflows are built (AC-051); the input notes minors in future employment would require a future DPDP child-consent change.

**Related:** US-019, US-020, US-021, US-022, NFR-006, NFR-007, NFR-008, NFR-012

- ⚠ DPDP 'Significant Data Fiduciary' duties (a DPO located in India, data protection audits, data protection impact assessments) are not addressed by any requirement, design, or test in the input -- confirm whether the organisation's scale/data sensitivity triggers this classification.
- ⚠ DPDP consent-manager provisions are not addressed by any requirement.
- ⚠ Breach notification duties (DPDP Act: notify the Data Protection Board and affected individuals; CERT-In: report cyber incidents within 6 hours and retain ICT logs for 180 days) are not defined as a requirement; architecture only notes CloudWatch logs 'supporting CERT-In retention' without a stated retention period or breach-notification process.

### REQ-NFR · approved · source: requirements:non-functional

Twelve non-functional requirements cover security, privacy/anonymity, DPDP compliance, availability of background email, and scale, plus two explicitly accepted risks (no SSO, adults-only).

NFR-001 (security) No account enumeration on sign-in -- applies to US-001.
NFR-002 (security) Sessions end on sign-out -- applies to US-001.
NFR-003 (security) Time-limited password-reset links, valid only unexpired, new password must meet password rules -- applies to US-003.
NFR-004 (privacy) Reviewer anonymity in all views/exports, never attributed -- applies to US-013/014/015/016.
NFR-005 (privacy) Minimum-reviewer threshold gates report visibility to prevent re-identification -- applies to US-010/014/015/016.
NFR-006 (privacy) Erasure retains only anonymised aggregates -- applies to US-020.
NFR-007 (compliance) Data residency in India; target AWS Mumbai ap-south-1 -- applies to US-021.
NFR-008 (compliance) DPDP accountability records: privacy-notice acknowledgement and rights-request actions logged -- applies to US-019/020.
NFR-009 (availability) Background queued email with recorded delivery failures for invitations/reminders -- applies to US-011/012.
NFR-010 (scalability) Single internal org, correctness over scale, target under ~200 employees -- applies to the whole system.
NFR-011 (security, accepted risk) No SSO in v1, email/password only -- applies to US-001.
NFR-012 (compliance, accepted risk) Adults-only, no parental-consent workflows -- applies to US-022.

**Related:** US-001, US-003, US-010, US-011, US-012, US-013, US-014, US-015, US-016, US-019, US-020, US-021, US-022
<!-- sdlc:auto:end narrative -->

<!-- sdlc:auto:start summary -->
**Requirements version:** v1  
**Delivery scope:** lightweight  
**Approved:** 2026-11-02

**Capabilities in scope:** Feedback cycle creation for a review period, Questionnaire builder with rating-scale and open-text questions, Subject and reviewer selection per cycle, Feedback submission by reviewers, Aggregated per-employee feedback report viewed in-app, Employee directory management, Reporting-line and manager relationship management, Email/password sign-in

**Approved technology stack:**

| Layer | Choice | Rationale |
|---|---|---|
| backend | Django | This is an internal tool that is mostly structured record-keeping: an employee directory, reporting lines, cycles, reviewer lists, questionnaires and three roles. Django gives you a built-in admin screen, email/password accounts and a permissions system out of the box, so the HR/manager/employee boundaries and the DPDP access/correction/erasure requests HR must action are enforced by proven code. It changed from the platform default (FastAPI) because that batteries-included CRUD and auth fit this product and there is no high-throughput API need. |
| cloud | AWS | DPDP means employee and feedback records must be hosted in India; AWS's Mumbai (ap-south-1) region lets you keep all data in-country, and AWS is the only cloud this platform deploys to. Its scale is far more than 200 employees need, so you are buying residency and reliability, not capacity. |
| database | PostgreSQL | Your data is highly relational — employees link to managers, cycles link to subjects and reviewers, responses link to questionnaires — and the anonymity rule depends on getting those joins and the minimum-reviewer threshold exactly right. PostgreSQL enforces these relationships strictly, which matches your stated priority of correctness over scale, and it runs comfortably in the AWS Mumbai region to keep data in India. |
| frontend | Angular | — |
<!-- sdlc:auto:end summary -->

<!-- sdlc:auto:start epics -->
## EPIC-001: Authentication and Role-Based Access

Email/password sign-in for an internal, single-company tool, with three roles — HR/admin, manager, employee — each seeing only what their role permits. Assumption: roles are HR/admin, manager and employee as described; sign-in is email/password (no SSO in v1). Correct if different.

### US-001: Sign in with email and password

**Priority:** critical

> As a user (HR/admin, manager or employee), I want to sign in with my email address and a password, so that I can securely access the feedback application for my organisation.

| ID | Given | When | Then |
|---|---|---|---|
| AC-001 | I have a registered account with a valid email and password | I submit the correct credentials on the sign-in page | I am authenticated and taken to the home screen appropriate to my role |
| AC-002 | I am on the sign-in page | I submit an incorrect email or password | I am denied access and shown a generic error message that does not reveal whether the email exists |
| AC-003 | I am an authenticated user | I choose to sign out | my session is ended and I must sign in again to access any protected page |

### US-002: Role-based access enforcement

**Priority:** critical

> As a HR/admin, I want each role to be restricted to the features and data it is permitted to see, so that employees and managers cannot access data or administrative actions beyond their role.

| ID | Given | When | Then |
|---|---|---|---|
| AC-004 | I am signed in as an employee | I attempt to open an HR-only or manager-only page (e.g. cycle setup or another employee's report) | access is denied and I am not shown the restricted data |
| AC-005 | I am signed in as a manager | I attempt to view the report of an employee who is not in my reporting line | access is denied |
| AC-006 | I am signed in as HR/admin | I navigate to employee management, cycle setup, dashboards and reports | I am granted access to all of these administrative features |

### US-003: Password reset

**Priority:** medium

> As a user, I want to reset my password if I forget it, so that I can regain access without contacting an administrator.

| ID | Given | When | Then |
|---|---|---|---|
| AC-007 | I have forgotten my password | I request a reset for my registered email address | a password-reset link is emailed to me via the transactional email provider |
| AC-008 | I have received a valid, unexpired reset link | I set a new password meeting the password rules | my password is updated and I can sign in with it |

## EPIC-002: Employee Directory and Reporting Lines

HR/admin maintains the employee directory and reporting relationships directly in the app. There is no external HRIS/payroll integration in v1 (explicitly out of scope). Assumption: reporting relationships are managed in-app.

### US-004: Manage employee records

**Priority:** critical

> As a HR/admin, I want to create, edit and deactivate employee records in the directory, so that the directory accurately reflects current staff for feedback cycles.

| ID | Given | When | Then |
|---|---|---|---|
| AC-009 | I am HR/admin on the employee directory | I add an employee with name, work email and other required details | the employee is saved and appears in the directory and is available for selection in cycles |
| AC-010 | an employee exists in the directory | I edit their details and save | the updated details are persisted and shown throughout the app |
| AC-011 | an employee has left the organisation | I deactivate their record | they can no longer sign in and are excluded from new cycle selection, while historical data is retained |
| AC-012 | I attempt to add an employee with an email that already exists | I save the record | the system rejects the duplicate and shows a clear validation message |

### US-005: Manage reporting lines and manager relationships

**Priority:** high

> As a HR/admin, I want to set each employee's manager and view reporting relationships, so that the correct managers can see their team's reports and reviewers can be suggested per cycle.

| ID | Given | When | Then |
|---|---|---|---|
| AC-013 | two active employees exist | I assign one employee as the manager of another | the reporting relationship is saved and the manager can later access that employee's aggregated report |
| AC-014 | an employee's manager changes | I update the reporting line | the new manager relationship takes effect for future access and the change is persisted |
| AC-015 | I attempt to set a reporting line that would make an employee their own manager or create a direct circular report | I save | the system rejects the invalid relationship with a clear message |

### US-006: No HRIS integration in v1

**Priority:** low

> As a HR/admin, I want to understand that employee data is entered and maintained manually, so that I have correct expectations that there is no automatic sync from an HRIS or payroll system.

| ID | Given | When | Then |
|---|---|---|---|
| AC-016 | I am setting up the employee directory | I look for an import/sync from an external HRIS or payroll system | no such integration is offered in v1 and directory data is maintained manually in-app (HRIS/payroll integration is out of scope) |

## EPIC-003: Feedback Cycle and Questionnaire Setup

HR/admin creates a feedback cycle for a review period, selects each subject and their reviewers (peers, direct reports, manager), and builds a questionnaire mixing rating-scale and open-text questions. Assumption: questionnaires combine rating-scale and open-text questions; a minimum-reviewer threshold gates report visibility.

### US-007: Create a feedback cycle for a review period

**Priority:** critical

> As a HR/admin, I want to create a 360° feedback cycle for a defined review period, so that feedback collection is organised and time-bounded.

| ID | Given | When | Then |
|---|---|---|---|
| AC-017 | I am HR/admin | I create a cycle with a name, review period and start/end dates | the cycle is saved in a draft state ready for configuration |
| AC-018 | a cycle has subjects, reviewers and a questionnaire configured | I launch the cycle | its status becomes active and reviewer invitations are triggered |
| AC-019 | an active cycle has reached its end date or I close it | the cycle is closed | no further feedback can be submitted and the cycle status reflects it is closed |

### US-008: Build a questionnaire with rating-scale and open-text questions

**Priority:** critical

> As a HR/admin, I want to define a questionnaire combining rating-scale questions and open-text comment questions, so that I can capture both quantitative competency ratings and qualitative feedback.

| ID | Given | When | Then |
|---|---|---|---|
| AC-020 | I am configuring a cycle | I add a rating-scale question with a defined scale (e.g. 1–5) | the question is saved as part of the questionnaire with its scale |
| AC-021 | I am configuring a cycle | I add an open-text comment question | the question is saved allowing free-text responses |
| AC-022 | I try to launch a cycle with an empty questionnaire | I attempt to launch | the system prevents launch and prompts me to add at least one question |

### US-009: Select subjects and their reviewers

**Priority:** critical

> As a HR/admin, I want to pick each subject employee and assign their reviewers (peers, direct reports, manager), so that each employee receives multi-source 360° feedback.

| ID | Given | When | Then |
|---|---|---|---|
| AC-023 | a cycle is being configured | I select an employee as a subject and assign reviewers from the directory | the subject and their reviewer list are saved for the cycle |
| AC-024 | I am assigning reviewers for a subject | the system suggests reviewers based on reporting lines (peers, direct reports, manager) | I can accept, add or remove individual reviewers before launch |
| AC-025 | a subject has fewer reviewers than the configured minimum-reviewer threshold | I review the cycle before launch | the system warns me that the subject's report may not be shown unless the threshold is met |

### US-010: Configure minimum-reviewer threshold

**Priority:** high

> As a HR/admin, I want to set a minimum number of reviewers required before a report is shown, so that anonymity is preserved by never showing results based on too few responses.

| ID | Given | When | Then |
|---|---|---|---|
| AC-026 | I am configuring a cycle | I set the minimum-reviewer threshold | the value is saved and applied when determining report visibility. Assumption: a minimum-reviewer threshold gates report visibility to protect anonymity |
| AC-027 | a subject's submitted responses are below the threshold | the report is generated | the aggregated report is withheld and viewers see a message that too few responses were received to show results |

## EPIC-004: Reviewer Invitations and Reminders

Reviewers and subjects are invited and reminded by email through a transactional email provider (requires an API key/SMTP credentials). Assumption: email is the notification channel; the provider must be configured.

### US-011: Invite reviewers by email

**Priority:** critical

> As a HR/admin, I want assigned reviewers to be invited by email when a cycle launches, so that reviewers know they have feedback to provide and can access the form.

| ID | Given | When | Then |
|---|---|---|---|
| AC-028 | a cycle with assigned reviewers is launched | the launch completes | each reviewer receives an email invitation containing a link to submit their feedback |
| AC-029 | the transactional email provider credentials are missing or invalid | an invitation is attempted | the failure is recorded and surfaced to HR/admin so it can be retried |

### US-012: Send reminders for outstanding feedback

**Priority:** high

> As a HR/admin, I want reviewers who have not yet submitted to be reminded by email, so that completion rates improve before the cycle closes.

| ID | Given | When | Then |
|---|---|---|---|
| AC-030 | a reviewer has an outstanding (not submitted) feedback request in an active cycle | a reminder is sent (automatically on schedule or triggered by HR) | the reviewer receives a reminder email with the link to their pending feedback |
| AC-031 | a reviewer has already submitted their feedback | reminders are sent | that reviewer does not receive a reminder |

## EPIC-005: Anonymous Feedback Submission

Reviewers complete the questionnaire for each subject they are assigned. Feedback is anonymous — reviewer identities are hidden and responses are only ever shown aggregated. Fact: reviewer identities are hidden; results are aggregated.

### US-013: Submit feedback as a reviewer

**Priority:** critical

> As a employee acting as a reviewer, I want to complete and submit the questionnaire for each subject I am assigned, so that my feedback contributes to their 360° report.

| ID | Given | When | Then |
|---|---|---|---|
| AC-032 | I am an assigned reviewer in an active cycle | I open my feedback request and answer the rating-scale and open-text questions | I can submit my responses and they are recorded against the cycle for that subject |
| AC-033 | I have started but not finished | I save my progress and return later | my partial responses are retained so I can complete them |
| AC-034 | the cycle has closed | I attempt to submit feedback | submission is blocked and I am informed the cycle is closed |

### US-014: Preserve reviewer anonymity

**Priority:** critical

> As a employee acting as a reviewer, I want my identity to be hidden in all reports and views, so that I can give honest feedback without it being attributed to me.

| ID | Given | When | Then |
|---|---|---|---|
| AC-035 | I have submitted feedback | any subject, manager or HR/admin views the resulting report | my individual responses are never shown attributed to me — only aggregated results are displayed |
| AC-036 | the number of submitted reviewers for a subject is below the minimum-reviewer threshold | the report would otherwise be shown | individual or small-group results are withheld to prevent re-identification |

## EPIC-006: Aggregated Feedback Reports and Export

The system produces per-employee aggregated reports, viewable in-app and exportable to PDF, shared with the subject, their manager and HR, subject to the minimum-reviewer threshold. Assumption: reports are per-employee aggregated views with PDF export; no advanced org-wide analytics in v1.

### US-015: View aggregated report in-app

**Priority:** critical

> As a subject employee, their manager, or HR/admin, I want to view a subject's aggregated 360° feedback report in the app, so that the employee and those authorised can understand the feedback.

| ID | Given | When | Then |
|---|---|---|---|
| AC-037 | a subject's submitted reviewers meet the minimum threshold | I (as the subject, their manager, or HR) open their report | I see aggregated rating-scale results and collated open-text comments with no reviewer identities |
| AC-038 | the submitted reviewers are below the minimum threshold | I open the report | the report is withheld and I see a message explaining too few responses were received |
| AC-039 | I am a manager or employee not authorised to view a particular report | I attempt to open it | access is denied |

### US-016: Export report to PDF

**Priority:** high

> As a subject employee, their manager, or HR/admin, I want to export a visible aggregated report to PDF, so that I can save or share it offline.

| ID | Given | When | Then |
|---|---|---|---|
| AC-040 | I can view a report in-app | I choose to export it to PDF | a PDF of the aggregated report is generated that contains the same aggregated content and no reviewer identities |
| AC-041 | a report is withheld because the threshold is not met | I attempt to export it | no PDF is produced and I am shown the same withheld message |

### US-017: No advanced org-wide analytics in v1

**Priority:** low

> As a HR/admin, I want clarity that reporting is per-employee aggregation only, so that expectations are correct about analytics scope in v1.

| ID | Given | When | Then |
|---|---|---|---|
| AC-042 | I am viewing reporting features | I look for cross-organisation trend analytics or benchmarking | only per-employee aggregated reports and the cycle progress dashboard are available (advanced org-wide analytics are out of scope for v1) |

## EPIC-007: HR Cycle Progress Dashboard

HR/admin gets a dashboard showing cycle progress and completion. Assumption: dashboard covers cycle progress/completion, not advanced analytics.

### US-018: Monitor cycle progress and completion

**Priority:** high

> As a HR/admin, I want a dashboard showing progress and completion for each active cycle, so that I can track participation and follow up where feedback is outstanding.

| ID | Given | When | Then |
|---|---|---|---|
| AC-043 | a cycle is active | I open the dashboard | I see overall completion and, per subject, how many assigned reviewers have submitted versus outstanding |
| AC-044 | a subject is below the minimum-reviewer threshold | I view the dashboard | that subject is flagged so I can take action before the cycle closes |
| AC-045 | feedback is submitted during the cycle | I refresh or reopen the dashboard | the progress figures reflect the latest submissions |

## EPIC-008: DPDP Data Protection and Privacy

Employee records and feedback are personal data under India's DPDP Act 2023. The app presents a privacy notice, supports data-principal rights requests handled by HR, and hosts data in India. Assumption: employees are adults (18+), so no parental-consent flows; data residency is India.

### US-019: Present a privacy notice

**Priority:** high

> As a user, I want to be shown a privacy notice describing how my personal data is used, so that the organisation meets DPDP Act 2023 notice obligations.

| ID | Given | When | Then |
|---|---|---|---|
| AC-046 | I am a new or existing user | I first sign in or when the notice is updated | I am presented with the privacy notice explaining what data is collected and how it is used |
| AC-047 | I have been shown the privacy notice | I continue using the app | the fact that the notice was presented (and acknowledged where required) is recorded |

### US-020: Handle data-principal rights requests via HR

**Priority:** high

> As a HR/admin, I want to receive and action data-principal rights requests (access, correction, erasure), so that the organisation can fulfil DPDP rights obligations for employees.

| ID | Given | When | Then |
|---|---|---|---|
| AC-048 | an employee raises a data-access, correction or erasure request | I (HR/admin) record and process it in the app | I can retrieve, correct or remove the relevant personal data and the action is logged. Assumption: rights requests are routed through and actioned by HR |
| AC-049 | an erasure request is actioned for an employee | the employee is removed | their personal data is erased while aggregated, anonymised feedback that cannot re-identify any individual may be retained |

### US-021: Host data in India (data residency)

**Priority:** high

> As a HR/admin, I want all personal data to be hosted within India, so that the deployment aligns with DPDP expectations and data-residency requirements.

| ID | Given | When | Then |
|---|---|---|---|
| AC-050 | the application and its data stores are provisioned | hosting is configured | employee records and feedback data are stored in infrastructure located in India. Assumption: no sector-specific (RBI/SEBI/IRDAI) localisation applies as this is an internal HR tool |

### US-022: Adults-only, no parental consent

**Priority:** low

> As a HR/admin, I want the app to assume all employees are adults (18+), so that no parental-consent flows are required or built.

| ID | Given | When | Then |
|---|---|---|---|
| AC-051 | employees are maintained in the directory | accounts are created and used | no parental-consent or child-data workflows are triggered. Assumption: all employees are adults; if minors are ever employed, DPDP child-consent handling would be a future change |
<!-- sdlc:auto:end epics -->
