'use client'

import { useFormContext } from 'react-hook-form'

import { PopoverChefsMenu } from '../popover-chefs-menu'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'

export function FormRadioGroup({ name, label, items }: { name: string; label: string; items: string[] }) {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-3">
          {label && <FormLabel variant="xl/semibold">{label}</FormLabel>}
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value as string}
              className="flex flex-col space-y-1"
            >
              {items.map((label) => (
                <FormItem key={label} className="flex cursor-pointer items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value={label} id={label} />
                  </FormControl>
                  <FormLabel className="font-futura cursor-pointer tracking-wide" variant="md/regular" htmlFor={label}>
                    {label}
                  </FormLabel>
                  {/* @ts-expect-error - je moer */}
                  <PopoverChefsMenu menu={label} />
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
