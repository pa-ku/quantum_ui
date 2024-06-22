import { Highlight, themes } from "prism-react-renderer";
import { useState } from "react";
export default function CodeBlock({ code, language }) {
  return (
    <>
      <Highlight
        theme={themes.duotoneDark}
        code={code}
        language={language ? language : "tsx"}
      >
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre
            open
            className="w-full overflow-auto rounded-xl bg-secundary-1000 p-2 md:px-4 text-xs shadow-center-10 shadow-secundary-500 md:text-base"
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </>
  );
}
