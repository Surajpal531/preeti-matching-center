import { useEffect, useState } from "react";
import SalesChart from "./SalesChart";
import OrderStatusChart from "./OrderStatusChart";
import RevenueTrendChart from "./RevenueTrendChart";
import TopProductsChart from "./TopProductsChart";

function Dashboard() {
  const [stats, setStats] = useState({
    products: 0,
    customers: 0,
    orders: 0,
    pending: 0,
    revenue: 0,
    todayOrders: 0,
  });
  const [dateRange, setDateRange] = useState("30");

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
      <div className="date-filter">
        <button
          className={dateRange === "7" ? "active" : ""}
          onClick={() => setDateRange("7")}
        >
          Last 7 Days
        </button>

        <button
          className={dateRange === "30" ? "active" : ""}
          onClick={() => setDateRange("30")}
        >
          Last 30 Days
        </button>

        <button
          className={dateRange === "90" ? "active" : ""}
          onClick={() => setDateRange("90")}
        >
          Last 90 Days
        </button>

        <button
          className={dateRange === "all" ? "active" : ""}
          onClick={() => setDateRange("all")}
        >
          All Time
        </button>
      </div>

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
       <div className="charts-grid">
          <SalesChart dateRange={dateRange} />
          <OrderStatusChart dateRange={dateRange} />
          <TopProductsChart dateRange={dateRange} />
          <RevenueTrendChart />
        </div>
    </div>
  );
}

export default Dashboard;