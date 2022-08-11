import { ReactNode } from 'react'

interface ModalButtonProps {
  title: string
  icon: ReactNode
  color: string
}

export function ModalButton({ title, icon, color }: ModalButtonProps) {
  return (
    <button
      type="button"
      className={`h-16 w-16 ${color} rounded flex flex-col items-center justify-center hover:brightness-[0.9] transition-colors`}
    >
      {icon}
      <span className="text-sm">{title}</span>
    </button>
  )
}
