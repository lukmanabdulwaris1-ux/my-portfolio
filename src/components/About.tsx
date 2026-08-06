import { Target, Zap, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto py-24 px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-white">
            Beyond the <span className="text-blue-400">Terminal</span>
          </h2>
          <p className="text-slate-400 text-lg mb-6 leading-relaxed">
            I’m a Full-Stack Developer who thinks like a Product Owner. I don't just write code; 
            I build systems that solve user frustrations. My approach is centered on 
            <strong> performance, scalability, and clean architecture.</strong>
          </p>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            When I’m not debugging PostgreSQL queries or polishing CSS transitions, I’m 
            exploring the future of AI-integrated web apps and contributing to open-source.
          </p>
          
          <div className="flex gap-8">
            <div>
              <h4 className="text-white font-bold text-2xl">2+</h4>
              <p className="text-slate-500 text-sm">Years Coding</p>
            </div>
            <div>
              <h4 className="text-white font-bold text-2xl">15+</h4>
              <p className="text-slate-500 text-sm">Projects Built</p>
            </div>
          </div>
        </div>

        {/* Bento Grid Features */}
        <div className="grid grid-cols-1 gap-4">
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex gap-4">
            <div className="bg-blue-500/10 p-3 rounded-lg h-fit">
              <Target className="text-blue-400" size={24} />
            </div>
            <div>
              <h4 className="text-white font-semibold">User Centric</h4>
              <p className="text-slate-500 text-sm">I prioritize the end-user experience in every line of code.</p>
            </div>
          </div>
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex gap-4">
            <div className="bg-emerald-500/10 p-3 rounded-lg h-fit">
              <Zap className="text-emerald-400" size={24} />
            </div>
            <div>
              <h4 className="text-white font-semibold">Performance First</h4>
              <p className="text-slate-500 text-sm">Optimizing for Lighthouse scores and sub-second load times.</p>
            </div>
          </div>
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex gap-4">
            <div className="bg-pink-500/10 p-3 rounded-lg h-fit">
              <Heart className="text-pink-400" size={24} />
            </div>
            <div>
              <h4 className="text-white font-semibold">Product Mindset</h4>
              <p className="text-slate-500 text-sm">I build solutions that align with business goals and scale over time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}