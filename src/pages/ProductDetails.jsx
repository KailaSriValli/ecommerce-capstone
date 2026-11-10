import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../services/productService";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError("Product not found.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p style={{ padding: "2rem" }}>Loading product details...</p>;
  if (error) return <p style={{ padding: "2rem", color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <Link to="/" style={{ display: "inline-block", marginBottom: "1rem" }}>
        &larr; Back to Products
      </Link>
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", alignItems: "center" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "280px", height: "280px", objectFit: "contain" }}
        />
        <div style={{ flex: 1, minWidth: "250px" }}>
          <span style={{ textTransform: "uppercase", fontSize: "0.85rem", color: "#666" }}>
            {product.category}
          </span>
          <h2 style={{ margin: "0.5rem 0" }}>{product.title}</h2>
          <p style={{ fontSize: "1.4rem", fontWeight: "bold", margin: "0.75rem 0" }}>
            ${product.price.toFixed(2)}
          </p>
          <p style={{ lineHeight: "1.6", color: "#444" }}>{product.description}</p>
          <button
            onClick={() => addToCart(product)}
            style={{
              marginTop: "1rem",
              padding: "0.75rem 1.5rem",
              background: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;