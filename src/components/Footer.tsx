export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/90 py-8 text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Dev Portfolio. Built with Next.js and Tailwind CSS.</p>
        <p>
          <span className="text-slate-300">Follow:</span>{' '}
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="transition hover:text-white">
            GitHub
          </a>{' '}
          ·{' '}
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="transition hover:text-white">
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}
