import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/products", {
        name,
        price,
        image,
      });

      alert("Product Added Successfully!");
      navigate("/admin/products");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Add Product</h2>

      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          placeholder="Product Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          placeholder="Image URL"
          required
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;