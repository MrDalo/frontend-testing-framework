'use client'
import React from 'react'
import { DisplayBox } from '../display-box'
import { Button } from '../button'

const Counter = (): React.ReactNode => {
  const [count, setCount] = React.useState(0)
  return (
    <div className='flex flex-col items-center justify-center space-y-4'>
      <DisplayBox count={count} />
      <div className='flex space-x-4'>
        <Button label='Increment' onClickFn={() => setCount(count + 1)} />
        <Button label='Decrement' onClickFn={() => setCount(count - 1)} />
      </div>
    </div>
  )
}

export default Counter
