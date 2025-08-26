// app/(site)/about/AboutSection.tsx (path optional)
import OurStory from "./OurStory";
import TeamSpotlight from "./TeamSpotlight";

export default function AboutSection() {
  return (
    <section className="bg-[#1a191b] text-white px-5 md:px-10 lg:px-16 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,1.1fr)] gap-12 lg:gap-16 items-start">
        {/* Left: Our Story */}
        <div className="min-w-0">
          <OurStory />
        </div>

        {/* Right: Team Spotlight */}
        <div className="min-w-0">
          <TeamSpotlight />
        </div>
      </div>
    </section>
  );
}
