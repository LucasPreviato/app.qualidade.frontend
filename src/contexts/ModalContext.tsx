import { createContext, ReactNode, useContext, useState } from 'react'

interface ModalProviderProps {
  children: ReactNode
}

interface ModalContextData {
  isOpen?: boolean
  onClose: () => void
  onOpen: () => void
}

const ModalContext = createContext({} as ModalContextData)

export function ModalProvider({ children }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false)

  function onClose() {
    setIsOpen(false)
  }

  function onOpen() {
    setIsOpen(true)
  }

  return (
    <ModalContext.Provider value={{ onClose, isOpen, onOpen }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)

  return context
}
