import CodeBlock from './CodeBlock'
import React from 'react'

export default function Documentation() {
  const TAILWIND_COLORS = `theme: {
        extend: {
      colors: {
            primary: {
              DEFAULT: 'var(--primary)',
            },
            secundary: {
              DEFAULT: 'var(--secundary)',
            },},},}`

  const CSS_COLORS = `:root{
      --primary: #20ac84;
      --secundary: #cd61ff;
    }`

  const TAILWIND_COLORS_TWO = ` colors: {
            primary: {
              DEFAULT: "var(--primary)",
              100: "var(--primary-100)",
              200: "var(--primary-200)",
              300: "var(--primary-300)",
            },
       }`

  const CSS_COLORS_TWO = `:root{
      --primary: #20ac84;
      --primary-100: #20ac84;
      --primary-200: #20ac84;
      --primary-300: #20ac84;
    }`
  return (
    <>
      <div>
        <div className="pb-10">
          <h2 className="pb-2 text-start text-4xl font-bold">
            Being Quantum is Easy
          </h2>
          <p className="text-slate-400">
            To get started, you should have
            <a
              target="_blank"
              href="https://tailwindcss.com/docs/guides/create-react-app"
              className="mx-1 inline-block text-primary-100 hover:text-white"
            >
              Tailwind
            </a>
            installed. A <span className="text-secundary-300">framework</span>
            is not required, but you'll need to change
            <code>className</code> to <code>class</code> for CSS properties.
          </p>
        </div>

        <div className="pb-2 pt-4">
          <h3 className="text-2xl font-bold text-secundary-300">
            Tailwind Colors
          </h3>
          <p>
            To use the colors dynamically, add the following properties to the
            <span className="mx-1 rounded-xl bg-slate-800 px-2 py-0.5 text-primary-100">
              tailwind.config
            </span>
            file.
          </p>
        </div>
        <div className="py-5">
          <CodeBlock code={TAILWIND_COLORS} />
        </div>

        <div className="py-5">
          <p className="pt-2">
            In the global CSS file, create variables for the Primary and
            Secondary colors.
          </p>
          <CodeBlock language="css" code={CSS_COLORS} />
        </div>

        <div>
          <p>
            It's possible to add gradients or intermediate values for these
            colors.
          </p>
          <CodeBlock code={TALWIND_COLORS_TWO} />
          <CodeBlock language="css" code={CSS_COLORS_TWO} />
        </div>
        <Accesibility />
      </div>
    </>
  )
}

function Accesibility() {
  const accessibility = [
    {
      title: 'figure / figcaption',
      description:
        'These HTML tags add context to an image or other media, providing a clear description and making the content more accessible to users with visual impairments.',
    },
    {
      title: 'alt attribute',
      description:
        'Descriptive alt text for every image. This text is read by screen readers to convey the content of the image to users who cannot see it.',
    },
    {
      title: 'Keyboard Accessibility',
      description:
        'Ensuring that all interactive elements can be navigated and activated using a keyboard is crucial for users with mobility impairments',
    },
    {
      title: 'Focusable Elements',
      description:
        'All interactive elements are focusable using the keyboard, with a logical tab order and visible focus indicators.',
    },
    {
      title: 'Color Contrast',
      description:
        'To achieve adequate readability, the contrast between text and background colors meet accessibility standards.',
    },
    {
      title: 'Responsive Design',
      description:
        'The layout is responsive, adapting seamlessly to different screen sizes and devices, ensuring accessibility on mobile, tablet, and desktop screens.',
    },
    {
      title: 'Text Resizing',
      description:
        'The design accommodate text resizing, allowing users to adjust the text size without losing content or functionality, essential for users with visual impairments.',
    },
    {
      title: 'ARIA Landmarks',
      description:
        'Using ARIA landmarks and roles to improve accessibility by clearly defining the structure of the page and making interactive components more accessible.',
    },
  ]

  return (
    <>
      <div className="pt-10">
        <h3 className="text-2xl font-bold text-secundary-300">Accessibility</h3>
        <p className="pb-4">
          To ensure an optimal user experience, various vanilla HTML elements
          are used.
        </p>
        <ul className="space-y-4">
          {accessibility.map(({ title, description }) => (
            <>
              <li key={title} className="text-slate-400">
                <code className="pr-1 text-primary-200">{title}:</code>
                {description}
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  )
}
