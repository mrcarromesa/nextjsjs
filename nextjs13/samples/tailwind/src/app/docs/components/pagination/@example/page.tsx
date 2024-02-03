'use client'

import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { Pagination } from '@mrcarromesa/components'

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
        This element is like the button-group component
      </p>
      <div className="mt-4 flex gap-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <Pagination
          currentPage={4}
          onPageChange={() => void 0}
          registersPerPage={20}
          totalCountOfItems={1000}
        />
      </div>
      <CodeHighlighter language="html">
        <Pagination
          currentPage={4}
          onPageChange={() => void 0}
          registersPerPage={2}
          totalCountOfItems={100}
        />
      </CodeHighlighter>
    </section>
  )
}
