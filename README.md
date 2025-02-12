# Template for Front-end testing framework

Author: Bc. Dalibor Králik

Master thesis **_"Development of a Front-End Testing Framework: Strategies, Tools, and Implementation"_** at Masaryk University Faculty of Informatics.

## Introduction

This is the template repository which serves as a starting point for implementation of the **Front-end Testing Framework** created by Dalibor Králik as a master thesis at **Masaryk University Faculty of Informatics**.

This template contains initialized testing environment for different testing type like:

- Unit testing
- Integration testing
- End-to-end testing
- Visual regresison testing
- Performance testing
- Accessibility testing
- Security testing
- Internationalization testing
- Cross-browser testing

### Tech-stack of the front-end application

- Nextjs 14
- Tailwind CSS 3
- Axios
- Typescript 5
- Eslint 9

## Testing

### Unit testing

#### Tech-stack

- [Jest](https://www.npmjs.com/package/jest)
- [React Testing Library](https://www.npmjs.com/package/@testing-library/dom)

#### What to test:

- Utility functions
- Individual react Components
- State management actions like Zustand store actions and selectors
- Tanstack React Query hooks
- Custom hooks

#### Folder structure:

- In each folder (component / zustand store / utility / react query / server action / custom hook) create `__tests__` folder where we will put all tests.
- In this `__tests__` folder, create unit test file `<name-of-component>.unit.test.ts`. Here we will write unit tests.

#### Test structure:

- Descriptive Test Names: Use descriptive names for your test cases to clearly indicate what is being tested.
- Arrange-Act-Assert Pattern: Structure your tests using the Arrange-Act-Assert pattern to make them more readable.
- Mock External Dependencies: Use libraries like jest.mock() to mock API calls and other external dependencies.
- Test Edge Cases and Error Handling
- Setup and Teardown: Use beforeEach() and afterEach() to set up and clean up before and after tests.

#### How to run

1. Run unit tests once:

   ```bash
   npm run test
   ```

2. Run unit tests in watch mode:

   ```bash
   npm run test:watch
   ```

3. Run test coverage of unit tests:
   ```bash
   npm run test:coverange
   ```

### Integration testing

#### Tech-stack

- [Jest](https://www.npmjs.com/package/jest)
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
- In this `__tests__` folder, create integration test file `<name-of-component>.integration.test.ts`. Here we will write integration tests.

#### Test structure:

#### How to run:

```bash
   npm run test:integration
```

### End-to-End testing

#### Tech-stack

- [Cypress](https://www.npmjs.com/package/cypress)

#### What to test:

- Complete user workflows (e.g., login -> dashboard -> logout)
- Critical paths (e.g., purchasing flow, form submission)
- End-to-end interactions between the front-end and the back-end (optionally with a real or staging server)

#### Folder structure:

- In the `/tests/e2e` folder create test files `<name-of-test>.e2e.test.ts`. Here we will write end-to-end tests.

#### Test structure:

1. **Arrange**: Seed or reset the database/state if needed (in a CI environment, you might run migrations or scripts).
2. **Act**: Use Cypress commands (`cy.visit()`, `cy.get()`, etc.) to simulate real browser actions.
3. **Assert**: Validate the UI or network calls to ensure correctness.

#### How to run:

```bash
   npm run test:e2e
```

## Visual Regression Testing

**Tech Stack**

- [Cypress](https://www.cypress.io/) with [@cypress/snapshot](https://github.com/cypress-io/snapshot)

**What to Test**

- UI Layout changes
- Critical pages/components (e.g., homepage, checkout flow)
- Theming or styling changes

**Folder & File Structure**  
Store visual tests in a `/tests/visual-tests/` folder, or integrate them with your existing Cypress E2E tests. Name you test file like `<name-of-test>.visual.test.ts`.

## Performance Testing

Performance tests are often run via specialized CI configurations rather than integrated code tests

**Tech Stack**

- [Lighthouse](https://github.com/GoogleChrome/lighthouse) CLI or [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [WebPageTest](https://www.webpagetest.org/) (external web service where you can run tests on your publically accessible site)
- [Sitespeed.io](https://www.sitespeed.io/) or [k6](https://k6.io/) for advanced scenarios

**What to Test**

- Page load times
- Time to interactive
- Core Web Vitals (Largest Contentful Paint, First Input Delay, CLS)
- API response times under stress

**Folder & File Structure**  
Store performance tests into `/tests/performance-tests/` folder.
Name you test case file like `<name-of-test>.performance.test.ts`.

**How to Run**

- Lighthouse CLI example:
  ```bash
  npm run test:performance
  ```

## Accessibility Testing

**Tech Stack**

- [axe-core](https://github.com/dequelabs/axe-core) (with Cypress integration (cypress-axe) and Jest integration)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse#accessibility)

**What to Test**

- Proper semantic HTML
- Keyboard navigation
- Color contrast, ARIA attributes
- Screen reader support

**Folder & File Structure**  
You can keep these in `accessibility-tests/` or integrate with e2e tests (e.g., Cypress + axe plugin):

Store accessibility tests into `/tests/accessibility-tests/` folder.
Name you test case file like `<name-of-test>.accessibility.test.ts`.

**How to Run**

- If integrated with Cypress + `cypress-axe`:

  ```bash
  npm run test:accessibility-cypress
  ```

- If using Lighthouse accessibility audits::
  ```bash
  npm run test:accessibility-lighthouse
  ```
