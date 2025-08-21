export default function REIGNPage() {
  return (
    <div className="bg-[#1a191b] text-[#cfb580] min-h-screen">
      {/* Page Title */}
      <div className="text-center pt-34">
        <h1 className="text-7xl font-bold uppercase tracking-wide">REIGN Body Fuel</h1>
      </div>

      {/* Hero Video */}
      <div className="w-full max-w-[1200px] aspect-video mx-auto mt-20 overflow-hidden bg-black">
        <video
          className="w-full h-full object-cover block"
          controls
          playsInline
          loop
          preload="auto"
          poster="https://lhmcolective.b-cdn.net/Work%20Photos/Reign/Reign-1-Dallas-Local-Photographer-Videographer-Fitness-Gym-Events-Social-Media-Instagram.jpg"
        >
          <source
            src="https://lhmcollective.b-cdn.net/REIGN%20FULL%2060s%20FINAL.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* SEO Body Text */}
      <div className="max-w-[900px] mx-auto mt-16 px-6 text-[1.195rem] leading-relaxed text-[#cfb580]/90">
        <h2 className="text-2xl font-semibold uppercase tracking-wide mb-4">
          Client: REIGN Body Fuel
        </h2>
        <p>
          REIGN Body Fuel is a fitness-forward energy drink brand based in Los Angeles that we’ve partnered with across multiple high-impact campaigns. Our work includes full-scale video production, photography, and creative strategy for major fitness events like The Arnold, CrossFit Games, Wodapalooza, Tough Mudder, and Olympia.
        </p>
        <br />
        <p>
          We've also supported their UK branch with an international shoot in Ibiza, Spain. From athlete casting to content planning, we create performance-driven media tailored to each platform — including one viral Instagram video that reached 8.2 million organic views.
        </p>
        <br />
        <p>
          Our long-standing collaboration with REIGN is built on trust, alignment, and a shared vision to elevate their brand within the competitive fitness space.
        </p>
      </div>

      {/* Photography */}
      <div className="w-full px-0 py-12">
        <h2 className="text-sm uppercase tracking-wide mb-5 border-t border-[#cfb580] pt-2 inline-block ml-6">
          Photography
        </h2>

        {/* 1-up (mobile), 2-up (tablet), 3-up (desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 px-6">
          <img
            src="https://lhmcollective.b-cdn.net/Work%20Photos/Reign/Reign-1-Dallas-Local-Photographer-Videographer-Fitness-Gym-Events-Social-Media-Instagram.jpg"
            alt="REIGN athlete event vertical 1"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <img
            src="https://lhmcollective.b-cdn.net/Work%20Photos/Reign/Reign-2-Dallas-Local-Photographer-Videographer-Fitness-Gym-Events-Social-Media-Instagram.jpg"
            alt="REIGN athlete event vertical 2"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <img
            src="https://lhmcollective.b-cdn.net/Work%20Photos/Reign/Reign-3-Dallas-Local-Photographer-Videographer-Fitness-Gym-Events-Social-Media-Instagram.jpg"
            alt="REIGN athlete event vertical 3"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <img
            src="https://lhmcollective.b-cdn.net/Work%20Photos/Reign/Reign-4-Dallas-Local-Photographer-Videographer-Fitness-Gym-Events-Social-Media-Instagram.jpg"
            alt="REIGN athlete event vertical 4"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <img
            src="https://lhmcollective.b-cdn.net/Work%20Photos/Reign/Reign-5-Dallas-Local-Photographer-Videographer-Fitness-Gym-Events-Social-Media-Instagram.jpg"
            alt="REIGN athlete event vertical 5"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <img
            src="https://lhmcollective.b-cdn.net/Work%20Photos/Reign/Reign-6-Dallas-Local-Photographer-Videographer-Fitness-Gym-Events-Social-Media-Instagram.jpg"
            alt="REIGN athlete event vertical 6"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <img
            src="https://lhmcollective.b-cdn.net/Work%20Photos/Reign/Reign-7-Dallas-Local-Photographer-Videographer-Fitness-Gym-Events-Social-Media-Instagram.jpg"
            alt="REIGN athlete event vertical 7"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <img
            src="https://lhmcollective.b-cdn.net/Work%20Photos/Reign/Reign-8-Dallas-Local-Photographer-Videographer-Fitness-Gym-Events-Social-Media-Instagram.jpg"
            alt="REIGN athlete event vertical 8"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <img
            src="https://lhmcollective.b-cdn.net/Work%20Photos/Reign/Reign-9-Dallas-Local-Photographer-Videographer-Fitness-Gym-Events-Social-Media-Instagram.jpg"
            alt="REIGN athlete event vertical 9"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
