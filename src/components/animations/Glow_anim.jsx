import CodeBlock from "../CodeBlock";

export default function Glow_anim() {
  const codeBlock = `animation: glow 3s linear infinite;

  @keyframes glow {
    0% {
      box-shadow: 0px 0px 20px #ffffff00;
    }
    50% {
      box-shadow: 0px 0px 20px #ffffff79;
    }
    100% {
      box-shadow: 0px 0px 20px #ffffff00;
    }
}`;

  return (
    <>
      <div className="glow h-20 w-20 rounded-xl bg-primary-300"></div>
      <CodeBlock code={codeBlock} language={"css"} />
    </>
  );
}
