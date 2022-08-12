import { IoExitOutline as CloseIcon } from 'react-icons/io5'
import { GiSpyglass as LogIcon } from 'react-icons/gi'
import { MdAdd as AddIcon } from 'react-icons/md'
import { RiDeleteBin5Line as DeleteIcon } from 'react-icons/ri'
import { ModalButton } from '../../../../components/ModalButton'
import { StandardTable } from '../../../../components/StandardTable'
import { MyListbox } from '../../../../components/FilterLabel'

const heading = [
  {
    title: 'ID',
  },
  {
    title: 'Nome',
  },
  {
    title: 'Responsável',
  },
  {
    title: 'Status',
  },
]

const tableBody = [
  {
    title: [
      {
        field: '00002',
      },
      {
        field: 'Matriz',
      },
      {
        field: 'João Braúna',
      },
      {
        field: 'Ativo',
      },
    ],
  },
  {
    title: [
      {
        field: '00002',
      },
      {
        field: 'Matriz',
      },
      {
        field: 'João Braúna',
      },
      {
        field: 'Ativo',
      },
    ],
  },
  {
    title: [
      {
        field: '00002',
      },
      {
        field: 'Matriz',
      },
      {
        field: 'João Braúna',
      },
      {
        field: 'Ativo',
      },
    ],
  },
  {
    title: [
      {
        field: '00002',
      },
      {
        field: 'Matriz',
      },
      {
        field: 'João Braúna',
      },
      {
        field: 'Ativo',
      },
    ],
  },
  {
    title: [
      {
        field: '00002',
      },
      {
        field: 'Matriz',
      },
      {
        field: 'João Braúna',
      },
      {
        field: 'Ativo',
      },
    ],
  },
  {
    title: [
      {
        field: '00002',
      },
      {
        field: 'Matriz',
      },
      {
        field: 'João Braúna',
      },
      {
        field: 'Ativo',
      },
    ],
  },
]

export default function Colaborador() {
  return (
    <div className="p-6 w-full h-full">
      <div className="p-6 bg-dark-500 rounded grid gap-6">
        <div>
          <StandardTable
            tbodyChildren={tableBody.map((tr) => (
              <tr
                key={tr.title}
                className="flex hover:bg-dark-400 transition-colors"
              >
                {tr.title.map((td) => (
                  <td key={tr.title} className="flex-1 py-3">
                    {td.field}
                  </td>
                ))}
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
            <ModalButton
              color="bg-teal-600"
              icon={<AddIcon size={24} />}
              title="Incluir"
            />
            <ModalButton
              color="bg-red-600"
              icon={<CloseIcon size={24} />}
              title="Sair"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
