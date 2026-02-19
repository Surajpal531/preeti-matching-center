import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Home({ user, onLogout }) {

  const handleLogout = async () => {
    try {
      await signOut(auth);
      onLogout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={styles.page}>

      {/* Top Right Logout + User */}
      <div style={styles.topBar}>
        <span style={styles.userName}>
          Welcome {user || "Admin"} 👋
        </span>
        <button style={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Top Hero Banner */}
      <div style={styles.hero}>
        <div style={styles.overlay}>
          <h1 style={styles.title}>Preeti Matching Center</h1>
          <p style={styles.subtitle}>
            Elegant Dresses • Custom Stitching • Perfect Fitting
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div style={styles.container}>
        <h2>Our Specialities</h2>
        <div style={styles.grid}>
          <div style={styles.card}>Designer Suits</div>
          <div style={styles.card}>Party Gowns</div>
          <div style={styles.card}>Silk Sarees</div>
          <div style={styles.card}>Custom Stitching</div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "rgba(0,0,0,0.6)",
    color: "white",
  },

  userName: {
    fontWeight: "bold",
  },

  logoutBtn: {
    background: "#c2185b",
    color: "white",
    border: "none",
    padding: "8px 14px",
    borderRadius: "5px",
    cursor: "pointer",
  },

  hero: {
    height: "320px",
  },

  overlay: {
    background: "rgba(0,0,0,0.55)",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    padding: "20px",
  },

  title: {
    fontSize: "42px",
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: "18px",
    marginTop: "10px",
  },

  container: {
    padding: "40px 20px",
    maxWidth: "1000px",
    margin: "40px auto",
    textAlign: "center",
    background: "rgba(255,255,255,0.9)",
    borderRadius: "10px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))",
    gap: "20px",
    marginTop: "20px",
  },

  card: {
    background: "#fce4ec",
    padding: "30px",
    borderRadius: "10px",
    fontWeight: "bold",
  },
};

export default Home;