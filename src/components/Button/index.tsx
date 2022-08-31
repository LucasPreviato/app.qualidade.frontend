import { Menu } from '@headlessui/react'
import { NextImage } from '../NextImage'

interface ButtonProps {
  buttonData: {
    title: string
    imgSource: string
    alt?: string
  }
  variant?: boolean
}

export function Button({ buttonData, variant }: ButtonProps) {
  return variant ? (
    <button
      key={buttonData.title}
      className="flex items-center w-full gap-3 p-4 transition-colors rounded-md shadow-md text-base-12 bg-brand-9 hover:bg-brand-10"
    >
      <NextImage source={buttonData.imgSource} alt={buttonData.title} />
      <span>{buttonData.title}</span>
    </button>
  ) : (
    <Menu.Button
      key={buttonData.title}
      className="flex items-center w-full gap-3 p-4 transition-colors rounded-md shadow-md text-base-12 bg-base-3 hover:bg-base-4"
    >
      <NextImage source={buttonData.imgSource} alt={buttonData.title} />
      <span>{buttonData.title}</span>
    </Menu.Button>
  )
}
