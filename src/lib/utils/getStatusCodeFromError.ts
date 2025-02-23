import { isAxiosError } from 'axios'

const getStatusCodeFromError = (error: unknown): number => {
  if (isAxiosError(error)) {
    return error.response?.status || 500
  } else if (error instanceof Error) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (error as any).status || 500
  } else {
    return 500
  }
}

export default getStatusCodeFromError
