import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutClient from './AboutClient';

export const metadata = {
  title: 'परिचय | कल्पना सोनकर',
  description: 'कल्पना सोनकर का विस्तृत परिचय – राजनीतिक यात्रा, नेतृत्व और जिला पंचायत में योगदान। BJP उत्तर प्रदेश कौशाम्बी।',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <AboutClient />
      </main>
      <Footer />
    </>
  );
}
