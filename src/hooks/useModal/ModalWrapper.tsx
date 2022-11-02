import React, { useContext } from 'react'
import { IModalContext } from './types'

export const ModalContext = React.createContext<IModalContext>({
  modals: [],
  addModal: (modal, key, params, defaultVisible) => {},
  showModal: key => {},
  closeModal: key => {},
  promiseMap: new Map(),
})

ModalContext.displayName = 'manualOpenModalContext'

export default function ModalWrapper() {
  const { modals, closeModal, promiseMap } =
    useContext<IModalContext>(ModalContext)

  return (
    <>
      {modals.map(({ Comp, visible, key, params }) => {
        return (
          <Comp
            key={key}
            visible={visible}
            closeModal={closeModal}
            onOK={(results: any) => {
              const promiseMethods = promiseMap.get(key)
              if (promiseMethods) {
                promiseMethods.resolve(results)
              }
              closeModal(key)
            }}
            onCancel={(reason: any) => {
              const promiseMethods = promiseMap.get(key)
              if (promiseMethods) {
                promiseMethods.resolve(reason)
              }
              closeModal(key)
            }}
            {...params}
          />
        )
      })}
    </>
  )
}
