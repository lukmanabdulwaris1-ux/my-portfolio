"use client";
import React, { useState } from 'react';
import { Mail, MessageSquare, Phone } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      if (!res.ok) {
        setStatus('error');
        setErrorMsg(data?.error || 'Submission failed');
        return;
      }

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(String(err));
    }
  }

  return (
    <section id="contact" className="max-w-5xl mx-auto py-24 px-6">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-blue-400">Let's build something</p>
            <h2 className="mt-4 text-4xl font-bold text-white">Ready to collaborate?</h2>
            <p className="mt-6 text-slate-400 leading-relaxed">
              I design and build accessible, performant web applications for modern teams. If you have a product idea,
              startup roadmap, or open problem, let's connect and ship something impactful.
            </p>

            <div className="mt-8 space-y-4 text-slate-300">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-400" />
                <a href="lukmanabdulwaris1@gmail.com" className="hover:text-white">
                  lukmanabdulwaris1@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-emerald-400" />
                <a href="https://wa.me/09027957527" className="hover:text-white" target="_blank" rel="noreferrer">
                  WhatsApp: 09027957527
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sky-400">in</span>
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="hover:text-white">
                  linkedin.com/in/yourprofile
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-950/80 p-8 border border-slate-800">
            <div className="flex items-center gap-3 text-slate-200 mb-6">
              <MessageSquare className="text-blue-400" />
              <h3 className="text-xl font-semibold">Quick note</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-slate-300">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-2 w-full rounded-md border border-slate-700 bg-slate-900/50 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-sm text-slate-300">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-2 w-full rounded-md border border-slate-700 bg-slate-900/50 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-sm text-slate-300">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="mt-2 w-full rounded-md border border-slate-700 bg-slate-900/50 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white disabled:opacity-60"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'success' && <span className="text-emerald-400">Message sent — thank you!</span>}
                {status === 'error' && <span className="text-red-400">{errorMsg || 'Submission failed'}</span>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
