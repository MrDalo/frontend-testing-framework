import { addCompareSnapshotCommand } from 'cypress-visual-regression/dist/command'
import 'cypress-axe'

addCompareSnapshotCommand({
  capture: 'fullPage',
  errorThreshold: 0.5,

  pixelmatchOptions: {
    threshold: 0.0,
  },
})
