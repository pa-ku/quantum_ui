import React from 'react'
export default function BentoBox() {
  const tailwindLogo = (
    <svg
      className="h-full w-full md:h-20 md:w-20"
      viewBox="0 0 24 24"
      strokeWidth="0.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" />
    </svg>
  )

  const accesLogo = (
    <svg
      width="70"
      height="70"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#fff"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.051 6.844a1 1 0 0 0 -1.152 -.663l-.113 .03l-2.684 .895l-2.684 -.895l-.113 -.03a1 1 0 0 0 -.628 1.884l.109 .044l2.316 .771v.976l-1.832 2.75l-.06 .1a1 1 0 0 0 .237 1.21l.1 .076l.101 .06a1 1 0 0 0 1.21 -.237l.076 -.1l1.168 -1.752l1.168 1.752l.07 .093a1 1 0 0 0 1.653 -1.102l-.059 -.1l-1.832 -2.75v-.977l2.316 -.771l.109 -.044a1 1 0 0 0 .524 -1.221zm-3.949 -4.184a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3z"
        stroke-width="0"
        fill="currentColor"
      />
    </svg>
  )

  const boltLogo = (
    <svg
      className="h-full w-full md:p-9"
      viewBox="0 0 24 24"
      strokeWidth="0.5"
      stroke="#ffffff"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
    </svg>
  )

  const mobileLogo = (
    <svg
      className="h-10 w-10 md:h-10 md:w-10"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#ffffff"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11.5 21h-3.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" />
      <path d="M20 21l2 -2l-2 -2" />
      <path d="M17 17l-2 2l2 2" />
      <path d="M11 4h2" />
      <path d="M12 17v.01" />
    </svg>
  )

  return (
    <>
      <div className="animate-scale grid shadow-center shadow-slate-800">
        <div className="box col-span-2">
          <div className="content h-full p-6 text-center text-2xl md:text-4xl">
            {mobileLogo}
            <p className="ml-1">Responsive</p>
          </div>
        </div>
        <div className="box relative row-span-2 h-full w-full">
          <div className="content h-full w-full">
            {boltLogo}
            <p className="absolute left-0 w-full text-center text-xl [writing-mode:vertical-lr] md:text-3xl">
              Fast animations
            </p>
          </div>
        </div>
        <div className="box">
          <div className="content relative h-full min-w-full p-5 text-lg md:text-2xl">
            {tailwindLogo}
            <p className="absolute bottom-2">Tailwind</p>
          </div>
        </div>

        <div className="box">
          <p className="content relative h-full w-full p-7 text-xl md:text-2xl">
            Accesible
          </p>
        </div>

        <div className="box col-span-3">
          <div className="content h-20 p-10 text-center text-2xl md:text-3xl">
            Css without Js
          </div>
        </div>

        <span className="chroma"></span>
      </div>
    </>
  )
}
