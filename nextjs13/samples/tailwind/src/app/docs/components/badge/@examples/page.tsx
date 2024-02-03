'use client'
import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { Badge } from '@mrcarromesa/components'

export default function Examples() {
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
        Badges scale to match the size of the immediate parent element
      </p>
      <div className="mt-4 flex flex-col gap-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <h1>
          Example <Badge>New</Badge>
        </h1>
        <h2>
          Example <Badge>New</Badge>
        </h2>
        <h3>
          Example <Badge>New</Badge>
        </h3>
      </div>
      <CodeHighlighter language="html">
        <h1>
          Example <Badge>New</Badge>
        </h1>
        <h2>
          Example <Badge>New</Badge>
        </h2>
        <h3>
          Example <Badge>New</Badge>
        </h3>
      </CodeHighlighter>
    </section>
  )
}
