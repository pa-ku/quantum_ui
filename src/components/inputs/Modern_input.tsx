import CodeBlock from '../CodeBlock'
import React from 'react'
import jsxToString from 'react-element-to-jsx-string'
import CodeWrapper from '../CodeWrapper'

export default function Modern_input() {
  const componentToJsx = (
    <div className="relative flex h-max w-max items-center justify-start">
      <input
        type="text"
        className="text-red peer rounded-xl border-[1px] border-transparent bg-gray-800 px-3 py-2 caret-primary outline-none focus-visible:border-primary"
        placeholder=" "
        aria-label=""
      />
      <p className="pointer-events-none absolute -translate-y-8 px-3 font-bold text-slate-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:font-normal peer-placeholder-shown:text-slate-400 peer-focus:-translate-y-8 peer-focus:font-bold peer-focus:text-slate-300">
        Email
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
