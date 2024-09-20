import React from 'react'
import CodeBlock from '../CodeBlock'
import jsxToString from 'react-element-to-jsx-string'
import CodeWrapper from '../CodeWrapper'

export default function LoginForm() {
  const componentToJsx = (
    <form className="flex w-80 flex-col gap-3">
      <input
        type="email"
        className="w-full rounded-lg bg-gray-800 p-3 outline-0 placeholder-shown:border-gray-400 focus:placeholder:text-primary"
        placeholder="username"
        required
      />

      <div className="relative flex w-full flex-row">
        <input
          type="password"
          className="w-full rounded-l-lg bg-gray-800 p-3 outline-0 placeholder-shown:border-gray-400 focus:placeholder:text-primary"
          placeholder="password"
          required
          minLength={8}
        />
        <label className="absolute right-0 flex h-full cursor-pointer items-center justify-center rounded-r-md">
          <input
            type="checkbox"
            className="peer h-full w-full cursor-pointer appearance-none rounded-r-lg outline-none focus:placeholder:text-primary"
          />
          <span className="mr-2 rounded-full px-1 text-xl text-gray-400 hover:bg-slate-700 peer-checked:text-primary">
            ＊
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-primary py-3 text-lg text-white"
      >
        Enviar
      </button>
    </form>
  )

  const componentCode = jsxToString(componentToJsx)

  return (
    <>
      {componentToJsx}
      <CodeWrapper>
        <CodeBlock code={componentCode}></CodeBlock>
      </CodeWrapper>
    </>
  )
}
