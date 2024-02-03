'use client'
import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { Alert } from '@mrcarromesa/components'
import { useState } from 'react'

export default function LiveExample() {
  const [alertsSample, setAlertsSample] = useState<number[]>([])
  return (
    <section className="mt-4">
      <h2 className="group/title inline-block text-3xl" id="live-example">
        Live Example
        <a
          href="#live-example"
          aria-label="Link to this section: Live Example"
          className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
        />
      </h2>
      <p className="mt-2 text-base">
        Click the button below to show an alert (hidden with inline styles to
        start), then dismiss (and destroy) it with the built-in close button.
      </p>
      <div className="mt-4 flex flex-col gap-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        {alertsSample.map((alert) => (
          <Alert
            key={alert}
            dismissible
            onClose={() =>
              setAlertsSample((current) => {
                return current.filter((item) => item !== alert)
              })
            }
          >
            Nice, you triggered this alert message!
          </Alert>
        ))}
        <button
          onClick={() => setAlertsSample((current) => [...current, Date.now()])}
          className="w-fit rounded-md bg-primary-background px-3 py-2 text-left text-primary-color transition-colors ease-in-out dark:bg-primary-dark-background dark:text-primary-dark-color dark:hover:bg-primary-dark-hover-background dark:hover:text-primary-dark-hover-color"
        >
          Show live alert
        </button>
      </div>
      <CodeHighlighter language="html">
        <Alert dismissible onClose={() => void 0}>
          Nice, you triggered this alert message!
        </Alert>
      </CodeHighlighter>
    </section>
  )
}
