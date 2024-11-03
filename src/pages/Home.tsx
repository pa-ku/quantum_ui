import React from 'react'
import BentoBox from '../components/home/BentoBox'
import Documentation from '../components/home/Documentation'
import Banner from '../components/home/Banner'
export default function Home() {
  return (
    <>
      <main className="relative flex w-full flex-col items-center justify-center gap-24 overflow-hidden px-4 py-10 lg:overflow-visible xl:w-1/2">
        <Banner />

        <BentoBox />
 
          <Documentation />
   
      </main>
    </>
  )
}
