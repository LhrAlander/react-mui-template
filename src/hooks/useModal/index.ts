import React, { useCallback, useContext } from 'react'

import { noop } from '@/utils/functionUtils'
import { ModalContext } from './ModalWrapper'
import { DialogProps, MODAL_CLOSE_ERROR_CODE } from './types'

export default function useModal() {
  const { addModal, closeModal, promiseMap, modals, showModal } =
    useContext(ModalContext)

  const openModal = useCallback(
    <T = any, R = any>(
      Comp:
        | React.ClassicComponentClass<DialogProps<T, R>>
        | React.FC<DialogProps<T, R>>,
      key: string,
      params: T,
    ): Promise<R> => {
      const promiseMethods: {
        resolve: (result: R) => any
        reject: (reason: any) => any
      } = {
        reject: noop,
        resolve: noop,
      }
      const promise = new Promise<R>((resolve, reject) => {
        promiseMethods.resolve = resolve
        promiseMethods.reject = reject
      })

      const modal = modals.find(({ key: k }) => k === key)
      if (modal) {
        showModal(key)
      } else {
        addModal(Comp, key, params, true)
      }

      const existPromiseMethods = promiseMap.get(key)
      if (existPromiseMethods) {
        existPromiseMethods.reject({
          code: MODAL_CLOSE_ERROR_CODE.MULTI_CLOSE,
          key,
        })
      }

      promiseMap.set(key, promiseMethods)
      return promise
    },
    [addModal, promiseMap, modals, showModal],
  )

  return {
    closeModal,
    openModal,
  }
}
