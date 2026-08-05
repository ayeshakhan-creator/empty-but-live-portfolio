import Link from "next/link";

export default function About() {
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
        <h1 className="text-4xl font-bold">About Me</h1>

        <p className="mt-6 max-w-2xl leading-8 text-zinc-600">
          I&apos;m an IT student exploring frontend development, AI
          engineering, and cybersecurity. I enjoy learning by building
          practical projects and using AI as a development partner.
        </p>

        <h2 className="mt-12 text-2xl font-bold">Skills</h2>

        <ul className="mt-5 space-y-2 text-zinc-600">
          <li>• HTML, CSS and JavaScript</li>
          <li>• React and Next.js</li>
          <li>• TypeScript</li>
          <li>• Git and GitHub</li>
          <li>• AI-assisted development</li>
        </ul>
      </section>
    </main>
  );
}