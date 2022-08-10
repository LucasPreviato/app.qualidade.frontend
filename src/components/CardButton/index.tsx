import Image from 'next/image'
import Link from 'next/link'

interface CardButtonProps {
  icon: string
  title: string
  path: string
  alt?: string
}

export function CardButton({ icon, title, path, alt }: CardButtonProps) {
  return (
    <Link href={path}>
      <a className="h-24 w-24 p-4 bg-zinc-600 rounded-md focus:ring-2 focus:outline-none focus:ring-teal-600 hover:ring-teal-600 shadow-md focus:-translate-y-2 transition-transform flex flex-col items-center justify-center gap-4 text-center">
        <div className="relative w-7 h-7">
          <Image src={icon} alt={alt} width={40} height={40} layout="fixed" />
        </div>
        <p className="text-xs font-medium text-dark-200">{title}</p>
      </a>
    </Link>
  )
}
