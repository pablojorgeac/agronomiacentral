import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useLineChart } from '@/hooks';
import { useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

export const LineChart = () => {
  const { yearView, monthView, weekView } = useLineChart();
  const [view, setView] = useState('year');
  let ingresos = [];

  const handleChange = (event) => {
    setView(event.target.value);
  };

  if (view === 'year') {
    ingresos = yearView();
  } else if (view === 'month') {
    ingresos = monthView();
  } else if (view === 'week') {
    ingresos = weekView();
  }

  const data = {
    labels:
      view === 'year'
        ? ingresos.map(({ month }) => month)
        : ingresos.map(({ day }) => day),
    datasets: [
      {
        label: 'Reservas',
        data: ingresos.map(({ count }) => count),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0,
      },
    ],
  };
  const options = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          autoSkip: false,
        },
      },
      y: {
        ticks: {
          autoSkip: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div
      className="w-full col-span-2 dark:bg-[#2C2C2C] dark:border-none
      dark:text-slate-100 bg-white border border-neutral-300 shadow-[0px_3px_10px_2px_rgb(0_0_0_/_13%)] px-4 py-2 rounded-lg relative
            lg:col-span-3 xl:col-span-2 xl:h-full
            flex flex-col justify-between
            "
    >
      <div className="flex justify-between">
        <p className="text-lg text-center  font-medium">Número de Reservas</p>
        <select
          onChange={handleChange}
          name=""
          id=""
          className="dark:bg-[#2C2C2C] dark:border-none
        dark:text-slate-100"
        >
          <option value="year">Año</option>
          <option value="month">Mes</option>
          <option value="week">Semana</option>
        </select>
      </div>
      <div>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};
