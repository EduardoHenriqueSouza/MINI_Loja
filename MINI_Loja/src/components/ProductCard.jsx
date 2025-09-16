import React from "react";
import Button from "./Button";
import Skeleton from "./Skeleton";

export default function ProductCard({ product, loading = false, onAddToCart }) {
  if (loading) return <Skeleton />;

  return (
    <div className="card">
      <img src={product.image} alt={product.title} loading="lazy" />
      <div className="card-content">
        <div className="title">{product.title}</div>
        <div className="price">R$ {product.price.toFixed(2)}</div>
        <div className="tag">{product.tag}</div>
        <div>★ {product.rating}</div>
        <Button variant="solid" onClick={onAddToCart}>Adicionar</Button>
      </div>
    </div>
  );
}
