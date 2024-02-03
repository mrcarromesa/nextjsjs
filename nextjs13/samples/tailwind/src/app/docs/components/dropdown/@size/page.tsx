'use client'
import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { Button, ButtonGroup, Dropdown } from '@mrcarromesa/components'

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
        Button dropdowns work with buttons of all sizes, including default and
        split dropdowns buttons
      </p>
      <div className="mt-4 flex gap-1 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <Dropdown.Root>
          <Dropdown.Button showIndicator size="large">
            Large Button
          </Dropdown.Button>
          <Dropdown.List>
            <Dropdown.ListItem>Action here</Dropdown.ListItem>
            <Dropdown.ListItem>Another action</Dropdown.ListItem>
            <Dropdown.ListItem>Something else here</Dropdown.ListItem>
          </Dropdown.List>
        </Dropdown.Root>

        <Dropdown.Root>
          <ButtonGroup size="large">
            <Button>Large split button</Button>
            <Dropdown.Button showIndicator />
          </ButtonGroup>
          <Dropdown.List>
            <Dropdown.ListItem>Action here</Dropdown.ListItem>
            <Dropdown.ListItem>Another action</Dropdown.ListItem>
            <Dropdown.ListItem>Something else here</Dropdown.ListItem>
          </Dropdown.List>
        </Dropdown.Root>
      </div>
      <CodeHighlighter language="html">
        <Dropdown.Root>
          <Dropdown.Button showIndicator size="large">
            Large Button
          </Dropdown.Button>
          <Dropdown.List>
            <Dropdown.ListItem>Action here</Dropdown.ListItem>
            <Dropdown.ListItem>Another action</Dropdown.ListItem>
            <Dropdown.ListItem>Something else here</Dropdown.ListItem>
          </Dropdown.List>
        </Dropdown.Root>
        <Dropdown.Root>
          <ButtonGroup size="large">
            <Button>Large split button</Button>
            <Dropdown.Button showIndicator />
          </ButtonGroup>
          <Dropdown.List>
            <Dropdown.ListItem>Action here</Dropdown.ListItem>
            <Dropdown.ListItem>Another action</Dropdown.ListItem>
            <Dropdown.ListItem>Something else here</Dropdown.ListItem>
          </Dropdown.List>
        </Dropdown.Root>
      </CodeHighlighter>

      <div className="mt-4 flex gap-1 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <Dropdown.Root>
          <Dropdown.Button showIndicator size="small">
            Small Button
          </Dropdown.Button>
          <Dropdown.List>
            <Dropdown.ListItem>Action here</Dropdown.ListItem>
            <Dropdown.ListItem>Another action</Dropdown.ListItem>
            <Dropdown.ListItem>Something else here</Dropdown.ListItem>
          </Dropdown.List>
        </Dropdown.Root>

        <Dropdown.Root>
          <ButtonGroup size="small">
            <Button>small split button</Button>
            <Dropdown.Button showIndicator />
          </ButtonGroup>
          <Dropdown.List>
            <Dropdown.ListItem>Action here</Dropdown.ListItem>
            <Dropdown.ListItem>Another action</Dropdown.ListItem>
            <Dropdown.ListItem>Something else here</Dropdown.ListItem>
          </Dropdown.List>
        </Dropdown.Root>
      </div>
      <CodeHighlighter language="html">
        <Dropdown.Root>
          <Dropdown.Button showIndicator size="small">
            Small Button
          </Dropdown.Button>
          <Dropdown.List>
            <Dropdown.ListItem>Action here</Dropdown.ListItem>
            <Dropdown.ListItem>Another action</Dropdown.ListItem>
            <Dropdown.ListItem>Something else here</Dropdown.ListItem>
          </Dropdown.List>
        </Dropdown.Root>

        <Dropdown.Root>
          <ButtonGroup size="small">
            <Button>small split button</Button>
            <Dropdown.Button showIndicator />
          </ButtonGroup>
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
