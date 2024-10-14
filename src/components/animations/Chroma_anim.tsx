import CodeBlock from '../CodeBlock'
import React from 'react'
import CodeWrapper from '../CodeWrapper'

export default function Chroma_anim() {
  const codeBlock = `.animate-chroma{
  animation: chroma 30s linear infinite;
  background-size: 2000%;
  background: linear-gradient(
    to left,#f8baa3,#ef6676,
    #ee4566,#ef6676,#f8baa3,)}

@keyframes chroma {
    to {
      background-position: 1200%;
    }
}`

  return (
    <>
      <div className="animate-chroma h-20 w-20 rounded-xl bg-primary-300"></div>
      <CodeWrapper>
        <CodeBlock code={codeBlock} language={'css'} />
      </CodeWrapper>
    </>
  )
}
