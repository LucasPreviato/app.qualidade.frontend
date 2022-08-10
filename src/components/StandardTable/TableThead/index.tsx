import { ReactNode } from 'react'

interface TableTheadProps {
  children: ReactNode
}

export function TableThead({ children }: TableTheadProps) {
  return (
    <thead className="w-full block">
      <tr className="w-full rounded-t bg-teal-500 flex py-2">{children}</tr>
    </thead>
  )
}
