import CodeBlock from '../CodeBlock'
import React from 'react'
import jsxToString from 'react-element-to-jsx-string'
import CodeWrapper from '../CodeWrapper'

export default function MinimalInput() {
  const componentToJsx = (
    <input
      type="text"
      aria-label=""
      className="rounded-xl border-[1px] border-transparent bg-gray-800 px-4 py-2 text-white outline-none placeholder:text-gray-200 focus:bg-gray-800 focus-visible:border-primary"
      placeholder="Input"
    />
  )
  const componentCode = jsxToString(componentToJsx)

  return (
    <>
      {componentToJsx}
      <CodeWrapper>
        <CodeBlock code={componentCode} />
      </CodeWrapper>
    </>
  )
}
