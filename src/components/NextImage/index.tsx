import Image from 'next/image'

interface NextImage {
  source: string
  alt?: string
}

export function NextImage({ source, alt }: NextImage) {
  return (
    <div className="relative w-6 h-6">
      <Image src={source} alt={alt} layout="fixed" height={24} width={24} />
    </div>
  )
}
