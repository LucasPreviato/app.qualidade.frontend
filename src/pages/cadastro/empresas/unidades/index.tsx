import { IoExitOutline as CloseIcon } from 'react-icons/io5'
import { GiSpyglass as LogIcon } from 'react-icons/gi'
import { RiDeleteBin5Line as DeleteIcon } from 'react-icons/ri'
import { MdAdd as AddIcon } from 'react-icons/md'
import { ModalButton } from '../../../../components/ModalButton'
import { StandardTable } from '../../../../components/StandardTable'
import { MyListbox } from '../../../../components/FilterLabel'
import { Modal } from '../../../../components/Modal'
import { useState } from 'react'
import { NextPage } from 'next'
import { UnitForm } from './UnitForm'
import { TableTbody } from '../../../../components/StandardTable/TableTbody'
import { TableThead } from '../../../../components/StandardTable/TableThead'

const heading = [
  {
    title: 'ID',
  },
  {
    title: 'Descrição',
  },
  {
    title: 'Status',
  },
]

const tableBody = [
  {
    id: 1,
    descricao: 'Descrição 1',
    status: 'Ativo',
  },
  {
    id: 2,
    descricao: 'Descrição 2',
    status: 'Ativo',
  },
  {
    id: 3,
    descricao: 'Descrição 3',
    status: 'Inativo',
  },
  {
    id: 4,
    descricao: 'Descrição 4',
    status: 'Ativo',
  },
]

const Unidades: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  function changeModalState() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="flex-1">
        <div className="grid h-full gap-6 p-6 ">
          <div className="rounded-md shadow-md h-max">
            <StandardTable>
              <TableThead>
                {heading.map((head) => (
                  <th key={head.title} className="flex-1">
                    {head.title}
                  </th>
                ))}
              </TableThead>
              <TableTbody>
                {tableBody.map((row) => (
                  <tr
                    key={row.id}
                    className="flex items-center h-12 transition-colors text-base-12 hover:bg-base-5"
                  >
                    <td className="flex-1">{row.id}</td>
                    <td className="flex-1">{row.descricao}</td>
                    <td className="flex-1">{row.status}</td>
                  </tr>
                ))}
              </TableTbody>
            </StandardTable>
          </div>

          <div>
            <MyListbox />
            <MyListbox />
            <MyListbox />
            <MyListbox />
          </div>

          <div className="flex justify-between px-2">
            <div className="flex gap-4">
              <ModalButton
                color="bg-rose-700"
                icon={<LogIcon size={24} />}
                title="Log"
              />

              <ModalButton
                color="bg-dark-700"
                icon={<DeleteIcon size={24} />}
                title="Deletar"
              />
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                className={`h-16 w-16 bg-teal-600  rounded flex flex-col items-center justify-center hover:brightness-[0.9] transition-colors`}
                onClick={changeModalState}
              >
                <AddIcon size={24} />
                <span className="text-sm">Incluir</span>
              </button>

              <ModalButton
                color="bg-red-600"
                icon={<CloseIcon size={24} />}
                title="Sair"
              />
            </div>
          </div>
        </div>
      </div>

      <Modal onChangeModalState={changeModalState} isOpen={isOpen}>
        <UnitForm />
      </Modal>
    </>
  )
}

export default Unidades
