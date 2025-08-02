'use client';

export default function AboutHero() {
  return (
    <div className="relative w-full h-screen overflow-hidden font-sans bg-[#1a191b] text-[#cfb580]">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="https://lhmcollective.b-cdn.net/LHM%20Montage%20150mb%20export.mp4" type="video/mp4" />
      </video>

      <div className="absolute z-20 text-center text-[#cfb580] text-[3.15rem] font-bold uppercase tracking-wider leading-[1.1] top-[calc(45%+120px)] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-shadow-md max-w-[90%]">
        <span className="block sm:inline">ABOUT US.</span>
      </div>

      <a
        href="/contact-page"
        className="absolute z-20 top-[calc(58%+70px)] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#cfb580] font-semibold uppercase text-sm px-7 py-3 border-2 border-[#cfb580] rounded-full transition-all duration-300 hover:bg-[#cfb580] hover:text-[#1a191b] hover:shadow-[0_0_16px_rgba(207,181,128,0.6)]"
      >
        Let&apos;s Connect
      </a>

      <style jsx>{`
        @media (max-width: 768px) {
          div.text-[3.15rem] {
            font-size: 2.7rem;
            top: 50%;
            line-height: 1.25;
            padding: 0 20px;
          }

          a[href="/contact-page"] {
            top: 67%;
            font-size: 13px;
            padding: 10px 24px;
          }
        }

        .text-shadow-md {
          text-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </div>
  );
}
