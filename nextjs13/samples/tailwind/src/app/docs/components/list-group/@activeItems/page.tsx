'use client'
import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { ListGroup } from '@mrcarromesa/components'

export default function ActiveItems() {
  return (
    <section className="mt-4">
      <h2 className="group/title inline-block text-3xl" id="active-items">
        Active items
        <a
          href="#active-items"
          aria-label="Link to this section: Active items"
          className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
        />
      </h2>
      <p className="mt-2 text-base">Indicate the current active selection</p>
      <div className="mt-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <ListGroup.Root>
          <ListGroup.Item active>Item 1</ListGroup.Item>
          <ListGroup.Item>Item 2</ListGroup.Item>
          <ListGroup.Item>Item 3</ListGroup.Item>
          <ListGroup.Item>Item 4</ListGroup.Item>
          <ListGroup.Item>Item 5</ListGroup.Item>
        </ListGroup.Root>
      </div>
      <CodeHighlighter language="html">
        <ListGroup.Root>
          <ListGroup.Item active>Item 1</ListGroup.Item>
          <ListGroup.Item>Item 2</ListGroup.Item>
          <ListGroup.Item>Item 3</ListGroup.Item>
          <ListGroup.Item>Item 4</ListGroup.Item>
          <ListGroup.Item>Item 5</ListGroup.Item>
        </ListGroup.Root>
      </CodeHighlighter>
    </section>
  )
}
