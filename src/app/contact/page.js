import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactClient from './ContactClient';

export const metadata = {
  title: 'संपर्क | कल्पना सोनकर',
  description: 'कल्पना सोनकर से संपर्क करें – फोन, ईमेल, कार्यालय पता और संदेश फ़ॉर्म।',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ContactClient />
      </main>
      <Footer />
    </>
  );
}
