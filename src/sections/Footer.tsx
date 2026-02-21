import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, ExternalLink } from 'lucide-react';
import { footerConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  if (!footerConfig.logoText && footerConfig.navLinks.length === 0) return null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo — scale up + fade
      ScrollTrigger.create({
        trigger: logoRef.current,
        start: 'top 88%',
        onEnter: () => {
          gsap.fromTo(
            logoRef.current,
            { y: 80, opacity: 0, scale: 0.9 },
            { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' }
          );
        },
        once: true,
      });

      // Content — fade up
      ScrollTrigger.create({
        trigger: contentRef.current,
        start: 'top 88%',
        onEnter: () => {
          gsap.fromTo(
            contentRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
          );
        },
        once: true,
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      id="contatti"
      className="relative w-full bg-[#FAF8F3] pt-24 md:pt-32 pb-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Massive Logo */}
        {footerConfig.logoText && (
          <div ref={logoRef} className="opacity-0 mb-16 md:mb-24">
            <svg
              viewBox="0 0 800 100"
              className="w-full h-auto max-h-[20vh]"
              preserveAspectRatio="xMidYMid meet"
            >
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="fill-[#3D3229] font-sans font-extrabold"
                style={{
                  fontSize: '70px',
                  letterSpacing: '-0.02em',
                }}
              >
                {footerConfig.logoText}
              </text>
            </svg>
          </div>
        )}

        {/* Footer Content */}
        <div ref={contentRef} className="opacity-0">
          <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-16">
            {/* Contact Info - Phone only */}
            <div>
              {footerConfig.contactLabel && (
                <p className="text-[#6B8E23] text-sm font-body uppercase tracking-widest mb-4">
                  {footerConfig.contactLabel}
                </p>
              )}
              {footerConfig.phone && (
                <a
                  href={`tel:${footerConfig.phone}`}
                  className="inline-flex items-center gap-2 text-xl md:text-2xl font-sans font-semibold text-[#3D3229] hover:text-[#6B8E23] transition-colors duration-300"
                >
                  <Phone className="w-5 h-5" />
                  {footerConfig.phone}
                </a>
              )}
              {/* Airbnb CTA */}
              <div className="mt-6">
                <a
                  href={footerConfig.airbnbLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF5A5F] text-white font-sans font-semibold text-sm rounded-full hover:bg-[#E04A4F] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  Prenota su Airbnb
                </a>
              </div>
            </div>

            {/* Navigation */}
            {footerConfig.navLinks.length > 0 && (
              <div>
                {footerConfig.navigationLabel && (
                  <p className="text-[#6B8E23] text-sm font-body uppercase tracking-widest mb-4">
                    {footerConfig.navigationLabel}
                  </p>
                )}
                <nav className="space-y-3">
                  {footerConfig.navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block text-[#5C4D3C] hover:text-[#6B8E23] font-body transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Tagline */}
            <div>
              {footerConfig.tagline && (
                <p className="text-[#8B7355] font-body text-sm whitespace-pre-line">
                  {footerConfig.tagline}
                </p>
              )}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-[#3D3229]/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#8B7355] font-body text-sm">
              {footerConfig.copyright || `\u00A9 ${new Date().getFullYear()} All rights reserved.`}
            </p>
            {footerConfig.bottomLinks.length > 0 && (
              <div className="flex items-center gap-6 text-[#8B7355] font-body text-sm">
                {footerConfig.bottomLinks.map((link) => (
                  <a key={link.label} href={link.href} className="hover:text-[#6B8E23] transition-colors duration-300">
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Developed by */}
          <div className="mt-6 pt-4 border-t border-[#3D3229]/5 flex justify-center">
            <a
              href="https://www.nexivo.works"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#6B8E23] font-body text-sm hover:text-[#5a7a1d] transition-colors duration-300 group"
            >
              <svg
                className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              Developed by Nexivo
            </a>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#E8E0D0] to-transparent pointer-events-none" />
    </footer>
  );
}
