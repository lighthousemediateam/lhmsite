export default function ITDRCPage() {
    return (
        <div className="bg-[#1a191b] text-[#cfb580] min-h-screen">
            {/* Page Title */}
            <div className="text-center pt-34">
                <h1 className="text-7xl font-bold uppercase tracking-wide">ITDRC</h1>
            </div>

            {/* Hero Video */}
            <div className="w-full max-w-[1200px] aspect-video mx-auto mt-20 overflow-hidden bg-black">
                <video
                    className="w-full h-full object-cover block"
                    controls
                    playsInline
                    loop
                    preload="auto"
                    poster="https://via.placeholder.com/1280x720?text=ITDRC+Poster"
                >
                    <source src="https://lhmcollective.b-cdn.net/ITDRC%20150mb%20with%20sound.mp4" type="video/mp4" />
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
                        src="https://lhmcollective.b-cdn.net/ITDRC%20pic1.png"
                        alt="Frame 1"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src="https://lhmcollective.b-cdn.net/ITRDC%20pic2.png"
                        alt="Frame 2"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src="https://lhmcollective.b-cdn.net/ITDRC%20pic3.png"
                        alt="Frame 3"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src="https://lhmcollective.b-cdn.net/ITDRC%20pic4.png"
                        alt="Frame 4"
                        className="w-full h-full object-cover"
                    />
                
            </div>

        </div>
        </div >
    );
}
