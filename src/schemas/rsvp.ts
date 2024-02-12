import { menuOptions, rsvpOptions } from '@/lib/rsvp'
import { z } from 'zod'

export const schemaCreateRSVP = z.object({
  person: z.array(
    z.object({
      name: z
        .string()
        .min(1, { message: 'Vul je volledige naam in' })
        .max(100, { message: 'Je naam is te lang, fucked up' }),
      email: z.string().email({ message: 'Vul een geldig email adres in' }),
      dietaryRestrictions: z.string().max(256, { message: 'Mag maximaal 256 karakters bevatten' }).optional(),
      menuOptions: z.enum(menuOptions, { required_error: 'Kies een optie' }),
      rsvpOptions: z.enum(rsvpOptions),
      rsvpOptionsOther: z.string().max(256, { message: 'Mag maximaal 256 karakters bevatten' }).optional(),
    }),
  ),
})

export type SchemaCreateRSVP = z.infer<typeof schemaCreateRSVP>
