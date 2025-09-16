import React from "react";

export default function Button({ children, variant = "solid", disabled = false, loading = false, ...props }) {
  return (
    <button
      className={variant}
      disabled={disabled || loading}
      {...props}
      style={{ padding: "8px 12px", borderRadius: "6px", fontWeight: "500", transition: "all 200ms" }}
    >
      {loading ? "Carregando..." : children}
    </button>
  );
}
