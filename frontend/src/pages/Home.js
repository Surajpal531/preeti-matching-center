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
    <div className="home-page">

      {/* Floating Top Bar */}
      <div className="home-topbar">
        <span className="welcome-text">
          Welcome, {user || "Admin"} 👋
        </span>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Preeti Matching Center</h1>
          <p>
            Elegant Dresses • Custom Stitching • Perfect Fitting
          </p>
        </div>
      </div>

      {/* Specialities Section */}
      <div className="specialities-section">
        <h2>Our Specialities</h2>

        <div className="specialities-grid">
          <div className="special-card">Designer Suits</div>
          <div className="special-card">Party Gowns</div>
          <div className="special-card">Silk Sarees</div>
          <div className="special-card">Custom Stitching</div>
        </div>
      </div>

    </div>
  );
}

export default Home;