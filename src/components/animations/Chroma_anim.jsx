import React from "react";
import { CopyBlock, CodeBlock, dracula, atomOneDark } from "react-code-blocks";

export default function Chroma_anim() {
  const code = `
    async function sayHello (name) {
      console.log('Hello', name);
    }
    `;

  return (
    <>
      <h2>Chroma</h2>
        <CodeBlock text={code} lenguaje="js" theme={dracula} />
        
    </>
  );
}
