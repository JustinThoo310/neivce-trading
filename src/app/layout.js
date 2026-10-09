import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'NEIVCE Trading PLT',
  description: 'IT‑service provider in Kajang, Selangor',
}

export default function RootLayout({ children }) {
  const navWrap = {
    backgroundColor: '#1e293b',
    color: 'white',
    padding: '16px 0'
  }
  const navInner = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    gap: '24px'
  }
  const navLink = {
    color: 'white',
    textDecoration: 'none'
  }
  const mainWrap = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '32px 24px'
  }

  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>
        <nav style={navWrap}>
          <div style={navInner}>
            <Link href="/" style={navLink}>Home</Link>
            <Link href="/about" style={navLink}>About</Link>
            <Link href="/services" style={navLink}>Services</Link>
            <Link href="/contact" style={navLink}>Contact</Link>
          </div>
        </nav>
        <main style={mainWrap}>
          {children}
        </main>
      </body>
    </html>
  )
}