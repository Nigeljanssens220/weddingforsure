'use client'

import { sendEmail } from '@/actions/send-email'
import { menuOptions, rsvpOptions } from '@/lib/rsvp'
import { schemaCreateRSVP, type SchemaCreateRSVP } from '@/schemas/rsvp'
import { api } from '@/trpc/react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useFieldArray, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { FormRadioGroup } from './form/radio-group'
import { FormTextArea } from './form/text-area'
import { FormTextField } from './form/text-field'
import { Alert, AlertTitle } from './ui/alert'
import { Button } from './ui/button'
import { Form } from './ui/form'
import { Switch } from './ui/switch'
import Typography from './ui/typography'

export default function RsvpForm() {
  const router = useRouter()
  const [parent] = useAutoAnimate<HTMLFormElement>()
  const createRsvp = api.rsvp.create.useMutation()

  const formMethods = useForm<SchemaCreateRSVP>({
    mode: 'onSubmit',
    resolver: zodResolver(schemaCreateRSVP),
    defaultValues: {
      person: [
        {
          name: '',
          email: '',
          dietaryRestrictions: '',
          menuOptions: 'Regulier',
          rsvpOptions: rsvpOptions.at(0),
        },
      ],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: formMethods.control,
    name: 'person',
  })

  const handleAddOrRemovePlusOne = () => {
    fields.length > 1
      ? remove(-1)
      : append({
          name: '',
          email: '',
          dietaryRestrictions: '',
          menuOptions: 'Regulier',
          // biome-ignore lint/style/noNonNullAssertion: <explanation>
          rsvpOptions: rsvpOptions.at(0)!,
        })
  }

  const handleCreateRsvp = async (data: SchemaCreateRSVP) => {
    const usernames = data.person.map((person) => person.name)
    const emails = data.person.map((person) => person.email)

    await Promise.all([
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      await createRsvp.mutateAsync(data.person.at(0)!),
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      !!data.person.at(1) && (await createRsvp.mutateAsync(data.person.at(1)!)),
    ])

    const result = await sendEmail({
      username: usernames,
      email: emails,
    })

    if (result.error) {
      toast.error('We konden je RSVP niet versturen. Probeer het nog eens!', { position: 'top-right' })
    }

    router.push('/thank-you')
  }

  return (
    <Form {...formMethods}>
      <form
        ref={parent}
        onSubmit={formMethods.handleSubmit(handleCreateRsvp)}
        className="container z-30 mx-auto my-6 flex w-full max-w-xl flex-col gap-8 bg-[#F8F5EF] p-8 drop-shadow-md"
      >
        <Alert className="flex items-center justify-center">
          <AlertTitle>Reageer voor 1 juni 2024!</AlertTitle>
        </Alert>
        {fields.map((field, index) => (
          <div key={field.id} className="flex flex-col gap-6">
            <FormTextField name={`person.${index}.name` as const} placeholder="Naam" />
            <FormTextField name={`person.${index}.email` as const} type="email" placeholder="Emailadres" />
            <div className="flex items-start gap-2">
              {/* @ts-expect-error - bla */}
              <FormRadioGroup name={`person.${index}.menuOptions`} label="Diner voorkeuren" items={menuOptions} />
            </div>
            <FormTextArea
              name={`person.${index}.dietaryRestrictions` as const}
              label="Overige opmerkingen diner"
              placeholder="Geef hier aan of je allergieën hebt of andere dieetwensen."
            />
            <FormRadioGroup
              name={`person.${index}.rsvpOptions`}
              label="Selecteer een RSVP optie"
              items={rsvpOptions as unknown as string[]}
            />
            {formMethods.watch(`person.${index}.rsvpOptions`) === 'Anders' && (
              <FormTextArea
                name="rsvpOptionsOther"
                placeholder="Vul hier maar gewoon in waarom je zo moeilijk doet en op welke delen je wel/niet komt."
              />
            )}
            {index === 0 && (
              <div className="flex items-center gap-2">
                <Switch id="plus-one" checked={fields.length > 1} onCheckedChange={handleAddOrRemovePlusOne} />
                <Typography as="label" htmlFor="plus-one" variant="md/regular">
                  Plus een knapperd?
                </Typography>
              </div>
            )}
          </div>
        ))}
        <Button
          type="submit"
          className="w-fit max-w-sm self-end rounded-lg bg-[#87926A] px-8"
          disabled={formMethods.formState.isSubmitting}
        >
          {formMethods.formState.isSubmitting ? 'Laden...' : 'RSVP'}
        </Button>
      </form>
    </Form>
  )
}
