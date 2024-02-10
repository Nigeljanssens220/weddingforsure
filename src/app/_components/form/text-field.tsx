'use client'

import { ErrorMessage } from '@hookform/error-message'
import { useFormContext } from 'react-hook-form'
import { FormControl, FormDescription, FormField, FormItem, FormLabel } from '../ui/form'
import { Input } from '../ui/input'
import Typography from '../ui/typography'

export interface FormTextFieldProps extends React.ComponentPropsWithoutRef<'input'> {
  /**
   * Name is used for react hook form to register the field
   */
  name: string
  /**
   * Label is used for the form label
   */
  label?: string
  /**
   * Description of the field
   */
  description?: string
}

export function FormTextField({ label, name, description, ...rest }: FormTextFieldProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem className="flex flex-col gap-2 space-y-0">
          {label && <FormLabel>{label}</FormLabel>}
          {description && <FormDescription>{description}</FormDescription>}
          <ErrorMessage
            name={name}
            errors={errors}
            render={({ message }) => (
              <Typography variant="sm/regular" className="peer/error order-2 text-red-600">
                {message}
              </Typography>
            )}
          />
          <FormControl>
            <Input
              {...rest}
              {...field}
              className="order-1 text-lg peer-[]/error:border-red-600 peer-[]/error:text-red-600"
            />
          </FormControl>
        </FormItem>
      )}
    />
  )
}
