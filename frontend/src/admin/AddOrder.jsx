import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddOrder() {
  const [customers, setCustomers] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [dressType, setDressType] = useState("");
  const [amount, setAmount] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("customers")) || [];
    setCustomers(stored);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOrder = {
      id: Date.now(),
      customerName,
      dressType,
      amount,
      deliveryDate,
      status: "Pending",
    };

    const existing = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([...existing, newOrder]));

    alert("Order Created Successfully!");
    navigate("/admin/orders");
  };

  return (
    <div>
      <h2>Create Order</h2>

      <form className="admin-form" onSubmit={handleSubmit}>

        <select
          required
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        >
          <option value="">Select Customer</option>
          {customers.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Dress Type (Lehenga, Suit, Blouse...)"
          required
          value={dressType}
          onChange={(e) => setDressType(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount (₹)"
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <input
          type="date"
          required
          value={deliveryDate}
          onChange={(e) => setDeliveryDate(e.target.value)}
        />

        <button type="submit">Create Order</button>

      </form>
    </div>
  );
}

export default AddOrder;