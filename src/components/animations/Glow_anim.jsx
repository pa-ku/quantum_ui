import CodeBlock from "../CodeBlock";

export default function Glow_anim() {
  const codeBlock = `.animate-glow{
  animation: glow 3s linear infinite;}

  @keyframes glow {
    50% {
      box-shadow: 0px 0px 20px #ffffff79;
}}`;

  return (
    <>
      <div className="glow h-20 w-20 rounded-xl bg-primary"></div>
      <CodeBlock code={codeBlock} language={"css"} />
    </>
  );
}
