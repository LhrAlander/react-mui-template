import { Modal as AntdModal, ModalProps } from 'antd/es'
import { useMemo } from 'react'
import * as React from 'react'
import classNames from 'classnames'
import style from './style.module.scss'

export default function Modal(
  props: ModalProps & {
    fullScreen?: boolean
    children?: any
  },
) {
  const { fullScreen, className, wrapClassName } = props

  const styleObj = useMemo<React.CSSProperties>(() => {
    if (!fullScreen) {
      return props.style || {}
    }
    return {
      ...(props.style || {}),
      top: 0,
      maxWidth: '100vw',
      height: '100vh',
      padding: 0,
    }
  }, [fullScreen, props.style])

  return (
    <AntdModal
      {...props}
      wrapClassName={classNames(
        { [style.fullDialog]: fullScreen },
        wrapClassName,
        'antd-dialog-wrapper',
      )}
      style={styleObj}
      width={fullScreen ? '100vw' : props.width}
    />
  )
}
