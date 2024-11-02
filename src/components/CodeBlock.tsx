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
            } group relative w-full overflow-auto rounded-lg px-5 pb-8 pt-12 text-xs md:text-base`}
          >
            <div className="absolute left-0 top-0 flex items-center justify-center">
              <p className="p-2 text-slate-500">
                {language === undefined ? 'html' : language}
              </p>
              <button
                className={`flex opacity-0 duration-200 hover:text-primary-200 items-center justify-center group-hover:opacity-100`}
                onClick={handleCopy}
              >
                {isDisabled ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="20"
                    height="20"
                    stroke-Width="1"
                  >
                    {' '}
                    <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>{' '}
                    <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>{' '}
                    <path d="M9 14l2 2l4 -4"></path>{' '}
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="20"
                    height="20"
                    stroke-Width="1"
                  >
                    <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>{' '}
                    <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
                  </svg>
                )}
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
