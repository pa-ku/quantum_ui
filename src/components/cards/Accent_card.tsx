import CodeBlock from '../CodeBlock'
import React from 'react'
import jsxToString from 'react-element-to-jsx-string'
import CodeWrapper from '../CodeWrapper'

export default function Accent_card() {
  const componentToJsx = (
    <div className="relative flex h-60 w-40 items-center justify-center overflow-hidden rounded-xl p-0.5">
      <div className="flex h-full w-full items-center justify-center rounded-xl bg-gray-900 p-6 mix-blend-multiply">
        <img
          src="https://github.com/user-attachments/assets/166d70cb-82ea-4cd4-85f5-56b14f2b9693"
          alt=""
        />
      </div>
      <span className="animate-rotate absolute -z-10 h-80 w-80 rounded-full bg-gradient-to-r from-primary to-secundary"></span>
    </div>
  )

  const componentCode = jsxToString(componentToJsx)

  const codeCss = `.animate-rotate{
    animation: rotate 3s linear infinite;
    }

@keyframes rotate {
  to{
    rotate: 360deg;
  }
  }`

  return (
    <>
      {componentToJsx}
      <CodeWrapper>
        <CodeBlock code={componentCode} />
        <CodeBlock code={codeCss} language={'css'} />
      </CodeWrapper>
    </>
  )
}
