import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function RevenueTrendChart() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  const monthlyRevenue = {};

  orders.forEach((order) => {
    if (order.status === "Delivered" && order.deliveryDate) {
      const month = new Date(order.deliveryDate).toLocaleString("default", {
        month: "short",
      });

      monthlyRevenue[month] =
        (monthlyRevenue[month] || 0) + Number(order.amount || 0);
    }
  });

  const data = Object.keys(monthlyRevenue).map((month) => ({
    month,
    revenue: monthlyRevenue[month],
  }));

  if (data.length === 0) {
    return <p>No revenue data yet.</p>;
  }

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