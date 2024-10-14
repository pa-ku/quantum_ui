import CodeBlock from '../CodeBlock'
import React from 'react'
import jsxToString from 'react-element-to-jsx-string'
import CodeWrapper from '../CodeWrapper'

export default function More_Checkbox() {
  const componentToJsx = (
    <input
      content="✖"
      type="checkbox"
      className="relative flex h-9 w-9 appearance-none items-center justify-center text-4xl before:absolute before:h-max before:w-max before:-rotate-45 before:cursor-pointer before:px-4 before:py-2 before:duration-200 before:content-[attr(content)] checked:before:rotate-0 checked:before:text-primary"
    />
  )
  const componentCode = jsxToString(componentToJsx)

  const codeBlock = ` <input
    content="✖"
    type="checkbox"
    className="relative flex h-9 w-9 appearance-none 
    items-center justify-center text-4xl before:absolute
    before:h-max before:w-max before:-rotate-45
    before:cursor-pointer before:px-4 before:py-2 
    before:duration-200 before:content-[attr(
    content)] checked:before:rotate-0
   checked:before:text-primary"/>`
  return (
    <>
      {componentToJsx}
      <CodeWrapper>
        <CodeBlock code={componentCode} />
      </CodeWrapper>
    </>
  )
}
