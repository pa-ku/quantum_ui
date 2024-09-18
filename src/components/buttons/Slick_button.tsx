import CodeBlock from '../CodeBlock'
import React from 'react'
import ComponentTemplate from '../ComponentTemplate'
export default function Slick_button() {
  const codeBlock = `<button className="slick-button rounded-md px-5 py-3 text-xl
    text-white duration-300">
     Fancy
</button>`

  const codeCss = `@property --color-1 {
  syntax: "<color>";
  inherits: true;
  initial-value: #fff;
}

@property --color-2 {
  syntax: "<color>";
  inherits: true;
  initial-value: #fff;
}

.slick-button {
  --color-1: var(--primary);
  --color-2: var(--secundary);
  background-image:linear-gradient(40deg,var(--primary),var(--secundary));
  transition:
  --color-1 2000ms,
  --color-2 800ms;
}

.slick-button:hover {
  --color-1: var(--secundary);
  --color-2: var(--primary);
}
`

  return (
    <>
      <ComponentTemplate
        title={'Slick'}
        description={
          'This button needs the @property from css to animate the colors of the background image. Changing the transition time creates different animations '
        }
      >
        <button className="slick-button group relative rounded-md px-5 py-3 text-xl text-white duration-300">
          Subscribe
        </button>
        <CodeBlock code={codeBlock} />
        <CodeBlock code={codeCss} language={'css'} />
      </ComponentTemplate>
    </>
  )
}
