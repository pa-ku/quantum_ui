export default function Home() {
  return (
    <>
      <main className="flex w-full flex-col items-center justify-center gap-24 px-4 xl:w-[42em]">
        <Banner />
        <Cards />
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

function Cards() {
  return (
    <>
      <div className="grid grid-cols-2 gap-2 p-3 text-secundary-200 md:p-0">
        <div className="rounded-xl bg-[#1d222f] p-10">
          <svg
            className="h-full"
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
        </div>

        <div className="rounded-xl bg-[#1d222f] p-10">
          <svg
            className="h-full"
            viewBox="0 0 24 24"
            strokeWidth="0.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
            <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
          </svg>
        </div>
        <div className="col-span-2 rounded-xl bg-[#1d222f] p-10 text-center">
          <h3 className="text-3xl">Pure Css Components</h3>
        </div>
      </div>
    </>
  );
}
