const projects = [
  {
    title: "KanbanFlow SaaS",
    description: "A real-time task management system with drag-and-drop functionality and instant database sync.",
    tech: ["Next.js", "Supabase", "Dnd-kit", "TypeScript"],
    link: "/kanban", // Link to your internal page
    github: "https://github.com/yourusername/kanban",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80" 
  },
  {
    title: "StockPro Analytics",
    description: "Inventory dashboard featuring real-time data visualization, low-stock alerts, and financial reporting.",
    tech: ["Recharts", "PostgreSQL", "Tailwind CSS", "Node.js"],
    link: "/inventory",
    github: "https://github.com/yourusername/inventory",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  }
];

export default function ProjectGallery() {
  return (
    <section id="projects" className="max-w-5xl mx-auto py-24 px-6">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">Featured Work</h2>
          <p className="text-slate-400">Selected full-stack applications built in 2025.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
            {/* Image Placeholder */}
            <div className="aspect-video w-full bg-slate-800 relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex gap-4">
                <a href={project.link} className="flex items-center gap-2 text-white bg-slate-800 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Live Demo
                </a>
                <a href={project.github} className="flex items-center gap-2 text-slate-400 hover:text-white px-4 py-2 text-sm font-medium transition-colors">
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}