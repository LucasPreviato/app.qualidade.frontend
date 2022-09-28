import { GiSpyglass as LogIcon } from 'react-icons/gi'
import { RiDeleteBin5Line as DeleteIcon } from 'react-icons/ri'
import { MdAdd as AddIcon } from 'react-icons/md'
import { Modal } from '../../../../components/Modal'
import { NextPage } from 'next'
import UnitForm from './UnitForm'
import { useModal } from '../../../../contexts/ModalContext'
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react'

const heading = [
  {
    title: 'ID',
  },
  {
    title: 'Nome',
  },
  {
    title: 'E-mail',
  },
  {
    title: 'Responsável',
  },
  {
    title: 'Telefone',
  },
  {
    title: 'Status',
  },
]

const Unidades: NextPage = () => {
  const { onOpen } = useModal()

  return (
    <VStack
      flex="1"
      p="6"
      spacing={8}
      align="flex-start"
      justify="space-between"
    >
      <TableContainer w="full">
        <Table variant="striped" colorScheme="teal" size="lg">
          <Thead>
            {heading.map((head) => (
              <Th key={head.title}>{head.title}</Th>
            ))}
          </Thead>
          <Tbody>
            <Tr>
              <Td>jasgjasah</Td>
              <Td>Testeasasassasasasassassaasasasas</Td>
              <Td>Testeasasassasasasassassaasasasas</Td>
              <Td>N/A</Td>
              <Td>N/A</Td>
              <Td>Teste</Td>
            </Tr>
            <Tr>
              <Td>Teste</Td>
              <Td>Teste</Td>
              <Td>Teste</Td>
              <Td>N/A</Td>
              <Td>N/A</Td>
              <Td>Teste</Td>
            </Tr>
            <Tr>
              <Td>Teste</Td>
              <Td>Teste</Td>
              <Td>Teste</Td>
              <Td>N/A</Td>
              <Td>N/A</Td>
              <Td>Teste</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      <Flex justify="space-between" w="full">
        <HStack>
          <Button leftIcon={<Icon as={LogIcon} fontSize="3xl" />} size="lg">
            Log
          </Button>

          <Button
            leftIcon={<Icon as={DeleteIcon} fontSize="3xl" />}
            size="lg"
            colorScheme="red"
          >
            Deletar
          </Button>
        </HStack>

        <Box>
          <Button
            leftIcon={<Icon as={AddIcon} fontSize="3xl" />}
            size="lg"
            colorScheme="teal"
            onClick={onOpen}
          >
            Deletar
          </Button>
        </Box>
      </Flex>

      <Modal>
        <UnitForm />
      </Modal>
    </VStack>
  )
}

export default Unidades
