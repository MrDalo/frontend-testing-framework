import { render, screen, fireEvent } from '@testing-library/react'
import Button from '../button'
import { vi } from 'vitest'

describe('Button Component', () => {
  const mockOnClick = vi.fn()

  beforeEach(() => {
    mockOnClick.mockClear()
  })

  it('renders with the correct label', () => {
    render(<Button label='Click me' onClickFn={mockOnClick} />)

    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
  })

  it('calls onClick handler when clicked', () => {
    render(<Button label='Click me' onClickFn={mockOnClick} />)

    const button = screen.getByRole('button', { name: /click me/i })
    fireEvent.click(button)

    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

  it('has the correct type attribute', () => {
    render(<Button label='Click me' onClickFn={mockOnClick} />)

    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toHaveAttribute('type', 'button')
  })

  it('has the correct default styling classes', () => {
    render(<Button label='Click me' onClickFn={mockOnClick} />)

    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toHaveClass(
      'rounded-lg',
      'bg-blue-600',
      'px-4',
      'py-2',
      'font-bold',
      'text-white',
      'hover:bg-blue-800'
    )
  })
})
