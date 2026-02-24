import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import API from "../api";

function RevenueTrendChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await API.get("/orders");

      const monthly = {};

      res.data.forEach((order) => {
        if (order.status === "Delivered" && order.deliveryDate) {
          const month = new Date(order.deliveryDate).toLocaleString(
            "default",
            { month: "short" }
          );

          monthly[month] =
            (monthly[month] || 0) + Number(order.amount);
        }
      });

      const formatted = Object.keys(monthly).map((month) => ({
        month,
        revenue: monthly[month],
      }));

      setData(formatted);
    };

    fetchOrders();
  }, []);

  if (data.length === 0) return <p>No revenue data.</p>;

  return (
    <div className="chart-card">
      <h3>Revenue Trend</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="month" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#e91e63"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RevenueTrendChart;