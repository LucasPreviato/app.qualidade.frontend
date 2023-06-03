'use client'

import { Roboto } from 'next/font/google'
import { usePathname } from 'next/navigation'

import PrivateRoute from './PrivateRoute'

import { checkIsPublicRoute } from '@/functions/check-is-public-route'

import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isPublicPage = checkIsPublicRoute(pathname)

  console.log(isPublicPage)

  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        {isPublicPage && children}
        {!isPublicPage && <PrivateRoute>{children}</PrivateRoute>}
      </body>
    </html>
  )
}
