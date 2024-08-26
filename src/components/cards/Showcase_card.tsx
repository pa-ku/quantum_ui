import React from 'react'
import CodeBlock from '../CodeBlock'
import barilocheWebp from '../../assets/images/bariloche.webp'
export default function Showcase_card() {
  const codeBlock = `<figure className="bg-shadow-md h-max w-full rounded-xl bg-gray-950 sm:w-72">
  <img
    className="h-60 w-full rounded-t-xl object-cover"
    src=""
    alt=""/>
  <figcaption className="p-4">
    <h2 className="text-xl text-start font-bold uppercase text-primary">
      title
    </h2>
    <p className="text-white">
     description
    </p>
  </figcaption>
</figure>`
  return (
    <>
      <figure className="bg-shadow-md h-max w-full rounded-xl bg-gray-950 sm:w-72">
        <img
          className="h-60 w-full rounded-t-xl object-cover"
          src={barilocheWebp}
          alt=""
        />
        <figcaption className="p-4">
          <h2 className="text-start text-xl font-bold uppercase text-primary">
            Bariloche
          </h2>
          <p className="text-white">
            Una vista maravillosa desde el cerro campanario
          </p>
        </figcaption>
      </figure>
      <CodeBlock code={codeBlock} />
    </>
  )
}
