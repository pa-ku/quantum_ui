import CodeBlock from '../CodeBlock'
import React from 'react'

export default function Documentation() {
  const TAILWIND_COLORS = `theme: {
      colors: {
            primary: {
              100 : '#d1e9ff',
              200 : '#add8ff',
              300 : '#8ac6ff',
              400 : '#66b5ff',
              500 : '#42a4ff',
              600 : '#1f93ff',
              700 : '#0081fa',
              800 : '#006fd6',
              900 : '#005cb3',
            },
}`

  return (
    <>
      <div className="flex flex-col flex-wrap gap-10">
        <div className="space-y-3">
          <h2 className="text-start text-4xl font-bold">
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

        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-secundary-300">
            Tailwind Colors
          </h3>
          <p>
            You can use the tailwind colors dynamically, add the following
            properties to the <strong>tailwind.config</strong> file.
          </p>
          <p>
            If you want more custom colors you can visit
            <a
              href="https://tailwind-palete.vercel.app/"
              target="_BLANK"
              className="mx-1 rounded-xl bg-slate-800 px-2 py-0.5 text-secundary-300"
            >
              tailwind Palete
            </a>
          </p>
        <div className="py-5">
          <CodeBlock code={TAILWIND_COLORS} />
        </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-secundary-300">
            Keep it consistent
          </h3>
          <p className="pb-4">
            Using the Prettier plugin with Tailwind ensures clear and
            maintainable code.
          </p>

          <div className="space-y-2">
            <p>
              <strong>Install</strong> the prettier extension and the plugin for
              tailwind
            </p>
            <CodeBlock
              code="npm install -D prettier prettier-plugin-tailwindcss"
              language={'bash'}
            />
          </div>
          <div className="space-y-2">
            <p>
              Add to your project a file named <strong>.prettier</strong>
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
    </>
  )
}
