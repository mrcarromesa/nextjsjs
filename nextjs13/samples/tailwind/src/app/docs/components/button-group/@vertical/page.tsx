import { Button, ButtonGroup } from '@mrcarromesa/components'
import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'

export default function Vertical() {
  return (
    <section className="mt-4">
      <h2 className="group/title inline-block text-3xl" id="vertical">
        Vertical variation
        <a
          href="#vertical"
          aria-label="Link to this section: Vertical variation"
          className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
        />
      </h2>
      <p className="mt-2 text-base">
        Make a set of buttons appear vertically stacked rather than
        horizontally.
      </p>
      <div className="mt-4 flex flex-row gap-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <ButtonGroup vertical>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>
      <CodeHighlighter language="html">
        <ButtonGroup vertical>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </CodeHighlighter>
    </section>
  )
}
