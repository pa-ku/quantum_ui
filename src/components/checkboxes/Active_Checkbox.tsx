import CodeBlock from '../CodeBlock'
import React from 'react'

export default function TextCheckbox() {
  const codeBlock = `<div className="relative flex w-fit items-center
  justify-center">
  <input
  type="checkbox"
  className="peer absolute h-full w-full 
  cursor-pointer appearance-none"/>
  <p className="pointer-events-none font-bold  rounded-xl
  bg-gray-600 px-4 py-2 
  peer-checked:bg-primary
  peer-checked:shadow-center 
  peer-checked:shadow-primary">
  Checkbox
  </p>
</div>`
  return (
    <>
      <div className="relative flex w-fit items-center justify-center">
        <input
          type="checkbox"
          className="peer absolute h-full w-full cursor-pointer appearance-none"
        />
        <p className="pointer-events-none rounded-xl bg-gray-600 px-4 py-2 font-bold peer-checked:bg-primary peer-checked:shadow-center peer-checked:shadow-primary">
          Checkbox
        </p>
      </div>
      <CodeBlock code={codeBlock} />
    </>
  )
}
