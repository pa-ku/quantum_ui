import React from 'react'
import CodeBlock from '../CodeBlock'
import ComponentTemplate from '../ComponentTemplate'
import jsxToString from 'react-element-to-jsx-string'
import CodeWrapper from '../CodeWrapper'

export default function Neon() {
  const componentToJsx = (
    <button className="group relative flex h-max w-max items-center justify-center overflow-hidden rounded-xl bg-gray-800 p-0.5 mix-blend-lighten">
      <div className="flex h-full w-full items-center justify-center rounded-xl bg-slate-700 px-8 py-4">
        <p className="text-xl text-primary duration-500 ">
          Register
        </p>
      </div>
      <span className="animate-rotate absolute -z-10 h-52 w-11 animate-spin rounded-full bg-gradient-to-r group-hover:from-primary duration-500 "></span>
    </button>
  )
  const componentCode = jsxToString(componentToJsx)

  const title = 'Neon'
  const description = ''
  return (
    <>
      <ComponentTemplate title={title} description={description}>
        {componentToJsx}
        <CodeWrapper>
          <CodeBlock code={componentCode} />
        </CodeWrapper>
      </ComponentTemplate>
    </>
  )
}
