import React, { CSSProperties, PropsWithChildren } from 'react'
import { TypographyProps as MuiTypographyProps } from '@mui/material'
import MuiTypography, {
  TypographyTypeMap,
} from '@mui/material/Typography/Typography'
import { mergeSXProperty } from '@/common/utils/muiComponents'

type Props = PropsWithChildren<
  MuiTypographyProps<
    TypographyTypeMap['defaultComponent'],
    {
      type?: 'title' | 'secondary' | 'disabled' | 'link'
    }
  >
>

const colorMap: Record<Props['type'], CSSProperties['color']> = {
  title: 'rgba(46,67,105,0.85)',
  secondary: 'rgba(46,67,105,0.65)',
  disabled: 'rgba(46,67,105,0.45)',
  link: '#1FA0E8',
}

export default function Typography(props: Props) {
  const { type = 'title', children, sx, lineHeight = 1.4, ...restProps } = props
  const finalSX = mergeSXProperty(sx, { color: colorMap[type] })
  return (
    <MuiTypography lineHeight={lineHeight} sx={finalSX} {...restProps}>
      {children}
    </MuiTypography>
  )
}

export type TypographyProps = Props
