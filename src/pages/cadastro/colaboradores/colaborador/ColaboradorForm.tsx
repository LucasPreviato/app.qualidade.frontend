import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Listbox } from '@headlessui/react'

const ColaboradorFormSchema = z.object({
  name: z.string(),
  admissionDate: z.string(),
  email: z.string(),
  unit: z.enum(['']),
  sector: z.enum(['']),
  registrationPosition: z.enum(['']),
  operationalPosition: z.enum(['']),
  contractType: z.enum(['']),
  status: z.enum(['']),
  hierarchy: z.enum(['']),
})

type ColaboradorFormProps = z.infer<typeof ColaboradorFormSchema>

export default function ColaboradorForm() {
  const { register, handleSubmit, control } = useForm<ColaboradorFormProps>({
    resolver: zodResolver(ColaboradorFormSchema),
  })

  function handleCollaboratorForm(data: ColaboradorFormProps) {
    console.log(data)
  }

  return (
    <div className="p-4">
      <h1>Cadastro de colaborador</h1>
      <form onSubmit={handleSubmit(handleCollaboratorForm)}>
        <input
          type="text"
          placeholder="Nome completo"
          required
          {...register('name')}
        />
        <input
          type="email"
          placeholder="E-mail"
          required
          {...register('email')}
        />
        <Controller
          control={control}
          name="unit"
          render={({ field }) => (
            <Listbox value={field.value} onChange={field.onChange}>
              <Listbox.Button>Unidade</Listbox.Button>
              <Listbox.Options className="relative w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <Listbox.Option value="matriz">Matriz</Listbox.Option>
              </Listbox.Options>
            </Listbox>
          )}
        />
        <Controller
          control={control}
          name="sector"
          render={({ field }) => (
            <Listbox value={field.value} onChange={field.onChange}>
              <Listbox.Button>Setor</Listbox.Button>
              <Listbox.Options className="relative w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <Listbox.Option value="tecnologiaDaInformacao">
                  Tecnologia da informação
                </Listbox.Option>
              </Listbox.Options>
            </Listbox>
          )}
        />
        <Controller
          control={control}
          name="registrationPosition"
          render={({ field }) => (
            <Listbox value={field.value} onChange={field.onChange}>
              <Listbox.Button>Cargo de registro</Listbox.Button>
              <Listbox.Options className="relative w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <Listbox.Option value="recepcionista">
                  Recepcionista
                </Listbox.Option>
              </Listbox.Options>
            </Listbox>
          )}
        />
        <Controller
          control={control}
          name="operationalPosition"
          render={({ field }) => (
            <Listbox value={field.value} onChange={field.onChange}>
              <Listbox.Button>Cargo de registro</Listbox.Button>
              <Listbox.Options className="relative w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <Listbox.Option value="recepcionista">
                  Recepcionista
                </Listbox.Option>
              </Listbox.Options>
            </Listbox>
          )}
        />
        <Controller
          control={control}
          name="contractType"
          render={({ field }) => (
            <Listbox value={field.value} onChange={field.onChange}>
              <Listbox.Button>Cargo Operacional</Listbox.Button>
              <Listbox.Options className="relative w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <Listbox.Option value="clt">CLT</Listbox.Option>
              </Listbox.Options>
            </Listbox>
          )}
        />
        <Controller
          control={control}
          name="status"
          render={({ field }) => (
            <Listbox value={field.value} onChange={field.onChange}>
              <Listbox.Button>Status</Listbox.Button>
              <Listbox.Options className="relative w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <Listbox.Option value="active">Ativo</Listbox.Option>
              </Listbox.Options>
            </Listbox>
          )}
        />
        <Controller
          control={control}
          name="hierarchy"
          render={({ field }) => (
            <Listbox value={field.value} onChange={field.onChange}>
              <Listbox.Button>Hierarquia</Listbox.Button>
              <Listbox.Options className="relative w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <Listbox.Option value="diretor">diretor</Listbox.Option>
              </Listbox.Options>
            </Listbox>
          )}
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
  )
}
