import './globals.css';

export const metadata = {
  metadataBase: new URL('https://kalpanasonkar.in'),
  title: {
    template: '%s | कल्पना सोनकर – BJP कौशाम्बी',
    default: 'कल्पना सोनकर | जिला पंचायत अध्यक्ष – कौशाम्बी, उत्तर प्रदेश',
  },
  description: 'कल्पना सोनकर – जिला पंचायत अध्यक्ष कौशाम्बी (उत्तर प्रदेश)। भारतीय जनता पार्टी। महिला नेतृत्व, जनसेवा और सामाजिक विकास।',
  keywords: ['Kalpana Sonkar', 'कल्पना सोनकर', 'BJP Kaushambi', 'Zila Panchayat Adhyaksha', 'कौशाम्बी', 'भाजपा'],
  authors: [{ name: 'Kalpana Sonkar' }],
  openGraph: {
    type: 'website',
    locale: 'hi_IN',
    url: 'https://kalpanasonkar.in',
    siteName: 'कल्पना सोनकर',
    title: 'कल्पना सोनकर | जिला पंचायत अध्यक्ष – कौशाम्बी',
    description: 'जिला पंचायत अध्यक्ष कौशाम्बी – कल्पना सोनकर की आधिकारिक वेबसाइट। BJP उत्तर प्रदेश।',
    images: [{ url: '/Kalpana.jpeg', width: 1200, height: 630, alt: 'कल्पना सोनकर' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'कल्पना सोनकर | BJP – कौशाम्बी',
    description: 'महिला नेतृत्व और जनसेवा में समर्पित जिला पंचायत अध्यक्ष।',
    images: ['/Kalpana.jpeg'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://kalpanasonkar.in' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Kalpana Sonkar',
              alternateName: 'कल्पना सोनकर',
              jobTitle: 'Adhyaksha, Zila Panchayat Kaushambi',
              affiliation: {
                '@type': 'Organization',
                name: 'Bharatiya Janata Party',
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Kaushambi',
                addressRegion: 'Uttar Pradesh',
                addressCountry: 'IN',
              },
              url: 'https://kalpanasonkar.in',
              image: 'https://kalpanasonkar.in/Kalpana.jpeg',
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
