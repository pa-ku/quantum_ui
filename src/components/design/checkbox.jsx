export const CHECK_DASHED = (
  <div className="relative">
    <input
      type="checkbox"
      className="peer absolute h-full w-full cursor-pointer appearance-none"
    />
    <p className="rounded-lg border-2 border-dashed px-4 py-2 font-bold peer-checked:bg-white peer-checked:text-black">
      Sound
    </p>
  </div>
)
export const CHECK_MINIMAL = (
  <div className="relative">
    <input
      type="checkbox"
      className="peer absolute h-full w-full cursor-pointer appearance-none"
    />
    <p className="border-2 px-4 py-2 peer-checked:bg-white peer-checked:text-black">
      Switch Off
    </p>
  </div>
)

export const CHECK_ACTIVE = (
  <div className="relative">
    <input
      type="checkbox"
      className="peer absolute h-full w-full cursor-pointer appearance-none"
    />
    <p className="rounded-lg bg-gray-600 px-4 py-2 peer-checked:bg-emerald-500">
      Activate
    </p>
  </div>
)

export const CHECK_HEARTH = (
  <label
    htmlFor="favorite"
    className="relative size-10 cursor-pointer stroke-emerald-500"
  >
    <input
      id="favorite"
      className="peer absolute appearance-none"
      type="checkbox"
    />
    <svg
      className="text-transparent duration-200 peer-checked:text-emerald-300"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
    </svg>
  </label>
)

export const CHECK_PLUS = (
  <input
    content="✖"
    type="checkbox"
    className="relative flex h-9 w-9 appearance-none items-center justify-center text-4xl before:absolute before:h-max before:w-max before:-rotate-45 before:cursor-pointer before:px-4 before:py-2 before:duration-200 before:content-[attr(content)] checked:before:rotate-0 checked:before:text-emerald-500"
  />
)

export const CHECK_THEME = (
  <div className="relative flex">
    <input
      type="checkbox"
      className="peer h-10 w-10 cursor-pointer appearance-none"
    />
    <img
      className="pointer-events-none absolute invert duration-300 peer-checked:rotate-180 peer-checked:opacity-0"
      src="https://cdn.icon-icons.com/icons2/1325/PNG/512/fun4x_86984.png"
      alt="Sun Icon"
    />
    <img
      className="pointer-events-none absolute -rotate-180 opacity-0 invert duration-300 peer-checked:rotate-0 peer-checked:opacity-100"
      src="https://cdn.icon-icons.com/icons2/3255/PNG/512/moon_stars_weather_night_icon_205756.png"
      alt="Moon Icon"
    />
  </div>
)

export const CHECK_TOGGLE = (
  <input
    type="checkbox"
    className="relative flex h-6 w-12 cursor-pointer appearance-none items-center rounded-xl bg-white duration-200 before:pointer-events-none before:absolute before:h-4 before:w-4 before:translate-x-1 before:rounded-xl before:bg-emerald-500 before:duration-200 checked:bg-emerald-500 checked:before:translate-x-7 checked:before:bg-white"
  />
)
