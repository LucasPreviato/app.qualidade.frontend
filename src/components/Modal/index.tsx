import { Dialog, Transition } from '@headlessui/react'
import { ReactNode } from 'react'

interface ModalProps {
  onChangeModalState: () => void
  isOpen: boolean
  children: ReactNode
}

export function Modal({ onChangeModalState, isOpen, children }: ModalProps) {
  function changeModalState() {
    onChangeModalState()
  }

  return (
    <Transition appear show={isOpen}>
      <Dialog as="div" className="relative z-10" onClose={changeModalState}>
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-70" />
        </Transition.Child>
        <div className="fixed inset-0 grid overflow-y-auto place-items-center">
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="rounded-md shadow-xl bg-base-12 max-w-max max-h-max text-base-1">
              {children}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
