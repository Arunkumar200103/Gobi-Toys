import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Gobi Toys - Premium Montessori Wooden Toys for Babies',
  description: "India's No.1 Montessori Toy Brand. Premium wooden toys designed for your child's development and safety.",
  generator: 'Gobi Toys',
  icons: {
    icon: '/gobi-toys-icon.png',     // your favicon
    apple: '/apple-touch-icon.png',  // apple devices icon
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}