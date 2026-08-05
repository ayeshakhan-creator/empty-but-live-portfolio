import Link from "next/link";

export default function Contact() {
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
        <h1 className="text-4xl font-bold">Contact</h1>

        <p className="mt-6 max-w-xl leading-8 text-zinc-600">
          I&apos;m open to internship opportunities, collaboration, and
          conversations about frontend engineering and AI.
        </p>

        <div className="mt-8 space-y-3">
          <p>
            <strong>Email:</strong> your-email@example.com
          </p>

          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/ayeshakhan-creator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              GitHub Profile
            </a>
          </p>

          <p>
            <strong>LinkedIn:</strong> Add your LinkedIn profile here
          </p>
        </div>
      </section>
    </main>
  );
}