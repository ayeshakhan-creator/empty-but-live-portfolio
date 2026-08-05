import Link from "next/link";

const projects = [
  {
    title: "FlyRank Frontend Capstone",
    description:
      "A frontend engineering project built with Next.js and AI-assisted development.",
    technologies: "Next.js, React, TypeScript",
  },
  {
    title: "AI Website Analyzer",
    description:
      "An AI-powered website analysis interface that evaluates project quality and SEO-related information.",
    technologies: "Next.js, AI SDK, Groq",
  },
  {
    title: "Remed Aura Organic Store",
    description:
      "An e-commerce mobile application for browsing organic soap products, managing a cart, and completing checkout.",
    technologies: "Flutter, Dart, Firebase",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <nav className="border-b border-zinc-200">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-bold">
            Ayesha Khan
          </Link>

          <div className="flex gap-5 text-sm">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold">Projects</h1>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-xl border border-zinc-200 p-6"
            >
              <h2 className="text-xl font-bold">{project.title}</h2>

              <p className="mt-3 leading-7 text-zinc-600">
                {project.description}
              </p>

              <p className="mt-5 text-sm font-medium text-blue-600">
                {project.technologies}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}