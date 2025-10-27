import Layout from "@/components/site/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Index() {
  const email = "mohammedsameers766@gmail.com";
  const phone = "+917702586415";
  const mailto = `mailto:${email}?subject=Intro%20Call%20with%20Mohammed%20Sameer%20Ahmed`;
  const tel = `tel:${phone}`;

  const projects = [
    {
      name: "Meditrack",
      stack: ["Python"],
      description:
        "A health record and medication tracker with reminders, analytics, and exportable reports.",
    },
    {
      name: "Anti‑Doping System",
      stack: ["Data Analytics"],
      description:
        "Data‑driven pipeline to detect anomalies in athlete samples using statistical tests and ML baselines.",
    },
    {
      name: "Hotel Management System",
      stack: ["Python"],
      description:
        "Reservation, billing, and inventory management with clean CLI and CSV/SQLite persistence.",
    },
  ];

  const technical = [
    "SQL",
    "Python",
    "Statistics",
    "Data Visualization",
    "AI Automation",
    "Machine Learning",
    "React.js",
    "MongoDB",
  ];
  const tools = ["Tableau", "Power BI", "Excel"];

  return (
    <Layout>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 pt-12 md:pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
          <div className="animate-in fade-in-0 slide-in-from-left-4 duration-700">
            <p className="text-sm uppercase tracking-widest text-foreground/60 animate-in fade-in-0 slide-in-from-left-4 duration-500 delay-200">Hey, I'm Mohammed Sameer</p>
            <h1 className="mt-4 text-5xl leading-[1.05] md:text-7xl font-extrabold tracking-tight">Designing & Building Software that Connects</h1>
            <p className="mt-6 text-lg text-foreground/70 max-w-xl">Full‑stack developer based in Hyderabad, India. I create reliable, human‑centered web apps with a focus on clarity, performance, and measurable impact.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={mailto}>
                <Button className="h-12 px-6 rounded-full text-base">Book 15‑min Intro Call</Button>
              </a>
              <a href={tel} className="text-base hover:opacity-80">Call: +91 77025 86415</a>
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto aspect-[3/4] w-72 sm:w-80 md:w-96 rounded-[2rem] overflow-hidden shadow-xl">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fc7d44bac8a3a4e9996de917c7775b348%2F856e56b186d74d5999a21c32a563f62c?format=webp&width=800"
                alt="Mohammed Sameer Ahmed portrait"
                className="h-full w-full object-cover"
                loading="eager"
                fetchpriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro blurb */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 pb-6 md:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <p className="text-foreground/80 text-lg leading-relaxed">I craft clean, impactful, and timeless digital experiences. My approach blends strong fundamentals with thoughtful details—clear information architecture, accessible UI, and maintainable code.</p>
          <p className="text-foreground/60 text-lg leading-relaxed">I’m inspired by architecture and modern product design, and constantly learn across data, AI, and web. This helps me bring fresh, pragmatic perspectives to every build.</p>
        </div>
      </section>

      {/* Divider label */}
      <section id="works" className="mx-auto max-w-6xl px-4 md:px-6 mt-6">
        <div className="flex items-center gap-3 text-sm">
          <span className="size-2 rounded-full bg-accent" />
          <span className="uppercase tracking-widest text-foreground/60">Portfolio</span>
        </div>
        <div className="mt-3 h-px w-full bg-border" />
        <h2 className="mt-6 text-3xl md:text-5xl font-extrabold tracking-tight">Featured Works</h2>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 mt-8 grid gap-6 md:gap-8">
        {projects.map((p) => (
          <article key={p.name} className="group rounded-3xl border border-border/70 bg-card/40 p-6 md:p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{p.name}</h3>
              <div className="hidden sm:flex gap-2">
                {p.stack.map((t) => (
                  <Badge key={t} variant="secondary" className="rounded-full">{t}</Badge>
                ))}
              </div>
            </div>
            <p className="mt-3 text-foreground/70 max-w-3xl">{p.description}</p>
            <div className="mt-5 flex flex-wrap gap-2 sm:hidden">
              {p.stack.map((t) => (
                <Badge key={t} variant="secondary" className="rounded-full">{t}</Badge>
              ))}
            </div>
            <div className="mt-6">
              <a href="/contact" className="text-primary hover:underline">Request demo / details</a>
            </div>
          </article>
        ))}
      </section>

      {/* Skills */}
      <section id="about" className="mx-auto max-w-6xl px-4 md:px-6 mt-16">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Skills</h2>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-sm uppercase tracking-widest text-foreground/60">Technical</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {technical.map((s) => (
                <Badge key={s} variant="outline" className="rounded-full px-3 py-1 text-foreground/80 border-foreground/20">{s}</Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-widest text-foreground/60">Tools</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {tools.map((s) => (
                <Badge key={s} variant="outline" className="rounded-full px-3 py-1 text-foreground/80 border-foreground/20">{s}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education, Certifications, Achievements */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 mt-16 grid gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Education</h2>
          <div className="mt-6 rounded-2xl border border-border/70 p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <h3 className="text-xl font-semibold">Malla Reddy University — B.Tech Computer Science (Data Science)</h3>
                <p className="text-foreground/60">2023 – 2027</p>
              </div>
              <Badge className="rounded-full">Top 5% of batch</Badge>
            </div>
            <p className="mt-4 text-foreground/70">Relevant coursework: Data Science, Machine Learning, Statistics, Visualization.</p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Certifications</h2>
          <ul className="mt-6 grid gap-3 text-foreground/80">
            <li>• C++ Programming – Scaler Certificate of Excellence</li>
            <li>• Google‑Supported AI‑ML Virtual Internship – 10 Weeks (2024)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Achievements</h2>
          <ul className="mt-6 grid gap-3 text-foreground/80">
            <li>• Cambridge English Empower B2 Level – Certificate of Completion (2024)</li>
            <li>• First Prize – Generative Art using AI</li>
            <li>• 3rd Prize – Website building using multiple sources</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 my-20">
        <div className="rounded-3xl border border-border/70 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Let’s build something great</h3>
            <p className="mt-2 text-foreground/70">Available for internships, full‑time, and freelance opportunities.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={mailto}>
              <Button className="h-12 px-6 rounded-full text-base">Email me</Button>
            </a>
            <a href={tel} className="h-12 px-6 rounded-full text-base border border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-md">Call</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
