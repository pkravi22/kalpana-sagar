import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GalleryClient from './GalleryClient';

export const metadata = {
  title: 'फोटो गैलरी | कल्पना सोनकर',
  description: 'कल्पना सोनकर की फोटो गैलरी – संगठन, महिला सशक्तिकरण, विकास और जनसेवा के कार्यक्रम।',
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <GalleryClient />
      </main>
      <Footer />
    </>
  );
}
