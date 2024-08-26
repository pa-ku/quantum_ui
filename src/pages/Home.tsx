import React from "react";
export default function Home() {
  return (
    <>
      <main className="flex w-full flex-col items-center justify-center gap-24 px-4 xl:w-[42em]">
        <Banner />
        <BentoBox />
      </main>
    </>
  );
}

function Banner() {
  return (
    <>
      <div className="flex h-40 flex-col items-center justify-center">
        <h1 className="flex h-full w-full items-center justify-center bg-gradient-to-t from-gray-300 to-white bg-clip-text text-center text-6xl font-semibold tracking-tight text-transparent md:text-7xl">
          Design made real
        </h1>
        <p className="text-2xl">
          Copy, paste and <span className="text-primary-200">use it</span>
        </p>
      </div>
    </>
  );
}

function BentoBox() {
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
  );

  const accesLogo = (
    <svg
      className="h-full w-full md:h-20 md:w-20"
      viewBox="0 0 24 24"
      strokeWidth="1"
      stroke="#ffffff"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M10 16.5l2 -3l2 3m-2 -3v-2l3 -1m-6 0l3 1" />
      <circle cx="12" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  );

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
  );

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
  );

  return (
    <>
      <div className="grid shadow-center shadow-slate-800">
        <div className="box col-span-2">
          <div className="content h-full p-6 text-center text-xl md:text-3xl">
            Pure Css Components
          </div>
        </div>
        <div className="box relative row-span-2 h-full w-full">
          <div className="content h-full w-full">
            {boltLogo}
            <p className="absolute bottom-2 text-center md:text-xl">
              Fast animations
            </p>
          </div>
        </div>
        <div className="box">
          <div className="content relative h-full min-w-full p-5">
            {tailwindLogo}
            <p className="absolute bottom-2">Tailwind</p>
          </div>
        </div>

        <div className="box">
          <div className="content relative h-full w-full p-7">
            {accesLogo}
            <p className="absolute bottom-2">Accesible</p>
          </div>
        </div>

        <div className="box col-span-3">
          <div className="content h-20 p-10 text-3xl">
            {mobileLogo}
            <p>Responsive</p>
          </div>
        </div>

        <span className="chroma"></span>
      </div>
    </>
  );
}
