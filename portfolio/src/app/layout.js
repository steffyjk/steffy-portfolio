import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Steffy Khristi — Strategic Creator",
  description: "Logical. Bold. Curious. Practical. Deep.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
