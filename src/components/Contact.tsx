'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Contact = () => {
  const contactSection = useScrollAnimation();

  return (
    <section
      id="contact"
      ref={contactSection.ref}
      className={`w-full bg-[#1316b8] py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 scroll-animate ${contactSection.isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center gap-6">
        <h2 className="font-lato font-bold text-4xl md:text-5xl lg:text-[65px] leading-tight text-white m-0">
          Ready to Start Your Project?
        </h2>
        <p className="font-lato text-lg md:text-xl lg:text-2xl text-white/90 m-0 max-w-3xl">
          Let&apos;s discuss your requirements and find the perfect solution for your business
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mt-4">
          <a
            href="#contact-form"
            className="inline-flex min-w-[240px] justify-center rounded-[11px] bg-white px-8 py-4 font-lato font-semibold text-lg text-[#1316b8] transition hover:opacity-90"
          >
            Get Free Consultation
          </a>
          <a
            href="/process"
            className="inline-flex min-w-[240px] justify-center rounded-[11px] border border-white px-8 py-4 font-lato font-semibold text-lg text-white transition hover:bg-white/10"
          >
            View Our Process
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

