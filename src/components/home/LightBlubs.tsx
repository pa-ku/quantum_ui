import React from 'react'

export default function LightBlubs() {
  return (
    <>
      <div className="absolute top-0 flex w-full items-center justify-center opacity-10">
        <div className="abosolute animate-left size-52 rounded-full bg-primary-400 blur-3xl"></div>
        <div className="abosolute animate-right right-0 size-52 rounded-full bg-secundary-700 blur-3xl"></div>
      </div>
    </>
  )
}
