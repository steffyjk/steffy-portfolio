export default function Projects() {
  const projects = [
  {
    title: "Unibox – Unified Chat Platform",
    description: "Unified chat platform integrating WhatsApp, Telegram, and internal messaging into one interface with real-time communication and multi-platform sync.",
    tech: ["Django", "React", "PostgreSQL", "WebSockets", "Django Channels", "Telethon"]
  },
  {
    title: "VENUS Tender Management System",
    description: "Full-stack vendor & tender management solution with real-time updates, modular Angular frontend, and Azure-powered CI/CD.",
    tech: ["Angular", "Django", "RxJS", "PostgreSQL", "Azure DevOps"]
  },
  {
    title: "PMS – Project Management System",
    description: "Robust platform to streamline project planning, execution, and monitoring with dynamic Angular UI and secure DRF APIs.",
    tech: ["AngularTS", "Django Rest Framework"]
  },
  {
    title: "TMS – Task Management System",
    description: "Intuitive solution for task organization, assignment, and tracking with Angular frontend and DRF backend integration.",
    tech: ["AngularTS", "Django Rest Framework"]
  },
  {
    title: "Job Portal",
    description: "Developed producer-consumer with RabbitMQ for microservices communication, added dynamic filters for recruiters to refine candidate searches.",
    tech: ["RabbitMQ", "Microservices", "Django/Flask"]
  },
  {
    title: "Bank Management System",
    description: "Secure Flask application for online banking with account management, transactions, Razorpay integration, and Celery for async tasks.",
    tech: ["Flask", "Celery", "PostgreSQL", "Razorpay"]
  },
  {
    title: "NetBanking APIs",
    description: "RESTful API version of the Bank Management System for handling secure banking operations programmatically.",
    tech: ["Flask-RESTful", "Celery", "PostgreSQL"]
  },
  {
    title: "MakeMyTrip Clone",
    description: "Clone of MakeMyTrip with RESTful endpoints for flights, hotels, and holiday packages along with Razorpay payments.",
    tech: ["Django Rest Framework", "Celery", "PostgreSQL", "Razorpay"]
  },
  {
    title: "Pinterest Clone",
    description: "Web app replicating Pinterest functionality: pinning images, creating boards, following users, and engaging with content.",
    tech: ["Django", "Celery", "PostgreSQL", "Chrome Extension"]
  },
  {
    title: "Web Scrapers",
    description: "Developed scrapers for internal company portal, LinkedIn, Pinterest, and YouTube with scheduling support.",
    tech: ["Selenium", "Scrapy", "Cronjob"]
  }
]
;

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
