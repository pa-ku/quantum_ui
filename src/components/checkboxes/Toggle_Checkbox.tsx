import CodeBlock from '../CodeBlock'
import React from 'react'
export default function ToggleBtn() {
  const codeBlock = `<input
  type="checkbox"
  className="relative flex h-6 w-12
  cursor-pointer appearance-none items-center rounded-xl
  bg-white duration-200 before:pointer-events-none 
  before:absolute before:h-4 before:w-4 before:translate-x-1
  before:rounded-xl before:bg-primary 
  before:duration-200 checked:bg-primary 
  checked:shadow-center checked:shadow-primary 
  checked:before:translate-x-7 checked:before:bg-white"/>`
  return (
    <>
      <input
        type="checkbox"
        className="relative flex h-6 w-12 cursor-pointer appearance-none items-center rounded-xl bg-white duration-200 before:pointer-events-none before:absolute before:h-4 before:w-4 before:translate-x-1 before:rounded-xl before:bg-primary before:duration-200 checked:bg-primary checked:shadow-center checked:shadow-primary checked:before:translate-x-7 checked:before:bg-white"
      />

      <CodeBlock code={codeBlock} />
    </>
  )
}
