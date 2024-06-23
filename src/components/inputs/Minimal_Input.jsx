import CodeBlock from "../CodeBlock";

export default function MinimalInput() {
  const codeBlock = `<input
  type="text"
  className="rounded-xl border-white bg-gray-800
  px-4 py-2 text-white outline-none 
  placeholder:text-gray-200   
  focus:bg-gray-800"
  placeholder="Input"/>`;
  return (
    <>
      <input
        type="text"
        className="rounded-xl border-white bg-gray-800 px-4 py-2 text-white outline-none placeholder:text-gray-200 focus:bg-gray-800"
        placeholder="Input"
      />
      <CodeBlock code={codeBlock} />
    </>
  );
}
