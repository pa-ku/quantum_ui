import CodeBlock from '../CodeBlock'
import React from 'react'
import quantumLogo from '../../assets/images/quantumLogo.webp'

export default function Accent_card() {
  const codeBlock = `<div class="relative
   flex h-60 w-40 items-center justify-center
    overflow-hidden rounded-xl p-0.5">
  <div class="flex h-full w-full 
  items-center justify-center rounded-xl
  bg-gray-900 p-6 mix-blend-multiply">
   <p className="text-xl">
   Quantum
   </p>
  </div>
  <span class="animate-rotate -z-10
  absolute h-80 w-80 animate-spin 
  rounded-full bg-gradient-to-r
  from-primary to-secundary">
  </span>
</div>`

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
      <div className="relative flex h-60 w-40 items-center justify-center overflow-hidden rounded-xl p-0.5">
        <div className="flex h-full w-full items-center justify-center rounded-xl bg-gray-900 p-6 mix-blend-multiply">
          <img src={quantumLogo} alt="" />
        </div>
        <span className="animate-rotate absolute -z-10 h-80 w-80 rounded-full bg-gradient-to-r from-primary to-secundary"></span>
      </div>
      <CodeBlock code={codeBlock} />
      <CodeBlock code={codeCss} language={'css'} />
    </>
  )
}
