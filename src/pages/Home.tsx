import React from 'react'
import ComponentTitle from '../components/ComponentTitle'
import CodeBlock from '../components/CodeBlock'
export default function Home() {
  const tailwindColorCode = `theme: {
    extend: {
  colors: {
        primary: {
          DEFAULT: 'var(--primary)',
        },
        secundary: {
          DEFAULT: 'var(--secundary)',
        },},},}`
  const cssCode = `:root{
  --primary: #20ac84;
  --secundary: #cd61ff;
}`

  const tailwindConfigTwo = ` colors: {
        primary: {
          DEFAULT: "var(--primary)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
        },
   }`

  const cssCodePartTwo = `:root{
  --primary: #20ac84;
  --primary-100: #20ac84;
  --primary-200: #20ac84;
  --primary-300: #20ac84;
}`

  return (
    <>
      <main className="relative flex w-full flex-col items-center justify-center gap-24 overflow-hidden px-4 lg:overflow-visible xl:w-[42em]">
        <Banner />
        <div className="absolute top-0 flex w-full items-center justify-center opacity-10">
          <div className="abosolute animate-left size-52 rounded-full bg-primary-400 blur-3xl"></div>
          <div className="abosolute animate-right right-0 size-52 rounded-full bg-secundary-700 blur-3xl"></div>
        </div>
        <BentoBox />
        <div>
          <div className="pb-10">
            <h2 className="pb-2 text-center text-4xl font-bold">
              Being Quantum is Easy
            </h2>
            <p className="text-slate-400">
              To get started, you should have
              <a
                target="_blank"
                href="https://tailwindcss.com/docs/guides/create-react-app"
                className="mx-1 text-primary-100 hover:text-white"
              >
                Tailwind
              </a>
              installed. A<span className="text-secundary-300">framework</span>{' '}
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
            <CodeBlock code={tailwindColorCode} />
          </div>

          <div className="py-5">
            <p className="pt-2">
              In the global CSS file, create variables for the Primary and
              Secondary colors.
            </p>
            <CodeBlock language="css" code={cssCode} />
          </div>

          <div>
            <p>
              It's possible to add gradients or intermediate values for these
              colors.
            </p>
            <CodeBlock code={tailwindConfigTwo} />
            <CodeBlock language="css" code={cssCodePartTwo} />
          </div>

          <div className="pt-10">
            <h3 className="text-2xl font-bold text-secundary-300">
              Accessibility
            </h3>
            <p>
              To ensure an optimal user experience, various vanilla HTML
              elements are used.
            </p>
            <ul className="space-y-4 [&_code]:text-primary-300">
              <li></li>
              <li>
                <code>figure</code> / <code>figcaption</code>: These HTML tags
                add context to an image or other media, providing a clear
                description and making the content more accessible to users with
                visual impairments.
              </li>

              <li>
                <code>alt attribute</code>: It's essential to include a
                descriptive alt text for every image. This text is read by
                screen readers to convey the content of the image to users who
                cannot see it.
              </li>
              <li>
                <code>Keyboard Accessibility</code>: Ensuring that all
                interactive elements can be navigated and activated using a
                keyboard is crucial for users with mobility impairments or those
                who prefer using a keyboard over a mouse.
              </li>
              <li>
                <code>Focusable Elements</code>: All interactive elements should
                be focusable using the keyboard, with a logical tab order and
                visible focus indicators, ensuring ease of navigation for
                keyboard users.
              </li>
              <li>
                <code>Color Contrast</code>: To achieve adequate readability,
                the contrast between text and background colors should meet
                accessibility standards, ensuring that all users, including
                those with visual impairments, can easily read the content.
              </li>
              <li>
                <code>Responsive Design</code> : The layout should be
                responsive, adapting seamlessly to different screen sizes and
                devices, ensuring accessibility on mobile, tablet, and desktop
                screens.
              </li>
              <li>
                <code>Text Resizing</code>: The design should accommodate text
                resizing, allowing users to adjust the text size without losing
                content or functionality, essential for users with visual
                impairments.
              </li>
              <li>
                <code>ARIA Landmarks</code>: Use ARIA landmarks and roles to
                improve accessibility by clearly defining the structure of the
                page and making interactive components like menus, modals, and
                alerts more accessible.
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}

function Banner() {
  return (
    <>
      <div className="flex h-40 w-full flex-col items-center justify-center">
        <h1 className="flex h-full w-full items-center justify-center bg-gradient-to-t from-gray-300 to-white bg-clip-text text-center text-6xl font-semibold tracking-tight text-transparent md:text-7xl">
          Design made real
        </h1>
        <p className="text-2xl">
          Copy, paste and <span className="text-primary-200">use it</span>
        </p>
      </div>
    </>
  )
}

function BentoBox() {
  const tailwindLogo = (
    <svg
      className="h-full w-full md:h-20 md:w-20"
      viewBox="0 0 24 24"
      strokeWidth="0.5"
      stroke="currentColor"
      fill="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" />
    </svg>
  )

  const accesLogo = (
    <svg
      width="70"
      height="70"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#fff"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.051 6.844a1 1 0 0 0 -1.152 -.663l-.113 .03l-2.684 .895l-2.684 -.895l-.113 -.03a1 1 0 0 0 -.628 1.884l.109 .044l2.316 .771v.976l-1.832 2.75l-.06 .1a1 1 0 0 0 .237 1.21l.1 .076l.101 .06a1 1 0 0 0 1.21 -.237l.076 -.1l1.168 -1.752l1.168 1.752l.07 .093a1 1 0 0 0 1.653 -1.102l-.059 -.1l-1.832 -2.75v-.977l2.316 -.771l.109 -.044a1 1 0 0 0 .524 -1.221zm-3.949 -4.184a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3z"
        stroke-width="0"
        fill="currentColor"
      />
    </svg>
  )

  const boltLogo = (
    <svg
      className="h-full w-full md:p-9"
      viewBox="0 0 24 24"
      strokeWidth="0.5"
      stroke="#ffffff"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
    </svg>
  )

  const mobileLogo = (
    <svg
      className="h-10 w-10 md:h-10 md:w-10"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#ffffff"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11.5 21h-3.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" />
      <path d="M20 21l2 -2l-2 -2" />
      <path d="M17 17l-2 2l2 2" />
      <path d="M11 4h2" />
      <path d="M12 17v.01" />
    </svg>
  )

  return (
    <>
      <div className="grid shadow-center shadow-slate-800">
        <div className="box col-span-2">
          <div className="content h-full p-6 text-center text-xl md:text-4xl">
            {mobileLogo}
            <p>Responsive</p>
          </div>
        </div>
        <div className="box relative row-span-2 h-full w-full">
          <div className="content h-full w-full">
            {boltLogo}
            <p className="absolute bottom-2 left-0 text-center [writing-mode:vertical-lr] md:text-3xl">
              Fast animations
            </p>
          </div>
        </div>
        <div className="box">
          <div className="content relative h-full min-w-full p-5 text-2xl">
            {tailwindLogo}
            <p className="absolute bottom-2">Tailwind</p>
          </div>
        </div>

        <div className="box">
          <div className="content relative h-full w-full p-7 text-2xl">
            {accesLogo}
            <p className="absolute bottom-2">Accesible</p>
          </div>
        </div>

        <div className="box col-span-3">
          <div className="content h-20 p-10 text-3xl">Pure Css Components</div>
        </div>

        <span className="chroma"></span>
      </div>
    </>
  )
}
