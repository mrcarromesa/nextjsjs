'use client'

import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { Progress } from '@mrcarromesa/components'

const variations = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
] as const

export default function Backgrounds() {
  return (
    <section className="mt-4">
      <h2 className="group/title inline-block text-3xl" id="backgrounds">
        Backgrounds
        <a
          href="#backgrounds"
          aria-label="Link to this section: Backgrounds"
          className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
        />
      </h2>
      <p className="mt-2 text-base">
        Change appearance of individual progress bars.
      </p>
      <div className="mt-4 flex flex-col gap-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        {variations.map((variation) => (
          <Progress key={variation} progress={50} variation={variation}>
            50%
          </Progress>
        ))}
      </div>
      <CodeHighlighter language="html">
        {variations.map((variation) => (
          <Progress key={variation} progress={50} variation={variation}>
            50%
          </Progress>
        ))}
      </CodeHighlighter>
    </section>
  )
}
