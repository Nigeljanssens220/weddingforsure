'use client'

import { Input } from '@/app/_components/ui/input'
import { Switch } from '@/app/_components/ui/switch'
import { Textarea } from '@/app/_components/ui/textarea'
import Typography from '@/app/_components/ui/typography'
import { SchemaCreateRSVP, schemaCreateRSVP } from '@/schemas/rsvp'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

export const dynamic = 'force-static'

const RSVP = () => {
  const [hasPlusOne, setHasPlusOne] = useState(false)
  const [parent, enableAnimations] = useAutoAnimate<HTMLFormElement>()

  const { register, control } = useForm<SchemaCreateRSVP>({
    mode: 'onTouched',
    resolver: zodResolver(schemaCreateRSVP),
    defaultValues: {
      person: [
        {
          name: '',
          email: '',
          dietaryWishes: '',
        },
      ],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: control,
    name: 'person',
  })

  const handleAddOrRemovePlusOne = () => {
    fields.length > 1 ? remove(-1) : append({ name: '', email: '', dietaryWishes: '' })
  }

  return (
    <div className="mt-16 flex h-screen w-full flex-col items-center justify-center px-3 md:mt-0">
      <div className="flex flex-col gap-4">
        <Typography className="max-w-lg text-balance text-4xl md:text-7xl" as="h1">
          Come dance with us, baby!
        </Typography>
        {/* <div className="min-h-80 bg-[url('/images/background-photo.png')] bg-cover bg-bottom bg-no-repeat" /> */}
        <form ref={parent} action="" className="flex w-full max-w-xl flex-col gap-8 bg-[#E7E2D4] p-8">
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
              <Input placeholder={index > 0 ? 'Name two' : 'Name'} {...register(`person.${index}.name` as const)} />
              <Input
                type="email"
                {...register(`person.${index}.email` as const)}
                placeholder="Please enter your email address so we can spam you"
              />
              <Textarea
                {...register(`person.${index}.dietaryWishes` as const)}
                placeholder="Enter any dietary wishes here"
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
        </form>
      </div>
    </div>
  )
}

export default RSVP
