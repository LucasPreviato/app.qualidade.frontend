import { Tab } from '@headlessui/react'
import { ReactNode } from 'react'

interface ModalTabsProps {
  categories: ReactNode
  content: ReactNode
}

export function ModalTabs({ categories, content }: ModalTabsProps) {
  return (
    <div className="w-full px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="gap-1 flex space-x-1 rounded-xl bg-blue-900/20 p-1 overflow-x-auto scrollbar-none">
          {categories}
        </Tab.List>
        <Tab.Panels className="mt-2">{content}</Tab.Panels>
      </Tab.Group>
    </div>
  )
}
