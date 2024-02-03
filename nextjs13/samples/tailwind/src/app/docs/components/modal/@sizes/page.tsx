'use client'
import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { Fragment, useRef } from 'react'
import { EXAMPLE_MODAL_HTML } from './constants'
import { Button, Modal, ModalElement } from '@mrcarromesa/components'

export default function Sizes() {
  const modalRefFullScreen = useRef<ModalElement | null>(null)
  const modalRefExtraSmall = useRef<ModalElement | null>(null)
  const modalRefSmall = useRef<ModalElement | null>(null)
  const modalRefMedium = useRef<ModalElement | null>(null)
  const modalRefLarge = useRef<ModalElement | null>(null)
  const modalRefExtraLarge = useRef<ModalElement | null>(null)
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
      <p className="mt-2 text-base">
        The modal included, modal header, modal body, and modal footer.
      </p>
      <div className="mt-4 flex gap-2 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        {[
          { ref: modalRefExtraSmall, name: 'ExtraSmall', size: 'extra-small' },
          { ref: modalRefSmall, name: 'Small', size: 'small' },
          { ref: modalRefMedium, name: 'Medium', size: 'medium' },
          { ref: modalRefLarge, name: 'Large', size: 'large' },
          { ref: modalRefExtraLarge, name: 'ExtraLarge', size: 'extra-large' },
          { ref: modalRefFullScreen, name: 'FullScreen', size: 'fullscreen' },
        ].map((item) => (
          <Fragment key={item.name}>
            <Modal.Root
              ref={item.ref}
              showCloseButton
              dismissible
              size={item.size as never}
            >
              <Modal.Header>Header</Modal.Header>
              <Modal.Body>Body</Modal.Body>
              <Modal.Footer>
                <div className="flex justify-end gap-2">
                  <Button
                    onClick={() => item.ref.current?.close()}
                    variation="danger"
                  >
                    Cancel
                  </Button>
                  <Button onClick={() => item.ref.current?.close()}>
                    Save
                  </Button>
                </div>
              </Modal.Footer>
            </Modal.Root>
            <Button onClick={() => item.ref.current?.open()}>
              {item.name}
            </Button>
          </Fragment>
        ))}
      </div>
      <CodeHighlighter language="html">
        <div dangerouslySetInnerHTML={{ __html: EXAMPLE_MODAL_HTML }}></div>
      </CodeHighlighter>
    </section>
  )
}
