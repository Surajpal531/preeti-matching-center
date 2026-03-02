import { useEffect, useState } from "react";
import API from "../api";

function AdminProducts() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await API.delete(`/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Manage Products</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td>{p.name}</td>
              <td>₹{p.price}</td>
              <td>
                <img
                  src={`http://localhost:5000${p.image}`}
                  alt={p.name}
                  width="60"
                />
              </td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(p._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminProducts;