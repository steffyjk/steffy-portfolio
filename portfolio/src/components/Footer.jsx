export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/80 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} Steffy Khristi · Ahmedabad, Gujarat
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://github.com/steffyjk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/steffy-khristi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:steffy.jk2018@gmail.com"
            className="text-gray-400 hover:text-white transition"
          >
            steffy.jk2018@gmail.com
          </a>
          <a href="/resume.pdf" download className="text-gray-400 hover:text-white transition">
            Resume
          </a>
          <a href="/terms" className="text-gray-400 hover:text-white transition">
            Terms
          </a>
          <a href="/refund" className="text-gray-400 hover:text-white transition">
            Refund Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
