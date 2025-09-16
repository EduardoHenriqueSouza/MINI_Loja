import React from "react";
import { getTheme, setTheme } from "../utils/localStorage";

export default function Navbar({ cartCount }) {
  const [theme, setThemeState] = React.useState(getTheme());

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
    setThemeState(newTheme);
  };

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  return (
    <nav style={{ padding: "12px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, background: "var(--bg)", zIndex: 10, boxShadow: "var(--shadow)" }}>
      <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Logo</div>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <button onClick={toggleTheme}>{theme === "light" ? "🌞" : "🌙"}</button>
        <div style={{ position: "relative" }}>
          <button>🛒</button>
          {cartCount > 0 && <span style={{ position: "absolute", top: -4, right: -4, background: "red", color: "#fff", borderRadius: "50%", fontSize: "0.75rem", padding: "2px 6px" }}>{cartCount}</span>}
        </div>
      </div>
    </nav>
  );
}
