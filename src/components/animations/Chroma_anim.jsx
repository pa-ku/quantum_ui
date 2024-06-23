import CodeBlock from "../CodeBlock";

export default function Chroma_anim() {
  const codeBlock = `.animate-chroma{
  animation: gradient 30s linear infinite;
  background-size: 2000%;
  background: linear-gradient(
    to left,#f8baa3,#ef6676,
    #ee4566,#ef6676,#f8baa3,)}

@keyframes chroma {
    to {
      background-position: 1200%;
    }
}`;

  return (
    <>
      <div className="animate-chroma h-20 w-20 rounded-xl bg-primary-300"></div>
      <CodeBlock code={codeBlock} language={"css"} />
    </>
  );
}
