export type ModalExtraProps = Record<string, unknown>

export type ModalEmitFnProps = (
  componentName: string,
  extraProps?: ModalExtraProps
) => void

export type ModalProps = {
  onClose: () => void
}
