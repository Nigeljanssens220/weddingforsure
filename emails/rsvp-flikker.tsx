import { Body, Container, Head, Heading, Html, Preview, Text } from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

interface Props {
  username: string[]
}

export const RSVPFlikker = ({ username }: Props) => {
  const hasPlusOne = username.length > 1

  const headingText = hasPlusOne ? (
    <>
      <strong>Geweldig</strong> dat jullie er bij zijn!
    </>
  ) : (
    <>
      <strong>Geweldig</strong> dat je er bij bent!
    </>
  )

  return (
    <Html>
      <Head />
      <Preview>Bedankt voor het RSPVen</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px]  max-w-[465px] rounded border border-solid border-black p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              {headingText}
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Hi {hasPlusOne ? username.join(' & ') : username}!
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Wij zijn super blij dat jullie erbij kunnen zijn op onze grote dag! Hieronder vinden jullie alle
              informatie die jullie nodig hebben om er een onvergetelijke dag van te maken.
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Mochten jullie nog vragen hebben, neem gerust even contact op met ons of de{' '}
              <strong>ceremoniemeester</strong>. Dit is handig als je bijvoorbeeld toch wat aan je RSVP wilt aanpassen,
              of plots niet meer kunt komen.
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">Toedels!</Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Shinta & Nigel <br />
              Team The Nishi Wedding
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

RSVPFlikker.PreviewProps = {
  username: ['Shinta Roos', 'Nigel Janssens'],
} satisfies Props

export default RSVPFlikker
