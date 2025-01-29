# Template for Front-end testing framework
Author: Bc. Dalibor Králik

Master thesis ***"Development of a Front-End Testing Framework: Strategies, Tools, and Implementation"*** at Masaryk University Faculty of Informatics.

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
- In each folder (component / zustand store / utility / react query / server action / custom hook) create __tests__ folder where we will put all tests.
- In this __tests__ folder, create unit test file <name-of-component>. test.tsx. Here we will write unit tests.

#### Test structure:
- Descriptive Test Names: Use descriptive names for your test cases to clearly indicate what is being tested.
- Arrange-Act-Assert Pattern: Structure your tests using the Arrange-Act-Assert pattern to make them more readable.
- Mock External Dependencies:  Use libraries like jest.mock() to mock API calls and other external dependencies.
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
- Interactions between components
- Interaction between React components and React Query (fetching data)
- Data Flow in state manager (for example between Zustand store and components)
- Authentication flows with NextAuth
- API calls to FastAPI backend (mocked)
- Server actions

#### Folder structure:

#### Test structure:



### End-to-End testing
#### Tech-stack
- [Cypress](https://www.npmjs.com/package/cypress)

#### What to test:

#### Folder structure:

#### Test structure: