import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function AddOrder() {
  const [customers, setCustomers] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [dressType, setDressType] = useState("");
  const [amount, setAmount] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");

  const navigate = useNavigate();

  // 🔹 Fetch customers from backend
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const res = await API.get("/customers");
        setCustomers(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCustomers();
  }, []);

  // 🔹 Submit order to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/orders", {
        customerName,
        dressType,
        amount,
        deliveryDate,
        status: "Pending",
      });

      alert("Order Created Successfully!");
      navigate("/admin/orders");
    } catch (error) {
      console.log(error);
      alert("Error creating order");
    }
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
            <option key={c._id} value={c.name}>
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