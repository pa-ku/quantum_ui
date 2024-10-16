import { useState } from 'react'
import NavLinks from './NavLinks'
import ColorHandler from './ui/ColorHandler'
import React from 'react'
import { NavIconButton } from './ui/NavIconButton'

export default function SideBar() {
  const [primary, setPrimary] = useState('#20ac84')
  const [secundary, setSecundary] = useState('#cd61ff')
  const [showCustom, setSowCustom] = useState(false)
  const paleteIcon = (
    <svg
      className="size-6"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#ffffff"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
      <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  )

  const changePrimary = (e) => {
    setPrimary(e.target.value)
    document.documentElement.style.setProperty('--primary', primary)
  }
  const changeSecundary = (e) => {
    setSecundary(e.target.value)
    document.documentElement.style.setProperty('--secundary', secundary)
  }
  return (
    <>
      <aside className="fixed top-0 z-20 hidden h-svh w-48 flex-col rounded-none bg-[var(--dark-200)] px-3 py-5 text-lg text-white opacity-95 lg:flex">
        <div className="flex flex-col gap-3 pb-3">
          <NavLinks />
        </div>
        <hr className="border-slate-500 pb-2" />

        <button
          className={`${showCustom && 'bg-gray-800'} flex w-full items-center justify-center gap-1 rounded-full border border-transparent py-0.5 hover:border-slate-500`}
          onClick={() => setSowCustom(!showCustom)}
          title="Custom Colors"
        >
          {paleteIcon}
          Custom
        </button>

        {showCustom && (
          <footer className="fixed bottom-0 left-0 right-0 z-10 flex h-36 w-full items-center justify-center gap-2 lg:pl-32">
            <ColorHandler onChange={(e) => changePrimary(e)} value={primary}>
              Primary
            </ColorHandler>
            <ColorHandler
              onChange={(e) => changeSecundary(e)}
              value={secundary}
            >
              Secundary
            </ColorHandler>
          </footer>
        )}
      </aside>
    </>
  )
}
