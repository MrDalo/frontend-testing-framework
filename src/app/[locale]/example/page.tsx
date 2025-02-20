import React from 'react'
import { Counter } from '@/app/components/counter'
import { Link } from '@/i18n/routing'

const ExamplePage = (): React.ReactNode => (
  <div className='flex size-full flex-col items-center gap-4 py-10'>
    <h1 className='w-full pb-5 text-center text-3xl'>
      Example with interactive component
    </h1>
    <Counter />
    <Link className='text-blue-600 hover:underline' href='/'>
      Back to home
    </Link>
  </div>
)

export default ExamplePage
