"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
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
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-200"
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <XMarkIcon className="h-7 w-7 text-blue-900" />
          ) : (
            <Bars3Icon className="h-7 w-7 text-blue-900" />
          )}
        </button>
      </div>
      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-sm px-4 pb-4">
          <ul className="flex flex-col gap-2 text-base font-sans text-blue-900">
            {navLinks.map(link => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block w-full py-2 px-2 rounded hover:bg-sky-50 hover:text-sky-600 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-200"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
} 