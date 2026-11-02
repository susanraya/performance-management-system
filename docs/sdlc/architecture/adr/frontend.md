<!-- sdlc:auto:start adr -->
# ADR-0001: Use Angular 22 for Frontend

Status: Proposed  
Date: 2026-11-02

## Context and Problem Statement

Which Frontend technology does the project use? Decided in architecture v1.

## Considered Options

- Angular 22
- React
- Vue

## Decision Outcome

Chosen option: Angular 22, because Delivers the role-aware SPA for sign-in, directory, cycle setup, feedback forms, reports and the HR dashboard against the Django API; its built-in HttpClient, router and forms cover all UI stories without extra frameworks. Accessibility (RPwD Act 2016 / WCAG) is addressed through Angular CDK a11y and semantic components.

## Consequences

Heavier initial bundle than lighter libraries, but gives a consistent batteries-included structure suited to an internal CRUD-style tool.
<!-- sdlc:auto:end adr -->