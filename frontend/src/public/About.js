function About() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>About Preeti Matching Center</h1>

        <p style={styles.text}>
          Welcome to <b>Preeti Matching Center</b>, your perfect destination
          for stylish ladies wear and custom stitching. We offer trendy
          designs, comfortable fabrics, and perfect fitting for every occasion.
        </p>

        <p style={styles.text}>
          From daily wear to festive collections, our boutique provides a
          wide range of dresses, sarees, and designer outfits. Our goal is to
          make every customer look confident, elegant, and stylish.
        </p>

        <p style={styles.text}>
          Experience friendly service, modern fashion, and personalized
          tailoring that suits your personality.
        </p>

        <h3 style={styles.highlight}>
          “Where style meets perfect fitting.”
        </h3>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },

  card: {
    background: "rgba(255,255,255,0.92)",
    padding: "40px",
    borderRadius: "12px",
    maxWidth: "700px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
  },

  title: {
    fontSize: "34px",
    marginBottom: "20px",
    color: "#c2185b",
  },

  text: {
    fontSize: "17px",
    marginBottom: "15px",
    lineHeight: "1.6",
    color: "#333",
  },

  highlight: {
    marginTop: "20px",
    color: "#e91e63",
    fontStyle: "italic",
  },
};

export default About;