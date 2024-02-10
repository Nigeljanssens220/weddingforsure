'use client'

import { sendEmail } from '@/actions/send-email'
import { rsvpOptions } from '@/lib/rsvp'
import { schemaCreateRSVP, type SchemaCreateRSVP } from '@/schemas/rsvp'
import { api } from '@/trpc/react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useFieldArray, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { FormRadioGroup } from './form/radio-group'
import { FormTextArea } from './form/text-area'
import { FormTextField } from './form/text-field'
import { Button } from './ui/button'
import { Form } from './ui/form'
import { Switch } from './ui/switch'
import Typography from './ui/typography'
export default function RsvpForm() {
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
        },
      ],
      rsvpOptions: rsvpOptions.at(0),
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: formMethods.control,
    name: 'person',
  })

  const handleAddOrRemovePlusOne = () => {
    fields.length > 1 ? remove(-1) : append({ name: '', email: '', dietaryRestrictions: '' })
  }

  const handleCreateRsvp = async (data: SchemaCreateRSVP) => {
    // createRsvp.mutate(data)

    const usernames = data.person.map((person) => person.name)
    const emails = data.person.map((person) => person.email)

    const result = await sendEmail({
      username: usernames,
      email: emails,
    })
    if (result.error) {
      toast.error('We konden je RSVP niet versturen. Probeer het nog eens!', { position: 'top-right' })
    }

    if (result.success) {
      toast.success('Je RSVP is verstuurd!', { position: 'top-right' })
    }
  }

  return (
    <Form {...formMethods}>
      <form
        ref={parent}
        onSubmit={formMethods.handleSubmit(handleCreateRsvp)}
        className="flex w-full max-w-xl flex-col gap-8 bg-[#E6D2C4] bg-opacity-50 p-8"
      >
        <Typography as="p">
          We kunnen niet wachten om onze bruiloft met jullie te vieren! Maar, we moeten wel weten of je de moves hebt.
          Vul het formulier hieronder in om te laten weten of je komt, wat je eet en of je een plus one meeneemt. Dan
          zorgen wij voor een plekje op de eerste rij, lekker eten en een plekje op de dansvloer!
        </Typography>
        {fields.map((field, index) => (
          <div key={field.id} className="flex flex-col gap-4">
            <Typography variant="lg/semibold" as="h3" className="-mb-2">
              {index === 0 ? 'Jij' : 'Je wederhelft'}
            </Typography>
            <FormTextField name={`person.${index}.name` as const} placeholder="Name" />
            <FormTextField
              name={`person.${index}.email` as const}
              type="email"
              placeholder="thenishiwedding@marryme.com"
            />
            <FormTextArea
              name={`person.${index}.dietaryRestrictions` as const}
              placeholder="Geef hier aan of je allergieën hebt, of andere dieetwensen."
            />
            {index === 0 && (
              <div className="flex items-center gap-2">
                <Switch id="plus-one" checked={fields.length > 1} onCheckedChange={handleAddOrRemovePlusOne} />
                <Typography as="label" htmlFor="plus-one" variant="sm/regular">
                  Plus één knapperd?
                </Typography>
              </div>
            )}
          </div>
        ))}
        <FormRadioGroup name="rsvpOptions" label="Options" items={rsvpOptions as unknown as string[]} />
        {formMethods.watch('rsvpOptions') === rsvpOptions.at(-1) && (
          <FormTextArea
            name="rsvpOptionsOther"
            placeholder="Vul hier maar gewoon in waarom je zo moeilijk doet en op welke delen je wel/niet komt."
          />
        )}
        <Button type="submit" className="rounded-none" disabled={createRsvp.isLoading}>
          {formMethods.formState.isSubmitting ? 'Laden...' : 'RSVP'}
        </Button>
      </form>
      {/* <DevTool control={formMethods.control} /> */}
    </Form>
  )
}
