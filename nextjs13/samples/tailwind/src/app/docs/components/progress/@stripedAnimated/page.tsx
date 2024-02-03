'use client'

import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { Progress } from '@mrcarromesa/components'

export default function StripedAnimated() {
  return (
    <section className="mt-4">
      <h2 className="group/title inline-block text-3xl" id="animated">
        Animated
        <a
          href="#animated"
          aria-label="Link to this section: Animated"
          className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
        />
      </h2>
      <p className="mt-2 text-base">
        You can apply animation to stripe over the progress bar.
      </p>
      <div className="mt-4 flex flex-col gap-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <Progress progress={50} striped animated>
          50%
        </Progress>
      </div>
      <CodeHighlighter language="html">
        <Progress progress={50} striped animated>
          50%
        </Progress>
      </CodeHighlighter>
    </section>
  )
}
