import React, { PropsWithChildren } from 'react'
import MuiModal from '@mui/material/Modal'
import { Box } from '@mui/material'

import { DialogProps } from '@/components/modal/types'
import ModalTitle from '@/components/modal/modalTitle'
import ModalFooter from '@/components/modal/modalFooter'
import CloseIcon from '@/components/modal/closeIcon'

const dialogWidth: Record<DialogProps['size'], number> = {
  sm: 360,
  md: 540,
  lg: 1192,
}

export default function Modal(props: PropsWithChildren<DialogProps>) {
  const {
    open,
    onCancel,
    onOK,
    children,
    title,
    footer,
    showClose = true,
    size = 'sm',
    titleMb = 24,
    titleTypographyProps = {},
  } = props

  return (
    <MuiModal open={open}>
      <Box
        sx={theme => ({
          bgcolor: 'white',
          minHeight: '238px',
          maxHeight: '620px',
          boxSizing: 'border-box',
          borderRadius: 2,
          width: `${dialogWidth[size]}px`,
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          p: 4,
          display: 'flex',
          flexDirection: 'column',
        })}
      >
        <CloseIcon show={showClose} onClose={() => onCancel()} />
        <Box
          sx={{
            flexShrink: 0,
          }}
        >
          <ModalTitle
            title={title}
            mb={titleMb}
            typographyProps={titleTypographyProps}
          />
        </Box>
        <Box sx={{ flex: 1 }}>{children}</Box>
        {footer === undefined ? (
          <ModalFooter
            onOK={() => onOK()}
            onCancel={() => onCancel()}
            dialogSize={size}
          />
        ) : (
          footer
        )}
      </Box>
    </MuiModal>
  )
}
