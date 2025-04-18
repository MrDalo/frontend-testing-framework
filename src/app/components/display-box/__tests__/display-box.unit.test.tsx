/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { screen } from '@testing-library/react'
import DisplayBox from '../display-box'
import { nextIntlRenderer } from '@/lib/test-utils/next-intl'

describe('DisplayBox Component', () => {
  const setup = (count: number) => {
    nextIntlRenderer(<DisplayBox count={count} />)
    return {
      getContainer: (): HTMLElement => screen.getByTestId('display-box'),
      getDisplayValue: (): HTMLElement => screen.getByText(count.toString()),
    }
  }

  describe('rendering', () => {
    it('renders with positive count value', () => {
      const { getDisplayValue } = setup(42)
      expect(getDisplayValue()).toBeInTheDocument()
      expect(getDisplayValue()).toHaveTextContent('42')
    })

    it('renders with zero count', () => {
      const { getDisplayValue } = setup(0)
      expect(getDisplayValue()).toBeInTheDocument()
      expect(getDisplayValue()).toHaveTextContent('0')
    })

    it('renders with negative count', () => {
      const { getDisplayValue } = setup(-5)
      expect(getDisplayValue()).toBeInTheDocument()
      expect(getDisplayValue()).toHaveTextContent('-5')
    })
  })

  describe('styling', () => {
    it('has green background for positive numbers', () => {
      const { getContainer } = setup(1)
      const container = getContainer()
      expect(container.className).toContain('bg-green-300')
      expect(container.className).toContain('flex')
      expect(container.className).toContain('items-center')
      expect(container.className).toContain('justify-center')
      expect(container.className).toContain('rounded-xl')
      expect(container.className).toContain('px-8')
      expect(container.className).toContain('py-6')
      expect(container.className).not.toContain('bg-red-300')
    })

    it('has green background for zero', () => {
      const { getContainer } = setup(0)
      const container = getContainer()
      expect(container.className).toContain('bg-green-300')
      expect(container.className).not.toContain('bg-red-300')
    })

    it('has red background for negative numbers', () => {
      const { getContainer } = setup(-1)
      const container = getContainer()
      expect(container.className).toContain('bg-red-300')
      expect(container.className).not.toContain('bg-green-300')
    })
  })

  describe('updates', () => {
    it('updates styling when count changes from positive to negative', () => {
      const { rerender } = nextIntlRenderer(<DisplayBox count={5} />)
      let container = screen.getByTestId('display-box')
      expect(container.className).toContain('bg-green-300')
      expect(container.className).not.toContain('bg-red-300')

      rerender(<DisplayBox count={-5} />)
      container = screen.getByTestId('display-box')
      expect(container.className).toContain('bg-red-300')
      expect(container.className).not.toContain('bg-green-300')
    })

    it('updates styling when count changes from negative to positive', () => {
      const { rerender } = nextIntlRenderer(<DisplayBox count={-5} />)
      let container = screen.getByTestId('display-box')
      expect(container.className).toContain('bg-red-300')
      expect(container.className).not.toContain('bg-green-300')

      rerender(<DisplayBox count={5} />)
      container = screen.getByTestId('display-box')
      expect(container.className).toContain('bg-green-300')
      expect(container.className).not.toContain('bg-red-300')
    })
  })
})
