import { useState } from "react";

function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = () => {
    setMessageSent(true);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Contact Us</h1>

        <p style={styles.info}>
          <strong>Preeti Matching Center</strong>
        </p>
        <p style={styles.info}>Lala Gali, Jaora</p>
        <p style={styles.info}>📞 +91 98765 43210</p>
        <p style={styles.info}>✉ preetimatching@gmail.com</p>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noreferrer"
          style={styles.whatsapp}
        >
          Chat on WhatsApp
        </a>

        <hr style={{ margin: "20px 0" }} />

        <h3>Send Message</h3>

        <input style={styles.input} placeholder="Your Name" />
        <input style={styles.input} placeholder="Mobile Number" />
        <textarea
          style={styles.textarea}
          placeholder="Your Message"
        />

        <button style={styles.button} onClick={handleSubmit}>
          Send Message
        </button>

        {messageSent && (
          <p style={styles.success}>Message sent successfully!</p>
        )}

        {/* Google Map */}
        <div style={styles.mapContainer}>
          <iframe
            title="shop-location"
            src="https://www.google.com/maps?q=Jaora&output=embed"
            style={styles.map}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "20px",
  },
  card: {
    background: "rgba(255,255,255,0.95)",
    padding: "30px",
    borderRadius: "10px",
    width: "380px",
    textAlign: "center",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
  },
  heading: {
    color: "#c2185b",
    marginBottom: "15px",
  },
  info: {
    margin: "5px 0",
  },
  whatsapp: {
    display: "inline-block",
    marginTop: "10px",
    padding: "10px 15px",
    background: "#25D366",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "100%",
    height: "80px",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    background: "#c2185b",
    color: "white",
    border: "none",
    padding: "10px",
    width: "100%",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  success: {
    color: "green",
    marginTop: "10px",
  },
  mapContainer: {
    marginTop: "20px",
  },
  map: {
    width: "100%",
    height: "200px",
    border: "none",
    borderRadius: "8px",
  },
};

export default Contact;