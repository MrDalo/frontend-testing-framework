'use client'
import React from 'react'

type Props = {
  label: string
  onClickFn: () => void
}

const Button = ({ label, onClickFn }: Props): React.ReactNode => (
  <button
    className='rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
    onClick={onClickFn}
    type='button'
  >
    {label}
  </button>
)

export default Button
