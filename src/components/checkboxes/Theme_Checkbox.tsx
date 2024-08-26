import React from 'react'
import CodeBlock from '../CodeBlock'

export default function ThemeCheckbox() {
  const codeBlock = `<div className="relative flex w-max 
  items-center justify-center">
  <input
  type="checkbox"
  className="peer h-10 w-10 cursor-pointer 
  appearance-none"/>
  <img
  className="pointer-events-none absolute h-full w-full 
  opacity-100 invert duration-300 
  peer-checked:rotate-180 
  peer-checked:opacity-0"
  src="https://cdn.icon-icons.com/icons2/1325/PNG/512/fun4x_86984.png"
  alt=""/>
  <img
  className="pointer-events-none absolute h-full w-full
   opacity-0 invert -rotate-180 duration-300 
  peer-checked:rotate-0 
  peer-checked:opacity-100"
  src="https://cdn.icon-icons.com/icons2/3255/PNG/512/moon_stars_weather_night_icon_205756.png"
  alt=""/>
</div>`

  return (
    <>
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
      <CodeBlock code={codeBlock} />
    </>
  )
}
