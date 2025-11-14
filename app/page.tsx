import CupScene from './components/CupScene';
import Navbar from './components/Navbar';
import TypingAnimation from './components/TypingAnimation';
import ScrollReveal from './components/ScrollReveal';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="w-full min-h-screen">
            <Navbar />
            {/* <CupScene /> */}
            <main className="w-full relative z-10">
                {/* Hero section with cup */}
                <div className="h-screen flex items-center justify-between px-16 bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat relative gap-12">
                    {/* Dark overlay for better text readability */}
                    <div className="absolute inset-0 bg-[#1a120e]/70" />

                    <div className="max-w-2xl text-left relative z-10">
                        <TypingAnimation
                            text="Hello I'm Eric!"
                            className="text-7xl font-serif font-bold text-[#e8d5c4] mb-6 tracking-wide"
                        />
                        <p className="text-xl text-[#d4b5a0] leading-relaxed font-semibold">
                            A SWE with a passion for fullstack and AI
                        </p>
                    </div>

                    {/* Profile Image */}
                    <div className="relative z-10 flex-shrink-0 animate-fade-in-scale">
                        <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-[#d4b5a0] shadow-2xl transition-transform duration-300 hover:scale-105">
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
                <section id="about" className="min-h-screen bg-[#2b1f1a] px-8 py-24">
                    <div className="max-w-4xl mx-auto">
                        <ScrollReveal>
                            <h2 className="text-5xl font-serif text-[#e8d5c4] mb-8 tracking-wide">About</h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <div className="space-y-6 text-[#d4b5a0] text-lg leading-relaxed font-body">
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
                <section id="experience" className="min-h-screen bg-[#3d2e28] px-8 py-24">
                    <div className="max-w-4xl mx-auto">
                        <ScrollReveal>
                            <h2 className="text-5xl font-serif text-[#e8d5c4] mb-12 tracking-wide">Experience</h2>
                        </ScrollReveal>

                        {/* Timeline */}
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#5c4233]" />

                            {/* Timeline items */}
                            <div className="space-y-12">

                                {/* Siemens Energy */}
                                <ScrollReveal delay={0.2}>
                                    <div className="relative pl-8">
                                        {/* Timeline dot */}
                                        <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-[#d4b5a0] border-4 border-[#3d2e28] -translate-x-[7px]" />

                                        <div className="space-y-2">
                                            <div className="flex items-start justify-between flex-wrap gap-2">
                                                <h3 className="text-2xl font-serif text-[#e8d5c4]">Software Engineer Intern</h3>
                                                <span className="text-sm text-[#8B7355] font-semibold">Aug 2024 - Present</span>
                                            </div>
                                            <p className="text-lg text-[#d4b5a0] font-semibold">Siemens Energy • Orlando, FL</p>

                                            <ul className="mt-4 space-y-3 text-[#d4b5a0] leading-relaxed">
                                                <li className="flex gap-3">
                                                    <span className="text-[#d4b5a0] mt-1.5">•</span>
                                                    <span>Developed a Java frontend for a computational app used by 1,000+ engineers, integrating Python/Matlab scripts and optimizing UI for 20% faster load times.</span>
                                                </li>
                                                <li className="flex gap-3">
                                                    <span className="text-[#d4b5a0] mt-1.5">•</span>
                                                    <span>Maintained a CI/CD pipeline for efficient testing, deployment, and continuous application updates, automating releases and reducing deployment time by 50%.</span>
                                                </li>
                                                <li className="flex gap-3">
                                                    <span className="text-[#d4b5a0] mt-1.5">•</span>
                                                    <span>Implemented GitFlow branching strategy utilizing feature branches and pull requests, accelerating feature integration by 30% and reducing code review cycle time by 15%.</span>
                                                </li>
                                                <li className="flex gap-3">
                                                    <span className="text-[#d4b5a0] mt-1.5">•</span>
                                                    <span>Enhanced SharePoint infrastructure to improve accessibility and centralization of internal tools, enabling wider cross-team adoption and streamlining workflow efficiency across departments.</span>
                                                </li>
                                            </ul>

                                            <div className="flex flex-wrap gap-2 mt-4">
                                                <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">Java</span>
                                                <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">Python</span>
                                                <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">CI/CD</span>
                                                <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">GitFlow</span>
                                                <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">SharePoint</span>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* UCF SASE CS Tech Chair */}
                                <ScrollReveal delay={0.3}>
                                    <div className="relative pl-8">
                                        {/* Timeline dot */}
                                        <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-[#d4b5a0] border-4 border-[#3d2e28] -translate-x-[7px]" />

                                        <div className="space-y-2">
                                            <div className="flex items-start justify-between flex-wrap gap-2">
                                                <h3 className="text-2xl font-serif text-[#e8d5c4]">Computer Science Technical Chair</h3>
                                                <span className="text-sm text-[#8B7355] font-semibold">Jun 2025 - Present</span>
                                            </div>
                                            <p className="text-lg text-[#d4b5a0] font-semibold">Society of Asian Scientists and Engineers (SASE) • Orlando, FL</p>

                                            <ul className="mt-4 space-y-3 text-[#d4b5a0] leading-relaxed">
                                                <li className="flex gap-3">
                                                    <span className="text-[#d4b5a0] mt-1.5">•</span>
                                                    <span>Organized and led engaging technical workshops on web development, AI, and algorithms, fostering an inclusive learning environment and boosting CS-related participation by 35%.</span>
                                                </li>
                                                <li className="flex gap-3">
                                                    <span className="text-[#d4b5a0] mt-1.5">•</span>
                                                    <span>Fostered collaboration with other CS organizations at UCF to build a stronger computer science community climate and promote cross-organizational technical initiatives.</span>
                                                </li>
                                                <li className="flex gap-3">
                                                    <span className="text-[#d4b5a0] mt-1.5">•</span>
                                                    <span>Led a web development team of 15+ developers in building and maintaining the UCF SASE web infrastructure, coordinating feature development and code reviews.</span>
                                                </li>
                                            </ul>

                                            <div className="flex flex-wrap gap-2 mt-4">
                                                <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">Leadership</span>
                                                <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">Teaching</span>
                                                <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">Web Development</span>
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
                <section id="work" className="min-h-screen bg-[#2b1f1a] px-8 py-24">
                    <div className="max-w-6xl mx-auto">
                        <ScrollReveal>
                            <h2 className="text-5xl font-serif text-[#e8d5c4] mb-12 tracking-wide">Projects</h2>
                        </ScrollReveal>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* Project 1 - Emergent */}
                            <ScrollReveal delay={0.1}>
                                <div className="bg-[#2b1f1a]/50 p-8 rounded-lg border border-[#5c4233] hover:border-[#d4b5a0] transition-colors duration-300">
                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="text-2xl font-serif text-[#e8d5c4]">Emergent</h3>
                                        <span className="text-xs px-2 py-1 bg-[#8B7355] text-[#1a120e] rounded font-semibold">Best Overall Hack</span>
                                    </div>
                                    <p className="text-[#d4b5a0] mb-4 leading-relaxed">
                                        AI-powered crisis simulation platform that models 50+ unique personas through a 13-phase disaster
                                        timeline. Won Best Overall Hack at KnightHacks 2025 and 2nd Place in Google ADK Challenge.
                                        Reduced latency by 60% through concurrent agent simulation.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">Next.js</span>
                                        <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">TypeScript</span>
                                        <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">Google ADK</span>
                                        <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">Gemini</span>
                                        <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">FastAPI</span>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Project 2 - VEGA */}
                            <ScrollReveal delay={0.2}>
                                <div className="bg-[#2b1f1a]/50 p-8 rounded-lg border border-[#5c4233] hover:border-[#d4b5a0] transition-colors duration-300">
                                    <h3 className="text-2xl font-serif text-[#e8d5c4] mb-4">VEGA</h3>
                                    <p className="text-[#d4b5a0] mb-4 leading-relaxed">
                                        AI-powered video engagement growth agent that evaluates content using simulated demographic
                                        audiences. Cut response latency by 15× through specialized category-based agents.
                                        Led a cross-functional team of 4 at ShellHacks 2025.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">Next.js</span>
                                        <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">TypeScript</span>
                                        <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">Supabase</span>
                                        <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">Google ADK</span>
                                        <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">FastAPI</span>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Project 3 - UCF SASE Website */}
                            <ScrollReveal delay={0.3}>
                                <div className="bg-[#2b1f1a]/50 p-8 rounded-lg border border-[#5c4233] hover:border-[#d4b5a0] transition-colors duration-300">
                                    <h3 className="text-2xl font-serif text-[#e8d5c4] mb-4">UCF SASE Website</h3>
                                    <p className="text-[#d4b5a0] mb-4 leading-relaxed">
                                        Official website serving 300+ active users with secure authentication, event management dashboards,
                                        and admin board. Streamlined administrative tasks for 15+ officers and reduced manual workflows by
                                        over 50%.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">Next.js</span>
                                        <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">TypeScript</span>
                                        <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">Supabase</span>
                                        <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">PostgreSQL</span>
                                    </div>
                                </div>
                            </ScrollReveal>

                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="min-h-screen bg-[#1a120e] px-8 py-24 flex items-center">
                    <div className="max-w-4xl mx-auto w-full">
                        <ScrollReveal>
                            <h2 className="text-5xl font-serif text-[#e8d5c4] mb-8 tracking-wide">Contact</h2>
                        </ScrollReveal>
                        <div className="space-y-8">
                            <ScrollReveal delay={0.2}>
                                <p className="text-[#d4b5a0] text-xl leading-relaxed">
                                    Have a project in mind or want to collaborate on something exciting?
                                    I'd love to hear from you.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal delay={0.3}>
                                <div className="space-y-4 text-[#d4b5a0]">
                                    <div>
                                        <h3 className="text-sm uppercase tracking-widest text-[#8B7355] mb-2">Email</h3>
                                        <a href="mailto:ericgeo324@gmail.com" className="text-xl hover:text-[#e8d5c4] transition-colors">
                                            ericgeo324@gmail.com
                                        </a>
                                    </div>

                                    <div>
                                        <h3 className="text-sm uppercase tracking-widest text-[#8B7355] mb-2">Phone</h3>
                                        <a href="tel:407-752-5950" className="text-xl hover:text-[#e8d5c4] transition-colors">
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
                                        <p className="text-xl">Orlando, FL</p>
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
