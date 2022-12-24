import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  VStack,
  Link,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { menu } from '../../constants/sidebarMenu'
import { Logo } from '../Logo'
import { NextImage } from '../NextImage'

export function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { events } = useRouter()

  useEffect(() => {
    events.on('routeChangeComplete', () => {
      onClose()
    })
  }, [events, onClose])

  return (
    <VStack
      pos="absolute"
      inset="0"
      maxW={200}
      p="6"
      align="center"
      spacing="4"
      bg="gray.700"
    >
      <Logo />
      {menu.map((button) => (
        <Button
          key={button.title}
          onClick={onOpen}
          size="lg"
          shadow="2xl"
          leftIcon={<NextImage source={button.imgSource} />}
        >
          {button.title}
        </Button>
      ))}
      <Drawer size="xs" isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu de cadastro</DrawerHeader>

          <DrawerBody
            overflow="scroll"
            sx={{
              '::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          >
            <VStack alignItems="flex-start">
              {menu.map((items) => (
                <NextLink key={items.title} href="/" passHref>
                  <Link fontSize="lg" color="gray.100">
                    {items.title}
                  </Link>
                </NextLink>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </VStack>
  )
}
