'use client'
import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { Alert } from '@mrcarromesa/components'

export default function AdditionalContent() {
  return (
    <section className="mt-4">
      <h2 className="group/title inline-block text-3xl" id="additional-content">
        Additional content
        <a
          href="#additional-content"
          aria-label="Link to this section: Additional content"
          className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
        />
      </h2>
      <p className="mt-2 text-base">
        Alerts can also contain additional HTML elements like headings,
        paragraphs and dividers.
      </p>
      <div className="mt-4 flex flex-col gap-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <Alert>
          <h4 className="text-2xl">Well done!</h4>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr className="my-4  border-gray-400" />
          <p>
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </p>
        </Alert>
      </div>
      <CodeHighlighter language="html">
        <Alert>
          <h4 className="text-2xl">Well done!</h4>

          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>

          <hr className="my-4  border-gray-400" />

          <p>
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </p>
        </Alert>
      </CodeHighlighter>
    </section>
  )
}
