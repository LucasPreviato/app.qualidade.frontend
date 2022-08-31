import { ReactNode } from 'react'

interface TableTbodyProps {
  children: ReactNode
}

export function TableTbody({ children }: TableTbodyProps) {
  return (
    <tbody className="flex flex-col py-2 overflow-y-auto rounded-b bg-base-4 scrollbar-none">
      {children}
    </tbody>
  )
}
