import { useEffect, useState } from "react";
import SalesChart from "./SalesChart";

function Dashboard() {
  const [stats, setStats] = useState({
    products: 0,
    customers: 0,
    orders: 0,
    pending: 0,
    revenue: 0,
    todayOrders: 0,
  });

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const customers = JSON.parse(localStorage.getItem("customers")) || [];
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    const pending = orders.filter(o => o.status === "Pending").length;

    const revenue = orders.reduce((total, order) => {
      return order.status === "Delivered"
        ? total + Number(order.amount)
        : total;
    }, 0);

    const today = new Date().toISOString().split("T")[0];
    const todayOrders = orders.filter(o => o.deliveryDate === today).length;

    setStats({
      products: products.length,
      customers: customers.length,
      orders: orders.length,
      pending,
      revenue,
      todayOrders,
    });
  }, []);

  return (
    <div>
      <h2>Dashboard Overview</h2>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h3>Total Products</h3>
          <p>{stats.products}</p>
        </div>

        <div className="dashboard-card">
          <h3>Total Customers</h3>
          <p>{stats.customers}</p>
        </div>

        <div className="dashboard-card">
          <h3>Total Orders</h3>
          <p>{stats.orders}</p>
        </div>

        <div className="dashboard-card">
          <h3>Pending Orders</h3>
          <p>{stats.pending}</p>
        </div>

        <div className="dashboard-card">
          <h3>Orders Due Today</h3>
          <p>{stats.todayOrders}</p>
        </div>

        <div className="dashboard-card">
          <h3>Total Revenue</h3>
          <p>₹{stats.revenue}</p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;