import CodeBlock from '../CodeBlock'
import React from 'react'
import jsxToString from 'react-element-to-jsx-string'
import CodeWrapper from '../CodeWrapper'

export default function TextCheckbox() {
  const componentToJsx = (
    <div className="relative flex w-fit items-center justify-center">
      <input
        type="checkbox"
        className="peer absolute h-full w-full cursor-pointer appearance-none"
      />
      <p className="pointer-events-none rounded-xl bg-gray-600 px-4 py-2 font-bold peer-checked:bg-primary">
        Checkbox
      </p>
    </div>
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
