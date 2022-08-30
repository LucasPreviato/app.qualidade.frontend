import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Button } from '../Button'
import { Logo } from '../Logo'
import { NavLink } from '../NavLink'

const menu = [
  {
    imgSource: '/assets/img/sidebar/iconRotina.svg',
    title: 'Rotina',
    menuItems: [
      {
        path: '/cadastro/colaboradores',
        title: 'Colaboradores',
      },
      {
        path: '/cadastro/colaboradores',
        title: 'Colaboradores',
      },
      {
        path: '/cadastro/colaboradores',
        title: 'Colaboradores',
      },
    ],
  },
  {
    imgSource: '/assets/img/sidebar/iconRH.svg',
    title: 'Rh',
    menuItems: [
      {
        path: '/rh',
        title: 'Item',
      },
    ],
  },
  {
    imgSource: '/assets/img/sidebar/iconEquipamento.svg',
    title: 'Equipamento',
    menuItems: [
      {
        path: '/equipamento',
        title: 'Item',
      },
    ],
  },
  {
    imgSource: '/assets/img/sidebar/iconAuditoria.svg',
    title: 'Auditoria',
    menuItems: [
      {
        path: '/auditoria',
        title: 'Item',
      },
    ],
  },
  {
    imgSource: '/assets/img/sidebar/iconFornecedores.svg',
    title: 'Fornecedores',
    menuItems: [
      {
        path: '/fornecedores',
        title: 'Item',
      },
    ],
  },
  {
    imgSource: '/assets/img/sidebar/iconCadastro.svg',
    title: 'Cadastro',
    menuItems: [
      {
        title: 'Colaboradores',
        path: '/cadastro/colaboradores',
      },
      {
        title: 'Empresas',
        path: '/cadastro/empresas',
      },
      {
        title: 'Classificação de tarefas',
        path: '/cadastro/classificacao-de-tarefas',
      },
      {
        title: 'Acesso ao sistema',
        path: '/cadastro/acesso-ao-sistema',
      },
      {
        title: 'Notificações de clientes',
        path: '/cadastro/notificacoes-de-clientes',
      },
      {
        title: 'Convênios',
        path: '/cadastro/convenios',
      },
      {
        title: 'Indicadores',
        path: '/cadastro/indicadores',
      },
      {
        title: 'Processos',
        path: '/cadastro/processos',
      },
      {
        title: 'Perfis de treinamento',
        path: '/cadastro/perfis-de-treinamento',
      },
      {
        title: 'Perfis de pesquisas satisfação',
        path: '/cadastro/perfis-pesquisas',
      },
      {
        title: 'Itens laboratoriais',
        path: '/cadastro/itens-laboratoriais',
      },
      {
        title: 'Agendamentos de Salas',
        path: '/cadastro/agendamentos-salas',
      },
      {
        title: 'Tipos de requisitos legais',
        path: '/cadastro/requisitos-legais',
      },
      {
        title: 'Tipos de certidões',
        path: '/cadastro/tipo-certidoes',
      },
      {
        title: 'Checklist de setores',
        path: '/cadastro/checklist-setores',
      },
      {
        title: 'Administrativo',
        path: '/cadastro/administrativo',
      },
    ],
  },
  {
    imgSource: '/assets/img/sidebar/iconRelatorios.svg',
    title: 'Relatórios',
    menuItems: [
      {
        path: '/relatórios',
        title: 'Item',
      },
    ],
  },
  {
    imgSource: '/assets/img/sidebar/iconIndicadores.svg',
    title: 'Indicadores',
    menuItems: [
      {
        path: '/indicadores',
        title: 'Item',
      },
    ],
  },
  {
    imgSource: '/assets/img/sidebar/iconDocumentos.svg',
    title: 'Documentos',
    menuItems: [
      {
        path: '/documentos',
        title: 'Item',
      },
    ],
  },
  {
    imgSource: '/assets/img/sidebar/iconContratos.svg',
    title: 'Contratos',
    menuItems: [
      {
        path: '/contratos',
        title: 'Item',
      },
    ],
  },
  {
    imgSource: '/assets/img/sidebar/iconManutencao.svg',
    title: 'Manutenção',
    menuItems: [
      {
        path: '/manutencao',
        title: 'Item',
      },
    ],
  },
  {
    imgSource: '/assets/img/sidebar/iconTecnicos.svg',
    title: 'Técnicos',
    menuItems: [
      {
        path: '/tecnicos',
        title: 'Item',
      },
    ],
  },
  {
    imgSource: '/assets/img/sidebar/iconControles.svg',
    title: 'Controles',
    menuItems: [
      {
        path: '/controles',
        title: 'Item',
      },
    ],
  },
  {
    imgSource: '/assets/img/sidebar/iconChamados.svg',
    title: 'Chamados',
    menuItems: [
      {
        path: '/chamados',
        title: 'Item',
      },
    ],
  },
  {
    imgSource: '/assets/img/sidebar/iconOutros.svg',
    title: 'Outros',
    menuItems: [
      {
        path: '/outros',
        title: 'Item',
      },
    ],
  },
  {
    imgSource: '/assets/img/sidebar/iconTI.svg',
    title: 'Ti',
    menuItems: [
      {
        path: '/ti',
        title: 'Item',
      },
    ],
  },
  {
    imgSource: '/assets/img/sidebar/iconMedicos.svg',
    title: 'Médicos',
    menuItems: [
      {
        path: '/medicos',
        title: 'Item',
      },
    ],
  },
]

export function Sidebar() {
  return (
    <div className="flex flex-col h-screen gap-4 p-4 overflow-y-scroll max-w-max bg-base-2 scrollbar-none">
      <Logo />
      {menu.map((menu) => (
        <Menu as="div" key={menu.title}>
          <Button buttonData={menu} key={menu.title} />
          <Transition
            as={Fragment}
            enter="transition-all ease-out duration-150"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="flex flex-col items-start w-full gap-2 p-3 mt-1 overflow-hidden rounded-md shadow-md bg-base-9 text-base-12 focus:outline-none">
              {menu.menuItems.map((menuItem) => (
                <Menu.Item key={menuItem.title} as="div" className="py-1">
                  <NavLink href={menuItem.path}>{menuItem.title}</NavLink>
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      ))}
    </div>
  )
}
