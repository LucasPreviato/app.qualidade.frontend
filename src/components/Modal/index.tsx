import {
  Modal as ChakraModal,
  ModalProps as ChakraModalProps,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalBody,
} from '@chakra-ui/react'

type ModalProps = ChakraModalProps & {
  title: string
}

export function Modal({ title, children, ...rest }: ModalProps) {
  return (
    <ChakraModal size="xl" isCentered {...rest}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ChakraModal>
  )
}
