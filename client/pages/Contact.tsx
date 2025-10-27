import { FormEvent, useState } from "react";
import Layout from "@/components/site/Layout";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    
    if (!name.trim() || !email.trim() || !description.trim()) {
      setError("All fields are required.");
      return;
    }
    
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      setError("Please enter a valid email.");
      return;
    }
    
    setStatus("submitting");
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message: description
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      
      // Success - clear form
      setName("");
      setEmail("");
      setDescription("");
      setStatus("success");
      
    } catch (e: any) {
      setStatus("error");
      setError(e?.message || "Failed to send message");
    }
  }

  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
        <div className="mx-auto max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center">Contact</h1>
          <p className="mt-4 text-foreground/70 text-center">Send a message and I’ll get back to you.</p>

          <form onSubmit={onSubmit} className="mt-10 grid gap-4 rounded-2xl border border-border p-6">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full border border-input rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-accent/50"
              required
            />
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full border border-input rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-accent/50"
              required
            />
            <textarea
              placeholder="Your message"
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="min-h-[140px] w-full border border-input rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-accent/50"
              required
            />
            {error && <div className="text-sm text-red-600">{error}</div>}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="h-11 rounded-md bg-foreground text-background px-5 hover:opacity-90 disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Email Me"}
            </button>
            {status === "success" && (
              <div className="text-sm text-green-700">Thanks! Your message was sent.</div>
            )}
          </form>
        </div>
      </section>
    </Layout>
  );
}
