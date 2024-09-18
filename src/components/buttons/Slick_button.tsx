import CodeBlock from '../CodeBlock'
import React from 'react'
import ComponentTemplate from '../ComponentTemplate'
import jsxToString from 'react-element-to-jsx-string'

export default function Slick_button() {
  const componentToJsx = (
    <button className="slick-button group relative rounded-md px-5 py-3 text-xl text-white duration-300">
      Subscribe
    </button>
  )
  const componentCode = jsxToString(componentToJsx)

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
        {componentToJsx}
        <CodeBlock code={componentCode} />
        <CodeBlock code={codeCss} language={'css'} />
      </ComponentTemplate>
    </>
  )
}
