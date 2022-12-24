import { GiSpyglass as LogIcon } from 'react-icons/gi'
import { RiDeleteBin5Line as DeleteIcon } from 'react-icons/ri'
import { MdAdd as AddIcon } from 'react-icons/md'
import { Modal } from '../../../../components/Modal'
import { GetStaticProps, NextPage } from 'next'
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
import {
  useGetUnitsQuery,
  GetUnitsDocument,
} from '../../../../graphql/generated'
import { client, ssrCache } from '../../../../lib/urql'
import { heading } from '../../../../constants/unitsTableHead'

const Unidades: NextPage = () => {
  const { onOpen, isOpen, onClose } = useModal()

  const [{ data }] = useGetUnitsQuery()

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
            {data?.units.map((unit) => (
              <Tr key={unit.id}>
                <Td>{unit.name}</Td>
                <Td>{unit.email}</Td>
                <Td>{unit.phone}</Td>
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
        <UnitForm />
      </Modal>
    </VStack>
  )
}

export default Unidades

export const getStaticProps: GetStaticProps = async () => {
  await client.query(GetUnitsDocument, {}).toPromise()

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  }
}
