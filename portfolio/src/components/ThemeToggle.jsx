// =============================
// components/ThemeToggle.jsx (optional)
// If you want a light variant occasionally. Add to Navbar if needed.
// =============================
"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <button
      className="btn"
      onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
    >
      <span className="mono">
        {theme === "dark" ? "// light()" : "// dark()"}
      </span>
    </button>
  );
}
