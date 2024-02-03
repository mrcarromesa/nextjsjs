'use client'
import { Button } from '@mrcarromesa/components'
import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'

const variants = [
  'primaryOutline',
  'secondaryOutline',
  'successOutline',
  'dangerOutline',
  'warningOutline',
  'infoOutline',
  'lightOutline',
  'darkOutline',
] as const

export default function Outline() {
  return (
    <section className="mt-4">
      <h2 className="group/title inline-block text-3xl" id="outline-buttons">
        Outline buttons
        <a
          href="#outline-buttons"
          aria-label="Link to this section: Outline buttons"
          className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
        />
      </h2>
      <p className="mt-2 text-base">
        To remove background from buttons use outline variants
      </p>
      <div className="mt-4 flex flex-row gap-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        {variants.map((variant) => (
          <Button key={variant} variation={variant}>
            button
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
