import { IoExitOutline as CloseIcon } from 'react-icons/io5'
import { GiSpyglass as LogIcon } from 'react-icons/gi'
import { RiDeleteBin5Line as DeleteIcon } from 'react-icons/ri'
import { MdAdd as AddIcon } from 'react-icons/md'
import { ModalButton } from '../../../../components/ModalButton'
import { StandardTable } from '../../../../components/StandardTable'
import { MyListbox } from '../../../../components/FilterLabel'
import { Modal } from '../../../../components/Modal'
import { useState } from 'react'

const heading = [
  {
    title: 'ID',
  },
  {
    title: 'Nome',
  },
  {
    title: 'Unidade',
  },
  {
    title: 'Cargo',
  },
  {
    title: 'Setor',
  },
  {
    title: 'Vínculo',
  },
  {
    title: 'Status',
  },
]

const tableBody = [
  {
    id: 1,
    email: 'lucas@gmail.com',
    nomeCompleto: 'Lucas Previato',
    unidade: 'Matriz',
    cargo: 'Analista de sistemas',
    setor: 'Tecnologia da informação',
    vinculo: 'CLT',
    status: 'Experiência',
  },
  {
    id: 2,
    email: 'roberto@gmail.com',
    nomeCompleto: 'Roberto Previato',
    unidade: 'Matriz',
    cargo: 'Recepcionista',
    setor: 'Recepção',
    vinculo: 'CLT',
    status: 'Ativo',
  },
  {
    id: 2,
    email: 'roberto@gmail.com',
    nomeCompleto: 'Roberto Previato',
    unidade: 'Matriz',
    cargo: 'Recepcionista',
    setor: 'Recepção',
    vinculo: 'CLT',
    status: 'Ativo',
  },
  {
    id: 2,
    email: 'roberto@gmail.com',
    nomeCompleto: 'Roberto Previato',
    unidade: 'Matriz',
    cargo: 'Recepcionista',
    setor: 'Recepção',
    vinculo: 'CLT',
    status: 'Ativo',
  },
]

export default function Colaborador() {
  const [isOpen, setIsOpen] = useState(false)

  function changeModalState() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="flex-1">
        <div className="grid h-full gap-6 p-6 ">
          <div className="rounded-md shadow-md h-max">
            <StandardTable
              tbodyChildren={tableBody.map((row) => (
                <tr
                  key={row.id}
                  className="flex items-center h-12 transition-colors text-base-12 hover:bg-base-5"
                >
                  <td className="flex-1">{row.id}</td>
                  <td className="flex-1">{row.nomeCompleto}</td>
                  <td className="flex-1">{row.unidade}</td>
                  <td className="flex-1">{row.cargo}</td>
                  <td className="flex-1">{row.setor}</td>
                  <td className="flex-1">{row.vinculo}</td>
                  <td className="flex-1">{row.status}</td>
                </tr>
              ))}
              theadChildren={heading.map((head) => (
                <th key={head.title} className="flex-1">
                  {head.title}
                </th>
              ))}
            />
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

      <Modal onChangeModalState={changeModalState} isOpen={isOpen} />
    </>
  )
}
