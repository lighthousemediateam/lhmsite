import Header from '@/components/Header';
import Link from 'next/link';
import ClientBanner from '../components/ClientBanner';
import styles from './ClientBanner.module.css';

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-[#1a191b] text-[#cfb580] font-sans overflow-hidden">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center h-screen w-full text-center">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover object-center z-0 pointer-events-none"
          >
            <source
              src="https://lhmcollective.b-cdn.net/LHM%20Montage%20250mb.mp4"
              type="video/mp4"
            />
          </video>

          <div className="relative z-10 flex flex-col items-center justify-center px-[6vw] w-full box-border">
            <h1 className="text-[#cfb580] font-semibold uppercase tracking-wider text-center text-[clamp(2rem,6vw,3.5rem)] leading-tight mb-6">
              <span className="block sm:inline">YOUR STORY,</span>{' '}
              <span className="block sm:inline">OUR COMPASS.</span>
            </h1>

            <a
              href="/contact-page"
              className="text-[#cfb580] text-[1.2rem] font-[600] uppercase px-[40px] py-[14px] border-2 border-[#cfb580] rounded-[100px] bg-transparent transition-all duration-300 no-underline hover:bg-[#cfb580] hover:text-[#1a191b] hover:shadow-[0_0_12px_rgba(207,181,128,0.5)]"
            >
              Let’s Connect
            </a>
          </div>
        </section>
        <div className="h-24 sm:h-32" />

        {/* Chosen By Section */}
        <section className="py-16 px-6 text-center">
          <h2 className="text-[#cfb580] text-xl sm:text-2xl font-semibold uppercase mb-12 tracking-wider">
            Chosen By
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-10 gap-y-14 items-center justify-center max-w-7xl mx-auto">
            {[
              { src: "REIGN_White_Text_Transparent.png", alt: "Reign", href: "/work/reign" },
              { src: "virgin hotel logo.png", alt: "Virgin", href: "/work/virgin" },
              { src: "cuisnart logo.png", alt: "Cuisinart", href: "/work/cuisinart" },
              { src: "ppa_logo_white.png", alt: "PPA", href: "/work/ppa" },
              { src: "reign_storm_logo_final_cleaned_v3.png", alt: "Reign Storm", href: "/work/reign-storm" },
              { src: "RecessLogo_RVersion_NoBox_White_300dpi_F.png", alt: "Recess", href: "/work/recess" },
              { src: "arnold_sports_logo_white.png", alt: "Arnold", href: "/work/arnold" },
              { src: "avondale logo.png", alt: "Avondale", href: "/work/avondale" },
              { src: "ChatGPT Image Jul 13, 2025 at 06_58_21 PM.png", alt: "Even Embers", href: "/work/even-embers" },
              { src: "itdrc_logo_white.png", alt: "ITDRC", href: "/work/itdrc" },
              { src: "Blackhawk logo v2.png", alt: "Blackhawk", href: "/work/blackhawk" },
            ].map((logo) => (
              <Link
                key={logo.alt}
                href={logo.href}
                className="trusted-logo-link block hover:opacity-90 transition duration-300"
              >
                <img
                  src={`https://lhmcollective.b-cdn.net/Logos/${encodeURIComponent(logo.src)}`}
                  alt={logo.alt}
                  className="h-16 sm:h-20 max-w-[160px] mx-auto object-contain"
                />
              </Link>
            ))}
          </div>
        </section>
        <div className="h-24 sm:h-32" />

        {/* Gliding Client Banner Section */}
        <ClientBanner />

        {/* Spacer before final CTA */}
        <div className="h-24 sm:h-32" />

        {/* Ready to Get Started Section */}
        <section className="text-center px-6 py-20 bg-[#1a191b] text-[#cfb580]">
          <h2 className="text-[clamp(1.8rem,5vw,2.8rem)] font-semibold uppercase mb-8 tracking-wider">
            Ready to Get Started?
          </h2>

          <a
            href="/contact-page"
            className="text-[#cfb580] text-[1.1rem] font-[600] uppercase px-[40px] py-[14px] border-2 border-[#cfb580] rounded-[100px] bg-transparent transition-all duration-300 inline-block no-underline hover:bg-[#cfb580] hover:text-[#1a191b] hover:shadow-[0_0_12px_rgba(207,181,128,0.5)]"
          >
            Let’s Connect
          </a>
        </section>

        <div className="h-24 sm:h-32" />


        



      </main>
    </>
  );
}
