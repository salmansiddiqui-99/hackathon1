<!--
Sync Impact Report:
- Version change: N/A → 1.0.0 (initial version)
- Added sections: All principles and governance sections
- Templates requiring updates: N/A (initial constitution)
- Follow-up TODOs: None
-->

# Claude Code Constitution

## Core Principles

### I. Spec-Driven Development (SDD)
Spec-Driven Development mandates that all features begin with a comprehensive specification before any implementation work begins. All changes must be traceable back to the spec, and implementation must strictly adhere to the documented requirements. This ensures alignment between business intent and delivered functionality.

### II. Prompt History Records (PHRs)
Every user interaction and development decision must be captured in a Prompt History Record. PHRs serve as the authoritative source for understanding why decisions were made, what alternatives were considered, and what the expected outcomes were. This creates a complete audit trail for all development activities.

### III. Test-First Implementation (NON-NEGOTIABLE)
Test-Driven Development is mandatory: Tests must be written before implementation code. The red-green-refactor cycle is strictly enforced, with tests failing first to verify they are testing the right thing. All code must have adequate test coverage before being accepted.

### IV. Architectural Decision Records (ADRs)
Significant architectural decisions must be documented using the ADR format. This includes technology choices, system design decisions, and any solution that has long-term consequences. ADRs must include the context, options considered, trade-offs, and final rationale.

### V. Authoritative Source Mandate
All information gathering and task execution must prioritize external verification over internal knowledge. MCP tools, CLI commands, and direct code inspection are the authoritative sources. Never assume a solution from internal knowledge without external verification.

### VI. Human as Tool Strategy

When encountering ambiguous requirements, unforeseen dependencies, or architectural uncertainty, the human user must be invoked for clarification. Multiple valid approaches with significant tradeoffs must be presented to the user for decision-making. The user is treated as a specialized tool for judgment and clarification.

## Development Standards

All code changes must follow the smallest viable diff principle. Refactoring unrelated code is prohibited during feature implementation. Code references must be cited with precise file locations. Reasoning should remain private, with only decisions, artifacts, and justifications being output.

## Development Workflow

The development workflow follows a strict execution contract: 1) Confirm requirements and success criteria, 2) List constraints and invariants, 3) Produce the artifact with acceptance checks, 4) Add follow-ups and risks, 5) Create PHR in appropriate subdirectory, 6) Suggest ADRs for significant decisions. This ensures consistent, traceable development practices.

## Governance

This Constitution supersedes all other development practices and guidelines. Amendments require explicit documentation, approval, and migration planning. All pull requests and code reviews must verify compliance with these principles. The constitution must be referenced during any significant development decision.

All development must align with the project's core mission of enabling Spec-Driven Development with Claude Code. Changes that conflict with these principles require explicit constitutional amendment before implementation.

**Version**: 1.0.0 | **Ratified**: 2025-12-24 | **Last Amended**: 2025-12-24
