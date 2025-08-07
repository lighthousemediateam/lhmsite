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
                    poster="https://via.placeholder.com/1280x720?text=REIGN+Poster"
                >
                    <source
                        src="https://lhmcollective.b-cdn.net/REIGN%20FULL%2060s%20FINAL.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Video Description */}
            {/* SEO Body Text */}
            <div className="max-w-[900px] mx-auto mt-16 px-6 text-base leading-relaxed text-[#cfb580]/90">
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


            {/* Frames Section */}
            <div className="w-full px-0 py-12">
                <h2 className="text-sm uppercase tracking-wide mb-5 border-t border-[#cfb580] pt-2 inline-block ml-6">
                    Photography
                </h2>

                <div className="grid grid-cols-2 gap-0">
                    <img
                        src="https://via.placeholder.com/800x600?text=Frame+1"
                        alt="REIGN athlete event still 1"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src="https://via.placeholder.com/800x600?text=Frame+2"
                        alt="REIGN athlete event still 2"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src="https://via.placeholder.com/800x600?text=Frame+3"
                        alt="REIGN athlete event still 3"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src="https://via.placeholder.com/800x600?text=Frame+4"
                        alt="REIGN athlete event still 4"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
