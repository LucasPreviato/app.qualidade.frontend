import { Image, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

interface CardButtonProps {
  icon: string
  title: string
  path: string
  alt?: string
}

export function CardButton({ icon, title, path, alt }: CardButtonProps) {
  return (
    <NextLink href={path} passHref>
      <Link
        bg="gray.700"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        gap={2}
        p="1"
        h={24}
        w={24}
        rounded="md"
      >
        <Image src={icon} alt={alt} w={10} h={10} />
        <Text>{title}</Text>
      </Link>
    </NextLink>
  )
}
