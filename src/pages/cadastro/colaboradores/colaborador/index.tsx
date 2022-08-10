import React from 'react'
import { StandardTable } from '../../../../components/StandardTable'

const heading = [
  {
    title: 'ID',
  },
  {
    title: 'Nome',
  },
  {
    title: 'Responsável',
  },
  {
    title: 'Status',
  },
]

const tableBody = [
  {
    title: [
      {
        field: '00002',
      },
      {
        field: 'Matriz',
      },
      {
        field: 'João Braúna',
      },
      {
        field: 'Ativo',
      },
    ],
  },
  {
    title: [
      {
        field: '00002',
      },
      {
        field: 'Matriz',
      },
      {
        field: 'João Braúna',
      },
      {
        field: 'Ativo',
      },
    ],
  },
  {
    title: [
      {
        field: '00002',
      },
      {
        field: 'Matriz',
      },
      {
        field: 'João Braúna',
      },
      {
        field: 'Ativo',
      },
    ],
  },
  {
    title: [
      {
        field: '00002',
      },
      {
        field: 'Matriz',
      },
      {
        field: 'João Braúna',
      },
      {
        field: 'Ativo',
      },
    ],
  },
  {
    title: [
      {
        field: '00002',
      },
      {
        field: 'Matriz',
      },
      {
        field: 'João Braúna',
      },
      {
        field: 'Ativo',
      },
    ],
  },
  {
    title: [
      {
        field: '00002',
      },
      {
        field: 'Matriz',
      },
      {
        field: 'João Braúna',
      },
      {
        field: 'Ativo',
      },
    ],
  },
]

export default function Colaborador() {
  return (
    <div className="p-6 w-full h-full">
      <div className="p-6 bg-dark-500 rounded">
        <StandardTable
          tbodyChildren={tableBody.map((tr) => (
            <tr
              key={tr.title}
              className="flex hover:bg-dark-400 transition-colors"
            >
              {tr.title.map((td) => (
                <td key={tr.title} className="flex-1 py-3">
                  {td.field}
                </td>
              ))}
            </tr>
          ))}
          theadChildren={heading.map((head) => (
            <th key={head.title} className="flex-1">
              {head.title}
            </th>
          ))}
        />
      </div>
    </div>
  )
}
