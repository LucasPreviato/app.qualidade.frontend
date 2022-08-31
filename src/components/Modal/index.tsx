import { Dialog, Tab, Transition } from '@headlessui/react'
import { ModalTabs } from '../ModalTabs'

import { ModalTabsContent } from '../ModaTabsContent'

interface ModalProps {
  onChangeModalState: () => void
  isOpen: boolean
}

// import { data } from "../../../db.json"
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

interface Contents {
  id: string
  title: string
  date: string
  commentCount: number
  shareCount: number
}

interface Headings {
  id: string
  headTitle: string
}


export function Modal({ onChangeModalState, isOpen }: ModalProps) {
  const [content, setContent] = useState<Contents[]>([])
  const [headings, setHeadings] = useState<Headings[]>([])

  function changeModalState() {
    onChangeModalState()
  }

  useEffect(() => {
    api.get("/data").then(({ data }) => {
      setContent(data.content)
      setHeadings(data.heading)
    })
  }, [])

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
                <ModalTabs
                  categories={headings.map((heading) => (
                    <Tab
                      key={heading.id}
                      className="w-full rounded-lg p-2 h-6 flex justify-center items-center text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                    >
                      <p key={heading.id}>{heading.headTitle}</p>
                    </Tab>
                  ))}
                  content={content.map((content) => (
                    <Tab.Panel
                      key={content.id}
                      className="rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                    >
                      <ModalTabsContent post={content} key={content.id} />
                    </Tab.Panel>
                  ))}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
