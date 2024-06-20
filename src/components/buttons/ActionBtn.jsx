import CodeBlock from "../CodeBlock";

export default function ActionBtn() {
  const codeBlock = `<button className=" 
  hover:[card-glowing-hover] 
  rounded-md
  bg-primary-500 p-2 text-xl text-black text-white 
  shadow-bottom shadow-primary-800 duration-100 
  active:translate-y-1 
  active:shadow-none">
  Press and win
</button>`;

  return (
    <>
      <button className="hover:[card-glowing-hover] rounded-md bg-primary-500 p-2 text-xl text-black text-white shadow-bottom shadow-primary-800 duration-100 active:translate-y-1 active:shadow-none">
        Press and win
      </button>
      <CodeBlock code={codeBlock} />
    </>
  );
}
