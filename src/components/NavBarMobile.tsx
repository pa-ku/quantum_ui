import quantumLogo from '../assets/images/quantumLogo.webp'
import { useState } from 'react'
import NavLinks from './NavLinks'
import { Link } from 'react-router-dom'
import React from 'react'
export default function NavBarMobile() {
  const [openMenu, setOpenMenu] = useState(false)

  function handleMenu() {
    setOpenMenu(!openMenu)
  }

  return (
    <>
      <header className="fixed bottom-0 z-50 flex h-16 w-full items-center justify-between gap-8 bg-[var(--dark-200)] px-4 text-lg font-bold text-white md:hidden">
        <Link to={'/'} className="flex h-6 items-center justify-center gap-2">
          <img className="h7 w-10" src={quantumLogo.src} alt="" />
          Quantum
        </Link>

        <div className="relative flex h-6 w-6 items-center justify-center">
          <input
            type="checkbox"
            onChange={handleMenu}
            className="peer absolute h-full w-full cursor-pointer appearance-none rounded-lg bg-white duration-300"
          />
          <p className="pointer-events-none absolute h-max w-max rotate-45 text-sm font-bold text-background duration-200 peer-checked:rotate-0">
            ✖
          </p>
        </div>
      </header>
      <nav
        className={`${!openMenu && 'translate-y-80'} fixed bottom-0 left-0 flex h-max w-full flex-col gap-2 bg-[var(--dark-200)] p-5 pb-20 text-white opacity-90 backdrop-blur-xl duration-300 md:hidden`}
      >
        <NavLinks />
      </nav>
    </>
  )
}
