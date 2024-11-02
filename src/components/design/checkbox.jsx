export const CHECK_ACTIVE = (
  <div className="relative flex w-fit items-center justify-center">
    <input
      type="checkbox"
      className="peer absolute h-full w-full cursor-pointer appearance-none"
    />
    <p className="pointer-events-none rounded-xl bg-gray-600 px-4 py-2 font-bold peer-checked:bg-emerald-500">
      Checkbox
    </p>
  </div>
)

export const CHECK_HEARTH = (
  <label
    htmlFor="favorite"
    className="relative m-0 flex h-10 w-10 cursor-pointer items-center justify-center stroke-emerald-500 p-0"
  >
    <input
      id="favorite"
      className="peer absolute appearance-none opacity-0"
      type="checkbox"
    />
    <svg
      className="h-full w-full text-transparent duration-200 peer-checked:text-emerald-500"
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
  <div className="relative flex w-max items-center justify-center">
    <input
      type="checkbox"
      className="peer h-10 w-10 cursor-pointer appearance-none"
    />
    <img
      className="pointer-events-none absolute h-full w-full opacity-100 invert duration-300 peer-checked:rotate-180 peer-checked:opacity-0"
      src="https://cdn.icon-icons.com/icons2/1325/PNG/512/fun4x_86984.png"
      alt=""
    />
    <img
      className="pointer-events-none absolute h-full w-full -rotate-180 opacity-0 invert duration-300 peer-checked:rotate-0 peer-checked:opacity-100"
      src="https://cdn.icon-icons.com/icons2/3255/PNG/512/moon_stars_weather_night_icon_205756.png"
      alt=""
    />
  </div>
)

export const CHECK_TOGGLE = (
  <input
    type="checkbox"
    className="relative flex h-6 w-12 cursor-pointer appearance-none items-center rounded-xl bg-white duration-200 before:pointer-events-none before:absolute before:h-4 before:w-4 before:translate-x-1 before:rounded-xl before:bg-emerald-500 before:duration-200 checked:bg-emerald-500 checked:before:translate-x-7 checked:before:bg-white"
  />
)
