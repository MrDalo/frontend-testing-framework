export const logAccessibilityViolations = (violations: any) => {
  // It is mostly running client-side to check browser console for violations
  console.log(`${violations.length} accessibility violation(s) detected`)
  console.table(violations)
}