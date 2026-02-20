function Products() {
  const items = [
    { name: "Designer Suit", price: "₹1,499", img: "https://images.pexels.com/photos/932401/pexels-photo-932401.jpeg" },
    { name: "Party Gown", price: "₹2,299", img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg" },
    { name: "Silk Saree", price: "₹3,499", img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg" },
    { name: "Casual Kurti", price: "₹899", img: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg" },
    { name: "Lehenga Set", price: "₹4,999", img: "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg" },
    { name: "Cotton Dress", price: "₹1,199", img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg" },
  ];

  return (
    <div className="page-wrapper">
      <h1 className="page-title">Our Collection</h1>
      <p className="page-subtitle">
        Discover elegance crafted with perfection.
      </p>

      <div className="products-grid">
        {items.map((item, index) => (
          <div className="product-card" key={index}>
            <div className="image-wrapper">
              <img src={item.img} alt={item.name} />
            </div>

            <div className="product-info">
              <h3>{item.name}</h3>
              <p className="product-price">{item.price}</p>
              <button className="primary-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;