import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Phone } from 'lucide-react';
import { heroConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  if (!heroConfig.backgroundText && !heroConfig.heroImage && heroConfig.navLinks.length === 0) return null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for background image
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          if (imageRef.current) {
            gsap.set(imageRef.current, { yPercent: self.progress * 30 });
          }
        },
      });

      // Content fade in
      ScrollTrigger.create({
        trigger: contentRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            contentRef.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
          );
        },
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background Image - Full Width Horizontal */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        <img
          src={heroConfig.heroImage}
          alt={heroConfig.heroImageAlt}
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3D3229]/60 via-[#3D3229]/30 to-[#3D3229]/70" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-40 px-6 md:px-12 py-6 flex items-center justify-between">
        <div className="text-[#FAF8F3] font-sans font-bold text-lg tracking-tight">
          {heroConfig.brandName}
        </div>
        {heroConfig.navLinks.length > 0 && (
          <div className="hidden md:flex items-center gap-8 text-[#FAF8F3]/90 text-sm font-body">
            {heroConfig.navLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-[#8FBC8F] transition-colors duration-300 nav-link">{link.label}</a>
            ))}
          </div>
        )}
        <button className="md:hidden text-[#FAF8F3]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Center Content */}
      <div
        ref={contentRef}
        className="relative z-30 min-h-screen flex flex-col items-center justify-center px-6 text-center opacity-0"
      >
        <p className="text-[#8FBC8F] font-body text-sm uppercase tracking-widest mb-4">
          Valle d'Aosta, Italia
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold text-[#FAF8F3] tracking-tight mb-6">
          Le Refuge
          <br />
          <span className="font-serif italic font-normal text-[#8FBC8F]">de la Pomme</span>
        </h1>
        <p className="text-[#FAF8F3]/80 font-body text-lg md:text-xl max-w-xl mb-10">
          Il tuo rifugio accogliente nel cuore delle montagne
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={heroConfig.airbnbLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF5A5F] text-white font-sans font-semibold rounded-full hover:bg-[#E04A4F] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <ExternalLink className="w-5 h-5" />
            Prenota su Airbnb
          </a>
          <a
            href={`tel:${heroConfig.phone}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FAF8F3]/10 backdrop-blur-sm text-[#FAF8F3] font-sans font-semibold rounded-full hover:bg-[#FAF8F3]/20 transition-all duration-300 border border-[#FAF8F3]/30"
          >
            <Phone className="w-5 h-5" />
            {heroConfig.phone}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <svg className="w-6 h-6 text-[#FAF8F3]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
