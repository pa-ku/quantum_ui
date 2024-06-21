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
            className="w-full overflow-auto rounded-xl bg-secundary-1000 px-4 py-2 shadow-center-10 shadow-secundary-500"
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
