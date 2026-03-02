import { useEffect, useState } from "react";
import API from "../api";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await API.get("/products");
      setProducts(res.data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="products-page">
      <h1>Our Collection</h1>

      <div className="products-grid">
        {products.map((p) => (
          <div key={p._id} className="product-card">
            <div className="image-wrapper">
              <img
                src={`http://localhost:5000${p.image}`}
                alt={p.name}
              />
            </div>
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;