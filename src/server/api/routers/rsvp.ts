/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { menuOptions, rsvpOptions } from '@/lib/rsvp'
import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc'
import { z } from 'zod'

const createRsvpSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  menuOptions: z.enum(menuOptions),
  dietaryRestrictions: z.string().optional(),
  rsvpOptions: z.enum(rsvpOptions),
  rsvpOptionsOther: z.string().optional(),
})

export const rsvpRouter = createTRPCRouter({
  create: protectedProcedure.input(createRsvpSchema).mutation(async ({ ctx, input }) => {
    try {
      return await ctx.db.rsvp.create({
        data: {
          ...input,
        },
      })
    } catch (e) {
      console.log('ERROR', e)
    }
  }),
})
