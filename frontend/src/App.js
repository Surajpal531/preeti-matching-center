import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
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
  const [collapsed, setCollapsed] = useState(false);

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
    
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      
      <div className="sidebar-header">
        {!collapsed && <h2 className="logo">Preeti Center</h2>}
        <button
          className="collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "☰" : "⮜"}
        </button>
      </div>

      <div className="links">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
        <NavLink to="/products" className={({ isActive }) => isActive ? "active" : ""}>Products</NavLink>
        <NavLink to="/gallery" className={({ isActive }) => isActive ? "active" : ""}>Gallery</NavLink>
        <NavLink to="/customers" className={({ isActive }) => isActive ? "active" : ""}>Customers</NavLink>
        <NavLink to="/add-customer" className={({ isActive }) => isActive ? "active" : ""}>Add Customer</NavLink>
        <NavLink to="/orders" className={({ isActive }) => isActive ? "active" : ""}>Orders</NavLink>
        <NavLink to="/add-order" className={({ isActive }) => isActive ? "active" : ""}>Add Order</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
        <NavLink to="/admin" className={({ isActive }) => isActive ? "active" : ""}>Admin</NavLink>
      </div>

    </div>

    <div className={`content ${collapsed ? "expanded" : ""}`}>
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