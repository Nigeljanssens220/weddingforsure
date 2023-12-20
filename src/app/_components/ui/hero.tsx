import { cn } from "@/lib/utils"
import { type VariantProps, cva } from "class-variance-authority"
import React, { forwardRef } from "react"

export const largeHeadingStyles = cva("text-7xl", {
	variants: {
		variant: {
			heavy: "font-bold",
			light: "font-thin",
		},
	},
})

type LargeHeadingStyles = VariantProps<typeof largeHeadingStyles>
export type LargeHeadingVariant = Exclude<
	LargeHeadingStyles["variant"],
	null | undefined
>

export interface LargeHeadingProps extends React.HTMLProps<HTMLHeadingElement> {
	/**
	 * This prop is of type string and is used to determine the text appearance of the component. Heavy or light.
	 * @required
	 */
	variant: Exclude<LargeHeadingStyles["variant"], null | undefined>
	/**
	 * Additional styles for the component.
	 */
	className?: string
	/**
	 * Children elements of the component.
	 */
	children: React.ReactNode
}

const Hero = forwardRef<HTMLHeadingElement, LargeHeadingProps>(
	({ variant, className = "", children, ...rest }: LargeHeadingProps, ref) => {
		return (
			<h1
				{...rest}
				ref={ref}
				className={cn(className, largeHeadingStyles({ variant }))}
			>
				{children}
			</h1>
		)
	},
)

Hero.displayName = "LargeHeading"
export default Hero
