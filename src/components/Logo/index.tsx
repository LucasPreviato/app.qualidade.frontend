import { Button } from '@chakra-ui/react'
import Link from 'next/link'
import { NextImage } from '../NextImage'

const logo = {
  title: 'QualyLab',
  imgSource: '/assets/SysQuali.ico',
}

export function Logo() {
  return (
    <Link href="/">
      <Button
        size="lg"
        colorScheme="teal"
        leftIcon={<NextImage source={logo.imgSource} />}
      >
        SunTech
      </Button>
    </Link>
  )
}
