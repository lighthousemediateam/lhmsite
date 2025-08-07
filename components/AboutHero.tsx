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
        <source
          src="https://lhmcollective.b-cdn.net/LHM%20Montage%20150mb%20export.mp4"
          type="video/mp4"
        />
      </video>

      {/* New flex wrapper */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-[3.15rem] sm:text-[2.7rem] font-bold uppercase tracking-wider leading-[1.1] text-shadow-md max-w-[90%]">
          <span className="block sm:inline">ABOUT US.</span>
        </h1>

        <a
          href="/contact-page"
          className="mt-8 text-[#cfb580] font-semibold uppercase text-sm px-7 py-3 border-2 border-[#cfb580] rounded-full transition-all duration-300 hover:bg-[#cfb580] hover:text-[#1a191b] hover:shadow-[0_0_16px_rgba(207,181,128,0.6)]"
        >
          Let&apos;s Connect
        </a>
      </div>

      <style jsx>{`
        .text-shadow-md {
          text-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </div>
  );
}
