import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      min: 0,
      max: 30,
    },
    y: {
      min: 0,
      max: 1000000,
    },
  },
  plugins: {
    legend: {
      rtl: true,
      display: false,
    },
  },
  font: {
    family: "YekanBakh",
    weight: 500,
    size: 12,
  },
};

const labels = [];
for (let i = 1; i <= 30; i++) {
  labels.push(i);
}

const Data = [];
for (let i = 1; i <= 30; i++) {
  Data.push(Math.random() * 1000000);
}

export const data: ChartData<"line"> = {
  labels,
  datasets: [
    {
      data: Data,
      fill: true,
      pointBackgroundColor: "#8D2DCD99",
      pointBorderColor: "#8D2DCD99",
      backgroundColor: "#8D2DCD99",
    },
  ],
};

export const LineChart = () => {
  return <Line height={400} options={options} data={data} />;
};
