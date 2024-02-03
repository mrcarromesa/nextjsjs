'use client'
import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { Dropdown } from '@mrcarromesa/components'

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
      <p className="mt-2 text-base">Here is a basic example of dropdown</p>
      <div className="mt-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <Dropdown.Root>
          <Dropdown.Button showIndicator>Dropdown Button</Dropdown.Button>
          <Dropdown.List>
            <Dropdown.ListItem>Action here</Dropdown.ListItem>
            <Dropdown.ListItem>Another action</Dropdown.ListItem>
            <Dropdown.ListItem>Something else here</Dropdown.ListItem>
          </Dropdown.List>
        </Dropdown.Root>
      </div>
      <CodeHighlighter language="html">
        <Dropdown.Root>
          <Dropdown.Button label="Dropdown Button" showIndicator />
          <Dropdown.List>
            <Dropdown.ListItem>Action here</Dropdown.ListItem>
            <Dropdown.ListItem>Another action</Dropdown.ListItem>
            <Dropdown.ListItem>Something else here</Dropdown.ListItem>
          </Dropdown.List>
        </Dropdown.Root>
      </CodeHighlighter>
    </section>
  )
}
