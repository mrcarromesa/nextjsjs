'use client'
import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { alerts } from '../../constants'
import { Alert } from '@mrcarromesa/components'

export default function Examples() {
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
        Alerts are available for any length of text, as well as an optional
        close button.
      </p>
      <ul className="mt-4 flex flex-col gap-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        {alerts.map((alert) => (
          <li key={alert}>
            <Alert variation={alert}>A simple {alert}</Alert>
          </li>
        ))}
      </ul>
      <CodeHighlighter language="html">
        {alerts.map((alert) => (
          <Alert key={alert} variation={alert}>
            A simple{alert}
          </Alert>
        ))}
      </CodeHighlighter>
    </section>
  )
}
