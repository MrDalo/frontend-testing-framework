// src/app/components/counter/__tests__/Counter.i18n.test.tsx

import React from 'react'
import { render, screen } from '@testing-library/react'
import Counter from '../counter'
import { NextIntlWrapper } from '@/lib/test-utils/next-intl'

describe('Counter i18n tests', () => {
  it('renders English labels by default', () => {
    // Provide the English locale
    render(
      <NextIntlWrapper locale='en'>
        <Counter />
      </NextIntlWrapper>
    )

    expect(
      screen.getByRole('button', { name: 'Increment' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Decrement' })
    ).toBeInTheDocument()
  })

  it('renders German labels when locale is de', () => {
    render(
      <NextIntlWrapper locale='de'>
        <Counter />
      </NextIntlWrapper>
    )

    expect(
      screen.getByRole('button', { name: 'Inkrement' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Dekrement' })
    ).toBeInTheDocument()
  })
})
