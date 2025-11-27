// app/layout.jsx
import './globals.css'            // Relative path to globals.css
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  title: 'A Square Digital Marketing',
  description: 'Digital Marketing Agency in UK',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
