import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { removeEmptyFields } from '../../../../utils/removeEmptyFields'
import { useModal } from '../../../../contexts/ModalContext'
import { useCreateUnitMutation } from '../../../../graphql/generated'
import { Button, Input, SimpleGrid } from '@chakra-ui/react'

const UnitFormSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório!'),
  phone: z.string(),
  email: z.string(),

  street: z.string().nullish(),
  district: z.string().nullish(),
  city: z.string().nullish(),
  cep: z.string().nullish(),
  uf: z.string().nullish(),
  number: z.string().nullish(),
  complement: z.string().nullish(),
})

type UnitFormProps = z.infer<typeof UnitFormSchema>

export default function UnitForm() {
  const { onClose } = useModal()
  const [createUnit] = useCreateUnitMutation()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
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
    <SimpleGrid
      as="form"
      columns={2}
      paddingBottom={8}
      spacingX={8}
      spacingY={4}
      onSubmit={handleSubmit(handleCollaboratorForm)}
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
        type="number"
        placeholder="Telefone"
        {...register('phone')}
      />

      <Input
        colorScheme="teal"
        type="text"
        placeholder="Rua"
        {...register('street')}
      />

      <Input
        colorScheme="teal"
        type="text"
        placeholder="Bairro"
        {...register('district')}
      />

      <Input
        colorScheme="teal"
        type="text"
        placeholder="Cidade"
        {...register('city')}
      />
      <Input
        colorScheme="teal"
        type="text"
        placeholder="Estado"
        {...register('uf')}
      />

      <Input
        colorScheme="teal"
        type="text"
        placeholder="CEP"
        {...register('cep')}
      />

      <Input
        colorScheme="teal"
        type="text"
        placeholder="Complemento"
        {...register('complement')}
      />

      <Button type="submit" disabled={isSubmitting} colorScheme="teal">
        Salvar
      </Button>
    </SimpleGrid>
  )
}
