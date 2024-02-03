'use client'
import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { Accordion } from '@mrcarromesa/components'

export default function AlwaysOpen() {
  return (
    <section className="mt-4">
      <h2 className="group/title inline-block text-3xl" id="always-open">
        Always open
        <a
          href="#always-open"
          aria-label="Link to this section: Always open"
          className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
        />
      </h2>
      <p className="mt-2 text-base">
        Keep accordion open same when another item is opened.
      </p>
      <div className="mt-4 flex flex-col gap-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <div>
          <Accordion.Root alwaysOpen>
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
