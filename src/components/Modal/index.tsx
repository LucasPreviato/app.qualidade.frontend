import { Dialog, Transition } from '@headlessui/react'
import { ModalTabs } from '../ModalTabs'

interface ModalProps {
  onChangeModalState: () => void
  isOpen: boolean
}

export function Modal({ onChangeModalState, isOpen }: ModalProps) {
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
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-[95vw] h-[90vh] transform overflow-hidden rounded-2xl bg-white p-1 text-left align-middle shadow-xl transition-all">
                <ModalTabs />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
