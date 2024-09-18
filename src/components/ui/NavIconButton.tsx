import React from 'react'
export function NavIconButton({ onChange }) {
  return (
    <>
      <div className="relative flex w-max items-center justify-center">
        <input
          type="checkbox"
          onChange={onChange}
          title="Custom Colors"
          className="peer h-10 w-10 cursor-pointer appearance-none"
        />
        <svg
          className="pointer-events-none absolute h-full w-full rounded-full p-1.5 opacity-100 duration-200 peer-checked:bg-slate-700 y"
          width="44"
          height="44"
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
      </div>
    </>
  )
}
