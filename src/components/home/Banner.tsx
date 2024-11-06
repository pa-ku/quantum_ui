import React from 'react'

export default function Banner() {
  return (
    <>
      <div>
        <h1 className="flex h-full w-full items-center justify-center bg-gradient-to-t from-gray-300 to-white bg-clip-text text-center text-7xl font-semibold tracking-tight text-transparent">
          Design made real
        </h1>
        <p className="text-center text-xl text-gray-400">
          Copy, paste and <span className="text-primary-200">use it</span>
        </p>
      </div>
    </>
  )
}
