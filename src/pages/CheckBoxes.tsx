import React from 'react'
import ComponentTitle from '../components/ComponentTitle'

import ComponentLayout from '../components/ComponentLayout'
export default function CheckBoxes() {
  const checkArr = [
    { title: 'Fill', component: CHECK_FILL, description: '' },
    { title: 'Fill Top', component: CHECK_FILL_TOP, description: '' },
    { title: 'Toggle', component: CHECK_TOGGLE, description: '' },
    { title: 'Dashed', component: CHECK_DASHED, description: '' },
    { title: 'Minimal', component: CHECK_MINIMAL, description: '' },
    { title: 'Active', component: CHECK_ACTIVE, description: '' },
    { title: 'Menu', component: CHECK_MENU, description: '' },
    { title: 'Heart', component: CHECK_HEARTH, description: '' },
    { title: 'Plus', component: CHECK_PLUS, description: '' },
    { title: 'Theme', component: CHECK_THEME, description: '' },
  ]

  return (
    <>
      <ComponentTitle
        description={
          ' All the inputs uses the Type Checkbox, mantaining the benefits of the vanilla input'
        }
      >
        CheckBoxes
      </ComponentTitle>
      {checkArr.map(({ title, component, description }) => (
        <ComponentLayout
          component={component}
          title={title}
          description={description}
        ></ComponentLayout>
      ))}
    </>
  )
}

const CHECK_MENU = (
  <label className="relative cursor-pointer overflow-hidden rounded-full [&_*]:rounded-full">
    <input
      className="peer absolute appearance-none font-bold"
      type="checkbox"
    />
    <p className="relative z-10 border-2 px-5 py-2 duration-500 peer-checked:text-black">
      Stay Calm
    </p>
    <span className="absolute right-full top-0 h-full w-full bg-white duration-500 ease-out peer-checked:right-0" />
  </label>
)

const CHECK_FILL = (
  <label className="relative cursor-pointer overflow-hidden rounded-full [&_*]:rounded-full">
    <input
      className="peer absolute appearance-none font-bold"
      type="checkbox"
    />
    <p className="relative z-10 border-2 px-5 py-2 duration-500 peer-checked:text-black">
      Stay Calm
    </p>
    <span className="absolute right-full top-0 h-full w-full bg-white duration-500 ease-out peer-checked:right-0" />
  </label>
)
const CHECK_FILL_TOP = (
  <label className="relative cursor-pointer overflow-hidden rounded-full [&_*]:rounded-full">
    <input
      className="peer absolute appearance-none font-bold"
      type="checkbox"
    />
    <p className="relative z-10 border-2 px-5 py-2 duration-500 peer-checked:text-black">
      Stay Calm
    </p>
    <span className="absolute top-full h-full w-full bg-white duration-500 ease-out peer-checked:top-0" />
  </label>
)

const CHECK_DASHED = (
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
const CHECK_MINIMAL = (
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

const CHECK_ACTIVE = (
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

const CHECK_HEARTH = (
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

const CHECK_PLUS = (
  <input
    content="✖"
    type="checkbox"
    className="relative flex h-9 w-9 appearance-none items-center justify-center text-4xl before:absolute before:h-max before:w-max before:-rotate-45 before:cursor-pointer before:px-4 before:py-2 before:duration-200 before:content-[attr(content)] checked:before:rotate-0 checked:before:text-emerald-500"
  />
)

const CHECK_THEME = (
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

const CHECK_TOGGLE = (
  <input
    type="checkbox"
    className="relative flex h-6 w-12 cursor-pointer appearance-none items-center rounded-xl bg-white duration-200 before:pointer-events-none before:absolute before:h-4 before:w-4 before:translate-x-1 before:rounded-xl before:bg-emerald-500 before:duration-200 checked:bg-emerald-500 checked:before:translate-x-7 checked:before:bg-white"
  />
)
