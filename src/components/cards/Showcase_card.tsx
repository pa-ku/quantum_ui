import React from 'react'
import CodeBlock from '../CodeBlock'
import jsxToString from 'react-element-to-jsx-string'
import CodeWrapper from '../CodeWrapper'

export default function Showcase_card() {
  const componentToJsx = (
    <figure className="bg-shadow-md h-max w-full rounded-xl bg-gray-950 sm:w-72">
      <img
        className="h-60 w-full rounded-t-xl object-cover"
        src={
          'https://resizer.glanacion.com/resizer/v2/turistas-en-7BUWWIQXNVEFRA7WMPSCFXBRUI.JPG?auth=1391195722ac7fdd4a815eda7654172ef5acb4721601e27aa060345dd908bd22&width=780&height=520&quality=70&smart=true'
        }
        alt=""
      />
      <figcaption className="p-4">
        <h2 className="text-start text-xl font-bold uppercase text-primary">
          Bariloche
        </h2>
        <p className="text-white">
          Bariloche es conocida por sus paisajes montañosos, lagos cristalinos,
          nieve en invierno, y arquitectura de estilo alpino.
        </p>
      </figcaption>
    </figure>
  )

  const componentCode = jsxToString(componentToJsx)
  return (
    <>
      {componentToJsx}
      <CodeWrapper>
        <CodeBlock code={componentCode} />
      </CodeWrapper>
    </>
  )
}
