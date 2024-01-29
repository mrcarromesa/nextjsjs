import { Children, ReactElement, ReactNode } from 'react'
import { TabNavContext } from '../context'

type Props = {
  children: ReactNode
  initialRoute?: string
}

export const Root = ({ children, initialRoute = '' }: Props) => {
  let currentRouter = initialRoute

  if (!currentRouter) {
    const [first] = Children.toArray(children) as ReactElement<{
      route: string
    }>[]

    currentRouter = first.props.route
  }

  return (
    <div className="w-full">
      <TabNavContext initialRoute={currentRouter}>{children}</TabNavContext>
    </div>
  )
}
