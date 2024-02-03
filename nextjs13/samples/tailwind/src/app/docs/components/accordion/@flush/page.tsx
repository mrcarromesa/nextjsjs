'use client'
import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { Accordion } from '@mrcarromesa/components'

export default function Flush() {
  return (
    <section className="mt-4">
      <h2 className="group/title inline-block text-3xl" id="flush">
        Flush
        <a
          href="#examples"
          aria-label="Link to this section: Flus"
          className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
        />
      </h2>
      <p className="mt-2 text-base">
        With flush, remove some borders and rounded corners to render accordions
        edge-to-edge with their parent container.
      </p>
      <div className="mt-4 flex flex-col gap-4 rounded-t-lg border-x border-y border-gray-400 bg-gray-300 p-4 dark:border-gray-200 dark:bg-gray-600">
        <div>
          <Accordion.Root flush>
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
        <Accordion.Root flush>
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
