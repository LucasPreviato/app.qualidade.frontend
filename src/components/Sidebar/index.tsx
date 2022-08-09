import { Popover } from '@headlessui/react'

import { Button } from '../Button'

const logoImg = {
  src: '/assets/SysQuali.ico',
  title: 'SysQuali',
  path: '/',
}

const BUTTONS_INFO = [
  {
    src: '/assets/img/sidebar/iconRotina.svg',
    title: 'Rotina',
    path: '/rotina',
  },
  {
    src: '/assets/img/sidebar/iconRH.svg',
    title: 'RH',
    path: '/rh',
  },
  {
    src: '/assets/img/sidebar/iconEquipamento.svg',
    title: 'Equipamento',
    path: '/equipamentos',
  },
  {
    src: '/assets/img/sidebar/iconAuditoria.svg',
    title: 'Auditoria',
    path: '/auditorias',
  },
  {
    src: '/assets/img/sidebar/iconFornecedores.svg',
    title: 'Fornecedores',
    path: '/fornecedores',
  },

  {
    src: '/assets/img/sidebar/iconCadastro.svg',
    title: 'Cadastro',
    path: '/cadastro',
  },

  {
    src: '/assets/img/sidebar/iconRelatorios.svg',
    title: 'Relatórios',
    path: '/relatorios',
  },

  {
    src: '/assets/img/sidebar/iconIndicadores.svg',
    title: 'Indicadores',
    path: '/indicadores',
  },

  {
    src: '/assets/img/sidebar/iconDocumentos.svg',
    title: 'Documentos',
    path: '/documentos',
  },

  {
    src: '/assets/img/sidebar/iconContratos.svg',
    title: 'Contratos',
    path: '/contratos',
  },

  {
    src: '/assets/img/sidebar/iconManutencao.svg',
    title: 'Manutenção',
    path: '/manutencao',
  },

  {
    src: '/assets/img/sidebar/iconTecnicos.svg',
    title: 'Técnicos',
    path: '/tecnicos',
  },

  {
    src: '/assets/img/sidebar/iconControles.svg',
    title: 'Controles',
    path: '/controles',
  },

  {
    src: '/assets/img/sidebar/iconChamados.svg',
    title: 'Chamados',
    path: '/chamados',
  },

  {
    src: '/assets/img/sidebar/iconOutros.svg',
    title: 'Outros',
    path: '/outros',
  },

  {
    src: '/assets/img/sidebar/iconTI.svg',
    title: 'TI',
    path: '/ti',
  },

  {
    src: '/assets/img/sidebar/iconMedicos.svg',
    title: 'Médicos',
    path: '/medicos',
  },
]

export function Sidebar() {
  return (
    <Popover className="px-2 py-3 group bg-dark-700 w-16 h-screen hover:w-48 transition-all duration-500 ease-linear flex flex-col gap-4 overflow-y-scroll scrollbar-none">
      <Button ButtonPriority={logoImg} variant alt="Logo SysQuali" />

      {BUTTONS_INFO.map((button) => (
        <Button
          key={button.title}
          ButtonPriority={button}
          alt="SysQuali Logo"
        />
      ))}
    </Popover>
  )
}
