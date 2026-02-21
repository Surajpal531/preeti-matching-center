import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCustomer() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [measurements, setMeasurements] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCustomer = {
      id: Date.now(),
      name,
      phone,
      measurements,
    };

    const existing = JSON.parse(localStorage.getItem("customers")) || [];
    localStorage.setItem("customers", JSON.stringify([...existing, newCustomer]));

    alert("Customer Added Successfully!");
    navigate("/admin/customers");
  };

  return (
    <div>
      <h2>Add Customer</h2>

      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Customer Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone Number"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <textarea
          placeholder="Measurements (Bust, Waist, Length, etc)"
          required
          value={measurements}
          onChange={(e) => setMeasurements(e.target.value)}
        />

        <button type="submit">Add Customer</button>
      </form>
    </div>
  );
}

export default AddCustomer;