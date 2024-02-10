import Typography from '@/app/_components/ui/typography'

export function SleepSection() {
  return (
    <div
      id="sleep"
      className="min-h-h-dvh flex w-screen max-w-screen-md flex-col items-center gap-10 px-10 py-[120px] text-center "
    >
      <div className="space-y-4">
        <Typography as="h3" className="text-3xl font-semibold">
          Overnachten
        </Typography>
        <Typography as="p">
          Willen jullie in de liefdesbubbel blijven met ons en dus nog niet terug naar het echte leven? Check de hotels
          in de buurt.
        </Typography>
      </div>

      <Typography as="p">
        * Helaas is het voor ons niet mogelijk om voor iedereen een hotelovernachting te verzorgen. In de RSVP staat er
        een optie om aan te geven of je geïnteresseerd bent in een hotelovernachting. Als er genoeg interesse is, zullen
        wij een hotel proberen te regelen met een groepskorting en een kamer in dezelfde sectie van het hotel!
      </Typography>
    </div>
  )
}
