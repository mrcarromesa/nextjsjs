'use client'
import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { ListGroup } from '@mrcarromesa/components'

export default function Examples() {
  return (
    <section className="mt-4">
      <h2 className="group/title inline-block text-3xl" id="example">
        Example
        <a
          href="#example"
          aria-label="Link to this section: Example"
          className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
        />
      </h2>
      <p className="mt-2 text-base">
        The most basic list group is an unordered list with list items and the
        proper classes. Build upon it with the options that follow, or with your
        own CSS as needed.
      </p>
      <div className="mt-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <ListGroup.Root>
          <ListGroup.Item>Item 1</ListGroup.Item>
          <ListGroup.Item>Item 2</ListGroup.Item>
          <ListGroup.Item>Item 3</ListGroup.Item>
          <ListGroup.Item>Item 4</ListGroup.Item>
          <ListGroup.Item>Item 5</ListGroup.Item>
        </ListGroup.Root>
      </div>
      <CodeHighlighter language="html">
        <ListGroup.Root>
          <ListGroup.Item>Item 1</ListGroup.Item>
          <ListGroup.Item>Item 2</ListGroup.Item>
          <ListGroup.Item>Item 3</ListGroup.Item>
          <ListGroup.Item>Item 4</ListGroup.Item>
          <ListGroup.Item>Item 5</ListGroup.Item>
        </ListGroup.Root>
      </CodeHighlighter>
    </section>
  )
}
