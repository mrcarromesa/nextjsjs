'use client'

import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { Fragment, useRef } from 'react'
import { HTML_POPOVER } from './constants'
import { Button, Popover, PopoverElement } from '@mrcarromesa/components'

const positions = ['top', 'right', 'bottom', 'left'] as const

export default function Positions() {
  const popoverRef = useRef<{ [key: string]: PopoverElement }>({})
  return (
    <section className="mt-4">
      <h2 className="group/title inline-block text-3xl" id="positions">
        Positions
        <a
          href="#positions"
          aria-label="Link to this section: Positions"
          className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
        />
      </h2>
      <p className="mt-2 text-base">
        There are for position to show position when click on element
      </p>
      <div className="mt-4 flex gap-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        {positions.map((position) => (
          <Fragment key={position}>
            <Popover
              body={position}
              popoverPosition={position}
              title={position}
              ref={(r) => (popoverRef.current[position] = r as PopoverElement)}
            />
            <Button
              onClick={(e: React.MouseEvent) =>
                popoverRef.current[position].open(e)
              }
            >
              {position}
            </Button>
          </Fragment>
        ))}
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
