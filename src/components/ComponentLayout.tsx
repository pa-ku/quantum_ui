import React, { ReactNode, useState } from 'react'
import jsxToString from 'react-element-to-jsx-string'
import CodeBlock from './CodeBlock'

type ComponentTypes = {
  children: any
  title: string
  text?: string | ReactNode
  description?: string
  component: Element
  css?: string
}
export default function ComponentLayout({
  title,
  description,
  component,
  css,
}: ComponentTypes) {
  const [showCode, setShowCode] = useState(false)

  const componentCode = jsxToString(component)

  return (
    <>
      <section className="relative flex h-full w-full items-start justify-center px-2">
        <div className="flex w-full flex-col gap-10 xl:w-1/2">
          <span className="space-y-2 px-2 md:p-0">
            <div className="flex gap-2">
              <h2 className="title">{title}</h2>
              <button
                className="group flex items-center justify-center rounded-full stroke-primary-300 p-2 text-xl text-primary-300 hover:bg-gray-800"
                onClick={() => setShowCode(!showCode)}
                title="show code"
              >
                {showCode ? (
                  <svg
                    className="stroke-primary-200"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                    <path d="M12 18c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                    <path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M17 21l4 -4" />
                  </svg>
                ) : (
                  <svg
                    className="stroke-primary-200"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                    <path d="M11.11 17.958c-3.209 -.307 -5.91 -2.293 -8.11 -5.958c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6c-.21 .352 -.427 .688 -.647 1.008" />
                    <path d="M20 21l2 -2l-2 -2" />
                    <path d="M17 17l-2 2l2 2" />
                  </svg>
                )}
              </button>
            </div>
            {description && (
              <p className="text-md text-slate-200">{description}</p>
            )}
          </span>
          <div className="flex w-full flex-col items-center justify-center gap-10">
            {component}
          </div>

          <span
            className={`${showCode ? 'h-auto opacity-100 duration-500' : 'h-0 opacity-0'} h-0 w-full space-y-10 overflow-hidden duration-200`}
          >
            {<CodeBlock code={componentCode} />}
            {css && <CodeBlock language="css" code={css} />}
          </span>
        </div>
      </section>
    </>
  )
}
