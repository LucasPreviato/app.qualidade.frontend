import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Listbox } from '@headlessui/react'

const UnitFormSchema = z.object({
  description: z.string(),
  status: z.enum(['Active', 'Inactive']),
})

type UnitFormProps = z.infer<typeof UnitFormSchema>

export function UnitForm() {
  const { register, handleSubmit, control } = useForm<UnitFormProps>({
    resolver: zodResolver(UnitFormSchema),
  })

  function handleCollaboratorForm(data: UnitFormProps) {
    const formData = {
      id: 1,
      ...data,
    }

    console.log(formData)
  }

  return (
    <form
      onSubmit={handleSubmit(handleCollaboratorForm)}
      className="h-[300px] w-[500px] p-4 flex flex-col justify-between"
    >
      <h1>Cadastro de Unidades</h1>
      <div className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Descrição"
          required
          {...register('description')}
          className="flex-1 p-2"
        />

        <Controller
          control={control}
          name="status"
          render={({ field }) => (
            <Listbox
              value={field.value}
              onChange={field.onChange}
              as="div"
              className="flex-1 p-2"
            >
              <Listbox.Button>Unidade</Listbox.Button>
              <Listbox.Options className="relative w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <Listbox.Option value="Active">Ativo</Listbox.Option>
                <Listbox.Option value="Inactive">Inativo</Listbox.Option>
              </Listbox.Options>
            </Listbox>
          )}
        />
      </div>
      <button type="submit" className="self-end">
        Salvar
      </button>
    </form>
  )
}
