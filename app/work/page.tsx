'use client';

import { useEffect } from 'react';

const workItems = [
    {
        href: '/reign',
        cover: 'https://www.lhmcollective.com/s/Screenshot-2025-07-09-at-50910PM.png',
        video: 'https://lhmcollective.b-cdn.net/REIGN%20Preview.mp4',
        logo: 'https://www.lhmcollective.com/s/REIGN_Grayscale_Branding_2019_Positive_Horizontal.png',
    },
    {
        href: '/reign-storm',
        cover: 'https://www.lhmcollective.com/s/Screenshot-2025-07-09-at-53242PM.png',
        video: 'https://lhmcollective.b-cdn.net/RS%20Preview.mp4',
        logo: 'https://www.lhmcollective.com/s/reign_storm_logo_final_cleaned_v3.png',
    },
    // Add more projects here...
    {
        href: '/work/recess',
        cover: 'https://www.lhmcollective.com/s/Screenshot-2025-07-12-at-44610PM.png',
        video: 'https://lhmcollective.b-cdn.net/Class%20at%20Recess%20Preview.mp4',
        logo: 'https://www.lhmcollective.com/s/RecessLogo_RVersion_NoBox_White_300dpi_F-xftj.png',
    },
    {
        href: '/avondale',
        cover: 'https://lhmcollective.b-cdn.net/avondale%20cover%20photo(small).jpg',
        video: 'https://lhmcollective.b-cdn.net/Spyder%20Preview.mp4',
        logo: 'https://www.lhmcollective.com/s/avondale-logo.png',
    },
    {
        href: "/work/itdrc",
        cover: 'https://lhmcollective.b-cdn.net/ITDRC%20cover%20photo.png',
        video: 'https://lhmcollective.b-cdn.net/ITDRC%20Preview.mp4',
        logo: 'https://www.lhmcollective.com/s/itdrc_logo_white.png',
    },
    {
        href: '/virgin',
        cover: 'https://lhmcollective.b-cdn.net/Virgin%20cover%20photo.png',
        video: 'https://lhmcollective.b-cdn.net/Virgin%20Preview%202.mp4',
        logo: 'https://www.lhmcollective.com/s/virgin-hotel-logo.png',
    },
    {
        href: '/cuisinart',
        cover: 'https://lhmcollective.b-cdn.net/cuisinart%20cover%20photo.jpg',
        video: 'https://lhmcollective.b-cdn.net/Cuisinart%20Preview.mp4',
        logo: 'https://www.lhmcollective.com/s/cuisnart-logo.png',
    },
    {
        href: '/blackhawk',
        cover: 'https://lhmcollective.b-cdn.net/blackhawk%20cover%20photo.jpg',
        video: 'https://lhmcollective.b-cdn.net/Black%20Hawk%20Preview.mp4',
        logo: 'https://lhmcollective.b-cdn.net/Blackhawk%20logo%20v2.png',
    },


];

export default function WorkPage() {
    useEffect(() => {
        const videos = document.querySelectorAll('video.lazy-video');

        const loadVideo = (video: HTMLVideoElement) => {
            const source = video.querySelector('source');
            if (source && source.dataset.src) {
                source.src = source.dataset.src;
                video.load();
            }
        };

        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        loadVideo(entry.target as HTMLVideoElement);
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.25 }
        );

        videos.forEach((video) => observer.observe(video));
    }, []);

    return (
        <div className="bg-[#1a191b] text-[#cfb580] min-h-screen px-0 pt-28 pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {workItems.map((item, idx) => (
                    <a href={item.href} key={idx} className="block group">
                        <div className="relative aspect-video overflow-hidden">
                            {/* Cover Image */}
                            <img
                                src={item.cover}
                                alt="cover"
                                className="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-300 group-hover:opacity-0 hidden md:block"
                            />

                            {/* Video */}
                            <video
                                className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 lazy-video"
                                muted
                                playsInline
                                autoPlay
                                loop
                                preload="none"
                                poster={item.cover}
                            >
                                <source data-src={item.video} type="video/mp4" />
                            </video>

                            {/* Logo */}
                            <img
                                src={item.logo}
                                alt="logo"
                                className="absolute top-1/2 left-1/2 w-[30%] max-w-[240px] transform -translate-x-1/2 -translate-y-1/2 z-20 opacity-90 pointer-events-none transition-opacity duration-[2000ms] group-hover:opacity-0"
                            />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
