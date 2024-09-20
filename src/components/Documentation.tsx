import CodeBlock from './CodeBlock'
import React from 'react'

export default function Documentation() {
  const TAILWIND_COLORS = `theme: {
        colors: {
            primary: {
            DEFAULT: "var(--primary)",
            100: 'var(--primary-100)',
            200: 'var(--primary-200)',
            300: 'var(--primary-300)',
            400: 'var(--primary-400)',
            500: 'var(--primary-500)',
            600: 'var(--primary-600)',
            700: 'var(--primary-700)',
            800: 'var(--primary-800)',
            900: 'var(--primary-900)',
            1000: 'var(--primary-1000)',
            },
}`

  const CSS_COLORS = `:root{
  --primary: #42a4ff;
  --primary-100: #d1e9ff;
  --primary-200: #add8ff;
  --primary-300: #8ac6ff;
  --primary-400: #66b5ff;
  --primary-500: #42a4ff;
  --primary-600: #1f93ff;
  --primary-700: #0081fa;
  --primary-800: #006fd6;
  --primary-900: #005cb3;
  --primary-1000: #004a8f;
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
            installed. A framework is not required <br /> but you'll need to
            change className to class for CSS properties.
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
          <CodeBlock language={'css'} code={CSS_COLORS} />
        </div>
        <Consistency />
      </div>
    </>
  )
}

function Consistency() {
  return (
    <div className="pt-10">
      <h3 className="text-2xl font-bold text-secundary-300">
        Keep it consistent
      </h3>
      <p className="pb-4">
        Using the Prettier plugin with Tailwind ensures clear and maintainable
        code.
      </p>
      <div className="space-y-10">
        <div className="space-y-2">
          <p>
            <span className="mr-1 rounded-md bg-slate-800 px-2 py-0.5 text-primary-100">
              Install
            </span>
            the prettier extension and the plugin for tailwind
          </p>
          <CodeBlock
            code="npm install -D prettier prettier-plugin-tailwindcss"
            language={'bash'}
          />
        </div>
        <div className="space-y-2">
          <p>
            Create and add to your project a file named
            <span className="mx-1 rounded-xl bg-slate-800 px-2 py-0.5 text-primary-100">
              prettier.
            </span>
            and paste this code inside.
          </p>
          <CodeBlock
            code={`{
  "plugins": ["prettier-plugin-tailwindcss"],
  "semi": false, // dont add semicolons
  "singleQuote": true // dont add single quote
}`}
            language={'js'}
          />
        </div>
      </div>
    </div>
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
