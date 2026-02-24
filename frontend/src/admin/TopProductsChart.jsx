import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function TopProductsChart() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  const productCount = {};

  orders.forEach((order) => {
    const productName = order.dressType;
    if (productName) {
      productCount[productName] =
        (productCount[productName] || 0) + 1;
    }
  });

  const data = Object.keys(productCount).map((product) => ({
    name: product,
    orders: productCount[product],
  }));

  if (data.length === 0) {
    return <p>No product sales yet.</p>;
  }

  return (
    <div className="chart-card">
      <h3>Top Selling Products</h3>

      <ResponsiveContainer width="100%" height={300}>
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