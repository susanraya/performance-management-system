<!-- sdlc:auto:start adr -->
# ADR-0003: Use PostgreSQL 16 for Database

Status: Proposed  
Date: 2026-11-02

## Context and Problem Statement

Which Database technology does the project use? Decided in architecture v1.

## Considered Options

- PostgreSQL 16
- MySQL
- SQLite

## Decision Outcome

Chosen option: PostgreSQL 16, because Strictly enforces the relational links (employees to managers, cycles to subjects and reviewers, responses to questionnaires) the anonymity rule and minimum-reviewer threshold depend on, and runs in RDS ap-south-1 to keep data in India. JSONB and full-text live inside it should structured notes/search ever be needed.

## Consequences

More operational setup than SQLite, justified by referential-integrity guarantees and in-country hosting.
<!-- sdlc:auto:end adr -->