import { ReactNode } from 'react'

export default function Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="grid place-content-center min-h-screen h-full">
      {children}
      <p>Coming soon... </p>
    </div>
  )
}
