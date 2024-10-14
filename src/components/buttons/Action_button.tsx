import CodeBlock from '../CodeBlock'
import React from 'react'
import jsxToString from 'react-element-to-jsx-string'

export default function ActionBtn() {
  const componentToJsx = (
    <div className="space-x-5">
      <button className="hover:[card-glowing-hover] shadow-opa rounded-md bg-primary px-5 py-3 text-xl text-white shadow-bottom shadow-primary duration-100 active:translate-y-1 active:shadow-none">
        Push
      </button>
    </div>
  )
  const componentCode = jsxToString(componentToJsx)
  return (
    <>
      {componentToJsx}

      <CodeBlock code={componentCode} />
    </>
  )
}
