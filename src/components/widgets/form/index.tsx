import React, { PropsWithChildren } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { UseFormProps } from 'react-hook-form/dist/types'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Box } from '@mui/material'

type Props<T> = PropsWithChildren<
  {
    onSubmit?: (formState: T) => void
    schema?: z.Schema<Partial<T>>
  } & UseFormProps<T, any>
>

export default function Form<T = unknown>(props: Props<T>) {
  const { children, onSubmit, schema, ...useFormProps } = props
  const contextValue = useForm<T>({
    resolver: schema ? zodResolver(schema) : undefined,
    ...useFormProps,
  })

  return (
    <FormProvider {...contextValue}>
      <Box
        component="form"
        onSubmit={contextValue.handleSubmit(data => {
          if (onSubmit) {
            onSubmit(data)
          }
        })}
      >
        {children}
      </Box>
    </FormProvider>
  )
}
