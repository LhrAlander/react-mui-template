import { SxProps } from '@mui/system'
import { Theme } from '@mui/material/styles'

export function mergeSXProperty(
  sx1?: SxProps<Theme>,
  sx2?: SxProps<Theme>,
): SxProps<Theme> {
  sx1 = sx1 ?? {}
  sx2 = sx2 ?? {}

  return [
    ...(Array.isArray(sx1) ? sx1 : [sx1]),
    ...(Array.isArray(sx2) ? sx2 : [sx2]),
  ]
}
