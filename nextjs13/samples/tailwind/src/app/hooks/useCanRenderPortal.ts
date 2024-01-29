import { useEffect, useState } from 'react'

type Props = {
  containerId: string
}
export const useCanRenderPortal = ({ containerId }: Props) => {
  const [canRender, setCanRender] = useState(false)

  useEffect(() => {
    if (typeof document === undefined) {
      return
    }

    if (!document.getElementById(containerId)) {
      const divComponent = document.createElement('div')
      divComponent.id = containerId
      document.body.appendChild(divComponent)
    }

    setCanRender(true)
  }, [containerId])

  return {
    canRender,
  }
}
