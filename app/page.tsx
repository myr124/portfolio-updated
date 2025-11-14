import CupScene from './components/CupScene';
import Navbar from './components/Navbar';

export default function Home() {
    return (
        <div className="w-full min-h-screen">
            <Navbar />
            {/* <CupScene /> */}
            <main className="w-full pt-16 relative z-10">
                {/* Hero section with cup */}
                <div className="h-screen flex items-center justify-end px-16 relative overflow-hidden">
                    {/* Background image with blur */}
                    <div
                        className="absolute inset-0 -z-10"
                        style={{
                            backgroundImage: 'url(/abstract-blurred-people-night-festival-city-park-bokeh-background-vintage-tone.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'blur(8px)',
                            transform: 'scale(1.1)',
                        }}
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-[#1a120e]/60 -z-10" />

                    <div className="max-w-2xl text-right relative z-20">
                        <h1 className="text-7xl font-serif text-[#e8d5c4] mb-6 tracking-wide">
                            Crafting Digital Experiences
                        </h1>
                        <p className="text-xl text-[#d4b5a0] leading-relaxed">
                            Where creativity meets precision, and every detail tells a story
                        </p>
                    </div>
                </div>

                {/* About Section */}
                <section id="about" className="min-h-screen bg-[#2b1f1a] px-8 py-24">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-5xl font-serif text-[#e8d5c4] mb-8 tracking-wide">About</h2>
                        <div className="space-y-6 text-[#d4b5a0] text-lg leading-relaxed font-body">
                            <p>
                                Welcome to a space where creativity meets craftsmanship. With over a decade of experience
                                in digital design and development, I specialize in creating experiences that are both
                                beautiful and functional.
                            </p>
                            <p>
                                My approach is rooted in thoughtful design principles, attention to detail, and a deep
                                understanding of user needs. Every project is an opportunity to blend aesthetics with
                                purpose, creating solutions that resonate.
                            </p>
                            <p>
                                When I'm not crafting digital experiences, you'll find me exploring new coffee roasts,
                                sketching ideas in my notebook, or diving into the latest design trends. I believe that
                                inspiration comes from everywhere, and the best work happens when passion meets expertise.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Work Section */}
                <section id="work" className="min-h-screen bg-[#3d2e28] px-8 py-24">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-5xl font-serif text-[#e8d5c4] mb-12 tracking-wide">Work</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* Project 1 */}
                            <div className="bg-[#2b1f1a]/50 p-8 rounded-lg border border-[#5c4233] hover:border-[#d4b5a0] transition-colors duration-300">
                                <h3 className="text-2xl font-serif text-[#e8d5c4] mb-4">Artisan Collective</h3>
                                <p className="text-[#d4b5a0] mb-4 leading-relaxed">
                                    A curated marketplace connecting independent artisans with discerning customers.
                                    Built with modern web technologies and a focus on storytelling through design.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">Next.js</span>
                                    <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">TypeScript</span>
                                    <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">Tailwind</span>
                                </div>
                            </div>

                            {/* Project 2 */}
                            <div className="bg-[#2b1f1a]/50 p-8 rounded-lg border border-[#5c4233] hover:border-[#d4b5a0] transition-colors duration-300">
                                <h3 className="text-2xl font-serif text-[#e8d5c4] mb-4">Mindful Moments</h3>
                                <p className="text-[#d4b5a0] mb-4 leading-relaxed">
                                    A meditation and wellness app designed to bring calm to daily routines.
                                    Features immersive experiences with thoughtful animations and interactions.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">React Native</span>
                                    <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">Three.js</span>
                                    <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">Motion</span>
                                </div>
                            </div>

                            {/* Project 3 */}
                            <div className="bg-[#2b1f1a]/50 p-8 rounded-lg border border-[#5c4233] hover:border-[#d4b5a0] transition-colors duration-300">
                                <h3 className="text-2xl font-serif text-[#e8d5c4] mb-4">Urban Chronicles</h3>
                                <p className="text-[#d4b5a0] mb-4 leading-relaxed">
                                    An editorial platform celebrating urban culture and street photography.
                                    Clean layouts and bold typography create an engaging reading experience.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">Gatsby</span>
                                    <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">GraphQL</span>
                                    <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">CMS</span>
                                </div>
                            </div>

                            {/* Project 4 */}
                            <div className="bg-[#2b1f1a]/50 p-8 rounded-lg border border-[#5c4233] hover:border-[#d4b5a0] transition-colors duration-300">
                                <h3 className="text-2xl font-serif text-[#e8d5c4] mb-4">Brew Guide</h3>
                                <p className="text-[#d4b5a0] mb-4 leading-relaxed">
                                    A comprehensive coffee brewing companion with interactive guides and timers.
                                    Combines beautiful visuals with practical functionality for coffee enthusiasts.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">React</span>
                                    <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">PWA</span>
                                    <span className="text-xs px-3 py-1 bg-[#4a3429] text-[#d4b5a0] rounded-full">Design</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="min-h-screen bg-[#1a120e] px-8 py-24 flex items-center">
                    <div className="max-w-4xl mx-auto w-full">
                        <h2 className="text-5xl font-serif text-[#e8d5c4] mb-8 tracking-wide">Contact</h2>
                        <div className="space-y-8">
                            <p className="text-[#d4b5a0] text-xl leading-relaxed">
                                Have a project in mind or just want to chat about design?
                                I'd love to hear from you.
                            </p>

                            <div className="space-y-4 text-[#d4b5a0]">
                                <div>
                                    <h3 className="text-sm uppercase tracking-widest text-[#8B7355] mb-2">Email</h3>
                                    <a href="mailto:hello@example.com" className="text-xl hover:text-[#e8d5c4] transition-colors">
                                        hello@example.com
                                    </a>
                                </div>

                                <div>
                                    <h3 className="text-sm uppercase tracking-widest text-[#8B7355] mb-2">Social</h3>
                                    <div className="flex gap-6 text-lg">
                                        <a href="#" className="hover:text-[#e8d5c4] transition-colors">Twitter</a>
                                        <a href="#" className="hover:text-[#e8d5c4] transition-colors">LinkedIn</a>
                                        <a href="#" className="hover:text-[#e8d5c4] transition-colors">GitHub</a>
                                        <a href="#" className="hover:text-[#e8d5c4] transition-colors">Dribbble</a>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-sm uppercase tracking-widest text-[#8B7355] mb-2">Location</h3>
                                    <p className="text-xl">San Francisco, CA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
