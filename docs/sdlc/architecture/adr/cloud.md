<!-- sdlc:auto:start adr -->
# ADR-0004: Use AWS for Cloud

Status: Proposed  
Date: 2026-11-02

## Context and Problem Statement

Which Cloud technology does the project use? Decided in architecture v1.

## Considered Options

- AWS
- Azure
- GCP

## Decision Outcome

Chosen option: AWS, because The Mumbai (ap-south-1) region hosts all compute and data in India to meet DPDP residency, with RDS encryption at rest and TLS in transit for sensitive employee and feedback data and CloudWatch logs supporting CERT-In retention.

## Consequences

Capacity far exceeds a sub-200-employee tool, so the spend buys residency and reliability rather than scale.
<!-- sdlc:auto:end adr -->