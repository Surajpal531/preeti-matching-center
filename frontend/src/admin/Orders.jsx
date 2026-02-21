import { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);

  const loadOrders = async () => {
    const res = await fetch("http://localhost:5000/orders");
    const data = await res.json();
    setOrders(data);
  };

  const deleteOrder = async (id) => {
    await fetch(`http://localhost:5000/orders/${id}`, {
      method: "DELETE",
    });
    loadOrders();
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Customer Orders</h1>

      <div style={styles.grid}>
        {orders.map((order) => (
          <div key={order._id} style={styles.card}>
            <h3>{order.customerName}</h3>
            <p><strong>Product:</strong> {order.product}</p>
            <p><strong>Amount:</strong> ₹{order.amount}</p>
            <p><strong>Status:</strong> {order.status}</p>

            <button
              style={styles.deleteBtn}
              onClick={() => deleteOrder(order._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "30px",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  heading: {
    textAlign: "center",
    color: "#c2185b",
    background: "rgba(255,255,255,0.9)",
    padding: "10px",
    borderRadius: "8px",
    width: "fit-content",
    margin: "auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
    gap: "20px",
    marginTop: "30px",
  },
  card: {
    background: "rgba(255,255,255,0.95)",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    textAlign: "center",
  },
  deleteBtn: {
    marginTop: "10px",
    padding: "8px 12px",
    border: "none",
    background: "#d32f2f",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Orders;