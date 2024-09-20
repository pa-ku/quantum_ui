import CodeBlock from '../CodeBlock'
import React from 'react'
import jsxToString from 'react-element-to-jsx-string'

export default function Product_card() {
  const componentToJsx = (
    <figure className="relative w-56 shadow-md shadow-gray-900">
      <div className="rounded-t-xl border-b-2 bg-white">
        <span
          aria-label="Descuento"
          className="absolute right-0 rounded-bl-xl rounded-tr-xl bg-primary px-3 text-xl font-bold"
        >
          33%
        </span>
        <img
          className="m-auto flex h-56 w-max rounded-t-xl object-contain p-3"
          src="https://http2.mlstatic.com/D_NQ_NP_2X_948739-MLA70155864929_062023-F.webp"
          alt="Product image"
        />
      </div>
      <figcaption className="rounded-b-xl bg-white p-2 text-slate-700">
        <div className="flex items-center gap-1">
          <p className="text-2xl font-bold">$1.000</p>
          <p className="text-gray-500 line-through">$150</p>
        </div>
        <h2 className="text-lg font-bold">Segway Ninebot Gt2</h2>
        <p className="">Lo mejor de su clase con una autonomia de 100km</p>
      </figcaption>
    </figure>
  )

  const componentCode = jsxToString(componentToJsx)

  return (
    <>
      {componentToJsx}
      <CodeBlock code={componentCode} />
    </>
  )
}
