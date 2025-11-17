'use client';

import Image from 'next/image';
import emailIcon from '../../assets/email.svg';
import callIcon from '../../assets/call-us.svg';
import visitIcon from '../../assets/visit-us.svg';
import scheduleIcon from '../../assets/uil_schedule.svg';

const contactOptions = [
  {
    title: 'Email Us',
    lines: ['hello@devsculptstudio.com', 'Response within 4 hours'],
    icon: emailIcon,
    tint: 'rgba(19, 15, 120, 0.12)',
  },
  {
    title: 'Call Us',
    lines: ['+1 (555) 123-4567', 'Mon-Fri 9AM-6PM PST'],
    icon: callIcon,
    tint: 'rgba(251, 220, 40, 0.2)',
  },
  {
    title: 'Visit Us',
    lines: ['123 Innovation Drive', 'Tech Valley, CA 94025', 'By appointment only'],
    icon: visitIcon,
    tint: 'rgba(15, 104, 120, 0.12)',
  },
  {
    title: 'Schedule a Call',
    lines: ['Book a consultation', 'Free 30-minute session'],
    icon: scheduleIcon,
    tint: 'rgba(255, 154, 12, 0.18)',
  },
];

const ContactChannels = () => (
  <section className="w-full bg-[#f5f5f8]">
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-24 flex flex-col items-center text-center gap-6">
      <div className="space-y-4">
        <h2 className="font-lato font-bold text-3xl sm:text-4xl lg:text-[48px] text-black m-0">Connect with Us</h2>
        <p className="font-lato text-base sm:text-lg lg:text-xl text-[rgba(0,0,0,0.75)] m-0">
          Multiple ways to reach our team and start your project journey
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
        {contactOptions.map((option) => (
          <div
            key={option.title}
            className="bg-white shadow-[0px_4px_14px_rgba(0,0,0,0.06)] px-6 py-8 flex flex-col items-center text-center gap-4 transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0px_12px_24px_rgba(0,0,0,0.08)]"
          >
            <div
              className="w-[64px] h-[64px] rounded-full flex items-center justify-center"
              style={{ backgroundColor: option.tint }}
            >
              <Image src={option.icon} alt={`${option.title} icon`} width={28} height={28} />
            </div>
            <div className="space-y-2">
              <h3 className="font-lato font-bold text-xl text-black m-0">{option.title}</h3>
              <div className="text-[rgba(0,0,0,0.75)] font-lato text-base leading-relaxed">
                {option.lines.map((line) => (
                  <p key={line} className="m-0">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ContactChannels;


