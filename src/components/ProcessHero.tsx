'use client';

import Image from 'next/image';

const ProcessHero = () => {
  const heroBackgroundImage = 'http://localhost:3845/assets/1b27f8a00c22ad1bf6cc55924745eeaa4adf7a21.png';
  const heroTitle = 'Our Process';
  const heroDescription = 'A proven methodology that ensures successful project delivery from initial concept to final deployment and beyond.';
  const baseColor = '#7D9806';
  const imageOpacity = 0.25;

  return (
    <section className="relative w-full min-h-[40vh] sm:min-h-[45vh] md:min-h-[50vh] lg:min-h-[55vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 left-0 right-0 w-full" aria-hidden="true">
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundColor: baseColor
          }}
        />
        <div 
          className="absolute inset-0"
          style={{ 
            opacity: imageOpacity 
          }}
        >
          <Image 
            src={heroBackgroundImage} 
            alt="Process planning background" 
            fill
            priority
            unoptimized
            className="object-cover object-center"
            quality={90}
            sizes="100vw"
          />
        </div>
      </div>
      
      {heroTitle && (
        <div className="relative z-[4] max-w-[1150px] w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 flex flex-col items-center text-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8">
          <h1 className="font-lato font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] leading-tight text-black text-center m-0 max-w-full px-2">
            {heroTitle}
          </h1>
          
          {heroDescription && (
            <p className="font-lato font-bold text-base sm:text-lg md:text-xl xl:text-[24px] leading-[1.5] text-black text-center max-w-[900px] mx-auto m-0 px-4 sm:px-6 md:px-8 lg:px-0">
              {heroDescription}
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default ProcessHero;

