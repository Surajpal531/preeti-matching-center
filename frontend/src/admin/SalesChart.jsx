import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function SalesChart() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    const deliveredOrders = orders.filter(
      (order) => order.status === "Delivered"
    );

    const monthlySales = {};

    deliveredOrders.forEach((order) => {
      if (!order.deliveryDate) return;

      const month = new Date(order.deliveryDate).toLocaleString("default", {
        month: "short",
      });

      monthlySales[month] =
        (monthlySales[month] || 0) + Number(order.amount || 0);
    });

    const labels = Object.keys(monthlySales);
    const values = Object.values(monthlySales);

    setChartData({
      labels,
      datasets: [
        {
          label: "Monthly Revenue (₹)",
          data: values,
          backgroundColor: "#e91e63",
          borderRadius: 6,
        },
      ],
    });
  }, []);

  if (!chartData || chartData.labels.length === 0) {
    return <p>No delivered orders yet.</p>;
  }

  return (
    <div style={{ background: "#1e1e1e", padding: 20, borderRadius: 12 }}>
      <h3 style={{ marginBottom: 20 }}>Monthly Sales</h3>
      <Bar data={chartData} />
    </div>
  );
}

export default SalesChart;