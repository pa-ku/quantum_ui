import CodeBlock from "../CodeBlock";
export default function InputSearch() {
  const codeBlock = ` <div className="flex h-11 w-max">
  <input
    placeholder="Search..."
    className="0 peer rounded-l-xl border-[1px] 
    border-transparent bg-gray-800 px-3 
    py-2 outline-none duration-200 
    focus-within:border-primary"
    type="text"
    required />

  <button className="w-12 rounded-r-xl border-[1px]
     border-transparent bg-gray-900 
     text-primary outline-none 
     focus-visible:border-primary 
     peer-placeholder-shown:text-gray-300">
      <p className="-rotate-45 text-4xl">
      ⚲
      </p>
  </button>
</div>`;
  return (
    <>
      <div className="flex h-11 w-max">
        <input
          placeholder="Search..."
          className="0 focus-within:border-primary peer rounded-l-xl border-[1px] border-transparent bg-gray-800 px-3 py-2 outline-none duration-200"
          type="text"
          required
        />
        <button className="text-primary focus-visible:border-primary w-12 rounded-r-xl border-[1px] border-transparent bg-gray-900 outline-none peer-placeholder-shown:text-gray-300">
          <p className="-rotate-45 text-4xl">⚲</p>
        </button>
      </div>
      <CodeBlock code={codeBlock} />
    </>
  );
}
