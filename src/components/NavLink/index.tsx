/* eslint-disable react/display-name */
import Link from 'next/link'
import { ReactNode } from 'react'

interface NavLinkProps {
  children: ReactNode
  path: string
}

export function NavLink({ path, children }: NavLinkProps) {
  return (
    <Link href={path}>
      <a>{children}</a>
    </Link>
  )
}
