import { Popover } from '@headlessui/react'
import { ReactNode } from 'react'

interface SelectionPanelProps {
  children: ReactNode
}

export function SelectionPanel({ children }: SelectionPanelProps) {
  return (
    <div className="w-full md:p-12 p-10">
      <Popover className="h-full bg-dark-600 rounded p-6 grid gap-4 grid-cols-6 place-items-center place-content-start">
        {children}
      </Popover>
    </div>
  )
}
