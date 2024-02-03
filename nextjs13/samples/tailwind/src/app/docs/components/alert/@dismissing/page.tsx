'use client'
import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { Alert } from '@mrcarromesa/components'
import { Warning } from '@phosphor-icons/react'
import { useState } from 'react'

export default function Dismissing() {
  const [alertDismissingIsOpen, setAlertDismissingIsOpen] = useState(true)
  return (
    <section className="mt-4">
      <h2 className="group/title inline-block text-3xl" id="dismissing">
        Dismissing
        <a
          href="#dismissing"
          aria-label="Link to this section: dismissing"
          className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
        />
      </h2>
      <p className="mt-2 text-base">Dismissing with animation</p>
      <div className="mt-4 flex flex-col gap-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        {alertDismissingIsOpen ? (
          <Alert
            dismissible
            onClose={() => setAlertDismissingIsOpen(false)}
            animated
          >
            Alert example
          </Alert>
        ) : (
          <button
            onClick={() => setAlertDismissingIsOpen(true)}
            className="w-fit rounded-md bg-primary-background px-3 py-2 text-left text-primary-color transition-colors ease-in-out dark:bg-primary-dark-background dark:text-primary-dark-color dark:hover:bg-primary-dark-hover-background dark:hover:text-primary-dark-hover-color"
          >
            Show live alert
          </button>
        )}
      </div>
      <CodeHighlighter language="html">
        <Alert
          dismissible
          onClose={() => setAlertDismissingIsOpen(false)}
          animated
        >
          <Warning size={20} className="mr-2" />
          <p>An example alert with an icon</p>
        </Alert>
      </CodeHighlighter>
    </section>
  )
}
