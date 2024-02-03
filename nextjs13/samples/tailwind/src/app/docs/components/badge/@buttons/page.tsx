'use client'
import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { Badge, Button } from '@mrcarromesa/components'

export default function Buttons() {
  return (
    <>
      <section className="mt-4">
        <h2 className="group/title inline-block text-3xl" id="buttons">
          Buttons
          <a
            href="#buttons"
            aria-label="Link to this section: Buttons"
            className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
          />
        </h2>
        <p className="mt-2 text-base">
          Badges can be used as part of links or buttons to provide a counter.
        </p>
        <div className="mt-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
          <Button>
            Example <Badge variation="danger">4</Badge>
          </Button>
        </div>
        <CodeHighlighter language="html">
          <Button>
            Example <Badge>New</Badge>
          </Button>
        </CodeHighlighter>
      </section>
      <section className="mt-4">
        <h2
          className="group/title inline-block text-3xl"
          id="positioned-buttons"
        >
          Positioned buttons
          <a
            href="#positioned-buttons"
            aria-label="Link to this section: Positioned buttons"
            className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
          />
        </h2>
        <p className="mt-2 text-base">
          With some more from css you can be add a badge at corner from the
          button
        </p>
        <div className="mt-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
          <Button className="relative">
            Example{' '}
            <Badge
              variation="danger"
              className="!absolute !top-[-10px] right-[-10px] !rounded-xl !px-2 !py-1 text-xs font-bold"
            >
              +99
            </Badge>
          </Button>
        </div>
        <CodeHighlighter language="html">
          <Button className="relative">
            Example{' '}
            <Badge
              variation="danger"
              className="!absolute !top-[-10px] right-[-10px] !rounded-xl !px-2 !py-1 text-xs font-bold"
            >
              +99
            </Badge>
          </Button>
        </CodeHighlighter>
      </section>
    </>
  )
}
