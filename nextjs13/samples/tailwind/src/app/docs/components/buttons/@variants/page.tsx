'use client'
import { Button } from '@mrcarromesa/components'
import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'

const variants = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
] as const

export default function Variants() {
  return (
    <section className="mt-4">
      <h2 className="group/title inline-block text-3xl" id="variants">
        Variants
        <a
          href="#variants"
          aria-label="Link to this section: Variants"
          className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
        />
      </h2>
      <p className="mt-2 text-base">
        There are some button variants, each serving its own semantic purpose,
        with a few extras thrown in for more control.
      </p>
      <div className="mt-4 flex flex-row gap-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        {variants.map((variant) => (
          <Button key={variant} variation={variant}>
            {variant}
          </Button>
        ))}
      </div>
      <CodeHighlighter language="html">
        {variants.map((variant) => (
          <Button key={variant} variation={variant}>
            {variant}
          </Button>
        ))}
      </CodeHighlighter>
    </section>
  )
}
