import Link from 'next/link';

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <nav className="mx-auto max-w-6xl px-6 py-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <Link href="/" className="text-xl font-semibold text-white">
        Dev Portfolio
      </Link>

      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="transition-colors hover:text-white">
            {link.label}
          </a>
        ))}
        <Link href="/kanban" className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-slate-200 transition hover:border-blue-500 hover:text-white">
          Live Demos
        </Link>
      </div>
    </nav>
  );
}
