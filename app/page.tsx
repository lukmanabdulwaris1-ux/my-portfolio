import Link from 'next/link';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Projects from '../src/components/Projects';
import Skills from '../src/components/Skills';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <header className="grid gap-12 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 ring-1 ring-blue-500/30">
              Full-stack portfolio · React · Next.js · Data-driven UI
            </div>
            <div>
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                Building polished frontends for modern SaaS and analytics products.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                I design, develop, and deploy production-ready applications with strong product intuition,
                scalable architecture, and fast user experiences.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kanban"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                View Kanban Demo
              </Link>
              <Link
                href="/inventory"
                className="inline-flex items-center justify-center rounded-full border border-slate-800 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-500 hover:text-white"
              >
                Inventory Dashboard
              </Link>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-slate-800 bg-slate-900/70 p-8 shadow-2xl shadow-slate-950/30">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">What I build</p>
            <div className="mt-8 space-y-6">
              <p className="text-slate-300 leading-relaxed">
                SaaS dashboards, collaboration tools, and analytics applications with a focus on clarity,
                speed, and long-term maintainability.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <Stat label="Fast frontends" value="Next.js + Tailwind" />
                <Stat label="Data flow" value="Supabase & PostgreSQL" />
                <Stat label="Type-safe" value="TypeScript everywhere" />
                <Stat label="Design" value="Responsive UI systems" />
              </div>
            </div>
          </aside>
        </header>

        <div className="mt-20 space-y-24">
          <Projects />
          <Skills />
          <About />
          <Contact />
        </div>
      </div>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
      <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{label}</p>
      <p className="mt-3 text-lg font-semibold text-white">{value}</p>
    </div>
  );
}
