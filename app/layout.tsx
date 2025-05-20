import '../globals.css' 
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background">
        <main>{children}</main>
      </body>
    </html>
  )
}
