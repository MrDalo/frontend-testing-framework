/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError, AxiosHeaders } from 'axios'
import getStatusCodeFromError from '../getStatusCodeFromError'

describe('getStatusCodeFromError', () => {
  it('should return status code from AxiosError with response', () => {
    const headers = new AxiosHeaders()
    headers.set('Content-Type', 'application/json')

    const configHeaders = new AxiosHeaders()
    configHeaders.set('Authorization', 'Bearer token')

    const axiosError = new AxiosError()
    axiosError.response = {
      status: 404,
      data: {},
      headers,
      config: {
        headers: configHeaders,
      },
      statusText: 'Not Found',
    }

    expect(getStatusCodeFromError(axiosError)).toBe(404)
  })

  it('should return 500 for AxiosError without response', () => {
    const axiosError = new AxiosError()

    expect(getStatusCodeFromError(axiosError)).toBe(500)
  })

  it('should return status code from Error with status property', () => {
    const error = new Error('Custom error')
    ;(error as any).status = 403

    expect(getStatusCodeFromError(error)).toBe(403)
  })

  it('should return 500 for Error without status property', () => {
    const error = new Error('Generic error')

    expect(getStatusCodeFromError(error)).toBe(500)
  })

  it('should return 500 for unknown error types', () => {
    const unknownError = 'Just a string error'

    expect(getStatusCodeFromError(unknownError)).toBe(500)
  })

  it('should return 500 for null', () => {
    expect(getStatusCodeFromError(null)).toBe(500)
  })

  it('should return 500 for undefined', () => {
    expect(getStatusCodeFromError(undefined)).toBe(500)
  })
})
