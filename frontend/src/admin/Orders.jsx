import { useEffect, useState } from "react";
import API from "../api";

function Orders() {
  const [orders, setOrders] = useState([]);

  // 🔹 Fetch Orders from Backend
  const fetchOrders = async () => {
    try {
      const res = await API.get("/orders");
      setOrders(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // 🔹 Update Order Status
  const updateStatus = async (id, newStatus) => {
    try {
      await API.put(`/orders/${id}`, { status: newStatus });
      fetchOrders();
    } catch (error) {
      console.log(error);
    }
  };

  // 🔹 Delete Order
  const handleDelete = async (id) => {
    try {
      await API.delete(`/orders/${id}`);
      fetchOrders();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Manage Orders</h2>

      {orders.length === 0 ? (
        <p>No orders created yet.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Dress</th>
              <th>Amount</th>
              <th>Delivery</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.customerName}</td>
                <td>{order.dressType}</td>
                <td>₹{order.amount}</td>
                <td>{order.deliveryDate}</td>
                <td>
                  <select
                    value={order.status}
                    onChange={(e) =>
                      updateStatus(order._id, e.target.value)
                    }
                  >
                    <option>Pending</option>
                    <option>Stitching</option>
                    <option>Ready</option>
                    <option>Delivered</option>
                  </select>
                </td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(order._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Orders;