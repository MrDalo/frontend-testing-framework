import '@testing-library/jest-dom'
import { TextEncoder, TextDecoder } from 'util'

// Mock global objects used server-side that are not available in jsdom
global.Request = jest.fn()

// You can also mock other server-side objects if needed
global.Response = jest.fn() as unknown as typeof global.Response

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder as unknown as typeof global.TextDecoder

Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', {
  configurable: true,
  value: jest.fn(),
})
