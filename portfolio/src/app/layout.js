export const metadata = {
  metadataBase: new URL("https://www.steffy.in"),
  title: {
    default: "Steffy Khristi — Senior Software Engineer",
    template: "%s | Steffy Khristi",
  },
  description:
    "Senior Software Engineer with 4+ years of experience architecting scalable backend systems with Python, Django, Django REST Framework, and FastAPI. REST APIs, PostgreSQL, Celery, Redis, AWS.",
  openGraph: {
    type: "website",
    url: "https://www.steffy.in",
    siteName: "Steffy Khristi — Portfolio",
    title: "Steffy Khristi — Senior Software Engineer",
    description:
      "4+ years building scalable backend systems with Python, Django (DRF), FastAPI, PostgreSQL, Celery, and AWS.",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Steffy Khristi — Senior Software Engineer",
    description:
      "4+ years building scalable backend systems with Python, Django (DRF), FastAPI, PostgreSQL, Celery, and AWS.",
  },
};

import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
