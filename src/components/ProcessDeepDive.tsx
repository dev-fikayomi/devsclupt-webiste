'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const deepDivePhases = [
  {
    number: '1',
    title: 'Discovery',
    intro:
      'This foundational phase involves deep-dive sessions to understand your business goals, technical requirements, and user needs. We conduct stakeholder interviews, competitive analysis, and technical feasibility studies.',
    bullets: [
      {
        label: 'Requirements Gathering',
        detail: 'Detailed documentation of functional and non-functional requirements.',
      },
      {
        label: 'Stakeholder Interviews',
        detail: 'Understanding perspectives from all key project stakeholders.',
      },
      {
        label: 'Technical Assessment',
        detail: 'Evaluating existing systems and integration considerations.',
      },
    ],
    badgeBg: '#09a433',
    badgeText: '#ffffff',
    image: '/assets/discovery.png',
    imageAlt: 'Team collaborating during discovery workshops',
    layout: 'image-text',
  },
  {
    number: '2',
    title: 'Planning and Design',
    intro:
      'We create detailed project plans, system architecture, and user experience designs. This phase ensures all stakeholders are aligned before development begins.',
    bullets: [
      {
        label: 'System Architecture',
        detail: 'Scalable and maintainable technical architecture design.',
      },
      {
        label: 'UI/UX Design',
        detail: 'User-centered design with wireframes and interactive prototypes.',
      },
      {
        label: 'Project Roadmap',
        detail: 'Detailed timeline with milestones and deliverables.',
      },
    ],
    badgeBg: '#ff9a0c',
    badgeText: '#ffffff',
    image: '/assets/planning.png',
    imageAlt: 'Planning and design workspace with wireframes',
    layout: 'text-image',
  },
  {
    number: '3',
    title: 'Development',
    intro:
      'Our agile development approach ensures regular progress updates and continuous client feedback integration. We follow best practices for code quality and maintainability.',
    bullets: [
      {
        label: 'Agile Sprints',
        detail: 'Two-week development cycles with regular demonstrations.',
      },
      {
        label: 'Code Reviews',
        detail: 'Peer review process ensuring code quality and standards.',
      },
      {
        label: 'Continuous Integration',
        detail: 'Automated testing and integration throughout development.',
      },
    ],
    badgeBg: '#fceA2b',
    badgeText: '#131313',
    image: '/assets/development.png',
    imageAlt: 'Developer reviewing application code on screen',
    layout: 'image-text',
  },
];

const ProcessDeepDive = () => {
  const section = useScrollAnimation();

  return (
    <section
      ref={section.ref}
      className={`w-full bg-[rgba(9,164,51,0.05)] py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-12 scroll-animate ${
        section.isVisible ? 'visible' : ''
      }`}
    >
      <div className="max-w-[1728px] mx-auto flex flex-col gap-10 md:gap-12 lg:gap-14">
        <div className="text-center flex flex-col gap-3">
          <h2 className="font-lato font-bold text-4xl md:text-5xl lg:text-[65px] text-black m-0">
            Deep Dive into Each Phase
          </h2>
          <p className="font-lato font-normal text-base sm:text-lg md:text-xl text-[rgba(0,0,0,0.75)] m-0">
            Understanding what happens at each stage of our development process
          </p>
        </div>

        <div className="flex flex-col gap-10 md:gap-12">
          {deepDivePhases.map((phase, index) => (
            <div
              key={phase.number}
              className={`flex flex-col gap-6 lg:gap-10 ${
                phase.layout === 'image-text' ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center`}
            >
              <div className="flex-1 w-full flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div
                    className="w-[63px] h-[63px] rounded-full flex items-center justify-center font-lato font-bold text-2xl"
                    style={{ backgroundColor: phase.badgeBg, color: phase.badgeText }}
                  >
                    {phase.number}
                  </div>
                  <h3 className="font-lato font-bold text-2xl md:text-3xl text-black m-0">{phase.title}</h3>
                </div>
                <p className="font-lato text-base md:text-lg text-black leading-[1.75] m-0">{phase.intro}</p>
                <ul className="m-0 pl-5 flex flex-col gap-3 list-disc">
                  {phase.bullets.map((bullet) => (
                    <li key={bullet.label} className="font-lato text-base text-black/90 leading-[1.7]">
                      <span className="font-semibold text-black">{bullet.label}:</span> {bullet.detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-1 w-full">
                <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[360px] rounded-[18px] overflow-hidden">
                  <Image
                    src={phase.image}
                    alt={phase.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessDeepDive;
