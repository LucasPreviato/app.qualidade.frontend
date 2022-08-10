import { ReactNode } from 'react'

interface TableTbodyProps {
  children: ReactNode
}

export function TableTbody({ children }: TableTbodyProps) {
  return (
    <tbody className="w-full flex flex-col max-h-40 overflow-y-auto scrollbar-none border-dark-600 border-collapse border-x-2 border-b-2 rounded-b">
      {children}
    </tbody>
  )
}
