import { useState } from 'react'

export default function CodeWrapper({ children }) {
  const [showCode, setShowCode] = useState(false)
  return (
    <>
      <button
        className="group flex items-center justify-center rounded-md stroke-primary-300 px-2 py-1 text-xl hover:bg-gray-800 hover:text-primary-300"
        onClick={() => setShowCode(!showCode)}
      >
        <svg
          className="stroke-white group-hover:stroke-primary-200"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 8l-4 4l4 4" />
          <path d="M17 8l4 4l-4 4" />
          <path d="M14 4l-4 16" />
        </svg>
        Show Code
      </button>

      <span
        className={`${showCode ? 'h-auto opacity-100 duration-500' : 'h-0 opacity-0'} h-0 w-full space-y-10 overflow-hidden duration-200`}
      >
        {children}
      </span>
    </>
  )
}
