"use client";

const skills = [
  { name: "Next.js", color: "bg-gray-800" },
  { name: "TypeScript", color: "bg-blue-900" },
  { name: "Tailwind", color: "bg-cyan-900" },
  { name: "Node.js", color: "bg-green-800" },
  { name: "PostgreSQL", color: "bg-sky-800" },
  { name: "Supabase", color: "bg-emerald-800" },
  { name: "Prisma", color: "bg-indigo-800" },
  { name: "Docker", color: "bg-blue-800" },
];

function initials(name: string) {
  return name
    .split(/\s|\.|-/)
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function Skills() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-6">
      <h3 className="text-2xl font-bold mb-10 text-slate-300">Technical Arsenal</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center gap-3 p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-blue-500/50 transition-all group">
            <span className={`inline-flex h-10 w-10 items-center justify-center rounded-md ${skill.color} text-sm font-bold text-white`}>{initials(skill.name)}</span>
            <span className="text-slate-300 font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}