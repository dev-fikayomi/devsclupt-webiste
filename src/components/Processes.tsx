'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const processSteps = [
  {
    number: '1',
    title: 'Discovery',
    description:
      'We start by understanding your business objectives, target audience, and technical requirements through comprehensive analysis.',
    duration: 'Duration: 1-2 weeks',
    cardBg: 'rgba(9,164,51,0.05)',
    badgeBg: '#09a433',
  },
  {
    number: '2',
    title: 'Planning and Design',
    description:
      'Detailed project roadmap creation, system architecture design, and user experience planning to ensure optimal outcomes.',
    duration: 'Duration: 1-3 weeks',
    cardBg: 'rgba(255,154,12,0.05)',
    badgeBg: '#ff9a0c',
  },
  {
    number: '3',
    title: 'Development',
    description:
      'Agile development with regular iterations, continuous integration, and transparent progress tracking throughout the build phase.',
    duration: 'Duration: 4-16 weeks',
    cardBg: 'rgba(252,234,43,0.15)',
    badgeBg: '#fceA2b',
    badgeText: '#131313',
  },
  {
    number: '4',
    title: 'Testing and QA',
    description:
      'Comprehensive testing including functionality, performance, security, and user acceptance testing to ensure quality delivery.',
    duration: 'Duration: 1-2 weeks',
    cardBg: 'rgba(222,46,46,0.05)',
    badgeBg: '#de2e2e',
  },
  {
    number: '5',
    title: 'Deployment',
    description:
      'Seamless production deployment with careful monitoring, rollback strategies, and performance optimization for go-live success.',
    duration: 'Duration: 1 week',
    cardBg: 'rgba(30,173,212,0.05)',
    badgeBg: '#1eadD4',
  },
  {
    number: '6',
    title: 'Support and Growth',
    description:
      'Ongoing maintenance, performance monitoring, feature enhancements, and scaling support to ensure continued success.',
    duration: 'Duration: Ongoing',
    cardBg: 'rgba(19,22,184,0.05)',
    badgeBg: '#1316b8',
  },
];

const Processes = () => {
  const processesSection = useScrollAnimation();

  return (
    <section
      ref={processesSection.ref}
      className={`w-full bg-white py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-12 scroll-animate ${
        processesSection.isVisible ? 'visible' : ''
      }`}
    >
      <div className="max-w-[1728px] mx-auto flex flex-col gap-8 md:gap-10 lg:gap-12">
        <div className="text-center flex flex-col gap-4">
          <h2 className="font-lato font-bold text-4xl md:text-5xl lg:text-[65px] text-black m-0">
            How We Work
          </h2>
          <p className="font-lato font-normal text-base sm:text-lg md:text-xl lg:text-[24px] leading-[1.46] text-[rgba(0,0,0,0.75)] max-w-[900px] mx-auto m-0">
            Our structured approach combines agile methodologies with proven project management practices to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="rounded-[11px] p-6 md:p-7 flex flex-col gap-4 h-full shadow-[0_10px_25px_rgba(0,0,0,0.05)]"
              style={{ backgroundColor: step.cardBg }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-[61px] h-[61px] rounded-full flex items-center justify-center text-white font-lato font-bold text-2xl"
                  style={{ backgroundColor: step.badgeBg, color: step.badgeText || '#fff' }}
                >
                  {step.number}
                </div>
                <h3 className="font-lato font-bold text-xl md:text-2xl text-black m-0">{step.title}</h3>
              </div>
              <p className="font-lato font-normal text-base md:text-lg text-black leading-[1.78] m-0">
                {step.description}
              </p>
              <p className="font-lato font-bold text-sm md:text-base text-black m-0">{step.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Processes;
