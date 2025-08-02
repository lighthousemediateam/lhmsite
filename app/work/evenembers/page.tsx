export default function EvenEmbersPage() {
    return (
        <div className="bg-[#1a191b] text-[#cfb580] min-h-screen">
            {/* Page Title */}
            <div className="text-center mt-34">
                <h1 className="text-4xl font-bold uppercase tracking-wide">EVEN EMBERS</h1>
            </div>

            {/* Hero Video (Placeholder) */}
            <div className="w-full max-w-[1200px] aspect-video mx-auto mt-20 overflow-hidden bg-black">
                <video
                    className="w-full h-full object-cover block"
                    controls
                    playsInline
                    loop
                    preload="auto"
                    poster="https://via.placeholder.com/1280x720?text=EVEN+EMBERS+Poster"
                >
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
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
