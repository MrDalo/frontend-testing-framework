import React from 'react'
import { Counter } from '../components/counter'
import Link from 'next/link'

const ExamplePage = () => {
  return (
    <div className='flex size-full flex-col items-center gap-4 py-10'>
      <h1 className='w-full pb-5 text-center text-3xl'>
        Example with interactive component
      </h1>
      <Counter />
      <Link href='/' className='text-blue-500 hover:underline'>
        Back to home
      </Link>
    </div>
  )
}

export default ExamplePage
