import React from "react";
import CodeBlock from "../CodeBlock";
export default function InputSearch() {
  const codeBlock =
  `<div className="flex h-11 w-max">
  <input
  placeholder="Buscar..."
  className="0 
  focus-within:border-secundary-300
  rounded-l-xl border-2 px-4 py-2 
  text-black outline-none duration-200"
  type="text"
  required/>
  <button className="bg-secundary-300 
  hover:bg-secundary-200 
  w-14 rounded-r-xl bg-red-200 p-1">
    <svg
    className="h-full w-full"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#fff"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    <path d="M21 21l-6 -6" />
    </svg>
  </button>
</div>`
  return (
    <>
      <div className="flex h-11 w-max">
        <input
          placeholder="Buscar..."
          className="0 focus-within:border-secundary-300 rounded-l-xl border-2 px-4 py-2 text-black outline-none duration-200"
          type="text"
          required
        />
        <button className="bg-secundary-300 hover:bg-secundary-200 w-14 rounded-r-xl bg-red-200 p-1">
          <svg
            className="h-full w-full"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#fff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
        </button>
      </div>
      <CodeBlock code={codeBlock} />
    </>
  );
}
