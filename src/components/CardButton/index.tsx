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
      <a className="flex flex-col items-center justify-center w-24 h-24 gap-4 p-4 text-center transition-all rounded-md shadow-md bg-base-3 hover:bg-base-4 focus:ring-2 focus:outline-none focus:ring-brand-7 focus:-translate-y-2">
        <div className="relative w-7 h-7">
          <Image src={icon} alt={alt} width={40} height={40} layout="fixed" />
        </div>
        <p className="text-xs font-medium text-dark-200">{title}</p>
      </a>
    </Link>
  )
}
