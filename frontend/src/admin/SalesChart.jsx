import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function SalesChart() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  const monthlySales = {};

  orders.forEach((order) => {
    if (order.status === "Delivered" && order.deliveryDate) {
      const month = new Date(order.deliveryDate).toLocaleString("default", {
        month: "short",
      });

      monthlySales[month] =
        (monthlySales[month] || 0) + Number(order.amount || 0);
    }
  });

  const data = Object.keys(monthlySales).map((month) => ({
    month,
    revenue: monthlySales[month],
  }));

  if (data.length === 0) {
    return <p>No delivered orders yet.</p>;
  }

  return (
    <div className="chart-card">
      <h3>Monthly Revenue</h3>

      <ResponsiveContainer width="100%" height={300}>
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