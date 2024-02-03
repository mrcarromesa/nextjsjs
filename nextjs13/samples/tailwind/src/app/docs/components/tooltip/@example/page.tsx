'use client'
import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { Tooltip } from '@mrcarromesa/components'

export default function Example() {
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
        Hover over the text highlight below to see tooltips:
      </p>
      <div className="mt-4 flex items-center justify-center gap-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat{' '}
          <Tooltip text="More text">
            <span className="text-blue-300">exercitationem</span>
          </Tooltip>{' '}
          numquam cupiditate aspernatur sunt nemo sequi ducimus qui. Dicta
          suscipit cumque iure nam eligendi ad dignissimos vero asperiores
          reiciendis quos.
        </p>
      </div>
      <CodeHighlighter language="html">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat{' '}
          <Tooltip text="More text">
            <span className="text-blue-300">exercitationem</span>
          </Tooltip>{' '}
          numquam cupiditate aspernatur sunt nemo sequi ducimus qui. Dicta
          suscipit cumque iure nam eligendi ad dignissimos vero asperiores
          reiciendis quos.
        </p>
      </CodeHighlighter>
    </section>
  )
}
