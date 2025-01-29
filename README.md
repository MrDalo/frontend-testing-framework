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

### End-to-End testing
#### Tech-stack
- [Cypress](https://www.npmjs.com/package/cypress)
