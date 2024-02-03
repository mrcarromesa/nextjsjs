'use client'
import { Button } from '@mrcarromesa/components'
import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'

export default function Disabled() {
  return (
    <section className="mt-4">
      <h2 className="group/title inline-block text-3xl" id="disabled-state">
        Disabled state
        <a
          href="#disabled-state"
          aria-label="Link to this section: Disabled state"
          className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
        />
      </h2>
      <p className="mt-2 text-base">
        Make buttons look inactive when add disabled attribute
      </p>
      <div className="mt-4 flex flex-row gap-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <Button disabled>button</Button>
        <Button disabled variation="dangerOutline">
          button
        </Button>
      </div>
      <CodeHighlighter language="html">
        <Button disabled>button</Button>
        <Button disabled variation="dangerOutline">
          button
        </Button>
      </CodeHighlighter>
    </section>
  )
}
