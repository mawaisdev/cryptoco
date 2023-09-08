import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export type ChartProps = {
  currency: string
  days: string
  pricesOfCoin?: number[][]
}
export const Chart = ({ currency, pricesOfCoin, days }: ChartProps) => {
  const prices: number[] = []
  const date: string[] = []
  if (pricesOfCoin) {
    if (days.endsWith('h')) {
      for (let i = 0; i < pricesOfCoin.length; i++) {
        date.push(new Date(pricesOfCoin[i][0]).toLocaleTimeString())
        prices.push(pricesOfCoin[i][1])
      }
    } else {
      for (let i = 0; i < pricesOfCoin.length; i++) {
        date.push(new Date(pricesOfCoin[i][0]).toLocaleDateString())
        prices.push(pricesOfCoin[i][1])
      }
    }
  }
  const data = {
    labels: date,
    datasets: [
      {
        label: `Prices in ${currency.toUpperCase()}`,
        data: prices,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }
  return (
    <Line
      options={{
        responsive: true,
      }}
      data={data}
    />
  )
}
