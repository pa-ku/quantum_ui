import { Highlight, themes } from "prism-react-renderer";
import { useState } from "react";
export default function CodeBlock({ code, language }) {
  const [copy, setCopy] = useState("Copy");
  const [isDisabled, setIsDisabled] = useState(false);

  function handleCopy() {
    if (isDisabled === false) {
      navigator.clipboard.writeText(code);
      setIsDisabled(true); // Deshabilitar el botón
      setCopy("Copied!");
    }
    setTimeout(() => {
      setCopy("Copy");
      setIsDisabled(false); // Habilitar el botón nuevamente
    }, 1000);
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
            className={`${language ? "bg-[var(--code-blue-500)]" : "bg-[var(--code-violet-500)]"} group relative w-full overflow-auto rounded-lg px-5 py-8 text-xs md:text-base`}
          >
            <button
              className={`absolute left-3 top-1 opacity-0 duration-200 hover:text-primary-200 group-hover:opacity-100`}
              onClick={handleCopy}
            >
              {copy}
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
