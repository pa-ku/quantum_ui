import React from 'react'

type ColorTypes = {
  children: string
  value: string
  onChange: any
}

export default function ColorHandler({
  children,
  value,
  onChange,
}: ColorTypes) {
  return (
    <label
      className={`${children === 'Primary' ? 'bg-primary' : 'bg-secundary'} flex w-40 cursor-pointer flex-col items-center justify-center p-4 duration-200 hover:-translate-y-0.5`}
    >
      <p className="font-bold"> {children}</p>
      <input
        className="b-none absolute cursor-pointer rounded-xl border-0 p-0 opacity-0"
        type="color"
        value={value}
        onChange={onChange}
      />
    </label>
  )
}
