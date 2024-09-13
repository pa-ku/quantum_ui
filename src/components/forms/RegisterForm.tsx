import React from 'react'
import CodeBlock from '../CodeBlock'
export default function RegisterForm() {
  const code = `   <form className="flex w-80 flex-col gap-3">
        <label className="flex flex-col">
          <p className="text-xl">Email</p>1
          <input
            type="email"
            className="rounded-lg bg-gray-800 p-3"
            placeholder="ejemplo@gmail.com"
          />
        </label>

        <label className="flex flex-col">
          <p className="text-xl">Password</p>
          <div className="flex w-full flex-row">
            <input
              type="password"
              className="w-full rounded-l-lg bg-gray-800 p-3"
              placeholder="quantum"
            />
            <span className="relative flex items-center justify-center object-contain">
              <input
                type="checkbox"
                className="peer h-full w-10 cursor-pointer appearance-none rounded-r-lg bg-gray-700"
              />

              <svg
                className="pointer-events-none absolute hidden stroke-white p-1 peer-checked:block peer-hover:stroke-primary"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
              </svg>
              <svg
                className="pointer-events-none absolute stroke-white p-1 peer-checked:hidden peer-hover:stroke-primary"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4" />
                <path d="M3 15l2.5 -3.8" />
                <path d="M21 14.976l-2.492 -3.776" />
                <path d="M9 17l.5 -4" />
                <path d="M15 17l-.5 -4" />
              </svg>
            </span>
          </div>
        </label>
        <button
          type="submit"
          className="w-full rounded-lg bg-gradient-to-bl from-primary to-secundary py-3 text-lg text-white"
        >
          Enviar
        </button>
      </form>`

  return (
    <>
      <div className="flex w-80 flex-col gap-3">
        <label className="flex flex-col">
          <p className="text-xl">Username</p>
          <input
            type="email"
            className="rounded-lg bg-gray-800 p-3 placeholder-shown:border-gray-400 valid:border-l-8 valid:border-emerald-400"
            placeholder="quantumui"
            required
            minLength={3}
          />
        </label>
        <label className="flex flex-col">
          <p className="text-xl">Email</p>
          <input
            type="email"
            className="rounded-lg bg-gray-800 p-3 placeholder-shown:border-gray-400 valid:border-l-8 valid:border-emerald-400"
            placeholder="ejemplo@gmail.com"
            required
          />
        </label>

        <label className="flex flex-col">
          <p className="text-xl">Password</p>
          <input
            type="password"
            className="rounded-lg bg-gray-800 p-3 placeholder-shown:border-gray-400 valid:border-l-8 valid:border-emerald-400"
            placeholder="quantum"
            required
            minLength={8}
            
          />
        </label>
        <label className="flex flex-col">
          <p className="text-xl">Confirm Password</p>
          <input
            type="password"
            className="rounded-lg bg-gray-800 p-3 placeholder-shown:border-gray-400 valid:border-l-8 valid:border-emerald-400"
            placeholder="quantum"
            required
            minLength={8}
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-lg bg-gradient-to-bl from-primary to-secundary py-3 text-lg text-white"
        >
          Register
        </button>
      </div>

      <CodeBlock code={code}></CodeBlock>
    </>
  )
}
