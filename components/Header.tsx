'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const lastScrollY = useRef(0);

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

  // Scroll behavior for desktop only
  useEffect(() => {
    const threshold = 10; // Ignore scroll changes smaller than 10px

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (window.innerWidth >= 768) {
        const scrollDiff = currentScrollY - lastScrollY.current;

        if (currentScrollY <= 0) {
          setIsScrollingUp(true); // Always show at very top
        } else if (Math.abs(scrollDiff) > threshold) {
          if (scrollDiff < 0) {
            setIsScrollingUp(true); // Scrolling up
          } else {
            setIsScrollingUp(false); // Scrolling down
          }
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* MOBILE brand title */}
      <div className="md:hidden px-6 py-4">
        <Link
          href="/"
          className="text-[#cfb580] text-xl font-bold uppercase tracking-widest hover:opacity-80"
        >
          LIGHT HOUSE MEDIA
        </Link>
      </div>

      {/* MOBILE fixed hamburger icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-1 right-4 bg-[#cfb580] rounded-full p-3 shadow-lg z-50"
      >
        {isOpen ? <X className="text-black w-5 h-5" /> : <Menu className="text-black w-5 h-5" />}
      </button>

      {/* DESKTOP header with scroll behavior */}
      <header
        className={`hidden md:flex fixed top-0 left-0 w-full z-50 bg-transparent px-6 py-8 items-center justify-between transition-transform duration-300 ${isScrollingUp ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <Link
          href="/"
          className="text-[#cfb580] text-2xl font-bold uppercase tracking-widest hover:opacity-80"
        >
          LIGHT HOUSE MEDIA
        </Link>

        <nav className="flex items-center gap-6 text-lg uppercase font-semibold">
          {navItems.map(({ label, href }) => {
            const active = isExactActive(href);
            return (
              <Link
                key={label}
                href={href}
                className={`relative px-4 py-2 text-[#cfb580] transition-all duration-300 rounded-md ${active
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
              <path d="M7.75 2C4.6 2 2 4.6 2 7.75v8.5C2 19.4 4.6 22 7.75 22h8.5C19.4 22 22 19.4 22 16.25v-8.5C22 4.6 19.4 2 16.25 2h-8.5zm0 1.5h8.5c2.17 0 3.75 1.58 3.75 3.75v8.5c0 2.17-1.58 3.75-3.75 3.75h-8.5C5.58 19.5 4 17.92 4 15.75v-8.5C4 5.58 5.58 4 7.75 4zm4.25 3a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zm0 1.5a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5zm5.75-.25a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            </svg>
          </a>
        </nav>
      </header>

      {/* MOBILE overlay menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 pt-24 bg-[#1a191b] flex flex-col items-center justify-center z-40 text-[#cfb580]">
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
