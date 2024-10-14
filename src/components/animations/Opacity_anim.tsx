import CodeBlock from '../CodeBlock'
import React from 'react'
import CodeWrapper from '../CodeWrapper'

export default function Opacity_anim() {
  const codeBlock = `.animate-opacity{
  animation: opacity 2s linear infinite;}

  @keyframes opacity{
    from{
        opacity:0
    }
    to{
        opacity:1
}}`

  return (
    <>
      <div className="opacity h-20 w-20 rounded-xl bg-primary"></div>
      <CodeWrapper>
        <CodeBlock code={codeBlock} language={'css'} />
      </CodeWrapper>
    </>
  )
}
