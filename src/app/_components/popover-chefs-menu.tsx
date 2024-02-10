import { InfoIcon } from 'lucide-react'
import { ChefsMenuContent } from './chefs-menu'
import { Button } from './ui/button'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

export const PopoverChefsMenu = ({ menu }: { menu?: 'Regulier' | 'Veggie' }) => {
  if (menu !== 'Regulier' && menu !== 'Veggie') return null
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="-mt-0.5 flex items-center">
          <InfoIcon className="size-4" />
          <span className="sr-only">open chefs menu</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <ChefsMenuContent menu={menu} />
      </PopoverContent>
    </Popover>
  )
}
