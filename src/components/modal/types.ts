import React, { ReactNode } from 'react'
import { TypographyProps } from '@/components/widgets/typography'

export type DialogProps<P = {}, R = any, J = any> = {
  onOK: (result?: R) => any
  open: boolean
  onCancel: (reason?: J) => any
  size?: 'sm' | 'md' | 'lg'
  title?: ReactNode
  footer?: ReactNode
  titleMb?: 32 | 24 | 50
  titleTypographyProps?: TypographyProps
  showClose?: boolean
} & P

export interface IModalContext {
  modals: Array<{
    Comp: React.FC<DialogProps> | React.ClassicComponentClass<DialogProps>
    key: string
    params: any
    open: boolean
  }>
  addModal: <T = any, R = any>(
    Comp:
      | React.ClassicComponentClass<DialogProps<T, R>>
      | React.FC<DialogProps<T, R>>,
    key: string,
    params: any,
    defaultVisible?: boolean,
  ) => void
  showModal: (key: string, params?: any) => void
  closeModal: (key: string) => void
  promiseMap: Map<string, { resolve: Function; reject: Function }>
}

export enum MODAL_CLOSE_ERROR_CODE {
  MULTI_CLOSE,
}
