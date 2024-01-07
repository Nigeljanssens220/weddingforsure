import { routes } from '@/lib/routes'
import Link from 'next/link'
import Typography from '../ui/typography'
import { Menu } from './menu'

export default function Navbar() {
  return (
    <header className="fixed top-0 z-10 flex w-screen justify-end px-2 py-4 md:justify-start">
      <Menu className="md:hidden" />
      <nav className="hidden md:block">
        <ul className="flex items-center gap-4">
          {routes.map(({ href, label }) => (
            <li key={label}>
              <Link href={href}>
                <Typography as="span" className="p-2">
                  {label}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
