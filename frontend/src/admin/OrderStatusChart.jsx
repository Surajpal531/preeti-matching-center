import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import API from "../api";

function OrderStatusChart({ dateRange }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await API.get("/orders");

      let filtered = res.data;

      // 🔹 Apply date filter
      if (dateRange !== "all") {
        const days = Number(dateRange);
        const cutoff = new Date();
        cutoff.setDate(cutoff.getDate() - days);

        filtered = filtered.filter(
          (order) =>
            order.deliveryDate &&
            new Date(order.deliveryDate) >= cutoff
        );
      }

      const statusCount = {};

      filtered.forEach((order) => {
        statusCount[order.status] =
          (statusCount[order.status] || 0) + 1;
      });

      const formatted = Object.keys(statusCount).map((status) => ({
        name: status,
        value: statusCount[status],
      }));

      setData(formatted);
    };

    fetchOrders();
  }, [dateRange]);

  const COLORS = [
    "#ff9800",
    "#2196f3",
    "#4caf50",
    "#9c27b0",
    "#f44336",
  ];

  if (data.length === 0) return <p>No orders in this period.</p>;

  return (
    <div className="chart-card">
      <h3>Order Status Distribution</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={90} label>
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default OrderStatusChart;