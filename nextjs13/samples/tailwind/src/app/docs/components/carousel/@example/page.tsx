'use client'

import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { Carousel } from '@mrcarromesa/components'

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
      <p className="mt-2 text-base">Here is a basic example of carousel</p>
      <div className="mt-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <Carousel.Root>
          <Carousel.Item>
            <div className="h-80 w-full bg-red-100"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="h-80 w-full bg-red-300"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="h-80 w-full bg-red-100"></div>
          </Carousel.Item>
        </Carousel.Root>
      </div>
      <CodeHighlighter language="html">
        <Carousel.Root>
          <Carousel.Item>
            <div className="h-80 w-full bg-red-100"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="h-80 w-full bg-red-300"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="h-80 w-full bg-red-100"></div>
          </Carousel.Item>
        </Carousel.Root>
      </CodeHighlighter>
    </section>
  )
}
