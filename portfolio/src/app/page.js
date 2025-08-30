export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-bold">Steffy Khristi</h1>
      <p className="mt-4 text-lg">Software Engineer | Python + Full Stack Developer</p>
      <div className="mt-6 flex gap-4">
        <a
          href="/Steffy_Resume.pdf"
          className="px-4 py-2 bg-black text-white rounded-lg"
        >
          Download Resume
        </a>
        <a
          href="/contact"
          className="px-4 py-2 border rounded-lg"
        >
          Contact Me
        </a>
      </div>
    </main>
  );
}
