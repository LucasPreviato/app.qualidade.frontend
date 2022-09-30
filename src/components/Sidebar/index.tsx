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
import { Logo } from '../Logo'
import { NextImage } from '../NextImage'

const menu = [
  {
    imgSource: '/assets/img/sidebar/iconCadastro.svg',
    title: 'Cadastro',
    menuItems: [
      {
        title: 'Colaboradores',
        path: '/cadastro/colaboradores',
      },
      {
        title: 'Empresas',
        path: '/cadastro/empresas',
      },
      {
        title: 'Classificação de tarefas',
        path: '/cadastro/classificacao-de-tarefas',
      },
      {
        title: 'Acesso ao sistema',
        path: '/cadastro/acesso-ao-sistema',
      },
      {
        title: 'Notificações de clientes',
        path: '/cadastro/notificacoes-de-clientes',
      },
      {
        title: 'Convênios',
        path: '/cadastro/convenios',
      },
      {
        title: 'Indicadores',
        path: '/cadastro/indicadores',
      },
      {
        title: 'Processos',
        path: '/cadastro/processos',
      },
      {
        title: 'Perfis de treinamento',
        path: '/cadastro/perfis-de-treinamento',
      },
      {
        title: 'Perfis de pesquisas satisfação',
        path: '/cadastro/perfis-pesquisas',
      },
      {
        title: 'Itens laboratoriais',
        path: '/cadastro/itens-laboratoriais',
      },
      {
        title: 'Agendamentos de Salas',
        path: '/cadastro/agendamentos-salas',
      },
      {
        title: 'Tipos de requisitos legais',
        path: '/cadastro/requisitos-legais',
      },
      {
        title: 'Tipos de certidões',
        path: '/cadastro/tipo-certidoes',
      },
      {
        title: 'Checklist de setores',
        path: '/cadastro/checklist-setores',
      },
      {
        title: 'Administrativo',
        path: '/cadastro/administrativo',
      },
    ],
  },
]

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
      pos="sticky"
      inset="0"
      h="100vh"
      w="max-content"
      p="6"
      align="center"
      spacing="4"
      bg="gray.800"
    >
      <Logo />
      {menu.map((button) => (
        <Button
          key={button.title}
          onClick={onOpen}
          colorScheme="gray"
          size="lg"
          shadow="2xl"
          leftIcon={<NextImage source={button.imgSource} />}
        >
          {button.title}
        </Button>
      ))}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu de cadastro</DrawerHeader>

          <DrawerBody>
            {menu.map((items) => (
              <NextLink key={items.title} href="/cadastro/empresas" passHref>
                <Link fontSize="lg">Empresas</Link>
              </NextLink>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </VStack>
  )
}
