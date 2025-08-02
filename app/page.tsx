
import Link from 'next/link';
import ClientBanner from '../components/ClientBanner';
import styles from './ClientBanner.module.css';
import ServicesSection from '@/components/ServicesSection';

export default function Home() {
  return (
    <>
     

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
              src="https://lhmcollective.b-cdn.net/LHM%20Montage%20150mb%20export.mp4"
              type="video/mp4"
            />
          </video>

          <div className="relative z-10 flex flex-col items-center justify-center px-[6vw] w-full box-border">
            <h1 className="text-[#cfb580] font-semibold uppercase tracking-wider text-center text-[clamp(2rem,6vw,3.5rem)] leading-tight mb-6">
              <span className="block sm:inline">YOUR STORY,</span>{' '}
              <span className="block sm:inline">OUR COMPASS.</span>
            </h1>

            <a
              href="/contact"
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

          <div className="flex flex-wrap justify-center gap-x-10 gap-y-14 max-w-7xl mx-auto">
            {[
              {
                src: "https://lhmcollective.b-cdn.net/Logos/REIGN_White_Text_Transparent.png",
                alt: "Reign",
                href: "/work/reign",
              },
              {
                src: "https://lhmcollective.b-cdn.net/Logos/virgin%20hotel%20logo.png",
                alt: "Virgin",
                href: "/work/virgin",
                scale: "scale-[1.25]",
              },
              {
                src: "https://lhmcollective.b-cdn.net/Logos/cuisnart%20logo.png",
                alt: "Cuisinart",
                href: "/work/cuisinart",
                scale: "scale-[2]",
              },
              {
                src: "https://lhmcollective.b-cdn.net/Logos/ppa_logo_white.png",
                alt: "PPA",
                href: "/work/ppa",
              },
              {
                src: "https://lhmcollective.b-cdn.net/Logos/reign_storm_logo_final_cleaned_v3.png",
                alt: "Reign Storm",
                href: "/work/reign-storm",
              },
              {
                src: "https://lhmcollective.b-cdn.net/Logos/RecessLogo_RVersion_NoBox_White_300dpi_F.png",
                alt: "Recess",
                href: "/work/recess",
              },
              {
                src: "https://lhmcollective.b-cdn.net/Logos/arnold_sports_logo_white.png",
                alt: "Arnold",
                href: "/work/arnold",
              },
              {
                src: "https://lhmcollective.b-cdn.net/Logos/avondale%20logo.png",
                alt: "Avondale",
                href: "/work/avondale",
                scale: "scale-[2.25]",
              },
              {
                src: "https://lhmcollective.b-cdn.net/Logos/ChatGPT%20Image%20Jul%2013,%202025%20at%2006_58_21%20PM.png",
                alt: "Even Embers",
                href: "/work/even-embers",
                scale: "scale-[2]",
              },
              {
                src: "https://lhmcollective.b-cdn.net/Logos/itdrc_logo_white.png",
                alt: "ITDRC",
                href: "/work/itdrc",
              },
              {
                src: "https://lhmcollective.b-cdn.net/Blackhawk%20logo%20v2.png",
                alt: "Blackhawk",
                href: "/work/blackhawk",
                scale: "scale-[1.75]",
              },
            ].map((logo) => (
              <Link
                key={logo.alt}
                href={logo.href}
                className="trusted-logo-link block w-1/2 sm:w-1/3 lg:w-1/6 flex justify-center hover:opacity-90 transition duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`h-12 ${logo.scale || ""}`}
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

        <ServicesSection />
        <div className="h-24 sm:h-32" />


        {/* Spacer before final CTA */}
        <div className="h-24 sm:h-32" />


        {/* Ready to Get Started Section */}
        <section className="text-center px-6 py-20 bg-[#1a191b] text-[#cfb580]">
          <h2 className="text-[clamp(1.8rem,5vw,2.8rem)] font-semibold uppercase mb-8 tracking-wider">
            Ready to Get Started?
          </h2>

          <a
            href="/contact"
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
