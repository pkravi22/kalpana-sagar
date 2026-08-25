'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useReveal, useCounter } from '@/hooks/useReveal';
import styles from './home.module.css';

const stats = [
  { count: 5, suffix: '+', label: 'वर्षों का नेतृत्व', icon: '👑' },
  { count: 80, suffix: '+', label: 'विकास परियोजनाएँ', icon: '🏗️' },
  { count: 30000, suffix: '+', label: 'लाभार्थी परिवार', icon: '👨‍👩‍👧‍👦' },
  { count: 150, suffix: '+', label: 'महिला सशक्तिकरण कार्यक्रम', icon: '💪' },
];

const biodata = [
  {
    image: '/Kalpana.jpeg',
    title: 'व्यक्तिगत परिचय',
    desc: 'कल्पना सोनकर जी एक साधारण परिवार से आते हुए आज कौशाम्बी की एक मजबूत महिला नेता हैं। समाज सेवा के प्रति उनका समर्पण प्रेरणादायक है...',
  },
  {
    image: '/Kalpana1.jpeg',
    title: 'राजनीतिक सफर',
    desc: 'BJP महिला मोर्चा में सक्रियता से शुरुआत करते हुए, उन्होंने अपनी कार्यक्षमता के बल पर जिला पंचायत अध्यक्ष के पद तक का सफर तय किया...',
  },
  {
    image: '/Kalpana2.jpeg',
    title: 'विजन और मिशन',
    desc: 'उनका मुख्य लक्ष्य कौशाम्बी में महिला सशक्तिकरण, बालिका शिक्षा और ग्रामीण क्षेत्रों का समग्र विकास करना है।...',
  }
];

// SVG Icons
const FacebookIcon = ({ className }) => <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>;
const InstagramIcon = ({ className }) => <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>;
const WhatsAppIcon = ({ className }) => <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.335.101 11.895c-.002 2.086.547 4.116 1.593 5.92L0 24l6.398-1.666a11.96 11.96 0 005.642 1.411h.005c6.58 0 11.939-5.337 11.942-11.9.003-3.172-1.233-6.155-3.467-8.396zM12.046 21.724c-1.758 0-3.486-.468-4.997-1.352l-.358-.21-3.712.964.99-3.593-.232-.365a9.927 9.927 0 01-1.505-5.263C2.234 6.452 6.643 2.062 12.052 2.062c2.65 0 5.14 1.026 7.009 2.885 1.868 1.862 2.898 4.341 2.896 6.982-.003 5.45-4.412 9.795-9.911 9.795zM17.483 14.34c-.297-.148-1.761-.864-2.035-.963-.274-.099-.474-.148-.673.148-.198.297-.768.963-.941 1.16-.173.197-.346.223-.643.074-.297-.148-1.258-.46-2.396-1.474-.886-.79-1.485-1.767-1.658-2.064-.173-.297-.018-.458.13-.606.134-.133.297-.345.446-.518.148-.173.198-.297.297-.494.099-.198.05-.371-.025-.519-.074-.148-.673-1.608-.921-2.201-.242-.577-.487-.5-.673-.509-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.371s-1.04 1.002-1.04 2.443c0 1.442 1.065 2.836 1.213 3.033.148.197 2.091 3.161 5.064 4.425 2.115.9 2.87.818 3.935.688 1.153-.14 3.518-1.42 4.013-2.796.495-1.376.495-2.553.346-2.797-.148-.247-.544-.396-.841-.544z" /></svg>;
const EmailIcon = ({ className }) => <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>;

const achievements = [
  {
    icon: '🌸',
    title: 'महिला सशक्तिकरण',
    desc: 'स्वयं सहायता समूहों के गठन और महिलाओं को आर्थिक रूप से स्वावलंबी बनाने की दिशा में उल्लेखनीय कार्य।',
  },
  {
    icon: '📚',
    title: 'शिक्षा एवं बालिका विकास',
    desc: 'बालिकाओं की शिक्षा सुनिश्चित करने के लिए छात्रवृत्ति और मार्गदर्शन कार्यक्रमों का संचालन।',
  },
  {
    icon: '🌾',
    title: 'ग्रामीण विकास',
    desc: 'पंचायत स्तर पर सड़क, जल आपूर्ति और स्वच्छता की योजनाओं को जमीन पर उतारने में अग्रणी भूमिका।',
  },
  {
    icon: '🏥',
    title: 'स्वास्थ्य एवं पोषण',
    desc: 'महिला एवं बाल पोषण अभियान तथा निःशुल्क स्वास्थ्य जाँच शिविरों का नियमित आयोजन।',
  },
  {
    icon: '⚖️',
    title: 'सामाजिक न्याय',
    desc: 'वंचित वर्गों के अधिकारों की रक्षा और सरकारी योजनाओं का लाभ समाज के अंतिम व्यक्ति तक पहुँचाना।',
  },
  {
    icon: '💧',
    title: 'स्वच्छ जल अभियान',
    desc: 'जिले के ग्रामीण क्षेत्रों में पेयजल की उपलब्धता सुनिश्चित करने के लिए विशेष प्रयास।',
  },
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

export default function HomePage() {
  useReveal();
  useCounter();

  return (
    <>
      {/* HERO */}
      <section className={styles.hero} aria-label="परिचय" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroLogoMark} aria-hidden="true" />

        {/* Background Large Logo with 40% Opacity */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.4, zIndex: 0, pointerEvents: 'none' }}>
          <Image src="/logo.webp" alt="BJP Background" width={800} height={800} style={{ objectFit: 'contain', filter: 'grayscale(0%)' }} priority />
        </div>

        <div className={styles.heroContainer} style={{ position: 'relative', zIndex: 1 }}>
          <div className={styles.heroPhoto}>
            <div className={styles.photoFrame}>
              <div className={styles.photoGlow} aria-hidden="true" />
              <Image
                src="/Kalpana.jpeg"
                alt="कल्पना सोनकर – जिला पंचायत अध्यक्ष कौशाम्बी"
                width={460}
                height={500}
                className={styles.photo}
                priority
              />
              <div className={styles.photoOverlay} aria-hidden="true" />
              <div className={styles.photoBadge}>
                <span>🇮🇳</span>
                <span className="hindi">नारी शक्ति</span>
              </div>
            </div>
          </div>

          <div className={styles.heroContent}>

            <div className={`${styles.heroBadges} reveal`}>
              <span className="badge badge-bjp">
                <Image src="/logo.webp" alt="BJP Logo" width={36} height={36} style={{ objectFit: 'contain', borderRadius: "50%" }} priority />
                BJP • कौशाम्बी</span>
              <span className="badge badge-rose">जिला पंचायत अध्यक्ष</span>
            </div>

            <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '1rem', marginBottom: '0.5rem' }}>
              <Image src="/logo.webp" alt="BJP Logo" width={40} height={40} style={{ objectFit: 'contain', borderRadius: '50%', background: '#fff', padding: '2px' }} />
              <span className="hindi" style={{ fontWeight: 'bold', fontSize: '1.4rem', color: '#f97316', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                || भारतीय जनता पार्टी जिंदाबाद ||
              </span>
            </div>

            <h1 className={`${styles.heroName} reveal reveal-delay-1 hindi`}>
              कल्पना सोनकर
            </h1>

            <div className={`${styles.heroRole} reveal reveal-delay-2`}>
              <div className={styles.roleLine} />
              <p className="hindi">अध्यक्ष, जिला पंचायत कौशाम्बी (उत्तर प्रदेश)</p>
            </div>

            <p className={`${styles.heroTagline} reveal reveal-delay-3 hindi`}>
              नारी शक्ति – जन कल्याण का संकल्प।<br />
              महिला नेतृत्व से कौशाम्बी का नव-निर्माण।
            </p>

            
              <div className={styles.heroSocials }>
              <a href="https://facebook.com/kalpanajitendrasonkar" target="_blank" rel="noreferrer" title="Facebook" className={styles.socialLink} style={{ color: '#1877F2' }}><FacebookIcon className={styles.svgIconLg} /></a>
              <a href="https://instagram.com/kalpanajitendrasonkar" target="_blank" rel="noreferrer" title="Instagram" className={styles.socialLink} style={{ color: '#E4405F' }}><InstagramIcon className={styles.svgIconLg} /></a>
              <a href="https://wa.me/918299223340" target="_blank" rel="noreferrer" title="WhatsApp" className={styles.socialLink} style={{ color: '#25D366' }}><WhatsAppIcon className={styles.svgIconLg} /></a>
            </div>

            <div className={`${styles.heroCtas} reveal reveal-delay-4`}>
              <Link href="/about" className="btn btn-primary">परिचय पढ़ें →</Link>
              <Link href="/jan-sunwai" className="btn btn-secondary">जनसुनवाई में भाग लें</Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className={styles.statsSection} aria-label="मुख्य आँकड़े">
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((s, i) => (
              <div key={i} className={`${styles.statCard} reveal reveal-delay-${i + 1}`}>
                <span className={styles.statIcon}>{s.icon}</span>
                <div className={styles.statNum}>
                  <span data-count={s.count}>0</span>
                  <span>{s.suffix}</span>
                </div>
                <p className={`${styles.statLabel} hindi`}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className={`section ${styles.aboutSection} floral-bg`} aria-label="परिचय">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={`${styles.aboutText} reveal`}>
              <span className="label">महिला नेतृत्व — जन कल्याण</span>
              <h2 className="h2 hindi mt-2">कौशाम्बी की बेटी,<br />जिले की अध्यक्ष</h2>
              <div className={styles.divider} aria-hidden="true" />
              <p className={`body-lg hindi ${styles.aboutPara}`}>
                कल्पना सोनकर जी भारतीय जनता पार्टी की एक समर्पित और ऊर्जावान नेत्री हैं।
                जिला पंचायत अध्यक्ष के रूप में उन्होंने महिलाओं और वंचित वर्गों के
                उत्थान के लिए अनेक महत्वपूर्ण कार्य किए हैं।
              </p>
              <p className={`body-lg hindi ${styles.aboutPara}`}>
                कल्पना जी का मानना है कि समाज का सर्वांगीण विकास तभी संभव है जब
                महिलाएँ नीति-निर्माण में भागीदार हों। उन्होंने अपनी सेवा में
                नारी शक्ति को केंद्र में रखकर जिले का कायाकल्प किया है।
              </p>
              <div className={styles.aboutActions}>
                <Link href="/about" className="btn btn-primary">विस्तृत परिचय →</Link>
                <Link href="/achievements" className="btn btn-outline">उपलब्धियाँ देखें</Link>
              </div>
            </div>

            <div className={`${styles.aboutImages} reveal reveal-delay-2`}>
              <div className={styles.imgStack}>
                <Image src="/Kalpana1.jpeg" alt="कल्पना सोनकर – सामाजिक कार्य" width={300} height={260} className={styles.stackImg1} />
                <Image src="/Kalpana2.jpeg" alt="कल्पना सोनकर – जनसेवा" width={260} height={240} className={styles.stackImg2} />
                <Image src="/Kalpana3.jpeg" alt="कल्पना सोनकर – BJP कार्यक्रम" width={220} height={200} className={styles.stackImg3} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIODATA CARDS SECTION */}
      <section className={`section ${styles.biodataSection}`} aria-label="बायोडाटा">
        <div className="container">
          <header className="section-header reveal">
            <span className="label">जीवन दर्शन</span>
            <h2 className="h2 hindi">कल्पना सोनकर जी का सफर</h2>
            <div className="divider"><span className="divider-dot" aria-hidden="true" /></div>
          </header>
          <div className={styles.biodataGrid}>
            {biodata.map((b, i) => (
              <div key={i} className={`${styles.biodataCard} reveal reveal-delay-${i + 1}`}>
                <div className={styles.biodataImgWrap}>
                  <Image src={b.image} alt={b.title} fill className={styles.biodataImg} />
                </div>
                <div className={styles.biodataContent}>
                  <h3 className={`h3 hindi ${styles.biodataTitle}`}>{b.title}</h3>
                  <p className={`body-sm hindi ${styles.biodataDesc}`}>{b.desc}</p>
                  <Link href="/about" className={styles.readMore}>और पढ़ें →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS GRID */}
      <section className={`section ${styles.achieveSection}`} aria-label="मुख्य उपलब्धियाँ">
        <div className="container">
          <header className="section-header reveal">
            <span className="label">प्रमुख कार्य</span>
            <h2 className="h2 hindi">उपलब्धियाँ एवं योगदान</h2>
            <div className="divider">
              <span className="divider-dot" aria-hidden="true" />
            </div>
          </header>
          <div className={`grid-3 ${styles.achieveGrid}`}>
            {achievements.map((a, i) => (
              <article key={i} className={`card ${styles.achieveCard} reveal reveal-delay-${(i % 3) + 1}`}>
                <span className={styles.achieveIcon}>{a.icon}</span>
                <h3 className={`h3 hindi ${styles.achieveTitle}`}>{a.title}</h3>
                <p className={`body-sm hindi ${styles.achieveDesc}`}>{a.desc}</p>
              </article>
            ))}
          </div>
          <div className="text-center mt-4 reveal">
            <Link href="/achievements" className="btn btn-secondary">सभी उपलब्धियाँ देखें →</Link>
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

      {/* JAN SUNWAI CTA */}
      <section className={styles.ctaSection} aria-label="जनसुनवाई">
        <div className="container">
          <div className={`${styles.ctaBox} reveal`}>
            <div className={styles.ctaContent}>
              <span className="label" style={{ color: '#f8bbd0' }}>महिला नेतृत्व</span>
              <h2 className="hindi" style={{ color: '#fff', fontSize: 'clamp(1.8rem, 3vw, 3rem)', fontWeight: 900, marginTop: '0.5rem' }}>
                अपनी समस्या हम तक पहुँचाएँ
              </h2>
              <p className="hindi" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', marginTop: '0.75rem', maxWidth: 500 }}>
                जनसुनवाई में भाग लें और अपनी समस्याओं का समाधान पाएँ।
                हम आपकी सेवा में सदैव तत्पर हैं।
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
                <Link href="/jan-sunwai" className="btn btn-primary">जनसुनवाई फ़ॉर्म भरें</Link>
                <Link href="/about" className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff' }}>
                  अधिक जानें
                </Link>
              </div>
            </div>
            <div className={styles.ctaDecor} aria-hidden="true">
              <div className={styles.ctaCircle1} />
              <div className={styles.ctaCircle2} />
              <Image
                src="/Kalpana.jpeg"
                alt="Kalpana Sonkar"
                width={220}
                height={220}
                className={styles.ctaEmoji}
                style={{ borderRadius: '50%', objectFit: 'cover', margin: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA AND CROSS LINK */}
      <section className={`section ${styles.socialSection}`} aria-label="संपर्क">
        <div className="container">
          <div className={styles.socialGrid}>
            <div className={`${styles.socialConnect} reveal`}>
              <h2 className="h2 hindi">हमसे जुड़ें</h2>
              <p className="hindi mb-3">सोशल मीडिया के माध्यम से कल्पना सोनकर जी से सीधे जुड़ें और उनके कार्यों की नवीनतम जानकारी प्राप्त करें।</p>

              <div className={styles.socialLinksGrid}>
                <a href="https://facebook.com/kalpanajitendrasonkar" target="_blank" rel="noreferrer" className={styles.socialLinkCard}>
                  <div className={styles.socialCardIcon} style={{ color: '#1877F2' }}><FacebookIcon className={styles.svgIconLg} /></div>
                  <div className={styles.socialTextCol}>
                    <span className={styles.socialPlatform}>Facebook</span>
                    <span className={styles.socialHandle}>/kalpanajitendrasonkar</span>
                  </div>
                </a>
                <a href="https://instagram.com/kalpanajitendrasonkar" target="_blank" rel="noreferrer" className={styles.socialLinkCard}>
                  <div className={styles.socialCardIcon} style={{ color: '#E4405F' }}><InstagramIcon className={styles.svgIconLg} /></div>
                  <div className={styles.socialTextCol}>
                    <span className={styles.socialPlatform}>Instagram</span>
                    <span className={styles.socialHandle}>kalpanajitendrasonkar</span>
                  </div>
                </a>
                <a href="https://wa.me/918299223340" target="_blank" rel="noreferrer" className={styles.socialLinkCard}>
                  <div className={styles.socialCardIcon} style={{ color: '#25D366' }}><WhatsAppIcon className={styles.svgIconLg} /></div>
                  <div className={styles.socialTextCol}>
                    <span className={styles.socialPlatform}>WhatsApp</span>
                    <span className={styles.socialHandle}>8299223340</span>
                  </div>
                </a>
                <a href="mailto:kalpanajitendrasonkarbjp@gmail.com" className={styles.socialLinkCard}>
                  <div className={styles.socialCardIcon} style={{ color: '#EA4335' }}><EmailIcon className={styles.svgIconLg} /></div>
                  <div className={styles.socialTextCol}>
                    <span className={styles.socialPlatform}>Email</span>
                    <span className={styles.socialHandle}>kalpanajitendrasonkarbjp...</span>
                  </div>
                </a>
              </div>
            </div>

            <div className={`${styles.crossLinkCard} reveal reveal-delay-2`}>
              <div className={styles.crossLinkContent}>
                <span className="badge badge-bjp">BJP • कौशाम्बी</span>
                <h3 className="h3 hindi mt-2 mb-1">जितेन्द्र सोनकर</h3>
                <p className="hindi text-sm mb-3">अध्यक्ष, भाजपा जिला कौशाम्बी</p>
                <p className="hindi mb-3">कौशाम्बी के विकास और जनसेवा को समर्पित जितेन्द्र सोनकर जी के नेतृत्व और राजनीतिक सफर के बारे में जानने के लिए वेबसाइट पर जाएँ।</p>
                <a href="https://jitendrasonkarbjp.com/" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ borderColor: '#f38b2a', color: '#f38b2a' }}>
                  वेबसाइट पर जाएँ →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
