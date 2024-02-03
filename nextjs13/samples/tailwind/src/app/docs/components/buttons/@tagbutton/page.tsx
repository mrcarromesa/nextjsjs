'use client'
import { Button } from '@mrcarromesa/components'
import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import Link from 'next/link'

export default function TagButton() {
  return (
    <section className="mt-4">
      <h2 className="group/title inline-block text-3xl" id="button-tags">
        Button tags
        <a
          href="#button-tags"
          aria-label="Link to this section: Button tags"
          className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
        />
      </h2>
      <p className="mt-2 text-base">
        To apply same styles to tags such as:
        <ul className="list-inside list-disc">
          <li>a</li>
          <li>input submit</li>
          <li>input reset</li>
          <li>next/link</li>
        </ul>
      </p>
      <div className="mt-4 flex flex-row gap-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
        <Button asComponent="a" href="example.com">
          Link with tag a
        </Button>
        <Button asComponent={Link} href="example.com">
          Link from next
        </Button>
        <Button asComponent="input" type="reset" value="Reset" />
      </div>
      <CodeHighlighter language="html">
        <Button asComponent="a" href="example.com">
          Link with tag a
        </Button>
        <Button asComponent={Link} href="example.com">
          Link from next
        </Button>
        <Button asComponent="input" type="reset" value="Reset" />
      </CodeHighlighter>
    </section>
  )
}
