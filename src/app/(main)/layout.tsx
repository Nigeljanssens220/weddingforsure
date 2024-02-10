import Navbar from '@/app/_components/navbar/navbar'
import { Menu } from '../_components/navbar/menu'

export default function PageLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <main>
      <Navbar />
      <Menu />
      {children}
      {modal}
    </main>
  )
}
