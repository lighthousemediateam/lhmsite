'use client';

import { useState } from 'react';

const team = [
    {
        name: 'Adam Haisler',
        role: 'Business Operations & Admin Manager',
        image: 'https://lhmcollective.b-cdn.net/Team%20Spotlight/Adam%20Site%20Edit.jpg',
        bio: 'Adam runs the backend of the business and manages the administrative area',
    },
    {
        name: 'Jon Ly',
        role: 'CEO/Founder & Videographer',
        image: 'https://lhmcollective.b-cdn.net/Team%20Spotlight/Jon%20Site%20Edit.jpg',
        bio: 'When Jon Ly isnt running Light House Media, he is out patroling the streets of Metropolis, guarding our sacred city from the evil that corrupts it. Its a lonely road but somewhat has to do it- Jon Ly',
    },
    {
        name: 'Johnathan Nguyen',
        role: 'Videographer',
        image: 'https://lhmcollective.b-cdn.net/Team%20Spotlight/Johnathan%20Site%20Edit.jpg',
        bio: 'Johnathan bridges creative vision and logistics, making stories come to life on screen.',
    },
];

export default function TeamSpotlight() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-[#1a191b] text-[#cfb580] px-6 py-24 font-['League_Spartan']">
            <div className="max-w-6xl mx-auto">
                {/* Section label */}
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider text-[#cfb580] mb-12">
                        Team Spotlight
                    </h2>

                </div>

                {/* Team cards */}
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col md:flex-row justify-center gap-6 w-full">
                        {team.map((member, index) => (
                            <div
                                key={member.name}
                                onMouseEnter={() => setActiveIndex(index)}
                                className={`
                  cursor-pointer rounded-xl p-4 transition-all duration-300 text-center
                  ${activeIndex === index
                                        ? 'scale-105 bg-[#2a292b] shadow-lg z-10'
                                        : 'opacity-60 hover:opacity-100'}
                  flex-1
                `}
                            >
                                <div className="w-full aspect-[3/4]">   {/* 3:4 portrait ratio, adjust as needed */}
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover rounded-lg border-2 border-[#cfb580]"
                                    />
                                </div>

                                <h3 className="text-xl font-bold uppercase">{member.name}</h3>
                                <p className="text-white text-sm">{member.role}</p>
                            </div>
                        ))}
                    </div>

                    {/* Bio section */}
                    <div className="mt-10 text-center max-w-2xl text-white text-base leading-relaxed">
                        <p>{team[activeIndex].bio}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
