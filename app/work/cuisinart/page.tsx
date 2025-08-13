export default function CuisinartPage() {
    return (
        <div className="bg-[#1a191b] text-[#cfb580] min-h-screen">
            {/* Page Title */}
            <div className="text-center mt-34">
                <h1 className="text-7xl font-bold uppercase tracking-wide">CUISINART</h1>
            </div>

            {/* Hero Video */}
            <div className="w-full max-w-[1200px] aspect-video mx-auto mt-20 overflow-hidden bg-black">
                <video
                    className="w-full h-full object-cover block"
                    controls
                    playsInline
                    loop
                    preload="auto"
                    poster="https://via.placeholder.com/1280x720?text=CUISINART+Poster"
                >
                    <source src="https://lhmcollective.b-cdn.net/Cusinart%20Remastered%20for%20Website.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* SEO Body Text */}
            <div className="max-w-[900px] mx-auto mt-16 px-6 text-[1.195rem] leading-relaxed text-[#cfb580]/90">
                <h2 className="text-4xl font-semibold uppercase tracking-wide mb-4">
                    Client: Cuisinart
                </h2>
                <p>
                    In 2021, we partnered with Cuisinart, a leading name in culinary tools and kitchen innovation, on a one-off video project to help launch one of their new products.
                </p>
                <br />
                <p>
                    Shot in Dallas, Texas, the campaign was produced in collaboration with Area Code agency and directed alongside our friend, Colin Conley. Our role focused on videography—producing multiple promotional videos that showcased the product’s design, features, and lifestyle appeal in a way that felt fresh and accessible.
                </p>
                <br />
                <p>
                    Known for empowering home cooks and food lovers with reliable, stylish appliances, Cuisinart’s legacy made this project a unique opportunity to blend premium visuals with everyday functionality — helping bring their brand to life through content built for modern platforms.
                </p>
            </div>

            {/* Frames Section */}
            <div className="w-full px-0 py-12">
                <h2 className="text-sm uppercase tracking-wide mb-5 border-t border-[#cfb580] pt-2 inline-block ml-6">
                    Photography
                </h2>

                <div className="grid grid-cols-2 gap-0">
                    <img
                        src="https://lhmcollective.b-cdn.net/Work%20Photos/Cuisinart/Cuisinart-4-lighthouse-media-dallas-based-videographer.png"
                        alt="Placeholder Frame 1"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src="https://lhmcollective.b-cdn.net/Work%20Photos/Cuisinart/Cuisinart-3-light-house-media-dallas-videographer.png"
                        alt="Placeholder Frame 2"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src="https://lhmcollective.b-cdn.net/Work%20Photos/Cuisinart/Cuisinart-replacement-lighthousemedia-dallas-videographer-photographer.png"
                        alt="Placeholder Frame 3"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src="https://lhmcollective.b-cdn.net/Work%20Photos/Cuisinart/Cuisinart-1-lighthousemedia-dallas-videographer.png"
                        alt="Placeholder Frame 4"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
