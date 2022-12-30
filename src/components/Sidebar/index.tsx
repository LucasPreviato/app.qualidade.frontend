import {
  Button,
  Divider,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
} from '@chakra-ui/react'
import Link from 'next/link'
import { menu } from '../../constants/sidebarMenu'

export function Sidebar() {
  return (
    <VStack alignItems="stretch" p={4} spacing={4}>
      <Button colorScheme="blue" size="lg">
        <Link href="/">SunTech</Link>
      </Button>

      <Divider />

      <VStack alignItems="stretch">
        {menu.map((menu) => (
          <Menu key={menu.title} placement="bottom-start">
            <MenuButton as={Button}>{menu.title}</MenuButton>
            <MenuList>
              {menu.menuItems.map((item) => (
                <MenuItem key={item.title} justifyContent="center">
                  <Link href={item.path}>{item.title}</Link>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ))}
      </VStack>
    </VStack>
  )
}
