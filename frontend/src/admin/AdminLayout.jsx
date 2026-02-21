import { Outlet, NavLink } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="admin-layout">

      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2 className="admin-logo">Preeti Admin</h2>

        <nav className="admin-nav">
          <NavLink to="/admin">Dashboard</NavLink>
          <NavLink to="/admin/products">Products</NavLink>
          <NavLink to="/admin/customers">Customers</NavLink>
          <NavLink to="/admin/orders">Orders</NavLink>
          <NavLink to="/admin/add-product">Add Product</NavLink>
          <NavLink to="/admin/add-customer">Add Customer</NavLink>
        </nav>

        <button
          className="admin-logout"
          onClick={() => {
            localStorage.removeItem("adminAuth");
            window.location.href = "/admin/login";
          }}
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <div className="admin-main">
        <div className="admin-topbar">
          <h1>Admin Panel</h1>
        </div>

        <div className="admin-content">
          <Outlet />
        </div>
      </div>

    </div>
  );
}

export default AdminLayout;