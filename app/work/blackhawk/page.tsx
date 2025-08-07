export default function BlackhawkPage() {
    return (
        <div className="bg-[#1a191b] text-[#cfb580] min-h-screen">
            {/* Page Title */}
            <div className="text-center pt-34">
                <h1 className="text-7xl font-bold uppercase tracking-wide">BLACKHAWK</h1>
            </div>

            {/* Hero Video */}
            <div className="w-full max-w-[1200px] aspect-video mx-auto mt-20 overflow-hidden bg-black">
                <video
                    className="w-full h-full object-cover block"
                    controls
                    playsInline
                    loop
                    preload="auto"
                    poster="https://via.placeholder.com/1280x720?text=BLACKHAWK+Poster"
                >
                    <source src="https://lhmcollective.b-cdn.net/Blackhawk%20Remastered%20for%20Website.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* SEO Body Text */}
            <div className="max-w-[900px] mx-auto mt-16 px-6 text- [1.195rem] leading-relaxed text-[#cfb580]/90">
                <h2 className="text-4xl font-semibold uppercase tracking-wide mb-4">
                    Client: Blackhawk Aerospace
                </h2>
                <p>
                    We collaborated with Blackhawk Aerospace, a Waco, Texas–based leader in performance upgrades for turboprop aircraft established in 1999, from 2018 to 2021.
                </p>
                <br />
                <p>
                    During that time, we produced dynamic videos featuring their specialized projects (like the King Air 350 upgrades) and streamlined content for internal operations and team presentations. Blackhawk Aerospace is a recognized authority in enhancing aircraft capability through its divisions (Upgrades, Sales, Solutions, and Technologies), offering engine and avionics upgrades, FAA‑certified MRO services, and global performance centers.
                </p>
                <br />
                <p>
                    Their hallmark, like the XP67A Engine+ upgrade and XR Extended Range Kit, delivers unmatched climb rates, cruise performance, payload, and operating cost efficiency for King Air series aircraft. Our content helped illustrate their precision, innovation, and mission-focused vision through compelling visual storytelling.
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
                        alt="Placeholder Frame 1"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src="https://via.placeholder.com/800x600?text=Frame+2"
                        alt="Placeholder Frame 2"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src="https://via.placeholder.com/800x600?text=Frame+3"
                        alt="Placeholder Frame 3"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src="https://via.placeholder.com/800x600?text=Frame+4"
                        alt="Placeholder Frame 4"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
