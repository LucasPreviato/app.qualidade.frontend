import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { removeEmptyFields } from '../../../../utils/removeEmptyFields'
import { useModal } from '../../../../contexts/ModalContext'
import { Button, Input, SimpleGrid } from '@chakra-ui/react'
import { useCreateDepartmentMutation } from '../../../../graphql/generated'

const DepartmentFormSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório!'),
  email: z.string().email().optional().nullable(),
  initials: z.string().optional().nullable(),
  unitId: z.number().int().optional().nullable(),
})

type DepartmentFormProps = z.infer<typeof DepartmentFormSchema>

export default function DepartmentForm() {
  const { onClose } = useModal()

  const [{}, createDepartment] = useCreateDepartmentMutation()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<DepartmentFormProps>({
    resolver: zodResolver(DepartmentFormSchema),
  })

  async function handleDepartmentForm({
    name,
    email,
    initials,
    unitId,
  }: DepartmentFormProps) {
    removeEmptyFields({ name, email, initials, unitId })

    await createDepartment({
      createDepartmentInput: {
        name,
        email,
        initials,
        unitId,
      },
    })

    onClose()
  }

  return (
    <SimpleGrid
      as="form"
      columns={2}
      paddingBottom={8}
      spacingX={8}
      spacingY={4}
      onSubmit={handleSubmit(handleDepartmentForm)}
    >
      <Input
        colorScheme="teal"
        type="text"
        placeholder="Nome"
        required
        {...register('name')}
      />

      <Input
        colorScheme="teal"
        type="email"
        placeholder="E-mail"
        {...register('email')}
      />

      <Input
        colorScheme="teal"
        type="text"
        placeholder="Sigla"
        {...register('initials')}
      />

      <Input
        colorScheme="teal"
        type="number"
        placeholder="Unidade"
        {...register('unitId', { valueAsNumber: true })}
      />

      <Button type="submit" disabled={isSubmitting} colorScheme="teal">
        Salvar
      </Button>
    </SimpleGrid>
  )
}
