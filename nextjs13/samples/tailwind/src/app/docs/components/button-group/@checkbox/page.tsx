'use client'
import { CodeHighlighter } from '@/app/components/internalComponents/CodeHighLighter'
import { Button, ButtonGroup } from '@mrcarromesa/components'
import { ChangeEvent, useState } from 'react'

type CheckboxStatus = {
  [key: string]: boolean
}

export default function Checkbox() {
  const [radioActiveValue, setRadioActiveValue] = useState<null | string>(null)
  const [checkBoxStatus, setCheckBoxStatus] = useState<CheckboxStatus>(
    {} as CheckboxStatus
  )
  return (
    <>
      <section className="mt-4">
        <h2 className="group/title inline-block text-3xl" id="checkbox">
          Checkbox
          <a
            href="#checkbox"
            aria-label="Link to this section: Checkbox"
            className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
          />
        </h2>
        <p className="mt-2 text-base">Combine it with input checkbox.</p>
        <div className="mt-4 flex flex-row gap-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
          <ButtonGroup>
            <Button
              asComponent="input"
              type="checkbox"
              checked={checkBoxStatus?.c1}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCheckBoxStatus((current) => ({
                  ...current,
                  c1: e.target.checked,
                }))
              }
            >
              Primary
            </Button>
            <Button
              asComponent="input"
              type="checkbox"
              checked={checkBoxStatus?.c2}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCheckBoxStatus((current) => ({
                  ...current,
                  c2: e.target.checked,
                }))
              }
            >
              Middle
            </Button>
            <Button
              asComponent="input"
              type="checkbox"
              checked={checkBoxStatus?.c3}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCheckBoxStatus((current) => ({
                  ...current,
                  c3: e.target.checked,
                }))
              }
            >
              Right
            </Button>
          </ButtonGroup>
        </div>
        <CodeHighlighter language="html">
          <ButtonGroup>
            <Button asComponent="input" type="checkbox">
              Primary
            </Button>
            <Button asComponent="input" type="checkbox">
              Middle
            </Button>
            <Button asComponent="input" type="checkbox">
              Right
            </Button>
          </ButtonGroup>
        </CodeHighlighter>
      </section>
      <section className="mt-4">
        <h2 className="group/title inline-block text-3xl" id="radio">
          Radio
          <a
            href="#radio"
            aria-label="Link to this section: Radio"
            className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
          />
        </h2>
        <p className="mt-2 text-base">Combine it with input radio.</p>
        <div className="mt-4 flex flex-row gap-4 rounded-t-lg border-x border-y border-gray-400 bg-white p-4 dark:border-gray-200 dark:bg-gray-800">
          <ButtonGroup>
            <Button
              asComponent="input"
              variation="primaryOutline"
              type="radio"
              name="r1"
              value="1"
              checked={radioActiveValue === '1'}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setRadioActiveValue(e.target.value)
              }
            >
              Primary
            </Button>
            <Button
              asComponent="input"
              variation="primaryOutline"
              type="radio"
              name="r1"
              value="2"
              checked={radioActiveValue === '2'}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setRadioActiveValue(e.target.value)
              }
            >
              Middle
            </Button>
            <Button
              asComponent="input"
              variation="primaryOutline"
              type="radio"
              name="r1"
              value="3"
              checked={radioActiveValue === '3'}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setRadioActiveValue(e.target.value)
              }
            >
              Right
            </Button>
          </ButtonGroup>
        </div>
        <CodeHighlighter language="html">
          <ButtonGroup>
            <Button
              asComponent="input"
              variation="primaryOutline"
              type="radio"
              name="r1"
              value="1"
              checked={radioActiveValue === '1'}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setRadioActiveValue(e.target.value)
              }
            >
              Primary
            </Button>
            <Button
              asComponent="input"
              variation="primaryOutline"
              type="radio"
              name="r1"
              value="2"
              checked={radioActiveValue === '2'}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setRadioActiveValue(e.target.value)
              }
            >
              Middle
            </Button>
            <Button
              asComponent="input"
              variation="primaryOutline"
              type="radio"
              name="r1"
              value="3"
              checked={radioActiveValue === '3'}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setRadioActiveValue(e.target.value)
              }
            >
              Right
            </Button>
          </ButtonGroup>
        </CodeHighlighter>
      </section>
    </>
  )
}
