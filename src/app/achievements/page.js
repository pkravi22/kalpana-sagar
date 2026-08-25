import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AchievementsClient from './AchievementsClient';

export const metadata = {
  title: 'उपलब्धियाँ | कल्पना सोनकर',
  description: 'कल्पना सोनकर की प्रमुख उपलब्धियाँ – महिला सशक्तिकरण, शिक्षा, ग्रामीण विकास और सामाजिक न्याय।',
};

export default function AchievementsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <AchievementsClient />
      </main>
      <Footer />
    </>
  );
}
