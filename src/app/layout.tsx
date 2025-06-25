import { Inter, Roboto_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import MarqueeText from '@/components/marquee-text'
import './globals.css'
import type { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://miteshtrivedi.com'),
  title: 'Mitesh Trivedi - Software Engineer',
  description: 'Personal website and blog of Mitesh Trivedi, a software engineer specializing in software architecture and design.',
  keywords: ['software engineer', 'software architecture', 'system design', 'blog', 'Mitesh Trivedi'],
  authors: [{ name: 'Mitesh Trivedi' }],
  openGraph: {
    title: 'Mitesh Trivedi - Software Engineer',
    description: 'Personal website and blog of Mitesh Trivedi, a software engineer specializing in software architecture and design.',
    url: 'https://miteshtrivedi.com',
    siteName: 'Mitesh Trivedi',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/profile.jpg',
        width: 400,
        height: 400,
        alt: 'Mitesh Trivedi',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${robotoMono.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <MarqueeText />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex-1 mt-[2.5rem] sm:mt-[2.75rem]">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 