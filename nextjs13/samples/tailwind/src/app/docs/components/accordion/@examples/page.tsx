'use client'
import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { Accordion } from '@mrcarromesa/components'

export default function Examples() {
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
        Click the accordions below to expand/collapse the accordion content.
      </p>
      <div className="mt-4 flex flex-col gap-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <div>
          <Accordion.Root defaultActiveKey="2">
            <Accordion.Item eventKey="1">
              <Accordion.Header>Header</Accordion.Header>
              <Accordion.Panel>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
                eius unde assumenda cum consequuntur nulla. Animi qui aperiam,
                officiis, voluptates atque unde facere possimus odit est
                temporibus sequi sed veritatis.
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Header</Accordion.Header>
              <Accordion.Panel>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
                eius unde assumenda cum consequuntur nulla. Animi qui aperiam,
                officiis, voluptates atque unde facere possimus odit est
                temporibus sequi sed veritatis.
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </div>
      <CodeHighlighter language="html">
        <Accordion.Root>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Header</Accordion.Header>
            <Accordion.Panel>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
              eius unde assumenda cum consequuntur nulla. Animi qui aperiam,
              officiis, voluptates atque unde facere possimus odit est
              temporibus sequi sed veritatis.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Header</Accordion.Header>
            <Accordion.Panel>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
              eius unde assumenda cum consequuntur nulla. Animi qui aperiam,
              officiis, voluptates atque unde facere possimus odit est
              temporibus sequi sed veritatis.
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion.Root>
      </CodeHighlighter>
    </section>
  )
}
