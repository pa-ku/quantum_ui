import CodeBlock from '../CodeBlock'
import React from 'react'

export default function Heart_Checkbox() {
  const codeBlock = `<label
        htmlFor="favorite"
        className="relative m-0 flex h-10 w-10 cursor-pointer items-center justify-center stroke-primary p-0"
      >
        <input
          id="favorite"
          className="peer absolute appearance-none opacity-0"
          type="checkbox"
        />
        <svg
          className="h-full w-full text-transparent duration-200 peer-checked:text-primary"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          fill="currentColor"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
</label>`
  return (
    <>
      <label
        htmlFor="favorite"
        className="relative m-0 flex h-10 w-10 cursor-pointer items-center justify-center stroke-primary p-0"
      >
        <input
          id="favorite"
          className="peer absolute appearance-none opacity-0"
          type="checkbox"
        />
        <svg
          className="h-full w-full text-transparent duration-200 peer-checked:text-primary"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          fill="currentColor"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
      </label>
      <CodeBlock code={codeBlock} />
    </>
  )
}
