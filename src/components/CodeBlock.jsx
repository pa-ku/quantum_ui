import { Highlight, themes } from "prism-react-renderer";
import { useState } from "react";
export default function CodeBlock({ code }) {
  return (
    <>
      <Highlight theme={themes.oneDark} code={code} language="tsx">
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre
            open
            className="w-[35em] overflow-auto rounded-xl bg-primary-950 px-4 py-2"
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
