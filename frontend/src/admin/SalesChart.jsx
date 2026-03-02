import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import API from "../api";

function SalesChart({ dateRange }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
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

        const monthlySales = {};

        filtered.forEach((order) => {
          if (order.status === "Delivered" && order.deliveryDate) {
            const month = new Date(order.deliveryDate)
              .toLocaleString("default", { month: "short" });

            monthlySales[month] =
              (monthlySales[month] || 0) + Number(order.amount);
          }
        });

        const monthOrder = [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        const formatted = Object.keys(monthlySales)
          .map((month) => ({
            month,
            revenue: monthlySales[month],
          }))
          .sort(
            (a, b) =>
              monthOrder.indexOf(a.month) -
              monthOrder.indexOf(b.month)
          );

        setData(formatted);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrders();
  }, [dateRange]);

  if (loading) return <p>Loading sales data...</p>;
  if (data.length === 0) return <p>No delivered orders in this period.</p>;

  return (
    <div className="chart-card">
      <h3>Monthly Revenue</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="month" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip />
          <Bar dataKey="revenue" fill="#e91e63" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesChart;