import React from 'react'

export const INPUT_MINIMAL = (
  <input
    type="text"
    aria-label=""
    className="rounded-xl border-[1px] border-transparent bg-gray-800 px-4 py-2 text-white outline-none placeholder:text-gray-200 focus:bg-gray-800 focus-visible:border-primary"
    placeholder="Input"
  />
)

export const INPUT_MODERN = (
  <div className="relative flex h-max w-max items-center justify-start">
    <input
      type="text"
      className="text-red peer rounded-xl border-[1px] border-transparent bg-gray-800 px-3 py-2 caret-primary outline-none focus-visible:border-primary"
      placeholder=" "
      aria-label=""
    />
    <p className="pointer-events-none absolute -translate-y-8 px-3 font-bold text-slate-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:font-normal peer-placeholder-shown:text-slate-400 peer-focus:-translate-y-8 peer-focus:font-bold peer-focus:text-slate-300">
      Email
    </p>
  </div>
)

export const INPUT_SEARCH = (
  <div className="flex h-11 w-max">
    <input
      placeholder="Search..."
      className="0 peer w-full rounded-l-xl border-[1px] border-transparent bg-gray-800 px-3 py-2 outline-none duration-200 focus-within:border-primary"
      type="text"
      aria-label="search"
      role="searchbox"
      required
    />
    <button
      className="w-12 rounded-r-xl border-[1px] border-transparent bg-gray-900 text-primary outline-none focus-visible:border-primary peer-placeholder-shown:text-gray-300"
      aria-label="search"
    >
      <p className="pointer-events-none -rotate-45 text-4xl">⚲</p>
    </button>
  </div>
)
