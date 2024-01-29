import { ModalEmitFnProps, ModalExtraProps } from './interfaces/ModalProps'

export const eventManager = {
  modal: {} as ModalEmitFnProps,

  on(callback: ModalEmitFnProps) {
    this.modal = callback
  },

  emit<T = void>(component: string, extraProps?: T) {
    this.modal(component, extraProps as ModalExtraProps)
  },

  off() {
    this.modal = {} as ModalEmitFnProps
  },
}
