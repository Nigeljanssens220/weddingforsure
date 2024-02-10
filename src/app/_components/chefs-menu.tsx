import Typography from './ui/typography'

export const ChefsMenuContent = ({ menu }: { menu: 'Regulier' | 'Veggie' }) => {
  return menu === 'Regulier' ? <RegularMenu /> : <VeggieMenu />
}

const RegularMenu = () => {
  return (
    <div>
      <Typography as="h3" variant="xl/semibold">
        Regulier diner
      </Typography>
      <ul className="flex flex-col gap-6">
        <Typography as="li">
          Tonijntartaar | komkommer | ponzu | wasabi | wakame
          <br />
          Geserveerd met brood, gezouten roomboter en extra vierge olijfolie
        </Typography>
        <Typography as="li">Parelhoen | veenbes | polenta | bospeen | courgette | meloesui</Typography>
        <Typography as="li">Tartelette | vanille | bosvruchten | crème Suisse | pistache | aardbeienparfait</Typography>
      </ul>
    </div>
  )
}

const VeggieMenu = () => {
  return (
    <div>
      <Typography as="h3" variant="xl/semibold">
        Vegetarisch diner
      </Typography>
      <ul className="flex flex-col gap-4">
        <Typography as="li">
          Quinoa | komkommer | ponzu | wasabi | radijs | nori
          <br />
          Geserveerd met brood, gezouten roomboter en extra vierge olijfolie
        </Typography>
        <Typography as="li">Knolselderij | truffel | bospeen | courgette | beurre blanc</Typography>
        <Typography as="li">Tartelette | vanille | bosvruchten | crème Suisse | pistache | aardbeienparfait</Typography>
      </ul>
    </div>
  )
}
