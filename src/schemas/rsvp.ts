import { z } from 'zod'

export const schemaCreateRSVP = z.object({
  person: z.array(
    z.object({
      name: z.string().min(1).max(100),
      email: z.string().email(),
      dietaryWishes: z.string().max(256).optional(),
    }),
  ),
})

export type SchemaCreateRSVP = z.infer<typeof schemaCreateRSVP>
