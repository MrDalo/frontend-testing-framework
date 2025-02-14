import React from 'react'

type Props = {
  count: number
}

const DisplayBox = ({ count }: Props) => {
  return (
    <div className='flex items-center justify-center rounded-xl bg-gray-300 px-8 py-6'>
      {count}
    </div>
  )
}

export default DisplayBox
