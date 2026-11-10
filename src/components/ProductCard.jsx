import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "1rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "100%", height: "180px", objectFit: "contain", marginBottom: "0.75rem" }}
        />
        <h3 style={{ fontSize: "1rem", margin: "0.5rem 0" }}>{product.title}</h3>
      </Link>

      <div>
        <p style={{ fontWeight: "bold", fontSize: "1.1rem", margin: "0.5rem 0" }}>
          ${product.price.toFixed(2)}
        </p>
        <button
          onClick={() => addToCart(product)}
          style={{ width: "100%", padding: "0.5rem", background: "#007bff", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;