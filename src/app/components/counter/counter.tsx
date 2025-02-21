'use client'
import React from 'react'
import { DisplayBox } from '../display-box'
import { Button } from '../button'
import { useTranslations } from 'next-intl'

const Counter = (): React.ReactNode => {
  const [count, setCount] = React.useState(0)
  const t = useTranslations('ExamplePage')

  return (
    <div className='flex flex-col items-center justify-center space-y-4'>
      <DisplayBox count={count} />
      <div className='flex space-x-4'>
        <Button label={t('increment')} onClickFn={() => setCount(count + 1)} />
        <Button label={t('decrement')} onClickFn={() => setCount(count - 1)} />
      </div>
    </div>
  )
}

export default Counter
