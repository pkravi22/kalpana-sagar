import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JanSunwaiClient from './JanSunwaiClient';

export const metadata = {
  title: 'जनसुनवाई | कल्पना सोनकर',
  description: 'कल्पना सोनकर की जनसुनवाई – अपनी समस्या, शिकायत या सुझाव सीधे हम तक पहुँचाएँ। जिला पंचायत अध्यक्ष कौशाम्बी।',
  other: {
    'script:ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'जनसुनवाई – कल्पना सोनकर',
      description: 'जनसुनवाई फ़ॉर्म और संपर्क जानकारी',
      url: 'https://kalpanasonkar.in/jan-sunwai',
    }),
  },
};

export default function JanSunwaiPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <JanSunwaiClient />
      </main>
      <Footer />
    </>
  );
}
