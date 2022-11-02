import React from 'react'
import MuiCloseIcon from '@mui/icons-material/Close'
import { IconButton } from '@mui/material'

interface Props {
  show: boolean
  onClose: Function
}

export default function CloseIcon(props: Props) {
  const { show, onClose } = props

  if (!show) {
    return null
  }

  return (
    <IconButton
      sx={{
        position: 'absolute',
        right: '3px',
        top: '3px',
      }}
      onClick={() => onClose()}
    >
      <MuiCloseIcon sx={{ color: 'rgba(46,67,105,0.25)' }} />
    </IconButton>
  )
}
