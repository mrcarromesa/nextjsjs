'use client'

import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { Button, Progress } from '@mrcarromesa/components'
import Link from 'next/link'

export default function Example() {
  return (
    <section className="mt-4">
      <h2 className="group/title inline-block text-3xl" id="examples">
        Examples
        <a
          href="#examples"
          aria-label="Link to this section: Examples"
          className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
        />
      </h2>
      <p className="mt-2 text-base">
        Progress component use two HTML elements, We don&apos;t use the{' '}
        <Button
          asComponent={Link}
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress"
          passHref
          target="_blank"
          variation="link"
          className="!p-0"
        >
          HTML5 &lt;progress&gt; element
        </Button>
        , ensuring you can stack progress bars, animate them, and place text
        labels over them.
      </p>
      <div className="mt-4 flex gap-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <Progress progress={50} />
      </div>
      <CodeHighlighter language="html">
        <Progress progress={50} />
      </CodeHighlighter>
    </section>
  )
}
