// =============================
// app/layout.js
// Drop-in: adds grid overlay + scanline + theme data-attr
// =============================
import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Steffy Khristi — Strategic Creator",
  description: "Logical. Bold. Curious. Practical. Deep.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className="relative min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased">
        {/* Grid & scanner overlays (pure CSS, zero JS) */}
        <div className="grid-overlay" aria-hidden />
        <div className="scanline" aria-hidden />

        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="relative z-[2]">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
