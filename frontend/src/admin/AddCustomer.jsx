import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function AddCustomer() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [measurements, setMeasurements] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/customers", {
        name,
        phone,
        measurements,
      });

      alert("Customer Added Successfully!");
      navigate("/admin/customers");
    } catch (error) {
      console.log(error);
    }
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
          placeholder="Measurements"
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