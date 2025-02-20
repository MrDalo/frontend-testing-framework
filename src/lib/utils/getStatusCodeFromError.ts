import { isAxiosError } from 'axios'

const getStatusCodeFromError = (error: unknown): number => {
  if (isAxiosError(error)) {
    // AxiosError has a response property with the status code
    return error.response?.status || 500
  } else if (error instanceof Error) {
    // Generic Error might have a status property
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (error as any).status || 500
  } else {
    // Unknown error type
    return 500
  }
}

export default getStatusCodeFromError
