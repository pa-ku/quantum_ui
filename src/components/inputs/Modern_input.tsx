import CodeBlock from "../CodeBlock";
import React from "react";

export default function Modern_input() {
  const codeBlock = `<div className="relative flex h-max w-max items-center justify-start">
  <input
    type="text"
    className="text-red peer rounded-xl border-[1px] 
    border-transparent bg-gray-800 px-3 py-2 caret-primary
    outline-none focus-visible:border-primary"
    placeholder=" "/>
    
  <p className="pointer-events-none absolute 
    -translate-y-8 px-3 text-slate-300 duration-300 
    peer-placeholder-shown:translate-y-0 
    peer-placeholder-shown:text-slate-400 
    peer-focus:-translate-y-8 
    peer-focus:text-slate-300">
    Email
  </p>
</div>`;
  return (
    <>
      <div className="relative flex h-max w-max items-center justify-start">
        <input
          type="text"
          className="text-red caret-primary focus-visible:border-primary peer rounded-xl border-[1px] border-transparent bg-gray-800 px-3 py-2 outline-none"
          placeholder=" "
          aria-label=""
        />
        <p className="pointer-events-none absolute -translate-y-8 px-3 text-slate-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-slate-400 peer-focus:-translate-y-8 peer-focus:text-slate-300">
          Email
        </p>
      </div>
      <CodeBlock code={codeBlock} />
    </>
  );
}
