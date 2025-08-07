export default function REIGNSTORMPage() {
    return (
        <div className="bg-[#1a191b] text-[#cfb580] min-h-screen">
            {/* Page Title */}
            <div className="text-center pt-34">
                <h1 className="text-7xl font-bold tracking-wide uppercase">Reign Storm</h1>
            </div>

            {/* Hero Video */}
            <div className="w-full max-w-[1200px] aspect-video mx-auto mt-20 overflow-hidden bg-black">
                <video
                    className="w-full h-full object-cover block"
                    controls
                    playsInline
                    loop
                    preload="auto"
                    poster="https://via.placeholder.com/1280x720?text=REIGNSTORM+Poster"
                >
                    <source
                        src="https://lhmcollective.b-cdn.net/REIGN%20STORM%20-%20CAMPAIGN%20-%20IBIZA%20-%20HORIZONTAL%20-%204K%20(1).mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Video Description */}
            {/* SEO Body Text */}
            <div className="max-w-[900px] mx-auto mt-16 px-6 text-[1.195rem] leading-relaxed text-[#cfb580]/90">
                <h2 className="text-4xl font-semibold uppercase tracking-wide mb-4">
                    Client: REIGN Storm
                </h2>
                <p>
                    REIGN Storm, the lifestyle-centric counterpart to REIGN Body Fuel, targets a broader, more style-conscious audience looking for a bold yet refined energy experience.
                </p>
                <br />
                <p>
                    For REIGN Storm, we focus on visually compelling, socially native content that blends fitness with fashion, energy, and edge. Our team handles both content direction and production, ensuring every piece feels authentic to the brand while staying optimized for platforms like TikTok and Instagram.
                </p>
                <br />
                <p>
                    From short-form social videos to curated photo sets for digital and print, our work helps REIGN Storm establish a distinctive identity while connecting with a new generation of energy drink consumers.
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
                        alt="REIGN Storm lifestyle image 1"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src="https://via.placeholder.com/800x600?text=Frame+2"
                        alt="REIGN Storm lifestyle image 2"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src="https://via.placeholder.com/800x600?text=Frame+3"
                        alt="REIGN Storm lifestyle image 3"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src="https://via.placeholder.com/800x600?text=Frame+4"
                        alt="REIGN Storm lifestyle image 4"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
