import { Bar } from 'react-chartjs-2'

interface Props {
  userData: {
    id: number
    year: number
    userGain: number
    userLost: number
  }[]
}

export function BarChart({ userData }: Props) {
  return <Bar data={userData} options={} />
}
