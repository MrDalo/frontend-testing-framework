import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from '../counter'
import { nextIntlRenderer } from '@/lib/test-utils/next-intl'

describe('Counter Integration Test', () => {
  test('increments and decrements correctly, updating the DisplayBox color', async () => {
    nextIntlRenderer(<Counter />)
    const incrementButton = screen.getByRole('button', { name: /increment/i })
    const decrementButton = screen.getByRole('button', { name: /decrement/i })
    const displayBox = screen.getByTestId('display-box')

    expect(displayBox).toHaveTextContent('0')
    expect(displayBox).toHaveClass('bg-green-300')

    await userEvent.click(incrementButton)
    expect(displayBox).toHaveTextContent('1')
    expect(displayBox).toHaveClass('bg-green-300')

    await userEvent.click(decrementButton)
    await userEvent.click(decrementButton)
    expect(displayBox).toHaveTextContent('-1')
    expect(displayBox).toHaveClass('bg-red-300')
  })
})
