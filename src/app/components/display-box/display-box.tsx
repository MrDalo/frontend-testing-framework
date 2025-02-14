import React from 'react'

type Props = {
  count: number
}

const DisplayBox = ({ count }: Props) => {
  return (
    <div
      data-testid='display-box'
      className={`flex items-center justify-center rounded-xl ${count < 0 ? 'bg-red-300' : 'bg-green-300'} px-8 py-6`}
    >
      {count}
    </div>
  )
}

export default DisplayBox
