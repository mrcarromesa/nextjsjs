'use client'
import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { Card } from '@mrcarromesa/components'

export default function Body() {
  return (
    <section className="mt-4">
      <h2 className="group/title inline-block text-3xl" id="body">
        Body
        <a
          href="#body"
          aria-label="Link to this section: Body"
          className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
        />
      </h2>
      <p className="mt-2 text-base">
        The building block of card is the component{' '}
        <code className="break-words rounded-md bg-gray-200 p-1 text-xs text-pink-400 dark:bg-gray-600">
          {'<div class="block flex-auto p-4" />'}
        </code>
      </p>
      <div className="mt-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <Card.Root>
          <Card.Body>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
            blanditiis ipsa dolorem molestiae corporis saepe ex consequatur
            voluptate nesciunt culpa cupiditate nam reiciendis a iusto velit
            quam eveniet voluptates deserunt.
          </Card.Body>
        </Card.Root>
      </div>
      <CodeHighlighter language="html">
        <Card.Root>
          <Card.Body>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
            blanditiis ipsa dolorem molestiae corporis saepe ex consequatur
            voluptate nesciunt culpa cupiditate nam reiciendis a iusto velit
            quam eveniet voluptates deserunt.
          </Card.Body>
        </Card.Root>
      </CodeHighlighter>
    </section>
  )
}
