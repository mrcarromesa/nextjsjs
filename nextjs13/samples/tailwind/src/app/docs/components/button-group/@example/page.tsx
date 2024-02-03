import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { Button, ButtonGroup } from '@mrcarromesa/components'

export default function Example() {
  return (
    <section className="mt-4">
      <h2 className="group/title inline-block text-3xl" id="basic-example">
        Basic example
        <a
          href="#basic-example"
          aria-label="Link to this section: Basic example"
          className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
        />
      </h2>
      <p className="mt-2 text-base">Wrap a series of buttons.</p>
      <div className="mt-4 flex flex-row gap-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>
      <CodeHighlighter language="html">
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </CodeHighlighter>
    </section>
  )
}
