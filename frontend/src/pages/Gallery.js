function Gallery() {
  const images = [
    "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg",
    "https://images.pexels.com/photos/932401/pexels-photo-932401.jpeg",
    "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
    "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg",
    "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
    "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg",
    "https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg",
    "https://images.pexels.com/photos/1536613/pexels-photo-1536613.jpeg",
    "https://images.pexels.com/photos/1536615/pexels-photo-1536615.jpeg",
    "https://images.pexels.com/photos/1536618/pexels-photo-1536618.jpeg",
    "https://images.pexels.com/photos/1536617/pexels-photo-1536617.jpeg",
    "https://images.pexels.com/photos/1536616/pexels-photo-1536616.jpeg"
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Our Gallery</h1>

        <div style={styles.grid}>
          {images.map((img, index) => (
            <div key={index} style={styles.card}>
              <img src={img} alt="dress" style={styles.image} />
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
    gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))",
    gap: "15px",
    marginTop: "20px",
  },

  card: {
    overflow: "hidden",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  },

  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    transition: "0.3s",
  },
};

export default Gallery;