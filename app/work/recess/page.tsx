export default function RecessPage() {
  return (
    <div className="bg-[#1a191b] text-[#cfb580] min-h-screen">
      {/* Page Title */}
      <div className="text-center mt-34">
        <h1 className="text-7xl font-bold uppercase tracking-wide">RECESS</h1>
      </div>

      {/* Hero Video */}
      <div className="w-full max-w-[1200px] aspect-video mx-auto mt-20 overflow-hidden bg-black">
        <video
          className="w-full h-full object-cover block"
          controls
          playsInline
          loop
          preload="auto"
          poster="https://via.placeholder.com/1280x720?text=RECESS+Poster"
        >
          <source
            src="https://lhmcollective.b-cdn.net/Class%20at%20Recess%20Website.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Video Description */}
      <div className="max-w-3xl mx-auto mt-10 px-6 text-center">
        <h2 className="text-2xl font-semibold uppercase tracking-wide mb-4">
          Client: Recess Fitness Club
        </h2>
        <p className="text-[#cfb580]/90 text-base leading-relaxed">
          Recess Fitness Club, located in Dallas off Mockingbird, has been one of our longest-standing partners, with a creative collaboration spanning over four years. We provide full-service videography and photography, helping Recess bring their bold, community-driven vision to life across social platforms.
          <br className="hidden sm:block" />
          <br />
          Our work has contributed to growing their Instagram following from 3,000 to over 29,000, with one of our reels earning 14 million+ organic views. Beyond content creation, we curate strategies, brainstorm campaign ideas, and align with their brand goals to ensure every piece of media performs.
          <br className="hidden sm:block" />
          <br />
          As they shared in their review, “Lighthouse Media doesn’t just film, they understand brand identity, community, and how to make content that resonates.” This partnership continues to thrive on mutual creativity, trust, and the shared goal of creating content that not only looks good, but drives real impact.
        </p>
      </div>

      {/* Frames Section */}
      <div className="w-full px-0 py-12">
        <h2 className="text-sm uppercase tracking-wide mb-5 border-t border-[#cfb580] pt-2 inline-block ml-6">
          Photography
        </h2>

        <div className="grid grid-cols-2 gap-0">
          <img
            src="https://via.placeholder.com/800x600?text=Frame+1"
            alt="Recess Fitness class photo 1"
            className="w-full h-full object-cover"
          />
          <img
            src="https://via.placeholder.com/800x600?text=Frame+2"
            alt="Recess Fitness class photo 2"
            className="w-full h-full object-cover"
          />
          <img
            src="https://via.placeholder.com/800x600?text=Frame+3"
            alt="Recess Fitness class photo 3"
            className="w-full h-full object-cover"
          />
          <img
            src="https://via.placeholder.com/800x600?text=Frame+4"
            alt="Recess Fitness class photo 4"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
