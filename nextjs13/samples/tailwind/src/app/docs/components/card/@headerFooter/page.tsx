'use client'
import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { Card } from '@mrcarromesa/components'

export default function HeaderFooter() {
  return (
    <section className="mt-4">
      <h2 className="group/title inline-block text-3xl" id="header-footer">
        Header and footer
        <a
          href="#header-footer"
          aria-label="Link to this section: Header and footer"
          className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
        />
      </h2>
      <p className="mt-2 text-base">
        Add an optional header and/or footer within a card.
      </p>
      <div className="mt-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <Card.Root>
          <Card.Header bordered filled>
            <h3 className="p-2">Header</h3>
          </Card.Header>
          <Card.Body>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
            blanditiis ipsa dolorem molestiae corporis saepe ex consequatur
            voluptate nesciunt culpa cupiditate nam reiciendis a iusto velit
            quam eveniet voluptates deserunt.
          </Card.Body>
          <Card.Footer bordered filled>
            <span className="p-2">footer</span>
          </Card.Footer>
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
