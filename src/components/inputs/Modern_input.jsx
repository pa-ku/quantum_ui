import CodeBlock from "../CodeBlock";

export default function Modern_input() {
  const codeBlock = `<div className="relative flex h-max w-max items-center justify-start">
  <input
    type="text"
    className="text-red peer rounded-xl border-[1px] 
    border-transparent bg-gray-800 px-3 py-2 caret-[#24c295]
    outline-none focus-visible:border-[#24c295]"
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
          className="text-red peer rounded-xl border-[1px] border-transparent bg-gray-800 px-3 py-2 caret-[#24c295] outline-none focus-visible:border-[#24c295]"
          placeholder=" "
        />
        <p className="pointer-events-none absolute -translate-y-8 px-3 text-slate-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-slate-400 peer-focus:-translate-y-8 peer-focus:text-slate-300">
          Email
        </p>
      </div>

      <div className="relative flex h-max w-max items-center justify-start">
        <input
          type="password"
          className="text-red peer rounded-xl border-[1px] border-transparent bg-gray-800 px-3 py-2 caret-[#24c295] outline-none focus-visible:border-[#24c295]"
          placeholder=" "
        />
        <p className="pointer-events-none absolute -translate-y-8 px-3 text-slate-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-slate-400 peer-focus:-translate-y-8 peer-focus:text-slate-300">
          Password
        </p>
      </div>

      <CodeBlock code={codeBlock} />
    </>
  );
}
