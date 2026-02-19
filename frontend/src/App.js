import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import Customers from "./pages/Customers";
import AddCustomer from "./pages/AddCustomer";
import Orders from "./pages/Orders";
import AddOrder from "./pages/AddOrder";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser.displayName);
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
        setUser("");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // 🔥 Important: wait until Firebase checks auth
  if (loading) {
    return <div style={{ padding: 40 }}>Checking login...</div>;
  }

  if (!loggedIn) {
    return (
      <Login
        onLogin={(username) => {
          setUser(username);
          setLoggedIn(true);
        }}
      />
    );
  }

  return (
    <Router>
      <div style={styles.layout}>
        <div style={styles.sidebar}>
          <h2 style={styles.logo}>Preeti Center</h2>

          <div style={styles.links}>
            <Link style={styles.linkItem} to="/">Home</Link>
            <Link style={styles.linkItem} to="/about">About</Link>
            <Link style={styles.linkItem} to="/products">Products</Link>
            <Link style={styles.linkItem} to="/gallery">Gallery</Link>
            <Link style={styles.linkItem} to="/customers">Customers</Link>
            <Link style={styles.linkItem} to="/add-customer">Add Customer</Link>
            <Link style={styles.linkItem} to="/orders">Orders</Link>
            <Link style={styles.linkItem} to="/add-order">Add Order</Link>
            <Link style={styles.linkItem} to="/contact">Contact</Link>
            <Link style={styles.linkItem} to="/admin">Admin</Link>
          </div>
        </div>

        <div style={styles.content}>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  user={user}
                  onLogout={() => {
                    setLoggedIn(false);
                    setUser("");
                  }}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/add-customer" element={<AddCustomer />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/add-order" element={<AddOrder />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const styles = {
  layout: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  sidebar: {
    width: "220px",
    background: "#b71c1c",
    color: "white",
    padding: "20px",
    position: "fixed",
    height: "100vh",
  },
  logo: {
    marginBottom: "20px",
    color: "#ffebee",
  },
  links: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  linkItem: {
    color: "#ffebee",
    textDecoration: "none",
    background: "#e91e63",
    padding: "10px",
    borderRadius: "5px",
    fontWeight: "bold",
  },
  content: {
    marginLeft: "220px",
    flex: 1,
    background: "#f5f5f5",
    minHeight: "100vh",
  },
};

export default App;