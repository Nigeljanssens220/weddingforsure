import { Menu } from '../_components/navbar/menu'
import Navbar from '../_components/navbar/navbar'

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Menu />
      {children}
    </>
  )
}
