'use client'
import { Button } from '@mrcarromesa/components'
import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'

export default function Size() {
  return (
    <>
      <section className="mt-4">
        <h2 className="group/title inline-block text-3xl" id="size">
          Size
          <a
            href="#size"
            aria-label="Link to this section: Size"
            className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
          />
        </h2>
        <p className="mt-2 text-base">Add size prop, for additional sizes.</p>
        <div className="mt-4 flex flex-row gap-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
          <Button size="large">Large button</Button>
          <Button variation="secondary" size="large">
            Large button
          </Button>
        </div>
        <CodeHighlighter language="html">
          <Button size="large">Large button</Button>
          <Button variation="secondary" size="large">
            Large button
          </Button>
        </CodeHighlighter>
      </section>
      <section className="mt-4">
        <div className="mt-4 flex flex-row gap-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
          <Button size="small">Small button</Button>
          <Button variation="secondary" size="small">
            Small button
          </Button>
        </div>
        <CodeHighlighter language="html">
          <Button size="small">Small button</Button>
          <Button variation="secondary" size="small">
            Small button
          </Button>
        </CodeHighlighter>
      </section>
    </>
  )
}
