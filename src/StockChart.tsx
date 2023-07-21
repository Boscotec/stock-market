import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./App.css";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

interface Prop {
  graphData: number[][];
}

const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: true,
  },
  stacked: false,
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      display: false,
    },
    y1: {
      display: false,
    },
  },
};

const StockChart = ({ graphData }: Prop) => {
  const data = {
    labels: graphData[0],
    datasets: [
      {
        data: graphData[1],
        backgroundColor: "black",
        borderColor: "#5AC53B",
        borderWidth: 2,
        pointBorderColor: "rgba(0,0,0,0)",
        pointBackgroundColor: "rgba(0,0,0,0)",
        pointHoverBackgroundColor: "#5AC53B",
        pointHoverBorderColor: "#000000",
        pointHoverBorderWidth: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  return (
    <div className="Graph">
      <Line data={data} options={options} />
    </div>
  );
};

export default StockChart;
