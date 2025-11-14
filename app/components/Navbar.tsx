'use client';

export default function Navbar() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update URL hash without jumping
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2b1f1a]/80 backdrop-blur-sm border-b border-[#3d2e28]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <div className="flex items-center space-x-12">
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="text-[#d4b5a0] hover:text-[#e8d5c4] transition-colors duration-200 text-sm tracking-widest uppercase font-light"
            >
              About
            </a>
            <a
              href="#work"
              onClick={(e) => scrollToSection(e, 'work')}
              className="text-[#d4b5a0] hover:text-[#e8d5c4] transition-colors duration-200 text-sm tracking-widest uppercase font-light"
            >
              Work
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="text-[#d4b5a0] hover:text-[#e8d5c4] transition-colors duration-200 text-sm tracking-widest uppercase font-light"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
