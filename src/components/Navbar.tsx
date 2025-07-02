import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur-md border-b border-blue-100 shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3 sm:py-4">
        <span className="font-serif text-2xl text-rose-800 tracking-tight select-none">Blake Therapy</span>
        <ul className="hidden md:flex gap-8 text-base font-sans text-blue-900/80">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link href={link.href} className="hover:text-sky-600 transition-colors duration-200 rounded px-2 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-200">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile menu placeholder for future */}
      </div>
    </nav>
  );
} 