import CodeBlock from '../CodeBlock'
import React from 'react'
import CodeWrapper from '../CodeWrapper'
export default function Glow_anim() {
  const codeBlock = `.animate-glow{
  animation: animate-glow 3s linear infinite;}

  @keyframes animate-glow {
    50% {
      box-shadow: 0px 0px 20px var(--primary);
}}`

  return (
    <>
      <div className="animate-glow h-20 w-20 rounded-xl bg-primary"></div>
      <CodeWrapper>
        <CodeBlock code={codeBlock} language={'css'} />
      </CodeWrapper>
    </>
  )
}
