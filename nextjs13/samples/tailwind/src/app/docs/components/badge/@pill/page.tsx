'use client'

import { Badge } from '@/app/components/Badge'
import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'

export default function Pill() {
  return (
    <section className="mt-4">
      <h2 className="group/title inline-block text-3xl" id="pill">
        Pill badges
        <a
          href="#pill"
          aria-label="Link to this section: Pill badges"
          className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
        />
      </h2>
      <p className="mt-2 text-base">
        Use the pill modifier to make badges more rounded
      </p>
      <div className="mt-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <Badge pill>Primary</Badge>
      </div>
      <CodeHighlighter language="html">
        <Badge pill>Primary</Badge>
      </CodeHighlighter>
    </section>
  )
}
