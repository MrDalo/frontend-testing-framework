import '@testing-library/jest-dom'
import { TextEncoder, TextDecoder } from 'util'

global.Request = jest.fn()

global.Response = jest.fn() as unknown as typeof global.Response

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder as unknown as typeof global.TextDecoder

Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', {
  configurable: true,
  value: jest.fn(),
})
