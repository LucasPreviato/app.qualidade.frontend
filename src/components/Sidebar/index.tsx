import { Popover } from '@headlessui/react'

import { Button2 } from '../Button/Button2'

export function Sidebar() {
  return (
    <Popover className="px-2 py-3 group bg-dark-700 w-16 h-screen hover:w-48 transition-all duration-500 ease-linear flex flex-col overflow-y-scroll scrollbar-none">
      <Button2
        path="/"
        src="/assets/SysQuali.ico"
        title="SysQuali"
        variant
        alt="SysQuali Logo"
      />
    </Popover>
  )
}
