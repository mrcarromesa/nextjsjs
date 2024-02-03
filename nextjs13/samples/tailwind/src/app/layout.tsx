import '@mrcarromesa/components/dist/style.css'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ThemeContextProvider } from './contexts/Theme'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '400', '500', '700'],
  variable: '--roboto',
})

export const metadata: Metadata = {
  title: 'Components',
  description: 'Components',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  )
}
