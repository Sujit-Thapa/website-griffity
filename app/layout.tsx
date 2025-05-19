import './globals.css' 
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ background: '#eee', padding: '1rem' }}>
          <h1>My Website</h1>
        </header>
        <main style={{ padding: '1rem' }}>{children}</main>
        <footer style={{ background: '#eee', padding: '1rem', textAlign: 'center' }}>
          &copy; 2025 My Website
        </footer>
      </body>
    </html>
  )
}
