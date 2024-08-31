import React from 'react'
import CodeBlock from '../CodeBlock'
import ComponentTemplate from '../ComponentTemplate'
export default function Neon() {
  const neon = `<button className="group relative flex h-max w-max items-center justify-center overflow-hidden rounded-xl bg-gray-800 p-0.5 mix-blend-lighten">
<div className="flex h-full w-full items-center justify-center rounded-xl bg-slate-700 px-6 py-4">
    <p className="text-xl text-primary duration-500 group-hover:text-white">
    Quantum
    </p>
</div>
<span className="animate-rotate absolute -z-10 h-52 w-8 animate-spin rounded-fulbg-gradient-to-r from-primary duration-500 group-hover:from-white"></span>
</button>`

  const title = 'Neon'
  const description = ''
  return (
    <>
      <ComponentTemplate title={title} description={description}>
        <button className="group relative flex h-max w-max items-center justify-center overflow-hidden rounded-xl bg-gray-800 p-0.5 mix-blend-lighten">
          <div className="flex h-full w-full items-center justify-center rounded-xl bg-slate-700 px-6 py-4">
            <p className="text-xl text-primary duration-500 group-hover:text-white">
              Quantum
            </p>
          </div>
          <span className="animate-rotate absolute -z-10 h-52 w-8 animate-spin rounded-full bg-gradient-to-r from-primary duration-500 group-hover:from-white"></span>
        </button>
        <CodeBlock code={neon} />
      </ComponentTemplate>
    </>
  )
}
