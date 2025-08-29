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
      <section aria-labelledby="about-team">
        <div className="max-w-[1600px] mx-auto px-4 md:px-10 lg:px-16 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 xl:gap-28 items-start">
            
            {/* Our Story (left) */}
            <div className="lg:col-span-5 min-w-0">
              <div className="max-w-[60rem] lg:max-w-[68rem] xl:max-w-[72rem] mx-auto lg:mx-0 -ml-2 lg:-ml-6 xl:-ml-10 pr-2 lg:pr-6 xl:pr-12">
                <OurStory />
              </div>
            </div>

            {/* Team Spotlight (right) */}
            <div className="lg:col-span-7 min-w-0 lg:pl-10 xl:pl-14">
              <TeamSpotlight />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
