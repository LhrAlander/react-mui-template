import React, { useRef, useState } from 'react'
import { useMemoizedFn } from 'ahooks'
import { IModalContext } from '@/components/modal/types'
import ModalWrapper, { ModalContext } from '@/components/modal/modalWrapper'

export default function addModalWrapper(
  Comp: React.FC | React.ClassicComponentClass,
) {
  return function (props: any = {}) {
    const [modals, setModals] = useState<IModalContext['modals']>([])
    const promiseMap = useRef<
      Map<string, { resolve: Function; reject: Function }>
    >(new Map())

    const changeModalVisible = useMemoizedFn((visible: boolean) => {
      return function (key: string, params?: any) {
        const modal = modals.find(({ key: k }) => k === key)
        if (!modal) {
          return
        }

        setModals(prevState => {
          return prevState.map(item => {
            if (item !== modal) {
              return item
            }
            return {
              ...item,
              params: params ?? item.params,
              open: visible,
            }
          })
        })
      }
    })
    return (
      <ModalContext.Provider
        value={{
          modals,
          showModal: changeModalVisible(true),
          closeModal: changeModalVisible(false),
          addModal: (Comp, key, params, defaultVisible = true) => {
            const modal = modals.find(({ key: k }) => k === key)
            if (modal) {
              return console.error('存在相同key的弹窗存在，请更换调用方法')
            }
            setModals(prevState => {
              return [
                ...prevState,
                {
                  Comp,
                  key,
                  open: defaultVisible,
                  params,
                },
              ]
            })
          },
          promiseMap: promiseMap.current,
        }}
      >
        <Comp {...props} />
        <ModalWrapper />
      </ModalContext.Provider>
    )
  }
}
