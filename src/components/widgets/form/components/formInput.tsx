import React from 'react'
import { TextField, TextFieldProps } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

type Props = {
  name: string
} & TextFieldProps

export default function FormInput(props: Props) {
  const { name, ...textFieldProps } = props
  const {
    control,
    formState: { defaultValues },
  } = useFormContext()
  return (
    <Controller
      name={name}
      defaultValue={defaultValues?.[name] ?? ''}
      control={control}
      render={({ field, fieldState }) => {
        const { error } = fieldState
        const helpText = error?.message ?? ''
        return (
          <TextField
            {...textFieldProps}
            {...field}
            error={!!helpText}
            helperText={helpText}
          />
        )
      }}
    />
  )
}
