import React from 'react'
import BentoBox from '../components/BentoBox'
import Documentation from '../components/Documentation'
export default function Home() {
  return (
    <>
      <main className="relative flex w-full flex-col items-center justify-center gap-24 overflow-hidden px-4 py-10 lg:overflow-visible xl:w-1/2">
        <Banner />
        <div className="absolute top-0 flex w-full items-center justify-center opacity-10">
          <div className="abosolute animate-left size-52 rounded-full bg-primary-400 blur-3xl"></div>
          <div className="abosolute animate-right right-0 size-52 rounded-full bg-secundary-700 blur-3xl"></div>
        </div>
        <BentoBox />
        <Documentation />
      </main>
    </>
  )
}

function Banner() {
  return (
    <>
      <div className="flex h-40 w-full flex-col items-center justify-center">
        <h1 className="flex h-full w-full items-center justify-center bg-gradient-to-t from-gray-300 to-white bg-clip-text text-center text-6xl font-semibold tracking-tight text-transparent md:text-7xl">
          Design made real
        </h1>
        <p className="text-2xl">
          Copy, paste and <span className="text-primary-200">use it</span>
        </p>
      </div>
    </>
  )
}
