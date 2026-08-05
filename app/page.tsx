const projects = [
  {
    title: "FlyRank Frontend Capstone",
    description:
      "A frontend engineering project built with Next.js and AI-assisted development workflows.",
    tech: "Next.js • TypeScript • Tailwind CSS • AI",
    link: "https://fly-rank-frontend-capstone-cgq7risje.vercel.app",
  },
  {
    title: "AI Website Analyzer",
    description:
      "An AI-powered website analysis interface that evaluates a project URL and provides structured feedback, strengths, improvements, and SEO-related insights.",
    tech: "Next.js • AI SDK • Groq • TypeScript",
    link: "https://fly-rank-frontend-capstone-cgq7risje.vercel.app",
  },
  {
    title: "Remed Aura",
    description:
      "An e-commerce mobile application concept for an organic skincare brand, focused on product browsing, cart, checkout, and administration.",
    tech: "Flutter • Dart • Firebase • Firestore",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-xl font-bold">
            Ayesha Khan
          </a>

          <div className="hidden gap-6 text-sm text-slate-300 sm:flex">
            <a href="#home" className="hover:text-white">
              Home
            </a>
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="mx-auto flex min-h-[80vh] max-w-6xl items-center px-6 py-20"
      >
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Frontend Engineering with AI
          </p>

          <h1 className="text-5xl font-bold leading-tight sm:text-7xl">
            Hi, I&apos;m Ayesha.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I&apos;m an IT student and frontend developer building modern web
            applications with AI-assisted development workflows.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-y border-white/10 bg-slate-900/60"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            About
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            A work-in-progress portfolio
          </h2>

          <p className="mt-6 max-w-3xl text-slate-300 leading-8">
            I am currently developing my skills in frontend engineering,
            artificial intelligence, and modern web technologies. This
            portfolio collects projects and learning milestones that show how
            I use AI as a development partner while still understanding the
            code and decisions behind my work.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
              <h3 className="font-bold">Frontend</h3>
              <p className="mt-2 text-sm text-slate-400">
                React, Next.js, TypeScript and Tailwind CSS.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
              <h3 className="font-bold">AI</h3>
              <p className="mt-2 text-sm text-slate-400">
                AI SDKs, prompt engineering and AI-assisted development.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
              <h3 className="font-bold">Learning</h3>
              <p className="mt-2 text-sm text-slate-400">
                Building projects and learning through practical assignments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          Selected Work
        </p>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Projects & Case Studies
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500/50"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                Project
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                {project.description}
              </p>

              <p className="mt-5 text-sm text-slate-400">
                {project.tech}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-sm font-semibold text-blue-400 hover:text-blue-300"
                >
                  View Live Project →
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* STILL UGLY */}
      <section className="border-y border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Honest Progress
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Still Ugly List
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            This portfolio is intentionally a work in progress. These are the
            areas I already know need improvement.
          </p>

          <ul className="mt-8 space-y-4 text-slate-300">
            <li>• Visual design and spacing still need refinement.</li>
            <li>• More detailed case studies need to be added.</li>
            <li>• Project screenshots and visual assets are still limited.</li>
            <li>• Mobile responsiveness needs additional testing.</li>
            <li>• More accessibility and performance improvements are planned.</li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          Contact
        </p>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Let&apos;s connect
        </h2>

        <p className="mt-5 max-w-xl leading-7 text-slate-300">
          I&apos;m open to connecting with developers, designers, recruiters,
          and people interested in AI and frontend engineering.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://github.com/ayeshakhan-creator"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-6 py-3 font-semibold hover:bg-white/10"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-6 py-3 font-semibold hover:bg-white/10"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
        © 2026 Ayesha Khan. Built with Next.js and AI-assisted development.
      </footer>
    </main>
  );
}