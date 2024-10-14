import CodeBlock from '../CodeBlock'
import React from 'react'
import jsxToString from 'react-element-to-jsx-string'
import CodeWrapper from '../CodeWrapper'

export default function InputSearch() {
  const componentToJsx = (
    <div className="flex h-11 w-max">
      <input
        placeholder="Search..."
        className="0 peer w-full rounded-l-xl border-[1px] border-transparent bg-gray-800 px-3 py-2 outline-none duration-200 focus-within:border-primary"
        type="text"
        aria-label="search"
        role="searchbox"
        required
      />
      <button
        className="w-12 rounded-r-xl border-[1px] border-transparent bg-gray-900 text-primary outline-none focus-visible:border-primary peer-placeholder-shown:text-gray-300"
        aria-label="search"
      >
        <p className="pointer-events-none -rotate-45 text-4xl">⚲</p>
      </button>
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
