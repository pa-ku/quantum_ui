import CodeBlock from '../CodeBlock'
import React from 'react'
import jsxToString from 'react-element-to-jsx-string'

export default function Product_card() {
  const componentToJsx = (
    <figure className="relative w-56 shadow-md shadow-gray-900">
      <div className="rounded-t-xl bg-white">
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
      <figcaption className="rounded-b-xl bg-white p-2">
        <p className="text-start text-xl font-bold text-black">$1.000</p>
        <p className="font-bold text-gray-400 line-through">$150</p>
        <h2 className="font-bold text-slate-700">Segway Ninebot Gt2</h2>
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
