import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from './HomeClient';

export const metadata = {
  title: 'कल्पना सोनकर | जिला पंचायत अध्यक्ष – कौशाम्बी',
  description: 'कल्पना सोनकर – जिला पंचायत अध्यक्ष कौशाम्बी। भारतीय जनता पार्टी। महिला नेतृत्व, जनसेवा और सामाजिक विकास।',
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HomePage />
      </main>
      <Footer />
    </>
  );
}
