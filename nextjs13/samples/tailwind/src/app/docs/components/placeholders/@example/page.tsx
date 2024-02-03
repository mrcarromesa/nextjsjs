import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { Button, Card, Placeholder } from '@mrcarromesa/components'

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
        In the example below, we take a typical card component and recreate it
        with placeholders applied to create a &quot;loading card&quot;
      </p>
      <div className="mt-4 flex gap-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <Card.Root>
          <Card.Header>
            <div className="h-32 w-full rounded-t-sm bg-green-600" />
          </Card.Header>
          <Card.Body>
            <h2>Card title</h2>
            <p className="w-48">
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content
            </p>
          </Card.Body>
          <Card.Footer>
            <div className="p-3">
              <Button className="w-full">Go somewhere</Button>
            </div>
          </Card.Footer>
        </Card.Root>
        <Card.Root className="max-w-xs">
          <Card.Header>
            <div className="h-32 w-full rounded-t-sm bg-gray-400" />
          </Card.Header>
          <Card.Body>
            <h2>
              <Placeholder />
            </h2>
            <p className="w-48">
              <Placeholder className="!w-2/5" />
              <Placeholder className="!w-3/6" />
              <Placeholder className="!w-3/6" />
              <Placeholder className="!w-2/5" />
              <Placeholder className="!w-2/5" />
              <Placeholder className="!w-3/6" />
              <Placeholder className="!w-3/6" />
            </p>
          </Card.Body>
          <Card.Footer>
            <div className="p-3">
              <Button className="w-full">
                <Placeholder />
              </Button>
            </div>
          </Card.Footer>
        </Card.Root>
      </div>
      <CodeHighlighter language="html">
        <Card.Root>
          <Card.Header>
            <div className="h-32 w-full rounded-t-sm bg-green-600" />
          </Card.Header>
          <Card.Body>
            <h2>Card title</h2>
            <p className="w-48">
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content
            </p>
          </Card.Body>
          <Card.Footer>
            <div className="p-3">
              <Button className="w-full">Go somewhere</Button>
            </div>
          </Card.Footer>
        </Card.Root>
        <Card.Root className="max-w-xs">
          <Card.Header>
            <div className="h-32 w-full rounded-t-sm bg-gray-400" />
          </Card.Header>
          <Card.Body>
            <h2>
              <Placeholder />
            </h2>
            <p className="w-48">
              <Placeholder className="!w-2/5" />
              <Placeholder className="!w-3/6" />
              <Placeholder className="!w-3/6" />
              <Placeholder className="!w-2/5" />
              <Placeholder className="!w-2/5" />
              <Placeholder className="!w-3/6" />
              <Placeholder className="!w-3/6" />
            </p>
          </Card.Body>
          <Card.Footer>
            <div className="p-3">
              <Button className="w-full">
                <Placeholder />
              </Button>
            </div>
          </Card.Footer>
        </Card.Root>
      </CodeHighlighter>
    </section>
  )
}
