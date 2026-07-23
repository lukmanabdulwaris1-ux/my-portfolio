import { GitBranch, Link2, Mail, Code2, Layers, Server } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans px-6">
      {/* Navigation */}
      <nav className="max-w-5xl mx-auto py-8 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-tighter tracking-widest uppercase">DevName</h1>
        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-400 transition-colors">Projects</a>
          <a href="#" className="hover:text-blue-400 transition-colors">About</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto pt-20 pb-32">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Full-Stack Developer.
          </h2>
          <p className="text-xl text-slate-400 mb-10 leading-relaxed">
            I build robust backend architectures and high-performance frontend experiences. 
            Currently building my 2025 portfolio showcase.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-slate-50 text-slate-950 px-8 py-3 rounded-full font-bold hover:bg-blue-400 transition-all flex items-center gap-2">
              <Mail size={18} /> Contact Me
            </button>
            <div className="flex gap-4">
              <a href="https://github.com" className="p-3 bg-slate-900 border border-slate-800 rounded-full hover:border-blue-400 transition-all">
                <GitBranch size={20} />
              </a>
              <a href="https://linkedin.com" className="p-3 bg-slate-900 border border-slate-800 rounded-full hover:border-blue-400 transition-all">
                <Link2 size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Core Competencies Bento Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-24">
          <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl">
            <Code2 className="text-blue-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Frontend</h3>
            <p className="text-slate-400 text-sm">React, Next.js, TypeScript, Tailwind CSS</p>
          </div>
          <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl">
            <Server className="text-emerald-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Backend</h3>
            <p className="text-slate-400 text-sm">Node.js, PostgreSQL, Redis, REST APIs</p>
          </div>
          <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl">
            <Layers className="text-purple-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">DevOps</h3>
            <p className="text-slate-400 text-sm">Docker, CI/CD, Netlify, AWS</p>
          </div>
        </div>
      </main>
    </div>
  );
}