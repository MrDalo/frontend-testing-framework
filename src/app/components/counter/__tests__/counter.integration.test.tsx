import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from '../counter'

describe('Counter Integration Test', () => {
  test('increments and decrements correctly, updating the DisplayBox color', async () => {
    // Arrange
    render(<Counter />)

    // Act
    // We expect two buttons: Increment and Decrement
    const incrementButton = screen.getByRole('button', { name: /increment/i })
    const decrementButton = screen.getByRole('button', { name: /decrement/i })
    const displayBox = screen.getByTestId('display-box')

    // Initially, count is 0 => "bg-green-300" because it's not negative
    expect(displayBox).toHaveTextContent('0')
    expect(displayBox).toHaveClass('bg-green-300')

    // Increment once
    await userEvent.click(incrementButton)
    expect(displayBox).toHaveTextContent('1')
    expect(displayBox).toHaveClass('bg-green-300')

    // Decrement twice
    await userEvent.click(decrementButton)
    await userEvent.click(decrementButton)
    expect(displayBox).toHaveTextContent('-1')
    // Now it's negative => "bg-red-300"
    expect(displayBox).toHaveClass('bg-red-300')
  })
})
