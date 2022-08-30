import { Menu } from '@headlessui/react'
import { Button } from '../Button'
import { NavLink } from '../NavLink'

const BUTTONS_INFO = [
  {
    src: '/assets/img/sidebar/iconRotina.svg',
    title: 'Rotina',
    path: '/rotina',
  },
  {
    src: '/assets/img/sidebar/iconRotina.svg',
    title: 'Reus',
    path: '/rotina',
  },
]

const CardButtonSelection = [
  {
    title: 'Colaboradores',
    icon: '/assets/img/sidebar/iconRH.svg',
    path: '/cadastro/colaboradores',
  },
  {
    title: 'Colaborador',
    icon: '/assets/img/sidebar/iconRH.svg',
    path: '/cadastro/colaboradores',
  },
]

export function Sidebar() {
  return (
    <div className="flex flex-col w-16 h-screen gap-4 px-2 py-3 overflow-y-scroll transition-all duration-500 ease-linear group bg-dark-700 hover:w-48 scrollbar-none">
      {BUTTONS_INFO.map((button) => (
        <Menu as="div" key={button.title}>
          <Button ButtonPriority={button} key={button.title} />

          <Menu.Items className="relative z-10 flex flex-col justify-center w-full gap-2 px-3 py-2 mt-1 overflow-hidden text-gray-600 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {CardButtonSelection.map((item) => (
              <Menu.Item key={item.title}>
                <NavLink path={item.path}>{item.title}</NavLink>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      ))}
    </div>
  )
}
