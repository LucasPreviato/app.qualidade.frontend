import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

type NavLinkProps = LinkProps & {
  children: ReactNode
}

export function NavLink({ href, children, ...rest }: NavLinkProps) {
  return (
    <Link href={href} {...rest}>
      <a>{children}</a>
    </Link>
  )
}
