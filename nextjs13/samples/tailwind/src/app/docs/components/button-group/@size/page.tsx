import { Button, ButtonGroup } from '@mrcarromesa/components'
import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'

export default function Size() {
  return (
    <section className="mt-4">
      <h2 className="group/title inline-block text-3xl" id="sizing">
        Sizing
        <a
          href="#sizing"
          aria-label="Link to this section: Sizing"
          className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
        />
      </h2>
      <p className="mt-2 text-base">
        Instead of applying button sizing classes to every button in a group,
        just add prop size to button group component.
      </p>
      <div className="mt-4 flex flex-col gap-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <ButtonGroup size="large">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup size="normal">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup size="small">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>
      <CodeHighlighter language="html">
        <ButtonGroup size="large">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup size="normal">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup size="small">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </CodeHighlighter>
    </section>
  )
}
