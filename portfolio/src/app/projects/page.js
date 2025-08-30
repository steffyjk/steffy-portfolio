export default function Projects() {
  const projects = [
    {
      title: "Unibox – Unified Chat Platform",
      description:
        "WhatsApp + Telegram + internal messaging with real-time sync.",
      tech: ["Django", "React", "PostgreSQL"],
    },
    {
      title: "VENUS Tender Management",
      description:
        "Full-stack solution with Angular + Django + RxJS + Azure.",
      tech: ["Angular", "Django", "RxJS"],
    },
  ];

  return (
    <section className="grid gap-6 sm:grid-cols-2">
      {projects.map((p, i) => (
        <article key={i} className="border rounded-xl p-5">
          <h3 className="font-semibold">{p.title}</h3>
          <p className="mt-2 text-sm text-gray-600">{p.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-1 text-xs border rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
