import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Calendar, Users, MessageSquare, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header — slide up
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

      // Form — slide up
      ScrollTrigger.create({
        trigger: formRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            formRef.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
          );
        },
        once: true,
      });

      // Info cards — staggered slide up
      ScrollTrigger.create({
        trigger: infoRef.current,
        start: 'top 80%',
        onEnter: () => {
          const cards = infoRef.current?.querySelectorAll('.info-card');
          if (cards) {
            gsap.fromTo(
              cards,
              { y: 40, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.1,
                delay: 0.3,
              }
            );
          }
        },
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        guests: '2',
        message: ''
      });
    }, 1500);
  };

  return (
    <section
      ref={sectionRef}
      id="contatti"
      className="relative w-full py-24 md:py-32 bg-[#FAF8F3]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 md:mb-20 opacity-0">
          <p className="text-[#6B8E23] text-sm font-body uppercase tracking-widest mb-4">
            Prenota il tuo soggiorno
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-[#3D3229] tracking-tight">
            Contatti e <span className="font-serif italic font-normal text-[#6B8E23]">Prenotazioni</span>
          </h2>
          <p className="mt-4 text-[#5C4D3C] font-body text-base md:text-lg max-w-2xl mx-auto">
            Compila il modulo per richiedere informazioni o prenotare il tuo soggiorno. Ti risponderemo entro 24 ore.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Form */}
          <form 
            ref={formRef} 
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-white rounded-2xl p-8 md:p-10 shadow-warm opacity-0"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#6B8E23]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-[#6B8E23]" />
                </div>
                <h3 className="text-2xl font-sans font-bold text-[#3D3229] mb-3">Grazie!</h3>
                <p className="text-[#5C4D3C] font-body">
                  La tua richiesta è stata inviata con successo. Ti contatteremo presto!
                </p>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-body text-[#5C4D3C] mb-2">
                      Nome e Cognome *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F3] border-2 border-transparent focus:border-[#6B8E23] focus:outline-none focus:ring-2 focus:ring-[#6B8E23]/20 transition-all duration-300 text-[#3D3229] font-body"
                      placeholder="Mario Rossi"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-body text-[#5C4D3C] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F3] border-2 border-transparent focus:border-[#6B8E23] focus:outline-none focus:ring-2 focus:ring-[#6B8E23]/20 transition-all duration-300 text-[#3D3229] font-body"
                      placeholder="mario@email.it"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-body text-[#5C4D3C] mb-2">
                      Telefono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F3] border-2 border-transparent focus:border-[#6B8E23] focus:outline-none focus:ring-2 focus:ring-[#6B8E23]/20 transition-all duration-300 text-[#3D3229] font-body"
                      placeholder="+39 123 456 7890"
                    />
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block text-sm font-body text-[#5C4D3C] mb-2">
                      Numero Ospiti *
                    </label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B7355]" />
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#FAF8F3] border-2 border-transparent focus:border-[#6B8E23] focus:outline-none focus:ring-2 focus:ring-[#6B8E23]/20 transition-all duration-300 text-[#3D3229] font-body appearance-none"
                      >
                        <option value="1">1 ospite</option>
                        <option value="2">2 ospiti</option>
                        <option value="3">3 ospiti</option>
                        <option value="4">4 ospiti</option>
                        <option value="5">5 ospiti</option>
                        <option value="6">6 ospiti</option>
                      </select>
                    </div>
                  </div>

                  {/* Check-in */}
                  <div>
                    <label className="block text-sm font-body text-[#5C4D3C] mb-2">
                      Check-in *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B7355]" />
                      <input
                        type="date"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#FAF8F3] border-2 border-transparent focus:border-[#6B8E23] focus:outline-none focus:ring-2 focus:ring-[#6B8E23]/20 transition-all duration-300 text-[#3D3229] font-body"
                      />
                    </div>
                  </div>

                  {/* Check-out */}
                  <div>
                    <label className="block text-sm font-body text-[#5C4D3C] mb-2">
                      Check-out *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B7355]" />
                      <input
                        type="date"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#FAF8F3] border-2 border-transparent focus:border-[#6B8E23] focus:outline-none focus:ring-2 focus:ring-[#6B8E23]/20 transition-all duration-300 text-[#3D3229] font-body"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label className="block text-sm font-body text-[#5C4D3C] mb-2">
                    Messaggio
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[#8B7355]" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#FAF8F3] border-2 border-transparent focus:border-[#6B8E23] focus:outline-none focus:ring-2 focus:ring-[#6B8E23]/20 transition-all duration-300 text-[#3D3229] font-body resize-none"
                      placeholder="Scrivi qui le tue domande o richieste speciali..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#6B8E23] text-white font-sans font-semibold rounded-full hover:bg-[#5a7a1d] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Invio in corso...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Invia Richiesta
                    </>
                  )}
                </button>
              </>
            )}
          </form>

          {/* Contact Info */}
          <div ref={infoRef} className="lg:col-span-2 space-y-6">
            {/* Phone Card */}
            <div className="info-card bg-white rounded-xl p-6 shadow-warm opacity-0 group hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#6B8E23]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#6B8E23] transition-colors duration-300">
                  <Phone className="w-6 h-6 text-[#6B8E23] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-[#3D3229] mb-1">Telefono</h4>
                  <a 
                    href="tel:+393473014084"
                    className="text-[#5C4D3C] font-body hover:text-[#6B8E23] transition-colors duration-300"
                  >
                    +393473014084
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Book CTA */}
            <div className="info-card bg-gradient-to-br from-[#6B8E23] to-[#5a7a1d] rounded-xl p-6 opacity-0">
              <h4 className="font-sans font-bold text-white text-lg mb-2">
                Prenota Ora!
              </h4>
              <p className="text-white/80 font-body text-sm mb-4">
                Disponibilità limitata. Prenota subito per assicurarti il tuo soggiorno.
              </p>
              <a 
                href="https://www.airbnb.com/rooms/1182698702822127628"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#6B8E23] font-sans font-semibold text-sm rounded-full hover:bg-[#FAF8F3] transition-colors duration-300"
              >
                <Calendar className="w-4 h-4" />
                Prenota su Airbnb
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
