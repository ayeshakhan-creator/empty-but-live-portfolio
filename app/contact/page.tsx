"use client";

import Link from "next/link";
import { FormEvent } from "react";

export default function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = encodeURIComponent(
      `Portfolio Contact from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:ayeshakhanapril@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Navigation */}
      <nav className="border-b border-zinc-200">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-bold">
            Ayesha Khan
          </Link>

          <div className="flex gap-5 text-sm">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact" className="font-semibold text-blue-600">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold">Contact Me</h1>

        <p className="mt-6 max-w-xl leading-8 text-zinc-600">
          I&apos;m open to internship opportunities, collaboration, and
          conversations about frontend engineering and AI.
        </p>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold">Send a Message</h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-zinc-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-zinc-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-lg border border-zinc-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="rounded-lg bg-zinc-900 px-6 py-3 font-medium text-white transition hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold">Get in Touch</h2>

            <div className="mt-6 space-y-5 text-zinc-600">
              <p>
                <strong className="text-zinc-900">Email:</strong>{" "}
                ayeshakhanapril@gmail.com
              </p>

              <p>
                <strong className="text-zinc-900">GitHub:</strong>{" "}
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
                <strong className="text-zinc-900">LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/ayesha-khan-155811296/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  LinkedIn Profile
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}