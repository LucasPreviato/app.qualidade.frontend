import { GiSpyglass as LogIcon } from 'react-icons/gi'
import { RiDeleteBin5Line as DeleteIcon } from 'react-icons/ri'
import { MdAdd as AddIcon } from 'react-icons/md'
import { NextPage } from 'next'
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
import { useModal } from '../../../../contexts/ModalContext'
import { Modal } from '../../../../components/Modal'
import { PositionForm } from './PositionForm'
import { heading } from '../../../../constants/positionsTableHead'
import { useGetPositionsQuery } from '../../../../graphql/generated'

const JobCategoriesAndOccupations: NextPage = () => {
  const { onOpen, isOpen, onClose } = useModal()

  const [{ data }] = useGetPositionsQuery()

  return (
    <VStack
      flex="1"
      p="6"
      h="100vh"
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
            {data?.positions.map((position) => (
              <Tr key={position.id}>
                <Td>{position.id}</Td>
                <Td>{position.name}</Td>
                <Td>{position.positionCategory.name}</Td>
                <Td>{position.version}</Td>
                <Td>{position.revisionAt}</Td>
              </Tr>
            ))}
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
            Incluir
          </Button>
        </Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} title="Cadastro de Unidades">
        <PositionForm />
      </Modal>
    </VStack>
  )
}

export default JobCategoriesAndOccupations
