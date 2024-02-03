'use client'
import { Button, Card } from '@mrcarromesa/components'
import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'

export default function Example() {
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
        Cards are built with as little markup and styles as possible, but still
        manager to deliver a ton of control and customization.
      </p>
      <div className="mt-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <Card.Root className="w-72">
          <Card.Header>
            <div className="flex w-full justify-center rounded-t-md bg-gray-400 py-20 text-gray-300">
              Img
            </div>
          </Card.Header>
          <Card.Body>
            <h3>Card title</h3>
            <p className="my-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
              blanditiis ipsa dolorem molestiae corporis saepe ex consequatur
              voluptate nesciunt culpa cupiditate nam reiciendis a iusto velit
              quam eveniet voluptates deserunt.
            </p>
            <Button>More Info</Button>
          </Card.Body>
        </Card.Root>
      </div>
      <CodeHighlighter language="html">
        <Card.Root className="w-72">
          <Card.Header>
            <div className="flex w-full justify-center rounded-t-md bg-gray-400 py-20 text-gray-300">
              Img
            </div>
          </Card.Header>
          <Card.Body>
            <h3>Card title</h3>
            <p className="my-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
              blanditiis ipsa dolorem molestiae corporis saepe ex consequatur
              voluptate nesciunt culpa cupiditate nam reiciendis a iusto velit
              quam eveniet voluptates deserunt.
            </p>
            <Button>More Info</Button>
          </Card.Body>
        </Card.Root>
      </CodeHighlighter>
    </section>
  )
}
