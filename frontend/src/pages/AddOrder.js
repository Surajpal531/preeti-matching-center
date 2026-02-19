import { useState } from "react";

function AddOrder() {
  const [form, setForm] = useState({
    customerName: "",
    product: "",
    amount: "",
    status: "Pending",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitOrder = async () => {
    await fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setMessage("Order Added Successfully!");
    setForm({
      customerName: "",
      product: "",
      amount: "",
      status: "Pending",
    });
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Add New Order</h2>

        <input
          style={styles.input}
          name="customerName"
          placeholder="Customer Name"
          value={form.customerName}
          onChange={handleChange}
        />

        <input
          style={styles.input}
          name="product"
          placeholder="Product Name"
          value={form.product}
          onChange={handleChange}
        />

        <input
          style={styles.input}
          name="amount"
          placeholder="Amount"
          type="number"
          value={form.amount}
          onChange={handleChange}
        />

        <select
          style={styles.input}
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option>Pending</option>
          <option>In Stitching</option>
          <option>Ready</option>
          <option>Delivered</option>
        </select>

        <button style={styles.button} onClick={submitOrder}>
          Save Order
        </button>

        {message && <p style={styles.success}>{message}</p>}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  card: {
    background: "rgba(255,255,255,0.95)",
    padding: "30px",
    borderRadius: "10px",
    width: "320px",
    textAlign: "center",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
  },
  heading: {
    color: "#c2185b",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    background: "#c2185b",
    color: "white",
    border: "none",
    padding: "10px",
    width: "100%",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  success: {
    color: "green",
    marginTop: "10px",
  },
};

export default AddOrder;