/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { schemaCreateRSVP } from '@/schemas/rsvp'
import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc'

export const rsvpRouter = createTRPCRouter({
  // getAll: publicProcedure.query(async ({ ctx }) => {
  //   return await ctx.db.query.rsvps.findMany()
  // }),
  create: protectedProcedure.input(schemaCreateRSVP).mutation(async ({ ctx, input }) => {
    const isDuo = input.person.length > 1

    const personA = {
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      nameA: input.person?.at(0)?.name!,
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      emailA: input.person?.at(0)?.email!,
      dietaryRestrictionsA: input.person?.at(0)?.dietaryRestrictions,
    }

    const personB = isDuo && {
      nameB: input.person?.at(1)?.name,
      emailB: input.person?.at(1)?.email,
      dietaryRestrictionsB: input.person?.at(1)?.dietaryRestrictions,
    }
    try {
      return await ctx.db.rsvp.create({
        data: {
          ...personA,
          ...(isDuo && personB),
          rsvpOptions: input.rsvpOptions,
          // rsvpOptionsOther: input.rsvpOptionsOther,
          rsvpOptionsOther: input.rsvpOptionsOther,
        },
      })
    } catch (e) {
      console.log('ERROR', e)
    }
  }),
})
