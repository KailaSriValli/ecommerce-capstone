import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { totalItems } = useCart();

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem 2rem", background: "#222", color: "#fff" }}>
      <Link to="/" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold", fontSize: "1.2rem" }}>
        ShopEasy
      </Link>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/cart" style={{ color: "#fff", textDecoration: "none" }}>
          Cart ({totalItems})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;