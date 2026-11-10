import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({ name: "", email: "", address: "" });
  const [error, setError] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.address.trim()) {
      setError("Please fill in all shipping fields.");
      return;
    }
    setError("");
    clearCart();
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Order Placed Successfully!</h2>
        <p style={{ margin: "1rem 0" }}>
          Thank you, <strong>{formData.name}</strong>. Your order is on its way!
        </p>
        <Link to="/" style={{ color: "#007bff", textDecoration: "none", fontWeight: "bold" }}>
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>No items to checkout</h2>
        <Link to="/">Go back to store</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "0 auto" }}>
      <h2>Checkout</h2>
      <p style={{ marginBottom: "1rem", fontWeight: "bold" }}>
        Order Total: ${totalPrice.toFixed(2)}
      </p>

      {error && <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div>
          <label style={{ display: "block", marginBottom: "0.25rem" }}>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "0.25rem" }}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "0.25rem" }}>Shipping Address</label>
          <textarea
            name="address"
            rows="3"
            value={formData.address}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "0.75rem",
            background: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;