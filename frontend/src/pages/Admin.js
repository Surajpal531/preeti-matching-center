import { useEffect, useState } from "react";

function Admin() {
  const [customers, setCustomers] = useState([]);
  const [orders, setOrders] = useState([]);

  const loadData = async () => {
    const cRes = await fetch("http://localhost:5000/customers");
    const cData = await cRes.json();
    setCustomers(cData);

    const oRes = await fetch("http://localhost:5000/orders");
    const oData = await oRes.json();
    setOrders(oData);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.overlay}>
        <h1 style={styles.heading}>Admin Dashboard</h1>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h2>{customers.length}</h2>
            <p>Total Customers</p>
          </div>

          <div style={styles.card}>
            <h2>{orders.length}</h2>
            <p>Total Orders</p>
          </div>
        </div>

        <div style={styles.links}>
          <a href="/customers" style={styles.link}>
            View Customers
          </a>
          <a href="/orders" style={styles.link}>
            View Orders
          </a>
          <a href="/add-customer" style={styles.link}>
            Add Customer
          </a>
          <a href="/add-order" style={styles.link}>
            Add Order
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  overlay: {
    minHeight: "100vh",
    background: "rgba(0,0,0,0.6)",
    padding: "40px",
    textAlign: "center",
    color: "white",
  },
  heading: {
    marginBottom: "30px",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
  },
  card: {
    background: "rgba(255,255,255,0.95)",
    color: "#c2185b",
    padding: "25px",
    borderRadius: "10px",
    width: "180px",
    textAlign: "center",
    fontWeight: "bold",
  },
  links: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
  },
  link: {
    background: "#c2185b",
    padding: "10px 15px",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold",
  },
};

export default Admin;