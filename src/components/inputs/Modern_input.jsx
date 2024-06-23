import CodeBlock from "../CodeBlock";

export default function Modern_input() {
  const codeBlock = `<div className="relative flex h-max
   w-max items-center justify-start">
    <input
        type="text"
        className="text-red peer rounded-xl px-3 py-2 
        text-black caret-secundary-800 outline-none 
        placeholder-shown:bg-white"
        placeholder=" "/>

    <p className="pointer-events-none absolute 
        text-white duration-200
        -translate-y-8 px-3 
        peer-placeholder-shown:translate-y-0  
        peer-placeholder-shown:text-black 
        peer-focus:-translate-y-8  
        peer-focus:text-white">
        Email
    </p>
</div>`;
  return (
    <>
      <div className="relative flex h-max w-max items-center justify-start">
        <input
          type="text"
          className="text-red peer rounded-xl px-3 py-2 text-black caret-secundary-800 outline-none placeholder-shown:bg-white"
          placeholder=" "
        />
        <p className="pointer-events-none absolute -translate-y-8 px-3 text-white duration-200 peer-placeholder-shown:translate-y-0  peer-placeholder-shown:text-black peer-focus:-translate-y-8  peer-focus:text-white">
          Email
        </p>
      </div>
      <div className="relative flex h-max w-max items-center justify-start">
        <input
          type="text"
          className="text-red peer rounded-xl px-3 py-2 text-black caret-secundary-800 outline-none placeholder-shown:bg-white"
          placeholder=" "
        />
        <p className="pointer-events-none absolute -translate-y-8 px-3 text-white duration-200 peer-placeholder-shown:translate-y-0  peer-placeholder-shown:text-black peer-focus:-translate-y-8  peer-focus:text-white">
          Password
        </p>
      </div>

      <CodeBlock code={codeBlock} />
    </>
  );
}
