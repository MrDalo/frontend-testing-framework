/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const logAccessibilityViolations = (violations: any): void => {
  // It is mostly running client-side to check browser console for violations
  console.log(`${violations.length} accessibility violation(s) detected`)
  console.table(violations)
}
