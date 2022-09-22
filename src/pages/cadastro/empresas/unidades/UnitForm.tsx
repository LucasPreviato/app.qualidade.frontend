import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { removeEmptyFields } from '../../../../utils/removeEmptyFields'
import classNames from 'classnames'
import { useModal } from '../../../../contexts/ModalContext'
import { useCreateUnitMutation } from '../../../../graphql/generated'

const UnitFormSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório!'),
  //address: z.string().nullish(),
  //district: z.string().nullish(),
  //city: z.string().nullish(),
  //cep: z.string().nullish(),
  //uf: z.string().nullish(),
  //number: z.string().nullish(),
  //complement: z.string().nullish(),
  phone: z.string(),
  email: z.string(),
})

type UnitFormProps = z.infer<typeof UnitFormSchema>

export default function UnitForm() {
  const { onClose } = useModal()
  const [createUnit] = useCreateUnitMutation()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UnitFormProps>({
    resolver: zodResolver(UnitFormSchema),
  })

  async function handleCollaboratorForm({ name, email, phone }: UnitFormProps) {
    removeEmptyFields({ name, email, phone })

    await createUnit({
      variables: {
        createUnitInput: {
          email,
          name,
          phone,
        },
      },
    })

    onClose()
  }

  return (
    <div className="flex flex-col gap-8 p-4">
      <h1>Cadastro de Unidades</h1>
      <form
        onSubmit={handleSubmit(handleCollaboratorForm)}
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
          type="email"
          placeholder="E-mail"
          {...register('email')}
          className="col-span-2 px-2 py-1 rounded"
        />

        <input
          type="number"
          placeholder="Número"
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
