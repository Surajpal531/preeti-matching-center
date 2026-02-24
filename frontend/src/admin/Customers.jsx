import { useEffect, useState } from "react";
import API from "../api";

function Customers() {
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    try {
      const res = await API.get("/customers");
      setCustomers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await API.delete(`/customers/${id}`);
      fetchCustomers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Manage Customers</h2>

      {customers.length === 0 ? (
        <p>No customers added yet.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Measurements</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((c) => (
              <tr key={c._id}>
                <td>{c.name}</td>
                <td>{c.phone}</td>
                <td>{c.measurements}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(c._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Customers;