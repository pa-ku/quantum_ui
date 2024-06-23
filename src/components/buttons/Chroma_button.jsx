
import CodeBlock from "../CodeBlock";

export default function ChromaBtn() {
  const codeBlock = `<button className="animate-chroma rounded-md
  bg-[#327861] p-2 text-xl text-black duration-100"> 
  Chroma Button 
</button>`;

  return (
    <>
      <button className="bg-primary-300 text-background font-bold chroma rounded-md px-4 py-3 text-xl duration-100">
        Chroma Button
      </button>
      <CodeBlock code={codeBlock} />
    </>
  );
}
