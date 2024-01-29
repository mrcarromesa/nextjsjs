import { Fragment } from 'react'
import { alerts } from '../../constants'

export default function Api() {
  return (
    <section className="mt-4">
      <h2 className="group/title inline-block text-3xl" id="api">
        API
        <a
          href="#api"
          aria-label="Link to this section: API"
          className="before:ml-2 before:text-3xl before:text-blue-500 group-hover/title:before:content-['#']"
        />
      </h2>
      <table className="mt-4 w-full border-collapse border border-gray-500">
        <thead>
          <tr>
            <th className="border border-gray-500">Name</th>
            <th className="border border-gray-500">Type</th>
            <th className="border border-gray-500 px-2">Required</th>
            <th className="border border-gray-500">Default</th>
            <th className="border border-gray-500">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-500 p-2">animated</td>
            <td className="border border-gray-500 p-2">boolean</td>
            <td className="border border-gray-500 p-2">false</td>
            <td className="border border-gray-500 p-2">
              <code className="break-words rounded-md bg-gray-200 p-1 text-xs text-pink-400 dark:bg-gray-600">
                false
              </code>
            </td>
            <td className="border border-gray-500 p-2">
              Should alert to appear with fade animation or not
            </td>
          </tr>
          <tr>
            <td className="border border-gray-500 p-2">dismissible</td>
            <td className="border border-gray-500 p-2">boolean</td>
            <td className="border border-gray-500 p-2">false</td>
            <td className="border border-gray-500 p-2">
              <code className="break-words rounded-md bg-gray-200 p-1 text-xs text-pink-400 dark:bg-gray-600">
                false
              </code>
            </td>
            <td className="border border-gray-500 p-2">
              Should alert can be closed by a close button or not
            </td>
          </tr>
          <tr>
            <td className="border border-gray-500 p-2">variation</td>
            <td className="border border-gray-500 p-2">
              <div className="flex max-w-xs flex-wrap">
                {alerts.map((alert) => (
                  <Fragment key={alert}>
                    <code className="mx-1 my-1 break-words rounded-md bg-gray-200 p-1 text-xs text-pink-400 dark:bg-gray-600">
                      {alert}
                    </code>
                    <span className="text-2xl text-gray-400">|</span>
                  </Fragment>
                ))}
              </div>
            </td>
            <td className="border border-gray-500 p-2">false</td>
            <td className="border border-gray-500 p-2">
              <code className="break-words rounded-md bg-gray-200 p-1 text-xs text-pink-400 dark:bg-gray-600">
                alert-primary
              </code>
            </td>
            <td className="border border-gray-500 p-2">
              Should alert can be closed by a close button or not
            </td>
          </tr>
          <tr>
            <td className="border border-gray-500 p-2">afterClose</td>
            <td className="border border-gray-500 p-2">function</td>
            <td className="border border-gray-500 p-2">false</td>
            <td className="border border-gray-500 p-2">
              <code className="break-words rounded-md bg-gray-200 p-1 text-xs text-pink-400 dark:bg-gray-600">
                () =&gt; void
              </code>
            </td>
            <td className="border border-gray-500 p-2">
              Call a function after alert was close
            </td>
          </tr>
          <tr>
            <td className="border border-gray-500 p-2">beforeClose</td>
            <td className="border border-gray-500 p-2">function</td>
            <td className="border border-gray-500 p-2">false</td>
            <td className="border border-gray-500 p-2">
              <code className="break-words rounded-md bg-gray-200 p-1 text-xs text-pink-400 dark:bg-gray-600">
                () =&gt; void
              </code>
            </td>
            <td className="border border-gray-500 p-2">
              Call a function before alert was close
            </td>
          </tr>
          <tr>
            <td className="border border-gray-500 p-2">onClose</td>
            <td className="border border-gray-500 p-2">function</td>
            <td className="border border-gray-500 p-2">false</td>
            <td className="border border-gray-500 p-2">
              <code className="break-words rounded-md bg-gray-200 p-1 text-xs text-pink-400 dark:bg-gray-600">
                () =&gt; void
              </code>
            </td>
            <td className="border border-gray-500 p-2">
              Callback fired when alert is closed
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
