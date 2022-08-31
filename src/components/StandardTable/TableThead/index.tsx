import { ReactNode } from 'react'

interface TableTheadProps {
  children: ReactNode
}

export function TableThead({ children }: TableTheadProps) {
  return (
    <thead className="block w-full">
      <tr className="flex w-full py-2 rounded-t bg-brand-9 text-base-12">
        {children}
      </tr>
    </thead>
  )
}
