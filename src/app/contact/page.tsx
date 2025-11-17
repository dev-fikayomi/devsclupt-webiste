import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/components/ContactHero';
import Contact from '@/components/Contact';

export default function ContactPage() {
  return (
    <>
      <Header hideGetStarted={true} />
      <main>
        <ContactHero />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

