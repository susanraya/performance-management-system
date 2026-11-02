# performance management system — SDLC Documentation

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start overview -->
performance management system

**Documentation version:** v2
<!-- sdlc:auto:end overview -->

## Contents

<!-- sdlc:auto:start contents -->
| Document | State |
|---|---|
| [Requirements](requirements/README.md) | v1 approved |
| [Architecture](architecture/README.md) | 11 entries |
| [Development](development/README.md) | 1 entry |
| [Testing](testing/README.md) | 1 entry |
| [Deployment](deployment/README.md) | 1 entry |
| [Maintenance](maintenance/README.md) | 1 entry |
| [Data model](architecture/data-model.md) | generated |
| [API (OpenAPI)](architecture/api/openapi.yaml) | generated |
| [Decisions (ADRs)](architecture/adr/README.md) | 4 decisions |
| [Sprint plan](development/sprint-plan.md) | not generated yet |
| [Developer guide](development/developer-guide.md) | generated |
| [API reference](development/api-reference.md) | 1 route |
| [Test report](testing/test-report.md) | not run yet |
| [Tests](testing/test-cases.md) | 0 tests |
| [Deployment guide](deployment/deployment-guide.md) | not deployed yet |
| [Runbook](deployment/runbook.md) | not deployed yet |
| [Release notes](deployment/release-notes.md) | 0 releases |
| [Traceability matrix](traceability-matrix.md) | 22 requirements |
| [Changelog](CHANGELOG.md) | 2 versions |
<!-- sdlc:auto:end contents -->

## Open gaps

<!-- sdlc:auto:start open-gaps -->
### Requirements

- Password complexity/rules are referenced (AC-008) but never specified.
- No SSO in v1 is logged as an accepted risk (NFR-011); confirm this is acceptable long-term.
- Reset link expiry duration (NFR-003) is not quantified.
- The 'other required details' for an employee record beyond name and work email are not enumerated.
- No bulk-import mechanism (e.g. CSV) is mentioned as an alternative to manual entry; confirm this is intentional for a ~200-person org.
- The reviewer-suggestion algorithm (how many peers/direct reports are suggested, selection logic) is not detailed.
- No default or example value for the minimum-reviewer threshold is given.
- Whether a cycle's questionnaire can be reused/cloned across cycles is not addressed.
- Reminder cadence/schedule (e.g. how many days before cycle close, how often) is not specified.
- No concrete SMTP provider has been selected yet -- only environment-variable placeholders (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD) exist.
- No safeguard is described against re-identification via writing style or content in open-text comments, even when the numeric threshold is met.
- Exact visual layout/content of the aggregated report (chart types, comment grouping) is not specified.
- Whether dashboard updates are real-time/push or require a manual page refresh is not specified.
- No consent-manager mechanism or explicit consent capture/withdrawal flow is described -- only a one-time privacy notice; confirm this satisfies DPDP consent requirements or whether 'legitimate use' is being relied on instead.
- Whether this organisation qualifies as a Significant Data Fiduciary (requiring a DPO in India, audits, and data protection impact assessments) is not addressed anywhere in requirements.
- No breach-notification process is described: DPDP Act notification to the Data Protection Board and affected individuals, and CERT-In's 6-hour incident reporting plus 180-day ICT log retention are unaddressed.
- No accessibility requirements (Rights of Persons with Disabilities Act 2016 / GIGW-WCAG alignment) appear anywhere in the requirements.
- No rationale is recorded for the Angular 22 frontend choice.
- No architecture-phase design exists yet to translate this approved stack into concrete components, deployment topology or diagrams.
- No specific SMTP provider has been selected -- only environment-variable placeholders exist, so in-country delivery/log residency cannot yet be confirmed.
- Expiry duration and password-rule specifics are not given.
- The assumption that no sector regulator applies has not been independently verified against this specific organisation's industry.

### Architecture

- Architecture input does not reference specific requirement IDs (US-001..US-022); no explicit requirement-to-architecture traceability was provided, so related_ids could not be populated for any entry in this phase.
- No detail provided on session duration, token mechanism, or password-reset flow linkage to this path.
- Deployment node list mixes 'dev' labeling (S3+CloudFront) with production-grade choices (RDS, ECS) without clarifying which nodes are environment-specific vs. production-final — worth confirming before deployment phase.
- DPDP Act and RPwD Act 2016/GIGW are cited as compliance drivers but no explicit industry/domain compliance skill or regulation checklist was supplied in this input; a dedicated compliance traceability review (e.g. confirming which specific DPDP obligations — consent, breach notification, data principal rights timelines — are each covered by a requirement/design/test) has not been performed and should be tracked as an open item.

### Development

- Development phase has not started: no tickets, sprints, or code exist yet to document.

### Testing

- Testing phase has not started: no test plan or results exist yet to document.

### Deployment

- No deployment recorded yet: AWS ap-south-1 is the approved target but no environment has actually been provisioned or released to.

### Maintenance

- No maintenance history exists yet, since the application has not been deployed.
<!-- sdlc:auto:end open-gaps -->
