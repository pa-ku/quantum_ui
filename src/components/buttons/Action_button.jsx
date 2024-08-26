import CodeBlock from "../CodeBlock";

export default function ActionBtn() {
  const codeBlock = `<button className=" 
  hover:[card-glowing-hover] 
  rounded-md
  bg-primary p-2 text-xl text-white 
  shadow-bottom shadow-primary duration-100 
  active:translate-y-1 
  active:shadow-none">
  Press and win
</button>`;

  return (
    <>
      <div className="space-x-5">
        <button className="hover:[card-glowing-hover] bg-primary shadow-primary shadow-opa rounded-md px-5 py-3 text-xl text-white shadow-bottom duration-100 active:translate-y-1 active:shadow-none">
          Push
        </button>
      </div>

      <CodeBlock code={codeBlock} />
    </>
  );
}
