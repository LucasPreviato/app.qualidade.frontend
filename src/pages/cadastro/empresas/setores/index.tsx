import { GiSpyglass as LogIcon } from 'react-icons/gi'
import { RiDeleteBin5Line as DeleteIcon } from 'react-icons/ri'
import { MdAdd as AddIcon } from 'react-icons/md'
import { ModalButton } from '../../../../components/ModalButton'
import { StandardTable } from '../../../../components/StandardTable'
import { Modal } from '../../../../components/Modal'
import { NextPage } from 'next'
import { TableTbody } from '../../../../components/StandardTable/TableTbody'
import { TableThead } from '../../../../components/StandardTable/TableThead'
import { useModal } from '../../../../contexts/ModalContext'
import { useGetDepartmentsQuery } from '../../../../graphql/generated'
import SectorForm from './SectorForm'

const heading = [
  {
    title: 'ID',
  },
  {
    title: 'Nome',
  },
  {
    title: 'Sigla',
  },
  {
    title: 'E-mail',
  },
  {
    title: 'Telefone',
  },
  {
    title: 'Unidade',
  },
]

const Setores: NextPage = () => {
  const { onOpen } = useModal()
  // const { data: { unitsData } } = useUnitsQuery()
  const { data: departmentsData } = useGetDepartmentsQuery()

  console.log(departmentsData)

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
                {departmentsData?.departments.map((row) => (
                  <tr
                    key={row.id}
                    className="flex items-center h-12 transition-colors text-base-12 hover:bg-base-5"
                  >
                    <td className="flex-1">{row.id}</td>
                    <td className="flex-1">{row.name}</td>
                    <td className="flex-1">{row.initials}</td>
                    {row.email ? (
                      <td className="flex-1">{row.email}</td>
                    ) : (
                      <td className="flex-1">N/A</td>
                    )}

                    {row.phone ? (
                      <td className="flex-1">{row.phone}</td>
                    ) : (
                      <td className="flex-1">N/A</td>
                    )}

                    {row.unit.name ? (
                      <td className="flex-1">{row.unit.name}</td>
                    ) : (
                      <td className="flex-1">N/A</td>
                    )}
                  </tr>
                ))}
              </TableTbody>
            </StandardTable>
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
                onClick={onOpen}
              >
                <AddIcon size={24} />
                <span className="text-sm">Incluir</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal>
        <SectorForm />
      </Modal>
    </>
  )
}

export default Setores
