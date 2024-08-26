import CodeBlock from "../CodeBlock";
import React from "react";
export default function Glow_anim() {
  const codeBlock = `.animate-glow{
  animation: animate-glow 3s linear infinite;}

  @keyframes animate-glow {
    50% {
      box-shadow: 0px 0px 20px var(--primary);
}}`;

  return (
    <>
      <div className="h-20 w-20 animate-glow rounded-xl bg-primary"></div>
      <CodeBlock code={codeBlock} language={"css"} />
    </>
  );
}
