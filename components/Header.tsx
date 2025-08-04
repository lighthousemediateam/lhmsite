'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';


export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
    { label: 'ugc', href: '/ugc'},
    { label: 'Photo', href: '/photo' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const isExactActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent px-6 py-8 flex items-center justify-between">
      {/* Logo */}
      <div className="text-[#cfb580] text-2xl font-bold uppercase tracking-widest">
        LIGHT HOUSE MEDIA
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-6 text-lg uppercase font-semibold">
        {navItems.map(({ label, href }) => {
          const active = isExactActive(href);

          return (
            <Link
              key={label}
              href={href}
              className={`relative px-4 py-2 text-[#cfb580] transition-all duration-300 rounded-md
                ${active
                  ? 'underline decoration-[#cfb580] underline-offset-[6px]'
                  : 'hover:bg-[#cfb580]/40 hover:translate-x-[2px] hover:translate-y-[4px]'
                }`}
            >
              {label}
            </Link>
          );
        })}

        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2"
        >
          <svg
            className="w-5 h-5 fill-[#cfb580] hover:opacity-80 transition-opacity duration-200"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.2c3.2 0 3.6 0 4.9.1..." />
          </svg>
        </a>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden bg-[#cfb580] rounded-full p-3 shadow-lg transition-all"
      >
        {isOpen ? <X className="text-black w-5 h-5" /> : <Menu className="text-black w-5 h-5" />}
      </button>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-[#1a191b] flex flex-col items-center justify-center z-40 text-[#cfb580]">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 bg-[#cfb580] text-black p-3 rounded-full shadow-lg"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Nav Links */}
          <div className="flex flex-col space-y-8 text-3xl font-bold uppercase">
            {navItems.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                className="hover:opacity-80"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/lhmteam"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10"
          >
            <svg
              className="w-6 h-6 fill-[#cfb580] hover:opacity-80 transition-opacity duration-200"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.2c3.2 0 3.6 0 4.9.1..." />
            </svg>
          </a>
        </div>
      )}

    </header>
  );
}
