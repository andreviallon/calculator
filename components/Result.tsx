import React from 'react'

interface Props {
  result: number;
}

export const Result: React.FC<Props> = ({ result }) => {
  return (
    <div className="flex justify-end p-8 bg-gray-800 rounded-xl">
      <p className="text-5xl font-bold">
        {result}
      </p>
    </div>
  )
}
