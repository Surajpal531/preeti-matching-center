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
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Our Products</h1>

        <div style={styles.grid}>
          {items.map((item, index) => (
            <div style={styles.card} key={index}>
              <img src={item.img} alt={item.name} style={styles.image} />
              <h3>{item.name}</h3>
              <p style={styles.price}>{item.price}</p>
              <button style={styles.button}>View Details</button>
            </div>
          ))}
        </div>
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
    padding: "30px",
  },

  container: {
    background: "rgba(255,255,255,0.95)",
    padding: "30px",
    borderRadius: "12px",
    maxWidth: "1100px",
    margin: "auto",
    textAlign: "center",
  },

  title: {
    fontSize: "32px",
    color: "#c2185b",
    marginBottom: "20px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
    gap: "20px",
    marginTop: "20px",
  },

  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    textAlign: "center",
  },

  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "8px",
  },

  price: {
    color: "#e91e63",
    fontWeight: "bold",
    margin: "8px 0",
  },

  button: {
    background: "#e91e63",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Products;