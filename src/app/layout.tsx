'use client'

import type React from 'react'
import { type Metadata } from 'next'
import { ViewTransitions } from 'next-view-transitions'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Head } from '@/components/head'
import { Header } from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/sonner'
import { Toaster as ToasterProvider } from '@/components/ui/toaster'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { cn } from '@/lib/utils'
import './globals.css'

const metadata: Metadata = {
  title: 'Portfolio | HARSHHAA',
  description: 'My Personal Portfolio - Showcasing my Work and Skills.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <html
      lang='en'
      className={cn(
        'min-h-screen font-sans antialiased overflow-y-scroll',
        GeistSans.variable,
        GeistMono.variable
      )}
      style={{ backgroundColor: '#090040' }}
      suppressHydrationWarning
    >
      <Head metadata={metadata} />
      <body className='w-full' style={{ backgroundColor: '#090040' }}>
        <ViewTransitions>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
          >
            <TooltipProvider>
              <Header />
              <main className="relative flex flex-col items-center justify-center w-full min-h-screen px-3 sm:px-4 md:px-6 lg:px-8 pt-4 pb-4 sm:pb-6 md:pb-8 isolate overflow-hidden
                             before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
                             before:from-purple-400/30 before:via-violet-400/10 before:to-transparent before:blur-3xl">
                {children}
              </main>
            </TooltipProvider>
            <Toaster />
            <ToasterProvider />
          </ThemeProvider>
          <Analytics />
          <SpeedInsights />
        </ViewTransitions>
      </body>
    </html>
  )
}
