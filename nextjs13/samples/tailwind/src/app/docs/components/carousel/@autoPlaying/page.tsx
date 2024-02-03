'use client'
import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { Carousel } from '@mrcarromesa/components'

export default function AutoPlaying() {
  return (
    <section className="mt-4">
      <h2 className="group/title inline-block text-3xl" id="auto-playing">
        Auto Playing
        <a
          href="#auto-playing"
          aria-label="Link to this section: Auto Playing"
          className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
        />
      </h2>
      <p className="mt-2 text-base">
        You can make your carousels autoplay on page load. Auto Playing
        carousels automatically pause while hovered with the mouse.
      </p>
      <div className="mt-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <Carousel.Root autoPlaying showIndicator>
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
        <Carousel.Root autoPlaying showIndicator>
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
