import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { removeEmptyFields } from '../../../../utils/removeEmptyFields'
import classNames from 'classnames'
import { useModal } from '../../../../contexts/ModalContext'
import { useCreateDepartmentMutation } from '../../../../graphql/generated'

const SectorFormSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório!'),
  initials: z.string().min(2, 'Nome é obrigatório!'),
  unitId: z.number().int(),
  email: z.string(),
  phone: z.string(),
})

type SectorFormProps = z.infer<typeof SectorFormSchema>

export default function SectorForm() {
  const { onClose } = useModal()
  const [createDepartment] = useCreateDepartmentMutation()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SectorFormProps>({
    resolver: zodResolver(SectorFormSchema),
  })

  async function handleSectorForm({
    name,
    initials,
    unitId,
    email,
    phone,
  }: SectorFormProps) {
    removeEmptyFields({ name, unitId, initials })

    await createDepartment({
      variables: {
        createDepartmentInput: {
          name,
          initials,
          email,
          phone,
          unitId,
        },
      },
    })

    onClose()
  }

  return (
    <div className="flex flex-col gap-8 p-4">
      <h1>Cadastro de Departamentos</h1>
      <form
        onSubmit={handleSubmit(handleSectorForm)}
        className="grid grid-cols-2 gap-x-4 gap-y-4"
      >
        <input
          type="text"
          placeholder="Nome"
          required
          {...register('name')}
          className={classNames('col-span-2 px-2 py-1 rounded', {
            'outline-red-500': errors,
          })}
        />

        <input
          type="text"
          placeholder="Sigla"
          {...register('initials')}
          className="col-span-2 px-2 py-1 rounded"
        />

        <input
          type="number"
          placeholder="Unit"
          {...register('unitId', { valueAsNumber: true })}
          className="col-span-2 px-2 py-1 rounded"
        />

        <input
          type="email"
          placeholder="E-mail"
          {...register('email')}
          className="col-span-2 px-2 py-1 rounded"
        />

        <input
          type="text"
          placeholder="Telefone"
          {...register('phone')}
          className="col-span-2 px-2 py-1 rounded"
        />

        <button
          type="submit"
          className="col-span-2 px-5 font-bold transition-colors rounded-md text-base-12 hover:bg-brand-10 h-9 bg-brand-9 justify-self-end disabled:opacity-5 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          Salvar
        </button>
      </form>
    </div>
  )
}
