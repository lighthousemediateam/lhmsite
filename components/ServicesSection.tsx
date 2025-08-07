'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { serviceSteps } from './ServiceSteps';

const ServicesSection: React.FC = () => {
    const pathRef = useRef(null);
    const textBlockRef = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(pathRef, { once: true, margin: '-100px' });
    const [arrowLeft, setArrowLeft] = useState<number | null>(null);

    useEffect(() => {
        const updateArrowPosition = () => {
            if (textBlockRef.current) {
                const rect = textBlockRef.current.getBoundingClientRect();
                setArrowLeft(rect.left - 190); // tweak offset to visually align the arrow path
            }
        };

        updateArrowPosition();
        window.addEventListener('resize', updateArrowPosition);
        return () => window.removeEventListener('resize', updateArrowPosition);
    }, []);

    return (
        <section className="w-full py-28 px-4">
            <div ref={pathRef} className="relative flex flex-col items-center">
                {/* SVG Arrow Path */}
                {arrowLeft !== null && (
                    <svg
                        style={{ position: 'absolute', top: -50, left: `${arrowLeft}px`, zIndex: 0 }}
                        width="240"
                        height="800"
                        viewBox="-100 0 300 800"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <marker
                                id="arrowhead"
                                markerWidth="10"
                                markerHeight="10"
                                refX="0"
                                refY="3"
                                orient="auto"
                                markerUnits="strokeWidth"
                            >
                                <path d="M0,0 L0,6 L6,3 Z" fill="#cfb580" />
                            </marker>
                        </defs>

                        {/* 01 ➝ 02 */}
                        <motion.path
                            d="M60 0 C-100 160, -100 320, 60 400"
                            stroke="#cfb580"
                            strokeWidth="2"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                        />

                        {/* 02 ➝ 03 */}
                        <motion.path
                            d="M60 400 C-100 560, -100 720, 60 800"
                            stroke="#cfb580"
                            strokeWidth="2"
                            fill="none"
                            markerEnd="url(#arrowhead)"
                            initial={{ pathLength: 0 }}
                            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                            transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.4 }}
                        />
                    </svg>
                )}

                {/* Step Content */}
                <div className="flex flex-col gap-24 items-center w-fit">
                    {serviceSteps.map((step, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-6 md:gap-12"
                            ref={index === 0 ? textBlockRef : undefined}
                        >
                            {/* Step Number */}
                            <div className="min-w-[60px] text-right pt-1 relative z-10">
                                <span className="text-2xl sm:text-3xl font-bold text-[#cfb580] leading-none">
                                    {step.number}
                                </span>
                            </div>

                            {/* Step Text */}
                            <div className="max-w-xl">
                                <h2 className="text-2xl sm:text-3xl font-bold text-white">{step.title}</h2>
                                <p className="text-[1.1rem] text-gray-300 mt-3 leading-relaxed">
                                    {step.description}
                                </p>
                                <ul className="text-gray-300 mt-4 space-y-1 text-[1.05rem]">
                                    {step.bullets.map((item, idx) => (
                                        <li key={idx}>- {item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}

                    {/* CTA Button */}
                    <div className="text-center -mt-10">
                        <a
                            href="/contact"
                            className="inline-block border border-[#cfb580] text-[#cfb580] rounded-full px-6 py-3 hover:bg-[#cfb580] hover:text-black transition"
                        >
                            Let’s Connect
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
