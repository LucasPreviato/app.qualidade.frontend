import { CardButton } from '../../components/CardButton'
import { SelectionPanel } from '../../components/SelectionPanel'

const CardButtonSelection = [
  {
    title: 'Colaboradores',
    icon: '/assets/img/sidebar/iconRH.svg',
    path: '/cadastro/colaboradores',
  },
  {
    title: 'Empresas',
    icon: '/assets/img/sidebar/iconRH.svg',
    path: '/cadastro/empresas',
  },
  {
    title: 'Classificação de tarefas',
    icon: '/assets/img/sidebar/iconRH.svg',
    path: '/cadastro/classificacao-de-tarefas',
  },
  {
    title: 'Acesso ao sistema',
    icon: '/assets/img/sidebar/iconRH.svg',
    path: '/cadastro/acesso-ao-sistema',
  },
  {
    title: 'Notificações de clientes',
    icon: '/assets/img/sidebar/iconRH.svg',
    path: '/cadastro/notificacoes-de-clientes',
  },
  {
    title: 'Convênios',
    icon: '/assets/img/sidebar/iconRH.svg',
    path: '/cadastro/convenios',
  },
  {
    title: 'Indicadores',
    icon: '/assets/img/sidebar/iconRH.svg',
    path: '/cadastro/indicadores',
  },
  {
    title: 'Processos',
    icon: '/assets/img/sidebar/iconRH.svg',
    path: '/cadastro/processos',
  },
  {
    title: 'Perfis de treinamento',
    icon: '/assets/img/sidebar/iconRH.svg',
    path: '/cadastro/perfis-de-treinamento',
  },
  {
    title: 'Perfis de pesquisas satisfação',
    icon: '/assets/img/sidebar/iconRH.svg',
    path: '/cadastro/perfis-pesquisas',
  },
  {
    title: 'Itens laboratoriais',
    icon: '/assets/img/sidebar/iconRH.svg',
    path: '/cadastro/itens-laboratoriais',
  },
  {
    title: 'Agendamentos de Salas',
    icon: '/assets/img/sidebar/iconRH.svg',
    path: '/cadastro/agendamentos-salas',
  },
  {
    title: 'Tipos de requisitos legais',
    icon: '/assets/img/sidebar/iconRH.svg',
    path: '/cadastro/requisitos-legais',
  },
  {
    title: 'Tipos de certidões',
    icon: '/assets/img/sidebar/iconRH.svg',
    path: '/cadastro/tipo-certidoes',
  },
  {
    title: 'Checklist de setores',
    icon: '/assets/img/sidebar/iconRH.svg',
    path: '/cadastro/checklist-setores',
  },
  {
    title: 'Administrativo',
    icon: '/assets/img/sidebar/iconRH.svg',
    path: '/cadastro/administrativo',
  },
]

export default function Cadastro() {
  return (
    <SelectionPanel>
      {CardButtonSelection.map((card) => (
        <CardButton
          key={card.title}
          icon={card.icon}
          path={card.path}
          title={card.title}
        />
      ))}
    </SelectionPanel>
  )
}
