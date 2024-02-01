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
      toast.error('We konden je RSVP niet versturen. Probeer het nog eens!')
    }

    if (result.success) {
      toast.success('Je RSVP is verstuurd!')
    }
  }

  return (
    <Form {...formMethods}>
      <form
        ref={parent}
        onSubmit={formMethods.handleSubmit(handleCreateRsvp)}
        className="flex w-full max-w-xl flex-col gap-8 bg-[#E6D2C4] bg-opacity-50 p-8"
      >
        <Typography as="p" className="text-balance">
          We cannot wait to celebrate our wedding day with you. But, we need to know if you have got the moves. Please
          RSVP using the form below in order to make sure you will have a first row seat, delicious food and a spot on
          the dancefloor!
        </Typography>
        {fields.map((field, index) => (
          <div key={field.id} className="flex flex-col gap-4">
            <Typography variant="lg/semibold" as="h3" className="-mb-2">
              {index === 0 ? 'You' : 'Your plus one'}
            </Typography>
            <FormTextField name={`person.${index}.name` as const} placeholder="Name" />
            <FormTextField name={`person.${index}.email` as const} placeholder="rockyourworld@email.com" />
            <FormTextArea
              name={`person.${index}.dietaryRestrictions` as const}
              placeholder="Note any dietary restrictions here, e.g. I only eat snails."
            />
            {index === 0 && (
              <div className="flex items-center gap-2">
                <Switch id="plus-one" checked={fields.length > 1} onCheckedChange={handleAddOrRemovePlusOne} />
                <Typography as="label" htmlFor="plus-one" variant="sm/regular">
                  Plus one sexy person?
                </Typography>
              </div>
            )}
          </div>
        ))}
        <FormRadioGroup name="rsvpOptions" label="Options" items={rsvpOptions as unknown as string[]} />
        {formMethods.getValues('rsvpOptions') === rsvpOptions.at(-1) && (
          <FormTextArea
            name="rsvpOptionsOther"
            placeholder="Vul hier maar gewoon in waarom je zo moeilijk doet en op welke delen je wel/niet komt."
          />
        )}
        <Button type="submit" className="rounded-none" disabled={createRsvp.isLoading}>
          {createRsvp.isLoading ? 'Submitting...' : 'Sign me up'}
        </Button>
      </form>
      {/* <DevTool control={formMethods.control} /> */}
    </Form>
  )
}
