import React from 'react'
import BentoBox from '../components/home/BentoBox'
import Documentation from '../components/home/Documentation'
import Banner from '../components/home/Banner'
export default function Home() {
  return (
    <>
      <main className="relative flex w-full flex-col items-center justify-center gap-24 overflow-hidden px-3 py-10 md:w-[45em] lg:overflow-visible">
        <Banner />
        <div className="w-full md:max-w-[40em]">
          <BentoBox />
        </div>
        <Documentation />
      </main>
    </>
  )
}
