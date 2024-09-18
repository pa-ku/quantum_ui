import React from 'react'
import { useNavigate } from 'react-router-dom'

type LinkTypes = {
  to: string
  children: string
}

export function LinkButton({ to, children }: LinkTypes) {
  const navigate = useNavigate()

  const handleLinkClick = () => {
    navigate(to)
  }

  return (
    <>
      <div className="relative flex">
        <p className="pointer-events-none z-10 px-3 py-0.5">{children}</p>
        <input
          className="absolute h-full w-full cursor-pointer appearance-none rounded-xl opacity-100 outline-1 outline-slate-500 duration-150 checked:bg-slate-700 hover:outline"
          name="sidebar"
          onClick={handleLinkClick}
          type="radio"
        />
      </div>
    </>
  )
}
