import React, { ReactNode } from 'react'
import { Box, Button, ButtonProps } from '@mui/material'
import { DialogProps } from '@/components/modal/types'
import { mergeSXProperty } from '@/common/utils/muiComponents'

interface Props {
  onOK: Function
  onCancel: Function
  dialogSize: Required<DialogProps>['size']
  cancelText?: ReactNode
  confirmText?: ReactNode
  cancelButtonProps?: ButtonProps
  confirmButtonProps?: ButtonProps
}

export default function ModalFooter(props: Props) {
  const {
    confirmText = '确认',
    cancelText = '取消',
    onOK,
    onCancel,
    dialogSize,
    cancelButtonProps = {},
    confirmButtonProps = {},
  } = props

  return (
    <Box
      sx={{
        mt: 4,
        flexShrink: 0,
        display: 'flex',
      }}
    >
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => onCancel()}
        size="large"
        {...cancelButtonProps}
        sx={mergeSXProperty(cancelButtonProps.sx, {
          mr: dialogSize === 'lg' ? 4 : 1,
          flex: 1,
        })}
      >
        {cancelText}
      </Button>
      <Button
        size="large"
        variant="contained"
        onClick={() => onOK()}
        sx={{
          flex: 1,
        }}
      >
        {confirmText}
      </Button>
    </Box>
  )
}
