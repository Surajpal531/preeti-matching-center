import { useState } from "react";

function AddCustomer() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    // validation
    if (!name || !age || !city || !mobile) {
      setMessage("Please fill all fields");
      return;
    }

    if (mobile.length !== 10) {
      setMessage("Mobile number must be 10 digits");
      return;
    }

    await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age, city, mobile }),
    });

    setMessage("Customer added successfully!");
    setName("");
    setAge("");
    setCity("");
    setMobile("");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Add New Customer</h1>

        {/* Name */}
        <input
          style={styles.input}
          placeholder="Customer Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value.replace(/[^a-zA-Z\s]/g, ""))
          }
        />

        {/* Age */}
        <input
          style={styles.input}
          placeholder="Age"
          value={age}
          onChange={(e) =>
            setAge(e.target.value.replace(/[^0-9]/g, ""))
          }
        />

        {/* City */}
        <input
          style={styles.input}
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        {/* Mobile */}
        <input
          style={styles.input}
          placeholder="Mobile Number"
          value={mobile}
          maxLength={10}
          onChange={(e) =>
            setMobile(e.target.value.replace(/[^0-9]/g, ""))
          }
        />

        <button style={styles.button} onClick={handleSubmit}>
          Save Customer
        </button>

        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundImage:
      "url('https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },

  card: {
    background: "rgba(255,255,255,0.95)",
    padding: "40px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
  },

  title: {
    color: "#c2185b",
    marginBottom: "20px",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "15px",
  },

  button: {
    background: "#c2185b",
    color: "white",
    border: "none",
    padding: "10px",
    width: "100%",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  },

  message: {
    marginTop: "15px",
    color: "green",
    fontWeight: "bold",
  },
};

export default AddCustomer;