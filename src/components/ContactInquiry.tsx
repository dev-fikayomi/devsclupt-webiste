'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import emailIcon from '../../assets/email.svg';
import phoneIcon from '../../assets/call-us.svg';
import locationIcon from '../../assets/visit-us.svg';
import scheduleIcon from '../../assets/uil_schedule.svg';

const detailItems = [
  {
    label: 'Address',
    description: 'Last Floor C & M Plaza, Km 18 Lekki – Epe Express Way, Igbo-rUon, Lekki, Lagos Eti osa, Lekki, Lagos.',
    icon: locationIcon,
  },
  {
    label: 'Phone Number',
    description: '09159855709',
    icon: phoneIcon,
  },
  {
    label: 'Email',
    description: 'info@sovereigntechltd.com',
    icon: emailIcon,
  },
  {
    label: 'Working Hour',
    description: 'Opening Hours: Monday – Friday 10:00 am to 5pm',
    icon: scheduleIcon,
  },
];

const ContactInquiry = () => {
  const inquirySection = useScrollAnimation();

  return (
    <section
      ref={inquirySection.ref}
      className={`w-full bg-white scroll-animate ${inquirySection.isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="font-lato text-xl text-[#2b2bdc] m-0">Get In Touch</p>
          <p className="font-lato text-lg sm:text-xl leading-relaxed text-[rgba(0,0,0,0.8)] m-0 max-w-lg">
            Send us a message if you don&apos;t want to book a meeting at this time, and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
        <div className="space-y-6">
          {detailItems.map((item) => (
            <div key={item.label} className="flex gap-4">
              <div className="w-[48px] h-[48px] rounded-full bg-[#f2f4ff] flex items-center justify-center flex-shrink-0">
                <Image src={item.icon} alt={`${item.label} icon`} width={24} height={24} />
              </div>
              <div className="space-y-1">
                <p className="font-lato font-semibold text-lg text-black m-0">{item.label}</p>
                <p className="font-lato text-[15px] text-[rgba(0,0,0,0.7)] leading-relaxed m-0">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

        <div className="bg-white rounded-[32px] shadow-[0px_20px_60px_rgba(8,15,52,0.08)] px-6 sm:px-10 py-8 sm:py-12 flex flex-col gap-6">
          <div className="space-y-2">
            <p className="font-lato text-2xl font-semibold text-[#2b2bdc] m-0">Send a Message</p>
          </div>
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-[12px] border border-[rgba(0,0,0,0.08)] bg-transparent px-4 py-3 font-lato text-base outline-none focus:border-[#2b2bdc] focus:ring-2 focus:ring-[#2b2bdc]/20 transition"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-[12px] border border-[rgba(0,0,0,0.08)] bg-transparent px-4 py-3 font-lato text-base outline-none focus:border-[#2b2bdc] focus:ring-2 focus:ring-[#2b2bdc]/20 transition"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full rounded-[12px] border border-[rgba(0,0,0,0.08)] bg-transparent px-4 py-3 font-lato text-base outline-none focus:border-[#2b2bdc] focus:ring-2 focus:ring-[#2b2bdc]/20 transition resize-none"
            />
            <p className="text-xs text-[rgba(0,0,0,0.6)] font-lato m-0">
              By submitting, you agree to the processing of your personal data by Sovereign Tech as described in the privacy statement.
            </p>
            <button
              type="button"
              className="w-full bg-[#2b2bdc] text-white font-lato font-semibold text-base py-3 rounded-[12px] shadow-[0px_12px_30px_rgba(43,43,220,0.35)] transition hover:bg-[#2222b8]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactInquiry;


