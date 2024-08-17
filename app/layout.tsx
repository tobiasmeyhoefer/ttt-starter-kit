import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Toaster } from "@/components/ui/toaster"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'TTT Starter-Kit',
  description: 'Starter-Kit with Next.js / Supabase / TailwindCSS / ShadCn',
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn(
        'min-h-screen bg-background font-sans antialiased',
        inter.variable
      )}
    >
      <body
        className={cn(
          "flex flex-col items-center min-h-svh bg-background font-inter text-foreground antialiased overflow-hidden",
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="flex h-[120px] w-full max-w-[1200px] items-center justify-center">
            <Navbar />
          </header>
          <main className="min-h-[calc(100vh-200px)] w-full max-w-[1200px]">{children}</main>
          <Toaster />
          <footer className="flex h-[80px] w-full max-w-[1200px] items-center justify-end gap-4 p-4 text-sm">
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
