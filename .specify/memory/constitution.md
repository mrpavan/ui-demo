<!--
Sync Impact Report:
Version: 1.0.0 → 1.1.0 (MINOR: Expanded Git Workflow section with branch naming, commit message, and PR requirements)
Modified Principles: N/A
Modified Sections: Development Workflow → Git Workflow (expanded with branch naming convention, commit message format, PR requirements)
Added Sections: N/A
Removed Sections: N/A
Templates requiring updates:
  - ✅ .specify/templates/plan-template.md (updated branch placeholder to reference constitution naming convention)
  - ✅ .specify/templates/spec-template.md (already compatible)
  - ✅ .specify/templates/tasks-template.md (already compatible)
Follow-up TODOs: None
-->

# Angular SPA Web Application Constitution

## Core Principles

### I. Component-Based Architecture (NON-NEGOTIABLE)
All UI functionality MUST be implemented as Angular components. Components MUST be:
- Self-contained with clear single responsibility
- Reusable across the application
- Independently testable
- Use standalone components (Angular 17+ pattern)
- Follow Angular Style Guide conventions

**Rationale**: Component-based architecture ensures maintainability, testability, and scalability. Standalone components reduce NgModule complexity and improve tree-shaking.

### II. TypeScript-First Development
All code MUST be written in TypeScript with strict type checking enabled. Type safety MUST be enforced:
- No `any` types without explicit justification
- Interfaces/types defined for all data structures
- Strict null checks enabled
- Type-safe dependency injection

**Rationale**: TypeScript catches errors at compile-time, improves IDE support, and makes code self-documenting. Strict typing reduces runtime errors and improves maintainability.

### III. Test-First Development (NON-NEGOTIABLE)
TDD mandatory: Tests written → User approved → Tests fail → Then implement. Red-Green-Refactor cycle strictly enforced.

Test requirements:
- Unit tests for all components, services, and utilities (minimum 80% coverage)
- Integration tests for user journeys and feature workflows
- E2E tests for critical user paths
- Tests MUST run in CI/CD pipeline before merge

**Rationale**: Test-first development ensures code correctness, prevents regressions, and provides living documentation. High test coverage enables confident refactoring.

### IV. Performance Optimization
Application MUST meet performance standards:
- Initial load time < 3 seconds on 3G connection
- Lazy loading for all feature modules
- Code splitting and tree-shaking enabled
- OnPush change detection strategy by default
- Image optimization and lazy loading
- Bundle size monitoring and optimization

**Rationale**: Performance directly impacts user experience and SEO. Lazy loading reduces initial bundle size, improving load times and user engagement.

### V. Security Best Practices
Security MUST be implemented at multiple layers:
- Input validation and sanitization
- XSS protection via Angular's built-in sanitization
- CSRF protection for API calls
- Secure authentication and authorization
- HTTPS-only in production
- Content Security Policy (CSP) headers
- Dependency vulnerability scanning

**Rationale**: Web applications are prime targets for attacks. Security must be built-in, not bolted on. Angular provides tools, but they must be used correctly.

### VI. Accessibility (a11y)
Application MUST be accessible to all users:
- WCAG 2.1 Level AA compliance minimum
- Semantic HTML and ARIA attributes where needed
- Keyboard navigation support
- Screen reader compatibility
- Color contrast ratios meet standards
- Focus management for dynamic content

**Rationale**: Accessibility is a legal requirement in many jurisdictions and expands the user base. Accessible design benefits all users.

### VII. Modern Angular Patterns
Application MUST use current Angular best practices:
- Standalone components (no NgModules unless required)
- Signals for reactive state management (Angular 16+)
- Functional guards and interceptors
- RxJS operators used efficiently (avoid memory leaks)
- Dependency injection with providedIn patterns
- Angular CLI for all scaffolding and builds

**Rationale**: Modern Angular patterns improve performance, reduce boilerplate, and align with framework evolution. Signals provide better reactivity than traditional change detection.

## Technology Stack

### Required Technologies
- **Framework**: Angular (latest stable version)
- **Language**: TypeScript (latest compatible version)
- **Build Tool**: Angular CLI
- **Package Manager**: npm or yarn
- **Testing**: Jasmine/Karma for unit tests, Cypress or Playwright for E2E
- **Linting**: ESLint with Angular-specific rules
- **Formatting**: Prettier with Angular configuration

### Architecture Patterns
- **State Management**: Signals (preferred) or RxJS BehaviorSubjects for complex state
- **Routing**: Angular Router with lazy-loaded feature modules
- **HTTP**: Angular HttpClient with interceptors for auth/error handling
- **Forms**: Reactive Forms (preferred) or Template-driven Forms
- **Styling**: CSS, SCSS, or CSS-in-JS solutions (project choice)

## Development Workflow

### Code Quality Gates
- All code MUST pass linting (ESLint) before commit
- All tests MUST pass before merge
- Code review required for all PRs
- Branch protection rules enforced in repository
- Automated dependency updates with security scanning

### Git Workflow

#### Branch Naming Convention
All branches MUST follow the pattern: `JIRA-ID-TYPE-Short-Title`

- **Features**: `JIRA-ID-FEA-Short-Title` (e.g., `PROJ-123-FEA-User-Authentication`)
- **Bugfixes**: `JIRA-ID-BFX-Short-Title` (e.g., `PROJ-456-BFX-Login-Error`)
- **Hotfixes**: `JIRA-ID-HFX-Short-Title` (e.g., `PROJ-789-HFX-Security-Patch`)

Branch from `main` or `develop` as appropriate. Short-Title MUST be kebab-case and descriptive.

#### Commit Messages
All commit messages MUST follow conventional commit format with JIRA/task ID:

Format: `<type>(<scope>): [JIRA-ID] <description>`

Examples:
- `feat(auth): [PROJ-123] Add user login component`
- `fix(api): [PROJ-456] Resolve authentication token expiry issue`
- `docs(readme): [PROJ-789] Update installation instructions`

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `ci`, `build`, `revert`

**Rationale**: Consistent branch and commit naming enables traceability, automated changelog generation, and easier code review. JIRA IDs link commits to project management tools.

#### Pull Requests
PRs MUST include a clear summary when raising with upstream branches:

- **Title**: Must include JIRA ID and brief description (e.g., `[PROJ-123] Implement user authentication`)
- **Description** MUST contain:
  - Summary of changes (what and why)
  - JIRA/task reference
  - Test coverage information
  - Screenshots for UI changes
  - Breaking changes documented (if any)
  - Checklist of constitution compliance items
- **Target branch**: Clearly specified (main/develop/release branch)

**Rationale**: Clear PR summaries accelerate review, ensure compliance verification, and provide historical context for future developers.

### Documentation Requirements
- README.md with setup and development instructions
- Component documentation (JSDoc comments)
- API service documentation
- Architecture decision records (ADRs) for significant choices
- Inline comments for complex logic

## Governance

This constitution supersedes all other development practices and guidelines. All team members and contributors MUST comply with these principles.

### Amendment Procedure
1. Proposed amendments require documentation of rationale
2. Team review and approval process
3. Version bump according to semantic versioning
4. Update dependent templates and documentation
5. Migration plan for breaking changes

### Versioning Policy
- **MAJOR**: Backward incompatible principle removals or redefinitions
- **MINOR**: New principle/section added or materially expanded guidance
- **PATCH**: Clarifications, wording, typo fixes, non-semantic refinements

### Compliance Review
- All PRs/reviews MUST verify constitution compliance
- Complexity additions MUST be justified
- Violations require explicit approval and documentation
- Quarterly constitution review meetings recommended

**Version**: 1.1.0 | **Ratified**: 2026-01-05 | **Last Amended**: 2026-01-05
