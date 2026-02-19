import { useEffect, useState } from "react";

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    name: "",
    age: "",
    city: "",
    mobile: "",
  });

  const loadCustomers = async () => {
    const res = await fetch("http://localhost:5000/customers");
    const data = await res.json();
    setCustomers(data);
  };

  useEffect(() => {
    loadCustomers();
  }, []);

  const deleteCustomer = async (id) => {
    await fetch(`http://localhost:5000/customers/${id}`, {
      method: "DELETE",
    });
    loadCustomers();
  };

  const startEdit = (c) => {
    setEditingId(c.id);
    setForm(c);
  };

  const saveEdit = async () => {
    await fetch(`http://localhost:5000/customers/${editingId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setEditingId(null);
    loadCustomers();
  };

  const filtered = customers.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Customers</h1>

      <input
        style={styles.search}
        placeholder="Search customer..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={styles.grid}>
        {filtered.map((c) => (
          <div key={c.id} style={styles.card}>
            {editingId === c.id ? (
              <>
                <input
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />
                <input
                  value={form.age}
                  onChange={(e) =>
                    setForm({ ...form, age: e.target.value })
                  }
                />
                <input
                  value={form.city}
                  onChange={(e) =>
                    setForm({ ...form, city: e.target.value })
                  }
                />
                <input
                  value={form.mobile}
                  onChange={(e) =>
                    setForm({ ...form, mobile: e.target.value })
                  }
                />

                <button style={styles.saveBtn} onClick={saveEdit}>
                  Save
                </button>
              </>
            ) : (
              <>
                <h3>{c.name}</h3>
                <p>Age: {c.age}</p>
                <p>City: {c.city}</p>
                <p>Mobile: {c.mobile}</p>

                <button
                  style={styles.editBtn}
                  onClick={() => startEdit(c)}
                >
                  Edit
                </button>

                <button
                  style={styles.deleteBtn}
                  onClick={() => deleteCustomer(c.id)}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: "30px",
    minHeight: "100vh",
    background: "#fce4ec",
  },
  heading: {
    textAlign: "center",
    color: "#c2185b",
  },
  search: {
    display: "block",
    margin: "20px auto",
    padding: "10px",
    width: "300px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
    gap: "20px",
  },
  card: {
    background: "white",
    padding: "15px",
    borderRadius: "8px",
    textAlign: "center",
  },
  editBtn: {
    background: "#1976d2",
    color: "white",
    border: "none",
    padding: "6px 10px",
    marginRight: "5px",
  },
  deleteBtn: {
    background: "#d32f2f",
    color: "white",
    border: "none",
    padding: "6px 10px",
  },
  saveBtn: {
    background: "#388e3c",
    color: "white",
    border: "none",
    padding: "6px 10px",
    marginTop: "5px",
  },
};

export default Customers;