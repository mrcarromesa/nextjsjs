'use client'

import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { Button, Tooltip } from '@mrcarromesa/components'

const positions = ['top', 'right', 'bottom', 'left'] as const

export default function Positions() {
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
        Hover over the text highlight below to see tooltips:
      </p>
      <div className="mt-4 flex items-center justify-center gap-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        {positions.map((position) => (
          <Tooltip text="More text" key={position} position={position}>
            <Button>Tooltip on {position}</Button>
          </Tooltip>
        ))}
      </div>
      <CodeHighlighter language="html">
        {positions.map((position) => (
          <Tooltip text="More text" key={position} position={position}>
            <Button>Tooltip on {position}</Button>
          </Tooltip>
        ))}
      </CodeHighlighter>
    </section>
  )
}
