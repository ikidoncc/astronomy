import { Footer } from 'astronomy/components/footer'
import { Header } from 'astronomy/components/header'
import { ReactNode } from 'react'

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <>
      <Header />

      <div>{children}</div>

      <Footer />
    </>
  )
}
