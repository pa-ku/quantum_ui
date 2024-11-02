import NavLinks from './NavLinks'
import React from 'react'

export default function SideBar() {
  return (
    <>
      <aside className="fixed top-0 z-20 hidden h-svh w-48 flex-col rounded-none bg-[var(--dark-200)] px-3 py-5 text-lg text-white opacity-95 lg:flex">
        <div className="flex flex-col gap-3 pb-3">
          <NavLinks />
        </div>
        <hr className="border-slate-500 pb-2" />
      </aside>
    </>
  )
}
