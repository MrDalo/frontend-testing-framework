// vitest.setup.ts
import '@testing-library/jest-dom'
import { TextEncoder, TextDecoder } from 'util'
import { vi } from 'vitest'

// Continue your mock code, but swap jest => vi
global.Request = vi.fn()
global.Response = vi.fn() as unknown as typeof global.Response

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder as unknown as typeof global.TextDecoder
