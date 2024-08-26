import CodeBlock from "../CodeBlock";
import React from "react";

export default function MinimalInput() {
  const codeBlock = `<input
    type="text"
    className="rounded-xl border-[1px] border-transparent 
      bg-gray-800 px-4 py-2 
      text-white outline-none 
      placeholder:text-gray-200 
      focus:bg-gray-800 
      focus-visible:border-primary"
    placeholder="Input"
  />`;
  return (
    <>
      <input
        type="text"
        className="rounded-xl border-[1px] border-transparent bg-gray-800 px-4 py-2 text-white outline-none placeholder:text-gray-200 focus:bg-gray-800 focus-visible:border-primary"
        placeholder="Input"
      />
      <CodeBlock code={codeBlock} />
    </>
  );
}
