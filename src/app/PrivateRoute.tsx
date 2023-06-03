'use client'

import { useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'

import { APP_ROUTES } from '@/constants/app-routes'
import { checkUserAuthenticated } from '@/functions/check-user-is-authenticated'

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { push } = useRouter()
  const isAuthenticated = checkUserAuthenticated()

  useEffect(() => {
    if (!isAuthenticated) {
      push(APP_ROUTES.public.login)
    }
  }, [isAuthenticated, push])

  return (
    <>
      {!isAuthenticated && null}
      {isAuthenticated && children}
    </>
  )
}

export default PrivateRoute
