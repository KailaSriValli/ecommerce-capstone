import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Your Cart is Empty</h2>
        <p style={{ margin: "1rem 0" }}>Looks like you haven't added anything yet.</p>
        <Link to="/" style={{ color: "#007bff", textDecoration: "none", fontWeight: "bold" }}>
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h2>Shopping Cart</h2>
      <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
        {cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #ddd",
              paddingBottom: "1rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "60px", height: "60px", objectFit: "contain" }}
              />
              <div>
                <h4 style={{ margin: 0 }}>{item.title}</h4>
                <p style={{ margin: "0.25rem 0", color: "#555" }}>
                  ${item.price.toFixed(2)} &times; {item.quantity}
                </p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <strong>${(item.price * item.quantity).toFixed(2)}</strong>
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  padding: "0.4rem 0.75rem",
                  background: "#dc3545",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "2rem", textAlign: "right" }}>
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <Link
          to="/checkout"
          style={{
            display: "inline-block",
            marginTop: "0.75rem",
            padding: "0.75rem 1.5rem",
            background: "#28a745",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "4px",
            fontWeight: "bold",
          }}
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;