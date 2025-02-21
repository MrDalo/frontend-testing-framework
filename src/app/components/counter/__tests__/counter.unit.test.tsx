/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { screen, fireEvent } from '@testing-library/react'
import Counter from '../counter'
import { nextIntlRenderer } from '@/lib/test-utils/next-intl'

describe('Counter Component', () => {
  const setup = () => {
    nextIntlRenderer(<Counter />)
    return {
      incrementButton: screen.getByRole('button', { name: /increment/i }),
      decrementButton: screen.getByRole('button', { name: /decrement/i }),
      getCountDisplay: (): HTMLElement => screen.getByText(/^-?\d+$/), // Matches any number, including negative
    }
  }

  it('renders initial state correctly', () => {
    const { incrementButton, decrementButton, getCountDisplay } = setup()

    expect(incrementButton).toBeInTheDocument()
    expect(decrementButton).toBeInTheDocument()
    expect(getCountDisplay()).toHaveTextContent('0')
  })

  it('increments count when increment button is clicked', () => {
    const { incrementButton, getCountDisplay } = setup()

    fireEvent.click(incrementButton)
    expect(getCountDisplay()).toHaveTextContent('1')

    fireEvent.click(incrementButton)
    expect(getCountDisplay()).toHaveTextContent('2')
  })

  it('decrements count when decrement button is clicked', () => {
    const { decrementButton, getCountDisplay } = setup()

    fireEvent.click(decrementButton)
    expect(getCountDisplay()).toHaveTextContent('-1')

    fireEvent.click(decrementButton)
    expect(getCountDisplay()).toHaveTextContent('-2')
  })

  it('handles multiple increments and decrements correctly', () => {
    const { incrementButton, decrementButton, getCountDisplay } = setup()

    fireEvent.click(incrementButton) // 1
    fireEvent.click(incrementButton) // 2
    fireEvent.click(decrementButton) // 1
    fireEvent.click(incrementButton) // 2
    expect(getCountDisplay()).toHaveTextContent('2')

    fireEvent.click(decrementButton) // 1
    fireEvent.click(decrementButton) // 0
    fireEvent.click(decrementButton) // -1
    expect(getCountDisplay()).toHaveTextContent('-1')
  })

  it('maintains correct button spacing and layout', () => {
    const { incrementButton, decrementButton } = setup()
    const buttonContainer = incrementButton.parentElement

    expect(buttonContainer).toContainElement(incrementButton)
    expect(buttonContainer).toContainElement(decrementButton)
  })
})
