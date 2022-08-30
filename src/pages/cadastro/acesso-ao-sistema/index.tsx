import React from 'react'
import { CardButton } from '../../../components/CardButton'
import { SelectionPanel } from '../../../components/SelectionPanel'

const CardButtonSelection = [
  {
    title: 'Colaborador',
    icon: '/assets/img/sidebar/iconRH.svg',
    path: '/cadastro/colaboradores/colaborador',
  },
  {
    title: 'Cargos',
    icon: '/assets/img/sidebar/iconRH.svg',
    path: '/cadastro/colaboradores/cargos',
  },
  {
    title: 'Categoria de cargos',
    icon: '/assets/img/sidebar/iconRH.svg',
    path: '/cadastro/colaboradores/categoria-cargos',
  },
  {
    title: 'Tipos de conselho',
    icon: '/assets/img/sidebar/iconRH.svg',
    path: '/cadastro/colaboradores/tipos-conselho',
  },
  {
    title: 'Escolaridade',
    icon: '/assets/img/sidebar/iconRH.svg',
    path: '/cadastro/colaboradores/escolaridade',
  },
  {
    title: 'Tipos de ocorrência',
    icon: '/assets/img/sidebar/iconRH.svg',
    path: '/cadastro/colaboradores/tipos-ocorrencia',
  },
  {
    title: 'Regiões',
    icon: '/assets/img/sidebar/iconRH.svg',
    path: '/cadastro/colaboradores/regioes',
  },
  {
    title: 'Tipos de acidente de trabalho',
    icon: '/assets/img/sidebar/iconRH.svg',
    path: '/cadastro/colaboradores/tipos-acidente-trabalho',
  },
  {
    title: 'Questionário diário',
    icon: '/assets/img/sidebar/iconRH.svg',
    path: '/cadastro/colaboradores/questionario-diario',
  },
  {
    title: 'Canal do colaborador',
    icon: '/assets/img/sidebar/iconRH.svg',
    path: '/cadastro/colaboradores/canal-colaborador',
  },
  {
    title: 'Ponto/Horas',
    icon: '/assets/img/sidebar/iconRH.svg',
    path: '/cadastro/colaboradores/ponto-horas',
  },
  {
    title: 'Treinamentos obrigatórios',
    icon: '/assets/img/sidebar/iconRH.svg',
    path: '/cadastro/colaboradores/treinamentos-obrigatorios',
  },
]

export default function AcessoAoSistema() {
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
