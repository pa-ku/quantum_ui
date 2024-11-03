import React from 'react'
import {
  BoltIcon,
  MobileIcon,
  ReactIcon,
  TailwindIcon,
} from '../../assets/svg/bento_box_svg'
export default function BentoBox() {
  return (
    <>
      <div className="animate-scale grid shadow-center shadow-slate-800">
        <div className="box col-span-2">
          <div className="content h-full text-center text-2xl md:text-2xl">
            <MobileIcon className="size-12"></MobileIcon>
            <p className="ml-1">Responsive</p>
          </div>
        </div>
        <div className="box relative row-span-2 h-full w-full">
          <div className="content h-full w-full">
            <BoltIcon className="size-24"></BoltIcon>
            <p className="absolute left-0 w-full text-center text-xl [writing-mode:vertical-lr] md:text-2xl">
              Fast animations
            </p>
          </div>
        </div>
        <div className="box">
          <div className="content relative h-full min-w-full p-5 text-lg md:text-xl">
            <ReactIcon className="size-12"></ReactIcon>
            <p className="absolute bottom-2">React</p>
          </div>
        </div>

        <div className="box">
          <div className="content relative h-full min-w-full text-lg md:text-xl">
            <TailwindIcon className="size-16" />
            <p className="absolute bottom-2">Tailwind</p>
          </div>
        </div>

        <div className="box col-span-3">
          <div className="content md:text-1xl text-center text-2xl">
            Accesible oriented
          </div>
        </div>

        <span className="chroma"></span>
      </div>
    </>
  )
}
