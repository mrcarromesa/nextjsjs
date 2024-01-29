'use client'
import { HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react'
import './style.scss'

import { Check, Copy } from '@phosphor-icons/react'

import hljs from 'highlight.js'

type CodeHighlighterProps = {
  children: ReactNode
  language: string
  className?: HTMLAttributes<HTMLElement>['className']
}
export function CodeHighlighter({
  children,
  language,
  className,
}: CodeHighlighterProps) {
  const codeComponentRef = useRef<HTMLElement | null>(null)
  const [codeCopied, setCodeCopied] = useState(false)

  const templateRef = useRef<HTMLDivElement | null>(null)
  const [code, setCode] = useState('')

  useEffect(() => {
    if (!templateRef.current) {
      return
    }

    const container = templateRef.current
    setCode(
      container.innerHTML.replace(/<!--.*?-->/g, ' ').replace(/>/g, '>\n')
    )

    templateRef.current.remove()
  }, [children])

  useEffect(() => {
    hljs.highlightAll()
  }, [code, language])

  const copyToClipboard = () => {
    if (!codeComponentRef.current || codeCopied) {
      return
    }

    navigator.clipboard
      .writeText(code)
      .then(() => {
        //
      })
      .catch((error) => {
        console.error('Error to copy', error)
      })
      .finally(() => {
        setCodeCopied(true)
        setTimeout(() => {
          setCodeCopied(false)
        }, 1000)
      })
  }

  return (
    <div className={className}>
      <div ref={templateRef} className="hidden" aria-hidden>
        {children}
      </div>
      <div className="left-0 top-0 flex w-full justify-between border-x border-gray-400 px-3 pb-2 pt-2 dark:border-gray-200">
        <span className="flex-1">{language.toUpperCase()}</span>
        <button
          type="button"
          onClick={copyToClipboard}
          className="text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-400"
        >
          {codeCopied ? <Check size={20} /> : <Copy size={20} />}
        </button>
      </div>
      <pre className="whitespace-pre border-x border-y border-gray-400 dark:border-gray-200">
        <code
          ref={codeComponentRef}
          className={`language-${language} max-h-72 overflow-auto text-sm`}
        >
          {code}
        </code>
      </pre>
    </div>
  )
}
