import React, { ReactNode } from 'react'
import { Box } from '@mui/material'
import { DialogProps } from '@/components/modal/types'
import Typography, { TypographyProps } from '@/components/widgets/typography'
import { mergeSXProperty } from '@/common/utils/muiComponents'

interface Props {
  title: ReactNode
  mb: Required<DialogProps>['titleMb']
  typographyProps: TypographyProps
}

export default function ModalTitle(props: Props) {
  const { title, mb, typographyProps } = props
  if (!title) {
    return null
  }

  if (typeof title === 'string') {
    return (
      <Typography
        {...typographyProps}
        sx={mergeSXProperty(typographyProps.sx, { mb: `${mb}px` })}
        fontWeight="bold"
        variant="h3"
        textAlign={typographyProps.textAlign ?? 'center'}
      >
        {title}
      </Typography>
    )
  }

  return <Box sx={{ mb: `${mb}px` }}>{title}</Box>
}
