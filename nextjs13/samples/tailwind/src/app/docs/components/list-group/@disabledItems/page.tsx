'use client'
import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { Button, ListGroup } from '@mrcarromesa/components'

export default function DisabledItems() {
  return (
    <section className="mt-4">
      <h2 className="group/title inline-block text-3xl" id="disabled-items">
        Disabled items
        <a
          href="#disabled-items"
          aria-label="Link to this section: Disabled items"
          className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
        />
      </h2>
      <p className="mt-2 text-base">It is to make it appear disabled.</p>
      <div className="mt-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <ListGroup.Root asElement="div">
          <ListGroup.Item
            asElement={Button}
            variation="primaryOutline"
            disabled
          >
            Item 1
          </ListGroup.Item>
          <ListGroup.Item asElement={Button} variation="dangerOutline">
            Item 2
          </ListGroup.Item>
          <ListGroup.Item asElement={Button} variation="primaryOutline">
            Item 3
          </ListGroup.Item>
          <ListGroup.Item asElement={Button} variation="primaryOutline">
            Item 4
          </ListGroup.Item>
          <ListGroup.Item asElement={Button} variation="primaryOutline">
            Item 5
          </ListGroup.Item>
        </ListGroup.Root>
      </div>
      <CodeHighlighter language="html">
        <ListGroup.Root asElement="div">
          <ListGroup.Item
            asElement={Button}
            variation="primaryOutline"
            disabled
          >
            Item 1
          </ListGroup.Item>
          <ListGroup.Item asElement={Button} variation="dangerOutline">
            Item 2
          </ListGroup.Item>
          <ListGroup.Item asElement={Button} variation="primaryOutline">
            Item 3
          </ListGroup.Item>
          <ListGroup.Item asElement={Button} variation="primaryOutline">
            Item 4
          </ListGroup.Item>
          <ListGroup.Item asElement={Button} variation="primaryOutline">
            Item 5
          </ListGroup.Item>
        </ListGroup.Root>
      </CodeHighlighter>
    </section>
  )
}
