import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-lg bg-white/10 border-b border-white/20">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16 text-white">
        {/* Logo / Name */}
        <span className="font-bold text-lg tracking-wide">Steffy Khristi</span>

        {/* Nav Links */}
        <div className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-gray-300 transition">
            Home
          </Link>
          <Link href="/skills" className="hover:text-gray-300 transition">
            Skills
          </Link>
          <Link href="/projects" className="hover:text-gray-300 transition">
            Projects
          </Link>
          <Link href="/experience" className="hover:text-gray-300 transition">
            Experience
          </Link>
          <Link href="/contact" className="hover:text-gray-300 transition">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
