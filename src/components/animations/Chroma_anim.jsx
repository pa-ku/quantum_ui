import React from "react";
import CodeBlock from "../CodeBlock";

export default function Chroma_anim() {
  const codeBlock = `animation: gradient 25s linear infinite;
background-size: 2000%;
background: linear-gradient(
    to left,
    #fde0b6,
    #f8baa3,
    #ef6676,
    #ee4566,
    #ef6676,
    #f8baa3,
    #fde0b6
  );

@keyframes chroma {
    from {
      background-position: 0%;
    }

    to {
      background-position: 1200%;
    }
}`;

  return (
    <>
      <div className="chroma h-20 w-20 rounded-xl bg-primary-300"></div>
      <CodeBlock code={codeBlock} language={"css"} />
    </>
  );
}
