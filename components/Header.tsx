'use client';

import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Work', href: '/work' },
        { label: 'Photo', href: '/photo' },
        { label: 'About Us', href: '/about-us' },
        { label: 'Contact', href: '/contact' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-transparent px-6 py-8 flex items-center justify-between">
            {/* Logo */}
            <div className="text-[#cfb580] text-2xl font-bold uppercase tracking-widest">
                LIGHT HOUSE MEDIA
            </div>

            {/* Nav */}
            <nav className="flex items-center gap-6 text-lg uppercase font-semibold">

                {navItems.map(({ label, href }) => {
                    const isActive = pathname === href;

                    return (
                        <a
                            key={label}
                            href={href}
                            className={`relative px-4 py-2 text-[#cfb580] transition-all duration-300 rounded-md
                                 ${isActive
                                    ? 'underline decoration-[#cfb580] underline-offset-[6px]'
                                    : 'hover:bg-[#cfb580]/40 hover:translate-x-[2px] hover:translate-y-[4px]'
                                }
  `}
                        >
                            {label}
                        </a>

                    );
                })}

                {/* Instagram */}
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
        </header>
    );
}
