import classNames from 'classnames'
import { Menu } from '@headlessui/react'
import { NavLink } from '../NavLink'
import { NextImage } from '../NextImage'

interface ButtonProps {
  ButtonPriority: {
    title: string
    src: string
    path: string
    alt?: string
  }
  variant?: boolean
}

export function Button({ ButtonPriority, variant }: ButtonProps) {
  return (
    <NavLink path={ButtonPriority.path}>
      <Menu.Button
        key={ButtonPriority.title}
        className={classNames(
          'w-12 h-12 shadow rounded-md p-3 group-hover:w-full transition-all duration-500 ease-linear flex items-center justify-start',
          {
            'bg-teal-500': variant,
            'bg-zinc-600': !variant,
          }
        )}
      >
        <NextImage source={ButtonPriority.src} alt={ButtonPriority.title} />

        <span className="overflow-hidden text-base transition-all duration-500 ease-linear max-w-0 group-hover:max-w-xs">
          <span className="pl-2"></span>
          {ButtonPriority.title}
        </span>
      </Menu.Button>
    </NavLink>
  )
}
