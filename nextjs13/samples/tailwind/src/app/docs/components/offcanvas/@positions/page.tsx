'use client'

import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { Fragment, useRef } from 'react'
import { EXAMPLE_OFF_CANVAS } from './constants'
import {
  Button,
  OffCanvas,
  OffCanvasProps,
  OverlayElementProps,
} from '@mrcarromesa/components'

const positions = ['top', 'right', 'bottom', 'left']

export default function Positions() {
  const offCanvasRef = useRef<{ [key: string]: OverlayElementProps }>({})

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
        You can define the position to offcanvas appear in the screen.
      </p>
      <div className="mt-4 flex gap-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        {positions.map((position) => (
          <Fragment key={position}>
            <OffCanvas.Root
              ref={(r) =>
                (offCanvasRef.current[position] = r as OverlayElementProps)
              }
              dismissible
              align={position as OffCanvasProps['align']}
            >
              <OffCanvas.Header>Header</OffCanvas.Header>
              <OffCanvas.Body>Body</OffCanvas.Body>
              <OffCanvas.Footer>Footer</OffCanvas.Footer>
            </OffCanvas.Root>
            <Button
              onClick={() => {
                console.log('offCanvasRef', offCanvasRef.current)
                offCanvasRef.current[`${position}`]?.open()
              }}
            >
              Open OffCanvas {position}
            </Button>
          </Fragment>
        ))}
      </div>
      <CodeHighlighter language="html">
        <div
          dangerouslySetInnerHTML={{
            __html: EXAMPLE_OFF_CANVAS,
          }}
        ></div>
      </CodeHighlighter>
    </section>
  )
}
