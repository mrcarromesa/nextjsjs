'use client'

import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { useRef } from 'react'
import { EXAMPLE_OFF_CANVAS } from './constants'
import { Button, OffCanvas, OverlayElementProps } from '@mrcarromesa/components'

export default function Example() {
  const offCanvasRef = useRef<OverlayElementProps | null>(null)

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
        Click on the buttons below to show and hide an offcanvas element with
        JavaScript.
      </p>
      <div className="mt-4 flex gap-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <OffCanvas.Root ref={offCanvasRef} dismissible>
          <OffCanvas.Header>Header</OffCanvas.Header>
          <OffCanvas.Body>Body</OffCanvas.Body>
          <OffCanvas.Footer>Footer</OffCanvas.Footer>
        </OffCanvas.Root>
        <Button onClick={() => offCanvasRef.current?.open()}>
          Open OffCanvas
        </Button>
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
