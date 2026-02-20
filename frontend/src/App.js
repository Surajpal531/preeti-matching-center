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
    <div className="layout">
      <div className="sidebar">
        <h2 className="logo">Preeti Center</h2>

        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/customers">Customers</Link>
          <Link to="/add-customer">Add Customer</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/add-order">Add Order</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/admin">Admin</Link>
        </div>
      </div>

      <div className="content">
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
export default App;