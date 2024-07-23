import { Highlight, themes } from "prism-react-renderer";
export default function CodeBlock({ code, language }) {
  function handleCopy() {
    navigator.clipboard
      .writeText(code)
  }

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
            className={`${language ? "bg-[var(--code-blue-500)]" : "shadow-[var bg-[var(--code-violet-500)]"} group relative w-full overflow-auto rounded-lg px-5 py-8 text-xs md:text-base`}
          >
            <button
              className="absolute left-3 top-1 opacity-0 duration-200 hover:text-primary-200 group-hover:opacity-100"
              onClick={handleCopy}
            >
              Copy
            </button>

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
