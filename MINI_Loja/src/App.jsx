import React from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";
import "./styles/global.css";

export default function App() {
  const [loading, setLoading] = React.useState(true);
  const [cartCount, setCartCount] = React.useState(0);

  React.useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handleAddToCart = () => setCartCount(prev => prev + 1);

  return (
    <>
      <Navbar cartCount={cartCount} />
      <div className="grid-container">
        {products.map(p => (
          <ProductCard
            key={p.id}
            product={p}
            loading={loading}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </>
  );
}
