'use client'

import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { useRef } from 'react'
import { HTML_POPOVER } from './constants'
import { Button, Popover, PopoverElement } from '@mrcarromesa/components'

export default function Example() {
  const popoverRef = useRef<PopoverElement | null>(null)
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
        <Popover
          title="Test"
          body="test"
          popoverPosition="bottom"
          ref={popoverRef}
        />
        <Button
          onClick={(e: React.MouseEvent) => popoverRef.current?.open?.(e)}
        >
          Open
        </Button>
      </div>
      <CodeHighlighter language="html">
        <div
          dangerouslySetInnerHTML={{
            __html: HTML_POPOVER,
          }}
        />
      </CodeHighlighter>
    </section>
  )
}
