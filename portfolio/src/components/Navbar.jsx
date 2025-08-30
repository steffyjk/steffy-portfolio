import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 h-14">
        <span className="font-bold">Steffy Khristi</span>
        <div className="flex gap-4 text-sm">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
