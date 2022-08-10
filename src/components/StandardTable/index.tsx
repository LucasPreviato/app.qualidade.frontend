import { ReactNode } from 'react'
import { TableTbody } from './TableTbody'
import { TableThead } from './TableThead'

interface StandardTableProps {
  theadChildren: ReactNode
  tbodyChildren: ReactNode
}

export function StandardTable({
  theadChildren,
  tbodyChildren,
}: StandardTableProps) {
  return (
    <table className="w-full block text-center">
      <TableThead>{theadChildren}</TableThead>
      <TableTbody>{tbodyChildren}</TableTbody>
    </table>
  )
}
