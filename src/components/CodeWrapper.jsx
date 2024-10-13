import React, { useState } from 'react'

export default function CodeWrapper({ children }) {
  const [showCode, setShowCode] = useState(false)
  return (
    <>
      <button
        className="group flex items-center justify-center rounded-full bg-gray-800 stroke-primary-300 p-2 text-xl text-primary-300"
        onClick={() => setShowCode(!showCode)}
        title="show code"
      >
        {showCode ? (
          <svg
            className="stroke-primary-200 group-hover:stroke-white"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
            <path d="M12 18c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
            <path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M17 21l4 -4" />
          </svg>
        ) : (
          <svg
            className="stroke-primary-200 group-hover:stroke-white"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
            <path d="M11.11 17.958c-3.209 -.307 -5.91 -2.293 -8.11 -5.958c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6c-.21 .352 -.427 .688 -.647 1.008" />
            <path d="M20 21l2 -2l-2 -2" />
            <path d="M17 17l-2 2l2 2" />
          </svg>
        )}
      </button>

      <span
        className={`${showCode ? 'h-auto opacity-100 duration-500' : 'h-0 opacity-0'} h-0 w-full space-y-10 overflow-hidden duration-200`}
      >
        {children}
      </span>
    </>
  )
}
