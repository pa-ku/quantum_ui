export const INPUT_MINIMAL = (
  <input
    type="text"
    aria-label=""
    className="rounded-xl border-[1px] border-transparent bg-gray-800 px-4 py-2 text-white outline-none placeholder:text-gray-200 focus:bg-gray-800 focus-visible:border-emerald-500"
    placeholder="Input"
  />
)

export const INPUT_MODERN = (
  <div className="relative flex h-max w-max items-center justify-start">
    <input
      type="text"
      className="text-red peer rounded-xl border-[1px] border-transparent bg-gray-800 px-3 py-2 caret-emerald-500 outline-none focus-visible:border-emerald-500"
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
      className="0 peer w-full rounded-l-xl border-[1px] border-transparent bg-gray-800 px-3 py-2 outline-none duration-200 focus-within:border-emerald-500"
      type="text"
      aria-label="search"
      role="searchbox"
      required
    />
    <button
      className="w-12 rounded-r-xl border-[1px] border-transparent bg-gray-900 text-emerald-500 outline-none focus-visible:border-emerald-500 peer-placeholder-shown:text-gray-300"
      aria-label="search"
    >
      <p className="pointer-events-none -rotate-45 text-4xl">⚲</p>
    </button>
  </div>
)

export const INPUT_FILE = (
  <>
    <label className="overflow-hidden just-center relative flex cursor-cell items-center gap-2 bg-gray-800 px-8 py-4 font-bold text-emerald-500 hover:bg-gray-700">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="pointer-events-none"
        width="32"
        height="32"
        strokeWidth="2"
      >
        <path d="M15 8h.01"></path>
        <path d="M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5"></path>
        <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4"></path>
        <path d="M14 14l1 -1c.67 -.644 1.45 -.824 2.182 -.54"></path>
        <path d="M16 19h6"></path>
        <path d="M19 16v6"></path>
      </svg>
      Add Image
      <input className="pointer-events-none absolute opacity-0" type="file" />
    </label>
  </>
)
export const INPUT_SOUND = (
  <>
    <input
      className="w-48 appearance-none rounded-xl border-2 border-gray-700 bg-gray-800"
      type="range"
    />
  </>
)
export const INPUT_SOUND_CSS = `input[type='range']::-webkit-slider-thumb {
  @apply size-5 cursor-pointer appearance-none rounded-full bg-emerald-500;
}`
