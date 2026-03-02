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

function TopProductsChart({ dateRange }) {
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

      const productCount = {};

      filtered.forEach((order) => {
        if (order.dressType) {
          productCount[order.dressType] =
            (productCount[order.dressType] || 0) + 1;
        }
      });

      const formatted = Object.keys(productCount).map((product) => ({
        name: product,
        orders: productCount[product],
      }));

      setData(formatted);
    };

    fetchOrders();
  }, [dateRange]);

  if (data.length === 0) return <p>No product sales in this period.</p>;

  return (
    <div className="chart-card">
      <h3>Top Selling Products</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="name" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip />
          <Bar dataKey="orders" fill="#4caf50" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TopProductsChart;