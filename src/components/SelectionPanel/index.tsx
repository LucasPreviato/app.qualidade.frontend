import { SimpleGrid } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface SelectionPanelProps {
  children: ReactNode
}

export function SelectionPanel({ children }: SelectionPanelProps) {
  return (
    <SimpleGrid flex="1" spacing="10" columns={6} p="8">
      {children}
    </SimpleGrid>
  )
}
