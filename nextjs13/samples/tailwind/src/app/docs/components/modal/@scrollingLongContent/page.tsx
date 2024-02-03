'use client'
import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { useRef } from 'react'
import { EXAMPLE_MODAL_HTML, EXAMPLE2_MODAL_HTML } from './constants'
import { Button, Modal, ModalElement } from '@mrcarromesa/components'

export default function ScrollingLongContent() {
  const modalRef = useRef<ModalElement | null>(null)
  const modalRef2 = useRef<ModalElement | null>(null)
  return (
    <section className="mt-4">
      <h2
        className="group/title inline-block text-3xl"
        id="scrolling-long-content"
      >
        Scrolling long content
        <a
          href="#scrolling-long-content"
          aria-label="Link to this section: Scrolling long content"
          className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
        />
      </h2>
      <p className="mt-2 text-base">
        When modals become too long for the user&apos;s viewport or device, they
        scroll independent of the page itself.
      </p>
      <div className="mt-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <Modal.Root ref={modalRef} showCloseButton dismissible>
          <Modal.Header>Header</Modal.Header>
          <Modal.Body>
            Body
            <div className="h-[1000px] w-1"></div>
            End body
          </Modal.Body>
          <Modal.Footer>
            <div className="flex justify-end gap-2">
              <Button
                onClick={() => modalRef.current?.close()}
                variation="danger"
              >
                Cancel
              </Button>
              <Button onClick={() => modalRef.current?.close()}>Save</Button>
            </div>
          </Modal.Footer>
        </Modal.Root>
        <Button onClick={() => modalRef.current?.open()}>Open Modal</Button>
      </div>
      <CodeHighlighter language="html">
        <div dangerouslySetInnerHTML={{ __html: EXAMPLE_MODAL_HTML }}></div>
      </CodeHighlighter>
      <p className="mt-2 text-base">
        The scroll can be internal into body component
      </p>
      <div className="mt-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <Modal.Root ref={modalRef2} showCloseButton dismissible>
          <Modal.Header>Header</Modal.Header>
          <Modal.Body className="max-h-64 overflow-y-auto">
            Body
            <div className="h-[1000px] w-1"></div>
            End body
          </Modal.Body>
          <Modal.Footer>
            <div className="flex justify-end gap-2">
              <Button
                onClick={() => modalRef2.current?.close()}
                variation="danger"
              >
                Cancel
              </Button>
              <Button onClick={() => modalRef2.current?.close()}>Save</Button>
            </div>
          </Modal.Footer>
        </Modal.Root>
        <Button onClick={() => modalRef2.current?.open()}>Open Modal</Button>
      </div>
      <CodeHighlighter language="html">
        <div dangerouslySetInnerHTML={{ __html: EXAMPLE2_MODAL_HTML }}></div>
      </CodeHighlighter>
    </section>
  )
}
