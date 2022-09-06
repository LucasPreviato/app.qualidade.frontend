import { ReactNode } from 'react'

interface StandardTableProps {
  children: ReactNode
}

export function StandardTable({ children }: StandardTableProps) {
  return <table className="block w-full text-center">{children}</table>
}
