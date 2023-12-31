import Navbar from '@/app/_components/navbar/navbar'
import { Footer } from '../_components/footer'

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}
