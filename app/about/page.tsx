import AboutHero from "@/components/AboutHero";
import AboutProcess from "@/components/AboutProcess";
import OurStory from "@/components/OurStory";
import TeamSpotlight from "@/components/TeamSpotlight";

export default function AboutPage() {
  return (
    <main className="bg-[#1a191b] text-white">
      <AboutHero />
      <AboutProcess />

      {/* Side-by-side block */}
      <section>
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 lg:py-24">
          {/* Make the right column larger */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_minmax(0,1.35fr)] gap-10 lg:gap-16 items-start">
            {/* Shift Our Story left */}
            <div className="min-w-0 lg:-ml-6 xl:-ml-10">
              <OurStory />
            </div>

            {/* Bigger Team Spotlight */}
            <div className="min-w-0 lg:pr-2 xl:pr-4">
              <TeamSpotlight />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
