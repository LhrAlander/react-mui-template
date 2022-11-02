import React, { useRef, useState } from 'react'
import { useMemoizedFn } from 'ahooks'
import { message } from 'antd'
import { IModalContext } from '@/hooks/useModal/types'
import ModalWrapper, { ModalContext } from '@/hooks/useModal/ModalWrapper'

export default function addModalWrapper(
  Comp: React.FC | React.ClassicComponentClass,
) {
  return function (props: any = {}) {
    const [modals, setModals] = useState<IModalContext['modals']>([])
    const promiseMap = useRef<
      Map<string, { resolve: Function; reject: Function }>
    >(new Map())

    const changeModalVisible = useMemoizedFn((visible: boolean) => {
      return function (key: string) {
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
              visible,
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
              return message.error('存在相同key的弹窗存在，请更换调用方法')
            }
            setModals(prevState => {
              return [
                ...prevState,
                {
                  Comp,
                  key,
                  visible: defaultVisible,
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
