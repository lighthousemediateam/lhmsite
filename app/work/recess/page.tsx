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
                    poster="https://lhmcollective.b-cdn.net/Work%20Photos/Recess/Recess-1-dallas-gym-photography-videography-lighthousemedia-local-gym-fitness-near-me.jpg"
                >
                    <source
                        src="https://lhmcollective.b-cdn.net/Class%20at%20Recess%20Website.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* SEO Body Text */}
            <div className="max-w-[900px] mx-auto mt-16 px-6 text-[1.195rem] leading-relaxed text-[#cfb580]/90">
                <h2 className="text-4xl font-semibold uppercase tracking-wide mb-4">
                    Client: Recess Fitness Club
                </h2>
                <p>
                    Recess Fitness Club, located in Dallas off Mockingbird, has been one of our longest-standing partners, with a creative collaboration spanning over four years.
                </p>
                <br />
                <p>
                    We provide full-service videography and photography, helping Recess bring their bold, community-driven vision to life across social platforms. Our work has contributed to growing their Instagram following from 3,000 to over 29,000, with one of our reels earning 14 million+ organic views.
                </p>
                <br />
                <p>
                    Beyond content creation, we curate strategies, brainstorm campaign ideas, and align with their brand goals to ensure every piece of media performs. As they shared in their review, “Lighthouse Media doesn’t just film, they understand brand identity, community, and how to make content that resonates.”
                </p>
                <br />
                <p>
                    This partnership continues to thrive on mutual creativity, trust, and the shared goal of creating content that not only looks good, but drives real impact.
                </p>
            </div>

            {/* Frames Section */}
            <div className="w-full px-0 py-12">
                <h2 className="text-sm uppercase tracking-wide mb-5 border-t border-[#cfb580] pt-2 inline-block ml-6">
                    Photography
                </h2>

                <div className="grid grid-cols-3 gap-2 px-6">
                    {/* Row 1: Horizontal + Vertical */}
                    <img
                        src="https://lhmcollective.b-cdn.net/Work%20Photos/Recess/Recess-1-dallas-gym-photography-videography-lighthousemedia-local-gym-fitness-near-me.jpg"
                        alt="Recess Fitness horizontal photo 1"
                        className="w-full h-full object-cover col-span-2"
                    />
                    <img
                        src="https://lhmcollective.b-cdn.net/Work%20Photos/Recess/Recess-2-dallas-gym-photography-videography-lighthousemedia-local-gym-fitness-near-me.jpg"
                        alt="Recess Fitness vertical photo 2"
                        className="w-full h-full object-cover"
                    />

                    {/* Row 2: Vertical + Horizontal */}
                    <img
                        src="https://lhmcollective.b-cdn.net/Work%20Photos/Recess/Recess-5-dallas-gym-photography-videography-lighthousemedia-local-gym-fitness-near-me.jpg"
                        alt="Recess Fitness vertical photo 5"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src="https://lhmcollective.b-cdn.net/Work%20Photos/Recess/Recess-3-dallas-gym-photography-videography-lighthousemedia-local-gym-fitness-near-me.jpg"
                        alt="Recess Fitness horizontal photo 3"
                        className="w-full h-full object-cover col-span-2"
                    />

                    {/* Row 3: Horizontal + Vertical */}
                    <img
                        src="https://lhmcollective.b-cdn.net/Work%20Photos/Recess/Recess-4-dallas-gym-photography-videography-lighthousemedia-local-gym-fitness-near-me.jpg"
                        alt="Recess Fitness horizontal photo 4"
                        className="w-full h-full object-cover col-span-2"
                    />
                    {/* reusing vertical 2 or 5 here to balance, or can leave blank */}
                    <img
                        src="https://lhmcollective.b-cdn.net/Work%20Photos/Recess/Recess-6-dallas-gym-photography-videography-lighthousemedia-local-gym-fitness-near-me.jpg"
                        alt="Recess Fitness vertical photo repeat to balance grid"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>


        </div>
    );
}
