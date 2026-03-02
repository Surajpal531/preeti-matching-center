import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("image", image);

    try {
      await API.post("/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Product Added Successfully!");
      navigate("/admin/products");
    } catch (error) {
        console.log("FULL ERROR:", error);
        console.log("RESPONSE:", error.response?.data);
        alert(error.response?.data?.message || "Upload failed");
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
          type="file"
          accept="image/*"
          required
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;