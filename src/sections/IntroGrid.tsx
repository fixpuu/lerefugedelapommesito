import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { introGridConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

// Per-image animation config: unique direction, rotation, parallax depth, stagger order
const imageAnimConfigs = [
  { clipFrom: 'inset(0% 100% 0% 0%)', rotation: -2, parallax: [-6, 6], delay: 0 },
  { clipFrom: 'inset(0% 0% 100% 0%)', rotation: 1.5, parallax: [-3, 3], delay: 0.08 },
  { clipFrom: 'inset(0% 0% 0% 100%)', rotation: -1.2, parallax: [-5, 5], delay: 0.12 },
  { clipFrom: 'inset(100% 0% 0% 0%)', rotation: 1, parallax: [-4, 4], delay: 0.16 },
  { clipFrom: 'inset(0% 100% 0% 0%)', rotation: -1.5, parallax: [-7, 7], delay: 0.20 },
  { clipFrom: 'inset(0% 0% 100% 0%)', rotation: 1.2, parallax: [-3, 3], delay: 0.24 },
  { clipFrom: 'inset(0% 0% 0% 100%)', rotation: -1, parallax: [-5, 5], delay: 0.28 },
  { clipFrom: 'inset(100% 0% 0% 0%)', rotation: 1.5, parallax: [-4, 4], delay: 0.32 },
  { clipFrom: 'inset(0% 100% 0% 0%)', rotation: -1.3, parallax: [-6, 6], delay: 0.36 },
  { clipFrom: 'inset(0% 0% 100% 0%)', rotation: 1, parallax: [-3, 3], delay: 0.40 },
  { clipFrom: 'inset(0% 0% 0% 100%)', rotation: -1.5, parallax: [-5, 5], delay: 0.44 },
  { clipFrom: 'inset(100% 0% 0% 0%)', rotation: 1.2, parallax: [-4, 4], delay: 0.48 },
];

export function IntroGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleLine1Ref = useRef<HTMLDivElement>(null);
  const titleLine2Ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  if (!introGridConfig.titleLine1 && !introGridConfig.titleLine2 && introGridConfig.portfolioImages.length === 0) return null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Title: mask-reveal per line ──
      const titleWrap = titleLine1Ref.current?.parentElement?.parentElement;
      if (titleWrap) {
        ScrollTrigger.create({
          trigger: titleWrap,
          start: 'top 85%',
          onEnter: () => {
            gsap.to(
              [titleLine1Ref.current, titleLine2Ref.current],
              {
                yPercent: 0,
                duration: 1.1,
                ease: 'power4.out',
                stagger: 0.13,
              }
            );
          },
          once: true,
        });
      }

      // ── Description: fade up ──
      ScrollTrigger.create({
        trigger: textRef.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(
            textRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.35 }
          );
        },
        once: true,
      });

      // ── Grid images: per-image directional reveal + rotation + scale + parallax ──
      const gridItems = gridRef.current?.querySelectorAll('.grid-item');
      if (gridItems) {
        gridItems.forEach((item, i) => {
          const img = item.querySelector('img');
          const cfg = imageAnimConfigs[i];
          if (!cfg) return;

          // One-shot reveal on scroll-enter
          ScrollTrigger.create({
            trigger: item,
            start: 'top 90%',
            onEnter: () => {
              // Unhide (Tailwind opacity-0 used as pre-GSAP fallback)
              gsap.set(item, { opacity: 1 });

              // Clip-path directional reveal
              gsap.fromTo(
                item,
                { clipPath: cfg.clipFrom },
                {
                  clipPath: 'inset(0% 0% 0% 0%)',
                  duration: 1.3,
                  ease: 'power4.inOut',
                  delay: cfg.delay,
                }
              );

              if (img) {
                // Scale zoom-out (Ken Burns)
                gsap.fromTo(
                  img,
                  { scale: 1.45, rotate: cfg.rotation },
                  {
                    scale: 1.12,
                    rotate: 0,
                    duration: 1.8,
                    ease: 'power3.out',
                    delay: cfg.delay,
                  }
                );
              }
            },
            once: true,
          });

          // Continuous parallax (varied depth per image → layered 3D feel)
          if (img) {
            gsap.fromTo(
              img,
              { yPercent: cfg.parallax[0] },
              {
                yPercent: cfg.parallax[1],
                ease: 'none',
                scrollTrigger: {
                  trigger: item,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 1.2,
                },
              }
            );
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="alloggio"
      className="relative w-full py-24 md:py-32 bg-[#FAF8F3]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* ── Title with split-line mask reveal ── */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <div className="mb-6">
            <div className="overflow-hidden">
              <div
                ref={titleLine1Ref}
                className="translate-y-[110%]"
              >
                <span className="block text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-[#3D3229] tracking-tight">
                  {introGridConfig.titleLine1}
                </span>
              </div>
            </div>
            <div className="overflow-hidden">
              <div
                ref={titleLine2Ref}
                className="translate-y-[110%]"
              >
                <span className="block text-3xl md:text-4xl lg:text-5xl font-serif italic font-normal text-[#6B8E23]">
                  {introGridConfig.titleLine2}
                </span>
              </div>
            </div>
          </div>

          <p
            ref={textRef}
            className="text-base md:text-lg text-[#5C4D3C] font-body leading-relaxed opacity-0"
          >
            {introGridConfig.description}
          </p>
        </div>

        {/* ── Masonry Grid - 12 images with varied layout ── */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]"
        >
          {introGridConfig.portfolioImages.map((image, index) => (
            <div
              key={index}
              className={`grid-item relative overflow-hidden rounded-xl group cursor-pointer opacity-0 ${
                // First image - large, spans 2 rows
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              } ${
                // 6th image - spans 2 columns
                index === 5 ? 'md:col-span-2' : ''
              } ${
                // 9th image - spans 2 rows
                index === 8 ? 'md:row-span-2' : ''
              } ${
                // Last image - large
                index === 11 ? 'md:col-span-2' : ''
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover will-change-transform"
                loading="lazy"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#6B8E23]/0 group-hover:bg-[#6B8E23]/20 transition-colors duration-500" />

              {/* Viewfinder corners on hover */}
              <div className="absolute top-3 left-3 w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-white/0 group-hover:border-white/80 transition-all duration-500" />
              <div className="absolute top-3 right-3 w-6 h-6 md:w-8 md:h-8 border-t-2 border-r-2 border-white/0 group-hover:border-white/80 transition-all duration-500" />
              <div className="absolute bottom-3 left-3 w-6 h-6 md:w-8 md:h-8 border-b-2 border-l-2 border-white/0 group-hover:border-white/80 transition-all duration-500" />
              <div className="absolute bottom-3 right-3 w-6 h-6 md:w-8 md:h-8 border-b-2 border-r-2 border-white/0 group-hover:border-white/80 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Floating accent text */}
        {introGridConfig.accentText && (
          <div className="mt-12 md:mt-16 flex justify-end">
            <p className="text-sm text-[#8B7355] font-body tracking-wider uppercase">
              {introGridConfig.accentText}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
