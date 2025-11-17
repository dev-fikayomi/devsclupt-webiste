'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import contactBackground from '../../assets/contact.png';
import ContactChannels from './ContactChannels';
import ContactInquiry from './ContactInquiry';

const ContactHero = () => {
  const heroSection = useScrollAnimation();

  const heroBackgroundImage = contactBackground;
  const heroTitle = 'Get In Touch';
  const heroDescription =
    "Ready to transform your ideas into powerful digital solutions? Let's start the conversation and explore how we can help your business thrive.";
  const baseColor = '#000000';
  const imageOpacity = 0.45;

  return (
    <>
      <section
        ref={heroSection.ref}
        className={`relative w-full min-h-[45vh] sm:min-h-[50vh] md:min-h-[55vh] lg:min-h-[60vh] flex items-center justify-center overflow-hidden scroll-animate ${heroSection.isVisible ? 'visible' : ''}`}
      >
        <div className="absolute inset-0 z-0 left-0 right-0 w-full" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: baseColor,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              opacity: imageOpacity,
            }}
          >
            <Image
              src={heroBackgroundImage}
              alt="Contact background"
              fill
              priority
              className="object-cover object-center"
              quality={90}
              sizes="100vw"
            />
          </div>
        </div>

        <div className="relative z-[4] max-w-[1150px] w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 flex flex-col items-center text-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8">
          <h1 className="font-lato font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[65px] leading-tight sm:leading-normal text-white text-center m-0 max-w-full drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] px-2">
            {heroTitle}
          </h1>

          <p className="font-lato text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] leading-[1.4] sm:leading-[1.5] md:leading-[1.55] lg:leading-[1.6] text-white text-center max-w-[900px] mx-auto m-0 px-4 sm:px-6 md:px-8 lg:px-0 drop-shadow-[0_1px_4px_rgba(0,0,0,0.25)]">
            {heroDescription}
          </p>
        </div>
      </section>
      <ContactChannels />
      <ContactInquiry />
    </>
  );
};

export default ContactHero;

