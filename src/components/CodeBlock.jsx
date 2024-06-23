import { Highlight, themes } from "prism-react-renderer";
export default function CodeBlock({ code, language }) {
  return (
    <>
      <Highlight
        theme={language ? themes.synthwave84 : themes.duotoneDark}
        code={code}
        language={language ? language : "tsx"}
      >
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre
            open
            className={`${language ? "bg-[var(--code-blue-500)] shadow-[var(--code-blue-400)]" : "bg-[var(--code-violet-500)] shadow-[var(--code-violet-400)] "} w-full overflow-auto rounded-xl p-2 text-xs shadow-center-10 md:px-4 md:text-base`}
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
