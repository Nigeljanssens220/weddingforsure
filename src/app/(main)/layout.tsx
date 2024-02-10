import Navbar from '@/app/_components/navbar/navbar'

export default function PageLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>
        {children}
        {modal}
      </main>
    </>
  )
}
