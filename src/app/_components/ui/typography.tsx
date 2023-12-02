/* eslint-disable react/display-name */
import { cn } from '@/lib/utils'
import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from '@/types'
import { cva, type VariantProps } from 'class-variance-authority'
import React, { forwardRef } from 'react'

export const typographyStyles = cva('', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    weight: {
      italic: 'italic',
      regular: 'font-normal',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
})

export type TypographyStylesProps = VariantProps<typeof typographyStyles>
export type TypographyVariant = `${NonNullable<TypographyStylesProps['size']>}/${NonNullable<
  TypographyStylesProps['weight']
>}`

type Props = {
  /**
   * This prop is of type string and is used to determine the text appearance of the component. It has a default value of medium/normal.
   * The format of this string should be size/weight, where size is one of sm, md, lg or xl and weight is one of italic, regular or bold.
   * For example, to set the size to medium and the weight to bold, the variant prop would be set to "md/bold".
   * @default "md/regular"
   */
  variant?: TypographyVariant
  /**
   * Additional styles for the component.
   */
  className?: string
  /**
   * Children elements of the component.
   */
  children: React.ReactNode
}

export type TypographyProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, Props>
export type TypographyComponent = <C extends React.ElementType = 'div'>(
  props: TypographyProps<C>,
) => React.ReactElement | null

// @ts-expect-error - Typings are not correct
const Typography: TypographyComponent = forwardRef(
  <Tag extends React.ElementType = 'div'>(
    { as, className, children, variant = 'md/regular', ...rest }: TypographyProps<Tag>,
    ref?: PolymorphicRef<Tag>,
  ) => {
    const [size, weight] = variant.split('/') as [TypographyStylesProps['size'], TypographyStylesProps['weight']]
    const Component = as ?? 'div'

    return (
      <Component className={cn(typographyStyles({ size, weight }), className)} ref={ref} {...rest}>
        {children}
      </Component>
    )
  },
)

export default Typography
