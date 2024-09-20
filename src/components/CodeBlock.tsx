import { Highlight, themes } from 'prism-react-renderer'
import { useState } from 'react'
import React from 'react'

type CodeTypes = {
  code: string
  language?: string
}

export default function CodeBlock({ code, language }: CodeTypes) {
  const [copy, setCopy] = useState('Copy')
  const [isDisabled, setIsDisabled] = useState(false)

  function handleCopy() {
    if (isDisabled === false) {
      navigator.clipboard.writeText(code)
      setIsDisabled(true) // Deshabilitar el botón
      setCopy('Copied!')
    }
    setTimeout(() => {
      setCopy('Copy')
      setIsDisabled(false) // Habilitar el botón nuevamente
    }, 1000)
  }
  return (
    <>
      <Highlight
        theme={language ? themes.synthwave84 : themes.duotoneDark}
        code={code}
        language={language === undefined ? 'tsx' : language}
      >
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre
            className={` ${
              (language == 'css' && 'bg-[var(--code-blue-500)]') ||
              (language == undefined && 'bg-[var(--code-violet-500)]') ||
              (language == 'bash' && 'bg-gray-800') ||
              (language == 'js' && 'bg-gray-800') ||
              (language == 'jsx' && 'bg-[var(--code-blue-500)]')
            } group relative w-full overflow-auto rounded-lg px-5 py-8 text-xs md:text-base`}
          >
            <div className="absolute left-0 top-0 flex items-center justify-center">
              <p className="p-2 text-slate-500">
                {language === undefined ? 'html' : language}
              </p>
              <button
                className={`flex opacity-0 duration-200 hover:text-primary-200 group-hover:opacity-100`}
                onClick={handleCopy}
              >
                {copy}
              </button>
            </div>

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
  )
}
