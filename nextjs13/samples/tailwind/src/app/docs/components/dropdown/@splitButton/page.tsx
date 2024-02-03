'use client'

import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { Button, ButtonGroup, Dropdown } from '@mrcarromesa/components'

const buttonVariation = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
] as const

export default function SplitButton() {
  return (
    <section className="mt-4">
      <h2 className="group/title inline-block text-3xl" id="split-button">
        Split button
        <a
          href="#split-button"
          aria-label="Link to this section: Split button"
          className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
        />
      </h2>
      <p className="mt-2 text-base">
        Similarly, create split button dropdowns with virtually the same markup
        as single button dropdowns.
      </p>
      <div className="mt-4 flex gap-1 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        {buttonVariation.map((item) => (
          <Dropdown.Root key={item}>
            <ButtonGroup>
              <Button variation={item}>{item}</Button>
              <Dropdown.Button variation={item} showIndicator />
            </ButtonGroup>
            <Dropdown.List>
              <Dropdown.ListItem>Action here</Dropdown.ListItem>
              <Dropdown.ListItem>Another action</Dropdown.ListItem>
              <Dropdown.ListItem>Something else here</Dropdown.ListItem>
            </Dropdown.List>
          </Dropdown.Root>
        ))}
      </div>
      <CodeHighlighter language="html">
        {buttonVariation.map((item) => (
          <Dropdown.Root key={item}>
            <ButtonGroup>
              <Button variation={item}>{item}</Button>
              <Dropdown.Button variation={item} showIndicator />
            </ButtonGroup>
            <Dropdown.List>
              <Dropdown.ListItem>Action here</Dropdown.ListItem>
              <Dropdown.ListItem>Another action</Dropdown.ListItem>
              <Dropdown.ListItem>Something else here</Dropdown.ListItem>
            </Dropdown.List>
          </Dropdown.Root>
        ))}
      </CodeHighlighter>
    </section>
  )
}
