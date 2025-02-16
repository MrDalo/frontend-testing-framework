import { addCompareSnapshotCommand } from 'cypress-visual-regression/dist/command'
addCompareSnapshotCommand({
  // e.g. Cypress screenshot option to capture entire viewport:
  capture: 'fullPage',

  // plugin threshold for pixel diffs
  errorThreshold: 0.5,

  // pixelmatch-specific options
  pixelmatchOptions: {
    // threshold is fraction from 0 to 1
    threshold: 0.0,
  },
})
