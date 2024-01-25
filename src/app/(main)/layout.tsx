import Navbar from '@/app/_components/navbar/navbar'

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-dvh">{children}</main>
    </>
  )
}
