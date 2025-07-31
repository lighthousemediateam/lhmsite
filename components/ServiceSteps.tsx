export interface ServiceStep {
    number: string;
    title: string;
    subtitle: string;
    description: string;
    bullets: string[];
}

export const serviceSteps = [
    {
        number: '1.0',
        title: 'We Listen.',
        description:
            'Every great story starts with understanding. We dive deep into your brand, your goals, and your voice so that every piece of content reflects who you truly are.',
        bullets: [
            'Discovery Calls & Creative Consults',
            'Brand & Audience Research',
            'Story-First Concept Development',
        ],
    },
    {
        number: '2.0',
        title: 'We Create.',
        description:
            'Your vision, brought to life. We craft high-quality content designed to connect, inspire, and convert. Backed by strategy and fueled by creativity.',
        bullets: [
            'Scriptwriting & Storyboarding',
            'Cinematic Video Production',
            'Social Media & Brand Content',
            'Editing, Color, and Sound Design',
        ],
    },
    {
        number: '3.0',
        title: 'We Amplify.',
        description:
            'Content should work for you. We help you launch with purpose, ensuring your content reaches the right people and drives real results.',
        bullets: [
            'Social Media Strategy & Rollout',
            'Platform Optimization',
            'Data-Backed Refinement & Revisions',
        ],
    },
];

