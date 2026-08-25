'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useReveal, useCounter } from '@/hooks/useReveal';
import styles from './achievements.module.css';

const impactBlocks = [
  { icon: '🌸', title: 'महिला सशक्तिकरण', metric: '200+', metricLabel: 'स्वयं सहायता समूह', desc: 'जिले में महिला स्वयं सहायता समूहों का गठन, जिससे हजारों महिलाएँ आर्थिक रूप से स्वावलंबी बनीं।' },
  { icon: '📚', title: 'बालिका शिक्षा', metric: '3000+', metricLabel: 'छात्राएँ लाभान्वित', desc: 'बेटी बचाओ बेटी पढ़ाओ अभियान के तहत छात्रवृत्ति और निःशुल्क शिक्षा सामग्री वितरण।' },
  { icon: '🌾', title: 'ग्रामीण विकास', metric: '60+', metricLabel: 'गाँव विकसित', desc: 'पंचायत स्तर पर सड़क, जल आपूर्ति और स्वच्छता परियोजनाओं का सफल क्रियान्वयन।' },
  { icon: '🏥', title: 'स्वास्थ्य अभियान', metric: '40+', metricLabel: 'स्वास्थ्य शिविर', desc: 'महिला एवं बाल पोषण शिविर, प्रसवपूर्व देखभाल और टीकाकरण अभियानों का संचालन।' },
  { icon: '⚖️', title: 'सामाजिक न्याय', metric: '1500+', metricLabel: 'मामले', desc: 'वंचित वर्गों को सरकारी योजनाओं से जोड़ना और उनके अधिकारों की सुरक्षा सुनिश्चित करना।' },
  { icon: '💧', title: 'स्वच्छ जल', metric: '30+', metricLabel: 'गाँव', desc: 'जल जीवन मिशन के तहत ग्रामीण क्षेत्रों में शुद्ध पेयजल की पाइपलाइन का विस्तार।' },
];

const districtStats = [
  { count: 200, suffix: '+', label: 'स्वयं सहायता समूह' },
  { count: 3000, suffix: '+', label: 'महिलाएँ सशक्त' },
  { count: 60, suffix: '+', label: 'गाँव लाभान्वित' },
  { count: 100, suffix: '%', label: 'आवास लक्ष्य' },
];

const galleryImages = [
  { src: '/Kalpana.jpeg', alt: 'कल्पना सोनकर – जनसभा' },
  { src: '/Kalpana1.jpeg', alt: 'कल्पना सोनकर – महिला कार्यक्रम' },
  { src: '/Kalpana2.jpeg', alt: 'कल्पना सोनकर – सामाजिक सेवा' },
  { src: '/Kalpana3.jpeg', alt: 'कल्पना सोनकर – BJP कार्यक्रम' },
  { src: '/DSC_0783.JPG.webp', alt: 'जनसंपर्क अभियान' },
  { src: '/DSC_0784.JPG.webp', alt: 'ग्रामीण विकास चौपाल' },
  { src: '/DSC_1042.JPG.webp', alt: 'महिला सशक्तिकरण गोष्ठी' },
  { src: '/DSC_1703.JPG.webp', alt: 'विकास कार्यों का निरीक्षण' },
  { src: '/DSC_1712.JPG.webp', alt: 'पार्टी कार्यकर्ताओं संग बैठक' },
  { src: '/DSC_1819.JPG.webp', alt: 'जनता दरबार व जनसुनवाई' },
  { src: '/DSC_2140 - Copy - Copy.JPG.webp', alt: 'स्वास्थ्य शिविर उद्घाटन' },
  { src: '/DSC_2148 - Copy - Copy.JPG.webp', alt: 'विद्यालय पुरस्कार वितरण' },
  { src: '/DSC_2345 - Copy - Copy.JPG.webp', alt: 'स्थानीय खेलकूद प्रतियोगिता' },
  { src: '/DSC_2375.JPG.webp', alt: 'स्वच्छता अभियान' },
  { src: '/DSC_2382.JPG.webp', alt: 'अधिकारी गण के साथ समीक्षा' },
  { src: '/DSC_2476.JPG.webp', alt: 'पार्टी स्थापना दिवस' },
  { src: '/DSC_2640 - Copy.JPG.webp', alt: 'सामूहिक विवाह समारोह' },
  { src: '/DSC_2830.JPG.webp', alt: 'आवास योजना प्रमाण पत्र वितरण' },
  { src: '/DSC_2835.JPG.webp', alt: 'महिला सुरक्षा सेमिनार' },
  { src: '/DSC_2854.JPG.webp', alt: 'वृक्षारोपण कार्यक्रम' },
  { src: '/DSC_2855.JPG.webp', alt: 'रक्तदान शिविर' },
  { src: '/DSC_3274.JPG.webp', alt: 'जनसभा संबोधन' },
  { src: '/DSC_3278.JPG.webp', alt: 'नारी शक्ति वंदन कार्यक्रम' },
  { src: '/DSC_3378.JPG.webp', alt: 'शहीद सम्मान समारोह' },
  { src: '/DSC_3680.JPG.webp', alt: 'दिवाली मिलन समारोह' },
];

export default function AchievementsClient() {
  useReveal();
  useCounter();

  return (
    <>
      {/* PAGE HERO */}
      {/* <section
        className="page-hero"
        aria-label="उपलब्धियाँ"
        style={{ position: 'relative', padding: 0 }}
      >
        <Image
          src="/Kalpana.jpeg"
          alt="कल्पना सोनकर"
          width={1920}
          height={600}
          style={{ width: '0%', marginTop: "2rem", height: '300px', display: 'block' }}
          priority
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.3)', zIndex: 1 }} />
        <div className="container" style={{ position: 'absolute', top: '60%', left: '20%', transform: 'translate(-50%, -50%)', zIndex: 2, width: '100%', textAlign: 'center' }}>
          <h1 className="h1 hindi reveal" style={{ color: '#3E2723' }}>उपलब्धियाँ</h1>
          <nav className="breadcrumb" aria-label="ब्रेडक्रम्ब" style={{ justifyContent: 'center', marginTop: '1rem' }}>
            <Link href="/" style={{ color: '#4e342e', fontWeight: 500 }}>होम</Link>
            <span style={{ color: '#4e342e' }}>›</span>
            <span style={{ color: '#4e342e', fontWeight: 500 }}>उपलब्धियाँ</span>
          </nav>
        </div>
      </section> */}

      {/* IMPACT BLOCKS */}
      <section className={`section ${styles.impactSection}`} aria-label="प्रमुख उपलब्धियाँ">
        <div className="container">
          <header className="section-header reveal">
            <span className="label">प्रमुख उपलब्धियाँ</span>
            <h2 className="h2 hindi">विकास के क्षेत्र</h2>
            <div className="divider"><span className="divider-dot" /></div>
          </header>

          <div className={styles.impactGrid}>
            {impactBlocks.map((block, i) => (
              <article key={i} className={`${styles.impactCard} reveal reveal-delay-${(i % 3) + 1}`}>
                <div className={styles.impactHeader}>
                  <span className={styles.impactIcon}>{block.icon}</span>
                  <div className={styles.impactMetric}>
                    <span className={styles.metricNum}>{block.metric}</span>
                    <span className={styles.metricLabel}>{block.metricLabel}</span>
                  </div>
                </div>
                <h3 className={`h3 hindi ${styles.impactTitle}`}>{block.title}</h3>
                <p className="body-sm hindi" style={{ lineHeight: 1.75, color: '#4b5563' }}>{block.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DISTRICT METRICS */}
      <section className={styles.metricsSection} aria-label="जिला प्रभाव">
        <div className="container">
          <header className="section-header reveal">
            <span className="label" style={{ color: '#f8bbd0' }}>जिले का प्रभाव</span>
            <h2 className="h2 hindi" style={{ color: '#fff' }}>कौशाम्बी में बदलाव</h2>
          </header>

          <div className={styles.metricsGrid}>
            {districtStats.map((s, i) => (
              <div key={i} className={`${styles.metricCard} reveal reveal-delay-${i + 1}`}>
                <div className={styles.metricBig}>
                  <span data-count={s.count}>0</span>
                  <span>{s.suffix}</span>
                </div>
                <p className="hindi" style={{ color: 'rgba(255,255,255,0.75)', marginTop: '0.5rem' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className={`section ${styles.gallerySection}`} aria-label="फोटो गैलरी">
        <div className="container">
          <header className="section-header reveal">
            <span className="label">स्मृतियाँ</span>
            <h2 className="h2 hindi">फोटो गैलरी</h2>
            <div className="divider"><span className="divider-dot" aria-hidden="true" /></div>
          </header>
          <div className={styles.galleryGrid}>
            {galleryImages.map((img, i) => {
              let itemClass = styles.galleryItem;
              if (i === 0 || i === 8 || i === 16) itemClass = `${styles.galleryItem} ${styles.galleryItemLarge}`;
              else if (i === 3 || i === 11 || i === 19) itemClass = `${styles.galleryItem} ${styles.galleryItemWide}`;
              else if (i === 5 || i === 14 || i === 22) itemClass = `${styles.galleryItem} ${styles.galleryItemTall}`;

              return (
                <div key={i} className={`${itemClass} reveal reveal-delay-${(i % 3) + 1}`}>
                  <Image src={img.src} alt={img.alt} fill className={styles.galleryImg} />
                  <div className={styles.galleryBadge}>{img.alt}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.achieveCta} aria-label="जनसुनवाई">
        <div className="container text-center">
          <div className="reveal">
            <h2 className="h2 hindi" style={{ color: '#fff' }}>आपकी समस्या हमारी प्राथमिकता</h2>
            <p className="hindi" style={{ color: 'rgba(255,255,255,0.7)', marginTop: '0.75rem', fontSize: '1.05rem' }}>
              जनसुनवाई में भाग लें और अपनी बात सीधे हम तक पहुँचाएँ।
            </p>
            <Link href="/jan-sunwai" className="btn btn-primary" style={{ marginTop: '1.75rem', display: 'inline-flex' }}>
              जनसुनवाई फ़ॉर्म भरें →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
