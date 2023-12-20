import { env } from "@/env.mjs"
import {
	type DefaultSession,
	type NextAuthOptions,
	getServerSession,
} from "next-auth"

import CredentialsProvider from "next-auth/providers/credentials"

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
	interface Session extends DefaultSession {
		user: {
			id: string
		} & DefaultSession["user"]
	}
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
	secret: env.NEXTAUTH_SECRET,
	session: { strategy: "jwt" },
	pages: {
		signIn: "/login",
	},
	callbacks: {
		session: ({ session }) => {
			return {
				...session,
			}
		},
	},
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				password: { label: "Password", type: "password" },
			},
			authorize(credentials) {
				const password = credentials?.password
				const isValidPassword = password === env.VERY_SECRET_PASSWORD

				if (!isValidPassword) return null

				return {
					id: "",
					name: "",
					email: "",
				}
			},
		}),
	],
}

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions)
