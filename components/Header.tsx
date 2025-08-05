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
    { label: 'ugc', href: '/ugc' },
    { label: 'Photo', href: '/photo' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const isExactActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ✅ FIXED BRAND TEXT ON MOBILE */}
      <div className="md:hidden fixed top-0 left-0 w-full z-40 bg-[#1a191b] px-6 py-4">
        <div className="text-[#cfb580] text-xl font-bold uppercase tracking-widest">
          LIGHT HOUSE MEDIA
        </div>
      </div>

      {/* ✅ DESKTOP HEADER */}
      <header className="hidden md:flex fixed top-0 left-0 w-full z-50 bg-[#1a191b] px-6 py-8 items-center justify-between">
        <div className="text-[#cfb580] text-2xl font-bold uppercase tracking-widest">
          LIGHT HOUSE MEDIA
        </div>

        <nav className="flex items-center gap-6 text-lg uppercase font-semibold">
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

          <a
            href="https://www.instagram.com/lhmteam"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            <svg
              className="w-5 h-5 fill-[#cfb580] hover:opacity-80 transition-opacity duration-200"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.75 2C4.6 2 2 4.6 2 7.75v8.5C2 19.4 4.6 22 7.75 22h8.5C19.4 22 22 19.4 22 16.25v-8.5C22 4.6 19.4 2 16.25 2h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zM18 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </a>
        </nav>
      </header>

      {/* ✅ HAMBURGER BUTTON THAT SCROLLS WITH PAGE (placed in document flow) */}
      <div className="md:hidden px-6 pt-20">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#cfb580] rounded-full p-3 shadow-lg"
        >
          {isOpen ? <X className="text-black w-5 h-5" /> : <Menu className="text-black w-5 h-5" />}
        </button>
      </div>

      {/* ✅ MOBILE OVERLAY MENU */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#1a191b] flex flex-col items-center justify-center text-[#cfb580] pt-24">
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
    </>
  );
}
