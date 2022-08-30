import { Popover } from '@headlessui/react'
import { ReactNode } from 'react'

interface SelectionPanelProps {
  children: ReactNode
}

export function SelectionPanel({ children }: SelectionPanelProps) {
  return (
    <Popover className="grid flex-1 grid-cols-6 gap-4 p-6 rounded w bg-dark-600 place-items-center place-content-start">
      {children}
    </Popover>
  )
}
