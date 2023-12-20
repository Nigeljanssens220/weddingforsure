"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight } from "lucide-react"
import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"

const LOGIN_ERRORS_MAP = {
	CredentialsSignin: "Type nou het goede wachtwoord in, joh 🙄",
} as const

const loginSchema = z.object({
	password: z.string({
		required_error: "Voer een wachtwoord in, bastard bloody 👀",
	}),
})

type LoginSchema = z.infer<typeof loginSchema>

export function LoginForm() {
	const searchParams = useSearchParams()
	const callbackUrl = searchParams.get("callbackUrl") ?? "/"
	const error = searchParams.get("error")

	const form = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema),
	})

	const handleLogin = async ({ password }: LoginSchema) => {
		await signIn("credentials", { callbackUrl, password })
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(handleLogin)}
				className="flex w-full max-w-xs items-center space-y-8"
			>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem className="w-full">
							<div className="shadow-100 flex rounded-full border border-[#9F9F9F] bg-[#C9C9C9] px-8">
								<FormControl>
									<input
										type="password"
										{...field}
										autoComplete="current-password"
										placeholder="Ons geheime wachtwoord"
										className="focus w-full bg-transparent placeholder:text-sm placeholder:text-muted-foreground focus-visible:outline-none"
									/>
								</FormControl>
								<button type="submit" className="p-4">
									<ArrowRight className="-mr-4 h-4 w-4" />
								</button>
							</div>
							<FormMessage className="text-primary" />
							{!!error && (
								<p className={"text-sm font-medium text-primary"}>
									{LOGIN_ERRORS_MAP[error as keyof typeof LOGIN_ERRORS_MAP]}
								</p>
							)}
						</FormItem>
					)}
				/>
			</form>
		</Form>
	)
}
