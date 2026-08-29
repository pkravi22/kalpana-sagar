import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VisionClient from './VisionClient';

export const metadata = {
  title: 'जीवन दर्शन | कल्पना सोनकर',
  description: 'कल्पना सोनकर का जीवन दर्शन, सेवा, विकास, नारी सशक्तिकरण और कौशाम्बी के भविष्य के लिए उनका दृष्टिकोण।',
};

export default function VisionPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <VisionClient />
      </main>
      <Footer />
    </>
  );
}
