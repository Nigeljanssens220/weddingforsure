import { Body, Container, Head, Heading, Html, Img, Link, Preview, Section, Text } from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'
interface RSVPSuccessProps {
  username: string[]
}

export const RSVPSuccess = ({ username }: RSVPSuccessProps) => {
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
            <Section className="mx-auto my-8 w-full">
              <Img
                src="https://res.cloudinary.com/dmdewqwqf/image/upload/w_200,f_auto,q_100/v1706796977/wedding/rfun3wmzhdpfta2vw2hw.png"
                className="mx-auto"
              />
            </Section>
            <Heading className="mx-0 my-8 p-0 text-center text-[24px] font-normal text-black">{headingText}</Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Hi {hasPlusOne ? username.join(' & ') : username}!
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Wij zijn super blij dat jullie erbij kunnen zijn op onze grote dag! Voor het geval jullie dat nog niet
              hadden gedaan, je vindt op de website meer informatie, bijvoorbeeld bij de{' '}
              <Link
                href={`${process.env.VERCEL ? 'https://thenishiwedding.com' : 'http://localhost:3000'}/faq`}
                className="text-blue-600 no-underline"
              >
                FAQs
              </Link>
              .
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

RSVPSuccess.PreviewProps = {
  username: ['Shinta Roos', 'Nigel Janssens'],
} satisfies RSVPSuccessProps

export default RSVPSuccess
