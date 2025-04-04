# Template for Front-end testing framework

Author: Bc. Dalibor Králik

Master thesis **_"Development of a Front-End Testing Framework: Strategies, Tools, and Implementation"_** at Masaryk University Faculty of Informatics.

## Introduction

This is the template repository which serves as a starting point for implementation of the **Front-end Testing Framework: : A Practical Guide** created by Dalibor Králik as a master thesis at **Masaryk University Faculty of Informatics**.

This template contains initialized testing environment for different testing type like:

- Unit testing
- Integration testing
- End-to-end testing
- Visual regresison testing
- Performance testing
- Accessibility testing
- Security testing
- Internationalization (i18n) testing
- Cross-browser testing

### Front-end Testing Framework: A Practical Guide PDF

As part of this repository there is a Frontend_Testing_Framework\_\_A_Practical_Guide.pdf which contains Front-end testing guide.

This guide presents a comprehensive, actionable framework for front-end testing that spans the entire spectrum of testing techniques. Based on the research and practical experiences documented in the master thesis ”Development of a Front-End Testing Framework: Strategies, Tools, and Implementation” at Masaryk University Faculty of Informatics, this PDF provides clear, step-by-step instructions and best practices of fro.nt-end testing

By following the guidelines, front-end teams can:

- Catch defects early and reduce technical debt.
- Ensure consistency and reliability across various user scenarios.
- Improve overall code quality while streamlining development workflows.

Ultimately, this guide aims to bridge the gap between academic research and practical application, empowering developers to adopt a robust, multi-layered testing strategy that meets the demands of modern web applications.

### Tech-stack of the front-end application

- Nextjs 14
- Tailwind CSS 4
- Axios
- Typescript 5
- Eslint 9

## How to Use This Template

1. **Clone the repository** and install dependencies:

   ```bash
   npm install
   ```

2. Configure environment variables if needed (e.g., for integration or E2E tests pointing at a backend)

3. Run tests. You can find out how to run each type of test in the respective section above.

4. Customize:
   Update or remove any test folders you don’t need (e.g., if you’re not doing cross-browser or i18n testing).
   Adjust folder structure to your team’s preferences.
   Integrate with your CI/CD pipeline for continuous validation.

### Docker

Dockerfile is part of this repository.

1. To build an image:

```bash
docker build -t frontend-testing-framework .
```

2. To run a container from the image:

```bash
docker run --name frontend-testing-framework -p 3000:3000 frontend-testing-framework
```

## Best Practices

- Keep Tests Atomic: Especially unit tests—small, isolated, and fast.
- Leverage CI/CD: Automate as many tests as possible on every push.
- Regularly Update: Tools, libraries, and dependencies (e.g., security definitions) evolve quickly.
- Document: Keep your testing docs up to date as you add or remove tooling.
- Write Tests Early and Continuously: Starting testing early in the development process allows teams to identify potential issues before they escalate, saving time and resources.
- Test Real User Scenarios: Prioritize tests that simulate real user interactions and workflows. Use E2E testing for that.
- Balance Test Coverage with Practicality: Striving for 100% test coverage can be impractical and time-consuming, while insufficient coverage leaves the application vulnerable to defects. Focus testing efforts on critical paths, high-risk areas, and frequently used features. Prioritizing quality over quantity ensures efficient use of resources.

## Testing

### How to run all tests

```bash
npm run test:all
```

### How to run only Vitest tests

```bash
npm run test
```

### How to run only Vitest tests within browser preview

```bash
npm run test:ui
```

### How to run only Cypress tests

```bash
npm run test:cypress
```

### Unit testing

#### Tech-stack

- [Vitest](https://www.npmjs.com/package/vitest)
- [React Testing Library](https://www.npmjs.com/package/@testing-library/dom)

#### What to test:

- Utility functions
- Individual react Components
- State management actions like Zustand store actions and selectors
- Tanstack React Query hooks
- Custom hooks

#### Folder structure:

- In each folder (component / zustand store / utility / react query / server action / custom hook) create `__tests__` folder where we will put all tests.
- In this `__tests__` folder, create unit test file `<name-of-component>.unit.test.tsx`. Here we will write unit tests.

#### Test structure:

- Descriptive Test Names: Use descriptive names for your test cases to clearly indicate what is being tested.
- Arrange-Act-Assert Pattern: Structure your tests using the Arrange-Act-Assert pattern to make them more readable.
- Mock External Dependencies: Use commands like vitest.mock() to mock API calls and other external dependencies.
- Test Edge Cases and Error Handling
- Setup and Teardown: Use beforeEach() and afterEach() to set up and clean up before and after tests.

#### How to run

1. Run unit tests once:

   ```bash
   npm run test:unit
   ```

2. Run unit tests in watch mode:

   ```bash
   npm run test:unit:watch
   ```

3. Run test coverage of unit tests:
   ```bash
   npm run test:unit:coverage
   ```

### Integration testing

#### Tech-stack

- [Vitest](https://www.npmjs.com/package/vitest)
- [React Testing Library](https://www.npmjs.com/package/@testing-library/dom)

#### What to test:

- Interactions between components (e.g., a parent component passing props to a child)
- React Query data fetching in conjunction with UI
- Complex state flows (e.g., Zustand store + multiple components)
- Authentication flows (e.g., NextAuth)
- (Optionally) mock API calls to your FastAPI backend to test data integration
- Server actions

#### Folder structure:

- In each folder (component / zustand store / utility / react query / server action / custom hook) create `__tests__` folder where we will put all tests.
- In this `__tests__` folder, create integration test file `<name-of-component>.integration.test.tsx`. Here we will write integration tests.

#### Test structure:

#### How to run:

1. Run integration tests once:

   ```bash
   npm run test:integration
   ```

2. Run integration tests in watch mode:

   ```bash
   npm run test:integration:watch
   ```

3. Run test coverage of integration tests:
   ```bash
   npm run test:integration:coverage
   ```

### End-to-End testing

#### Tech-stack

- [Cypress](https://www.npmjs.com/package/cypress)

#### What to test:

- Complete user workflows (e.g., login -> dashboard -> logout)
- Critical paths (e.g., purchasing flow, form submission)
- End-to-end interactions between the front-end and the back-end (optionally with a real or staging server)

#### Folder structure:

- In the `/tests/e2e` folder create test files `<name-of-test>.e2e.cy.tsx`. Here we will write end-to-end tests.

#### Test structure:

1. **Arrange**: Seed or reset the database/state if needed (in a CI environment, you might run migrations or scripts).
2. **Act**: Use Cypress commands (`cy.visit()`, `cy.get()`, etc.) to simulate real browser actions.
3. **Assert**: Validate the UI or network calls to ensure correctness.

#### How to run:

1. To run already created tests

```bash
   npm run test:e2e
```

2. To open GUI browser

```bash
  npm run test:e2e:open
```

## Visual Regression Testing

**Tech Stack**

- [Cypress](https://www.cypress.io/) with [cypress-visual-regression](https://www.npmjs.com/package/cypress-visual-regression)

**What to Test**

- UI Layout changes
- Critical pages/components (e.g., homepage, checkout flow)
- Theming or styling changes

**Folder & File Structure**  
Store visual tests in a `/tests/visual-tests/` folder, or integrate them with your existing Cypress E2E tests. Name you test file like `<name-of-test>.visual.cy.tsx`.

**How to Run**

1. Start initial run which will capture actual snapshots (needed before run of the real visual regression test)

```bash
   npm run test:visual:initial
```

2. To run already created tests

```bash
   npm run test:visual
```

3. To open GUI browser

```bash
  npm run test:visual:open
```

## Performance Testing

Performance tests are often run via specialized CI configurations rather than integrated code tests

**Tech Stack**

- [Lighthouse](https://github.com/GoogleChrome/lighthouse) CLI or [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) (covers all basic performance measuring)
- [WebPageTest](https://www.webpagetest.org/) (external web service where you can run tests on your publically accessible site)
- [Sitespeed.io](https://www.sitespeed.io/) for advanced scenarios (required additional instalation)

**What to Test**

- Page load times
- Time to interactive
- Core Web Vitals (Largest Contentful Paint, First Input Delay, CLS)
- API response times under stress

**Folder & File Structure**  
Stores performance tests outputs into `/tests/performance-tests/` folder.

**How to Run**

- Lighthouse CLI example:
  ```bash
  npm run test:performance
  ```

## Accessibility Testing

**Tech Stack**

- [axe-core](https://github.com/dequelabs/axe-core) with Cypress and plugin [cypress-axe](https://www.npmjs.com/package/cypress-axe)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse#accessibility) - accessibility testing is part of the performance testing report

**What to Test**

- Proper semantic HTML
- Keyboard navigation
- Color contrast, ARIA attributes
- Screen reader support

**Folder & File Structure**  
You can keep these in `accessibility-tests/` or integrate with e2e tests (e.g., Cypress + cypress-axe plugin):

Store accessibility tests into `/tests/accessibility-tests/` folder.
Name you test case file like `<name-of-test>.accessibility.cy.tsx`.

**How to Run**

1. To run already created Cypress tests

```bash
   npm run test:accessibility
```

2. To open Cypress GUI browser

```bash
  npm run test:accessibility:open
```

3. To run performance test with accesibility testing using Lighthouse:

```bash
npm run test:performance
```

## Security Testing

**Tech Stack**

- ESLint with [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security)
- [OWASP ZAP](https://www.zaproxy.org/) (dynamic scanning) - need to install addictional software

**What to Test**

- Cross-Site Scripting (XSS) vulnerabilities
- CSRF handling
- Secure handling of user input and data
- Secure HTTP headers

**Folder & File Structure**  
Typically, security scans and linting can be integrated into CI, or by using external software like [OWASP ZAP](https://www.zaproxy.org/).

**How to Run**

- ESLint security checks:

  ```bash
  npm run lint:ci
  ```

  or

  ```bash
  npm run lint:fix
  ```

- OWASP ZAP dynamic scan:
  OWASP ZAP scanning (often run outside the app code, e.g., pointing ZAP at a local/staging URL).

## Internationalization (i18n) Testing

**Tech Stack**

- [Vitest](https://vitest.dev/) (unit/integration for locale logic)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) for verifying UI changes based on locale
- [Cypress](https://www.npmjs.com/package/cypress) for more in-depth i18n E2E tests

**What to Test**

- Locale switching logic
- Translated strings (loading the correct translations)
- Date, currency, and numeric formats

**Folder & File Structure**

- When you want to do Interationalization testing in the unit tests level, you can create them as a part of unit test file and create separate `describe()` function for them or create new file called `<name-of-test>.i18n.test.tsx` next to the `<name-of-component>.unit.test.tsx` file.

- For E2E tests, store them in the `/tests/i18n-tests/` folder and name your file like `<name-of-test>.i18n.cy.tsx` (there is required to add script for processing this `<name-of-test>.i18n.cy.tsx` to the package.json).

**Key Considerations**

- Right-to-left (RTL) languages (e.g., Arabic) might need special layout checks.

### How to run (Vitest tests):

1. Run i18n tests once:

   ```bash
   npm run test:i18n
   ```

2. Run i18n tests in watch mode:

   ```bash
   npm run test:i18n:watch
   ```

3. Run test coverage of i18n tests:
   ```bash
   npm run test:i18n:coverage
   ```

## Cross-Browser Testing

**Tech Stack**

- [Cypress](https://www.cypress.io/) configured to run e2e tests on multiple browsers

**What to Test**

- It makes sense to perform cross-browser testing on e2e tests to try out real scenarios of the application in multiple browsers
- Ensure UI and functionality consistency across major browsers (Chrome, Firefox, Safari, Edge)
- Responsive design across devices (mobile, tablet, desktop)

**Folder & File Structure**  
You can create separate cross-browser tests or run already created e2e tests as cross-browser tests.
In case of your own cron-browser tests, store them into `/tests/cross-browser-tests/` folder.
Name you test case file like `<name-of-test>.cross-browser.cy.tsx`.

**How to Run**

- If you run cross-browser tests on Cypress e2e tests:

  1. Chrome:

  ```bash
  npm run test:e2e:chrome
  ```

  2. Firefox:

  ```bash
  npm run test:e2e:firefox
  ```

  3. Edge:

  ```bash
  npm run test:e2e:edge
  ```

  4. Electron:

  ```bash
  npm run test:e2e:electron
  ```

  5. Run all browsers:

  ```bash
  npm run test:e2e:all-browsers
  ```

## Final recommended folder structure

```bash

├── cypress/
│   ├── support/
│   │   └── e2e.ts
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── ...
│   ├── components/
│   │   └── SomeComponent/
│   │       ├── SomeComponent.tsx
│   │       └── __tests__/
│   │           ├── SomeComponent.unit.test.tsx
│   │           ├── SomeComponent.integration.test.tsx
│   │           └── SomeComponent.i18n.test.tsx
│   └── tests/
│       ├── e2e/
│       │   ├── login.e2e.cy.ts
│       │   └── dashboard.e2e.cy.ts
│       ├── visual-tests/
│       │   └── dashboard.visual.cy.ts
│       ├── performance-tests/
│       │   ├── lighthouse-report.report.json
│       │   └── lighthouse-report.report.html
│       ├── accessibility-tests/
│       │   └── profile-page.accessibility.cy.tsx
│       ├── i18n-tests/
│       │   └── profile-data.i18n.cy.tsx
│       └── cross-browser-tests/
│           └── profile-page.cross-browser.cy.ts
├── vitest.config.ts
├── vitest.setup.ts
├── cypress.config.ts
├── package.json
└── README.md
└── ...
```
