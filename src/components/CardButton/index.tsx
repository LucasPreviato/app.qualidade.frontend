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
      <a className="h-24 w-24 bg-zinc-600 rounded-md focus:ring-2 focus:outline-none focus:ring-teal-600 hover:ring-teal-600 shadow-md focus:-translate-y-2 transition-transform grid place-items-center place-content-center gap-2 text-center">
        <div className="relative w-10 h-10">
          <Image src={icon} alt={alt} width={40} height={40} layout="fixed" />
        </div>
        <p className="text-xs font-medium text-dark-200">{title}</p>
      </a>
    </Link>
  )
}
