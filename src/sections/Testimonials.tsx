import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/free-mode';
import { testimonialsConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  if (!testimonialsConfig.titleRegular && testimonialsConfig.testimonials.length === 0) return null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: headerRef.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(
            headerRef.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
          );
        },
        once: true,
      });

      ScrollTrigger.create({
        trigger: badgeRef.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(
            badgeRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.2 }
          );
        },
        once: true,
      });

      ScrollTrigger.create({
        trigger: carouselRef.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(
            carouselRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
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
      id="recensioni"
      className="relative w-full py-24 md:py-32 bg-[#FAF8F3] overflow-hidden"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 md:mb-12">
        <div ref={headerRef} className="text-center opacity-0">
          {testimonialsConfig.subtitle && (
            <p className="text-[#6B8E23] text-sm font-body uppercase tracking-widest mb-4">
              {testimonialsConfig.subtitle}
            </p>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-[#3D3229] tracking-tight">
            {testimonialsConfig.titleRegular}{' '}
            <span className="font-serif italic font-normal text-[#8B7355]">
              {testimonialsConfig.titleItalic}
            </span>
          </h2>
        </div>
      </div>

      {/* Airbnb Badge */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14 md:mb-16">
        <div ref={badgeRef} className="opacity-0 flex flex-col items-center gap-3">
          <a
            href="https://www.airbnb.com/rooms/1182698702822127628"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-5 bg-white border border-[#E8E0D0] rounded-2xl px-8 py-5 shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1 group"
          >
            {/* Airbnb logo */}
            <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2C10.477 2 6 6.477 6 12c0 7.714 10 18 10 18s10-10.286 10-18c0-5.523-4.477-10-10-10zm0 13.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" fill="#FF5A5F" />
            </svg>

            <div className="w-px h-10 bg-[#E8E0D0]" />

            {/* Stars + rating */}
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FF5A5F] text-[#FF5A5F]" />
                ))}
              </div>
              <span className="text-2xl font-sans font-bold text-[#3D3229] leading-none">5.0</span>
              <span className="text-xs text-[#8B7355] font-body">Tutte 5 stelle ★</span>
            </div>

            <div className="w-px h-10 bg-[#E8E0D0]" />

            {/* Guest favorite */}
            <div className="flex flex-col items-center gap-1">
              <svg className="w-6 h-6 text-[#FF5A5F]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-xs font-sans font-semibold text-[#3D3229] whitespace-nowrap">Guest Favorite</span>
              <span className="text-xs text-[#8B7355] font-body whitespace-nowrap">Verificato da Airbnb</span>
            </div>
          </a>

          {/* Subtitle note */}
          <p className="text-[#8B7355] font-body text-xs text-center">
            Alcune delle recensioni verificate dei nostri ospiti su Airbnb
          </p>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div ref={carouselRef} className="relative opacity-0">
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={24}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          speed={800}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 24 },
            768: { slidesPerView: 2, spaceBetween: 32 },
            1024: { slidesPerView: 2.5, spaceBetween: 40 },
            1280: { slidesPerView: 3, spaceBetween: 48 },
          }}
          className="!px-6"
        >
          {testimonialsConfig.testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="group bg-[#E8E0D0] rounded-xl p-8 md:p-10 h-full transition-all duration-500 hover:bg-[#3D3229] hover:shadow-xl">

                {/* Top row: quote icon + airbnb verified badge */}
                <div className="flex items-start justify-between mb-5">
                  <Quote
                    className="w-9 h-9 text-[#6B8E23]/30 group-hover:text-[#8FBC8F]/40 transition-colors duration-500"
                    strokeWidth={1}
                  />
                  <div className="flex items-center gap-1.5 bg-white/60 group-hover:bg-white/10 rounded-full px-3 py-1 transition-colors duration-500">
                    <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 32 32" fill="none">
                      <path d="M16 2C10.477 2 6 6.477 6 12c0 7.714 10 18 10 18s10-10.286 10-18c0-5.523-4.477-10-10-10zm0 13.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" fill="#FF5A5F" />
                    </svg>
                    <span className="text-[10px] font-body text-[#5C4D3C] group-hover:text-[#FAF8F3]/70 transition-colors duration-500 whitespace-nowrap">
                      Verificato Airbnb
                    </span>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FF5A5F] text-[#FF5A5F]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#5C4D3C] group-hover:text-[#FAF8F3]/90 font-body text-base leading-relaxed mb-8 transition-colors duration-500">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author + date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Avatar initials */}
                    <div className="w-10 h-10 rounded-full bg-[#6B8E23]/20 group-hover:bg-[#8FBC8F]/20 flex items-center justify-center flex-shrink-0 transition-colors duration-500">
                      <span className="text-sm font-sans font-bold text-[#6B8E23] group-hover:text-[#8FBC8F] transition-colors duration-500">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-sm text-[#3D3229] group-hover:text-[#FAF8F3] transition-colors duration-500">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-[#8B7355] group-hover:text-[#FAF8F3]/60 font-body transition-colors duration-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  {/* Date */}
                  <span className="text-xs text-[#8B7355]/70 group-hover:text-[#FAF8F3]/40 font-body transition-colors duration-500">
                    {testimonial.date}
                  </span>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#FAF8F3] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#FAF8F3] to-transparent z-10 pointer-events-none" />
      </div>

      {/* Link to all reviews */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-10 flex justify-center">
        <a
          href="https://www.airbnb.com/rooms/1182698702822127628#reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#6B8E23] font-body text-sm border-b border-[#6B8E23]/30 pb-1 hover:border-[#6B8E23] transition-colors duration-300 group"
        >
          Leggi tutte le nostre recensioni su Airbnb
          <svg className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16">
        <div className="h-px bg-gradient-to-r from-transparent via-[#3D3229]/10 to-transparent" />
      </div>
    </section>
  );
}
