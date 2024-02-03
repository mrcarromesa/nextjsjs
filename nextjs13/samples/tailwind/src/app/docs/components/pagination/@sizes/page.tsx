'use client'

import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { Pagination } from '@mrcarromesa/components'

export default function Example() {
  return (
    <section className="mt-4">
      <h2 className="group/title inline-block text-3xl" id="sizes">
        Sizes
        <a
          href="#sizes"
          aria-label="Link to this section: Sizes"
          className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
        />
      </h2>
      <p className="mt-2 text-base">Fancy larger or smaller pagination?</p>
      <div className="mt-4 flex gap-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <Pagination
          currentPage={4}
          size="large"
          onPageChange={() => void 0}
          registersPerPage={20}
          totalCountOfItems={1000}
        />
      </div>
      <CodeHighlighter language="html">
        <Pagination
          currentPage={4}
          size="large"
          onPageChange={() => void 0}
          registersPerPage={20}
          totalCountOfItems={1000}
        />
      </CodeHighlighter>
      <div className="mt-4 flex gap-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <Pagination
          currentPage={4}
          size="small"
          onPageChange={() => void 0}
          registersPerPage={20}
          totalCountOfItems={1000}
        />
      </div>
      <CodeHighlighter language="html">
        <Pagination
          currentPage={4}
          size="small"
          onPageChange={() => void 0}
          registersPerPage={20}
          totalCountOfItems={1000}
        />
      </CodeHighlighter>
    </section>
  )
}
