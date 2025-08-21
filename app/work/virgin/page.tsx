export default function VirginPage() {
    return (
        <div className="bg-[#1a191b] text-[#cfb580] min-h-screen">
            {/* Page Title */}
            <div className="text-center pt-34">
                <h1 className="text-7xl font-bold uppercase tracking-wide">VIRGIN HOTEL</h1>
            </div>

            {/* Hero Video */}
            <div className="w-full max-w-[1200px] aspect-video mx-auto mt-20 overflow-hidden bg-black">
                <video
                    className="w-full h-full object-cover block"
                    controls
                    playsInline
                    loop
                    preload="auto"
                    poster="https://via.placeholder.com/1280x720?text=VIRGIN+HOTEL+Poster"
                >
                    <source src="https://lhmcollective.b-cdn.net/Virgin%20Hotel%20Dallas%20Reworked.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* SEO Body Text */}
            <div className="max-w-[900px] mx-auto mt-16 px-6 text- [1.195rem] leading-relaxed text-[#cfb580]/90">
                <h2 className="text-4xl font-semibold uppercase tracking-wide mb-4">
                    Client: Virgin Hotels Dallas
                </h2>
                <p>
                    We partnered with Virgin Hotels Dallas to create visually engaging promotional content during a uniquely challenging time in 2020 and 2021. Our primary focus was videography, producing sleek, upbeat videos to help promote the hotel and its pool club experience—even during the height of COVID restrictions.
                </p>
                <br />
                <p>
                    These assets were crafted specifically for social media, helping the brand stay top-of-mind, showcase its lifestyle appeal, and maintain a digital presence while in-person traffic fluctuated.
                </p>
                <br />
                <p>
                    By capturing the energy, vibe, and atmosphere of the space, our content helped Virgin Hotels continue connecting with its audience and drive engagement when it mattered most.
                </p>
            </div>

            {/* Frames Section */}
            <div className="w-full px-0 py-12">
                <h2 className="text-sm uppercase tracking-wide mb-5 border-t border-[#cfb580] pt-2 inline-block ml-6">
                    Photography
                </h2>

                <div className="grid grid-cols-2 gap-0">
                    <img
                        src="https://lhmcollective.b-cdn.net/Work%20Photos/Virgin-Hotel/Virgin-Hotel-1-Dallas-Photography-videography-local-Texas-Entertainment-Filmaker-Drone-Videogrpaher.png"
                        alt="Virgin Hotels lifestyle photo 1"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src="https://lhmcollective.b-cdn.net/Work%20Photos/Virgin-Hotel/Virgin-Hotel-2-Dallas-Photography-videography-local-Texas-Entertainment-Filmaker-Drone-Videogrpaher.png"
                        alt="Virgin Hotels lifestyle photo 2"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src="https://lhmcollective.b-cdn.net/Work%20Photos/Virgin-Hotel/Virgin-Hotel-3-Dallas-Photography-videography-local-Texas-Entertainment-Filmaker-Drone-Videogrpaher.png"
                        alt="Virgin Hotels lifestyle photo 3"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src="https://lhmcollective.b-cdn.net/Work%20Photos/Virgin-Hotel/Virgin-Hotel-5-Dallas-Photography-videography-local-Texas-Entertainment-Filmaker-Drone-Videogrpaher.png"
                        alt="Virgin Hotels lifestyle photo 4"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
