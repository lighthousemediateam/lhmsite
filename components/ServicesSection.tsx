'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { serviceSteps } from './ServiceSteps';

const ServicesSection: React.FC = () => {
    const pathRef = useRef(null);
    const isInView = useInView(pathRef, { once: true, margin: '-100px' });

    return (
        <section className="w-full py-28 px-4">
            <div ref={pathRef} className="relative flex flex-col items-center">

                {/* SVG Arrow Path */}
                <svg
                    
                    className="absolute left-[500px] top-[60px] z-0"
                    width="60"
                    height="600"
                    viewBox="0 0 60 600"
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
                        d="M30 0 C15 120, 15 200, 30 260"
                        stroke="#cfb580"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                    />

                    {/* 02 ➝ 03 */}
                    <motion.path
                        d="M30 260 C15 360, 15 500, 30 580"
                        stroke="#cfb580"
                        strokeWidth="2"
                        fill="none"
                        markerEnd="url(#arrowhead)"
                        initial={{ pathLength: 0 }}
                        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                        transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.4 }}
                    />
                </svg>

                {/* Step Content */}
                <div className="flex flex-col gap-24 items-center w-fit">
                    {serviceSteps.map((step, index) => (
                        <div key={index} className="flex items-start gap-6 md:gap-12">
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
                    <div className="text-center pt-10">
                        <a
                            href="/contact-page"
                            className="inline-block border border-[#cfb580] text-[#cfb580] rounded-full px-6 py-3 hover:bg-[#cfb580] hover:text-black transition"
                        >
                            Let’s Create
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
