import Navbar, { Footer } from "components/Navigation"
import "styles/tailwind.css"
import localFont from "next/font/local"

export const monument = localFont({
  src: "../public/fonts/MonumentExtended/MonumentExtended-Regular.otf",
  variable: "--font-monument",
  display: "swap",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={monument.variable}>
      <body className={`py-16`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
