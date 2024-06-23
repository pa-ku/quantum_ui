import CodeBlock from "../CodeBlock";

export default function ActionBtn() {
  const codeBlock = `<button className=" 
  hover:[card-glowing-hover] 
  rounded-md
  bg-primary-500 p-2 text-xl text-white 
  shadow-bottom shadow-primary-800 duration-100 
  active:translate-y-1 
  active:shadow-none">
  Press and win
</button>`;

  return (
    <>
      <div className="space-x-5">
        <button className="hover:[card-glowing-hover] rounded-md bg-primary-500 p-2 text-xl text-white shadow-bottom shadow-primary-800 duration-100 active:translate-y-1 active:shadow-none">
          Push
        </button>
        <button className="hover:[card-glowing-hover] h-20 w-20 rounded-full bg-red-700 p-2 text-xl text-white shadow-bottom shadow-red-900 duration-100 active:translate-y-1 active:shadow-none">
          Push
        </button>
      </div>

      <CodeBlock code={codeBlock} />
    </>
  );
}
