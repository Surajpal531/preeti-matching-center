import { Routes, Route } from "react-router-dom";

// Public Pages
import PublicLayout from "./public/PublicLayout";
import Home from "./public/Home";
import About from "./public/About";
import Products from "./public/Products";
import Gallery from "./public/Gallery";
import Contact from "./public/Contact";


// Admin
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/Dashboard";
import AdminProducts from "./admin/Products";
import Customers from "./admin/Customers";
import Orders from "./admin/Orders";
import Login from "./admin/Login";
import ProtectedRoute from "./admin/ProtectedRoute";
import AddProduct from "./admin/AddProduct";
import AddCustomer from "./admin/AddCustomer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      {/* Admin Login */}
      <Route path="/admin/login" element={<Login />} />

      {/* Protected Admin */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="customers" element={<Customers />} />
        <Route path="customers" element={<Customers />} />
        <Route path="add-customer" element={<AddCustomer />} />
        <Route path="orders" element={<Orders />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="add-product" element={<AddProduct />} />
      </Route>
    </Routes>
  );
}

export default App;