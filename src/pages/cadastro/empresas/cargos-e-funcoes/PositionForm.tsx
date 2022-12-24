import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useModal } from '../../../../contexts/ModalContext'
import { Button, Input, SimpleGrid } from '@chakra-ui/react'
import {
  GetUnitsDocument,
  useCreatePositionMutation,
} from '../../../../graphql/generated'
import { GetStaticProps } from 'next'
import { client, ssrCache } from '../../../../lib/urql'

const PositionFormSchema = z.object({
  name: z.string().min(1, 'O Nome é obrigatório'),
  positionCategoryId: z.number().int(),
  version: z.number().int(),
  revisionAt: z.date(),
  alterations: z.string().min(1, 'Descreva as alterações '),
})

type PositionFormProps = z.infer<typeof PositionFormSchema>

export function PositionForm() {
  const { onClose } = useModal()
  const [{}, createPosition] = useCreatePositionMutation()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<PositionFormProps>({
    resolver: zodResolver(PositionFormSchema),
  })

  async function handleCollaboratorForm({
    name,
    alterations,
    positionCategoryId,
    version,
    revisionAt,
  }: PositionFormProps) {
    await createPosition({
      createPositionInput: {
        name,
        alterations,
        positionCategoryId,
        revisionAt,
        version,
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
        type="number"
        placeholder="Nível"
        {...register('positionCategoryId', { valueAsNumber: true })}
      />

      <Input
        colorScheme="teal"
        type="number"
        placeholder="Versão"
        {...register('version', { valueAsNumber: true })}
      />

      <Input
        colorScheme="teal"
        type="text"
        placeholder="Alterações"
        {...register('alterations')}
      />

      <Input
        colorScheme="teal"
        type="date"
        placeholder="Data de revisão"
        {...register('revisionAt')}
      />

      <Button type="submit" disabled={isSubmitting} colorScheme="teal">
        Salvar
      </Button>
    </SimpleGrid>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  await client.query(GetUnitsDocument, {}).toPromise()

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  }
}
