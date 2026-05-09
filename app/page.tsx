import Navbar from './components/Navbar';
import TypingAnimation from './components/TypingAnimation';
import ScrollReveal from './components/ScrollReveal';
import ProjectCard from './components/ProjectCard';
import Image from 'next/image';

const projects = [
    {
        title: 'Emergent',
        badge: 'Best Overall Hack',
        description:
            'AI-powered crisis simulation platform that models 50+ unique personas through a 13-phase disaster timeline. Won Best Overall Hack at KnightHacks 2025 and 2nd Place in Google ADK Challenge. Reduced latency by 60% through concurrent agent simulation.',
        tags: ['Next.js', 'TypeScript', 'Google ADK', 'Gemini', 'FastAPI'],
        images: [
            { src: '/projects/emergent/emergent1.png', alt: 'Emergent project screenshot 1' },
            { src: '/projects/emergent/emergent2.png', alt: 'Emergent project screenshot 2' },
            { src: '/projects/emergent/emergent3.png', alt: 'Emergent project screenshot 3' },
            { src: '/projects/emergent/emergent4.png', alt: 'Emergent project screenshot 4' },
            { src: '/projects/emergent/emergent5.png', alt: 'Emergent project screenshot 5' },
        ],
        links: {
            github: 'https://github.com/myr124/emergent',
            devpost: 'https://devpost.com/software/emergent-b2t1fl',
        },
    },
    {
        title: 'SignHero',
        badge: '2nd Overall',
        description:
            'AI-powered ASL rhythm game that won 2nd Overall and Best Game Design at SwampHacks. Built real-time hand tracking and gesture classification with MediaPipe and a custom MobileNetV2 model, achieving sub-50ms latency and 90%+ recognition accuracy.',
        tags: ['Python', 'MediaPipe', 'OpenCV', 'Next.js', 'MongoDB', 'tRPC'],
        images: [
            { src: '/projects/signhero/signhero1.png', alt: 'SignHero project screenshot 1' },
            { src: '/projects/signhero/signhero2.png', alt: 'SignHero project screenshot 2' },
            { src: '/projects/signhero/signhero3.jpg', alt: 'SignHero project screenshot 3' },
            { src: '/projects/signhero/signhero4.png', alt: 'SignHero project screenshot 4' },
            { src: '/projects/signhero/signhero5.png', alt: 'SignHero project screenshot 5' },
        ],
        links: {
            github: 'https://github.com/MsMarion/ASL-Fun-Training',
            devpost: 'https://devpost.com/software/signhero',
        },
    },
    {
        title: 'Singularity',
        description:
            'Deep reasoning model that combines Gemma with a world model to solve ARC-AGI-3 tasks, improving benchmark performance from 22% to 38%. Implemented an agentic search pipeline with Monte Carlo Tree Search and Gemini 2.5 Flash for efficient solution-space exploration.',
        tags: ['Python', 'PyTorch', 'CUDA', 'Gemini', 'MCTS', 'Gemma'],
        images: [
            { src: '/projects/singularity/singularity1.png', alt: 'Singularity project screenshot 1' },
            { src: '/projects/singularity/singularity3.png', alt: 'Singularity project screenshot 2' },
            { src: '/projects/singularity/singularity4.png', alt: 'Singularity project screenshot 3' },
        ],
        links: {
            github: 'https://github.com/Adammouedden/Singularity',
            devpost: 'https://devpost.com/software/singularity-gvj7d4',
        },
    },
    {
        title: 'VEGA',
        description:
            'AI-powered video engagement growth agent that evaluates content using simulated demographic audiences. Cut response latency by 15x through specialized category-based agents. Led a cross-functional team of 4 at ShellHacks 2025.',
        tags: ['Next.js', 'TypeScript', 'Supabase', 'Google ADK', 'FastAPI'],
        images: [
            { src: '/projects/vega/vega1.png', alt: 'VEGA project screenshot 1' },
            { src: '/projects/vega/vega2.png', alt: 'VEGA project screenshot 2' },
        ],
        links: {
            github: '#',
            devpost: '#',
        },
    },
    {
        title: 'UCF SASE Website',
        description:
            'Official website serving 300+ active users with secure authentication, event management dashboards, and admin board. Streamlined administrative tasks for 15+ officers and reduced manual workflows by over 50%.',
        tags: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL'],
        images: [
            { src: '/projects/ucfsase/ucfsase1.png', alt: 'UCF SASE Website project screenshot 1' },
        ],
        links: {
            github: '#',
            devpost: '#',
        },
    },
];

export default function Home() {
    return (
        <div className="w-full min-h-screen">
            <Navbar />
            <main className="w-full relative z-10">
                {/* Hero section with cup */}
                <div className="min-h-screen flex flex-col-reverse items-center justify-center px-6 py-28 bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat relative gap-10 sm:px-8 lg:flex-row lg:justify-between lg:px-16 lg:py-20 lg:gap-12">
                    {/* Dark overlay for better text readability */}
                    <div className="absolute inset-0 bg-[#1a120e]/70" />

                    <div className="max-w-2xl text-center relative z-10 lg:text-left">
                        <TypingAnimation
                            text="Hello I'm Eric!"
                            className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#e8d5c4] mb-6 tracking-wide"
                        />
                        <p className="text-lg sm:text-xl text-[#d4b5a0] leading-relaxed font-semibold">
                            A SWE with a passion for fullstack and AI
                        </p>
                    </div>

                    {/* Profile Image */}
                    <div className="relative z-10 flex-shrink-0 animate-fade-in-scale">
                        <div className="relative h-52 w-52 rounded-full overflow-hidden border-4 border-[#d4b5a0] shadow-2xl transition-transform duration-300 hover:scale-105 sm:h-64 sm:w-64 lg:h-80 lg:w-80">
                            <Image
                                src="/profile.jpg"
                                alt="Eric George"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* About Section */}
                <section id="about" className="bg-[#2b1f1a] px-6 py-16 sm:px-8 sm:py-20">
                    <div className="max-w-4xl mx-auto">
                        <ScrollReveal>
                            <h2 className="text-4xl sm:text-5xl font-serif text-[#e8d5c4] mb-8 tracking-wide">About</h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <div className="space-y-6 text-[#d4b5a0] text-base leading-relaxed font-body sm:text-lg">
                                <p>
                                    I’m a Computer Science student at UCF who loves building full-stack products and experimenting with AI in ways that actually solve problems. I’m currently a Software Engineer Intern at Siemens Energy, where I help build internal tools used by over a thousand engineers and maintain CI/CD pipelines that cut deployment times in half.
                                </p>
                                <p>
                                    Most of my work revolves around modern web technologies—React, Next.js, TypeScript, Tailwind—and AI frameworks like Google ADK, Gemini, and LangChain. I’ve been lucky to pick up a few awards along the way, including Best Overall Hack at KnightHacks 2025 and 2nd Place in the Google ADK Challenge for an AI-powered crisis simulation project.
                                </p>
                                <p>
                                    At UCF, I serve as the Computer Science Technical Chair for SASE, where I plan hands-on workshops on web development, AI, and algorithms, and work to make our chapter a welcoming place for students breaking into tech. Outside of classes and projects, I’m usually teaming up for hackathons, contributing to open-source work, or diving into new ideas at the intersection of AI and large-scale systems.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="bg-[#3d2e28] px-6 py-16 sm:px-8 sm:py-24">
                    <div className="max-w-4xl mx-auto">
                        <ScrollReveal>
                            <h2 className="text-4xl sm:text-5xl font-serif text-[#e8d5c4] mb-10 sm:mb-12 tracking-wide">Experience</h2>
                        </ScrollReveal>

                        {/* Timeline */}
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#5c4233] sm:left-0" />

                            {/* Timeline items */}
                            <div className="space-y-10 sm:space-y-12">

                                {/* Siemens Energy */}
                                <ScrollReveal delay={0.2}>
                                    <div className="relative pl-6 sm:pl-8">
                                        {/* Timeline dot */}
                                        <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-[#d4b5a0] border-4 border-[#3d2e28] -translate-x-[7px]" />

                                        <div className="space-y-2">
                                            <div className="flex items-start justify-between flex-wrap gap-2">
                                                <h3 className="text-xl sm:text-2xl font-serif text-[#e8d5c4]">Software Engineer Intern</h3>
                                                <span className="text-sm text-[#8B7355] font-semibold">Aug 2024 - Present</span>
                                            </div>
                                            <p className="text-base sm:text-lg text-[#d4b5a0] font-semibold">Siemens Energy • Orlando, FL</p>

                                            <ul className="mt-4 space-y-3 text-sm text-[#d4b5a0] leading-relaxed sm:text-base">
                                                <li className="flex gap-3">
                                                    <span className="text-[#d4b5a0] mt-1.5">•</span>
                                                    <span>Developed a Java frontend for a computational app used by 1,000+ engineers, integrating Python/Matlab scripts and optimizing UI for 20% faster load times.</span>
                                                </li>
                                                <li className="flex gap-3">
                                                    <span className="text-[#d4b5a0] mt-1.5">•</span>
                                                    <span>Maintained a CI/CD pipeline powered by Linux runners for efficient testing, deployment, and continuous application updates, automating releases and reducing deployment time by 50%.</span>
                                                </li>
                                                <li className="flex gap-3">
                                                    <span className="text-[#d4b5a0] mt-1.5">•</span>
                                                    <span>Implemented GitFlow branching strategy utilizing feature branches and pull requests, accelerating feature integration by 30% and reducing code review cycle time by 15%.</span>
                                                </li>
                                            </ul>

                                            <div className="flex flex-wrap gap-2 mt-4">
                                                <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">Java</span>
                                                <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">Python</span>
                                                <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">Linux</span>
                                                <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">CI/CD</span>
                                                <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">GitFlow</span>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* Knight Hacks */}
                                <ScrollReveal delay={0.3}>
                                    <div className="relative pl-6 sm:pl-8">
                                        {/* Timeline dot */}
                                        <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-[#d4b5a0] border-4 border-[#3d2e28] -translate-x-[7px]" />

                                        <div className="space-y-2">
                                            <div className="flex items-start justify-between flex-wrap gap-2">
                                                <h3 className="text-xl sm:text-2xl font-serif text-[#e8d5c4]">Software Engineer Intern</h3>
                                                <span className="text-sm text-[#8B7355] font-semibold">Jan 2026 - Present</span>
                                            </div>
                                            <p className="text-base sm:text-lg text-[#d4b5a0] font-semibold">Knight Hacks • Orlando, FL</p>

                                            <ul className="mt-4 space-y-3 text-sm text-[#d4b5a0] leading-relaxed sm:text-base">
                                                <li className="flex gap-3">
                                                    <span className="text-[#d4b5a0] mt-1.5">•</span>
                                                    <span>Contributed to Blade, a Next.js-based platform powering Florida&apos;s largest hackathon with 1,000+ users, building backend improvements for high-concurrency event traffic.</span>
                                                </li>
                                                <li className="flex gap-3">
                                                    <span className="text-[#d4b5a0] mt-1.5">•</span>
                                                    <span>Processed payments for 1,000+ users with zero transaction failures by implementing Stripe webhooks, idempotency safeguards, and PostgreSQL integration.</span>
                                                </li>
                                                <li className="flex gap-3">
                                                    <span className="text-[#d4b5a0] mt-1.5">•</span>
                                                    <span>Decreased frontend-backend latency by 25% by implementing a type-safe API layer using tRPC, ensuring seamless data synchronization and eliminating redundant request handling.</span>
                                                </li>
                                            </ul>

                                            <div className="flex flex-wrap gap-2 mt-4">
                                                <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">Next.js</span>
                                                <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">Stripe</span>
                                                <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">PostgreSQL</span>
                                                <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">tRPC</span>
                                                <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">Backend</span>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* UCF SASE CS Tech Chair */}
                                <ScrollReveal delay={0.4}>
                                    <div className="relative pl-6 sm:pl-8">
                                        {/* Timeline dot */}
                                        <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-[#d4b5a0] border-4 border-[#3d2e28] -translate-x-[7px]" />

                                        <div className="space-y-2">
                                            <div className="flex items-start justify-between flex-wrap gap-2">
                                                <h3 className="text-xl sm:text-2xl font-serif text-[#e8d5c4]">Computer Science Technical Chair</h3>
                                                <span className="text-sm text-[#8B7355] font-semibold">Jun 2025 - Present</span>
                                            </div>
                                            <p className="text-base sm:text-lg text-[#d4b5a0] font-semibold">Society of Asian Scientists and Engineers (SASE) • Orlando, FL</p>

                                            <ul className="mt-4 space-y-3 text-sm text-[#d4b5a0] leading-relaxed sm:text-base">
                                                <li className="flex gap-3">
                                                    <span className="text-[#d4b5a0] mt-1.5">•</span>
                                                    <span>Organized and led engaging technical workshops on web development, AI, and algorithms, fostering an inclusive learning environment and boosting CS-related participation by 35%.</span>
                                                </li>
                                                <li className="flex gap-3">
                                                    <span className="text-[#d4b5a0] mt-1.5">•</span>
                                                    <span>Founded and led the UCF SASE Web Development Team, managing 15+ frontend, backend, and UI/UX developers to deliver internal tools using Agile methodologies.</span>
                                                </li>
                                            </ul>

                                            <div className="flex flex-wrap gap-2 mt-4">
                                                <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">Leadership</span>
                                                <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">Teaching</span>
                                                <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">Web Development</span>
                                                <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">Agile</span>
                                                <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">AI</span>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>

                            </div>
                        </div>
                    </div>
                </section>

                {/* Work Section */}
                <section id="work" className="bg-[#2b1f1a] px-6 py-16 sm:px-8 sm:py-24">
                    <div className="max-w-6xl mx-auto">
                        <ScrollReveal>
                            <h2 className="text-4xl sm:text-5xl font-serif text-[#e8d5c4] mb-10 sm:mb-12 tracking-wide">Projects</h2>
                        </ScrollReveal>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                            {projects.map((project, index) => (
                                <ScrollReveal key={project.title} delay={0.1 * (index + 1)}>
                                    <ProjectCard {...project} />
                                </ScrollReveal>
                            ))}

                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="bg-[#1a120e] px-6 py-16 flex items-center sm:px-8 sm:py-24 lg:min-h-screen">
                    <div className="max-w-4xl mx-auto w-full">
                        <ScrollReveal>
                            <h2 className="text-4xl sm:text-5xl font-serif text-[#e8d5c4] mb-8 tracking-wide">Contact</h2>
                        </ScrollReveal>
                        <div className="space-y-8">
                            <ScrollReveal delay={0.2}>
                                <p className="text-[#d4b5a0] text-lg leading-relaxed sm:text-xl">
                                    Have a project in mind or want to collaborate on something exciting?
                                    I&apos;d love to hear from you.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal delay={0.3}>
                                <div className="space-y-4 text-[#d4b5a0]">
                                    <div>
                                        <h3 className="text-sm uppercase tracking-widest text-[#8B7355] mb-2">Email</h3>
                                        <a href="mailto:ericgeo324@gmail.com" className="break-all text-lg hover:text-[#e8d5c4] transition-colors sm:text-xl">
                                            ericgeo324@gmail.com
                                        </a>
                                    </div>

                                    <div>
                                        <h3 className="text-sm uppercase tracking-widest text-[#8B7355] mb-2">Phone</h3>
                                        <a href="tel:407-752-5950" className="text-lg hover:text-[#e8d5c4] transition-colors sm:text-xl">
                                            407-752-5950
                                        </a>
                                    </div>

                                    <div>
                                        <h3 className="text-sm uppercase tracking-widest text-[#8B7355] mb-2">Social</h3>
                                        <div className="flex gap-6 text-lg">
                                            <a href="https://www.linkedin.com/in/eric-george-90a26a278" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8d5c4] transition-colors">LinkedIn</a>
                                            <a href="https://github.com/myr124" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8d5c4] transition-colors">GitHub</a>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-sm uppercase tracking-widest text-[#8B7355] mb-2">Location</h3>
                                        <p className="text-lg sm:text-xl">Orlando, FL</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
