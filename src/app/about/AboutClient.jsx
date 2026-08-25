'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';
import styles from './about.module.css';

const timeline = [
  { year: '2015', title: 'BJP में सक्रियता', desc: 'भारतीय जनता पार्टी की महिला मोर्चा में सक्रिय भागीदारी की शुरुआत।' },
  { year: '2018', title: 'महिला मोर्चा जिला सचिव', desc: 'BJP महिला मोर्चा, जिला कौशाम्बी की महासचिव पद पर नियुक्ति।' },
  { year: '2020', title: 'महिला मोर्चा जिला अध्यक्ष', desc: 'भाजपा महिला मोर्चा, कौशाम्बी की जिला अध्यक्ष बनीं।' },
  { year: '2022', title: 'जिला पंचायत सदस्य', desc: 'जिला पंचायत सदस्य के रूप में निर्वाचित और सामाजिक कार्यों में वृद्धि।' },
  { year: '2023', title: 'जिला पंचायत अध्यक्ष', desc: 'जिला पंचायत अध्यक्ष, कौशाम्बी के ऐतिहासिक पद पर आसीन।' },
];

const roles = [
  { icon: '🌸', title: 'जिला पंचायत अध्यक्ष', org: 'कौशाम्बी जिला', desc: 'जिला पंचायत का नेतृत्व और विकास योजनाओं का क्रियान्वयन।' },
  { icon: '👑', title: 'महिला मोर्चा अध्यक्ष', org: 'BJP कौशाम्बी', desc: 'महिला सशक्तिकरण के लिए जमीनी स्तर पर काम।' },
  { icon: '📋', title: 'वित्त एवं विकास समिति', org: 'जिला पंचायत', desc: 'जिले की विकास परियोजनाओं में वित्तीय निगरानी।' },
  { icon: '🏥', title: 'स्वास्थ्य एवं शिक्षा समिति', org: 'जिला पंचायत', desc: 'महिला और बाल स्वास्थ्य पर विशेष ध्यान।' },
  { icon: '💧', title: 'जल एवं स्वच्छता समिति', org: 'जिला पंचायत', desc: 'ग्रामीण क्षेत्रों में स्वच्छ पेयजल की उपलब्धता।' },
  { icon: '🎓', title: 'शिक्षा प्रसार', org: 'बेटी बचाओ अभियान', desc: 'बालिका शिक्षा और बाल विवाह रोकने की दिशा में काम।' },
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

export default function AboutClient() {
  useReveal();

  return (
    <>
      {/* PAGE HERO */}
      
      {/* BIO SECTION */}
      <section className={`section ${styles.bioSection}`} aria-label="जीवन परिचय">
        <div className="container">
          <div className={styles.bioGrid}>
            <div className={`${styles.bioText} reveal`}>
              <span className="label">जीवन परिचय</span>
              <h2 className="h2 hindi mt-2">महिला नेतृत्व की<br />प्रेरणादायक कहानी</h2>
              <div className={styles.divider} />
              <p className="body-lg hindi" style={{ color: '#4b5563', marginBottom: '1rem' }}>
                कल्पना सोनकर जी का जन्म कौशाम्बी जिले में एक साधारण परिवार में हुआ। 
                उनका जीवन स्वयं एक संघर्ष से सफलता की प्रेरणादायक कहानी है। 
                बचपन से ही उनमें सामाजिक न्याय और महिला सशक्तिकरण की गहरी चाह थी।
              </p>
              <p className="body-lg hindi" style={{ color: '#4b5563', marginBottom: '1rem' }}>
                भारतीय जनता पार्टी की महिला मोर्चा से जुड़ने के बाद उन्होंने 
                कौशाम्बी की महिलाओं को संगठित किया और उनके अधिकारों के लिए 
                अथक परिश्रम किया। उनकी लोकप्रियता और कार्यक्षमता ने उन्हें 
                जिला पंचायत अध्यक्ष के पद तक पहुँचाया।
              </p>
              <p className="body-lg hindi" style={{ color: '#4b5563', marginBottom: '1rem' }}>
                अनुसूचित जाति वर्ग से आने के बावजूद उन्होंने समाज की सभी 
                महिलाओं के उत्थान के लिए काम किया। उनके नेतृत्व में जिले में 
                महिला स्वयं सहायता समूहों का विस्तार हुआ और हजारों महिलाएँ 
                आर्थिक रूप से स्वावलंबी बनीं।
              </p>
              <p className="body-lg hindi" style={{ color: '#4b5563' }}>
                प्रधानमंत्री नरेंद्र मोदी जी की "नारी शक्ति वंदन" की भावना को 
                जमीन पर उतारते हुए उन्होंने जिले की हर बेटी को बेहतर भविष्य 
                दिलाने का प्रण किया है।
              </p>

              <dl className={styles.profileList} aria-label="व्यक्तिगत परिचय">
                <div className={styles.profileRow}>
                  <dt className={styles.profileLabel}>नाम :</dt>
                  <dd className={styles.profileValue}>
                    <span>कल्पना सोनकर</span>
                    <small>अध्यक्ष जिला पंचायत कौशाम्बी</small>
                  </dd>
                </div>

                <div className={styles.profileRow}>
                  <dt className={styles.profileLabel}>पति का नाम :</dt>
                  <dd className={styles.profileValue}>
                    <span>श्री जितेन्द्र कुमार सोनकर</span>
                    <small>पुत्र ब्लॉक प्रमुख, सिराथू, कौशाम्बी</small>
                  </dd>
                </div>

                <div className={styles.profileRow}>
                  <dt className={styles.profileLabel}>जन्मतिथि :</dt>
                  <dd className={styles.profileValue}>15 अक्टूबर 1994</dd>
                </div>

                <div className={styles.profileRow}>
                  <dt className={styles.profileLabel}>वर्तमान पता :</dt>
                  <dd className={styles.profileValue}>वार्ड नं. 10, अशोक नगर, ओसा चौरहा, नगर पालिका परिषद, मझनपुर, कौशाम्बी</dd>
                </div>

                <div className={styles.profileRow}>
                  <dt className={styles.profileLabel}>बूथ संख्या :</dt>
                  <dd className={styles.profileValue}>35 (दुग्गांधी इंटर कॉलेज, ओसा चौरहा)</dd>
                </div>

                <div className={styles.profileRow}>
                  <dt className={styles.profileLabel}>विधान सभा क्षेत्र :</dt>
                  <dd className={styles.profileValue}>252 मझनपुर (सुरक्षित)</dd>
                </div>

                <div className={styles.profileRow}>
                  <dt className={styles.profileLabel}>लोक सभा क्षेत्र :</dt>
                  <dd className={styles.profileValue}>50 कौशाम्बी (सुरक्षित)</dd>
                </div>

                <div className={styles.profileRow}>
                  <dt className={styles.profileLabel}>शैक्षिक योग्यता :</dt>
                  <dd className={styles.profileValue}>एम.ए. (राजनीति शास्त्र), डी.एल.एड.</dd>
                </div>

                <div className={styles.profileRow}>
                  <dt className={styles.profileLabel}>मोबाइल नं. :</dt>
                  <dd className={styles.profileValue}>8299223340</dd>
                </div>

                <div className={styles.profileRow}>
                  <dt className={styles.profileLabel}>जाति :</dt>
                  <dd className={styles.profileValue}>क्षत्रिय (सोनकर), अनुसूचित जाति</dd>
                </div>
              </dl>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                <Link href="/achievements" className="btn btn-primary">उपलब्धियाँ देखें →</Link>
                <Link href="/jan-sunwai" className="btn btn-outline">जनसुनवाई में भाग लें</Link>
              </div>
            </div>

            <div className={`${styles.bioPhoto} reveal reveal-delay-1`}>
              <Image
                src="/Kalpana.jpeg"
                alt="कल्पना सोनकर"
                width={400}
                height={520}
                className={styles.bioImg}
              />
              <div className={styles.bioInfoCard}>
                <h3 className="hindi">कल्पना सोनकर</h3>
                <p className="hindi">जिला पंचायत अध्यक्ष, कौशाम्बी</p>
                <div className={styles.bioTags}>
                  <span className="badge badge-bjp">BJP</span>
                  <span className="badge badge-rose">कौशाम्बी</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className={`section ${styles.timelineSection}`} aria-label="राजनीतिक यात्रा">
        <div className="container">
          <header className="section-header reveal">
            <span className="label">राजनीतिक यात्रा</span>
            <h2 className="h2 hindi">संकल्प से सिद्धि तक</h2>
            <div className="divider"><span className="divider-dot" /></div>
          </header>

          <div className={styles.timeline}>
            {timeline.map((item, i) => (
              <div key={i} className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right} reveal reveal-delay-${(i % 4) + 1}`}>
                <div className={styles.timelineCard}>
                  <span className={styles.timelineYear}>{item.year}</span>
                  <h3 className={`h3 hindi ${styles.timelineTitle}`}>{item.title}</h3>
                  <p className={`body-sm hindi`} style={{ color: '#4b5563', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
                <div className={styles.timelineDot} aria-hidden="true" />
              </div>
            ))}
            <div className={styles.timelineLine} aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* LEADERSHIP ROLES */}
      <section className={`section ${styles.rolesSection}`} aria-label="नेतृत्व भूमिकाएँ">
        <div className="container">
          <header className="section-header reveal">
            <span className="label">दायित्व एवं भूमिकाएँ</span>
            <h2 className="h2 hindi">नेतृत्व के क्षेत्र</h2>
            <div className="divider"><span className="divider-dot" /></div>
          </header>

          <div className="grid-3">
            {roles.map((r, i) => (
              <article key={i} className={`card ${styles.roleCard} reveal reveal-delay-${(i % 3) + 1}`}>
                <span className={styles.roleIcon}>{r.icon}</span>
                <h3 className={`h3 hindi ${styles.roleTitle}`}>{r.title}</h3>
                <p className={`${styles.roleOrg}`}>{r.org}</p>
                <p className={`body-sm hindi`} style={{ lineHeight: 1.7, color: '#4b5563' }}>{r.desc}</p>
              </article>
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

      {/* QUOTE */}
      <section className={styles.quoteSection} aria-label="प्रेरणादायक उद्धरण">
        <div className="container">
          <blockquote className={`${styles.quote} reveal`}>
            <span className={styles.quoteIcon} aria-hidden="true">❝</span>
            <p className="hindi">
              एक महिला जब जागती है, तो पूरा परिवार जागता है। 
              जब परिवार जागता है, तो समाज बदलता है और देश आगे बढ़ता है।
            </p>
            <footer className={`${styles.quoteAuthor} hindi`}>— कल्पना सोनकर</footer>
          </blockquote>
        </div>
      </section>
    </>
  );
}
