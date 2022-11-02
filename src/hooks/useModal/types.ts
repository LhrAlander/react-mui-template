import React from 'react'

export type DialogProps<T = any, R = any, J = any> = {
  onOK: (result: R) => any
  visible: boolean
  onCancel: (reason?: J) => any
} & T

export interface IModalContext {
  modals: Array<{
    Comp: React.FC<DialogProps> | React.ClassicComponentClass<DialogProps>
    key: string
    params: any
    visible: boolean
  }>
  addModal: <T = any, R = any>(
    Comp:
      | React.ClassicComponentClass<DialogProps<T, R>>
      | React.FC<DialogProps<T, R>>,
    key: string,
    params: any,
    defaultVisible?: boolean,
  ) => void
  showModal: (key: string) => void
  closeModal: (key: string) => void
  promiseMap: Map<string, { resolve: Function; reject: Function }>
}

export enum MODAL_CLOSE_ERROR_CODE {
  MULTI_CLOSE,
}
