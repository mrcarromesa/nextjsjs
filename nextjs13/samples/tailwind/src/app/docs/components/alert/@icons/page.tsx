'use client'
import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { Alert } from '@mrcarromesa/components'
import { CheckCircle, Info, Warning } from '@phosphor-icons/react'

export default function Icons() {
  return (
    <section className="mt-4">
      <h2 className="group/title inline-block text-3xl" id="icons">
        Icons
        <a
          href="#icons"
          aria-label="Link to this section: icons"
          className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
        />
      </h2>
      <p className="mt-2 text-base">
        You can add icons into content from alert
      </p>
      <div className="mt-4 flex flex-col gap-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <Alert>
          <div className="flex items-center">
            <Warning size={20} className="mr-2" />
            <p>An example alert with an icon</p>
          </div>
        </Alert>
      </div>
      <CodeHighlighter language="html">
        <Alert>
          <div className="flex items-center">
            <Warning size={20} className="mr-2" />
            <p>An example alert with an icon</p>
          </div>
        </Alert>
      </CodeHighlighter>
      <p className="mt-4 text-base">More example from alert with icons</p>
      <div className="mt-4 flex flex-col gap-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <Alert>
          <div className="flex items-center">
            <Info size={20} className="mr-2" />
            <p>An example alert with an icon</p>
          </div>
        </Alert>
        <Alert variation="alert-success">
          <div className="flex items-center">
            <CheckCircle size={20} className="mr-2" />
            <p>An example alert with an success icon</p>
          </div>
        </Alert>
        <Alert variation="alert-warning">
          <div className="flex items-center">
            <Warning size={20} className="mr-2" />
            <p>An example alert with an warning icon</p>
          </div>
        </Alert>
        <Alert variation="alert-danger">
          <div className="flex items-center">
            <Warning size={20} className="mr-2" />
            <p>An example alert with an warning icon</p>
          </div>
        </Alert>
      </div>
      <CodeHighlighter language="html">
        <Alert>
          <div className="flex items-center">
            <Info size={20} className="mr-2" />
            <p>An example alert with an icon</p>
          </div>
        </Alert>
        <Alert variation="alert-success">
          <div className="flex items-center">
            <CheckCircle size={20} className="mr-2" />
            <p>An example alert with an success icon</p>
          </div>
        </Alert>
        <Alert variation="alert-warning">
          <div className="flex items-center">
            <Warning size={20} className="mr-2" />
            <p>An example alert with an warning icon</p>
          </div>
        </Alert>
        <Alert variation="alert-danger">
          <div className="flex items-center">
            <Warning size={20} className="mr-2" />
            <p>An example alert with an warning icon</p>
          </div>
        </Alert>
      </CodeHighlighter>
    </section>
  )
}
