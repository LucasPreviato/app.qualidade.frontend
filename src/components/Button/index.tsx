import { Popover } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'

interface ButtonProps {
  title: string
  src: string
  variant?: boolean
  alt?: string
  path: string
}

export function Button({ src, title, variant, alt, path }: ButtonProps) {
  return (
    <Link href={path} className="w-full">
      <a
        className={`${
          variant ? 'bg-teal-500' : 'bg-zinc-600'
        } w-12 h-12 rounded-full px-3 group-hover:w-full duration-500 ease-linear flex items-center justify-start`}
      >
        <Image src={src} alt={alt} className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          {title}
        </span>
      </a>
    </Link>
  )
}
