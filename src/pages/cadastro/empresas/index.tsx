import type { NextPage } from 'next'
import { CardButton } from '../../../components/CardButton'
import { SelectionPanel } from '../../../components/SelectionPanel'

const CardButtonSelection = [
  {
    title: 'Unidades',
    icon: '/assets/img/sidebar/iconRH.svg',
    path: '/cadastro/empresas/unidades',
  },
  {
    title: 'Setores',
    icon: '/assets/img/sidebar/iconRH.svg',
    path: '/cadastro/empresas/setores',
  },
  {
    title: 'Cargos e funções',
    icon: '/assets/img/sidebar/iconRH.svg',
    path: '/cadastro/empresas/cargos-e-funcoes',
  },
]

const Empresas: NextPage = () => {
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

export default Empresas
