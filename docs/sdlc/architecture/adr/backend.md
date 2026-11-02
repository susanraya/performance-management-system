<!-- sdlc:auto:start adr -->
# ADR-0002: Use Django 5.1 for Backend

Status: Proposed  
Date: 2026-11-02

## Context and Problem Statement

Which Backend technology does the project use? Decided in architecture v1.

## Considered Options

- Django 5.1
- FastAPI
- Flask

## Decision Outcome

Chosen option: Django 5.1, because Its built-in admin, email/password auth and permissions directly enforce the HR/manager/employee boundaries and back the DPDP access/correction/erasure actions HR must perform, with DRF exposing the JSON API the Angular app consumes. Anonymity and threshold logic live in server-side services.

## Consequences

Not aimed at high-throughput APIs, which is irrelevant here as correctness over scale is the stated priority.
<!-- sdlc:auto:end adr -->